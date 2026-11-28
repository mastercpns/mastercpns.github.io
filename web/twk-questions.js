// Data soal TWK CPNS 2026 — 300 soal (bank final: 5 level x 30 + 5 bos x 30 soal baru).
// TWK dinilai jawaban benar x 5 (salah/kosong = 0); passing grade 65.
// Bos TWK lulus hanya dengan nilai SEMPURNA 150 (30x5). TWK tanpa gambar
// (image selalu null).
// CATATAN: kunci jawaban ("k") tersimpan di data ini supaya penilaian bisa
// jalan sepenuhnya offline, tetapi TIDAK PERNAH ditampilkan di UI mana pun.
(function (root, factory) {
  var data = factory();
  if (typeof module !== 'undefined' && module.exports) { module.exports = data; }
  else { root.TWK_QUESTIONS = data; }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
  {
    id: 1,
    code: "NAS-01",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Seorang dokter muda mendapat tawaran bekerja di rumah sakit swasta besar di ibu kota dengan gaji tiga kali lipat. Ia menolak tawaran itu dan memilih membuka klinik di kampung halamannya di pedalaman yang kekurangan tenaga medis. Sikap dokter tersebut paling mencerminkan…",
    options: [
      "Kesediaan mengabdi untuk kepentingan bangsa di atas keuntungan pribadi",
      "Ketidakmampuan bersaing di rumah sakit besar",
      "Keinginan menghindari persaingan kerja di kota",
      "Sikap yang merugikan pengembangan kariernya",
      "Ketergantungan pada bantuan pemerintah daerah"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 2,
    code: "NAS-02",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Seorang atlet bulu tangkis Indonesia ditawari pindah kewarganegaraan oleh negara lain dengan iming-iming fasilitas latihan kelas dunia dan bonus besar. Ia menolak tawaran tersebut dan tetap membela Indonesia di berbagai kejuaraan internasional. Sikap atlet tersebut mencerminkan…",
    options: [
      "Keengganan mencoba tantangan baru di luar negeri",
      "Menjaga nama baik dan kehormatan bangsa di mata dunia",
      "Ketidakpercayaan pada kemampuan federasi luar negeri",
      "Sikap yang merugikan masa depan kariernya",
      "Keinginan memperoleh popularitas di dalam negeri"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 3,
    code: "NAS-03",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Saat mengikuti aksi unjuk rasa, sekelompok pemuda mengajak Budi membakar bendera Merah Putih sebagai bentuk protes. Budi menolak ajakan itu dan memilih menyampaikan aspirasinya secara tertib tanpa merusak simbol negara. Sikap Budi menunjukkan…",
    options: [
      "Ketidakberanian menyampaikan pendapat di muka umum",
      "Sikap yang tidak peduli pada tuntutan massa",
      "Penghargaan terhadap simbol negara sebagai wujud cinta tanah air",
      "Keinginan menghindari keributan dengan aparat",
      "Sikap yang tunduk pada tekanan kelompok mayoritas"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 4,
    code: "NAS-04",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Sebuah perusahaan asing menawarkan kerja sama pengelolaan tambang di daerah Rudi dengan keuntungan besar bagi perusahaan, tetapi sebagian besar keuntungan dibawa ke luar negeri dan kerusakan lingkungan ditanggung masyarakat setempat. Sebagai kepala desa, sikap Rudi yang paling mencerminkan nasionalisme adalah…",
    options: [
      "Menerima kerja sama itu karena menambah pendapatan desa",
      "Menyerahkan keputusan sepenuhnya kepada perusahaan asing",
      "Meminta perusahaan menaikkan gajinya sebagai kepala desa",
      "Menolak kerja sama yang merugikan kepentingan bangsa dan lingkungan",
      "Membiarkan perusahaan beroperasi tanpa pengawasan"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 5,
    code: "NAS-05",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Sebuah instansi pemerintah mengganti seragam pegawainya. Sebagian pegawai mengusulkan seragam berbahan kain impor yang lebih murah, sementara sebagian lain mengusulkan kain batik produksi perajin lokal. Sikap yang paling mencerminkan nasionalisme adalah…",
    options: [
      "Memilih kain impor karena harganya lebih murah",
      "Memilih kain yang warnanya paling mencolok",
      "Menunda penggantian seragam sampai ada anggaran lebih",
      "Memilih seragam dari bahan yang paling mudah dicuci",
      "Menggunakan batik produksi perajin lokal untuk mendukung produk dalam negeri"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 6,
    code: "NAS-06",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Setiap hari Senin, seorang guru mengajak para siswanya menyanyikan lagu Indonesia Raya dengan khidmat sebelum pelajaran dimulai, lalu menjelaskan makna liriknya secara singkat. Kebiasaan guru tersebut bertujuan menanamkan…",
    options: [
      "Kewajiban administratif yang harus dipenuhi sekolah",
      "Kedisiplinan siswa agar tidak terlambat masuk kelas",
      "Rasa cinta tanah air dan kebanggaan sebagai bangsa Indonesia",
      "Kemampuan bernyanyi para siswa di depan umum",
      "Tradisi sekolah yang diwariskan turun-temurun"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 7,
    code: "NAS-07",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Seorang pengusaha muda mewarisi sebidang tanah di pusat kota. Investor asing menawar tanah itu dengan harga sangat tinggi untuk dibangun pusat perbelanjaan. Pengusaha itu menolak menjualnya dan memilih mengelola tanah tersebut sebagai sentra kerajinan dan kuliner khas daerah. Tindakan pengusaha tersebut mencerminkan…",
    options: [
      "Ketidakmampuan menghitung peluang bisnis yang menguntungkan",
      "Ketergantungan pada bantuan pemerintah daerah",
      "Keengganan bekerja sama dengan pihak asing",
      "Sikap yang merugikan pembangunan kota",
      "Komitmen menjaga aset bangsa dan mengembangkan ekonomi kerakyatan"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 8,
    code: "NAS-08",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Seorang mahasiswa Indonesia yang kuliah di luar negeri aktif memperkenalkan rendang, batik, dan tari tradisional dalam festival budaya kampusnya, hingga banyak mahasiswa asing tertarik mempelajari budaya Indonesia. Tindakan mahasiswa tersebut merupakan bentuk nasionalisme karena…",
    options: [
      "Menjaga dan memperkenalkan identitas budaya bangsa kepada dunia",
      "Mencari perhatian dari mahasiswa asing di kampusnya",
      "Membuktikan bahwa budaya Indonesia lebih unggul dari budaya lain",
      "Mengisi waktu luang selama kuliah di luar negeri",
      "Mengikuti kewajiban kegiatan kampus yang berlaku"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 9,
    code: "NAS-09",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Seorang nelayan di perbatasan melihat kapal asing menangkap ikan di perairan Indonesia secara ilegal. Ia tidak ikut menjual hasil tangkapannya kepada kapal itu, melainkan segera melaporkan kejadian tersebut kepada aparat yang berwenang. Sikap nelayan itu menunjukkan…",
    options: [
      "Ketidakpedulian terhadap peluang penghasilan tambahan",
      "Keengganan berdagang dengan pihak asing",
      "Ketidaktahuan tentang harga ikan di pasaran",
      "Kesadaran menjaga kedaulatan wilayah dan kekayaan laut bangsa",
      "Keinginan memperoleh imbalan dari aparat"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 10,
    code: "NAS-10",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Seorang guru di daerah terpencil membuat perpustakaan keliling dengan sepeda motor, mengunjungi desa-desa untuk meminjamkan buku kepada anak-anak yang tidak memiliki akses ke perpustakaan. Tindakan guru tersebut paling mencerminkan…",
    options: [
      "Keinginan memperoleh penghargaan sebagai guru teladan",
      "Pengabdian untuk mencerdaskan kehidupan bangsa hingga ke pelosok negeri",
      "Ketidakpuasan terhadap fasilitas sekolah tempatnya mengajar",
      "Upaya mengisi waktu luang di luar jam mengajar",
      "Sikap yang mengabaikan tugas pokoknya sebagai guru"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 11,
    code: "NAS-11",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Seorang ASN mendapat tawaran tugas belajar ke luar negeri dengan fasilitas lengkap, tetapi ia harus menunda program pengentasan kemiskinan yang sedang ia pimpin di daerahnya. Ia memutuskan menunda tawaran itu sampai program di daerahnya selesai dan berjalan mandiri. Sikap ASN tersebut mencerminkan…",
    options: [
      "Ketidakmampuan memanfaatkan kesempatan belajar ke luar negeri",
      "Mendahulukan kepentingan bangsa dan masyarakat yang dilayaninya",
      "Ketergantungan pada program yang ia pimpin sendiri",
      "Sikap yang merugikan pengembangan kariernya",
      "Keengganan meninggalkan daerah tempatnya bertugas"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 12,
    code: "NAS-12",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Di media sosial, seorang pemuda melihat video yang menghina lambang negara dan mengajak pengikutnya menyebarkannya. Pemuda itu menolak menyebarkannya, melaporkan akun tersebut, dan mengunggah konten yang menjelaskan makna lambang negara. Sikap pemuda itu menunjukkan…",
    options: [
      "Keinginan menjadi terkenal di media sosial",
      "Ketidakpedulian terhadap kebebasan berpendapat orang lain",
      "Sikap yang takut berhadapan dengan pemilik akun",
      "Menjaga kehormatan simbol negara dan persatuan bangsa di ruang digital",
      "Upaya mencari dukungan dari pengikut media sosialnya"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 13,
    code: "NAS-13",
    cat: "Nasionalisme",
    type: "Sejarah perjuangan bangsa",
    q: "Organisasi Budi Utomo yang menjadi tonggak kebangkitan nasional didirikan pada…",
    options: [
      "17 Agustus 1945",
      "1 Juni 1945",
      "28 Oktober 1928",
      "2 Mei 1908",
      "20 Mei 1908"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 14,
    code: "NAS-14",
    cat: "Nasionalisme",
    type: "Sejarah perjuangan bangsa",
    q: "Kongres Pemuda I yang menjadi cikal bakal lahirnya Sumpah Pemuda dilaksanakan pada tahun…",
    options: [
      "1926",
      "1928",
      "1938",
      "1945",
      "1908"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 15,
    code: "NAS-15",
    cat: "Nasionalisme",
    type: "Sejarah perjuangan bangsa",
    q: "Sidang BPUPKI yang merumuskan dasar negara diketuai oleh…",
    options: [
      "Ir. Soekarno",
      "Drs. Mohammad Hatta",
      "Radjiman Wedyodiningrat",
      "Mr. Soepomo",
      "Mohammad Yamin"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 16,
    code: "NAS-16",
    cat: "Nasionalisme",
    type: "Sejarah perjuangan bangsa",
    q: "PPKI mengesahkan Undang-Undang Dasar 1945 sebagai konstitusi negara pada tanggal…",
    options: [
      "17 Agustus 1945",
      "1 Juni 1945",
      "22 Juni 1945",
      "27 Desember 1949",
      "18 Agustus 1945"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 17,
    code: "NAS-17",
    cat: "Nasionalisme",
    type: "Sejarah perjuangan bangsa",
    q: "Naskah teks Proklamasi Kemerdekaan Indonesia diketik oleh…",
    options: [
      "Sayuti Melik",
      "Ahmad Soebardjo",
      "Soekarni",
      "B. M. Diah",
      "Sukarni"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 18,
    code: "NAS-18",
    cat: "Nasionalisme",
    type: "Sejarah perjuangan bangsa",
    q: "Bendera Merah Putih yang dikibarkan saat Proklamasi Kemerdekaan 17 Agustus 1945 dijahit oleh…",
    options: [
      "R. A. Kartini",
      "Dewi Sartika",
      "Cut Nyak Dien",
      "Fatmawati",
      "Maria Walanda Maramis"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 19,
    code: "NAS-19",
    cat: "Nasionalisme",
    type: "Sejarah perjuangan bangsa",
    q: "Pertempuran besar melawan tentara Sekutu yang diperingati sebagai Hari Pahlawan setiap 10 November terjadi di kota…",
    options: [
      "Jakarta",
      "Bandung",
      "Surabaya",
      "Yogyakarta",
      "Semarang"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 20,
    code: "NAS-20",
    cat: "Nasionalisme",
    type: "Sejarah perjuangan bangsa",
    q: "Hari Pendidikan Nasional diperingati setiap tanggal 2 Mei, bertepatan dengan hari lahir tokoh pendidikan…",
    options: [
      "R. A. Kartini",
      "Ki Hadjar Dewantara",
      "Dewi Sartika",
      "Mohammad Hatta",
      "Ahmad Dahlan"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 21,
    code: "NAS-21",
    cat: "Nasionalisme",
    type: "Sejarah perjuangan bangsa",
    q: "Kongres Bahasa Indonesia pertama yang menegaskan kedudukan bahasa Indonesia sebagai bahasa persatuan dilaksanakan pada tahun 1938 di kota…",
    options: [
      "Jakarta",
      "Bandung",
      "Yogyakarta",
      "Solo",
      "Semarang"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 22,
    code: "NAS-22",
    cat: "Nasionalisme",
    type: "Sejarah perjuangan bangsa",
    q: "Pengakuan kedaulatan Indonesia oleh Belanda pada 27 Desember 1949 merupakan hasil dari perundingan…",
    options: [
      "Perjanjian Linggarjati",
      "Perjanjian Renville",
      "Konferensi Meja Bundar",
      "Perjanjian Roem-Royen",
      "Konferensi Asia Afrika"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 23,
    code: "NAS-23",
    cat: "Nasionalisme",
    type: "Nasionalisme di era digital",
    q: "Seorang pelajar membuat aplikasi kamus digital bahasa daerahnya agar bahasa itu tidak punah dan dapat dipelajari generasi muda. Tindakan pelajar tersebut merupakan bentuk nasionalisme di era digital karena…",
    options: [
      "Menghasilkan uang dari aplikasi yang dibuatnya",
      "Melestarikan kekayaan budaya bangsa melalui teknologi",
      "Membuktikan kemampuan membuat aplikasi modern",
      "Mengikuti tren aplikasi bahasa yang sedang populer",
      "Menambah jumlah unduhan di toko aplikasi"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 24,
    code: "NAS-24",
    cat: "Nasionalisme",
    type: "Nasionalisme di era digital",
    q: "Seorang animator muda membuat film animasi pendek yang mengangkat kisah pahlawan dari daerahnya, lalu mengunggahnya ke platform video dan ditonton jutaan orang. Tindakan tersebut mencerminkan nasionalisme karena…",
    options: [
      "Mencari keuntungan dari jumlah penonton video",
      "Mengikuti tren film animasi yang sedang digemari",
      "Membuktikan kemampuan animasi anak bangsa",
      "Mengisi waktu luang dengan membuat hiburan",
      "Menyebarkan nilai kepahlawanan dan identitas bangsa melalui media digital"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 25,
    code: "NAS-25",
    cat: "Nasionalisme",
    type: "Nasionalisme di era digital",
    q: "Di grup percakapan, beredar pesan berantai yang menyudutkan salah satu suku bangsa dengan informasi yang belum jelas kebenarannya. Sikap yang paling mencerminkan nasionalisme adalah…",
    options: [
      "Menyebarkan pesan itu agar semua orang waspada",
      "Mengabaikan pesan itu karena bukan urusannya",
      "Membalas pesan itu dengan ujaran yang sama kerasnya",
      "Menertawakan isi pesan itu bersama teman",
      "Tidak menyebarkannya dan mengingatkan anggota grup untuk memeriksa kebenarannya"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 26,
    code: "NAS-26",
    cat: "Nasionalisme",
    type: "Nasionalisme di era digital",
    q: "Seorang ASN membuat kanal video edukasi berbahasa Indonesia yang menjelaskan Pancasila dan sejarah bangsa dengan cara yang ringan untuk anak muda. Kegiatan ASN tersebut merupakan bentuk nasionalisme karena…",
    options: [
      "Menanamkan nilai kebangsaan kepada generasi muda melalui media yang mereka sukai",
      "Menambah jumlah pengikut kanal videonya",
      "Mengisi waktu luang di luar jam kerja",
      "Mendapatkan penghasilan tambahan dari platform video",
      "Mengikuti tren pembuatan video edukasi"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 27,
    code: "NAS-27",
    cat: "Nasionalisme",
    type: "Nasionalisme di era digital",
    q: "Seorang pelajar mengikuti lomba esai daring bertema 'Indonesia Emas 2045' dan menulis tentang pentingnya menjaga persatuan di tengah keberagaman. Keikutsertaan pelajar tersebut mencerminkan…",
    options: [
      "Keinginan memenangkan hadiah lomba semata",
      "Upaya mengisi portofolio untuk keperluan sekolah",
      "Ketertarikan pada hadiah yang ditawarkan panitia",
      "Kewajiban mengikuti lomba yang diadakan sekolah",
      "Kesadaran berbangsa dan kepedulian terhadap masa depan bangsa"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 28,
    code: "NAS-28",
    cat: "Nasionalisme",
    type: "Nasionalisme di era digital",
    q: "Sebuah komunitas pengembang gim lokal membuat permainan berbasis cerita rakyat Nusantara dengan tokoh-tokoh pewayangan. Karya tersebut merupakan bentuk nasionalisme di era digital karena…",
    options: [
      "Menghasilkan keuntungan dari penjualan gim",
      "Mengikuti tren gim bertema mitologi dunia",
      "Mengangkat dan melestarikan cerita rakyat sebagai identitas bangsa",
      "Membuktikan kemampuan teknis pengembang gim lokal",
      "Menarik perhatian pemain gim dari luar negeri"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 29,
    code: "NAS-29",
    cat: "Nasionalisme",
    type: "Nasionalisme di era digital",
    q: "Seorang ibu rumah tangga menjual kain tenun hasil karya perajin desanya melalui lokapasar daring hingga dibeli pembeli dari mancanegara. Kegiatan tersebut mencerminkan nasionalisme karena…",
    options: [
      "Memperkenalkan dan mengangkat produk budaya bangsa ke pasar dunia",
      "Mendapatkan keuntungan dari selisih harga jual",
      "Mengikuti tren berjualan daring yang sedang marak",
      "Membuktikan bahwa tenun desa lebih murah dari produk pabrik",
      "Mengisi waktu luang dengan berjualan daring"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 30,
    code: "NAS-30",
    cat: "Nasionalisme",
    type: "Nasionalisme di era digital",
    q: "Sejumlah mahasiswa membuat tagar kampanye di media sosial yang mengajak masyarakat membeli produk UMKM lokal. Kampanye tersebut merupakan bentuk nasionalisme di era digital karena…",
    options: [
      "Meningkatkan jumlah pengikut akun media sosial mereka",
      "Mengikuti tren tagar yang sedang viral",
      "Mencari dukungan sponsor untuk kegiatan kampus",
      "Mendukung kemandirian ekonomi bangsa melalui produk dalam negeri",
      "Membuktikan kemampuan mahasiswa dalam bermedia sosial"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 31,
    code: "INT-01",
    cat: "Integritas",
    type: "Studi kasus gratifikasi",
    q: "Seorang kontraktor memberikan voucher menginap di hotel mewah kepada pejabat pengawas proyek sebagai 'tanda persahabatan'. Sikap pejabat tersebut yang paling mencerminkan integritas adalah…",
    options: [
      "Menolak pemberian itu karena berkaitan dengan jabatannya",
      "Menerima karena nilainya tidak terlalu besar",
      "Menerima lalu menggunakannya setelah proyek selesai",
      "Menerima dan membagikannya kepada staf proyek",
      "Meminta kontraktor menggantinya dengan uang tunai"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 32,
    code: "INT-02",
    cat: "Integritas",
    type: "Studi kasus gratifikasi",
    q: "Seorang warga memberikan bingkisan buah-buahan kepada petugas puskesmas setelah berobat sebagai ucapan terima kasih. Sikap petugas yang paling tepat adalah…",
    options: [
      "Menerima karena bingkisan itu dari hasil kebun warga",
      "Menolak dengan sopan dan menjelaskan bahwa pelayanan kesehatan tidak memerlukan imbalan",
      "Menerima lalu membagikannya kepada pasien lain",
      "Menerima karena nilainya kecil dan tidak memengaruhi keputusan",
      "Meminta warga memberikannya kepada kepala puskesmas"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 33,
    code: "INT-03",
    cat: "Integritas",
    type: "Studi kasus gratifikasi",
    q: "Seorang vendor memberikan diskon khusus 50 persen hanya kepada ASN bagian pengadaan, sementara pembeli lain tidak mendapatkannya. Sikap ASN tersebut yang paling berintegritas adalah…",
    options: [
      "Menerima diskon itu karena menghemat anggaran negara",
      "Menerima diskon itu lalu melaporkannya sebagai penghematan",
      "Menolak diskon khusus itu karena merupakan gratifikasi terselubung",
      "Menerima diskon itu asalkan tidak diketahui atasan",
      "Meminta vendor memberikan diskon yang sama kepada semua orang"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 34,
    code: "INT-04",
    cat: "Integritas",
    type: "Studi kasus gratifikasi",
    q: "Seorang pengusaha yang sedang mengajukan izin usaha menawarkan beasiswa penuh untuk anak pejabat yang memproses izinnya. Sikap pejabat tersebut yang paling tepat adalah…",
    options: [
      "Menerima karena beasiswa itu untuk anaknya, bukan untuk dirinya",
      "Menerima karena pengusaha itu memberikannya dengan tulus",
      "Menerima lalu melaporkan beasiswa itu ke atasan",
      "Menolak tawaran itu karena berkaitan dengan jabatannya dan berpotensi memengaruhi keputusan",
      "Meminta pengusaha memberikan beasiswa itu kepada anak pegawai lain"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 35,
    code: "INT-05",
    cat: "Integritas",
    type: "Studi kasus gratifikasi",
    q: "Saat acara perpisahan, sebuah perusahaan rekanan memberikan jam tangan mahal kepada pejabat yang selama ini mengurus kerja sama dengan perusahaan tersebut. Sikap pejabat yang paling mencerminkan integritas adalah…",
    options: [
      "Menerima karena itu hadiah perpisahan, bukan suap",
      "Menerima lalu menyumbangkannya ke panti asuhan",
      "Menerima karena kerja sama sudah berakhir",
      "Menerima asalkan harganya di bawah batas tertentu",
      "Menolak hadiah itu karena berkaitan dengan jabatannya"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 36,
    code: "INT-06",
    cat: "Integritas",
    type: "Studi kasus gratifikasi",
    q: "Seorang ASN menerima bingkisan dari pihak yang dilayaninya dan merasa tidak mungkin menolaknya karena pemberi bersikeras. Menurut ketentuan gratifikasi, bingkisan tersebut wajib dilaporkan kepada…",
    options: [
      "Atasan langsungnya saja",
      "Kepala daerah setempat",
      "Komisi Pemberantasan Korupsi (KPK)",
      "Kementerian Keuangan",
      "Badan Pemeriksa Keuangan"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 37,
    code: "INT-07",
    cat: "Integritas",
    type: "Studi kasus gratifikasi",
    q: "Seorang ASN yang sedang mengaudit sebuah perusahaan diundang makan malam mewah oleh perusahaan itu di restoran bintang lima. Sikap ASN tersebut yang paling berintegritas adalah…",
    options: [
      "Menerima undangan itu karena hanya makan malam biasa",
      "Menerima undangan itu lalu membayar makanannya sendiri",
      "Menerima undangan itu asalkan tidak membahas audit",
      "Menerima undangan itu setelah audit selesai",
      "Menolak undangan itu karena dapat memengaruhi independensi audit"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 38,
    code: "INT-08",
    cat: "Integritas",
    type: "Studi kasus gratifikasi",
    q: "Seorang ASN menerima hadiah dari pemohon setelah layanan yang diminta pemohon itu selesai diproses. ASN itu berpendapat hadiah tersebut bukan gratifikasi karena layanannya sudah selesai. Pendapat yang benar adalah…",
    options: [
      "Pemberian setelah layanan selesai bukan gratifikasi sehingga boleh diterima",
      "Pemberian yang berkaitan dengan jabatan tetap merupakan gratifikasi walau layanan sudah selesai",
      "Pemberian itu boleh diterima asalkan nilainya kecil",
      "Pemberian itu boleh diterima jika diberikan secara terang-terangan",
      "Pemberian itu boleh diterima jika pemohon memberikannya dengan ikhlas"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 39,
    code: "INT-09",
    cat: "Integritas",
    type: "Studi kasus gratifikasi",
    q: "Seorang penyelenggara acara memberikan tiket konser gratis kepada ASN yang mengurus izin keramaian acara tersebut. Sikap ASN yang paling tepat adalah…",
    options: [
      "Menerima tiket itu karena hanya hiburan, bukan uang",
      "Menerima tiket itu lalu mengajak keluarganya menonton",
      "Menerima tiket itu setelah izin diterbitkan",
      "Menolak tiket itu karena berkaitan dengan jabatan yang sedang dijalankannya",
      "Menerima tiket itu asalkan tidak diketahui rekan kerja"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 40,
    code: "INT-10",
    cat: "Integritas",
    type: "Studi kasus gratifikasi",
    q: "Seorang ASN di bagian penerimaan siswa baru menerima amplop dari orang tua calon siswa agar anaknya diterima di sekolah negeri favorit. Sikap ASN yang paling mencerminkan integritas adalah…",
    options: [
      "Menerima amplop itu karena seleksi belum dimulai",
      "Menolak amplop itu dan tetap menjalankan seleksi secara objektif",
      "Menerima amplop itu lalu membagikannya kepada panitia",
      "Menerima amplop itu asalkan anak tersebut memenuhi syarat",
      "Meminta orang tua itu memberikan amplopnya kepada kepala sekolah"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 41,
    code: "INT-11",
    cat: "Integritas",
    type: "Studi kasus gratifikasi",
    q: "Seorang karyawan perusahaan swasta memberikan hadiah kepada ASN yang sedang mengurus sertifikat tanah perusahaan itu. Sikap ASN yang paling berintegritas adalah…",
    options: [
      "Menerima hadiah itu karena perusahaan itu swasta, bukan pemerintah",
      "Menolak hadiah itu dan menjelaskan bahwa pengurusan sertifikat tidak memerlukan imbalan",
      "Menerima hadiah itu lalu mempercepat pengurusan sertifikatnya",
      "Menerima hadiah itu asalkan nilainya di bawah satu juta rupiah",
      "Meminta karyawan itu memberikan hadiahnya kepada atasannya"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 42,
    code: "INT-12",
    cat: "Integritas",
    type: "Studi kasus gratifikasi",
    q: "Selama proyek pembangunan berjalan, sebuah perusahaan rekanan menyediakan kendaraan dinas untuk digunakan pejabat pengawas proyek secara pribadi. Sikap pejabat yang paling tepat adalah…",
    options: [
      "Menggunakan kendaraan itu karena menunjang pengawasan proyek",
      "Menggunakan kendaraan itu hanya pada akhir pekan",
      "Menggunakan kendaraan itu lalu mengembalikannya setelah proyek selesai",
      "Menolak fasilitas itu karena merupakan gratifikasi yang berkaitan dengan jabatan",
      "Menggunakan kendaraan itu asalkan bahan bakarnya dibayar sendiri"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 43,
    code: "INT-13",
    cat: "Integritas",
    type: "Konsistensi sikap-ucapan-tindakan",
    q: "Seorang ASN rajin datang tepat waktu dan bekerja sungguh-sungguh saat ada inspeksi dari atasan, tetapi sering datang terlambat dan bermalas-malasan saat tidak ada yang mengawasi. Sikap ASN tersebut menunjukkan…",
    options: [
      "Kedisiplinan yang tinggi dalam bekerja",
      "Kemampuan menyesuaikan diri dengan situasi",
      "Kecerdasan dalam membaca suasana kantor",
      "Sikap profesional yang patut dicontoh",
      "Tidak adanya konsistensi antara sikap dan tindakan, sehingga bukan integritas"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 44,
    code: "INT-14",
    cat: "Integritas",
    type: "Konsistensi sikap-ucapan-tindakan",
    q: "Seorang ASN selalu menolak pungutan liar, baik saat atasannya berada di kantor maupun saat atasannya sedang dinas ke luar kota. Sikap ASN tersebut menunjukkan…",
    options: [
      "Integritas, yaitu keselarasan sikap dan tindakan tanpa tergantung diawasi atau tidak",
      "Ketidakmampuan ASN itu bergaul dengan rekan kerjanya",
      "Sikap kaku yang menyulitkan pelayanan",
      "Keinginan ASN itu mencari perhatian atasan",
      "Sikap yang hanya menguntungkan dirinya sendiri"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 45,
    code: "INT-15",
    cat: "Integritas",
    type: "Konsistensi sikap-ucapan-tindakan",
    q: "Seorang pejabat sering berpidato tentang pentingnya pemberantasan korupsi di depan umum, tetapi diam-diam menerima suap dari pengusaha yang mengurus proyek di instansinya. Sikap pejabat tersebut menunjukkan…",
    options: [
      "Kemampuan berpidato yang baik di depan umum",
      "Kecerdasan dalam menjaga citra di mata publik",
      "Tidak adanya keselarasan antara perkataan dan perbuatan",
      "Sikap yang realistis dalam dunia birokrasi",
      "Kepatuhan pada aturan yang berlaku di instansinya"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 46,
    code: "INT-16",
    cat: "Integritas",
    type: "Konsistensi sikap-ucapan-tindakan",
    q: "Seorang bendahara selalu membuat laporan keuangan secara jujur dan teliti, meskipun tidak ada yang memeriksa laporannya. Sikap bendahara tersebut mencerminkan nilai…",
    options: [
      "Nasionalisme",
      "Profesionalisme semata",
      "Kedisiplinan waktu",
      "Patriotisme",
      "Integritas"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 47,
    code: "INT-17",
    cat: "Integritas",
    type: "Konsistensi sikap-ucapan-tindakan",
    q: "Seorang guru diminta teman dekatnya membocorkan soal ujian yang akan diujikan esok hari. Guru itu menolak permintaan tersebut meskipun temannya itu sudah lama dikenalnya. Sikap guru tersebut menunjukkan…",
    options: [
      "Konsistensi memegang kejujuran tanpa memandang siapa yang meminta",
      "Ketidakpedulian guru itu pada pertemanan",
      "Sikap guru itu yang terlalu kaku dalam bergaul",
      "Keinginan guru itu menjaga rahasia soal demi promosi jabatan",
      "Ketidakmampuan guru itu membantu teman dekatnya"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 48,
    code: "INT-18",
    cat: "Integritas",
    type: "Konsistensi sikap-ucapan-tindakan",
    q: "Seorang ASN berjanji kepada warga akan menyelesaikan pengaduan dalam waktu tiga hari. Ia tetap menepati janji itu meskipun atasannya memintanya menunda dan tidak ada warga yang menagihnya. Sikap ASN tersebut mencerminkan…",
    options: [
      "Kepatuhan mutlak pada perintah atasan",
      "Ketidakmampuan ASN itu mengatur prioritas kerja",
      "Sikap yang mengabaikan arahan pimpinan",
      "Integritas, yaitu menepati ucapan dengan tindakan",
      "Keinginan ASN itu mencari popularitas di mata warga"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 49,
    code: "INT-19",
    cat: "Integritas",
    type: "Konsistensi sikap-ucapan-tindakan",
    q: "Seorang pegawai melayani warga dengan ramah dan sabar, baik saat kantor sedang ramai maupun saat sedang sepi. Sikap pegawai tersebut menunjukkan…",
    options: [
      "Kemampuan pegawai itu mengatur emosi sesaat",
      "Konsistensi sikap dalam melayani tanpa tergantung situasi",
      "Keinginan pegawai itu dipuji oleh warga",
      "Kepatuhan pegawai itu pada aturan jam kerja",
      "Sikap pegawai itu yang berlebihan dalam melayani"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 50,
    code: "INT-20",
    cat: "Integritas",
    type: "Konsistensi sikap-ucapan-tindakan",
    q: "Seorang pejabat hidup sederhana sesuai dengan penghasilannya, meskipun ia berwenang mengelola anggaran besar. Gaya hidup pejabat tersebut menunjukkan…",
    options: [
      "Ketidakmampuan pejabat itu menikmati hasil kerjanya",
      "Keselarasan antara ucapan anti korupsi dan tindakan nyata dalam kehidupan sehari-hari",
      "Sikap pejabat itu yang tidak peduli pada penampilan",
      "Keinginan pejabat itu menarik simpati masyarakat",
      "Ketidaktahuan pejabat itu tentang gaya hidup modern"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 51,
    code: "INT-21",
    cat: "Integritas",
    type: "Konsistensi sikap-ucapan-tindakan",
    q: "Seorang ASN diminta rekan kerjanya menandatangani dokumen yang isinya tidak sesuai dengan kenyataan. ASN itu menolak meskipun rekan tersebut menekannya dan berjanji tidak akan ada yang tahu. Sikap ASN tersebut mencerminkan…",
    options: [
      "Ketidakmampuan ASN itu bekerja sama dalam tim",
      "Sikap ASN itu yang mempersulit pekerjaan rekan",
      "Keinginan ASN itu menjaga jarak dari rekan kerjanya",
      "Integritas, yaitu berpegang pada kebenaran walau ditekan dan tanpa pengawasan",
      "Sikap ASN itu yang takut pada sanksi atasan"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 52,
    code: "INT-22",
    cat: "Integritas",
    type: "Kejujuran dalam jabatan",
    q: "Seorang bendahara menemukan kesalahan pengetikan angka dalam laporan anggaran yang sudah disusun. Sikap yang paling mencerminkan kejujuran dalam jabatan adalah…",
    options: [
      "Membiarkan kesalahan itu karena jumlahnya kecil",
      "Menyembunyikan kesalahan itu agar tidak ditegur atasan",
      "Memperbaiki kesalahan itu sesuai prosedur dan melaporkannya kepada atasan",
      "Meminta rekan bendahara menanggung kesalahan itu",
      "Menghapus laporan itu dan membuat laporan baru tanpa jejak"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 53,
    code: "INT-23",
    cat: "Integritas",
    type: "Kejujuran dalam jabatan",
    q: "Seorang ASN mengetahui rekan kerjanya menggunakan ijazah palsu untuk naik pangkat. Sikap ASN yang paling berintegritas adalah…",
    options: [
      "Membiarkannya karena bukan urusannya",
      "Menggunakan informasi itu untuk menekan rekan tersebut",
      "Melaporkan temuan itu melalui jalur yang berlaku di instansinya",
      "Menasihati rekan itu secara diam-diam tanpa melapor",
      "Menyebarkan informasi itu kepada seluruh pegawai"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 54,
    code: "INT-24",
    cat: "Integritas",
    type: "Kejujuran dalam jabatan",
    q: "Seorang panitia seleksi pegawai ditawari bocoran soal oleh pihak tertentu agar peserta tertentu diloloskan. Sikap panitia yang paling mencerminkan kejujuran dalam jabatan adalah…",
    options: [
      "Menerima bocoran itu lalu membagikannya kepada semua peserta",
      "Menerima bocoran itu asalkan tidak diketahui peserta lain",
      "Menerima bocoran itu lalu menggunakannya sebagian saja",
      "Menerima bocoran itu untuk dipelajari sendiri",
      "Menolak bocoran itu dan menjaga kerahasiaan serta objektivitas seleksi"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 55,
    code: "INT-25",
    cat: "Integritas",
    type: "Kejujuran dalam jabatan",
    q: "Seorang pejabat mengisi Laporan Harta Kekayaan Penyelenggara Negara (LHKPN) dengan mencantumkan seluruh asetnya secara lengkap dan benar, termasuk aset yang diperoleh sebelum menjabat. Sikap pejabat tersebut mencerminkan…",
    options: [
      "Kejujuran dan tanggung jawab dalam jabatan publik",
      "Keinginan pejabat itu dipuji oleh pemeriksa",
      "Kewajiban administratif yang memberatkan pejabat",
      "Sikap pejabat itu yang tidak memahami aturan LHKPN",
      "Upaya pejabat itu menghindari pemeriksaan lebih lanjut"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 56,
    code: "INT-26",
    cat: "Integritas",
    type: "Kejujuran dalam jabatan",
    q: "Menjelang audit tahunan, atasan meminta seorang ASN memasukkan nota perjalanan dinas fiktif ke dalam berkas pertanggungjawaban agar serapan anggaran terlihat optimal. Sikap ASN yang paling mencerminkan integritas adalah…",
    options: [
      "Memenuhi permintaan atasan demi kekompakan tim",
      "Menolak dan menyusun laporan sesuai transaksi yang benar-benar terjadi",
      "Memasukkan sebagian nota fiktif saja agar tidak ketahuan",
      "Mengundurkan diri dari kepanitiaan tanpa memberi alasan",
      "Meminta atasan membuat sendiri berkas tersebut"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 57,
    code: "INT-27",
    cat: "Integritas",
    type: "Kejujuran dalam jabatan",
    q: "Seorang pegawai menyadari telah salah menginput data penerima bantuan sehingga ada warga yang tidak menerima haknya. Sikap pegawai yang paling berintegritas adalah…",
    options: [
      "Membiarkan kesalahan itu karena sudah terlanjur",
      "Menyalahkan sistem aplikasi yang digunakan",
      "Meminta warga itu menunggu sampai periode berikutnya",
      "Menyembunyikan kesalahan itu agar tidak ditegur",
      "Mengakui kesalahan, memperbaiki data, dan memastikan warga menerima haknya"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 58,
    code: "INT-28",
    cat: "Integritas",
    type: "Kejujuran dalam jabatan",
    q: "Seorang ASN selalu mengisi daftar hadir sesuai dengan waktu kedatangannya yang sebenarnya, meskipun tidak ada petugas yang memeriksa daftar hadir itu. Sikap ASN tersebut menunjukkan…",
    options: [
      "Ketidakpedulian ASN itu pada aturan kehadiran",
      "Kejujuran dalam hal kecil sebagai wujud integritas",
      "Sikap ASN itu yang terlalu kaku pada aturan",
      "Keinginan ASN itu memperoleh penilaian kinerja yang baik",
      "Ketidaktahuan ASN itu bahwa daftar hadir tidak diperiksa"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 59,
    code: "INT-29",
    cat: "Integritas",
    type: "Kejujuran dalam jabatan",
    q: "Seorang pejabat menemukan data penerima bantuan sosial yang dimanipulasi agar keluarganya mendapat bagian lebih besar. Sikap pejabat yang paling mencerminkan kejujuran dalam jabatan adalah…",
    options: [
      "Membiarkan manipulasi itu karena dilakukan oleh keluarganya",
      "Menolak memanipulasi data dan memastikan bantuan disalurkan sesuai ketentuan",
      "Meminta keluarganya mengembalikan sebagian bantuan itu",
      "Menyembunyikan manipulasi itu dari pemeriksa",
      "Memindahkan data itu ke daerah lain agar tidak ketahuan"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 60,
    code: "INT-30",
    cat: "Integritas",
    type: "Kejujuran dalam jabatan",
    q: "Dalam pengadaan barang kantor, seorang ASN menolak tawaran pemasok yang menaikkan harga barang (mark-up) dengan imbalan sebagian keuntungan untuk dirinya. Sikap ASN tersebut mencerminkan…",
    options: [
      "Ketidakmampuan ASN itu bernegosiasi dengan pemasok",
      "Keinginan ASN itu mencari pemasok yang lebih murah",
      "Sikap ASN itu yang mempersulit proses pengadaan",
      "Kejujuran dalam jabatan dan penolakan terhadap penyalahgunaan wewenang",
      "Ketidaktahuan ASN itu tentang harga pasar barang tersebut"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 61,
    code: "BEL-01",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Berikut ini yang termasuk nilai dasar bela negara menurut UU Nomor 23 Tahun 2019 adalah…",
    options: [
      "Sadar berbangsa dan bernegara",
      "Setia kepada golongan sendiri di atas kepentingan negara",
      "Mengutamakan kepentingan pribadi dalam setiap keputusan",
      "Menolak segala bentuk perubahan dalam masyarakat",
      "Mementingkan kelompok suku di atas persatuan bangsa"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 62,
    code: "BEL-02",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Seorang siswa mengikuti upacara bendera setiap hari Senin dengan khidmat, menyanyikan lagu Indonesia Raya dengan sungguh-sungguh, dan menghormati bendera Merah Putih. Sikap siswa tersebut merupakan wujud nilai dasar bela negara, yaitu…",
    options: [
      "Kemampuan awal bela negara",
      "Cinta tanah air",
      "Rela berkorban untuk bangsa dan negara",
      "Sadar berbangsa dan bernegara",
      "Setia pada Pancasila sebagai ideologi negara"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 63,
    code: "BEL-03",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Ketika terjadi banjir besar di daerah lain, seorang pemuda meninggalkan pekerjaannya selama seminggu untuk menjadi relawan evakuasi dan penyaluran bantuan. Sikap pemuda tersebut mencerminkan nilai dasar bela negara, yaitu…",
    options: [
      "Kemampuan awal bela negara",
      "Sadar berbangsa dan bernegara",
      "Rela berkorban untuk bangsa dan negara",
      "Cinta tanah air",
      "Setia pada Pancasila sebagai ideologi negara"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 64,
    code: "BEL-04",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Seorang warga negara selalu menaati peraturan lalu lintas, membayar pajak tepat waktu, dan tidak menyebarkan berita yang belum jelas kebenarannya. Sikap warga tersebut merupakan wujud nilai dasar bela negara, yaitu…",
    options: [
      "Kemampuan awal bela negara",
      "Rela berkorban untuk bangsa dan negara",
      "Setia pada Pancasila sebagai ideologi negara",
      "Sadar berbangsa dan bernegara",
      "Cinta tanah air"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 65,
    code: "BEL-05",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Seorang pelajar menolak ajakan temannya untuk mengikuti kelompok yang menyebarkan paham yang menolak Pancasila sebagai dasar negara. Sikap pelajar tersebut mencerminkan nilai dasar bela negara, yaitu…",
    options: [
      "Kemampuan awal bela negara",
      "Cinta tanah air",
      "Sadar berbangsa dan bernegara",
      "Rela berkorban untuk bangsa dan negara",
      "Setia pada Pancasila sebagai ideologi negara"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 66,
    code: "BEL-06",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Seorang mahasiswa mengikuti pendidikan kewarganegaraan dan pelatihan dasar kemiliteran yang diselenggarakan kampusnya dengan sungguh-sungguh. Kegiatan mahasiswa tersebut merupakan wujud nilai dasar bela negara, yaitu…",
    options: [
      "Cinta tanah air",
      "Sadar berbangsa dan bernegara",
      "Kemampuan awal bela negara",
      "Rela berkorban untuk bangsa dan negara",
      "Setia pada Pancasila sebagai ideologi negara"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 67,
    code: "BEL-07",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Berikut ini sikap yang TIDAK mencerminkan nilai dasar bela negara adalah…",
    options: [
      "Mengikuti upacara bendera dengan khidmat",
      "Membayar pajak tepat waktu",
      "Menjaga kerukunan antarwarga yang berbeda suku",
      "Mempelajari sejarah perjuangan bangsa",
      "Menyebarkan ujaran kebencian terhadap kelompok lain"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 68,
    code: "BEL-08",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Jumlah nilai dasar bela negara menurut UU Nomor 23 Tahun 2019 adalah…",
    options: [
      "Lima",
      "Tiga",
      "Empat",
      "Dua",
      "Enam"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 69,
    code: "BEL-09",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Seorang ASN rela mengorbankan waktu libur dan sebagian penghasilannya untuk membantu korban bencana alam di daerah lain. Nilai dasar bela negara yang diwujudkan ASN tersebut adalah…",
    options: [
      "Sadar berbangsa dan bernegara",
      "Cinta tanah air",
      "Setia pada Pancasila sebagai ideologi negara",
      "Rela berkorban untuk bangsa dan negara",
      "Kemampuan awal bela negara"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 70,
    code: "BEL-10",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Berikut ini sikap yang bertentangan dengan nilai dasar bela negara 'cinta tanah air' adalah…",
    options: [
      "Mengikuti upacara bendera dengan khidmat",
      "Merusak fasilitas umum dan mencoret-coret monumen perjuangan",
      "Mempelajari sejarah perjuangan bangsa",
      "Menggunakan produk dalam negeri",
      "Menjaga kebersihan lingkungan tempat tinggal"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 71,
    code: "BEL-11",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Nilai dasar bela negara 'sadar berbangsa dan bernegara' berarti…",
    options: [
      "Menyadari kedudukan sebagai bagian dari bangsa Indonesia dengan hak dan kewajiban sebagai warga negara",
      "Menghafal seluruh pasal dalam UUD 1945",
      "Menolak segala pengaruh budaya asing",
      "Mengutamakan kepentingan keluarga di atas kepentingan bangsa",
      "Menjalankan tugas kemiliteran setiap saat"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 72,
    code: "BEL-12",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Seorang warga negara mempelajari Pancasila dan mengamalkannya dalam kehidupan sehari-hari, seperti bermusyawarah dalam mengambil keputusan bersama. Nilai dasar bela negara yang diwujudkan warga tersebut adalah…",
    options: [
      "Kemampuan awal bela negara",
      "Cinta tanah air",
      "Sadar berbangsa dan bernegara",
      "Setia pada Pancasila sebagai ideologi negara",
      "Rela berkorban untuk bangsa dan negara"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 73,
    code: "BEL-13",
    cat: "Bela Negara",
    type: "Hak & kewajiban bela negara",
    q: "Seorang warga negara berpendapat bahwa ikut serta dalam upaya pembelaan negara hanya tugas tentara dan polisi, bukan tugas warga biasa. Pandangan tersebut keliru karena UUD 1945 menegaskan bahwa upaya pembelaan negara merupakan…",
    options: [
      "Tugas khusus bagi mereka yang bekerja di bidang pertahanan",
      "Kewajiban pemerintah pusat semata",
      "Tugas sukarela yang boleh dipilih warga negara",
      "Urusan internal angkatan bersenjata",
      "Hak dan kewajiban setiap warga negara"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 74,
    code: "BEL-14",
    cat: "Bela Negara",
    type: "Hak & kewajiban bela negara",
    q: "Perbedaan pengaturan antara 'pembelaan negara' dan 'pertahanan dan keamanan negara' dalam UUD 1945 adalah…",
    options: [
      "Pembelaan negara diatur Pasal 27 ayat (3), sedangkan pertahanan dan keamanan negara diatur Pasal 30 ayat (1)",
      "Keduanya diatur dalam Pasal 27 ayat (3)",
      "Keduanya diatur dalam Pasal 30 ayat (1)",
      "Pembelaan negara diatur Pasal 30 ayat (1), sedangkan pertahanan dan keamanan negara diatur Pasal 27 ayat (3)",
      "Keduanya diatur dalam Pasal 29"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 75,
    code: "BEL-15",
    cat: "Bela Negara",
    type: "Hak & kewajiban bela negara",
    q: "Menurut UU Nomor 23 Tahun 2019, upaya bela negara diselenggarakan melalui komponen-komponen berikut, KECUALI…",
    options: [
      "Pendidikan kewarganegaraan",
      "Pelatihan dasar kemiliteran",
      "Pengabdian sesuai dengan profesi",
      "Pengabdian sebagai prajurit Tentara Nasional Indonesia",
      "Pengabdian sebagai anggota partai politik"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 76,
    code: "BEL-16",
    cat: "Bela Negara",
    type: "Hak & kewajiban bela negara",
    q: "Pengabdian sebagai prajurit Tentara Nasional Indonesia secara sukarela atau wajib merupakan salah satu bentuk…",
    options: [
      "Pelayanan publik",
      "Kegiatan sosial kemasyarakatan",
      "Pekerjaan sampingan bagi warga negara",
      "Tugas pemerintah daerah",
      "Bela negara"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 77,
    code: "BEL-17",
    cat: "Bela Negara",
    type: "Hak & kewajiban bela negara",
    q: "Kewajiban bela negara bagi warga negara didasarkan pada UUD 1945 Pasal 27 ayat (3) dan Pasal 30 ayat (1). Pernyataan yang benar tentang kedua pasal tersebut adalah…",
    options: [
      "Keduanya mengatur hak sekaligus kewajiban warga negara",
      "Keduanya hanya mengatur hak warga negara",
      "Keduanya hanya mengatur kewajiban warga negara",
      "Pasal 27 ayat (3) mengatur hak, sedangkan Pasal 30 ayat (1) mengatur kewajiban",
      "Keduanya mengatur tugas Tentara Nasional Indonesia"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 78,
    code: "BEL-18",
    cat: "Bela Negara",
    type: "Hak & kewajiban bela negara",
    q: "Bela negara sebagai hak dan kewajiban setiap warga negara memiliki dasar hukum tertinggi pada…",
    options: [
      "Ketetapan Majelis Permusyawaratan Rakyat",
      "Peraturan Presiden",
      "Undang-Undang Nomor 23 Tahun 2019 saja",
      "Undang-Undang Dasar 1945",
      "Peraturan daerah"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 79,
    code: "BEL-19",
    cat: "Bela Negara",
    type: "Hak & kewajiban bela negara",
    q: "Warga negara berhak memperoleh pembinaan kesadaran bela negara, salah satunya melalui…",
    options: [
      "Pelatihan kerja di perusahaan swasta",
      "Kursus bahasa asing",
      "Pendidikan kewarganegaraan",
      "Pelatihan keterampilan berwirausaha",
      "Pendidikan kesenian tradisional"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 80,
    code: "BEL-20",
    cat: "Bela Negara",
    type: "Hak & kewajiban bela negara",
    q: "Seorang siswa mengikuti kegiatan pramuka dan pendidikan kewarganegaraan di sekolahnya dengan sungguh-sungguh. Kegiatan tersebut termasuk upaya bela negara karena…",
    options: [
      "Mengisi waktu luang siswa di luar jam pelajaran",
      "Menanamkan nilai dasar bela negara sejak dini melalui pendidikan",
      "Melatih siswa agar siap menjadi anggota militer",
      "Menggantikan mata pelajaran lain yang kurang penting",
      "Memberikan nilai tambah pada rapor siswa"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 81,
    code: "BEL-21",
    cat: "Bela Negara",
    type: "Hak & kewajiban bela negara",
    q: "Ancaman terhadap kedaulatan negara dapat datang dalam berbagai bentuk. Pernyataan yang paling tepat tentang ancaman terhadap kedaulatan negara adalah…",
    options: [
      "Ancaman hanya berasal dari serangan militer negara lain",
      "Ancaman hanya berupa bencana alam yang merusak wilayah",
      "Ancaman hanya berupa krisis ekonomi global",
      "Ancaman dapat berupa ancaman militer maupun nonmiliter, termasuk paham yang bertentangan dengan Pancasila",
      "Ancaman hanya berasal dari dalam negeri"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 82,
    code: "BEL-22",
    cat: "Bela Negara",
    type: "Bela negara non-militer (profesi)",
    q: "Seorang guru memilih mengajar di daerah tertinggal, terdepan, dan terluar meskipun fasilitasnya terbatas dan jauh dari keluarga. Tindakan guru tersebut termasuk bela negara karena…",
    options: [
      "Guru itu tidak memiliki pilihan tempat mengajar lain",
      "Guru itu ingin memperoleh tunjangan daerah terpencil",
      "Mengabdikan profesinya untuk mencerdaskan kehidupan bangsa hingga ke pelosok negeri",
      "Guru itu ingin terkenal sebagai guru teladan",
      "Guru itu menghindari persaingan mengajar di kota"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 83,
    code: "BEL-23",
    cat: "Bela Negara",
    type: "Bela negara non-militer (profesi)",
    q: "Seorang petani mengembangkan varietas padi unggul sehingga produksi pangan nasional meningkat dan Indonesia tidak lagi bergantung pada impor beras. Tindakan petani tersebut merupakan bentuk bela negara karena…",
    options: [
      "Meningkatkan penghasilannya sendiri sebagai petani",
      "Memperkuat ketahanan pangan sebagai bagian dari kedaulatan bangsa",
      "Membuktikan kemampuan petani Indonesia di bidang pertanian",
      "Mengurangi jumlah impor beras dari negara lain",
      "Mendapatkan bantuan bibit dari pemerintah"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 84,
    code: "BEL-24",
    cat: "Bela Negara",
    type: "Bela negara non-militer (profesi)",
    q: "Seorang seniman mengangkat cerita rakyat dan kesenian tradisional daerahnya ke panggung internasional sehingga budaya Indonesia semakin dikenal dunia. Tindakan seniman tersebut termasuk bela negara karena…",
    options: [
      "Menghasilkan keuntungan dari pertunjukan di luar negeri",
      "Membuktikan bahwa kesenian Indonesia lebih baik dari kesenian asing",
      "Mengisi waktu luang dengan berkesenian",
      "Mendapatkan undangan tampil dari panitia luar negeri",
      "Menjaga dan memperkenalkan identitas budaya bangsa kepada dunia"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 85,
    code: "BEL-25",
    cat: "Bela Negara",
    type: "Bela negara non-militer (profesi)",
    q: "Seorang pelajar Indonesia meraih medali emas olimpiade sains internasional dan mengibarkan bendera Merah Putih di podium juara. Prestasi pelajar tersebut merupakan bentuk bela negara karena…",
    options: [
      "Mengharumkan nama bangsa di kancah internasional melalui prestasi",
      "Mendapatkan beasiswa untuk melanjutkan pendidikan",
      "Membuktikan bahwa pelajar Indonesia lebih pintar dari pelajar negara lain",
      "Mengisi liburan sekolah dengan mengikuti lomba",
      "Mendapatkan hadiah uang dari penyelenggara lomba"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 86,
    code: "BEL-26",
    cat: "Bela Negara",
    type: "Bela negara non-militer (profesi)",
    q: "Seorang relawan mendirikan dapur umum dan posko kesehatan bagi korban gempa di daerah yang sulit dijangkau, meskipun ia harus menempuh perjalanan jauh dan berbahaya. Tindakan relawan tersebut mencerminkan nilai bela negara, yaitu…",
    options: [
      "Kemampuan awal bela negara",
      "Rela berkorban untuk bangsa dan negara",
      "Sadar berbangsa dan bernegara",
      "Setia pada Pancasila sebagai ideologi negara",
      "Cinta tanah air"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 87,
    code: "BEL-27",
    cat: "Bela Negara",
    type: "Bela negara non-militer (profesi)",
    q: "Seorang pengusaha membayar pajak tepat waktu, tidak melakukan penggelapan pajak, dan membuka lapangan kerja bagi masyarakat sekitar. Sikap pengusaha tersebut merupakan bentuk bela negara karena…",
    options: [
      "Menambah keuntungan perusahaannya sendiri",
      "Membuktikan bahwa perusahaannya taat aturan",
      "Menghindari sanksi dari petugas pajak",
      "Menarik simpati masyarakat sekitar",
      "Berkontribusi pada pembangunan dan kesejahteraan bangsa melalui profesinya"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 88,
    code: "BEL-28",
    cat: "Bela Negara",
    type: "Bela negara non-militer (profesi)",
    q: "Seorang dokter mengembangkan obat herbal murah dari tanaman lokal sehingga masyarakat miskin dapat berobat dengan biaya terjangkau. Tindakan dokter tersebut termasuk bela negara karena…",
    options: [
      "Meningkatkan reputasinya sebagai dokter peneliti",
      "Mendapatkan dana penelitian dari pemerintah",
      "Mengabdikan keahlian profesinya untuk kepentingan kesehatan bangsa",
      "Membuktikan bahwa obat herbal lebih baik dari obat modern",
      "Mengurangi ketergantungan pada obat impor yang mahal"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 89,
    code: "BEL-29",
    cat: "Bela Negara",
    type: "Bela negara non-militer (profesi)",
    q: "Seorang jurnalis dengan gigih memberitakan kebenaran dan membantah berita bohong yang dapat memecah belah persatuan bangsa, meskipun ia mendapat ancaman dari pihak yang dirugikan. Tindakan jurnalis tersebut merupakan bentuk bela negara karena…",
    options: [
      "Menjaga persatuan bangsa melalui pemberitaan yang benar dan bertanggung jawab",
      "Mencari popularitas sebagai jurnalis pemberani",
      "Mengisi halaman berita dengan isu yang menarik",
      "Membuktikan keberaniannya menghadapi ancaman",
      "Mendapatkan penghargaan jurnalistik atas liputannya"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 90,
    code: "BEL-30",
    cat: "Bela Negara",
    type: "Bela negara non-militer (profesi)",
    q: "Seorang insinyur muda mengembangkan sistem irigasi sederhana berbiaya murah untuk petani di daerah kering sehingga hasil panen meningkat dan petani tidak lagi kekurangan air. Tindakan insinyur tersebut merupakan bentuk bela negara karena…",
    options: [
      "Meningkatkan reputasinya sebagai insinyur muda",
      "Mendapatkan proyek irigasi dari pemerintah daerah",
      "Membuktikan bahwa teknologi sederhana lebih baik dari teknologi mahal",
      "Mengabdikan keahlian profesinya untuk kesejahteraan dan ketahanan pangan bangsa",
      "Mengurangi biaya pembangunan irigasi di daerah tersebut"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 91,
    code: "KON-01",
    cat: "Empat Konsensus Kebangsaan",
    type: "Pancasila",
    q: "Suatu peraturan daerah ternyata bertentangan dengan nilai-nilai Pancasila. Berdasarkan kedudukan Pancasila sebagai sumber segala sumber hukum negara, peraturan daerah tersebut…",
    options: [
      "Tidak boleh berlaku karena bertentangan dengan Pancasila",
      "Tetap berlaku karena dibuat oleh pemerintah daerah",
      "Berlaku sampai diganti peraturan yang lebih tinggi",
      "Hanya berlaku di daerah itu saja",
      "Berlaku jika disetujui oleh DPRD setempat"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 92,
    code: "KON-02",
    cat: "Empat Konsensus Kebangsaan",
    type: "Pancasila",
    q: "Seorang warga negara menghormati teman yang berbeda agama, tidak memaksakan keyakinannya kepada orang lain, dan mempersilakan tetangganya beribadah dengan tenang. Sikap warga tersebut merupakan pengamalan Pancasila sila…",
    options: [
      "Kedua",
      "Pertama",
      "Ketiga",
      "Keempat",
      "Kelima"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 93,
    code: "KON-03",
    cat: "Empat Konsensus Kebangsaan",
    type: "Pancasila",
    q: "Ketika terjadi bencana alam, sekelompok relawan dari berbagai daerah membantu korban tanpa membedakan suku, agama, dan latar belakang korban. Sikap relawan tersebut merupakan pengamalan Pancasila sila…",
    options: [
      "Pertama",
      "Keempat",
      "Kedua",
      "Kelima",
      "Ketiga"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 94,
    code: "KON-04",
    cat: "Empat Konsensus Kebangsaan",
    type: "Pancasila",
    q: "Warga sebuah desa bergotong royong membangun balai desa dan membersihkan lingkungan secara bersama-sama tanpa membedakan status sosial. Kegiatan warga tersebut merupakan pengamalan Pancasila sila…",
    options: [
      "Pertama",
      "Kedua",
      "Kelima",
      "Ketiga",
      "Keempat"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 95,
    code: "KON-05",
    cat: "Empat Konsensus Kebangsaan",
    type: "Pancasila",
    q: "Dalam rapat rukun tetangga, warga yang berbeda pendapat bermusyawarah dengan tenang sampai mencapai mufakat tanpa ada pihak yang dipaksakan. Sikap warga tersebut merupakan pengamalan Pancasila sila…",
    options: [
      "Pertama",
      "Kedua",
      "Ketiga",
      "Kelima",
      "Keempat"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 96,
    code: "KON-06",
    cat: "Empat Konsensus Kebangsaan",
    type: "Pancasila",
    q: "Pemerintah daerah membagikan bantuan sosial secara adil kepada warga yang berhak, mendahulukan keluarga miskin dan penyandang disabilitas, tanpa membedakan latar belakang penerimanya. Kebijakan tersebut merupakan pengamalan Pancasila sila…",
    options: [
      "Pertama",
      "Kedua",
      "Kelima",
      "Ketiga",
      "Keempat"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 97,
    code: "KON-07",
    cat: "Empat Konsensus Kebangsaan",
    type: "Pancasila",
    q: "Pancasila disebut sebagai pandangan hidup bangsa (way of life) karena…",
    options: [
      "Hanya berlaku pada masa perjuangan kemerdekaan",
      "Menjadi pedoman dalam kehidupan berbangsa dan bernegara sehari-hari",
      "Hanya dipelajari di sekolah dan perguruan tinggi",
      "Berfungsi sebagai lagu kebangsaan negara",
      "Hanya mengatur hubungan antarlembaga negara"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 98,
    code: "KON-08",
    cat: "Empat Konsensus Kebangsaan",
    type: "Pancasila",
    q: "Pernyataan yang benar tentang Pancasila sebagai ideologi terbuka adalah…",
    options: [
      "Nilai-nilai dasarnya tetap, tetapi penjabarannya dapat berkembang sesuai perkembangan zaman",
      "Nilai-nilai dasarnya dapat diubah kapan pun sesuai kebutuhan",
      "Pancasila hanya berlaku untuk masa lalu dan tidak relevan lagi",
      "Pancasila tertutup dari segala pengaruh perkembangan zaman",
      "Pancasila dapat diganti dengan ideologi lain yang lebih modern"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 99,
    code: "KON-09",
    cat: "Empat Konsensus Kebangsaan",
    type: "Pancasila",
    q: "Salah satu butir pengamalan Pancasila sila kedua (Kemanusiaan yang Adil dan Beradab) adalah…",
    options: [
      "Mengutamakan kepentingan kelompok sendiri",
      "Memaksakan kehendak kepada orang lain",
      "Menghormati hak orang lain dan tidak berlaku semena-mena",
      "Menolak membantu orang yang berbeda suku",
      "Mengabaikan penderitaan orang lain"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 100,
    code: "KON-10",
    cat: "Empat Konsensus Kebangsaan",
    type: "UUD 1945",
    q: "Undang-Undang Dasar 1945 telah mengalami amandemen sebanyak…",
    options: [
      "Dua kali, yaitu pada tahun 1999 dan 2000",
      "Empat kali, yaitu pada tahun 1999, 2000, 2001, dan 2002",
      "Tiga kali, yaitu pada tahun 1999, 2000, dan 2001",
      "Satu kali, yaitu pada tahun 2002",
      "Lima kali, yaitu pada tahun 1999 sampai 2003"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 101,
    code: "KON-11",
    cat: "Empat Konsensus Kebangsaan",
    type: "UUD 1945",
    q: "Ketentuan 'Negara Indonesia adalah negara hukum' tercantum dalam UUD 1945…",
    options: [
      "Pasal 1 ayat (1)",
      "Pasal 1 ayat (3)",
      "Pasal 1 ayat (2)",
      "Pasal 2",
      "Pasal 3"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 102,
    code: "KON-12",
    cat: "Empat Konsensus Kebangsaan",
    type: "UUD 1945",
    q: "Ketentuan tentang persamaan kedudukan setiap warga negara di dalam hukum dan pemerintahan tercantum dalam UUD 1945…",
    options: [
      "Pasal 27 ayat (2)",
      "Pasal 27 ayat (3)",
      "Pasal 28",
      "Pasal 27 ayat (1)",
      "Pasal 29"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 103,
    code: "KON-13",
    cat: "Empat Konsensus Kebangsaan",
    type: "UUD 1945",
    q: "Jaminan kemerdekaan tiap-tiap penduduk untuk memeluk agamanya masing-masing dan beribadat menurut agamanya diatur dalam UUD 1945…",
    options: [
      "Pasal 27",
      "Pasal 28",
      "Pasal 30",
      "Pasal 31",
      "Pasal 29"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 104,
    code: "KON-14",
    cat: "Empat Konsensus Kebangsaan",
    type: "UUD 1945",
    q: "Hak setiap warga negara untuk mendapat pendidikan tercantum dalam UUD 1945…",
    options: [
      "Pasal 31",
      "Pasal 32",
      "Pasal 33",
      "Pasal 34",
      "Pasal 35"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 105,
    code: "KON-15",
    cat: "Empat Konsensus Kebangsaan",
    type: "UUD 1945",
    q: "Ketentuan bahwa fakir miskin dan anak-anak terlantar dipelihara oleh negara tercantum dalam UUD 1945…",
    options: [
      "Pasal 31",
      "Pasal 32",
      "Pasal 34",
      "Pasal 33",
      "Pasal 35"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 106,
    code: "KON-16",
    cat: "Empat Konsensus Kebangsaan",
    type: "UUD 1945",
    q: "Ketentuan tentang bendera negara Sang Merah Putih tercantum dalam UUD 1945…",
    options: [
      "Pasal 36",
      "Pasal 36A",
      "Pasal 36B",
      "Pasal 36C",
      "Pasal 35"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 107,
    code: "KON-17",
    cat: "Empat Konsensus Kebangsaan",
    type: "UUD 1945",
    q: "Ketentuan tentang lagu kebangsaan Indonesia Raya tercantum dalam UUD 1945…",
    options: [
      "Pasal 36B",
      "Pasal 36A",
      "Pasal 36",
      "Pasal 35",
      "Pasal 36C"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 108,
    code: "KON-18",
    cat: "Empat Konsensus Kebangsaan",
    type: "UUD 1945",
    q: "Ketentuan bahwa hal-hal lebih lanjut mengenai bendera, bahasa, lambang negara, dan lagu kebangsaan diatur dengan undang-undang tercantum dalam UUD 1945…",
    options: [
      "Pasal 35",
      "Pasal 36",
      "Pasal 36A",
      "Pasal 36C",
      "Pasal 36B"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 109,
    code: "KON-19",
    cat: "Empat Konsensus Kebangsaan",
    type: "NKRI",
    q: "Ketentuan bahwa Negara Kesatuan Republik Indonesia adalah negara kepulauan yang berciri Nusantara tercantum dalam UUD 1945…",
    options: [
      "Pasal 1 ayat (1)",
      "Pasal 1 ayat (2)",
      "Pasal 25A",
      "Pasal 18",
      "Pasal 22"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 110,
    code: "KON-20",
    cat: "Empat Konsensus Kebangsaan",
    type: "NKRI",
    q: "Seorang warga negara berpendapat bahwa Indonesia sebaiknya menjadi negara federal agar setiap daerah dapat mengatur dirinya sendiri sepenuhnya. Pendapat tersebut bertentangan dengan UUD 1945 karena Indonesia adalah…",
    options: [
      "Negara kerajaan yang dipimpin raja",
      "Negara kesatuan yang berbentuk republik, bukan negara federal",
      "Negara serikat yang terdiri dari negara-negara bagian",
      "Negara konfederasi yang longgar",
      "Negara teokrasi yang dipimpin pemuka agama"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 111,
    code: "KON-21",
    cat: "Empat Konsensus Kebangsaan",
    type: "NKRI",
    q: "Pemerintah daerah diberi kewenangan mengatur urusan rumah tangganya sendiri melalui otonomi daerah. Pernyataan yang benar tentang otonomi daerah dalam NKRI adalah…",
    options: [
      "Otonomi daerah mengubah Indonesia menjadi negara federal",
      "Otonomi daerah menghapus kekuasaan pemerintah pusat",
      "Otonomi daerah memberikan kemerdekaan penuh kepada setiap daerah",
      "Otonomi daerah tetap berada dalam bingkai Negara Kesatuan Republik Indonesia",
      "Otonomi daerah hanya berlaku untuk daerah yang berbatasan dengan negara lain"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 112,
    code: "KON-22",
    cat: "Empat Konsensus Kebangsaan",
    type: "NKRI",
    q: "Ketentuan 'Kedaulatan berada di tangan rakyat dan dilaksanakan menurut Undang-Undang Dasar' tercantum dalam UUD 1945…",
    options: [
      "Pasal 1 ayat (1)",
      "Pasal 1 ayat (3)",
      "Pasal 1 ayat (2)",
      "Pasal 2",
      "Pasal 7"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 113,
    code: "KON-23",
    cat: "Empat Konsensus Kebangsaan",
    type: "NKRI",
    q: "Seorang warga negara menolak ajakan kelompok yang ingin memisahkan diri dari Indonesia dan membentuk negara sendiri. Sikap warga tersebut mencerminkan komitmen menjaga…",
    options: [
      "Kepentingan kelompoknya sendiri",
      "Keutuhan Negara Kesatuan Republik Indonesia",
      "Kebebasan berpendapat tanpa batas",
      "Kekuasaan pemerintah daerah",
      "Tradisi daerah tempat tinggalnya"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 114,
    code: "KON-24",
    cat: "Empat Konsensus Kebangsaan",
    type: "NKRI",
    q: "Bentuk negara Indonesia menurut UUD 1945 Pasal 1 ayat (1) adalah…",
    options: [
      "Negara federal",
      "Negara serikat",
      "Kerajaan",
      "Republik serikat",
      "Negara Kesatuan yang berbentuk Republik"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 115,
    code: "KON-25",
    cat: "Empat Konsensus Kebangsaan",
    type: "Bhinneka Tunggal Ika",
    q: "Semboyan negara Bhinneka Tunggal Ika memiliki arti…",
    options: [
      "Berbeda-beda tetapi tetap satu",
      "Satu bangsa satu bahasa",
      "Persatuan di atas segalanya",
      "Keberagaman adalah kekuatan",
      "Satu nusa satu bangsa"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 116,
    code: "KON-26",
    cat: "Empat Konsensus Kebangsaan",
    type: "Bhinneka Tunggal Ika",
    q: "Sebuah desa yang penduduknya terdiri dari berbagai suku dan agama mengadakan kerja bakti bersama membangun jembatan desa tanpa membedakan latar belakang warganya. Sikap warga desa tersebut mencerminkan semangat…",
    options: [
      "Persaingan antar kelompok masyarakat",
      "Bhinneka Tunggal Ika, yaitu persatuan dalam keberagaman",
      "Kepentingan kelompok mayoritas di desa itu",
      "Tradisi desa yang diwariskan turun-temurun",
      "Kewajiban warga desa kepada kepala desa"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 117,
    code: "KON-27",
    cat: "Empat Konsensus Kebangsaan",
    type: "Bhinneka Tunggal Ika",
    q: "Dalam masyarakat yang beragam suku dan agama, sikap berikut ini sesuai dengan semangat Bhinneka Tunggal Ika, KECUALI…",
    options: [
      "Menghormati perayaan hari besar agama lain",
      "Membantu tetangga yang berbeda suku dan agama",
      "Mengikuti kerja bakti bersama warga dari berbagai latar belakang",
      "Menghargai perbedaan pendapat dalam musyawarah",
      "Memaksakan keyakinan sendiri kepada orang lain"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 118,
    code: "KON-28",
    cat: "Empat Konsensus Kebangsaan",
    type: "Bhinneka Tunggal Ika",
    q: "Sebuah sekolah yang siswanya berasal dari berbagai daerah di Indonesia mengadakan pentas seni yang menampilkan tarian, lagu, dan pakaian adat dari seluruh daerah. Kegiatan sekolah tersebut merupakan wujud…",
    options: [
      "Persaingan budaya antar daerah",
      "Upaya mencari daerah yang budayanya paling unggul",
      "Persatuan dalam keberagaman sesuai semangat Bhinneka Tunggal Ika",
      "Kewajiban sekolah dalam kurikulum kesenian",
      "Hiburan bagi orang tua siswa"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 119,
    code: "KON-29",
    cat: "Empat Konsensus Kebangsaan",
    type: "Bhinneka Tunggal Ika",
    q: "Pemerintah memberikan pelayanan publik yang sama kepada seluruh warga negara tanpa membedakan suku, agama, ras, dan golongan. Kebijakan tersebut merupakan penerapan semboyan…",
    options: [
      "Bhinneka Tunggal Ika, yaitu berbeda-beda tetapi tetap satu",
      "Pancasila sila pertama",
      "Gotong royong dalam masyarakat",
      "Musyawarah untuk mufakat",
      "Keadilan sosial semata"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 120,
    code: "KON-30",
    cat: "Empat Konsensus Kebangsaan",
    type: "Bhinneka Tunggal Ika",
    q: "Semboyan Bhinneka Tunggal Ika berasal dari kitab Sutasoma pada masa kerajaan…",
    options: [
      "Sriwijaya",
      "Mataram Kuno",
      "Singasari",
      "Majapahit",
      "Demak"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 121,
    code: "BIN-01",
    cat: "Bahasa Indonesia",
    type: "Kata baku",
    q: "Kata yang ditulis sesuai kaidah baku adalah…",
    options: [
      "Objek",
      "Obyek",
      "Objeq",
      "Obyekk",
      "Opjek"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 122,
    code: "BIN-02",
    cat: "Bahasa Indonesia",
    type: "Kata baku",
    q: "Kata yang ditulis sesuai kaidah baku adalah…",
    options: [
      "Resiko",
      "Risiko",
      "Risico",
      "Resikho",
      "Risyko"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 123,
    code: "BIN-03",
    cat: "Bahasa Indonesia",
    type: "Kata baku",
    q: "Kata yang ditulis sesuai kaidah baku adalah…",
    options: [
      "Ijin",
      "Idzin",
      "Izin",
      "Isin",
      "Idjin"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 124,
    code: "BIN-04",
    cat: "Bahasa Indonesia",
    type: "Kata baku",
    q: "Kata yang ditulis sesuai kaidah baku adalah…",
    options: [
      "Tilpon",
      "Telpon",
      "Telephon",
      "Telepon",
      "Tilipun"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 125,
    code: "BIN-05",
    cat: "Bahasa Indonesia",
    type: "Kata baku",
    q: "Kata yang ditulis sesuai kaidah baku adalah…",
    options: [
      "Nasehat",
      "Nasiehat",
      "Nasihatt",
      "Naseihat",
      "Nasihat"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 126,
    code: "BIN-06",
    cat: "Bahasa Indonesia",
    type: "Kata baku",
    q: "Kata yang ditulis sesuai kaidah baku adalah…",
    options: [
      "Kwalitas",
      "Kualites",
      "Kualitas",
      "Kwualitas",
      "Qualitas"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 127,
    code: "BIN-07",
    cat: "Bahasa Indonesia",
    type: "Kata baku",
    q: "Kata yang ditulis sesuai kaidah baku adalah…",
    options: [
      "Kharisma",
      "Karismha",
      "Kharismha",
      "Charisma",
      "Karisma"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 128,
    code: "BIN-08",
    cat: "Bahasa Indonesia",
    type: "Kata baku",
    q: "Kata yang ditulis sesuai kaidah baku adalah…",
    options: [
      "Praktik",
      "Praktek",
      "Praktiq",
      "Praktikq",
      "Prakteq"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 129,
    code: "BIN-09",
    cat: "Bahasa Indonesia",
    type: "Kata baku",
    q: "Kata yang ditulis sesuai kaidah baku adalah…",
    options: [
      "Apotik",
      "Apoteq",
      "Apotikk",
      "Apotek",
      "Apotekk"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 130,
    code: "BIN-10",
    cat: "Bahasa Indonesia",
    type: "Ejaan",
    q: "Penulisan kata 'di' yang benar terdapat pada kalimat…",
    options: [
      "Mereka pergi kesekolah setiap pagi.",
      "Anak-anak belajar di perpustakaan.",
      "Ia tinggal dirumah pamannya.",
      "Buku itu dibeli dipasar.",
      "Mereka bertemu dikantin sekolah."
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 131,
    code: "BIN-11",
    cat: "Bahasa Indonesia",
    type: "Ejaan",
    q: "Penulisan nama geografi yang benar adalah…",
    options: [
      "gunung semeru",
      "Danau Toba",
      "sungai musi",
      "pulau jawa",
      "laut jawa"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 132,
    code: "BIN-12",
    cat: "Bahasa Indonesia",
    type: "Ejaan",
    q: "Penulisan kata 'ke' yang benar terdapat pada kalimat…",
    options: [
      "Ia berjalan kekantor setiap pagi.",
      "Kami pergi kerumah paman.",
      "Mereka berlari kelapangan.",
      "Mereka pergi ke rumah nenek.",
      "Ia pulang kerumahnya."
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 133,
    code: "BIN-13",
    cat: "Bahasa Indonesia",
    type: "Ejaan",
    q: "Penulisan kata tanya 'di mana' yang benar terdapat pada kalimat…",
    options: [
      "Dimana kamu tinggal?",
      "Saya tinggal dirumah.",
      "Buku itu ada dimeja.",
      "Ia bekerja dikantor.",
      "Di mana kamu tinggal?"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 134,
    code: "BIN-14",
    cat: "Bahasa Indonesia",
    type: "Ejaan",
    q: "Penulisan nama orang dan jabatannya yang benar terdapat pada kalimat…",
    options: [
      "Presiden Joko Widodo berkunjung ke Papua.",
      "presiden joko widodo berkunjung ke Papua.",
      "Presiden joko widodo berkunjung ke Papua.",
      "presiden Joko Widodo berkunjung ke papua.",
      "Presiden Joko widodo berkunjung ke Papua."
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 135,
    code: "BIN-15",
    cat: "Bahasa Indonesia",
    type: "Ejaan",
    q: "Penulisan kata ganti tak tentu yang benar terdapat pada kalimat…",
    options: [
      "Apapun yang terjadi, kita harus bersatu.",
      "Siapapun boleh mengikuti lomba ini.",
      "Bagaimanapun caranya, tugas itu harus selesai.",
      "Kapanpun kamu datang, pintu selalu terbuka.",
      "Di manapun kamu berada, ingatlah tanah air."
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 136,
    code: "BIN-16",
    cat: "Bahasa Indonesia",
    type: "Ejaan",
    q: "Penulisan kata 'di samping' yang benar terdapat pada kalimat…",
    options: [
      "Disamping rumahnya ada taman kecil.",
      "Rumah itu terletak disamping sungai.",
      "Ia duduk disamping jendela.",
      "Taman itu berada disamping sekolah.",
      "Di samping rumahnya ada taman kecil."
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 137,
    code: "BIN-17",
    cat: "Bahasa Indonesia",
    type: "Ejaan",
    q: "Penulisan kata 'di atas' yang benar terdapat pada kalimat…",
    options: [
      "Buku itu terletak di atas meja.",
      "Buku itu terletak diatas meja.",
      "Kucing itu tidur diatas kasur.",
      "Lampu itu tergantung diatas pintu.",
      "Tas itu disimpan diatas lemari."
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 138,
    code: "BIN-18",
    cat: "Bahasa Indonesia",
    type: "Pemahaman bacaan",
    q: "Bacaan: 'Warga Desa Sukamaju menghadapi masalah kekurangan air bersih pada musim kemarau. Kepala desa mengajak seluruh warga bermusyawarah untuk mencari jalan keluar. Setelah berdiskusi panjang, warga sepakat membangun sumur bersama dan mengatur jadwal penggunaan air secara bergiliran.' Ide pokok bacaan di atas adalah…",
    options: [
      "Kekurangan air bersih di Desa Sukamaju",
      "Kepala desa mengajak warga bermusyawarah",
      "Pembangunan sumur bersama di desa",
      "Musyawarah warga Desa Sukamaju dalam mengatasi kekurangan air bersih",
      "Jadwal penggunaan air secara bergiliran"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 139,
    code: "BIN-19",
    cat: "Bahasa Indonesia",
    type: "Pemahaman bacaan",
    q: "Bacaan: 'Bahasa daerah di Indonesia berjumlah ratusan dan menjadi kekayaan budaya bangsa. Sayangnya, banyak bahasa daerah terancam punah karena generasi muda jarang menggunakannya. Pemerintah dan masyarakat perlu bekerja sama mendokumentasikan dan mengajarkan bahasa daerah agar tetap hidup.' Simpulan bacaan di atas adalah…",
    options: [
      "Bahasa daerah sudah punah di Indonesia",
      "Generasi muda tidak peduli pada budaya bangsa",
      "Bahasa daerah sebagai kekayaan budaya perlu dilestarikan bersama agar tidak punah",
      "Pemerintah melarang penggunaan bahasa daerah",
      "Bahasa daerah hanya digunakan oleh generasi tua"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 140,
    code: "BIN-20",
    cat: "Bahasa Indonesia",
    type: "Pemahaman bacaan",
    q: "Bacaan: 'Di sebuah sekolah dasar di daerah perbatasan, upacara bendera setiap hari Senin selalu dilaksanakan dengan khidmat meskipun lapangan sekolahnya sederhana. Para siswa berdiri tegak, menyanyikan lagu Indonesia Raya dengan lantang, dan menghormati bendera Merah Putih yang berkibar.' Ide pokok bacaan di atas adalah…",
    options: [
      "Keadaan lapangan sekolah di daerah perbatasan",
      "Upacara bendera yang khidmat menanamkan cinta tanah air di sekolah perbatasan",
      "Para siswa yang berdiri tegak saat upacara",
      "Lagu Indonesia Raya yang dinyanyikan dengan lantang",
      "Bendera Merah Putih yang berkibar di sekolah"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 141,
    code: "BIN-21",
    cat: "Bahasa Indonesia",
    type: "Pemahaman bacaan",
    q: "Bacaan: 'Koperasi didirikan atas asas kekeluargaan dengan tujuan menyejahterakan anggotanya. Setiap anggota memiliki hak suara yang sama dalam rapat anggota, berapa pun besar simpanannya. Keuntungan koperasi dibagikan secara adil sesuai dengan jasa masing-masing anggota.' Judul yang paling tepat untuk bacaan di atas adalah…",
    options: [
      "Sejarah Koperasi di Indonesia",
      "Keuntungan Koperasi yang Besar",
      "Koperasi dan Bank Perkreditan",
      "Koperasi: Usaha Bersama atas Asas Kekeluargaan",
      "Cara Mendirikan Koperasi Baru"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 142,
    code: "BIN-22",
    cat: "Bahasa Indonesia",
    type: "Pemahaman bacaan",
    q: "Bacaan: 'Pada usia 16 tahun, seorang pemuda dari Surabaya memimpin perlawanan rakyat melawan tentara asing yang ingin kembali berkuasa. Meskipun usianya masih sangat muda, keberaniannya membakar semangat juang rakyat di seluruh kota. Ia gugur dalam pertempuran itu dan dikenang sebagai pahlawan.' Simpulan bacaan di atas adalah…",
    options: [
      "Pemuda itu gugur karena usianya masih muda",
      "Keberanian seorang pemuda membangkitkan semangat perjuangan rakyat",
      "Tentara asing berhasil kembali berkuasa di Surabaya",
      "Perlawanan rakyat di Surabaya tidak terorganisasi",
      "Pemuda itu memimpin perlawanan karena tidak ada pemimpin lain"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 143,
    code: "BIN-23",
    cat: "Bahasa Indonesia",
    type: "Pemahaman bacaan",
    q: "Bacaan: 'Pancasila menjadi dasar dalam penyelenggaraan kehidupan berbangsa dan bernegara. Seluruh peraturan perundang-undangan harus bersumber dan tidak boleh bertentangan dengan nilai-nilai Pancasila. Karena itu, setiap kebijakan negara harus dijiwai oleh kelima sila Pancasila.' Ide pokok bacaan di atas adalah…",
    options: [
      "Peraturan perundang-undangan di Indonesia",
      "Pancasila sebagai dasar negara dan sumber segala sumber hukum",
      "Kebijakan negara yang harus dijiwai Pancasila",
      "Kelima sila Pancasila dalam kehidupan sehari-hari",
      "Sejarah perumusan Pancasila"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 144,
    code: "BIN-24",
    cat: "Bahasa Indonesia",
    type: "Pemahaman bacaan",
    q: "Bacaan: 'Sungai di desa itu dahulu jernih dan menjadi sumber air bagi warga. Seiring waktu, sampah menumpuk di tepi sungai dan airnya menjadi keruh. Warga kemudian bersepakat membersihkan sungai setiap minggu dan melarang pembuangan sampah ke sungai.' Judul yang paling tepat untuk bacaan di atas adalah…",
    options: [
      "Sungai yang Keruh di Desa",
      "Sejarah Sungai di Desa Itu",
      "Air Bersih untuk Warga Desa",
      "Sampah yang Menumpuk di Sungai",
      "Warga Bersatu Menyelamatkan Sungai Desanya"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 145,
    code: "BIN-25",
    cat: "Bahasa Indonesia",
    type: "Pemahaman bacaan",
    q: "Bacaan: 'Bahasa Indonesia digunakan sebagai bahasa pengantar di sekolah, bahasa dalam rapat resmi pemerintahan, dan bahasa dalam media massa nasional. Dengan satu bahasa persatuan, warga dari berbagai suku bangsa dapat saling memahami dan bekerja sama membangun negeri.' Simpulan bacaan di atas adalah…",
    options: [
      "Bahasa Indonesia mempersatukan seluruh suku bangsa di Indonesia",
      "Bahasa Indonesia hanya digunakan di sekolah",
      "Media massa nasional menggunakan bahasa daerah",
      "Rapat resmi pemerintahan menggunakan banyak bahasa",
      "Suku bangsa di Indonesia sulit saling memahami"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 146,
    code: "BIN-26",
    cat: "Bahasa Indonesia",
    type: "Kedudukan bahasa negara",
    q: "Bahasa Indonesia berfungsi sebagai bahasa pengantar dalam dunia pendidikan, dari sekolah dasar hingga perguruan tinggi. Fungsi tersebut menunjukkan kedudukan bahasa Indonesia sebagai…",
    options: [
      "Bahasa daerah",
      "Bahasa nasional",
      "Bahasa asing",
      "Bahasa ibu",
      "Bahasa serapan"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 147,
    code: "BIN-27",
    cat: "Bahasa Indonesia",
    type: "Kedudukan bahasa negara",
    q: "Negara menghormati dan memelihara bahasa daerah sebagai kekayaan budaya nasional. Ketentuan tersebut tercantum dalam UUD 1945…",
    options: [
      "Pasal 31",
      "Pasal 33",
      "Pasal 34",
      "Pasal 35",
      "Pasal 32 ayat (2)"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 148,
    code: "BIN-28",
    cat: "Bahasa Indonesia",
    type: "Kedudukan bahasa negara",
    q: "Undang-Undang Nomor 24 Tahun 2009 mengatur tentang…",
    options: [
      "Sistem Pendidikan Nasional",
      "Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara",
      "Bendera, Bahasa, dan Lambang Negara, serta Lagu Kebangsaan",
      "Pembentukan Peraturan Perundang-undangan",
      "Hak Asasi Manusia"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 149,
    code: "BIN-29",
    cat: "Bahasa Indonesia",
    type: "Kedudukan bahasa negara",
    q: "Dalam pidato resmi kenegaraan, Presiden menggunakan bahasa Indonesia. Hal ini sesuai dengan kedudukan bahasa Indonesia sebagai…",
    options: [
      "Bahasa negara",
      "Bahasa daerah",
      "Bahasa pergaulan",
      "Bahasa asing",
      "Bahasa sastra"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 150,
    code: "BIN-30",
    cat: "Bahasa Indonesia",
    type: "Kedudukan bahasa negara",
    q: "Bahasa Indonesia sebagai bahasa persatuan berarti bahasa Indonesia digunakan sebagai…",
    options: [
      "Bahasa sehari-hari di setiap daerah",
      "Pengganti seluruh bahasa daerah",
      "Bahasa yang hanya digunakan di ibu kota",
      "Alat pemersatu seluruh suku bangsa di Indonesia",
      "Bahasa yang wajib menggantikan bahasa ibu"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 151,
    code: "WB1-01",
    cat: "Nasionalisme",
    type: "Sejarah perjuangan bangsa",
    q: "Pada 1928 para pemuda dari berbagai organisasi berikrar satu tanah air, satu bangsa, dan satu bahasa persatuan. Ikrar tersebut kemudian dikenal sebagai Sumpah Pemuda. Jika dibandingkan dengan berdirinya Budi Utomo pada 1908, makna terpenting Sumpah Pemuda bagi perjalanan bangsa adalah…",
    options: [
      "Menegaskan persatuan seluruh pemuda Indonesia melampaui batas kedaerahan",
      "Mendirikan organisasi pemuda pertama di Indonesia",
      "Menetapkan bahasa Belanda sebagai bahasa pengantar",
      "Membubarkan seluruh organisasi kedaerahan",
      "Memproklamasikan kemerdekaan Indonesia"
    ],
    k: "A",
    image: null,
    boss: 1
  },
  {
    id: 152,
    code: "WB1-02",
    cat: "Nasionalisme",
    type: "Sejarah perjuangan bangsa",
    q: "Proklamasi Kemerdekaan 17 Agustus 1945 dibacakan Soekarno didampingi Hatta di Jalan Pegangsaan Timur Nomor 56. Seorang siswa bertanya mengapa proklamasi tidak dibacakan di Lapangan Ikada seperti rencana semula. Penjelasan yang paling tepat adalah…",
    options: [
      "Karena Lapangan Ikada belum selesai dibangun pada saat itu",
      "Karena Lapangan Ikada dijaga ketat tentara Jepang sehingga lokasi dipindah demi keamanan",
      "Karena rumah Soekarno lebih dekat dengan stasiun kereta",
      "Karena PPKI memutuskan proklamasi dibacakan di rumah pribadi",
      "Karena Lapangan Ikada hanya boleh dipakai untuk upacara militer"
    ],
    k: "B",
    image: null,
    boss: 1
  },
  {
    id: 153,
    code: "WB1-03",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Seorang warga negara selalu membeli produk buatan dalam negeri ketika ada pilihan yang kualitasnya sebanding dengan produk impor, meski harganya sedikit lebih mahal. Seorang temannya berkata sikap itu pemborosan. Penilaian yang tepat adalah…",
    options: [
      "Pemborosan karena produk lokal lebih mahal",
      "Ketidakmampuan membedakan kualitas produk",
      "Cinta tanah air dan dukungan pada perekonomian bangsa, meski harganya sedikit lebih mahal",
      "Sikap yang merugikan perdagangan internasional",
      "Keinginan mengikuti tren belanja lokal"
    ],
    k: "C",
    image: null,
    boss: 1
  },
  {
    id: 154,
    code: "WB1-04",
    cat: "Nasionalisme",
    type: "Sejarah perjuangan bangsa",
    q: "Dalam sidang BPUPKI, tiga tokoh mengemukakan rumusan dasar negara: Mohammad Yamin, Soepomo, dan Soekarno. Rumusan yang akhirnya menjadi dasar penyusunan Pancasila dan disampaikan pada 1 Juni 1945 adalah rumusan dari…",
    options: [
      "Mohammad Yamin",
      "Soepomo",
      "Radjiman Wedyodiningrat",
      "Soekarno",
      "Mohammad Hatta"
    ],
    k: "D",
    image: null,
    boss: 1
  },
  {
    id: 155,
    code: "WB1-05",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Seorang warga negara membayar pajak tepat waktu dan tidak berusaha menghindar dari kewajiban perpajakannya, meski ia tahu sebagian tetangganya tidak membayar pajak dan tidak pernah ditegur. Sikap warga tersebut merupakan wujud…",
    options: [
      "Kepatuhan pada aturan demi menghindari sanksi",
      "Keinginan memperoleh pengembalian pajak",
      "Ketidakmampuan mengelola keuangan pribadi",
      "Sikap yang merugikan dirinya sendiri",
      "Nasionalisme, yaitu berkontribusi pada pembangunan bangsa meski tetangganya tidak membayar pajak"
    ],
    k: "E",
    image: null,
    boss: 1
  },
  {
    id: 156,
    code: "WB1-06",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Sikap yang mencerminkan cinta tanah air di lingkungan sekolah adalah…",
    options: [
      "Membolos saat upacara bendera berlangsung",
      "Mengotori dinding sekolah dengan coretan",
      "Mengikuti upacara bendera dengan khidmat dan menghormati simbol negara",
      "Menolak menyanyikan lagu kebangsaan",
      "Mengabaikan peringatan hari besar nasional"
    ],
    k: "C",
    image: null,
    boss: 1
  },
  {
    id: 157,
    code: "WB1-07",
    cat: "Integritas",
    type: "Studi kasus gratifikasi",
    q: "Seorang ASN di bagian perizinan ditawari bingkisan oleh pemohon yang izinnya sedang diproses. Sikap ASN yang paling berintegritas adalah…",
    options: [
      "Menerima bingkisan itu karena nilainya kecil",
      "Menerima bingkisan itu lalu membagikannya",
      "Menerima bingkisan itu setelah izin diterbitkan",
      "Menerima bingkisan itu asalkan tidak diketahui orang lain",
      "Menolak bingkisan itu karena berkaitan dengan jabatannya"
    ],
    k: "E",
    image: null,
    boss: 1
  },
  {
    id: 158,
    code: "WB1-08",
    cat: "Integritas",
    type: "Studi kasus gratifikasi",
    q: "Seorang ASN menerima parsel dari rekanan pada hari raya. Ia ragu apakah parsel itu gratifikasi. Menurut ketentuan, parsel tersebut tergolong gratifikasi yang wajib dilaporkan apabila…",
    options: [
      "Parsel itu berkaitan dengan jabatannya dan dapat memengaruhi objektivitasnya",
      "Parsel itu diberikan pada hari raya keagamaan",
      "Parsel itu berisi makanan dan bukan uang tunai",
      "Parsel itu diberikan secara terbuka di depan rekan kerja",
      "Parsel itu nilainya di bawah satu juta rupiah"
    ],
    k: "A",
    image: null,
    boss: 1
  },
  {
    id: 159,
    code: "WB1-09",
    cat: "Integritas",
    type: "Konsistensi sikap-ucapan-tindakan",
    q: "Seorang ASN selalu menolak pungutan liar saat atasannya ada di kantor. Suatu hari atasannya sedang dinas ke luar kota dan seorang warga menawarkan uang agar berkasnya didahulukan. ASN itu menolak dan mencatat tawaran itu dalam laporan harian. Dua minggu kemudian warga yang sama menawarkan lagi dengan jumlah lebih besar dan ASN itu tetap menolak. Penilaian yang paling tepat terhadap ASN tersebut adalah…",
    options: [
      "ASN itu disiplin karena takut atasannya mengetahui tawaran itu",
      "ASN itu profesional karena menolak tawaran yang merugikan warga",
      "ASN itu tidak konsisten karena baru mencatat tawaran kedua dalam laporannya",
      "ASN itu berintegritas karena keselarasan sikap dan tindakannya terjaga, baik saat diawasi maupun tidak, dan penolakannya berulang pada tawaran yang lebih besar",
      "ASN itu tidak dapat dinilai karena tawaran kedua tidak dilaporkan ke KPK"
    ],
    k: "D",
    image: null,
    boss: 1
  },
  {
    id: 160,
    code: "WB1-10",
    cat: "Integritas",
    type: "Kejujuran dalam jabatan",
    q: "Seorang pegawai menemukan kesalahan pengetikan pada jumlah anggaran dalam laporan yang sudah ditandatangani atasannya dan diserahkan ke bagian keuangan. Ia khawatir bila melapor, atasannya akan ditegur. Tindakan yang paling mencerminkan kejujuran dalam jabatan adalah…",
    options: [
      "Membiarkan kesalahan itu karena laporan sudah ditandatangani",
      "Melaporkan kesalahan itu dan memperbaikinya sesuai prosedur, meski laporan sudah ditandatangani dan berisiko membuat atasannya ditegur",
      "Memperbaiki angka itu diam-diam tanpa memberi tahu siapa pun",
      "Menyalahkan bagian keuangan yang menerima laporan itu",
      "Menunggu sampai ada pemeriksaan berkala yang menemukan kesalahan itu"
    ],
    k: "B",
    image: null,
    boss: 1
  },
  {
    id: 161,
    code: "WB1-11",
    cat: "Integritas",
    type: "Studi kasus gratifikasi",
    q: "Seorang ASN menerima bingkisan dari pihak yang dilayaninya melalui adiknya, karena pemberi bersikeras dan ASN tidak mungkin menolak saat itu. Menurut ketentuan, langkah yang harus dilakukan ASN setelah menerima bingkisan itu adalah…",
    options: [
      "Mengembalikan bingkisan itu melalui adiknya keesokan harinya",
      "Melaporkan penerimaan itu kepada KPK paling lambat 30 hari kerja sejak diterima, karena perantara keluarga tidak mengubah hakikat gratifikasi",
      "Menyimpan bingkisan itu dan melaporkannya dalam laporan tahunan",
      "Membagikan bingkisan itu kepada rekan kerja agar tidak dinikmati sendiri",
      "Meminta atasan memutuskan apakah bingkisan itu boleh disimpan"
    ],
    k: "B",
    image: null,
    boss: 1
  },
  {
    id: 162,
    code: "WB1-12",
    cat: "Integritas",
    type: "Konsistensi sikap-ucapan-tindakan",
    q: "Integritas adalah kemampuan memahami dan menerapkan nilai-nilai yang tercermin dalam…",
    options: [
      "Kepatuhan pada perintah atasan semata",
      "Kemampuan bekerja cepat dan efisien",
      "Pengetahuan tentang aturan kepegawaian",
      "Keselarasan antara pikiran, perkataan, sikap, dan tindakan",
      "Kedisiplinan dalam mengikuti jam kerja"
    ],
    k: "D",
    image: null,
    boss: 1
  },
  {
    id: 163,
    code: "WB1-13",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Dalam sebuah kerja bakti, seorang warga menolak ikut serta dengan alasan menjaga lingkungan bukan tugasnya. Warga lain mengingatkannya bahwa menjaga lingkungan adalah bagian dari bela negara. Nilai dasar bela negara yang paling tepat untuk menjelaskan hal itu adalah…",
    options: [
      "Kemampuan awal bela negara",
      "Rela berkorban untuk bangsa dan negara",
      "Setia pada Pancasila sebagai ideologi negara",
      "Sadar berbangsa dan bernegara",
      "Cinta tanah air"
    ],
    k: "E",
    image: null,
    boss: 1
  },
  {
    id: 164,
    code: "WB1-14",
    cat: "Bela Negara",
    type: "Hak & kewajiban bela negara",
    q: "Dalam sebuah diskusi, seorang warga negara mengatakan bahwa bela negara hanya kewajiban tentara dan polisi. Seorang ASN menjelaskan bahwa UUD 1945 mengatur hak dan kewajiban bela negara bagi setiap warga negara dalam pasal…",
    options: [
      "Pasal 27 ayat (3)",
      "Pasal 29",
      "Pasal 31",
      "Pasal 35",
      "Pasal 36"
    ],
    k: "A",
    image: null,
    boss: 1
  },
  {
    id: 165,
    code: "WB1-15",
    cat: "Bela Negara",
    type: "Bela negara non-militer (profesi)",
    q: "Seorang bidan memilih bertugas di desa terpencil yang tidak memiliki tenaga kesehatan, meskipun gajinya lebih kecil daripada di kota. Tindakan bidan tersebut termasuk bela negara karena…",
    options: [
      "Bidan itu tidak memiliki pilihan tempat bertugas lain",
      "Bidan itu ingin memperoleh tunjangan daerah terpencil",
      "Mengabdikan profesinya untuk kesehatan bangsa hingga ke pelosok negeri",
      "Bidan itu ingin terkenal sebagai bidan teladan",
      "Bidan itu menghindari persaingan kerja di kota"
    ],
    k: "C",
    image: null,
    boss: 1
  },
  {
    id: 166,
    code: "WB1-16",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Seorang warga negara menjaga kebersihan lingkungan, tidak membuang sampah sembarangan, dan merawat fasilitas umum di lingkungannya. Sikap warga tersebut merupakan wujud nilai dasar bela negara, yaitu…",
    options: [
      "Kemampuan awal bela negara",
      "Sadar berbangsa dan bernegara",
      "Setia pada Pancasila sebagai ideologi negara",
      "Rela berkorban untuk bangsa dan negara",
      "Cinta tanah air"
    ],
    k: "E",
    image: null,
    boss: 1
  },
  {
    id: 167,
    code: "WB1-17",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Seorang pemuda merelakan tabungannya untuk membangun perpustakaan kecil di desanya agar anak-anak dapat membaca buku. Sikap pemuda tersebut mencerminkan nilai dasar bela negara, yaitu…",
    options: [
      "Rela berkorban untuk bangsa dan negara",
      "Kemampuan awal bela negara",
      "Sadar berbangsa dan bernegara",
      "Setia pada Pancasila sebagai ideologi negara",
      "Cinta tanah air"
    ],
    k: "A",
    image: null,
    boss: 1
  },
  {
    id: 168,
    code: "WB1-18",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Seorang pelajar diajak temannya bergabung dalam kelompok belajar yang ternyata menyebarkan ajakan mengganti Pancasila. Pelajar itu menolak, lalu mengajak teman-temannya mempelajari Pancasila bersama dan melaporkan kelompok itu kepada guru. Sikap pelajar tersebut mencerminkan nilai dasar bela negara, yaitu…",
    options: [
      "Kemampuan awal bela negara",
      "Cinta tanah air",
      "Sadar berbangsa dan bernegara",
      "Setia pada Pancasila sebagai ideologi negara",
      "Rela berkorban untuk bangsa dan negara"
    ],
    k: "D",
    image: null,
    boss: 1
  },
  {
    id: 169,
    code: "WB1-19",
    cat: "Empat Konsensus Kebangsaan",
    type: "Pancasila",
    q: "Di sebuah desa, sebagian warga keberatan tetangga baru yang berbeda agama memakai balai desa untuk beribadah. Seorang warga membela hak tetangga itu dengan menjelaskan bahwa kebebasan beragama dijamin, lalu mengusulkan jadwal pemakaian balai yang adil bagi semua kelompok. Sikap warga itu merupakan pengamalan Pancasila sila…",
    options: [
      "Kedua",
      "Keempat",
      "Pertama",
      "Kelima",
      "Ketiga"
    ],
    k: "C",
    image: null,
    boss: 1
  },
  {
    id: 170,
    code: "WB1-20",
    cat: "Empat Konsensus Kebangsaan",
    type: "Pancasila",
    q: "Pemerintah daerah menyusun program bantuan bagi warga miskin dengan dua prinsip: bantuan diberikan berdasarkan kebutuhan, bukan kedekatan dengan pejabat, dan besarnya bantuan disesuaikan dengan tingkat kesulitan ekonomi tiap keluarga. Program itu paling mencerminkan pengamalan Pancasila sila…",
    options: [
      "Pertama",
      "Kelima",
      "Ketiga",
      "Keempat",
      "Kedua"
    ],
    k: "B",
    image: null,
    boss: 1
  },
  {
    id: 171,
    code: "WB1-21",
    cat: "Empat Konsensus Kebangsaan",
    type: "UUD 1945",
    q: "UUD 1945 mengatur identitas negara dalam Pasal 35 (bendera), Pasal 36 (bahasa), Pasal 36A (lambang negara), dan Pasal 36B (lagu kebangsaan). Seorang siswa hafal urutan itu, tetapi tertukar antara lambang negara dan lagu kebangsaan. Cara yang tepat untuk membedakan keduanya adalah…",
    options: [
      "Lambang negara diatur sebelum bahasa negara",
      "Lagu kebangsaan diatur dalam Pasal 35",
      "Bendera dan lagu kebangsaan diatur dalam pasal yang sama",
      "Lambang negara diatur Pasal 36A, sedangkan lagu kebangsaan diatur Pasal 36B",
      "Bahasa negara diatur Pasal 36B"
    ],
    k: "D",
    image: null,
    boss: 1
  },
  {
    id: 172,
    code: "WB1-22",
    cat: "Empat Konsensus Kebangsaan",
    type: "NKRI",
    q: "Sebuah daerah mengusulkan menjadi negara bagian dengan undang-undang dasar sendiri, tetapi tetap berada dalam wilayah Indonesia. Usulan tersebut bertentangan dengan NKRI karena…",
    options: [
      "Daerah tidak boleh memiliki peraturan daerah",
      "Setiap daerah harus memakai bahasa daerahnya sendiri",
      "Pemerintah pusat tidak boleh campur tangan di daerah",
      "Otonomi daerah berarti daerah boleh memisahkan diri",
      "NKRI tidak mengenal negara bagian; daerah hanya memiliki otonomi dalam satu kesatuan wilayah"
    ],
    k: "E",
    image: null,
    boss: 1
  },
  {
    id: 173,
    code: "WB1-23",
    cat: "Empat Konsensus Kebangsaan",
    type: "Bhinneka Tunggal Ika",
    q: "Negarakertagama adalah karya Mpu Prapanca, sedangkan kitab Sutasoma yang menjadi sumber semboyan Bhinneka Tunggal Ika adalah karya…",
    options: [
      "Mpu Prapanca",
      "Mpu Tantular",
      "Empu Kanwa",
      "Mpu Sedah",
      "Mpu Panuluh"
    ],
    k: "B",
    image: null,
    boss: 1
  },
  {
    id: 174,
    code: "WB1-24",
    cat: "Empat Konsensus Kebangsaan",
    type: "Pancasila",
    q: "Menjaga persatuan dan kesatuan bangsa serta tidak menyebarkan berita bohong yang dapat memecah belah merupakan pengamalan Pancasila sila…",
    options: [
      "Pertama",
      "Kedua",
      "Keempat",
      "Kelima",
      "Ketiga"
    ],
    k: "E",
    image: null,
    boss: 1
  },
  {
    id: 175,
    code: "WB1-25",
    cat: "Bahasa Indonesia",
    type: "Kata baku",
    q: "Perhatikan kalimat: 'Kegiatan ini membutuhkan kerjasama yang baik antar semua fihak yang terlibat.' Kata yang penulisannya belum baku dalam kalimat tersebut adalah…",
    options: [
      "kerjasama dan fihak, seharusnya 'kerja sama' dan 'pihak'",
      "membutuhkan, seharusnya 'memerlukan'",
      "kegiatan, seharusnya 'aktivitas'",
      "antar, seharusnya 'antara'",
      "terlibat, seharusnya 'dilibatkan'"
    ],
    k: "A",
    image: null,
    boss: 1
  },
  {
    id: 176,
    code: "WB1-26",
    cat: "Bahasa Indonesia",
    type: "Ejaan",
    q: "Perhatikan kalimat: 'Anak-anak bermain dihalaman sekolah sambil menunggu jemputan.' Kesalahan ejaan pada kalimat tersebut terletak pada…",
    options: [
      "Penulisan 'Anak-anak' seharusnya 'Anak anak'",
      "Penulisan 'dihalaman' seharusnya 'di halaman'",
      "Penulisan 'bermain' seharusnya 'ber-main'",
      "Penulisan 'sambil' seharusnya 'sambil,' dengan koma",
      "Penulisan 'jemputan' seharusnya 'penjemputan'"
    ],
    k: "B",
    image: null,
    boss: 1
  },
  {
    id: 177,
    code: "WB1-27",
    cat: "Bahasa Indonesia",
    type: "Ejaan",
    q: "Penulisan nama hari yang benar adalah…",
    options: [
      "hari senin",
      "Hari Senin",
      "hari Senin",
      "Hari senin",
      "HARI SENIN"
    ],
    k: "C",
    image: null,
    boss: 1
  },
  {
    id: 178,
    code: "WB1-28",
    cat: "Bahasa Indonesia",
    type: "Pemahaman bacaan",
    q: "Bacaan: 'Di sebuah desa di lereng gunung, warga sepakat melarang penebangan pohon di hutan lindung. Mereka menggantinya dengan menanam kopi di lahan kebun dan membuat peraturan desa tentang sanksi bagi pelanggar. Dalam lima tahun, mata air desa yang sempat mengering kembali mengalir dan hasil kopi warga meningkat.' Pernyataan yang paling sesuai dengan isi bacaan adalah…",
    options: [
      "Warga desa melarang semua kegiatan pertanian di lereng gunung",
      "Hasil kopi meningkat karena warga menebang pohon hutan lindung",
      "Kesepakatan warga menjaga hutan lindung memulihkan mata air dan meningkatkan hasil kopi",
      "Peraturan desa dibuat setelah mata air desa mengering selamanya",
      "Warga desa menanam kopi di dalam kawasan hutan lindung"
    ],
    k: "C",
    image: null,
    boss: 1
  },
  {
    id: 179,
    code: "WB1-29",
    cat: "Bahasa Indonesia",
    type: "Kedudukan bahasa negara",
    q: "Bahasa Indonesia sebagai bahasa negara diatur dalam UUD 1945 Pasal 36, sedangkan aturan lebih lanjutnya terdapat dalam…",
    options: [
      "Undang-Undang Nomor 24 Tahun 2009",
      "Undang-Undang Nomor 20 Tahun 2003",
      "Undang-Undang Nomor 23 Tahun 2019",
      "Undang-Undang Nomor 12 Tahun 2011",
      "Undang-Undang Nomor 39 Tahun 1999"
    ],
    k: "A",
    image: null,
    boss: 1
  },
  {
    id: 180,
    code: "WB1-30",
    cat: "Bahasa Indonesia",
    type: "Ejaan",
    q: "Perhatikan kalimat: 'Pemandangan itu sangat indah sekali.' Kalimat yang paling efektif sebagai perbaikan kalimat tersebut adalah…",
    options: [
      "Pemandangan itu sangat indah sekali.",
      "Pemandangan itu indah sangat sekali.",
      "Pemandangan itu sangat sekali indah.",
      "Pemandangan itu sangat indah.",
      "Pemandangan itu indah sekali sekali."
    ],
    k: "D",
    image: null,
    boss: 1
  },
  {
    id: 181,
    code: "WB2-01",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Seorang ASN ditugaskan ke daerah terpencil selama dua tahun. Ia mengajukan keberatan karena anaknya sedang menghadapi ujian akhir, tetapi bersedia ditempatkan di sana setelah ujian selesai dan meminta agar penugasannya diatur bertahap. Atasan menolak pengaturan bertahap itu karena kebutuhan layanan mendesak. Sikap yang paling mencerminkan nasionalisme bagi ASN itu adalah…",
    options: [
      "Menerima penugasan itu dan melayani di daerah terpencil, karena pengabdian kepada bangsa berarti bersedia melayani di seluruh wilayah NKRI meski ada pengorbanan pribadi",
      "Menolak penugasan itu karena keluarga lebih utama daripada tugas negara",
      "Menerima penugasan itu tetapi meminta dipindahkan setelah satu bulan",
      "Menunda penugasan itu tanpa memberi tahu atasan sampai ujian anaknya selesai",
      "Menerima penugasan itu hanya bila diberi tunjangan tambahan"
    ],
    k: "A",
    image: null,
    boss: 2
  },
  {
    id: 182,
    code: "WB2-02",
    cat: "Nasionalisme",
    type: "Sejarah perjuangan bangsa",
    q: "Seorang siswa menulis esai: 'Bendera yang dikibarkan saat Proklamasi dijahit oleh R. A. Kartini, sedangkan naskah Proklamasi diketik oleh Sayuti Melik.' Guru membetulkan esai itu. Pernyataan guru yang benar adalah…",
    options: [
      "Bendera dijahit oleh R. A. Kartini dan naskah diketik oleh Ahmad Soebardjo",
      "Bendera dijahit oleh Fatmawati dan naskah diketik oleh Sayuti Melik",
      "Bendera dijahit oleh Dewi Sartika dan naskah diketik oleh Soekarni",
      "Bendera dijahit oleh Fatmawati dan naskah diketik oleh B. M. Diah",
      "Bendera dijahit oleh Cut Nyak Dien dan naskah diketik oleh Sayuti Melik"
    ],
    k: "B",
    image: null,
    boss: 2
  },
  {
    id: 183,
    code: "WB2-03",
    cat: "Nasionalisme",
    type: "Nasionalisme di era digital",
    q: "Seorang pelajar membuat video berbahasa daerah yang viral. Dua tanggapan muncul: sebagian memuji karena melestarikan bahasa daerah, sebagian mengejek karena bahasa daerah dianggap kuno. Pelajar itu mempertimbangkan dua balasan: membuat seri video edukasi, atau membalas ejekan dengan video balasan yang sama kerasnya agar penonton yang mengejek jera. Tindakan lanjutan pelajar itu paling mencerminkan nasionalisme karena…",
    options: [
      "Membalas ejekan dengan video balasan yang sama kerasnya agar penonton yang mengejek jera",
      "Pelajar itu membuktikan bahasa daerah lebih unggul dari bahasa asing",
      "Memperkenalkan dan menjaga bahasa serta budaya daerah di ruang digital sekaligus membalas ejekan dengan edukasi, bukan kebencian",
      "Pelajar itu mengikuti tren video berbahasa daerah",
      "Pelajar itu mencari popularitas dari perdebatan yang terjadi"
    ],
    k: "C",
    image: null,
    boss: 2
  },
  {
    id: 184,
    code: "WB2-04",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Dana desa sebesar Rp500 juta tersedia. Kepala desa mengusulkan membangun gapura megah, sedangkan warga mengusulkan memperbaiki jalan rusak dan saluran air yang sudah dua tahun tidak berfungsi. Jika musyawarah memutuskan sesuai kepentingan warga, keputusan itu mencerminkan…",
    options: [
      "Kepentingan pencitraan kepala desa",
      "Pemborosan anggaran desa",
      "Pengabaian terhadap keindahan desa",
      "Nasionalisme, yaitu mendahulukan kepentingan dan kesejahteraan warga di atas pencitraan",
      "Sikap yang merugikan pembangunan desa"
    ],
    k: "D",
    image: null,
    boss: 2
  },
  {
    id: 185,
    code: "WB2-05",
    cat: "Nasionalisme",
    type: "Sejarah perjuangan bangsa",
    q: "Kongres Pemuda II dipimpin Soegondo Djojopoespito dan menghasilkan Sumpah Pemuda. Seorang siswa mengaitkannya dengan Kongres Pemuda I tahun 1926 yang dipimpin Tabrani. Pernyataan yang benar tentang kedua kongres itu adalah…",
    options: [
      "Kongres Pemuda I dipimpin Soegondo dan menghasilkan Sumpah Pemuda",
      "Kongres Pemuda I dipimpin Tabrani dan belum menghasilkan ikrar persatuan",
      "Kongres Pemuda II dipimpin Tabrani dan membahas bahasa persatuan",
      "Kongres Pemuda I dipimpin Mohammad Yamin dan menghasilkan Sumpah Pemuda",
      "Kongres Pemuda II dipimpin Soegondo dan menghasilkan Sumpah Pemuda, sedangkan Kongres Pemuda I dipimpin Tabrani dan belum menghasilkan ikrar persatuan"
    ],
    k: "E",
    image: null,
    boss: 2
  },
  {
    id: 186,
    code: "WB2-06",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Sebuah perusahaan asing menawarkan gaji besar kepada seorang penari tradisional dengan syarat ia tidak boleh lagi menampilkan tarian daerahnya. Penari itu menolak dan memilih tampil di festival budaya daerah dengan bayaran kecil. Penolakan itu mencerminkan…",
    options: [
      "Ketidakmampuan penari itu bersaing di perusahaan asing",
      "Sikap penari itu yang merugikan kariernya",
      "Nasionalisme, yaitu menjaga identitas dan kehormatan budaya bangsa di atas keuntungan pribadi",
      "Keinginan penari itu menghindari pekerjaan tetap",
      "Ketidaktahuan penari itu tentang kontrak kerja"
    ],
    k: "C",
    image: null,
    boss: 2
  },
  {
    id: 187,
    code: "WB2-07",
    cat: "Integritas",
    type: "Studi kasus gratifikasi",
    q: "Seorang ASN di bagian kepegawaian menerima hadiah berupa paket wisata dari perusahaan pelatihan yang sedang mengajukan kerja sama pelatihan pegawai. Sikap ASN yang paling tepat adalah…",
    options: [
      "Menerima karena itu hadiah dari perusahaan swasta",
      "Menerima lalu membagikannya kepada rekan kerja",
      "Menerima karena kerja sama belum ditandatangani",
      "Menerima asalkan tidak diketahui atasan",
      "Menolak hadiah itu karena berkaitan dengan jabatannya"
    ],
    k: "E",
    image: null,
    boss: 2
  },
  {
    id: 188,
    code: "WB2-08",
    cat: "Integritas",
    type: "Kejujuran dalam jabatan",
    q: "Seorang pejabat ditawari cara menyembunyikan sebagian asetnya dari laporan harta kekayaan dengan alasan aset itu milik keluarganya. Sikap pejabat yang paling mencerminkan kejujuran dalam jabatan adalah…",
    options: [
      "Melaporkan seluruh asetnya secara lengkap dan benar sesuai ketentuan LHKPN, termasuk aset atas nama keluarga yang ia kuasai",
      "Menyembunyikan aset itu karena atas nama keluarga, bukan atas namanya",
      "Melaporkan sebagian asetnya saja agar laporan terlihat wajar",
      "Menunda pelaporan sampai aset itu dijual",
      "Meminta keluarganya menyimpan aset itu agar tidak tercatat"
    ],
    k: "A",
    image: null,
    boss: 2
  },
  {
    id: 189,
    code: "WB2-09",
    cat: "Integritas",
    type: "Konsistensi sikap-ucapan-tindakan",
    q: "Seorang ASN dikenal ramah saat atasannya mengawasi, tetapi kasar saat tidak ada yang melihat. Suatu hari kamera pengawas rusak selama seminggu dan ASN itu tetap melayani dengan kasar. Dua minggu kemudian kamera diperbaiki dan ia kembali ramah. Penilaian yang paling tepat terhadap ASN tersebut adalah…",
    options: [
      "ASN itu berintegritas karena bersikap baik saat diawasi",
      "ASN itu disiplin karena mengikuti aturan saat ada pengawasan",
      "ASN itu profesional karena menyesuaikan sikap dengan situasi",
      "ASN itu tidak berintegritas karena sikap baiknya hanya muncul saat diawasi, bukan dari keselarasan sikap dan tindakan",
      "ASN itu tidak dapat dinilai karena kamera sempat rusak"
    ],
    k: "D",
    image: null,
    boss: 2
  },
  {
    id: 190,
    code: "WB2-10",
    cat: "Integritas",
    type: "Konsistensi sikap-ucapan-tindakan",
    q: "Seorang ASN mencatat perjalanan dinas sesuai kenyataan. Suatu ketika ia salah mencatat tanggal dan baru menyadarinya sebulan kemudian saat tidak ada yang memeriksa. Tindakan yang paling mencerminkan integritas adalah…",
    options: [
      "Membiarkan kesalahan itu karena sudah lama berlalu",
      "Memperbaiki catatan itu dan melaporkan perbaikannya kepada bendahara",
      "Menghapus catatan perjalanan dinas bulan itu",
      "Meminta rekan mengubah catatan itu diam-diam",
      "Menunggu sampai ada yang menemukan kesalahan itu"
    ],
    k: "B",
    image: null,
    boss: 2
  },
  {
    id: 191,
    code: "WB2-11",
    cat: "Integritas",
    type: "Kejujuran dalam jabatan",
    q: "Seorang ASN menemukan rekan kerjanya memalsukan tanda tangan atasan pada surat tugas. Sikap ASN yang paling berintegritas adalah…",
    options: [
      "Membiarkan pemalsuan itu karena bukan urusannya",
      "Melaporkan pemalsuan itu melalui prosedur yang berlaku",
      "Meminta rekan itu membagi keuntungan darinya",
      "Menasihati rekan itu secara diam-diam tanpa melapor",
      "Menyebarkan kabar itu kepada seluruh pegawai"
    ],
    k: "B",
    image: null,
    boss: 2
  },
  {
    id: 192,
    code: "WB2-12",
    cat: "Integritas",
    type: "Konsistensi sikap-ucapan-tindakan",
    q: "Seorang ASN diminta atasannya memanipulasi data kehadiran pegawai agar terlihat baik saat penilaian. ASN itu menolak meskipun yang memintanya adalah atasan langsungnya. Sikap ASN tersebut mencerminkan…",
    options: [
      "Kepatuhan mutlak pada perintah atasan",
      "Ketidakmampuan mengatur prioritas kerja",
      "Sikap yang mengabaikan arahan pimpinan",
      "Integritas, yaitu berpegang pada kebenaran walau diperintah atasan",
      "Keinginan mencari popularitas di mata pegawai"
    ],
    k: "D",
    image: null,
    boss: 2
  },
  {
    id: 193,
    code: "WB2-13",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Dua kegiatan: (1) pendidikan kewarganegaraan, (2) pelatihan dasar kemiliteran. Seorang siswa menyimpulkan keduanya membentuk 'kemampuan awal bela negara', sedangkan temannya berpendapat keduanya membentuk 'sadar berbangsa dan bernegara'. Kesimpulan yang benar adalah…",
    options: [
      "Keduanya membentuk sadar berbangsa dan bernegara",
      "Keduanya membentuk cinta tanah air",
      "Keduanya membentuk setia pada Pancasila",
      "Keduanya membentuk rela berkorban",
      "Keduanya membentuk kemampuan awal bela negara, karena keduanya adalah bekal dasar sebelum pengabdian bela negara yang nyata"
    ],
    k: "E",
    image: null,
    boss: 2
  },
  {
    id: 194,
    code: "WB2-14",
    cat: "Bela Negara",
    type: "Hak & kewajiban bela negara",
    q: "Salah satu komponen bela negara menurut UU Nomor 23 Tahun 2019 adalah pengabdian sebagai prajurit Tentara Nasional Indonesia. Pengabdian tersebut dapat dilakukan secara…",
    options: [
      "Sukarela atau wajib",
      "Wajib bagi seluruh warga negara",
      "Sukarela bagi yang berminat menjadi pegawai",
      "Wajib bagi lulusan sekolah militer",
      "Sukarela bagi warga negara asing"
    ],
    k: "A",
    image: null,
    boss: 2
  },
  {
    id: 195,
    code: "WB2-15",
    cat: "Bela Negara",
    type: "Bela negara non-militer (profesi)",
    q: "Seorang arsitek merancang rumah tahan gempa murah, tetapi warga menolak karena menganggap rumah itu jelek dan tidak sesuai tradisi setempat, dan meminta arsitek memakai bahan lama yang tidak tahan gempa. Arsitek itu kemudian merancang ulang dengan memadukan konstruksi tahan gempa dan bentuk rumah tradisional, lalu melatih tukang setempat membangunnya. Tindakan arsitek itu merupakan bela negara karena…",
    options: [
      "Arsitek itu akhirnya mengikuti keinginan warga tanpa syarat",
      "Arsitek itu membuktikan kemampuannya merancang rumah mewah",
      "Mengabdikan keahlian profesinya untuk keselamatan bangsa sekaligus melestarikan identitas budaya setempat, tanpa mengorbankan keamanan demi tradisi",
      "Arsitek itu mendapatkan proyek dari pemerintah daerah",
      "Arsitek itu menghindari kritik dari warga"
    ],
    k: "C",
    image: null,
    boss: 2
  },
  {
    id: 196,
    code: "WB2-16",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Seorang warga negara bekerja di perusahaan yang pemiliknya aktif menyebarkan paham yang bertentangan dengan Pancasila dan meminta karyawan menyebarkannya. Warga itu menolak, lalu mengundurkan diri dan melaporkan perusahaan itu kepada pihak berwenang, meski ia belum mendapat pekerjaan baru. Sikap warga itu mencerminkan nilai dasar bela negara, yaitu…",
    options: [
      "Kemampuan awal bela negara",
      "Cinta tanah air",
      "Sadar berbangsa dan bernegara",
      "Rela berkorban untuk bangsa dan negara",
      "Setia pada Pancasila sebagai ideologi negara"
    ],
    k: "E",
    image: null,
    boss: 2
  },
  {
    id: 197,
    code: "WB2-17",
    cat: "Bela Negara",
    type: "Hak & kewajiban bela negara",
    q: "Ancaman terhadap kedaulatan negara dapat berupa ancaman militer maupun nonmiliter. Contoh ancaman nonmiliter yang menyerang ideologi dan persatuan bangsa adalah…",
    options: [
      "Penyebaran paham yang bertentangan dengan Pancasila",
      "Serangan tentara asing ke wilayah perbatasan",
      "Persaingan harga pasar antar pedagang di daerah",
      "Perbedaan pendapat dalam musyawarah warga",
      "Perubahan musim yang memengaruhi hasil panen"
    ],
    k: "A",
    image: null,
    boss: 2
  },
  {
    id: 198,
    code: "WB2-18",
    cat: "Bela Negara",
    type: "Bela negara non-militer (profesi)",
    q: "Seorang pengrajin batik dihadapkan pada dua pilihan: menjual motif batiknya ke pabrik tekstil asing yang akan memproduksinya massal tanpa nama daerahnya, atau mengajarkannya kepada anak muda desa dengan penghasilan lebih kecil. Pilihan kedua merupakan bela negara karena…",
    options: [
      "Pengrajin itu tidak mampu bernegosiasi dengan pabrik asing",
      "Pengrajin itu mencari penghasilan tambahan dari mengajar",
      "Pengrajin itu ingin terkenal di desanya",
      "Melestarikan budaya bangsa dan mewariskannya kepada generasi muda",
      "Pengrajin itu menghindari persaingan dengan pabrik asing"
    ],
    k: "D",
    image: null,
    boss: 2
  },
  {
    id: 199,
    code: "WB2-19",
    cat: "Empat Konsensus Kebangsaan",
    type: "Pancasila",
    q: "Dalam musyawarah warga, sebagian warga mengusulkan pemungutan suara karena perdebatan sudah lama, tetapi sebagian lain meminta musyawarah dilanjutkan sampai mufakat. Ketua RT mengingatkan bahwa musyawarah dipimpin oleh hikmat kebijaksanaan, lalu melanjutkan diskusi sampai semua pihak menyepakati keputusan. Sikap warga itu merupakan pengamalan Pancasila sila…",
    options: [
      "Pertama",
      "Kedua",
      "Keempat",
      "Kelima",
      "Ketiga"
    ],
    k: "C",
    image: null,
    boss: 2
  },
  {
    id: 200,
    code: "WB2-20",
    cat: "Empat Konsensus Kebangsaan",
    type: "UUD 1945",
    q: "Pasal 27 ayat (2) UUD 1945 mengatur hak atas pekerjaan dan penghidupan yang layak. Seorang siswa mengaitkannya dengan Pasal 28D ayat (2) yang mengatur hak bekerja serta imbalan yang adil. Perbedaan penerapan keduanya dalam sebuah kasus adalah…",
    options: [
      "Pasal 27 ayat (2) hanya berlaku bagi PNS, Pasal 28D ayat (2) berlaku bagi pekerja swasta",
      "Pasal 27 ayat (2) menegaskan hak dasar atas pekerjaan dan penghidupan yang layak, sedangkan Pasal 28D ayat (2) menegaskan hak atas imbalan dan perlakuan yang adil dalam hubungan kerja",
      "Pasal 27 ayat (2) mengatur upah minimum, Pasal 28D ayat (2) mengatur jam kerja",
      "Keduanya mengatur hal yang sama sehingga dapat dipakai bergantian",
      "Pasal 27 ayat (2) sudah tidak berlaku setelah amandemen"
    ],
    k: "B",
    image: null,
    boss: 2
  },
  {
    id: 201,
    code: "WB2-21",
    cat: "Empat Konsensus Kebangsaan",
    type: "Pancasila",
    q: "Seorang siswa bertanya mengapa Pancasila disebut ideologi terbuka. Penjelasan yang benar adalah…",
    options: [
      "Nilai-nilai dasarnya dapat diubah kapan pun",
      "Pancasila hanya berlaku untuk masa lalu",
      "Pancasila tertutup dari segala pengaruh zaman",
      "Nilai dasarnya tetap, tetapi penjabarannya berkembang sesuai perkembangan zaman",
      "Pancasila dapat diganti dengan ideologi lain"
    ],
    k: "D",
    image: null,
    boss: 2
  },
  {
    id: 202,
    code: "WB2-22",
    cat: "Empat Konsensus Kebangsaan",
    type: "UUD 1945",
    q: "Presiden memegang jabatan lima tahun dan dapat dipilih kembali hanya untuk satu kali masa jabatan. Ketentuan ini membedakan UUD 1945 hasil amandemen dengan UUD 1945 sebelum amandemen, karena sebelumnya…",
    options: [
      "Presiden dipilih oleh MPR tanpa batas masa jabatan yang tegas",
      "Presiden menjabat seumur hidup",
      "Sebelum amandemen, masa jabatan presiden tidak dibatasi hanya dua periode",
      "Sebelum amandemen, presiden dipilih langsung oleh rakyat",
      "Sebelum amandemen, tidak ada jabatan wakil presiden"
    ],
    k: "C",
    image: null,
    boss: 2
  },
  {
    id: 203,
    code: "WB2-23",
    cat: "Empat Konsensus Kebangsaan",
    type: "NKRI",
    q: "Seorang siswa bertanya: jika Indonesia negara kesatuan, mengapa daerah boleh membuat peraturan daerah? Penjelasan yang benar adalah…",
    options: [
      "Karena setiap daerah sebenarnya adalah negara bagian",
      "Karena otonomi daerah memberi kewenangan mengatur urusan rumah tangganya dalam satu kesatuan NKRI",
      "Karena pemerintah pusat tidak berwenang atas daerah",
      "Karena peraturan daerah kedudukannya di atas undang-undang",
      "Karena daerah boleh membuat aturan tanpa mengikuti peraturan pusat"
    ],
    k: "B",
    image: null,
    boss: 2
  },
  {
    id: 204,
    code: "WB2-24",
    cat: "Empat Konsensus Kebangsaan",
    type: "Bhinneka Tunggal Ika",
    q: "Sebuah sekolah memiliki siswa dari berbagai suku dan agama. Saat perayaan hari besar keagamaan salah satu kelompok, siswa dari kelompok lain ikut membantu menyiapkan acara tanpa diminta, lalu sekolah menetapkan kegiatan gotong royong lintas kelompok itu menjadi agenda tahunan. Kegiatan itu paling mencerminkan semangat…",
    options: [
      "Persaingan budaya antar daerah",
      "Pencarian daerah yang budayanya paling unggul",
      "Kewajiban sekolah dalam kurikulum kesenian",
      "Hiburan bagi orang tua siswa",
      "Bhinneka Tunggal Ika, yaitu persatuan dalam keberagaman yang diwujudkan lewat kerja sama lintas kelompok"
    ],
    k: "E",
    image: null,
    boss: 2
  },
  {
    id: 205,
    code: "WB2-25",
    cat: "Bahasa Indonesia",
    type: "Kata baku",
    q: "Perhatikan paragraf: 'Kegiatan ini membutuhkan analisa yang mendalam tentang frekwensi kehadiran dan kwalitas pelayanan, karena hasilnya akan menjadi acuan dalam mengambil keputusan.' Kata-kata yang belum baku dalam paragraf tersebut adalah…",
    options: [
      "analisa, frekwensi, dan kwalitas — seharusnya 'analisis, frekuensi, dan kualitas'",
      "membutuhkan dan mendalam — seharusnya 'memerlukan dan dalam'",
      "kegiatan dan hasilnya — seharusnya 'aktivitas dan buahnya'",
      "acuan dan keputusan — seharusnya 'patokan dan ketetapan'",
      "karena dan akan — seharusnya 'sebab dan hendak'"
    ],
    k: "A",
    image: null,
    boss: 2
  },
  {
    id: 206,
    code: "WB2-26",
    cat: "Bahasa Indonesia",
    type: "Ejaan",
    q: "Penulisan kata 'di' sebagai awalan yang benar terdapat pada kalimat…",
    options: [
      "Buku itu di baca oleh Rina.",
      "Buku itu dibaca oleh Rina.",
      "Surat di tulis dengan rapi.",
      "Pintu di kunci dari dalam.",
      "Tugas di kerjakan bersama."
    ],
    k: "B",
    image: null,
    boss: 2
  },
  {
    id: 207,
    code: "WB2-27",
    cat: "Bahasa Indonesia",
    type: "Pemahaman bacaan",
    q: "Bacaan: 'Para pemuda di desa itu mendirikan perpustakaan keliling yang berkeliling dari dusun ke dusun dengan sepeda motor. Buku-buku yang dibawa meliputi cerita rakyat, buku pelajaran, dan majalah anak. Anak-anak desa yang sebelumnya jarang membaca kini menantikan kedatangan perpustakaan itu setiap minggu.' Ide pokok bacaan di atas adalah…",
    options: [
      "Sepeda motor yang digunakan perpustakaan keliling",
      "Buku-buku yang dibawa perpustakaan keliling",
      "Anak-anak desa yang jarang membaca",
      "Majalah anak dalam perpustakaan keliling",
      "Perpustakaan keliling pemuda desa yang menumbuhkan minat baca anak-anak"
    ],
    k: "E",
    image: null,
    boss: 2
  },
  {
    id: 208,
    code: "WB2-28",
    cat: "Bahasa Indonesia",
    type: "Ejaan",
    q: "Perhatikan kalimat: 'Wisatawan mengunjungi danau toba, gunung semeru, dan pulau Bali dalam satu perjalanan.' Penulisan nama tempat yang sudah benar dalam kalimat tersebut adalah…",
    options: [
      "danau toba",
      "gunung semeru",
      "pulau Bali",
      "Tidak ada yang benar",
      "Semua sudah benar"
    ],
    k: "C",
    image: null,
    boss: 2
  },
  {
    id: 209,
    code: "WB2-29",
    cat: "Bahasa Indonesia",
    type: "Kedudukan bahasa negara",
    q: "Seorang wartawan menulis berita dalam bahasa daerah untuk koran lokal, tetapi menulis laporan resmi instansi dalam bahasa Indonesia. Perbedaan penggunaan itu menunjukkan…",
    options: [
      "Bahasa Indonesia berkedudukan sebagai bahasa negara yang wajib dipakai dalam urusan resmi kenegaraan, sedangkan bahasa daerah dipakai dalam pergaulan setempat",
      "Bahasa daerah tidak boleh dipakai dalam media apa pun",
      "Bahasa Indonesia hanya boleh dipakai dalam sidang resmi",
      "Koran lokal wajib memakai bahasa Indonesia",
      "Laporan resmi boleh memakai bahasa apa saja"
    ],
    k: "A",
    image: null,
    boss: 2
  },
  {
    id: 210,
    code: "WB2-30",
    cat: "Bahasa Indonesia",
    type: "Ejaan",
    q: "Kalimat yang paling efektif adalah…",
    options: [
      "Agar supaya cepat selesai, kita harus bekerja sama.",
      "Demi untuk kepentingan bersama, kita harus bersatu.",
      "Adalah merupakan tugas kita menjaga persatuan.",
      "Kita harus bekerja sama agar cepat selesai.",
      "Seperti misalnya gotong royong, kerja sama itu penting."
    ],
    k: "D",
    image: null,
    boss: 2
  },
  {
    id: 211,
    code: "WB3-01",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Sebuah perusahaan asing menawarkan investasi besar untuk membangun pabrik di desa, tetapi mensyaratkan desa menyerahkan pengelolaan sumber airnya selama 30 tahun. Sebagian warga mendukung karena lapangan kerja, sebagian menolak karena air adalah kebutuhan pokok warga. Sebagai kepala desa, sikap yang paling mencerminkan nasionalisme adalah…",
    options: [
      "Menerima investasi itu demi lapangan kerja bagi warga",
      "Menolak penyerahan pengelolaan sumber air karena menyangkut hajat hidup warga, sambil membuka negosiasi investasi tanpa syarat itu",
      "Menyerahkan keputusan kepada perusahaan asing",
      "Meminta perusahaan menaikkan imbalan untuk dirinya",
      "Membiarkan perusahaan beroperasi tanpa pengawasan"
    ],
    k: "B",
    image: null,
    boss: 3
  },
  {
    id: 212,
    code: "WB3-02",
    cat: "Nasionalisme",
    type: "Sejarah perjuangan bangsa",
    q: "Seorang siswa menyusun garis waktu perjuangan: 1908 Budi Utomo, 1926 Kongres Pemuda I, 1928 Kongres Pemuda II, 1945 Proklamasi. Ia menyimpulkan bahwa persatuan pemuda dari berbagai daerah menjadi satu bangsa ditandai oleh Kongres Pemuda I karena dihadiri banyak organisasi. Kesimpulan itu keliru karena…",
    options: [
      "Kongres Pemuda I dipimpin Soegondo dan menghasilkan Sumpah Pemuda",
      "Budi Utomo sudah mempersatukan seluruh pemuda Indonesia",
      "Kongres Pemuda I hanya dihadiri organisasi dari satu daerah",
      "Proklamasi 1945 yang mempersatukan pemuda dari berbagai daerah",
      "Kongres Pemuda I belum menghasilkan ikrar persatuan; ikrar satu tanah air, satu bangsa, dan satu bahasa baru lahir pada Sumpah Pemuda 1928"
    ],
    k: "E",
    image: null,
    boss: 3
  },
  {
    id: 213,
    code: "WB3-03",
    cat: "Nasionalisme",
    type: "Nasionalisme di era digital",
    q: "Di media sosial beredar kabar bohong yang mengadu domba dua suku. Seorang pelajar memeriksa kebenarannya ke sumber resmi dan mendapati kabar itu bohong. Dua pilihan muncul: mengunggah klarifikasi dengan bukti, atau melaporkan akun penyebar ke pengelola platform. Langkah yang paling mencerminkan nasionalisme di era digital adalah…",
    options: [
      "Mengunggah klarifikasi disertai bukti dari sumber resmi dan melaporkan akun penyebar, agar kabar bohong berhenti dan persatuan terjaga",
      "Melaporkan akun penyebar saja tanpa klarifikasi, agar tidak menambah keributan",
      "Mengunggah klarifikasi saja tanpa melapor, karena pelaporan butuh waktu lama",
      "Mengunggah klarifikasi tanpa bukti agar cepat tersebar",
      "Membalas kabar itu dengan ujaran yang sama kerasnya"
    ],
    k: "A",
    image: null,
    boss: 3
  },
  {
    id: 214,
    code: "WB3-04",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Seorang pelajar diajak tawuran antarsekolah dengan alasan membela nama daerahnya. Ia menolak, tetapi teman-temannya menuduhnya pengecut dan tidak cinta daerah. Pelajar itu kemudian mengajak teman-temannya berdialog dan mengusulkan pertandingan olahraga persahabatan antarsekolah. Sikap pelajar itu menunjukkan nasionalisme karena…",
    options: [
      "Pelajar itu takut menghadapi lawan dalam tawuran",
      "Pelajar itu tunduk pada tekanan guru",
      "Pelajar itu menghindar dari masalah antarsekolah",
      "Menjaga persatuan dan menyelesaikan perbedaan dengan cara damai, bukan kekerasan atas nama daerah",
      "Pelajar itu lebih menyukai olahraga daripada berdebat"
    ],
    k: "D",
    image: null,
    boss: 3
  },
  {
    id: 215,
    code: "WB3-05",
    cat: "Nasionalisme",
    type: "Sejarah perjuangan bangsa",
    q: "Piagam Jakarta yang disusun pada 22 Juni 1945 memuat rumusan dasar negara. Hal yang membedakan Piagam Jakarta dengan rumusan Pancasila yang sah adalah…",
    options: [
      "Piagam Jakarta disusun oleh PPKI, sedangkan Pancasila disusun oleh BPUPKI",
      "Piagam Jakarta tidak memuat sila Ketuhanan",
      "Piagam Jakarta memuat tujuh kata tentang kewajiban menjalankan syariat Islam bagi pemeluknya yang kemudian dihapus",
      "Piagam Jakarta disahkan pada 17 Agustus 1945",
      "Piagam Jakarta hanya memuat empat sila"
    ],
    k: "C",
    image: null,
    boss: 3
  },
  {
    id: 216,
    code: "WB3-06",
    cat: "Nasionalisme",
    type: "Nasionalisme di era digital",
    q: "Seorang konten kreator asing mengklaim batik sebagai budaya negaranya. Dua reaksi muncul di media sosial Indonesia: sebagian membalas dengan ujaran kebencian, sebagian mengunggah bukti sejarah batik dan mengajak dunia mengenal batik Indonesia. Reaksi kedua lebih mencerminkan nasionalisme karena…",
    options: [
      "Reaksi kedua membuktikan budaya Indonesia lebih unggul",
      "Reaksi kedua menuntut kreator asing menghapus videonya",
      "Membela budaya bangsa dengan bukti dan edukasi, bukan dengan kebencian yang justru merusak citra bangsa",
      "Reaksi kedua mengabaikan klaim kreator asing",
      "Reaksi kedua mencari dukungan dari penonton asing"
    ],
    k: "C",
    image: null,
    boss: 3
  },
  {
    id: 217,
    code: "WB3-07",
    cat: "Integritas",
    type: "Studi kasus gratifikasi",
    q: "Seorang vendor memberikan 'uang transport' kepada panitia pengadaan barang, padahal panitia itu tidak melakukan perjalanan apa pun. Pemberian tersebut termasuk gratifikasi karena…",
    options: [
      "Diberikan secara terang-terangan di depan banyak orang",
      "Nilainya kecil dan tidak memengaruhi keputusan",
      "Diberikan setelah pengadaan selesai",
      "Merupakan pemberian yang berkaitan dengan jabatan panitia pengadaan",
      "Diberikan dengan sebutan uang transport, bukan komisi"
    ],
    k: "D",
    image: null,
    boss: 3
  },
  {
    id: 218,
    code: "WB3-08",
    cat: "Integritas",
    type: "Konsistensi sikap-ucapan-tindakan",
    q: "Seorang pejabat menolak suap dari pengusaha. Pengusaha itu kemudian menawarkan suap melalui istri pejabat dengan janji promosi dan fasilitas mewah. Pejabat itu menolak lagi. Dua langkah lanjutan dipertimbangkan: melaporkan percobaan suap itu, atau cukup menolak dan melupakannya demi menjaga nama baik keluarga. Sikap pejabat yang paling berintegritas adalah…",
    options: [
      "Menolak suap itu dan melaporkan percobaan suap tersebut, karena integritas berarti berpegang pada kejujuran walau godaan datang berulang melalui pihak lain",
      "Menolak suap itu dan menyimpan buktinya sendiri tanpa melapor, agar dapat dipakai bila pengusaha itu mengulanginya",
      "Menerima suap itu karena sudah dua kali ditawarkan",
      "Menolak suap pertama tetapi menerima yang kedua karena melalui keluarga",
      "Meminta pengusaha itu berhenti tanpa melapor agar tidak ribut"
    ],
    k: "A",
    image: null,
    boss: 3
  },
  {
    id: 219,
    code: "WB3-09",
    cat: "Integritas",
    type: "Kejujuran dalam jabatan",
    q: "Seorang ASN menemukan anggaran di unitnya digelembungkan oleh atasannya. Ia mempertimbangkan dua langkah: melaporkan melalui jalur pengaduan, atau menegur atasan secara pribadi dan meminta perbaikan tanpa melapor. Atasannya kemudian menuduhnya tidak loyal karena memilih jalur pengaduan. Penilaian yang tepat adalah…",
    options: [
      "ASN itu tidak loyal karena melaporkan atasannya",
      "ASN itu seharusnya menegur atasan secara pribadi dan tidak melapor, karena masalah internal cukup diselesaikan internal",
      "ASN itu seharusnya diam demi keamanan jabatannya",
      "ASN itu berintegritas karena kesetiaan pada kebenaran lebih utama daripada loyalitas yang menutupi pelanggaran, dan jalur pengaduan adalah cara yang benar",
      "ASN itu seharusnya menyembunyikan temuan itu dari pemeriksa"
    ],
    k: "D",
    image: null,
    boss: 3
  },
  {
    id: 220,
    code: "WB3-10",
    cat: "Integritas",
    type: "Studi kasus gratifikasi",
    q: "Seorang pejabat menerima hadiah ulang tahun berupa barang mewah dari rekanan yang sedang mengurus izin di instansinya. Sikap pejabat yang paling berintegritas adalah…",
    options: [
      "Menolak hadiah itu karena berkaitan dengan jabatannya",
      "Menerima hadiah itu karena diberikan dalam rangka ulang tahun",
      "Menerima hadiah itu lalu membagikannya kepada staf",
      "Menerima hadiah itu asalkan nilainya di bawah batas tertentu",
      "Menerima hadiah itu karena rekanan memberikannya dengan tulus"
    ],
    k: "A",
    image: null,
    boss: 3
  },
  {
    id: 221,
    code: "WB3-11",
    cat: "Integritas",
    type: "Kejujuran dalam jabatan",
    q: "Seorang ASN diminta menandatangani berita acara serah terima barang yang jumlahnya tidak sesuai. Atasannya berkata selisihnya kecil dan akan diperbaiki kemudian, dan memintanya menandatangani sekarang agar pencairan dana tidak tertunda. ASN itu menolak dan meminta penghitungan ulang. Seorang rekan berkata ASN itu mempersulit pekerjaan. Penilaian yang tepat adalah…",
    options: [
      "Ketidakmampuan ASN itu bekerja sama dengan atasan",
      "Kejujuran dalam jabatan, karena menolak mengesahkan sesuatu yang tidak sesuai fakta walau diperintah atasan dan selisihnya dianggap kecil, serta meminta penghitungan ulang agar kebenaran terjaga",
      "Menandatangani dokumen itu karena selisihnya kecil dan pencairan dana lebih penting",
      "Menandatangani dokumen itu dengan catatan keberatan, agar proyek tetap berjalan dan keberatannya tercatat",
      "Meminta rekan lain yang menandatangani dokumen itu"
    ],
    k: "B",
    image: null,
    boss: 3
  },
  {
    id: 222,
    code: "WB3-12",
    cat: "Integritas",
    type: "Konsistensi sikap-ucapan-tindakan",
    q: "Seorang ASN menerima dana pengganti kegiatan yang jumlahnya lebih besar Rp200.000 dari biaya yang sebenarnya ia keluarkan. Ia baru menyadarinya setelah laporan kegiatan ditutup dan diserahkan. Tidak ada yang mengetahui selisih itu. Tindakan yang paling mencerminkan integritas adalah…",
    options: [
      "Menyimpan selisih itu karena laporan sudah ditutup",
      "Membagikan selisih itu kepada rekan kerja",
      "Menggunakan selisih itu untuk kegiatan berikutnya tanpa laporan",
      "Melaporkan selisih itu kepada bendahara dan mengembalikannya, meski laporan kegiatan sudah ditutup dan harus diperbaiki",
      "Menunggu sampai bendahara menanyakan selisih itu"
    ],
    k: "D",
    image: null,
    boss: 3
  },
  {
    id: 223,
    code: "WB3-13",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Seorang ASN menolak melaksanakan perintah atasannya karena perintah itu bertentangan dengan nilai-nilai Pancasila. Sikap ASN tersebut merupakan wujud nilai dasar bela negara, yaitu…",
    options: [
      "Kemampuan awal bela negara",
      "Cinta tanah air",
      "Sadar berbangsa dan bernegara",
      "Rela berkorban untuk bangsa dan negara",
      "Setia pada Pancasila sebagai ideologi negara"
    ],
    k: "E",
    image: null,
    boss: 3
  },
  {
    id: 224,
    code: "WB3-14",
    cat: "Bela Negara",
    type: "Hak & kewajiban bela negara",
    q: "Komponen cadangan dibentuk dari warga negara yang telah mengikuti pelatihan dasar kemiliteran. Dua warga mengaku sebagai anggota komponen cadangan: satu sudah mengikuti pelatihan dasar kemiliteran, satu lagi belum pernah tetapi aktif dalam kegiatan pramuka. Pernyataan yang benar adalah…",
    options: [
      "Keduanya anggota komponen cadangan karena bela negara hak semua warga",
      "Hanya warga yang sudah mengikuti pelatihan dasar kemiliteran yang dapat menjadi komponen cadangan; kegiatan pramuka bukan syaratnya",
      "Komponen cadangan hanya berasal dari kalangan militer aktif",
      "Warga yang aktif pramuka dapat menjadi komponen cadangan karena pramuka melatih kedisiplinan",
      "Komponen cadangan dibentuk dari pegawai negeri sipil saja"
    ],
    k: "B",
    image: null,
    boss: 3
  },
  {
    id: 225,
    code: "WB3-15",
    cat: "Bela Negara",
    type: "Bela negara non-militer (profesi)",
    q: "Seorang dokter hewan di daerah terpencil menemukan wabah penyakit ternak yang mengancam mata pencaharian ribuan peternak. Ia bekerja tanpa bayaran tambahan selama berbulan-bulan, melatih peternak mengenali gejala dini, dan melaporkan wabah itu agar pemerintah dapat bertindak. Tindakan dokter hewan itu merupakan bela negara karena…",
    options: [
      "Meningkatkan penghasilannya sebagai dokter hewan",
      "Mendapatkan proyek dari pemerintah daerah",
      "Mengabdikan keahlian profesinya untuk ketahanan pangan dan kesejahteraan bangsa, termasuk saat tugas itu tidak dibayar tambahan",
      "Membuktikan obat wabah itu lebih baik dari obat lain",
      "Menjaga kesehatan ternak di daerahnya saja, tanpa perlu melaporkan wabah itu ke pemerintah"
    ],
    k: "C",
    image: null,
    boss: 3
  },
  {
    id: 226,
    code: "WB3-16",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Seorang warga negara menghormati perbedaan suku dan agama, tidak menyebarkan ujaran kebencian, dan aktif menjaga kerukunan di lingkungannya. Sikap warga tersebut merupakan wujud nilai dasar bela negara, yaitu…",
    options: [
      "Kemampuan awal bela negara",
      "Cinta tanah air",
      "Sadar berbangsa dan bernegara",
      "Rela berkorban untuk bangsa dan negara",
      "Setia pada Pancasila sebagai ideologi negara"
    ],
    k: "C",
    image: null,
    boss: 3
  },
  {
    id: 227,
    code: "WB3-17",
    cat: "Bela Negara",
    type: "Hak & kewajiban bela negara",
    q: "Seorang guru mengajar di daerah terpencil. Ia juga aktif melatih pramuka dan mengajak muridnya menjaga kebersihan sungai. Jika ditanya bentuk pengabdian sesuai profesi, jawaban yang paling tepat adalah…",
    options: [
      "Mengajar dengan sungguh-sungguh di daerah terpencil sekaligus menanamkan nilai bela negara melalui kegiatan pramuka dan kepedulian lingkungan",
      "Menjadi anggota partai politik",
      "Membuka usaha sampingan di luar jam mengajar",
      "Menolak ditempatkan di daerah terpencil",
      "Mengajar hanya di sekolah favorit di kota besar"
    ],
    k: "A",
    image: null,
    boss: 3
  },
  {
    id: 228,
    code: "WB3-18",
    cat: "Bela Negara",
    type: "Bela negara non-militer (profesi)",
    q: "Seorang pemuda menjadi relawan pemadam kebakaran hutan. Saat api mendekati permukiman, ia memilih bertahan memadamkan api bersama warga meskipun asap tebal membahayakan kesehatannya. Tindakan itu mencerminkan nilai bela negara…",
    options: [
      "Kemampuan awal bela negara",
      "Sadar berbangsa dan bernegara",
      "Setia pada Pancasila sebagai ideologi negara",
      "Rela berkorban untuk bangsa dan negara",
      "Cinta tanah air"
    ],
    k: "D",
    image: null,
    boss: 3
  },
  {
    id: 229,
    code: "WB3-19",
    cat: "Empat Konsensus Kebangsaan",
    type: "Pancasila",
    q: "Seorang warga membantu fakir miskin karena merasa iba dan ingin meringankan penderitaannya sebagai sesama manusia. Sikap warga tersebut lebih menekankan pengamalan Pancasila sila…",
    options: [
      "Pertama",
      "Ketiga",
      "Kedua",
      "Keempat",
      "Kelima"
    ],
    k: "C",
    image: null,
    boss: 3
  },
  {
    id: 230,
    code: "WB3-20",
    cat: "Empat Konsensus Kebangsaan",
    type: "UUD 1945",
    q: "Mahkamah Konstitusi berwenang menguji undang-undang terhadap UUD 1945, sedangkan Mahkamah Agung berwenang menguji peraturan di bawah undang-undang. Sebuah peraturan menteri diduga bertentangan dengan undang-undang. Lembaga yang berwenang mengujinya adalah…",
    options: [
      "Mahkamah Konstitusi, karena semua peraturan diuji di sana",
      "Komisi Yudisial, karena mengawasi hakim",
      "DPR, karena DPR yang membentuk undang-undang",
      "MPR, karena MPR mengubah UUD 1945",
      "Mahkamah Agung, karena peraturan menteri berada di bawah undang-undang"
    ],
    k: "E",
    image: null,
    boss: 3
  },
  {
    id: 231,
    code: "WB3-21",
    cat: "Empat Konsensus Kebangsaan",
    type: "UUD 1945",
    q: "Dalam sistem checks and balances, DPR mengawasi pemerintah. Seorang siswa bertanya mengapa DPR tidak boleh menjalankan sendiri program pemerintah yang diawasinya, padahal DPR yang menyetujui anggarannya. Penjelasan yang benar adalah…",
    options: [
      "Karena DPR tidak memiliki anggaran untuk program pemerintah",
      "Karena program pemerintah hanya boleh dijalankan oleh presiden",
      "Karena anggota DPR tidak memiliki keahlian teknis",
      "Karena fungsi pengawasan berbeda dengan fungsi pelaksanaan; DPR mengawasi, sedangkan pemerintah melaksanakan undang-undang, dan bila DPR melaksanakan sendiri maka tidak ada yang mengawasinya",
      "Karena DPR hanya bertugas membentuk undang-undang"
    ],
    k: "D",
    image: null,
    boss: 3
  },
  {
    id: 232,
    code: "WB3-22",
    cat: "Empat Konsensus Kebangsaan",
    type: "NKRI",
    q: "Pemberian otonomi kepada daerah bertujuan…",
    options: [
      "Mengubah Indonesia menjadi negara federal",
      "Menghapus kekuasaan pemerintah pusat",
      "Mempercepat kesejahteraan masyarakat daerah dalam bingkai NKRI",
      "Memberikan kemerdekaan penuh kepada setiap daerah",
      "Membatasi pembangunan hanya di daerah tertentu"
    ],
    k: "C",
    image: null,
    boss: 3
  },
  {
    id: 233,
    code: "WB3-23",
    cat: "Empat Konsensus Kebangsaan",
    type: "Bhinneka Tunggal Ika",
    q: "Dua kelompok agama berbeda pendapat tentang penggunaan balai desa. Kelompok mayoritas mengusulkan pemungutan suara karena yakin akan menang, sedangkan ketua RT mengusulkan jadwal bergilir dan musyawarah bersama. Usulan ketua RT paling sesuai dengan semangat Bhinneka Tunggal Ika karena…",
    options: [
      "Memaksakan pendapat kelompok mayoritas",
      "Berdialog dan mencari titik temu dengan menghormati perbedaan, bukan memutuskan sepihak lewat suara terbanyak",
      "Menghindari pertemuan antar kelompok",
      "Menyerahkan penyelesaian kepada kelompok yang paling kuat",
      "Membiarkan perbedaan itu menjadi permusuhan"
    ],
    k: "B",
    image: null,
    boss: 3
  },
  {
    id: 234,
    code: "WB3-24",
    cat: "Empat Konsensus Kebangsaan",
    type: "Pancasila",
    q: "Dua pernyataan tentang Pancasila: (1) Pancasila menjadi sumber segala sumber hukum negara; (2) Pancasila menjadi cita-cita dan pedoman penyelenggaraan negara. Seorang siswa menyimpulkan pernyataan (1) menunjukkan Pancasila sebagai dasar negara, sedangkan pernyataan (2) menunjukkan Pancasila sebagai ideologi negara. Kesimpulan siswa itu…",
    options: [
      "Salah, karena keduanya menunjukkan Pancasila sebagai dasar negara",
      "Salah, karena keduanya menunjukkan Pancasila sebagai ideologi negara",
      "Salah, karena Pancasila tidak dapat menjadi keduanya sekaligus",
      "Benar sebagian, karena pernyataan (1) menunjukkan ideologi negara",
      "Benar, karena dasar negara berkaitan dengan kedudukan hukumnya, sedangkan ideologi negara berkaitan dengan cita-cita dan pedomannya"
    ],
    k: "E",
    image: null,
    boss: 3
  },
  {
    id: 235,
    code: "WB3-25",
    cat: "Bahasa Indonesia",
    type: "Kata baku",
    q: "Perhatikan kalimat: 'Jadwal kegiatan ini sudah ditetapkan dan tidak dapat dirubah, karena semua fihak sudah menyetujuinya.' Kata-kata yang penulisannya belum baku adalah…",
    options: [
      "dirubah dan fihak — seharusnya 'diubah' dan 'pihak'",
      "jadwal dan kegiatan — seharusnya 'jadual dan aktivitas'",
      "ditetapkan dan menyetujui — seharusnya 'ditentukan dan setuju'",
      "semua dan sudah — seharusnya 'seluruh dan telah'",
      "ini dan karena — seharusnya 'tersebut dan sebab'"
    ],
    k: "A",
    image: null,
    boss: 3
  },
  {
    id: 236,
    code: "WB3-26",
    cat: "Bahasa Indonesia",
    type: "Ejaan",
    q: "Penulisan kata 'ke mana' yang benar terdapat pada kalimat…",
    options: [
      "Kemana kamu akan pergi?",
      "Ke mana kamu akan pergi?",
      "Kamu akan pergi kemana?",
      "Kemana kamu akan pergi",
      "Kamu akan pergi ke mana"
    ],
    k: "B",
    image: null,
    boss: 3
  },
  {
    id: 237,
    code: "WB3-27",
    cat: "Bahasa Indonesia",
    type: "Pemahaman bacaan",
    q: "Bacaan: 'Bendungan kecil di desa itu dibangun secara gotong royong oleh warga dari berbagai dusun. Air bendungan itu mengairi sawah-sawah warga sehingga panen meningkat dua kali lipat. Kini, bendungan itu dirawat bersama dan menjadi kebanggaan desa.' Seorang siswa menyimpulkan bendungan itu dibangun pemerintah dan panen meningkat tiga kali lipat. Kesimpulan siswa itu…",
    options: [
      "Benar, karena bendungan itu mengairi sawah warga",
      "Salah, karena bendungan itu dibangun warga secara gotong royong dan panen meningkat dua kali lipat, bukan tiga kali lipat",
      "Benar sebagian, karena bendungan itu memang dibangun pemerintah",
      "Salah, karena bendungan itu tidak dirawat warga",
      "Benar sebagian, karena panen memang meningkat tiga kali lipat"
    ],
    k: "B",
    image: null,
    boss: 3
  },
  {
    id: 238,
    code: "WB3-28",
    cat: "Bahasa Indonesia",
    type: "Ejaan",
    q: "Perhatikan kalimat: 'Tanggungjawab menjaga kebersihan lingkungan adalah tugas kita bersama.' Kesalahan ejaan pada kalimat tersebut dan perbaikannya yang tepat adalah…",
    options: [
      "Tidak ada kesalahan, kalimat sudah benar",
      "'Tanggungjawab' seharusnya 'tanggung-jawab'",
      "'kebersihan' seharusnya 'ke-bersihan'",
      "'bersama' seharusnya 'ber-sama'",
      "'Tanggungjawab' seharusnya ditulis terpisah: 'tanggung jawab'"
    ],
    k: "E",
    image: null,
    boss: 3
  },
  {
    id: 239,
    code: "WB3-29",
    cat: "Bahasa Indonesia",
    type: "Kedudukan bahasa negara",
    q: "Sebuah instansi menerbitkan surat resmi dalam bahasa asing dengan alasan mitra kerjanya orang asing, sementara peraturan mewajibkan bahasa Indonesia dalam dokumen resmi negara. Seorang staf mengusulkan surat itu tetap memakai bahasa Indonesia dan melampirkan terjemahan bahasa asing. Usulan staf itu tepat karena…",
    options: [
      "Bahasa Indonesia berkedudukan sebagai bahasa negara yang wajib dipakai dalam dokumen resmi, sedangkan bahasa asing hanya dapat dipakai sebagai lampiran terjemahan",
      "Bahasa asing dilarang dipakai dalam bentuk apa pun di Indonesia",
      "Mitra asing wajib belajar bahasa Indonesia sebelum bekerja sama",
      "Surat resmi harus memakai dua bahasa secara bersamaan dalam satu naskah",
      "Bahasa Indonesia hanya wajib dipakai dalam sidang kenegaraan"
    ],
    k: "A",
    image: null,
    boss: 3
  },
  {
    id: 240,
    code: "WB3-30",
    cat: "Bahasa Indonesia",
    type: "Ejaan",
    q: "Perhatikan kalimat: 'Demi untuk kepentingan bersama, kita harus bekerja sama dan bergotong royong.' Kalimat yang paling efektif sebagai perbaikan kalimat tersebut adalah…",
    options: [
      "Demi untuk kepentingan bersama, kita harus bekerja sama dan bergotong royong.",
      "Kita harus bekerja sama demi untuk kepentingan bersama dan bergotong royong.",
      "Demi untuk kepentingan bersama kita harus bekerja sama.",
      "Adalah merupakan tugas kita bekerja sama demi untuk kepentingan bersama.",
      "Kita harus bekerja sama demi kepentingan bersama."
    ],
    k: "E",
    image: null,
    boss: 3
  },
  {
    id: 241,
    code: "WB4-01",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Seorang ASN mendapat tawaran beasiswa luar negeri dengan syarat tidak boleh kembali bekerja di Indonesia selama sepuluh tahun. Di sisi lain, ia memimpin program pengentasan kemiskinan yang baru berjalan dua tahun dan belum mandiri. Jika ia menerima beasiswa itu, programnya akan berhenti. Dua alasan dikemukakan untuk menolak beasiswa itu: (1) programnya akan berhenti bila ia pergi; (2) pengabdian kepada bangsa lebih utama daripada keuntungan pribadi. Seorang rekan berpendapat alasan (1) saja sudah cukup, sedangkan alasan (2) hanya slogan. Pernyataan yang benar tentang kedua alasan itu adalah…",
    options: [
      "Hanya alasan (1) yang benar, karena alasan (2) tidak dapat diukur dan hanya slogan",
      "Keduanya benar, dan alasan (2) yang menentukan karena program yang berhenti hanyalah akibat dari meninggalkan pengabdian demi keuntungan pribadi",
      "Hanya alasan (2) yang benar, karena program dapat diserahkan kepada siapa saja",
      "Keduanya salah, karena beasiswa luar negeri selalu lebih bermanfaat bagi bangsa",
      "Keduanya benar, tetapi alasan (1) yang menentukan karena program lebih penting daripada prinsip pengabdian"
    ],
    k: "B",
    image: null,
    boss: 4
  },
  {
    id: 242,
    code: "WB4-02",
    cat: "Nasionalisme",
    type: "Sejarah perjuangan bangsa",
    q: "Sidang pertama BPUPKI membahas dasar negara. Seorang siswa menyimpulkan bahwa sidang itu juga memproklamasikan kemerdekaan, memilih presiden pertama, dan membentuk PPKI, karena ketiganya melibatkan tokoh yang sama pada tahun yang sama. Tiga kesalahan dalam kesimpulan itu adalah…",
    options: [
      "Sidang BPUPKI hanya membahas pembentukan tentara nasional",
      "Sidang BPUPKI hanya dihadiri oleh anggota PPKI",
      "Sidang BPUPKI tidak pernah membahas dasar negara",
      "Sidang BPUPKI dipimpin oleh Soekarno sebagai presiden",
      "Proklamasi dibacakan Soekarno-Hatta atas nama bangsa Indonesia, presiden pertama dipilih PPKI pada 18 Agustus 1945, dan PPKI dibentuk setelah BPUPKI dibubarkan — ketiganya bukan keputusan sidang BPUPKI"
    ],
    k: "E",
    image: null,
    boss: 4
  },
  {
    id: 243,
    code: "WB4-03",
    cat: "Nasionalisme",
    type: "Nasionalisme di era digital",
    q: "Seorang konten kreator Indonesia meniru budaya asing tanpa adaptasi dan menampilkan budaya Indonesia sebagai budaya yang ketinggalan zaman. Konten itu viral dan banyak ditonton. Sikap kritis generasi muda yang paling mencerminkan nasionalisme adalah…",
    options: [
      "Mengikuti konten kreator itu karena budaya asing lebih menarik",
      "Menertawakan budaya Indonesia bersama konten kreator itu",
      "Mengapresiasi dan mempromosikan budaya Indonesia dengan bangga serta menunjukkan keunggulannya di ruang digital, tanpa membalas dengan ujaran kebencian",
      "Mengabaikan konten itu karena tidak berpengaruh pada kehidupan",
      "Menyerang konten kreator itu dengan ujaran kebencian"
    ],
    k: "C",
    image: null,
    boss: 4
  },
  {
    id: 244,
    code: "WB4-04",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Sebuah perusahaan asing menawar perusahaan pengolahan air bersih milik pengusaha Indonesia dengan harga tiga kali lipat. Perusahaan itu sedang merugi, tetapi mengelola sumber air bagi 20.000 warga. Perusahaan asing itu juga berjanji mempertahankan harga air selama lima tahun. Pengusaha itu menolak tawaran tersebut dan memilih mencari pinjaman untuk menyehatkan perusahaannya. Penolakan itu mencerminkan nasionalisme karena…",
    options: [
      "Pengusaha itu tidak memahami peluang bisnis",
      "Pengusaha itu mencari tawaran yang lebih besar",
      "Pengusaha itu tidak mampu mengelola keuangan perusahaan",
      "Mempertahankan aset penting bagi hajat hidup warga di atas keuntungan sesaat dan janji yang tidak terjamin, meski perusahaan sedang merugi",
      "Pengusaha itu tidak memahami pasar global"
    ],
    k: "D",
    image: null,
    boss: 4
  },
  {
    id: 245,
    code: "WB4-05",
    cat: "Nasionalisme",
    type: "Sejarah perjuangan bangsa",
    q: "Perjanjian Linggarjati (1946) mengakui RI secara de facto atas Jawa, Madura, dan Sumatra. Perjanjian Renville (1948) wilayahnya lebih sempit. Seorang siswa mengaitkannya dengan Perjanjian Roem-Royen (1949) dan menyimpulkan ketiganya sama-sama perjanjian pengakuan wilayah. Pernyataan yang benar tentang ketiganya adalah…",
    options: [
      "Linggarjati dan Renville mengakui wilayah yang sama, Roem-Royen tidak mengakui wilayah mana pun",
      "Linggarjati mengakui Jawa, Madura, dan Sumatra; Renville hanya Jawa Tengah, Yogyakarta, dan Sumatra; Roem-Royen memulihkan pemerintahan RI ke Yogyakarta tanpa pengakuan wilayah baru",
      "Ketiganya mengakui seluruh wilayah Indonesia",
      "Linggarjati mengakui Jawa dan Madura saja, Renville mengakui Sumatra, Roem-Royen mengakui Kalimantan",
      "Linggarjati tidak mengakui wilayah mana pun, Renville mengakui Jawa, Roem-Royen mengakui Sumatra"
    ],
    k: "B",
    image: null,
    boss: 4
  },
  {
    id: 246,
    code: "WB4-06",
    cat: "Nasionalisme",
    type: "Nasionalisme di era digital",
    q: "Generasi muda menggunakan media sosial untuk mengkampanyekan pelestarian bahasa daerah yang terancam punah. Sebagian warganet mengejek kampanye itu sebagai kuno dan tidak berguna. Tindakan yang paling mencerminkan nasionalisme di era digital adalah…",
    options: [
      "Menggunakan media sosial untuk bersenang-senang",
      "Meningkatkan jumlah pengikut di media sosial",
      "Memanfaatkan teknologi untuk menjaga warisan budaya bangsa agar tidak punah, dan membalas ejekan dengan edukasi, bukan kebencian",
      "Menunjukkan kemampuan berbahasa daerah kepada orang lain",
      "Mengikuti tren konten berbahasa daerah yang sedang populer"
    ],
    k: "C",
    image: null,
    boss: 4
  },
  {
    id: 247,
    code: "WB4-07",
    cat: "Integritas",
    type: "Studi kasus gratifikasi",
    q: "Seorang ASN menerima 'uang rokok' dari warga sebagai ucapan terima kasih atas pelayanan yang memang sudah menjadi tugasnya. ASN itu sudah menolak sekali, tetapi warga bersikeras dan berkata semua petugas lain menerimanya. Sikap ASN yang paling berintegritas adalah…",
    options: [
      "Menerima uang itu karena nilainya kecil dan warga memberikannya dengan ikhlas",
      "Menerima uang itu karena pelayanan itu memang sudah menjadi tugasnya",
      "Menerima uang itu asalkan tidak diketahui atasan",
      "Menerima uang itu lalu membagikannya kepada rekan kerja",
      "Menolak uang itu karena pemberian tersebut tetap merupakan gratifikasi yang berkaitan dengan jabatannya, meski warga bersikeras dan petugas lain menerimanya"
    ],
    k: "E",
    image: null,
    boss: 4
  },
  {
    id: 248,
    code: "WB4-08",
    cat: "Integritas",
    type: "Konsistensi sikap-ucapan-tindakan",
    q: "Seorang pejabat menolak hadiah dari pengusaha rekanan. Seminggu kemudian, adiknya yang mengurus izin usaha di instansi yang sama menawarkan hadiah serupa sambil berkata 'ini dari keluarga, bukan dari rekanan.' Pejabat itu menolak lagi dan menjelaskan bahwa hubungan keluarga tidak mengubah hakikat pemberian itu. Dua langkah lanjutan dipertimbangkan: melaporkan pemberian itu, atau cukup menolak karena hadiah tidak jadi diterima. Sikap yang paling menunjukkan integritas adalah…",
    options: [
      "Menolak hadiah itu dan melaporkan percobaan pemberian tersebut, karena integritas berarti kejujuran yang berlaku untuk semua orang tanpa terkecuali, termasuk keluarga, dan percobaan gratifikasi tetap harus dilaporkan",
      "Menolak hadiah itu dan melupakannya karena hadiah tidak jadi diterima",
      "Menerima hadiah itu karena berasal dari keluarga, bukan dari rekanan",
      "Menolak hadiah pertama tetapi menerima yang kedua karena nilainya kecil",
      "Meminta adiknya menyimpan hadiah itu agar tidak tercatat"
    ],
    k: "A",
    image: null,
    boss: 4
  },
  {
    id: 249,
    code: "WB4-09",
    cat: "Integritas",
    type: "Konsistensi sikap-ucapan-tindakan",
    q: "Seorang ASN tetap jujur meskipun dijanjikan promosi jabatan jika ia mau berbohong tentang hasil pemeriksaan. Rekannya berkata kebohongan itu akan menguntungkan seluruh tim karena anggaran tim akan naik. Sikap ASN tersebut menunjukkan…",
    options: [
      "Ketidakmampuan ASN itu memanfaatkan peluang promosi",
      "Keinginan ASN itu dipuji atasannya",
      "Sikap ASN itu yang berlebihan",
      "Integritas, yaitu kejujuran yang dijaga walau diiming-imingi keuntungan besar dan keuntungan bagi tim, karena kebenaran tidak dapat ditukar dengan keuntungan",
      "Ketidaktahuan ASN itu tentang cara kerja birokrasi"
    ],
    k: "D",
    image: null,
    boss: 4
  },
  {
    id: 250,
    code: "WB4-10",
    cat: "Integritas",
    type: "Studi kasus gratifikasi",
    q: "Seorang petugas pelayanan menerima 'uang rokok' dari sopir angkutan yang mengurus izin trayek. Sopir itu berkata uang itu sekadar ucapan terima kasih, bukan untuk mempercepat izin. Petugas itu tahu rekan-rekannya biasa menerima uang serupa. Dua pilihan dipertimbangkan: menolak dan melaporkan kebiasaan itu, atau menolak saja tanpa melapor agar tidak dianggap mencari masalah. Sikap yang paling berintegritas adalah…",
    options: [
      "Menolak uang itu dan melaporkan kebiasaan penerimaan uang serupa, karena pemberian yang berkaitan dengan jabatan tetap merupakan gratifikasi, meski disebut ucapan terima kasih dan sudah menjadi kebiasaan",
      "Menerima uang itu karena nilainya kecil dan sopir memberikannya dengan ikhlas",
      "Menerima uang itu lalu membagikannya kepada rekan kerja",
      "Menolak uang itu saja tanpa melaporkan kebiasaan rekan-rekannya, agar tidak dianggap mencari masalah dengan rekan kerja",
      "Menerima uang itu asalkan tidak diketahui siapa pun"
    ],
    k: "A",
    image: null,
    boss: 4
  },
  {
    id: 251,
    code: "WB4-11",
    cat: "Integritas",
    type: "Kejujuran dalam jabatan",
    q: "Seorang ASN menolak menandatangani dokumen pengadaan yang harganya digelembungkan. Rekan kerjanya berkata penolakan itu akan menghambat proyek dan merugikan warga yang menunggu fasilitas itu. ASN itu mempertimbangkan dua jalan: meminta penghitungan ulang dan pengadaan ulang dengan harga wajar, atau menandatangani dengan catatan keberatan agar proyek tetap berjalan. Sikap ASN itu yang paling mencerminkan kejujuran dalam jabatan adalah…",
    options: [
      "Menandatangani dokumen itu dengan catatan keberatan, agar proyek tetap berjalan dan keberatannya tercatat",
      "Menolak menandatangani dan meminta penghitungan ulang harga serta mengusulkan pengadaan ulang dengan harga wajar, karena kejujuran dalam jabatan berarti menolak mengesahkan sesuatu yang tidak sesuai fakta sekaligus mencari jalan agar proyek tetap berjalan dengan benar",
      "Menandatangani dokumen itu karena warga sudah menunggu fasilitas itu",
      "Menolak menandatangani dan membiarkan proyek terhenti tanpa mengusulkan jalan keluar",
      "Meminta rekan lain yang menandatangani dokumen itu"
    ],
    k: "B",
    image: null,
    boss: 4
  },
  {
    id: 252,
    code: "WB4-12",
    cat: "Integritas",
    type: "Konsistensi sikap-ucapan-tindakan",
    q: "Seorang ASN menolak gratifikasi kecil saat tidak ada yang melihat. Rekannya berkata 'tidak ada yang tahu, ambil saja.' ASN itu menjawab bahwa ia menolak bukan karena takut ketahuan, melainkan karena pemberian itu berkaitan dengan jabatannya. Seminggu kemudian ASN itu ditawari gratifikasi yang lebih besar dengan janji tidak ada yang akan tahu. Ia menolak lagi dengan alasan yang sama. Jawaban ASN itu menunjukkan…",
    options: [
      "Ketidakmampuan ASN itu memanfaatkan kesempatan",
      "Keinginan ASN itu dipuji atasannya",
      "Sikap ASN itu yang berlebihan",
      "Integritas, yaitu kejujuran yang dijaga walau tidak ada yang mengawasi dan didasari pemahaman atas aturan, bukan sekadar takut ketahuan, dan berlaku konsisten pada gratifikasi kecil maupun besar",
      "Integritas, yaitu kejujuran yang dijaga karena gratifikasi besar pasti ketahuan, sedangkan gratifikasi kecil tidak masalah"
    ],
    k: "D",
    image: null,
    boss: 4
  },
  {
    id: 253,
    code: "WB4-13",
    cat: "Bela Negara",
    type: "Bela negara non-militer (profesi)",
    q: "Seorang programmer membuat aplikasi pelaporan pungutan liar yang dapat digunakan masyarakat untuk melaporkan pungli secara anonim. Para pelaku pungli mengancamnya agar menutup aplikasi itu. Programmer itu tetap mempertahankan aplikasinya dan melaporkannya kepada pihak berwenang. Tindakan programmer tersebut merupakan bentuk bela negara karena…",
    options: [
      "Meningkatkan penghasilannya sebagai programmer",
      "Mendapatkan penghargaan dari pemerintah",
      "Mengabdikan keahlian profesinya untuk memberantas praktik yang merugikan bangsa, termasuk saat ada ancaman terhadap dirinya",
      "Membuktikan kemampuan programmer Indonesia",
      "Mengurangi jumlah pungutan liar di daerahnya"
    ],
    k: "C",
    image: null,
    boss: 4
  },
  {
    id: 254,
    code: "WB4-14",
    cat: "Bela Negara",
    type: "Hak & kewajiban bela negara",
    q: "Seorang warga negara menolak ikut bela negara dengan alasan ia takut dan tidak memiliki kemampuan militer. Pandangan warga tersebut keliru karena…",
    options: [
      "Bela negara hanya diwajibkan bagi anggota TNI",
      "Bela negara dapat diwujudkan dengan pengabdian sesuai profesi dan kemampuan masing-masing",
      "Bela negara hanya berupa wajib militer",
      "Bela negara tidak diwajibkan oleh UUD 1945",
      "Bela negara hanya untuk warga negara laki-laki"
    ],
    k: "B",
    image: null,
    boss: 4
  },
  {
    id: 255,
    code: "WB4-15",
    cat: "Bela Negara",
    type: "Bela negara non-militer (profesi)",
    q: "Seorang ilmuwan mengembangkan vaksin murah. Ia dihadapkan pada tawaran perusahaan asing yang akan membeli paten vaksin itu dengan harga tinggi dan menjualnya dengan harga mahal. Perusahaan itu juga menawarkan lisensi murah untuk pasar dalam negeri. Ilmuwan itu menolak penjualan paten dan memilih memproduksinya bersama lembaga dalam negeri agar harganya tetap terjangkau. Tindakan itu merupakan bela negara karena…",
    options: [
      "Meningkatkan penghasilannya sebagai ilmuwan",
      "Mendapatkan penghargaan dari pemerintah",
      "Mengabdikan keahliannya untuk kesehatan dan ketahanan bangsa di atas keuntungan pribadi, dengan mempertahankan kendali atas paten agar harga tetap terjangkau bagi rakyat",
      "Membuktikan kemampuan ilmuwan Indonesia",
      "Menerima tawaran lisensi murah itu saja, karena lisensi sudah cukup menjaga harga dalam negeri"
    ],
    k: "C",
    image: null,
    boss: 4
  },
  {
    id: 256,
    code: "WB4-16",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Seorang warga negara menolak mengikuti organisasi yang bertujuan mengganti Pancasila dengan ideologi lain, meski organisasi itu menjanjikan bantuan ekonomi bagi keluarganya. Ia kemudian aktif dalam kegiatan yang memperkuat pemahaman Pancasila di lingkungannya. Sikap warga tersebut mencerminkan nilai dasar bela negara, yaitu…",
    options: [
      "Kemampuan awal bela negara",
      "Cinta tanah air",
      "Sadar berbangsa dan bernegara",
      "Rela berkorban untuk bangsa dan negara",
      "Setia pada Pancasila sebagai ideologi negara"
    ],
    k: "E",
    image: null,
    boss: 4
  },
  {
    id: 257,
    code: "WB4-17",
    cat: "Bela Negara",
    type: "Hak & kewajiban bela negara",
    q: "Komponen pendukung meliputi seluruh sumber daya nasional. Komponen cadangan dibentuk dari warga negara yang telah mengikuti pelatihan dasar kemiliteran. Seorang siswa menyimpulkan warga biasa yang tidak pernah berlatih militer termasuk komponen cadangan karena bela negara adalah hak semua warga. Kesimpulan itu keliru karena…",
    options: [
      "Warga biasa tanpa pelatihan militer termasuk komponen pendukung, bukan komponen cadangan, karena komponen cadangan mensyaratkan pelatihan dasar kemiliteran",
      "Warga biasa tanpa pelatihan militer bukan komponen pendukung maupun komponen cadangan",
      "Komponen pendukung hanya anggota TNI aktif",
      "Komponen cadangan dibentuk dari pegawai negeri sipil saja",
      "Semua warga negara otomatis menjadi komponen cadangan"
    ],
    k: "A",
    image: null,
    boss: 4
  },
  {
    id: 258,
    code: "WB4-18",
    cat: "Bela Negara",
    type: "Bela negara non-militer (profesi)",
    q: "Seorang pemuda menjadi duta anti-narkoba. Ia menemukan temannya sendiri memakai narkoba dan mengetahui siapa pengedarnya. Ia mempertimbangkan dua langkah: membujuk temannya menjalani rehabilitasi saja, atau membujuk temannya rehabilitasi sekaligus melaporkan pengedarnya. Ia memilih langkah kedua. Tindakan pemuda itu merupakan bela negara karena…",
    options: [
      "Meningkatkan popularitasnya di sekolah",
      "Mendapatkan penghargaan dari kepala sekolah",
      "Menghindari hukuman karena memakai narkoba",
      "Menjaga generasi bangsa dari ancaman non-militer yang merusak masa depan, termasuk saat ancaman itu datang dari lingkaran terdekatnya, dengan menolong korban sekaligus memutus mata rantai pengedarnya",
      "Membujuk temannya rehabilitasi saja sudah cukup, tanpa perlu melaporkan pengedarnya"
    ],
    k: "D",
    image: null,
    boss: 4
  },
  {
    id: 259,
    code: "WB4-19",
    cat: "Empat Konsensus Kebangsaan",
    type: "Pancasila",
    q: "Dalam musyawarah warga, keputusan diambil secara mufakat setelah perdebatan panjang. Seorang siswa bertanya apa bedanya musyawarah itu dengan sekadar menjaga persatuan. Penjelasan yang benar adalah…",
    options: [
      "Musyawarah dipimpin oleh orang yang paling tua",
      "Musyawarah hanya diikuti oleh wakil rakyat",
      "Musyawarah dilakukan dengan akal sehat, kebijaksanaan, dan mengutamakan kepentingan bersama, sehingga keputusannya lahir dari hikmat, bukan sekadar kesepakatan agar rukun",
      "Musyawarah selalu berakhir dengan pemungutan suara",
      "Musyawarah hanya membahas kepentingan kelompok mayoritas"
    ],
    k: "C",
    image: null,
    boss: 4
  },
  {
    id: 260,
    code: "WB4-20",
    cat: "Empat Konsensus Kebangsaan",
    type: "UUD 1945",
    q: "Seorang warga hendak mengadakan aksi damai menyuarakan pendapat di muka umum dan setelah itu mengadakan kegiatan keagamaan di tempat yang sama. Aparat memintanya menunjukkan dasar hukum kedua kebebasan itu. Seorang temannya berpendapat keduanya diatur Pasal 28E, temannya yang lain berpendapat kebebasan berpendapat diatur Pasal 27 ayat (1) dan kebebasan beragama diatur Pasal 29 ayat (2). Pernyataan yang benar adalah…",
    options: [
      "Keduanya diatur Pasal 28E ayat (3)",
      "Kebebasan berpendapat diatur Pasal 28E ayat (3) dan kebebasan beragama diatur Pasal 29 ayat (2)",
      "Kebebasan berpendapat diatur Pasal 27 ayat (1) dan kebebasan beragama diatur Pasal 28E ayat (3)",
      "Keduanya diatur Pasal 27 ayat (1)",
      "Kebebasan berpendapat diatur Pasal 30 ayat (1) dan kebebasan beragama diatur Pasal 29 ayat (2)"
    ],
    k: "B",
    image: null,
    boss: 4
  },
  {
    id: 261,
    code: "WB4-21",
    cat: "Empat Konsensus Kebangsaan",
    type: "UUD 1945",
    q: "Pemerintah daerah mengatur urusan rumah tangganya berdasarkan…",
    options: [
      "Perintah langsung dari pemerintah pusat",
      "Keputusan kepala daerah tanpa persetujuan DPRD",
      "Kebijakan partai politik yang berkuasa",
      "Asas otonomi dan tugas pembantuan",
      "Kehendak masyarakat setempat tanpa aturan"
    ],
    k: "D",
    image: null,
    boss: 4
  },
  {
    id: 262,
    code: "WB4-22",
    cat: "Empat Konsensus Kebangsaan",
    type: "NKRI",
    q: "Sebuah daerah tertinggal mengusulkan pemekaran wilayah. Dua pendapat muncul: pemekaran mempercepat kesejahteraan karena daerah baru lebih fokus mengurus warganya, atau pemekaran hanya memindahkan pusat kekuasaan bila tidak disertai pemerataan pembangunan yang nyata. Seorang ASN menjelaskan bahwa pemekaran dapat mencegah disintegrasi hanya apabila…",
    options: [
      "Pemekaran dilakukan dan daerah baru diberi kewenangan penuh tanpa pengawasan pusat",
      "Pemekaran dilakukan tanpa memperkuat persatuan dan pemerataan pembangunan yang nyata bagi warga",
      "Pemekaran disertai penguatan persatuan dan pemerataan pembangunan yang nyata bagi warga, bukan sekadar memindahkan pusat kekuasaan",
      "Pemekaran hanya boleh dilakukan di daerah maju yang sudah sejahtera",
      "Pemekaran berarti daerah memisahkan diri dari NKRI"
    ],
    k: "C",
    image: null,
    boss: 4
  },
  {
    id: 263,
    code: "WB4-23",
    cat: "Empat Konsensus Kebangsaan",
    type: "Bhinneka Tunggal Ika",
    q: "Dua kelompok agama berselisih soal pembangunan rumah ibadah. Kelompok mayoritas mengusulkan pemungutan suara, sedangkan ketua RT mengusulkan dialog antarumat dan penegakan hukum yang adil. Langkah yang paling tepat untuk meredam konflik itu adalah…",
    options: [
      "Memaksakan satu ajaran agama kepada semua kelompok",
      "Dialog antarumat beragama dan penegakan hukum yang adil, bukan pemungutan suara yang hanya memenangkan mayoritas",
      "Menghindari pertemuan antar kelompok agama",
      "Menyerahkan penyelesaian kepada kelompok mayoritas",
      "Membiarkan konflik itu selesai dengan sendirinya"
    ],
    k: "B",
    image: null,
    boss: 4
  },
  {
    id: 264,
    code: "WB4-24",
    cat: "Empat Konsensus Kebangsaan",
    type: "Pancasila",
    q: "Sebuah peraturan daerah melarang warga berbeda agama beribadah di rumah ibadahnya. Dua alasan pembatalan diajukan: (1) bertentangan dengan sila pertama Pancasila; (2) bertentangan dengan Pancasila sebagai sumber segala sumber hukum negara. Pernyataan yang benar tentang kedua alasan itu adalah…",
    options: [
      "Hanya alasan (1) yang benar, karena Pancasila bukan sumber hukum negara",
      "Hanya alasan (2) yang benar, karena sila pertama tidak mengatur kebebasan beribadah",
      "Keduanya salah, karena peraturan daerah tidak dapat dibatalkan oleh siapa pun",
      "Keduanya benar, tetapi yang menentukan adalah alasan (1) karena sila pertama lebih tinggi dari kedudukan hukum Pancasila",
      "Keduanya benar, dan alasan (2) yang menentukan karena Pancasila sebagai sumber segala sumber hukum membuat peraturan yang bertentangan dengannya tidak boleh berlaku"
    ],
    k: "E",
    image: null,
    boss: 4
  },
  {
    id: 265,
    code: "WB4-25",
    cat: "Bahasa Indonesia",
    type: "Kata baku",
    q: "Perhatikan paragraf: 'Kegiatan ini memerlukan praktek yang cermat dalam mengelola resiko pelayanan dan ijin operasional, karena hasilnya akan menjadi acuan dalam menyusun standart pelayanan yang baru.' Kata-kata yang belum baku dalam paragraf tersebut adalah…",
    options: [
      "praktek, resiko, ijin, dan standart — seharusnya 'praktik, risiko, izin, dan standar'",
      "memerlukan, cermat, dan mengelola — seharusnya 'membutuhkan, teliti, dan mengatur'",
      "kegiatan, hasil, dan jadwal — seharusnya 'aktivitas, buah, dan agenda'",
      "acuan, menyusun, dan baru — seharusnya 'patokan, membuat, dan anyar'",
      "sistem, operasional, dan pelayanan — seharusnya 'tata, operasi, dan servis'"
    ],
    k: "A",
    image: null,
    boss: 4
  },
  {
    id: 266,
    code: "WB4-26",
    cat: "Bahasa Indonesia",
    type: "Ejaan",
    q: "Perhatikan paragraf: 'Diantara para siswa, dialah yang paling rajin. Ia selalu datang ke sekolah tepat waktu dan belajar diperpustakaan sepulang sekolah.' Kesalahan penulisan kata 'di' dalam paragraf tersebut terdapat pada…",
    options: [
      "'Diantara' dan 'diperpustakaan' — keduanya seharusnya ditulis terpisah: 'Di antara' dan 'di perpustakaan'",
      "'kesekolah' saja — seharusnya 'ke sekolah'",
      "'Diantara' saja — seharusnya 'Di antara'",
      "'diperpustakaan' saja — seharusnya 'di perpustakaan'",
      "Tidak ada kesalahan penulisan kata 'di' dalam paragraf tersebut"
    ],
    k: "A",
    image: null,
    boss: 4
  },
  {
    id: 267,
    code: "WB4-27",
    cat: "Bahasa Indonesia",
    type: "Pemahaman bacaan",
    q: "Bacaan: 'Pasar terapung di Kalimantan Selatan telah ada sejak ratusan tahun lalu. Para pedagang berdagang dari atas perahu dengan menjual buah-buahan, sayur-sayuran, dan hasil bumi lainnya. Kini, pasar terapung menjadi daya tarik wisata yang mendatangkan pengunjung dari berbagai daerah.' Seorang siswa menyimpulkan pasar terapung hanya dikunjungi warga setempat dan pedagangnya hanya menjual buah-buahan. Kesimpulan siswa itu…",
    options: [
      "Benar, karena bacaan menyebut pedagang menjual buah-buahan",
      "Benar, karena pasar itu sudah ada sejak ratusan tahun lalu",
      "Salah sebagian, karena pedagang juga menjual sayur-sayuran, tetapi benar soal pengunjungnya",
      "Salah sebagian, karena pengunjungnya dari berbagai daerah, tetapi benar soal dagangannya",
      "Salah seluruhnya, karena pedagang menjual hasil bumi lainnya juga dan pengunjungnya datang dari berbagai daerah"
    ],
    k: "E",
    image: null,
    boss: 4
  },
  {
    id: 268,
    code: "WB4-28",
    cat: "Bahasa Indonesia",
    type: "Ejaan",
    q: "Perhatikan empat kalimat: (1) 'Mereka bekerja sama membangun desa.' (2) 'Kerjasama tim sangat dibutuhkan.' (3) 'Gotong royong adalah bentuk kerja sama yang baik.' (4) 'Kerja sama yang baik membutuhkan tanggungjawab bersama.' Penulisan frasa 'kerja sama' dan 'tanggung jawab' yang benar terdapat pada kalimat…",
    options: [
      "Kalimat (1), (2), dan (3)",
      "Kalimat (1), (2), dan (4)",
      "Kalimat (2) dan (4)",
      "Kalimat (1), (3), dan (4)",
      "Kalimat (1) dan (3) saja, karena kalimat (2) salah menulis 'Kerjasama' dan kalimat (4) salah menulis 'tanggungjawab'"
    ],
    k: "E",
    image: null,
    boss: 4
  },
  {
    id: 269,
    code: "WB4-29",
    cat: "Bahasa Indonesia",
    type: "Kedudukan bahasa negara",
    q: "Tiga situasi: (1) sidang resmi kenegaraan; (2) peraturan perundang-undangan; (3) percakapan keluarga di rumah. Bahasa Indonesia wajib digunakan sebagai bahasa negara pada situasi…",
    options: [
      "(1) dan (2), sedangkan pada (3) bahasa daerah atau bahasa sehari-hari dapat dipakai",
      "(1) saja, sedangkan (2) dan (3) bebas memakai bahasa apa saja",
      "(3) saja, karena bahasa negara dipakai dalam kehidupan sehari-hari",
      "Ketiga situasi wajib memakai bahasa Indonesia",
      "(2) saja, karena peraturan adalah dokumen resmi"
    ],
    k: "A",
    image: null,
    boss: 4
  },
  {
    id: 270,
    code: "WB4-30",
    cat: "Bahasa Indonesia",
    type: "Ejaan",
    q: "Perhatikan kalimat: 'Gotong royong adalah merupakan budaya bangsa Indonesia yang harus kita lestarikan demi untuk kepentingan bersama.' Kalimat yang paling efektif sebagai perbaikan kalimat tersebut adalah…",
    options: [
      "Gotong royong adalah merupakan budaya bangsa Indonesia yang harus kita lestarikan demi untuk kepentingan bersama.",
      "Gotong royong adalah budaya bangsa Indonesia merupakan yang harus kita lestarikan.",
      "Gotong royong merupakan adalah budaya bangsa Indonesia yang harus kita lestarikan demi untuk kepentingan bersama.",
      "Gotong royong merupakan budaya bangsa Indonesia yang harus kita lestarikan demi kepentingan bersama.",
      "Gotong royong adalah merupakan budaya bangsa Indonesia yang harus kita lestarikan."
    ],
    k: "D",
    image: null,
    boss: 4
  },
  {
    id: 271,
    code: "WB5-01",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Seorang ASN di daerah perbatasan dihadapkan pada dua pilihan: menerima tawaran perusahaan asing yang akan membeli lahan pertanian warga dengan harga tinggi dan mempekerjakan warga dengan upah besar, atau menolaknya demi menjaga ketahanan pangan dan kedaulatan wilayah. ASN itu menolak tawaran tersebut dan mengusulkan program pertanian mandiri bagi warga. Sikap ASN tersebut mencerminkan…",
    options: [
      "Nasionalisme, yaitu mengutamakan kedaulatan dan kesejahteraan bangsa di atas keuntungan sesaat, termasuk saat tawaran itu menjanjikan upah besar bagi warga",
      "Ketidaktahuan ASN itu tentang nilai ekonomi lahan pertanian",
      "Sikap ASN itu yang menghambat masuknya investasi asing",
      "Keinginan ASN itu menguasai lahan pertanian warga",
      "Ketidakmampuan ASN itu bernegosiasi dengan perusahaan asing"
    ],
    k: "A",
    image: null,
    boss: 5
  },
  {
    id: 272,
    code: "WB5-02",
    cat: "Nasionalisme",
    type: "Sejarah perjuangan bangsa",
    q: "Kongres Pemuda II (1928) diselenggarakan oleh Perhimpunan Pelajar-Pelajar Indonesia (PPPI) dan dipimpin Soegondo Djojopoespito. Seorang siswa mengaitkannya dengan Budi Utomo (1908) yang didirikan pelajar STOVIA dan Kongres Pemuda I (1926) yang dipimpin Tabrani. Pernyataan yang benar tentang ketiga peristiwa itu adalah…",
    options: [
      "Kongres Pemuda II dipelopori Budi Utomo dan dipimpin Soekarno, sedangkan Kongres Pemuda I dipimpin Soegondo",
      "PPPI didirikan Soekarno pada 1908 dan Budi Utomo didirikan Tabrani pada 1926",
      "Kongres Pemuda II dipelopori PPPI dan dipimpin Soegondo, Budi Utomo didirikan pada 1908 oleh pelajar STOVIA, dan Kongres Pemuda I dipimpin Tabrani serta belum menghasilkan ikrar persatuan",
      "Budi Utomo menyelenggarakan Kongres Pemuda II pada 1928 dan Kongres Pemuda I dipimpin Soegondo",
      "PPPI dan Budi Utomo adalah organisasi yang sama dengan nama berbeda dan keduanya dipimpin Tabrani"
    ],
    k: "C",
    image: null,
    boss: 5
  },
  {
    id: 273,
    code: "WB5-03",
    cat: "Nasionalisme",
    type: "Nasionalisme di era digital",
    q: "Menjelang pemilu, beredar video rekayasa (deepfake) yang menampilkan seorang calon pemimpin mengucapkan pernyataan yang tidak pernah ia ucapkan. Video itu dibagikan oleh tokoh masyarakat yang dipercaya dan tampilannya sangat meyakinkan. Seorang ASN yang melihat video itu bersikap…",
    options: [
      "Membagikan video itu agar masyarakat waspada",
      "Mempercayai video itu karena dibagikan tokoh yang dipercaya dan tampilannya sangat meyakinkan",
      "Memeriksa kebenaran video itu melalui sumber resmi dan tidak menyebarkannya sebelum jelas, meski dibagikan tokoh yang dipercaya",
      "Menambahkan komentar yang memperkeruh suasana",
      "Mengabaikan video itu karena urusan pemilu bukan urusannya"
    ],
    k: "C",
    image: null,
    boss: 5
  },
  {
    id: 274,
    code: "WB5-04",
    cat: "Nasionalisme",
    type: "Studi kasus sikap nasionalis",
    q: "Seorang diplomat Indonesia mempertahankan kedaulatan negaranya dalam forum internasional meskipun ditekan negara besar. Negara besar itu mengancam memutus kerja sama ekonomi bila Indonesia tidak melunak. Dua sikap dipertimbangkan: menyampaikan sikap tegas dengan bahasa diplomatik yang tetap membuka ruang kerja sama, atau melunak demi menjaga kerja sama ekonomi. Sikap diplomat yang paling mencerminkan nasionalisme adalah…",
    options: [
      "Menyerah pada tekanan negara besar demi menjaga kerja sama ekonomi",
      "Menyampaikan sikap tegas dan memutuskan kerja sama ekonomi itu sementara, agar negara besar itu menghormati kedaulatan Indonesia",
      "Mengabaikan forum internasional itu",
      "Membela kedaulatan bangsa tanpa gentar dengan bahasa diplomatik yang tegas sekaligus menjaga jalur diplomasi agar kerja sama tetap berjalan",
      "Menyampaikan sikap Indonesia hanya melalui media sosial"
    ],
    k: "D",
    image: null,
    boss: 5
  },
  {
    id: 275,
    code: "WB5-05",
    cat: "Nasionalisme",
    type: "Sejarah perjuangan bangsa",
    q: "Dalam sidang PPKI tanggal 18 Agustus 1945, tiga keputusan penting diambil. Seorang siswa mengaitkannya dengan sidang BPUPKI dan menyimpulkan BPUPKI yang mengesahkan UUD 1945. Pernyataan yang benar tentang sidang PPKI adalah…",
    options: [
      "PPKI mengesahkan UUD 1945 dan memilih presiden pada 17 Agustus 1945",
      "BPUPKI yang mengesahkan UUD 1945 dan memilih presiden pertama",
      "PPKI merumuskan dasar negara pada 1 Juni 1945",
      "PPKI membubarkan BPUPKI sebelum proklamasi",
      "PPKI mengesahkan UUD 1945, memilih Soekarno sebagai presiden dan Hatta sebagai wakil presiden, serta membentuk KNIP"
    ],
    k: "E",
    image: null,
    boss: 5
  },
  {
    id: 276,
    code: "WB5-06",
    cat: "Nasionalisme",
    type: "Nasionalisme di era digital",
    q: "Teknologi kecerdasan buatan (AI) dapat membuat konten budaya palsu yang tampak asli dan menyebar luas di media sosial. Sebagian konten itu memadukan unsur budaya asli dengan unsur rekaan sehingga sulit dibedakan. Sikap generasi muda yang paling mencerminkan nasionalisme di tengah perkembangan teknologi ini adalah…",
    options: [
      "Menolak semua teknologi AI karena dianggap berbahaya",
      "Menerima semua konten AI tanpa memeriksa kebenarannya",
      "Menggunakan AI secara kritis, memeriksa kebenaran konten budaya pada sumber tepercaya, dan mempromosikan budaya asli Indonesia, termasuk saat konten palsu itu memadukan unsur asli dan rekaan",
      "Membiarkan konten budaya palsu menyebar karena tidak merugikan",
      "Menyerahkan urusan budaya palsu kepada pemerintah saja"
    ],
    k: "C",
    image: null,
    boss: 5
  },
  {
    id: 277,
    code: "WB5-07",
    cat: "Integritas",
    type: "Studi kasus gratifikasi",
    q: "Dua kasus: (1) Seorang pengusaha memberi uang kepada pejabat agar memenangkan tendernya; (2) Seorang rekanan memberi parsel kepada pejabat setelah proyek selesai. Seorang siswa menyimpulkan keduanya adalah suap. Kesimpulan itu…",
    options: [
      "Benar, karena keduanya pemberian kepada pejabat",
      "Benar, karena keduanya berkaitan dengan jabatan pejabat",
      "Salah, karena keduanya adalah gratifikasi",
      "Salah sebagian, karena kasus (1) adalah gratifikasi dan kasus (2) adalah suap",
      "Salah sebagian: suap diberikan untuk memengaruhi keputusan pejabat, sedangkan gratifikasi adalah pemberian yang berkaitan dengan jabatan dan wajib dilaporkan; kasus (1) adalah suap dan kasus (2) adalah gratifikasi"
    ],
    k: "E",
    image: null,
    boss: 5
  },
  {
    id: 278,
    code: "WB5-08",
    cat: "Integritas",
    type: "Konsistensi sikap-ucapan-tindakan",
    q: "Seorang ASN menolak 'uang pelicin' dari calon peserta seleksi CPNS. Calon itu kemudian meminta bantuan melalui keluarga ASN dengan alasan sudah menjadi kebiasaan. ASN itu menolak lagi. Dua langkah lanjutan dipertimbangkan: melaporkan percobaan itu, atau cukup menolak karena seleksi belum dipengaruhi. Sikap ASN itu yang paling menunjukkan integritas adalah…",
    options: [
      "Menolak lagi dan melaporkan percobaan itu, karena integritas berarti kejujuran yang berlaku untuk semua orang tanpa terkecuali, termasuk saat godaan datang melalui keluarga dan dalih kebiasaan",
      "Menolak lagi dan melupakannya karena seleksi belum dipengaruhi",
      "Menerima uang itu karena sudah menjadi kebiasaan",
      "Menolak yang pertama tetapi menerima yang kedua karena melalui keluarga",
      "Meminta keluarga menyimpan uang itu agar tidak tercatat"
    ],
    k: "A",
    image: null,
    boss: 5
  },
  {
    id: 279,
    code: "WB5-09",
    cat: "Integritas",
    type: "Kejujuran dalam jabatan",
    q: "Seorang ASN menemukan kesalahan dalam laporan keuangan tahun lalu yang sudah diaudit dan dinyatakan wajar. Kesalahan itu membuat keuangan instansi terlihat lebih baik dari keadaan sebenarnya. Dua langkah dipertimbangkan: melaporkan dan memperbaiki kesalahan itu, atau membiarkannya karena laporan sudah diaudit dan kesalahan itu menguntungkan instansi. Sikap ASN yang paling berintegritas adalah…",
    options: [
      "Membiarkan kesalahan itu karena laporan sudah diaudit",
      "Menyembunyikan kesalahan itu demi nama baik instansi",
      "Mengikuti kesalahan itu agar laporan tetap konsisten",
      "Melaporkan dan memperbaiki kesalahan itu meskipun laporan sudah diaudit dan kesalahan itu menguntungkan instansi",
      "Meminta rekan lain yang memperbaiki kesalahan itu"
    ],
    k: "D",
    image: null,
    boss: 5
  },
  {
    id: 280,
    code: "WB5-10",
    cat: "Integritas",
    type: "Studi kasus gratifikasi",
    q: "Seorang ASN menerima hadiah dari rekanan setelah proyek yang ia awasi selesai dan diaudit dengan hasil wajar. Rekanan itu berkata hadiah itu sekadar ucapan terima kasih dan tidak akan memengaruhi proyek berikutnya. ASN itu menolak. Dua langkah lanjutan dipertimbangkan: melaporkan pemberian itu, atau cukup menolak karena proyek sudah selesai dan diaudit. Sikap ASN yang paling berintegritas adalah…",
    options: [
      "Menerima hadiah itu karena proyek sudah selesai dan diaudit",
      "Menolak hadiah itu dan melaporkan pemberian itu, karena hadiah tetap berkaitan dengan jabatannya meski proyek sudah selesai dan diaudit",
      "Menerima hadiah itu lalu membagikannya kepada tim proyek",
      "Menolak hadiah itu saja tanpa melapor, karena proyek sudah selesai dan tidak ada yang dirugikan",
      "Menerima hadiah itu karena rekanan memberikannya dengan tulus"
    ],
    k: "B",
    image: null,
    boss: 5
  },
  {
    id: 281,
    code: "WB5-11",
    cat: "Integritas",
    type: "Kejujuran dalam jabatan",
    q: "Seorang ASN menolak menandatangani laporan pertanggungjawaban kegiatan fiktif meski diancam dipindahkan ke daerah terpencil. Atasannya berkata pemindahan itu demi penyegaran, bukan ancaman. ASN itu tetap menolak. Dua langkah lanjutan dipertimbangkan: melaporkan kegiatan fiktif itu melalui jalur pengaduan, atau menyebarkannya ke media sosial agar cepat ditangani. Sikap ASN itu yang paling mencerminkan kejujuran dalam jabatan adalah…",
    options: [
      "Menandatangani laporan itu karena pemindahan itu demi penyegaran",
      "Menolak menandatangani dan melaporkan kegiatan fiktif itu melalui jalur pengaduan, karena kejujuran dalam jabatan berarti menolak mengesahkan sesuatu yang tidak sesuai fakta walau ancaman dibungkus sebagai keputusan biasa",
      "Menolak menandatangani dan menyebarkannya ke media sosial agar cepat ditangani",
      "Menandatangani laporan itu dengan catatan kecil di bawah tanda tangannya",
      "Meminta rekan lain yang menandatangani laporan itu"
    ],
    k: "B",
    image: null,
    boss: 5
  },
  {
    id: 282,
    code: "WB5-12",
    cat: "Integritas",
    type: "Kejujuran dalam jabatan",
    q: "Seorang ASN menemukan bukti korupsi yang dilakukan atasannya dan diancam akan dimutasi jika melaporkan. Dua jalur dipertimbangkan: melaporkan melalui jalur pengaduan internal, atau melaporkan langsung ke aparat penegak hukum. ASN itu memilih jalur pengaduan internal yang melindungi pelapor. Sikap ASN yang paling berintegritas adalah…",
    options: [
      "Menyembunyikan bukti itu demi keamanan jabatannya",
      "Meminta bagian dari hasil korupsi itu",
      "Mengikuti perintah atasan agar tidak dimutasi",
      "Melaporkan temuan itu melalui jalur pengaduan yang berlaku meskipun ada risiko bagi dirinya, karena jalur itu melindungi pelapor dan kebenaran lebih utama daripada keamanan jabatan",
      "Menyebarkan bukti itu ke media sosial agar cepat ditangani"
    ],
    k: "D",
    image: null,
    boss: 5
  },
  {
    id: 283,
    code: "WB5-13",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Seorang pemuda menolak tawaran bekerja untuk organisasi yang menyebarkan paham anti-Pancasila, meskipun gajinya sangat besar dan ia sedang membutuhkan uang untuk pengobatan ibunya. Ia kemudian mengajak teman-temannya mempelajari Pancasila dan melaporkan organisasi itu kepada pihak berwenang. Penolakan pemuda itu merupakan wujud nilai dasar bela negara…",
    options: [
      "Kemampuan awal bela negara",
      "Cinta tanah air",
      "Sadar berbangsa dan bernegara",
      "Rela berkorban untuk bangsa dan negara",
      "Setia pada Pancasila sebagai ideologi negara"
    ],
    k: "E",
    image: null,
    boss: 5
  },
  {
    id: 284,
    code: "WB5-14",
    cat: "Bela Negara",
    type: "Hak & kewajiban bela negara",
    q: "Bela negara bagi warga berkebutuhan khusus dapat diwujudkan melalui pengabdian sesuai kemampuan dan profesi. Dua warga pengguna kursi roda bertanya bentuk bela negara yang sesuai: seorang guru dan seorang programmer. Seorang ASN menjelaskan bahwa keduanya dapat membela negara melalui profesinya masing-masing. Penjelasan yang paling tepat adalah…",
    options: [
      "Guru itu mengajar dengan sungguh-sungguh dan menanamkan nilai kebangsaan kepada muridnya, sedangkan programmer itu membuat aplikasi yang bermanfaat bagi masyarakat, karena bela negara diwujudkan melalui pengabdian sesuai kemampuan dan profesi",
      "Keduanya wajib mengikuti wajib militer tanpa pengecualian",
      "Keduanya dibebaskan dari semua kewajiban negara",
      "Keduanya harus menolak semua bentuk pengabdian",
      "Keduanya hanya dapat membela negara melalui sumbangan uang"
    ],
    k: "A",
    image: null,
    boss: 5
  },
  {
    id: 285,
    code: "WB5-15",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Seorang warga negara menolak ajakan untuk tidak membayar pajak dengan alasan pajak hanya menguntungkan pemerintah. Warga itu juga aktif dalam kerja bakti membersihkan lingkungan. Seorang siswa bertanya nilai dasar bela negara apa yang paling tampak dari penolakan membayar pajak itu. Jawaban yang tepat adalah…",
    options: [
      "Kemampuan awal bela negara",
      "Cinta tanah air",
      "Sadar berbangsa dan bernegara",
      "Rela berkorban untuk bangsa dan negara",
      "Setia pada Pancasila sebagai ideologi negara"
    ],
    k: "C",
    image: null,
    boss: 5
  },
  {
    id: 286,
    code: "WB5-16",
    cat: "Bela Negara",
    type: "Nilai dasar bela negara",
    q: "Seorang warga negara mengaku setia pada Pancasila, tetapi ia menyebarkan ujaran kebencian terhadap kelompok lain dan menolak bermusyawarah. Seorang tetangga mengingatkannya bahwa setia pada Pancasila berarti mengamalkannya, bukan sekadar mengucapkannya. Sikap yang paling mencerminkan setia pada Pancasila adalah…",
    options: [
      "Mengucapkan Pancasila setiap hari tanpa mengamalkannya",
      "Menyebarkan ujaran kebencian terhadap kelompok lain",
      "Menolak bermusyawarah dengan kelompok yang berbeda",
      "Membela Pancasila dengan kekerasan terhadap yang berbeda pendapat",
      "Mengamalkan nilai-nilai Pancasila dalam kehidupan sehari-hari, seperti menghormati perbedaan dan bermusyawarah menyelesaikan masalah"
    ],
    k: "E",
    image: null,
    boss: 5
  },
  {
    id: 287,
    code: "WB5-17",
    cat: "Bela Negara",
    type: "Hak & kewajiban bela negara",
    q: "Setiap warga negara berhak memperoleh pendidikan bela negara. Seorang warga berkebutuhan khusus menanyakan bentuk pendidikan bela negara yang sesuai baginya. Dua jawaban dipertimbangkan: pendidikan kewarganegaraan yang disesuaikan dengan kemampuannya, atau pelatihan dasar kemiliteran yang disesuaikan dengan kondisinya. Seorang ASN menjelaskan bahwa hak itu diwujudkan melalui…",
    options: [
      "Pendidikan kewarganegaraan yang disesuaikan dengan kemampuan dan kondisi warga, karena pendidikan kewarganegaraan adalah wujud pendidikan bela negara bagi warga sipil, sedangkan pelatihan dasar kemiliteran adalah syarat komponen cadangan",
      "Wajib militer tanpa pengecualian bagi semua warga",
      "Pembebasan dari semua kewajiban negara",
      "Pelatihan militer di luar negeri",
      "Hanya melalui pendidikan di akademi militer"
    ],
    k: "A",
    image: null,
    boss: 5
  },
  {
    id: 288,
    code: "WB5-18",
    cat: "Bela Negara",
    type: "Bela negara non-militer (profesi)",
    q: "Seorang ibu rumah tangga mengajarkan lagu kebangsaan dan sejarah perjuangan kepada anak-anaknya. Tetangganya berkata hal itu tidak penting karena bukan tugas sekolah. Ibu itu menjawab pendidikan kebangsaan justru dimulai dari keluarga. Dua tahun kemudian anak-anak itu aktif dalam kegiatan pramuka dan menjaga kebersihan lingkungan. Tindakan ibu itu merupakan bela negara karena…",
    options: [
      "Meningkatkan kemampuan menyanyi anak-anaknya",
      "Mendapatkan pujian dari tetangga",
      "Mengisi waktu luang bersama anak-anaknya",
      "Menanamkan nilai kebangsaan dan cinta tanah air melalui pendidikan keluarga sebagai fondasi bela negara, yang tampak pada sikap anak-anaknya kemudian",
      "Membuktikan bahwa ia hafal lagu kebangsaan"
    ],
    k: "D",
    image: null,
    boss: 5
  },
  {
    id: 289,
    code: "WB5-19",
    cat: "Empat Konsensus Kebangsaan",
    type: "Pancasila",
    q: "Sila kelima menekankan keadilan sosial bagi seluruh rakyat Indonesia. Tiga kebijakan diusulkan: (1) subsidi bagi masyarakat miskin; (2) insentif pajak bagi perusahaan besar yang membuka lapangan kerja di daerah tertinggal; (3) pembangunan jalan tol antar kota besar. Seorang siswa bertanya kebijakan mana yang paling langsung mencerminkan sila kelima. Jawaban yang tepat adalah…",
    options: [
      "Kebijakan (2), karena perusahaan besar lebih banyak menyerap tenaga kerja",
      "Tidak satu pun, karena sila kelima hanya tentang pemerataan pembangunan infrastruktur",
      "Kebijakan (3), karena jalan tol mempercepat distribusi barang",
      "Ketiganya sama-sama mencerminkan sila kelima secara setara",
      "Kebijakan (1), karena subsidi bagi masyarakat miskin adalah wujud keadilan sosial yang paling langsung bagi mereka yang paling membutuhkan"
    ],
    k: "E",
    image: null,
    boss: 5
  },
  {
    id: 290,
    code: "WB5-20",
    cat: "Empat Konsensus Kebangsaan",
    type: "UUD 1945",
    q: "Seorang pekerja diupah di bawah ketentuan dan diperlakukan tidak adil, lalu dipecat tanpa alasan yang jelas. Ia mengajukan tuntutan. Dua dasar konstitusional dipertimbangkan: Pasal 27 ayat (2) tentang hak atas pekerjaan dan penghidupan yang layak, dan Pasal 28D ayat (2) tentang hak atas imbalan dan perlakuan yang adil dalam hubungan kerja. Dasar yang paling tepat untuk kasus upah tidak adil itu adalah…",
    options: [
      "Pasal 27 ayat (1) tentang persamaan kedudukan dalam hukum",
      "Pasal 28D ayat (2) tentang hak atas imbalan dan perlakuan yang adil dan layak dalam hubungan kerja",
      "Pasal 27 ayat (2) tentang hak atas pekerjaan dan penghidupan yang layak",
      "Pasal 28E ayat (1) tentang kebebasan beragama",
      "Pasal 31 ayat (1) tentang hak atas pendidikan"
    ],
    k: "B",
    image: null,
    boss: 5
  },
  {
    id: 291,
    code: "WB5-21",
    cat: "Empat Konsensus Kebangsaan",
    type: "UUD 1945",
    q: "MPR berwenang mengubah dan menetapkan UUD. Seorang siswa bertanya mengapa DPR tidak dapat mengubah UUD sendiri meski DPR membentuk undang-undang, dan mengapa Mahkamah Konstitusi juga tidak dapat mengubah UUD meski menguji undang-undang. Penjelasan yang benar adalah…",
    options: [
      "Karena DPR hanya berwenang menguji undang-undang terhadap UUD, bukan mengubah UUD",
      "Karena Presiden melarang DPR mengubah UUD",
      "Karena Mahkamah Konstitusi yang mengubah UUD setelah menguji undang-undang",
      "Karena mengubah dan menetapkan UUD adalah kewenangan MPR sebagai lembaga yang mewakili seluruh rakyat, sedangkan DPR berwenang membentuk undang-undang di bawah UUD dan Mahkamah Konstitusi hanya berwenang menguji undang-undang terhadap UUD",
      "Karena UUD tidak dapat diubah oleh lembaga mana pun setelah ditetapkan"
    ],
    k: "D",
    image: null,
    boss: 5
  },
  {
    id: 292,
    code: "WB5-22",
    cat: "Empat Konsensus Kebangsaan",
    type: "NKRI",
    q: "Seorang siswa menyimpulkan Indonesia adalah negara federal karena daerahnya memiliki otonomi dan boleh membuat peraturan sendiri. Dua kesalahan dalam kesimpulan itu adalah…",
    options: [
      "Otonomi seluas-luasnya dalam bingkai NKRI, sedangkan negara federal terdiri atas negara-negara bagian yang berdaulat; daerah otonom hanya membuat peraturan daerah, bukan undang-undang dasar sendiri",
      "Otonomi terbatas hanya untuk daerah tertentu dan daerah tidak boleh membuat peraturan",
      "Pemerintahan sentralistik tanpa otonomi dan daerah tidak memiliki kewenangan apa pun",
      "Pemerintahan federal dengan negara bagian yang masing-masing berdaulat penuh",
      "Otonomi tanpa batas dan tanpa pengawasan dari pemerintah pusat"
    ],
    k: "A",
    image: null,
    boss: 5
  },
  {
    id: 293,
    code: "WB5-23",
    cat: "Empat Konsensus Kebangsaan",
    type: "Bhinneka Tunggal Ika",
    q: "Semboyan Bhinneka Tunggal Ika menegaskan keberagaman sebagai kekayaan bangsa. Dua pendapat muncul: keberagaman harus diseragamkan agar persatuan kuat, atau keberagaman harus dibiarkan tanpa persatuan agar tiap kelompok bebas. Seorang siswa menilai kedua pendapat itu keliru. Penilaian yang benar adalah…",
    options: [
      "Keberagaman memang sumber perpecahan yang harus dihilangkan",
      "Persatuan dalam Bhinneka Tunggal Ika justru dibangun di atas keberagaman yang dijaga, bukan dengan menyeragamkan seluruh budaya menjadi satu dan bukan dengan membiarkan tiap kelompok berjalan sendiri",
      "Keberagaman adalah hambatan bagi pembangunan nasional",
      "Keberagaman adalah alasan untuk memisahkan diri dari NKRI",
      "Keberagaman harus diseragamkan menjadi satu budaya"
    ],
    k: "B",
    image: null,
    boss: 5
  },
  {
    id: 294,
    code: "WB5-24",
    cat: "Empat Konsensus Kebangsaan",
    type: "Pancasila",
    q: "Hubungan antar sila bersifat hierarkis dan saling mengisi. Seorang siswa memberi contoh: kebijakan bantuan sosial bagi fakir miskin (sila kelima) harus dilaksanakan dengan musyawarah (sila keempat) dan tidak membedakan agama penerimanya (sila pertama). Temannya menyimpulkan contoh itu menunjukkan sila kelima berdiri sendiri karena bantuan sosial hanya soal ekonomi. Kesimpulan teman itu keliru karena…",
    options: [
      "Setiap sila berdiri sendiri tanpa hubungan dengan sila lain, sehingga contoh itu hanya menunjukkan sila kelima",
      "Sila pertama lebih penting daripada sila lainnya",
      "Sila kelima hanya berlaku untuk bidang ekonomi dan tidak berkaitan dengan musyawarah atau agama",
      "Sila kedua dan ketiga tidak berkaitan dengan sila lainnya sehingga contoh itu tidak lengkap",
      "Kelima sila merupakan satu kesatuan yang utuh dan tidak dapat dipisahkan, sehingga contoh itu justru menunjukkan sila kelima dilaksanakan bersama sila pertama dan keempat"
    ],
    k: "E",
    image: null,
    boss: 5
  },
  {
    id: 295,
    code: "WB5-25",
    cat: "Bahasa Indonesia",
    type: "Kata baku",
    q: "Perhatikan kalimat: 'Kegiatan ini sudah berjalan dengan baik, tetapi masih memerlukan perbaikan dalam hal mempraktekkan prosedur yang berlaku dan kerjasama antar divisi.' Kata-kata yang penulisannya belum baku dan perbaikannya yang tepat adalah…",
    options: [
      "Tidak ada kata yang belum baku",
      "'berjalan' seharusnya 'ber-jalan' dan 'memerlukan' seharusnya 'membutuhkan'",
      "'mempraktekkan' dan 'kerjasama' — seharusnya 'mempraktikkan' dan 'kerja sama'",
      "'memerlukan' seharusnya 'membutuhkan' dan 'berlaku' seharusnya 'ber-laku'",
      "'prosedur' seharusnya 'prosedure' dan 'divisi' seharusnya 'difisi'"
    ],
    k: "C",
    image: null,
    boss: 5
  },
  {
    id: 296,
    code: "WB5-26",
    cat: "Bahasa Indonesia",
    type: "Ejaan",
    q: "Perhatikan dua kalimat: (1) 'Olah raga pagi menyehatkan badan.' (2) 'Sekedar mengingatkan, olahraga sore juga baik untuk kesehatan.' Kesalahan ejaan pada kedua kalimat itu adalah…",
    options: [
      "Penulisan 'pagi' seharusnya 'pagi-pagi' dan 'sore' seharusnya 'sore-sore'",
      "Penulisan 'Olah raga' pada kalimat (1) seharusnya 'Olahraga' dan 'Sekedar' pada kalimat (2) seharusnya 'Sekadar'",
      "Penulisan 'menyehatkan' seharusnya 'menyehat-kan' dan 'kesehatan' seharusnya 'kesehat-an'",
      "Penulisan 'badan' seharusnya 'ba-dan' dan 'baik' seharusnya 'ba-ik'",
      "Tidak ada kesalahan ejaan pada kedua kalimat tersebut"
    ],
    k: "B",
    image: null,
    boss: 5
  },
  {
    id: 297,
    code: "WB5-27",
    cat: "Bahasa Indonesia",
    type: "Pemahaman bacaan",
    q: "Bacaan: 'Candi Borobudur di Magelang, Jawa Tengah, merupakan candi Buddha terbesar di dunia. Candi ini dibangun pada abad ke-9 dan menjadi salah satu warisan budaya dunia yang diakui UNESCO. Setiap tahun, ribuan wisatawan dari berbagai negara datang untuk melihat kemegahan candi ini.' Seorang siswa menyimpulkan candi itu dibangun pada abad ke-9 oleh UNESCO dan dikunjungi ribuan wisatawan setiap tahun. Kesimpulan siswa itu…",
    options: [
      "Benar seluruhnya, karena bacaan menyebut abad ke-9, UNESCO, dan ribuan wisatawan",
      "Benar sebagian, karena candi itu memang dibangun pada abad ke-9 dan dikunjungi ribuan wisatawan, tetapi UNESCO hanya mengakuinya sebagai warisan budaya dunia, bukan membangunnya",
      "Salah seluruhnya, karena candi itu bukan candi Buddha",
      "Benar sebagian, karena UNESCO membangun candi itu pada abad ke-9",
      "Salah seluruhnya, karena candi itu tidak dikunjungi wisatawan"
    ],
    k: "B",
    image: null,
    boss: 5
  },
  {
    id: 298,
    code: "WB5-28",
    cat: "Bahasa Indonesia",
    type: "Ejaan",
    q: "Perhatikan kalimat: 'Obat itu dibeli di apotik dekat rumah sakit, dan harganya sangat mahal sekali.' Kata-kata yang penulisannya belum baku dalam kalimat tersebut adalah…",
    options: [
      "Penulisan 'Obat' seharusnya 'obat-obatan' dan 'rumah sakit' seharusnya 'rumahsakit'",
      "Penulisan 'mahal' seharusnya 'ma-hal' dan 'dekat' seharusnya 'de-kat'",
      "Penulisan 'apotik' seharusnya 'apotek' dan frasa 'sangat mahal sekali' seharusnya 'sangat mahal' atau 'mahal sekali'",
      "Penulisan 'dibeli' seharusnya 'di-beli' dan 'harganya' seharusnya 'harga-nya'",
      "Tidak ada kesalahan ejaan pada kalimat tersebut"
    ],
    k: "C",
    image: null,
    boss: 5
  },
  {
    id: 299,
    code: "WB5-29",
    cat: "Bahasa Indonesia",
    type: "Kedudukan bahasa negara",
    q: "Pada 2023 bahasa Indonesia ditetapkan sebagai bahasa resmi Sidang Umum UNESCO. Seorang siswa mengaitkannya dengan penetapan bahasa Indonesia sebagai bahasa resmi ASEAN dan menyimpulkan bahasa Indonesia kini menjadi bahasa resmi seluruh organisasi internasional. Kesimpulan itu keliru karena…",
    options: [
      "Bahasa Indonesia diakui sebagai bahasa resmi forum internasional UNESCO, yang memperkuat kedudukannya sebagai bahasa negara yang digunakan dalam forum resmi internasional, tetapi tidak otomatis menjadi bahasa resmi seluruh organisasi internasional",
      "Bahasa Indonesia menjadi bahasa resmi seluruh negara anggota PBB",
      "Bahasa Indonesia menggantikan bahasa Inggris di UNESCO",
      "Bahasa Indonesia wajib dipakai dalam semua sidang ASEAN",
      "Bahasa Indonesia menjadi bahasa resmi Mahkamah Internasional"
    ],
    k: "A",
    image: null,
    boss: 5
  },
  {
    id: 300,
    code: "WB5-30",
    cat: "Bahasa Indonesia",
    type: "Ejaan",
    q: "Perhatikan kalimat: 'Seperti misalnya kerja bakti, gotong royong itu penting bagi persatuan warga dan demi untuk kepentingan bersama.' Kalimat yang paling efektif sebagai perbaikan kalimat tersebut adalah…",
    options: [
      "Seperti misalnya kerja bakti, gotong royong itu penting bagi persatuan warga dan demi untuk kepentingan bersama.",
      "Seperti kerja bakti misalnya, gotong royong itu penting bagi persatuan warga dan demi untuk kepentingan bersama.",
      "Misalnya seperti kerja bakti, gotong royong itu penting bagi persatuan warga.",
      "Kerja bakti, misalnya membersihkan selokan bersama, memperkuat persatuan warga demi kepentingan bersama.",
      "Seperti misalnya kerja bakti gotong royong itu penting bagi persatuan warga."
    ],
    k: "D",
    image: null,
    boss: 5
  }
];
});
