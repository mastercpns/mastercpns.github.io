# Master CPNS — Versi Web (v2.7 Web)

Aplikasi Master CPNS yang dibuka lewat browser (Safari di iPhone,
Chrome di Android) — tanpa install APK, tanpa Cordova.

## Isi

Salinan `tiu-apk/www/` v2.7 final + penanda "Versi 2.7 Web" dan meta
web (manifest, theme-color). Login + pembayaran TETAP aktif dan
menunjuk ke server live https://xgq9h8.bot-keep.xyz/ — sama seperti
APK. Satu akun bisa dipakai di Android maupun iPhone.

Fitur v2.7: Simulasi SKD 110 soal (TWK 30 / TIU 35 / TKP 45,
100 menit) + LJK + tombol Sebelumnya/Berikutnya, Ranking SKD,
menu SKD sejajar TIU/TWK/TKP, kartu Soal yang Salah + Riwayat
Latihan di atas menu Ujian, kartu "Ujian TIU", auto-aktivasi
pembayaran, dan logout paksa bila akun dihapus admin.

## Cara deploy

Hosting statis apa pun (GitHub Pages, Netlify, Cloudflare Pages,
atau folder `public/` di server Node yang sama). Unggah SELURUH isi
folder ini apa adanya; tidak ada proses build. Pakai HTTPS supaya
login dan "Add to Home Screen" jalan dengan benar. Server API
sudah mengizinkan CORS (`Access-Control-Allow-Origin: *`).

## Catatan

- Belajar tetap bisa offline SETELAH login pertama (data tersimpan
  di browser via localStorage), sama seperti APK.
- Kunci jawaban TIDAK PERNAH ditampilkan di layar mana pun
  (tetap tersimpan di file soal supaya penilaian bisa jalan offline).
- Dibangun oleh `../build_web.py` dari `tiu-apk/www/` — jangan edit
  file di sini langsung; ubah www/ lalu jalankan ulang build.
