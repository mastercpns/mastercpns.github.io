// Data soal TKP CPNS 2026 — 330 soal (bank final: 6 level x 30 + 5 bos x 30 soal baru).
// TKP memakai skor 1–5 per opsi (field "scores", permutasi 1..5; opsi terbaik "k"
// selalu bernilai 5; soal kosong = 0; nilai maksimal simulasi 45 soal = 225,
// passing grade 166). Bos TKP lulus hanya dengan nilai SEMPURNA 150 (30x5).
// TKP tanpa gambar (image selalu null).
// CATATAN: kunci jawaban ("k") dan skor tersimpan di data ini supaya penilaian bisa
// jalan sepenuhnya offline, tetapi TIDAK PERNAH ditampilkan di UI mana pun.
(function (root, factory) {
  var data = factory();
  if (typeof module !== 'undefined' && module.exports) { module.exports = data; }
  else { root.TKP_QUESTIONS = data; }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
  {
    id: 1,
    code: "PEL-01",
    cat: "Pelayanan Publik",
    type: "Warga marah & antrean panjang",
    q: "Seorang ibu yang menggendong bayi protes keras di loket kecamatan karena antrean pengurusan KK sudah berjalan dua jam dan nomornya belum juga dipanggil, padahal bayinya mulai rewel. Sikap Anda adalah…",
    options: [
      "Meminta maaf dengan tenang, menjelaskan penyebab antrean dan perkiraan waktu tunggu, lalu mendahulukan ibu itu sesuai aturan prioritas dan mencatat keluhan antrean untuk evaluasi.",
      "Menyuruh ibu itu bersabar tanpa penjelasan apa pun",
      "Meminta ibu itu pulang dan kembali besok pagi",
      "Memproses berkas ibu itu diam-diam tanpa antrean agar ia cepat pergi",
      "Meminta rekan lain menangani ibu itu supaya Anda tidak terganggu"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 1,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 2,
    code: "PEL-02",
    cat: "Pelayanan Publik",
    type: "Warga marah & antrean panjang",
    q: "Seorang bapak lanjut usia meninggikan suara di ruang tunggu dinas karena ia merasa nomor antreannya dilewati oleh warga yang datang belakangan. Beberapa warga lain mulai ikut ribut. Sikap Anda adalah…",
    options: [
      "Membiarkan keributan itu karena bukan tugas Anda menenangkan warga",
      "Menemui bapak itu dengan sopan, memeriksa urutan nomor antrean bersama-sama, menjelaskan hasilnya dengan tenang, dan menenangkan warga lain yang ikut ribut.",
      "Memarahi warga yang ikut ribut agar suasana kembali tenang",
      "Memberi nomor baru kepada bapak itu tanpa memeriksa urutan antrean",
      "Menyuruh bapak itu menunggu di luar sampai antrean selesai"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 3,
    code: "PEL-03",
    cat: "Pelayanan Publik",
    type: "Warga marah & antrean panjang",
    q: "Di loket pelayanan, seorang warga mengeluh dengan nada tinggi karena petugas sebelumnya memberinya informasi jam layanan yang berbeda dengan yang tertera di papan pengumuman, sehingga ia datang terlambat. Sikap Anda adalah…",
    options: [
      "Menyalahkan petugas sebelumnya di depan warga itu",
      "Menyuruh warga itu datang besok karena sudah telanjur terlambat",
      "Meminta maaf atas kekeliruan informasi itu, menjelaskan jam layanan yang benar, lalu tetap melayani urusannya selama masih dalam jam kerja dan melaporkan kekeliruan informasi itu ke atasan.",
      "Melayani warga itu tetapi tanpa meminta maaf atau menjelaskan apa pun",
      "Meminta warga itu mengadu ke atasan Anda sendiri"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 1,
      C: 5,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 4,
    code: "PEL-04",
    cat: "Pelayanan Publik",
    type: "Warga marah & antrean panjang",
    q: "Antrean di kantor kelurahan mengular hingga ke halaman karena hanya satu loket yang buka, sementara dua petugas lain sedang istirahat bersamaan. Warga mulai saling menyalahkan. Sikap Anda adalah…",
    options: [
      "Menyuruh warga bersabar karena petugas juga berhak istirahat",
      "Membiarkan antrean itu karena pengaturan jadwal bukan urusan Anda",
      "Membuka loket tambahan sendiri tanpa memberi tahu siapa pun",
      "Meminta maaf kepada warga, segera berkoordinasi agar loket tambahan dibuka, dan mengusulkan pengaturan jadwal istirahat bergilir agar kejadian itu tidak terulang.",
      "Meminta warga yang protes untuk pulang saja"
    ],
    k: "D",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 5,
    code: "PEL-05",
    cat: "Pelayanan Publik",
    type: "Warga marah & antrean panjang",
    q: "Seorang warga yang sudah antre sejak pagi marah karena berkasnya dikembalikan akibat ada satu lembar yang fotokopinya buram, padahal ia sudah menunggu lama. Sikap Anda adalah…",
    options: [
      "Menyuruh warga itu antre lagi dari awal setelah fotokopi ulang",
      "Memproses berkas buram itu agar warga tidak marah",
      "Menolak berkas itu tanpa menjelaskan letak kekurangannya",
      "Meminta rekan Anda yang menjelaskan kepada warga itu",
      "Menjelaskan dengan sabar bagian mana yang buram dan mengapa harus jelas, menunjukkan tempat fotokopi terdekat, dan memintanya kembali ke loket tanpa antre dari awal bila sudah lengkap."
    ],
    k: "E",
    scores: {
      A: 3,
      B: 2,
      C: 1,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 6,
    code: "PEL-06",
    cat: "Pelayanan Publik",
    type: "Warga marah & antrean panjang",
    q: "Seorang pengemudi ojek daring marah-marah di loket karena ia harus segera kembali bekerja, sementara antrean pengurusan surat keterangan domisili berjalan sangat lambat. Sikap Anda adalah…",
    options: [
      "Mendahulukan pengemudi itu tanpa antrean karena ia sedang bekerja",
      "Menyuruh pengemudi itu menunggu dengan sabar tanpa penjelasan",
      "Menjelaskan perkiraan waktu tunggu dengan jujur, menawarkan pilihan layanan yang tersedia sesuai aturan, dan mencatat keterlambatan layanan itu sebagai bahan evaluasi.",
      "Meminta pengemudi itu mengurus suratnya di hari lain",
      "Mengabaikan keluhannya dan tetap melayani seperti biasa"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 1,
      C: 5,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 7,
    code: "PEL-07",
    cat: "Pelayanan Publik",
    type: "Warga marah & antrean panjang",
    q: "Seorang warga merekam video antrean panjang di kantor Anda sambil berkata akan mengunggahnya ke media sosial karena pelayanan dinilai lambat. Sikap Anda adalah…",
    options: [
      "Meminta warga itu menghapus videonya dengan nada mengancam",
      "Membiarkan warga itu merekam tanpa melakukan apa pun",
      "Berhenti melayani sampai warga itu berhenti merekam",
      "Tetap melayani dengan ramah dan profesional, menjelaskan upaya yang sedang dilakukan untuk mempercepat antrean, lalu melaporkan kondisi antrean itu ke atasan sebagai bahan perbaikan.",
      "Menjelaskan alasan antrean tetapi tidak melaporkan kondisi itu ke atasan"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 8,
    code: "PEL-08",
    cat: "Pelayanan Publik",
    type: "Warga marah & antrean panjang",
    q: "Pada hari pasar, loket pelayanan dipadati warga yang mengurus berbagai surat sekaligus. Seorang warga yang antreannya masih jauh mengeluh kelelahan dan meminta kepastian kapan gilirannya tiba. Sikap Anda adalah…",
    options: [
      "Menyuruh warga itu pulang dan kembali di hari yang sepi",
      "Memberi kepastian waktu yang tidak Anda ketahui hanya agar ia tenang",
      "Mengabaikan keluhannya karena semua warga juga menunggu",
      "Meminta warga itu menanyakan sendiri ke petugas lain",
      "Memberi perkiraan waktu tunggu yang jujur, menyarankan tempat duduk yang tersedia, dan memastikan nomor antreannya tetap terpantau agar tidak terlewat."
    ],
    k: "E",
    scores: {
      A: 2,
      B: 3,
      C: 1,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 9,
    code: "PEL-09",
    cat: "Pelayanan Publik",
    type: "Berkas/syarat tidak lengkap",
    q: "Seorang warga mengurus akta kelahiran anaknya, tetapi surat keterangan lahir dari bidan tertinggal di rumah. Ia tinggal di desa yang jauh dan antrean di belakangnya panjang. Sikap Anda adalah…",
    options: [
      "Menjelaskan dengan bahasa sederhana dokumen yang kurang dan alasannya, lalu menawarkan pengiriman susulan melalui pos atau daring bila aturan membolehkan, agar ia tidak perlu bolak-balik.",
      "Menolak berkasnya mentah-mentah tanpa penjelasan",
      "Menerima berkas tanpa surat keterangan lahir agar ia tidak kecewa",
      "Menyuruhnya melengkapi dulu tanpa memberi tahu cara termudahnya",
      "Meminta warga di belakangnya menunggu sementara Anda mengurus warga itu"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 1,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 10,
    code: "PEL-10",
    cat: "Pelayanan Publik",
    type: "Berkas/syarat tidak lengkap",
    q: "Seorang pemuda mengurus surat keterangan tidak mampu untuk beasiswa, tetapi slip gaji orang tuanya tidak dibawa karena orang tuanya bekerja serabutan tanpa slip gaji. Sikap Anda adalah…",
    options: [
      "Menolak permohonannya karena syarat tidak lengkap",
      "Menjelaskan syarat yang diperlukan, lalu membantu mencarikan pengganti yang sah menurut aturan, misalnya surat keterangan penghasilan dari kelurahan, dan memandu cara mengurusnya.",
      "Menerima permohonan tanpa syarat apa pun agar ia cepat selesai",
      "Menyuruhnya mencari sendiri pengganti syarat itu tanpa arahan",
      "Meminta pemuda itu kembali besok tanpa penjelasan"
    ],
    k: "B",
    scores: {
      A: 2,
      B: 5,
      C: 1,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 11,
    code: "PEL-11",
    cat: "Pelayanan Publik",
    type: "Berkas/syarat tidak lengkap",
    q: "Seorang warga mengurus perpanjangan KTP, tetapi fotonya di berkas sudah sangat lama dan tidak lagi menyerupai wajahnya sekarang. Petugas sebelumnya sudah mengingatkannya, tetapi ia tetap bersikeras memakai foto lama itu. Sikap Anda adalah…",
    options: [
      "Menerima foto lama itu agar tidak terjadi perdebatan",
      "Menolak dengan kasar dan menyuruhnya pulang",
      "Memproses berkasnya tetapi mencatat foto itu sebagai masalah",
      "Membiarkan warga itu menunggu tanpa kejelasan",
      "Menjelaskan dengan sopan mengapa foto terbaru diperlukan untuk keamanan datanya, lalu mengarahkan ke tempat foto terdekat dan memastikan berkasnya tetap diproses begitu foto baru tersedia."
    ],
    k: "E",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 12,
    code: "PEL-12",
    cat: "Pelayanan Publik",
    type: "Berkas/syarat tidak lengkap",
    q: "Seorang ibu mengurus kartu keluarga baru setelah menikah, tetapi buku nikahnya belum dilegalisasi. Ia tidak tahu harus melegalisasi di mana. Sikap Anda adalah…",
    options: [
      "Menjelaskan bahwa legalisasi diperlukan, menunjukkan tempat dan langkah legalisasi yang paling dekat, dan mencatat berkasnya agar dapat dilanjutkan begitu legalisasi selesai.",
      "Menolak berkasnya dan menyuruhnya mencari tahu sendiri",
      "Menerima berkas tanpa legalisasi karena kasihan",
      "Menyuruhnya kembali tanpa menjelaskan apa itu legalisasi",
      "Meminta ibu itu bertanya ke petugas lain"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 1,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 13,
    code: "PEL-13",
    cat: "Pelayanan Publik",
    type: "Berkas/syarat tidak lengkap",
    q: "Seorang warga mengurus izin usaha kecil, tetapi denah lokasi usahanya belum digambar dan ia tidak tahu cara membuatnya. Tenggat pengajuan bantuan usaha sudah dekat. Sikap Anda adalah…",
    options: [
      "Menolak permohonan izin itu karena denahnya belum ada",
      "Menjelaskan isi denah yang diperlukan dengan contoh sederhana, membantu menggambar sketsa dasar bersama warga itu, lalu memeriksa kelengkapan berkas lainnya agar tidak ada yang tertinggal.",
      "Menerima permohonan tanpa denah agar tenggatnya tidak terlewat",
      "Menyuruh warga itu menyewa jasa gambar tanpa memberi contoh",
      "Meminta warga itu mengurus denah di lain waktu tanpa kepastian"
    ],
    k: "B",
    scores: {
      A: 2,
      B: 5,
      C: 1,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 14,
    code: "PEL-14",
    cat: "Pelayanan Publik",
    type: "Berkas/syarat tidak lengkap",
    q: "Seorang mahasiswa mengurus surat keterangan domisili untuk keperluan magang, tetapi surat pengantar dari kampusnya belum ditandatangani dosen pembimbing. Ia memohon agar tetap diproses karena magang dimulai besok. Sikap Anda adalah…",
    options: [
      "Memproses surat itu tanpa tanda tangan karena waktunya mendesak",
      "Menolak mentah-mentah tanpa memberi solusi",
      "Menjelaskan bahwa tanda tangan itu wajib, lalu menghubunginya dengan pilihan yang sah, seperti meminta tanda tangan elektronik dari kampus atau surat pengantar pengganti, dan mencatat permohonannya.",
      "Menyuruhnya menunggu dosennya tanpa alternatif lain",
      "Meminta mahasiswa itu mengurus sendiri tanpa arahan"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 1,
      C: 5,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 15,
    code: "PEL-15",
    cat: "Pelayanan Publik",
    type: "Berkas/syarat tidak lengkap",
    q: "Seorang warga mengurus surat pindah domisili, tetapi kartu keluarganya masih tercatat di alamat lama dan belum diperbarui. Ia mengaku sudah lama pindah tetapi baru sempat mengurusnya. Sikap Anda adalah…",
    options: [
      "Memproses surat pindah itu tanpa memperbarui kartu keluarga",
      "Menolak dan menyuruhnya pulang tanpa penjelasan urutannya",
      "Menyuruhnya mengurus sendiri tanpa daftar langkah",
      "Menjelaskan urutan pengurusan yang benar dengan bahasa yang mudah dipahami, membantu memeriksa data yang perlu diperbarui lebih dulu, dan memberi daftar langkah agar ia tidak bolak-balik.",
      "Meminta warga itu menunggu sampai ada petugas lain yang sempat"
    ],
    k: "D",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 16,
    code: "PEL-16",
    cat: "Pelayanan Publik",
    type: "Berkas/syarat tidak lengkap",
    q: "Seorang petani mengurus bantuan pupuk bersubsidi, tetapi fotokopi kartu taninya buram dan nomornya sulit dibaca. Ia sudah menempuh perjalanan jauh dengan sepeda motor. Sikap Anda adalah…",
    options: [
      "Menolak berkasnya karena fotokopinya buram",
      "Menjelaskan bagian nomor yang sulit dibaca, membantunya memeriksa nomor itu melalui data yang tersedia di kantor bila memungkinkan, dan mengarahkan cara mendapatkan salinan yang jelas.",
      "Menerima berkas buram itu tanpa memeriksa nomornya",
      "Menyuruh petani itu pulang untuk fotokopi ulang tanpa bantuan apa pun",
      "Meminta petani itu bertanya ke petugas lain"
    ],
    k: "B",
    scores: {
      A: 2,
      B: 5,
      C: 1,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 17,
    code: "PEL-17",
    cat: "Pelayanan Publik",
    type: "Menolak imbalan (tanpa pamrih)",
    q: "Setelah surat izin usahanya selesai lebih cepat dari perkiraan, seorang pengusaha menyelipkan uang ke dalam map berkas Anda sambil berkata itu sekadar ucapan terima kasih. Sikap Anda adalah…",
    options: [
      "Menerima uang itu karena layanan sudah selesai",
      "Menerima lalu membagikannya kepada rekan satu loket",
      "Menolak uang itu dengan sopan, menjelaskan bahwa pelayanan tidak memerlukan imbalan apa pun, dan mengembalikan uang itu langsung kepada pengusaha tersebut.",
      "Menerima tetapi berjanji tidak akan mengulanginya",
      "Meminta pengusaha itu menyerahkan uang itu kepada atasan Anda"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 2,
      C: 5,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 18,
    code: "PEL-18",
    cat: "Pelayanan Publik",
    type: "Menolak imbalan (tanpa pamrih)",
    q: "Seorang warga yang Anda bantu mengurus akta kelahiran menawarkan sekotak makanan mahal sebagai tanda terima kasih dan memaksa Anda menerimanya. Sikap Anda adalah…",
    options: [
      "Menerima makanan itu karena nilainya kecil dan bukan uang",
      "Menerima lalu membagikannya kepada rekan kerja",
      "Menerima karena tidak enak menolak pemberian warga",
      "Menolak dengan halus dan sopan, menjelaskan bahwa membantu warga adalah tugas Anda, dan mengucapkan terima kasih atas niat baiknya tanpa menerima pemberian itu.",
      "Meminta warga itu memberikan makanan itu kepada petugas lain"
    ],
    k: "D",
    scores: {
      A: 2,
      B: 3,
      C: 1,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 19,
    code: "PEL-19",
    cat: "Pelayanan Publik",
    type: "Menolak imbalan (tanpa pamrih)",
    q: "Seorang calo menawarkan komisi kepada Anda bila Anda mau mendahulukan berkas kliennya di antrean loket. Ia berkata tidak ada yang akan tahu. Sikap Anda adalah…",
    options: [
      "Menerima tawaran itu karena tidak ada yang tahu",
      "Menolak tawaran itu tetapi diam saja tanpa melapor",
      "Mendahulukan satu berkas saja sebagai percobaan",
      "Meminta calo itu menaikkan komisinya lebih dulu",
      "Menolak tawaran itu dengan tegas namun sopan, tetap melayani sesuai urutan antrean, dan melaporkan tawaran calo itu kepada atasan sesuai prosedur."
    ],
    k: "E",
    scores: {
      A: 1,
      B: 3,
      C: 2,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 20,
    code: "PEL-20",
    cat: "Pelayanan Publik",
    type: "Menolak imbalan (tanpa pamrih)",
    q: "Seorang warga yang urusannya Anda percepat karena dokumennya memang sudah lengkap menawarkan untuk mentraktir Anda makan siang di restoran mahal sebagai balasan. Sikap Anda adalah…",
    options: [
      "Menolak traktir itu dengan sopan, menjelaskan bahwa pelayanan cepat itu memang sudah menjadi tugas Anda, dan menyarankan warga itu tidak perlu membalas apa pun.",
      "Menerima traktir itu karena bukan uang tunai",
      "Menerima traktir itu tetapi hanya sekali",
      "Menerima karena urusannya memang sudah selesai",
      "Meminta warga itu mentraktir seluruh petugas loket"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 3,
      D: 1,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 21,
    code: "PEL-21",
    cat: "Pelayanan Publik",
    type: "Menolak imbalan (tanpa pamrih)",
    q: "Seorang pengembang perumahan menitipkan bingkisan berisi barang elektronik kepada Anda dengan harapan pengurusan izinnya diprioritaskan. Sikap Anda adalah…",
    options: [
      "Menerima bingkisan itu tetapi tetap memproses sesuai antrean",
      "Menerima bingkisan itu dan memprioritaskan izinnya",
      "Menerima bingkisan itu lalu memberikannya kepada rekan",
      "Menolak bingkisan itu dengan sopan, menjelaskan bahwa semua permohonan diproses sesuai urutan dan aturan, lalu mencatat kejadian itu untuk dilaporkan bila diperlukan.",
      "Meminta pengembang itu menitipkan bingkisan itu kepada atasan"
    ],
    k: "D",
    scores: {
      A: 3,
      B: 1,
      C: 2,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 22,
    code: "PEL-22",
    cat: "Pelayanan Publik",
    type: "Menolak imbalan (tanpa pamrih)",
    q: "Seorang warga yang sudah Anda layani dengan baik memberikan amplop kepada Anda di parkiran, jauh dari loket, sambil berkata itu hanya untuk ongkos bensin. Sikap Anda adalah…",
    options: [
      "Menerima amplop itu karena diberikan di luar loket",
      "Menerima karena jumlahnya kecil dan hanya ongkos bensin",
      "Menerima lalu menyumbangkannya ke kas kantor",
      "Meminta warga itu memberikan amplop itu kepada petugas keamanan",
      "Menolak amplop itu dengan sopan di tempat itu juga dan menjelaskan bahwa pelayanan tidak boleh disertai imbalan dalam bentuk apa pun."
    ],
    k: "E",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 23,
    code: "PEL-23",
    cat: "Pelayanan Publik",
    type: "Menolak imbalan (tanpa pamrih)",
    q: "Seorang warga menawarkan Anda menjadi prioritas langganan bengkelnya dengan harga khusus bila Anda bersedia mempercepat pengurusan surat-suratnya setiap kali ia datang. Sikap Anda adalah…",
    options: [
      "Menolak tawaran itu dengan sopan, menjelaskan bahwa setiap warga dilayani dengan standar yang sama, dan tetap memproses suratnya sesuai prosedur yang berlaku.",
      "Menerima tawaran itu karena hanya diskon bengkel, bukan uang",
      "Menerima tawaran itu tetapi berjanji tidak memprioritaskan berkasnya",
      "Menerima karena ia pelanggan tetap loket Anda",
      "Meminta warga itu menawarkan diskon itu kepada semua petugas"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 3,
      D: 1,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 24,
    code: "PEL-24",
    cat: "Pelayanan Publik",
    type: "Sistem error & perbaikan layanan",
    q: "Dalam sebulan terakhir, banyak warga mengeluh karena formulir permohonan selalu dikembalikan akibat petunjuk pengisiannya membingungkan, dan antrean pengaduan semakin panjang. Sikap Anda adalah…",
    options: [
      "Menyuruh warga membaca sendiri petunjuk yang tertempel di dinding",
      "Meminta maaf atas ketidaknyamanan itu, menyederhanakan penjelasan pengisian formulir dengan contoh yang sudah diisi, dan mengusulkan perbaikan petunjuk itu ke atasan agar tidak terulang",
      "Mengabaikan keluhan itu karena formulirnya sudah sesuai aturan",
      "Menjelaskan cara mengisi formulir itu satu per satu kepada warga yang bertanya",
      "Meminta warga mengisi formulir di rumah dengan bantuan keluarga"
    ],
    k: "B",
    scores: {
      A: 2,
      B: 5,
      C: 1,
      D: 4,
      E: 3
    },
    image: null,
    boss: null
  },
  {
    id: 25,
    code: "PEL-25",
    cat: "Pelayanan Publik",
    type: "Sistem error & perbaikan layanan",
    q: "Aplikasi pendaftaran antrean daring kantor Anda tidak bisa diakses sejak pagi, sehingga warga yang sudah mendaftar tidak mendapat nomor antrean. Sikap Anda adalah…",
    options: [
      "Meminta warga mendaftar ulang besok",
      "Melayani warga yang datang duluan saja tanpa nomor antrean",
      "Menjelaskan kendala itu, memberi nomor antrean manual sementara sesuai urutan kedatangan, mendata kontak warga, dan melaporkan gangguan aplikasi itu ke petugas teknis.",
      "Menyuruh warga bersabar tanpa memberi nomor sementara",
      "Menutup pendaftaran sampai aplikasi pulih"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 2,
      C: 5,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 26,
    code: "PEL-26",
    cat: "Pelayanan Publik",
    type: "Sistem error & perbaikan layanan",
    q: "Jaringan internet kantor terputus di tengah pelayanan, sehingga data warga tidak bisa diverifikasi. Antrean mulai menumpuk. Sikap Anda adalah…",
    options: [
      "Menjelaskan kondisi jaringan kepada warga, melayani hal-hal yang masih bisa dilakukan tanpa verifikasi daring, mencatat data yang tertunda, dan segera melaporkan gangguan itu ke atasan.",
      "Meminta warga pulang dan kembali saat jaringan pulih",
      "Memproses semua berkas tanpa verifikasi apa pun",
      "Menyuruh warga menunggu tanpa penjelasan",
      "Menutup loket sampai jaringan kembali"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 1,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 27,
    code: "PEL-27",
    cat: "Pelayanan Publik",
    type: "Sistem error & perbaikan layanan",
    q: "Seorang warga mengeluh bahwa formulir pengurusan surat di kantor Anda membingungkan dan banyak warga salah mengisi. Sikap Anda adalah…",
    options: [
      "Menyalahkan warga karena tidak membaca petunjuk",
      "Meminta maaf atas kebingungan itu, menjelaskan cara mengisi formulir dengan contoh, lalu mencatat keluhan itu dan mengusulkan penyederhanaan formulir kepada atasan.",
      "Membiarkan formulir itu karena sudah lama dipakai",
      "Menjelaskan cara mengisi tetapi tidak mencatat keluhannya",
      "Meminta warga itu mengisi sendiri tanpa contoh"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 28,
    code: "PEL-28",
    cat: "Pelayanan Publik",
    type: "Sistem error & perbaikan layanan",
    q: "Listrik padam saat loket sedang melayani banyak warga, sehingga komputer dan pencetak tidak bisa dipakai. Sikap Anda adalah…",
    options: [
      "Meminta semua warga pulang tanpa pendataan",
      "Menyuruh warga menunggu dalam gelap tanpa penjelasan",
      "Menjelaskan keadaan itu dengan tenang, memberi perkiraan waktu, melayani hal yang masih bisa dilakukan secara manual sesuai aturan, mendata warga yang tertunda, dan melapor ke atasan.",
      "Memproses berkas di luar sistem agar cepat selesai",
      "Menutup loket dan pulang lebih awal"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 2,
      C: 5,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 29,
    code: "PEL-29",
    cat: "Pelayanan Publik",
    type: "Sistem error & perbaikan layanan",
    q: "Anda menemukan bahwa jam layanan yang tertera di papan pengumuman berbeda dengan jam layanan di media sosial kantor, sehingga banyak warga datang di jam yang salah. Sikap Anda adalah…",
    options: [
      "Membiarkan perbedaan itu karena bukan tugas Anda",
      "Menyalahkan warga yang membaca media sosial",
      "Menjelaskan jam yang benar tetapi tidak melaporkan perbedaan itu",
      "Meminta maaf kepada warga yang terdampak, menjelaskan jam layanan yang benar, lalu segera melaporkan perbedaan informasi itu agar papan pengumuman dan media sosial diperbaiki.",
      "Meminta warga itu mengadu ke bagian humas sendiri"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 30,
    code: "PEL-30",
    cat: "Pelayanan Publik",
    type: "Sistem error & perbaikan layanan",
    q: "Beberapa warga mengeluh bahwa loket pelayanan selalu tutup lebih awal dari jadwal tanpa pemberitahuan. Sikap Anda adalah…",
    options: [
      "Membela petugas loket tanpa memeriksa jadwal",
      "Mengabaikan keluhan itu karena sudah sering terdengar",
      "Melayani warga itu tetapi tidak melaporkan keluhannya",
      "Menyuruh warga itu datang lebih pagi besok",
      "Mendengarkan keluhan itu dengan serius, memeriksa jadwal layanan yang berlaku, melayani warga yang masih dalam jam layanan, dan melaporkan keluhan itu ke atasan sebagai bahan evaluasi."
    ],
    k: "E",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 31,
    code: "JEJ-01",
    cat: "Jejaring Kerja",
    type: "Kolaborasi lintas unit/instansi",
    q: "Dua unit di instansi Anda diminta menggelar pelatihan gabungan untuk pegawai baru, tetapi masing-masing unit sudah menyusun jadwal sendiri-sendiri dan tidak ada yang mau mengubah jadwalnya. Sikap Anda adalah…",
    options: [
      "Mengundang perwakilan kedua unit untuk duduk bersama, menyatukan jadwal yang berbenturan, dan menyepakati pembagian materi serta penanggung jawab tiap sesi",
      "Membiarkan masing-masing unit menjalankan pelatihannya sendiri-sendiri",
      "Memaksakan jadwal unit Anda dan meminta unit lain menyesuaikan diri",
      "Mengusulkan jadwal gabungan lewat surat ke kedua unit tanpa mengajak mereka berdiskusi dulu",
      "Melaporkan kebuntuan jadwal itu ke atasan dan menunggu arahan"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 1,
      D: 4,
      E: 3
    },
    image: null,
    boss: null
  },
  {
    id: 32,
    code: "JEJ-02",
    cat: "Jejaring Kerja",
    type: "Kolaborasi lintas unit/instansi",
    q: "Dinas Anda dan dinas kesehatan harus bersama-sama mengadakan posko banjir, tetapi pembagian tugas di antara keduanya belum disepakati dan waktu pelaksanaan sudah dekat. Sikap Anda adalah…",
    options: [
      "Menunggu dinas kesehatan yang mengatur semuanya",
      "Mengusulkan pertemuan koordinasi secepatnya, membawa daftar tugas yang perlu dibagi, dan menyepakati pembagian peran serta jalur komunikasi selama posko berjalan.",
      "Menjalankan posko sendiri tanpa koordinasi",
      "Mengirim surat pembagian tugas sepihak tanpa diskusi",
      "Meminta atasan Anda yang memutuskan semuanya"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 33,
    code: "JEJ-03",
    cat: "Jejaring Kerja",
    type: "Kolaborasi lintas unit/instansi",
    q: "Program pelatihan bagi pelaku UMKM di daerah Anda membutuhkan narasumber dari balai pelatihan provinsi, tetapi Anda belum pernah berhubungan dengan balai itu. Sikap Anda adalah…",
    options: [
      "Membatalkan pelatihan karena tidak ada narasumber",
      "Menunggu balai pelatihan menghubungi Anda",
      "Mempelajari program balai pelatihan itu, menghubungi pihak balai untuk memperkenalkan program Anda, lalu menyepakati jadwal dan kebutuhan narasumber bersama.",
      "Mengirim surat permintaan tanpa perkenalan program Anda",
      "Menjalankan pelatihan tanpa narasumber"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 1,
      C: 5,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 34,
    code: "JEJ-04",
    cat: "Jejaring Kerja",
    type: "Kolaborasi lintas unit/instansi",
    q: "Unit Anda diminta menyediakan data kependudukan untuk perencanaan anggaran, tetapi format data yang diminta berbeda dengan format yang biasa Anda pakai. Sikap Anda adalah…",
    options: [
      "Mengirim data dalam format lama tanpa memberi tahu",
      "Menolak menyediakan data karena formatnya berbeda",
      "Meminta unit itu menyesuaikan dengan format Anda",
      "Menghubungi unit peminta data untuk menyamakan format dan batas waktu, lalu menyiapkan data dalam format yang disepakati dan memeriksa kembali sebelum dikirim.",
      "Menyuruh rekan lain yang menyiapkan datanya"
    ],
    k: "D",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 35,
    code: "JEJ-05",
    cat: "Jejaring Kerja",
    type: "Kolaborasi lintas unit/instansi",
    q: "Dua kecamatan harus berbagi satu unit mobil layanan keliling, tetapi jadwal pemakaiannya bentrok pada hari yang sama. Sikap Anda adalah…",
    options: [
      "Memakai mobil itu sepihak pada hari yang bentrok",
      "Membiarkan bentrok itu tanpa dibicarakan",
      "Melaporkan kecamatan lain ke atasan tanpa diskusi dulu",
      "Membatalkan layanan keliling pada hari itu",
      "Menghubungi koordinator kecamatan lain, membahas kebutuhan masing-masing, lalu menyepakati jadwal bergilir yang adil dan mencatat kesepakatan itu bersama."
    ],
    k: "E",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 36,
    code: "JEJ-06",
    cat: "Jejaring Kerja",
    type: "Kolaborasi lintas unit/instansi",
    q: "Tim Anda dan tim humas harus menerbitkan pengumuman layanan baru secara bersamaan, tetapi draf pengumuman dari kedua tim berbeda isinya. Sikap Anda adalah…",
    options: [
      "Menerbitkan draf versi tim Anda sendiri",
      "Membiarkan kedua versi terbit berbeda",
      "Mengajak tim humas menyamakan draf itu dalam satu pertemuan singkat, menyepakati isi dan waktu terbitnya, lalu menerbitkannya serentak melalui kanal yang disepakati.",
      "Meminta atasan memilih salah satu draf tanpa diskusi",
      "Menunda pengumuman sampai ada yang mengalah"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 1,
      C: 5,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 37,
    code: "JEJ-07",
    cat: "Jejaring Kerja",
    type: "Kolaborasi lintas unit/instansi",
    q: "Instansi Anda akan menggelar vaksinasi massal bersama puskesmas dan relawan desa, tetapi jumlah tenaga pencatat masih kurang. Sikap Anda adalah…",
    options: [
      "Menjalankan vaksinasi tanpa pencatatan yang rapi",
      "Menunggu puskesmas yang menyediakan semua pencatat",
      "Meminta relawan bekerja tanpa pembagian tugas yang jelas",
      "Berkoordinasi dengan puskesmas dan relawan untuk membagi tugas pencatatan, menawarkan petugas dari unit Anda, dan menyepakati alur pencatatan bersama sebelum hari pelaksanaan.",
      "Membatalkan sebagian jadwal vaksinasi"
    ],
    k: "D",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 38,
    code: "JEJ-08",
    cat: "Jejaring Kerja",
    type: "Kolaborasi lintas unit/instansi",
    q: "Laporan gabungan dari tiga unit harus selesai minggu ini, tetapi satu unit belum mengirimkan bagiannya dan tidak membalas pesan. Sikap Anda adalah…",
    options: [
      "Menyelesaikan laporan tanpa bagian unit itu dan tanpa catatan",
      "Melaporkan unit itu ke pimpinan tanpa mencoba menghubungi",
      "Menunggu tanpa batas waktu yang jelas",
      "Meminta unit lain mengerjakan bagian yang tertinggal",
      "Mendatangi atau menghubungi langsung penanggung jawab unit itu, menanyakan kendalanya, menawarkan bantuan menyelesaikan bagiannya, dan menyepakati batas waktu pengiriman yang baru."
    ],
    k: "E",
    scores: {
      A: 2,
      B: 3,
      C: 1,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 39,
    code: "JEJ-09",
    cat: "Jejaring Kerja",
    type: "Konflik dalam tim",
    q: "Dua anggota tim Anda berdebat sengit soal metode pengolahan data — satu ingin memakai cara lama yang sudah teruji, satu lagi ingin memakai aplikasi baru yang lebih cepat — sehingga rapat persiapan tertunda dan suasana tim memanas. Sikap Anda adalah…",
    options: [
      "Mengajak keduanya menguji kedua metode pada sebagian kecil data, membandingkan hasilnya bersama, lalu menyepakati metode yang dipakai tim berdasarkan bukti itu",
      "Membiarkan mereka berdebat sampai salah satu menyerah",
      "Memutuskan sendiri metode yang dipakai tanpa mendengar keduanya",
      "Meminta keduanya menyampaikan kelebihan dan kekurangan metodenya, lalu mengusulkan tim mencoba aplikasi baru pada tugas berikutnya",
      "Menunda rapat persiapan sampai mereka berdamai sendiri"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 1,
      D: 4,
      E: 3
    },
    image: null,
    boss: null
  },
  {
    id: 40,
    code: "JEJ-10",
    cat: "Jejaring Kerja",
    type: "Konflik dalam tim",
    q: "Seorang rekan merasa tugasnya lebih berat daripada rekan lain dan mulai bekerja dengan setengah hati. Suasana tim menjadi tegang. Sikap Anda adalah…",
    options: [
      "Mengabaikan sikapnya karena itu masalah pribadi",
      "Mengajak rekan itu bicara secara pribadi, mendengarkan keluhannya, lalu mengusulkan peninjauan pembagian tugas bersama tim agar beban terasa adil.",
      "Menyindir rekan itu di depan tim agar ia sadar",
      "Membagi ulang tugas sepihak tanpa bertanya ke tim",
      "Melaporkan rekan itu ke atasan sebagai pemalas"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 41,
    code: "JEJ-11",
    cat: "Jejaring Kerja",
    type: "Konflik dalam tim",
    q: "Dalam rapat tim, dua anggota berdebat keras tentang metode pendataan warga dan rapat tidak menghasilkan keputusan. Sikap Anda adalah…",
    options: [
      "Keluar dari rapat karena suasana memanas",
      "Memaksakan metode yang Anda sukai",
      "Memutuskan dengan voting tanpa mendengar penjelasan keduanya",
      "Menunda rapat tanpa jadwal lanjutan yang jelas",
      "Menenangkan suasana, merangkum kelebihan masing-masing metode, lalu mengusulkan uji coba singkat pada sebagian data dan memutuskan bersama berdasarkan hasilnya."
    ],
    k: "E",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 42,
    code: "JEJ-12",
    cat: "Jejaring Kerja",
    type: "Konflik dalam tim",
    q: "Seorang rekan menuduh rekan lain mengambil alih pekerjaannya tanpa izin, padahal sebenarnya ada miskomunikasi pembagian tugas. Sikap Anda adalah…",
    options: [
      "Mempertemukan keduanya untuk mengklarifikasi pembagian tugas yang sebenarnya, menjelaskan letak miskomunikasinya, dan menyepakati batas tugas masing-masing ke depan.",
      "Membiarkan tuduhan itu karena bukan urusan Anda",
      "Memihak rekan yang menuduh karena ia lebih dulu bicara",
      "Menyalahkan keduanya di depan tim",
      "Melaporkan tuduhan itu ke atasan tanpa klarifikasi"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 1,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 43,
    code: "JEJ-13",
    cat: "Jejaring Kerja",
    type: "Konflik dalam tim",
    q: "Tim Anda terpecah menjadi dua kelompok yang saling tidak mau bekerja sama setelah terjadi perbedaan pendapat soal jadwal piket. Sikap Anda adalah…",
    options: [
      "Membiarkan kedua kelompok bekerja sendiri-sendiri",
      "Mengajak kedua kelompok berdiskusi bersama, mendengarkan keberatan masing-masing, lalu menyusun jadwal piket baru yang disepakati bersama dan dipantau pelaksanaannya.",
      "Memihak kelompok yang jumlahnya lebih banyak",
      "Menyusun jadwal baru sepihak tanpa diskusi",
      "Meminta atasan membubarkan tim itu"
    ],
    k: "B",
    scores: {
      A: 2,
      B: 5,
      C: 1,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 44,
    code: "JEJ-14",
    cat: "Jejaring Kerja",
    type: "Konflik dalam tim",
    q: "Seorang rekan baru dan rekan lama berselisih karena rekan lama merasa caranya dikritik, sementara rekan baru merasa hanya memberi saran. Sikap Anda adalah…",
    options: [
      "Membiarkan perselisihan itu reda sendiri",
      "Memihak rekan lama karena ia lebih berpengalaman",
      "Menjadi penengah dengan mendengarkan keduanya secara bergiliran, menjelaskan maksud saran itu tanpa menyalahkan siapa pun, dan menyepakati cara memberi masukan yang disepakati tim.",
      "Menyuruh rekan baru berhenti memberi saran",
      "Melaporkan keduanya ke atasan"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 1,
      C: 5,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 45,
    code: "JEJ-15",
    cat: "Jejaring Kerja",
    type: "Konflik dalam tim",
    q: "Pembagian honor kegiatan tim dipersoalkan karena seorang anggota merasa kontribusinya lebih besar tetapi honornya sama dengan yang lain. Sikap Anda adalah…",
    options: [
      "Mengabaikan protes itu karena honor sudah ditetapkan",
      "Mengubah pembagian honor sepihak tanpa persetujuan tim",
      "Menyindir anggota itu karena mempermasalahkan uang",
      "Mengajak anggota itu bicara, menjelaskan dasar pembagian honor yang berlaku, lalu mengusulkan evaluasi pembagian tugas dan honor bersama tim untuk kegiatan berikutnya.",
      "Meminta anggota itu mengadu langsung ke pimpinan"
    ],
    k: "D",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 46,
    code: "JEJ-16",
    cat: "Jejaring Kerja",
    type: "Berbagi informasi & membantu rekan",
    q: "Seorang rekan satu tim tidak tahu ada perubahan jadwal pengumpulan laporan karena pengumuman hanya dibagikan di grup kecil, padahal Anda sudah mengetahuinya. Sikap Anda adalah…",
    options: [
      "Membiarkannya karena bukan tugas Anda memberitahu",
      "Memberi tahu rekan itu tentang perubahan jadwalnya, menjelaskan dampaknya pada tugasnya, dan menemaninya menyesuaikan pekerjaannya sampai selesai.",
      "Memberi tahu saja tanpa membantu menyesuaikan tugasnya",
      "Melaporkan ke atasan bahwa rekan itu ketinggalan info",
      "Menyindir rekan itu karena tidak membaca pengumuman"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 3,
      D: 2,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 47,
    code: "JEJ-17",
    cat: "Jejaring Kerja",
    type: "Berbagi informasi & membantu rekan",
    q: "Rekan sekantor Anda kesulitan memakai aplikasi pengarsipan baru dan pekerjaannya menumpuk, sementara Anda sudah menguasainya. Sikap Anda adalah…",
    options: [
      "Membiarkannya karena itu bukan tugas Anda",
      "Mengerjakan arsipnya tanpa menjelaskan caranya",
      "Meluangkan waktu untuk memandu rekan itu langkah demi langkah, lalu memberinya catatan singkat agar ia bisa mengerjakan sendiri berikutnya.",
      "Menyuruhnya bertanya ke petugas IT",
      "Menertawakan kesulitannya di depan rekan lain"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 3,
      C: 5,
      D: 2,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 48,
    code: "JEJ-18",
    cat: "Jejaring Kerja",
    type: "Berbagi informasi & membantu rekan",
    q: "Anda menemukan panduan terbaru tentang tata cara pengurusan surat yang lebih cepat, tetapi belum semua rekan mengetahuinya. Sikap Anda adalah…",
    options: [
      "Menyimpan panduan itu untuk diri sendiri agar pekerjaan Anda lebih cepat",
      "Membagikan panduan itu tanpa penjelasan apa pun",
      "Memberi tahu hanya rekan yang dekat dengan Anda",
      "Membagikan panduan itu ke seluruh tim, menjelaskan bagian yang berubah, dan menawarkan bantuan bila ada yang kesulitan menerapkannya.",
      "Menunggu atasan yang membagikan panduan itu"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 3,
      C: 2,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 49,
    code: "JEJ-19",
    cat: "Jejaring Kerja",
    type: "Berbagi informasi & membantu rekan",
    q: "Seorang rekan yang sedang cuti menitipkan tugas mendesak kepada Anda, tetapi Anda tidak memahami sepenuhnya cara mengerjakannya. Sikap Anda adalah…",
    options: [
      "Membiarkan tugas itu sampai rekan itu kembali dari cuti",
      "Mengerjakan tugas itu seadanya tanpa bertanya",
      "Melempar tugas itu ke rekan lain tanpa penjelasan",
      "Mengeluh ke atasan bahwa Anda dititipi tugas orang lain",
      "Menghubungi rekan itu seperlunya untuk meminta penjelasan singkat, mempelajari berkas yang ditinggalkan, dan menyelesaikan tugas itu lalu melaporkannya saat ia kembali."
    ],
    k: "E",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 50,
    code: "JEJ-20",
    cat: "Jejaring Kerja",
    type: "Berbagi informasi & membantu rekan",
    q: "Rekan baru di unit Anda belum mengenal alur pengajuan surat dinas dan sering salah mengisi formulir. Sikap Anda adalah…",
    options: [
      "Mengenalkan alur pengajuan itu, mendampingi pengisian pertamanya, membuatkan panduan singkat, dan menanyakan kendalanya secara berkala pada minggu pertama.",
      "Membiarkannya belajar sendiri dari panduan tertulis",
      "Melaporkan ke atasan bahwa rekan baru itu lambat",
      "Memberi tahu caranya sekali saja tanpa mendampingi",
      "Mengerjakan formulirnya tanpa menjelaskan"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 1,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 51,
    code: "JEJ-21",
    cat: "Jejaring Kerja",
    type: "Berbagi informasi & membantu rekan",
    q: "Informasi penting dari unit lain tentang perubahan syarat layanan tidak sampai ke tim Anda, sehingga beberapa warga sudah terlanjur diberi informasi lama. Sikap Anda adalah…",
    options: [
      "Membiarkannya karena informasi itu akhirnya sampai juga",
      "Menyalahkan unit lain karena tidak memberi tahu",
      "Memberi tahu hanya sebagian rekan yang Anda temui",
      "Menyampaikan informasi terbaru itu ke seluruh tim, mengoreksi informasi lama yang sudah diberikan kepada warga, dan menyepakati alur penyampaian informasi ke depan.",
      "Mengirim surat protes resmi ke unit lain itu"
    ],
    k: "D",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 52,
    code: "JEJ-22",
    cat: "Jejaring Kerja",
    type: "Berbagi informasi & membantu rekan",
    q: "Seorang rekan sedang menghadapi beban kerja yang berat karena dua anggota tim sedang sakit, sementara tugas Anda sudah hampir selesai. Sikap Anda adalah…",
    options: [
      "Menyelesaikan tugas sendiri lalu pulang lebih awal",
      "Membiarkan rekan itu karena itu bukan tanggung jawab Anda",
      "Menawarkan bantuan tetapi hanya lewat pesan tanpa bertindak",
      "Melaporkan kondisi tim ke atasan tanpa menawarkan bantuan",
      "Menawarkan bantuan secara sukarela, mengambil sebagian tugasnya yang paling mendesak, dan berkoordinasi agar pekerjaan tim tetap selesai tepat waktu."
    ],
    k: "E",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 53,
    code: "JEJ-23",
    cat: "Jejaring Kerja",
    type: "Berbagi informasi & membantu rekan",
    q: "Anda mengetahui trik pencarian arsip lama yang jauh lebih cepat, tetapi rekan-rekan masih memakai cara lama yang memakan waktu. Sikap Anda adalah…",
    options: [
      "Menunjukkan trik itu kepada rekan-rekan dengan contoh nyata, menjelaskan langkah-langkahnya, dan mendampingi mereka sampai terbiasa memakainya.",
      "Menyimpan trik itu agar Anda terlihat paling cepat",
      "Memberi tahu trik itu sekilas tanpa contoh",
      "Mengejek rekan yang masih memakai cara lama",
      "Menunggu atasan meminta Anda berbagi trik itu"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 1,
      C: 3,
      D: 2,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 54,
    code: "JEJ-24",
    cat: "Jejaring Kerja",
    type: "Membangun relasi baru",
    q: "Instansi Anda akan menjalankan program penyuluhan bersama lembaga swadaya masyarakat yang belum pernah bekerja sama dengan Anda. Sikap Anda adalah…",
    options: [
      "Menunggu lembaga itu menghubungi Anda duluan",
      "Mempelajari program dan kebutuhan lembaga itu, lalu mengusulkan pertemuan awal untuk memperkenalkan program dan menyepakati bentuk kerja sama yang saling menguntungkan.",
      "Langsung meminta dukungan tanpa perkenalan lebih dulu",
      "Meminta atasan mengurus semuanya tanpa Anda terlibat",
      "Menjalankan program itu sendiri tanpa dukungan siapa pun"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 55,
    code: "JEJ-25",
    cat: "Jejaring Kerja",
    type: "Membangun relasi baru",
    q: "Anda ditugaskan menghadiri pertemuan antarinstansi pertama kalinya dan belum mengenal satu pun peserta dari instansi lain. Sikap Anda adalah…",
    options: [
      "Duduk diam sepanjang pertemuan tanpa berkenalan",
      "Hanya berbicara dengan rekan dari instansi sendiri",
      "Memperkenalkan diri dengan sopan kepada peserta lain, menanyakan program dan kebutuhan instansi mereka, dan bertukar kontak untuk kerja sama ke depan.",
      "Langsung meminta bantuan tanpa memperkenalkan diri",
      "Pulang lebih awal karena tidak mengenal siapa pun"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 2,
      C: 5,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 56,
    code: "JEJ-26",
    cat: "Jejaring Kerja",
    type: "Membangun relasi baru",
    q: "Seorang pejabat dari daerah lain berkunjung ke kantor Anda untuk mempelajari sistem pelayanan Anda. Sikap Anda adalah…",
    options: [
      "Menyambutnya dengan ramah, menjelaskan sistem pelayanan Anda secara terbuka, dan menawarkan pertukaran pengalaman agar kedua pihak sama-sama belajar.",
      "Membiarkannya menunggu tanpa pendampingan",
      "Menjelaskan sistem itu sekilas tanpa memberi kesempatan bertanya",
      "Menyuruhnya membaca sendiri dokumen yang tersedia",
      "Menolak menjelaskan karena itu rahasia kantor"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 1,
      C: 3,
      D: 2,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 57,
    code: "JEJ-27",
    cat: "Jejaring Kerja",
    type: "Membangun relasi baru",
    q: "Tim Anda membutuhkan dukungan tokoh masyarakat untuk program kebersihan lingkungan, tetapi Anda belum pernah berhubungan dengan tokoh itu. Sikap Anda adalah…",
    options: [
      "Menunggu tokoh itu datang sendiri menawarkan bantuan",
      "Mempelajari peran tokoh itu di masyarakat, mendatangi dan memperkenalkan program Anda dengan sopan, lalu mengajaknya berdiskusi tentang dukungan yang dibutuhkan.",
      "Langsung meminta dukungan tanpa menjelaskan program Anda",
      "Meminta atasan yang menemui tokoh itu",
      "Menjalankan program tanpa dukungan tokoh masyarakat"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 58,
    code: "JEJ-28",
    cat: "Jejaring Kerja",
    type: "Membangun relasi baru",
    q: "Anda pindah ke unit baru dan belum mengenal rekan-rekan di sana, padahal pekerjaan tim menuntut kerja sama yang erat. Sikap Anda adalah…",
    options: [
      "Menunggu rekan baru yang menyapa Anda lebih dulu",
      "Bekerja sendiri tanpa berkenalan dengan siapa pun",
      "Memperkenalkan diri kepada rekan-rekan baru, menanyakan cara kerja tim itu, dan menawarkan bantuan pada tugas pertama agar hubungan kerja segera terbangun.",
      "Hanya berkenalan dengan pimpinan unit itu",
      "Meminta pindah kembali ke unit lama"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 2,
      C: 5,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 59,
    code: "JEJ-29",
    cat: "Jejaring Kerja",
    type: "Membangun relasi baru",
    q: "Instansi Anda ingin menjalin kerja sama dengan universitas setempat untuk program magang, tetapi belum ada kontak sama sekali dengan pihak universitas. Sikap Anda adalah…",
    options: [
      "Mengirim surat permintaan tanpa perkenalan lebih dulu",
      "Menunggu universitas yang menawarkan kerja sama",
      "Menjalankan program magang tanpa mitra universitas",
      "Mempelajari program magang yang dibutuhkan, menghubungi bagian kerja sama universitas untuk memperkenalkan diri, lalu mengusulkan pertemuan membahas bentuk kerja sama.",
      "Meminta atasan mengurus semuanya"
    ],
    k: "D",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 60,
    code: "JEJ-30",
    cat: "Jejaring Kerja",
    type: "Membangun relasi baru",
    q: "Dalam sebuah pameran layanan publik, stan instansi Anda bersebelahan dengan stan instansi lain yang programnya berkaitan dengan program Anda. Sikap Anda adalah…",
    options: [
      "Mengabaikan stan sebelah sepanjang pameran",
      "Bersaing merebut pengunjung stan sebelah",
      "Hanya membagikan brosur tanpa menyapa siapa pun",
      "Meminta petugas stan sebelah yang datang lebih dulu",
      "Menyapa petugas stan sebelah, memperkenalkan program instansi Anda, dan mengusulkan pertukaran materi serta kerja sama promosi layanan kepada pengunjung."
    ],
    k: "E",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 61,
    code: "SOS-01",
    cat: "Sosial Budaya",
    type: "Toleransi & keragaman",
    q: "Di kantor Anda, panitia perayaan hari besar nasional sedang menyusun susunan acara. Seorang anggota panitia mengusulkan agar tarian tradisional dari daerah salah satu pegawai tidak ditampilkan karena dianggap kurang dikenal dan bisa membuat acara membosankan, dan beberapa anggota lain menyetujuinya. Sikap Anda adalah…",
    options: [
      "Menjelaskan bahwa setiap tarian daerah adalah kekayaan budaya yang patut dihormati, lalu mengusulkan tarian itu tetap ditampilkan dengan penjelasan singkat tentang maknanya agar penonton memahaminya.",
      "Membiarkan keputusan panitia begitu saja karena Anda tidak ingin berdebat soal selera acara",
      "Ikut setuju agar tarian itu tidak ditampilkan supaya acara cepat selesai",
      "Mengusulkan tarian itu diganti dengan tarian lain yang lebih populer tanpa menjelaskan alasannya kepada pegawai yang bersangkutan",
      "Meminta panitia memberi kesempatan tarian itu ditampilkan di sesi penutup dan mengajak pegawai yang berasal dari daerah itu menjelaskan maknanya"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 1,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 62,
    code: "SOS-02",
    cat: "Sosial Budaya",
    type: "Toleransi & keragaman",
    q: "Di kantor Anda, seorang rekan yang berpuasa meminta jadwal istirahat siang digeser sebentar agar bisa beribadah, tetapi beberapa rekan keberatan. Sikap Anda adalah…",
    options: [
      "Menolak permintaan itu agar tidak ada yang keberatan",
      "Mengajak rekan-rekan berdiskusi dengan tenang, menjelaskan kebutuhan ibadah itu, dan menyepakati pengaturan jadwal yang tidak merugikan siapa pun.",
      "Memaksa semua rekan menyetujui tanpa diskusi",
      "Membiarkan perdebatan itu tanpa penengah",
      "Menyindir rekan yang meminta perubahan jadwal"
    ],
    k: "B",
    scores: {
      A: 2,
      B: 5,
      C: 1,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 63,
    code: "SOS-03",
    cat: "Sosial Budaya",
    type: "Toleransi & keragaman",
    q: "Seorang warga dari agama yang berbeda meminta izin memakai aula kelurahan untuk kegiatan keagamaannya, tetapi sebagian warga menolak. Sikap Anda adalah…",
    options: [
      "Menolak izin itu agar tidak ada keributan",
      "Memberi izin tanpa menjelaskan aturannya kepada warga yang menolak",
      "Menjelaskan dengan tenang bahwa aula itu fasilitas bersama yang dapat dipakai semua warga sesuai aturan, lalu memfasilitasi musyawarah agar kegiatan itu berjalan tertib.",
      "Membiarkan warga yang menolak memutuskan sendiri",
      "Menyindir warga yang menolak itu di depan umum"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 3,
      C: 5,
      D: 1,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 64,
    code: "SOS-04",
    cat: "Sosial Budaya",
    type: "Toleransi & keragaman",
    q: "Dalam kegiatan kantor, panitia menyediakan makanan yang tidak bisa dimakan oleh sebagian rekan karena pantangan agamanya. Sikap Anda adalah…",
    options: [
      "Membiarkan saja karena panitia sudah berusaha",
      "Menyalahkan panitia di depan semua rekan",
      "Meminta rekan yang berpantangan membawa makanan sendiri",
      "Mengingatkan panitia dengan sopan, mengusulkan penambahan pilihan makanan yang sesuai untuk semua, dan memastikan rekan yang berpantangan tetap terlayani.",
      "Mengabaikan masalah itu karena bukan urusan Anda"
    ],
    k: "D",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 65,
    code: "SOS-05",
    cat: "Sosial Budaya",
    type: "Toleransi & keragaman",
    q: "Seorang tetangga baru yang berasal dari suku berbeda sering dikucilkan dalam kegiatan lingkungan. Sikap Anda adalah…",
    options: [
      "Ikut mengucilkan agar diterima warga lama",
      "Membiarkan saja karena itu urusan masing-masing",
      "Menyarankan tetangga itu menyesuaikan diri sepenuhnya dengan warga lama",
      "Melaporkan tetangga itu ke ketua lingkungan karena berbeda",
      "Menyambut tetangga itu dengan baik, mengenalkannya kepada warga lain, dan mengajak warga berkenalan agar ia merasa diterima di lingkungan itu."
    ],
    k: "E",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 66,
    code: "SOS-06",
    cat: "Sosial Budaya",
    type: "Toleransi & keragaman",
    q: "Di grup percakapan warga, seseorang membagikan lelucon yang merendahkan suku tertentu dan beberapa warga menertawakannya. Sikap Anda adalah…",
    options: [
      "Ikut menertawakan lelucon itu",
      "Membiarkan saja karena hanya lelucon",
      "Mengingatkan dengan sopan bahwa lelucon itu merendahkan suku lain, lalu mengajak anggota grup menjaga percakapan yang saling menghormati.",
      "Membalas dengan lelucon yang merendahkan suku pengirim",
      "Keluar dari grup tanpa berkata apa-apa"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 2,
      C: 5,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 67,
    code: "SOS-07",
    cat: "Sosial Budaya",
    type: "Toleransi & keragaman",
    q: "Seorang rekan memakai pakaian adat daerahnya pada hari peringatan budaya, tetapi ada rekan lain yang menganggapnya aneh. Sikap Anda adalah…",
    options: [
      "Ikut menganggap pakaian itu aneh",
      "Membiarkan komentar itu tanpa menanggapi",
      "Menyuruh rekan itu tidak memakai pakaian adat lagi",
      "Mengapresiasi pakaian adat itu, menjelaskan maknanya bila ada yang bertanya, dan mengajak rekan lain menghargai keberagaman budaya di kantor.",
      "Menegur rekan yang berkomentar dengan kasar"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 68,
    code: "SOS-08",
    cat: "Sosial Budaya",
    type: "Gotong royong & kepedulian",
    q: "Jalan setapak menuju sekolah dasar di lingkungan Anda berlubang dan licin saat hujan, sehingga beberapa anak pernah terpeleset. Ketua lingkungan mengusulkan perbaikan bersama pada hari Minggu, tetapi hanya sedikit warga yang mendaftar. Sikap Anda adalah…",
    options: [
      "Memaksa semua warga ikut memperbaiki jalan itu",
      "Membiarkan jalan itu rusak karena bukan tugas Anda",
      "Melaporkan warga yang tidak mendaftar ke ketua lingkungan",
      "Memperbaiki jalan itu sendiri tanpa mengajak warga lain",
      "Mengajak warga dengan santun, menjelaskan bahwa jalan yang aman melindungi anak-anak, memberi contoh dengan ikut bekerja langsung, dan menyusun pembagian tugas bersama."
    ],
    k: "E",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 69,
    code: "SOS-09",
    cat: "Sosial Budaya",
    type: "Gotong royong & kepedulian",
    q: "Seorang tetangga lanjut usia yang tinggal sendiri kesulitan memperbaiki atap rumahnya yang bocor menjelang musim hujan. Sikap Anda adalah…",
    options: [
      "Mengajak warga sekitar membantu memperbaiki atap itu bersama-sama, membagi tugas sesuai kemampuan, dan memastikan perbaikan itu selesai sebelum hujan tiba.",
      "Membiarkan tetangga itu mengurus sendiri",
      "Memberi uang saja tanpa membantu memperbaiki",
      "Menyuruh tetangga itu menyewa tukang sendiri",
      "Melaporkan kondisi itu ke ketua lingkungan tanpa membantu"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 1,
      C: 3,
      D: 2,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 70,
    code: "SOS-10",
    cat: "Sosial Budaya",
    type: "Gotong royong & kepedulian",
    q: "Sampah menumpuk di sudut lingkungan karena jadwal pengangkutan terlambat, dan sebagian warga mulai membuang sampah sembarangan. Sikap Anda adalah…",
    options: [
      "Membiarkan sampah itu karena bukan tugas Anda",
      "Mengajak warga menjaga kebersihan sementara, mengusulkan jadwal pengangkutan darurat bersama ketua lingkungan, dan mengingatkan warga agar tidak membuang sampah sembarangan.",
      "Membuang sampah Anda sembarangan juga karena sudah menumpuk",
      "Memarahi warga yang membuang sampah sembarangan",
      "Membersihkan semuanya sendiri tanpa mengajak warga lain"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 71,
    code: "SOS-11",
    cat: "Sosial Budaya",
    type: "Gotong royong & kepedulian",
    q: "Warga di lingkungan Anda sepakat membangun pos ronda, tetapi dana yang terkumpul belum cukup dan sebagian warga ragu melanjutkan. Sikap Anda adalah…",
    options: [
      "Membatalkan pembangunan pos ronda itu",
      "Memaksa semua warga membayar iuran penuh saat itu juga",
      "Membangun pos itu sendiri tanpa melibatkan warga lain",
      "Membiarkan rencana itu tanpa tindak lanjut",
      "Mengajak warga berdiskusi terbuka tentang kebutuhan dana, mengusulkan iuran bertahap yang ringan, dan memberi contoh dengan ikut menyumbang serta bekerja membangun pos itu."
    ],
    k: "E",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 72,
    code: "SOS-12",
    cat: "Sosial Budaya",
    type: "Gotong royong & kepedulian",
    q: "Seorang warga jatuh sakit dan keluarganya kesulitan biaya pengobatan, sementara warga lain belum mengetahui kabar itu. Sikap Anda adalah…",
    options: [
      "Mengabarkan kondisi itu kepada warga dengan izin keluarganya, mengajak warga membantu sesuai kemampuan, dan mengoordinasikan bantuan agar sampai tepat sasaran.",
      "Membiarkan keluarga itu mengurus sendiri",
      "Memberi bantuan sendiri tanpa mengabari warga lain",
      "Menyebarkan kabar itu tanpa izin keluarganya",
      "Meminta keluarga itu mengajukan bantuan resmi tanpa pendampingan"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 1,
      C: 3,
      D: 2,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 73,
    code: "SOS-13",
    cat: "Sosial Budaya",
    type: "Gotong royong & kepedulian",
    q: "Taman kecil di lingkungan Anda rusak karena tidak ada yang merawat, padahal anak-anak sering bermain di sana. Sikap Anda adalah…",
    options: [
      "Membiarkan taman itu rusak karena bukan milik Anda",
      "Mengusulkan kerja bakti merawat taman itu, mengajak warga dan anak-anak ikut menjaga, dan menyusun jadwal perawatan bergilir agar taman tetap terawat.",
      "Memperbaiki taman itu sendiri tanpa melibatkan warga",
      "Melarang anak-anak bermain di taman itu",
      "Meminta pemerintah yang memperbaiki tanpa inisiatif warga"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 3,
      D: 2,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 74,
    code: "SOS-14",
    cat: "Sosial Budaya",
    type: "Gotong royong & kepedulian",
    q: "Banjir kecil menggenangi jalan lingkungan Anda setiap hujan deras, dan warga hanya mengeluh tanpa bertindak. Sikap Anda adalah…",
    options: [
      "Ikut mengeluh tanpa bertindak",
      "Membersihkan saluran itu sendiri tanpa mengajak warga",
      "Mengajak warga membersihkan saluran air bersama, mencatat titik genangan yang paling parah, dan mengusulkan perbaikan saluran itu kepada ketua lingkungan.",
      "Menyalahkan warga lain karena tidak peduli",
      "Menunggu pemerintah datang memperbaiki"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 3,
      C: 5,
      D: 2,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 75,
    code: "SOS-15",
    cat: "Sosial Budaya",
    type: "Gotong royong & kepedulian",
    q: "Sebuah keluarga di lingkungan Anda baru saja kehilangan anggota keluarganya dan sedang berduka. Sikap Anda adalah…",
    options: [
      "Membiarkan keluarga itu karena tidak dekat dengan Anda",
      "Mengirim pesan singkat saja tanpa mendatangi",
      "Membicarakan kabar duka itu ke warga lain tanpa izin",
      "Mendatangi keluarga itu untuk menyampaikan belasungkawa, menawarkan bantuan yang dibutuhkan, dan mengajak warga lain ikut membantu selama masa duka.",
      "Menunggu keluarga itu yang meminta bantuan lebih dulu"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 3,
      C: 2,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 76,
    code: "SOS-16",
    cat: "Sosial Budaya",
    type: "Penempatan baru & adaptasi lingkungan",
    q: "Anda baru pindah tugas ke kota pesisir yang warganya biasa memulai aktivitas sangat pagi dan beristirahat saat panas terik siang, berbeda dengan ritme kerja di tempat lama Anda. Sikap Anda adalah…",
    options: [
      "Tetap memakai jadwal lama dan mengabaikan kebiasaan setempat",
      "Mempelajari ritme kerja setempat, menghormati kebiasaan itu, dan menyesuaikan jadwal pelayanan Anda tanpa melanggar aturan sambil membangun hubungan baik dengan rekan setempat.",
      "Menarik diri dari pergaulan di tempat baru",
      "Meminta pindah kembali ke daerah asal",
      "Mengkritik ritme kerja setempat sebagai tidak disiplin"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 77,
    code: "SOS-17",
    cat: "Sosial Budaya",
    type: "Penempatan baru & adaptasi lingkungan",
    q: "Di tempat tugas baru Anda, warga setempat biasa menyelesaikan urusan dengan musyawarah di balai desa sebelum ke kantor. Anda belum terbiasa dengan cara itu. Sikap Anda adalah…",
    options: [
      "Menolak mengikuti musyawarah karena bukan prosedur kantor",
      "Mengabaikan musyawarah itu dan bekerja dengan cara Anda sendiri",
      "Mengikuti musyawarah itu dengan sopan, mendengarkan aspirasi warga, dan menyesuaikan cara kerja Anda dengan kebiasaan setempat tanpa melanggar aturan.",
      "Mengkritik kebiasaan musyawarah itu sebagai pemborosan waktu",
      "Meminta warga mengikuti cara Anda tanpa penyesuaian"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 1,
      C: 5,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 78,
    code: "SOS-18",
    cat: "Sosial Budaya",
    type: "Penempatan baru & adaptasi lingkungan",
    q: "Anda ditempatkan di daerah pegunungan yang bahasanya berbeda dan sebagian warga tidak fasih berbahasa Indonesia. Sikap Anda adalah…",
    options: [
      "Memaksa warga memakai bahasa Indonesia yang baku",
      "Menghindari warga yang tidak fasih berbahasa Indonesia",
      "Mengeluh tentang penempatan itu kepada rekan lama",
      "Mempelajari beberapa kata dan ungkapan bahasa setempat, memakai bahasa Indonesia yang sederhana dan jelas, serta meminta bantuan warga setempat sebagai penerjemah bila diperlukan.",
      "Menunda pelayanan sampai warga itu bisa berbahasa Indonesia"
    ],
    k: "D",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 79,
    code: "SOS-19",
    cat: "Sosial Budaya",
    type: "Penempatan baru & adaptasi lingkungan",
    q: "Di lingkungan baru Anda, ada kebiasaan gotong royong setiap Jumat pagi yang belum pernah Anda ikuti. Sikap Anda adalah…",
    options: [
      "Mengabaikan gotong royong itu karena bukan kewajiban kantor",
      "Mengirim uang saja tanpa ikut hadir",
      "Mengkritik kebiasaan itu karena mengganggu waktu kerja",
      "Menunggu diundang secara resmi baru mau ikut",
      "Mengikuti gotong royong itu dengan sukarela, bertanya tentang tata caranya kepada warga, dan berpartisipasi secara rutin agar cepat diterima lingkungan."
    ],
    k: "E",
    scores: {
      A: 2,
      B: 3,
      C: 1,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 80,
    code: "SOS-20",
    cat: "Sosial Budaya",
    type: "Penempatan baru & adaptasi lingkungan",
    q: "Rekan-rekan di tempat tugas baru Anda memiliki cara kerja yang berbeda dengan cara kerja di tempat lama Anda, dan Anda merasa cara lama Anda lebih baik. Sikap Anda adalah…",
    options: [
      "Mempelajari cara kerja tim baru itu, memahami alasannya, dan mengajukan saran perbaikan secara sopan bila ada yang memang bisa diperbaiki.",
      "Memaksakan cara lama Anda kepada tim baru",
      "Mengkritik cara kerja tim baru di depan mereka",
      "Menarik diri dan bekerja sendiri dengan cara lama",
      "Meminta pindah kembali ke tempat lama"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 1,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 81,
    code: "SOS-21",
    cat: "Sosial Budaya",
    type: "Penempatan baru & adaptasi lingkungan",
    q: "Anda tinggal di rumah dinas baru di daerah yang jauh dari keluarga, dan warga sekitar belum mengenal Anda. Sikap Anda adalah…",
    options: [
      "Menutup diri dan hanya berinteraksi di kantor",
      "Menunggu warga sekitar yang menyapa Anda lebih dulu",
      "Mengeluh tentang kesepian itu kepada atasan",
      "Memperkenalkan diri kepada tetangga sekitar, mengikuti kegiatan lingkungan, dan membangun hubungan baik secara perlahan dengan warga setempat.",
      "Meminta pindah ke daerah yang dekat keluarga"
    ],
    k: "D",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 82,
    code: "SOS-22",
    cat: "Sosial Budaya",
    type: "Penempatan baru & adaptasi lingkungan",
    q: "Di daerah penempatan baru, ada upacara adat besar yang mengharuskan warga ikut serta, tetapi Anda belum memahami tata caranya. Sikap Anda adalah…",
    options: [
      "Mengabaikan upacara itu karena Anda pendatang",
      "Mengikuti upacara itu tanpa bertanya sehingga salah tata cara",
      "Mengkritik upacara itu sebagai tidak relevan",
      "Meminta warga mengubah tata caranya agar Anda mudah mengikuti",
      "Bertanya dengan sopan kepada tokoh adat tentang tata caranya, mengikuti upacara itu dengan menghormati aturan yang berlaku, dan belajar dari pengalaman itu."
    ],
    k: "E",
    scores: {
      A: 1,
      B: 3,
      C: 2,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 83,
    code: "SOS-23",
    cat: "Sosial Budaya",
    type: "Perbedaan pendapat",
    q: "Dalam musyawarah karang taruna, terjadi perbedaan pendapat tentang penggunaan dana kegiatan: sebagian anggota ingin mengadakan turnamen olahraga, sebagian lain ingin mengadakan pelatihan keterampilan. Sikap Anda adalah…",
    options: [
      "Mendengarkan alasan kedua pihak dengan tenang, membuka rincian dana yang tersedia, lalu mengusulkan musyawarah untuk menyepakati pembagian dana yang adil bagi keduanya.",
      "Memaksakan pilihan Anda karena Anda pengurus",
      "Meninggalkan musyawarah itu",
      "Memutuskan dengan voting tanpa membuka rincian dana",
      "Membatalkan kegiatan itu karena berbeda pendapat"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 1,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 84,
    code: "SOS-24",
    cat: "Sosial Budaya",
    type: "Perbedaan pendapat",
    q: "Seorang rekan kerja tidak setuju dengan rencana kegiatan tim Anda dan menyampaikannya dengan nada tinggi di depan tim. Sikap Anda adalah…",
    options: [
      "Membalas dengan nada tinggi juga",
      "Mendengarkan keberatan rekan itu dengan tenang, menanyakan alasan dan usulannya, lalu membahas bersama tim untuk mencari jalan tengah.",
      "Mengabaikan keberatan itu karena rencana sudah diputuskan",
      "Menyindir rekan itu di depan tim",
      "Membatalkan rencana itu tanpa diskusi"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 85,
    code: "SOS-25",
    cat: "Sosial Budaya",
    type: "Perbedaan pendapat",
    q: "Dalam diskusi keluarga besar, terjadi perbedaan pendapat tentang pembagian warisan tanah, dan suasana menjadi tegang. Sikap Anda adalah…",
    options: [
      "Memihak pihak yang paling dekat dengan Anda",
      "Meninggalkan diskusi itu",
      "Mengajak semua pihak berbicara bergiliran dengan tenang, merangkum keinginan masing-masing, dan mengusulkan musyawarah keluarga dengan pendamping yang dipercaya.",
      "Memaksakan pembagian menurut pendapat Anda",
      "Memutuskan sepihak tanpa mendengar semua pihak"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 2,
      C: 5,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 86,
    code: "SOS-26",
    cat: "Sosial Budaya",
    type: "Perbedaan pendapat",
    q: "Dua kelompok warga berbeda pendapat tentang lokasi pasar baru: satu kelompok ingin di pusat desa, kelompok lain ingin di pinggir desa. Sikap Anda adalah…",
    options: [
      "Memfasilitasi pertemuan kedua kelompok, mendengarkan alasan masing-masing, lalu mengusulkan kajian bersama tentang kelebihan dan kekurangan tiap lokasi sebelum diputuskan.",
      "Memihak kelompok yang lebih banyak anggotanya",
      "Memutuskan lokasi itu sendiri tanpa mendengar keduanya",
      "Membiarkan kedua kelompok bertengkar",
      "Menunda keputusan tanpa jadwal pembahasan lanjutan"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 1,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 87,
    code: "SOS-27",
    cat: "Sosial Budaya",
    type: "Perbedaan pendapat",
    q: "Dalam rapat RT, warga berbeda pendapat tentang besaran iuran keamanan: sebagian merasa terlalu besar, sebagian merasa perlu dinaikkan. Sikap Anda adalah…",
    options: [
      "Memaksakan besaran iuran menurut pendapat Anda",
      "Mendengarkan alasan kedua pihak, membuka rincian penggunaan iuran secara transparan, lalu mengusulkan musyawarah untuk menyepakati besaran yang adil bagi semua.",
      "Membiarkan perdebatan tanpa data yang jelas",
      "Memutuskan dengan voting tanpa membuka rincian iuran",
      "Keluar dari rapat karena suasana memanas"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 88,
    code: "SOS-28",
    cat: "Sosial Budaya",
    type: "Perbedaan pendapat",
    q: "Seorang warga mengkritik keras kebijakan kantor Anda di media sosial dan kritik itu dibagikan banyak orang. Sikap Anda adalah…",
    options: [
      "Membalas kritik itu dengan makian di media sosial",
      "Mengabaikan kritik itu begitu saja",
      "Membaca kritik itu dengan tenang, menanggapi dengan sopan dan menjelaskan fakta kebijakannya, lalu mencatat masukan itu sebagai bahan evaluasi layanan.",
      "Meminta warga itu menghapus unggahannya dengan ancaman",
      "Membela kebijakan itu tanpa menjelaskan faktanya"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 2,
      C: 5,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 89,
    code: "SOS-29",
    cat: "Sosial Budaya",
    type: "Perbedaan pendapat",
    q: "Rekan kerja Anda berpendapat bahwa acara peringatan hari besar sebaiknya diadakan sederhana, sementara Anda berpendapat sebaiknya meriah agar berkesan. Sikap Anda adalah…",
    options: [
      "Memaksakan pendapat Anda karena Anda penanggung jawab",
      "Menyerah tanpa menyampaikan alasan Anda",
      "Membatalkan acara itu karena berbeda pendapat",
      "Mendengarkan alasan rekan itu, menyampaikan alasan Anda dengan tenang, lalu mencari format acara yang memadukan keduanya sesuai anggaran yang ada.",
      "Memutuskan sendiri tanpa berdiskusi"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 90,
    code: "SOS-30",
    cat: "Sosial Budaya",
    type: "Perbedaan pendapat",
    q: "Dalam musyawarah desa, sebagian warga menolak rencana pembangunan jalan karena khawatir lahannya tergusur, sementara sebagian lain sangat mendukung. Sikap Anda adalah…",
    options: [
      "Memaksakan pembangunan jalan itu segera",
      "Membatalkan pembangunan tanpa mendengar pendukungnya",
      "Membiarkan kedua pihak bertengkar tanpa penengah",
      "Memutuskan berdasarkan suara terbanyak tanpa penjelasan",
      "Mendengarkan kekhawatiran warga yang menolak, menjelaskan rencana ganti rugi dan manfaat jalan itu, lalu mengusulkan musyawarah lanjutan dengan data yang lengkap."
    ],
    k: "E",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 91,
    code: "TIK-01",
    cat: "Adaptasi TIK",
    type: "Belajar sistem/aplikasi baru",
    q: "Kantor Anda menerapkan tanda tangan elektronik (TTE) untuk semua surat keluar. Anda belum pernah memakai TTE dan surat pertama harus ditandatangani hari ini. Sikap Anda adalah…",
    options: [
      "Mempelajari panduan TTE, mencoba pada surat uji coba, lalu memakai TTE untuk surat hari ini dan mencatat langkahnya agar tidak lupa",
      "Mempelajari panduan TTE dan memakai TTE untuk surat hari ini, lalu meminta rekan memeriksa hasilnya",
      "Meminta rekan mendampingi Anda memakai TTE untuk surat itu sambil Anda memperhatikan langkahnya",
      "Menunda penandatanganan sampai ada pelatihan resmi, meski surat harus keluar hari ini",
      "Tetap memakai tanda tangan basah dan mengabaikan ketentuan TTE"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 4,
      C: 3,
      D: 2,
      E: 1
    },
    image: null,
    boss: null
  },
  {
    id: 92,
    code: "TIK-02",
    cat: "Adaptasi TIK",
    type: "Belajar sistem/aplikasi baru",
    q: "Unit Anda beralih ke sistem arsip digital; semua dokumen lama harus dipindai dan diunggah. Anda ditugaskan memindai arsip lima tahun terakhir. Sikap Anda adalah…",
    options: [
      "Memindai arsip seadanya dan mengunggah tanpa memeriksa hasilnya",
      "Membuat jadwal pemindaian per tahun, memeriksa hasil pindaian, memberi nama berkas yang rapi, lalu mengunggahnya dan membuat daftar arsip yang sudah digital",
      "Memindai hanya arsip tahun terakhir dan mengabaikan sisanya karena terlalu banyak",
      "Memindai arsip secara bertahap, memeriksa hasilnya, dan meminta rekan membantu bagian yang tertinggal agar selesai tepat waktu",
      "Menolak tugas itu karena menganggap pemindaian bukan pekerjaan Anda"
    ],
    k: "B",
    scores: {
      A: 3,
      B: 5,
      C: 2,
      D: 4,
      E: 1
    },
    image: null,
    boss: null
  },
  {
    id: 93,
    code: "TIK-03",
    cat: "Adaptasi TIK",
    type: "Belajar sistem/aplikasi baru",
    q: "Aplikasi e-kinerja baru dipakai untuk menilai kinerja pegawai. Anda kesulitan memahami cara mengisi sasaran kinerja di aplikasi itu. Sikap Anda adalah…",
    options: [
      "Mengisi asal-asalan agar cepat selesai",
      "Membaca panduan aplikasi, mencoba mengisi satu sasaran, lalu meminta atasan memeriksa sebelum mengisi sisanya",
      "Mempelajari panduan dan video tutorial aplikasi, mengisi sasaran kinerja dengan teliti, lalu menyimpan bukti dan mencatat hal yang masih membingungkan untuk ditanyakan ke petugas",
      "Tidak mengisi e-kinerja dan berharap penilaian memakai cara lama",
      "Meminta rekan mengisikan e-kinerja Anda sambil Anda memperhatikan"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 4,
      C: 5,
      D: 1,
      E: 3
    },
    image: null,
    boss: null
  },
  {
    id: 94,
    code: "TIK-04",
    cat: "Adaptasi TIK",
    type: "Belajar sistem/aplikasi baru",
    q: "Kantor Anda mengadakan rapat daring dengan instansi pusat melalui video conference. Anda ditunjuk menjadi operator rapat dan belum pernah memakai aplikasinya. Sikap Anda adalah…",
    options: [
      "Meminta rekan lain menjadi operator tanpa mencoba belajar",
      "Membiarkan rapat berjalan tanpa operator dan berharap tidak ada kendala",
      "Menolak menjadi operator karena belum pernah memakai aplikasinya",
      "Mempelajari fitur aplikasi sebelum rapat, melakukan uji coba dengan rekan, menyiapkan cadangan tautan rapat, dan mencatat panduan singkat untuk rapat berikutnya",
      "Mempelajari aplikasi itu semalam sebelum rapat dan mencoba fitur utamanya"
    ],
    k: "D",
    scores: {
      A: 3,
      B: 2,
      C: 1,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 95,
    code: "TIK-05",
    cat: "Adaptasi TIK",
    type: "Belajar sistem/aplikasi baru",
    q: "Sistem informasi kepegawaian diperbarui tampilannya dan menu-menu berpindah tempat. Anda harus memperbarui data riwayat jabatan hari ini juga. Sikap Anda adalah…",
    options: [
      "Menjelajahi tampilan baru, menemukan menu yang dibutuhkan, dan memperbarui data hari ini juga",
      "Meminta rekan menunjukkan letak menu baru sambil Anda mencatatnya",
      "Mengeluh kepada rekan tentang tampilan baru dan menunda pembaruan data",
      "Mengabaikan pembaruan data karena tampilannya berubah",
      "Menjelajahi tampilan baru, memperbarui data hari ini juga, lalu membuat catatan letak menu baru dan membagikannya ke grup unit agar rekan lain tidak kebingungan"
    ],
    k: "E",
    scores: {
      A: 4,
      B: 3,
      C: 2,
      D: 1,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 96,
    code: "TIK-06",
    cat: "Adaptasi TIK",
    type: "Belajar sistem/aplikasi baru",
    q: "Instansi Anda memakai aplikasi e-budgeting untuk pengajuan anggaran. Pengajuan Anda ditolak sistem karena format lampiran salah, padahal tenggat pengajuan tinggal dua hari. Sikap Anda adalah…",
    options: [
      "Mengirim pengajuan lewat surel ke bendahara agar tetap masuk tenggat",
      "Membiarkan pengajuan itu dan berharap ada perpanjangan tenggat",
      "Membaca pesan kesalahan sistem, memperbaiki format lampiran sesuai petunjuk, menguji unggah ulang, dan menghubungi petugas anggaran bila masih gagal",
      "Memperbaiki format lampiran sesuai petunjuk lalu mengunggah ulang pengajuan",
      "Meminta petugas anggaran memperbaiki pengajuan Anda"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 1,
      C: 5,
      D: 4,
      E: 3
    },
    image: null,
    boss: null
  },
  {
    id: 97,
    code: "TIK-07",
    cat: "Adaptasi TIK",
    type: "Belajar sistem/aplikasi baru",
    q: "Anda diminta memakai aplikasi survei kepuasan berbasis daring untuk mengumpulkan pendapat warga, menggantikan formulir kertas. Banyak warga yang Anda layani adalah lansia. Sikap Anda adalah…",
    options: [
      "Memberikan tautan survei kepada warga tanpa penjelasan",
      "Tetap memakai formulir kertas karena warga lansia tidak bisa memakai aplikasi",
      "Menjelaskan cara mengisi survei daring kepada warga dan membantu yang kesulitan saat itu juga",
      "Mengisi survei itu sendiri atas nama warga agar datanya lengkap",
      "Menyiapkan tablet di loket, memandu warga mengisi survei langkah demi langkah, dan mencatat masukan warga yang kesulitan memakai aplikasi untuk perbaikan survei berikutnya"
    ],
    k: "E",
    scores: {
      A: 3,
      B: 2,
      C: 4,
      D: 1,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 98,
    code: "TIK-08",
    cat: "Adaptasi TIK",
    type: "Belajar sistem/aplikasi baru",
    q: "Laptop kerja Anda diganti dengan perangkat baru yang sistem operasinya berbeda. Semua pekerjaan Anda minggu ini harus selesai dengan perangkat baru itu. Sikap Anda adalah…",
    options: [
      "Mempelajari sistem operasi baru dari panduan resmi, memindahkan berkas penting dengan aman, mencoba fitur yang dibutuhkan, dan mencatat pintasan yang mempercepat pekerjaan",
      "Memakai laptop lama secara diam-diam agar pekerjaan cepat selesai",
      "Mempelajari sistem operasi baru dan memindahkan berkas penting, lalu mulai bekerja seperti biasa",
      "Meminta rekan memindahkan semua berkas dan mengatur perangkat baru itu untuk Anda",
      "Menolak memakai perangkat baru sampai ada pelatihan resmi dari kantor"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 4,
      D: 3,
      E: 1
    },
    image: null,
    boss: null
  },
  {
    id: 99,
    code: "TIK-09",
    cat: "Adaptasi TIK",
    type: "Etika digital & keamanan data",
    q: "Anda menerima surel yang mengaku dari bank, meminta Anda mengklik tautan dan memasukkan kata sandi akun keuangan instansi. Surel itu memakai logo bank yang meyakinkan. Sikap Anda adalah…",
    options: [
      "Menghapus surel itu tanpa memberi tahu siapa pun",
      "Tidak mengklik tautan apa pun, memeriksa alamat pengirim dan keaslian surel ke bank melalui kanal resmi, lalu melaporkan surel mencurigakan itu ke petugas keamanan siber instansi",
      "Mengklik tautan dan memasukkan kata sandi karena surel itu terlihat resmi",
      "Meneruskan surel itu ke rekan agar mereka juga berhati-hati",
      "Tidak mengklik tautan dan menghapus surel itu, lalu mengingatkan rekan di unit Anda agar waspada terhadap surel serupa"
    ],
    k: "B",
    scores: {
      A: 3,
      B: 5,
      C: 1,
      D: 2,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 100,
    code: "TIK-10",
    cat: "Adaptasi TIK",
    type: "Etika digital & keamanan data",
    q: "Seorang rekan mengirimkan daftar nama dan nomor telepon warga penerima bantuan ke grup WhatsApp kantor yang anggotanya puluhan orang, padahal data itu seharusnya terbatas. Sikap Anda adalah…",
    options: [
      "Menyimpan data itu dan membagikannya lagi ke grup lain",
      "Mengabaikannya karena bukan Anda yang mengirim",
      "Mengingatkan rekan itu secara pribadi agar tidak mengulangi dan menghapus pesan itu bila memungkinkan",
      "Mengingatkan rekan itu agar segera menghapus pesan itu, melaporkan kejadian itu ke atasan atau petugas data, dan mengusulkan aturan pengiriman data pribadi di grup kantor",
      "Mengingatkan rekan itu agar menghapus pesan itu dan tidak menyebarkan data pribadi di grup"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 101,
    code: "TIK-11",
    cat: "Adaptasi TIK",
    type: "Etika digital & keamanan data",
    q: "Di media sosial, beredar kabar bahwa instansi Anda akan memotong tunjangan pegawai bulan depan. Kabar itu belum ada di kanal resmi, tetapi sudah dibagikan banyak orang. Sikap Anda adalah…",
    options: [
      "Membagikan kabar itu ke grup keluarga agar mereka tahu lebih awal",
      "Tidak membagikan kabar itu, memeriksa kebenarannya ke humas atau kanal resmi instansi, lalu memberi tahu rekan bahwa kabar itu belum terverifikasi",
      "Memercayai kabar itu dan mengajak rekan protes ke atasan",
      "Mengabaikan kabar itu tanpa memeriksa kebenarannya",
      "Memeriksa kebenarannya ke kanal resmi dan tidak membagikannya sebelum jelas"
    ],
    k: "B",
    scores: {
      A: 2,
      B: 5,
      C: 1,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 102,
    code: "TIK-12",
    cat: "Adaptasi TIK",
    type: "Etika digital & keamanan data",
    q: "Anda menemukan bahwa kata sandi akun sistem yang Anda pakai bersama rekan satu unit sudah diketahui banyak orang di luar unit. Sikap Anda adalah…",
    options: [
      "Tetap memakai kata sandi itu karena menggantinya merepotkan",
      "Mengganti kata sandi sendiri tanpa memberi tahu siapa pun",
      "Menyalahkan rekan yang membocorkan kata sandi itu",
      "Segera mengganti kata sandi, memberitahukan perubahan itu hanya kepada yang berwenang, melaporkan kebocoran itu ke petugas sistem, dan mengusulkan agar setiap pegawai memakai akun masing-masing",
      "Segera mengganti kata sandi dan memberitahukan perubahan itu kepada rekan satu unit"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 3,
      C: 2,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 103,
    code: "TIK-13",
    cat: "Adaptasi TIK",
    type: "Etika digital & keamanan data",
    q: "Seorang warga mengirim pesan ke akun media sosial pribadi Anda, meminta Anda mempercepat urusan berkasnya dengan imbalan. Ia tahu Anda pegawai di instansi itu. Sikap Anda adalah…",
    options: [
      "Mengabaikan pesan itu tanpa penjelasan",
      "Menerima tawaran itu karena dilakukan lewat akun pribadi",
      "Menolak tawaran itu dan memintanya mengurus lewat loket resmi",
      "Menolak dengan sopan, menjelaskan bahwa semua urusan harus lewat prosedur resmi, dan menyarankan ia datang ke loket",
      "Menolak dengan tegas dan sopan, menjelaskan prosedur resmi yang harus dilalui, menyimpan bukti pesan itu, dan melaporkannya ke atasan sesuai aturan gratifikasi"
    ],
    k: "E",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 104,
    code: "TIK-14",
    cat: "Adaptasi TIK",
    type: "Etika digital & keamanan data",
    q: "Anda hendak mengunggah foto kegiatan kantor ke media sosial instansi. Di dalam foto itu terlihat dokumen berisi data pribadi warga di atas meja. Sikap Anda adalah…",
    options: [
      "Memeriksa foto itu dengan teliti, menutupi atau mengambil ulang foto tanpa dokumen berisi data pribadi, lalu mengunggahnya setelah dipastikan aman",
      "Mengunggah foto itu apa adanya karena dokumennya tidak terbaca jelas",
      "Memilih foto lain yang tidak menampilkan dokumen dan mengunggah foto itu saja",
      "Mengunggah foto itu setelah memotong bagian yang menampilkan dokumen",
      "Mengunggah foto itu dan membiarkan siapa pun memperbesar dokumennya"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 4,
      D: 3,
      E: 1
    },
    image: null,
    boss: null
  },
  {
    id: 105,
    code: "TIK-15",
    cat: "Adaptasi TIK",
    type: "Etika digital & keamanan data",
    q: "Rekan Anda meminta kata sandi akun aplikasi kantor Anda karena akunnya terkunci dan ia harus menyelesaikan laporan hari ini. Sikap Anda adalah…",
    options: [
      "Memberikan kata sandi Anda karena ia rekan satu tim",
      "Memberikan kata sandi sementara lalu memintanya mengganti setelah selesai",
      "Menolak memberikan kata sandi, membantunya menghubungi petugas sistem untuk membuka akunnya, dan menemaninya sampai ia bisa masuk kembali",
      "Menolak memberikan kata sandi dan menyarankan ia menghubungi petugas sistem",
      "Meminjamkan laptop Anda yang sudah masuk ke akun agar ia bisa menyelesaikan laporannya"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 2,
      C: 5,
      D: 4,
      E: 3
    },
    image: null,
    boss: null
  },
  {
    id: 106,
    code: "TIK-16",
    cat: "Adaptasi TIK",
    type: "Etika digital & keamanan data",
    q: "Anda melihat unggahan di media sosial yang memakai logo instansi Anda untuk mempromosikan investasi bodong. Unggahan itu sudah dibagikan ratusan kali. Sikap Anda adalah…",
    options: [
      "Membagikan unggahan itu agar warga tahu ada investasi baru",
      "Mengabaikannya karena bukan tugas Anda mengurus media sosial",
      "Melaporkan unggahan itu ke platform media sosial",
      "Melaporkan unggahan itu ke humas instansi agar ditindaklanjuti",
      "Segera melaporkan unggahan itu ke humas instansi, meminta warga tidak mempercayainya lewat kanal resmi, dan melaporkan akun itu ke platform agar diturunkan"
    ],
    k: "E",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 107,
    code: "TIK-17",
    cat: "Adaptasi TIK",
    type: "Memanfaatkan TIK untuk tugas",
    q: "Anda harus merekap data kehadiran 200 pegawai dari berbagai unit dalam waktu satu hari. Data itu tersebar dalam berkas-berkas terpisah. Sikap Anda adalah…",
    options: [
      "Menggabungkan data itu dengan lembar kerja digital, memakai rumus untuk merekap otomatis, memeriksa hasilnya, lalu menyerahkan rekap yang rapi beserta catatan sumber datanya",
      "Menyalin data satu per satu secara manual sampai selesai",
      "Meminta setiap unit mengirim rekapnya sendiri tanpa Anda memeriksa",
      "Menggabungkan data dengan lembar kerja digital dan memakai rumus untuk merekap otomatis",
      "Menyerahkan berkas-berkas itu apa adanya ke atasan tanpa direkap"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 3,
      C: 2,
      D: 4,
      E: 1
    },
    image: null,
    boss: null
  },
  {
    id: 108,
    code: "TIK-18",
    cat: "Adaptasi TIK",
    type: "Memanfaatkan TIK untuk tugas",
    q: "Atasan meminta Anda menyajikan perkembangan program dalam rapat besar minggu depan. Data program tersebar di beberapa laporan bulanan. Sikap Anda adalah…",
    options: [
      "Membacakan laporan bulanan satu per satu dalam rapat",
      "Menolak membuat presentasi karena datanya tersebar",
      "Membuat ringkasan tertulis dari laporan-laporan itu tanpa visual",
      "Mengolah data dari laporan bulanan menjadi grafik dan ringkasan yang mudah dipahami, memeriksa angka-angkanya, lalu menyiapkan bahan presentasi dan salinannya untuk peserta rapat",
      "Membuat presentasi dengan grafik dari data laporan bulanan"
    ],
    k: "D",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 109,
    code: "TIK-19",
    cat: "Adaptasi TIK",
    type: "Memanfaatkan TIK untuk tugas",
    q: "Warga sering bertanya hal yang sama tentang syarat layanan lewat telepon sehingga loket Anda kewalahan. Sikap Anda adalah…",
    options: [
      "Mematikan telepon loket agar tidak terganggu",
      "Menyuruh warga datang langsung saja tanpa memberi info lewat telepon",
      "Mengusulkan pembuatan daftar pertanyaan yang sering ditanyakan di situs dan media sosial instansi, menyiapkan jawaban bakunya, dan memperbarui informasi itu secara berkala",
      "Menyiapkan jawaban baku atas pertanyaan yang sering ditanyakan dan membagikannya ke rekan loket",
      "Menjawab pertanyaan warga satu per satu seperti biasa"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 2,
      C: 5,
      D: 4,
      E: 3
    },
    image: null,
    boss: null
  },
  {
    id: 110,
    code: "TIK-20",
    cat: "Adaptasi TIK",
    type: "Memanfaatkan TIK untuk tugas",
    q: "Anda ditugaskan mendata aset kantor yang tersebar di banyak ruangan. Pendataan manual tahun lalu memakan waktu dua minggu dan banyak kesalahan. Sikap Anda adalah…",
    options: [
      "Mendata aset secara manual seperti tahun lalu",
      "Mengusulkan pendataan dengan kode batang dan formulir digital, membuat jadwal pendataan per ruangan, memeriksa hasilnya, dan menyusun laporan aset yang mudah diperbarui",
      "Menolak tugas itu karena pendataan manual terlalu lama",
      "Mendata aset seadanya dan menyerahkan hasilnya tanpa pemeriksaan",
      "Mendata aset dengan formulir digital dan memeriksa hasilnya sebelum menyerahkan laporan"
    ],
    k: "B",
    scores: {
      A: 3,
      B: 5,
      C: 1,
      D: 2,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 111,
    code: "TIK-21",
    cat: "Adaptasi TIK",
    type: "Memanfaatkan TIK untuk tugas",
    q: "Rapat koordinasi antar daerah sulit dijadwalkan karena peserta tersebar di banyak kota. Atasan meminta Anda mencari solusinya. Sikap Anda adalah…",
    options: [
      "Membatalkan rapat koordinasi itu",
      "Menjadwalkan rapat tatap muka dan membiarkan peserta yang jauh tidak hadir",
      "Mengirim bahan rapat lewat surel dan meminta tanggapan tertulis dari peserta",
      "Mengusulkan rapat daring dengan jadwal yang disepakati bersama, mengirim bahan rapat lebih dulu, dan membuat notulen serta daftar tindak lanjut yang dibagikan ke semua peserta",
      "Mengusulkan rapat daring dan mengirim bahan rapat lebih dulu kepada peserta"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 112,
    code: "TIK-22",
    cat: "Adaptasi TIK",
    type: "Memanfaatkan TIK untuk tugas",
    q: "Anda harus mengarsipkan ratusan surat masuk tahun ini agar mudah dicari kembali. Arsip kertas tahun lalu sering hilang dan sulit ditemukan. Sikap Anda adalah…",
    options: [
      "Menyimpan surat-surat itu dalam kardus seperti tahun lalu",
      "Membiarkan surat menumpuk di meja sampai ada yang mencari",
      "Memindai surat masuk, memberi nama berkas dan kata kunci yang konsisten, menyimpannya dalam folder digital yang tertata, dan membuat daftar indeks arsip",
      "Memindai surat masuk dan menyimpannya dalam folder digital",
      "Meminta rekan mengarsipkan surat-surat itu"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 1,
      C: 5,
      D: 4,
      E: 3
    },
    image: null,
    boss: null
  },
  {
    id: 113,
    code: "TIK-23",
    cat: "Adaptasi TIK",
    type: "Memanfaatkan TIK untuk tugas",
    q: "Instansi Anda membuka layanan pengaduan daring, tetapi warga masih datang langsung karena tidak tahu cara menggunakannya. Sikap Anda adalah…",
    options: [
      "Menutup layanan pengaduan daring karena tidak dipakai warga",
      "Membuat panduan bergambar tentang cara memakai layanan pengaduan daring, menampilkannya di loket dan media sosial, dan mendampingi warga yang pertama kali menggunakannya",
      "Menyuruh warga belajar sendiri memakai layanan itu",
      "Memberikan alamat situs layanan pengaduan kepada warga yang datang",
      "Menjelaskan cara memakai layanan pengaduan daring kepada warga yang datang dan memberi panduan tertulisnya"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 114,
    code: "TIK-24",
    cat: "Adaptasi TIK",
    type: "Membantu rekan gagap teknologi",
    q: "Rekan senior Anda tidak bisa mengirim lampiran lewat surel, padahal lampiran itu harus sampai ke instansi pusat hari ini. Sikap Anda adalah…",
    options: [
      "Mengirim lampiran itu dari surel Anda tanpa menjelaskan caranya",
      "Memberi tahu rekan itu tombol mana yang ditekan tanpa mendampingi",
      "Menyuruh rekan itu meminta bantuan petugas IT",
      "Mendampingi rekan itu mengirim lampiran langkah demi langkah sampai terkirim",
      "Mendampingi rekan itu mengirim lampiran langkah demi langkah, lalu membuat catatan bergambar agar ia bisa melakukannya sendiri lain kali"
    ],
    k: "E",
    scores: {
      A: 2,
      B: 3,
      C: 1,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 115,
    code: "TIK-25",
    cat: "Adaptasi TIK",
    type: "Membantu rekan gagap teknologi",
    q: "Beberapa rekan di unit Anda kesulitan memakai aplikasi rapat daring untuk rapat mingguan. Sikap Anda adalah…",
    options: [
      "Membuat panduan singkat bergambar, mengadakan latihan singkat sebelum rapat, dan mendampingi rekan yang masih kesulitan sampai mereka bisa bergabung sendiri",
      "Membuat panduan singkat dan membagikannya ke grup unit",
      "Mengusulkan rapat kembali tatap muka saja",
      "Membantu rekan yang kesulitan pada saat rapat berlangsung",
      "Membiarkan mereka karena memakai aplikasi itu adalah tanggung jawab masing-masing"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 4,
      C: 2,
      D: 3,
      E: 1
    },
    image: null,
    boss: null
  },
  {
    id: 116,
    code: "TIK-26",
    cat: "Adaptasi TIK",
    type: "Membantu rekan gagap teknologi",
    q: "Seorang rekan baru tidak tahu cara menyimpan berkas di penyimpanan awan kantor sehingga berkasnya sering hilang. Sikap Anda adalah…",
    options: [
      "Membiarkannya karena itu urusannya sendiri",
      "Menunjukkan cara menyimpan dan mengatur folder di penyimpanan awan, membantunya memindahkan berkas penting, dan memeriksa bersama seminggu kemudian apakah berkasnya sudah tersimpan rapi",
      "Memberi tahu nama folder penyimpanan awan yang benar",
      "Menyimpan berkas rekan itu ke penyimpanan awan untuknya",
      "Menunjukkan cara menyimpan berkas di penyimpanan awan dan membantunya mengatur foldernya"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 3,
      D: 2,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 117,
    code: "TIK-27",
    cat: "Adaptasi TIK",
    type: "Membantu rekan gagap teknologi",
    q: "Rekan Anda takut memakai aplikasi baru karena pernah salah menekan tombol dan menghapus data penting. Sikap Anda adalah…",
    options: [
      "Mengejek ketakutannya agar ia berani mencoba",
      "Membiarkannya memakai cara lama saja",
      "Memintanya mencoba aplikasi itu sendiri secara perlahan",
      "Menenangkan rekan itu dan menunjukkan tombol mana yang aman ditekan",
      "Menenangkan rekan itu, menunjukkan cara memakai aplikasi dengan aman termasuk cara mencadangkan data, lalu mendampinginya mencoba pada data latihan sampai ia percaya diri"
    ],
    k: "E",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 118,
    code: "TIK-28",
    cat: "Adaptasi TIK",
    type: "Membantu rekan gagap teknologi",
    q: "Atasan meminta Anda melatih rekan-rekan satu unit memakai sistem baru, padahal Anda sendiri baru mempelajarinya minggu lalu. Sikap Anda adalah…",
    options: [
      "Menolak melatih karena Anda juga baru belajar",
      "Melatih rekan seadanya tanpa persiapan",
      "Mempelajari kembali sistem itu sampai yakin, menyiapkan bahan latihan dan contoh tugas, lalu melatih rekan secara bertahap dan membuka sesi tanya jawab setelahnya",
      "Menyiapkan bahan latihan lalu melatih rekan memakai sistem itu",
      "Meminta atasan menunjuk pelatih lain yang lebih berpengalaman"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 2,
      C: 5,
      D: 4,
      E: 3
    },
    image: null,
    boss: null
  },
  {
    id: 119,
    code: "TIK-29",
    cat: "Adaptasi TIK",
    type: "Membantu rekan gagap teknologi",
    q: "Seorang rekan senior meminta Anda mengajarinya membuat tabel di lembar kerja digital untuk laporan bulanannya. Ia belajar lambat dan sering lupa langkahnya. Sikap Anda adalah…",
    options: [
      "Mengajarinya dengan sabar langkah demi langkah, memberinya catatan tertulis yang mudah diikuti, dan menanyakan perkembangannya pada laporan bulan berikutnya",
      "Membuatkan tabel untuk laporan bulan ini tanpa mengajarinya",
      "Menyuruhnya menonton video tutorial sendiri",
      "Mengajarinya langkah demi langkah dan memberinya catatan tertulis",
      "Menolak mengajarinya karena Anda sibuk dengan tugas sendiri"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 3,
      C: 2,
      D: 4,
      E: 1
    },
    image: null,
    boss: null
  },
  {
    id: 120,
    code: "TIK-30",
    cat: "Adaptasi TIK",
    type: "Membantu rekan gagap teknologi",
    q: "Unit Anda akan memakai sistem antrean digital. Seorang rekan yang sudah lama bekerja dengan cara manual khawatir tidak bisa mengikuti dan akan memperlambat layanan. Sikap Anda adalah…",
    options: [
      "Meyakinkan rekan itu bahwa sistem baru itu mudah tanpa menunjukkan caranya",
      "Membiarkan rekan itu tetap memakai cara manual",
      "Melaporkan kekhawatiran rekan itu ke atasan sebagai penolakan",
      "Menjelaskan manfaat sistem antrean digital dengan contoh nyata, mendampingi rekan itu berlatih sebelum sistem dipakai, dan tetap mendampinginya pada minggu pertama pemakaian",
      "Mendampingi rekan itu berlatih memakai sistem antrean digital sebelum dipakai"
    ],
    k: "D",
    scores: {
      A: 3,
      B: 2,
      C: 1,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 121,
    code: "PRO-01",
    cat: "Profesionalisme",
    type: "Akuntabilitas & integritas (whistleblowing)",
    q: "Anda menemukan bukti bahwa rekan satu unit menggelembungkan biaya perjalanan dinas dalam laporan. Rekan itu meminta Anda diam karena ia akan berbagi keuntungannya. Sikap Anda adalah…",
    options: [
      "Menerima tawaran berbagi keuntungan dan ikut diam",
      "Menolak tawaran itu, mengumpulkan bukti yang ada, dan melaporkan penyimpangan itu melalui saluran pengaduan resmi instansi",
      "Membiarkannya karena bukan Anda yang melakukan",
      "Mengingatkan rekan itu agar tidak mengulangi tanpa melapor",
      "Mengingatkan rekan itu dan mencatat kejadian itu, lalu melaporkannya bila ia mengulangi"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 122,
    code: "PRO-02",
    cat: "Profesionalisme",
    type: "Akuntabilitas & integritas (whistleblowing)",
    q: "Dalam pemeriksaan internal, Anda diminta keterangan tentang penggunaan dana kegiatan yang Anda kelola. Sebagian kwitansi kegiatan itu hilang. Sikap Anda adalah…",
    options: [
      "Membuat kwitansi pengganti agar berkas terlihat lengkap",
      "Mengaku tidak tahu apa-apa tentang dana itu",
      "Menjelaskan keadaan sebenarnya, menunjukkan bukti lain yang masih ada seperti catatan dan foto kegiatan, dan membantu pemeriksa menelusuri penggunaan dana itu",
      "Menjelaskan keadaan sebenarnya dan menunjukkan bukti lain yang masih ada",
      "Meminta waktu untuk mencari kwitansi yang hilang sebelum memberi keterangan"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 1,
      C: 5,
      D: 4,
      E: 3
    },
    image: null,
    boss: null
  },
  {
    id: 123,
    code: "PRO-03",
    cat: "Profesionalisme",
    type: "Akuntabilitas & integritas (whistleblowing)",
    q: "Seorang vendor menawarkan Anda hadiah mahal agar proyeknya dimenangkan dalam lelang di unit Anda. Sikap Anda adalah…",
    options: [
      "Menerima hadiah itu karena lelang belum diputuskan",
      "Menerima hadiah itu lalu tetap menilai lelang secara adil",
      "Menolak hadiah itu tetapi tidak melaporkannya kepada siapa pun",
      "Menolak hadiah itu dengan tegas, mencatat tawaran itu, dan melaporkannya ke atasan atau unit pengendalian gratifikasi sesuai prosedur",
      "Menolak hadiah itu dengan sopan dan menjelaskan bahwa lelang berjalan sesuai aturan"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 124,
    code: "PRO-04",
    cat: "Profesionalisme",
    type: "Akuntabilitas & integritas (whistleblowing)",
    q: "Anda melihat atasan Anda memakai kendaraan dinas untuk keperluan keluarga pada akhir pekan. Sikap Anda adalah…",
    options: [
      "Membiarkannya karena ia atasan Anda",
      "Ikut memakai kendaraan dinas untuk keperluan pribadi",
      "Mengingatkan atasan secara pribadi agar tidak mengulangi",
      "Menyampaikan keberatan secara langsung kepada atasan dan memintanya menghentikan pemakaian kendaraan dinas untuk keperluan pribadi",
      "Mengumpulkan bukti yang dapat dipertanggungjawabkan lalu melaporkannya melalui saluran pengaduan resmi sesuai prosedur yang berlaku"
    ],
    k: "E",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 125,
    code: "PRO-05",
    cat: "Profesionalisme",
    type: "Akuntabilitas & integritas (whistleblowing)",
    q: "Rekan Anda meminta Anda menandatangani daftar hadir rapat yang tidak Anda ikuti agar ia terlihat lengkap. Sikap Anda adalah…",
    options: [
      "Menolak menandatangani karena Anda tidak hadir, dan menjelaskan bahwa daftar hadir harus sesuai kenyataan",
      "Menandatangani karena hanya daftar hadir rapat",
      "Menandatangani lalu meminta rekan membalas budi",
      "Menolak menandatangani tetapi tidak menjelaskan alasannya",
      "Menolak menandatangani dan menyarankan rekan itu meminta izin resmi bila berhalangan hadir"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 1,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 126,
    code: "PRO-06",
    cat: "Profesionalisme",
    type: "Akuntabilitas & integritas (whistleblowing)",
    q: "Anda mengetahui ada pegawai yang menerima uang dari warga agar berkasnya didahulukan. Pegawai itu adalah rekan dekat Anda. Sikap Anda adalah…",
    options: [
      "Ikut meminta bagian dari uang itu",
      "Membiarkannya karena ia rekan dekat Anda",
      "Mengingatkan rekan itu secara pribadi agar berhenti menerima uang dari warga",
      "Mengingatkan rekan itu agar berhenti, dan melaporkan praktik itu melalui saluran resmi karena sudah merugikan warga",
      "Mengingatkan rekan itu dan mencatat praktik itu untuk dilaporkan bila berlanjut"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 127,
    code: "PRO-07",
    cat: "Profesionalisme",
    type: "Akuntabilitas & integritas (whistleblowing)",
    q: "Laporan kinerja unit Anda harus disampaikan besok, tetapi datanya menunjukkan target tidak tercapai. Atasan Anda menyarankan agar angka target ditulis tercapai saja. Sikap Anda adalah…",
    options: [
      "Menolak mengubah data, menyampaikan laporan sesuai fakta, dan mengusulkan rencana perbaikan agar target berikutnya tercapai",
      "Mengubah angka target seperti saran atasan",
      "Mengubah sebagian angka agar tidak terlalu jauh dari kenyataan",
      "Menunda penyampaian laporan sampai data terlihat lebih baik",
      "Menyampaikan laporan sesuai fakta dan menjelaskan penyebab target tidak tercapai"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 1,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 128,
    code: "PRO-08",
    cat: "Profesionalisme",
    type: "Akuntabilitas & integritas (whistleblowing)",
    q: "Anda ditugaskan mengelola kas kecil unit. Di akhir bulan, ada selisih kekurangan uang kas yang tidak Anda ketahui penyebabnya. Sikap Anda adalah…",
    options: [
      "Menutup selisih itu dengan uang pribadi tanpa memberi tahu siapa pun",
      "Melaporkan selisih itu kepada atasan, menelusuri catatan pengeluaran bersama, dan mengusulkan perbaikan pencatatan kas agar tidak terulang",
      "Mengubah catatan pengeluaran agar selisih itu hilang",
      "Menunggu sampai bulan berikutnya dengan harapan selisih itu tertutup sendiri",
      "Melaporkan selisih itu kepada atasan dan menelusuri catatan pengeluaran"
    ],
    k: "B",
    scores: {
      A: 2,
      B: 5,
      C: 1,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 129,
    code: "PRO-09",
    cat: "Profesionalisme",
    type: "Komitmen, deadline & prioritas",
    q: "Dua laporan penting harus selesai hari ini, tetapi Anda baru menyelesaikan satu. Atasan Anda sedang rapat dan tidak bisa dihubungi. Sikap Anda adalah…",
    options: [
      "Menyerahkan satu laporan saja dan mengabaikan yang lain",
      "Mengerjakan keduanya asal selesai tanpa memeriksa isinya",
      "Menyelesaikan laporan kedua seadanya dan memberitahu atasan setelah rapat selesai",
      "Menyelesaikan laporan kedua sebaik mungkin dan memberi catatan kepada atasan tentang kendala waktu yang Anda hadapi",
      "Menyelesaikan laporan kedua dengan kualitas terjaga, memberi catatan tertulis kepada atasan tentang urutan penyelesaian dan kendalanya, lalu meminta arahan bila ada perbaikan"
    ],
    k: "E",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 130,
    code: "PRO-10",
    cat: "Profesionalisme",
    type: "Komitmen, deadline & prioritas",
    q: "Anda sudah berjanji membantu panitia acara instansi akhir pekan ini, tetapi tiba-tiba ada tugas mendesak dari atasan di hari yang sama. Sikap Anda adalah…",
    options: [
      "Membatalkan janji ke panitia tanpa memberi tahu",
      "Mengabaikan tugas atasan dan tetap membantu panitia",
      "Menghubungi panitia dan atasan, menjelaskan bentrokan jadwal, dan mencari pengganti atau mengatur ulang pembagian tugas agar kedua kewajiban tetap berjalan",
      "Memberi tahu panitia bahwa Anda tidak bisa hadir dan menawarkan bantuan di hari lain",
      "Meminta rekan menggantikan Anda di panitia tanpa memberi tahu panitia"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 1,
      C: 5,
      D: 4,
      E: 3
    },
    image: null,
    boss: null
  },
  {
    id: 131,
    code: "PRO-11",
    cat: "Profesionalisme",
    type: "Komitmen, deadline & prioritas",
    q: "Tenggat pengumpulan data dari seluruh unit adalah besok, tetapi tiga unit belum mengirim datanya. Sikap Anda adalah…",
    options: [
      "Mengumpulkan data tanpa tiga unit itu dan menyalahkan mereka di laporan",
      "Menunggu sampai tiga unit itu mengirim tanpa mengingatkan",
      "Mengirim pengingat tertulis ke tiga unit itu",
      "Menghubungi penanggung jawab tiga unit itu, mengingatkan tenggatnya, dan menawarkan bantuan bila ada kendala",
      "Menghubungi penanggung jawab tiga unit itu, menawarkan bantuan menyelesaikan kendalanya, menyepakati jam pengiriman, dan menyiapkan laporan dengan catatan data yang masih ditunggu"
    ],
    k: "E",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 132,
    code: "PRO-12",
    cat: "Profesionalisme",
    type: "Komitmen, deadline & prioritas",
    q: "Anda sedang cuti tahunan ketika atasan menghubungi karena ada dokumen penting yang hanya Anda yang tahu letaknya. Sikap Anda adalah…",
    options: [
      "Mematikan telepon dan menikmati cuti Anda",
      "Menanggapi atasan, menjelaskan letak dokumen itu dengan jelas, dan memastikan rekan yang menggantikan Anda bisa mengaksesnya, lalu kembali menikmati cuti Anda",
      "Meminta atasan mencari sendiri dokumen itu",
      "Memberi tahu letak dokumen itu secara singkat tanpa memastikan rekan bisa mengaksesnya",
      "Menanggapi atasan dan menjelaskan letak dokumen itu dengan jelas"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 133,
    code: "PRO-13",
    cat: "Profesionalisme",
    type: "Komitmen, deadline & prioritas",
    q: "Anda mendapat tugas menyusun materi sosialisasi yang harus disampaikan minggu depan, tetapi bahan-bahannya belum lengkap. Sikap Anda adalah…",
    options: [
      "Menunda penyusunan sampai semua bahan lengkap tanpa memberi tahu atasan",
      "Menyusun materi seadanya dari bahan yang ada tanpa memeriksa kekurangannya",
      "Menyusun kerangka materi dari bahan yang ada, meminta bahan yang kurang ke pihak terkait dengan tenggat yang jelas, dan memberi tahu atasan tentang perkembangannya",
      "Menyusun kerangka materi dan meminta bahan yang kurang ke pihak terkait",
      "Meminta atasan menunda jadwal sosialisasi"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 2,
      C: 5,
      D: 4,
      E: 3
    },
    image: null,
    boss: null
  },
  {
    id: 134,
    code: "PRO-14",
    cat: "Profesionalisme",
    type: "Komitmen, deadline & prioritas",
    q: "Di tengah mengerjakan laporan tahunan, Anda diminta atasan membantu acara mendadak yang juga penting. Sikap Anda adalah…",
    options: [
      "Menanyakan prioritas kepada atasan, menyusun rencana penyelesaian keduanya, dan memberi tahu pihak terkait bila ada penyesuaian jadwal laporan",
      "Meninggalkan laporan tahunan dan mengerjakan acara mendadak itu saja",
      "Menolak membantu acara itu karena laporan tahunan belum selesai",
      "Mengerjakan keduanya bergantian tanpa memberi tahu siapa pun tentang risikonya",
      "Membantu acara mendadak itu dan melanjutkan laporan tahunan setelahnya dengan memberi tahu atasan"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 1,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 135,
    code: "PRO-15",
    cat: "Profesionalisme",
    type: "Komitmen, deadline & prioritas",
    q: "Rekan satu tim Anda sering menunda pekerjaannya sehingga tugas tim menumpuk di akhir tenggat. Sikap Anda adalah…",
    options: [
      "Mengerjakan semua tugas rekan itu sendiri agar tim tidak terlambat",
      "Membiarkannya karena itu tanggung jawab rekan tersebut",
      "Melaporkan rekan itu ke atasan tanpa berbicara dengannya lebih dulu",
      "Mengajak rekan itu bicara, mencari tahu kendalanya, menyepakati pembagian dan tenggat kecil bersama, lalu memantau perkembangannya dan memberi tahu atasan bila tidak ada perubahan",
      "Mengajak rekan itu bicara dan menyepakati pembagian tugas serta tenggat bersama"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 136,
    code: "PRO-16",
    cat: "Profesionalisme",
    type: "Rahasia jabatan & etika profesi",
    q: "Anda menangani seleksi pegawai baru. Seorang kerabat meminta Anda membocorkan soal tes seleksi sebelum ujian. Sikap Anda adalah…",
    options: [
      "Menolak dengan tegas dan sopan, menjelaskan bahwa soal seleksi bersifat rahasia dan membocorkannya melanggar aturan, lalu menawarkan bantuan belajar yang tidak melanggar aturan",
      "Memberikan soal itu karena ia kerabat sendiri",
      "Memberikan kisi-kisi soal itu saja, bukan soalnya",
      "Menolak tetapi tidak menjelaskan alasannya",
      "Menolak dengan sopan dan menjelaskan bahwa soal seleksi bersifat rahasia jabatan"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 1,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 137,
    code: "PRO-17",
    cat: "Profesionalisme",
    type: "Rahasia jabatan & etika profesi",
    q: "Seorang wartawan menghubungi Anda dan meminta komentar tentang kebijakan instansi yang belum diumumkan resmi. Sikap Anda adalah…",
    options: [
      "Memberikan komentar dan membocorkan isi kebijakan itu",
      "Memberikan komentar pribadi tanpa menyebut nama",
      "Menolak berkomentar tanpa mengarahkan ke pihak yang berwenang",
      "Menolak berkomentar tentang kebijakan yang belum diumumkan dan mengarahkan wartawan itu ke humas atau pejabat yang berwenang memberi keterangan resmi",
      "Mengarahkan wartawan itu ke humas instansi"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 138,
    code: "PRO-18",
    cat: "Profesionalisme",
    type: "Rahasia jabatan & etika profesi",
    q: "Rekan Anda memotret dokumen hasil rapat tertutup dan hendak membagikannya ke grup keluarga. Sikap Anda adalah…",
    options: [
      "Meminta rekan itu mengirimkan foto itu kepada Anda juga",
      "Membiarkannya karena itu urusan rekan tersebut",
      "Mengingatkan rekan itu agar tidak membagikan foto itu",
      "Mengingatkan rekan itu bahwa dokumen rapat tertutup tidak boleh disebarkan dan memintanya menghapus foto itu",
      "Mengingatkan rekan itu bahwa dokumen itu rahasia, memintanya menghapus foto itu, dan melaporkan kejadian itu ke atasan bila ia tetap membagikannya"
    ],
    k: "E",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 139,
    code: "PRO-19",
    cat: "Profesionalisme",
    type: "Rahasia jabatan & etika profesi",
    q: "Anda diminta menjadi panitia lelang proyek. Salah satu peserta lelang adalah perusahaan milik saudara Anda. Sikap Anda adalah…",
    options: [
      "Tetap menjadi panitia dan membantu perusahaan saudara Anda menang",
      "Menyampaikan adanya konflik kepentingan kepada atasan, meminta diganti dari kepanitiaan lelang itu, dan memastikan proses lelang berjalan adil",
      "Tetap menjadi panitia tetapi berjanji menilai secara adil",
      "Menjadi panitia tetapi tidak ikut dalam penilaian perusahaan saudara Anda",
      "Memberi tahu atasan tentang hubungan keluarga itu dan meminta arahan"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 140,
    code: "PRO-20",
    cat: "Profesionalisme",
    type: "Rahasia jabatan & etika profesi",
    q: "Seorang warga meminta salinan berkas pengaduan warga lain yang sedang Anda tangani, dengan alasan ia ingin membantu menyelesaikan masalah itu. Sikap Anda adalah…",
    options: [
      "Memberikan salinan berkas itu karena ia berniat membantu",
      "Memberikan ringkasan isi pengaduan itu secara lisan",
      "Menolak memberikan berkas pengaduan itu, menjelaskan bahwa data pengadu dilindungi, dan mengarahkan warga itu ke jalur pengaduan resmi bila ia punya informasi terkait",
      "Menolak memberikan berkas itu dan menjelaskan bahwa data pengadu dilindungi kerahasiaannya",
      "Meminta warga itu menanyakan langsung ke pengadu yang bersangkutan"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 2,
      C: 5,
      D: 4,
      E: 3
    },
    image: null,
    boss: null
  },
  {
    id: 141,
    code: "PRO-21",
    cat: "Profesionalisme",
    type: "Rahasia jabatan & etika profesi",
    q: "Atasan Anda meminta Anda merahasiakan hasil audit internal yang menemukan penyimpangan, dengan alasan menjaga nama baik instansi. Sikap Anda adalah…",
    options: [
      "Membocorkan hasil audit itu ke media agar publik tahu",
      "Menyimpan hasil audit itu rapat-rapat dan mengabaikan penyimpangannya",
      "Menjaga kerahasiaan dokumen audit sesuai aturan, tetapi tetap mendorong tindak lanjut perbaikan melalui jalur resmi yang berwenang menangani temuan itu",
      "Menjaga kerahasiaan dokumen audit dan mengingatkan atasan agar temuan itu ditindaklanjuti",
      "Menceritakan temuan audit itu hanya kepada rekan dekat"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 2,
      C: 5,
      D: 4,
      E: 3
    },
    image: null,
    boss: null
  },
  {
    id: 142,
    code: "PRO-22",
    cat: "Profesionalisme",
    type: "Rahasia jabatan & etika profesi",
    q: "Anda menemukan berkas berisi data gaji seluruh pegawai tertinggal di ruang rapat setelah rapat selesai. Sikap Anda adalah…",
    options: [
      "Memotret berkas itu dan membagikannya ke rekan",
      "Membiarkan berkas itu di ruang rapat",
      "Membawa berkas itu ke meja Anda dan menyimpannya sampai ada yang mencari",
      "Menyerahkan berkas itu ke bagian kepegawaian dan memberi tahu pemiliknya",
      "Segera mengamankan berkas itu, menyerahkannya ke bagian kepegawaian atau pemiliknya, dan mengingatkan agar data sensitif tidak ditinggalkan sembarangan"
    ],
    k: "E",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 143,
    code: "PRO-23",
    cat: "Profesionalisme",
    type: "Rahasia jabatan & etika profesi",
    q: "Seorang rekan menawarkan Anda pekerjaan sampingan sebagai konsultan di perusahaan yang sedang bermitra dengan instansi Anda. Sikap Anda adalah…",
    options: [
      "Menolak tawaran itu karena menimbulkan konflik kepentingan dengan tugas Anda, dan menjelaskan alasannya dengan sopan",
      "Menerima tawaran itu karena dilakukan di luar jam kerja",
      "Menerima tawaran itu dengan syarat tidak diketahui atasan",
      "Menerima tawaran itu tetapi hanya untuk pekerjaan yang tidak terkait instansi",
      "Meminta izin atasan lebih dulu dan menerima hanya bila atasan menyetujui dan tidak ada konflik kepentingan"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 1,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 144,
    code: "PRO-24",
    cat: "Profesionalisme",
    type: "Pengembangan kompetensi diri",
    q: "Instansi mengadakan kursus daring gratis tentang manajemen arsip yang relevan dengan tugas Anda, tetapi kursusnya diadakan pada malam hari setelah jam kerja. Sikap Anda adalah…",
    options: [
      "Tidak mengikuti kursus itu karena di luar jam kerja",
      "Mendaftar tetapi tidak pernah mengikuti sesinya",
      "Mengikuti sebagian sesi kursus itu bila sempat",
      "Mengikuti kursus itu dengan sungguh-sungguh, mencatat materi pentingnya, dan menerapkan ilmunya dalam pengelolaan arsip di unit Anda",
      "Mengikuti kursus itu dan mencatat materi pentingnya"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 145,
    code: "PRO-25",
    cat: "Profesionalisme",
    type: "Pengembangan kompetensi diri",
    q: "Atasan menilai laporan Anda masih lemah dalam analisis data dan menyarankan Anda meningkatkan kemampuan itu. Sikap Anda adalah…",
    options: [
      "Mengabaikan saran itu karena menganggap penilaian atasan tidak adil",
      "Menerima saran itu, mempelajari analisis data dari pelatihan dan latihan mandiri, lalu meminta atasan menilai kembali laporan Anda berikutnya",
      "Menyalahkan rekan yang memberi data kepada Anda",
      "Berjanji akan belajar tetapi tidak melakukan apa pun",
      "Menerima saran itu dan mempelajari analisis data secara mandiri"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 146,
    code: "PRO-26",
    cat: "Profesionalisme",
    type: "Pengembangan kompetensi diri",
    q: "Anda ditugaskan di bidang yang belum pernah Anda tangani dan tidak ada rekan yang bisa mengajari. Sikap Anda adalah…",
    options: [
      "Meminta pindah tugas karena bidang itu bukan keahlian Anda",
      "Mengerjakan tugas itu seadanya tanpa belajar lebih dulu",
      "Meminta atasan menunda tugas itu sampai Anda siap",
      "Mempelajari bidang itu dari peraturan, panduan, dan sumber terpercaya, berkonsultasi dengan unit terkait, dan menyusun rencana kerja sebelum mulai mengerjakan tugas",
      "Mempelajari bidang itu dari peraturan dan panduan yang ada, lalu mulai mengerjakan tugas"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 147,
    code: "PRO-27",
    cat: "Profesionalisme",
    type: "Pengembangan kompetensi diri",
    q: "Rekan Anda mengajak Anda mengikuti komunitas belajar pegawai yang membahas peraturan terbaru setiap minggu. Sikap Anda adalah…",
    options: [
      "Menolak karena menganggap belajar peraturan itu membosankan",
      "Mengikuti komunitas itu secara aktif, berbagi pemahaman dengan rekan, dan menerapkan peraturan terbaru dalam pekerjaan sehari-hari",
      "Mengikuti sekali saja lalu tidak pernah datang lagi",
      "Mengikuti komunitas itu bila tidak ada pekerjaan lain",
      "Mengikuti komunitas itu dan mendengarkan pembahasan peraturan terbaru"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 148,
    code: "PRO-28",
    cat: "Profesionalisme",
    type: "Pengembangan kompetensi diri",
    q: "Anda gagal dalam ujian sertifikasi kompetensi yang diikuti rekan-rekan Anda dan sebagian besar lulus. Sikap Anda adalah…",
    options: [
      "Mengevaluasi bagian yang gagal, menyusun rencana belajar, mengikuti bimbingan atau latihan tambahan, dan mendaftar ujian ulang dengan persiapan yang lebih baik",
      "Menyalahkan soal ujian yang terlalu sulit",
      "Berhenti mencoba dan menganggap sertifikasi itu tidak penting",
      "Mendaftar ujian ulang tanpa mengubah cara belajar",
      "Mengevaluasi bagian yang gagal dan menyusun rencana belajar untuk ujian ulang"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 1,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 149,
    code: "PRO-29",
    cat: "Profesionalisme",
    type: "Pengembangan kompetensi diri",
    q: "Instansi membuka kesempatan rotasi ke unit lain yang bidangnya berbeda dari tugas Anda sekarang. Rotasi itu bisa memperluas wawasan Anda. Sikap Anda adalah…",
    options: [
      "Menolak rotasi karena takut tidak bisa beradaptasi",
      "Menerima rotasi tetapi tetap mengerjakan tugas lama Anda",
      "Menerima rotasi itu, mempelajari tugas di unit baru sebelum pindah, dan memanfaatkan kesempatan itu untuk menambah kompetensi serta membantu unit baru",
      "Menerima rotasi itu dan mempelajari tugas di unit baru",
      "Meminta waktu lama untuk berpikir tanpa memberi kepastian"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 2,
      C: 5,
      D: 4,
      E: 3
    },
    image: null,
    boss: null
  },
  {
    id: 150,
    code: "PRO-30",
    cat: "Profesionalisme",
    type: "Pengembangan kompetensi diri",
    q: "Anda diminta menjadi mentor bagi pegawai baru di unit Anda, padahal beban kerja Anda sedang tinggi. Sikap Anda adalah…",
    options: [
      "Menolak menjadi mentor karena beban kerja Anda tinggi",
      "Menerima tetapi membiarkan pegawai baru itu belajar sendiri",
      "Menerima dan memberi pegawai baru itu panduan tertulis saja",
      "Menerima, mengatur jadwal pendampingan yang tidak mengganggu tugas pokok, dan membimbing pegawai baru itu secara bertahap",
      "Menerima dengan senang hati, menyusun rencana pendampingan yang terukur, membimbing pegawai baru itu secara bertahap, dan mengevaluasi perkembangannya bersama atasan"
    ],
    k: "E",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 151,
    code: "RAD-01",
    cat: "Anti Radikalisme",
    type: "Menolak ajakan paham radikal",
    q: "Seorang kenalan mengundang Anda ke seminar yang mengusung gagasan mengganti Pancasila dengan sistem lain. Ia mengatakan seminar itu hanya diskusi ilmiah. Sikap Anda adalah…",
    options: [
      "Menghadiri seminar itu karena penasaran dengan gagasannya",
      "Menghadiri seminar itu sekali untuk mengetahui isinya, lalu diam",
      "Menolak undangan itu dengan santun, menjelaskan bahwa sebagai ASN Anda setia pada Pancasila, dan memberi tahu atasan bila ajakan serupa menyasar pegawai lain",
      "Menolak undangan itu dengan santun dan menjelaskan kesetiaan Anda pada Pancasila",
      "Menolak undangan itu dengan alasan sedang sibuk"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 2,
      C: 5,
      D: 4,
      E: 3
    },
    image: null,
    boss: null
  },
  {
    id: 152,
    code: "RAD-02",
    cat: "Anti Radikalisme",
    type: "Menolak ajakan paham radikal",
    q: "Rekan sekantor membagikan pamflet yang berisi ajakan menolak hasil pemilu dan mengganti sistem pemerintahan dengan cara yang bertentangan dengan konstitusi. Sikap Anda adalah…",
    options: [
      "Ikut membagikan pamflet itu agar tidak dianggap berbeda",
      "Membiarkan pamflet itu karena itu urusan pribadi rekan tersebut",
      "Menolak pamflet itu dan membuangnya diam-diam",
      "Menolak pamflet itu, menjelaskan dengan santun bahwa ajakan itu bertentangan dengan konstitusi, dan melaporkannya kepada atasan sesuai prosedur",
      "Menolak pamflet itu dan menjelaskan mengapa ajakan itu bertentangan dengan konstitusi"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 153,
    code: "RAD-03",
    cat: "Anti Radikalisme",
    type: "Menolak ajakan paham radikal",
    q: "Di lingkungan tempat tinggal Anda, seseorang mengajak warga bergabung dengan kelompok yang mengajarkan bahwa pemerintah yang sah tidak perlu ditaati. Sikap Anda adalah…",
    options: [
      "Bergabung dengan kelompok itu karena diajak tetangga sendiri",
      "Membiarkannya karena bukan urusan Anda sebagai pegawai",
      "Menolak ajakan itu tetapi tidak melakukan apa pun",
      "Menolak ajakan itu dan mengajak warga lain untuk tidak ikut bergabung",
      "Menolak ajakan itu dengan santun, mengajak warga tetap taat pada aturan yang berlaku, dan melaporkan ajakan itu kepada ketua lingkungan atau pihak berwenang"
    ],
    k: "E",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 154,
    code: "RAD-04",
    cat: "Anti Radikalisme",
    type: "Menolak ajakan paham radikal",
    q: "Seorang rekan mengajak Anda mengikuti pengajian tertutup yang mengajarkan bahwa kelompok agama lain adalah musuh yang harus diperangi. Sikap Anda adalah…",
    options: [
      "Menolak ajakan itu dengan tegas namun santun, menjelaskan bahwa ajaran itu bertentangan dengan nilai Pancasila dan kerukunan, lalu melaporkannya kepada atasan sesuai prosedur",
      "Mengikuti pengajian itu karena diajak rekan dekat",
      "Menghadiri pengajian itu sekali untuk melihat sendiri isinya",
      "Menolak ajakan itu dengan alasan sedang sibuk",
      "Menolak ajakan itu dan menjelaskan bahwa ajaran itu bertentangan dengan kerukunan"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 1,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 155,
    code: "RAD-05",
    cat: "Anti Radikalisme",
    type: "Menolak ajakan paham radikal",
    q: "Anda menerima tautan video ceramah yang isinya menghasut kebencian terhadap kelompok tertentu dan mengajak penonton menolak Pancasila. Pengirimnya adalah rekan kerja Anda. Sikap Anda adalah…",
    options: [
      "Meneruskan video itu ke grup lain agar banyak yang menonton",
      "Tidak menonton apalagi meneruskan video itu, mengingatkan pengirim dengan santun bahwa isinya bertentangan dengan Pancasila, dan melaporkannya kepada atasan sesuai prosedur",
      "Mengabaikan video itu begitu saja",
      "Menghapus video itu dari ponsel Anda tanpa melakukan apa pun",
      "Mengingatkan pengirim dengan santun agar tidak menyebarkan video serupa"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 156,
    code: "RAD-06",
    cat: "Anti Radikalisme",
    type: "Menolak ajakan paham radikal",
    q: "Di kantor, seseorang menempelkan selebaran yang mengajak pegawai menolak upacara bendera karena dianggap bertentangan dengan keyakinannya. Sikap Anda adalah…",
    options: [
      "Ikut menolak upacara bendera agar tidak berbeda dengan rekan",
      "Membiarkan selebaran itu karena takut berkonflik",
      "Melepas selebaran itu diam-diam tanpa memberi tahu siapa pun",
      "Menjelaskan kepada rekan bahwa upacara bendera adalah bentuk penghormatan pada negara dan mengajaknya tetap mengikuti dengan sikap yang baik",
      "Menjelaskan dengan santun bahwa upacara bendera adalah kewajiban sebagai ASN dan bentuk penghormatan pada negara, lalu melaporkan selebaran itu kepada atasan sesuai prosedur"
    ],
    k: "E",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 157,
    code: "RAD-07",
    cat: "Anti Radikalisme",
    type: "Menolak ajakan paham radikal",
    q: "Seorang tokoh masyarakat mengajak Anda mendukung gerakan yang ingin mengganti dasar negara melalui ceramahnya. Ia menjanjikan imbalan bila Anda ikut menyebarkan gagasannya. Sikap Anda adalah…",
    options: [
      "Menerima tawaran itu karena imbalannya besar",
      "Menolak tawaran itu dengan tegas dan santun, menjelaskan kesetiaan Anda pada Pancasila, dan melaporkan ajakan itu kepada pihak berwenang sesuai prosedur",
      "Menolak tawaran itu tetapi tetap menyebarkan gagasannya secara diam-diam",
      "Menolak tawaran itu dengan alasan tidak tertarik",
      "Menolak tawaran itu dan menjelaskan kesetiaan Anda pada Pancasila"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 158,
    code: "RAD-08",
    cat: "Anti Radikalisme",
    type: "Menolak kekerasan & pemaksaan kehendak",
    q: "Sekelompok orang memaksa pedagang di pasar menutup lapaknya karena berbeda keyakinan dengan mereka. Anda menyaksikan kejadian itu. Sikap Anda adalah…",
    options: [
      "Tidak ikut memaksa, menenangkan pedagang dan warga sekitar, dan segera melaporkan kejadian itu kepada pihak berwenang agar ditangani sesuai prosedur",
      "Ikut memaksa pedagang itu agar tidak dimusuhi kelompok tersebut",
      "Membiarkannya karena takut ikut menjadi sasaran",
      "Meminta pedagang itu menutup lapaknya sementara agar keadaan tenang",
      "Menenangkan pedagang itu dan menyarankannya melapor ke pihak berwenang"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 1,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 159,
    code: "RAD-09",
    cat: "Anti Radikalisme",
    type: "Menolak kekerasan & pemaksaan kehendak",
    q: "Dalam rapat warga, seseorang memaksa semua peserta menyetujui pendapatnya dengan ancaman akan mempermalukan yang tidak setuju. Sikap Anda adalah…",
    options: [
      "Menyetujui pendapatnya karena takut dipermalukan",
      "Keluar dari rapat agar tidak terlibat",
      "Menolak pemaksaan itu dengan tenang, mengusulkan agar setiap pendapat didengar melalui musyawarah, dan melaporkan ancaman itu kepada ketua rapat atau pihak berwenang bila berlanjut",
      "Menolak pemaksaan itu dan mengusulkan musyawarah untuk mendengar semua pendapat",
      "Diam saja sampai rapat selesai"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 2,
      C: 5,
      D: 4,
      E: 3
    },
    image: null,
    boss: null
  },
  {
    id: 160,
    code: "RAD-10",
    cat: "Anti Radikalisme",
    type: "Menolak kekerasan & pemaksaan kehendak",
    q: "Rekan Anda memaksa rekan lain yang berbeda keyakinan untuk mengikuti cara ibadahnya, dengan alasan ingin menyelamatkan rekan itu. Sikap Anda adalah…",
    options: [
      "Mendukung pemaksaan itu karena niatnya baik",
      "Membiarkannya karena itu urusan keyakinan mereka",
      "Meminta rekan yang dipaksa itu mengalah saja demi kerukunan",
      "Menegur rekan yang memaksa itu dengan santun, menjelaskan bahwa keyakinan tidak boleh dipaksakan, dan melaporkannya kepada atasan bila pemaksaan itu berlanjut",
      "Menegur rekan yang memaksa itu dan menjelaskan bahwa keyakinan tidak boleh dipaksakan"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 161,
    code: "RAD-11",
    cat: "Anti Radikalisme",
    type: "Menolak kekerasan & pemaksaan kehendak",
    q: "Anda melihat sekelompok pemuda merusak tempat ibadah kelompok lain sambil meneriakkan ujaran kebencian. Sikap Anda adalah…",
    options: [
      "Menjaga jarak demi keselamatan, menenangkan warga sekitar, dan segera melaporkan kejadian itu kepada pihak berwenang",
      "Ikut merusak karena takut dianggap tidak setia kawan",
      "Merekam kejadian itu lalu menyebarkannya ke media sosial",
      "Menghadapi kelompok itu sendiri agar mereka berhenti",
      "Segera melaporkan kejadian itu kepada pihak berwenang"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 1,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 162,
    code: "RAD-12",
    cat: "Anti Radikalisme",
    type: "Menolak kekerasan & pemaksaan kehendak",
    q: "Seseorang mengancam akan menyakiti Anda bila Anda tidak ikut dalam aksi yang memaksakan kehendak dengan kekerasan. Sikap Anda adalah…",
    options: [
      "Mengikuti aksi itu karena takut diancam",
      "Membalas ancaman itu dengan ancaman yang lebih keras",
      "Menolak dengan tegas namun santun, menjaga diri tetap tenang, mengamankan diri, dan segera melaporkan ancaman itu kepada pihak berwenang",
      "Menolak ancaman itu dan segera melaporkannya kepada pihak berwenang",
      "Menghindar dari orang itu tanpa melapor kepada siapa pun"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 2,
      C: 5,
      D: 4,
      E: 3
    },
    image: null,
    boss: null
  },
  {
    id: 163,
    code: "RAD-13",
    cat: "Anti Radikalisme",
    type: "Menolak kekerasan & pemaksaan kehendak",
    q: "Di media sosial, akun anonim mengajak pengikutnya menyerang kantor pemerintahan sebagai bentuk protes terhadap kebijakan. Banyak rekan Anda membagikan ajakan itu. Sikap Anda adalah…",
    options: [
      "Ikut membagikan ajakan itu agar tidak ketinggalan",
      "Tidak ikut membagikan ajakan itu, menjelaskan kepada rekan bahwa protes harus disampaikan secara damai dan sesuai aturan, dan melaporkan akun itu melalui kanal resmi",
      "Membiarkannya karena itu hanya ajakan di media sosial",
      "Menghapus akun media sosial Anda agar tidak terseret",
      "Mengingatkan rekan agar tidak membagikan ajakan kekerasan itu"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 164,
    code: "RAD-14",
    cat: "Anti Radikalisme",
    type: "Menolak kekerasan & pemaksaan kehendak",
    q: "Seorang warga memaksa petugas loket mendahulukan urusannya dengan mengancam akan membuat keributan bila tidak dilayani lebih dulu. Sikap Anda adalah…",
    options: [
      "Mendahulukan urusan warga itu agar tidak terjadi keributan",
      "Membalas ancaman warga itu dengan nada keras",
      "Meminta warga lain mengalah dan membiarkan warga itu dilayani lebih dulu",
      "Menenangkan warga itu, menjelaskan aturan antrean berlaku untuk semua, dan meminta bantuan keamanan atau atasan bila ancaman itu berlanjut",
      "Menenangkan warga itu dan menjelaskan aturan antrean berlaku untuk semua"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 165,
    code: "RAD-15",
    cat: "Anti Radikalisme",
    type: "Menolak kekerasan & pemaksaan kehendak",
    q: "Kelompok tertentu memaksa sekolah di daerah Anda menghapus pelajaran yang mereka anggap bertentangan dengan keyakinan mereka, dengan cara mengintimidasi guru-guru. Sikap Anda adalah…",
    options: [
      "Mendukung tuntutan kelompok itu karena mereka mayoritas di daerah itu",
      "Membiarkannya karena bukan urusan Anda",
      "Meminta guru-guru mengalah sementara agar keadaan tenang",
      "Mendukung guru-guru dan mengajak warga menolak intimidasi itu",
      "Menolak intimidasi itu, mendukung guru-guru menjalankan kurikulum sesuai aturan, dan melaporkan intimidasi itu kepada pihak berwenang dan dinas terkait"
    ],
    k: "E",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 166,
    code: "RAD-16",
    cat: "Anti Radikalisme",
    type: "Menerima perbedaan ideologi yang tidak bertentangan dengan Pancasila",
    q: "Seorang rekan di unit Anda aktif di organisasi kemasyarakatan yang berbeda dengan organisasi yang Anda ikuti. Ia tetap menghormati Pancasila, tidak pernah memaksakan pandangannya kepada rekan lain, dan bekerja sama dengan baik dalam tim. Sikap Anda adalah…",
    options: [
      "Menjauhi rekan itu karena berbeda organisasi",
      "Menghormati pilihannya berorganisasi, tetap bekerja sama secara profesional, dan tidak mencampur urusan organisasi dengan tugas bersama",
      "Memaksanya keluar dari organisasi itu dan bergabung dengan organisasi Anda",
      "Tetap bekerja sama tetapi sering menyindir organisasinya",
      "Menghormati pilihannya berorganisasi dan tetap bekerja sama secara profesional"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 167,
    code: "RAD-17",
    cat: "Anti Radikalisme",
    type: "Menerima perbedaan ideologi yang tidak bertentangan dengan Pancasila",
    q: "Dalam diskusi di kantor, rekan Anda menyampaikan pandangan ekonomi yang berbeda dengan Anda, tetapi pandangannya masih sejalan dengan nilai Pancasila. Sikap Anda adalah…",
    options: [
      "Menyatakan pandangan rekan itu salah dan tidak boleh disampaikan lagi",
      "Keluar dari diskusi karena tidak setuju",
      "Mendengarkan pandangannya tetapi menolak membahasnya lebih lanjut",
      "Mendengarkan pandangannya dengan terbuka dan menyampaikan pendapat Anda secara santun",
      "Mendengarkan pandangannya dengan terbuka, mendiskusikan persamaan dan perbedaannya secara santun, dan tetap menjaga hubungan kerja yang baik"
    ],
    k: "E",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 168,
    code: "RAD-18",
    cat: "Anti Radikalisme",
    type: "Menerima perbedaan ideologi yang tidak bertentangan dengan Pancasila",
    q: "Warga di lingkungan Anda memiliki cara pandang berbeda tentang pembangunan desa, tetapi semua pihak tetap menghormati aturan dan musyawarah. Sikap Anda adalah…",
    options: [
      "Memaksakan cara pandang Anda sebagai yang paling benar",
      "Mengabaikan pendapat warga yang berbeda dengan Anda",
      "Mengikuti pendapat mayoritas tanpa mendengar pendapat lain",
      "Menghargai perbedaan cara pandang itu, mendengarkan semua pihak, dan mengusulkan musyawarah untuk mencapai kesepakatan bersama",
      "Menghargai perbedaan cara pandang itu dan mendengarkan semua pihak"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 169,
    code: "RAD-19",
    cat: "Anti Radikalisme",
    type: "Menerima perbedaan ideologi yang tidak bertentangan dengan Pancasila",
    q: "Rekan Anda menganut aliran kepercayaan yang berbeda dengan Anda, tetapi ia tidak pernah memaksakan keyakinannya dan selalu menghormati keyakinan orang lain. Sikap Anda adalah…",
    options: [
      "Menghormati keyakinannya, tetap berteman dan bekerja sama dengan baik, dan tidak mempermasalahkan perbedaan itu selama tidak bertentangan dengan Pancasila",
      "Menjauhi rekan itu karena berbeda keyakinan",
      "Melaporkan rekan itu ke atasan karena berbeda keyakinan",
      "Tetap bekerja sama tetapi membatasi pergaulan dengannya",
      "Menghormati keyakinannya dan tetap bekerja sama secara profesional"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 1,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 170,
    code: "RAD-20",
    cat: "Anti Radikalisme",
    type: "Menerima perbedaan ideologi yang tidak bertentangan dengan Pancasila",
    q: "Dalam pemilihan ketua RT, warga mendukung calon yang berbeda-beda. Seorang warga mengejek pilihan warga lain dan menganggap pilihannya paling benar. Sikap Anda adalah…",
    options: [
      "Ikut mengejek warga yang pilihannya berbeda",
      "Membiarkan ejekan itu karena itu urusan mereka",
      "Mengingatkan warga itu dengan santun bahwa perbedaan pilihan adalah hal yang wajar, mengajak semua pihak menghormati hasil pemilihan, dan menjaga suasana tetap rukun",
      "Mengingatkan warga itu agar tidak mengejek pilihan orang lain",
      "Meminta warga yang diejek itu mengalah saja"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 2,
      C: 5,
      D: 4,
      E: 3
    },
    image: null,
    boss: null
  },
  {
    id: 171,
    code: "RAD-21",
    cat: "Anti Radikalisme",
    type: "Menerima perbedaan ideologi yang tidak bertentangan dengan Pancasila",
    q: "Rekan Anda sering mengkritik kebijakan pemerintah dengan argumen yang berdasar, tetapi ia tetap mengikuti aturan dan tidak mengajak orang lain menentang negara. Sikap Anda adalah…",
    options: [
      "Melaporkan rekan itu sebagai anti-pemerintah",
      "Menjauhi rekan itu agar tidak dianggap sependapat",
      "Memintanya berhenti mengkritik kebijakan pemerintah",
      "Menghargai haknya menyampaikan kritik secara berdasar, mendiskusikannya secara sehat bila perlu, dan tetap bekerja sama secara profesional",
      "Menghargai haknya mengkritik dan tetap bekerja sama secara profesional"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 172,
    code: "RAD-22",
    cat: "Anti Radikalisme",
    type: "Menerima perbedaan ideologi yang tidak bertentangan dengan Pancasila",
    q: "Di tempat kerja, rekan dari daerah lain memiliki kebiasaan dan pandangan hidup yang berbeda dengan Anda, tetapi tidak bertentangan dengan Pancasila. Sikap Anda adalah…",
    options: [
      "Menghargai kebiasaannya, belajar memahami latar belakangnya, dan membangun kerja sama yang harmonis dengannya",
      "Memintanya menyesuaikan diri sepenuhnya dengan kebiasaan Anda",
      "Mengabaikan rekan itu dan bekerja sendiri",
      "Menerima kehadirannya tetapi tidak mau berinteraksi dengannya",
      "Menghargai kebiasaannya dan tetap bekerja sama dengannya"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 1,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 173,
    code: "RAD-23",
    cat: "Anti Radikalisme",
    type: "Melaporkan paham radikal sesuai prosedur",
    q: "Anda mendengar rekan kerja secara rutin menyebarkan ajaran yang menolak Pancasila kepada pegawai baru. Sikap Anda adalah…",
    options: [
      "Ikut mendengarkan ajaran itu karena penasaran",
      "Membiarkannya karena bukan Anda yang disasar",
      "Menegur rekan itu sekali tanpa tindak lanjut",
      "Menegur rekan itu dan memberitahukan atasan tentang penyebarannya",
      "Mengumpulkan bukti penyebarannya, menegur rekan itu dengan santun, dan melaporkannya kepada atasan atau unit yang berwenang sesuai prosedur"
    ],
    k: "E",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 174,
    code: "RAD-24",
    cat: "Anti Radikalisme",
    type: "Melaporkan paham radikal sesuai prosedur",
    q: "Anda menemukan buku-buku berisi ajaran yang menghasut kebencian antar kelompok tersimpan di perpustakaan kantor. Sikap Anda adalah…",
    options: [
      "Membagikan buku-buku itu kepada rekan agar banyak yang membaca",
      "Tidak menyebarkan buku itu, mengamankan temuan itu, dan melaporkannya kepada atasan atau pengelola perpustakaan sesuai prosedur agar ditindaklanjuti",
      "Membiarkan buku itu di perpustakaan",
      "Membuang buku itu diam-diam tanpa melapor",
      "Melaporkan temuan buku itu kepada pengelola perpustakaan"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 175,
    code: "RAD-25",
    cat: "Anti Radikalisme",
    type: "Melaporkan paham radikal sesuai prosedur",
    q: "Seorang warga memberi tahu Anda bahwa ada kelompok yang merencanakan aksi kekerasan di daerah Anda. Informasi itu belum terverifikasi. Sikap Anda adalah…",
    options: [
      "Menyebarkan informasi itu ke media sosial agar warga waspada",
      "Mengabaikan informasi itu karena belum terverifikasi",
      "Menenangkan warga itu, mencatat informasi yang disampaikannya, dan segera meneruskannya kepada pihak berwenang agar dapat diverifikasi dan ditindaklanjuti",
      "Meneruskan informasi itu kepada pihak berwenang",
      "Meminta warga itu melapor sendiri ke pihak berwenang"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 2,
      C: 5,
      D: 4,
      E: 3
    },
    image: null,
    boss: null
  },
  {
    id: 176,
    code: "RAD-26",
    cat: "Anti Radikalisme",
    type: "Melaporkan paham radikal sesuai prosedur",
    q: "Di grup percakapan warga, seseorang membagikan tautan pendaftaran kelompok yang mengajarkan paham yang bertentangan dengan Pancasila. Sikap Anda adalah…",
    options: [
      "Mengklik tautan itu dan mendaftar karena penasaran",
      "Keluar dari grup agar tidak terseret",
      "Menghapus tautan itu dari ponsel Anda tanpa melakukan apa pun",
      "Mengingatkan anggota grup agar tidak mengklik tautan itu",
      "Tidak mengklik tautan itu, mengingatkan anggota grup agar tidak ikut, dan melaporkan penyebar tautan itu kepada admin grup serta pihak berwenang sesuai prosedur"
    ],
    k: "E",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: null
  },
  {
    id: 177,
    code: "RAD-27",
    cat: "Anti Radikalisme",
    type: "Melaporkan paham radikal sesuai prosedur",
    q: "Atasan Anda meminta Anda merahasiakan laporan tentang penyebaran paham radikal di unit Anda dengan alasan menjaga nama baik instansi. Sikap Anda adalah…",
    options: [
      "Membocorkan laporan itu ke media agar publik tahu",
      "Menyimpan laporan itu dan mengabaikan penyebarannya",
      "Menjaga kerahasiaan dokumen itu sesuai aturan, tetapi tetap memastikan laporan itu diteruskan ke pihak yang berwenang menanganinya melalui jalur resmi",
      "Menjaga kerahasiaan dokumen itu dan mengingatkan atasan agar segera menindaklanjutinya",
      "Menceritakan isi laporan itu hanya kepada rekan dekat"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 2,
      C: 5,
      D: 4,
      E: 3
    },
    image: null,
    boss: null
  },
  {
    id: 178,
    code: "RAD-28",
    cat: "Anti Radikalisme",
    type: "Melaporkan paham radikal sesuai prosedur",
    q: "Anda melihat coretan di dinding kantor yang berisi ajakan menolak Pancasila dan menghasut kebencian. Sikap Anda adalah…",
    options: [
      "Membiarkan coretan itu karena bukan tugas Anda",
      "Menghapus coretan itu diam-diam tanpa melapor",
      "Memotret coretan itu dan membagikannya ke media sosial",
      "Memotret coretan itu sebagai bukti, melaporkannya kepada atasan atau bagian keamanan, dan mengusulkan agar coretan itu dihapus serta area itu diawasi",
      "Melaporkan coretan itu kepada atasan agar dihapus"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 179,
    code: "RAD-29",
    cat: "Anti Radikalisme",
    type: "Melaporkan paham radikal sesuai prosedur",
    q: "Seorang pegawai baru bercerita bahwa ia pernah diajak bergabung dengan kelompok yang mengajarkan paham radikal di tempat kerja sebelumnya. Ia sudah menolak ajakan itu. Sikap Anda adalah…",
    options: [
      "Menuduh pegawai baru itu sebagai anggota kelompok radikal",
      "Mengapresiasi keberaniannya menolak ajakan itu, mengingatkannya agar waspada bila ajakan serupa muncul, dan melaporkannya kepada atasan atau unit terkait bila ada indikasi penyebaran di tempat kerja Anda",
      "Mengabaikan cerita itu karena kejadiannya di tempat lain",
      "Menyuruh pegawai baru itu merahasiakan ceritanya",
      "Mengapresiasi keberaniannya dan mengingatkannya agar waspada"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 180,
    code: "RAD-30",
    cat: "Anti Radikalisme",
    type: "Melaporkan paham radikal sesuai prosedur",
    q: "Anda menerima pesan anonim yang berisi ancaman dan ajakan bergabung dengan kelompok yang menentang Pancasila. Sikap Anda adalah…",
    options: [
      "Tidak menanggapi pesan itu, menyimpan bukti pesannya, dan segera melaporkannya kepada atasan dan pihak berwenang sesuai prosedur",
      "Membalas pesan itu dan menyatakan bersedia bergabung karena takut",
      "Menghapus pesan itu tanpa melakukan apa pun",
      "Meneruskan pesan itu ke rekan agar mereka waspada",
      "Menyimpan bukti pesan itu dan melaporkannya kepada atasan"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 1,
      C: 2,
      D: 3,
      E: 4
    },
    image: null,
    boss: null
  },
  {
    id: 181,
    code: "WB1-01",
    cat: "Pelayanan Publik",
    type: "Warga marah & antrean panjang",
    q: "Seorang warga datang dengan wajah kesal karena loket pelayanan pindah ke gedung sebelah tanpa pemberitahuan yang jelas, padahal ia sudah antre lama di loket lama. Sikap Anda adalah…",
    options: [
      "Meminta maaf atas ketidaknyamanan itu, mengarahkan warga ke loket baru dengan nomor antrean prioritas",
      "Menyuruh warga membaca sendiri pengumuman yang tertempel di dinding",
      "Mengabaikan warga itu karena pemindahan loket bukan kesalahan Anda",
      "Meminta maaf dan mengarahkan warga ke loket baru, lalu memintanya mengambil nomor antrean baru seperti warga lainnya",
      "Menyuruh warga pindah antre ke loket baru tanpa penjelasan"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 1,
      D: 4,
      E: 3
    },
    image: null,
    boss: 1
  },
  {
    id: 182,
    code: "WB1-02",
    cat: "Pelayanan Publik",
    type: "Berkas/syarat tidak lengkap",
    q: "Seorang warga dari desa jauh mengurus surat keterangan domisili, tetapi satu syarat kurang: surat pengantar RT belum ditandatangani karena ketua RT sedang di luar kota. Sikap Anda adalah…",
    options: [
      "Menolak berkasnya dan menyuruhnya kembali besok tanpa penjelasan tertulis",
      "Menerima berkas tanpa syarat itu agar warga tidak kecewa",
      "Menyuruh warga itu mengurus sendiri syarat yang kurang tanpa arahan",
      "Menjelaskan syarat yang kurang, membantu mencarikan pengganti yang sah, dan mencatat berkasnya agar bisa dilanjutkan",
      "Menolak berkas itu dengan sopan sambil memberi daftar syarat lengkap dan memastikan ia tidak perlu antre dari awal bila sudah lengkap, meski ia harus pulang dulu hari ini"
    ],
    k: "D",
    scores: {
      A: 3,
      B: 1,
      C: 2,
      D: 5,
      E: 4
    },
    image: null,
    boss: 1
  },
  {
    id: 183,
    code: "WB1-03",
    cat: "Pelayanan Publik",
    type: "Menolak imbalan (tanpa pamrih)",
    q: "Menjelang Lebaran, seorang pedagang pasar memberi Anda parsel berisi makanan sebagai ucapan terima kasih atas pelayanan selama ini. Sikap Anda adalah…",
    options: [
      "Menerima parsel itu karena nilainya kecil dan sudah menjadi tradisi",
      "Menerima parsel itu diam-diam dan tidak menceritakannya kepada siapa pun",
      "Menolak parsel itu dengan sopan dan menjelaskan bahwa pelayanan tidak memerlukan imbalan, tetapi tanpa mencatat langkah itu sehingga sulit dilacak bila ada pihak yang menanyakan kemudian",
      "Menolak parsel itu dengan kasar agar pedagang itu tidak mengulangi",
      "Menolak parsel itu dengan sopan, menjelaskan bahwa pelayanan tidak memerlukan imbalan, dan mencatat penolakan itu untuk dilaporkan ke atasan"
    ],
    k: "E",
    scores: {
      A: 2,
      B: 1,
      C: 4,
      D: 3,
      E: 5
    },
    image: null,
    boss: 1
  },
  {
    id: 184,
    code: "WB1-04",
    cat: "Pelayanan Publik",
    type: "Sistem error & perbaikan layanan",
    q: "Mesin pencetak KTP di kantor Anda rusak dan warga yang sudah menunggu lama mulai gelisah. Sikap Anda adalah…",
    options: [
      "Meminta warga datang kembali besok tanpa kepastian",
      "Menyuruh warga bersabar tanpa penjelasan",
      "Menutup layanan sampai mesin kembali normal",
      "Menjelaskan kendala dengan sopan, memberi surat keterangan sementara, mencatat nomor kontak warga, menghubungi mereka begitu mesin diperbaiki",
      "Menjelaskan kendala dengan sopan dan memberi surat keterangan sementara kepada warga, tanpa memberi tahu atasan tentang langkah yang sudah diambil itu"
    ],
    k: "D",
    scores: {
      A: 3,
      B: 2,
      C: 1,
      D: 5,
      E: 4
    },
    image: null,
    boss: 1
  },
  {
    id: 185,
    code: "WB1-05",
    cat: "Pelayanan Publik",
    type: "Warga marah & antrean panjang",
    q: "Seorang warga marah karena nomor antreannya terlewat: petugas salah memanggil nomor, sehingga warga lain yang datang belakangan dilayani lebih dulu. Warga itu sudah menunggu dua jam. Sikap Anda adalah…",
    options: [
      "Meminta maaf, memeriksa nomor antreannya bersama-sama, lalu melayaninya segera karena kesalahan ada di pihak petugas",
      "Menyuruh warga itu antre lagi dari awal tanpa penjelasan",
      "Membiarkan warga itu marah karena bukan Anda yang salah memanggil nomor",
      "Memberi warga itu nomor baru tanpa memeriksa apakah nomornya memang terlewat",
      "Meminta maaf dan memberi warga itu nomor antrean baru di urutan akhir, agar antrean warga lain tetap adil dan tidak terganggu, meski warga itu sudah menunggu lama karena kesalahan pemanggilan"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 1,
      D: 3,
      E: 4
    },
    image: null,
    boss: 1
  },
  {
    id: 186,
    code: "WB1-06",
    cat: "Jejaring Kerja",
    type: "Kolaborasi lintas unit/instansi",
    q: "Unit Anda dan unit lain diminta menyusun panduan layanan bersama, tetapi masing-masing unit sudah memakai format sendiri-sendiri dan tidak ada yang mau mengubah formatnya. Sikap Anda adalah…",
    options: [
      "Membiarkan masing-masing unit memakai formatnya sendiri",
      "Mengundang perwakilan unit lain untuk menyatukan format yang dipakai bersama, menyepakati isi panduan, dan membagi tugas penyusunannya dengan tenggat yang jelas",
      "Memaksakan format unit Anda dan meminta unit lain menyesuaikan diri",
      "Mengusulkan format gabungan lewat surat tanpa mengajak unit lain berdiskusi dulu, tetapi tidak menindaklanjuti hasilnya setelah langkah pertama itu selesai dikerjakan",
      "Melaporkan kebuntuan format itu ke atasan dan menunggu arahan"
    ],
    k: "B",
    scores: {
      A: 2,
      B: 5,
      C: 1,
      D: 4,
      E: 3
    },
    image: null,
    boss: 1
  },
  {
    id: 187,
    code: "WB1-07",
    cat: "Jejaring Kerja",
    type: "Konflik dalam tim",
    q: "Dua rekan satu tim berselisih soal pembagian tugas piket loket: satu merasa selalu mendapat jadwal akhir pekan, satu lagi merasa jam kerjanya lebih panjang. Sikap Anda adalah…",
    options: [
      "Membiarkan kedua rekan itu menyelesaikan sendiri tanpa penengah",
      "Memfasilitasi diskusi keduanya, menyusun jadwal piket yang disepakati bersama, dan memantau pelaksanaannya",
      "Memihak rekan yang lebih senior agar konflik cepat reda",
      "Menyusun sendiri jadwal piket yang Anda anggap paling adil, lalu memintakan persetujuan keduanya tanpa diskusi panjang karena tugas sudah menumpuk",
      "Menunda pembahasan jadwal piket sampai keduanya tidak lagi emosi"
    ],
    k: "B",
    scores: {
      A: 2,
      B: 5,
      C: 1,
      D: 4,
      E: 3
    },
    image: null,
    boss: 1
  },
  {
    id: 188,
    code: "WB1-08",
    cat: "Jejaring Kerja",
    type: "Berbagi informasi & membantu rekan",
    q: "Anda mengetahui ada perubahan jam layanan kantor mulai minggu depan, tetapi rekan di loket sebelah belum mengetahuinya. Sikap Anda adalah…",
    options: [
      "Memberi tahu rekan itu tentang perubahan jam layanan tersebut, tanpa memastikan pihak lain benar-benar memahami penjelasan yang sudah diberikan itu",
      "Menulis perubahan itu di grup kantor tanpa memastikan rekan itu membacanya",
      "Membiarkannya karena memberi tahu rekan bukan tugas Anda",
      "Memberi tahu rekan itu segera, menjelaskan dampak perubahan pada tugasnya, dan membantunya menyesuaikan papan pengumuman serta jadwal piket",
      "Sengaja tidak memberi tahu agar rekan itu terlambat"
    ],
    k: "D",
    scores: {
      A: 4,
      B: 3,
      C: 2,
      D: 5,
      E: 1
    },
    image: null,
    boss: 1
  },
  {
    id: 189,
    code: "WB1-09",
    cat: "Jejaring Kerja",
    type: "Membangun relasi baru",
    q: "Kantor Anda ingin menggandeng karang taruna setempat untuk mengadakan penyuluhan literasi digital bagi warga, tetapi Anda belum pernah berhubungan dengan pengurusnya. Sikap Anda adalah…",
    options: [
      "Menghubungi pengurus karang taruna dan mengajak mereka bertemu untuk membahas penyuluhan itu, tetapi mengerjakannya sendiri tanpa melibatkan pihak terkait yang seharusnya dilibatkan sejak awal",
      "Menunggu pengurus karang taruna menghubungi kantor Anda duluan",
      "Menjalankan penyuluhan itu sendiri tanpa melibatkan karang taruna",
      "Meminta atasan memperkenalkan Anda kepada pengurus karang taruna, lalu Anda yang melanjutkan pembahasannya",
      "Mempelajari kegiatan karang taruna dan kebutuhan warga setempat, lalu mengusulkan pertemuan awal untuk memperkenalkan program penyuluhan dan menyepakati peran masing-masing yang saling menguntungkan"
    ],
    k: "E",
    scores: {
      A: 4,
      B: 2,
      C: 1,
      D: 3,
      E: 5
    },
    image: null,
    boss: 1
  },
  {
    id: 190,
    code: "WB1-10",
    cat: "Jejaring Kerja",
    type: "Kolaborasi lintas unit/instansi",
    q: "Jaringan internet kantor Anda bermasalah dan hanya tim IT dari dinas lain yang bisa memperbaikinya, tetapi mereka belum merespons permintaan Anda. Sikap Anda adalah…",
    options: [
      "Meminta rekan lain yang menghubungi tim IT itu",
      "Menghubungi tim IT itu secara langsung, menjelaskan urgensi gangguan, lalu menawarkan jadwal kunjungan dan menyiapkan akses yang mereka butuhkan",
      "Melaporkan tim IT itu ke atasan tanpa menghubungi mereka lebih dulu",
      "Membiarkan jaringan tetap bermasalah sampai ada yang memperbaikinya",
      "Mengirim pengingat tertulis ke tim IT itu dan menunggu balasan, tanpa memeriksa kembali hasilnya sebelum langkah itu dianggap selesai dan dilaporkan"
    ],
    k: "B",
    scores: {
      A: 3,
      B: 5,
      C: 2,
      D: 1,
      E: 4
    },
    image: null,
    boss: 1
  },
  {
    id: 191,
    code: "WB1-11",
    cat: "Sosial Budaya",
    type: "Toleransi & keragaman",
    q: "Seorang warga dari daerah lain yang baru pindah ke lingkungan Anda mengadakan syukuran dengan hidangan khas daerahnya dan mengundang para tetangga. Sebagian warga menolak datang karena menganggap makanan itu aneh dan tidak sesuai selera mereka. Sikap Anda adalah…",
    options: [
      "Mendatangi syukuran itu, mencicipi hidangan dengan terbuka, dan mengajak warga lain untuk menghargai kekayaan kuliner dari daerah yang berbeda",
      "Tidak datang dan membiarkan saja karena itu pilihan masing-masing warga",
      "Ikut menolak datang dan menyarankan warga itu menyesuaikan hidangannya dengan selera warga setempat",
      "Mendatangi syukuran itu dan mengobrol dengan warga baru itu tentang daerah asalnya, tetapi tanpa mendokumentasikan kesepakatan itu",
      "Mengirimkan bingkisan sebagai ganti kehadiran tanpa datang ke acaranya"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 1,
      D: 4,
      E: 3
    },
    image: null,
    boss: 1
  },
  {
    id: 192,
    code: "WB1-12",
    cat: "Sosial Budaya",
    type: "Gotong royong & kepedulian",
    q: "Sekolah tempat anak Anda bersekolah mengadakan kerja bakti memperbaiki pagar, tetapi hanya sedikit orang tua murid yang datang. Sikap Anda adalah…",
    options: [
      "Memaksa orang tua lain datang dengan ancaman denda",
      "Membiarkan saja karena itu urusan panitia sekolah",
      "Mengajak orang tua lain dengan santun untuk ikut kerja bakti, tanpa memberi tahu pihak yang terdampak tentang perubahan yang sudah terjadi itu",
      "Mengajak orang tua lain dengan santun, menjelaskan manfaat pagar yang aman bagi anak-anak, dan memberi contoh dengan ikut bekerja langsung",
      "Mengerjakan perbaikan pagar itu sendiri tanpa mengajak siapa pun"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 2,
      C: 4,
      D: 5,
      E: 3
    },
    image: null,
    boss: 1
  },
  {
    id: 193,
    code: "WB1-13",
    cat: "Sosial Budaya",
    type: "Penempatan baru & adaptasi lingkungan",
    q: "Anda ditempatkan di daerah baru dan menghadiri musyawarah warga yang sebagian besar berbicara dalam bahasa daerah yang belum Anda pahami. Sikap Anda adalah…",
    options: [
      "Meminta warga mengulang dengan bahasa Indonesia tanpa menjelaskan alasan",
      "Mempelajari frasa penting bahasa setempat dan meminta tokoh masyarakat membantu menerjemahkan saat musyawarah",
      "Menunda musyawarah sampai ada penerjemah resmi dari kabupaten",
      "Membiarkan musyawarah berjalan tanpa memahami isi pembicaraannya",
      "Meminta semua warga memakai bahasa Indonesia selama musyawarah agar Anda bisa mengikuti, lalu mencatat keputusan yang disepakati bersama"
    ],
    k: "B",
    scores: {
      A: 3,
      B: 5,
      C: 1,
      D: 2,
      E: 4
    },
    image: null,
    boss: 1
  },
  {
    id: 194,
    code: "WB1-14",
    cat: "Sosial Budaya",
    type: "Perbedaan pendapat",
    q: "Dalam rapat karang taruna, pendapat warga terbelah soal penggunaan dana kas: sebagian ingin memperbaiki lapangan, sebagian ingin mengadakan pelatihan. Sikap Anda adalah…",
    options: [
      "Memutuskan penggunaan dana itu sepihak tanpa rapat",
      "Keluar dari rapat karena perdebatan semakin memanas",
      "Memaksakan pendapat Anda sendiri tentang penggunaan dana itu",
      "Mendengarkan semua pihak lalu memutuskan sendiri berdasarkan suara terbanyak, tetapi menunda bagian tersulitnya sampai tenggat hampir habis dan baru dikerjakan terburu-buru",
      "Mendengarkan semua pihak dengan tenang, merangkum titik temu dari pendapat yang ada, lalu mengusulkan musyawarah untuk mencapai kesepakatan bersama"
    ],
    k: "E",
    scores: {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: 1
  },
  {
    id: 195,
    code: "WB1-15",
    cat: "Sosial Budaya",
    type: "Toleransi & keragaman",
    q: "Sebuah keluarga dari suku lain ingin memakai aula desa untuk acara adatnya, tetapi sebagian warga menolak karena khawatir mengganggu ketertiban. Sikap Anda adalah…",
    options: [
      "Memfasilitasi dialog antara keluarga itu dan warga, menjelaskan bahwa aula desa untuk semua warga, lalu menyepakati jadwal dan aturan pemakaian bersama",
      "Menjelaskan kepada warga bahwa aula desa boleh dipakai semua warga, tanpa menyiapkan rencana cadangan bila langkah itu gagal",
      "Menolak permintaan keluarga itu agar tidak ada keributan",
      "Membiarkan warga yang menolak itu mengusir keluarga tersebut",
      "Membiarkan keluarga itu memakai aula tanpa memberi tahu warga lain"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 4,
      C: 2,
      D: 1,
      E: 3
    },
    image: null,
    boss: 1
  },
  {
    id: 196,
    code: "WB1-16",
    cat: "Adaptasi TIK",
    type: "Belajar sistem/aplikasi baru",
    q: "Kantor Anda beralih ke aplikasi pengarsipan digital dan Anda belum terbiasa memakainya, padahal arsip yang harus dirapikan menumpuk. Sikap Anda adalah…",
    options: [
      "Memakai cara lama diam-diam sambil sesekali mencoba aplikasi baru",
      "Mempelajari aplikasi itu secara aktif sampai Anda bisa memakainya sendiri, tetapi tanpa mencatat langkah itu sehingga sulit dilacak bila ada pihak yang menanyakan kemudian",
      "Menolak memakai aplikasi pengarsipan digital itu",
      "Menyalahkan aplikasi baru itu tanpa mencoba memakainya",
      "Mempelajari aplikasi itu secara aktif, mencoba pada arsip yang tidak mendesak lebih dulu"
    ],
    k: "E",
    scores: {
      A: 3,
      B: 4,
      C: 1,
      D: 2,
      E: 5
    },
    image: null,
    boss: 1
  },
  {
    id: 197,
    code: "WB1-17",
    cat: "Adaptasi TIK",
    type: "Etika digital & keamanan data",
    q: "Seorang rekan membagikan foto warga beserta nomor KTP-nya di grup WhatsApp kantor tanpa disensor. Sikap Anda adalah…",
    options: [
      "Membiarkannya karena foto itu sudah terlanjur tersebar",
      "Meneruskan foto itu ke grup lain agar lebih banyak yang tahu",
      "Mengingatkan rekan itu agar segera menghapus foto itu, menjelaskan risiko penyalahgunaan data pribadi",
      "Menyimpan foto itu untuk keperluan Anda sendiri",
      "Mengingatkan rekan itu agar menghapus foto itu dari grup, tanpa memberi tahu atasan tentang langkah yang sudah diambil itu"
    ],
    k: "C",
    scores: {
      A: 3,
      B: 1,
      C: 5,
      D: 2,
      E: 4
    },
    image: null,
    boss: 1
  },
  {
    id: 198,
    code: "WB1-18",
    cat: "Adaptasi TIK",
    type: "Memanfaatkan TIK untuk tugas",
    q: "Anda menemukan fitur otomatis di aplikasi pengolah angka yang bisa membuat rekap kehadiran selesai lebih cepat, tetapi Anda belum pernah memakainya. Sikap Anda adalah…",
    options: [
      "Langsung memakai fitur itu untuk rekap resmi tanpa latihan",
      "Tetap memakai cara lama karena takut salah memakai fitur baru",
      "Mempelajari fitur itu melalui panduan, mencobanya pada data contoh lebih dulu, lalu memakainya untuk rekap kehadiran dan membagikan caranya ke rekan",
      "Mengabaikan fitur itu karena cara lama sudah cukup",
      "Mempelajari fitur itu dan memakainya untuk rekap kehadiran Anda sendiri, tetapi tidak menindaklanjuti hasilnya setelah langkah pertama itu selesai dikerjakan"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 3,
      C: 5,
      D: 1,
      E: 4
    },
    image: null,
    boss: 1
  },
  {
    id: 199,
    code: "WB1-19",
    cat: "Adaptasi TIK",
    type: "Membantu rekan gagap teknologi",
    q: "Seorang rekan senior takut memakai sistem baru karena pernah salah memasukkan data dan dimarahi atasan, sehingga ia meminta Anda mengerjakan tugas sistem itu untuknya. Sikap Anda adalah…",
    options: [
      "Menyuruh rekan itu belajar sendiri dari panduan tertulis",
      "Mengerjakan semua tugas sistem itu atas nama rekan tersebut",
      "Mendampingi rekan itu berlatih pada data contoh sampai ia berani mencoba sendiri, lalu memberinya catatan langkah singkat",
      "Mengerjakan tugas sistem itu untuk rekan tersebut hari ini agar tenggat terpenuhi, sambil berjanji akan mengajarinya bila ada waktu luang nanti",
      "Meminta rekan itu menonton video tutorial sistem itu sendirian"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 1,
      C: 5,
      D: 4,
      E: 3
    },
    image: null,
    boss: 1
  },
  {
    id: 200,
    code: "WB1-20",
    cat: "Adaptasi TIK",
    type: "Belajar sistem/aplikasi baru",
    q: "Kantor Anda mulai memakai aplikasi pengajuan cuti daring dan Anda belum pernah menggunakannya. Sikap Anda adalah…",
    options: [
      "Mempelajari aplikasi itu sampai Anda bisa mengajukan cuti sendiri, tanpa memastikan pihak lain benar-benar memahami penjelasan yang sudah diberikan itu",
      "Tetap mengajukan cuti dengan surat kertas seperti biasa",
      "Mempelajari aplikasi itu melalui panduan, mencoba mengajukan cuti contoh, lalu membantu rekan yang juga kesulitan memakainya",
      "Meminta rekan mengajukan cuti untuk Anda setiap kali",
      "Menolak memakai aplikasi pengajuan cuti daring itu"
    ],
    k: "C",
    scores: {
      A: 4,
      B: 2,
      C: 5,
      D: 3,
      E: 1
    },
    image: null,
    boss: 1
  },
  {
    id: 201,
    code: "WB1-21",
    cat: "Profesionalisme",
    type: "Akuntabilitas & integritas (whistleblowing)",
    q: "Anda mengetahui seorang rekan memakai kendaraan dinas untuk keperluan pribadinya setiap akhir pekan. Sikap Anda adalah…",
    options: [
      "Melaporkan penyalahgunaan itu ke atasan tanpa mengingatkan rekan itu lebih dulu, tetapi mengerjakannya sendiri tanpa melibatkan pihak terkait yang seharusnya dilibatkan sejak awal",
      "Ikut memakai kendaraan dinas untuk keperluan pribadi Anda",
      "Mengingatkan rekan itu bahwa kendaraan dinas hanya untuk keperluan tugas, dan bila berlanjut melaporkan penyalahgunaan itu lewat jalur resmi",
      "Menceritakan hal itu ke rekan kerja lain",
      "Membiarkannya karena itu bukan urusan Anda"
    ],
    k: "C",
    scores: {
      A: 4,
      B: 1,
      C: 5,
      D: 2,
      E: 3
    },
    image: null,
    boss: 1
  },
  {
    id: 202,
    code: "WB1-22",
    cat: "Profesionalisme",
    type: "Komitmen, deadline & prioritas",
    q: "Rekan satu tim Anda cuti mendadak karena keluarganya sakit, sehingga tugasnya yang tenggatnya besok dilimpahkan kepada Anda di samping tugas Anda sendiri. Sikap Anda adalah…",
    options: [
      "Menyusun prioritas bersama atasan, mengerjakan tugas yang paling mendesak lebih dulu dengan kualitas terjaga, dan meminta dukungan tim bila diperlukan",
      "Menolak tugas tambahan itu karena bukan tanggung jawab Anda",
      "Mengerjakan tugas Anda sendiri dan menunda tugas rekan itu",
      "Menerima kedua tugas lalu mengerjakannya seadanya tanpa memperhatikan kualitas",
      "Mengerjakan kedua tugas itu sendiri sampai selesai meski harus lembur, tanpa memeriksa kembali hasilnya sebelum langkah itu dianggap selesai dan dilaporkan"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 1,
      C: 3,
      D: 2,
      E: 4
    },
    image: null,
    boss: 1
  },
  {
    id: 203,
    code: "WB1-23",
    cat: "Profesionalisme",
    type: "Rahasia jabatan & etika profesi",
    q: "Keluarga Anda menanyakan hasil seleksi pegawai yang belum diumumkan, padahal Anda ikut mengetik daftar nilainya. Sikap Anda adalah…",
    options: [
      "Menolak dengan sopan dan menjelaskan bahwa hasil seleksi bersifat rahasia sampai diumumkan resmi, lalu menawarkan informasi setelah pengumuman keluar",
      "Memberi tahu sebagian hasilnya saja",
      "Memberi tahu hasilnya secara lisan saja, bukan dokumennya",
      "Menolak dengan sopan tanpa menjelaskan alasan kerahasiaannya, tetapi tanpa mendokumentasikan kesepakatan itu",
      "Memberikan daftar nilai itu karena mereka keluarga sendiri"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 3,
      D: 4,
      E: 1
    },
    image: null,
    boss: 1
  },
  {
    id: 204,
    code: "WB1-24",
    cat: "Profesionalisme",
    type: "Pengembangan kompetensi diri",
    q: "Instansi Anda mengadakan kursus daring gratis tentang pelayanan prima pada akhir pekan, dan materinya sangat relevan dengan tugas Anda. Sikap Anda adalah…",
    options: [
      "Mengikuti kursus itu hanya demi sertifikat keikutsertaan",
      "Mendaftar tetapi tidak pernah mengikuti sesinya",
      "Menolak mengikuti karena kursus itu diadakan di luar jam kerja",
      "Mengikuti kursus itu dan mencatat materinya untuk dipelajari nanti, tanpa memberi tahu pihak yang terdampak tentang perubahan yang sudah terjadi itu",
      "Mengikuti kursus itu dengan sungguh-sungguh dan menerapkan keterampilan barunya dalam pekerjaan sehari-hari"
    ],
    k: "E",
    scores: {
      A: 3,
      B: 1,
      C: 2,
      D: 4,
      E: 5
    },
    image: null,
    boss: 1
  },
  {
    id: 205,
    code: "WB1-25",
    cat: "Profesionalisme",
    type: "Akuntabilitas & integritas (whistleblowing)",
    q: "Bendahara meminta Anda menandatangani kwitansi kosong dengan alasan akan diisi nanti setelah kegiatannya selesai. Sikap Anda adalah…",
    options: [
      "Menolak menandatangani kwitansi kosong itu, tetapi menunda bagian tersulitnya sampai tenggat hampir habis dan baru dikerjakan terburu-buru",
      "Menandatangani karena bendahara itu rekan yang Anda percaya",
      "Menolak menandatangani kwitansi kosong, meminta rincian kegiatan dan jumlahnya ditulis lebih dulu, dan melaporkan permintaan itu bila Anda dipaksa",
      "Menandatangani kwitansi kosong itu tanpa bertanya",
      "Menandatangani dengan catatan kecil di samping tanda tangan Anda"
    ],
    k: "C",
    scores: {
      A: 4,
      B: 2,
      C: 5,
      D: 1,
      E: 3
    },
    image: null,
    boss: 1
  },
  {
    id: 206,
    code: "WB1-26",
    cat: "Anti Radikalisme",
    type: "Menolak ajakan paham radikal",
    q: "Di lingkungan tempat tinggal Anda, seseorang membagikan selebaran yang mengajak warga mengganti dasar negara dengan sistem lain. Sikap Anda adalah…",
    options: [
      "Membiarkannya karena itu bukan urusan Anda",
      "Ikut menyebarkan selebaran itu ke warga lain",
      "Tidak ikut menyebarkan selebaran itu dan mengingatkan warga agar tidak terpengaruh, tanpa menyiapkan rencana cadangan bila langkah itu gagal",
      "Menyimpan selebaran itu tanpa melakukan apa pun",
      "Tidak ikut menyebarkan selebaran itu, mengingatkan warga dengan santun agar tidak terpengaruh, dan melaporkan selebaran itu kepada ketua RT atau aparat setempat"
    ],
    k: "E",
    scores: {
      A: 3,
      B: 1,
      C: 4,
      D: 2,
      E: 5
    },
    image: null,
    boss: 1
  },
  {
    id: 207,
    code: "WB1-27",
    cat: "Anti Radikalisme",
    type: "Menolak kekerasan & pemaksaan kehendak",
    q: "Di media sosial, seseorang mengajak massa membubarkan paksa acara keagamaan kelompok lain yang sedang berlangsung. Sikap Anda adalah…",
    options: [
      "Keluar dari media sosial itu agar tidak terseret",
      "Tidak ikut ajakan itu, menjelaskan dengan santun bahwa pemaksaan kehendak bertentangan dengan Pancasila, dan melaporkan konten itu kepada pihak berwenang",
      "Membiarkannya karena itu urusan orang lain",
      "Ikut menyebarkan ajakan itu agar terlihat berani",
      "Tidak ikut ajakan itu dan menjelaskan dengan santun mengapa pemaksaan itu salah, tetapi tanpa mencatat langkah itu sehingga sulit dilacak bila ada pihak yang menanyakan kemudian"
    ],
    k: "B",
    scores: {
      A: 2,
      B: 5,
      C: 3,
      D: 1,
      E: 4
    },
    image: null,
    boss: 1
  },
  {
    id: 208,
    code: "WB1-28",
    cat: "Anti Radikalisme",
    type: "Menerima perbedaan ideologi yang tidak bertentangan dengan Pancasila",
    q: "Seorang warga berbeda pandangan dengan Anda soal kebijakan pembangunan di daerah, tetapi ia tetap menghormati aturan dan Pancasila. Sikap Anda adalah…",
    options: [
      "Mendebat warga itu agar mengikuti pandangan Anda",
      "Menghormati pandangannya dan tetap melayaninya seperti biasa, tanpa memberi tahu atasan tentang langkah yang sudah diambil itu",
      "Menghindari warga itu karena berbeda pandangan",
      "Menghormati pandangannya, tetap melayani warga itu dengan baik dan profesional, dan tidak mencampur urusan pandangan pribadi dengan tugas pelayanan",
      "Melaporkan warga itu ke atasan karena berbeda pandangan"
    ],
    k: "D",
    scores: {
      A: 2,
      B: 4,
      C: 3,
      D: 5,
      E: 1
    },
    image: null,
    boss: 1
  },
  {
    id: 209,
    code: "WB1-29",
    cat: "Anti Radikalisme",
    type: "Melaporkan paham radikal sesuai prosedur",
    q: "Anda mendengar tetangga menyebarkan ajaran yang menghasut warga untuk menolak membayar pajak karena menganggap negara tidak sah. Sikap Anda adalah…",
    options: [
      "Ikut menyebarkan ajaran itu karena takut diancam",
      "Menyebarkan kabar itu ke media sosial agar banyak yang tahu",
      "Tidak ikut ajaran itu dan mengingatkan tetangga itu dengan santun, tetapi tidak menindaklanjuti hasilnya setelah langkah pertama itu selesai dikerjakan",
      "Tidak ikut ajaran itu, mengingatkan tetangga itu dengan santun, dan melaporkan hasutan itu kepada ketua RT atau aparat setempat sesuai prosedur",
      "Membiarkannya karena itu urusan tetangga tersebut"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 2,
      C: 4,
      D: 5,
      E: 3
    },
    image: null,
    boss: 1
  },
  {
    id: 210,
    code: "WB1-30",
    cat: "Anti Radikalisme",
    type: "Menolak ajakan paham radikal",
    q: "Seorang rekan mengajak Anda mengikuti kajian rutin yang isinya perlahan-lahan mengajarkan penolakan terhadap Pancasila, dibungkus sebagai kajian keagamaan biasa. Sikap Anda adalah…",
    options: [
      "Mengikuti sekali saja untuk mengetahui isi kajiannya",
      "Menolak ajakan itu dengan santun, menjelaskan kesetiaan pada Pancasila, dan melaporkannya sesuai prosedur",
      "Ikut kajian itu agar tidak dikucilkan rekan tersebut",
      "Menolak ajakan itu dengan halus tanpa menjelaskan alasan dan tanpa melaporkannya, agar hubungan kerja dengan rekan itu tetap baik",
      "Mengabaikan ajakan itu tanpa menjawab apa-apa"
    ],
    k: "B",
    scores: {
      A: 3,
      B: 5,
      C: 1,
      D: 4,
      E: 2
    },
    image: null,
    boss: 1
  },
  {
    id: 211,
    code: "WB2-01",
    cat: "Pelayanan Publik",
    type: "Berkas/syarat tidak lengkap",
    q: "Seorang warga difabel mengurus KTP, tetapi fotonya ditolak sistem karena buram. Ia kesulitan datang kembali karena jarak rumahnya jauh dan ia memakai kursi roda. Sikap Anda adalah…",
    options: [
      "Menyuruh warga itu pulang dan kembali lain hari tanpa solusi",
      "Menerima foto buram itu tanpa memeriksa apakah sistem akan menolaknya",
      "Menolak permohonan itu karena foto tidak memenuhi syarat",
      "Membantu warga itu mengambil foto baru yang jelas di tempat, tetapi memintanya antre ulang dari awal karena foto baru harus diproses seperti berkas baru",
      "Membantu warga itu mengambil foto baru yang jelas di tempat, lalu memproses berkasnya tanpa antre ulang"
    ],
    k: "E",
    scores: {
      A: 2,
      B: 3,
      C: 1,
      D: 4,
      E: 5
    },
    image: null,
    boss: 2
  },
  {
    id: 212,
    code: "WB2-02",
    cat: "Pelayanan Publik",
    type: "Menolak imbalan (tanpa pamrih)",
    q: "Seorang warga menawarkan 'uang rokok' kepada Anda agar berkasnya didahulukan dari antrean. Sikap Anda adalah…",
    options: [
      "Menolak dengan sopan, menjelaskan bahwa semua warga dilayani sesuai urutan antrean, melayani berkasnya sesuai prosedur, dan melaporkan bila warga itu terus memaksa",
      "Menerima uang itu dan mendahulukan berkasnya",
      "Menolak uang itu dengan sopan lalu melayani berkasnya sesuai urutan antrean, tanpa menjelaskan kepada warga itu mengapa penolakan itu dilakukan",
      "Menerima uang itu karena jumlahnya kecil",
      "Menolak uang itu tetapi tetap mendahulukan berkasnya karena kasihan"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 1,
      C: 4,
      D: 2,
      E: 3
    },
    image: null,
    boss: 2
  },
  {
    id: 213,
    code: "WB2-03",
    cat: "Pelayanan Publik",
    type: "Sistem error & perbaikan layanan",
    q: "Aplikasi pembayaran retribusi sedang error, padahal seorang warga sudah membayar melalui transfer dan menunjukkan bukti pembayarannya, tetapi pembayaran itu belum tercatat di sistem. Sikap Anda adalah…",
    options: [
      "Memverifikasi bukti transfer itu dan memberi tanda terima manual kepada warga, tetapi mengerjakannya sendiri tanpa melibatkan pihak terkait yang seharusnya dilibatkan sejak awal",
      "Memverifikasi bukti transfer itu, mencatatnya dan memberi tanda terima manual sesuai prosedur, melaporkan gangguan itu ke bagian keuangan dan IT, lalu menghubungi warga begitu sistem pulih",
      "Meminta warga menunggu sampai sistem pulih tanpa kepastian",
      "Menyuruh warga membayar lagi karena sistem belum mencatat",
      "Menolak bukti transfer itu dan menyuruh warga pulang"
    ],
    k: "B",
    scores: {
      A: 4,
      B: 5,
      C: 3,
      D: 2,
      E: 1
    },
    image: null,
    boss: 2
  },
  {
    id: 214,
    code: "WB2-04",
    cat: "Pelayanan Publik",
    type: "Warga marah & antrean panjang",
    q: "Seorang warga marah karena berkas yang diterimanya tertukar dengan berkas warga lain: nama di dalamnya bukan namanya. Sikap Anda adalah…",
    options: [
      "Meminta warga itu menunggu sementara Anda mencari berkasnya tanpa kepastian waktu",
      "Meminta maaf, menelusuri letak tertukarnya berkas, memperbaikinya, dan mengusulkan perbaikan penataan arsip",
      "Menyalahkan warga itu karena tidak memeriksa berkasnya saat diterima",
      "Langsung membuatkan berkas pengganti yang baru agar warga cepat selesai, tanpa menelusuri di mana letak tertukarnya berkas lama",
      "Menyuruh warga itu mengurus berkas pengganti sendiri ke bagian lain"
    ],
    k: "B",
    scores: {
      A: 3,
      B: 5,
      C: 1,
      D: 4,
      E: 2
    },
    image: null,
    boss: 2
  },
  {
    id: 215,
    code: "WB2-05",
    cat: "Pelayanan Publik",
    type: "Berkas/syarat tidak lengkap",
    q: "Seorang warga mengurus izin usaha kecil, tetapi surat keterangan sehatnya sudah kedaluwarsa dua minggu lalu. Sikap Anda adalah…",
    options: [
      "Menjelaskan syarat yang kurang dan meminta warga memperbaruinya sendiri, tanpa memeriksa kembali hasilnya sebelum langkah itu dianggap selesai dan dilaporkan",
      "Memproses izin itu dengan surat keterangan yang sudah kedaluwarsa",
      "Menjelaskan syarat yang kurang, mengarahkan warga ke puskesmas terdekat untuk memperbarui surat itu, dan memberi waktu melengkapi tanpa harus antre dari awal",
      "Memberi daftar persyaratan tertulis lalu meminta warga kembali lain hari",
      "Menolak berkasnya tanpa penjelasan"
    ],
    k: "C",
    scores: {
      A: 4,
      B: 2,
      C: 5,
      D: 3,
      E: 1
    },
    image: null,
    boss: 2
  },
  {
    id: 216,
    code: "WB2-06",
    cat: "Jejaring Kerja",
    type: "Berbagi informasi & membantu rekan",
    q: "Seorang rekan salah memberi informasi syarat kepada warga, sehingga warga itu datang jauh-jauh dengan berkas yang ternyata tidak sesuai. Rekan itu belum menyadari kesalahannya. Sikap Anda adalah…",
    options: [
      "Menyalahkan rekan itu di depan warga yang terdampak",
      "Membiarkan warga itu pulang tanpa koreksi informasi",
      "Memberi tahu warga itu bahwa informasi sebelumnya salah, tanpa membantu mengurus lanjutannya",
      "Meminta rekan itu sendiri yang menghubungi dan mengoreksi warga, karena kesalahan informasi itu bukan tanggung jawab Anda",
      "Menghubungi warga itu bersama rekan tersebut, mengoreksi informasinya, dan membantunya mengurus sampai selesai"
    ],
    k: "E",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: 2
  },
  {
    id: 217,
    code: "WB2-07",
    cat: "Jejaring Kerja",
    type: "Membangun relasi baru",
    q: "Kantor Anda ingin bekerja sama dengan komunitas relawan untuk program kebersihan lingkungan, tetapi belum ada hubungan sama sekali dengan komunitas itu. Sikap Anda adalah…",
    options: [
      "Mempelajari kegiatan dan kebutuhan komunitas itu, lalu mengusulkan pertemuan awal untuk memperkenalkan program dan menyepakati peran masing-masing yang saling menguntungkan",
      "Mengirim surat permintaan kerja sama langsung ke komunitas itu, tetapi tanpa mendokumentasikan kesepakatan itu",
      "Menunggu komunitas itu menghubungi kantor Anda duluan",
      "Meminta atasan mengurus semuanya tanpa Anda terlibat",
      "Menjalankan program kebersihan itu sendiri tanpa dukungan komunitas"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 4,
      C: 1,
      D: 2,
      E: 3
    },
    image: null,
    boss: 2
  },
  {
    id: 218,
    code: "WB2-08",
    cat: "Jejaring Kerja",
    type: "Kolaborasi lintas unit/instansi",
    q: "Program Anda membutuhkan tanda tangan pejabat dinas lain untuk pengesahan, tetapi pejabat itu sulit ditemui karena jadwalnya padat. Sikap Anda adalah…",
    options: [
      "Menjalankan program itu tanpa pengesahan pejabat tersebut",
      "Menghubungi staf pejabat itu, menjelaskan keperluan dan tenggatnya, menyiapkan berkas yang sudah lengkap untuk ditandatangani, lalu menyepakati jadwal penandatanganan bersama",
      "Menunggu saja sampai pejabat itu sempat menandatangani",
      "Melaporkan pejabat itu ke atasan tanpa menghubungi stafnya lebih dulu",
      "Mengirim surat permohonan penandatanganan dan menunggu balasan, tanpa memberi tahu pihak yang terdampak tentang perubahan yang sudah terjadi itu"
    ],
    k: "B",
    scores: {
      A: 3,
      B: 5,
      C: 1,
      D: 2,
      E: 4
    },
    image: null,
    boss: 2
  },
  {
    id: 219,
    code: "WB2-09",
    cat: "Jejaring Kerja",
    type: "Konflik dalam tim",
    q: "Dua anggota tim berselisih soal metode pendataan warga: keduanya membawa data pendukung bahwa metodenya lebih akurat, dan rapat tidak menghasilkan keputusan. Sikap Anda adalah…",
    options: [
      "Mengusulkan uji coba kedua metode pada sebagian kecil tugas, lalu memutuskan bersama berdasarkan hasilnya",
      "Memutuskan sendiri metode yang dipakai tanpa mendengar penjelasan keduanya",
      "Menunda keputusan sampai salah satu pihak mengalah",
      "Memutuskan metode yang dipakai lewat pemungutan suara anggota tim, agar keputusan terasa adil bagi semua pihak yang berselisih",
      "Membiarkan perselisihan itu sampai mengganggu pelayanan"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 3,
      D: 4,
      E: 1
    },
    image: null,
    boss: 2
  },
  {
    id: 220,
    code: "WB2-10",
    cat: "Jejaring Kerja",
    type: "Berbagi informasi & membantu rekan",
    q: "Seorang rekan tidak mengetahui ada rapat penting karena undangannya hanya dibagikan di grup percakapan yang tidak ia ikuti. Sikap Anda adalah…",
    options: [
      "Sengaja tidak memberi tahu agar rekan itu ketinggalan rapat",
      "Membiarkannya karena rekan itu seharusnya bergabung ke grup tersebut",
      "Memberi tahu rekan itu langsung tentang rapat tersebut, tetapi menunda bagian tersulitnya sampai tenggat hampir habis dan baru dikerjakan terburu-buru",
      "Memberi tahu rekan itu langsung, mengirim undangan rapat kepadanya, dan mengusulkan satu grup komunikasi resmi agar undangan tidak terlewat lagi",
      "Menyindir rekan itu di depan tim karena tidak mengikuti grup"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 3,
      C: 4,
      D: 5,
      E: 2
    },
    image: null,
    boss: 2
  },
  {
    id: 221,
    code: "WB2-11",
    cat: "Sosial Budaya",
    type: "Gotong royong & kepedulian",
    q: "Kantor Anda mengadakan kegiatan donor darah, tetapi hanya sedikit pegawai yang mau ikut serta. Sikap Anda adalah…",
    options: [
      "Menjelaskan manfaat donor darah dan mengajak pegawai untuk ikut serta, tanpa menyiapkan rencana cadangan bila langkah itu gagal",
      "Memaksa pegawai ikut donor dengan ancaman sanksi",
      "Menjelaskan manfaat donor darah bagi yang membutuhkan, mengajak pegawai dengan santun tanpa paksaan, dan memberi contoh dengan ikut mendonor lebih dulu",
      "Membiarkan saja karena donor darah urusan masing-masing",
      "Mendonor sendiri tanpa mengajak pegawai lain"
    ],
    k: "C",
    scores: {
      A: 4,
      B: 1,
      C: 5,
      D: 2,
      E: 3
    },
    image: null,
    boss: 2
  },
  {
    id: 222,
    code: "WB2-12",
    cat: "Sosial Budaya",
    type: "Penempatan baru & adaptasi lingkungan",
    q: "Anda pendatang baru di daerah penempatan dan sebagian warga meragukan Anda karena belum memahami adat setempat. Minggu ini ada upacara adat besar yang dihadiri seluruh warga. Sikap Anda adalah…",
    options: [
      "Menolak hadir karena takut melakukan kesalahan adat",
      "Menghadiri upacara itu tanpa mempelajari tata caranya lebih dulu",
      "Meminta warga menyesuaikan upacara itu dengan kebiasaan Anda",
      "Mengirimkan bingkisan dan salam hormat lewat perwakilan, agar warga tahu Anda menghormati adat meski Anda tidak hadir langsung",
      "Mempelajari tata cara upacara itu dari tokoh masyarakat, lalu hadir dan mengikuti dengan sopan sebagai bentuk penghormatan"
    ],
    k: "E",
    scores: {
      A: 2,
      B: 3,
      C: 1,
      D: 4,
      E: 5
    },
    image: null,
    boss: 2
  },
  {
    id: 223,
    code: "WB2-13",
    cat: "Sosial Budaya",
    type: "Gotong royong & kepedulian",
    q: "Perbaikan fasilitas umum di lingkungan Anda macet karena warga saling menunggu siapa yang memulai duluan. Sikap Anda adalah…",
    options: [
      "Memaksa warga bekerja dengan ancaman denda",
      "Mengerjakan perbaikan itu sendiri tanpa mengajak warga lain",
      "Membiarkan fasilitas itu rusak karena tidak ada yang mau memulai",
      "Mengambil inisiatif mengajak tokoh masyarakat, membagi tugas yang jelas kepada warga, memberi contoh dengan bekerja langsung, dan mengevaluasi hasilnya bersama warga",
      "Mengambil inisiatif mengajak warga dan membagi tugas yang jelas, tetapi tanpa mencatat langkah itu sehingga sulit dilacak bila ada pihak yang menanyakan kemudian"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 3,
      C: 2,
      D: 5,
      E: 4
    },
    image: null,
    boss: 2
  },
  {
    id: 224,
    code: "WB2-14",
    cat: "Sosial Budaya",
    type: "Toleransi & keragaman",
    q: "Di kantor Anda, sebagian rekan menganggap perayaan hari besar keagamaan seorang rekan mengganggu jam kerja. Sikap Anda adalah…",
    options: [
      "Mengingatkan rekan-rekan itu dengan sopan bahwa keyakinan setiap orang patut dihormati, lalu memfasilitasi agar perayaan itu tidak mengganggu pekerjaan dan mengajak tim berdiskusi tentang keberagaman",
      "Meminta rekan yang merayakan itu menghentikan perayaannya",
      "Membiarkan saja karena itu hanya perbedaan pendapat biasa",
      "Mengingatkan rekan-rekan itu dengan sopan agar menghormati keyakinan rekan tersebut, tanpa memberi tahu atasan tentang langkah yang sudah diambil itu",
      "Ikut mengejek perayaan hari besar keagamaan rekan itu"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 3,
      D: 4,
      E: 1
    },
    image: null,
    boss: 2
  },
  {
    id: 225,
    code: "WB2-15",
    cat: "Sosial Budaya",
    type: "Gotong royong & kepedulian",
    q: "Peringatan hari kemerdekaan di lingkungan Anda membutuhkan panitia, tetapi hanya sedikit warga yang mau menjadi panitia. Sikap Anda adalah…",
    options: [
      "Menjadi panitia sendiri tanpa mengajak warga lain",
      "Memaksa warga menjadi panitia dengan ancaman denda",
      "Mengajak warga dengan santun untuk menjadi panitia kegiatan itu, tetapi tidak menindaklanjuti hasilnya setelah langkah pertama itu selesai dikerjakan",
      "Mengajak warga dengan santun, menjelaskan manfaat kegiatan bagi lingkungan, membagi tugas yang ringan dan jelas, dan memberi contoh dengan ikut menjadi panitia",
      "Membiarkan saja karena itu urusan ketua RT"
    ],
    k: "D",
    scores: {
      A: 3,
      B: 1,
      C: 4,
      D: 5,
      E: 2
    },
    image: null,
    boss: 2
  },
  {
    id: 226,
    code: "WB2-16",
    cat: "Adaptasi TIK",
    type: "Belajar sistem/aplikasi baru",
    q: "Sistem baru sering error pada jam sibuk, tetapi atasan menginstruksikan sistem itu tetap dipakai. Warga antre panjang setiap kali error terjadi. Sikap Anda adalah…",
    options: [
      "Terus memakai sistem itu meski error dan membiarkan warga menunggu lama",
      "Menyalahkan petugas IT setiap kali sistem error di depan warga",
      "Menolak memakai sistem baru itu sama sekali",
      "Mencatat kapan error itu terjadi, melaporkannya ke IT dan atasan, dan memakai cara manual sementara yang tercatat",
      "Kembali memakai cara lama secara diam-diam agar pelayanan tetap lancar, tanpa melaporkan error sistem itu kepada siapa pun, meski atasan sudah menginstruksikan memakai sistem baru"
    ],
    k: "D",
    scores: {
      A: 3,
      B: 2,
      C: 1,
      D: 5,
      E: 4
    },
    image: null,
    boss: 2
  },
  {
    id: 227,
    code: "WB2-17",
    cat: "Adaptasi TIK",
    type: "Etika digital & keamanan data",
    q: "Ada akun media sosial palsu yang mengatasnamakan instansi Anda dan meminta warga mengirim sejumlah uang. Sikap Anda adalah…",
    options: [
      "Melaporkan akun palsu itu ke platform media sosial, tanpa memastikan pihak lain benar-benar memahami penjelasan yang sudah diberikan itu",
      "Meneruskan informasi akun itu tanpa verifikasi",
      "Mengabaikan akun itu karena bukan akun resmi instansi",
      "Memverifikasi akun itu, melaporkannya ke platform media sosial dan ke atasan, lalu mengumumkan kepada warga melalui kanal resmi agar waspada dan tidak mengirim uang",
      "Membiarkan warga tertipu karena itu bukan urusan Anda"
    ],
    k: "D",
    scores: {
      A: 4,
      B: 2,
      C: 3,
      D: 5,
      E: 1
    },
    image: null,
    boss: 2
  },
  {
    id: 228,
    code: "WB2-18",
    cat: "Adaptasi TIK",
    type: "Memanfaatkan TIK untuk tugas",
    q: "Ada fitur pengingat otomatis di aplikasi perkantoran yang bisa membantu Anda tidak melewatkan tenggat, tetapi Anda belum pernah mengaktifkannya. Sikap Anda adalah…",
    options: [
      "Tetap mengandalkan ingatan dan catatan kertas untuk tenggat",
      "Mempelajari fitur itu dan mengaktifkannya untuk tugas Anda sendiri, tetapi mengerjakannya sendiri tanpa melibatkan pihak terkait yang seharusnya dilibatkan sejak awal",
      "Langsung mengaktifkan fitur itu untuk semua tugas penting tanpa latihan",
      "Mengabaikan fitur itu karena cara lama sudah cukup",
      "Mempelajari fitur itu melalui panduan, mengaktifkannya pada tugas contoh lebih dulu, lalu memakainya untuk mengingatkan tenggat dan membagikan caranya ke rekan"
    ],
    k: "E",
    scores: {
      A: 3,
      B: 4,
      C: 2,
      D: 1,
      E: 5
    },
    image: null,
    boss: 2
  },
  {
    id: 229,
    code: "WB2-19",
    cat: "Adaptasi TIK",
    type: "Membantu rekan gagap teknologi",
    q: "Seorang rekan senior kesulitan mengunggah dokumen laporan ke sistem baru, padahal tenggat pengumpulan tinggal sejam lagi. Sikap Anda adalah…",
    options: [
      "Menyuruh rekan itu bertanya ke petugas IT",
      "Menolak membantu karena Anda juga sedang sibuk",
      "Mengunggah dokumen itu untuk rekan tersebut tanpa menjelaskan caranya",
      "Meluangkan waktu sejenak untuk memandu rekan itu mengunggah dokumen tersebut, tanpa memeriksa kembali hasilnya sebelum langkah itu dianggap selesai dan dilaporkan",
      "Meluangkan waktu sejenak untuk memandu rekan itu mengunggah dokumen langkah demi langkah, lalu memberinya catatan singkat agar ia bisa melakukannya sendiri besok"
    ],
    k: "E",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: 2
  },
  {
    id: 230,
    code: "WB2-20",
    cat: "Adaptasi TIK",
    type: "Belajar sistem/aplikasi baru",
    q: "Kantor Anda beralih ke sistem pengarsipan berbasis cloud dan Anda belum memahami cara menyimpan serta mencari arsip di dalamnya. Sikap Anda adalah…",
    options: [
      "Menyimpan arsip dengan cara lama dan sesekali mencoba sistem baru",
      "Mempelajari sistem itu secara aktif sampai Anda bisa memakainya sendiri, tetapi tanpa mendokumentasikan kesepakatan itu",
      "Menyalahkan sistem baru itu tanpa mencoba memakainya",
      "Mempelajari sistem itu secara aktif, mencoba menyimpan dan mencari arsip contoh, lalu membuat panduan singkat untuk tim dan membantu rekan yang kesulitan",
      "Menolak memakai sistem pengarsipan berbasis cloud itu"
    ],
    k: "D",
    scores: {
      A: 3,
      B: 4,
      C: 2,
      D: 5,
      E: 1
    },
    image: null,
    boss: 2
  },
  {
    id: 231,
    code: "WB2-21",
    cat: "Profesionalisme",
    type: "Komitmen, deadline & prioritas",
    q: "Jadwal Anda hari ini padat: pukul sepuluh Anda harus mempresentasikan laporan di rapat pimpinan, tetapi berkas pendukung laporan itu belum lengkap karena bagian lain terlambat mengirimnya. Sikap Anda adalah…",
    options: [
      "Membatalkan presentasi tanpa memberi tahu pimpinan",
      "Mempresentasikan laporan itu dengan data yang dikarang agar terlihat lengkap",
      "Menghubungi bagian pengirim berkas untuk meminta data yang kurang, menyiapkan presentasi dengan data yang sudah ada sambil menjelaskan kekurangannya, dan menyampaikan kondisi itu ke pimpinan sebelum rapat",
      "Mempresentasikan laporan itu dengan data yang ada tanpa menjelaskan kekurangannya",
      "Meminta rapat diundur sambil menyiapkan presentasi dengan data yang sudah ada dan memberi tahu pimpinan alasannya, tanpa memberi tahu pihak yang terdampak tentang perubahan yang sudah terjadi itu"
    ],
    k: "C",
    scores: {
      A: 3,
      B: 1,
      C: 5,
      D: 2,
      E: 4
    },
    image: null,
    boss: 2
  },
  {
    id: 232,
    code: "WB2-22",
    cat: "Profesionalisme",
    type: "Rahasia jabatan & etika profesi",
    q: "Seorang warga meminta data pribadi tetangganya yang tersimpan di berkas kantor, dengan alasan mereka masih keluarga dan ia membutuhkannya untuk urusan warisan. Sikap Anda adalah…",
    options: [
      "Menolak dengan sopan, menjelaskan bahwa data itu rahasia jabatan, dan mengarahkannya ke jalur resmi bila ia berhak",
      "Memberikan data itu karena warga itu mengaku masih keluarga",
      "Menyuruh warga itu bertanya langsung ke tetangganya tanpa penjelasan",
      "Memberikan sebagian kecil data itu saja, karena menurut Anda bagian itu tidak terlalu sensitif dan warga itu membutuhkannya",
      "Memberikan seluruh data itu agar warga tidak marah"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 3,
      D: 4,
      E: 1
    },
    image: null,
    boss: 2
  },
  {
    id: 233,
    code: "WB2-23",
    cat: "Profesionalisme",
    type: "Pengembangan kompetensi diri",
    q: "Ada tawaran pelatihan kepemimpinan dengan kuota terbatas, dan Anda belum menjadi pegawai senior, tetapi materinya sangat relevan dengan tugas Anda. Sikap Anda adalah…",
    options: [
      "Tidak mengajukan diri karena merasa belum senior",
      "Mengajukan diri dengan alasan yang relevan, menyiapkan diri dengan sungguh-sungguh, dan bila tidak terpilih tetap belajar mandiri dari materi yang tersedia",
      "Meminta rekan senior mengalah agar Anda yang terpilih",
      "Menunggu ditunjuk atasan tanpa mengajukan diri",
      "Mengajukan diri untuk mengikuti pelatihan itu, tetapi menunda bagian tersulitnya sampai tenggat hampir habis dan baru dikerjakan terburu-buru"
    ],
    k: "B",
    scores: {
      A: 2,
      B: 5,
      C: 1,
      D: 3,
      E: 4
    },
    image: null,
    boss: 2
  },
  {
    id: 234,
    code: "WB2-24",
    cat: "Profesionalisme",
    type: "Akuntabilitas & integritas (whistleblowing)",
    q: "Seorang rekan meminta Anda menandatangani berita acara serah terima barang yang jumlahnya tidak sesuai dengan barang yang benar-benar diterima, dengan alasan selisihnya kecil dan akan dibereskan nanti. Sikap Anda adalah…",
    options: [
      "Menandatangani saja karena selisihnya kecil",
      "Menandatangani lalu meminta bagian dari selisih itu",
      "Menolak menandatangani, menjelaskan bahwa berita acara harus sesuai fakta, dan meminta rekan itu memperbaiki jumlah barangnya atau melaporkan selisih itu lewat jalur resmi",
      "Menolak menandatangani dan menyuruh rekan itu memperbaikinya sendiri tanpa melapor, tanpa menyiapkan rencana cadangan bila langkah itu gagal",
      "Menceritakan permintaan itu ke rekan kerja lain"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 1,
      C: 5,
      D: 4,
      E: 3
    },
    image: null,
    boss: 2
  },
  {
    id: 235,
    code: "WB2-25",
    cat: "Profesionalisme",
    type: "Komitmen, deadline & prioritas",
    q: "Tiga tugas dari tiga atasan berbeda datang bersamaan dan semuanya diminta selesai hari ini. Sikap Anda adalah…",
    options: [
      "Menerima ketiganya lalu mengerjakannya seadanya",
      "Mengerjakan ketiga tugas itu sendiri sampai selesai meski harus lembur, tetapi tanpa mencatat langkah itu sehingga sulit dilacak bila ada pihak yang menanyakan kemudian",
      "Menolak semua tugas itu karena tidak mungkin selesai dalam sehari",
      "Memilih satu tugas dan mengabaikan dua tugas lainnya",
      "Mengomunikasikan kondisi itu ke semua atasan, meminta arahan prioritas, lalu menyusun jadwal dan mengerjakan tugas sesuai kesepakatan"
    ],
    k: "E",
    scores: {
      A: 2,
      B: 4,
      C: 1,
      D: 3,
      E: 5
    },
    image: null,
    boss: 2
  },
  {
    id: 236,
    code: "WB2-26",
    cat: "Anti Radikalisme",
    type: "Menolak kekerasan & pemaksaan kehendak",
    q: "Sekelompok warga memaksa seorang pedagang pindah dari pasar karena ia berasal dari suku yang berbeda, dan pedagang itu ketakutan. Sikap Anda adalah…",
    options: [
      "Membiarkan pemaksaan itu karena takut ikut terseret",
      "Ikut mendesak pedagang itu agar pindah demi ketenteraman",
      "Menenangkan warga, melindungi pedagang itu, dan melaporkan pemaksaan itu kepada aparat berwenang",
      "Menenangkan warga itu saja dan meminta pedagang bersabar, tanpa melaporkan pemaksaan itu karena suasana sudah kembali tenang",
      "Meminta pedagang itu pindah sementara sampai suasana reda"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 1,
      C: 5,
      D: 4,
      E: 3
    },
    image: null,
    boss: 2
  },
  {
    id: 237,
    code: "WB2-27",
    cat: "Anti Radikalisme",
    type: "Menerima perbedaan ideologi yang tidak bertentangan dengan Pancasila",
    q: "Seorang warga secara terbuka mendukung calon pemimpin daerah yang berbeda dengan pilihan Anda, tetapi ia tetap menghormati hasil pemilihan dan tidak pernah memaksakan pilihannya kepada orang lain. Sikap Anda adalah…",
    options: [
      "Menghindari pembicaraan politik dengan warga itu",
      "Menghargai pilihannya sebagai hak warga, tetap melayaninya dengan profesional, dan menjaga netralitas sebagai aparatur",
      "Mendebat warga itu agar mengikuti pilihan Anda",
      "Menghargai pilihannya dan tetap melayaninya seperti biasa, tanpa memberi tahu atasan tentang langkah yang sudah diambil itu",
      "Melaporkan warga itu karena berbeda pilihan"
    ],
    k: "B",
    scores: {
      A: 3,
      B: 5,
      C: 2,
      D: 4,
      E: 1
    },
    image: null,
    boss: 2
  },
  {
    id: 238,
    code: "WB2-28",
    cat: "Anti Radikalisme",
    type: "Melaporkan paham radikal sesuai prosedur",
    q: "Anda menemukan pamflet di lingkungan kantor yang isinya mengajak menolak Pancasila sebagai dasar negara. Sikap Anda adalah…",
    options: [
      "Membuang pamflet itu diam-diam tanpa melapor",
      "Tidak menyebarkan pamflet itu, menyimpannya sebagai bukti, dan melaporkannya kepada atasan sesuai prosedur agar ditindaklanjuti",
      "Membiarkan pamflet itu tetap terpasang",
      "Tidak menyebarkan pamflet itu dan memberikannya kepada atasan, tetapi tidak menindaklanjuti hasilnya setelah langkah pertama itu selesai dikerjakan",
      "Menyebarkan foto pamflet itu ke media sosial"
    ],
    k: "B",
    scores: {
      A: 3,
      B: 5,
      C: 2,
      D: 4,
      E: 1
    },
    image: null,
    boss: 2
  },
  {
    id: 239,
    code: "WB2-29",
    cat: "Anti Radikalisme",
    type: "Menolak ajakan paham radikal",
    q: "Seorang kenalan lama mengajak Anda bergabung ke komunitas daring yang mengajarkan bahwa Pancasila bertentangan dengan agama. Sikap Anda adalah…",
    options: [
      "Menolak dengan alasan sedang sibuk tanpa penjelasan",
      "Menolak ajakan itu dengan santun dan menjelaskan kesetiaan kepada Pancasila, tanpa memastikan pihak lain benar-benar memahami penjelasan yang sudah diberikan itu",
      "Menolak ajakan itu dengan santun, menjelaskan kesetiaan aparatur kepada Pancasila, dan melaporkan ajakan itu kepada atasan bila ajakan itu mulai meluas",
      "Bergabung ke komunitas itu karena sungkan menolak",
      "Bergabung sekali untuk mengetahui isinya lalu diam"
    ],
    k: "C",
    scores: {
      A: 3,
      B: 4,
      C: 5,
      D: 1,
      E: 2
    },
    image: null,
    boss: 2
  },
  {
    id: 240,
    code: "WB2-30",
    cat: "Anti Radikalisme",
    type: "Menolak kekerasan & pemaksaan kehendak",
    q: "Di tempat umum, seseorang memaksa warga lain mengikuti keyakinannya dengan cara mengintimidasi. Sikap Anda adalah…",
    options: [
      "Tidak ikut memaksa, menenangkan situasi sebisa mungkin, dan melaporkan intimidasi itu kepada aparat yang berwenang",
      "Ikut mengintimidasi warga itu karena takut",
      "Tidak ikut memaksa dan menenangkan situasi di tempat itu, tetapi mengerjakannya sendiri tanpa melibatkan pihak terkait yang seharusnya dilibatkan sejak awal",
      "Membiarkannya karena bukan urusan Anda",
      "Menjauhi tempat itu agar tidak terseret"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 1,
      C: 4,
      D: 3,
      E: 2
    },
    image: null,
    boss: 2
  },
  {
    id: 241,
    code: "WB3-01",
    cat: "Pelayanan Publik",
    type: "Menolak imbalan (tanpa pamrih)",
    q: "Seorang kontraktor menawarkan bingkisan mahal kepada tim pengadaan menjelang proses tender, dengan alasan sebagai hadiah hari raya. Sikap Anda adalah…",
    options: [
      "Menerima bingkisan itu untuk diserahkan kepada atasan",
      "Menerima bingkisan itu diam-diam dan memberi kemudahan dalam tender",
      "Menolak bingkisan itu bersama tim dan menjelaskan aturan gratifikasi, tanpa memeriksa kembali hasilnya sebelum langkah itu dianggap selesai dan dilaporkan",
      "Menolak bingkisan itu dengan kasar agar kontraktor itu tidak mengulangi",
      "Menolak bingkisan itu bersama tim, menjelaskan aturan gratifikasi, dan melaporkan tawaran itu kepada atasan atau unit pengendalian gratifikasi"
    ],
    k: "E",
    scores: {
      A: 2,
      B: 1,
      C: 4,
      D: 3,
      E: 5
    },
    image: null,
    boss: 3
  },
  {
    id: 242,
    code: "WB3-02",
    cat: "Pelayanan Publik",
    type: "Sistem error & perbaikan layanan",
    q: "Aplikasi antrean daring error sejak pagi dan nomor antrean warga yang sudah mendaftar hilang dari sistem, padahal warga sudah datang sesuai jadwal pendaftarannya. Sikap Anda adalah…",
    options: [
      "Menyuruh semua warga pulang dan mendaftar ulang besok",
      "Melayani warga yang datang duluan saja tanpa memperhatikan urutan pendaftaran daring",
      "Melayani warga sesuai urutan pendaftaran yang tercatat, memberi nomor manual sementara, dan melaporkan gangguan itu ke IT",
      "Meminta semua warga mendaftar ulang secara manual di tempat, agar urutan antrean hari ini jelas dan tidak ada yang merasa dirugikan",
      "Menutup pendaftaran sampai aplikasi kembali normal"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 3,
      C: 5,
      D: 4,
      E: 1
    },
    image: null,
    boss: 3
  },
  {
    id: 243,
    code: "WB3-03",
    cat: "Pelayanan Publik",
    type: "Warga marah & antrean panjang",
    q: "Seorang warga marah karena surat yang diurusnya tertunda dua minggu tanpa kabar apa pun dari kantor Anda. Sikap Anda adalah…",
    options: [
      "Menyalahkan bagian lain yang menangani berkas itu",
      "Meminta maaf dan menelusuri status berkasnya lalu memberi perkiraan waktu penyelesaian, tetapi tanpa mendokumentasikan kesepakatan itu",
      "Mengabaikan warga itu karena keterlambatan bukan kesalahan Anda",
      "Meminta maaf atas keterlambatan itu, menelusuri status berkasnya, memberi kepastian dan perkiraan waktu penyelesaian",
      "Meminta warga menunggu tanpa kepastian"
    ],
    k: "D",
    scores: {
      A: 2,
      B: 4,
      C: 1,
      D: 5,
      E: 3
    },
    image: null,
    boss: 3
  },
  {
    id: 244,
    code: "WB3-04",
    cat: "Pelayanan Publik",
    type: "Berkas/syarat tidak lengkap",
    q: "Seorang warga mengurus surat ahli waris, tetapi satu ahli waris menolak menandatangani karena sengketa keluarga yang belum selesai. Warga itu memohon agar surat tetap diproses. Sikap Anda adalah…",
    options: [
      "Memproses surat itu tanpa tanda tangan ahli waris yang menolak",
      "Menyuruh warga menyelesaikan sengketa itu sendiri tanpa menjelaskan jalur resminya",
      "Menolak berkas itu tanpa menjelaskan mengapa tanda tangan itu wajib",
      "Menjelaskan bahwa tanda tangan itu wajib secara hukum dan mengarahkan warga ke mediasi, tetapi memproses surat itu lebih dulu dengan catatan kaki agar warga tidak menunggu",
      "Menjelaskan bahwa tanda tangan itu wajib secara hukum, lalu mengarahkan warga ke mediasi atau jalur hukum yang berlaku"
    ],
    k: "E",
    scores: {
      A: 1,
      B: 3,
      C: 2,
      D: 4,
      E: 5
    },
    image: null,
    boss: 3
  },
  {
    id: 245,
    code: "WB3-05",
    cat: "Pelayanan Publik",
    type: "Menolak imbalan (tanpa pamrih)",
    q: "Seorang warga menawarkan membelikan makan siang untuk seluruh petugas loket agar urusannya dipercepat. Sikap Anda adalah…",
    options: [
      "Menerima makan siang itu dan mendahulukan urusan warga tersebut",
      "Menolak tawaran itu dengan kasar agar warga itu tidak mengulangi",
      "Menolak tawaran itu dengan sopan, menjelaskan bahwa semua warga dilayani sesuai urutan antrean, dan melayani urusan warga itu sesuai prosedur",
      "Menolak tawaran itu dengan sopan dan menjelaskan aturan antrean, tanpa memberi tahu pihak yang terdampak tentang perubahan yang sudah terjadi itu",
      "Menerima makan siang itu tetapi tetap melayani sesuai urutan"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 3,
      C: 5,
      D: 4,
      E: 2
    },
    image: null,
    boss: 3
  },
  {
    id: 246,
    code: "WB3-06",
    cat: "Jejaring Kerja",
    type: "Membangun relasi baru",
    q: "Kantor Anda akan bekerja sama dengan sebuah LSM untuk program literasi, tetapi LSM itu belum dikenal tim Anda meski reputasinya baik. Sikap Anda adalah…",
    options: [
      "Mengirim surat kerja sama langsung tanpa mempelajari LSM itu",
      "Mempelajari rekam jejak dan program LSM itu, mengusulkan pertemuan awal, lalu menyusun kesepakatan peran yang saling menguntungkan dan melibatkan tim dalam pelaksanaannya",
      "Meminta atasan mengurus semuanya tanpa Anda terlibat",
      "Menjalankan program literasi itu sendiri tanpa dukungan LSM",
      "Mempelajari LSM itu lalu mengusulkan pertemuan awal untuk membahas kerja sama, tetapi menunda bagian tersulitnya sampai tenggat hampir habis dan baru dikerjakan terburu-buru"
    ],
    k: "B",
    scores: {
      A: 3,
      B: 5,
      C: 2,
      D: 1,
      E: 4
    },
    image: null,
    boss: 3
  },
  {
    id: 247,
    code: "WB3-07",
    cat: "Jejaring Kerja",
    type: "Kolaborasi lintas unit/instansi",
    q: "Dua unit berebut jadwal pemakaian aula yang sama untuk kegiatan penting dan keduanya sudah mengundang peserta. Sikap Anda adalah…",
    options: [
      "Membiarkan kedua unit menyelesaikan sendiri perebutan jadwal itu",
      "Mempertemukan kedua unit, mencari jadwal pengganti atau pembagian waktu, dan mencatat kesepakatan itu secara tertulis",
      "Memberikan aula itu kepada unit yang Anda sukai tanpa alasan jelas",
      "Memberikan aula itu kepada unit yang mengajukan lebih dulu, karena menurut Anda siapa cepat dialah yang berhak memakai aula itu",
      "Membatalkan kedua kegiatan itu agar tidak ada yang merasa dirugikan"
    ],
    k: "B",
    scores: {
      A: 3,
      B: 5,
      C: 1,
      D: 4,
      E: 2
    },
    image: null,
    boss: 3
  },
  {
    id: 248,
    code: "WB3-08",
    cat: "Jejaring Kerja",
    type: "Konflik dalam tim",
    q: "Seorang rekan senior dan seorang rekan junior berselisih soal cara kerja baru: senior ingin memakai cara lama, junior ingin memakai cara baru. Sikap Anda adalah…",
    options: [
      "Membiarkan mereka berselisih sampai salah satu mengalah",
      "Meminta atasan yang memutuskan cara kerja itu",
      "Memfasilitasi diskusi antara keduanya, menghargai pengalaman senior dan ide junior, lalu menyepakati cara kerja gabungan dan memantau hasilnya bersama",
      "Memihak rekan senior karena pengalamannya lebih banyak",
      "Memfasilitasi diskusi antara keduanya dan menyepakati cara kerja baru, tanpa menyiapkan rencana cadangan bila langkah itu gagal"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 2,
      C: 5,
      D: 3,
      E: 4
    },
    image: null,
    boss: 3
  },
  {
    id: 249,
    code: "WB3-09",
    cat: "Jejaring Kerja",
    type: "Berbagi informasi & membantu rekan",
    q: "Informasi perubahan syarat layanan hanya sampai ke sebagian tim, sehingga beberapa warga sudah terlanjur diberi informasi lama dan datang dengan berkas yang salah. Sikap Anda adalah…",
    options: [
      "Membiarkan warga yang sudah mendapat info lama mengurus dengan syarat yang salah",
      "Menyampaikan info terbaru ke seluruh tim, menghubungi warga yang sudah diberi info lama, dan menyepakati alur penyampaian info",
      "Menyalahkan unit lain yang tidak menyampaikan info itu ke tim Anda",
      "Menyampaikan info terbaru itu ke seluruh tim saja dan memastikan tim tidak lagi memberi info lama, tanpa menghubungi warga yang sudah terlanjur salah",
      "Menunggu atasan yang mengumumkan perubahan itu secara resmi"
    ],
    k: "B",
    scores: {
      A: 2,
      B: 5,
      C: 1,
      D: 4,
      E: 3
    },
    image: null,
    boss: 3
  },
  {
    id: 250,
    code: "WB3-10",
    cat: "Jejaring Kerja",
    type: "Membangun relasi baru",
    q: "Kantor Anda membutuhkan dukungan media lokal untuk menyosialisasikan program baru kepada masyarakat luas. Sikap Anda adalah…",
    options: [
      "Mempelajari media lokal itu dan jangkauannya, mengusulkan pertemuan awal, lalu menyepakati bentuk kerja sama yang saling menguntungkan dan melibatkan tim humas",
      "Menjalankan sosialisasi itu sendiri tanpa dukungan media",
      "Menghubungi media lokal itu dan mengusulkan kerja sama sosialisasi program, tetapi tanpa mencatat langkah itu sehingga sulit dilacak bila ada pihak yang menanyakan kemudian",
      "Meminta atasan mengurus semuanya tanpa Anda terlibat",
      "Mengirim siaran pers tanpa perkenalan lebih dulu"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 1,
      C: 4,
      D: 2,
      E: 3
    },
    image: null,
    boss: 3
  },
  {
    id: 251,
    code: "WB3-11",
    cat: "Sosial Budaya",
    type: "Penempatan baru & adaptasi lingkungan",
    q: "Anda ditempatkan di daerah dengan dua kelompok adat yang aturannya bertentangan soal pemakaian lahan umum: satu kelompok melarang, satu kelompok mengizinkan. Keduanya menuntut Anda memutuskan. Sikap Anda adalah…",
    options: [
      "Menunda keputusan pemakaian lahan itu sampai ada perintah dari atasan",
      "Memutuskan pemakaian lahan itu sendiri tanpa melibatkan kedua kelompok adat",
      "Membiarkan kedua kelompok adat itu menyelesaikan sendiri perselisihannya",
      "Memfasilitasi musyawarah kedua tokoh adat, mencari titik temu pemakaian lahan, dan menyepakati aturan bersama yang dihormati keduanya",
      "Mengikuti aturan adat kelompok mayoritas saja, karena menurut Anda aturan mayoritas lebih mudah diterima warga setempat, meski kelompok minoritas merasa tidak pernah didengar"
    ],
    k: "D",
    scores: {
      A: 3,
      B: 2,
      C: 1,
      D: 5,
      E: 4
    },
    image: null,
    boss: 3
  },
  {
    id: 252,
    code: "WB3-12",
    cat: "Sosial Budaya",
    type: "Gotong royong & kepedulian",
    q: "Kegiatan bersih desa sepi peminat karena warga merasa hanya kelompok tertentu saja yang diuntungkan dari kegiatan itu. Sikap Anda adalah…",
    options: [
      "Mendengarkan keluhan warga, menjelaskan manfaat kegiatan bagi semua, melibatkan semua kelompok dalam perencanaan, dan memberi contoh dengan ikut bekerja langsung",
      "Mengerjakan kegiatan bersih desa itu sendiri tanpa mengajak warga",
      "Memaksa warga ikut kegiatan itu dengan ancaman denda",
      "Membiarkan kegiatan itu sepi karena itu urusan panitia",
      "Menjelaskan manfaat kegiatan itu bagi semua warga dan mengajak mereka ikut serta, tanpa memberi tahu atasan tentang langkah yang sudah diambil itu"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 3,
      C: 1,
      D: 2,
      E: 4
    },
    image: null,
    boss: 3
  },
  {
    id: 253,
    code: "WB3-13",
    cat: "Sosial Budaya",
    type: "Toleransi & keragaman",
    q: "Ada warga yang melarang tetangganya beribadah di rumahnya sendiri karena berbeda agama. Sikap Anda adalah…",
    options: [
      "Mengingatkan warga itu dengan santun bahwa setiap orang bebas beribadah, memfasilitasi dialog antara kedua belah pihak, dan melaporkan bila larangan itu berlanjut",
      "Mengingatkan warga itu dengan santun bahwa setiap orang bebas beribadah, tetapi tidak menindaklanjuti hasilnya setelah langkah pertama itu selesai dikerjakan",
      "Meminta warga yang dilarang itu beribadah di tempat lain saja",
      "Ikut melarang tetangga itu beribadah di rumahnya",
      "Membiarkannya karena itu urusan antar tetangga"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 4,
      C: 2,
      D: 1,
      E: 3
    },
    image: null,
    boss: 3
  },
  {
    id: 254,
    code: "WB3-14",
    cat: "Sosial Budaya",
    type: "Gotong royong & kepedulian",
    q: "Iuran gotong royong memperbaiki jalan ditolak sebagian warga miskin karena memberatkan, sementara sebagian warga kaya menolak menanggung lebih besar. Kegiatan terancam batal. Sikap Anda adalah…",
    options: [
      "Membatalkan kegiatan gotong royong itu karena iurannya dipersoalkan",
      "Memaksa semua warga membayar iuran penuh saat itu juga",
      "Membiarkan warga kaya menanggung seluruh biaya tanpa musyawarah",
      "Memfasilitasi musyawarah iuran bertingkat sesuai kemampuan, dengan pencatatan transparan dan memberi contoh dengan ikut menyumbang",
      "Menetapkan iuran yang sama rata untuk semua warga, agar tidak ada yang merasa diistimewakan atau dibebani lebih dari yang lain, meski warga miskin harus berutang untuk membayarnya"
    ],
    k: "D",
    scores: {
      A: 3,
      B: 1,
      C: 2,
      D: 5,
      E: 4
    },
    image: null,
    boss: 3
  },
  {
    id: 255,
    code: "WB3-15",
    cat: "Sosial Budaya",
    type: "Penempatan baru & adaptasi lingkungan",
    q: "Anda pindah tugas ke daerah yang warganya sangat menghormati sesepuh dan ada tata cara khusus saat berbicara dengan sesepuh, yang belum Anda ketahui. Sikap Anda adalah…",
    options: [
      "Menghindari berbicara dengan sesepuh agar tidak salah",
      "Mempelajari tata cara setempat, menghormati sesepuh sesuai adat yang berlaku, menyesuaikan cara berkomunikasi Anda, dan membangun hubungan baik dengan tokoh masyarakat di sana",
      "Mempelajari tata cara setempat dan menyesuaikan cara berkomunikasi Anda, tanpa memastikan pihak lain benar-benar memahami penjelasan yang sudah diberikan itu",
      "Tetap berbicara dengan cara Anda sendiri tanpa memperhatikan tata cara setempat",
      "Mengkritik tata cara itu di depan warga setempat"
    ],
    k: "B",
    scores: {
      A: 2,
      B: 5,
      C: 4,
      D: 3,
      E: 1
    },
    image: null,
    boss: 3
  },
  {
    id: 256,
    code: "WB3-16",
    cat: "Adaptasi TIK",
    type: "Etika digital & keamanan data",
    q: "Seorang rekan memberikan kata sandi akun sistem kepegawaian kepada pegawai magang agar magang itu bisa membantu menginput data, padahal akun itu hanya boleh dipakai pegawai tetap. Sikap Anda adalah…",
    options: [
      "Meminta rekan itu segera mengganti kata sandi itu, menjelaskan risiko penyalahgunaan akun, dan mengusulkan akses magang dibuatkan akun terbatas sesuai prosedur",
      "Membiarkannya karena magang itu hanya membantu sementara",
      "Ikut memakai akun itu untuk mempercepat pekerjaan Anda",
      "Meminta rekan itu segera mengganti kata sandi itu dan menjelaskan risikonya, tetapi mengerjakannya sendiri tanpa melibatkan pihak terkait yang seharusnya dilibatkan sejak awal",
      "Melaporkan rekan itu ke atasan tanpa mengingatkannya lebih dulu"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 1,
      D: 4,
      E: 3
    },
    image: null,
    boss: 3
  },
  {
    id: 257,
    code: "WB3-17",
    cat: "Adaptasi TIK",
    type: "Memanfaatkan TIK untuk tugas",
    q: "Seorang rekan menyimpan data warga di aplikasi pribadi di ponselnya karena lebih cepat daripada aplikasi resmi kantor, dan ia membagikan data itu lewat aplikasi tersebut. Sikap Anda adalah…",
    options: [
      "Ikut memakai aplikasi pribadi itu karena memang lebih cepat",
      "Membiarkan rekan itu menyimpan data warga di aplikasi pribadi tanpa menegur",
      "Menegur rekan itu di depan warga agar ia jera",
      "Membiarkan rekan itu memakai aplikasi pribadi tersebut, karena hasilnya cepat dan warga terlayani lebih baik daripada memakai aplikasi resmi yang lambat",
      "Mengingatkan rekan itu tentang risiko kebocoran data, mengarahkannya kembali ke aplikasi resmi, dan melaporkan praktik itu ke atasan"
    ],
    k: "E",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: 3
  },
  {
    id: 258,
    code: "WB3-18",
    cat: "Adaptasi TIK",
    type: "Membantu rekan gagap teknologi",
    q: "Seorang rekan senior takut memakai tanda tangan elektronik karena pernah salah menekan tombol dan dimarahi atasan. Sikap Anda adalah…",
    options: [
      "Membiarkan rekan itu memakai tanda tangan basah seperti biasa",
      "Menyuruh rekan itu bertanya ke petugas IT",
      "Menjelaskan cara memakai tanda tangan elektronik dan memandunya sekali, tanpa memeriksa kembali hasilnya sebelum langkah itu dianggap selesai dan dilaporkan",
      "Memakai tanda tangan elektronik untuk rekan itu tanpa menjelaskan caranya",
      "Mendengarkan kekhawatirannya, menjelaskan keamanan dan cara memakai tanda tangan elektronik, memandunya langkah demi langkah, lalu memberinya catatan singkat dan mendampingi sampai ia percaya diri"
    ],
    k: "E",
    scores: {
      A: 1,
      B: 2,
      C: 4,
      D: 3,
      E: 5
    },
    image: null,
    boss: 3
  },
  {
    id: 259,
    code: "WB3-19",
    cat: "Adaptasi TIK",
    type: "Belajar sistem/aplikasi baru",
    q: "Sistem baru yang wajib dipakai tim hanya tersedia dalam bahasa Inggris dan separuh rekan senior tidak memahaminya, padahal tenggat laporan sudah dekat. Sikap Anda adalah…",
    options: [
      "Membuat panduan singkat berbahasa Indonesia, mendampingi rekan senior mencoba, dan mengusulkan pelatihan susulan ke IT",
      "Menyuruh rekan senior belajar bahasa Inggris sendiri",
      "Mengerjakan tugas sistem itu untuk semua rekan senior tanpa mengajari mereka",
      "Meminta IT menerjemahkan seluruh tampilan sistem itu ke bahasa Indonesia, meski prosesnya lama dan tenggat laporan sudah sangat dekat",
      "Membiarkan rekan senior itu tertinggal memakai sistem baru"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 3,
      D: 4,
      E: 1
    },
    image: null,
    boss: 3
  },
  {
    id: 260,
    code: "WB3-20",
    cat: "Adaptasi TIK",
    type: "Belajar sistem/aplikasi baru",
    q: "Dua sistem baru diterapkan bersamaan di kantor Anda dan Anda bingung membedakan fungsi masing-masing sistem itu. Sikap Anda adalah…",
    options: [
      "Mempelajari perbedaan kedua sistem itu dan mencoba pada tugas kecil lebih dulu, tetapi tanpa mendokumentasikan kesepakatan itu",
      "Menyalahkan penerapan dua sistem sekaligus tanpa mencoba memahaminya",
      "Memakai satu sistem saja untuk semua tugas",
      "Mempelajari perbedaan kedua sistem itu, membuat catatan ringkas fungsinya, mencoba pada tugas kecil lebih dulu, bertanya kepada rekan atau IT bila ragu",
      "Menolak memakai kedua sistem baru itu"
    ],
    k: "D",
    scores: {
      A: 4,
      B: 2,
      C: 3,
      D: 5,
      E: 1
    },
    image: null,
    boss: 3
  },
  {
    id: 261,
    code: "WB3-21",
    cat: "Profesionalisme",
    type: "Akuntabilitas & integritas (whistleblowing)",
    q: "Atasan Anda meminta Anda menandatangani laporan kegiatan yang sebenarnya tidak pernah dilaksanakan. Sikap Anda adalah…",
    options: [
      "Menceritakan permintaan itu ke rekan kerja lain",
      "Menolak dengan sopan dan menjelaskan bahwa laporan harus sesuai fakta, tanpa memberi tahu pihak yang terdampak tentang perubahan yang sudah terjadi itu",
      "Menolak dengan sopan, menjelaskan bahwa laporan harus sesuai fakta, dan melaporkan permintaan itu lewat jalur resmi bila Anda terus dipaksa",
      "Menandatangani sebagian laporan saja agar tidak terlalu mencolok",
      "Menandatangani laporan itu karena perintah atasan"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 4,
      C: 5,
      D: 3,
      E: 1
    },
    image: null,
    boss: 3
  },
  {
    id: 262,
    code: "WB3-22",
    cat: "Profesionalisme",
    type: "Komitmen, deadline & prioritas",
    q: "Dua tenggat jatuh di jam yang sama: laporan ke pusat yang akan dikenai sanksi bila terlambat, dan pelayanan warga yang sudah antre panjang sejak pagi. Sikap Anda adalah…",
    options: [
      "Mengerjakan keduanya seadanya tanpa memberi tahu siapa pun",
      "Meminta tenggat laporan diundur tanpa mengerjakan apa pun hari ini",
      "Meninggalkan kedua tugas itu karena tidak mungkin selesai bersamaan",
      "Mengerjakan laporan ke pusat lebih dulu sampai selesai, karena keterlambatannya ada sanksi, meski warga yang antre harus menunggu lama tanpa diberi tahu kapan akan dilayani",
      "Mengomunikasikan bentrokan itu ke atasan, meminta rekan membantu pelayanan warga, dan menyelesaikan laporan dengan pembagian tugas yang jelas"
    ],
    k: "E",
    scores: {
      A: 2,
      B: 3,
      C: 1,
      D: 4,
      E: 5
    },
    image: null,
    boss: 3
  },
  {
    id: 263,
    code: "WB3-23",
    cat: "Profesionalisme",
    type: "Rahasia jabatan & etika profesi",
    q: "Seorang wartawan menanyakan data internal instansi Anda yang belum dipublikasikan kepada Anda secara langsung. Sikap Anda adalah…",
    options: [
      "Memberikan data itu dan meminta wartawan tidak menyebut sumbernya",
      "Menolak dengan sopan, menjelaskan bahwa data itu belum bisa dibagikan, dan mengarahkan wartawan itu ke humas atau pejabat yang berwenang sesuai prosedur permintaan informasi",
      "Menolak dengan sopan dan mengarahkan wartawan itu ke humas, tetapi menunda bagian tersulitnya sampai tenggat hampir habis dan baru dikerjakan terburu-buru",
      "Memberikan data itu karena wartawan itu berhak tahu",
      "Memberi tahu sebagian data itu saja secara lisan"
    ],
    k: "B",
    scores: {
      A: 1,
      B: 5,
      C: 4,
      D: 2,
      E: 3
    },
    image: null,
    boss: 3
  },
  {
    id: 264,
    code: "WB3-24",
    cat: "Profesionalisme",
    type: "Pengembangan kompetensi diri",
    q: "Ada kesempatan sertifikasi profesi yang sangat relevan dengan tugas Anda, tetapi biayanya hanya ditanggung sebagian oleh instansi. Sikap Anda adalah…",
    options: [
      "Mendaftar tetapi tidak pernah mengikuti pelatihannya",
      "Mengajukan diri dan mengikuti sertifikasi itu dengan sungguh-sungguh, tanpa menyiapkan rencana cadangan bila langkah itu gagal",
      "Mengajukan diri untuk mengikuti sertifikasi itu, mengikuti pelatihannya dengan sungguh-sungguh, menerapkan ilmunya dalam pekerjaan, dan membagikan ilmunya kepada rekan",
      "Menolak mengikuti karena biayanya tidak ditanggung penuh",
      "Mengikuti sertifikasi itu hanya demi gelar dan sertifikat"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 4,
      C: 5,
      D: 2,
      E: 3
    },
    image: null,
    boss: 3
  },
  {
    id: 265,
    code: "WB3-25",
    cat: "Profesionalisme",
    type: "Akuntabilitas & integritas (whistleblowing)",
    q: "Seorang rekan meminta Anda menutupi kesalahannya dalam laporan keuangan agar ia tidak mendapat sanksi. Sikap Anda adalah…",
    options: [
      "Menolak menutupi kesalahan itu dan meminta rekan itu memperbaikinya sendiri, tetapi tanpa mencatat langkah itu sehingga sulit dilacak bila ada pihak yang menanyakan kemudian",
      "Membantu menutupi kesalahan itu karena ia rekan dekat Anda",
      "Menceritakan kesalahan itu ke rekan kerja lain",
      "Membiarkannya karena itu kesalahan rekan tersebut",
      "Menolak menutupi kesalahan itu, meminta rekan itu memperbaiki laporannya sendiri, dan melaporkan bila kesalahan itu berlanjut atau merugikan keuangan negara"
    ],
    k: "E",
    scores: {
      A: 4,
      B: 1,
      C: 2,
      D: 3,
      E: 5
    },
    image: null,
    boss: 3
  },
  {
    id: 266,
    code: "WB3-26",
    cat: "Anti Radikalisme",
    type: "Menerima perbedaan ideologi yang tidak bertentangan dengan Pancasila",
    q: "Di lingkungan Anda, seorang warga yang dikenal mendukung partai politik berbeda tidak diundang ke musyawarah warga, padahal ia warga resmi lingkungan itu dan selama ini aktif membayar iuran. Sikap Anda adalah…",
    options: [
      "Membiarkan warga itu tidak diundang karena itu keputusan panitia musyawarah",
      "Mengingatkan panitia bahwa musyawarah terbuka untuk semua warga, lalu mengajak warga itu hadir dan memastikan ia dilibatkan",
      "Ikut tidak mengundang warga itu agar diterima panitia",
      "Mengundang warga itu secara pribadi tanpa memberitahu panitia, agar ia tetap bisa hadir meski panitia bisa tersinggung karena merasa dilangkahi",
      "Meminta warga itu menunggu hasil musyawarah tanpa hadir"
    ],
    k: "B",
    scores: {
      A: 3,
      B: 5,
      C: 1,
      D: 4,
      E: 2
    },
    image: null,
    boss: 3
  },
  {
    id: 267,
    code: "WB3-27",
    cat: "Anti Radikalisme",
    type: "Melaporkan paham radikal sesuai prosedur",
    q: "Anda mendengar rekan dekat Anda menyebarkan ajakan yang menolak Pancasila di grup percakapan kecil. Ia meminta Anda merahasiakannya demi persahabatan kalian. Sikap Anda adalah…",
    options: [
      "Mengumpulkan bukti dengan hati-hati, mengingatkan rekan itu, dan melaporkannya lewat jalur resmi sesuai prosedur",
      "Membiarkan rekan itu karena ia teman dekat Anda",
      "Mengingatkan rekan itu saja tanpa mencatat atau melaporkan apa pun",
      "Mengingatkan rekan itu secara pribadi dan memintanya berhenti, tanpa melaporkannya, karena Anda percaya ia akan berhenti dan melapor akan merusak persahabatan",
      "Ikut menyebarkan ajakan itu agar tidak dicurigai rekan tersebut"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 3,
      D: 4,
      E: 1
    },
    image: null,
    boss: 3
  },
  {
    id: 268,
    code: "WB3-28",
    cat: "Anti Radikalisme",
    type: "Menolak ajakan paham radikal",
    q: "Seorang rekan mengajak Anda mengikuti kelompok yang mengajarkan bahwa hukum negara tidak berlaku bagi kelompoknya. Sikap Anda adalah…",
    options: [
      "Menolak dengan alasan sedang sibuk tanpa penjelasan",
      "Menghadiri satu pertemuan kelompok itu untuk mengetahui isinya lalu diam",
      "Menolak ajakan itu dengan santun dan menjelaskan kesetiaan kepada Pancasila, tetapi tidak menindaklanjuti hasilnya setelah langkah pertama itu selesai dikerjakan",
      "Menolak ajakan itu dengan santun, menjelaskan kesetiaan aparatur kepada Pancasila dan hukum negara, dan memberi tahu atasan bahwa ajakan itu mulai menyebar",
      "Mengikuti kelompok itu karena sungkan menolak ajakan rekan"
    ],
    k: "D",
    scores: {
      A: 3,
      B: 2,
      C: 4,
      D: 5,
      E: 1
    },
    image: null,
    boss: 3
  },
  {
    id: 269,
    code: "WB3-29",
    cat: "Anti Radikalisme",
    type: "Menerima perbedaan ideologi yang tidak bertentangan dengan Pancasila",
    q: "Dua kelompok warga yang berbeda pandangan politik saling sindir di media sosial hingga suasana lingkungan memanas. Sikap Anda adalah…",
    options: [
      "Memihak salah satu kelompok yang pandangannya sama dengan Anda",
      "Ikut menyindir kelompok yang berbeda pandangan dengan Anda",
      "Mengingatkan kedua kelompok dengan santun untuk menghormati perbedaan, mengajak dialog yang tenang, menjaga kerukunan lingkungan, dan tidak memihak salah satu kelompok",
      "Mengingatkan kedua kelompok dengan santun agar menghormati perbedaan, tanpa memastikan pihak lain benar-benar memahami penjelasan yang sudah diberikan itu",
      "Membiarkan saja karena itu urusan masing-masing kelompok"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 1,
      C: 5,
      D: 4,
      E: 3
    },
    image: null,
    boss: 3
  },
  {
    id: 270,
    code: "WB3-30",
    cat: "Anti Radikalisme",
    type: "Menerima perbedaan ideologi yang tidak bertentangan dengan Pancasila",
    q: "Dua rekan kerja berbeda pilihan dalam pemilihan kepala daerah dan suasana kantor mulai memanas karena saling sindir. Sikap Anda adalah…",
    options: [
      "Ikut menyindir rekan yang berbeda pilihan dengan Anda",
      "Memihak salah satu rekan yang pilihannya sama dengan Anda",
      "Mengingatkan keduanya dengan santun agar menghormati pilihan masing-masing, tetapi mengerjakannya sendiri tanpa melibatkan pihak terkait yang seharusnya dilibatkan sejak awal",
      "Mengingatkan keduanya dengan santun untuk menghormati pilihan masing-masing, menjaga profesionalisme kerja, dan tidak membawa urusan politik ke dalam tugas bersama",
      "Membiarkan saja karena itu urusan pribadi mereka"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 2,
      C: 4,
      D: 5,
      E: 3
    },
    image: null,
    boss: 3
  },
  {
    id: 271,
    code: "WB4-01",
    cat: "Pelayanan Publik",
    type: "Sistem error & perbaikan layanan",
    q: "Sistem pelayanan down total saat seorang warga mengurus dokumen untuk operasi keluarganya besok pagi. Prosedur darurat mensyaratkan persetujuan atasan, tetapi atasan sedang di luar kota dan sulit dihubungi. Sikap Anda adalah…",
    options: [
      "Menyuruh warga menunggu sampai sistem pulih tanpa kepastian",
      "Memproses surat itu di luar sistem tanpa pencatatan apa pun",
      "Menghubungi atasan untuk persetujuan darurat, menerbitkan surat manual yang tercatat, dan mengabari warga begitu sistem pulih",
      "Langsung menerbitkan surat manual tanpa menunggu persetujuan atasan, agar warga bisa berobat besok pagi dan tidak kehilangan kesempatan",
      "Meminta warga datang kembali besok tanpa kepastian"
    ],
    k: "C",
    scores: {
      A: 3,
      B: 1,
      C: 5,
      D: 4,
      E: 2
    },
    image: null,
    boss: 4
  },
  {
    id: 272,
    code: "WB4-02",
    cat: "Pelayanan Publik",
    type: "Warga marah & antrean panjang",
    q: "Seorang warga marah karena merasa didiskriminasi: ia melihat warga lain yang datang belakangan dilayani lebih dulu darinya. Sikap Anda adalah…",
    options: [
      "Mengabaikan warga itu karena tuduhannya tidak berdasar",
      "Menyuruh warga itu bersabar karena antrean memang panjang",
      "Menyalahkan rekan yang melayani warga lain itu di depan warga tersebut",
      "Mendengarkan keluhannya dan menjelaskan urutan antrean secara transparan, tanpa memeriksa kembali hasilnya sebelum langkah itu dianggap selesai dan dilaporkan",
      "Mendengarkan keluhannya dengan tenang, meminta maaf atas ketidaknyamanan, menjelaskan urutan antrean secara transparan, memeriksa dan memperbaiki bila ada kesalahan"
    ],
    k: "E",
    scores: {
      A: 1,
      B: 3,
      C: 2,
      D: 4,
      E: 5
    },
    image: null,
    boss: 4
  },
  {
    id: 273,
    code: "WB4-03",
    cat: "Pelayanan Publik",
    type: "Berkas/syarat tidak lengkap",
    q: "Seorang warga mengurus pencairan bantuan ahli waris, tetapi surat kuasa dari ahli waris di luar negeri perlu dilegalisasi dan prosesnya memakan waktu berminggu-minggu, sementara tenggat pencairan sudah dekat. Sikap Anda adalah…",
    options: [
      "Menyuruh warga menunggu legalisasi selesai tanpa solusi sementara",
      "Menjelaskan syarat legalisasi, memberi surat keterangan sementara yang sah, dan memandu proses legalisasinya sampai selesai",
      "Mencairkan bantuan itu tanpa surat kuasa yang sah",
      "Mencairkan bantuan itu lebih dulu dengan jaminan tertulis dari warga, sambil menunggu surat kuasa yang dilegalisasi tiba dari luar negeri",
      "Menolak permohonan itu karena ahli waris tidak bisa hadir"
    ],
    k: "B",
    scores: {
      A: 3,
      B: 5,
      C: 1,
      D: 4,
      E: 2
    },
    image: null,
    boss: 4
  },
  {
    id: 274,
    code: "WB4-04",
    cat: "Pelayanan Publik",
    type: "Menolak imbalan (tanpa pamrih)",
    q: "Seorang pejabat daerah menawarkan donasi besar untuk perbaikan loket dengan syarat urusannya didahulukan dari warga lain. Sikap Anda adalah…",
    options: [
      "Menerima donasi itu dan mendahulukan urusan pejabat tersebut",
      "Menolak donasi itu dengan kasar agar pejabat itu tidak mengulangi",
      "Menolak syarat itu dengan sopan, menjelaskan bahwa semua warga dilayani sesuai urutan antrean, mengarahkan donasi itu lewat jalur resmi bila ia memang ingin membantu, dan melayani urusannya sesuai prosedur",
      "Menolak syarat itu dengan sopan dan melayani urusannya sesuai urutan antrean, tetapi tanpa mendokumentasikan kesepakatan itu",
      "Menerima donasi itu diam-diam dan memberi kemudahan lain di kemudian hari"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 3,
      C: 5,
      D: 4,
      E: 1
    },
    image: null,
    boss: 4
  },
  {
    id: 275,
    code: "WB4-05",
    cat: "Pelayanan Publik",
    type: "Sistem error & perbaikan layanan",
    q: "Sistem pembayaran pajak error pada hari terakhir dan sebagian warga yang sudah membayar tidak mendapat bukti bayar, sementara warga lain masih antre dan takut terkena denda. Sikap Anda adalah…",
    options: [
      "Menyuruh warga yang sudah membayar untuk membayar ulang besok",
      "Menutup loket sampai sistem kembali normal tanpa pendataan",
      "Memproses pembayaran tanpa pencatatan agar antrean cepat habis",
      "Mencatat pembayaran warga secara manual, memberi tanda terima sementara, dan mengusulkan agar warga tidak dikenai denda",
      "Mencatat pembayaran warga secara manual dan memberi tanda terima sementara, tanpa mengusulkan pembebasan denda, sehingga warga yang sudah membayar tetap terancam denda"
    ],
    k: "D",
    scores: {
      A: 2,
      B: 3,
      C: 1,
      D: 5,
      E: 4
    },
    image: null,
    boss: 4
  },
  {
    id: 276,
    code: "WB4-06",
    cat: "Jejaring Kerja",
    type: "Kolaborasi lintas unit/instansi",
    q: "Sehari sebelum bazar UMKM bersama, satu instansi tiba-tiba menuntut pembagian hasil yang lebih besar dari yang sudah disepakati, dan mengancam menarik diri bila tidak dipenuhi. Sikap Anda adalah…",
    options: [
      "Membatalkan bazar itu karena pembagian hasilnya dipersoalkan",
      "Membiarkan instansi itu mengambil bagian lebih besar tanpa dibicarakan",
      "Mengajak instansi itu berunding ulang, merujuk kesepakatan awal, dan mencatat pembagian hasil yang disepakati bersama",
      "Menerima tuntutan pembagian yang lebih besar itu, agar bazar tetap berjalan dan warga tidak kecewa meski pembagiannya tidak adil",
      "Mengusir instansi itu dari kepanitiaan bazar"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 3,
      C: 5,
      D: 4,
      E: 1
    },
    image: null,
    boss: 4
  },
  {
    id: 277,
    code: "WB4-07",
    cat: "Jejaring Kerja",
    type: "Konflik dalam tim",
    q: "Perselisihan dua rekan satu tim sudah memengaruhi pelayanan kepada warga dan salah satu dari mereka mengancam akan mengadu ke media. Sikap Anda adalah…",
    options: [
      "Memfasilitasi mediasi segera, mendengarkan kedua belah pihak, menyepakati penyelesaian dan aturan komunikasi bersama, mendokumentasikan kesepakatan itu",
      "Membiarkan mereka menyelesaikan sendiri perselisihan itu",
      "Memihak salah satu rekan yang Anda anggap benar",
      "Meminta atasan yang menyelesaikan perselisihan itu tanpa mediasi lebih dulu",
      "Memfasilitasi mediasi dan menyepakati penyelesaian bersama tanpa mendokumentasikannya, tanpa memberi tahu pihak yang terdampak tentang perubahan yang sudah terjadi itu"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 1,
      D: 3,
      E: 4
    },
    image: null,
    boss: 4
  },
  {
    id: 278,
    code: "WB4-08",
    cat: "Jejaring Kerja",
    type: "Berbagi informasi & membantu rekan",
    q: "Perubahan prosedur hanya disampaikan lisan oleh atasan, tetapi isinya bertentangan dengan aturan tertulis yang berlaku, dan rekan di shift lain sudah melayani warga dengan cara baru yang salah. Sikap Anda adalah…",
    options: [
      "Menyalahkan rekan yang sudah melayani warga dengan cara yang salah",
      "Membiarkan prosedur lisan itu berjalan meski bertentangan dengan aturan tertulis",
      "Menyebarkan prosedur lisan itu ke semua shift tanpa memeriksa aturannya",
      "Meminta konfirmasi tertulis dari atasan, tetapi tetap melayani warga dengan cara baru yang salah sambil menunggu konfirmasi itu",
      "Meminta konfirmasi tertulis dari atasan, membantu memperbaiki layanan yang salah, dan melaporkan ketidaksesuaian itu sesuai prosedur"
    ],
    k: "E",
    scores: {
      A: 2,
      B: 3,
      C: 1,
      D: 4,
      E: 5
    },
    image: null,
    boss: 4
  },
  {
    id: 279,
    code: "WB4-09",
    cat: "Jejaring Kerja",
    type: "Membangun relasi baru",
    q: "Kantor Anda membutuhkan kerja sama dengan dua instansi sekaligus yang belum pernah berhubungan dengan kantor Anda untuk program besar tahun ini. Sikap Anda adalah…",
    options: [
      "Meminta atasan mengurus semuanya tanpa Anda terlibat",
      "Mempelajari kebutuhan kedua instansi itu, mengusulkan pertemuan bersama, menyepakati peran dan jadwal masing-masing, dan membuat kesepakatan tertulis yang saling menguntungkan",
      "Menjalankan program itu sendiri tanpa dukungan kedua instansi",
      "Mempelajari kedua instansi itu lalu mengusulkan pertemuan bersama, tetapi menunda bagian tersulitnya sampai tenggat hampir habis dan baru dikerjakan terburu-buru",
      "Mengirim surat permintaan kerja sama ke kedua instansi tanpa perkenalan"
    ],
    k: "B",
    scores: {
      A: 2,
      B: 5,
      C: 1,
      D: 4,
      E: 3
    },
    image: null,
    boss: 4
  },
  {
    id: 280,
    code: "WB4-10",
    cat: "Jejaring Kerja",
    type: "Kolaborasi lintas unit/instansi",
    q: "Unit lain meminta data dari tim Anda, tetapi data itu belum final dan tenggat unit lain itu sudah sangat dekat. Sikap Anda adalah…",
    options: [
      "Menolak memberi data itu karena belum final",
      "Mengirim data yang belum final itu tanpa catatan apa pun",
      "Membiarkan permintaan unit lain itu tanpa balasan",
      "Menjelaskan status data itu dan mengirim data sementara dengan catatan, tanpa menyiapkan rencana cadangan bila langkah itu gagal",
      "Menjelaskan status data itu dengan jujur, mengirim data sementara dengan catatan yang jelas, menyepakati jadwal pengiriman data final"
    ],
    k: "E",
    scores: {
      A: 3,
      B: 2,
      C: 1,
      D: 4,
      E: 5
    },
    image: null,
    boss: 4
  },
  {
    id: 281,
    code: "WB4-11",
    cat: "Sosial Budaya",
    type: "Perbedaan pendapat",
    q: "Musyawarah pembangunan sudah disetujui mayoritas warga, tetapi kelompok minoritas menolak karena lahannya terdampak dan mereka merasa tidak pernah didengar. Sikap Anda adalah…",
    options: [
      "Mendengarkan keberatan kelompok minoritas, mencari solusi ganti rugi atau penyesuaian lokasi, dan melibatkan mediator bila diperlukan",
      "Memutuskan pembangunan itu berdasarkan suara terbanyak tanpa mendengar keberatan minoritas",
      "Menunda pembangunan itu tanpa batas waktu yang jelas",
      "Memutuskan pembangunan itu berdasarkan suara terbanyak, karena menurut Anda keputusan mayoritas adalah keputusan musyawarah yang sah dan mengikat",
      "Membiarkan kedua kelompok itu berselisih tanpa penengah"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 3,
      D: 4,
      E: 1
    },
    image: null,
    boss: 4
  },
  {
    id: 282,
    code: "WB4-12",
    cat: "Sosial Budaya",
    type: "Toleransi & keragaman",
    q: "Di lingkungan Anda, ada warga yang melarang anaknya bermain dengan anak dari suku lain. Sikap Anda adalah…",
    options: [
      "Mengajak warga itu bicara dengan santun, menjelaskan nilai keberagaman kepada anak-anak, melibatkan tokoh masyarakat",
      "Membiarkannya karena itu urusan keluarga tersebut",
      "Mengkritik warga itu di depan warga lain",
      "Mengajak warga itu bicara dengan santun dan menjelaskan nilai keberagaman, tetapi tanpa mencatat langkah itu sehingga sulit dilacak bila ada pihak yang menanyakan kemudian",
      "Ikut melarang anak-anak bermain bersama"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 3,
      C: 2,
      D: 4,
      E: 1
    },
    image: null,
    boss: 4
  },
  {
    id: 283,
    code: "WB4-13",
    cat: "Sosial Budaya",
    type: "Perbedaan pendapat",
    q: "Di unit Anda, rekan-rekan berbeda pendapat soal pembagian jadwal piket akhir pekan: sebagian ingin jadwal dirotasi secara merata, sebagian ingin jadwal tetap berdasarkan senioritas. Perdebatan itu mulai mengganggu kerja sama tim. Sikap Anda adalah…",
    options: [
      "Mengajak semua pihak duduk bersama, mendengarkan alasan masing-masing, lalu menyusun jadwal baru yang disepakati bersama dan meninjau hasilnya setelah sebulan",
      "Memutuskan jadwal itu sendiri berdasarkan suara terbanyak tanpa mendengar alasan tiap pihak",
      "Memaksakan jadwal berdasarkan senioritas karena itu sudah tradisi",
      "Mengusulkan jadwal rotasi merata kepada atasan agar diputuskan dari atas, tanpa memberi tahu atasan tentang langkah yang sudah diambil itu",
      "Membiarkan perdebatan itu sampai mereka lelah sendiri"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 1,
      D: 4,
      E: 3
    },
    image: null,
    boss: 4
  },
  {
    id: 284,
    code: "WB4-14",
    cat: "Sosial Budaya",
    type: "Penempatan baru & adaptasi lingkungan",
    q: "Anda ditempatkan di daerah yang adatnya sangat berbeda dan sebagian warga meragukan kemampuan Anda hanya karena Anda pendatang. Sikap Anda adalah…",
    options: [
      "Menarik diri dari pergaulan karena merasa tidak diterima",
      "Meminta pindah kembali ke daerah asal Anda",
      "Tetap bekerja dengan cara Anda sendiri tanpa memperhatikan adat setempat",
      "Menghormati adat setempat dan menunjukkan kinerja Anda melalui tindakan nyata, tetapi tidak menindaklanjuti hasilnya setelah langkah pertama itu selesai dikerjakan",
      "Menghormati adat setempat, menunjukkan kinerja dan kepedulian melalui tindakan nyata, membangun hubungan baik dengan tokoh masyarakat, dan bersabar serta konsisten dalam bekerja"
    ],
    k: "E",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: 4
  },
  {
    id: 285,
    code: "WB4-15",
    cat: "Sosial Budaya",
    type: "Perbedaan pendapat",
    q: "Rapat RT soal iuran memanas karena satu kubu menuduh bendahara menggelapkan dana, tetapi tuduhan itu belum disertai bukti apa pun. Sikap Anda adalah…",
    options: [
      "Membiarkan tuduhan itu menyebar tanpa klarifikasi",
      "Menenangkan rapat, mengusulkan pemeriksaan catatan keuangan secara terbuka, dan memusyawarahkan hasilnya bersama warga",
      "Ikut menuduh bendahara itu agar diterima kubu yang menuduh",
      "Menenangkan rapat dan mengusulkan pemeriksaan catatan keuangan, tetapi langsung mengganti bendahara itu sementara pemeriksaan berjalan, agar warga tenang",
      "Membubarkan rapat tanpa keputusan apa pun"
    ],
    k: "B",
    scores: {
      A: 3,
      B: 5,
      C: 1,
      D: 4,
      E: 2
    },
    image: null,
    boss: 4
  },
  {
    id: 286,
    code: "WB4-16",
    cat: "Adaptasi TIK",
    type: "Etika digital & keamanan data",
    q: "Seorang rekan menyimpan salinan data warga di layanan penyimpanan awan pribadinya agar bisa bekerja dari rumah, dan ia membagikan tautannya ke rekan lain tanpa kata sandi. Sikap Anda adalah…",
    options: [
      "Membiarkan rekan itu memakai penyimpanan awan pribadi karena memudahkan kerja dari rumah",
      "Mengingatkan rekan itu tentang risiko kebocoran data, mengarahkannya kembali ke sistem resmi kantor, dan melaporkan praktik itu ke atasan",
      "Ikut memakai tautan itu karena memang memudahkan",
      "Mengingatkan rekan itu secara pribadi saja tanpa melapor, agar ia memperbaiki sendiri",
      "Meminta rekan itu berhenti memakai penyimpanan awan tanpa menjelaskan alasannya"
    ],
    k: "B",
    scores: {
      A: 3,
      B: 5,
      C: 1,
      D: 4,
      E: 2
    },
    image: null,
    boss: 4
  },
  {
    id: 287,
    code: "WB4-17",
    cat: "Adaptasi TIK",
    type: "Etika digital & keamanan data",
    q: "Kabar bohong tentang instansi Anda menyebar luas di media sosial dan warga mulai resah serta mempertanyakan pelayanan Anda. Sikap Anda adalah…",
    options: [
      "Memverifikasi fakta sebenarnya, menyusun klarifikasi resmi bersama humas, menyebarkannya melalui kanal resmi instansi, dan melaporkan akun penyebar kabar bohong itu",
      "Mengabaikan kabar bohong itu begitu saja",
      "Ikut menyebarkan kabar bohong itu agar terlihat peduli",
      "Membalas kabar bohong itu dengan emosi di media sosial",
      "Memverifikasi fakta dan menyusun klarifikasi resmi bersama humas, tanpa memastikan pihak lain benar-benar memahami penjelasan yang sudah diberikan itu"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 1,
      D: 3,
      E: 4
    },
    image: null,
    boss: 4
  },
  {
    id: 288,
    code: "WB4-18",
    cat: "Adaptasi TIK",
    type: "Memanfaatkan TIK untuk tugas",
    q: "Anda menemukan aplikasi yang bisa mengotomatisasi rekap laporan jauh lebih cepat, tetapi aplikasi itu menyimpan data di server luar negeri dan belum pernah diperiksa keamanannya oleh IT. Sikap Anda adalah…",
    options: [
      "Langsung memakai aplikasi itu untuk rekap resmi tanpa uji coba",
      "Mengabaikan aplikasi itu karena cara lama sudah cukup",
      "Menguji aplikasi itu pada data contoh, berkonsultasi dengan IT soal keamanan datanya, dan memakainya hanya bila sudah disetujui",
      "Menguji aplikasi itu pada data contoh dan berkonsultasi dengan IT, tetapi memakainya untuk rekap resmi sebelum IT menyetujui, karena tenggat sudah dekat",
      "Menyebarkan aplikasi itu ke seluruh tim tanpa memeriksa keamanannya"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 3,
      C: 5,
      D: 4,
      E: 1
    },
    image: null,
    boss: 4
  },
  {
    id: 289,
    code: "WB4-19",
    cat: "Adaptasi TIK",
    type: "Membantu rekan gagap teknologi",
    q: "Seorang rekan senior kesulitan memakai sistem baru karena huruf di layar terlalu kecil baginya, sehingga ia sering salah membaca menu. Sikap Anda adalah…",
    options: [
      "Menyuruh rekan itu bertanya ke petugas IT",
      "Memasukkan data itu untuk rekan tersebut tanpa menjelaskan caranya",
      "Menunjukkan cara memperbesar tampilan dan memandunya memakai sistem itu, tetapi mengerjakannya sendiri tanpa melibatkan pihak terkait yang seharusnya dilibatkan sejak awal",
      "Mendengarkan kendalanya, menunjukkan cara memperbesar tampilan dan memakai sistem itu dengan aman, memandunya langkah demi langkah, memberinya catatan singkat, dan mendampingi sampai ia percaya diri",
      "Membiarkan rekan itu memakai cara lama"
    ],
    k: "D",
    scores: {
      A: 2,
      B: 3,
      C: 4,
      D: 5,
      E: 1
    },
    image: null,
    boss: 4
  },
  {
    id: 290,
    code: "WB4-20",
    cat: "Adaptasi TIK",
    type: "Etika digital & keamanan data",
    q: "Anda menerima surel yang mengatasnamakan atasan Anda dan meminta Anda mentransfer sejumlah dana ke rekening tertentu. Sikap Anda adalah…",
    options: [
      "Mentransfer dana itu karena surel itu mengatasnamakan atasan",
      "Mengabaikan surel itu begitu saja tanpa melapor",
      "Meneruskan surel itu ke rekan lain agar waspada",
      "Memverifikasi surel itu kepada atasan melalui jalur resmi, tidak mentransfer dana apa pun, dan melaporkan surel mencurigakan itu ke atasan dan bagian IT",
      "Memverifikasi surel itu kepada atasan dan tidak mentransfer dana, tanpa memeriksa kembali hasilnya sebelum langkah itu dianggap selesai dan dilaporkan"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 3,
      C: 2,
      D: 5,
      E: 4
    },
    image: null,
    boss: 4
  },
  {
    id: 291,
    code: "WB4-21",
    cat: "Profesionalisme",
    type: "Komitmen, deadline & prioritas",
    q: "Atasan meminta dua laporan sekaligus yang keduanya mendesak, tetapi salah satunya membutuhkan data dari unit lain yang belum membalas, dan atasan sedang rapat sehingga tidak bisa dihubungi. Sikap Anda adalah…",
    options: [
      "Mengerjakan kedua laporan itu seadanya tanpa memperhatikan kualitas",
      "Mengarang data yang belum tersedia agar laporan terlihat lengkap",
      "Menunggu atasan selesai rapat tanpa mengerjakan apa pun",
      "Menghubungi unit pemilik data, mengerjakan laporan yang sudah lengkap dulu, dan menyampaikan kekurangan data itu secara lisan saja kepada atasan, tanpa menyatakannya secara tertulis",
      "Menghubungi unit pemilik data, mengerjakan laporan yang sudah lengkap dulu, dan menyampaikan kondisi kekurangan data itu secara tertulis"
    ],
    k: "E",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: 4
  },
  {
    id: 292,
    code: "WB4-22",
    cat: "Profesionalisme",
    type: "Rahasia jabatan & etika profesi",
    q: "Seorang rekan dari unit lain meminta Anda menunjukkan nilai evaluasi kinerja pegawai di unit Anda, dengan alasan ingin membandingkan dengan unitnya. Sikap Anda adalah…",
    options: [
      "Menunjukkan sebagian nilai saja karena ia rekan sendiri",
      "Memberikan seluruh daftar nilai itu karena ia sesama pegawai",
      "Menolak dengan sopan tanpa menjelaskan alasan kerahasiaannya",
      "Menolak dengan sopan dan menjelaskan bahwa nilai evaluasi bersifat rahasia jabatan, tetapi tanpa mendokumentasikan kesepakatan itu",
      "Menolak dengan sopan, menjelaskan bahwa nilai evaluasi bersifat rahasia jabatan dan membocorkannya merugikan pegawai yang dinilai, lalu menawarkan data agregat tanpa nama bila aturan membolehkan"
    ],
    k: "E",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 4,
      E: 5
    },
    image: null,
    boss: 4
  },
  {
    id: 293,
    code: "WB4-23",
    cat: "Profesionalisme",
    type: "Pengembangan kompetensi diri",
    q: "Pelatihan penting yang sangat relevan dengan tugas Anda bentrok dengan tugas mendesak yang hanya Anda yang bisa mengerjakannya, dan pelatihan itu tidak diulang tahun ini. Sikap Anda adalah…",
    options: [
      "Mengikuti pelatihan itu dan menunda tugas mendesak tanpa memberi tahu siapa pun",
      "Menolak pelatihan itu tanpa mempertimbangkan manfaatnya",
      "Mengomunikasikan bentrokan itu ke atasan, mengatur pengganti atau penjadwalan tugas, dan tetap belajar mandiri bila pelatihan tertunda",
      "Mengikuti pelatihan itu dan mengatur agar tugas mendesak dikerjakan rekan lain, tetapi tanpa memberi tahu atasan tentang bentrokan itu",
      "Mengikuti pelatihan itu hanya demi sertifikat keikutsertaan"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 3,
      C: 5,
      D: 4,
      E: 1
    },
    image: null,
    boss: 4
  },
  {
    id: 294,
    code: "WB4-24",
    cat: "Profesionalisme",
    type: "Akuntabilitas & integritas (whistleblowing)",
    q: "Anda menemukan bukti bahwa seorang rekan dekat memanipulasi data penerima bantuan agar kerabatnya mendapat bantuan, dan rekan itu mengancam akan membalas bila Anda melaporkannya. Sikap Anda adalah…",
    options: [
      "Menceritakan temuan itu ke rekan kerja lain tanpa melapor resmi",
      "Mengumpulkan bukti dengan hati-hati dan melaporkannya lewat jalur resmi yang melindungi pelapor, sambil menjaga kerahasiaan",
      "Ikut memanipulasi data agar Anda juga mendapat keuntungan",
      "Mengumpulkan bukti dengan hati-hati dan mengingatkan rekan itu secara pribadi, tetapi menunda pelaporan sampai ancaman balasannya mereda",
      "Membiarkannya karena takut bermasalah dengan rekan itu"
    ],
    k: "B",
    scores: {
      A: 3,
      B: 5,
      C: 1,
      D: 4,
      E: 2
    },
    image: null,
    boss: 4
  },
  {
    id: 295,
    code: "WB4-25",
    cat: "Profesionalisme",
    type: "Komitmen, deadline & prioritas",
    q: "Tugas menumpuk menjelang akhir tahun anggaran dan beberapa tenggat jatuh pada hari yang sama. Sikap Anda adalah…",
    options: [
      "Menyusun prioritas bersama atasan, mengomunikasikan progres secara berkala, mengerjakan tugas sesuai kesepakatan dengan kualitas terjaga, dan meminta dukungan tim bila diperlukan",
      "Mengerjakan tugas yang paling mudah dulu dan menunda yang sulit",
      "Menyusun prioritas bersama atasan dan mengerjakan tugas sesuai kesepakatan, tanpa memberi tahu pihak yang terdampak tentang perubahan yang sudah terjadi itu",
      "Membiarkan beberapa tugas tidak selesai tanpa memberi tahu siapa pun",
      "Menerima semua tugas lalu mengerjakannya seadanya"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 3,
      C: 4,
      D: 1,
      E: 2
    },
    image: null,
    boss: 4
  },
  {
    id: 296,
    code: "WB4-26",
    cat: "Anti Radikalisme",
    type: "Melaporkan paham radikal sesuai prosedur",
    q: "Anda menemukan grup percakapan daring berisi pegawai yang aktif menyebarkan ajaran yang menolak Pancasila, dan anggotanya termasuk seorang senior yang sangat dihormati. Sikap Anda adalah…",
    options: [
      "Membiarkannya karena itu urusan anggota grup tersebut",
      "Tidak ikut menyebarkan, mengumpulkan bukti dengan hati-hati, dan melaporkan grup itu sesuai prosedur kepada pihak berwenang",
      "Ikut menyebarkan ajaran itu agar tidak dikucilkan",
      "Keluar dari grup itu secara diam-diam agar Anda tidak terseret, tanpa melaporkan atau mengingatkan siapa pun tentang ajaran yang disebarkan",
      "Mengingatkan anggota grup itu saja tanpa mengumpulkan bukti atau melapor"
    ],
    k: "B",
    scores: {
      A: 2,
      B: 5,
      C: 1,
      D: 4,
      E: 3
    },
    image: null,
    boss: 4
  },
  {
    id: 297,
    code: "WB4-27",
    cat: "Anti Radikalisme",
    type: "Menolak ajakan paham radikal",
    q: "Seorang tokoh masyarakat mengajak Anda mendukung gerakan yang menolak Pancasila, dengan iming-iming dukungan untuk karier Anda. Sikap Anda adalah…",
    options: [
      "Mendukung gerakan itu karena iming-iming karier",
      "Mendengarkan ajakan itu tanpa menolak dan tanpa melapor",
      "Menolak ajakan itu dengan santun dan menjelaskan kesetiaan kepada Pancasila, tetapi menunda bagian tersulitnya sampai tenggat hampir habis dan baru dikerjakan terburu-buru",
      "Menolak ajakan itu dengan santun namun tegas, menjelaskan kesetiaan aparatur kepada Pancasila",
      "Menolak dengan alasan sedang sibuk tanpa penjelasan"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 2,
      C: 4,
      D: 5,
      E: 3
    },
    image: null,
    boss: 4
  },
  {
    id: 298,
    code: "WB4-28",
    cat: "Anti Radikalisme",
    type: "Menolak kekerasan & pemaksaan kehendak",
    q: "Sekelompok orang memaksa pedagang yang berbeda keyakinan menutup warungnya di pasar, massa makin banyak dan aparat belum tiba. Sikap Anda adalah…",
    options: [
      "Membiarkannya karena bukan urusan Anda",
      "Ikut memaksa pedagang itu menutup warungnya",
      "Menjauhi pasar itu agar tidak terseret",
      "Tidak ikut memaksa, melindungi pedagang itu, menenangkan massa, dan segera menghubungi aparat yang berwenang",
      "Menjanjikan kepada massa bahwa warung itu akan tutup sementara hari ini, agar mereka bubar dengan tenang meski pedagang itu tidak bersalah"
    ],
    k: "D",
    scores: {
      A: 2,
      B: 1,
      C: 3,
      D: 5,
      E: 4
    },
    image: null,
    boss: 4
  },
  {
    id: 299,
    code: "WB4-29",
    cat: "Anti Radikalisme",
    type: "Menolak kekerasan & pemaksaan kehendak",
    q: "Seseorang mengancam akan merusak rumah ibadah kelompok lain di lingkungan Anda. Sikap Anda adalah…",
    options: [
      "Menyebarkan ancaman itu ke media sosial agar viral",
      "Tidak ikut ancaman itu dan melaporkan kepada ketua RT, tanpa menyiapkan rencana cadangan bila langkah itu gagal",
      "Tidak ikut ancaman itu, menenangkan warga sekitar, dan segera melaporkan ancaman itu kepada aparat yang berwenang",
      "Ikut mengancam karena takut diancam balik",
      "Membiarkannya karena bukan urusan Anda"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 4,
      C: 5,
      D: 1,
      E: 3
    },
    image: null,
    boss: 4
  },
  {
    id: 300,
    code: "WB4-30",
    cat: "Anti Radikalisme",
    type: "Melaporkan paham radikal sesuai prosedur",
    q: "Anda mendengar kabar tentang rencana aksi kekerasan di lingkungan Anda besok, tetapi sumber kabar itu tidak bisa dipastikan kebenarannya. Sikap Anda adalah…",
    options: [
      "Membiarkannya karena informasi itu belum pasti benar",
      "Ikut serta dalam rencana itu karena takut diancam",
      "Menyebarkan rencana itu ke media sosial agar viral",
      "Memverifikasi informasi itu sebisa mungkin, lalu segera melaporkannya kepada aparat berwenang dan menenangkan warga sekitar",
      "Menyebarkan kabar rencana itu ke seluruh warga agar mereka waspada, meski kebenarannya belum terverifikasi dan bisa menimbulkan kepanikan"
    ],
    k: "D",
    scores: {
      A: 3,
      B: 1,
      C: 2,
      D: 5,
      E: 4
    },
    image: null,
    boss: 4
  },
  {
    id: 301,
    code: "WB5-01",
    cat: "Pelayanan Publik",
    type: "Warga marah & antrean panjang",
    q: "Seorang warga marah besar karena berkasnya hilang di kantor Anda dan ia membutuhkan dokumen itu besok untuk pengajuan beasiswa anaknya, padahal petugas yang menghilangkan berkas itu sudah pindah tugas. Sikap Anda adalah…",
    options: [
      "Menelusuri berkas itu, membantu membuat dokumen pengganti sesuai prosedur, dan melaporkan kehilangan itu agar sistem arsip diperbaiki",
      "Menyuruh warga itu menemui petugas yang menangani berkasnya",
      "Mengabaikan warga itu karena kehilangan berkas bukan kesalahan Anda",
      "Menelusuri berkas itu dan membantu membuat dokumen pengganti sesuai prosedur, tetapi tanpa melaporkan kehilangan itu agar sistem arsip tidak dipersoalkan",
      "Meminta warga itu mengurus ulang semua dokumennya dari awal"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 3,
      D: 4,
      E: 1
    },
    image: null,
    boss: 5
  },
  {
    id: 302,
    code: "WB5-02",
    cat: "Pelayanan Publik",
    type: "Berkas/syarat tidak lengkap",
    q: "Seorang warga mengurus dokumen untuk anaknya yang sakit kritis, tetapi satu syarat tidak bisa dipenuhi hari ini karena instansi penerbitnya sedang tutup, dan rumah sakit membutuhkan dokumen itu malam ini. Sikap Anda adalah…",
    options: [
      "Menolak berkasnya tanpa penjelasan karena syarat tidak lengkap",
      "Memproses dokumen itu tanpa syarat yang kurang agar warga tidak kecewa",
      "Menyuruh warga kembali setelah instansi penerbit buka tanpa solusi lain",
      "Memberi surat keterangan sementara yang sah, membantu menghubungi instansi terkait, dan menindaklanjutinya sampai dokumen lengkap",
      "Memberi surat keterangan sementara yang sah dan membantu menghubungi instansi terkait, tetapi tidak menindaklanjutinya sampai dokumen lengkap karena kondisi sudah darurat"
    ],
    k: "D",
    scores: {
      A: 3,
      B: 1,
      C: 2,
      D: 5,
      E: 4
    },
    image: null,
    boss: 5
  },
  {
    id: 303,
    code: "WB5-03",
    cat: "Pelayanan Publik",
    type: "Menolak imbalan (tanpa pamrih)",
    q: "Seorang pejabat daerah menawarkan 'uang terima kasih' yang besar setelah Anda melayaninya, dan ketika Anda menolak ia mengancam akan melaporkan Anda ke atasan dengan tuduhan mempersulit urusannya. Sikap Anda adalah…",
    options: [
      "Menerima uang itu karena layanan sudah selesai sehingga tidak memengaruhi keputusan",
      "Menolak dengan kasar agar pejabat itu tidak mengulangi tawarannya",
      "Menerima uang itu diam-diam dan tidak menceritakannya kepada siapa pun, karena menolaknya berisiko membuat pejabat itu membalas dengan tuduhan palsu",
      "Menerima uang itu lalu membagikannya kepada rekan satu loket",
      "Menolak dengan sopan, menjelaskan aturan gratifikasi, dan melaporkan tawaran serta ancaman itu sesuai prosedur"
    ],
    k: "E",
    scores: {
      A: 2,
      B: 3,
      C: 4,
      D: 1,
      E: 5
    },
    image: null,
    boss: 5
  },
  {
    id: 304,
    code: "WB5-04",
    cat: "Pelayanan Publik",
    type: "Sistem error & perbaikan layanan",
    q: "Sistem pelayanan down total di hari terakhir pendaftaran bantuan dan ratusan warga sudah antre sejak pagi. Sikap Anda adalah…",
    options: [
      "Menenangkan warga, membuat pendataan manual sementara, dan memberi nomor antrean serta jadwal susulan, tetapi tanpa mencatat langkah itu sehingga sulit dilacak bila ada pihak yang menanyakan kemudian",
      "Menutup layanan sampai sistem kembali normal",
      "Meminta semua warga pulang dan mendaftar ulang besok",
      "Melayani warga secara manual tanpa pencatatan apa pun agar cepat",
      "Menenangkan warga, menjelaskan kendala dengan sopan, membuat pendataan manual sementara sesuai prosedur darurat, memberi nomor antrean dan jadwal susulan, melaporkan gangguan itu ke atasan dan IT, menghubungi warga begitu sistem pulih"
    ],
    k: "E",
    scores: {
      A: 4,
      B: 1,
      C: 3,
      D: 2,
      E: 5
    },
    image: null,
    boss: 5
  },
  {
    id: 305,
    code: "WB5-05",
    cat: "Pelayanan Publik",
    type: "Warga marah & antrean panjang",
    q: "Seorang warga marah karena merasa dipersulit: syarat berkasnya belum lengkap dan ia sudah tiga kali datang ke kantor Anda. Sikap Anda adalah…",
    options: [
      "Mendengarkan keluhannya dengan sabar, meminta maaf atas ketidaknyamanan, menjelaskan syarat dengan bahasa sederhana dan daftar tertulis, membantu memeriksa kelengkapan berkas di tempat",
      "Mendengarkan keluhannya dan menjelaskan syarat dengan daftar tertulis, tanpa memberi tahu atasan tentang langkah yang sudah diambil itu",
      "Mengabaikan warga itu karena ia sudah tiga kali datang tanpa syarat lengkap",
      "Memproses berkasnya saja agar warga itu tidak marah lagi",
      "Menyuruh warga melengkapi syaratnya tanpa penjelasan lebih lanjut"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 4,
      C: 1,
      D: 2,
      E: 3
    },
    image: null,
    boss: 5
  },
  {
    id: 306,
    code: "WB5-06",
    cat: "Jejaring Kerja",
    type: "Konflik dalam tim",
    q: "Seorang rekan mengklaim hasil kerja seorang junior sebagai hasil kerjanya sendiri di depan atasan, atasan sudah memuji rekan itu, dan junior itu takut bersuara. Sikap Anda adalah…",
    options: [
      "Memihak rekan yang mengklaim hasil kerja itu karena ia lebih senior",
      "Memfasilitasi diskusi keduanya, meluruskan kontribusi masing-masing secara adil, dan menyepakati aturan pengakuan kerja bersama",
      "Membiarkan mereka menyelesaikan sendiri perselisihan itu",
      "Memberi tahu atasan secara diam-diam tentang siapa pemilik asli hasil kerja itu, tanpa melibatkan junior tersebut dalam klarifikasi di depan tim",
      "Meminta atasan yang memutuskan siapa yang berhak atas hasil kerja itu"
    ],
    k: "B",
    scores: {
      A: 3,
      B: 5,
      C: 1,
      D: 4,
      E: 2
    },
    image: null,
    boss: 5
  },
  {
    id: 307,
    code: "WB5-07",
    cat: "Jejaring Kerja",
    type: "Kolaborasi lintas unit/instansi",
    q: "Program bersama tiga instansi terancam gagal karena satu instansi menarik diri mendadak menjelang pelaksanaan. Sikap Anda adalah…",
    options: [
      "Menjalankan program itu dengan dua instansi yang tersisa tanpa pemberitahuan",
      "Menghubungi instansi itu segera, mendengarkan alasannya, mencari solusi bersama, menyesuaikan rencana dengan dua instansi lainnya, mengomunikasikan perubahan itu ke semua pihak",
      "Menghubungi instansi itu dan mencari solusi bersama lalu menyesuaikan rencana, tetapi tidak menindaklanjuti hasilnya setelah langkah pertama itu selesai dikerjakan",
      "Melaporkan instansi itu ke atasan tanpa menghubungi mereka lebih dulu",
      "Membiarkan program itu gagal karena satu instansi menarik diri"
    ],
    k: "B",
    scores: {
      A: 3,
      B: 5,
      C: 4,
      D: 2,
      E: 1
    },
    image: null,
    boss: 5
  },
  {
    id: 308,
    code: "WB5-08",
    cat: "Jejaring Kerja",
    type: "Berbagi informasi & membantu rekan",
    q: "Informasi penting bocor ke pihak luar karena seorang rekan membagikannya di grup yang salah, anggota tim mulai saling menyalahkan, dan kebocoran itu merugikan warga. Sikap Anda adalah…",
    options: [
      "Membiarkan tim saling menyalahkan karena kebocoran sudah terjadi",
      "Ikut menyebarkan informasi itu ke pihak luar",
      "Menenangkan tim, menelusuri sumber kebocoran, memperbaiki dampaknya, dan menyepakati aturan berbagi informasi yang jelas",
      "Menenangkan tim dan langsung menyepakati aturan berbagi informasi yang baru, tanpa menelusuri siapa yang membocorkan informasi itu",
      "Menyalahkan rekan yang membagikan informasi itu di depan tim"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 3,
      C: 5,
      D: 4,
      E: 1
    },
    image: null,
    boss: 5
  },
  {
    id: 309,
    code: "WB5-09",
    cat: "Jejaring Kerja",
    type: "Membangun relasi baru",
    q: "Kantor Anda ingin bekerja sama dengan perusahaan swasta untuk program besar, tetapi ada kekhawatiran kerja sama itu menimbulkan konflik kepentingan. Sikap Anda adalah…",
    options: [
      "Meminta atasan mengurus semuanya tanpa Anda terlibat",
      "Menjalankan kerja sama itu tanpa melibatkan atasan dan bagian hukum",
      "Mempelajari perusahaan itu dan aturan kerja sama yang berlaku, mengusulkan pertemuan dengan transparansi, melibatkan atasan dan bagian hukum, lalu menyepakati kerja sama yang sesuai aturan dan saling menguntungkan",
      "Mempelajari perusahaan itu lalu mengusulkan pertemuan untuk membahas kerja sama, tanpa memastikan pihak lain benar-benar memahami penjelasan yang sudah diberikan itu",
      "Menolak kerja sama itu tanpa mempelajari perusahaannya"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 3,
      C: 5,
      D: 4,
      E: 1
    },
    image: null,
    boss: 5
  },
  {
    id: 310,
    code: "WB5-10",
    cat: "Jejaring Kerja",
    type: "Konflik dalam tim",
    q: "Seorang senior menolak ide junior di depan umum dengan kata-kata yang merendahkan, junior itu hampir menangis, dan seluruh tim diam menyaksikan. Sikap Anda adalah…",
    options: [
      "Memfasilitasi diskusi keduanya, menghargai pengalaman senior dan ide junior, menyepakati uji coba, dan memantau hasilnya bersama",
      "Membiarkan senior itu merendahkan junior di depan tim",
      "Memihak senior itu karena ia lebih berpengalaman",
      "Membela junior itu di depan seluruh tim dan menegur senior itu secara terbuka, agar junior merasa dilindungi meski senior merasa dipermalukan",
      "Menyuruh junior itu menerima saja keputusan senior"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 3,
      D: 4,
      E: 1
    },
    image: null,
    boss: 5
  },
  {
    id: 311,
    code: "WB5-11",
    cat: "Sosial Budaya",
    type: "Penempatan baru & adaptasi lingkungan",
    q: "Anda ditempatkan di daerah yang sedang menjalankan ritual adat besar selama sepekan, dan pada saat yang sama tenggat laporan penting dari pusat jatuh di tengah ritual itu. Sebagian warga berharap Anda ikut serta dalam ritual, sementara atasan Anda menuntut laporan tepat waktu. Sikap Anda adalah…",
    options: [
      "Mengatur pekerjaan laporan lebih awal dan meminta izin mengikuti sebagian ritual, lalu menjelaskan kepada warga dan atasan bagaimana Anda membagi waktu agar keduanya tetap berjalan",
      "Mengabaikan ritual itu dan fokus menyelesaikan laporan saja",
      "Menunda laporan tanpa memberi tahu atasan demi mengikuti ritual",
      "Mengikuti ritual itu sambil mengerjakan laporan di sela-sela waktu luang, tetapi mengerjakannya sendiri tanpa melibatkan pihak terkait yang seharusnya dilibatkan sejak awal",
      "Meminta rekan lain menggantikan Anda dalam ritual agar Anda bisa fokus pada laporan"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 1,
      D: 4,
      E: 3
    },
    image: null,
    boss: 5
  },
  {
    id: 312,
    code: "WB5-12",
    cat: "Sosial Budaya",
    type: "Perbedaan pendapat",
    q: "Penutupan jalan untuk tradisi tahunan diprotes pedagang yang mata pencahariannya bergantung pada jalan itu, sementara panitia tradisi mengancam tetap menutup jalan dan pedagang mengancam berjualan di tengah jalan. Sikap Anda adalah…",
    options: [
      "Membiarkan kedua pihak menyelesaikan sendiri perselisihannya",
      "Memfasilitasi musyawarah kedua pihak, merangkum titik temu, dan menyepakati jadwal penutupan yang mengakomodasi pedagang dan tradisi",
      "Memutuskan penutupan jalan itu sepihak tanpa musyawarah",
      "Memfasilitasi musyawarah kedua pihak dan menyepakati jadwal penutupan, tetapi tanpa merangkum titik temu secara tertulis sehingga kesepakatan itu mudah dilupakan",
      "Membatalkan tradisi itu agar pedagang tidak dirugikan"
    ],
    k: "B",
    scores: {
      A: 3,
      B: 5,
      C: 1,
      D: 4,
      E: 2
    },
    image: null,
    boss: 5
  },
  {
    id: 313,
    code: "WB5-13",
    cat: "Sosial Budaya",
    type: "Toleransi & keragaman",
    q: "Sebagian warga menolak rencana pembangunan rumah ibadah kelompok minoritas di lingkungan Anda dengan alasan akan mengganggu ketertiban. Sikap Anda adalah…",
    options: [
      "Mengingatkan warga dengan santun dan memfasilitasi dialog antara kedua belah pihak, tanpa memeriksa kembali hasilnya sebelum langkah itu dianggap selesai dan dilaporkan",
      "Mengingatkan warga dengan santun bahwa setiap kelompok berhak beribadah, memfasilitasi dialog antara warga dan kelompok itu, melibatkan tokoh masyarakat dan ketua RT",
      "Ikut menolak pembangunan rumah ibadah itu",
      "Meminta kelompok minoritas itu membangun rumah ibadah di tempat lain saja",
      "Membiarkannya karena itu urusan warga setempat"
    ],
    k: "B",
    scores: {
      A: 4,
      B: 5,
      C: 1,
      D: 2,
      E: 3
    },
    image: null,
    boss: 5
  },
  {
    id: 314,
    code: "WB5-14",
    cat: "Sosial Budaya",
    type: "Perbedaan pendapat",
    q: "Warga berbeda pendapat soal pemanfaatan lahan kosong di lingkungan Anda: sebagian ingin dijadikan tempat parkir, sebagian ingin dijadikan taman bermain anak. Sikap Anda adalah…",
    options: [
      "Keluar dari musyawarah karena perdebatan semakin memanas",
      "Memaksakan lahan itu dijadikan tempat parkir karena Anda yang mengusulkannya",
      "Mendengarkan semua pihak lalu memutuskan berdasarkan suara terbanyak, tetapi tanpa mendokumentasikan kesepakatan itu",
      "Mendengarkan semua pihak dengan tenang, mencari titik temu antara kebutuhan parkir dan taman, lalu mengusulkan musyawarah untuk mencapai kesepakatan bersama",
      "Mengusulkan lahan itu dibagi dua — sebagian parkir, sebagian taman — tanpa mendengar semua pihak lebih dulu"
    ],
    k: "D",
    scores: {
      A: 2,
      B: 1,
      C: 4,
      D: 5,
      E: 3
    },
    image: null,
    boss: 5
  },
  {
    id: 315,
    code: "WB5-15",
    cat: "Sosial Budaya",
    type: "Penempatan baru & adaptasi lingkungan",
    q: "Anda salah memakai istilah yang ternyata bermakna kasar dalam bahasa setempat saat berbicara dengan warga, warga tersinggung, dan tokoh adat menuntut permintaan maaf resmi. Sikap Anda adalah…",
    options: [
      "Meminta maaf dengan tulus, mempelajari makna istilah itu, dan menunjukkan niat baik lewat tindakan serta membangun relasi dengan tokoh adat",
      "Membiarkan warga tersinggung karena Anda tidak sengaja salah",
      "Menyalahkan warga yang terlalu sensitif terhadap istilah itu",
      "Meminta maaf dengan tulus dan mempelajari makna istilah itu, tetapi tidak membangun relasi dengan tokoh adat karena merasa permintaan maaf sudah cukup",
      "Mengabaikan tuntutan permintaan maaf dari tokoh adat itu"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 2,
      C: 3,
      D: 4,
      E: 1
    },
    image: null,
    boss: 5
  },
  {
    id: 316,
    code: "WB5-16",
    cat: "Adaptasi TIK",
    type: "Etika digital & keamanan data",
    q: "Data pribadi warga tersebar di media sosial karena kecerobohan seorang pegawai, dan warga yang terdampak menuntut pertanggungjawaban instansi Anda. Sikap Anda adalah…",
    options: [
      "Meminta maaf kepada warga yang terdampak, melaporkan kejadian itu segera ke atasan dan bagian IT, membantu mitigasi seperti mengganti kata sandi dan menghubungi warga terdampak",
      "Menyalahkan pegawai yang ceroboh itu di depan warga",
      "Menutupi kebocoran itu agar instansi tidak malu",
      "Meminta maaf dan melaporkan kejadian itu ke atasan dan bagian IT, tanpa memberi tahu pihak yang terdampak tentang perubahan yang sudah terjadi itu",
      "Membiarkannya karena kebocoran sudah terjadi"
    ],
    k: "A",
    scores: {
      A: 5,
      B: 3,
      C: 1,
      D: 4,
      E: 2
    },
    image: null,
    boss: 5
  },
  {
    id: 317,
    code: "WB5-17",
    cat: "Adaptasi TIK",
    type: "Belajar sistem/aplikasi baru",
    q: "Anda ditugaskan melatih tim memakai sistem baru padahal Anda sendiri baru belajar memakainya, dan separuh tim menolak dilatih oleh pegawai yang lebih junior dari mereka. Sikap Anda adalah…",
    options: [
      "Melatih tim itu seadanya tanpa persiapan yang matang",
      "Menolak tugas melatih itu tanpa memberi tahu atasan",
      "Memaksa tim mengikuti pelatihan Anda meski mereka menolak",
      "Mempelajari sistem itu lebih dalam, membuat panduan singkat, melatih tim secara bertahap, dan mengevaluasi hasilnya bersama",
      "Meminta atasan menunjuk pelatih lain yang lebih senior, karena Anda baru belajar dan tim menolak dilatih oleh pegawai yang lebih junior"
    ],
    k: "D",
    scores: {
      A: 3,
      B: 1,
      C: 2,
      D: 5,
      E: 4
    },
    image: null,
    boss: 5
  },
  {
    id: 318,
    code: "WB5-18",
    cat: "Adaptasi TIK",
    type: "Memanfaatkan TIK untuk tugas",
    q: "Anda menemukan cara mempercepat layanan dengan aplikasi baru, tetapi atasan khawatir cara itu melanggar prosedur yang berlaku. Sikap Anda adalah…",
    options: [
      "Mempelajari aturan yang berlaku dan menyusun usulan tertulis untuk atasan, tetapi menunda bagian tersulitnya sampai tenggat hampir habis dan baru dikerjakan terburu-buru",
      "Memakai aplikasi itu dan menyembunyikan cara itu dari atasan",
      "Mengusulkan aplikasi itu kepada rekan lain tanpa persetujuan atasan",
      "Mempelajari aturan yang berlaku, menyusun usulan tertulis dengan penjelasan prosedur, mengajukannya ke atasan, menguji coba secara terbatas bila disetujui",
      "Tetap memakai cara lama tanpa mengusulkan apa pun"
    ],
    k: "D",
    scores: {
      A: 4,
      B: 1,
      C: 2,
      D: 5,
      E: 3
    },
    image: null,
    boss: 5
  },
  {
    id: 319,
    code: "WB5-19",
    cat: "Adaptasi TIK",
    type: "Membantu rekan gagap teknologi",
    q: "Anda diminta membantu seluruh rekan senior di tim yang belum bisa memakai sistem baru, padahal laporan yang harus mereka susun tenggatnya sudah sangat dekat. Sikap Anda adalah…",
    options: [
      "Mengisi laporan itu untuk mereka tanpa menjelaskan caranya",
      "Membuat panduan singkat, memandu rekan senior secara berkelompok, mendampingi satu per satu yang masih kesulitan, menyediakan bantuan susulan",
      "Menyuruh mereka bertanya ke petugas IT",
      "Membuat panduan singkat dan memandu rekan senior secara berkelompok, tanpa menyiapkan rencana cadangan bila langkah itu gagal",
      "Membiarkan mereka kesulitan karena itu bukan tugas Anda"
    ],
    k: "B",
    scores: {
      A: 3,
      B: 5,
      C: 2,
      D: 4,
      E: 1
    },
    image: null,
    boss: 5
  },
  {
    id: 320,
    code: "WB5-20",
    cat: "Adaptasi TIK",
    type: "Etika digital & keamanan data",
    q: "Dokumen internal sensitif berisi data warga tersebar ke grup keluarga, dan penyebarnya diduga keluarga seorang pegawai. Dokumen itu sudah diteruskan ke banyak orang. Sikap Anda adalah…",
    options: [
      "Membiarkan dokumen itu tersebar karena sudah terlanjur sampai ke banyak orang",
      "Menyalahkan pegawai yang keluarganya menyebarkan dokumen itu",
      "Ikut menyebarkan dokumen itu ke grup lain",
      "Meminta semua penerima menghapus dokumen itu, melaporkan kejadian itu sesuai prosedur, dan mengingatkan seluruh tim soal kerahasiaan",
      "Meminta penerima dokumen itu menghapusnya saja, tanpa melaporkannya, karena Anda khawatir pegawai yang bersangkutan akan mendapat hukuman berat"
    ],
    k: "D",
    scores: {
      A: 2,
      B: 3,
      C: 1,
      D: 5,
      E: 4
    },
    image: null,
    boss: 5
  },
  {
    id: 321,
    code: "WB5-21",
    cat: "Profesionalisme",
    type: "Akuntabilitas & integritas (whistleblowing)",
    q: "Anda menemukan bukti kuat bahwa atasan Anda menyalahgunakan anggaran, dan atasan itu pula yang menilai kinerja Anda setiap tahun. Sikap Anda adalah…",
    options: [
      "Membiarkannya karena takut penilaian kinerja Anda menjadi buruk",
      "Melaporkan penyalahgunaan itu kepada atasan yang lebih tinggi secara lisan tanpa bukti tertulis, tetapi tanpa mencatat langkah itu sehingga sulit dilacak bila ada pihak yang menanyakan kemudian",
      "Mengingatkan atasan itu saja tanpa melapor ke mana pun",
      "Ikut menikmati hasil penyalahgunaan anggaran itu",
      "Mengumpulkan bukti dengan hati-hati, melaporkan penyalahgunaan itu lewat jalur resmi seperti whistleblowing system atau inspektorat yang melindungi pelapor, dan menjaga kerahasiaan laporan Anda"
    ],
    k: "E",
    scores: {
      A: 2,
      B: 4,
      C: 3,
      D: 1,
      E: 5
    },
    image: null,
    boss: 5
  },
  {
    id: 322,
    code: "WB5-22",
    cat: "Profesionalisme",
    type: "Komitmen, deadline & prioritas",
    q: "Laporan penting dan rapat yang tidak bisa diwakilkan jatuh di jam yang sama, masing-masing diminta oleh atasan yang berbeda, dan keduanya mengaitkan hal itu dengan penilaian kinerja Anda. Sikap Anda adalah…",
    options: [
      "Mengerjakan laporan itu seadanya sambil mengikuti rapat tanpa fokus",
      "Memilih salah satu tugas tanpa memberi tahu atasan yang satunya",
      "Menolak kedua tugas itu karena tidak mungkin dikerjakan bersamaan",
      "Memilih mengikuti rapat yang dipimpin atasan yang jabatannya lebih tinggi, dan membiarkan laporan itu menunggu sampai rapat selesai, tanpa memberi tahu atasan yang satunya tentang bentrokan itu",
      "Mengomunikasikan bentrokan itu kepada kedua atasan, menyepakati prioritas dan penjadwalan, lalu melaporkan progresnya secara berkala"
    ],
    k: "E",
    scores: {
      A: 2,
      B: 3,
      C: 1,
      D: 4,
      E: 5
    },
    image: null,
    boss: 5
  },
  {
    id: 323,
    code: "WB5-23",
    cat: "Profesionalisme",
    type: "Rahasia jabatan & etika profesi",
    q: "Anda tidak sengaja melihat dokumen rahasia milik rekan lain yang tertinggal di meja, dan ada warga yang menanyakan isi dokumen itu kepada Anda. Sikap Anda adalah…",
    options: [
      "Memberikan dokumen itu kepada warga tersebut",
      "Membiarkan dokumen itu di meja tanpa melakukan apa pun",
      "Mengamankan dokumen itu, mengembalikannya kepada pemilik atau pejabat yang berwenang, menolak memberi informasi kepada warga itu, dan mengingatkan pemilik dokumen soal pengamanan dokumen rahasia",
      "Mengamankan dokumen itu dan mengembalikannya kepada pemiliknya, tanpa memberi tahu atasan tentang langkah yang sudah diambil itu",
      "Memberi tahu isi dokumen itu secara lisan kepada warga tersebut"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 3,
      C: 5,
      D: 4,
      E: 2
    },
    image: null,
    boss: 5
  },
  {
    id: 324,
    code: "WB5-24",
    cat: "Profesionalisme",
    type: "Pengembangan kompetensi diri",
    q: "Pelatihan luar kota yang menentukan promosi Anda bentrok dengan masa tim kekurangan orang, dan tim akan kewalahan bila Anda pergi selama sepekan. Sikap Anda adalah…",
    options: [
      "Menolak pelatihan itu tanpa mempertimbangkan manfaatnya",
      "Mengikuti pelatihan itu tanpa memberi tahu tim",
      "Mengomunikasikan ke atasan, mengatur pengganti selama Anda pergi, dan membagikan ilmu pelatihan itu kepada tim setelah kembali",
      "Mengomunikasikan ke atasan dan mengatur pengganti selama Anda pergi, tetapi tidak membagikan ilmu pelatihan itu kepada tim setelah kembali karena sibuk",
      "Mengikuti pelatihan itu hanya demi sertifikat keikutsertaan"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 3,
      C: 5,
      D: 4,
      E: 1
    },
    image: null,
    boss: 5
  },
  {
    id: 325,
    code: "WB5-25",
    cat: "Profesionalisme",
    type: "Akuntabilitas & integritas (whistleblowing)",
    q: "Seorang vendor menawarkan komisi kepada Anda agar memenangkan tendernya, dan Anda mengetahui rekan Anda sudah menerima tawaran serupa dari vendor itu. Sikap Anda adalah…",
    options: [
      "Menolak tawaran itu dengan tegas dan menjelaskan aturan pengadaan, tetapi tidak menindaklanjuti hasilnya setelah langkah pertama itu selesai dikerjakan",
      "Menerima komisi itu karena vendor lain juga melakukannya",
      "Membiarkannya karena rekan Anda sudah menerima tawaran serupa",
      "Menolak tawaran itu tanpa melapor ke mana pun",
      "Menolak tawaran itu dengan tegas, menjelaskan aturan pengadaan, dan melaporkan tawaran serta praktik itu lewat jalur resmi agar ditindaklanjuti"
    ],
    k: "E",
    scores: {
      A: 4,
      B: 1,
      C: 2,
      D: 3,
      E: 5
    },
    image: null,
    boss: 5
  },
  {
    id: 326,
    code: "WB5-26",
    cat: "Anti Radikalisme",
    type: "Menolak ajakan paham radikal",
    q: "Kelompok kajian di lingkungan Anda mengajak pegawai baru bergabung dengan janji bantuan karier, padahal isi kajiannya menolak Pancasila. Sikap Anda adalah…",
    options: [
      "Menolak ajakan itu dan mengingatkan pegawai baru itu dengan santun, tanpa memastikan pihak lain benar-benar memahami penjelasan yang sudah diberikan itu",
      "Menolak ajakan itu, mengingatkan pegawai baru itu dengan santun, dan melaporkan kelompok itu kepada atasan atau aparat agar ada pembinaan",
      "Menolak dengan alasan sedang sibuk tanpa penjelasan",
      "Menghadiri kajian itu sekali untuk mengetahui isinya lalu diam",
      "Bergabung dengan kelompok itu karena janji bantuan karier"
    ],
    k: "B",
    scores: {
      A: 4,
      B: 5,
      C: 3,
      D: 2,
      E: 1
    },
    image: null,
    boss: 5
  },
  {
    id: 327,
    code: "WB5-27",
    cat: "Anti Radikalisme",
    type: "Menolak kekerasan & pemaksaan kehendak",
    q: "Ada rencana sweeping paksa terhadap kelompok minoritas di lingkungan Anda dalam waktu dekat. Sikap Anda adalah…",
    options: [
      "Menjauhi lingkungan itu agar tidak terseret",
      "Ikut serta dalam sweeping itu karena takut diancam",
      "Tidak ikut rencana itu, menenangkan warga sekitar, melindungi kelompok yang terancam sebisa mungkin, dan segera melaporkan rencana itu kepada aparat yang berwenang",
      "Tidak ikut rencana itu dan segera melaporkan kepada aparat yang berwenang, tetapi mengerjakannya sendiri tanpa melibatkan pihak terkait yang seharusnya dilibatkan sejak awal",
      "Membiarkannya karena bukan urusan Anda"
    ],
    k: "C",
    scores: {
      A: 2,
      B: 1,
      C: 5,
      D: 4,
      E: 3
    },
    image: null,
    boss: 5
  },
  {
    id: 328,
    code: "WB5-28",
    cat: "Anti Radikalisme",
    type: "Menerima perbedaan ideologi yang tidak bertentangan dengan Pancasila",
    q: "Seorang warga berpendapat bahwa sistem pemerintahan daerah harus diubah total, tetapi ia menyampaikannya melalui jalur demokrasi dan tetap menghormati Pancasila. Sikap Anda adalah…",
    options: [
      "Menghormati pendapatnya dan tetap melayaninya seperti biasa, tanpa memeriksa kembali hasilnya sebelum langkah itu dianggap selesai dan dilaporkan",
      "Melaporkan warga itu karena pendapatnya dianggap berbahaya",
      "Menghindari warga itu karena pendapatnya kontroversial",
      "Mendebat warga itu agar menerima sistem yang ada",
      "Menghormati pendapatnya sebagai bagian dari kebebasan berpendapat, tetap melayaninya secara profesional, dan tidak mencampur urusan pandangan pribadi dengan tugas pelayanan"
    ],
    k: "E",
    scores: {
      A: 4,
      B: 1,
      C: 3,
      D: 2,
      E: 5
    },
    image: null,
    boss: 5
  },
  {
    id: 329,
    code: "WB5-29",
    cat: "Anti Radikalisme",
    type: "Melaporkan paham radikal sesuai prosedur",
    q: "Anda menemukan selebaran dan ceramah daring yang mengajak mengganti Pancasila, dan penyebarnya diduga oknum pegawai di instansi Anda. Sikap Anda adalah…",
    options: [
      "Ikut menyebarkan selebaran itu ke pegawai lain",
      "Tidak menyebarkan selebaran itu dan melaporkannya kepada atasan, tetapi tanpa mendokumentasikan kesepakatan itu",
      "Membuang selebaran itu diam-diam tanpa melapor",
      "Tidak menyebarkan selebaran itu, mengumpulkan bukti dengan hati-hati, dan melaporkan temuan itu kepada atasan dan pihak berwenang sesuai prosedur",
      "Membiarkan selebaran itu tetap tersebar"
    ],
    k: "D",
    scores: {
      A: 1,
      B: 4,
      C: 3,
      D: 5,
      E: 2
    },
    image: null,
    boss: 5
  },
  {
    id: 330,
    code: "WB5-30",
    cat: "Anti Radikalisme",
    type: "Menolak ajakan paham radikal",
    q: "Seseorang mengajak Anda mengikuti pelatihan yang ternyata berisi doktrin yang menolak Pancasila, dan mengancam Anda akan dikucilkan bila menolak. Sikap Anda adalah…",
    options: [
      "Mengikuti pelatihan itu karena takut dikucilkan",
      "Menolak ajakan itu dengan tegas namun santun, tanpa memberi tahu pihak yang terdampak tentang perubahan yang sudah terjadi itu",
      "Menolak ajakan itu dengan tegas namun santun, menjaga diri tetap tenang, dan segera melaporkan ancaman itu lewat jalur resmi",
      "Membiarkannya tanpa menolak dan tanpa melapor",
      "Menghadiri pelatihan itu sekali agar tidak dikucilkan lalu diam"
    ],
    k: "C",
    scores: {
      A: 1,
      B: 4,
      C: 5,
      D: 2,
      E: 3
    },
    image: null,
    boss: 5
  }
];
});
