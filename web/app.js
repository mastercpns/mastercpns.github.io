/* Master CPNS 2026 — logika aplikasi (offline penuh; TIU + TWK + TKP).
   Kunci jawaban dipakai HANYA di dalam fungsi gradeFor() untuk menghitung
   nilai; kunci tidak pernah ditulis ke layar mana pun. Pengecualian yang
   disengaja: contoh soal di MATERI belajar (materi.js, materi-twk-tkp.js)
   memang dibahas lengkap dengan jawabannya — itu contoh belajar yang
   BERBEDA dari soal latihan, bukan kunci soal latihan. */
(function () {
  'use strict';

  /* ================================================================
     OTENTIKASI & AKTIVASI AKUN (Master CPNS)
     ----------------------------------------------------------------
     Sistem login/aktivasi di depan aplikasi. Soal, level, bos, judul,
     dan materi belajar TIDAK disentuh oleh blok ini.
     Alur: buka aplikasi -> ada sesi tersimpan (localStorage key
     "mc_session") -> langsung Beranda (aplikasi bekerja OFFLINE penuh
     setelah login; belajar tidak diblokir bila server tidak
     terjangkau); tidak ada sesi -> layar otentikasi (Masuk / Daftar /
     Lupa Password) dan semua layar belajar disembunyikan.
     TIDAK ada mode bypass/demo yang melewati login.
     Server aktivasi — kontrak endpoint (JSON, timeout 10 detik):
       GET  /                              -> {ok, service, version, testMode}
       POST /api/promo/check   {code}      -> {ok, valid, price} (0/29500/59000)
       POST /api/payment/declare {email, promoCode?}
                                            -> {ok, status:"pending"|"confirmed", amount, message}
       GET  /api/payment/status?email=x    -> {ok, status:"none"|"pending"|"confirmed"|"rejected", amount, promoCode}
       POST /api/register {email, password, promoCode?}
                                            -> {ok, token, email, packages:["TIU"]}
       POST /api/trial/start {email, password, deviceId}
                                            -> {ok, token, email, packages, trial:true, trialExpiresAt}
                                              (trial gratis 1 hari; satu trial per email & per device)
       POST /api/trial/upgrade {token}     -> {ok, trial:false}
                                              (trial yang sudah bayar jadi berbayar, tanpa login ulang)
       POST /api/login {email, password}   -> {ok, token, email, packages, trial, trialExpiresAt}
       POST /api/forgot {email}            -> {ok, message} (kode reset dikirim
                                              manual oleh Bos via DM Instagram
                                              @ardicorianto)
       POST /api/reset {email, code, newPassword} -> {ok}
       POST /api/logout {token}            -> {ok}
       POST /api/session/check {token}     -> {ok, email, packages}
       GET  /api/packages                  -> {ok, packages:[{id:"TIU", name, price}]}
     Error server dipakai apa adanya (BELUM_BAYAR, KUOTA_HABIS,
     EMAIL_SUDAH_TERDAFTAR, KODE_BERBEDA, EMAIL_ATAU_PASSWORD_SALAH,
     AKUN_TIDAK_AKTIF, KODE_RESET_SALAH, SESI_TIDAK_VALID,
     KODE_TIDAK_DIKENAL, AKUN_DIHAPUS, TRIAL_SUDAH_DIGUNAKAN,
     TRIAL_PERANGKAT_SUDAH_DIGUNAKAN, DEVICE_ID_DIBUTUHKAN,
     TRIAL_HABIS) dan diterjemahkan ke Bahasa Indonesia.
     AKUN_DIHAPUS = akun dihapus admin karena tidak ada pembayaran yang
     valid. Pesannya DIKUNCI: "Akun kamu dihapus. Kalau mau pakai aplikasi
     ini, bayar dulu lalu daftar dari awal."
     TRIAL_HABIS = masa trial 1 hari habis. Aplikasi TIDAK auto-logout:
     tampilkan LAYAR TERKUNCI "bayar untuk lanjut" (sesi tetap ada,
     akun tidak dihapus, progres tetap tersimpan); setelah bayar +
     terkonfirmasi, aplikasi langsung terbuka lagi tanpa login ulang.
     ================================================================ */
  // GANTI ke URL server production saat deploy (di APK harus https).
  var SERVER_URL = "https://xgq9h8.bot-keep.xyz";
  var MC_SESSION_KEY = 'mc_session';
  var MC_SERVER_URL_KEY = 'mc_server_url'; // override URL server (untuk pengujian)
  var MC_PRICE_NORMAL = 59000;
  var MC_PRICE_STRIKE = 99000;
  var MC_PAY_WAIT_TEXT = 'Menunggu konfirmasi aktivasi maks. 10 menit.';
  var MC_PROOF_MAX_BYTES = 2 * 1024 * 1024; // bukti transfer maks 2 MB
  var MC_NET_ERROR = 'Tidak dapat terhubung ke server aktivasi. Periksa internetmu lalu coba lagi.';
  var MC_ERROR_TEXT = {
    'KODE_TIDAK_DIKENAL': 'Kode promo tidak dikenal. Periksa lagi kodenya.',
    'BELUM_BAYAR': 'Pembayaran belum terkonfirmasi. Selesaikan pembayaran dulu, lalu tunggu konfirmasi maks. 10 menit.',
    'KUOTA_HABIS': 'Kuota untuk kode promo ini sudah habis.',
    'EMAIL_SUDAH_TERDAFTAR': 'Email ini sudah terdaftar. Silakan masuk.',
    'KODE_BERBEDA': 'Kode promo tidak sesuai dengan pembayaran yang dideklarasikan.',
    'EMAIL_ATAU_PASSWORD_SALAH': 'Email atau password salah. Coba lagi.',
    'AKUN_TIDAK_AKTIF': 'Akun ini belum aktif. Selesaikan pembayaran dan aktivasi dulu.',
    'KODE_RESET_SALAH': 'Kode reset salah. Periksa lagi kodenya.',
    'SESI_TIDAK_VALID': 'Sesi sudah tidak berlaku. Silakan masuk lagi.',
    'AKUN_DIHAPUS': 'Akun kamu dihapus. Kalau mau pakai aplikasi ini, bayar dulu lalu daftar dari awal.',
    'TRIAL_SUDAH_DIGUNAKAN': 'Email ini sudah pernah memakai trial gratis 1 hari. Bayar Rp59.000 untuk lanjut.',
    'TRIAL_PERANGKAT_SUDAH_DIGUNAKAN': 'Perangkat ini sudah pernah memakai trial gratis 1 hari. Coba dengan perangkat lain, atau bayar Rp59.000 untuk lanjut.',
    'DEVICE_ID_DIBUTUHKAN': 'Tidak dapat membuat ID perangkat. Coba lagi.',
    'TRIAL_HABIS': 'Trial kamu habis \u2014 bayar Rp59.000 untuk lanjut. Progresmu tetap tersimpan.'
  };

  function mcServerUrl() {
    try {
      var override = localStorage.getItem(MC_SERVER_URL_KEY);
      if (override) return String(override).replace(/\/+$/, '');
    } catch (e) { /* abaikan */ }
    return SERVER_URL;
  }
  /* Satu panggilan API JSON dengan timeout 10 detik (AbortController).
     Gagal jaringan/timeout -> Error berkode 'NETWORK'. Error server
     (ok:false / status HTTP bukan 2xx) -> Error berkode error server. */
  function mcApi(path, method, body) {
    var ctrl = null, timer = null;
    var opts = { method: method || 'GET', headers: { 'Content-Type': 'application/json' } };
    if (body !== undefined && body !== null) opts.body = JSON.stringify(body);
    if (typeof AbortController !== 'undefined') {
      ctrl = new AbortController();
      opts.signal = ctrl.signal;
      timer = setTimeout(function () { ctrl.abort(); }, 10000);
    }
    return fetch(mcServerUrl() + path, opts).then(function (res) {
      if (timer) clearTimeout(timer);
      return res.text().then(function (txt) {
        var data = null;
        try { data = txt ? JSON.parse(txt) : null; } catch (e) { data = null; }
        if (!res.ok || !data || data.ok === false) {
          var code = (data && (data.error || data.code)) || ('HTTP_' + res.status);
          var err = new Error(code);
          err.code = code;
          err.serverMessage = data && (data.message || data.error);
          throw err;
        }
        return data;
      });
    }).catch(function (err) {
      if (timer) clearTimeout(timer);
      if (err && (err.name === 'AbortError' || err.name === 'TimeoutError')) {
        var t = new Error('NETWORK'); t.code = 'NETWORK'; throw t;
      }
      if (err && err.code) throw err;
      var n = new Error('NETWORK'); n.code = 'NETWORK'; throw n;
    });
  }
  function mcErrorText(err) {
    if (!err) return 'Terjadi kesalahan. Coba lagi.';
    if (err.code === 'NETWORK') return MC_NET_ERROR;
    if (err.code && MC_ERROR_TEXT[err.code]) return MC_ERROR_TEXT[err.code];
    if (err.serverMessage) return err.serverMessage;
    return 'Terjadi kesalahan. Coba lagi.';
  }
  function mcValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '');
  }
  function mcFormatRp(n) {
    if (n === 0) return 'Rp0';
    return 'Rp' + Number(n).toLocaleString('id-ID');
  }
  function mcLoadSession() {
    try {
      var raw = localStorage.getItem(MC_SESSION_KEY);
      if (!raw) return null;
      var s = JSON.parse(raw);
      if (s && s.email && s.token) return s;
    } catch (e) { /* abaikan */ }
    return null;
  }
  function mcSaveSession(s) {
    try { localStorage.setItem(MC_SESSION_KEY, JSON.stringify(s)); } catch (e) { /* abaikan */ }
  }
  function mcClearSession() {
    try { localStorage.removeItem(MC_SESSION_KEY); } catch (e) { /* abaikan */ }
  }
  /* Pesan di bawah form. kind: 'error' | 'ok' | 'info'. Bila retryFn
     diberikan (khusus gagal terhubung ke server), tampilkan tombol
     "Coba Lagi" yang mengulang aksi terakhir. */
  function mcSetMsg(el, text, kind, retryFn) {
    if (!el) return;
    el.className = 'auth-msg' + (kind ? ' ' + kind : '');
    el.innerHTML = '';
    if (!text) { el.style.display = 'none'; return; }
    el.style.display = 'block';
    var span = document.createElement('span');
    span.textContent = text;
    el.appendChild(span);
    if (retryFn) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'auth-retry'; b.textContent = 'Coba Lagi';
      b.addEventListener('click', function () { retryFn(); });
      el.appendChild(b);
    }
  }
  function mcSetBusy(id, busy) {
    var el = document.getElementById(id);
    if (el) el.disabled = !!busy;
  }

  /* Sesi saat ini (null bila belum login). */
  var Auth = {
    session: mcLoadSession(),
    isLoggedIn: function () { return !!Auth.session; }
  };
  /* Status pendaftaran yang sedang berjalan di tab Daftar. */
  var mcReg = { price: MC_PRICE_NORMAL, promoCode: '', payStatus: 'none', payEmail: '', payTimer: null, proofDataUrl: null, proofName: '' };
  var mcForgotEmail = '';

  function mcUpdatePriceUI() {
    var box = document.getElementById('reg-price');
    if (box) {
      box.innerHTML = '';
      var s = document.createElement('s');
      s.textContent = mcFormatRp(MC_PRICE_STRIKE);
      var b = document.createElement('b');
      b.textContent = mcReg.price === 0 ? 'Rp0 \u2014 GRATIS' : mcFormatRp(mcReg.price);
      box.appendChild(s);
      box.appendChild(document.createTextNode(' '));
      box.appendChild(b);
    }
    var qr = document.getElementById('reg-pay-qr');
    if (qr) qr.style.display = mcReg.price === 0 ? 'none' : 'block';
    var free = document.getElementById('reg-pay-free');
    if (free) free.style.display = mcReg.price === 0 ? 'block' : 'none';
    var proof = document.getElementById('reg-pay-proof');
    if (proof) proof.style.display = mcReg.price === 0 ? 'none' : 'block';
    var declareBtn = document.getElementById('btn-declare');
    if (declareBtn) declareBtn.textContent = mcReg.price === 0 ? 'Aktifkan Pendaftaran Gratis' : 'Saya Sudah Bayar';
  }
  /* Tombol Daftar hanya aktif bila pembayaran sudah "confirmed".
     Saat confirmed, tampilkan banner BESAR "Sudah Aktif" (2026-11-27,
     perintah Bos) supaya pembeli langsung tahu statusnya. */
  function mcUpdateRegisterUI() {
    var btn = document.getElementById('btn-register');
    if (btn) btn.disabled = mcReg.payStatus !== 'confirmed';
    var note = document.getElementById('reg-register-note');
    if (note) note.style.display = mcReg.payStatus === 'confirmed' ? 'none' : 'block';
    var active = document.getElementById('reg-pay-active');
    if (active) {
      active.style.display = mcReg.payStatus === 'confirmed' ? 'block' : 'none';
      if (mcReg.payStatus === 'confirmed') {
        var at = document.getElementById('reg-active-title');
        if (at) at.textContent = mcReg.price === 0 ? 'Pendaftaran Gratis Aktif' : 'Pembayaran Berhasil';
        var as = document.getElementById('reg-active-sub');
        if (as) as.textContent = 'Akun Anda Sudah Aktif';
      }
    }
    var st = document.getElementById('reg-pay-status');
    if (st) {
      st.textContent = mcReg.payStatus === 'confirmed' ? 'Pembayaran terkonfirmasi. Silakan daftar.'
        : mcReg.payStatus === 'pending' ? MC_PAY_WAIT_TEXT
        : mcReg.payStatus === 'rejected' ? 'Pembayaran ditolak. Hubungi admin lewat DM Instagram @ardicorianto.'
        : '';
    }
  }
  function mcStopPayPoll() {
    if (mcReg.payTimer) { clearInterval(mcReg.payTimer); mcReg.payTimer = null; }
  }
  /* Cek otomatis tiap 20 detik selama tab Daftar terbuka dan status
     masih pending. */
  function mcStartPayPoll() {
    mcStopPayPoll();
    mcReg.payTimer = setInterval(function () {
      var panel = document.getElementById('auth-panel-register');
      if (!panel || panel.style.display === 'none') { mcStopPayPoll(); return; }
      if (mcReg.payStatus === 'pending') mcCheckPayment(false, true);
    }, 20000);
  }
  function mcCheckPayment(manual, silent) {
    var email = (document.getElementById('reg-email').value || '').trim().toLowerCase();
    if (!mcValidEmail(email)) {
      if (manual) mcSetMsg(document.getElementById('reg-msg'), 'Masukkan alamat email yang benar dulu di atas, contoh: nama@gmail.com', 'error');
      return;
    }
    if (manual) mcSetMsg(document.getElementById('reg-msg'), 'Memeriksa status pembayaran...', 'info');
    mcApi('/api/payment/status?email=' + encodeURIComponent(email), 'GET').then(function (d) {
      mcReg.payStatus = d.status || 'none';
      mcReg.payEmail = email;
      if (d.status === 'confirmed') {
        mcStopPayPoll();
        mcSetMsg(document.getElementById('reg-msg'), 'Pembayaran terkonfirmasi. Silakan daftar.', 'ok');
      } else if (d.status === 'pending') {
        mcSetMsg(document.getElementById('reg-msg'), MC_PAY_WAIT_TEXT, 'info');
      } else if (d.status === 'rejected') {
        mcStopPayPoll();
        mcSetMsg(document.getElementById('reg-msg'), 'Pembayaran ditolak. Hubungi admin lewat DM Instagram @ardicorianto.', 'error');
      } else {
        mcSetMsg(document.getElementById('reg-msg'), 'Belum ada pembayaran untuk email ini. Bayar dulu dengan QR di atas, lalu tekan "Saya Sudah Bayar".', 'info');
      }
      mcUpdateRegisterUI();
    }).catch(function (err) {
      if (!silent) mcSetMsg(document.getElementById('reg-msg'), mcErrorText(err), 'error', err.code === 'NETWORK' ? function () { mcCheckPayment(true, false); } : null);
    });
  }
  function mcApplyPromo() {
    var code = (document.getElementById('reg-promo').value || '').trim().toUpperCase();
    if (!code) { mcSetMsg(document.getElementById('reg-msg'), 'Masukkan kode promo dulu.', 'error'); return; }
    mcSetMsg(document.getElementById('reg-msg'), 'Memeriksa kode promo...', 'info');
    mcApi('/api/promo/check', 'POST', { code: code }).then(function (d) {
      if (!d.valid) {
        mcReg.promoCode = ''; mcReg.price = MC_PRICE_NORMAL; mcReg.payStatus = 'none';
        mcStopPayPoll();
        mcUpdatePriceUI(); mcUpdateRegisterUI();
        mcSetMsg(document.getElementById('reg-msg'), 'Kode promo tidak dikenal. Periksa lagi kodenya.', 'error');
        return;
      }
      mcReg.promoCode = code;
      mcReg.price = (typeof d.price === 'number') ? d.price : MC_PRICE_NORMAL;
      mcReg.payStatus = 'none';
      mcStopPayPoll();
      mcUpdatePriceUI(); mcUpdateRegisterUI();
      mcSetMsg(document.getElementById('reg-msg'),
        mcReg.price === 0 ? 'Kode dipakai. Pendaftaran GRATIS \u2014 tidak perlu membayar.'
        : 'Kode dipakai. Harga yang harus dibayar: ' + mcFormatRp(mcReg.price) + '.', 'ok');
    }).catch(function (err) {
      mcSetMsg(document.getElementById('reg-msg'), mcErrorText(err), 'error', err.code === 'NETWORK' ? mcApplyPromo : null);
    });
  }
  /* Bukti transfer: pilih foto (gambar saja, maks 2 MB), tampilkan
     pratinjau kecil, kirim sebagai base64 bersama declare. Opsional. */
  function mcClearProof() {
    mcReg.proofDataUrl = null;
    mcReg.proofName = '';
    var input = document.getElementById('reg-proof');
    if (input) input.value = '';
    var prev = document.getElementById('reg-proof-preview');
    if (prev) { prev.src = ''; prev.style.display = 'none'; }
    var note = document.getElementById('reg-proof-note');
    if (note) { note.textContent = ''; note.style.display = 'none'; }
  }
  function mcHandleProofFile(file) {
    if (!file) return;
    if (!/^image\//.test(file.type || '')) {
      mcSetMsg(document.getElementById('reg-msg'), 'Bukti harus berupa gambar (foto/screenshot).', 'error');
      mcClearProof();
      return;
    }
    if (file.size > MC_PROOF_MAX_BYTES) {
      mcSetMsg(document.getElementById('reg-msg'), 'Ukuran bukti maksimal 2 MB. Pilih foto yang lebih kecil.', 'error');
      mcClearProof();
      return;
    }
    var reader = new FileReader();
    reader.onload = function () {
      mcReg.proofDataUrl = String(reader.result || '');
      mcReg.proofName = file.name || 'bukti.png';
      var prev = document.getElementById('reg-proof-preview');
      if (prev) { prev.src = mcReg.proofDataUrl; prev.style.display = 'block'; }
      var note = document.getElementById('reg-proof-note');
      if (note) {
        note.textContent = 'Bukti dipilih: ' + mcReg.proofName + ' (' + Math.round(file.size / 1024) + ' KB).';
        note.style.display = 'block';
      }
    };
    reader.onerror = function () {
      mcSetMsg(document.getElementById('reg-msg'), 'Foto bukti tidak bisa dibaca. Coba pilih lagi.', 'error');
      mcClearProof();
    };
    reader.readAsDataURL(file);
  }
  function mcDeclarePayment() {
    var email = (document.getElementById('reg-email').value || '').trim().toLowerCase();
    if (!mcValidEmail(email)) { mcSetMsg(document.getElementById('reg-msg'), 'Masukkan alamat email yang benar dulu di atas, contoh: nama@gmail.com', 'error'); return; }
    mcSetMsg(document.getElementById('reg-msg'), 'Mengirim konfirmasi pembayaran...', 'info');
    var body = { email: email };
    if (mcReg.promoCode) body.promoCode = mcReg.promoCode;
    if (mcReg.proofDataUrl) { body.proof = mcReg.proofDataUrl; body.proofName = mcReg.proofName; }
    mcApi('/api/payment/declare', 'POST', body).then(function (d) {
      mcReg.payEmail = email;
      if (d.status === 'confirmed') {
        mcReg.payStatus = 'confirmed';
        mcStopPayPoll();
        mcSetMsg(document.getElementById('reg-msg'), 'Pembayaran terkonfirmasi. Silakan daftar.', 'ok');
      } else {
        mcReg.payStatus = 'pending';
        mcSetMsg(document.getElementById('reg-msg'), d.message || MC_PAY_WAIT_TEXT, 'info');
        mcStartPayPoll();
      }
      mcUpdateRegisterUI();
    }).catch(function (err) {
      mcSetMsg(document.getElementById('reg-msg'), mcErrorText(err), 'error', err.code === 'NETWORK' ? mcDeclarePayment : null);
    });
  }
  function mcDoLogin() {
    var email = (document.getElementById('login-email').value || '').trim().toLowerCase();
    var pass = document.getElementById('login-password').value || '';
    if (!mcValidEmail(email)) { mcSetMsg(document.getElementById('login-msg'), 'Masukkan alamat email yang benar, contoh: nama@gmail.com', 'error'); return; }
    if (!pass) { mcSetMsg(document.getElementById('login-msg'), 'Masukkan password.', 'error'); return; }
    mcSetMsg(document.getElementById('login-msg'), 'Memeriksa...', 'info');
    mcSetBusy('btn-login', true);
    mcApi('/api/login', 'POST', { email: email, password: pass }).then(function (d) {
      Auth.session = { email: d.email || email, token: d.token, packages: d.packages || ['TIU'], trial: d.trial === true, trialExpiresAt: d.trialExpiresAt || null };
      mcSaveSession(Auth.session);
      mcSetMsg(document.getElementById('login-msg'), '', '');
      mcEnterApp();
    }).catch(function (err) {
      if (err && err.code === 'TRIAL_HABIS') {
        /* Trial habis & sedang tidak login: arahkan ke tab Daftar supaya
           bisa bayar + naik kelas (daftar ulang dengan password sama).
           Progres tetap tersimpan di perangkat. */
        var re = document.getElementById('reg-email');
        if (re) re.value = email;
        mcSwitchAuthTab('register');
        mcSetMsg(document.getElementById('login-msg'), 'Trial kamu habis \u2014 bayar Rp59.000 untuk lanjut.', 'error');
        mcSetMsg(document.getElementById('reg-msg'), 'Trial kamu habis \u2014 bayar Rp59.000 untuk lanjut. Progresmu tetap tersimpan.', 'info');
        return;
      }
      mcSetMsg(document.getElementById('login-msg'), mcErrorText(err), 'error', err.code === 'NETWORK' ? mcDoLogin : null);
    }).then(function () { mcSetBusy('btn-login', false); });
  }
  function mcDoRegister() {
    var email = (document.getElementById('reg-email').value || '').trim().toLowerCase();
    var pass = document.getElementById('reg-password').value || '';
    var pass2 = document.getElementById('reg-password2').value || '';
    if (!mcValidEmail(email)) { mcSetMsg(document.getElementById('reg-msg'), 'Masukkan alamat email yang benar, contoh: nama@gmail.com', 'error'); return; }
    if (pass.length < 6) { mcSetMsg(document.getElementById('reg-msg'), 'Password minimal 6 karakter.', 'error'); return; }
    if (pass !== pass2) { mcSetMsg(document.getElementById('reg-msg'), 'Konfirmasi password tidak sama.', 'error'); return; }
    if (mcReg.payStatus !== 'confirmed') {
      mcSetMsg(document.getElementById('reg-msg'), 'Selesaikan pembayaran dulu, lalu tunggu konfirmasi maks. 10 menit.', 'error');
      return;
    }
    mcSetMsg(document.getElementById('reg-msg'), 'Mendaftarkan...', 'info');
    mcSetBusy('btn-register', true);
    var body = { email: email, password: pass };
    if (mcReg.promoCode) body.promoCode = mcReg.promoCode;
    mcApi('/api/register', 'POST', body).then(function (d) {
      Auth.session = { email: d.email || email, token: d.token, packages: d.packages || ['TIU'], trial: d.trial === true, trialExpiresAt: d.trialExpiresAt || null };
      mcSaveSession(Auth.session);
      mcSetMsg(document.getElementById('reg-msg'), '', '');
      mcEnterApp();
    }).catch(function (err) {
      mcSetMsg(document.getElementById('reg-msg'), mcErrorText(err), 'error', err.code === 'NETWORK' ? mcDoRegister : null);
    }).then(function () { mcSetBusy('btn-register', false); });
  }
  /* ================================================================
     TRIAL GRATIS 1 HARI (dikunci Bos 2026-11-28)
     ----------------------------------------------------------------
     - Tombol "Coba Gratis 1 Hari" di tab Daftar, di BAWAH kotak
       pembayaran, TERPISAH dari tombol Daftar dan SELALU AKTIF
       (tidak menunggu status bayar). Memakai email + password yang
       sudah diisi di form Daftar; daftar akun trial ke server, lalu
       langsung masuk aplikasi.
     - Trial = AKSES PENUH 24 jam sejak daftar (semua jalur, level,
       bos, materi, simulasi CAT, Simulasi SKD + Ranking SKD).
     - Satu trial per email DAN satu trial per perangkat. Device ID:
       ID acak yang menetap, dibuat saat pertama jalan, disimpan di
       localStorage key "mc_device_id", dikirim hanya saat daftar
       trial. IP hanya dicatat server sebagai sinyal (bukan blokir).
       Aturan satu-perangkat HANYA untuk trial — akun berbayar TIDAK
       dikunci ke perangkat (satu akun bisa dipakai Android + iPhone).
     - Saat trial habis (DIKUNCI Bos 2026-11-28): TIDAK auto-logout.
       Aplikasi menampilkan LAYAR TERKUNCI "Trial kamu habis — bayar
       Rp59.000 untuk lanjut", lengkap dengan QRIS + "Saya Sudah
       Bayar" + cek status (alur bayar biasa). Pengguna TIDAK perlu
       login/daftar ulang; progres tetap tersimpan; begitu bayar +
       terkonfirmasi, aplikasi langsung terbuka lagi tanpa login ulang
       (upgrade pakai token sesi: /api/trial/upgrade). Akun TIDAK
       dihapus saat trial habis — hanya terkunci sampai bayar.
     - Pengecekan kedaluwarsa HANYA saat online (cek sesi di startup
       + berkala tiap 60 detik saat online). Kalau HP offline,
       penguncian baru jalan saat online lagi — prinsip yang sama
       dengan AKUN_DIHAPUS. Jam lokal TIDAK PERNAH mengunci aplikasi
       sendiri (banner hanya menampilkan sisa waktu).
     ================================================================ */
  var MC_DEVICE_ID_KEY = 'mc_device_id';
  var mcTrialLocked = false;
  var mcUpgradeMode = false;
  var mcTrialTimer = null;
  var mcTrialTick = 0;
  /* Status bayar di layar terkunci (cermin mcReg, tapi memakai email
     dari sesi — pengguna sudah login, tidak perlu isi email lagi). */
  var mcLock = { price: MC_PRICE_NORMAL, promoCode: '', payStatus: 'none', payTimer: null, proofDataUrl: null, proofName: '' };

  /* ID perangkat acak yang menetap (dibuat sekali, disimpan). */
  function mcGetDeviceId() {
    try {
      var id = localStorage.getItem(MC_DEVICE_ID_KEY);
      if (id && /^dev-[0-9a-f]{32}$/.test(id)) return id;
      var hex = '';
      var chars = '0123456789abcdef';
      for (var i = 0; i < 32; i++) hex += chars[Math.floor(Math.random() * 16)];
      id = 'dev-' + hex;
      localStorage.setItem(MC_DEVICE_ID_KEY, id);
      return id;
    } catch (e) {
      return '';
    }
  }
  /* Daftar akun trial dari form Daftar (email + password yang diisi). */
  function mcDoTrialStart() {
    var email = (document.getElementById('reg-email').value || '').trim().toLowerCase();
    var pass = document.getElementById('reg-password').value || '';
    var pass2 = document.getElementById('reg-password2').value || '';
    if (!mcValidEmail(email)) { mcSetMsg(document.getElementById('reg-msg'), 'Masukkan alamat email yang benar, contoh: nama@gmail.com', 'error'); return; }
    if (pass.length < 6) { mcSetMsg(document.getElementById('reg-msg'), 'Password minimal 6 karakter.', 'error'); return; }
    if (pass !== pass2) { mcSetMsg(document.getElementById('reg-msg'), 'Konfirmasi password tidak sama.', 'error'); return; }
    mcSetMsg(document.getElementById('reg-msg'), 'Mendaftarkan trial gratis 1 hari...', 'info');
    mcSetBusy('btn-trial', true);
    mcApi('/api/trial/start', 'POST', { email: email, password: pass, deviceId: mcGetDeviceId() }).then(function (d) {
      Auth.session = { email: d.email || email, token: d.token, packages: d.packages || ['TIU'], trial: d.trial === true, trialExpiresAt: d.trialExpiresAt || null };
      mcSaveSession(Auth.session);
      mcSetMsg(document.getElementById('reg-msg'), '', '');
      mcEnterApp();
    }).catch(function (err) {
      mcSetMsg(document.getElementById('reg-msg'), mcErrorText(err), 'error', err.code === 'NETWORK' ? mcDoTrialStart : null);
    }).then(function () { mcSetBusy('btn-trial', false); });
  }
  /* Teks sisa waktu trial (tampilan saja — tidak mengunci). */
  function mcTrialRemainingText() {
    var exp = Auth.session && Auth.session.trialExpiresAt ? Date.parse(Auth.session.trialExpiresAt) : 0;
    if (!exp || isNaN(exp)) return 'Trial Gratis \u2014 akses penuh 1 hari.';
    var ms = exp - Date.now();
    if (ms <= 0) return 'Trial habis \u2014 sambungkan internet, lalu bayar untuk lanjut.';
    var h = Math.floor(ms / 3600000), m = Math.floor((ms % 3600000) / 60000);
    return 'Trial Gratis \u2014 sisa ' + (h > 0 ? h + ' jam ' + m + ' mnt' : m + ' mnt') + '.';
  }
  /* Banner trial di Beranda: tampil hanya untuk akun trial. */
  function mcUpdateTrialUI() {
    var banner = document.getElementById('trial-banner');
    if (!banner) return;
    var isTrial = !!(Auth.session && Auth.session.trial);
    banner.style.display = isTrial ? 'flex' : 'none';
    if (!isTrial) return;
    var txt = document.getElementById('trial-banner-text');
    if (txt) txt.textContent = mcTrialRemainingText();
  }
  /* Pengawas trial: tiap 30 detik perbarui teks banner; tiap 60 detik
     (tiap tick genap) cek sesi ke server BILA online — server yang
     memutuskan TRIAL_HABIS. Offline: tidak ada yang dikunci. */
  function mcStartTrialWatch() {
    mcStopTrialWatch();
    mcTrialTick = 0;
    mcTrialTimer = setInterval(function () {
      mcUpdateTrialUI();
      mcTrialTick++;
      if (mcTrialTick % 2 === 0) mcVerifySession();
    }, 30000);
  }
  function mcStopTrialWatch() {
    if (mcTrialTimer) { clearInterval(mcTrialTimer); mcTrialTimer = null; }
  }
  /* Kunci aplikasi saat trial habis: tampilkan layar terkunci, sesi
     TETAP ADA (tidak logout), akun TIDAK dihapus, progres tetap ada. */
  function mcLockTrial() {
    if (!Auth.session || mcTrialLocked) return;
    mcTrialLocked = true;
    mcStopTrialWatch();
    mcStopPayPoll();
    document.body.classList.add('trial-locked');
    mcLockReset();
    showScreen('trial-locked');
  }
  /* --- Alur bayar di layar terkunci (cermin alur tab Daftar) --- */
  function mcLockUpdatePriceUI() {
    var box = document.getElementById('lock-price');
    if (box) {
      box.innerHTML = '';
      var s = document.createElement('s');
      s.textContent = mcFormatRp(MC_PRICE_STRIKE);
      var b = document.createElement('b');
      b.textContent = mcLock.price === 0 ? 'Rp0 \u2014 GRATIS' : mcFormatRp(mcLock.price);
      box.appendChild(s);
      box.appendChild(document.createTextNode(' '));
      box.appendChild(b);
    }
    var qr = document.getElementById('lock-pay-qr');
    if (qr) qr.style.display = mcLock.price === 0 ? 'none' : 'block';
    var free = document.getElementById('lock-pay-free');
    if (free) free.style.display = mcLock.price === 0 ? 'block' : 'none';
    var proof = document.getElementById('lock-pay-proof');
    if (proof) proof.style.display = mcLock.price === 0 ? 'none' : 'block';
    var declareBtn = document.getElementById('btn-lock-declare');
    if (declareBtn) declareBtn.textContent = mcLock.price === 0 ? 'Aktifkan Pendaftaran Gratis' : 'Saya Sudah Bayar';
  }
  function mcLockUpdateStatusUI() {
    var st = document.getElementById('lock-pay-status');
    if (st) {
      st.textContent = mcLock.payStatus === 'confirmed' ? 'Pembayaran terkonfirmasi. Membuka aplikasi...'
        : mcLock.payStatus === 'pending' ? MC_PAY_WAIT_TEXT
        : mcLock.payStatus === 'rejected' ? 'Pembayaran ditolak. Hubungi admin lewat DM Instagram @ardicorianto.'
        : '';
    }
  }
  function mcLockStopPayPoll() {
    if (mcLock.payTimer) { clearInterval(mcLock.payTimer); mcLock.payTimer = null; }
  }
  function mcLockStartPayPoll() {
    mcLockStopPayPoll();
    mcLock.payTimer = setInterval(function () {
      if (!mcTrialLocked || mcLock.payStatus !== 'pending') { mcLockStopPayPoll(); return; }
      mcLockCheckPayment(false, true);
    }, 20000);
  }
  function mcLockCheckPayment(manual, silent) {
    var email = Auth.session && Auth.session.email;
    if (!email) { if (manual) mcSetMsg(document.getElementById('lock-msg'), 'Sesi tidak ditemukan. Silakan masuk lagi.', 'error'); return; }
    if (manual) mcSetMsg(document.getElementById('lock-msg'), 'Memeriksa status pembayaran...', 'info');
    mcApi('/api/payment/status?email=' + encodeURIComponent(email), 'GET').then(function (d) {
      mcLock.payStatus = d.status || 'none';
      if (d.status === 'confirmed') {
        mcLockStopPayPoll();
        mcSetMsg(document.getElementById('lock-msg'), 'Pembayaran terkonfirmasi. Membuka aplikasi...', 'ok');
        mcLockUpdateStatusUI();
        mcTrialUpgrade();
      } else if (d.status === 'pending') {
        mcSetMsg(document.getElementById('lock-msg'), MC_PAY_WAIT_TEXT, 'info');
        mcLockUpdateStatusUI();
      } else if (d.status === 'rejected') {
        mcLockStopPayPoll();
        mcSetMsg(document.getElementById('lock-msg'), 'Pembayaran ditolak. Hubungi admin lewat DM Instagram @ardicorianto.', 'error');
        mcLockUpdateStatusUI();
      } else {
        mcSetMsg(document.getElementById('lock-msg'), 'Belum ada pembayaran untuk email ini. Bayar dulu dengan QR di atas, lalu tekan "Saya Sudah Bayar".', 'info');
        mcLockUpdateStatusUI();
      }
    }).catch(function (err) {
      if (!silent) mcSetMsg(document.getElementById('lock-msg'), mcErrorText(err), 'error', err.code === 'NETWORK' ? function () { mcLockCheckPayment(true, false); } : null);
    });
  }
  function mcLockApplyPromo() {
    var code = (document.getElementById('lock-promo').value || '').trim().toUpperCase();
    if (!code) { mcSetMsg(document.getElementById('lock-msg'), 'Masukkan kode promo dulu.', 'error'); return; }
    mcSetMsg(document.getElementById('lock-msg'), 'Memeriksa kode promo...', 'info');
    mcApi('/api/promo/check', 'POST', { code: code }).then(function (d) {
      if (!d.valid) {
        mcLock.promoCode = ''; mcLock.price = MC_PRICE_NORMAL; mcLock.payStatus = 'none';
        mcLockStopPayPoll();
        mcLockUpdatePriceUI(); mcLockUpdateStatusUI();
        mcSetMsg(document.getElementById('lock-msg'), 'Kode promo tidak dikenal. Periksa lagi kodenya.', 'error');
        return;
      }
      mcLock.promoCode = code;
      mcLock.price = (typeof d.price === 'number') ? d.price : MC_PRICE_NORMAL;
      mcLock.payStatus = 'none';
      mcLockStopPayPoll();
      mcLockUpdatePriceUI(); mcLockUpdateStatusUI();
      mcSetMsg(document.getElementById('lock-msg'),
        mcLock.price === 0 ? 'Kode dipakai. Pendaftaran GRATIS \u2014 tidak perlu membayar.'
        : 'Kode dipakai. Harga yang harus dibayar: ' + mcFormatRp(mcLock.price) + '.', 'ok');
    }).catch(function (err) {
      mcSetMsg(document.getElementById('lock-msg'), mcErrorText(err), 'error', err.code === 'NETWORK' ? mcLockApplyPromo : null);
    });
  }
  function mcLockClearProof() {
    mcLock.proofDataUrl = null;
    mcLock.proofName = '';
    var input = document.getElementById('lock-proof');
    if (input) input.value = '';
    var prev = document.getElementById('lock-proof-preview');
    if (prev) { prev.src = ''; prev.style.display = 'none'; }
    var note = document.getElementById('lock-proof-note');
    if (note) { note.textContent = ''; note.style.display = 'none'; }
  }
  function mcLockHandleProofFile(file) {
    if (!file) return;
    if (!/^image\//.test(file.type || '')) {
      mcSetMsg(document.getElementById('lock-msg'), 'Bukti harus berupa gambar (foto/screenshot).', 'error');
      mcLockClearProof();
      return;
    }
    if (file.size > MC_PROOF_MAX_BYTES) {
      mcSetMsg(document.getElementById('lock-msg'), 'Ukuran bukti maksimal 2 MB. Pilih foto yang lebih kecil.', 'error');
      mcLockClearProof();
      return;
    }
    var reader = new FileReader();
    reader.onload = function () {
      mcLock.proofDataUrl = String(reader.result || '');
      mcLock.proofName = file.name || 'bukti.png';
      var prev = document.getElementById('lock-proof-preview');
      if (prev) { prev.src = mcLock.proofDataUrl; prev.style.display = 'block'; }
      var note = document.getElementById('lock-proof-note');
      if (note) {
        note.textContent = 'Bukti dipilih: ' + mcLock.proofName + ' (' + Math.round(file.size / 1024) + ' KB).';
        note.style.display = 'block';
      }
    };
    reader.onerror = function () {
      mcSetMsg(document.getElementById('lock-msg'), 'Foto bukti tidak bisa dibaca. Coba pilih lagi.', 'error');
      mcLockClearProof();
    };
    reader.readAsDataURL(file);
  }
  function mcLockDeclare() {
    var email = Auth.session && Auth.session.email;
    if (!email) { mcSetMsg(document.getElementById('lock-msg'), 'Sesi tidak ditemukan. Silakan masuk lagi.', 'error'); return; }
    mcSetMsg(document.getElementById('lock-msg'), 'Mengirim konfirmasi pembayaran...', 'info');
    var body = { email: email };
    if (mcLock.promoCode) body.promoCode = mcLock.promoCode;
    if (mcLock.proofDataUrl) { body.proof = mcLock.proofDataUrl; body.proofName = mcLock.proofName; }
    mcApi('/api/payment/declare', 'POST', body).then(function (d) {
      if (d.status === 'confirmed') {
        mcLock.payStatus = 'confirmed';
        mcLockStopPayPoll();
        mcSetMsg(document.getElementById('lock-msg'), 'Pembayaran terkonfirmasi. Membuka aplikasi...', 'ok');
        mcLockUpdateStatusUI();
        mcTrialUpgrade();
      } else {
        mcLock.payStatus = 'pending';
        mcSetMsg(document.getElementById('lock-msg'), d.message || MC_PAY_WAIT_TEXT, 'info');
        mcLockUpdateStatusUI();
        mcLockStartPayPoll();
      }
    }).catch(function (err) {
      mcSetMsg(document.getElementById('lock-msg'), mcErrorText(err), 'error', err.code === 'NETWORK' ? mcLockDeclare : null);
    });
  }
  /* Naik kelas dari trial jadi berbayar TANPA login ulang: token sesi
     yang masih tersimpan membuktikan kepemilikan akun. */
  function mcTrialUpgrade() {
    if (!Auth.session || !Auth.session.token) return;
    mcApi('/api/trial/upgrade', 'POST', { token: Auth.session.token }).then(function (d) {
      Auth.session.trial = false;
      Auth.session.trialExpiresAt = null;
      if (d.packages) Auth.session.packages = d.packages;
      mcSaveSession(Auth.session);
      mcTrialLocked = false;
      document.body.classList.remove('trial-locked');
      mcLockStopPayPoll();
      mcEnterApp();
    }).catch(function (err) {
      mcSetMsg(document.getElementById('lock-msg'), mcErrorText(err), 'error', err.code === 'NETWORK' ? mcTrialUpgrade : null);
    });
  }
  function mcLockReset() {
    mcLock.price = MC_PRICE_NORMAL;
    mcLock.promoCode = '';
    mcLock.payStatus = 'none';
    mcLockStopPayPoll();
    mcLockClearProof();
    var promo = document.getElementById('lock-promo');
    if (promo) promo.value = '';
    mcLockUpdatePriceUI();
    mcLockUpdateStatusUI();
    mcSetMsg(document.getElementById('lock-msg'), '', '');
  }
  /* Mode upgrade: akun trial yang masih aktif membayar lewat tab Daftar
     (tombol "Bayar Sekarang" di banner Beranda). Layar otentikasi
     dibuka khusus untuk ini walau sudah login; tab Masuk disembunyikan
     dan hanya tab Daftar yang dipakai. Naik kelas lewat /api/register
     (password sama) — progres tetap tersimpan. */
  function mcUpdateUpgradeModeUI() {
    var loginTab = document.getElementById('auth-tab-login');
    if (loginTab) loginTab.style.display = mcUpgradeMode ? 'none' : '';
    var note = document.getElementById('reg-upgrade-note');
    if (note) note.style.display = mcUpgradeMode ? 'block' : 'none';
    if (mcUpgradeMode) mcSwitchAuthTab('register');
  }
  function mcShowPayUpgrade() {
    if (!Auth.session) return;
    mcUpgradeMode = true;
    var em = document.getElementById('reg-email');
    if (em) em.value = Auth.session.email || '';
    mcUpdateUpgradeModeUI();
    showScreen('auth');
    mcSetMsg(document.getElementById('reg-msg'), 'Akun trial \u2014 bayar Rp59.000 untuk lanjut tanpa batas waktu. Progresmu tetap tersimpan.', 'info');
  }
  function mcDoForgotRequest() {
    var email = (document.getElementById('forgot-email').value || '').trim().toLowerCase();
    if (!mcValidEmail(email)) { mcSetMsg(document.getElementById('forgot-msg'), 'Masukkan alamat email yang benar, contoh: nama@gmail.com', 'error'); return; }
    mcSetMsg(document.getElementById('forgot-msg'), 'Meminta kode reset...', 'info');
    mcSetBusy('btn-forgot-request', true);
    mcApi('/api/forgot', 'POST', { email: email }).then(function (d) {
      mcForgotEmail = email;
      document.getElementById('forgot-reset-box').style.display = 'block';
      mcSetMsg(document.getElementById('forgot-msg'),
        (d.message || 'Kode reset telah dibuat.') + ' Kode reset akan dikirim admin lewat DM Instagram @ardicorianto \u2014 minta kodenya ke sana.', 'ok');
    }).catch(function (err) {
      mcSetMsg(document.getElementById('forgot-msg'), mcErrorText(err), 'error', err.code === 'NETWORK' ? mcDoForgotRequest : null);
    }).then(function () { mcSetBusy('btn-forgot-request', false); });
  }
  function mcDoForgotReset() {
    var email = mcForgotEmail || (document.getElementById('forgot-email').value || '').trim().toLowerCase();
    var code = (document.getElementById('forgot-code').value || '').trim();
    var pass = document.getElementById('forgot-newpass').value || '';
    if (!mcValidEmail(email)) { mcSetMsg(document.getElementById('forgot-msg'), 'Masukkan alamat email yang benar dulu di atas.', 'error'); return; }
    if (!/^\d{6}$/.test(code)) { mcSetMsg(document.getElementById('forgot-msg'), 'Masukkan kode reset 6 digit.', 'error'); return; }
    if (pass.length < 6) { mcSetMsg(document.getElementById('forgot-msg'), 'Password baru minimal 6 karakter.', 'error'); return; }
    mcSetMsg(document.getElementById('forgot-msg'), 'Mengubah password...', 'info');
    mcSetBusy('btn-forgot-reset', true);
    mcApi('/api/reset', 'POST', { email: email, code: code, newPassword: pass }).then(function () {
      document.getElementById('forgot-reset-box').style.display = 'none';
      document.getElementById('forgot-code').value = '';
      document.getElementById('forgot-newpass').value = '';
      mcSwitchAuthTab('login');
      var loginEmail = document.getElementById('login-email');
      if (loginEmail) loginEmail.value = email;
      showScreen('auth');
      mcSetMsg(document.getElementById('login-msg'), 'Password berhasil diubah. Silakan login dengan password baru.', 'ok');
    }).catch(function (err) {
      mcSetMsg(document.getElementById('forgot-msg'), mcErrorText(err), 'error', err.code === 'NETWORK' ? mcDoForgotReset : null);
    }).then(function () { mcSetBusy('btn-forgot-reset', false); });
  }
  function mcDoLogout() {
    var token = Auth.session && Auth.session.token;
    if (token) mcApi('/api/logout', 'POST', { token: token }).catch(function () { /* abaikan gagal */ });
    Auth.session = null;
    mcClearSession();
    mcStopPayPoll();
    mcStopTrialWatch();
    mcLockStopPayPoll();
    mcTrialLocked = false;
    document.body.classList.remove('trial-locked');
    mcUpgradeMode = false;
    mcUpdateUpgradeModeUI();
    mcShowAuth();
    mcSwitchAuthTab('login');
  }
  function mcSwitchAuthTab(tab) {
    var loginOn = tab === 'login';
    var tl = document.getElementById('auth-tab-login');
    var tr = document.getElementById('auth-tab-register');
    if (tl) tl.classList.toggle('on', loginOn);
    if (tr) tr.classList.toggle('on', !loginOn);
    var pl = document.getElementById('auth-panel-login');
    var pr = document.getElementById('auth-panel-register');
    if (pl) pl.style.display = loginOn ? 'block' : 'none';
    if (pr) pr.style.display = loginOn ? 'none' : 'block';
    if (loginOn) mcStopPayPoll();
    else if (mcReg.payStatus === 'pending') mcStartPayPoll();
  }
  /* Masuk ke aplikasi setelah login/daftar: sembunyikan layar
     otentikasi, tampilkan Beranda. Belajar jalan OFFLINE penuh. */
  function mcEnterApp() {
    mcStopPayPoll();
    mcLockStopPayPoll();
    mcTrialLocked = false;
    document.body.classList.remove('trial-locked');
    mcUpgradeMode = false;
    mcUpdateUpgradeModeUI();
    mcStopTrialWatch();
    if (Auth.session && Auth.session.trial) mcStartTrialWatch();
    document.body.classList.remove('auth-locked');
    var ae = document.getElementById('about-email');
    if (ae) ae.textContent = Auth.session ? 'Masuk sebagai ' + Auth.session.email : '';
    showScreen('home');
  }
  /* Keluar ke layar otentikasi: semua layar belajar disembunyikan. */
  function mcShowAuth() {
    mcStopPayPoll();
    mcStopTrialWatch();
    mcLockStopPayPoll();
    document.body.classList.add('auth-locked');
    showScreen('auth');
  }
  /* Verifikasi token diam-diam bila online. HANYA kode AKUN_DIHAPUS
     yang mengeluarkan pengguna (akunnya dihapus admin karena tidak ada
     pembayaran yang valid): sesi lokal dihapus, kembali ke layar login
     dengan pesan yang DIKUNCI. TRIAL_HABIS TIDAK mengeluarkan pengguna:
     aplikasi menampilkan LAYAR TERKUNCI "bayar untuk lanjut" (sesi
     tetap tersimpan; setelah bayar langsung terbuka lagi tanpa login
     ulang). Semua kegagalan lain (tidak ada internet, timeout,
     SESI_TIDAK_VALID, error server lain) = abaikan, tetap pakai sesi
     lokal supaya belajar tidak terblokir — pengguna OFFLINE TIDAK
     BOLEH ter-logout dan TIDAK BOLEH terkunci. Jangan pernah logout
     pada kegagalan umum. */
  function mcVerifySession() {
    if (!Auth.session) return;
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return;
    mcApi('/api/session/check', 'POST', { token: Auth.session.token }).then(function (d) {
      if (d && d.packages) {
        Auth.session.packages = d.packages;
        if (d.email) Auth.session.email = d.email;
        if (typeof d.trial !== 'undefined') Auth.session.trial = d.trial === true;
        if (typeof d.trialExpiresAt !== 'undefined') Auth.session.trialExpiresAt = d.trialExpiresAt || null;
        mcSaveSession(Auth.session);
        mcUpdateTrialUI();
      }
    }).catch(function (err) {
      if (err && err.code === 'AKUN_DIHAPUS') {
        Auth.session = null;
        mcClearSession();
        mcStopPayPoll();
        mcShowAuth();
        mcSwitchAuthTab('login');
        mcSetMsg(document.getElementById('login-msg'),
          'Akun kamu dihapus. Kalau mau pakai aplikasi ini, bayar dulu lalu daftar dari awal.', 'error');
      } else if (err && err.code === 'TRIAL_HABIS') {
        /* Trial habis: KUNCI layar (bayar untuk lanjut) — JANGAN logout.
           Sesi tetap tersimpan supaya setelah bayar aplikasi langsung
           terbuka lagi tanpa login ulang. */
        mcLockTrial();
      }
      /* selain AKUN_DIHAPUS/TRIAL_HABIS: abaikan, tetap pakai sesi lokal */
    });
  }
  /* Gerbang startup — dipanggil di akhir file setelah state aplikasi
     siap (showScreen butuh state). */
  function mcInitAuth() {
    mcSwitchAuthTab('login');
    mcUpdatePriceUI();
    mcUpdateRegisterUI();
    if (Auth.session) { mcEnterApp(); mcVerifySession(); }
    else { mcShowAuth(); }
  }
  /* --- Pasang pendengar layar otentikasi (DOM sudah ada: script di akhir body) --- */
  (function mcWireAuth() {
    function on(id, ev, fn) {
      var el = document.getElementById(id);
      if (el) el.addEventListener(ev, fn);
    }
    function enterOn(id, fn) {
      var el = document.getElementById(id);
      if (el) el.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); fn(); } });
    }
    on('auth-tab-login', 'click', function () { mcSwitchAuthTab('login'); });
    on('auth-tab-register', 'click', function () { mcSwitchAuthTab('register'); });
    on('btn-login', 'click', mcDoLogin);
    on('btn-register', 'click', mcDoRegister);
    on('btn-trial', 'click', mcDoTrialStart);
    on('btn-trial-banner-pay', 'click', mcShowPayUpgrade);
    on('btn-lock-promo', 'click', mcLockApplyPromo);
    on('btn-lock-declare', 'click', mcLockDeclare);
    on('lock-proof', 'change', function (e) { mcLockHandleProofFile(e.target.files && e.target.files[0]); });
    on('btn-lock-check-pay', 'click', function () { mcLockCheckPayment(true, false); });
    on('btn-trial-locked-logout', 'click', mcDoLogout);
    on('btn-promo', 'click', mcApplyPromo);
    on('btn-declare', 'click', mcDeclarePayment);
    on('reg-proof', 'change', function (e) { mcHandleProofFile(e.target.files && e.target.files[0]); });
    on('btn-check-pay', 'click', function () { mcCheckPayment(true, false); });
    /* Tombol lanjut di banner "Sudah Aktif" = sama dengan Daftar. */
    on('btn-active-continue', 'click', mcDoRegister);
    /* Email diubah setelah status bayar didapat -> status itu milik email
       lama; reset supaya tombol Daftar tidak aktif untuk email yang belum
       bayar/terkonfirmasi. (Server tetap menolak register tanpa bayar;
       ini menjaga UI tidak menyesatkan.) */
    on('reg-email', 'input', function () {
      var cur = (document.getElementById('reg-email').value || '').trim().toLowerCase();
      if ((mcReg.payStatus === 'confirmed' || mcReg.payStatus === 'pending') && mcReg.payEmail && cur !== mcReg.payEmail) {
        mcReg.payStatus = 'none';
        mcReg.payEmail = '';
        mcStopPayPoll();
        mcClearProof();
        mcUpdateRegisterUI();
        mcSetMsg(document.getElementById('reg-msg'), 'Email diubah. Periksa lagi status pembayaran untuk email ini.', 'info');
      }
    });
    on('link-forgot', 'click', function () { showScreen('forgot'); });
    on('btn-forgot-request', 'click', mcDoForgotRequest);
    on('btn-forgot-reset', 'click', mcDoForgotReset);
    on('btn-forgot-back', 'click', function () { showScreen('auth'); mcSwitchAuthTab('login'); });
    on('btn-logout', 'click', mcDoLogout);
    enterOn('login-password', mcDoLogin);
    enterOn('login-email', mcDoLogin);
    enterOn('reg-password2', mcDoRegister);
    enterOn('forgot-newpass', mcDoForgotReset);
  })();
  /* Pegangan untuk pengujian/QA (bukan bypass: hanya baca status). */
  window.MC_AUTH = {
    isLoggedIn: function () { return Auth.isLoggedIn(); },
    serverUrl: mcServerUrl,
    trial: function () { return !!(Auth.session && Auth.session.trial); },
    trialExpiresAt: function () { return (Auth.session && Auth.session.trialExpiresAt) || null; },
    trialLocked: function () { return mcTrialLocked; },
    deviceId: mcGetDeviceId
  };

  /* Fitur Cek Update DIHAPUS di v2.4 atas permintaan Bos (2026-11-26):
     aplikasi tidak lagi mengambil version.json dan tidak ada lagi
     tombol Cek Update / Update di menu Tentang. Update selanjutnya
     diunduh manual dari halaman penjualan. */

  var LS_KEY = 'tiu_questions_v2';
  var MASTERY_LS_KEY = 'tiu_mastery_v2';
  var HISTORY_LS_KEY = 'tiu_history_v2';
  var TITLE_LS_KEY = 'tiu_title_v2'; // kunci lama (satu gelar) — hanya dibaca untuk migrasi ke daftar gelar
  var TITLES_LS_KEY = 'tiu_titles_v2';
  var BOSS_LS_KEY = 'tiu_boss_v2';
  var WRONG_LS_KEY = 'tiu_wrong_v2';
  var ANSWERS_LS_KEY = 'tiu_answers_v2';
  var HISTORY_MAX = 50; // riwayat per level butuh ruang lebih dari 10 entri
  /* Kuota set campuran (Verbal 10 / Numerik 13 / Figural 7) — dipakai
     buildMixedSet, varian set acak dari bank (bukan set bos). */
  var SIM_QUOTAS = { silogisme: 4, induktif: 3, analitis: 3, berhitung: 3, deret: 4,
    perbandingan: 3, cerita: 3, serial: 3, analogi: 2, matriks: 2 };
  function mulberry32(seed) {
    var a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function shuffleWith(arr, rnd) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rnd() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }
  /* ================================================================
     TIGA JALUR TERPISAH: TIU / TWK / TKP (LOCKED Bos 2026-11-27)
     Tiap jalur punya: bank soal sendiri, level + bos sendiri, progres
     sendiri, bank Soal yang Salah sendiri, riwayat sendiri, dan
     simulasi CAT sendiri. TIDAK PERNAH digabung antar jalur.
     - TIU: 10 level + 5 bos, benar x 5, PG 80, 450 soal.
     - TWK: 5 level + 5 bos, benar x 5, PG 65, 300 soal.
     - TKP: 6 level + 5 bos, tiap jawaban dinilai skor opsinya 1-5,
       PG 166 HANYA untuk simulasi CAT 45 soal (maks 225); bos TKP
       (30 soal, maks 150) lulus HANYA dengan nilai SEMPURNA 150.
       Bos TIU/TWK juga lulus hanya dengan nilai sempurna 150.
     ID soal bertabrakan antar jalur (TIU 1..450, TWK 1..300,
     TKP 1..330), jadi pelacak per-soal memakai kunci gabungan:
     TIU memakai id polos (kompatibel data lama), TWK/TKP memakai
     "TWK:<id>" / "TKP:<id>".
     ================================================================ */
  var TRACKS = {
    TIU: { name: 'TIU', label: 'Tes Intelegensi Umum', passing: 80, scoring: 'correct5', simCount: 30, simMinutes: 30 },
    TWK: { name: 'TWK', label: 'Tes Wawasan Kebangsaan', passing: 65, scoring: 'correct5', simCount: 30, simMinutes: 30 },
    TKP: { name: 'TKP', label: 'Tes Karakteristik Pribadi', passing: 166, scoring: 'tkp', simCount: 45, simMinutes: 45 }
  };
  var TRACK_ORDER = ['TIU', 'TWK', 'TKP'];
  var TWK_ORDER = [
    { key: 'nasionalisme', name: 'Nasionalisme', cat: 'Nasionalisme' },
    { key: 'integritas', name: 'Integritas', cat: 'Integritas' },
    { key: 'bela-negara', name: 'Bela Negara', cat: 'Bela Negara' },
    { key: 'empat-konsensus', name: 'Empat Konsensus Kebangsaan', cat: 'Empat Konsensus Kebangsaan' },
    { key: 'bahasa-indonesia', name: 'Bahasa Indonesia', cat: 'Bahasa Indonesia' }
  ];
  var TKP_ORDER = [
    { key: 'pelayanan-publik', name: 'Pelayanan Publik', cat: 'Pelayanan Publik' },
    { key: 'jejaring-kerja', name: 'Jejaring Kerja', cat: 'Jejaring Kerja' },
    { key: 'sosial-budaya', name: 'Sosial Budaya', cat: 'Sosial Budaya' },
    { key: 'adaptasi-tik', name: 'Adaptasi TIK', cat: 'Adaptasi TIK' },
    { key: 'profesionalisme', name: 'Profesionalisme', cat: 'Profesionalisme' },
    { key: 'anti-radikalisme', name: 'Anti Radikalisme', cat: 'Anti Radikalisme' }
  ];
  function trackOrderOf(track) {
    if (track === 'TWK') return TWK_ORDER;
    if (track === 'TKP') return TKP_ORDER;
    return MASTERY_ORDER;
  }
  function trackQuestionsOf(track) {
    if (track === 'TWK') return state.qbank.TWK;
    if (track === 'TKP') return state.qbank.TKP;
    return state.qbank.TIU;
  }
  function trackLevelCat(track, key) {
    if (track === 'TIU') return masteryCat(key);
    var o = trackOrderOf(track).filter(function (m) { return m.key === key; })[0];
    return o ? o.cat : '';
  }
  /* Soal satu level (sub-materi) pada satu jalur: TIU memakai pemetaan
     masteryOf(type); TWK/TKP memakai field cat bank (tiap cat = 30 soal
     level, soal bos disaring). */
  function trackLevelQuestions(track, key) {
    if (track === 'TIU') return masteryQuestionsOf(state.qbank.TIU, key);
    var cat = trackLevelCat(track, key);
    return state.qbank[track].filter(function (q) { return q.cat === cat && !q.boss; })
      .slice().sort(function (a, b) { return a.id - b.id; });
  }
  function trackLevelMax(track, key) { return trackLevelQuestions(track, key).length * 5; }
  /* Kunci pelacak per-soal: TIU id polos (data lama + QA lama), TWK/TKP
     "TRACK:id" supaya id yang sama di jalur lain tidak tertukar. */
  function tbKey(track, id) { return track === 'TIU' ? id : track + ':' + id; }
  function tbIsCorrect(tb, track, id) { return !!(tb && tb.correct && tb.correct[tbKey(track, id)]); }
  function tbIsTried(tb, track, id) { return !!(tb && tb.tried && tb.tried[tbKey(track, id)]); }
  /* Kelompok jenis soal satu level: TIU memakai jenisGroupsOf (khusus
     silogisme); TWK/TKP memakai tiap nilai field `type` sebagai kelompok. */
  function typeGroupsOf(track, key) {
    if (track === 'TIU') return jenisGroupsOf(state.qbank.TIU, key);
    var qs = trackLevelQuestions(track, key);
    var groups = [], byName = {};
    qs.forEach(function (q) {
      var g = byName[q.type];
      if (!g) { g = { name: q.type, count: 0, subs: [] }; byName[q.type] = g; groups.push(g); }
      g.count++;
    });
    return groups;
  }
  /* Set campuran baru: 30 soal dari bank (di luar 30 soal lama, id > 30),
     varian set acak (bukan set bos): soal bos tidak boleh bocor ke dalamnya.
     mengikuti kuota per sub-materi; bila satu sub-materi kurang, dilengkapi
     dari sub-materi lain dalam kemampuan yang sama supaya komposisi 10/13/7
     tetap terjaga. Hasil akhirnya diacak supaya sub-materi tercampur. */
  function buildMixedSet(questions, seed) {
    var rnd = mulberry32(seed || 1);
    // Hanya soal non-bos (id > 30, bukan soal bos B1-B5): set campuran
    // adalah varian acak dari bank, soal bos tidak boleh bocor ke dalamnya.
    var fresh = questions.filter(function (q) { return q.id > 30 && !q.boss; });
    var used = {};
    var set = [];
    Object.keys(SIM_QUOTAS).forEach(function (key) {
      var pool = shuffleWith(masteryQuestionsOf(questions, key).filter(function (q) { return q.id > 30; }), rnd);
      var take = Math.min(SIM_QUOTAS[key], pool.length);
      for (var i = 0; i < take; i++) { set.push(pool[i]); used[pool[i].id] = true; }
    });
    var catQuota = { Verbal: 10, Numerik: 13, Figural: 7 };
    Object.keys(catQuota).forEach(function (cat) {
      var have = set.filter(function (q) { return q.cat === cat; }).length;
      var pool = shuffleWith(fresh.filter(function (q) { return q.cat === cat && !used[q.id]; }), rnd);
      var i = 0;
      while (have < catQuota[cat] && i < pool.length) { set.push(pool[i]); used[pool[i].id] = true; have++; i++; }
    });
    return shuffleWith(set, rnd);
  }
  /* BOS 1 terbuka hanya bila ke-10 level sudah 100% (agregat per jenis
     atau skor terbaik lama — lihat levelPerfect). tb = pelacak per jenis
     (opsional; tanpa tb hanya skor terbaik lama yang dipakai). */
  function bossUnlocked(best, questions, tb, track) {
    track = track || 'TIU';
    return trackOrderOf(track).every(function (m) {
      return levelPerfect(m.key, questions, best, tb, track);
    });
  }
  /* Gelar bertingkat (DIKUNCI Bos 2026-11-26): satu gelar per bos, hanya
     untuk nilai SEMPURNA (30/30) di bos itu. Tiap bos = 30 soal baru
     (B1-01..B5-30). */
  var BOSS_TITLES = { 1: 'Ahli TIU', 2: 'Spesialis TIU', 3: 'Pakar TIU', 4: 'Guru TIU', 5: 'Master TIU' };
  var BOSS_TITLES_TWK = { 1: 'Ahli TWK', 2: 'Spesialis TWK', 3: 'Pakar TWK', 4: 'Guru TWK', 5: 'Master TWK' };
  var BOSS_TITLES_TKP = { 1: 'Ahli TKP', 2: 'Spesialis TKP', 3: 'Pakar TKP', 4: 'Guru TKP', 5: 'Master TKP' };
  function bossTitlesFor(track) {
    if (track === 'TWK') return BOSS_TITLES_TWK;
    if (track === 'TKP') return BOSS_TITLES_TKP;
    return BOSS_TITLES;
  }
  function bossTitleFor(a, b) {
    if (typeof a === 'number') return BOSS_TITLES[a] || null; // kompatibel QA lama: bossTitleFor(tier)
    return (bossTitlesFor(a) || {})[b] || null;
  }
  /* Nomor urut soal bos dari code ("B2-24" -> 24). Soal bos di bank JSON
     tidak berurutan per bos, jadi pengurutan set bos memakai code ini,
     bukan id numerik. */
  function bossNumOf(q) {
    var m = /-(\d+)$/.exec(String(q.code || ''));
    return m ? parseInt(m[1], 10) : q.id;
  }
  /* Set soal satu bos, urut B?-01..B?-30. Tiap bos = 30 soal baru
     (field boss = 1..5, code B1-01..B5-30). */
  function bossQuestionsOf(questions, tier) {
    return questions.filter(function (q) { return q.boss === tier; })
      .slice().sort(function (a, b) { return bossNumOf(a) - bossNumOf(b); });
  }
  /* Gerbang berurutan SEMPURNA: Bos 1 butuh 10 level nilai 100;
     Bos N (N>1) butuh Bos N-1 sempurna (30/30). bossScores: {tier: skor}. */
  function bossUnlockedTier(tier, best, bossScores, questions, tb, track) {
    track = track || 'TIU';
    if (tier === 1) return bossUnlocked(best, questions, tb, track);
    if (tier < 2 || tier > 5) return false;
    var prev = (bossScores || {})[tier - 1];
    return prev === 150;
  }
  /* Gelar untuk satu hasil bos: hanya bila mode simulasi, 30 soal, 30/30. */
  /* Gelar untuk satu hasil bos: hanya bila mode simulasi, 30 soal, 30/30,
     DAN set yang dikerjakan adalah set bos asli ('bosN') pada jalur yang
     benar. PENJAGA simSet (LOCKED): set campuran ('campuran') atau
     simulasi CAT ('sim-TIU' dst.) TIDAK PERNAH memberi gelar — nilai
     sempurna di sana tidak membuka bos dan tidak memberi gelar.
     simSet undefined = pemanggilan lama (QA v3): perilaku lama dipertahankan. */
  function titleForBossResult(tier, origin, mode, score, max, simSet, track) {
    if (origin !== 'exam' || mode !== 'exam' || max !== 150 || score !== 150) return null;
    if (simSet !== undefined && simSet !== 'bos' + tier) return null;
    if (track !== undefined && TRACK_ORDER.indexOf(track) === -1) return null;
    return bossTitleFor(track || 'TIU', tier);
  }
  /* Urutan pilihan jawaban untuk satu sesi perbaikan ("Soal yang Salah"):
     tiap soal mendapat permutasi A-E baru, dibuat segar tiap sesi supaya
     urutan jawaban tidak bisa dihafal/ditebak dari percobaan sebelumnya.
     Hasil: {idSoal: [indeksAsli...]} — indeks 0..4 dalam urutan tampil. */
  function buildRepairOptionOrderWith(set, rnd) {
    var order = {};
    set.forEach(function (q) { order[q.id] = shuffleWith([0, 1, 2, 3, 4], rnd); });
    return order;
  }
  function buildRepairOptionOrder(set) { return buildRepairOptionOrderWith(set, Math.random); }
  function attachRepairShuffle(exam) {
    if (exam && exam.mode === 'repair') exam.optOrder = buildRepairOptionOrder(exam.set);
    return exam;
  }
  /* Gelar hanya untuk level bos yang diselesaikan SEMPURNA (30/30 benar). */
  function shouldAwardTitle(origin, score, max) {
    return origin === 'exam' && max === 150 && score === 150;
  }
  var PASSING = 80;
  var EXAM_SECONDS = 30 * 60;
  /* ---------- Simulasi SKD (110 soal, 100 menit) ----------
     Set soal dari skd-questions.js (SKD_QUESTIONS): TWK 30 (nomor 1-30),
     TIU 35 (31-65), TKP 45 (66-110). id = nomor simulasi 1..110 (unik).
     Gelar Master CPNS lewat simulasi: lulus ketiga PG ATAU total >= 500.
     Bingkai logo Beranda (keputusan Bos 2026-11-28, dikunci): bingkai
     EMAS (laurel + mahkota) HANYA bila total simulasi >= 500; gelar
     Master CPNS lewat Bos 5 (TIU+TWK+TKP) mendapat bingkai SAFIR
     sendiri (boss-frame, biru — bukan emas); bila keduanya tercapai,
     emas yang menang. Penanda jalur bos: flag MASTER_BOSS_LS_KEY,
     diset saat gelar diberikan lewat Bos 5 (lihat finishExam). */
  var SKD_SECONDS = 100 * 60;
  var SKD_BEST_LS_KEY = 'tiu_skd_best_v1';
  var SKD_PG = { TWK: 65, TIU: 80, TKP: 166 };
  function loadSkdBest() {
    try {
      var raw = localStorage.getItem(SKD_BEST_LS_KEY);
      if (raw) { var o = JSON.parse(raw); if (o && typeof o.total === 'number') return o; }
    } catch (e) { /* abaikan */ }
    return null;
  }
  function saveSkdBest(b) {
    try { localStorage.setItem(SKD_BEST_LS_KEY, JSON.stringify(b || {})); } catch (e) { /* abaikan */ }
  }
  function skdGold() { var b = loadSkdBest(); return !!(b && b.total >= 500); }
  /* ---------- Bingkai Bos 5 (keputusan Bos 2026-11-28, dikunci) ----------
     Gelar Master CPNS lewat Bos 5 (mengalahkan Bos 5 ketiga jalur
     TIU+TWK+TKP, track 'ALL') mendapat bingkai SAFIR sendiri — JELAS
     BERBEDA dari bingkai emas simulasi (bukan emas/laurel/mahkota).
     Penanda asal jalur bos disimpan di localStorage saat gelar itu
     diberikan (finishExam). Fallback: gelar Master CPNS tersimpan
     dengan track 'ALL' juga berarti jalur bos (gelar yang diraih
     sebelum flag ini ada). Gelar lewat simulasi (track 'SKD') TIDAK
     PERNAH menyetel flag ini, jadi kedua bingkai tidak tertukar.
     Aturan tampil (homeFrame): emas menang bila keduanya tercapai. */
  var MASTER_BOSS_LS_KEY = 'tiu_master_boss_v1';
  function loadMasterBossFlag() {
    try { return localStorage.getItem(MASTER_BOSS_LS_KEY) === '1'; } catch (e) { return false; }
  }
  function saveMasterBossFlag() {
    try { localStorage.setItem(MASTER_BOSS_LS_KEY, '1'); } catch (e) { /* abaikan */ }
  }
  function isMasterBoss() {
    if (loadMasterBossFlag()) return true;
    return loadTitles().some(function (t) { return t.title === 'Master CPNS' && t.track === 'ALL'; });
  }
  function homeFrame() {
    if (skdGold()) return 'gold';
    if (isMasterBoss() && hasMasterCpns(loadTitles())) return 'boss';
    return '';
  }
  function skdBank() {
    try {
      if (typeof SKD_QUESTIONS !== 'undefined') return SKD_QUESTIONS;
    } catch (e) { /* abaikan */ }
    return [];
  }
  /* ---------- Ranking SKD (server-side) ----------
     Nilai dikirim ke server setelah simulasi selesai; server yang
     menilai dari 110 jawaban (bukan klaim klien). Nama tampil = email
     TERSAMAR (huruf pertama + *** + domain) untuk peserta LAIN.
     PENGECUALIAN (keputusan Bos 2026-11-28, dikunci): baris SENDIRI
     menampilkan email LENGKAP (tidak disamarkan), disorot (class
     'mine'), plus peringkatnya langsung ("Peringkat #X dari N
     peserta"). Email lengkap peserta lain TIDAK PERNAH tampil.
     Bila offline: nilai disimpan sebagai tertunda dan dikirim saat
     Ranking SKD dibuka dalam keadaan online; layar hasil tidak
     pernah diblokir, dan layar hasil TIDAK menampilkan angka
     peringkat (peringkat hanya di layar Ranking SKD). */
  var SKD_PENDING_LS_KEY = 'tiu_skd_pending_v1';
  var skdRankingReturn = 'mastery'; // layar kembali dari Ranking SKD
  function skdMaskEmail(email) {
    var e = String(email || '');
    var at = e.indexOf('@');
    if (at <= 0) return '***';
    return e.charAt(0) + '***@' + e.slice(at + 1);
  }
  function skdLoadPending() {
    try {
      var raw = localStorage.getItem(SKD_PENDING_LS_KEY);
      if (raw) { var o = JSON.parse(raw); if (o && typeof o === 'object') return o; }
    } catch (e) { /* abaikan */ }
    return null;
  }
  function skdSavePending(answers) {
    /* Hanya jawaban ujian PERTAMA yang boleh tertunda; jangan timpa
       jawaban pertama yang sedang menunggu dikirim. */
    try {
      if (localStorage.getItem(SKD_PENDING_LS_KEY)) return;
      localStorage.setItem(SKD_PENDING_LS_KEY, JSON.stringify(answers || {}));
    } catch (e) { /* abaikan */ }
  }
  function skdClearPending() {
    try { localStorage.removeItem(SKD_PENDING_LS_KEY); } catch (e) { /* abaikan */ }
  }
  function mcSubmitSkd(answers) {
    var note = $('skd-submit-note');
    function setNote(t) { if (note) note.textContent = t; }
    if (!Auth.session || !Auth.session.token) {
      setNote('Login diperlukan untuk mengirim nilai ke Ranking SKD.');
      return;
    }
    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
      skdSavePending(answers);
      setNote('Kamu sedang offline \u2014 nilai belum terkirim ke Ranking SKD. Buka Ranking SKD saat online untuk mengirimnya.');
      return;
    }
    mcApi('/api/skd/submit', 'POST', { token: Auth.session.token, answers: answers || {} }).then(function (d) {
      skdClearPending();
      setNote('Nilai terkirim ke Ranking SKD. Lihat peringkatmu di menu Ujian.');
    }).catch(function (err) {
      if (err && err.code === 'SESI_TIDAK_VALID') {
        skdClearPending();
        setNote('Sesi berakhir \u2014 login ulang untuk mengirim nilai ke Ranking SKD.');
      } else if (err && err.code === 'NETWORK') {
        skdSavePending(answers);
        setNote('Tidak dapat terhubung ke server ranking \u2014 nilai belum terkirim. Buka Ranking SKD saat online untuk mengirimnya.');
      } else {
        skdSavePending(answers);
        setNote('Ranking SKD belum tersedia \u2014 nilai akan dikirim saat kamu membuka Ranking SKD.');
      }
    });
  }
  function loadSkdRanking() {
    var list = $('ranking-list');
    var totalEl = $('ranking-total');
    var note = $('ranking-note');
    if (!list) return;
    function setNote(t) {
      if (!note) return;
      note.style.display = t ? 'block' : 'none';
      note.textContent = t || '';
    }
    list.innerHTML = '<p class="muted">Memuat ranking\u2026</p>';
    if (totalEl) totalEl.textContent = '';
    setNote('');
    function fetchRanking() {
      return mcApi('/api/skd/ranking', 'GET').then(function (d) {
        var rows = d.ranking || [];
        if (totalEl) totalEl.textContent = 'Total Peserta: ' + d.total + ' orang';
        list.innerHTML = '';
        if (rows.length === 0) {
          list.innerHTML = '<p class="muted">Belum ada peserta ranking. Jadilah yang pertama!</p>';
          return;
        }
        var mine = Auth.session ? skdMaskEmail(Auth.session.email) : '';
        var totalPeserta = d.total;
        rows.forEach(function (r) {
          var isMine = r.name === mine;
          var div = document.createElement('div');
          div.className = 'rank-row' + (isMine ? ' mine' : '');
          /* Baris sendiri: email LENGKAP (tidak disamarkan) + peringkat
             langsung. Baris orang lain: tetap nama tersamar dari server. */
          var who = isMine && Auth.session ? esc(Auth.session.email) : esc(r.name);
          div.innerHTML = '<span class="rank-pos">#' + r.rank + '</span>' +
            '<span class="rank-who"><b>' + who + '</b>' + (isMine ? ' (kamu)' : '') +
            '<span>TWK ' + r.twk + ' &middot; TIU ' + r.tiu + ' &middot; TKP ' + r.tkp + '</span>' +
            (isMine ? '<span class="rank-mine">Peringkat #' + r.rank + ' dari ' + totalPeserta + ' peserta</span>' : '') + '</span>' +
            '<span class="rank-score">' + r.total + '</span>';
          list.appendChild(div);
        });
      });
    }
    function failNote(err) {
      if (err && err.code === 'NETWORK') setNote('Ranking butuh internet. Periksa koneksimu lalu tekan Muat Ulang Ranking.');
      else setNote('Ranking SKD belum tersedia di server. Coba lagi nanti.');
      list.innerHTML = '';
      if (totalEl) totalEl.textContent = '';
    }
    // Kirim dulu nilai yang tertunda (bila ada), baru muat ranking.
    var pending = skdLoadPending();
    var online = typeof navigator === 'undefined' || navigator.onLine !== false;
    if (pending && Auth.session && Auth.session.token && online) {
      mcApi('/api/skd/submit', 'POST', { token: Auth.session.token, answers: pending }).then(function () {
        skdClearPending();
        return fetchRanking();
      }).catch(function (err) {
        if (err && err.code === 'SESI_TIDAK_VALID') skdClearPending();
        return fetchRanking();
      }).catch(failNote);
    } else {
      fetchRanking().catch(failNote);
    }
  }

  /* ---------- Jalur Penguasaan: 10 sub-materi (KepmenPANRB 674/2026) ---------- */
  var MASTERY_ORDER = [
    { key: 'silogisme', name: 'Silogisme' },
    { key: 'induktif', name: 'Penalaran Induktif' },
    { key: 'analitis', name: 'Analitis' },
    { key: 'berhitung', name: 'Berhitung' },
    { key: 'deret', name: 'Deret Angka' },
    { key: 'perbandingan', name: 'Perbandingan Kuantitatif' },
    { key: 'cerita', name: 'Soal Cerita' },
    { key: 'serial', name: 'Serial' },
    { key: 'analogi', name: 'Analogi Gambar' },
    { key: 'matriks', name: 'Penalaran Matriks' }
  ];

  /* Pemetaan subtype soal (field `type`) ke sub-materi jalur penguasaan.
     Sengaja toleran terhadap label lama v1 (mis. 'Silogisme', 'Deret Angka',
     'Analogi Gambar') dan label baru dari JSON ('Silogisme: Semua + Semua',
     'Deret angka bertingkat'). 'Analogi kata' dan 'Ketidaksamaan' tidak
     masuk jalur ini — keduanya tetap ada di Latihan per Jenis Soal. */
  function masteryOf(type) {
    var t = String(type == null ? '' : type).toLowerCase();
    if (t.indexOf('silogisme') === 0) return 'silogisme';
    if (t === 'penalaran induktif') return 'induktif';
    if (t === 'analitis' || t === 'penguat/pelemah argumen') return 'analitis';
    if (t.indexOf('berhitung') === 0 || t === 'mencari hasil yang sama') return 'berhitung';
    if (t.indexOf('deret angka') === 0 || t === 'deret fibonacci' || t === 'deret huruf' ||
        t === 'deret/pola dalam tabel') return 'deret';
    if (t === 'perbandingan kuantitatif' || t === 'kecukupan data') return 'perbandingan';
    if (t.indexOf('soal cerita') === 0) return 'cerita';
    if (t === 'serial') return 'serial';
    if (t === 'analogi gambar') return 'analogi';
    if (t === 'penalaran matriks') return 'matriks';
    return null;
  }
  /* Kelompok jenis soal tingkat atas dalam satu sub-materi, untuk daftar
     jenis di detail sub-materi. Silogisme: 7 bentuk baku — 'Jika–Maka'
     menampung 5 sub-bentuknya. Sub-materi lain: tiap subtype jadi 1 kelompok. */
  function jenisGroupsOf(questions, key) {
    var qs = masteryQuestionsOf(questions, key);
    var groups = [], byName = {};
    qs.forEach(function (q) {
      var top = q.type, sub = null;
      if (key === 'silogisme') {
        var rest = q.type.replace(/^Silogisme:\s*/, '');
        var parts = rest.split(' \u2014 ');
        top = parts[0];
        sub = parts.length > 1 ? parts.slice(1).join(' \u2014 ') : null;
      }
      var g = byName[top];
      if (!g) { g = { name: top, count: 0, subs: [], bySub: {} }; byName[top] = g; groups.push(g); }
      g.count++;
      if (sub) {
        if (!g.bySub[sub]) { g.bySub[sub] = { name: sub, count: 0 }; g.subs.push(g.bySub[sub]); }
        g.bySub[sub].count++;
      }
    });
    groups.forEach(function (g) { delete g.bySub; });
    if (key === 'silogisme') {
      // Urutan kanonik 7 bentuk baku (bukan urutan kemunculan di bank)
      var order = ['Semua + Semua', 'Semua + Sebagian', 'Sebagian + Semua',
        'Sebagian + Sebagian', 'Tidak ada + Semua', 'Jika\u2013Maka', 'Disjungtif / Atau'];
      var subOrder = ['Modus Ponens', 'Modus Tollens', 'Silogisme Hipotetis',
        'Menegaskan Akibat (jebakan)', 'Menyangkal Sebab (jebakan)'];
      groups.sort(function (a, b) { return order.indexOf(a.name) - order.indexOf(b.name); });
      groups.forEach(function (g) {
        g.subs.sort(function (a, b) { return subOrder.indexOf(a.name) - subOrder.indexOf(b.name); });
      });
    }
    return groups;
  }
  function masteryQuestionsOf(questions, key) {
    // Soal bos (boss = 1..5) TIDAK masuk jalur penguasaan: tiap sub-materi
    // tetap tepat 30 soal, dan skor maks tiap level tetap 150.
    return questions.filter(function (q) { return masteryOf(q.type) === key && !q.boss; })
      .slice().sort(function (a, b) { return a.id - b.id; });
  }
  function masteryMaxOf(questions, key) {
    return masteryQuestionsOf(questions, key).length * 5;
  }
  /* Level berikutnya terbuka otomatis begitu level sebelumnya 100%
     (agregat per jenis atau skor terbaik lama — lihat levelPerfect). */
  function masteryUnlocked(best, idx, questions, tb, track) {
    track = track || 'TIU';
    if (idx === 0) return true;
    var prev = trackOrderOf(track)[idx - 1].key;
    return levelPerfect(prev, questions, best, tb, track);
  }

  /* ---------- Data soal: bawaan atau simpanan pengguna ---------- */
  function loadQuestions() {
    try {
      var raw = localStorage.getItem(LS_KEY);
      if (raw) {
        var arr = JSON.parse(raw);
        if (Array.isArray(arr) && arr.length > 0) return arr;
      }
    } catch (e) { /* abaikan, pakai bawaan */ }
    return JSON.parse(JSON.stringify(TIU_QUESTIONS));
  }
  /* Bank satu jalur dari global file data (TWK/TKP dimuat index.html
     sebelum app.js). [] bila file belum dimuat (mis. harness QA lama
     yang hanya memuat questions.js) — jalur itu lalu kosong, bukan crash. */
  function trackBank(track) {
    try {
      if (track === 'TWK' && typeof TWK_QUESTIONS !== 'undefined') return TWK_QUESTIONS;
      if (track === 'TKP' && typeof TKP_QUESTIONS !== 'undefined') return TKP_QUESTIONS;
    } catch (e) { /* abaikan */ }
    return [];
  }

  /* ---------- Skor terbaik Jalur Penguasaan ---------- */
  function loadBest() {
    try {
      var raw = localStorage.getItem(MASTERY_LS_KEY);
      if (raw) {
        var obj = JSON.parse(raw);
        if (obj && typeof obj.best === 'object' && obj.best) return obj.best;
      }
    } catch (e) { /* abaikan */ }
    return {};
  }
  /* Daftar gelar yang sudah diraih: [{title, boss, t}]. Gelar lama (satu
     gelar di tiu_title_v2, dari sistem sebelum 5 bos) dimigrasikan apa
     adanya supaya gelar yang sudah diraih tidak hilang. */
  function loadTitles() {
    try {
      var raw = localStorage.getItem(TITLES_LS_KEY);
      if (raw) { var obj = JSON.parse(raw); if (obj && Array.isArray(obj.titles)) return obj.titles; }
      var old = localStorage.getItem(TITLE_LS_KEY);
      if (old) {
        var o = JSON.parse(old);
        if (o && o.title) {
          var migrated = [{ title: o.title, boss: null, t: o.t || Date.now() }];
          saveTitles(migrated);
          return migrated;
        }
      }
    } catch (e) { /* abaikan */ }
    return [];
  }
  function saveTitles(titles) {
    try { localStorage.setItem(TITLES_LS_KEY, JSON.stringify({ titles: titles })); } catch (e) { /* abaikan */ }
  }
  function hasTitle(titles, tier, track) {
    var name = bossTitleFor(track || 'TIU', tier);
    return (titles || []).some(function (t) { return t.title === name; });
  }
  function hasMasterCpns(titles) {
    return (titles || []).some(function (t) { return t.title === 'Master CPNS'; });
  }
  /* Skor terbaik per bos: {1: skor, 2: skor, ...} — hanya dari sesi
     simulasi bos (mode exam), dipakai gerbang Bos 2-5. */
  /* Skor terbaik per bos, per jalur: {TIU:{1:skor,...}, TWK:{...}, TKP:{...}}.
     Data lama {1:skor,...} (TIU saja) dimigrasikan ke {TIU:{...}}. */
  function loadBossScores() {
    try {
      var raw = localStorage.getItem(BOSS_LS_KEY);
      if (raw) {
        var obj = JSON.parse(raw);
        if (obj && typeof obj === 'object') {
          if (obj.TIU || obj.TWK || obj.TKP) {
            return { TIU: obj.TIU || {}, TWK: obj.TWK || {}, TKP: obj.TKP || {} };
          }
          return { TIU: obj, TWK: {}, TKP: {} };
        }
      }
    } catch (e) { /* abaikan */ }
    return { TIU: {}, TWK: {}, TKP: {} };
  }
  function saveBossScores(scores) {
    try { localStorage.setItem(BOSS_LS_KEY, JSON.stringify(scores || {})); } catch (e) { /* abaikan */ }
  }
  function saveBest(best) {
    try { localStorage.setItem(MASTERY_LS_KEY, JSON.stringify({ best: best })); } catch (e) { /* penuh */ }
  }

  /* ---------- Jawaban benar TERBAIK per JENIS soal (progress kartu jenis) ----------
     Disimpan per id soal (bukan per sesi): correct = soal pernah dijawab
     benar, tried = soal pernah masuk sesi yang dinilai. KUNCI JAWABAN TIDAK
     PERNAH disimpan — hanya status pernah-benar / pernah-dikerjakan per id.
     Dicatat dari SEMUA mode yang dinilai (latihan jenis, level penuh,
     perbaikan Soal yang Salah, simulasi campuran): soal yang tidak dijawab
     dihitung bukan benar. Dipakai: persentase di kartu jenis + kartu level,
     dan buka level otomatis (level 100% = semua soal level itu pernah
     benar, lewat latihan jenis + perbaikan soal salah). */
  var TYPEBEST_LS_KEY = 'tiu_type_best_v1';
  function loadTypeBest() {
    try {
      var raw = localStorage.getItem(TYPEBEST_LS_KEY);
      if (raw) {
        var o = JSON.parse(raw);
        if (o && typeof o === 'object') return { correct: o.correct || {}, tried: o.tried || {} };
      }
    } catch (e) { /* abaikan */ }
    return { correct: {}, tried: {} };
  }
  function saveTypeBest(tb) {
    try { localStorage.setItem(TYPEBEST_LS_KEY, JSON.stringify(tb || { correct: {}, tried: {} })); } catch (e) { /* abaikan */ }
  }
  /* Catat hasil satu sesi yang dinilai ke pelacak per jenis. fullSet =
     soal yang dinilai; answers = jawaban akhir sesi (sudah digabung untuk
     mode repair). Mengembalikan pelacak terbaru. */
  function recordTypeBest(fullSet, answers, tb, track) {
    tb = tb || loadTypeBest();
    track = track || 'TIU';
    (fullSet || []).forEach(function (q) {
      var key = tbKey(track, q.id);
      tb.tried[key] = 1;
      if (answers && answers[q.id] === q.k) tb.correct[key] = 1;
    });
    saveTypeBest(tb);
    return tb;
  }

  /* Nama kelompok tingkat atas satu soal (sama seperti jenisGroupsOf):
     silogisme -> 'Semua + Semua', 'Jika–Maka', dst.; lainnya -> q.type. */
  function typeGroupNameOf(q) {
    if (masteryOf(q.type) === 'silogisme') {
      var rest = q.type.replace(/^Silogisme:\s*/, '');
      return rest.split(' \u2014 ')[0];
    }
    return q.type;
  }
  /* Soal-soal dalam satu kelompok jenis di satu sub-materi. */
  function groupQuestionsOf(questions, key, groupName) {
    return masteryQuestionsOf(questions, key).filter(function (q) {
      return typeGroupNameOf(q) === groupName;
    });
  }
  /* Progress satu kelompok jenis: {correct, total, tried, pct}.
     correct = jumlah soal kelompok yang PERNAH dijawab benar. */
  function groupProgress(key, groupName, questions, tb, track) {
    track = track || 'TIU';
    var qs = track === 'TIU' ? groupQuestionsOf(questions, key, groupName)
      : trackLevelQuestions(track, key).filter(function (q) { return q.type === groupName; });
    var correct = 0, tried = 0;
    qs.forEach(function (q) {
      if (tbIsCorrect(tb, track, q.id)) correct++;
      if (tbIsTried(tb, track, q.id)) tried++;
    });
    return { correct: correct, total: qs.length, tried: tried,
             pct: qs.length > 0 ? Math.round(correct / qs.length * 100) : 0 };
  }
  /* Progress satu sub-kelompok (mis. 'Modus Ponens' di Jika–Maka),
     dicocokkan dari type lengkap soal. */
  function subProgress(fullType, questions, tb, track) {
    track = track || 'TIU';
    var qs = questions.filter(function (q) { return q.type === fullType && !q.boss; });
    var correct = 0, tried = 0;
    qs.forEach(function (q) {
      if (tbIsCorrect(tb, track, q.id)) correct++;
      if (tbIsTried(tb, track, q.id)) tried++;
    });
    return { correct: correct, total: qs.length, tried: tried,
             pct: qs.length > 0 ? Math.round(correct / qs.length * 100) : 0 };
  }
  /* Progress satu level (agregat semua jenis): {correct, total, tried, pct}. */
  function levelProgress(key, questions, tb, track) {
    track = track || 'TIU';
    var qs = track === 'TIU' ? masteryQuestionsOf(questions, key) : trackLevelQuestions(track, key);
    var correct = 0, tried = 0;
    qs.forEach(function (q) {
      if (tbIsCorrect(tb, track, q.id)) correct++;
      if (tbIsTried(tb, track, q.id)) tried++;
    });
    return { correct: correct, total: qs.length, tried: tried,
             pct: qs.length > 0 ? Math.round(correct / qs.length * 100) : 0 };
  }
  /* Level sempurna (100%) menurut agregat per jenis ATAU skor terbaik lama.
     Skor terbaik lama dipertahankan supaya pengguna yang sudah lulus 100
     sebelum v2.4 tidak kehilangan bukaannya. */
  function levelPerfect(key, questions, best, tb, track) {
    track = track || 'TIU';
    var max = track === 'TIU' ? masteryMaxOf(questions, key) : trackLevelMax(track, key);
    if (max > 0 && (best[key] || 0) >= max) return true;
    var p = levelProgress(key, questions, tb || loadTypeBest(), track);
    return p.total > 0 && p.correct >= p.total;
  }

  /* ---------- Penilaian murni (bisa diuji di luar browser) ---------- */
  /* Penilaian per jalur. TIU/TWK: benar x 5, salah/kosong 0, lulus bila
     skor >= PG jalur (TIU 80, TWK 65). TKP: tiap jawaban dinilai skor
     opsinya 1-5 (field scores), kosong 0; "benar" = opsi terbaik (k,
     skor 5); lulus simulasi CAT bila skor >= 166 (hanya bermakna untuk
     45 soal, maks 225). Lulus BOS tidak memakai pass ini — bos lulus
     hanya dengan nilai SEMPURNA 150 (diatur di submitExam). */
  function gradeFor(track, questions, answers) {
    var correct = 0, wrong = 0, blank = 0, wrongIds = [];
    var score = 0;
    var tkp = track === 'TKP';
    questions.forEach(function (q) {
      var a = answers[q.id];
      if (a === undefined || a === null || a === '') { blank++; wrongIds.push(q.id); }
      else if (tkp) {
        var s = (q.scores && typeof q.scores[a] === 'number') ? q.scores[a] : 0;
        score += s;
        if (a === q.k) { correct++; } else { wrong++; wrongIds.push(q.id); }
      }
      else if (a === q.k) { correct++; }
      else { wrong++; wrongIds.push(q.id); }
    });
    if (!tkp) score = correct * 5;
    var passing = (TRACKS[track] || TRACKS.TIU).passing;
    return { score: score, max: questions.length * 5, correct: correct, wrong: wrong,
             blank: blank, wrongIds: wrongIds, pass: score >= passing };
  }
  function grade(questions, answers) { return gradeFor('TIU', questions, answers); }
  /* Penilaian Simulasi SKD (murni): tiap cakupan dinilai
     sendiri (TWK/TIU benar x 5, TKP jumlah skor opsi), lalu dijumlah.
     Lulus SKD hanya bila KETIGA cakupan mencapai passing grade-nya
     (TWK 65, TIU 80, TKP 166); total maks 550. */
  function gradeSkd(set, answers) {
    var twk = gradeFor('TWK', set.filter(function (q) { return q.sec === 'TWK'; }), answers);
    var tiu = gradeFor('TIU', set.filter(function (q) { return q.sec === 'TIU'; }), answers);
    var tkp = gradeFor('TKP', set.filter(function (q) { return q.sec === 'TKP'; }), answers);
    /* Maks dihitung dari set yang dinilai: 550 untuk 110 soal penuh,
       lebih kecil untuk perbaikan sebagian soal (bank Soal yang Salah). */
    return { score: twk.score + tiu.score + tkp.score, max: twk.max + tiu.max + tkp.max,
             correct: twk.correct + tiu.correct + tkp.correct,
             wrong: twk.wrong + tiu.wrong + tkp.wrong,
             blank: twk.blank + tiu.blank + tkp.blank,
             wrongIds: twk.wrongIds.concat(tiu.wrongIds).concat(tkp.wrongIds),
             pass: twk.pass && tiu.pass && tkp.pass, twk: twk, tiu: tiu, tkp: tkp };
  }
  /* ---------- Bank "Soal yang Salah" (murni, bisa diuji di luar browser) ----------
     scope: kunci sub-materi ('silogisme', dst.), 'BOS' untuk simulasi,
     'latihan' untuk latihan per jenis soal. Aturan: soal yang salah masuk
     bank cakupannya; soal yang sudah dijawab benar keluar dari bank. */
  function wrongBankScopeOf(origin, masteryKey, track) {
    var scope;
    if (origin === 'mastery' && masteryKey) scope = masteryKey;
    else if (origin === 'exam') scope = 'BOS';
    else if (origin === 'sim') scope = 'simulasi';
    else scope = 'latihan';
    // TIU memakai scope polos (kompatibel data lama + QA lama);
    // TWK/TKP memakai awalan jalur supaya bank tidak tercampur.
    if (track && track !== 'TIU') return track + ':' + scope;
    return scope;
  }
  function updateWrongBank(bank, scope, fullSetIds, wrongIds) {
    bank = bank || {};
    // Soal di luar set ini tidak disentuh; soal di set ini diganti statusnya
    // dengan hasil terbaru (salah -> tetap di bank, benar -> keluar).
    var cur = (bank[scope] || []).filter(function (id) { return fullSetIds.indexOf(id) === -1; });
    wrongIds.forEach(function (id) { if (cur.indexOf(id) === -1) cur.push(id); });
    cur.sort(function (a, b) { return a - b; });
    if (cur.length === 0) delete bank[scope]; else bank[scope] = cur;
    return bank;
  }
  // Untuk pengujian otomatis (Node): module.exports
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { grade: grade, PASSING: PASSING, EXAM_SECONDS: EXAM_SECONDS,
      MASTERY_ORDER: MASTERY_ORDER, masteryOf: masteryOf,
      masteryQuestionsOf: masteryQuestionsOf, masteryMaxOf: masteryMaxOf,
      masteryUnlocked: masteryUnlocked, jenisGroupsOf: jenisGroupsOf,
      buildMixedSet: buildMixedSet, bossUnlocked: bossUnlocked,
      bossQuestionsOf: bossQuestionsOf, bossTitleFor: bossTitleFor,
      bossUnlockedTier: bossUnlockedTier, titleForBossResult: titleForBossResult,
      bossNumOf: bossNumOf, buildRepairOptionOrder: buildRepairOptionOrder,
      buildRepairOptionOrderWith: buildRepairOptionOrderWith, BOSS_TITLES: BOSS_TITLES,
      shouldAwardTitle: shouldAwardTitle, SIM_QUOTAS: SIM_QUOTAS,
      wrongBankScopeOf: wrongBankScopeOf, updateWrongBank: updateWrongBank,
      typeGroupNameOf: typeGroupNameOf, groupQuestionsOf: groupQuestionsOf,
      groupProgress: groupProgress, subProgress: subProgress,
      levelProgress: levelProgress, levelPerfect: levelPerfect,
      gradeFor: gradeFor, TRACKS: TRACKS, TRACK_ORDER: TRACK_ORDER,
      TWK_ORDER: TWK_ORDER, TKP_ORDER: TKP_ORDER, trackOrderOf: trackOrderOf,
      trackLevelQuestions: trackLevelQuestions, trackLevelMax: trackLevelMax,
      typeGroupsOf: typeGroupsOf, tbKey: tbKey, bossTitlesFor: bossTitlesFor,
      hasTitle: hasTitle, hasMasterCpns: hasMasterCpns, wrongBankTrackOf: wrongBankTrackOf,
      isMasterBoss: isMasterBoss, homeFrame: homeFrame, skdGold: skdGold, skdMaskEmail: skdMaskEmail,
      trackBank: trackBank, gradeSkd: gradeSkd, SKD_SECONDS: SKD_SECONDS, SKD_PG: SKD_PG,
      WRONG_LS_KEY: WRONG_LS_KEY, TYPEBEST_LS_KEY: TYPEBEST_LS_KEY };
  }

  /* ---------- State ---------- */
  var state = {
    questions: loadQuestions(),
    qbank: { TIU: loadQuestions(), TWK: trackBank('TWK'), TKP: trackBank('TKP') },
    track: 'TIU',      // jalur yang sedang dibuka di menu Ujian
    trackSel: null,    // null = tampilkan pemilih jalur (TIU/TWK/TKP)
    best: loadBest(),
    typeBest: loadTypeBest(),
    titles: loadTitles(),
    boss: loadBossScores(),
    screen: 'home',
    exam: null,      // { answers:{}, current:0, secondsLeft, timerId,
                     //   mode:'exam'|'practice'|'mastery'|'repair',
                     //   origin:'exam'|'practice'|'mastery',
                     //   bossTier: 1..5 (hanya untuk origin exam),
                     //   optOrder: {idSoal: [indeksAsli...]} (hanya mode repair),
                     //   set:[soal yang dikerjakan], fullSet:[soal yang dinilai],
                     //   masteryKey, practiceKey:{cat, subtype},
                     //   baseAnswers, prevScore, running, lastResult }
  };

  /* ---------- Util ---------- */
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function letters() { return ['A', 'B', 'C', 'D', 'E']; }
  function masteryQuestions(key) { return masteryQuestionsOf(state.questions, key); }
  function masteryCat(key) {
    var qs = masteryQuestions(key);
    return qs.length ? qs[0].cat : 'Verbal';
  }
  function masteryMax(key) { return masteryMaxOf(state.questions, key); }

  /* ---------- Riwayat latihan (label, skor, TANGGAL + JAM, per level) ---------- */
  function loadHistory() {
    try {
      var raw = localStorage.getItem(HISTORY_LS_KEY);
      if (raw) { var arr = JSON.parse(raw); if (Array.isArray(arr)) return arr; }
    } catch (e) { /* abaikan */ }
    return [];
  }
  function recordHistory(label, res, level) {
    try {
      var h = loadHistory();
      h.unshift({ t: Date.now(), label: label, score: res.score, max: res.max, correct: res.correct, wrong: res.wrong, level: level || '' });
      if (h.length > HISTORY_MAX) h.length = HISTORY_MAX;
      localStorage.setItem(HISTORY_LS_KEY, JSON.stringify(h));
    } catch (e) { /* abaikan */ }
  }
  function historyGroupName(level) {
    if (!level) return 'Lainnya';
    if (level === 'SKD') return 'Simulasi SKD (110 soal)';
    var track = 'TIU', key = level;
    var parts = String(level).split(':');
    if (parts.length > 1 && TRACK_ORDER.indexOf(parts[0]) !== -1) { track = parts[0]; key = parts.slice(1).join(':'); }
    if (key === 'BOS') return track + ' · BOS — 5 Level Bos';
    if (key === 'latihan') return track + ' · Latihan per jenis soal';
    if (key === 'simulasi') return track + ' · Simulasi CAT';
    var order = trackOrderOf(track);
    var m = order.filter(function (x) { return x.key === key; })[0];
    if (m) return track + ' · Tingkat ' + (order.indexOf(m) + 1) + ' · ' + m.name;
    return level;
  }
  function renderHistory() {
    var box = $('riwayat-list');
    if (!box) return;
    var h = loadHistory();
    if (h.length === 0) {
      box.innerHTML = '<p class="muted">Belum ada riwayat latihan.</p>';
      return;
    }
    box.innerHTML = '';
    // Dikelompokkan per level (urutan: 10 level, BOS, latihan jenis soal).
    var order = [];
    TRACK_ORDER.forEach(function (tr) {
      trackOrderOf(tr).forEach(function (m) { order.push(tr === 'TIU' ? m.key : tr + ':' + m.key); });
      order.push(tr === 'TIU' ? 'BOS' : tr + ':BOS');
      order.push(tr === 'TIU' ? 'latihan' : tr + ':latihan');
      order.push(tr === 'TIU' ? 'simulasi' : tr + ':simulasi');
    });
    order.push('SKD');
    order.push('');
    order.forEach(function (lv) {
      var items = h.filter(function (e) { return (e.level || '') === lv; });
      if (items.length === 0) return;
      var head = document.createElement('div');
      head.className = 'rgroup';
      head.textContent = historyGroupName(lv) + ' \u00b7 ' + items.length + ' percobaan';
      box.appendChild(head);
      items.forEach(function (e) {
        var d = new Date(e.t);
        var div = document.createElement('div');
        div.className = 'ritem';
        div.innerHTML = '<div class="rbody"><div class="rt">' + esc(e.label) + '</div>' +
          '<div class="rmeta">' + esc(d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })) +
          ' \u00b7 ' + esc(d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })) +
          ' &middot; Benar ' + e.correct + ' &middot; Salah ' + e.wrong + '</div></div>' +
          '<div class="rscore">' + e.score + ' / ' + e.max + '</div>';
        box.appendChild(div);
      });
    });
  }

  /* ---------- Bank "Soal yang Salah" (persisten di localStorage) ---------- */
  function loadWrongBank() {
    try {
      var raw = localStorage.getItem(WRONG_LS_KEY);
      if (raw) { var o = JSON.parse(raw); if (o && typeof o === 'object') return o; }
    } catch (e) { /* abaikan */ }
    return {};
  }
  function saveWrongBank(b) {
    try { localStorage.setItem(WRONG_LS_KEY, JSON.stringify(b)); } catch (e) { /* abaikan */ }
  }
  function loadAnswers() {
    try {
      var raw = localStorage.getItem(ANSWERS_LS_KEY);
      if (raw) { var o = JSON.parse(raw); if (o && typeof o === 'object') return o; }
    } catch (e) { /* abaikan */ }
    return {};
  }
  function saveAnswersFor(key, answers) {
    try {
      var all = loadAnswers();
      all[key] = answers || {};
      localStorage.setItem(ANSWERS_LS_KEY, JSON.stringify(all));
    } catch (e) { /* abaikan */ }
  }
  function wrongBankTotal() {
    var wb = loadWrongBank(), n = 0;
    Object.keys(wb).forEach(function (k) { n += (wb[k] || []).length; });
    return n;
  }
  function renderWrongCount() {
    var el = $('wrong-count');
    if (!el) return;
    var n = wrongBankTotal();
    el.textContent = n === 0 ? 'Belum ada soal yang salah. Bagus sekali!' : n + ' soal salah menunggu diperbaiki.';
  }
  function renderWrongBank() {
    var box = $('wrongbank-list');
    if (!box) return;
    var wb = loadWrongBank();
    var total = wrongBankTotal();
    $('wrongbank-total').textContent = total === 0
      ? 'Belum ada soal yang salah. Bagus sekali!'
      : total + ' soal salah dari berbagai latihan. Perbaiki sampai semua benar \u2014 soal yang sudah benar keluar dari daftar.';
    box.innerHTML = '';
    var scopes = [];
    TRACK_ORDER.forEach(function (tr) {
      trackOrderOf(tr).forEach(function (m, i) {
        scopes.push({ key: tr === 'TIU' ? m.key : tr + ':' + m.key,
                      name: tr + ' · Tingkat ' + (i + 1) + ' · ' + m.name });
      });
      scopes.push({ key: tr === 'TIU' ? 'BOS' : tr + ':BOS', name: tr + ' · BOS — 5 Level Bos' });
      scopes.push({ key: tr === 'TIU' ? 'latihan' : tr + ':latihan', name: tr + ' · Latihan per jenis soal' });
      scopes.push({ key: tr === 'TIU' ? 'simulasi' : tr + ':simulasi', name: tr + ' · Simulasi CAT ' + tr });
    });
    scopes.push({ key: 'SKD', name: 'Simulasi SKD (110 soal)' });
    scopes.forEach(function (s) {
      var ids = wb[s.key] || [];
      if (ids.length === 0) return;
      var card = document.createElement('button');
      card.className = 'menu-card';
      card.setAttribute('data-wrongbank', s.key);
      card.innerHTML = '<span class="ic">&#10060;</span><span class="tx"><b>' + esc(s.name) + '</b>' +
        '<span>' + ids.length + ' soal salah &middot; ketuk untuk berlatih</span></span>' +
        '<span class="chev">&#8250;</span>';
      card.addEventListener('click', function () { startWrongBank(s.key); });
      box.appendChild(card);
    });
  }
  function wrongBankTrackOf(scope) {
    var p = String(scope || '').split(':');
    if (p.length > 1 && TRACK_ORDER.indexOf(p[0]) !== -1) return { track: p[0], key: p.slice(1).join(':') };
    return { track: 'TIU', key: scope };
  }
  function startWrongBank(scope) {
    var parsed = wrongBankTrackOf(scope);
    var track = parsed.track, skey = parsed.key;
    var wb = loadWrongBank();
    var ids = wb[scope] || [];
    if (ids.length === 0) return;
    /* Simulasi SKD: soalnya bukan dari bank TIU/TWK/TKP, tapi dari bank
       SKD sendiri (nomor 1-110). Perbaikan memakai sesi repair asal skd
       supaya dinilai dengan gradeSkd, bukan gradeFor satu jalur. */
    if (scope === 'SKD') {
      var skdQs = skdBank().filter(function (q) { return ids.indexOf(q.id) !== -1; });
      if (skdQs.length === 0) return;
      startSession(skdQs, skdQs, 'repair', 'skd', { track: 'TIU' });
      return;
    }
    var bank = trackQuestionsOf(track);
    var qs = ids.map(function (id) {
      return bank.filter(function (q) { return q.id === id; })[0];
    }).filter(function (q) { return !!q; });
    if (qs.length === 0) return;
    if (trackOrderOf(track).some(function (m) { return m.key === skey; })) {
      // Perbaiki di bank sub-materi: nilai penuh 30 soal dihitung dari
      // jawaban awal yang tersimpan + perbaikan di bank ini.
      var full = trackLevelQuestions(track, skey);
      var base = (loadAnswers()[scope]) || (loadAnswers()[skey]) || {};
      if (Object.keys(base).length === 0) {
        // Tanpa jawaban awal tersimpan, nilai hanya soal-soal di bank ini.
        startSession(qs, qs, 'repair', 'mastery', { masteryKey: skey, track: track });
        return;
      }
      state.exam = { answers: {}, current: 0, secondsLeft: null, timerId: null,
                     mode: 'repair', origin: 'mastery', set: qs, fullSet: full,
                     masteryKey: skey, practiceKey: null, simSet: null, bossTier: null, optOrder: null,
                     baseAnswers: base, prevScore: (state.best[skey] === undefined ? null : state.best[skey]),
                     running: true, lastResult: null, newlyTitled: false, newTitle: null, track: track };
      attachRepairShuffle(state.exam);
      $('exam-intro').style.display = 'none';
      $('exam-result').style.display = 'none';
      $('exam-run').style.display = 'block';
      showScreen('exam');
      renderQuestion();
    } else if (skey === 'BOS') {
      startSession(qs, qs, 'repair', 'exam', { simSet: 'bos', track: track });
    } else {
      startSession(qs, qs, 'repair', 'practice', { practiceKey: { cat: qs[0].cat, subtype: 'Soal yang salah', prefix: null }, track: track });
    }
  }

  /* ---------- Navigasi layar ---------- */
  function showScreen(name) {
    /* Gerbang otentikasi: sebelum login hanya layar Masuk/Daftar dan
       Lupa Password yang boleh tampil; sesudah login layar otentikasi
       tidak bisa dibuka lagi (kecuali lewat Keluar). */
    if (!Auth.isLoggedIn() && name !== 'auth' && name !== 'forgot') name = 'auth';
    if (Auth.isLoggedIn() && (name === 'auth' || name === 'forgot') && !mcUpgradeMode) name = 'home';
    /* Saat trial terkunci, semua navigasi tetap di layar terkunci
       sampai bayar + terkonfirmasi (dibuka lewat mcTrialUpgrade). */
    if (mcTrialLocked && name !== 'trial-locked') name = 'trial-locked';
    if (name !== 'auth' && mcUpgradeMode) { mcUpgradeMode = false; mcUpdateUpgradeModeUI(); }
    state.screen = name;
    document.querySelectorAll('.screen').forEach(function (el) { el.classList.remove('active'); });
    $('screen-' + name).classList.add('active');
    document.querySelectorAll('#tabbar button').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-tab') === name);
    });
    var inExam = name === 'exam' && state.exam && state.exam.running;
    var showTimer = inExam && state.exam.mode !== 'repair'; // semua mode latihan pakai timer; perbaikan tanpa timer
    $('tabbar').classList.toggle('hidden', inExam);
    $('main').classList.toggle('exam-mode', inExam);
    $('exam-footer').classList.toggle('show', inExam);
    var eb = $('btn-exam-back');
    if (eb) eb.style.display = inExam ? 'inline-block' : 'none';
    $('timer').classList.toggle('hidden', !showTimer);
    window.scrollTo(0, 0);
    if (name === 'exam' && state.exam && state.exam.running) renderQuestion();
    if (name === 'home') { renderTitleBadge(); mcUpdateTrialUI(); }
    if (name === 'mastery') renderMasteryList();
    if (name === 'guide') { showGuidePicker(); }
    if (name === 'ranking') loadSkdRanking();
    if (name === 'wrongbank') renderWrongBank();
    if (name === 'riwayat') renderHistory();
  }

  document.querySelectorAll('#tabbar button').forEach(function (b) {
    b.addEventListener('click', function () { showScreen(b.getAttribute('data-tab')); });
  });
  document.querySelectorAll('.menu-card[data-goto]').forEach(function (b) {
    b.addEventListener('click', function () { showScreen(b.getAttribute('data-goto')); });
  });
  /* ---------- Panduan (Materi TIU / TWK / TKP) ----------
     Tiga panduan panjang, masing-masing dimuat saat dipilih dari
     pemilih Materi. Kunci jawaban soal latihan TIDAK ada di file-file
     ini (bagian Kunci Jawaban dibuang saat build); jawaban contoh di
     dalam materi BOLEH tampil — itu konten pengajaran. */
  var GUIDE_FILES = { 'guide.html': 'Materi TIU', 'guide-twk.html': 'Materi TWK', 'guide-tkp.html': 'Materi TKP' };
  function showGuidePicker() {
    $('guide-picker').classList.remove('hidden');
    $('guide-view').classList.add('hidden');
  }
  function loadGuide(file) {
    if (!GUIDE_FILES[file]) file = 'guide.html';
    $('guide-picker').classList.add('hidden');
    $('guide-view').classList.remove('hidden');
    $('guide-content').innerHTML = '<p class="muted">Memuat materi…</p>';
    fetch(file).then(function (r) { return r.text(); }).then(function (html) {
      $('guide-content').innerHTML = html;
    }).catch(function () {
      $('guide-content').innerHTML = '<p class="muted">Materi tidak dapat dimuat.</p>';
    });
    window.scrollTo(0, 0);
  }
  document.querySelectorAll('#guide-picker [data-guide]').forEach(function (b) {
    b.addEventListener('click', function () { loadGuide(b.getAttribute('data-guide')); });
  });
  $('guide-back').addEventListener('click', showGuidePicker);

  function renderTitleBadge() {
    var badge = $('title-badge');
    /* Bingkai Beranda (keputusan Bos 2026-11-28, dikunci): emas HANYA
       bila simulasi SKD >= 500; bila tidak, bingkai safir bila gelar
       Master CPNS berasal dari jalur Bos 5; emas menang bila keduanya
       tercapai; bila belum ada keduanya, tanpa bingkai. Kedua class
       tidak pernah aktif bersamaan. */
    var hero = document.querySelector('.hero');
    var frame = homeFrame();
    var gold = frame === 'gold';
    var boss = frame === 'boss';
    if (hero) { hero.classList.toggle('gold-frame', gold); hero.classList.toggle('boss-frame', boss); }
    if (!badge) return;
    if (state.titles.length > 0) {
      badge.style.display = 'block';
      badge.innerHTML = '&#127942; Gelar: <b>' + esc(state.titles.map(function (t) { return t.title; }).join(' · ')) + '</b>';
      /* Bingkai lencana gelar Master CPNS di Beranda — aturan sama
         seperti logo: emas bila simulasi >= 500, safir bila Master
         berasal dari jalur Bos 5 (dan emas belum tercapai). */
      badge.classList.toggle('gold-frame', gold && hasMasterCpns(state.titles));
      badge.classList.toggle('boss-frame', boss && hasMasterCpns(state.titles));
    } else {
      badge.style.display = 'none';
      badge.classList.remove('gold-frame');
      badge.classList.remove('boss-frame');
    }
  }

  /* ---------- Jalur Penguasaan (Level 1-10 + BOS) ---------- */
  function renderMasteryList() {
    var box = $('mastery-list');
    box.innerHTML = '';
    var trackBack = $('btn-mastery-track-back');
    /* Pemilih menu: empat kartu sejajar (TIU / SKD / TWK / TKP). TIU, TWK
       dan TKP punya tingkat, bos, dan simulasi sendiri — tidak pernah
       digabung. SKD berisi Simulasi SKD dan Ranking SKD. */
    if (!state.trackSel) {
      if (trackBack) trackBack.style.display = 'none';
      $('mastery-progress').textContent = 'Pilih satu menu. TIU, TWK, dan TKP punya tingkat, bos, dan simulasi sendiri; SKD berisi Simulasi SKD 110 soal dan Ranking SKD.';
      /* LOCKED (Bos 2026-11-28): kartu "Soal yang Salah" dan "Riwayat
         Latihan" PALING ATAS di menu Ujian — langsung terlihat begitu
         klik Ujian; di bawahnya kartu jalur (TIU/SKD/TWK/TKP), lalu
         tingkat-tingkatnya saat satu jalur dibuka. */
      var wbTotal = wrongBankTotal();
      var wbCard = document.createElement('button');
      wbCard.className = 'menu-card mastery-card';
      wbCard.innerHTML =
        '<span class="mnum">✘</span>' +
        '<span class="tx"><b>Soal yang Salah</b>' +
        '<span>' + (wbTotal === 0 ? 'Belum ada soal yang salah. Bagus sekali!' : wbTotal + ' soal salah menunggu diperbaiki') + '</span>' +
        '<span class="prog">Perbaiki sampai semua benar — soal yang sudah benar keluar dari daftar.</span></span>' +
        '<span class="chev">›</span>';
      wbCard.addEventListener('click', function () { showScreen('wrongbank'); });
      box.appendChild(wbCard);
      var histTotal = loadHistory().length;
      var histCard = document.createElement('button');
      histCard.className = 'menu-card mastery-card';
      histCard.innerHTML =
        '<span class="mnum">&#128344;</span>' +
        '<span class="tx"><b>Riwayat Latihan</b>' +
        '<span>' + (histTotal === 0 ? 'Belum ada riwayat latihan.' : histTotal + ' percobaan tercatat') + '</span>' +
        '<span class="prog">Semua percobaan latihan, simulasi, dan bos — dikelompokkan per tingkat, lengkap dengan skor dan tanggal.</span></span>' +
        '<span class="chev">›</span>';
      histCard.addEventListener('click', function () { showScreen('riwayat'); });
      box.appendChild(histCard);
      TRACK_ORDER.forEach(function (tr) {
        var order = trackOrderOf(tr);
        var qs = trackQuestionsOf(tr);
        var done = order.filter(function (m) { return levelPerfect(m.key, qs, state.best, state.typeBest, tr); }).length;
        var bosses = [1, 2, 3, 4, 5].filter(function (t) { return hasTitle(state.titles, t, tr); }).length;
        var card = document.createElement('button');
        card.className = 'menu-card mastery-card';
        card.innerHTML =
          '<span class="mnum">' + esc(tr) + '</span>' +
          '<span class="tx"><b>Ujian ' + esc(tr) + '</b>' +
          '<span>' + esc(TRACKS[tr].label) + ' · ' + qs.length + ' soal · ' + order.length + ' tingkat · 5 bos</span>' +
          '<span class="prog' + (done === order.length ? ' done' : '') + '">Progress: ' + done + ' dari ' + order.length + ' tingkat lulus 100 · ' + bosses + ' dari 5 bos dikalahkan</span></span>' +
          '<span class="chev">›</span>';
        card.addEventListener('click', function () {
          state.trackSel = tr; state.track = tr; renderMasteryList();
        });
        box.appendChild(card);
        if (tr === 'TIU') {
          /* Menu SKD (LOCKED): kartu sendiri sejajar TIU/TWK/TKP, tepat di
             bawah TIU. Diklik membuka submenu SKD (Simulasi SKD +
             Ranking SKD) — bukan langsung mulai ujian. */
          var skdMenuCard = document.createElement('button');
          skdMenuCard.className = 'menu-card mastery-card';
          skdMenuCard.innerHTML =
            '<span class="mnum">SKD</span>' +
            '<span class="tx"><b>SKD &middot; Simulasi SKD</b>' +
            '<span>110 soal &middot; 100 menit &middot; TWK 30 + TIU 35 + TKP 45</span>' +
            '<span class="prog">Seperti ujian SKD asli &middot; Passing grade: TWK 65 &middot; TIU 80 &middot; TKP 166</span></span>' +
            '<span class="chev">›</span>';
          skdMenuCard.addEventListener('click', function () {
            state.trackSel = 'SKD'; renderMasteryList();
          });
          box.appendChild(skdMenuCard);
        }
      });
      /* Kartu Simulasi SKD dan Ranking SKD TIDAK lagi di sini — keduanya
         pindah ke dalam submenu SKD (klik kartu SKD di atas). */
      /* Kartu "Soal yang Salah" dan "Riwayat Latihan" sudah di PALING ATAS
         menu Ujian (di atas kartu jalur) — bukan lagi di sini. */
      return;
    }
    var track = state.trackSel;
    var order = trackOrderOf(track);
    var tqs = trackQuestionsOf(track);
    if (trackBack) {
      trackBack.style.display = 'block';
      trackBack.onclick = function () { state.trackSel = null; renderMasteryList(); };
    }
    if (track === 'SKD') {
      /* Submenu SKD (LOCKED): isinya dua kartu — Simulasi SKD, lalu
         Ranking SKD di bawahnya. Tombol kembali ke pilihan menu. */
      $('mastery-progress').textContent = 'SKD: Simulasi SKD 110 soal, 100 menit — seperti ujian asli. Nilai dihitung server.';
      var simSkdCard = document.createElement('button');
      simSkdCard.className = 'menu-card mastery-card';
      simSkdCard.innerHTML =
        '<span class="mnum">SKD</span>' +
        '<span class="tx"><b>Simulasi SKD</b>' +
        '<span>110 soal baru &middot; 100 menit &middot; TWK 1&ndash;30, TIU 31&ndash;65, TKP 66&ndash;110</span>' +
        '<span class="prog">Seperti ujian SKD asli &middot; Passing grade: TWK 65 &middot; TIU 80 &middot; TKP 166</span></span>' +
        '<span class="chev">›</span>';
      simSkdCard.addEventListener('click', function () { startSimSKD(); });
      box.appendChild(simSkdCard);
      var rankSkdCard = document.createElement('button');
      rankSkdCard.className = 'menu-card mastery-card';
      rankSkdCard.innerHTML =
        '<span class="mnum">&#127942;</span>' +
        '<span class="tx"><b>Ranking SKD</b>' +
        '<span>Peringkat semua peserta Simulasi SKD</span>' +
        '<span class="prog">Butuh internet &middot; nilai dihitung server dari jawaban.</span></span>' +
        '<span class="chev">›</span>';
      rankSkdCard.addEventListener('click', function () { skdRankingReturn = 'mastery'; showScreen('ranking'); });
      box.appendChild(rankSkdCard);
      return;
    }
    order.forEach(function (m, idx) {
      var qs = trackLevelQuestions(track, m.key);
      var max = qs.length * 5;
      var best = state.best[m.key];
      var lp = levelProgress(m.key, tqs, state.typeBest, track);
      var unlocked = masteryUnlocked(state.best, idx, tqs, state.typeBest, track);
      var done100 = levelPerfect(m.key, tqs, state.best, state.typeBest, track);
      var status = done100 ? 'Lulus 100' : (lp.tried === 0 ? 'Belum dikerjakan' : 'Belum lulus');
      var progText = lp.tried === 0 ? 'Progress: Belum dikerjakan'
        : 'Progress: ' + lp.pct + '% — benar ' + lp.correct + ' dari ' + lp.total + ' soal';
      var card = document.createElement('button');
      card.className = 'menu-card mastery-card' + (unlocked ? '' : ' locked');
      card.innerHTML =
        '<span class="mnum">' + (idx + 1) + '</span>' +
        '<span class="tx"><b>Tingkat ' + (idx + 1) + ' · ' + esc(m.name) + '</b>' +
        '<span>' + qs.length + ' soal · Skor terbaik: ' +
        (best === undefined || best === null ? '—' : best + ' / ' + max + ' (' + Math.round(best / max * 100) + '%)') + '</span>' +
        '<span class="prog' + (lp.pct === 100 ? ' done' : '') + '">' + progText + '</span></span>' +
        '<span class="badge ' + (done100 ? 'pass' : (unlocked ? 'open' : 'lock')) + '">' +
        (unlocked ? status : 'Terkunci') + '</span>';
      card.addEventListener('click', function () { showMasteryDetail(m.key); });
      box.appendChild(card);
    });
    /* Simulasi CAT jalur ini (bukan bos, tanpa gelar). */
    var sim = TRACKS[track];
    var simCard = document.createElement('button');
    simCard.className = 'menu-card mastery-card';
    simCard.innerHTML =
      '<span class="mnum">✎</span>' +
      '<span class="tx"><b>Simulasi CAT ' + esc(track) + '</b>' +
      '<span>' + sim.simCount + ' soal acak (bukan soal bos) · ' + sim.simMinutes + ' menit · Passing grade ' + sim.passing + (track === 'TKP' ? ' (maks 225)' : ' (maks 150)') + '</span>' +
      '<span class="prog">Tanpa gelar — gelar hanya dari bos dengan nilai sempurna.</span></span>' +
      '<span class="chev">›</span>';
    simCard.addEventListener('click', function () { startSim(track); });
    box.appendChild(simCard);
    /* 5 BOS bertingkat — Bos 1 terbuka setelah semua level jalur ini
       mencapai 100; Bos 2-5 terbuka berurutan setelah bos sebelumnya
       diselesaikan SEMPURNA (30/30). Tiap bos = 30 soal baru. */
    var bossDesc = track === 'TIU' ? '30 soal baru · 30 menit · Passing grade 80 · Verbal 10 / Numerik 13 / Figural 7'
      : track === 'TWK' ? '30 soal baru · 30 menit · Passing grade 65 · 6 soal per sub-materi'
      : '30 soal baru · 30 menit · Lulus hanya nilai sempurna 150 · 5 soal per sub-materi';
    [1, 2, 3, 4, 5].forEach(function (tier) {
      var bossOpen = bossUnlockedTier(tier, state.best, (state.boss[track] || {}), tqs, state.typeBest, track);
      var earned = hasTitle(state.titles, tier, track);
      var bossScore = (state.boss[track] || {})[tier];
      var card = document.createElement('button');
      card.className = 'menu-card mastery-card boss-card' + (bossOpen ? '' : ' locked');
      card.innerHTML =
        '<span class="mnum boss">🏆</span>' +
        '<span class="tx"><b>BOS ' + tier + ' · Tingkat ' + tier + '</b>' +
        '<span>' + bossDesc + (bossScore !== undefined && bossScore !== null ? ' · Skor terbaik: ' + bossScore + ' / 150' : '') + '</span></span>' +
        '<span class="badge ' + (earned ? 'pass' : (bossOpen ? 'open' : 'lock')) + '">' +
        (earned ? '👑 ' + esc(bossTitlesFor(track)[tier]) : (bossOpen ? 'Terbuka' : 'Terkunci')) + '</span>';
      if (bossOpen) {
        // Ketuk kartu BOS langsung masuk ujian penuh 30 soal bos itu —
        // tanpa layar intro perantara.
        card.addEventListener('click', function () {
          if (tier > 1) startBoss(track, tier);
          else startExam(track);
        });
      }
      box.appendChild(card);
    });
    var done = order.filter(function (m) {
      return levelPerfect(m.key, tqs, state.best, state.typeBest, track);
    }).length;
    $('mastery-progress').textContent = track + ': ' + done + ' dari ' + order.length + ' level lulus 100.' +
      (bossUnlockedTier(1, state.best, (state.boss[track] || {}), tqs, state.typeBest, track) ? ' Level BOS 1 sudah terbuka!' : ' Selesaikan semua level sampai 100 untuk membuka level BOS 1.') +
      ' Setiap bos yang dikalahkan dengan nilai sempurna memberi gelar (BOS 1: ' + bossTitlesFor(track)[1] + ', BOS 2: ' + bossTitlesFor(track)[2] + ', BOS 3: ' + bossTitlesFor(track)[3] + ', BOS 4: ' + bossTitlesFor(track)[4] + ', BOS 5: ' + bossTitlesFor(track)[5] + ').';
  }

  function showMasteryDetail(key) {
    var track = state.track || 'TIU';
    var order = trackOrderOf(track);
    var m = order.filter(function (x) { return x.key === key; })[0];
    if (!m) return;
    var idx = order.indexOf(m);
    var tqs = trackQuestionsOf(track);
    var unlocked = masteryUnlocked(state.best, idx, tqs, state.typeBest, track);
    if (!unlocked) {
      var qsL = trackLevelQuestions(track, key);
      var groupsL = typeGroupsOf(track, key);
      var htmlL = '<div class="card"><h2>' + esc(track) + ' · Tingkat ' + (idx + 1) + ' · ' + esc(m.name) + ' 🔒</h2>' +
        '<p class="muted">Level ini masih terkunci. Selesaikan Tingkat ' + idx + ' (' + esc(order[idx - 1].name) + ') dengan nilai 100 untuk membukanya.</p>' +
        '<p class="muted">' + qsL.length + ' soal latihan · 1 menit per soal.</p></div>' +
        '<div class="card"><h2>Jenis Soal di Level Ini</h2>' +
        '<p class="muted">Yang akan dipelajari di level ini:</p>';
      groupsL.forEach(function (g) {
        htmlL += '<p class="muted">• ' + esc(g.name) + ' — ' + g.count + ' soal</p>';
        g.subs.forEach(function (sub) {
          htmlL += '<p class="muted" style="margin-left:18px">• ' + esc(sub.name) + ' — ' + sub.count + ' soal</p>';
        });
      });
      htmlL += '</div>';
      $('mastery-detail-content').innerHTML = htmlL;
      $('btn-start-mastery').style.display = 'none';
      $('btn-mastery-back').onclick = function () { showScreen('mastery'); };
      showScreen('mastery-detail');
      return;
    }
    var MATERI_BY_TRACK = {
      TIU: (typeof TIU_MATERI !== 'undefined' ? TIU_MATERI : null),
      TWK: (typeof TWK_MATERI !== 'undefined' ? TWK_MATERI : null),
      TKP: (typeof TKP_MATERI !== 'undefined' ? TKP_MATERI : null)
    };
    var mat = (MATERI_BY_TRACK[track] || {})[key] || null;
    var qs = trackLevelQuestions(track, key);
    var max = qs.length * 5;
    var best = state.best[key];
    var lp = levelProgress(key, tqs, state.typeBest, track);
    var lpText = lp.tried === 0 ? 'Belum dikerjakan'
      : lp.pct + '% — benar ' + lp.correct + ' dari ' + lp.total + ' soal';
    var box = $('mastery-detail-content');
    var html = '<div class="card"><h2>' + esc(track) + ' · ' + esc(m.name) + '</h2>' +
      '<p class="muted">' + qs.length + ' soal latihan · 1 menit per soal · nilai 100 (semua benar) membuka sub-materi berikutnya.</p>' +
      '<p class="muted">Skor terbaik: <b>' + (best === undefined || best === null ? '—' : best + ' / ' + max) + '</b></p>' +
      '<p class="muted">Progress: <b>' + lpText + '</b></p></div>';
    html += '<div class="card"><h2>Jenis Soal di Sub-Materi Ini</h2>' +
      '<p class="muted">Ketuk satu jenis untuk berlatih jenis itu saja (1 menit per soal).</p></div>';
    var groups = typeGroupsOf(track, key);
    groups.forEach(function (g) {
      var subCount = g.count;
      var gp = groupProgress(key, g.name, tqs, state.typeBest, track);
      var gProg = gp.tried === 0 ? 'Belum dikerjakan'
        : 'Progress: ' + gp.pct + '% — benar ' + gp.correct + ' dari ' + gp.total + ' soal';
      html += '<button class="menu-card sub-btn" data-jenis="' + esc(g.name) + '">' +
        '<span class="ic">✎</span><span class="tx"><b>' + esc(g.name) + '</b>' +
        '<span>' + subCount + ' soal · 1 menit per soal</span>' +
        '<span class="prog' + (gp.pct === 100 ? ' done' : '') + '">' + gProg + '</span></span>' +
        '<span class="chev">›</span></button>';
      g.subs.forEach(function (sub) {
        var sp = subProgress('Silogisme: ' + g.name + ' — ' + sub.name, tqs, state.typeBest, track);
        var sProg = sp.tried === 0 ? 'Belum dikerjakan'
          : 'Progress: ' + sp.pct + '% — benar ' + sp.correct + ' dari ' + sp.total + ' soal';
        html += '<button class="menu-card sub-btn sub-indent" data-subjenis="' + esc(g.name + ' — ' + sub.name) + '">' +
          '<span class="ic">↩</span><span class="tx"><b>' + esc(sub.name) + '</b>' +
          '<span>' + sub.count + ' soal · 1 menit per soal</span>' +
          '<span class="prog' + (sp.pct === 100 ? ' done' : '') + '">' + sProg + '</span></span>' +
          '<span class="chev">›</span></button>';
      });
    });
    var wbScopeKey = track === 'TIU' ? key : track + ':' + key;
    var wbIds = (loadWrongBank()[wbScopeKey]) || [];
    if (wbIds.length > 0) {
      html += '<div class="card"><h2>Soal yang Salah</h2>' +
        '<p class="muted">' + wbIds.length + ' soal dari sub-materi ini masih salah. Perbaiki di bank ini sampai semua benar — nilai sub-materi menjadi 100 kalau semua 30 soal benar.</p>' +
        '<button class="btn secondary" id="btn-wrongbank-level">Perbaiki ' + wbIds.length + ' Soal yang Salah</button></div>';
    }
    if (mat) {
      html += '<div class="card"><h2>Materi Belajar</h2><p>' + esc(mat.intro).replace(/\n/g, '<br>') + '</p>' +
        '<p class="muted">Baca materi dulu, baru kerjakan latihannya sampai nilai 100. Contoh di bawah ini dibahas lengkap dengan jawabannya — contohnya berbeda dari soal latihan.</p></div>';
      mat.jenis.forEach(function (j) {
        html += '<div class="card materi-kind"><h3>' + esc(j.n) + '</h3>' +
          '<p><b>Konsep:</b> ' + esc(j.k).replace(/\n/g, '<br>') + '</p>' +
          '<p><b>Cara cepat:</b> ' + esc(j.t).replace(/\n/g, '<br>') + '</p>' +
          '<div class="contoh"><div class="contoh-title">Contoh soal</div>' +
          '<p>' + esc(j.c.q).replace(/\n/g, '<br>') + '</p><ol class="contoh-opts" type="A">';
        j.c.o.forEach(function (o) { html += '<li>' + esc(o) + '</li>'; });
        html += '</ol><p><b>Jawaban: ' + esc(j.c.a) + '.</b> ' + esc(j.c.p).replace(/\n/g, '<br>') + '</p></div></div>';
      });
    }
    box.innerHTML = html;
    $('btn-start-mastery').style.display = 'block';
    var wbBtn = $('btn-wrongbank-level');
    if (wbBtn) wbBtn.addEventListener('click', function () { startWrongBank(wbScopeKey); });
    box.querySelectorAll('[data-jenis]').forEach(function (b) {
      b.addEventListener('click', function () {
        var name = b.getAttribute('data-jenis');
        if (track !== 'TIU') { startPractice(track, trackLevelCat(track, key), name); return; }
        if (key === 'silogisme' && name === 'Jika–Maka') {
          startPractice('Verbal', 'Jika–Maka', 'Silogisme: Jika–Maka');
        } else if (key === 'silogisme') {
          startPractice('Verbal', name, 'Silogisme: ' + name);
        } else {
          startPractice(masteryCat(key), name);
        }
      });
    });
    box.querySelectorAll('[data-subjenis]').forEach(function (b) {
      b.addEventListener('click', function () {
        var full = b.getAttribute('data-subjenis');
        var q0 = state.questions.filter(function (q) { return q.type === 'Silogisme: ' + full; })[0];
        if (q0) startPractice(q0.cat, q0.type);
      });
    });
    $('btn-start-mastery').onclick = function () { startMastery(track, key); };
    $('btn-mastery-back').onclick = function () { showScreen('mastery'); };
    showScreen('mastery-detail');
  }

  /* ---------- Ujian (satu mesin untuk CAT, latihan jenis, penguasaan, perbaikan) ---------- */
  function examQuestions() {
    return state.exam.set;
  }

  function startSession(set, fullSet, mode, origin, extra) {
    stopTimer();
    state.exam = { answers: {}, current: 0, secondsLeft: null, timerId: null,
                   mode: mode, origin: origin, set: set, fullSet: fullSet,
                   masteryKey: null, practiceKey: null, simSet: null, bossTier: null, optOrder: null,
                   baseAnswers: null, track: 'TIU',
                   prevScore: null, running: true, lastResult: null, newlyTitled: false, newTitle: null };
    if (extra) {
      if (extra.masteryKey) state.exam.masteryKey = extra.masteryKey;
      if (extra.practiceKey) state.exam.practiceKey = extra.practiceKey;
      if (extra.simSet) state.exam.simSet = extra.simSet;
      if (extra.bossTier) state.exam.bossTier = extra.bossTier;
      if (extra.track) state.exam.track = extra.track;
      if (extra.seconds) state.exam.secondsLeft = extra.seconds;
    }
    if (mode === 'repair') attachRepairShuffle(state.exam);
    $('exam-intro').style.display = 'none';
    $('exam-result').style.display = 'none';
    $('exam-run').style.display = 'block';
    showScreen('exam');
    if (mode === 'exam') { if (!state.exam.secondsLeft) state.exam.secondsLeft = EXAM_SECONDS; startTimer(); }
    else if (mode === 'practice' || mode === 'mastery') {
      state.exam.secondsLeft = set.length * 60; // 1 menit per soal
      startTimer();
    }
    renderQuestion();
  }

  /* Level BOS 1: hanya terbuka setelah 10 level mencapai 100.
     Bos 1 = 30 soal baru B1-01..B1-30 (sama seperti bos lain). */
  /* Level BOS 1: hanya terbuka setelah semua level jalur itu mencapai 100.
     Bos 1 = 30 soal baru (sama seperti bos lain). */
  function startExam(track) {
    track = track || 'TIU';
    if (!bossUnlocked(state.best, trackQuestionsOf(track), state.typeBest, track)) return;
    var qs = bossQuestionsOf(trackQuestionsOf(track), 1);
    startSession(qs, qs, 'exam', 'exam', { simSet: 'bos1', bossTier: 1, track: track });
  }
  /* Set campuran TIU (30 soal acak non-bos). TIDAK PERNAH memberi gelar:
     simSet 'campuran' + bossTier null — penjaga di titleForBossResult
     dan submitExam menolak gelar dari set ini. */
  function startExamMixed() {
    if (!bossUnlocked(state.best, state.questions, state.typeBest)) return;
    var qs = buildMixedSet(state.questions, (Date.now() % 2147483647) || 1);
    if (qs.length < 30) return;
    startSession(qs, qs, 'exam', 'exam', { simSet: 'campuran', bossTier: null, track: 'TIU' });
  }
  /* Level BOS 2-5: 30 soal baru tiap bos, gerbang berurutan sempurna. */
  function startBoss(track, tier) {
    if (typeof track === 'number') { tier = track; track = 'TIU'; } // kompatibel pemanggilan lama startBoss(tier)
    track = track || 'TIU';
    if (!bossUnlockedTier(tier, state.best, (state.boss[track] || {}), trackQuestionsOf(track), state.typeBest, track)) return;
    var qs = bossQuestionsOf(trackQuestionsOf(track), tier);
    if (qs.length < 30) return;
    startSession(qs, qs, 'exam', 'exam', { simSet: 'bos' + tier, bossTier: tier, track: track });
  }
  /* Simulasi CAT per jalur (bukan bos, tanpa gelar): TIU/TWK 30 soal
     campuran non-bos, TKP 45 soal acak non-bos. PG TKP 166 hanya berlaku
     di sini (maks 225); bos TKP tetap lulus sempurna 150. */
  function startSim(track) {
    track = track || 'TIU';
    var n = TRACKS[track].simCount;
    var qs;
    if (track === 'TIU') {
      qs = buildMixedSet(state.questions, (Date.now() % 2147483647) || 1);
    } else {
      var bank = trackQuestionsOf(track).filter(function (q) { return !q.boss; });
      var rnd = mulberry32((Date.now() % 2147483647) || 1);
      qs = shuffleWith(bank, rnd).slice(0, n);
    }
    if (qs.length < n) return;
    startSession(qs, qs, 'exam', 'sim', { simSet: 'sim-' + track, bossTier: null, track: track, seconds: TRACKS[track].simMinutes * 60 });
  }

  /* Simulasi SKD (110 soal baru, 100 menit): TWK 1-30, TIU
     31-65, TKP 66-110, sesuai ujian asli. Langsung masuk ujian seperti
     kartu BOS / simulasi CAT — tanpa layar intro perantara. */
  function startSimSKD() {
    var qs = skdBank().slice();
    if (qs.length < 110) return;
    startSession(qs, qs, 'exam', 'skd', { simSet: 'skd', bossTier: null, track: 'SKD', seconds: SKD_SECONDS });
  }

  function startPractice(a, b, c, d) {
    // Panggilan lama: startPractice(cat, subtype, prefix) = TIU.
    // Panggilan baru: startPractice(track, cat, subtype, prefix).
    var track = 'TIU', cat = a, subtype = b, prefix = c;
    if (TRACK_ORDER.indexOf(a) !== -1 && typeof b === 'string') { track = a; cat = b; subtype = c; prefix = d; }
    var qs = trackQuestionsOf(track).filter(function (q) {
      if (q.cat !== cat || q.boss) return false;
      if (prefix) return q.type.indexOf(prefix) === 0;
      return q.type === subtype;
    }).slice().sort(function (a, b) { return a.id - b.id; });
    if (qs.length === 0) return;
    startSession(qs, qs, 'practice', 'practice', { practiceKey: { cat: cat, subtype: subtype, prefix: prefix || null }, track: track });
  }

  function startMastery(a, b) {
    // Panggilan lama: startMastery(key) = TIU. Baru: startMastery(track, key).
    var track = 'TIU', key = a;
    if (b !== undefined) { track = a; key = b; }
    var order = trackOrderOf(track);
    var idx = order.findIndex(function (m) { return m.key === key; });
    if (idx < 0 || !masteryUnlocked(state.best, idx, trackQuestionsOf(track), state.typeBest, track)) return;
    var qs = trackLevelQuestions(track, key);
    if (qs.length === 0) return;
    startSession(qs, qs, 'mastery', 'mastery', { masteryKey: key, track: track });
  }

  function startTimer() {
    updateTimerUI();
    state.exam.timerId = setInterval(function () {
      state.exam.secondsLeft--;
      if (state.exam.secondsLeft <= 0) {
        state.exam.secondsLeft = 0;
        updateTimerUI();
        submitExam(true); // waktu habis -> kumpulkan otomatis
      } else {
        updateTimerUI();
      }
    }, 1000);
  }
  function stopTimer() {
    if (state.exam && state.exam.timerId) { clearInterval(state.exam.timerId); state.exam.timerId = null; }
  }
  function updateTimerUI() {
    var s = state.exam.secondsLeft;
    var mm = String(Math.floor(s / 60)).padStart(2, '0');
    var ss = String(s % 60).padStart(2, '0');
    var t = $('timer');
    t.textContent = mm + ':' + ss;
    t.classList.toggle('warn', s <= 300 && s > 60);
    t.classList.toggle('critical', s <= 60);
  }

  function renderQuestion() {
    var qs = examQuestions();
    var q = qs[state.exam.current];
    if (!q) { submitExam(false); return; }
    $('qpos').textContent = 'Soal ' + (state.exam.current + 1) + ' dari ' + qs.length;
    $('qcat').textContent = (state.exam.origin === 'skd' && q.sec)
      ? q.sec + ' \u00b7 ' + q.cat + ' \u00b7 ' + q.type
      : q.cat + ' \u00b7 ' + q.type;
    $('qtext').textContent = q.q;
    // Soal figural wajib bergambar: tampilkan SVG sebagai bagian dari soal.
    var iw = $('qimg-wrap'), im = $('qimg');
    if (q.image) { im.src = q.image; im.alt = 'Gambar soal'; iw.style.display = 'block'; }
    else { im.removeAttribute('src'); iw.style.display = 'none'; }
    var box = $('opts');
    box.innerHTML = '';
    // Mode perbaikan ("Soal yang Salah"): urutan pilihan diacak per soal
    // (optOrder dibuat segar tiap sesi perbaikan). Huruf yang disimpan
    // tetap huruf ASLI pilihannya, supaya penilaian (grade) tidak berubah.
    var order = (state.exam.optOrder && state.exam.optOrder[q.id]) || [0, 1, 2, 3, 4];
    order.forEach(function (origIdx, dispIdx) {
      var L = letters()[dispIdx];
      var origL = letters()[origIdx];
      var b = document.createElement('button');
      b.className = 'opt' + (state.exam.answers[q.id] === origL ? ' sel' : '');
      b.innerHTML = '<span class="letter">' + L + '</span><span class="otx">' + esc(q.options[origIdx]) + '</span>';
      b.addEventListener('click', function () {
        if (!state.exam.running) return;
        state.exam.answers[q.id] = origL;
        renderQuestion();
      });
      box.appendChild(b);
    });
    $('btn-prev').disabled = state.exam.current === 0;
    $('btn-prev').style.opacity = state.exam.current === 0 ? '0.45' : '1';
    $('btn-next').textContent = state.exam.current === qs.length - 1 ? 'Soal Terakhir \u203a' : 'Berikutnya \u203a';
    renderGrid();
    /* Simulasi SKD (DIUBAH Bos 2026-11-28): tombol Sebelumnya/Berikutnya
       TAMPIL di footer tetap di bawah pilihan jawaban, supaya pindah soal
       tidak harus mengetuk nomor di LJK (keluhan Bos: mengetuk nomor LJK
       itu lama). Grid Nomor tetap tidak ada di SKD — LJK-nya sendiri yang
       jadi grid nomor. */
    /* LJK hanya untuk ujian SKD asli; sesi perbaikan soal salah SKD
       memakai navigasi biasa (Sebelumnya/Berikutnya + Grid Nomor). */
    var isSkd = state.exam.origin === 'skd' && state.exam.mode !== 'repair';
    $('btn-prev').style.display = '';
    $('btn-next').style.display = '';
    $('btn-finish').textContent = isSkd ? 'Kumpulkan Jawaban' : 'Selesai';
    var bg = $('btn-grid');
    if (bg) bg.style.display = isSkd ? 'none' : '';
    var ljk = $('skd-ljk');
    if (ljk) {
      ljk.style.display = isSkd ? 'block' : 'none';
      if (isSkd) renderSkdLjk();
    }
  }

  /* LJK Simulasi SKD: 110 nomor dalam 3 blok (TWK 1-30 / TIU 31-65 /
     TKP 66-110); tiap nomor ada bulatan A-E yang bisa diklik; nomor yang
     belum dijawab tampak kosong; jawaban bisa diganti selama belum
     dikumpulkan. Satu pendengar delegasi (bukan 660 pendengar). */
  function renderSkdLjk() {
    var box = $('skd-ljk');
    if (!box || !state.exam) return;
    var secs = [{ name: 'TWK', from: 0, to: 30 }, { name: 'TIU', from: 30, to: 65 }, { name: 'TKP', from: 65, to: 110 }];
    var html = '<div class="ljk-title">Lembar Jawaban (LJK) &mdash; ketuk nomor untuk pindah soal, atau pakai tombol Sebelumnya/Berikutnya di bawah; ketuk bulatan A&ndash;E untuk menjawab</div>';
    secs.forEach(function (s) {
      html += '<div class="ljk-block"><div class="ljk-head">' + s.name + ' &middot; ' + (s.from + 1) + '&ndash;' + s.to + '</div><div class="ljk-cells">';
      for (var i = s.from; i < s.to; i++) {
        var q = examQuestions()[i];
        if (!q) continue;
        var a = state.exam.answers[q.id];
        html += '<div class="ljk-cell' + (i === state.exam.current ? ' cur' : '') + (a ? ' done' : '') + '" data-i="' + i + '">' +
          '<span class="ljk-num">' + (i + 1) + '</span><span class="ljk-bubbles">';
        letters().forEach(function (L) {
          html += '<button type="button" class="ljk-b" data-i="' + i + '" data-a="' + L + '"' +
            (a === L ? ' data-sel="1"' : '') + '>' + L + '</button>';
        });
        html += '</span></div>';
      }
      html += '</div></div>';
    });
    box.innerHTML = html;
  }

  function renderGrid() {
    var qs = examQuestions();
    var cells = $('qgrid-cells');
    cells.innerHTML = '';
    qs.forEach(function (q, i) {
      var b = document.createElement('button');
      var answered = state.exam.answers[q.id] !== undefined && state.exam.answers[q.id] !== '';
      b.textContent = (state.exam.mode === 'repair') ? (q.code || q.id) : (i + 1);
      b.className = (answered ? 'done ' : '') + (i === state.exam.current ? 'current' : '');
      b.addEventListener('click', function () {
        state.exam.current = i;
        $('qgrid').classList.remove('open');
        renderQuestion();
      });
      cells.appendChild(b);
    });
  }

  $('btn-grid').addEventListener('click', function () { $('qgrid').classList.toggle('open'); });
  /* LJK: ketuk bulatan = jawab + lompat ke soal itu; ketuk nomor = lompat
     saja. Setelah dikumpulkan (running=false) LJK terkunci total. */
  $('skd-ljk').addEventListener('click', function (e) {
    if (!state.exam || !state.exam.running || state.exam.origin !== 'skd') return;
    var t = e.target;
    if (!t || !t.closest) return;
    var b = t.closest('.ljk-b');
    var cell = t.closest('.ljk-cell');
    if (b) {
      var i = parseInt(b.getAttribute('data-i'), 10);
      var q = examQuestions()[i];
      if (!q) return;
      state.exam.answers[q.id] = b.getAttribute('data-a');
      state.exam.current = i;
      renderQuestion();
    } else if (cell) {
      state.exam.current = parseInt(cell.getAttribute('data-i'), 10);
      renderQuestion();
    }
  });
  /* Tombol Kembali di layar ujian (LOCKED: semua layar punya jalan
     kembali). Keluar di tengah ujian = percobaan ditinggalkan, jawaban
     pada percobaan ini hilang — konsisten dengan aturan progres hilang
     bila keluar di tengah percobaan. Kembali ke daftar bos/level jalur
     yang sedang dikerjakan. */
  $('btn-exam-back').addEventListener('click', function () {
    if (!state.exam || !state.exam.running) return;
    if (!window.confirm('Keluar dari ujian? Jawaban pada percobaan ini hilang dan tidak disimpan.')) return;
    stopTimer();
    state.exam = null;
    $('exam-run').style.display = 'none';
    $('exam-intro').style.display = 'block';
    showScreen('mastery');
  });
  $('btn-exam-intro-back').addEventListener('click', function () { showScreen('mastery'); });
  // Kalau gambar soal gagal dimuat, sembunyikan wadahnya (jangan tampilkan ikon rusak).
  $('qimg').addEventListener('error', function () { $('qimg-wrap').style.display = 'none'; });
  $('btn-prev').addEventListener('click', function () {
    if (!state.exam || !state.exam.running) return;
    if (state.exam.current > 0) { state.exam.current--; renderQuestion(); }
  });
  $('btn-next').addEventListener('click', function () {
    if (!state.exam || !state.exam.running) return;
    var qs = examQuestions();
    if (state.exam.current < qs.length - 1) { state.exam.current++; renderQuestion(); }
  });
  $('btn-finish').addEventListener('click', function () {
    if (!state.exam || !state.exam.running) return;
    var qs = examQuestions();
    var unanswered = qs.filter(function (q) {
      var a = state.exam.answers[q.id];
      return a === undefined || a === '';
    }).length;
    var msg = unanswered > 0
      ? 'Masih ada ' + unanswered + ' soal belum dijawab. Kumpulkan sekarang?'
      : 'Kumpulkan semua jawaban sekarang?';
    if (window.confirm(msg)) submitExam(false);
  });
  // (Tombol "Mulai" di layar intro dihapus di v2.4: kartu BOS langsung
  //  masuk ujian — lihat renderMasteryList. startExamMixed/startSim
  //  dipakai btn-retry untuk sesi simulasi CAT yang sedang berjalan.)
  $('btn-resume').addEventListener('click', function () {
    if (state.exam && state.exam.running) {
      $('exam-intro').style.display = 'none';
      $('exam-result').style.display = 'none';
      $('exam-run').style.display = 'block';
      showScreen('exam');
    }
  });

  function submitExam(auto) {
    stopTimer();
    var res;
    if (state.exam.origin === 'skd' && state.exam.mode !== 'repair') {
      res = gradeSkd(state.exam.fullSet, state.exam.answers);
    } else if (state.exam.mode === 'repair') {
      // Gabungkan jawaban perbaikan dengan jawaban sebelumnya, lalu nilai
      // ulang SELURUH set soal sesi itu (bukan hanya yang diperbaiki).
      // baseAnswers bisa kosong (null) bila perbaikan dimulai dari bank
      // "Soal yang Salah" lewat startSession — saat itu set yang dinilai
      // memang hanya soal-soal yang diperbaiki itu sendiri.
      var base = state.exam.baseAnswers || {};
      var merged = {};
      state.exam.fullSet.forEach(function (q) { merged[q.id] = base[q.id]; });
      Object.keys(state.exam.answers).forEach(function (id) { merged[id] = state.exam.answers[id]; });
      res = state.exam.origin === 'skd'
        ? gradeSkd(state.exam.fullSet, merged)
        : gradeFor(state.exam.track || 'TIU', state.exam.fullSet, merged);
      state.exam.answers = merged;
    } else {
      res = gradeFor(state.exam.track || 'TIU', state.exam.fullSet, state.exam.answers);
    }
    state.exam.running = false;
    state.exam.lastResult = res;
    /* Gelar Master CPNS lewat Simulasi SKD: lulus ketiga passing grade
       ATAU total >= 500. Simpan juga nilai terbaik simulasi (bingkai emas
       logo hanya bila total terbaik >= 500). */
    if (state.exam.origin === 'skd' && state.exam.mode !== 'repair') {
      var prevBest = loadSkdBest();
      /* KUNCI (Bos 2026-11-28): hanya ujian PERTAMA yang dipakai — nilai
         terbaik, gelar, dan ranking. Pengulangan tidak mengubah apa pun,
         supaya murni dan tidak ada kecurangan. Sesi perbaikan juga tidak. */
      state.exam.isFirstSkd = !prevBest;
      if (!prevBest) saveSkdBest({ total: res.score, t: Date.now() });
      if (state.exam.isFirstSkd && (res.pass || res.score >= 500) && !hasMasterCpns(state.titles)) {
        state.titles.push({ title: 'Master CPNS', boss: 5, track: 'SKD', t: Date.now() });
        saveTitles(state.titles);
        /* Jalur simulasi: TIDAK menyetel flag jalur bos — bingkai
           safir hanya untuk Master CPNS lewat Bos 5. */
        state.exam.newlyTitled = true;
        state.exam.newTitle = { title: 'Master CPNS', boss: 5, track: 'SKD' };
      }
    }
    var isBoss = state.exam.origin === 'exam' && state.exam.mode === 'exam' && state.exam.bossTier;
    // LULUS BOS = nilai SEMPURNA 150 di semua jalur (PG tidak berlaku
    // untuk bos; PG 166 TKP hanya untuk simulasi CAT 45 soal).
    if (isBoss) res.pass = (res.score === 150 && res.max === 150);
    // Skor bos + gelar bertingkat: hanya dari sesi simulasi bos (mode exam).
    // Gelar hanya bila bos itu diselesaikan SEMPURNA (30/30); sesi perbaikan
    // tidak memberi gelar dan tidak mengubah skor bos.
    // Skor bos + gelar bertingkat: hanya dari sesi simulasi bos ASLI
    // (simSet 'bosN' pada jalur yang benar, mode exam). Gelar hanya bila
    // bos itu diselesaikan SEMPURNA (30/30); sesi perbaikan, set campuran,
    // dan simulasi CAT tidak memberi gelar dan tidak mengubah skor bos.
    if (isBoss && state.exam.simSet === 'bos' + state.exam.bossTier) {
      var tier = state.exam.bossTier;
      var trk = state.exam.track || 'TIU';
      if (!state.boss[trk]) state.boss[trk] = {};
      if ((state.boss[trk][tier] || 0) < res.score) {
        state.boss[trk][tier] = res.score;
        saveBossScores(state.boss);
      }
      var newTitle = titleForBossResult(tier, state.exam.origin, state.exam.mode, res.score, res.max, state.exam.simSet, trk);
      if (newTitle && !hasTitle(state.titles, tier, trk)) {
        state.titles.push({ title: newTitle, boss: tier, track: trk, t: Date.now() });
        saveTitles(state.titles);
        state.exam.newlyTitled = true;
        state.exam.newTitle = { title: newTitle, boss: tier, track: trk };
      }
      // Gelar tertinggi "Master CPNS": BOS 5 ketiga jalur dikalahkan.
      if (tier === 5 && newTitle && TRACK_ORDER.every(function (tr) { return hasTitle(state.titles, 5, tr); })) {
        if (!hasMasterCpns(state.titles)) {
          state.titles.push({ title: 'Master CPNS', boss: 5, track: 'ALL', t: Date.now() });
          saveTitles(state.titles);
          /* Penanda asal jalur bos (keputusan Bos 2026-11-28, dikunci):
             gelar ini memberi bingkai safir Bos 5 di Beranda. */
          saveMasterBossFlag();
          state.exam.newlyTitled = true;
          state.exam.newTitle = { title: 'Master CPNS', boss: 5, track: 'ALL' };
        }
      }
    }
    // Skor terbaik Jalur Penguasaan (hanya dari sesi penguasaan, bukan latihan jenis/CAT)
    if (state.exam.origin === 'mastery' && state.exam.masteryKey) {
      var k = state.exam.masteryKey;
      if ((state.best[k] || 0) < res.score) {
        state.best[k] = res.score;
        saveBest(state.best);
      }
      // Simpan jawaban terakhir sub-materi (dipakai perbaikan lewat bank Soal yang Salah)
      saveAnswersFor(k, state.exam.answers);
    }
    // Soal yang salah otomatis masuk bank "Soal yang Salah" (per cakupan);
    // soal yang sudah benar keluar dari bank. Simulasi SKD memakai
    // cakupan 'SKD' sendiri (bukan bagian level mana pun) — tombol
    // "Lihat Soal yang Salah" di layar hasil SKD membukanya untuk belajar.
    // Nilai SKD tetap dari ujian pertama; bank hanya untuk belajar.
    var wbScope = state.exam.origin === 'skd' ? 'SKD' : wrongBankScopeOf(state.exam.origin, state.exam.masteryKey, state.exam.track || 'TIU');
    var wb = loadWrongBank();
    updateWrongBank(wb, wbScope, state.exam.fullSet.map(function (q) { return q.id; }), res.wrongIds);
    saveWrongBank(wb);
    // Pelacak jawaban benar terbaik per JENIS soal (progress kartu jenis +
    // buka level otomatis): dicatat dari SEMUA mode yang dinilai — latihan
    // jenis, level penuh, perbaikan soal salah, simulasi campuran.
    // KECUALI Simulasi SKD: soal simulasi bukan soal level/bank mana pun.
    if (state.exam.origin !== 'skd') {
      state.typeBest = recordTypeBest(state.exam.fullSet, state.exam.answers, state.typeBest, state.exam.track || 'TIU');
    }
    var trkLabel = state.exam.track || 'TIU';
    var label = state.exam.origin === 'skd' ? 'Simulasi SKD (110 soal)'
      : state.exam.origin === 'exam' ? trkLabel + ' Simulasi BOS ' + (state.exam.bossTier || 1) + ' (Set Soal Baru)'
      : state.exam.origin === 'sim' ? trkLabel + ' Simulasi CAT ' + trkLabel + ' (' + state.exam.fullSet.length + ' soal)'
      : state.exam.origin === 'practice' ? trkLabel + ' Latihan: ' + (state.exam.practiceKey ? state.exam.practiceKey.subtype : '')
      : trkLabel + ' Ujian: ' + (trackOrderOf(trkLabel).filter(function (x) { return x.key === state.exam.masteryKey; })[0] || {}).name;
    if (state.exam.mode === 'repair') label += ' (perbaiki soal salah)';
    recordHistory(label, res, wbScope);
    $('exam-run').style.display = 'none';
    $('exam-intro').style.display = 'none';
    showResult(res, auto);
  }

  /* HTML rincian hasil Simulasi SKD: nilai tiap materi (maks + PG kecil)
     dengan LULUS / TIDAK LULUS, nilai total, dan pernyataan lulus SKD. */
  function skdResultHtml(res) {
    function row(name, r, max, pg) {
      return '<div class="skd-row"><span class="skd-sec">' + name + '</span>' +
        '<span class="skd-nums"><b>' + r.score + ' / ' + max + '</b>' +
        '<span>Passing grade ' + pg + ' &middot; benar ' + r.correct + ' &middot; salah ' + r.wrong + ' &middot; kosong ' + r.blank + '</span></span>' +
        '<span class="skd-pass ' + (r.pass ? 'ok' : 'no') + '">' + (r.pass ? 'LULUS' : 'TIDAK LULUS') + '</span></div>';
    }
    return '<div class="skd-rows">' +
      row('TWK', res.twk, 150, 65) + row('TIU', res.tiu, 175, 80) + row('TKP', res.tkp, 225, 166) +
      '</div>' +
      '<div class="skd-total">Nilai total: <b>' + res.score + ' / 550</b></div>' +
      '<div class="skd-overall">' + (res.pass
        ? 'Lulus SKD keseluruhan \u2014 ketiga materi mencapai passing grade.'
        : 'Belum lulus SKD keseluruhan \u2014 lulus hanya bila ketiga materi mencapai passing grade-nya.') + '</div>';
  }

  function showResult(res, auto) {
    $('exam-result').style.display = 'block';
    $('res-score').textContent = res.score;
    $('res-max').textContent = res.max;
    var v = $('res-verdict');
    var origin = state.exam.origin;
    var perfect = res.score === res.max && res.max > 0;
    if (origin === 'mastery') {
      v.textContent = perfect ? 'LULUS 100' : 'BELUM 100';
      v.className = 'verdict ' + (perfect ? 'pass' : 'fail');
    } else if (origin === 'practice') {
      v.textContent = 'SELESAI';
      v.className = 'verdict neutral';
    } else if (origin === 'skd') {
      if (state.exam.mode === 'repair') {
        v.textContent = 'SELESAI';
        v.className = 'verdict neutral';
      } else {
        v.textContent = res.pass ? 'LULUS SKD' : 'BELUM LULUS';
        v.className = 'verdict ' + (res.pass ? 'pass' : 'fail');
      }
    } else {
      v.textContent = res.pass ? 'LULUS' : 'BELUM LULUS';
      v.className = 'verdict ' + (res.pass ? 'pass' : 'fail');
    }
    var note;
    if (origin === 'skd') {
      if (state.exam.mode === 'repair') {
        note = 'Perbaikan soal salah Simulasi SKD \u2014 untuk belajar dari soal yang keliru. Nilai, gelar, dan ranking tetap memakai ujian pertama; perbaikan ini tidak mengubahnya.';
      } else {
        note = 'Simulasi SKD \u2014 110 soal, 100 menit. Lulus SKD hanya bila ketiga materi mencapai passing grade-nya (TWK \u2265 65, TIU \u2265 80, TKP \u2265 166). ' +
          (res.pass ? 'Ketiga passing grade tercapai \u2014 lulus SKD!' : 'Belum lulus SKD \u2014 ada materi yang belum mencapai passing grade-nya.');
        if (res.score >= 500 && state.exam.isFirstSkd) note += ' Nilai 500 ke atas: logo Beranda kini berbingkai emas.';
        if (!state.exam.isFirstSkd) note += ' Ini percobaan ulang \u2014 nilai yang dipakai untuk ranking tetap dari ujian pertama.';
      }
    } else if (origin === 'mastery') {
      var trkM = state.exam.track || 'TIU';
      var m = trackOrderOf(trkM).filter(function (x) { return x.key === state.exam.masteryKey; })[0];
      var idx = trackOrderOf(trkM).indexOf(m);
      var best = state.best[state.exam.masteryKey];
      note = 'Skor terbaik sub-materi ini: ' + best + ' / ' + res.max + '. ';
      if (perfect) {
        note += idx < MASTERY_ORDER.length - 1
          ? 'Nilai 100! Sub-materi berikutnya (' + trackOrderOf(trkM)[idx + 1].name + ') sudah terbuka.'
          : 'Nilai 100! Semua tingkat ' + trkM + ' sudah terbuka.';
      } else {
        note += 'Nilai 100 (semua benar) membuka sub-materi berikutnya. Soal yang salah sudah masuk bank Soal yang Salah \u2014 perbaiki di sana sampai semua benar.';
      }
    } else if (origin === 'practice') {
      note = 'Latihan per jenis soal \u2014 1 menit per soal, tanpa passing grade. Ulangi sampai semua benar.';
      // Tampilkan progress jenis ini sekarang (dari pelacak per jenis).
      var pq0 = state.exam.fullSet && state.exam.fullSet[0];
      if (pq0) {
        var trkP = state.exam.track || 'TIU';
        if (trkP === 'TIU') {
          var pmk = masteryOf(pq0.type);
          if (pmk) {
            var pg = groupProgress(pmk, typeGroupNameOf(pq0), state.questions, state.typeBest, trkP);
            note += ' Progress jenis ini sekarang: ' + pg.pct + '% (benar ' + pg.correct + ' dari ' + pg.total + ' soal).';
          }
        } else {
          var op = trackOrderOf(trkP).filter(function (mm) { return mm.cat === pq0.cat; })[0];
          if (op) {
            var pg2 = groupProgress(op.key, pq0.type, trackQuestionsOf(trkP), state.typeBest, trkP);
            note += ' Progress jenis ini sekarang: ' + pg2.pct + '% (benar ' + pg2.correct + ' dari ' + pg2.total + ' soal).';
          }
        }
      }
    } else if (origin === 'sim') {
      var trkSim = state.exam.track || 'TIU';
      note = 'Simulasi CAT ' + trkSim + ' — ' + state.exam.fullSet.length + ' soal. Passing grade ' + trkSim + ': ' + TRACKS[trkSim].passing + ' (maks ' + res.max + ').';
      note += res.pass ? ' Lulus passing grade.' : ' Belum lulus passing grade — bisa diulang.';
    } else {
      var trkBoss = state.exam.track || 'TIU';
      var pgText = trkBoss === 'TKP' ? 'Bos TKP lulus hanya dengan nilai sempurna 150 (30/30).'
        : 'Passing grade ' + trkBoss + ': ' + TRACKS[trkBoss].passing + ' (minimal ' + (TRACKS[trkBoss].passing / 5) + ' soal benar); lulus bos hanya dengan nilai sempurna 150.';
      note = 'BOS ' + (state.exam.bossTier || 1) + ' ' + trkBoss + ' — Set Soal Baru. ' + pgText;
      if (perfect) {
        var earnedTitle = bossTitlesFor(trkBoss)[state.exam.bossTier || 1];
        note += ' Nilai sempurna! Gelar ‘' + earnedTitle + '’ diraih' +
          ((state.exam.bossTier || 1) < 5 ? ' dan BOS ' + ((state.exam.bossTier || 1) + 1) + ' sudah terbuka.' : ' — semua bos ' + trkBoss + ' sudah ditaklukkan!');
      } else {
        note += ' Gelar ‘' + bossTitlesFor(trkBoss)[state.exam.bossTier || 1] + '’ hanya untuk nilai sempurna (30/30). Bisa diulang sampai sempurna.';
      }
    }
    if (state.exam.prevScore !== null && state.exam.prevScore !== undefined && !(origin === 'skd' && state.exam.mode === 'repair')) {
      note = 'Nilai diperbarui dari ' + state.exam.prevScore + ' menjadi ' + res.score + '. ' + note;
    } else if (auto) {
      note = 'Waktu habis \u2014 jawaban otomatis dikumpulkan dan dinilai. ' + note;
    }
    $('res-note').textContent = note;
    $('res-correct').textContent = res.correct;
    $('res-wrong').textContent = res.wrong;
    $('res-blank').textContent = res.blank;
    /* Rincian nilai Simulasi SKD per materi + total + pernyataan lulus. */
    var skdBox = $('skd-result');
    if (skdBox) {
      /* Rincian per materi hanya untuk ujian SKD asli; perbaikan soal
         salah menampilkan skornya saja (maks bisa kurang dari 550). */
      if (origin === 'skd' && state.exam.mode !== 'repair' && res.twk && res.tiu && res.tkp) {
        skdBox.style.display = 'block';
        skdBox.innerHTML = skdResultHtml(res);
      } else {
        skdBox.style.display = 'none';
        skdBox.innerHTML = '';
      }
    }
    /* Ranking SKD: kirim nilai ke server setelah hasil tampil. Ranking HANYA
       dibuka dari kartu di menu Ujian (keputusan Bos item 9) — tidak ada
       tombol ranking di layar hasil. Bila offline, nilai disimpan tertunda
       — layar hasil tidak diblokir. */
    var skdNote = $('skd-submit-note');
    if (origin === 'skd' && state.exam.mode !== 'repair' && state.exam.isFirstSkd) {
      if (skdNote) { skdNote.style.display = 'block'; skdNote.textContent = 'Mengirim nilai ke Ranking SKD\u2026'; }
      mcSubmitSkd(state.exam.answers);
    } else if (origin === 'skd' && state.exam.mode !== 'repair' && !state.exam.isFirstSkd) {
      if (skdNote) { skdNote.style.display = 'block'; skdNote.textContent = 'Percobaan ulang \u2014 nilai tidak dikirim ke Ranking SKD; yang dipakai tetap ujian pertama.'; }
    } else {
      if (skdNote) { skdNote.style.display = 'none'; skdNote.textContent = ''; }
    }
    var list = $('res-wrong-list');
    list.innerHTML = '';
    if (res.wrongIds.length === 0) {
      var s = document.createElement('span');
      s.className = 'none';
      s.textContent = 'Tidak ada soal yang salah. Bagus sekali!';
      list.appendChild(s);
    } else {
      res.wrongIds.forEach(function (id) {
        var chip = document.createElement('span');
        chip.textContent = 'No. ' + id;
        list.appendChild(chip);
      });
    }
    /* Tombol soal yang salah: tampil bila ada soal salah, termasuk
       Simulasi SKD (keputusan Bos 2026-11-28) — untuk belajar dari
       soal yang keliru. Nilai ujian pertama tidak berubah. */
    $('btn-repair').style.display = res.wrongIds.length > 0 ? 'block' : 'none';
    $('btn-repair').textContent = origin === 'skd' ? 'Lihat Soal yang Salah' : 'Perbaiki soal yang salah';
    if (origin === 'exam') {
      $('btn-retry').textContent = state.exam.bossTier ? 'Ulangi BOS ' + state.exam.bossTier : 'Ulangi simulasi dari awal';
    } else if (origin === 'skd') {
      $('btn-retry').textContent = 'Ulangi Simulasi SKD';
    } else if (origin === 'sim') {
      $('btn-retry').textContent = 'Ulangi Simulasi CAT ' + (state.exam.track || 'TIU');
    } else if (origin === 'practice') {
      $('btn-retry').textContent = 'Ulangi latihan ini';
    } else {
      $('btn-retry').textContent = 'Ulangi latihan sub-materi ini';
    }
    $('btn-back-home').textContent = (origin === 'mastery' || origin === 'exam' || origin === 'practice') ? 'Kembali ke Ujian' : 'Kembali ke Beranda';
    var tb = $('res-title');
    if (tb) {
      /* Lencana di layar hasil simulasi yang memberi gelar Master CPNS:
         HANYA tulisan "Master CPNS" dengan mahkota — tanpa kata lain. */
      if (origin === 'skd' && state.exam.newlyTitled && state.exam.newTitle && state.exam.newTitle.title === 'Master CPNS') {
        tb.style.display = 'block';
        tb.innerHTML = '&#128081; Master CPNS';
        tb.classList.add('gold-frame');
        tb.classList.remove('boss-frame');
      } else if (state.titles.length > 0) { tb.style.display = 'block'; tb.innerHTML = '&#127942; Gelar: <b>' + esc(state.titles.map(function (t) { return t.title; }).join(' · ')) + '</b>';
        /* Bingkai lencana hasil: emas bila simulasi >= 500 (menang bila
           keduanya tercapai), safir bila Master berasal dari jalur
           Bos 5; bila belum ada keduanya, tanpa bingkai. */
        var resGold = skdGold() && hasMasterCpns(state.titles);
        tb.classList.toggle('gold-frame', resGold);
        tb.classList.toggle('boss-frame', !resGold && hasMasterCpns(state.titles) && isMasterBoss());
      }
      else { tb.style.display = 'none'; tb.classList.remove('gold-frame'); tb.classList.remove('boss-frame'); }
    }
    renderMasteryList();
    if (state.exam.newlyTitled) { showCelebration(res); return; }
    showScreen('exam');
  }

  function showCelebration(res) {
    $('cel-score').textContent = res.score + ' / ' + res.max;
    var nt = state.exam.newTitle;
    var ct = $('cel-title');
    if (ct) ct.textContent = nt ? nt.title : 'Master TIU';
    var cs = $('cel-sub');
    if (cs) cs.textContent = nt ? (nt.track === 'SKD' ? 'Kamu meraih gelar Master CPNS lewat Simulasi SKD!' : (nt.title === 'Master CPNS' ? 'Kamu menaklukkan BOS 5 di TIU, TWK, dan TKP dengan nilai sempurna!' : 'Kamu mengalahkan BOS ' + nt.boss + ' (' + (nt.track || 'TIU') + ') dengan nilai sempurna!')) : 'Kamu mengalahkan level BOS dengan nilai sempurna!';
    $('cel-date').textContent = nt
      ? new Date(state.titles.filter(function (t) { return t.title === nt.title; })[0].t).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
      : '';
    showScreen('celebration');
  }

  $('btn-cel-result').addEventListener('click', function () { showScreen('exam'); });
  $('btn-cel-jalur').addEventListener('click', function () {
    $('exam-result').style.display = 'none';
    $('exam-intro').style.display = 'block';
    state.exam = null;
    showScreen('mastery');
  });
  $('btn-retry').addEventListener('click', function () {
    var o = state.exam ? state.exam.origin : 'exam';
    if (o === 'skd') {
      startSimSKD();
    } else if (o === 'practice' && state.exam.practiceKey) {
      startPractice(state.exam.track || 'TIU', state.exam.practiceKey.cat, state.exam.practiceKey.subtype, state.exam.practiceKey.prefix);
    } else if (o === 'mastery' && state.exam.masteryKey) {
      startMastery(state.exam.track || 'TIU', state.exam.masteryKey);
    } else if (o === 'sim') {
      startSim(state.exam.track || 'TIU');
    } else if (state.exam && state.exam.bossTier > 1) {
      startBoss(state.exam.track || 'TIU', state.exam.bossTier);
    } else if (state.exam && state.exam.simSet === 'campuran') {
      startExamMixed();
    } else {
      startExam(state.exam ? state.exam.track || 'TIU' : 'TIU');
    }
  });
  $('btn-back-home').addEventListener('click', function () {
    var backToMastery = state.exam && (state.exam.origin === 'mastery' || state.exam.origin === 'exam' || state.exam.origin === 'practice');
    $('exam-result').style.display = 'none';
    $('exam-intro').style.display = 'block';
    state.exam = null;
    showScreen(backToMastery ? 'mastery' : 'home');
  });
  $('btn-repair').addEventListener('click', function () {
    /* SKD boleh diperbaiki untuk BELAJAR (asal skd): sesi repair asal
       skd; jawaban ujian yang sudah dikumpulkan tetap terkunci dan
       nilai ujian pertama tidak berubah. */
    var res = state.exam.lastResult;
    if (!res || res.wrongIds.length === 0) return;
    var baseAnswers = state.exam.answers;
    var fullSet = state.exam.fullSet;
    var repairSet = fullSet.filter(function (q) { return res.wrongIds.indexOf(q.id) !== -1; });
    state.exam = { answers: {}, current: 0, secondsLeft: null, timerId: null,
                   mode: 'repair', origin: state.exam.origin, set: repairSet, fullSet: fullSet,
                   masteryKey: state.exam.masteryKey, practiceKey: state.exam.practiceKey,
                   simSet: state.exam.simSet, bossTier: state.exam.bossTier, optOrder: null,
                   baseAnswers: baseAnswers, prevScore: res.score, running: true, lastResult: null,
                   newlyTitled: false, newTitle: null, track: state.exam.track || 'TIU' };
    attachRepairShuffle(state.exam);
    $('exam-result').style.display = 'none';
    $('exam-run').style.display = 'block';
    showScreen('exam'); // timer disembunyikan otomatis (bukan mode simulasi)
    renderQuestion();
  });

  // Tampilkan intro ujian saat pertama kali membuka tab Latihan
  if (!state.exam) { $('exam-intro').style.display = 'block'; }
  // Tampilkan gelar sejak awal (bukan hanya saat pindah tab):
  // layar beranda aktif lewat HTML, tapi showScreen('home') tidak dipanggil
  // saat muat pertama, jadi tanpa ini badge gelar tersembunyi.
  // (Riwayat latihan dan jumlah soal salah tidak lagi ditampilkan di Beranda.)
  renderTitleBadge();
  $('btn-wrongbank-back').addEventListener('click', function () { showScreen('mastery'); });
  $('btn-riwayat-back').addEventListener('click', function () { showScreen('mastery'); });
  /* Ranking SKD: hanya dari kartu di menu Ujian (keputusan Bos item 9). */
  $('btn-ranking-back').addEventListener('click', function () { showScreen(skdRankingReturn); });
  $('btn-ranking-refresh').addEventListener('click', function () { loadSkdRanking(); });
  /* Gerbang otentikasi di startup: ada sesi -> Beranda, tidak ada -> layar Masuk/Daftar. */
  mcInitAuth();
})();
