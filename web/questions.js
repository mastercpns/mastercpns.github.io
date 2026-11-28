// Data soal TIU CPNS 2026 — 450 soal (bank final v5: 300 level + 150 soal bos B1-B5).
// Soal figural (125) memakai stem singkat dari JSON yang merujuk ke gambar SVG di
// figural-images/. 25 soal lama tersisa (LAMA-04..27, LAMA-30) cocok dengan v1
// berdasarkan code/orig_no (opsi/kunci/cat sama seperti v1).
// Tiap sub-materi tepat 30 soal; Analogi kata & Ketidaksamaan non-bos (legacy)
// sudah dihapus — kedua jenis itu kini hanya ada di soal bos B1-B5.
// Tiap bos = 30 soal BARU (field boss = 1..5, code B1-01..B5-30; 7 figural bergambar per bos).
// CATATAN: kunci jawaban ("k") tersimpan di data ini supaya penilaian bisa jalan
// sepenuhnya offline, tetapi TIDAK PERNAH ditampilkan di UI mana pun.
(function (root, factory) {
  var data = factory();
  if (typeof module !== 'undefined' && module.exports) { module.exports = data; }
  else { root.TIU_QUESTIONS = data; }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
  {
    id: 1,
    code: "LAMA-04",
    cat: "Verbal",
    type: "Silogisme: Semua + Sebagian",
    q: "Premis 1: Semua dokter adalah tenaga kesehatan. Premis 2: Sebagian tenaga kesehatan bekerja di puskesmas. Kesimpulan yang paling tepat adalah…",
    options: [
      "Semua dokter bekerja di puskesmas",
      "Sebagian dokter bekerja di puskesmas",
      "Tidak ada dokter yang bekerja di puskesmas",
      "Tidak dapat disimpulkan apakah ada dokter yang bekerja di puskesmas",
      "Semua tenaga kesehatan adalah dokter"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 2,
    code: "LAMA-05",
    cat: "Verbal",
    type: "Silogisme: Jika–Maka — Modus Tollens",
    q: "Jika seorang pegawai disiplin, maka ia mendapat tunjangan penuh. Budi tidak mendapat tunjangan penuh. Kesimpulan yang paling tepat adalah…",
    options: [
      "Budi disiplin",
      "Budi tidak disiplin",
      "Semua pegawai disiplin mendapat tunjangan",
      "Budi mendapat tunjangan penuh",
      "Tidak dapat disimpulkan apa-apa tentang Budi"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 3,
    code: "LAMA-06",
    cat: "Verbal",
    type: "Silogisme: Semua + Sebagian",
    q: "Premis 1: Semua guru adalah pendidik. Premis 2: Sebagian pendidik bekerja di sekolah negeri. Kesimpulan yang paling tepat adalah…",
    options: [
      "Semua guru bekerja di sekolah negeri",
      "Sebagian guru bekerja di sekolah negeri",
      "Tidak ada guru yang bekerja di sekolah negeri",
      "Tidak dapat disimpulkan apakah ada guru yang bekerja di sekolah negeri",
      "Semua pendidik adalah guru"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 4,
    code: "LAMA-07",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Perhatikan fakta berikut: (1) Setiap tanaman yang disiram setiap hari tumbuh subur. (2) Tanaman di kebun A disiram setiap hari dan tumbuh subur. (3) Tanaman di kebun B disiram setiap hari dan tumbuh subur. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Semua tanaman pasti tumbuh subur",
      "Menyiram tanaman setiap hari membuat tanaman tumbuh subur",
      "Tanaman yang tidak disiram pasti mati",
      "Kebun A lebih baik daripada kebun B",
      "Tanaman hanya bisa tumbuh di kebun"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 5,
    code: "LAMA-08",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Setiap kali harga BBM naik, harga bahan pokok ikut naik. Tahun ini harga BBM naik dua kali, dan harga bahan pokok naik dua kali. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Kenaikan harga BBM cenderung diikuti kenaikan harga bahan pokok",
      "Semua kenaikan harga bahan pokok disebabkan oleh BBM",
      "Harga bahan pokok tidak pernah turun",
      "Harga BBM adalah satu-satunya penyebab inflasi",
      "Tahun depan harga bahan pokok pasti naik"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 6,
    code: "LAMA-09",
    cat: "Verbal",
    type: "Analitis",
    q: "Dalam sebuah rapat, lima orang duduk berurutan: Andi, Budi, Cici, Dedi, dan Eni. Syaratnya: (1) Andi duduk di sebelah Budi. (2) Cici tidak duduk di ujung. (3) Dedi duduk di antara Budi dan Eni. Urutan duduk yang memenuhi semua syarat adalah…",
    options: [
      "Andi – Budi – Dedi – Eni – Cici",
      "Cici – Andi – Budi – Dedi – Eni",
      "Eni – Dedi – Budi – Andi – Cici",
      "Budi – Andi – Cici – Dedi – Eni",
      "Dedi – Eni – Cici – Budi – Andi"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 7,
    code: "LAMA-10",
    cat: "Verbal",
    type: "Analitis",
    q: "Lima karyawan piket Senin sampai Jumat: Rina, Sinta, Tono, Udin, dan Wati. Syaratnya: (1) Rina piket sebelum Sinta. (2) Tono piket tepat setelah Udin. (3) Wati piket hari Jumat. (4) Sinta tidak piket hari Selasa. Urutan piket yang memenuhi semua syarat adalah…",
    options: [
      "Udin – Tono – Rina – Sinta – Wati",
      "Rina – Sinta – Udin – Tono – Wati",
      "Tono – Udin – Rina – Sinta – Wati",
      "Udin – Rina – Tono – Sinta – Wati",
      "Rina – Udin – Tono – Wati – Sinta"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 8,
    code: "LAMA-11",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Hasil dari 2027² − 2026² adalah…",
    options: [
      "1",
      "2026",
      "2027",
      "4053",
      "8106"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 9,
    code: "LAMA-12",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Hasil dari 0,25 × 48 + ⅓ × 27 adalah…",
    options: [
      "18",
      "19",
      "20",
      "21",
      "24"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 10,
    code: "LAMA-13",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Sebuah toko memberi diskon 20% untuk barang seharga Rp250.000. Berapa harga barang setelah diskon?",
    options: [
      "Rp180.000",
      "Rp190.000",
      "Rp200.000",
      "Rp210.000",
      "Rp220.000"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 11,
    code: "LAMA-14",
    cat: "Numerik",
    type: "Deret angka selang-seling/lompat pola",
    q: "Perhatikan deret: 2, 5, 4, 6, 6, 7, 8, 8, … Angka berikutnya adalah…",
    options: [
      "7",
      "8",
      "9",
      "10",
      "12"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 12,
    code: "LAMA-15",
    cat: "Numerik",
    type: "Deret angka bertingkat",
    q: "Perhatikan deret: 3, 4, 6, 9, 13, 18, … Angka berikutnya adalah…",
    options: [
      "22",
      "23",
      "24",
      "25",
      "26"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 13,
    code: "LAMA-16",
    cat: "Numerik",
    type: "Deret angka kali/bagi",
    q: "Perhatikan deret: 3, 7, 15, 31, 63, … Angka berikutnya adalah…",
    options: [
      "125",
      "126",
      "127",
      "129",
      "131"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 14,
    code: "LAMA-17",
    cat: "Numerik",
    type: "Deret angka bertingkat",
    q: "Perhatikan deret: 2, 6, 12, 20, 30, … Angka berikutnya adalah…",
    options: [
      "36",
      "40",
      "42",
      "44",
      "48"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 15,
    code: "LAMA-18",
    cat: "Numerik",
    type: "Deret angka bertingkat",
    q: "Perhatikan deret: 135, 139, 145, 155, 173, 207, … Angka berikutnya adalah…",
    options: [
      "243",
      "261",
      "273",
      "285",
      "303"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 16,
    code: "LAMA-19",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Manakah yang lebih besar?",
    options: [
      "3/5 dari 100",
      "2/3 dari 90",
      "5/8 dari 96",
      "4/7 dari 105",
      "Semuanya sama besar"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 17,
    code: "LAMA-20",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Sebuah pekerjaan selesai dalam 12 hari oleh 6 pekerja. Jika dikerjakan 9 pekerja dengan kemampuan sama, pekerjaan selesai dalam … hari.",
    options: [
      "6",
      "7",
      "8",
      "9",
      "10"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 18,
    code: "LAMA-21",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Sebuah toko menjual 120 baju dalam seminggu. Sebanyak 3/5 dari baju tersebut adalah baju anak-anak. Berapa banyak baju dewasa yang terjual?",
    options: [
      "36",
      "48",
      "60",
      "72",
      "84"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 19,
    code: "LAMA-22",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Andi menabung Rp50.000 per minggu. Setelah 8 minggu, ia memakai 2/5 tabungannya untuk membeli buku. Berapa sisa tabungan Andi?",
    options: [
      "Rp160.000",
      "Rp200.000",
      "Rp240.000",
      "Rp280.000",
      "Rp320.000"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 20,
    code: "LAMA-23",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Sebuah mobil menempuh jarak 240 km dalam 3 jam. Berapa jarak yang ditempuh mobil itu dalam 5 jam dengan kecepatan yang sama?",
    options: [
      "320 km",
      "360 km",
      "380 km",
      "400 km",
      "420 km"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 21,
    code: "LAMA-24",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan deret bangun pada gambar berikut. Bangun manakah yang melanjutkan deret ini?",
    options: [
      "Segitiga dengan 4 titik di dalamnya",
      "Segi empat dengan 4 titik di dalamnya",
      "Segitiga dengan 5 titik di dalamnya",
      "Lingkaran dengan 4 titik di dalamnya",
      "Segitiga tanpa titik di dalamnya"
    ],
    k: "A",
    image: "figural-images/LAMA-24.svg",
    boss: null
  },
  {
    id: 22,
    code: "LAMA-25",
    cat: "Figural",
    type: "Serial",
    q: "Amati arah panah pada gambar. Ke arah mana panah berikutnya menghadap?",
    options: [
      "Panah menghadap ke atas",
      "Panah menghadap ke kanan",
      "Panah menghadap ke bawah",
      "Panah menghadap ke kiri",
      "Panah menghadap diagonal"
    ],
    k: "D",
    image: "figural-images/LAMA-25.svg",
    boss: null
  },
  {
    id: 23,
    code: "LAMA-26",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Perhatikan pasangan bangun dan jumlah sisinya berikut. Bangun manakah yang melengkapi pasangan kedua?",
    options: [
      "4 sisi",
      "5 sisi",
      "6 sisi",
      "3 sisi",
      "8 sisi"
    ],
    k: "B",
    image: "figural-images/LAMA-26.svg",
    boss: null
  },
  {
    id: 24,
    code: "LAMA-27",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Gambar pertama berubah menjadi gambar kedua dengan menambah satu sisi. Gambar manakah yang melengkapi pasangan kedua?",
    options: [
      "Segitiga",
      "Segi lima",
      "Segi enam",
      "Lingkaran",
      "Tetap segi empat"
    ],
    k: "B",
    image: "figural-images/LAMA-27.svg",
    boss: null
  },
  {
    id: 25,
    code: "LAMA-30",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Perhatikan matriks gambar berikut. Gambar manakah yang tepat untuk mengisi kotak bertanda tanya?",
    options: [
      "1 lingkaran",
      "3 lingkaran",
      "4 lingkaran",
      "5 lingkaran",
      "6 lingkaran"
    ],
    k: "D",
    image: "figural-images/LAMA-30.svg",
    boss: null
  },
  {
    id: 26,
    code: "S1-01",
    cat: "Verbal",
    type: "Silogisme: Semua + Semua",
    q: "Premis 1: Semua apel adalah buah. Premis 2: Semua buah mengandung vitamin. Kesimpulan yang paling tepat adalah…",
    options: [
      "Semua apel mengandung vitamin",
      "Sebagian apel mengandung vitamin",
      "Tidak ada apel yang mengandung vitamin",
      "Semua buah adalah apel",
      "Tidak dapat disimpulkan apakah apel mengandung vitamin"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 27,
    code: "S1-02",
    cat: "Verbal",
    type: "Silogisme: Semua + Semua",
    q: "Premis 1: Semua mawar adalah bunga. Premis 2: Semua bunga adalah tumbuhan. Kesimpulan yang paling tepat adalah…",
    options: [
      "Semua tumbuhan adalah mawar",
      "Sebagian mawar adalah tumbuhan",
      "Semua mawar adalah tumbuhan",
      "Tidak ada mawar yang termasuk tumbuhan",
      "Tidak dapat disimpulkan apakah mawar termasuk tumbuhan"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 28,
    code: "S1-03",
    cat: "Verbal",
    type: "Silogisme: Semua + Semua",
    q: "Premis 1: Semua kucing adalah mamalia. Premis 2: Semua mamalia berdarah panas. Kesimpulan yang paling tepat adalah…",
    options: [
      "Semua mamalia adalah kucing",
      "Sebagian kucing berdarah panas",
      "Tidak ada kucing yang berdarah panas",
      "Semua kucing berdarah panas",
      "Tidak dapat disimpulkan apakah kucing berdarah panas"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 29,
    code: "S2-01",
    cat: "Verbal",
    type: "Silogisme: Semua + Sebagian",
    q: "Premis 1: Semua atlet adalah olahragawan. Premis 2: Sebagian olahragawan berlatih di stadion. Kesimpulan yang paling tepat adalah…",
    options: [
      "Semua atlet berlatih di stadion",
      "Tidak dapat disimpulkan apakah ada atlet yang berlatih di stadion",
      "Semua olahragawan adalah atlet",
      "Tidak ada atlet yang berlatih di stadion",
      "Sebagian atlet berlatih di stadion"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 30,
    code: "S3-01",
    cat: "Verbal",
    type: "Silogisme: Sebagian + Semua",
    q: "Premis 1: Sebagian siswa adalah anggota OSIS. Premis 2: Semua anggota OSIS mengikuti rapat bulanan. Kesimpulan yang paling tepat adalah…",
    options: [
      "Tidak dapat disimpulkan apakah ada siswa yang mengikuti rapat bulanan",
      "Tidak ada siswa yang mengikuti rapat bulanan",
      "Semua anggota OSIS adalah siswa",
      "Semua siswa mengikuti rapat bulanan",
      "Sebagian siswa mengikuti rapat bulanan"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 31,
    code: "S3-02",
    cat: "Verbal",
    type: "Silogisme: Sebagian + Semua",
    q: "Premis 1: Sebagian buku di rak itu adalah buku sejarah. Premis 2: Semua buku sejarah membahas masa lalu. Kesimpulan yang paling tepat adalah…",
    options: [
      "Tidak dapat disimpulkan apakah ada buku di rak itu yang membahas masa lalu",
      "Semua buku di rak itu membahas masa lalu",
      "Semua buku sejarah ada di rak itu",
      "Sebagian buku di rak itu membahas masa lalu",
      "Tidak ada buku di rak itu yang membahas masa lalu"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 32,
    code: "S3-03",
    cat: "Verbal",
    type: "Silogisme: Sebagian + Semua",
    q: "Ada siswa yang hobi menggambar. Semua siswa yang hobi menggambar mengikuti klub seni. Kesimpulan yang paling tepat adalah…",
    options: [
      "Semua siswa mengikuti klub seni",
      "Ada siswa yang mengikuti klub seni",
      "Tidak ada siswa yang mengikuti klub seni",
      "Tidak dapat disimpulkan apakah ada siswa yang mengikuti klub seni",
      "Semua anggota klub seni hobi menggambar"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 33,
    code: "S4-01",
    cat: "Verbal",
    type: "Silogisme: Sebagian + Sebagian",
    q: "Premis 1: Sebagian siswa suka matematika. Premis 2: Sebagian siswa suka bahasa Inggris. Kesimpulan yang paling tepat adalah…",
    options: [
      "Sebagian siswa yang suka matematika juga suka bahasa Inggris",
      "Tidak ada siswa yang suka matematika sekaligus bahasa Inggris",
      "Tidak dapat disimpulkan apakah ada siswa yang suka matematika sekaligus bahasa Inggris",
      "Semua siswa yang suka matematika juga suka bahasa Inggris",
      "Semua siswa suka matematika dan bahasa Inggris"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 34,
    code: "S4-02",
    cat: "Verbal",
    type: "Silogisme: Sebagian + Sebagian",
    q: "Premis 1: Sebagian pegawai bekerja di bagian keuangan. Premis 2: Sebagian pegawai mendapat tunjangan kinerja. Kesimpulan yang paling tepat adalah…",
    options: [
      "Sebagian pegawai bagian keuangan mendapat tunjangan kinerja",
      "Semua pegawai mendapat tunjangan kinerja",
      "Semua pegawai bagian keuangan mendapat tunjangan kinerja",
      "Tidak dapat disimpulkan apakah ada pegawai bagian keuangan yang mendapat tunjangan kinerja",
      "Tidak ada pegawai bagian keuangan yang mendapat tunjangan kinerja"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 35,
    code: "S4-03",
    cat: "Verbal",
    type: "Silogisme: Sebagian + Sebagian",
    q: "Premis 1: Sebagian buku di rak itu tebal. Premis 2: Sebagian buku di rak itu berwarna merah. Kesimpulan yang paling tepat adalah…",
    options: [
      "Sebagian buku tebal di rak itu berwarna merah",
      "Tidak ada buku tebal di rak itu yang berwarna merah",
      "Semua buku di rak itu tebal dan berwarna merah",
      "Semua buku tebal di rak itu berwarna merah",
      "Tidak dapat disimpulkan apakah ada buku tebal di rak itu yang berwarna merah"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 36,
    code: "S5-01",
    cat: "Verbal",
    type: "Silogisme: Tidak ada + Semua",
    q: "Tidak ada siswa di kelas itu yang membawa payung. Rudi adalah siswa di kelas itu. Kesimpulan yang paling tepat adalah…",
    options: [
      "Tidak dapat disimpulkan apakah Rudi membawa payung",
      "Sebagian siswa membawa payung",
      "Semua siswa membawa payung",
      "Rudi membawa payung",
      "Rudi tidak membawa payung"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 37,
    code: "S5-02",
    cat: "Verbal",
    type: "Silogisme: Tidak ada + Semua",
    q: "Tidak ada tumbuhan yang dapat hidup tanpa air. Kaktus adalah tumbuhan. Kesimpulan yang paling tepat adalah…",
    options: [
      "Tidak dapat disimpulkan apakah kaktus membutuhkan air",
      "Kaktus dapat hidup tanpa air",
      "Tidak ada kaktus yang membutuhkan air",
      "Kaktus membutuhkan air untuk hidup",
      "Semua tumbuhan adalah kaktus"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 38,
    code: "S5-03",
    cat: "Verbal",
    type: "Silogisme: Tidak ada + Semua",
    q: "Premis 1: Tidak ada tumbuhan yang dapat hidup tanpa cahaya matahari. Premis 2: Semua lumut adalah tumbuhan. Kesimpulan yang paling tepat adalah…",
    options: [
      "Semua lumut dapat hidup tanpa cahaya matahari",
      "Sebagian lumut dapat hidup tanpa cahaya matahari",
      "Tidak ada lumut yang dapat hidup tanpa cahaya matahari",
      "Tidak dapat disimpulkan apakah lumut membutuhkan cahaya matahari",
      "Semua tumbuhan adalah lumut"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 39,
    code: "S6a-01",
    cat: "Verbal",
    type: "Silogisme: Jika–Maka — Modus Ponens",
    q: "Jika Sinta belajar dengan giat, maka ia lulus ujian. Sinta belajar dengan giat. Kesimpulan yang paling tepat adalah…",
    options: [
      "Semua yang belajar giat pasti lulus",
      "Sinta tidak belajar",
      "Tidak dapat disimpulkan apa-apa tentang Sinta",
      "Sinta tidak lulus ujian",
      "Sinta lulus ujian"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 40,
    code: "S6a-02",
    cat: "Verbal",
    type: "Silogisme: Jika–Maka — Modus Ponens",
    q: "Jika mesin dipanaskan terlebih dahulu, maka mobil mudah menyala. Mesin mobil itu dipanaskan terlebih dahulu. Kesimpulan yang paling tepat adalah…",
    options: [
      "Semua mobil mudah menyala",
      "Mobil itu sulit menyala",
      "Tidak dapat disimpulkan apa-apa tentang mobil itu",
      "Mobil itu mudah menyala",
      "Mesin mobil itu tidak dipanaskan"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 41,
    code: "S6a-03",
    cat: "Verbal",
    type: "Silogisme: Jika–Maka — Modus Ponens",
    q: "Jika Dina membaca peta dengan benar, maka ia tidak tersesat. Dina membaca peta dengan benar. Kesimpulan yang paling tepat adalah…",
    options: [
      "Dina tersesat",
      "Dina tidak tersesat",
      "Dina tidak membaca peta",
      "Semua yang membaca peta pasti tidak tersesat",
      "Tidak dapat disimpulkan apa-apa tentang Dina"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 42,
    code: "S6b-01",
    cat: "Verbal",
    type: "Silogisme: Jika–Maka — Modus Tollens",
    q: "Jika hujan deras, maka pertandingan sepak bola ditunda. Ternyata pertandingan sepak bola tidak ditunda. Kesimpulan yang paling tepat adalah…",
    options: [
      "Semua pertandingan ditunda saat hujan",
      "Hujan deras",
      "Pertandingan tetap ditunda",
      "Tidak dapat disimpulkan apa-apa",
      "Tidak hujan deras"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 43,
    code: "S6b-02",
    cat: "Verbal",
    type: "Silogisme: Jika–Maka — Modus Tollens",
    q: "Jika Ani menabung setiap bulan, maka ia dapat membeli sepeda. Ani tidak dapat membeli sepeda. Kesimpulan yang paling tepat adalah…",
    options: [
      "Ani tidak menabung setiap bulan",
      "Ani dapat membeli sepeda",
      "Ani menabung setiap bulan",
      "Semua yang menabung dapat membeli sepeda",
      "Tidak dapat disimpulkan apa-apa tentang Ani"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 44,
    code: "S6c-01",
    cat: "Verbal",
    type: "Silogisme: Jika–Maka — Silogisme Hipotetis",
    q: "Premis 1: Jika Rina rajin belajar, maka ia memahami pelajaran. Premis 2: Jika ia memahami pelajaran, maka ia lulus ujian. Kesimpulan yang paling tepat adalah…",
    options: [
      "Jika Rina rajin belajar, maka ia lulus ujian",
      "Jika Rina lulus ujian, maka ia rajin belajar",
      "Rina pasti lulus ujian",
      "Rina tidak rajin belajar",
      "Tidak dapat disimpulkan hubungan antara rajin belajar dan lulus ujian"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 45,
    code: "S6c-02",
    cat: "Verbal",
    type: "Silogisme: Jika–Maka — Silogisme Hipotetis",
    q: "Premis 1: Jika harga barang turun, maka permintaan naik. Premis 2: Jika permintaan naik, maka produksi ditambah. Kesimpulan yang paling tepat adalah…",
    options: [
      "Jika produksi ditambah, maka harga barang turun",
      "Jika harga barang turun, maka produksi ditambah",
      "Harga barang pasti turun",
      "Produksi pasti ditambah",
      "Tidak dapat disimpulkan hubungan antara harga barang dan produksi"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 46,
    code: "S6d-01",
    cat: "Verbal",
    type: "Silogisme: Jika–Maka — Menegaskan Akibat (jebakan)",
    q: "Jika Budi belajar dengan giat, maka ia lulus ujian. Budi lulus ujian. Kesimpulan yang paling tepat adalah…",
    options: [
      "Budi tidak belajar dengan giat",
      "Budi pasti tidak lulus ujian",
      "Tidak dapat disimpulkan apakah Budi belajar dengan giat",
      "Budi pasti belajar dengan giat",
      "Semua yang lulus ujian pasti belajar dengan giat"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 47,
    code: "S6d-02",
    cat: "Verbal",
    type: "Silogisme: Jika–Maka — Menegaskan Akibat (jebakan)",
    q: "Jika hujan turun, maka jalan menjadi basah. Jalan menjadi basah. Kesimpulan yang paling tepat adalah…",
    options: [
      "Tidak hujan turun",
      "Semua jalan basah pasti disebabkan hujan",
      "Pasti hujan turun",
      "Jalan pasti tidak basah",
      "Tidak dapat disimpulkan apakah hujan turun"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 48,
    code: "S6e-01",
    cat: "Verbal",
    type: "Silogisme: Jika–Maka — Menyangkal Sebab (jebakan)",
    q: "Jika Sari menabung, maka ia dapat membeli buku. Sari tidak menabung. Kesimpulan yang paling tepat adalah…",
    options: [
      "Sari pasti dapat membeli buku",
      "Sari pasti menabung",
      "Tidak dapat disimpulkan apakah Sari dapat membeli buku",
      "Sari pasti tidak dapat membeli buku",
      "Semua yang tidak menabung pasti tidak dapat membeli buku"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 49,
    code: "S6e-02",
    cat: "Verbal",
    type: "Silogisme: Jika–Maka — Menyangkal Sebab (jebakan)",
    q: "Jika Toni berlatih dengan keras, maka ia memenangkan lomba. Toni tidak berlatih dengan keras. Kesimpulan yang paling tepat adalah…",
    options: [
      "Toni pasti tidak memenangkan lomba",
      "Semua yang tidak berlatih pasti kalah",
      "Toni pasti memenangkan lomba",
      "Toni pasti berlatih dengan keras",
      "Tidak dapat disimpulkan apakah Toni memenangkan lomba"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 50,
    code: "S7-01",
    cat: "Verbal",
    type: "Silogisme: Disjungtif / Atau",
    q: "Dina pergi ke perpustakaan atau ke laboratorium. Dina tidak pergi ke perpustakaan. Kesimpulan yang paling tepat adalah…",
    options: [
      "Dina tidak pergi ke mana-mana",
      "Dina pergi ke laboratorium",
      "Dina pergi ke perpustakaan",
      "Tidak dapat disimpulkan ke mana Dina pergi",
      "Dina pergi ke perpustakaan dan laboratorium"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 51,
    code: "S7-02",
    cat: "Verbal",
    type: "Silogisme: Disjungtif / Atau",
    q: "Eko pulang naik bus atau naik kereta. Eko tidak naik bus. Kesimpulan yang paling tepat adalah…",
    options: [
      "Eko naik kereta",
      "Eko tidak pulang",
      "Eko naik bus",
      "Tidak dapat disimpulkan kendaraan apa yang dinaiki Eko",
      "Eko naik bus dan kereta"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 52,
    code: "S7-03",
    cat: "Verbal",
    type: "Silogisme: Disjungtif / Atau",
    q: "Fajar makan nasi goreng atau mi goreng untuk sarapan. Fajar tidak makan mi goreng. Kesimpulan yang paling tepat adalah…",
    options: [
      "Fajar tidak sarapan",
      "Fajar makan mi goreng",
      "Fajar makan nasi goreng",
      "Tidak dapat disimpulkan apa yang dimakan Fajar",
      "Fajar makan nasi goreng dan mi goreng"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 53,
    code: "V9-01",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Tiga siswa yang membaca buku 30 menit setiap malam selama sebulan nilai bahasa Indonesianya membaik. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Siswa yang tidak membaca pasti nilai bahasanya turun",
      "Membaca buku adalah satu-satunya cara menaikkan nilai",
      "Bulan depan semua nilai bahasa Indonesia pasti naik",
      "Membaca buku secara rutin cenderung meningkatkan nilai bahasa Indonesia",
      "Semua siswa yang membaca pasti nilai bahasanya membaik"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 54,
    code: "V9-02",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Setiap kali hujan deras turun, jalan di depan sekolah tergenang. Dalam tiga hujan deras terakhir, jalan itu selalu tergenang. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Semua hujan pasti menyebabkan banjir besar",
      "Hujan deras berikutnya pasti menenggelamkan sekolah",
      "Jalan di depan sekolah tidak pernah kering",
      "Hujan deras adalah satu-satunya penyebab genangan",
      "Hujan deras cenderung menyebabkan jalan di depan sekolah tergenang"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 55,
    code: "V9-03",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Tiga pelanggan yang dilayani dengan ramah di sebuah warung kembali lagi minggu berikutnya. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Pelayanan yang ramah cenderung membuat pelanggan kembali lagi",
      "Semua pelanggan pasti kembali jika dilayani",
      "Pelanggan yang tidak dilayani ramah pasti tidak kembali",
      "Keramahan adalah satu-satunya alasan pelanggan kembali",
      "Warung itu pasti selalu ramai"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 56,
    code: "V9-04",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Setiap pagi toko itu buka satu jam lebih awal, antrean pembeli menjadi lebih pendek. Hal ini terjadi pada hari Senin, Rabu, dan Jumat. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Antrean tidak pernah panjang di toko itu",
      "Membuka toko lebih awal cenderung membuat antrean lebih pendek",
      "Buka lebih awal adalah satu-satunya cara mengurangi antrean",
      "Semua toko yang buka lebih awal pasti sepi",
      "Antrean di toko itu pasti hilang selamanya"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 57,
    code: "V9-05",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Tiga anak yang tidur cukup setiap malam tampak lebih fokus di kelas keesokan harinya. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Tidur cukup adalah satu-satunya penentu fokus belajar",
      "Semua anak yang tidur cukup pasti selalu fokus",
      "Anak yang kurang tidur pasti tidak bisa belajar",
      "Tidur yang cukup cenderung membantu anak lebih fokus di kelas",
      "Semua anak harus tidur sepuluh jam setiap malam"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 58,
    code: "V9-06",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Kota Semarang dan Kota Surabaya sama-sama kota pelabuhan dengan curah hujan tinggi. Di Surabaya, penanaman mangrove di pesisir berhasil mengurangi abrasi pantai. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Semarang pasti mengalami abrasi yang sama dengan Surabaya",
      "Penanaman mangrove di Semarang juga berpotensi mengurangi abrasi pantai",
      "Abrasi pantai hanya bisa diatasi di Surabaya",
      "Mangrove adalah satu-satunya tanaman yang tumbuh di pesisir",
      "Semua kota pelabuhan pasti bebas abrasi jika menanam mangrove"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 59,
    code: "V9-07",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Sepeda motor A dan sepeda motor B sama-sama berkapasitas 150 cc, memakai bahan bakar yang sama, dan dipakai di rute yang sama setiap hari. Motor A menghabiskan 1 liter bensin untuk 40 km. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Semua motor 150 cc pasti menempuh 40 km per liter",
      "Motor B pasti lebih boros daripada motor A",
      "Motor A dan motor B pasti buatan pabrik yang sama",
      "Motor B pasti menghabiskan tepat 1 liter untuk 40 km",
      "Motor B kemungkinan besar juga menempuh sekitar 40 km per liter"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 60,
    code: "V9-08",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Setelah jalan di depan pasar diperlebar, kemacetan di sana berkurang drastis selama tiga bulan berturut-turut. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Pelebaran jalan adalah satu-satunya penyebab kemacetan berkurang",
      "Pelebaran jalan cenderung mengurangi kemacetan di depan pasar itu",
      "Kemacetan tidak pernah terjadi lagi di kota itu",
      "Semua kemacetan pasti hilang jika jalan diperlebar",
      "Pasar itu pasti selalu sepi setelah jalannya diperlebar"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 61,
    code: "V9-09",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Sejak kantin sekolah menyediakan buah setiap hari, jumlah siswa yang membeli makanan manis di kantin menurun selama satu semester. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Siswa yang makan buah pasti tidak pernah sakit",
      "Kantin sekolah pasti tidak lagi menjual makanan manis",
      "Menyediakan buah di kantin cenderung mengurangi pembelian makanan manis",
      "Buah adalah satu-satunya makanan yang disukai siswa",
      "Semua siswa pasti berhenti membeli makanan manis"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 62,
    code: "V9-10",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Penjualan sebuah toko: Januari 100 unit, Februari 120 unit, Maret 140 unit. Jika tren kenaikan yang sama berlanjut, prediksi penjualan bulan April yang paling masuk akal adalah…",
    options: [
      "150 unit",
      "160 unit",
      "200 unit",
      "130 unit",
      "180 unit"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 63,
    code: "V9-11",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Jumlah pengunjung perpustakaan: Senin 50 orang, Selasa 60 orang, Rabu 70 orang. Jika tren yang sama berlanjut, prediksi pengunjung hari Kamis yang paling masuk akal adalah…",
    options: [
      "85 orang",
      "90 orang",
      "75 orang",
      "80 orang",
      "100 orang"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 64,
    code: "V9-12",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Lima siswa yang rajin mengerjakan pekerjaan rumah mendapat nilai ulangan di atas rata-rata kelas. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Rajin mengerjakan pekerjaan rumah cenderung berkaitan dengan nilai ulangan yang baik",
      "Pekerjaan rumah adalah satu-satunya penentu nilai ulangan",
      "Semua siswa yang mengerjakan PR pasti mendapat nilai tertinggi",
      "Siswa yang tidak mengerjakan PR pasti mendapat nilai jelek",
      "Nilai ulangan tidak ada hubungannya dengan pekerjaan rumah"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 65,
    code: "V9-13",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Di tiga desa yang warganya rutin bergotong royong, jalan desa terawat dengan baik. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Gotong royong yang rutin cenderung membuat jalan desa terawat baik",
      "Desa yang tidak bergotong royong pasti jalannya rusak",
      "Semua desa yang bergotong royong pasti jalannya bagus",
      "Gotong royong adalah satu-satunya cara merawat jalan",
      "Semua jalan desa di Indonesia pasti terawat baik"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 66,
    code: "V9-14",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Kabupaten P dan Kabupaten Q sama-sama kabupaten dataran tinggi penghasil kopi dengan curah hujan yang hampir sama. Di Kabupaten P, penanaman pohon pelindung di kebun kopi berhasil meningkatkan hasil panen. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Kabupaten Q pasti mengalami hasil panen yang sama persis dengan Kabupaten P",
      "Kopi hanya bisa tumbuh baik di Kabupaten P",
      "Semua kebun kopi di Indonesia pasti panennya meningkat jika ditanami pohon pelindung",
      "Pohon pelindung adalah satu-satunya cara meningkatkan panen kopi",
      "Penanaman pohon pelindung di Kabupaten Q juga berpotensi meningkatkan hasil panen kopi"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 67,
    code: "V9-15",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Sekolah X dan Sekolah Y sama-sama sekolah dengan kurikulum dan jumlah siswa yang hampir sama. Di Sekolah X, penerapan belajar kelompok berhasil menaikkan nilai rata-rata siswa. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Belajar kelompok di Sekolah Y juga berpotensi menaikkan nilai rata-rata siswa",
      "Kurikulum adalah satu-satunya penentu nilai siswa",
      "Sekolah Y pasti mendapat nilai yang sama persis dengan Sekolah X",
      "Nilai siswa hanya bisa naik dengan belajar kelompok",
      "Semua sekolah yang memakai belajar kelompok pasti nilai siswanya naik"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 68,
    code: "V9-16",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Pabrik roti A dan pabrik roti B memakai mesin dan bahan baku yang sama serta memproduksi jenis roti yang sama. Di pabrik A, penataan ulang alur kerja membuat waktu produksi menjadi lebih cepat. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Semua pabrik roti pasti lebih cepat jika menata ulang alur kerja",
      "Penataan ulang alur kerja di pabrik B kemungkinan besar juga membuat waktu produksinya lebih cepat",
      "Waktu produksi hanya ditentukan oleh mesin yang dipakai",
      "Pabrik A dan pabrik B pasti dimiliki oleh pemilik yang sama",
      "Pabrik B pasti memproduksi roti lebih cepat tepat sama dengan pabrik A"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 69,
    code: "V9-17",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Sungai A dan Sungai B sama-sama sungai kecil yang mengalir melewati permukiman dengan jumlah penduduk yang hampir sama. Di Sungai A, pemasangan perangkap sampah membuat air sungai menjadi lebih jernih. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Sampah hanya berasal dari permukiman di sekitar sungai",
      "Perangkap sampah adalah satu-satunya cara menjernihkan air sungai",
      "Pemasangan perangkap sampah di Sungai B juga berpotensi membuat airnya lebih jernih",
      "Semua sungai pasti jernih jika dipasang perangkap sampah",
      "Sungai B pasti memiliki air sejernih Sungai A"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 70,
    code: "V9-18",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Setelah pemerintah desa memasang lampu jalan di sepanjang jalan utama, jumlah kecelakaan pada malam hari di jalan itu menurun selama enam bulan berturut-turut. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Kecelakaan tidak pernah terjadi lagi di desa itu",
      "Lampu jalan adalah satu-satunya penyebab kecelakaan berkurang",
      "Jalan utama desa itu pasti selalu sepi pada malam hari",
      "Pemasangan lampu jalan cenderung mengurangi kecelakaan pada malam hari di jalan itu",
      "Semua kecelakaan pasti hilang jika jalan diberi lampu"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 71,
    code: "V9-19",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Sejak sebuah kantor menerapkan jam kerja fleksibel, jumlah karyawan yang datang terlambat menurun selama satu semester. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Semua kantor harus menerapkan jam kerja fleksibel",
      "Semua karyawan pasti tidak pernah terlambat lagi",
      "Jam kerja fleksibel cenderung mengurangi keterlambatan karyawan di kantor itu",
      "Jam kerja fleksibel adalah satu-satunya cara mengatasi keterlambatan",
      "Karyawan yang terlambat pasti dipecat dari kantor itu"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 72,
    code: "V9-20",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Setelah pengelola pasar melarang penggunaan kantong plastik sekali pakai, jumlah sampah plastik di sekitar pasar berkurang selama tiga bulan berturut-turut. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Larangan plastik adalah satu-satunya penyebab sampah berkurang",
      "Pasar itu pasti tidak lagi menghasilkan sampah apa pun",
      "Semua pasar harus melarang kantong plastik",
      "Larangan kantong plastik cenderung mengurangi sampah plastik di sekitar pasar itu",
      "Semua sampah di pasar pasti hilang jika plastik dilarang"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 73,
    code: "V9-21",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Jumlah pengunjung sebuah taman kota: Januari 80 orang per hari, Februari 95 orang per hari, Maret 110 orang per hari. Jika tren kenaikan yang sama berlanjut, prediksi pengunjung bulan April yang paling masuk akal adalah…",
    options: [
      "150 orang per hari",
      "140 orang per hari",
      "115 orang per hari",
      "130 orang per hari",
      "125 orang per hari"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 74,
    code: "V9-22",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Produksi sebuah pabrik: bulan pertama 200 unit, bulan kedua 180 unit, bulan ketiga 160 unit. Jika tren penurunan yang sama berlanjut, prediksi produksi bulan keempat yang paling masuk akal adalah…",
    options: [
      "150 unit",
      "145 unit",
      "140 unit",
      "135 unit",
      "120 unit"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 75,
    code: "V9-23",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Jumlah peserta sebuah kursus: minggu pertama 30 orang, minggu kedua 36 orang, minggu ketiga 42 orang. Jika tren kenaikan yang sama berlanjut, prediksi peserta minggu keempat yang paling masuk akal adalah…",
    options: [
      "46 orang",
      "54 orang",
      "50 orang",
      "48 orang",
      "44 orang"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 76,
    code: "V9-24",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Penjualan tiket sebuah pertunjukan: hari pertama 150 lembar, hari kedua 165 lembar, hari ketiga 180 lembar. Jika tren kenaikan yang sama berlanjut, prediksi penjualan hari keempat yang paling masuk akal adalah…",
    options: [
      "180 lembar",
      "195 lembar",
      "185 lembar",
      "200 lembar",
      "190 lembar"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 77,
    code: "V9-25",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Empat siswa yang rutin mengikuti kelompok diskusi mendapat nilai ulangan lebih baik daripada nilai mereka sebelumnya. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Mengikuti kelompok diskusi secara rutin cenderung berkaitan dengan nilai ulangan yang lebih baik",
      "Semua siswa yang ikut kelompok diskusi pasti mendapat nilai tertinggi",
      "Kelompok diskusi adalah satu-satunya penentu nilai ulangan",
      "Siswa yang tidak ikut kelompok diskusi pasti mendapat nilai jelek",
      "Nilai ulangan tidak ada hubungannya dengan kelompok diskusi"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 78,
    code: "V9-26",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Di tiga kantor yang menyediakan air minum gratis, karyawan lebih jarang membeli minuman kemasan selama satu bulan. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Menyediakan air minum gratis cenderung mengurangi pembelian minuman kemasan oleh karyawan",
      "Karyawan yang minum air gratis pasti tidak pernah sakit",
      "Semua kantor harus menyediakan air minum gratis",
      "Air minum gratis adalah satu-satunya alasan karyawan tidak membeli minuman kemasan",
      "Semua karyawan pasti berhenti membeli minuman kemasan"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 79,
    code: "V9-27",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Enam lansia yang rutin berjalan pagi selama sebulan merasa tubuhnya lebih bugar daripada sebelumnya. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Semua lansia harus berjalan pagi setiap hari",
      "Lansia yang tidak berjalan pagi pasti tubuhnya lemah",
      "Berjalan pagi adalah satu-satunya cara menjaga kebugaran",
      "Berjalan pagi secara rutin cenderung membuat tubuh lebih bugar",
      "Semua lansia yang berjalan pagi pasti selalu bugar"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 80,
    code: "V9-28",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Lima toko yang mencantumkan harga dengan jelas di etalase dikunjungi lebih banyak pembeli daripada toko sejenis yang tidak mencantumkan harga. Kesimpulan yang paling mungkin benar adalah…",
    options: [
      "Mencantumkan harga dengan jelas cenderung menarik lebih banyak pembeli",
      "Toko yang tidak mencantumkan harga pasti tidak ada pembelinya",
      "Harga yang jelas adalah satu-satunya penentu ramainya toko",
      "Pembeli tidak pernah memperhatikan harga di etalase",
      "Semua toko yang mencantumkan harga pasti selalu ramai"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 81,
    code: "V10-01",
    cat: "Verbal",
    type: "Analitis",
    q: "Empat buku disusun di rak dari kiri ke kanan: Merah, Biru, Hijau, dan Kuning. Syaratnya: (1) Merah di ujung kiri. (2) Biru di ujung kanan. (3) Kuning tepat di sebelah kanan Hijau. (4) Hijau tidak di ujung kanan. Susunan yang memenuhi semua syarat adalah…",
    options: [
      "Merah – Hijau – Kuning – Biru",
      "Merah – Kuning – Hijau – Biru",
      "Hijau – Kuning – Merah – Biru",
      "Merah – Biru – Hijau – Kuning",
      "Kuning – Hijau – Merah – Biru"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 82,
    code: "V10-02",
    cat: "Verbal",
    type: "Analitis",
    q: "Lima karyawan piket Senin sampai Jumat: Agus, Beni, Citra, Dewi, dan Eko. Syaratnya: (1) Agus piket sebelum Beni. (2) Citra piket tepat setelah Dewi. (3) Eko piket hari Rabu. (4) Beni tidak piket hari Jumat. Urutan piket yang memenuhi semua syarat adalah…",
    options: [
      "Dewi – Citra – Eko – Agus – Beni",
      "Agus – Dewi – Citra – Eko – Beni",
      "Beni – Agus – Eko – Dewi – Citra",
      "Agus – Beni – Eko – Dewi – Citra",
      "Agus – Beni – Dewi – Citra – Eko"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 83,
    code: "V10-03",
    cat: "Verbal",
    type: "Analitis",
    q: "Lima anak duduk berurutan: Lina, Maya, Nita, Putri, dan Rani. Syaratnya: (1) Rani di ujung kiri. (2) Nita di tengah (posisi 3). (3) Putri tidak duduk di ujung. (4) Maya tepat di sebelah kiri Lina. Urutan duduk yang memenuhi semua syarat adalah…",
    options: [
      "Rani – Putri – Nita – Lina – Maya",
      "Rani – Putri – Nita – Maya – Lina",
      "Rani – Lina – Nita – Maya – Putri",
      "Putri – Rani – Nita – Maya – Lina",
      "Rani – Maya – Nita – Lina – Putri"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 84,
    code: "V10-04",
    cat: "Verbal",
    type: "Analitis",
    q: "Empat mata pelajaran dijadwalkan Senin sampai Kamis: Matematika, IPA, Bahasa, dan IPS. Syaratnya: (1) Matematika sebelum IPA. (2) Bahasa tepat setelah Matematika. (3) IPS hari Kamis. (4) IPA tidak hari Selasa. Jadwal yang memenuhi semua syarat adalah…",
    options: [
      "Bahasa – Matematika – IPA – IPS",
      "Matematika – IPA – Bahasa – IPS",
      "Matematika – Bahasa – IPS – IPA",
      "IPA – Matematika – Bahasa – IPS",
      "Matematika – Bahasa – IPA – IPS"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 85,
    code: "V10-05",
    cat: "Verbal",
    type: "Analitis",
    q: "Lima peserta lomba mendapat peringkat 1 sampai 5 dari atas ke bawah: Fajar, Gilang, Hana, Indra, dan Jaka. Syaratnya: (1) Fajar di atas Gilang. (2) Hana tepat di bawah Indra. (3) Jaka peringkat 5. (4) Gilang tidak peringkat 4. Urutan peringkat yang memenuhi semua syarat adalah…",
    options: [
      "Indra – Hana – Fajar – Gilang – Jaka",
      "Fajar – Gilang – Indra – Hana – Jaka",
      "Fajar – Indra – Hana – Gilang – Jaka",
      "Indra – Fajar – Hana – Gilang – Jaka",
      "Gilang – Fajar – Indra – Hana – Jaka"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 86,
    code: "V10-06",
    cat: "Verbal",
    type: "Analitis",
    q: "Enam siswa: Adi, Budi, Cici, Dedi, Eni, dan Fajar dibagi menjadi dua kelompok (Kelompok 1 dan Kelompok 2), masing-masing 3 orang. Syaratnya: (1) Adi dan Budi tidak satu kelompok. (2) Cici satu kelompok dengan Dedi. (3) Eni satu kelompok dengan Fajar. (4) Adi satu kelompok dengan Cici. Pembagian kelompok yang memenuhi semua syarat adalah…",
    options: [
      "Kelompok 1: Adi, Budi, Cici – Kelompok 2: Dedi, Eni, Fajar",
      "Kelompok 1: Adi, Cici, Dedi – Kelompok 2: Budi, Eni, Fajar",
      "Kelompok 1: Adi, Eni, Fajar – Kelompok 2: Budi, Cici, Dedi",
      "Kelompok 1: Budi, Cici, Dedi – Kelompok 2: Adi, Eni, Fajar",
      "Kelompok 1: Cici, Dedi, Eni – Kelompok 2: Adi, Budi, Fajar"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 87,
    code: "V10-07",
    cat: "Verbal",
    type: "Analitis",
    q: "Lima buku: Sejarah, Matematika, Bahasa, IPA, dan IPS dimasukkan ke dua rak: Rak A (3 buku) dan Rak B (2 buku). Syaratnya: (1) Sejarah dan Matematika satu rak. (2) Bahasa tidak satu rak dengan IPA. (3) IPS di Rak B. (4) Bahasa di Rak A. Penempatan yang memenuhi semua syarat adalah…",
    options: [
      "Rak A: Sejarah, Matematika, IPA – Rak B: Bahasa, IPS",
      "Rak A: Sejarah, Matematika, Bahasa – Rak B: IPS, IPA",
      "Rak A: Sejarah, Bahasa, IPS – Rak B: Matematika, IPA",
      "Rak A: Matematika, Bahasa, IPA – Rak B: Sejarah, IPS",
      "Rak A: Sejarah, Matematika, IPS – Rak B: Bahasa, IPA"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 88,
    code: "V10-08",
    cat: "Verbal",
    type: "Analitis",
    q: "Enam karyawan: Gita, Hadi, Intan, Joko, Kiki, dan Lina dibagi menjadi dua tim (Tim Pagi dan Tim Sore), masing-masing 3 orang. Syaratnya: (1) Gita dan Hadi tidak satu tim. (2) Intan satu tim dengan Hadi. (3) Kiki satu tim dengan Gita. Pembagian tim yang memenuhi semua syarat adalah…",
    options: [
      "Tim Pagi: Gita, Kiki, Hadi – Tim Sore: Intan, Joko, Lina",
      "Tim Pagi: Gita, Hadi, Lina – Tim Sore: Intan, Joko, Kiki",
      "Tim Pagi: Gita, Kiki, Lina – Tim Sore: Hadi, Intan, Joko",
      "Tim Pagi: Gita, Kiki, Intan – Tim Sore: Hadi, Joko, Lina",
      "Tim Pagi: Kiki, Lina, Joko – Tim Sore: Gita, Hadi, Intan"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 89,
    code: "V10-09",
    cat: "Verbal",
    type: "Analitis",
    q: "Lima anak duduk berurutan: Sari, Tono, Udin, Vera, dan Wawan. Syaratnya: (1) Sari di ujung kiri. (2) Sari duduk di sebelah Tono. (3) Vera tidak duduk di ujung. (4) Vera tepat di sebelah kiri Udin. (5) Udin duduk di antara Tono dan Wawan. (6) Wawan di ujung kanan. Urutan duduk yang memenuhi semua syarat adalah…",
    options: [
      "Tono – Sari – Udin – Vera – Wawan",
      "Vera – Sari – Tono – Udin – Wawan",
      "Sari – Tono – Udin – Vera – Wawan",
      "Tono – Vera – Udin – Sari – Wawan",
      "Sari – Tono – Vera – Udin – Wawan"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 90,
    code: "V10-10",
    cat: "Verbal",
    type: "Analitis",
    q: "Empat pelari: Dimas, Eko, Fajar, dan Gilang mendapat peringkat 1 sampai 4 (1 = tercepat). Syaratnya: (1) Dimas di atas Eko. (2) Fajar tepat di bawah Gilang. (3) Eko peringkat 4. (4) Gilang tidak peringkat 1. Urutan peringkat yang memenuhi semua syarat adalah…",
    options: [
      "Gilang – Fajar – Dimas – Eko",
      "Dimas – Fajar – Gilang – Eko",
      "Eko – Dimas – Gilang – Fajar",
      "Dimas – Gilang – Fajar – Eko",
      "Gilang – Dimas – Fajar – Eko"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 91,
    code: "V10-11",
    cat: "Verbal",
    type: "Analitis",
    q: "Lima orang duduk berurutan: Yoga, Zaki, Umar, Vina, dan Wulan. Syaratnya: (1) Yoga duduk di ujung kiri. (2) Vina duduk di posisi tengah (posisi 3). (3) Zaki tepat di sebelah kanan Yoga. (4) Umar duduk di antara Vina dan Wulan. (5) Wulan duduk di ujung kanan. Urutan duduk yang memenuhi semua syarat adalah…",
    options: [
      "Yoga – Zaki – Vina – Wulan – Umar",
      "Yoga – Zaki – Vina – Umar – Wulan",
      "Zaki – Yoga – Vina – Umar – Wulan",
      "Yoga – Vina – Zaki – Umar – Wulan",
      "Yoga – Zaki – Umar – Vina – Wulan"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 92,
    code: "V10-12",
    cat: "Verbal",
    type: "Analitis",
    q: "Enam orang duduk berurutan: Kania, Luki, Nadia, Oki, Putra, dan Tania. Syaratnya: (1) Oki duduk di ujung kiri. (2) Tania duduk di ujung kanan. (3) Kania duduk di posisi 3. (4) Nadia tepat di sebelah kiri Kania. (5) Putra tepat di sebelah kanan Kania. (6) Luki duduk di antara Putra dan Tania. Urutan duduk yang memenuhi semua syarat adalah…",
    options: [
      "Oki – Nadia – Kania – Luki – Putra – Tania",
      "Nadia – Oki – Kania – Putra – Luki – Tania",
      "Oki – Nadia – Kania – Putra – Luki – Tania",
      "Oki – Putra – Kania – Nadia – Luki – Tania",
      "Oki – Nadia – Kania – Putra – Tania – Luki"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 93,
    code: "V10-13",
    cat: "Verbal",
    type: "Analitis",
    q: "Lima karyawan piket Senin sampai Jumat: Hendra, Irfan, Kartika, Lestari, dan Mahmud. Syaratnya: (1) Mahmud piket hari Jumat. (2) Irfan piket tepat setelah Hendra. (3) Kartika piket sebelum Lestari. (4) Lestari tidak piket hari Selasa. (5) Hendra tidak piket hari Senin. Urutan piket yang memenuhi semua syarat adalah…",
    options: [
      "Hendra – Irfan – Kartika – Lestari – Mahmud",
      "Kartika – Lestari – Hendra – Irfan – Mahmud",
      "Kartika – Hendra – Irfan – Lestari – Mahmud",
      "Irfan – Hendra – Kartika – Lestari – Mahmud",
      "Kartika – Hendra – Lestari – Irfan – Mahmud"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 94,
    code: "V10-14",
    cat: "Verbal",
    type: "Analitis",
    q: "Empat mata pelajaran dijadwalkan Senin sampai Kamis: Fisika, Kimia, Biologi, dan Sejarah. Syaratnya: (1) Sejarah hari Kamis. (2) Fisika sebelum Kimia. (3) Biologi tepat setelah Fisika. (4) Kimia tidak hari Selasa. Jadwal yang memenuhi semua syarat adalah…",
    options: [
      "Fisika – Biologi – Kimia – Sejarah",
      "Fisika – Kimia – Biologi – Sejarah",
      "Biologi – Fisika – Kimia – Sejarah",
      "Kimia – Fisika – Biologi – Sejarah",
      "Fisika – Biologi – Sejarah – Kimia"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 95,
    code: "V10-15",
    cat: "Verbal",
    type: "Analitis",
    q: "Lima karyawan piket perpustakaan Senin sampai Jumat: Nando, Olga, Prasetyo, Ratna, dan Yuni. Syaratnya: (1) Ratna piket hari Rabu. (2) Olga piket tepat sebelum Prasetyo. (3) Nando piket setelah Yuni. (4) Yuni tidak piket hari Senin. (5) Prasetyo tidak piket hari Jumat. Urutan piket yang memenuhi semua syarat adalah…",
    options: [
      "Yuni – Nando – Ratna – Olga – Prasetyo",
      "Olga – Prasetyo – Ratna – Yuni – Nando",
      "Olga – Prasetyo – Ratna – Nando – Yuni",
      "Prasetyo – Olga – Ratna – Yuni – Nando",
      "Olga – Ratna – Prasetyo – Yuni – Nando"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 96,
    code: "V10-16",
    cat: "Verbal",
    type: "Analitis",
    q: "Enam siswa: Alya, Bagas, Citra, Eka, Farid, dan Indah dibagi menjadi dua kelompok (Kelompok 1 dan Kelompok 2), masing-masing 3 orang. Syaratnya: (1) Alya dan Bagas tidak satu kelompok. (2) Citra satu kelompok dengan Eka. (3) Farid satu kelompok dengan Indah. (4) Alya satu kelompok dengan Citra. Pembagian kelompok yang memenuhi semua syarat adalah…",
    options: [
      "Kelompok 1: Alya, Bagas, Citra – Kelompok 2: Eka, Farid, Indah",
      "Kelompok 1: Alya, Citra, Farid – Kelompok 2: Bagas, Eka, Indah",
      "Kelompok 1: Bagas, Citra, Eka – Kelompok 2: Alya, Farid, Indah",
      "Kelompok 1: Alya, Citra, Eka – Kelompok 2: Bagas, Farid, Indah",
      "Kelompok 1: Alya, Eka, Indah – Kelompok 2: Bagas, Citra, Farid"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 97,
    code: "V10-17",
    cat: "Verbal",
    type: "Analitis",
    q: "Lima alat tulis: Gunting, Lem, Penggaris, Pensil, dan Spidol dimasukkan ke dua laci: Laci A (3 alat) dan Laci B (2 alat). Syaratnya: (1) Gunting dan Lem satu laci. (2) Pensil tidak satu laci dengan Spidol. (3) Penggaris di Laci B. (4) Pensil di Laci A. Penempatan yang memenuhi semua syarat adalah…",
    options: [
      "Laci A: Gunting, Lem, Penggaris – Laci B: Pensil, Spidol",
      "Laci A: Gunting, Pensil, Spidol – Laci B: Lem, Penggaris",
      "Laci A: Gunting, Lem, Pensil – Laci B: Penggaris, Spidol",
      "Laci A: Lem, Pensil, Penggaris – Laci B: Gunting, Spidol",
      "Laci A: Gunting, Lem, Spidol – Laci B: Pensil, Penggaris"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 98,
    code: "V10-18",
    cat: "Verbal",
    type: "Analitis",
    q: "Enam pegawai: Bambang, Ratih, Arif, Rizal, Tari, dan Nia dibagi menjadi dua regu (Regu 1 dan Regu 2), masing-masing 3 orang. Syaratnya: (1) Bambang dan Ratih tidak satu regu. (2) Arif satu regu dengan Rizal. (3) Tari satu regu dengan Bambang. (4) Nia satu regu dengan Bambang. Pembagian regu yang memenuhi semua syarat adalah…",
    options: [
      "Regu 1: Bambang, Ratih, Tari – Regu 2: Arif, Rizal, Nia",
      "Regu 1: Bambang, Tari, Arif – Regu 2: Ratih, Rizal, Nia",
      "Regu 1: Ratih, Arif, Rizal – Regu 2: Bambang, Tari, Nia",
      "Regu 1: Bambang, Tari, Rizal – Regu 2: Ratih, Arif, Nia",
      "Regu 1: Bambang, Nia, Arif – Regu 2: Ratih, Rizal, Tari"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 99,
    code: "V10-19",
    cat: "Verbal",
    type: "Analitis",
    q: "Lima peserta lomba menyanyi mendapat peringkat 1 sampai 5 (1 = terbaik): Anisa, Bella, Citra, Dina, dan Elsa. Syaratnya: (1) Anisa di atas Bella. (2) Citra tepat di bawah Dina. (3) Elsa peringkat 5. (4) Bella tidak peringkat 4. Urutan peringkat yang memenuhi semua syarat adalah…",
    options: [
      "Dina – Citra – Anisa – Bella – Elsa",
      "Anisa – Dina – Citra – Bella – Elsa",
      "Bella – Anisa – Dina – Citra – Elsa",
      "Anisa – Bella – Dina – Citra – Elsa",
      "Anisa – Bella – Citra – Dina – Elsa"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 100,
    code: "V10-20",
    cat: "Verbal",
    type: "Analitis",
    q: "Empat siswa mendapat peringkat 1 sampai 4 berdasarkan nilai ujian (1 = tertinggi): Pramudya, Qori, Rendra, dan Salsa. Syaratnya: (1) Pramudya di atas Qori. (2) Rendra tepat di bawah Salsa. (3) Qori peringkat 4. (4) Salsa tidak peringkat 1. Urutan peringkat yang memenuhi semua syarat adalah…",
    options: [
      "Salsa – Rendra – Pramudya – Qori",
      "Pramudya – Salsa – Rendra – Qori",
      "Pramudya – Rendra – Salsa – Qori",
      "Qori – Pramudya – Salsa – Rendra",
      "Pramudya – Salsa – Qori – Rendra"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 101,
    code: "V10-21",
    cat: "Verbal",
    type: "Analitis",
    q: "Lima tim sepak bola mendapat peringkat 1 sampai 5 di klasemen (1 = teratas): Elang, Garuda, Harimau, Kancil, dan Macan. Syaratnya: (1) Garuda di atas Harimau. (2) Kancil tepat di bawah Elang. (3) Macan peringkat 5. (4) Harimau tidak peringkat 4. Urutan peringkat yang memenuhi semua syarat adalah…",
    options: [
      "Garuda – Harimau – Elang – Kancil – Macan",
      "Elang – Kancil – Garuda – Harimau – Macan",
      "Garuda – Elang – Kancil – Harimau – Macan",
      "Harimau – Garuda – Elang – Kancil – Macan",
      "Garuda – Harimau – Kancil – Elang – Macan"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 102,
    code: "V10-22",
    cat: "Verbal",
    type: "Analitis",
    q: "Empat karyawan mendapat peringkat 1 sampai 4 berdasarkan kinerja (1 = terbaik): Ayu, Candra, Farah, dan Galih. Syaratnya: (1) Ayu di atas Candra. (2) Farah tepat di bawah Galih. (3) Candra peringkat 4. (4) Galih tidak peringkat 1. Urutan peringkat yang memenuhi semua syarat adalah…",
    options: [
      "Galih – Farah – Ayu – Candra",
      "Ayu – Farah – Galih – Candra",
      "Ayu – Galih – Farah – Candra",
      "Ayu – Galih – Candra – Farah",
      "Candra – Ayu – Galih – Farah"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 103,
    code: "V11-01",
    cat: "Verbal",
    type: "Penguat/pelemah argumen",
    q: "Seorang kepala desa berpendapat: \"Pembangunan jalan desa menyebabkan harga tanah di desa itu naik.\" Pernyataan berikut yang PALING MEMPERKUAT pendapat tersebut adalah…",
    options: [
      "Harga tanah di desa tetangga yang tidak dibangun jalan baru tetap sama selama periode yang sama",
      "Jalan desa itu dibangun dengan dana dari pemerintah pusat",
      "Harga bahan bangunan naik pada tahun yang sama",
      "Banyak warga desa menjual tanahnya setelah jalan desa dibangun",
      "Harga tanah naik juga di kota besar yang jalannya sudah lama dibangun"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 104,
    code: "V11-02",
    cat: "Verbal",
    type: "Penguat/pelemah argumen",
    q: "Seorang ahli gizi berpendapat: \"Minum segelas air putih sebelum makan menyebabkan seseorang makan lebih sedikit.\" Pernyataan berikut yang PALING MEMPERKUAT pendapat tersebut adalah…",
    options: [
      "Air putih baik untuk kesehatan ginjal",
      "Banyak orang minum air putih setiap hari",
      "Harga air mineral naik pada tahun ini",
      "Sebagian orang tidak suka minum air sebelum makan",
      "Dalam sebuah penelitian, kelompok yang minum air sebelum makan menghabiskan rata-rata 20% lebih sedikit makanan daripada kelompok sejenis yang tidak minum air"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 105,
    code: "V11-03",
    cat: "Verbal",
    type: "Penguat/pelemah argumen",
    q: "Seorang manajer berpendapat: \"Pelatihan daring meningkatkan keterampilan karyawan.\" Pernyataan berikut yang PALING MEMPERKUAT pendapat tersebut adalah…",
    options: [
      "Banyak perusahaan kini memakai pelatihan daring",
      "Pelatihan daring bisa diikuti dari rumah",
      "Karyawan yang tidak ikut pelatihan meminta diikutkan pada tahun depan",
      "Pelatihan daring lebih murah daripada pelatihan tatap muka",
      "Karyawan yang mengikuti pelatihan daring nilai keterampilannya naik, sedangkan karyawan sejenis yang tidak mengikuti pelatihannya tetap sama"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 106,
    code: "V11-04",
    cat: "Verbal",
    type: "Penguat/pelemah argumen",
    q: "Seorang kepala sekolah berpendapat: \"Larangan membawa ponsel ke sekolah menyebabkan nilai siswa naik.\" Pernyataan berikut yang PALING MEMPERLEMAH pendapat tersebut adalah…",
    options: [
      "Siswa yang melanggar larangan mendapat teguran dari guru",
      "Ponsel bisa mengganggu konsentrasi belajar siswa",
      "Nilai siswa juga naik di sekolah lain yang tidak melarang ponsel",
      "Larangan itu berlaku untuk semua kelas di sekolah tersebut",
      "Orang tua siswa mendukung larangan membawa ponsel"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 107,
    code: "V11-05",
    cat: "Verbal",
    type: "Penguat/pelemah argumen",
    q: "Seorang petani berpendapat: \"Pemberian pupuk organik menyebabkan hasil panen jagung meningkat.\" Pernyataan berikut yang PALING MEMPERLEMAH pendapat tersebut adalah…",
    options: [
      "Petani yang memakai pupuk organik merasa puas dengan hasil panennya",
      "Lahan yang tidak diberi pupuk organik hasil panennya meningkat sama besar pada musim yang sama karena curah hujan yang baik",
      "Pupuk organik dibuat dari sisa tanaman dan kotoran hewan",
      "Pupuk organik lebih ramah lingkungan daripada pupuk kimia",
      "Harga jagung naik pada musim panen tahun ini"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 108,
    code: "V11-06",
    cat: "Verbal",
    type: "Penguat/pelemah argumen",
    q: "Seorang orang tua berpendapat: \"Membaca dongeng sebelum tidur menyebabkan anak tidur lebih nyenyak.\" Pernyataan berikut yang PALING MEMPERLEMAH pendapat tersebut adalah…",
    options: [
      "Anak yang mendengarkan dongeng mengenal lebih banyak kosakata baru",
      "Banyak orang tua suka membacakan dongeng untuk anaknya",
      "Anak yang tidak dibacakan dongeng juga tidur sama nyenyaknya setelah jam tidur mereka diatur lebih teratur",
      "Dongeng yang dibacakan berisi pesan moral yang baik",
      "Anak yang dibacakan dongeng tertidur lebih cepat daripada anak yang tidak dibacakan"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 109,
    code: "N1-01",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Hasil dari 2031² − 2030² adalah…",
    options: [
      "8122",
      "4061",
      "2031",
      "2030",
      "4062"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 110,
    code: "N1-02",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Hasil dari 0,5 × 64 + ¼ × 36 adalah…",
    options: [
      "40",
      "38",
      "44",
      "41",
      "36"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 111,
    code: "N1-03",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Sebuah jaket seharga Rp180.000 diberi diskon 15%. Berapa harga jaket setelah diskon?",
    options: [
      "Rp156.000",
      "Rp147.000",
      "Rp153.000",
      "Rp162.000",
      "Rp150.000"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 112,
    code: "N1-04",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Hasil dari ⅜ × 96 + 0,125 × 64 adalah…",
    options: [
      "48",
      "42",
      "40",
      "46",
      "44"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 113,
    code: "N1-05",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Hasil dari 75% dari 240 dikurangi 20% dari 150 adalah…",
    options: [
      "165",
      "140",
      "120",
      "150",
      "135"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 114,
    code: "N1-06",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Hasil dari 305² − 304² adalah…",
    options: [
      "304",
      "609",
      "1218",
      "305",
      "610"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 115,
    code: "N1-07",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Sepasang sepatu seharga Rp400.000 diberi diskon 25%. Berapa harga sepatu setelah diskon?",
    options: [
      "Rp350.000",
      "Rp375.000",
      "Rp320.000",
      "Rp280.000",
      "Rp300.000"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 116,
    code: "N1-08",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Hasil dari 12 + 8 × 3 − 20 ÷ 4 adalah…",
    options: [
      "35",
      "25",
      "31",
      "40",
      "28"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 117,
    code: "N1-09",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Hasil dari (48 ÷ 6 + 5) × 3 adalah…",
    options: [
      "45",
      "33",
      "42",
      "36",
      "39"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 118,
    code: "N1-10",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Hasil dari 7² + √144 adalah…",
    options: [
      "64",
      "58",
      "67",
      "61",
      "55"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 119,
    code: "N1-11",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Hasil dari √81 × 3² adalah…",
    options: [
      "90",
      "54",
      "81",
      "27",
      "72"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 120,
    code: "N1-12",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Hasil dari 5³ − 4² adalah…",
    options: [
      "104",
      "99",
      "121",
      "109",
      "114"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 121,
    code: "N1-13",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Hasil dari 412² − 411² adalah…",
    options: [
      "823",
      "1646",
      "824",
      "411",
      "412"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 122,
    code: "N1-14",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Hasil dari ⅝ × 112 + 0,2 × 45 adalah…",
    options: [
      "84",
      "81",
      "79",
      "76",
      "74"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 123,
    code: "N1-15",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Hasil dari ⅔ × 84 − ¼ × 72 adalah…",
    options: [
      "34",
      "36",
      "42",
      "38",
      "40"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 124,
    code: "N1-16",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Sebuah tas seharga Rp320.000 diberi diskon 30%. Berapa harga tas setelah diskon?",
    options: [
      "Rp256.000",
      "Rp224.000",
      "Rp216.000",
      "Rp230.000",
      "Rp240.000"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 125,
    code: "N1-17",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Hasil dari 96 ÷ 8 × 5 − 14 + 6 adalah…",
    options: [
      "56",
      "46",
      "52",
      "50",
      "48"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 126,
    code: "N1-18",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Hasil dari 6³ + √169 − 8² adalah…",
    options: [
      "170",
      "175",
      "155",
      "160",
      "165"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 127,
    code: "N1-19",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Jika 6x − 8 = 22, nilai x adalah…",
    options: [
      "6",
      "7",
      "4",
      "8",
      "5"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 128,
    code: "N1-20",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Jika 4x + 9 = 3x + 18, nilai x adalah…",
    options: [
      "9",
      "6",
      "7",
      "11",
      "8"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 129,
    code: "N1-21",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Diketahui x + y = 27 dan x − y = 9. Nilai 2x − y adalah…",
    options: [
      "36",
      "24",
      "27",
      "30",
      "25"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 130,
    code: "N1-22",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Sebuah paket berisi 4 buku dan 3 pensil dijual seharga Rp46.000. Jika harga 1 pensil Rp2.000, berapa harga 1 buku?",
    options: [
      "Rp8.000",
      "Rp11.000",
      "Rp10.000",
      "Rp12.000",
      "Rp9.000"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 131,
    code: "N2-01",
    cat: "Numerik",
    type: "Deret angka tambah/kurang",
    q: "Perhatikan deret: 5, 9, 13, 17, 21, … Angka berikutnya adalah…",
    options: [
      "27",
      "23",
      "25",
      "26",
      "24"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 132,
    code: "N2-02",
    cat: "Numerik",
    type: "Deret angka tambah/kurang",
    q: "Perhatikan deret: 20, 17, 14, 11, … Angka berikutnya adalah…",
    options: [
      "7",
      "8",
      "6",
      "10",
      "9"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 133,
    code: "N2-03",
    cat: "Numerik",
    type: "Deret angka tambah/kurang",
    q: "Perhatikan deret: 4, 9, 14, 19, 24, … Angka berikutnya adalah…",
    options: [
      "29",
      "30",
      "27",
      "31",
      "28"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 134,
    code: "N2-04",
    cat: "Numerik",
    type: "Deret angka tambah/kurang",
    q: "Perhatikan deret: 50, 45, 40, 35, … Angka berikutnya adalah…",
    options: [
      "28",
      "25",
      "32",
      "30",
      "33"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 135,
    code: "N3-01",
    cat: "Numerik",
    type: "Deret angka kali/bagi",
    q: "Perhatikan deret: 2, 4, 8, 16, 32, … Angka berikutnya adalah…",
    options: [
      "48",
      "56",
      "60",
      "64",
      "72"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 136,
    code: "N3-02",
    cat: "Numerik",
    type: "Deret angka kali/bagi",
    q: "Perhatikan deret: 3, 9, 27, 81, … Angka berikutnya adalah…",
    options: [
      "162",
      "243",
      "270",
      "324",
      "216"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 137,
    code: "N3-03",
    cat: "Numerik",
    type: "Deret angka kali/bagi",
    q: "Perhatikan deret: 81, 27, 9, 3, … Angka berikutnya adalah…",
    options: [
      "1",
      "2",
      "4",
      "6",
      "0"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 138,
    code: "N4-01",
    cat: "Numerik",
    type: "Deret angka bertingkat",
    q: "Perhatikan deret: 3, 6, 11, 18, 27, … Angka berikutnya adalah…",
    options: [
      "34",
      "40",
      "42",
      "38",
      "36"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 139,
    code: "N5-01",
    cat: "Numerik",
    type: "Deret angka selang-seling/lompat pola",
    q: "Perhatikan deret: 1, 10, 3, 12, 5, 14, … Angka berikutnya adalah…",
    options: [
      "7",
      "6",
      "8",
      "9",
      "16"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 140,
    code: "N5-02",
    cat: "Numerik",
    type: "Deret angka selang-seling/lompat pola",
    q: "Perhatikan deret: 20, 5, 18, 7, 16, 9, … Angka berikutnya adalah…",
    options: [
      "11",
      "15",
      "13",
      "12",
      "14"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 141,
    code: "N5-03",
    cat: "Numerik",
    type: "Deret angka selang-seling/lompat pola",
    q: "Perhatikan deret: 100, 90, 95, 85, 90, 80, … Angka berikutnya adalah…",
    options: [
      "95",
      "85",
      "90",
      "80",
      "75"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 142,
    code: "N6-01",
    cat: "Numerik",
    type: "Deret angka kuadrat",
    q: "Perhatikan deret: 1, 4, 9, 16, 25, 36, … Angka berikutnya adalah…",
    options: [
      "47",
      "49",
      "51",
      "45",
      "64"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 143,
    code: "N6-02",
    cat: "Numerik",
    type: "Deret angka kuadrat",
    q: "Perhatikan deret: 3, 8, 15, 24, 35, … Angka berikutnya adalah…",
    options: [
      "46",
      "52",
      "44",
      "48",
      "50"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 144,
    code: "N6-03",
    cat: "Numerik",
    type: "Deret angka kuadrat",
    q: "Perhatikan deret: 1, 8, 27, 64, 125, … Angka berikutnya adalah… (pola pangkat tiga)",
    options: [
      "196",
      "200",
      "225",
      "180",
      "216"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 145,
    code: "N7-01",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Manakah yang paling besar?",
    options: [
      "Semuanya sama besar",
      "1/5 dari 250",
      "1/3 dari 180",
      "1/4 dari 200",
      "1/2 dari 100"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 146,
    code: "N7-02",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Manakah yang lebih besar dari keempat nilai berikut?",
    options: [
      "40% dari 150",
      "0,4 × 150",
      "Semuanya sama besar",
      "3/10 dari 200",
      "2/5 dari 150"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 147,
    code: "N7-03",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Sebuah pekerjaan selesai dalam 15 hari oleh 10 pekerja. Jika dikerjakan 15 pekerja dengan kemampuan sama, pekerjaan selesai dalam … hari.",
    options: [
      "11",
      "8",
      "10",
      "12",
      "9"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 148,
    code: "N7-04",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Manakah nilai yang paling besar?",
    options: [
      "Semuanya sama besar",
      "9 × 8",
      "12 × 6",
      "11 × 6",
      "15 × 5"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 149,
    code: "N7-05",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Manakah yang paling kecil?",
    options: [
      "Semuanya sama besar",
      "1/5 dari 200",
      "1/3 dari 120",
      "1/6 dari 240",
      "1/4 dari 160"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 150,
    code: "N7-06",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Kuantitas A: 3/4 dari 120. Kuantitas B: 2/3 dari 135. Manakah pernyataan yang benar?",
    options: [
      "A lebih besar daripada B",
      "A sama dengan B",
      "Tidak dapat ditentukan",
      "B lebih besar daripada A",
      "A dua kali B"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 151,
    code: "N7-07",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Kuantitas A: 2/5 dari 250. Kuantitas B: 1/4 dari 360. Manakah pernyataan yang benar?",
    options: [
      "B dua kali A",
      "Tidak dapat ditentukan",
      "A sama dengan B",
      "A lebih besar daripada B",
      "B lebih besar daripada A"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 152,
    code: "N7-08",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Manakah nilai yang paling besar di antara berikut ini?",
    options: [
      "7/10 dari 200",
      "3/4 dari 160",
      "5/6 dari 144",
      "Semuanya sama besar",
      "2/5 dari 300"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 153,
    code: "N7-09",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Manakah nilai yang paling kecil di antara berikut ini?",
    options: [
      "Semuanya sama besar",
      "2/3 dari 180",
      "5/8 dari 176",
      "3/5 dari 200",
      "4/7 dari 210"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 154,
    code: "N7-10",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Manakah yang paling besar dari keempat nilai berikut?",
    options: [
      "5/12 dari 120",
      "3/8 dari 128",
      "Semuanya sama besar",
      "2/9 dari 180",
      "1/6 dari 240"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 155,
    code: "N7-11",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Berapakah 7/8 dari 224?",
    options: [
      "210",
      "189",
      "203",
      "196",
      "182"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 156,
    code: "N7-12",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Sebuah pekerjaan selesai dalam 18 hari oleh 8 pekerja. Jika dikerjakan 12 pekerja dengan kemampuan sama, pekerjaan selesai dalam … hari.",
    options: [
      "11",
      "10",
      "12",
      "14",
      "13"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 157,
    code: "N7-13",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Persediaan makanan cukup untuk 12 ekor sapi selama 20 hari. Jika sapinya menjadi 15 ekor, persediaan itu cukup selama … hari.",
    options: [
      "14",
      "18",
      "17",
      "15",
      "16"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 158,
    code: "N7-14",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Sebuah pesanan diselesaikan 5 mesin dalam 24 jam. Jika dipakai 8 mesin dengan kemampuan sama, pesanan itu selesai dalam … jam.",
    options: [
      "16",
      "14",
      "13",
      "15",
      "12"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 159,
    code: "N7-15",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Sebuah tangki diisi oleh 4 pompa dalam 15 jam. Jika dipakai 6 pompa dengan kemampuan sama, tangki itu penuh dalam … jam.",
    options: [
      "8",
      "9",
      "12",
      "10",
      "11"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 160,
    code: "N7-16",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Manakah hasil perkalian yang paling besar?",
    options: [
      "53 × 62",
      "Semuanya sama besar",
      "46 × 71",
      "38 × 87",
      "59 × 55"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 161,
    code: "N7-17",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Manakah nilai yang paling kecil?",
    options: [
      "Semuanya sama besar",
      "96 ÷ 6",
      "105 ÷ 7",
      "132 ÷ 11",
      "84 ÷ 4"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 162,
    code: "N7-18",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Manakah hasil perkalian yang paling kecil?",
    options: [
      "48 × 63",
      "Semuanya sama besar",
      "64 × 47",
      "71 × 43",
      "52 × 59"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 163,
    code: "N7-19",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Kuantitas A: 5/6 dari 180. Kuantitas B: 3/4 dari 220. Manakah pernyataan yang benar?",
    options: [
      "B lebih besar daripada A",
      "A dua kali B",
      "A lebih besar daripada B",
      "Tidak dapat ditentukan",
      "A sama dengan B"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 164,
    code: "N7-20",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Kuantitas A: 35% dari 400. Kuantitas B: 2/7 dari 490. Manakah pernyataan yang benar?",
    options: [
      "A lebih besar daripada B",
      "B dua kali A",
      "B lebih besar daripada A",
      "Tidak dapat ditentukan",
      "A sama dengan B"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 165,
    code: "N7-21",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Kuantitas A: 18². Kuantitas B: 15² + 99. Manakah pernyataan yang benar?",
    options: [
      "Tidak dapat ditentukan",
      "A sama dengan B",
      "A lebih besar daripada B",
      "A dua kali B",
      "B lebih besar daripada A"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 166,
    code: "N7-22",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "Kuantitas A: 7³. Kuantitas B: 18 × 19. Manakah pernyataan yang benar?",
    options: [
      "A lebih besar daripada B",
      "B dua kali A",
      "Tidak dapat ditentukan",
      "A sama dengan B",
      "B lebih besar daripada A"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 167,
    code: "N8-01",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Sebuah mobil menempuh jarak 150 km dalam 3 jam. Berapa jarak yang ditempuh mobil itu dalam 4 jam dengan kecepatan yang sama?",
    options: [
      "220 km",
      "200 km",
      "190 km",
      "180 km",
      "210 km"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 168,
    code: "N8-02",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Rina menabung Rp75.000 per minggu. Setelah 6 minggu, ia memakai 1/3 tabungannya untuk membeli tas. Berapa sisa tabungan Rina?",
    options: [
      "Rp300.000",
      "Rp275.000",
      "Rp350.000",
      "Rp325.000",
      "Rp250.000"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 169,
    code: "N8-03",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Harga 5 kg beras adalah Rp60.000. Berapa harga 8 kg beras yang sama?",
    options: [
      "Rp100.000",
      "Rp88.000",
      "Rp96.000",
      "Rp104.000",
      "Rp92.000"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 170,
    code: "N8-04",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Umur ayah tiga kali umur anaknya. Jumlah umur mereka berdua adalah 48 tahun. Berapa umur ayah sekarang?",
    options: [
      "38 tahun",
      "32 tahun",
      "30 tahun",
      "36 tahun",
      "34 tahun"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 171,
    code: "N8-05",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Persediaan pakan cukup untuk 20 ekor ayam selama 15 hari. Jika ayamnya menjadi 25 ekor, persediaan itu cukup selama … hari.",
    options: [
      "14",
      "12",
      "10",
      "13",
      "11"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 172,
    code: "N8-06",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Sebuah kereta menempuh jarak 360 km dalam 4 jam. Berapa jarak yang ditempuh kereta itu dalam 6 jam dengan kecepatan yang sama?",
    options: [
      "540 km",
      "560 km",
      "520 km",
      "480 km",
      "600 km"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 173,
    code: "N8-07",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Budi menabung Rp40.000 per minggu. Setelah 10 minggu, ia memakai 1/4 tabungannya untuk membeli sepatu. Berapa sisa tabungan Budi?",
    options: [
      "Rp280.000",
      "Rp350.000",
      "Rp320.000",
      "Rp300.000",
      "Rp250.000"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 174,
    code: "N8-08",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Harga 3 liter bensin adalah Rp30.000. Berapa harga 7 liter bensin yang sama?",
    options: [
      "Rp75.000",
      "Rp60.000",
      "Rp70.000",
      "Rp80.000",
      "Rp65.000"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 175,
    code: "N8-09",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Sebuah proyek selesai dalam 10 hari oleh 12 pekerja. Jika dikerjakan 15 pekerja dengan kemampuan sama, proyek selesai dalam … hari.",
    options: [
      "10",
      "6",
      "9",
      "7",
      "8"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 176,
    code: "N8-10",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Umur ibu empat kali umur anaknya. Selisih umur mereka adalah 27 tahun. Berapa umur ibu sekarang?",
    options: [
      "39 tahun",
      "33 tahun",
      "42 tahun",
      "36 tahun",
      "30 tahun"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 177,
    code: "N8-11",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Sebuah bus menempuh jarak 210 km dalam 3 jam. Berapa jarak yang ditempuh bus itu dalam 7 jam dengan kecepatan yang sama?",
    options: [
      "510 km",
      "470 km",
      "480 km",
      "450 km",
      "490 km"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 178,
    code: "N8-12",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Seorang pengendara sepeda motor menempuh jarak 180 km dalam 2 jam. Berapa waktu yang dibutuhkan untuk menempuh jarak 450 km dengan kecepatan yang sama?",
    options: [
      "4,5 jam",
      "5 jam",
      "6 jam",
      "4 jam",
      "5,5 jam"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 179,
    code: "N8-13",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Dewi menabung Rp60.000 per minggu. Setelah 9 minggu, ia memakai 1/3 tabungannya untuk membeli buku. Berapa sisa tabungan Dewi?",
    options: [
      "Rp360.000",
      "Rp380.000",
      "Rp370.000",
      "Rp340.000",
      "Rp350.000"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 180,
    code: "N8-14",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Fajar menabung Rp85.000 per minggu. Setelah 4 minggu, ia menambah tabungannya dengan Rp60.000 dari hadiah lomba, lalu memakai Rp100.000 untuk membeli tas. Berapa sisa tabungan Fajar?",
    options: [
      "Rp300.000",
      "Rp310.000",
      "Rp290.000",
      "Rp320.000",
      "Rp280.000"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 181,
    code: "N8-15",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Harga 4 kg gula adalah Rp68.000. Berapa harga 9 kg gula yang sama?",
    options: [
      "Rp144.000",
      "Rp153.000",
      "Rp162.000",
      "Rp158.000",
      "Rp149.000"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 182,
    code: "N8-16",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Sebuah pabrik menghasilkan 240 botol minuman dalam 6 jam. Berapa botol yang dihasilkan dalam 11 jam dengan kecepatan yang sama?",
    options: [
      "420 botol",
      "480 botol",
      "400 botol",
      "440 botol",
      "460 botol"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 183,
    code: "N8-17",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Persediaan beras cukup untuk 18 orang selama 12 hari. Jika orangnya menjadi 24 orang, persediaan itu cukup selama … hari.",
    options: [
      "11",
      "9",
      "7",
      "10",
      "8"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 184,
    code: "N8-18",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Sebuah pekerjaan selesai dalam 20 hari oleh 9 pekerja. Jika dikerjakan 12 pekerja dengan kemampuan sama, pekerjaan selesai dalam … hari.",
    options: [
      "15",
      "17",
      "13",
      "16",
      "14"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 185,
    code: "N8-19",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Sebuah kolam dikosongkan oleh 3 pompa dalam 8 jam. Jika dipakai 4 pompa dengan kemampuan sama, kolam itu kosong dalam … jam.",
    options: [
      "7 jam",
      "8 jam",
      "5 jam",
      "9 jam",
      "6 jam"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 186,
    code: "N8-20",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Umur kakak dua kali umur adiknya. Jumlah umur mereka berdua adalah 45 tahun. Berapa umur kakak sekarang?",
    options: [
      "28 tahun",
      "34 tahun",
      "30 tahun",
      "36 tahun",
      "32 tahun"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 187,
    code: "N8-21",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Lima tahun yang lalu umur Budi 3 kali umur adiknya. Jika umur adik sekarang 11 tahun, berapa umur Budi sekarang?",
    options: [
      "23 tahun",
      "25 tahun",
      "21 tahun",
      "24 tahun",
      "22 tahun"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 188,
    code: "N8-22",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Umur paman lima kali umur keponakannya. Selisih umur mereka adalah 32 tahun. Berapa umur keponakan sekarang?",
    options: [
      "6 tahun",
      "10 tahun",
      "12 tahun",
      "9 tahun",
      "8 tahun"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 189,
    code: "N9-01",
    cat: "Numerik",
    type: "Kecukupan data",
    q: "Berapa umur Dina sekarang? (1) Lima tahun lalu umur Dina 17 tahun. (2) Umur Dina sekarang 3 tahun lebih tua daripada umur adiknya yang sekarang 19 tahun.",
    options: [
      "Pernyataan (2) SAJA cukup, sedangkan pernyataan (1) SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup DAN pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan (2) TIDAK cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup, sedangkan SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup, sedangkan pernyataan (2) SAJA tidak cukup."
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 190,
    code: "N9-02",
    cat: "Numerik",
    type: "Kecukupan data",
    q: "Berapa harga 1 kg mangga? (1) Harga 4 kg mangga adalah Rp72.000. (2) Harga mangga lebih mahal daripada harga apel.",
    options: [
      "Pernyataan (2) SAJA cukup, sedangkan pernyataan (1) SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup DAN pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan (2) TIDAK cukup.",
      "Pernyataan (1) SAJA cukup, sedangkan pernyataan (2) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup, sedangkan SATU pernyataan SAJA tidak cukup."
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 191,
    code: "N9-03",
    cat: "Numerik",
    type: "Kecukupan data",
    q: "Berapa banyak siswa di kelas itu? (1) Jumlah siswa laki-laki 3 orang lebih banyak daripada siswa perempuan. (2) Jumlah siswa perempuan 14 orang dan jumlah siswa laki-laki 17 orang.",
    options: [
      "Pernyataan (1) SAJA cukup, sedangkan pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup DAN pernyataan (2) SAJA cukup.",
      "Pernyataan (2) SAJA cukup, sedangkan pernyataan (1) SAJA tidak cukup.",
      "Pernyataan (1) dan (2) TIDAK cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup, sedangkan SATU pernyataan SAJA tidak cukup."
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 192,
    code: "N9-04",
    cat: "Numerik",
    type: "Kecukupan data",
    q: "Berapa nilai x? (1) x + y = 34. (2) x − y = 10.",
    options: [
      "Pernyataan (2) SAJA cukup, sedangkan pernyataan (1) SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup, sedangkan pernyataan (2) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup, sedangkan SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup DAN pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan (2) TIDAK cukup."
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 193,
    code: "N9-05",
    cat: "Numerik",
    type: "Kecukupan data",
    q: "Berapa kecepatan rata-rata sebuah bus? (1) Bus itu berangkat pukul 07.00. (2) Bus itu tiba di kota tujuan pukul 11.00.",
    options: [
      "DUA pernyataan BERSAMA-SAMA cukup, sedangkan SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup DAN pernyataan (2) SAJA cukup.",
      "Pernyataan (2) SAJA cukup, sedangkan pernyataan (1) SAJA tidak cukup.",
      "Pernyataan (1) dan (2) TIDAK cukup.",
      "Pernyataan (1) SAJA cukup, sedangkan pernyataan (2) SAJA tidak cukup."
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 194,
    code: "N9-06",
    cat: "Numerik",
    type: "Kecukupan data",
    q: "Berapa sisa tabungan Sari? (1) Sari menabung Rp60.000 per minggu selama 10 minggu. (2) Sari memakai 1/4 tabungannya untuk membeli sepatu.",
    options: [
      "Pernyataan (1) SAJA cukup DAN pernyataan (2) SAJA cukup.",
      "Pernyataan (2) SAJA cukup, sedangkan pernyataan (1) SAJA tidak cukup.",
      "Pernyataan (1) dan (2) TIDAK cukup.",
      "Pernyataan (1) SAJA cukup, sedangkan pernyataan (2) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup, sedangkan SATU pernyataan SAJA tidak cukup."
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 195,
    code: "N10-01",
    cat: "Numerik",
    type: "Deret/pola dalam tabel",
    q: "Dalam sebuah tabel barisan aritmetika, suku ke-4 bernilai 29 dan suku ke-9 bernilai 64. Berapa nilai suku ke-13?",
    options: [
      "86",
      "92",
      "89",
      "95",
      "98"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 196,
    code: "N10-02",
    cat: "Numerik",
    type: "Deret/pola dalam tabel",
    q: "Dalam sebuah tabel barisan aritmetika, suku ke-3 bernilai 41 dan suku ke-8 bernilai 76. Berapa nilai suku ke-12?",
    options: [
      "98",
      "100",
      "104",
      "102",
      "106"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 197,
    code: "N10-03",
    cat: "Numerik",
    type: "Deret/pola dalam tabel",
    q: "Dalam sebuah tabel barisan aritmetika, suku ke-5 bernilai 53 dan suku ke-11 bernilai 89. Berapa nilai suku ke-15?",
    options: [
      "107",
      "110",
      "115",
      "113",
      "117"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 198,
    code: "N10-04",
    cat: "Numerik",
    type: "Deret/pola dalam tabel",
    q: "Perhatikan tabel berikut (kolom 1, kolom 2, kolom 3): Baris 1: 9 | 5 | 40. Baris 2: 7 | 4 | 24. Baris 3: 12 | 3 | 33. Baris 4: 8 | 6 | ? Berapa nilai yang tepat untuk tanda tanya?",
    options: [
      "40",
      "42",
      "44",
      "46",
      "48"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 199,
    code: "N10-05",
    cat: "Numerik",
    type: "Deret/pola dalam tabel",
    q: "Perhatikan matriks angka 3×3 berikut: Baris 1: 6 | 5 | 28. Baris 2: 7 | 4 | 26. Baris 3: 9 | 3 | ? Berapa nilai yang tepat untuk tanda tanya?",
    options: [
      "23",
      "24",
      "27",
      "26",
      "25"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 200,
    code: "N11-01",
    cat: "Numerik",
    type: "Mencari hasil yang sama",
    q: "Manakah pasangan berikut yang kedua nilainya SAMA?",
    options: [
      "20% × 420 dan 4,2 ÷ 0,05",
      "30% × 300 dan 4,4 ÷ 0,05",
      "40% × 210 dan 8,6 ÷ 0,1",
      "22% × 300 dan 6,7 ÷ 0,1",
      "35% × 240 dan 4,1 ÷ 0,05"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 201,
    code: "N11-02",
    cat: "Numerik",
    type: "Mencari hasil yang sama",
    q: "Pada pasangan manakah kedua nilainya sama besar?",
    options: [
      "30% × 320 dan 9,7 ÷ 0,1",
      "24% × 400 dan 4,8 ÷ 0,05",
      "18% × 500 dan 9,1 ÷ 0,1",
      "45% × 200 dan 4,4 ÷ 0,05",
      "60% × 160 dan 19,4 ÷ 0,2"
    ],
    k: "B",
    image: null,
    boss: null
  },
  {
    id: 202,
    code: "N11-03",
    cat: "Numerik",
    type: "Mencari hasil yang sama",
    q: "Di antara pasangan-pasangan berikut, pasangan manakah yang kedua sisinya bernilai sama besar?",
    options: [
      "25% × 480 dan 6,0 ÷ 0,05",
      "36% × 250 dan 9,1 ÷ 0,1",
      "48% × 250 dan 5,9 ÷ 0,05",
      "28% × 400 dan 11,1 ÷ 0,1",
      "55% × 200 dan 5,6 ÷ 0,05"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 203,
    code: "N11-04",
    cat: "Numerik",
    type: "Mencari hasil yang sama",
    q: "Pasangan manakah yang kedua nilainya SAMA?",
    options: [
      "30% × 250 dan 7,6 ÷ 0,1",
      "15% × 500 dan 3,7 ÷ 0,05",
      "50% × 150 dan 3,75 ÷ 0,05",
      "20% × 375 dan 14,8 ÷ 0,2",
      "60% × 125 dan 7,4 ÷ 0,1"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 204,
    code: "N11-05",
    cat: "Numerik",
    type: "Mencari hasil yang sama",
    q: "Manakah pasangan berikut yang kedua nilainya sama besar?",
    options: [
      "40% × 375 dan 15,1 ÷ 0,1",
      "30% × 500 dan 7,4 ÷ 0,05",
      "25% × 600 dan 30,2 ÷ 0,2",
      "60% × 250 dan 7,5 ÷ 0,05",
      "12% × 1250 dan 14,9 ÷ 0,1"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 205,
    code: "N12-01",
    cat: "Numerik",
    type: "Soal cerita: optimasi kombinasi",
    q: "Panitia membutuhkan minimal 150 kotak snack dan kelebihan maksimal 10 kotak (total 150–160 kotak). Paket A berisi 20 kotak seharga Rp180.000, paket B berisi 30 kotak seharga Rp250.000, paket C berisi 50 kotak seharga Rp400.000 dan stok paket C maksimal 2 paket. Kombinasi mana yang memenuhi semua syarat dengan biaya paling murah?",
    options: [
      "2 paket C + 1 paket B + 1 paket A (Rp1.230.000)",
      "3 paket C (Rp1.200.000)",
      "1 paket C + 3 paket B + 1 paket A (Rp1.330.000)",
      "5 paket A + 2 paket B (Rp1.400.000)",
      "2 paket C + 3 paket A (Rp1.340.000)"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 206,
    code: "N12-02",
    cat: "Numerik",
    type: "Soal cerita: optimasi kombinasi",
    q: "Sekolah membutuhkan minimal 200 buku tulis dengan kelebihan maksimal 20 buku (total 200–220 buku). Paket X berisi 25 buku Rp100.000, paket Y berisi 40 buku Rp150.000, paket Z berisi 60 buku Rp210.000; paket Z mendapat diskon 10% (menjadi Rp189.000 per paket) jika membeli 3 paket Z atau lebih. Kombinasi mana yang memenuhi semua syarat dengan biaya paling murah?",
    options: [
      "5 paket Y (Rp750.000)",
      "2 paket Z + 2 paket Y (Rp720.000)",
      "3 paket Z + 1 paket Y (Rp717.000)",
      "3 paket Z (Rp567.000)",
      "8 paket X (Rp800.000)"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 207,
    code: "N12-03",
    cat: "Numerik",
    type: "Soal cerita: optimasi kombinasi",
    q: "Sebuah acara membutuhkan minimal 90 porsi nasi kotak dengan kelebihan maksimal 10 porsi (total 90–100 porsi). Paket P berisi 15 porsi Rp450.000, paket Q berisi 20 porsi Rp560.000, paket R berisi 30 porsi Rp780.000; paket R maksimal 2 paket karena stok terbatas. Kombinasi mana yang memenuhi semua syarat dengan biaya paling murah?",
    options: [
      "6 paket P (Rp2.700.000)",
      "3 paket R (Rp2.340.000)",
      "2 paket R + 1 paket Q + 1 paket P (Rp2.570.000)",
      "2 paket R + 2 paket P (Rp2.460.000)",
      "1 paket R + 2 paket Q + 1 paket P (Rp2.350.000)"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 208,
    code: "N12-04",
    cat: "Numerik",
    type: "Soal cerita: optimasi kombinasi",
    q: "Toko membutuhkan minimal 160 goodie bag dengan kelebihan maksimal 15 buah (total 160–175 buah). Paket S berisi 20 buah Rp120.000, paket T berisi 35 buah Rp200.000, paket U berisi 50 buah Rp280.000; paket U mendapat diskon 5% (menjadi Rp266.000 per paket) jika membeli 3 paket U atau lebih. Kombinasi mana yang memenuhi semua syarat dengan biaya paling murah?",
    options: [
      "8 paket S (Rp960.000)",
      "4 paket T + 1 paket S (Rp920.000)",
      "3 paket U + 1 paket S (Rp918.000)",
      "2 paket U + 2 paket T (Rp960.000)",
      "3 paket U (Rp798.000)"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 209,
    code: "N12-05",
    cat: "Numerik",
    type: "Soal cerita: optimasi kombinasi",
    q: "Panitia seminar membutuhkan minimal 250 seminar kit dengan kelebihan maksimal 20 kit (total 250–270 kit). Paket M berisi 30 kit Rp90.000, paket N berisi 50 kit Rp140.000, paket O berisi 80 kit Rp210.000; paket O maksimal 2 paket karena stok terbatas. Kombinasi mana yang memenuhi semua syarat dengan biaya paling murah?",
    options: [
      "5 paket N (Rp700.000)",
      "2 paket O + 1 paket N + 2 paket M (Rp740.000)",
      "3 paket O (Rp630.000)",
      "1 paket O + 3 paket N + 1 paket M (Rp720.000)",
      "4 paket N + 2 paket M (Rp740.000)"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 210,
    code: "N13-01",
    cat: "Numerik",
    type: "Deret Fibonacci",
    q: "Perhatikan deret: 3, 5, 8, 13, 21, … Angka berikutnya adalah… (tiap suku = jumlah dua suku sebelumnya)",
    options: [
      "30",
      "32",
      "34",
      "33",
      "36"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 211,
    code: "N13-02",
    cat: "Numerik",
    type: "Deret Fibonacci",
    q: "Perhatikan deret: 4, 7, 11, 18, 29, … Angka berikutnya adalah… (tiap suku = jumlah dua suku sebelumnya)",
    options: [
      "47",
      "45",
      "46",
      "44",
      "49"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 212,
    code: "N13-03",
    cat: "Numerik",
    type: "Deret Fibonacci",
    q: "Perhatikan deret: 5, 9, 14, 23, 37, … Angka berikutnya adalah… (tiap suku = jumlah dua suku sebelumnya)",
    options: [
      "55",
      "58",
      "62",
      "60",
      "65"
    ],
    k: "D",
    image: null,
    boss: null
  },
  {
    id: 213,
    code: "N14-01",
    cat: "Numerik",
    type: "Deret huruf",
    q: "Perhatikan deret huruf: B, E, H, K, … (A=1, B=2, …, Z=26) Huruf berikutnya adalah…",
    options: [
      "L",
      "M",
      "O",
      "K",
      "N"
    ],
    k: "E",
    image: null,
    boss: null
  },
  {
    id: 214,
    code: "N14-02",
    cat: "Numerik",
    type: "Deret huruf",
    q: "Perhatikan deret huruf: D, G, K, N, … (A=1, B=2, …, Z=26) Huruf berikutnya adalah…",
    options: [
      "R",
      "U",
      "Q",
      "S",
      "T"
    ],
    k: "A",
    image: null,
    boss: null
  },
  {
    id: 215,
    code: "N14-03",
    cat: "Numerik",
    type: "Deret huruf",
    q: "Perhatikan deret huruf: Z, X, V, T, … (A=1, B=2, …, Z=26) Huruf berikutnya adalah…",
    options: [
      "Q",
      "T",
      "R",
      "P",
      "S"
    ],
    k: "C",
    image: null,
    boss: null
  },
  {
    id: 216,
    code: "F1-01",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan pola pada gambar. Gambar manakah yang tepat sebagai lanjutan?",
    options: [
      "Segi empat dengan 4 garis di dalamnya",
      "Lingkaran dengan 5 garis di dalamnya",
      "Segitiga dengan 4 garis di dalamnya",
      "Lingkaran dengan 4 garis di dalamnya",
      "Lingkaran tanpa garis di dalamnya"
    ],
    k: "D",
    image: "figural-images/F1-01.svg",
    boss: null
  },
  {
    id: 217,
    code: "F1-02",
    cat: "Figural",
    type: "Serial",
    q: "Deret bangun pada gambar berikut berlanjut dengan bangun yang mana?",
    options: [
      "Segi lima",
      "Segi empat",
      "Lingkaran",
      "Segi enam",
      "Segitiga"
    ],
    k: "D",
    image: "figural-images/F1-02.svg",
    boss: null
  },
  {
    id: 218,
    code: "F1-03",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan deret huruf pada gambar. Huruf apakah yang muncul berikutnya?",
    options: [
      "H",
      "E",
      "G",
      "I",
      "F"
    ],
    k: "B",
    image: "figural-images/F1-03.svg",
    boss: null
  },
  {
    id: 219,
    code: "F1-04",
    cat: "Figural",
    type: "Serial",
    q: "Hitung banyak bintang pada gambar, lalu tentukan gambar berikutnya.",
    options: [
      "14 bintang",
      "10 bintang",
      "9 bintang",
      "12 bintang",
      "11 bintang"
    ],
    k: "B",
    image: "figural-images/F1-04.svg",
    boss: null
  },
  {
    id: 220,
    code: "F1-05",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan sisi kotak yang diarsir pada gambar. Sisi mana yang diarsir pada kotak berikutnya?",
    options: [
      "Kotak dengan semua sisi diarsir",
      "Kotak dengan sisi bawah diarsir",
      "Kotak dengan sisi atas diarsir",
      "Kotak dengan sisi kiri diarsir",
      "Kotak dengan sisi kanan diarsir"
    ],
    k: "D",
    image: "figural-images/F1-05.svg",
    boss: null
  },
  {
    id: 221,
    code: "F1-06",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan pergantian bangun pada gambar. Bangun apa yang muncul berikutnya?",
    options: [
      "Lingkaran",
      "Segi empat",
      "Bintang",
      "Segitiga",
      "Segi lima"
    ],
    k: "D",
    image: "figural-images/F1-06.svg",
    boss: null
  },
  {
    id: 222,
    code: "F1-07",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan warna kotak pada gambar. Kotak seperti apa yang muncul berikutnya?",
    options: [
      "Kotak bergaris",
      "Kotak tanpa warna",
      "Kotak abu-abu",
      "Kotak putih",
      "Kotak hitam"
    ],
    k: "E",
    image: "figural-images/F1-07.svg",
    boss: null
  },
  {
    id: 223,
    code: "F1-08",
    cat: "Figural",
    type: "Serial",
    q: "Amati arah panah yang bergantian pada gambar. Panah berikutnya menghadap ke mana?",
    options: [
      "Panah menghadap ke kiri",
      "Panah menghadap ke bawah",
      "Panah menghadap ke kanan",
      "Panah menghadap diagonal",
      "Panah menghadap ke atas"
    ],
    k: "E",
    image: "figural-images/F1-08.svg",
    boss: null
  },
  {
    id: 224,
    code: "F1-09",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan jumlah bulan sabit pada gambar. Berapa bulan sabit pada gambar berikutnya?",
    options: [
      "9 bintang",
      "8 bulan sabit",
      "11 bulan sabit",
      "9 bulan sabit",
      "10 bulan sabit"
    ],
    k: "D",
    image: "figural-images/F1-09.svg",
    boss: null
  },
  {
    id: 225,
    code: "F1-10",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan garis-garis di dalam persegi panjang pada gambar. Gambar manakah yang melanjutkan deret?",
    options: [
      "Persegi panjang dengan 7 garis vertikal di dalamnya",
      "Persegi panjang dengan 6 garis vertikal di dalamnya",
      "Lingkaran dengan 7 garis vertikal di dalamnya",
      "Persegi panjang dengan 9 garis vertikal di dalamnya",
      "Persegi panjang dengan 8 garis vertikal di dalamnya"
    ],
    k: "A",
    image: "figural-images/F1-10.svg",
    boss: null
  },
  {
    id: 226,
    code: "F1-11",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan banyak titik di dalam lingkaran pada gambar. Lingkaran berikutnya berisi berapa titik?",
    options: [
      "Lingkaran dengan 12 titik di dalamnya",
      "Lingkaran dengan 11 titik di dalamnya",
      "Segitiga dengan 12 titik di dalamnya",
      "Lingkaran dengan 10 titik di dalamnya",
      "Lingkaran dengan 13 titik di dalamnya"
    ],
    k: "A",
    image: "figural-images/F1-11.svg",
    boss: null
  },
  {
    id: 227,
    code: "F1-12",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan posisi titik kecil di dalam lingkaran pada gambar. Di mana posisi titik pada lingkaran berikutnya?",
    options: [
      "Lingkaran dengan titik kecil di atas (posisi jam 12)",
      "Lingkaran dengan titik kecil di kiri (posisi jam 9)",
      "Lingkaran dengan titik kecil di tengah",
      "Lingkaran dengan titik kecil di kanan (posisi jam 3)",
      "Lingkaran dengan titik kecil di bawah (posisi jam 6)"
    ],
    k: "B",
    image: "figural-images/F1-12.svg",
    boss: null
  },
  {
    id: 228,
    code: "F1-13",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan letak sudut siku segitiga pada gambar. Di mana letak sudut siku pada segitiga berikutnya?",
    options: [
      "Segitiga siku-siku dengan sudut siku di kanan bawah",
      "Segitiga sama sisi",
      "Segitiga siku-siku dengan sudut siku di kiri bawah",
      "Segitiga siku-siku dengan sudut siku di kanan atas",
      "Segitiga siku-siku dengan sudut siku di kiri atas"
    ],
    k: "C",
    image: "figural-images/F1-13.svg",
    boss: null
  },
  {
    id: 229,
    code: "F1-14",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan arah bulan sabit pada gambar. Ke arah mana bulan sabit berikutnya menghadap?",
    options: [
      "Bulan purnama",
      "Bulan sabit menghadap ke bawah",
      "Bulan sabit menghadap ke kiri",
      "Bulan sabit menghadap ke atas",
      "Bulan sabit menghadap ke kanan"
    ],
    k: "C",
    image: "figural-images/F1-14.svg",
    boss: null
  },
  {
    id: 230,
    code: "F1-15",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan kemiringan garis pada gambar. Garis seperti apa yang muncul berikutnya?",
    options: [
      "Garis miring dari kiri atas ke kanan bawah",
      "Garis mendatar",
      "Garis miring putus-putus dari kiri bawah ke kanan atas",
      "Garis tegak",
      "Garis miring dari kiri bawah ke kanan atas"
    ],
    k: "E",
    image: "figural-images/F1-15.svg",
    boss: null
  },
  {
    id: 231,
    code: "F1-16",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan jumlah sisi bangun pada gambar. Bangun berikutnya memiliki berapa sisi?",
    options: [
      "Segi lima",
      "Lingkaran",
      "Segi empat",
      "Segi enam",
      "Segi tujuh"
    ],
    k: "A",
    image: "figural-images/F1-16.svg",
    boss: null
  },
  {
    id: 232,
    code: "F1-17",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan pertambahan sisi bangun pada gambar. Bangun manakah yang melanjutkan deret?",
    options: [
      "Lingkaran",
      "Segi tujuh",
      "Segi sembilan",
      "Segi sepuluh",
      "Segi delapan"
    ],
    k: "C",
    image: "figural-images/F1-17.svg",
    boss: null
  },
  {
    id: 233,
    code: "F1-18",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan sudut kotak yang terpotong pada gambar. Bangun manakah yang melanjutkan deret?",
    options: [
      "Segi tujuh",
      "Kotak tanpa sudut terpotong",
      "Segi delapan",
      "Segi lima",
      "Segi enam"
    ],
    k: "A",
    image: "figural-images/F1-18.svg",
    boss: null
  },
  {
    id: 234,
    code: "F1-19",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan perubahan ukuran lingkaran pada gambar. Lingkaran berikutnya berukuran bagaimana?",
    options: [
      "Lingkaran berukuran sedang",
      "Lingkaran berukuran besar",
      "Lingkaran yang sama berukuran sangat besar",
      "Segitiga berukuran besar",
      "Lingkaran kecil"
    ],
    k: "C",
    image: "figural-images/F1-19.svg",
    boss: null
  },
  {
    id: 235,
    code: "F1-20",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan jumlah ujung bintang pada gambar. Bintang berikutnya memiliki berapa ujung?",
    options: [
      "Bintang dengan 6 ujung",
      "Bintang dengan 8 ujung",
      "Bintang dengan 7 ujung",
      "Bintang dengan 5 ujung",
      "Bintang dengan 9 ujung"
    ],
    k: "B",
    image: "figural-images/F1-20.svg",
    boss: null
  },
  {
    id: 236,
    code: "F1-21",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan pergantian bangun dan warnanya pada gambar. Bangun apa yang muncul berikutnya?",
    options: [
      "Segi empat hitam",
      "Segitiga hitam",
      "Segitiga putih",
      "Lingkaran putih",
      "Lingkaran hitam"
    ],
    k: "E",
    image: "figural-images/F1-21.svg",
    boss: null
  },
  {
    id: 237,
    code: "F1-22",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan jumlah bintang yang bergantian pada gambar. Berapa bintang pada gambar berikutnya?",
    options: [
      "3 bintang",
      "4 bintang",
      "1 bulan sabit",
      "1 bintang",
      "2 bintang"
    ],
    k: "D",
    image: "figural-images/F1-22.svg",
    boss: null
  },
  {
    id: 238,
    code: "F1-23",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan urutan bangun pada gambar. Bangun apa yang muncul pada gambar keenam?",
    options: [
      "Lingkaran",
      "Bintang",
      "Kotak",
      "Segitiga",
      "Segi empat"
    ],
    k: "A",
    image: "figural-images/F1-23.svg",
    boss: null
  },
  {
    id: 239,
    code: "F1-24",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan deret huruf pada gambar berikut. Huruf apakah yang muncul berikutnya?",
    options: [
      "J",
      "H",
      "G",
      "I",
      "F"
    ],
    k: "C",
    image: "figural-images/F1-24.svg",
    boss: null
  },
  {
    id: 240,
    code: "F1-25",
    cat: "Figural",
    type: "Serial",
    q: "Deret huruf pada gambar melompat dua huruf setiap langkah. Huruf berikutnya adalah huruf apa?",
    options: [
      "H",
      "J",
      "K",
      "L",
      "I"
    ],
    k: "E",
    image: "figural-images/F1-25.svg",
    boss: null
  },
  {
    id: 241,
    code: "F1-26",
    cat: "Figural",
    type: "Serial",
    q: "Huruf-huruf pada gambar bergerak mundur. Huruf apakah yang muncul setelahnya?",
    options: [
      "C",
      "Z",
      "F",
      "B",
      "A"
    ],
    k: "E",
    image: "figural-images/F1-26.svg",
    boss: null
  },
  {
    id: 242,
    code: "F1-27",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan lompatan huruf pada deret di gambar. Huruf apa yang melanjutkan deret ini?",
    options: [
      "N",
      "M",
      "O",
      "K",
      "L"
    ],
    k: "B",
    image: "figural-images/F1-27.svg",
    boss: null
  },
  {
    id: 243,
    code: "F1-28",
    cat: "Figural",
    type: "Serial",
    q: "Deret huruf pada gambar berjalan mundur dari akhir alfabet. Huruf berikutnya adalah huruf apa?",
    options: [
      "T",
      "W",
      "X",
      "U",
      "V"
    ],
    k: "E",
    image: "figural-images/F1-28.svg",
    boss: null
  },
  {
    id: 244,
    code: "F2-01",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Perhatikan analogi gambar berikut. Gambar manakah yang melengkapi analogi ini?",
    options: [
      "10 sisi",
      "7 sisi",
      "6 sisi",
      "5 sisi",
      "8 sisi"
    ],
    k: "E",
    image: "figural-images/F2-01.svg",
    boss: null
  },
  {
    id: 245,
    code: "F2-02",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Dua bangun pada pasangan pertama memiliki jumlah sisi tertentu. Gambar manakah yang tepat untuk pasangan kedua?",
    options: [
      "8 sisi",
      "7 sisi",
      "10 sisi",
      "9 sisi",
      "6 sisi"
    ],
    k: "A",
    image: "figural-images/F2-02.svg",
    boss: null
  },
  {
    id: 246,
    code: "F2-03",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Sebuah bangun dibelah menjadi dua bagian pada pasangan pertama. Gambar manakah yang melengkapi pasangan kedua?",
    options: [
      "4 lingkaran",
      "2 segitiga",
      "2 setengah lingkaran",
      "2 segi empat",
      "2 persegi"
    ],
    k: "C",
    image: "figural-images/F2-03.svg",
    boss: null
  },
  {
    id: 247,
    code: "F2-04",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Perhatikan hubungan kedua gambar di atas. Gambar manakah yang berpasangan dengan gambar ketiga?",
    options: [
      "Segi sembilan",
      "Segi enam",
      "Segi lima",
      "Segi delapan",
      "Segi tujuh"
    ],
    k: "D",
    image: "figural-images/F2-04.svg",
    boss: null
  },
  {
    id: 248,
    code: "F2-05",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Pasangan gambar pertama mengikuti suatu aturan tentang sudut. Gambar manakah yang tepat untuk pasangan kedua?",
    options: [
      "8 sudut",
      "5 sudut",
      "3 sudut",
      "6 sudut",
      "4 sudut"
    ],
    k: "B",
    image: "figural-images/F2-05.svg",
    boss: null
  },
  {
    id: 249,
    code: "F2-06",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Gambar pertama diputar menjadi gambar kedua. Gambar manakah yang melengkapi pasangan kedua?",
    options: [
      "Panah menghadap ke kiri",
      "Panah menghadap ke kanan",
      "Panah menghadap diagonal",
      "Panah menghadap ke bawah",
      "Panah menghadap ke atas"
    ],
    k: "E",
    image: "figural-images/F2-06.svg",
    boss: null
  },
  {
    id: 250,
    code: "F2-07",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Perhatikan letak titik pada gambar pertama dan kedua. Gambar manakah yang berpasangan dengan gambar ketiga?",
    options: [
      "Lingkaran dengan titik di kanan",
      "Lingkaran tanpa titik",
      "Lingkaran dengan titik di kiri",
      "Lingkaran dengan titik di atas",
      "Lingkaran dengan titik di bawah"
    ],
    k: "A",
    image: "figural-images/F2-07.svg",
    boss: null
  },
  {
    id: 251,
    code: "F2-08",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Gambar pertama dicerminkan menjadi gambar kedua. Gambar manakah yang tepat untuk pasangan kedua?",
    options: [
      "Segitiga menghadap ke kiri",
      "Segitiga menghadap ke kanan",
      "Segitiga menghadap ke bawah",
      "Segitiga menghadap diagonal",
      "Segitiga menghadap ke atas"
    ],
    k: "A",
    image: "figural-images/F2-08.svg",
    boss: null
  },
  {
    id: 252,
    code: "F2-09",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Pasangan pertama menunjukkan hasil pencerminan suatu bangun. Gambar manakah yang melengkapi pasangan kedua?",
    options: [
      "Bulan purnama",
      "Bulan sabit menghadap ke kanan",
      "Bulan sabit menghadap ke kiri",
      "Bulan sabit menghadap ke atas",
      "Bulan sabit menghadap ke bawah"
    ],
    k: "C",
    image: "figural-images/F2-09.svg",
    boss: null
  },
  {
    id: 253,
    code: "F2-10",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Perhatikan jumlah sisi bangun pada pasangan pertama. Gambar manakah yang melengkapi pasangan kedua?",
    options: [
      "10 sisi",
      "8 sisi",
      "11 sisi",
      "9 sisi",
      "7 sisi"
    ],
    k: "D",
    image: "figural-images/F2-10.svg",
    boss: null
  },
  {
    id: 254,
    code: "F2-11",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Gambar pertama berubah menjadi gambar kedua dengan menambah dua sisi. Gambar manakah yang berpasangan dengan gambar ketiga?",
    options: [
      "Segi lima",
      "Segi delapan",
      "Segi sepuluh",
      "Segi tujuh",
      "Segi sembilan"
    ],
    k: "B",
    image: "figural-images/F2-11.svg",
    boss: null
  },
  {
    id: 255,
    code: "F2-12",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Gambar pertama diputar setengah putaran menjadi gambar kedua. Gambar manakah yang tepat untuk pasangan kedua?",
    options: [
      "Panah menghadap ke kiri",
      "Panah menghadap ke kanan",
      "Panah menghadap diagonal",
      "Panah menghadap ke atas",
      "Panah menghadap ke bawah"
    ],
    k: "A",
    image: "figural-images/F2-12.svg",
    boss: null
  },
  {
    id: 256,
    code: "F2-13",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Perhatikan arah kaki huruf pada pasangan pertama. Gambar manakah yang melengkapi pasangan kedua?",
    options: [
      "Huruf T dengan kaki ke kiri",
      "Huruf L dengan kaki ke kanan",
      "Huruf T dengan kaki ke kanan",
      "Huruf T dengan kaki ke bawah",
      "Huruf T dengan kaki ke atas"
    ],
    k: "C",
    image: "figural-images/F2-13.svg",
    boss: null
  },
  {
    id: 257,
    code: "F2-14",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Bulan sabit pada pasangan pertama diputar searah jarum jam. Gambar manakah yang berpasangan dengan gambar ketiga?",
    options: [
      "Panah menghadap diagonal",
      "Panah menghadap ke bawah",
      "Panah menghadap ke kanan",
      "Panah menghadap ke kiri",
      "Panah menghadap ke atas"
    ],
    k: "D",
    image: "figural-images/F2-14.svg",
    boss: null
  },
  {
    id: 258,
    code: "F2-15",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Titik di dalam bangun berpindah tempat pada pasangan pertama. Gambar manakah yang tepat untuk pasangan kedua?",
    options: [
      "Lingkaran dengan titik hitam di bawah",
      "Lingkaran dengan titik hitam di kiri",
      "Lingkaran tanpa titik",
      "Lingkaran dengan titik hitam di atas",
      "Lingkaran dengan titik hitam di kanan"
    ],
    k: "D",
    image: "figural-images/F2-15.svg",
    boss: null
  },
  {
    id: 259,
    code: "F2-16",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Huruf pertama berubah menjadi huruf kedua karena dicerminkan. Huruf manakah yang melengkapi pasangan kedua?",
    options: [
      "Huruf q",
      "Huruf g",
      "Huruf p",
      "Huruf b",
      "Huruf d"
    ],
    k: "A",
    image: "figural-images/F2-16.svg",
    boss: null
  },
  {
    id: 260,
    code: "F2-17",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Segitiga pada pasangan pertama dicerminkan ke arah berlawanan. Gambar manakah yang melengkapi pasangan kedua?",
    options: [
      "Garis miring dua arah",
      "Garis miring dari kiri bawah ke kanan atas",
      "Garis tegak",
      "Garis mendatar",
      "Garis miring dari kiri atas ke kanan bawah"
    ],
    k: "E",
    image: "figural-images/F2-17.svg",
    boss: null
  },
  {
    id: 261,
    code: "F2-18",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Bulan sabit pada pasangan pertama dibalik dari atas ke bawah. Gambar manakah yang berpasangan dengan gambar ketiga?",
    options: [
      "Segitiga menghadap ke kanan",
      "Bintang",
      "Segitiga menghadap ke atas",
      "Segitiga menghadap ke bawah",
      "Segitiga menghadap ke kiri"
    ],
    k: "D",
    image: "figural-images/F2-18.svg",
    boss: null
  },
  {
    id: 262,
    code: "F2-19",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Panah diagonal pada pasangan pertama dicerminkan. Gambar manakah yang tepat untuk pasangan kedua?",
    options: [
      "Segitiga siku-siku dengan sudut siku di kanan bawah",
      "Segitiga siku-siku dengan sudut siku di kanan atas",
      "Segitiga siku-siku dengan sudut siku di kiri atas",
      "Segitiga sama sisi",
      "Segitiga siku-siku dengan sudut siku di kiri bawah"
    ],
    k: "B",
    image: "figural-images/F2-19.svg",
    boss: null
  },
  {
    id: 263,
    code: "F2-20",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Tiga bangun pada pasangan pertama memiliki jumlah sisi tertentu. Gambar manakah yang melengkapi pasangan kedua?",
    options: [
      "12 sisi",
      "15 sisi",
      "16 sisi",
      "20 sisi",
      "14 sisi"
    ],
    k: "C",
    image: "figural-images/F2-20.svg",
    boss: null
  },
  {
    id: 264,
    code: "F2-21",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Jumlah titik di dalam bangun berubah pada pasangan pertama. Gambar manakah yang berpasangan dengan gambar ketiga?",
    options: [
      "Segi empat dengan 6 titik di dalamnya",
      "Segi empat dengan 5 titik di dalamnya",
      "Segi empat dengan 3 titik di dalamnya",
      "Segi empat dengan 7 titik di dalamnya",
      "Segi empat dengan 4 titik di dalamnya"
    ],
    k: "A",
    image: "figural-images/F2-21.svg",
    boss: null
  },
  {
    id: 265,
    code: "F2-22",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Empat bangun pada pasangan pertama memiliki jumlah sisi tertentu. Gambar manakah yang tepat untuk pasangan kedua?",
    options: [
      "18 sisi",
      "17 sisi",
      "20 sisi",
      "16 sisi",
      "15 sisi"
    ],
    k: "A",
    image: "figural-images/F2-22.svg",
    boss: null
  },
  {
    id: 266,
    code: "F2-23",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Jumlah bangun bertambah satu pada pasangan pertama. Gambar manakah yang melengkapi pasangan kedua?",
    options: [
      "4 segitiga",
      "7 segitiga",
      "5 segitiga",
      "3 segitiga",
      "6 segitiga"
    ],
    k: "C",
    image: "figural-images/F2-23.svg",
    boss: null
  },
  {
    id: 267,
    code: "F2-24",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Jumlah bintang di dalam bangun berubah pada pasangan pertama. Gambar manakah yang berpasangan dengan gambar ketiga?",
    options: [
      "Lingkaran dengan 7 bintang di dalamnya",
      "Lingkaran dengan 5 bintang di dalamnya",
      "Lingkaran dengan 4 bintang di dalamnya",
      "Lingkaran dengan 6 bintang di dalamnya",
      "Lingkaran dengan 3 bintang di dalamnya"
    ],
    k: "D",
    image: "figural-images/F2-24.svg",
    boss: null
  },
  {
    id: 268,
    code: "F2-25",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Sebuah bangun dibelah menjadi dua bagian yang sama pada pasangan pertama. Gambar manakah yang tepat untuk pasangan kedua?",
    options: [
      "2 persegi panjang",
      "2 segitiga",
      "2 lingkaran",
      "2 segi lima",
      "4 segitiga"
    ],
    k: "B",
    image: "figural-images/F2-25.svg",
    boss: null
  },
  {
    id: 269,
    code: "F2-26",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Perhatikan jumlah sudut bangun pada pasangan pertama. Gambar manakah yang melengkapi pasangan kedua?",
    options: [
      "8 sudut",
      "10 sudut",
      "9 sudut",
      "6 sudut",
      "7 sudut"
    ],
    k: "A",
    image: "figural-images/F2-26.svg",
    boss: null
  },
  {
    id: 270,
    code: "F2-27",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Sebuah bangun dibelah menjadi empat bagian pada pasangan pertama. Gambar manakah yang berpasangan dengan gambar ketiga?",
    options: [
      "2 segitiga",
      "4 lingkaran",
      "2 persegi panjang",
      "4 persegi",
      "4 segitiga"
    ],
    k: "E",
    image: "figural-images/F2-27.svg",
    boss: null
  },
  {
    id: 271,
    code: "F2-28",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Sebuah bangun dipotong salah satu sudutnya pada pasangan pertama. Gambar manakah yang tepat untuk pasangan kedua?",
    options: [
      "Lingkaran",
      "Segi enam",
      "Segi lima",
      "Segitiga",
      "Segi empat"
    ],
    k: "C",
    image: "figural-images/F2-28.svg",
    boss: null
  },
  {
    id: 272,
    code: "F4-01",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Perhatikan pola pada matriks 3x3 berikut. Isi apakah yang melengkapi kotak kosong itu?",
    options: [
      "10 segitiga",
      "8 segitiga",
      "7 segitiga",
      "6 segitiga",
      "9 segitiga"
    ],
    k: "B",
    image: "figural-images/F4-01.svg",
    boss: null
  },
  {
    id: 273,
    code: "F4-02",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Matriks pada gambar mengikuti suatu pola baris dan kolom. Gambar manakah yang mengisi tanda tanya?",
    options: [
      "9 kotak",
      "8 kotak",
      "12 kotak",
      "10 kotak",
      "7 kotak"
    ],
    k: "A",
    image: "figural-images/F4-02.svg",
    boss: null
  },
  {
    id: 274,
    code: "F4-03",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Amati susunan gambar dalam matriks berikut. Kotak manakah yang seharusnya menempati tanda tanya?",
    options: [
      "6 bintang",
      "3 bintang",
      "5 bintang",
      "7 bintang",
      "4 bintang"
    ],
    k: "C",
    image: "figural-images/F4-03.svg",
    boss: null
  },
  {
    id: 275,
    code: "F4-04",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Perhatikan gambar matriks 3x3 ini. Pola apakah yang berlaku, dan isi apa yang melengkapi kotak bertanda tanya?",
    options: [
      "9 lingkaran",
      "6 lingkaran",
      "5 lingkaran",
      "8 lingkaran",
      "7 lingkaran"
    ],
    k: "E",
    image: "figural-images/F4-04.svg",
    boss: null
  },
  {
    id: 276,
    code: "F4-05",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Lihat matriks gambar di bawah ini. Gambar apa yang paling tepat untuk kotak yang kosong?",
    options: [
      "11 titik",
      "9 titik",
      "7 titik",
      "10 titik",
      "8 titik"
    ],
    k: "B",
    image: "figural-images/F4-05.svg",
    boss: null
  },
  {
    id: 277,
    code: "F4-06",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Perhatikan pola gambar pada matriks berikut. Manakah gambar yang melengkapi kotak bertanda tanya?",
    options: [
      "Panah menghadap ke atas",
      "Panah menghadap ke bawah",
      "Panah menghadap diagonal",
      "Panah menghadap ke kanan",
      "Panah menghadap ke kiri"
    ],
    k: "A",
    image: "figural-images/F4-06.svg",
    boss: null
  },
  {
    id: 278,
    code: "F4-07",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Amati matriks 3x3 berikut dengan saksama. Isi apakah yang cocok untuk kotak kosong di sudut kanan bawah?",
    options: [
      "Panah menghadap ke kiri",
      "Panah menghadap diagonal",
      "Panah menghadap ke bawah",
      "Panah menghadap ke atas",
      "Panah menghadap ke kanan"
    ],
    k: "A",
    image: "figural-images/F4-07.svg",
    boss: null
  },
  {
    id: 279,
    code: "F4-08",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Gambar-gambar dalam matriks berikut tersusun menurut suatu aturan. Gambar manakah yang mengisi tanda tanya?",
    options: [
      "Panah menghadap ke kiri",
      "Panah menghadap ke atas",
      "Panah menghadap ke bawah",
      "Panah menghadap diagonal",
      "Panah menghadap ke kanan"
    ],
    k: "C",
    image: "figural-images/F4-08.svg",
    boss: null
  },
  {
    id: 280,
    code: "F4-09",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Perhatikan matriks berikut. Berdasarkan pola baris dan kolomnya, gambar apa yang melengkapi kotak kosong?",
    options: [
      "11 segitiga",
      "7 segitiga",
      "9 segitiga",
      "8 segitiga",
      "10 segitiga"
    ],
    k: "C",
    image: "figural-images/F4-09.svg",
    boss: null
  },
  {
    id: 281,
    code: "F4-10",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Cermati susunan gambar pada matriks 3x3 ini. Kotak bertanda tanya harus diisi gambar yang mana?",
    options: [
      "10 bintang",
      "9 bintang",
      "12 bintang",
      "8 bintang",
      "7 bintang"
    ],
    k: "B",
    image: "figural-images/F4-10.svg",
    boss: null
  },
  {
    id: 282,
    code: "F4-11",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Perhatikan gambar-gambar dalam kotak matriks berikut. Gambar manakah yang tepat untuk melengkapi pola itu?",
    options: [
      "13 lingkaran",
      "11 lingkaran",
      "12 lingkaran",
      "9 lingkaran",
      "10 lingkaran"
    ],
    k: "E",
    image: "figural-images/F4-11.svg",
    boss: null
  },
  {
    id: 283,
    code: "F4-12",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Amati pola yang terbentuk pada matriks gambar berikut. Isi apakah yang melengkapi kotak bertanda tanya?",
    options: [
      "4 titik",
      "2 titik",
      "6 titik",
      "5 titik",
      "3 titik"
    ],
    k: "E",
    image: "figural-images/F4-12.svg",
    boss: null
  },
  {
    id: 284,
    code: "F4-13",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Perhatikan matriks 3x3 pada gambar. Gambar apa yang seharusnya berada pada kotak kosong?",
    options: [
      "9 kotak",
      "11 kotak",
      "8 kotak",
      "10 kotak",
      "7 kotak"
    ],
    k: "C",
    image: "figural-images/F4-13.svg",
    boss: null
  },
  {
    id: 285,
    code: "F4-14",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Lihatlah matriks gambar berikut. Manakah gambar yang melengkapi kotak bertanda tanya sesuai polanya?",
    options: [
      "12 segitiga",
      "10 segitiga",
      "8 segitiga",
      "9 segitiga",
      "7 segitiga"
    ],
    k: "D",
    image: "figural-images/F4-14.svg",
    boss: null
  },
  {
    id: 286,
    code: "F4-15",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Perhatikan susunan gambar dalam matriks ini. Kotak kosong di kanan bawah diisi oleh gambar yang mana?",
    options: [
      "10 titik",
      "11 titik",
      "14 titik",
      "13 titik",
      "12 titik"
    ],
    k: "E",
    image: "figural-images/F4-15.svg",
    boss: null
  },
  {
    id: 287,
    code: "F4-16",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Amati matriks berikut. Berdasarkan aturan baris dan kolomnya, gambar manakah yang mengisi tanda tanya?",
    options: [
      "14 bintang",
      "18 bintang",
      "12 bintang",
      "15 bintang",
      "16 bintang"
    ],
    k: "E",
    image: "figural-images/F4-16.svg",
    boss: null
  },
  {
    id: 288,
    code: "F4-17",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Perhatikan pola pada gambar matriks 3x3 berikut. Gambar apa yang tepat untuk kotak yang masih kosong?",
    options: [
      "12 lingkaran",
      "8 lingkaran",
      "10 lingkaran",
      "11 lingkaran",
      "9 lingkaran"
    ],
    k: "C",
    image: "figural-images/F4-17.svg",
    boss: null
  },
  {
    id: 289,
    code: "F4-18",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Cermati gambar matriks berikut. Isi kotak bertanda tanya adalah gambar yang mana?",
    options: [
      "16 kotak",
      "14 kotak",
      "15 kotak",
      "13 kotak",
      "12 kotak"
    ],
    k: "B",
    image: "figural-images/F4-18.svg",
    boss: null
  },
  {
    id: 290,
    code: "F4-19",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Perhatikan matriks gambar di bawah. Gambar manakah yang melengkapi pola pada kotak kosong itu?",
    options: [
      "13 segitiga",
      "14 segitiga",
      "10 segitiga",
      "11 segitiga",
      "12 segitiga"
    ],
    k: "D",
    image: "figural-images/F4-19.svg",
    boss: null
  },
  {
    id: 291,
    code: "F4-20",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Amati susunan pada matriks 3x3 berikut. Gambar apakah yang cocok untuk mengisi tanda tanya?",
    options: [
      "10 lingkaran",
      "11 lingkaran",
      "8 lingkaran",
      "12 lingkaran",
      "9 lingkaran"
    ],
    k: "A",
    image: "figural-images/F4-20.svg",
    boss: null
  },
  {
    id: 292,
    code: "F4-21",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Lihat matriks pada gambar berikut. Berdasarkan polanya, gambar manakah yang menempati kotak kosong?",
    options: [
      "10 titik",
      "7 titik",
      "9 titik",
      "8 titik",
      "6 titik"
    ],
    k: "D",
    image: "figural-images/F4-21.svg",
    boss: null
  },
  {
    id: 293,
    code: "F4-22",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Perhatikan gambar matriks berikut ini. Kotak bertanda tanya diisi oleh gambar yang mana?",
    options: [
      "13 kotak",
      "14 kotak",
      "12 kotak",
      "11 kotak",
      "10 kotak"
    ],
    k: "C",
    image: "figural-images/F4-22.svg",
    boss: null
  },
  {
    id: 294,
    code: "F4-23",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Amati pola gambar dalam matriks 3x3 di bawah. Isi apakah yang melengkapi kotak kosong tersebut?",
    options: [
      "Panah menghadap ke kanan",
      "Panah menghadap ke kiri",
      "Panah menghadap diagonal",
      "Panah menghadap ke atas",
      "Panah menghadap ke bawah"
    ],
    k: "E",
    image: "figural-images/F4-23.svg",
    boss: null
  },
  {
    id: 295,
    code: "F4-24",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Perhatikan matriks berikut dengan teliti. Gambar manakah yang tepat untuk kotak bertanda tanya?",
    options: [
      "Panah menghadap diagonal",
      "Panah menghadap ke bawah",
      "Panah menghadap ke kanan",
      "Panah menghadap ke kiri",
      "Panah menghadap ke atas"
    ],
    k: "C",
    image: "figural-images/F4-24.svg",
    boss: null
  },
  {
    id: 296,
    code: "F4-25",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Cermati matriks gambar 3x3 berikut. Gambar apa yang melengkapi kotak kosong di sudut kanan bawah?",
    options: [
      "Panah menghadap ke atas",
      "Panah menghadap ke bawah",
      "Panah menghadap ke kanan",
      "Panah menghadap diagonal",
      "Panah menghadap ke kiri"
    ],
    k: "B",
    image: "figural-images/F4-25.svg",
    boss: null
  },
  {
    id: 297,
    code: "F4-26",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Perhatikan susunan gambar pada matriks berikut. Manakah gambar yang seharusnya mengisi tanda tanya?",
    options: [
      "Panah menghadap ke kiri atas",
      "Panah menghadap ke kiri",
      "Panah menghadap ke bawah",
      "Panah menghadap ke kiri bawah",
      "Panah menghadap ke kanan bawah"
    ],
    k: "D",
    image: "figural-images/F4-26.svg",
    boss: null
  },
  {
    id: 298,
    code: "F4-27",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Amati gambar matriks di bawah ini. Kotak yang kosong harus diisi gambar yang mana?",
    options: [
      "Panah menghadap ke kiri",
      "Panah menghadap ke kanan",
      "Panah menghadap diagonal",
      "Panah menghadap ke atas",
      "Panah menghadap ke bawah"
    ],
    k: "B",
    image: "figural-images/F4-27.svg",
    boss: null
  },
  {
    id: 299,
    code: "F4-28",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Perhatikan pola yang ada pada matriks gambar berikut. Gambar manakah yang melengkapi kotak bertanda tanya?",
    options: [
      "Titik di tengah",
      "Titik di sudut kiri atas",
      "Titik di sudut kanan bawah",
      "Titik di sudut kanan atas",
      "Titik di sudut kiri bawah"
    ],
    k: "B",
    image: "figural-images/F4-28.svg",
    boss: null
  },
  {
    id: 300,
    code: "F4-29",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Lihatlah susunan gambar dalam matriks 3x3 berikut. Isi apakah yang tepat untuk kotak bertanda tanya?",
    options: [
      "Panah menghadap ke kanan bawah",
      "Panah menghadap ke kanan atas",
      "Panah menghadap ke kiri atas",
      "Panah menghadap ke kiri bawah",
      "Panah menghadap ke atas"
    ],
    k: "C",
    image: "figural-images/F4-29.svg",
    boss: null
  },
  {
    id: 301,
    code: "B2-01",
    cat: "Verbal",
    type: "Silogisme: Semua + Sebagian",
    q: "Premis 1: Semua insinyur adalah sarjana. Premis 2: Sebagian sarjana bekerja di BUMN. Premis 3: Semua pegawai BUMN mendapat tunjangan kinerja. Kesimpulan yang paling tepat adalah…",
    options: [
      "Semua insinyur mendapat tunjangan kinerja",
      "Sebagian sarjana mendapat tunjangan kinerja",
      "Semua pegawai BUMN adalah sarjana",
      "Sebagian insinyur bukan sarjana",
      "Semua insinyur bekerja di BUMN"
    ],
    k: "B",
    image: null,
    boss: 2
  },
  {
    id: 302,
    code: "B2-02",
    cat: "Verbal",
    type: "Silogisme: Jika–Maka — Silogisme Hipotetis",
    q: "Jika hari hujan, jalanan menjadi basah. Jika jalanan basah, lalu lintas menjadi padat. Hari ini lalu lintas tidak padat. Kesimpulan yang paling tepat adalah…",
    options: [
      "Jalanan basah hari ini",
      "Jalanan tidak basah hari ini",
      "Lalu lintas padat hari ini",
      "Tidak ada kesimpulan yang dapat ditarik",
      "Hari ini hujan"
    ],
    k: "B",
    image: null,
    boss: 2
  },
  {
    id: 303,
    code: "B2-03",
    cat: "Verbal",
    type: "Analogi kata",
    q: "Nelayan : Jala = Petani : …",
    options: [
      "Pupuk",
      "Traktor",
      "Sawah",
      "Cangkul",
      "Padi"
    ],
    k: "D",
    image: null,
    boss: 2
  },
  {
    id: 304,
    code: "B2-04",
    cat: "Verbal",
    type: "Analogi kata",
    q: "Panas : Berkeringat = Dingin : …",
    options: [
      "Selimut",
      "Menggigil",
      "Jaket",
      "Demam",
      "Salju"
    ],
    k: "B",
    image: null,
    boss: 2
  },
  {
    id: 305,
    code: "B2-05",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Seorang peneliti mengamati 60 pelanggan di sebuah kedai kopi selama sebulan. Sebanyak 48 pelanggan memesan kopi susu pada pagi hari. Kesimpulan yang paling didukung data tersebut adalah…",
    options: [
      "Semua pelanggan kedai kopi menyukai kopi susu",
      "Kopi susu adalah minuman pagi yang populer di kedai itu",
      "Kopi susu lebih sehat daripada kopi hitam",
      "Semua kedai kopi menjual kopi susu",
      "Pelanggan tidak pernah memesan minuman lain"
    ],
    k: "B",
    image: null,
    boss: 2
  },
  {
    id: 306,
    code: "B2-06",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Setiap kali harga tiket kereta naik, jumlah penumpang turun pada bulan berikutnya. Hal ini terjadi tiga kali berturut-turut dalam dua tahun terakhir. Kesimpulan yang paling masuk akal adalah…",
    options: [
      "Jumlah penumpang turun karena kereta sering rusak",
      "Kenaikan harga tiket kemungkinan memengaruhi jumlah penumpang",
      "Kenaikan harga tiket pasti satu-satunya penyebab turunnya penumpang",
      "Penumpang kereta tidak akan pernah kembali",
      "Harga tiket harus selalu diturunkan"
    ],
    k: "B",
    image: null,
    boss: 2
  },
  {
    id: 307,
    code: "B2-07",
    cat: "Verbal",
    type: "Analitis",
    q: "Lima siswa — Andi, Budi, Candra, Dedi, dan Eko — duduk sebaris dari kiri ke kanan. Andi duduk di ujung kiri. Dedi duduk di antara Andi dan Candra. Budi duduk tepat di sebelah kanan Candra. Siapa yang duduk di tengah?",
    options: [
      "Eko",
      "Andi",
      "Budi",
      "Candra",
      "Dedi"
    ],
    k: "D",
    image: null,
    boss: 2
  },
  {
    id: 308,
    code: "B2-08",
    cat: "Verbal",
    type: "Analitis",
    q: "Empat mata pelajaran — Matematika, IPA, Bahasa Indonesia, dan IPS — dijadwalkan pada hari Senin sampai Kamis, satu pelajaran per hari. Matematika tidak pada hari Senin. IPA dijadwalkan sehari setelah Matematika. Bahasa Indonesia pada hari Kamis. Pada hari apa IPS dijadwalkan?",
    options: [
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Tidak dapat ditentukan"
    ],
    k: "A",
    image: null,
    boss: 2
  },
  {
    id: 309,
    code: "B2-09",
    cat: "Verbal",
    type: "Penguat/pelemah argumen",
    q: "Pemerintah Kota X berencana membangun jalur sepeda untuk mengurangi kemacetan. Pernyataan manakah yang PALING menguatkan rencana tersebut?",
    options: [
      "Kota Y yang membangun jalur sepeda mengalami penurunan kemacetan 18% dalam setahun",
      "Banyak warga Kota X memiliki sepeda",
      "Jalur sepeda membutuhkan biaya perawatan",
      "Beberapa warga lebih suka berjalan kaki",
      "Kota X sudah memiliki banyak jalan raya"
    ],
    k: "A",
    image: null,
    boss: 2
  },
  {
    id: 310,
    code: "B2-10",
    cat: "Verbal",
    type: "Penguat/pelemah argumen",
    q: "Minum kopi setiap pagi meningkatkan produktivitas kerja. Pernyataan manakah yang PALING melemahkan klaim tersebut?",
    options: [
      "Penelitian terkontrol menunjukkan produktivitas peminum kopi sama dengan bukan peminum kopi",
      "Kopi mengandung kafein",
      "Sebagian pekerja minum kopi dua kali sehari",
      "Harga kopi naik tahun ini",
      "Kopi dinikmati banyak orang"
    ],
    k: "A",
    image: null,
    boss: 2
  },
  {
    id: 311,
    code: "B2-11",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "47² − 43² = …",
    options: [
      "400",
      "320",
      "340",
      "360",
      "380"
    ],
    k: "D",
    image: null,
    boss: 2
  },
  {
    id: 312,
    code: "B2-12",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Sebuah jaket seharga Rp480.000 dijual dengan diskon 25%, lalu mendapat potongan tambahan 10% dari harga setelah diskon. Harga akhir jaket adalah…",
    options: [
      "Rp336.000",
      "Rp360.000",
      "Rp300.000",
      "Rp312.000",
      "Rp324.000"
    ],
    k: "E",
    image: null,
    boss: 2
  },
  {
    id: 313,
    code: "B2-13",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "3/8 dari Rp2.400.000 ditambah 5/12 dari Rp1.800.000 adalah…",
    options: [
      "Rp1.700.000",
      "Rp1.750.000",
      "Rp1.500.000",
      "Rp1.600.000",
      "Rp1.650.000"
    ],
    k: "E",
    image: null,
    boss: 2
  },
  {
    id: 314,
    code: "B2-14",
    cat: "Numerik",
    type: "Deret angka tambah/kurang",
    q: "Perhatikan deret: 12, 20, 29, 39, 50, … Angka berikutnya adalah…",
    options: [
      "64",
      "66",
      "58",
      "60",
      "62"
    ],
    k: "E",
    image: null,
    boss: 2
  },
  {
    id: 315,
    code: "B2-15",
    cat: "Numerik",
    type: "Deret angka kali/bagi",
    q: "Perhatikan deret: 3, 6, 18, 72, 360, … Angka berikutnya adalah…",
    options: [
      "2.520",
      "2.880",
      "1.440",
      "1.800",
      "2.160"
    ],
    k: "E",
    image: null,
    boss: 2
  },
  {
    id: 316,
    code: "B2-16",
    cat: "Numerik",
    type: "Deret angka selang-seling/lompat pola",
    q: "Perhatikan deret: 5, 12, 7, 14, 9, 16, 11, … Angka berikutnya adalah…",
    options: [
      "13",
      "15",
      "17",
      "18",
      "20"
    ],
    k: "D",
    image: null,
    boss: 2
  },
  {
    id: 317,
    code: "B2-17",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "A = 35% dari 640; B = 28% dari 800. Hubungan A dan B adalah…",
    options: [
      "A = 2B",
      "Tidak dapat ditentukan",
      "A > B",
      "A < B",
      "A = B"
    ],
    k: "E",
    image: null,
    boss: 2
  },
  {
    id: 318,
    code: "B2-18",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "A = 18² − 16²; B = 8². Hubungan A dan B adalah…",
    options: [
      "A > B",
      "A < B",
      "A = B",
      "A = B + 8",
      "Tidak dapat ditentukan"
    ],
    k: "A",
    image: null,
    boss: 2
  },
  {
    id: 319,
    code: "B2-19",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Sebuah kereta menempuh jarak 270 km dalam 3 jam. Dengan kecepatan yang sama, jarak yang ditempuh dalam 5 jam adalah…",
    options: [
      "480 km",
      "540 km",
      "400 km",
      "420 km",
      "450 km"
    ],
    k: "E",
    image: null,
    boss: 2
  },
  {
    id: 320,
    code: "B2-20",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Umur ayah 4 kali umur anaknya. Enam tahun lagi, umur ayah menjadi 3 kali umur anaknya. Umur anak sekarang adalah…",
    options: [
      "9 tahun",
      "10 tahun",
      "11 tahun",
      "12 tahun",
      "14 tahun"
    ],
    k: "D",
    image: null,
    boss: 2
  },
  {
    id: 321,
    code: "B2-21",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "12 pekerja dapat menyelesaikan sebuah proyek dalam 18 hari. Jika pekerja ditambah menjadi 18 orang, proyek selesai dalam…",
    options: [
      "10 hari",
      "11 hari",
      "12 hari",
      "14 hari",
      "15 hari"
    ],
    k: "C",
    image: null,
    boss: 2
  },
  {
    id: 322,
    code: "B2-22",
    cat: "Numerik",
    type: "Kecukupan data",
    q: "Berapakah nilai x? (1) 3x + 8 = 29. (2) x adalah bilangan genap.",
    options: [
      "Pernyataan (1) SAJA cukup, sedangkan pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup DAN pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan (2) TIDAK cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup, sedangkan SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (2) SAJA cukup, sedangkan pernyataan (1) SAJA tidak cukup."
    ],
    k: "A",
    image: null,
    boss: 2
  },
  {
    id: 323,
    code: "B2-23",
    cat: "Numerik",
    type: "Deret/pola dalam tabel",
    q: "Perhatikan tabel berikut. Baris 1: 4, 9, 14. Baris 2: 7, 12, 8. Baris 3: 10, 6, ?. Setiap baris berjumlah sama. Nilai ? adalah…",
    options: [
      "9",
      "10",
      "11",
      "12",
      "13"
    ],
    k: "C",
    image: null,
    boss: 2
  },
  {
    id: 324,
    code: "B3-01",
    cat: "Verbal",
    type: "Silogisme: Tidak ada + Semua",
    q: "Premis 1: Tidak ada siswa yang tidak belajar yang lulus ujian. Premis 2: Semua siswa kelas A belajar dengan giat. Kesimpulan yang paling tepat adalah…",
    options: [
      "Semua siswa yang lulus berasal dari kelas A",
      "Semua siswa kelas A lulus ujian",
      "Sebagian siswa kelas A lulus ujian",
      "Tidak dapat disimpulkan apakah siswa kelas A lulus ujian",
      "Tidak ada siswa kelas A yang belajar"
    ],
    k: "D",
    image: null,
    boss: 3
  },
  {
    id: 325,
    code: "B3-02",
    cat: "Verbal",
    type: "Silogisme: Disjungtif / Atau",
    q: "Jika Rani tidak pergi ke pasar, ia pergi ke perpustakaan atau ke kampus. Hari ini Rani tidak pergi ke pasar dan tidak pergi ke kampus. Ke mana Rani pergi?",
    options: [
      "Pasar",
      "Perpustakaan",
      "Kampus",
      "Rumah",
      "Tidak dapat ditentukan"
    ],
    k: "B",
    image: null,
    boss: 3
  },
  {
    id: 326,
    code: "B3-03",
    cat: "Verbal",
    type: "Analogi kata",
    q: "Novel : Bab = Gedung : …",
    options: [
      "Atap",
      "Lantai",
      "Pintu",
      "Jendela",
      "Tangga"
    ],
    k: "B",
    image: null,
    boss: 3
  },
  {
    id: 327,
    code: "B3-04",
    cat: "Verbal",
    type: "Analogi kata",
    q: "Jarum : Menjahit = Kuas : …",
    options: [
      "Warna",
      "Cat",
      "Kanvas",
      "Melukis",
      "Gambar"
    ],
    k: "D",
    image: null,
    boss: 3
  },
  {
    id: 328,
    code: "B3-05",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Penjualan sebuah toko selama tiga bulan: Januari 120 unit, Februari 150 unit, Maret 180 unit. Kenaikan stabil 30 unit per bulan. Perkiraan penjualan April yang paling masuk akal adalah…",
    options: [
      "300 unit",
      "180 unit",
      "200 unit",
      "210 unit",
      "240 unit"
    ],
    k: "D",
    image: null,
    boss: 3
  },
  {
    id: 329,
    code: "B3-06",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Dari wawancara dengan 15 pengunjung di satu mal di Jakarta, peneliti menyimpulkan bahwa semua warga Indonesia gemar berbelanja daring. Kelemahan utama kesimpulan ini adalah…",
    options: [
      "Mal tersebut ramai dikunjungi",
      "Belanja daring memang populer",
      "Wawancara memakan waktu lama",
      "Sampel terlalu kecil dan tidak mewakili seluruh Indonesia",
      "Peneliti tidak menanyakan usia pengunjung"
    ],
    k: "D",
    image: null,
    boss: 3
  },
  {
    id: 330,
    code: "B3-07",
    cat: "Verbal",
    type: "Analitis",
    q: "Enam siswa — Fajar, Gita, Hadi, Intan, Joko, dan Kiki — piket pada hari Senin sampai Sabtu, satu orang per hari. Gita piket pada hari Rabu. Hadi piket sehari sebelum Gita. Fajar piket pada hari Senin. Intan piket sehari setelah Kiki. Joko piket pada hari Jumat. Siapa yang piket pada hari Sabtu?",
    options: [
      "Joko",
      "Kiki",
      "Fajar",
      "Hadi",
      "Intan"
    ],
    k: "E",
    image: null,
    boss: 3
  },
  {
    id: 331,
    code: "B3-08",
    cat: "Verbal",
    type: "Analitis",
    q: "Lima pelari — P, Q, R, S, T — finis berurutan tanpa seri. P finis sebelum Q. R finis tepat setelah P. S finis di antara Q dan T. T finis terakhir. Siapa yang finis ketiga?",
    options: [
      "P",
      "Q",
      "R",
      "S",
      "T"
    ],
    k: "B",
    image: null,
    boss: 3
  },
  {
    id: 332,
    code: "B3-09",
    cat: "Verbal",
    type: "Penguat/pelemah argumen",
    q: "Larangan kantong plastik sekali pakai akan mengurangi sampah di laut. Pernyataan manakah yang PALING menguatkan argumen ini?",
    options: [
      "Banyak toko sudah menyediakan kantong kain",
      "Sampah di laut juga berasal dari kapal",
      "Harga kantong kain lebih mahal",
      "Kota yang melarang kantong plastik mencatat penurunan sampah plastik di pantai sebesar 32% dalam dua tahun",
      "Kantong plastik sulit terurai"
    ],
    k: "D",
    image: null,
    boss: 3
  },
  {
    id: 333,
    code: "B3-10",
    cat: "Verbal",
    type: "Penguat/pelemah argumen",
    q: "Belajar kelompok selalu lebih efektif daripada belajar sendiri. Pernyataan manakah yang PALING melemahkan klaim tersebut?",
    options: [
      "Sebagian siswa justru lebih fokus saat belajar sendiri dan nilainya lebih tinggi",
      "Belajar kelompok membutuhkan ruang",
      "Beberapa siswa suka berdiskusi",
      "Belajar sendiri membutuhkan disiplin",
      "Kelompok belajar populer di kampus"
    ],
    k: "A",
    image: null,
    boss: 3
  },
  {
    id: 334,
    code: "B3-11",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "63² − 57² = …",
    options: [
      "780",
      "840",
      "600",
      "660",
      "720"
    ],
    k: "E",
    image: null,
    boss: 3
  },
  {
    id: 335,
    code: "B3-12",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "15% dari Rp3.600.000 ditambah 25% dari Rp2.400.000 adalah…",
    options: [
      "Rp1.200.000",
      "Rp1.260.000",
      "Rp1.020.000",
      "Rp1.080.000",
      "Rp1.140.000"
    ],
    k: "E",
    image: null,
    boss: 3
  },
  {
    id: 336,
    code: "B3-13",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Harga sebuah tas Rp250.000 naik 20%, kemudian turun 20%. Harga akhir tas adalah…",
    options: [
      "Rp230.000",
      "Rp240.000",
      "Rp250.000",
      "Rp260.000",
      "Rp270.000"
    ],
    k: "B",
    image: null,
    boss: 3
  },
  {
    id: 337,
    code: "B3-14",
    cat: "Numerik",
    type: "Deret angka bertingkat",
    q: "Perhatikan deret: 4, 9, 19, 34, 54, … Angka berikutnya adalah…",
    options: [
      "84",
      "89",
      "69",
      "74",
      "79"
    ],
    k: "E",
    image: null,
    boss: 3
  },
  {
    id: 338,
    code: "B3-15",
    cat: "Numerik",
    type: "Deret angka kali/bagi",
    q: "Perhatikan deret: 2, 6, 5, 15, 14, 42, 41, … Angka berikutnya adalah…",
    options: [
      "126",
      "164",
      "82",
      "120",
      "123"
    ],
    k: "E",
    image: null,
    boss: 3
  },
  {
    id: 339,
    code: "B3-16",
    cat: "Numerik",
    type: "Deret angka kuadrat",
    q: "Perhatikan deret: 2, 5, 10, 17, 26, 37, … Angka berikutnya adalah…",
    options: [
      "45",
      "48",
      "50",
      "52",
      "65"
    ],
    k: "C",
    image: null,
    boss: 3
  },
  {
    id: 340,
    code: "B3-17",
    cat: "Numerik",
    type: "Deret Fibonacci",
    q: "Perhatikan deret: 4, 7, 11, 18, 29, 47, … Angka berikutnya adalah…",
    options: [
      "72",
      "74",
      "76",
      "78",
      "81"
    ],
    k: "C",
    image: null,
    boss: 3
  },
  {
    id: 341,
    code: "B3-18",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "A = 7/8 × 640; B = 85% dari 640. Hubungan A dan B adalah…",
    options: [
      "A > B",
      "A < B",
      "A = B",
      "A = B + 8",
      "Tidak dapat ditentukan"
    ],
    k: "A",
    image: null,
    boss: 3
  },
  {
    id: 342,
    code: "B3-19",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "A = 125% dari 480; B = 150% dari 380. Hubungan A dan B adalah…",
    options: [
      "A > B",
      "A < B",
      "A = B",
      "A = B + 10",
      "Tidak dapat ditentukan"
    ],
    k: "A",
    image: null,
    boss: 3
  },
  {
    id: 343,
    code: "B3-20",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Dua mobil berangkat dari dua kota yang berjarak 360 km dan bergerak saling mendekat. Mobil pertama berkecepatan 60 km/jam, mobil kedua 90 km/jam. Keduanya bertemu setelah…",
    options: [
      "2 jam",
      "2 jam 15 menit",
      "2 jam 24 menit",
      "2 jam 30 menit",
      "3 jam"
    ],
    k: "C",
    image: null,
    boss: 3
  },
  {
    id: 344,
    code: "B3-21",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Sinta menabung Rp2.400.000 dengan bunga sederhana 8% per tahun. Setelah 15 bulan, bunga yang diperoleh adalah…",
    options: [
      "Rp192.000",
      "Rp200.000",
      "Rp240.000",
      "Rp288.000",
      "Rp320.000"
    ],
    k: "C",
    image: null,
    boss: 3
  },
  {
    id: 345,
    code: "B3-22",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Persediaan pakan cukup untuk 20 ekor ayam selama 30 hari. Jika ayam ditambah 10 ekor, persediaan cukup selama…",
    options: [
      "15 hari",
      "18 hari",
      "20 hari",
      "25 hari",
      "45 hari"
    ],
    k: "C",
    image: null,
    boss: 3
  },
  {
    id: 346,
    code: "B3-23",
    cat: "Numerik",
    type: "Mencari hasil yang sama",
    q: "Manakah yang hasilnya sama dengan 2.880?",
    options: [
      "120 × 24",
      "96 × 25",
      "144 × 18",
      "160 × 16",
      "180 × 14"
    ],
    k: "A",
    image: null,
    boss: 3
  },
  {
    id: 347,
    code: "B4-01",
    cat: "Verbal",
    type: "Silogisme: Semua + Semua",
    q: "Premis 1: Semua dosen adalah peneliti. Premis 2: Semua peneliti menulis jurnal. Premis 3: Sebagian penulis jurnal mendapat hibah penelitian. Kesimpulan yang paling tepat adalah…",
    options: [
      "Sebagian dosen mendapat hibah penelitian",
      "Semua peneliti mendapat hibah penelitian",
      "Tidak ada dosen yang menulis jurnal",
      "Semua dosen menulis jurnal",
      "Semua dosen mendapat hibah penelitian"
    ],
    k: "D",
    image: null,
    boss: 4
  },
  {
    id: 348,
    code: "B4-02",
    cat: "Verbal",
    type: "Silogisme: Jika–Maka — Menegaskan Akibat (jebakan)",
    q: "Jika seseorang berolahraga teratur, tubuhnya bugar. Budi tubuhnya bugar. Kesimpulan yang paling tepat adalah…",
    options: [
      "Semua orang yang bugar berolahraga teratur",
      "Budi pasti sedang sakit",
      "Budi berolahraga teratur",
      "Budi tidak berolahraga teratur",
      "Tidak dapat disimpulkan apakah Budi berolahraga teratur"
    ],
    k: "E",
    image: null,
    boss: 4
  },
  {
    id: 349,
    code: "B4-03",
    cat: "Verbal",
    type: "Analogi kata",
    q: "Termometer : Suhu = Barometer : …",
    options: [
      "Kelembapan",
      "Kecepatan angin",
      "Tekanan udara",
      "Curah hujan",
      "Ketinggian"
    ],
    k: "C",
    image: null,
    boss: 4
  },
  {
    id: 350,
    code: "B4-04",
    cat: "Verbal",
    type: "Analogi kata",
    q: "Jantung : Memompa darah = Ginjal : …",
    options: [
      "Menghasilkan urine",
      "Menyimpan darah",
      "Menyaring darah",
      "Mengalirkan darah",
      "Membersihkan paru-paru"
    ],
    k: "C",
    image: null,
    boss: 4
  },
  {
    id: 351,
    code: "B4-05",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Sebuah studi pada 500 karyawan di 10 perusahaan menemukan karyawan yang bekerja dari rumah 2 hari seminggu melaporkan kepuasan kerja lebih tinggi. Perusahaan X berencana menerapkan kebijakan itu dengan harapan kepuasan karyawannya naik. Asumsi yang PALING dibutuhkan agar harapan itu masuk akal adalah…",
    options: [
      "Bekerja dari rumah menghemat biaya transportasi",
      "Kepuasan kerja memengaruhi produktivitas",
      "Karyawan Perusahaan X memiliki jenis pekerjaan yang mirip dengan karyawan dalam studi",
      "Semua perusahaan sebaiknya menerapkan kebijakan ini",
      "Karyawan lebih suka bekerja dari rumah"
    ],
    k: "C",
    image: null,
    boss: 4
  },
  {
    id: 352,
    code: "B4-06",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Dari 200 pendaftar beasiswa, 40 diterima. Di antara yang diterima, 30 pernah mengikuti olimpiade. Seorang komentator menyimpulkan bahwa mengikuti olimpiade adalah syarat utama diterima beasiswa. Kelemahan utama kesimpulan ini adalah…",
    options: [
      "Tidak diketahui berapa banyak pendaftar yang mengikuti olimpiade tetapi tidak diterima",
      "Olimpiade sulit diikuti",
      "Beasiswa itu bergengsi",
      "Pendaftar yang diterima tentu berprestasi",
      "Komentator bukan panitia seleksi"
    ],
    k: "A",
    image: null,
    boss: 4
  },
  {
    id: 353,
    code: "B4-07",
    cat: "Verbal",
    type: "Analitis",
    q: "Tujuh orang — A, B, C, D, E, F, G — antre di loket. A berada tepat di depan B. D berada tepat di belakang B. F berada tepat di belakang D. C berada di antara B dan E. E berada di belakang F tetapi di depan G. Siapa yang berada di urutan keempat?",
    options: [
      "A",
      "B",
      "D",
      "F",
      "G"
    ],
    k: "D",
    image: null,
    boss: 4
  },
  {
    id: 354,
    code: "B4-08",
    cat: "Verbal",
    type: "Analitis",
    q: "Lima kegiatan — P, Q, R, S, T — dilakukan pada hari Senin sampai Jumat, satu per hari. P dilakukan sebelum Q. R dilakukan sehari setelah P. S dilakukan pada hari Rabu. T dilakukan setelah Q. Kegiatan apa yang dilakukan pada hari Kamis?",
    options: [
      "R",
      "S",
      "T",
      "P",
      "Q"
    ],
    k: "E",
    image: null,
    boss: 4
  },
  {
    id: 355,
    code: "B4-09",
    cat: "Verbal",
    type: "Penguat/pelemah argumen",
    q: "Sebuah kota melarang kendaraan bermotor di pusat kota pada akhir pekan dan mencatat penurunan polusi udara 15%. Wali kota mengklaim larangan itu yang menyebabkan penurunan polusi. Pernyataan manakah yang PALING menguatkan klaim wali kota?",
    options: [
      "Pada akhir pekan yang sama, kota tetangga tanpa larangan tidak mengalami penurunan polusi",
      "Banyak warga mendukung larangan itu",
      "Polusi udara berbahaya bagi kesehatan",
      "Larangan itu mengurangi kemacetan",
      "Warga kota sudah lama mengeluh soal polusi"
    ],
    k: "A",
    image: null,
    boss: 4
  },
  {
    id: 356,
    code: "B4-10",
    cat: "Verbal",
    type: "Penguat/pelemah argumen",
    q: "Penelitian menemukan siswa yang membawa bekal dari rumah mendapat nilai lebih tinggi. Peneliti menyimpulkan bekal dari rumah menyebabkan nilai lebih tinggi. Pernyataan manakah yang PALING melemahkan kesimpulan ini?",
    options: [
      "Siswa yang membawa bekal umumnya berasal dari keluarga yang lebih memperhatikan pendidikan anaknya",
      "Bekal dari rumah lebih sehat",
      "Sebagian siswa tidak membawa bekal",
      "Nilai siswa diukur tiap semester",
      "Bekal dari rumah lebih murah"
    ],
    k: "A",
    image: null,
    boss: 4
  },
  {
    id: 357,
    code: "B4-11",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "125² − 115² + 25% dari 1.600 = …",
    options: [
      "2.600",
      "3.000",
      "2.800",
      "2.400",
      "3.200"
    ],
    k: "C",
    image: null,
    boss: 4
  },
  {
    id: 358,
    code: "B4-12",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "(5/8 × 2.400) − (3/4 × 800) + 12% dari 1.500 = …",
    options: [
      "1.020",
      "1.140",
      "1.080",
      "960",
      "1.200"
    ],
    k: "C",
    image: null,
    boss: 4
  },
  {
    id: 359,
    code: "B4-13",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "27² + 36² − 15² = …",
    options: [
      "1.700",
      "1.900",
      "1.750",
      "1.800",
      "1.850"
    ],
    k: "D",
    image: null,
    boss: 4
  },
  {
    id: 360,
    code: "B4-14",
    cat: "Numerik",
    type: "Deret angka bertingkat",
    q: "Perhatikan deret: 3, 7, 16, 30, 49, … Angka berikutnya adalah…",
    options: [
      "63",
      "68",
      "73",
      "78",
      "83"
    ],
    k: "C",
    image: null,
    boss: 4
  },
  {
    id: 361,
    code: "B4-15",
    cat: "Numerik",
    type: "Deret angka selang-seling/lompat pola",
    q: "Perhatikan deret: 2, 9, 4, 18, 8, 36, 16, … Angka berikutnya adalah…",
    options: [
      "64",
      "80",
      "32",
      "144",
      "72"
    ],
    k: "E",
    image: null,
    boss: 4
  },
  {
    id: 362,
    code: "B4-16",
    cat: "Numerik",
    type: "Deret huruf",
    q: "Perhatikan deret huruf: A, Z, C, X, E, V, G, … (A=1, B=2, …, Z=26) Huruf berikutnya adalah…",
    options: [
      "U",
      "H",
      "I",
      "S",
      "T"
    ],
    k: "E",
    image: null,
    boss: 4
  },
  {
    id: 363,
    code: "B4-17",
    cat: "Numerik",
    type: "Deret angka kuadrat",
    q: "Perhatikan deret: 2, 7, 16, 29, 46, 67, … Angka berikutnya adalah…",
    options: [
      "88",
      "96",
      "84",
      "100",
      "92"
    ],
    k: "E",
    image: null,
    boss: 4
  },
  {
    id: 364,
    code: "B4-18",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "A = 60% dari 1.250; B = 45% dari 1.700. Hubungan A dan B adalah…",
    options: [
      "A = B",
      "A = B − 5",
      "Tidak dapat ditentukan",
      "A > B",
      "A < B"
    ],
    k: "E",
    image: null,
    boss: 4
  },
  {
    id: 365,
    code: "B4-19",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "A = 23² + 17²; B = 29² − 5². Hubungan A dan B adalah…",
    options: [
      "A > B",
      "A < B",
      "A = B",
      "A = B + 5",
      "Tidak dapat ditentukan"
    ],
    k: "A",
    image: null,
    boss: 4
  },
  {
    id: 366,
    code: "B4-20",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Pekerja A menyelesaikan sebuah pekerjaan dalam 10 hari, pekerja B dalam 15 hari. Jika keduanya bekerja bersama, pekerjaan selesai dalam…",
    options: [
      "5 hari",
      "6 hari",
      "7 hari",
      "7,5 hari",
      "8 hari"
    ],
    k: "B",
    image: null,
    boss: 4
  },
  {
    id: 367,
    code: "B4-21",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Umur Budi 3 kali umur adiknya. Empat tahun lagi, jumlah umur mereka berdua menjadi 36 tahun. Umur Budi sekarang adalah…",
    options: [
      "18 tahun",
      "19 tahun",
      "20 tahun",
      "21 tahun",
      "24 tahun"
    ],
    k: "D",
    image: null,
    boss: 4
  },
  {
    id: 368,
    code: "B4-22",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Sebuah kolam berkapasitas 2.400 liter sudah terisi 900 liter. Dua pompa dengan debit 120 liter/jam dan 180 liter/jam dinyalakan bersama. Berapa jam lagi kolam penuh?",
    options: [
      "4 jam",
      "5 jam",
      "6 jam",
      "7 jam",
      "8 jam"
    ],
    k: "B",
    image: null,
    boss: 4
  },
  {
    id: 369,
    code: "B4-23",
    cat: "Numerik",
    type: "Kecukupan data",
    q: "Berapakah luas sebuah persegi panjang? (1) Kelilingnya 56 cm. (2) Panjangnya 4 cm lebih dari lebarnya.",
    options: [
      "Pernyataan (1) SAJA cukup, sedangkan pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup DAN pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan (2) TIDAK cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup, sedangkan SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (2) SAJA cukup, sedangkan pernyataan (1) SAJA tidak cukup."
    ],
    k: "D",
    image: null,
    boss: 4
  },
  {
    id: 370,
    code: "B5-01",
    cat: "Verbal",
    type: "Silogisme: Semua + Sebagian",
    q: "Premis 1: Semua arsitek adalah perancang. Premis 2: Sebagian perancang bekerja di konsultan. Premis 3: Semua yang bekerja di konsultan mengikuti sertifikasi. Premis 4: Sebagian pemegang sertifikasi mendapat proyek besar. Kesimpulan yang paling tepat adalah…",
    options: [
      "Sebagian arsitek bekerja di konsultan",
      "Semua pemegang sertifikasi adalah perancang",
      "Semua arsitek mengikuti sertifikasi",
      "Sebagian perancang mengikuti sertifikasi",
      "Semua arsitek mendapat proyek besar"
    ],
    k: "D",
    image: null,
    boss: 5
  },
  {
    id: 371,
    code: "B5-02",
    cat: "Verbal",
    type: "Silogisme: Jika–Maka — Silogisme Hipotetis",
    q: "Jika seseorang menabung rutin, ia punya dana darurat. Jika ia punya dana darurat, ia tidak berutang saat darurat. Jika ia tidak berutang saat darurat, skor kreditnya baik. Jika skor kreditnya baik, ia mudah mendapat pinjaman. Doni sulit mendapat pinjaman. Kesimpulan yang paling tepat adalah…",
    options: [
      "Doni punya dana darurat",
      "Doni tidak berutang saat darurat",
      "Doni tidak menabung rutin",
      "Doni menabung rutin",
      "Skor kredit Doni baik"
    ],
    k: "C",
    image: null,
    boss: 5
  },
  {
    id: 372,
    code: "B5-03",
    cat: "Verbal",
    type: "Analogi kata",
    q: "Kalimat : Kata = Paragraf : …",
    options: [
      "Kata",
      "Huruf",
      "Bab",
      "Teks",
      "Kalimat"
    ],
    k: "E",
    image: null,
    boss: 5
  },
  {
    id: 373,
    code: "B5-04",
    cat: "Verbal",
    type: "Analogi kata",
    q: "Panas : Memuai = Dingin : …",
    options: [
      "Membeku",
      "Mengembun",
      "Mengeras",
      "Mengering",
      "Menyusut"
    ],
    k: "E",
    image: null,
    boss: 5
  },
  {
    id: 374,
    code: "B5-05",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Sebuah perusahaan rintisan menguji aplikasi barunya pada 50 pengguna di Jakarta dan 48 di antaranya menyatakan puas. Perusahaan menyimpulkan aplikasi itu akan diterima oleh pasar Indonesia. Pernyataan manakah yang PALING melemahkan kesimpulan tersebut?",
    options: [
      "Aplikasi itu baru diluncurkan bulan lalu",
      "Sebagian pengguna kesulitan mengunduh aplikasi",
      "Perusahaan berencana menambah fitur baru",
      "Pengguna yang diuji adalah karyawan perusahaan itu sendiri",
      "Pengguna di Jakarta terbiasa memakai aplikasi sejenis"
    ],
    k: "D",
    image: null,
    boss: 5
  },
  {
    id: 375,
    code: "B5-06",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Sebuah survei pada 300 pemilik mobil listrik menemukan mereka rata-rata menempuh jarak lebih jauh per hari daripada pemilik mobil bensin. Seorang analis menyimpulkan mobil listrik membuat orang lebih sering bepergian. Pernyataan manakah yang PALING melemahkan kesimpulan analis?",
    options: [
      "Mobil listrik lebih murah biaya operasionalnya",
      "Survei dilakukan di kota besar saja",
      "Sebagian pemilik mobil listrik juga memiliki mobil bensin",
      "Pemilik mobil listrik umumnya tinggal di pinggiran kota yang jauh dari pusat aktivitas",
      "Mobil listrik semakin populer"
    ],
    k: "D",
    image: null,
    boss: 5
  },
  {
    id: 376,
    code: "B5-07",
    cat: "Verbal",
    type: "Analitis",
    q: "Delapan siswa dibagi ke dalam dua kelompok belajar, masing-masing 4 orang: Kelompok Merah dan Kelompok Biru. Adi dan Budi satu kelompok. Citra tidak satu kelompok dengan Dedi. Eka satu kelompok dengan Adi. Fajar satu kelompok dengan Citra. Gita tidak satu kelompok dengan Eka. Hani satu kelompok dengan Gita. Siapakah yang pasti satu kelompok dengan Dedi?",
    options: [
      "Adi",
      "Citra",
      "Fajar",
      "Gita",
      "Hani"
    ],
    k: "A",
    image: null,
    boss: 5
  },
  {
    id: 377,
    code: "B5-08",
    cat: "Verbal",
    type: "Analitis",
    q: "Tujuh buku — A, B, C, D, E, F, G — disusun dalam satu rak dari kiri ke kanan. A tepat di sebelah kiri B. C berada di antara A dan D. E berada di sebelah kanan D tetapi di sebelah kiri F. G berada di ujung kanan rak. Buku apa yang berada di posisi keempat dari kiri?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    k: "D",
    image: null,
    boss: 5
  },
  {
    id: 378,
    code: "B5-09",
    cat: "Verbal",
    type: "Penguat/pelemah argumen",
    q: "Sebuah perusahaan mengganti lampu kantor dengan lampu yang lebih terang dan produktivitas karyawan naik. Manajer mengklaim lampu yang lebih terang meningkatkan produktivitas. Pernyataan manakah yang PALING menguatkan klaim manajer?",
    options: [
      "Lampu baru lebih hemat listrik",
      "Karyawan senang dengan suasana kantor baru",
      "Produktivitas diukur setiap bulan",
      "Karyawan yang bekerja di ruangan dengan lampu paling terang menunjukkan kenaikan produktivitas terbesar",
      "Perusahaan itu sudah lama berdiri"
    ],
    k: "D",
    image: null,
    boss: 5
  },
  {
    id: 379,
    code: "B5-10",
    cat: "Verbal",
    type: "Penguat/pelemah argumen",
    q: "Sebuah studi menemukan orang yang minum teh hijau setiap hari memiliki risiko penyakit jantung lebih rendah. Peneliti menyimpulkan teh hijau melindungi jantung. Pernyataan manakah yang PALING melemahkan kesimpulan peneliti?",
    options: [
      "Peminum teh hijau dalam studi itu juga lebih sering berolahraga dan makan sayur",
      "Teh hijau mengandung antioksidan",
      "Studi itu dilakukan selama lima tahun",
      "Sebagian peserta tidak minum teh setiap hari",
      "Teh hijau populer di Asia"
    ],
    k: "A",
    image: null,
    boss: 5
  },
  {
    id: 380,
    code: "B5-11",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "(64² − 56²) + 25% dari (1.200 + 800) = …",
    options: [
      "1.360",
      "1.560",
      "1.260",
      "1.660",
      "1.460"
    ],
    k: "E",
    image: null,
    boss: 5
  },
  {
    id: 381,
    code: "B5-12",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "(0,6 × 3.450) − (5/8 × 1.600) + 15% dari 2.000 = …",
    options: [
      "1.270",
      "1.470",
      "1.170",
      "1.570",
      "1.370"
    ],
    k: "E",
    image: null,
    boss: 5
  },
  {
    id: 382,
    code: "B5-13",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "40% dari (720 − 15% dari 800) + 12² = …",
    options: [
      "344",
      "384",
      "424",
      "364",
      "404"
    ],
    k: "B",
    image: null,
    boss: 5
  },
  {
    id: 383,
    code: "B5-14",
    cat: "Numerik",
    type: "Deret angka bertingkat",
    q: "Perhatikan deret: 7, 16, 35, 74, 153, … Angka berikutnya adalah…",
    options: [
      "316",
      "322",
      "306",
      "310",
      "312"
    ],
    k: "E",
    image: null,
    boss: 5
  },
  {
    id: 384,
    code: "B5-15",
    cat: "Numerik",
    type: "Deret angka kali/bagi",
    q: "Perhatikan deret: 3, 4, 6, 12, 12, 36, 24, … Angka berikutnya adalah…",
    options: [
      "72",
      "96",
      "108",
      "120",
      "144"
    ],
    k: "C",
    image: null,
    boss: 5
  },
  {
    id: 385,
    code: "B5-16",
    cat: "Numerik",
    type: "Deret angka kali/bagi",
    q: "Perhatikan deret: 2, 7, 13, 40, 79, 238, … Angka berikutnya adalah…",
    options: [
      "475",
      "473",
      "477",
      "469",
      "481"
    ],
    k: "A",
    image: null,
    boss: 5
  },
  {
    id: 386,
    code: "B5-17",
    cat: "Numerik",
    type: "Deret huruf",
    q: "Perhatikan deret huruf: A, C, F, J, O, … (A=1, B=2, …, Z=26) Huruf berikutnya adalah…",
    options: [
      "S",
      "T",
      "U",
      "V",
      "W"
    ],
    k: "C",
    image: null,
    boss: 5
  },
  {
    id: 387,
    code: "B5-18",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "A = 31² + 23²; B = 39² − 11². Hubungan A dan B adalah…",
    options: [
      "A > B",
      "A < B",
      "A = B",
      "A = B + 100",
      "Tidak dapat ditentukan"
    ],
    k: "A",
    image: null,
    boss: 5
  },
  {
    id: 388,
    code: "B5-19",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "A = 7/12 × 2.400; B = 58% dari 2.500. Hubungan A dan B adalah…",
    options: [
      "A > B",
      "A < B",
      "A = B",
      "A = B − 25",
      "Tidak dapat ditentukan"
    ],
    k: "B",
    image: null,
    boss: 5
  },
  {
    id: 389,
    code: "B5-20",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Sebuah sepeda motor seharga Rp3.600.000 dibeli dengan uang muka 25%. Sisanya dicicil 12 bulan dengan bunga 1% per bulan dari sisa harga. Besar cicilan per bulan adalah…",
    options: [
      "Rp225.000",
      "Rp240.000",
      "Rp252.000",
      "Rp270.000",
      "Rp300.000"
    ],
    k: "C",
    image: null,
    boss: 5
  },
  {
    id: 390,
    code: "B5-21",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Pekerja A menyelesaikan sebuah pekerjaan dalam 8 hari, pekerja B dalam 12 hari. Setelah bekerja bersama selama 3 hari, A berhenti dan B melanjutkan sendiri. Pekerjaan selesai setelah total…",
    options: [
      "6 hari",
      "6,5 hari",
      "7 hari",
      "7,5 hari",
      "8 hari"
    ],
    k: "D",
    image: null,
    boss: 5
  },
  {
    id: 391,
    code: "B5-22",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Jarak kota P ke kota Q adalah 120 km. Andi pergi dengan kecepatan 60 km/jam dan pulang dengan kecepatan 40 km/jam. Kecepatan rata-rata perjalanan pulang-pergi adalah…",
    options: [
      "44 km/jam",
      "46 km/jam",
      "48 km/jam",
      "50 km/jam",
      "52 km/jam"
    ],
    k: "C",
    image: null,
    boss: 5
  },
  {
    id: 392,
    code: "B5-23",
    cat: "Numerik",
    type: "Soal cerita: optimasi kombinasi",
    q: "Sebuah toko menjual paket A seharga Rp60.000 (isi 3 buku dan 2 pensil) dan paket B seharga Rp45.000 (isi 2 buku dan 3 pensil). Seseorang membeli beberapa paket dan mendapat total 17 buku dan 13 pensil, lalu membayar Rp345.000. Berapa paket A yang dibeli?",
    options: [
      "3 paket",
      "4 paket",
      "5 paket",
      "6 paket",
      "7 paket"
    ],
    k: "C",
    image: null,
    boss: 5
  },
  {
    id: 393,
    code: "B2-24",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan lingkaran pada gambar berikut. Jumlah titik di dalam lingkaran bertambah dua setiap langkah. Lingkaran manakah yang melanjutkan deret ini?",
    options: [
      "Lingkaran dengan 8 titik di dalamnya",
      "Lingkaran dengan 7 titik di dalamnya",
      "Segi empat dengan 8 titik di dalamnya",
      "Lingkaran dengan 6 titik di dalamnya",
      "Lingkaran dengan 10 titik di dalamnya"
    ],
    k: "A",
    image: "figural-images/B2-24.svg",
    boss: 2
  },
  {
    id: 394,
    code: "B2-25",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan arah panah yang berputar pada gambar. Panah berikutnya menghadap ke mana?",
    options: [
      "Panah menghadap ke atas",
      "Panah menghadap ke kanan",
      "Panah menghadap ke bawah",
      "Panah menghadap ke kanan bawah",
      "Panah menghadap ke kiri"
    ],
    k: "D",
    image: "figural-images/B2-25.svg",
    boss: 2
  },
  {
    id: 395,
    code: "B2-26",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Pada gambar, tiap bangun dipasangkan dengan jumlah sisinya. Bangun manakah yang melengkapi pasangan kedua?",
    options: [
      "5 sisi",
      "6 sisi",
      "7 sisi",
      "8 sisi",
      "9 sisi"
    ],
    k: "C",
    image: "figural-images/B2-26.svg",
    boss: 2
  },
  {
    id: 396,
    code: "B2-27",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Perhatikan gambar berikut. Jumlah garis di dalam bangun pada pasangan pertama menjadi dua kali lipat. Bangun manakah yang melengkapi pasangan kedua?",
    options: [
      "Segi empat dengan 3 garis di dalamnya",
      "Segi empat dengan 5 garis di dalamnya",
      "Segi empat dengan 6 garis di dalamnya",
      "Segi empat dengan 7 garis di dalamnya",
      "Lingkaran dengan 6 garis di dalamnya"
    ],
    k: "C",
    image: "figural-images/B2-27.svg",
    boss: 2
  },
  {
    id: 397,
    code: "B2-28",
    cat: "Figural",
    type: "Ketidaksamaan",
    q: "Amati kelima bangun pada gambar. Bangun manakah yang tidak sama dengan keempat bangun lainnya?",
    options: [
      "Gambar A",
      "Gambar B",
      "Gambar C",
      "Gambar D",
      "Gambar E"
    ],
    k: "C",
    image: "figural-images/B2-28.svg",
    boss: 2
  },
  {
    id: 398,
    code: "B2-29",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Cermati matriks gambar 3x3 berikut. Berapa bintang yang mengisi kotak kosong di sudut kanan bawah?",
    options: [
      "4 bintang",
      "5 bintang",
      "6 bintang",
      "7 bintang",
      "8 bintang"
    ],
    k: "C",
    image: "figural-images/B2-29.svg",
    boss: 2
  },
  {
    id: 399,
    code: "B2-30",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Perhatikan susunan gambar pada matriks berikut. Berapa lingkaran yang seharusnya mengisi tanda tanya?",
    options: [
      "6 lingkaran",
      "7 lingkaran",
      "8 lingkaran",
      "9 lingkaran",
      "10 lingkaran"
    ],
    k: "B",
    image: "figural-images/B2-30.svg",
    boss: 2
  },
  {
    id: 400,
    code: "B3-24",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan titik di dalam kotak pada gambar. Di sudut mana titik berada pada kotak berikutnya?",
    options: [
      "Titik terletak di sudut kiri atas",
      "Titik terletak di sudut kanan atas",
      "Titik terletak di sudut kanan bawah",
      "Titik terletak di sudut kiri bawah",
      "Titik terletak di tengah kotak"
    ],
    k: "D",
    image: "figural-images/B3-24.svg",
    boss: 3
  },
  {
    id: 401,
    code: "B3-25",
    cat: "Figural",
    type: "Serial",
    q: "Amati deret bangun pada gambar. Bangun berikutnya dalam deret adalah…",
    options: [
      "Segi lima",
      "Segi enam",
      "Segi tujuh",
      "Segi delapan",
      "Lingkaran"
    ],
    k: "C",
    image: "figural-images/B3-25.svg",
    boss: 3
  },
  {
    id: 402,
    code: "B3-26",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Perhatikan gambar berikut. Pada pasangan pertama, jumlah sisi bertambah satu dan jumlah titik menjadi dua kali lipat. Bangun manakah yang melengkapi pasangan kedua?",
    options: [
      "Segi enam dengan 3 titik di dalamnya",
      "Segi enam dengan 6 titik di dalamnya",
      "Segi tujuh dengan 6 titik di dalamnya",
      "Segi lima dengan 6 titik di dalamnya",
      "Segi enam dengan 5 titik di dalamnya"
    ],
    k: "B",
    image: "figural-images/B3-26.svg",
    boss: 3
  },
  {
    id: 403,
    code: "B3-27",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Perhatikan gambar berikut. Pada pasangan pertama, bangun diputar 180° dan warnanya dibalik (hitam menjadi putih). Bangun manakah yang melengkapi pasangan kedua?",
    options: [
      "Segi lima hitam menghadap ke atas",
      "Segi lima putih menghadap ke bawah",
      "Segi lima putih menghadap ke atas",
      "Segi enam putih menghadap ke bawah",
      "Segi lima hitam menghadap ke bawah"
    ],
    k: "B",
    image: "figural-images/B3-27.svg",
    boss: 3
  },
  {
    id: 404,
    code: "B3-28",
    cat: "Figural",
    type: "Ketidaksamaan",
    q: "Kelima bangun pada gambar berikut hampir semuanya memiliki sifat yang sama. Bangun manakah yang berbeda?",
    options: [
      "Gambar A",
      "Gambar B",
      "Gambar C",
      "Gambar D",
      "Gambar E"
    ],
    k: "E",
    image: "figural-images/B3-28.svg",
    boss: 3
  },
  {
    id: 405,
    code: "B3-29",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Cermati matriks panah 3x3 berikut. Ke arah mana panah pada kotak kosong di sudut kanan bawah menghadap?",
    options: [
      "Panah menunjuk ke atas",
      "Panah menunjuk ke kanan",
      "Panah menunjuk ke bawah",
      "Panah menunjuk ke kiri",
      "Panah menunjuk diagonal"
    ],
    k: "A",
    image: "figural-images/B3-29.svg",
    boss: 3
  },
  {
    id: 406,
    code: "B3-30",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Perhatikan matriks gambar 3x3 berikut. Setiap baris dan kolom memuat satu lingkaran, satu segitiga, dan satu segi empat. Gambar apa yang melengkapi kotak kosong?",
    options: [
      "Segitiga",
      "Lingkaran",
      "Segi empat",
      "Segi enam",
      "Bintang"
    ],
    k: "A",
    image: "figural-images/B3-30.svg",
    boss: 3
  },
  {
    id: 407,
    code: "B4-24",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan gambar berikut. Panah di dalam lingkaran berputar 90° searah jarum jam dan jumlah titik bertambah satu setiap langkah. Gambar manakah yang melanjutkan deret ini?",
    options: [
      "Panah ke kiri dengan 4 titik",
      "Panah ke atas dengan 4 titik",
      "Panah ke kiri dengan 3 titik",
      "Panah ke kanan dengan 4 titik",
      "Panah ke bawah dengan 4 titik"
    ],
    k: "A",
    image: "figural-images/B4-24.svg",
    boss: 4
  },
  {
    id: 408,
    code: "B4-25",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan deret bangun pada gambar berikut. Jumlah sisi berkurang satu setiap langkah dan warnanya bergantian hitam-putih. Bangun manakah yang melanjutkan deret ini?",
    options: [
      "Segitiga hitam",
      "Segitiga putih",
      "Segi empat putih",
      "Segi lima putih",
      "Lingkaran putih"
    ],
    k: "B",
    image: "figural-images/B4-25.svg",
    boss: 4
  },
  {
    id: 409,
    code: "B4-26",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Perhatikan gambar berikut. Pada pasangan pertama, bangun diputar 90° dan jumlah garis di dalamnya bertambah satu. Bangun manakah yang melengkapi pasangan kedua?",
    options: [
      "Segitiga dengan 2 garis di dalamnya",
      "Segitiga dengan 3 garis di dalamnya",
      "Segitiga dengan 4 garis di dalamnya",
      "Segi empat dengan 3 garis di dalamnya",
      "Lingkaran dengan 3 garis di dalamnya"
    ],
    k: "B",
    image: "figural-images/B4-26.svg",
    boss: 4
  },
  {
    id: 410,
    code: "B4-27",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Perhatikan gambar berikut. Pada pasangan pertama, bangun luar dan bangun dalam bertukar tempat. Bangun manakah yang melengkapi pasangan kedua?",
    options: [
      "Lingkaran di luar, segi empat di dalam",
      "Segi empat di luar, lingkaran di dalam",
      "Segitiga di luar, segi empat di dalam",
      "Lingkaran di luar, segitiga di dalam",
      "Segi empat di luar, segitiga di dalam"
    ],
    k: "A",
    image: "figural-images/B4-27.svg",
    boss: 4
  },
  {
    id: 411,
    code: "B4-28",
    cat: "Figural",
    type: "Ketidaksamaan",
    q: "Perhatikan kelima bangun pada gambar berikut. Pada empat bangun, bangun dalam memiliki sisi lebih sedikit daripada bangun luar. Bangun manakah yang berbeda dari yang lain?",
    options: [
      "Gambar A",
      "Gambar B",
      "Gambar C",
      "Gambar D",
      "Gambar E"
    ],
    k: "D",
    image: "figural-images/B4-28.svg",
    boss: 4
  },
  {
    id: 412,
    code: "B4-29",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Cermati matriks gambar 3x3 berikut. Berapa lingkaran dan warna apa yang mengisi kotak kosong di sudut kanan bawah?",
    options: [
      "4 lingkaran hitam",
      "5 lingkaran hitam",
      "5 lingkaran putih",
      "6 lingkaran hitam",
      "3 lingkaran hitam"
    ],
    k: "B",
    image: "figural-images/B4-29.svg",
    boss: 4
  },
  {
    id: 413,
    code: "B4-30",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Perhatikan matriks gambar 3x3 berikut. Jumlah bangun tiap baris bertambah 1 dan tiap kolom berkurang 1. Gambar manakah yang melengkapi kotak kosong?",
    options: [
      "1 segitiga",
      "2 segitiga",
      "3 segitiga",
      "2 lingkaran",
      "2 segi empat"
    ],
    k: "B",
    image: "figural-images/B4-30.svg",
    boss: 4
  },
  {
    id: 414,
    code: "B5-24",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan deret bangun pada gambar berikut. Bangun berputar 45° setiap langkah dan jumlah titik bertambah satu. Bangun manakah yang melanjutkan deret ini?",
    options: [
      "Belah ketupat dengan 4 titik di dalamnya",
      "Segi empat dengan 4 titik di dalamnya",
      "Belah ketupat dengan 3 titik di dalamnya",
      "Segi empat dengan 3 titik di dalamnya",
      "Lingkaran dengan 4 titik di dalamnya"
    ],
    k: "A",
    image: "figural-images/B5-24.svg",
    boss: 5
  },
  {
    id: 415,
    code: "B5-25",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan deret bangun pada gambar berikut. Jumlah sisi dan jumlah titik di dalam bangun mengikuti pola tertentu. Bangun manakah yang melanjutkan deret ini?",
    options: [
      "Segi enam dengan 9 titik",
      "Segi enam dengan 16 titik",
      "Segi tujuh dengan 16 titik",
      "Segi enam dengan 12 titik",
      "Segi lima dengan 16 titik"
    ],
    k: "B",
    image: "figural-images/B5-25.svg",
    boss: 5
  },
  {
    id: 416,
    code: "B5-26",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Perhatikan gambar berikut. Pada pasangan pertama, jumlah sisi bertambah dua, jumlah titik menjadi setengahnya, dan warnanya dibalik (putih menjadi hitam). Bangun manakah yang melengkapi pasangan kedua?",
    options: [
      "Segi lima hitam dengan 4 titik",
      "Segi lima hitam dengan 8 titik",
      "Segi enam hitam dengan 4 titik",
      "Segi lima putih dengan 4 titik",
      "Segi empat hitam dengan 4 titik"
    ],
    k: "A",
    image: "figural-images/B5-26.svg",
    boss: 5
  },
  {
    id: 417,
    code: "B5-27",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Perhatikan gambar berikut. Pada pasangan pertama, jumlah sisi bangun menjadi dua kali lipat, warnanya dibalik (putih menjadi hitam), dan bangun diputar 180°. Bangun manakah yang melengkapi pasangan kedua?",
    options: [
      "Segi delapan hitam menghadap ke atas",
      "Segi delapan hitam menghadap ke bawah",
      "Segi delapan putih menghadap ke bawah",
      "Segi enam hitam menghadap ke bawah",
      "Segi delapan hitam menghadap ke kiri"
    ],
    k: "B",
    image: "figural-images/B5-27.svg",
    boss: 5
  },
  {
    id: 418,
    code: "B5-28",
    cat: "Figural",
    type: "Ketidaksamaan",
    q: "Perhatikan kelima bangun pada gambar berikut. Pada empat bangun, jumlah titik di dalam sama dengan jumlah sisi dikurangi satu. Bangun manakah yang berbeda dari yang lain?",
    options: [
      "Gambar A",
      "Gambar B",
      "Gambar C",
      "Gambar D",
      "Gambar E"
    ],
    k: "E",
    image: "figural-images/B5-28.svg",
    boss: 5
  },
  {
    id: 419,
    code: "B5-29",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Perhatikan matriks 3x3 pada gambar. Gambar manakah yang tepat untuk kotak kosong di sudut kanan bawah?",
    options: [
      "5 segitiga",
      "6 segitiga",
      "6 lingkaran",
      "6 segi empat",
      "4 segitiga"
    ],
    k: "B",
    image: "figural-images/B5-29.svg",
    boss: 5
  },
  {
    id: 420,
    code: "B5-30",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Perhatikan matriks panah 3x3 berikut. Jumlah panah dan arahnya mengikuti pola baris dan kolom. Gambar manakah yang melengkapi kotak kosong?",
    options: [
      "4 panah menghadap ke atas",
      "5 panah menghadap ke atas",
      "5 panah menghadap ke kiri",
      "4 panah menghadap ke kiri",
      "5 panah menghadap ke bawah"
    ],
    k: "B",
    image: "figural-images/B5-30.svg",
    boss: 5
  },
  {
    id: 421,
    code: "B1-01",
    cat: "Verbal",
    type: "Silogisme: Semua + Semua",
    q: "Premis 1: Semua persegi adalah segi empat. Premis 2: Semua segi empat memiliki empat sisi. Kesimpulan yang paling tepat adalah…",
    options: [
      "Semua persegi memiliki empat sisi",
      "Semua segi empat adalah persegi",
      "Sebagian persegi bukan segi empat",
      "Semua yang memiliki empat sisi adalah persegi",
      "Tidak dapat disimpulkan"
    ],
    k: "A",
    image: null,
    boss: 1
  },
  {
    id: 422,
    code: "B1-02",
    cat: "Verbal",
    type: "Silogisme: Jika–Maka — Silogisme Hipotetis",
    q: "Jika Rina rajin belajar, ia lulus ujian. Rina tidak lulus ujian. Kesimpulan yang paling tepat adalah…",
    options: [
      "Rina rajin belajar",
      "Rina tidak rajin belajar",
      "Rina lulus ujian",
      "Tidak dapat disimpulkan",
      "Rina tidak belajar sama sekali"
    ],
    k: "B",
    image: null,
    boss: 1
  },
  {
    id: 423,
    code: "B1-03",
    cat: "Verbal",
    type: "Analogi kata",
    q: "Sapu : Menyapu = Pel : …",
    options: [
      "Air",
      "Lantai",
      "Mengepel",
      "Ember",
      "Kain"
    ],
    k: "C",
    image: null,
    boss: 1
  },
  {
    id: 424,
    code: "B1-04",
    cat: "Verbal",
    type: "Analogi kata",
    q: "Es : Dingin = Api : …",
    options: [
      "Kayu",
      "Asap",
      "Merah",
      "Panas",
      "Bara"
    ],
    k: "D",
    image: null,
    boss: 1
  },
  {
    id: 425,
    code: "B1-05",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Seorang guru mengamati 40 siswa di kelasnya. Sebanyak 32 siswa mendapat nilai baik setelah belajar kelompok. Kesimpulan yang paling didukung data tersebut adalah…",
    options: [
      "Semua siswa di Indonesia mendapat nilai baik dengan belajar kelompok",
      "Belajar kelompok selalu menjamin nilai baik",
      "Siswa yang tidak belajar kelompok pasti mendapat nilai buruk",
      "Belajar kelompok lebih baik daripada semua metode belajar lain",
      "Belajar kelompok tampaknya membantu siswa di kelas itu mendapat nilai baik"
    ],
    k: "E",
    image: null,
    boss: 1
  },
  {
    id: 426,
    code: "B1-06",
    cat: "Verbal",
    type: "Penalaran induktif",
    q: "Harga beras naik tiga kali dalam setahun, dan setiap kali pedagang menaikkan harga jualnya. Kesimpulan yang paling masuk akal adalah…",
    options: [
      "Kenaikan harga beras kemungkinan memengaruhi harga jual pedagang",
      "Harga beras pasti satu-satunya penyebab semua kenaikan harga",
      "Semua pedagang selalu menaikkan harga",
      "Harga beras tidak akan pernah turun",
      "Pedagang tidak pernah rugi"
    ],
    k: "A",
    image: null,
    boss: 1
  },
  {
    id: 427,
    code: "B1-07",
    cat: "Verbal",
    type: "Analitis",
    q: "Empat anak — Ani, Budi, Citra, dan Doni — duduk sebaris dari kiri ke kanan. Ani duduk di ujung kiri. Doni duduk di ujung kanan. Budi duduk tepat di sebelah kanan Ani. Siapa yang duduk di urutan ketiga dari kiri?",
    options: [
      "Ani",
      "Citra",
      "Budi",
      "Doni",
      "Tidak dapat ditentukan"
    ],
    k: "B",
    image: null,
    boss: 1
  },
  {
    id: 428,
    code: "B1-08",
    cat: "Verbal",
    type: "Analitis",
    q: "Tiga kegiatan — Olahraga, Membaca, dan Musik — dilakukan pada hari Senin, Selasa, dan Rabu, satu kegiatan per hari. Olahraga dilakukan pada hari Senin. Musik dilakukan sehari setelah Membaca. Pada hari apa Membaca dilakukan?",
    options: [
      "Senin",
      "Rabu",
      "Selasa",
      "Tidak dapat ditentukan",
      "Kamis"
    ],
    k: "C",
    image: null,
    boss: 1
  },
  {
    id: 429,
    code: "B1-09",
    cat: "Verbal",
    type: "Penguat/pelemah argumen",
    q: "Sekolah X berencana menambah jam olahraga untuk meningkatkan kebugaran siswa. Pernyataan manakah yang PALING menguatkan rencana tersebut?",
    options: [
      "Banyak siswa Sekolah X menyukai olahraga",
      "Jam olahraga membutuhkan lapangan yang luas",
      "Sebagian siswa lebih suka bermain gim",
      "Sekolah Y yang menambah jam olahraga mencatat kebugaran siswanya meningkat dalam satu semester",
      "Sekolah X sudah memiliki banyak kegiatan"
    ],
    k: "D",
    image: null,
    boss: 1
  },
  {
    id: 430,
    code: "B1-10",
    cat: "Verbal",
    type: "Penguat/pelemah argumen",
    q: "Minum air putih yang cukup membuat tubuh tetap sehat. Pernyataan manakah yang PALING melemahkan klaim tersebut?",
    options: [
      "Air putih mudah didapat",
      "Sebagian orang minum air putih tiga kali sehari",
      "Air putih tidak mengandung gula",
      "Banyak orang menyukai air putih",
      "Penelitian menunjukkan orang yang minum cukup air putih sama sehatnya dengan orang yang kurang minum air putih"
    ],
    k: "E",
    image: null,
    boss: 1
  },
  {
    id: 431,
    code: "B1-11",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "25% dari 800 adalah…",
    options: [
      "200",
      "250",
      "150",
      "300",
      "100"
    ],
    k: "A",
    image: null,
    boss: 1
  },
  {
    id: 432,
    code: "B1-12",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "Sebuah buku seharga Rp50.000 dijual dengan diskon 20%. Harga buku setelah diskon adalah…",
    options: [
      "Rp45.000",
      "Rp40.000",
      "Rp35.000",
      "Rp30.000",
      "Rp25.000"
    ],
    k: "B",
    image: null,
    boss: 1
  },
  {
    id: 433,
    code: "B1-13",
    cat: "Numerik",
    type: "Berhitung (selisih kuadrat, pecahan istimewa, persen/diskon)",
    q: "1/4 dari 120 ditambah 1/3 dari 90 adalah…",
    options: [
      "50",
      "55",
      "60",
      "65",
      "70"
    ],
    k: "C",
    image: null,
    boss: 1
  },
  {
    id: 434,
    code: "B1-14",
    cat: "Numerik",
    type: "Deret angka tambah/kurang",
    q: "Perhatikan deret: 7, 12, 17, 22, 27, … Angka berikutnya adalah…",
    options: [
      "29",
      "30",
      "31",
      "32",
      "33"
    ],
    k: "D",
    image: null,
    boss: 1
  },
  {
    id: 435,
    code: "B1-15",
    cat: "Numerik",
    type: "Deret angka kali/bagi",
    q: "Perhatikan deret: 2, 6, 18, 54, 162, … Angka berikutnya adalah…",
    options: [
      "324",
      "400",
      "450",
      "480",
      "486"
    ],
    k: "E",
    image: null,
    boss: 1
  },
  {
    id: 436,
    code: "B1-16",
    cat: "Numerik",
    type: "Deret angka selang-seling/lompat pola",
    q: "Perhatikan deret: 2, 9, 4, 11, 6, 13, 8, … Angka berikutnya adalah…",
    options: [
      "15",
      "10",
      "12",
      "14",
      "17"
    ],
    k: "A",
    image: null,
    boss: 1
  },
  {
    id: 437,
    code: "B1-17",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "A = 20% dari 500; B = 25% dari 400. Hubungan A dan B adalah…",
    options: [
      "A > B",
      "A = B",
      "A < B",
      "Tidak dapat ditentukan",
      "A = 2B"
    ],
    k: "B",
    image: null,
    boss: 1
  },
  {
    id: 438,
    code: "B1-18",
    cat: "Numerik",
    type: "Perbandingan kuantitatif",
    q: "A = 12²; B = 10² + 40. Hubungan A dan B adalah…",
    options: [
      "A < B",
      "A = B",
      "A > B",
      "Tidak dapat ditentukan",
      "A = B + 10"
    ],
    k: "C",
    image: null,
    boss: 1
  },
  {
    id: 439,
    code: "B1-19",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Sebuah bus menempuh jarak 150 km dalam 3 jam. Dengan kecepatan yang sama, jarak yang ditempuh dalam 5 jam adalah…",
    options: [
      "200 km",
      "220 km",
      "230 km",
      "250 km",
      "270 km"
    ],
    k: "D",
    image: null,
    boss: 1
  },
  {
    id: 440,
    code: "B1-20",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Umur ayah 3 kali umur anaknya. Jumlah umur mereka 36 tahun. Umur anak adalah…",
    options: [
      "6 tahun",
      "7 tahun",
      "8 tahun",
      "10 tahun",
      "9 tahun"
    ],
    k: "E",
    image: null,
    boss: 1
  },
  {
    id: 441,
    code: "B1-21",
    cat: "Numerik",
    type: "Soal cerita (kecepatan/jarak, tabungan, perbandingan senilai/berbalik nilai, umur)",
    q: "Harga 4 buku tulis adalah Rp20.000. Harga 7 buku tulis yang sama adalah…",
    options: [
      "Rp35.000",
      "Rp30.000",
      "Rp32.000",
      "Rp40.000",
      "Rp28.000"
    ],
    k: "A",
    image: null,
    boss: 1
  },
  {
    id: 442,
    code: "B1-22",
    cat: "Numerik",
    type: "Kecukupan data",
    q: "Berapakah nilai x? (1) 2x + 6 = 18. (2) x lebih besar dari 5.",
    options: [
      "Pernyataan (1) SAJA cukup DAN pernyataan (2) SAJA cukup.",
      "Pernyataan (1) SAJA cukup, sedangkan pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (2) SAJA cukup, sedangkan pernyataan (1) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup, sedangkan SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) dan (2) TIDAK cukup."
    ],
    k: "B",
    image: null,
    boss: 1
  },
  {
    id: 443,
    code: "B1-23",
    cat: "Numerik",
    type: "Deret/pola dalam tabel",
    q: "Perhatikan tabel berikut. Baris 1: 3, 6, 9. Baris 2: 4, 7, 10. Baris 3: 5, 8, ?. Setiap baris bertambah 3 dari kolom ke kolom. Nilai ? adalah…",
    options: [
      "9",
      "10",
      "11",
      "12",
      "13"
    ],
    k: "C",
    image: null,
    boss: 1
  },
  {
    id: 444,
    code: "B1-24",
    cat: "Figural",
    type: "Serial",
    q: "Amati deret lingkaran pada gambar berikut. Jumlah titik di dalam lingkaran bertambah satu setiap langkah. Lingkaran manakah yang melanjutkan deret ini?",
    options: [
      "Lingkaran dengan 2 titik di dalamnya",
      "Lingkaran dengan 3 titik di dalamnya",
      "Lingkaran dengan 5 titik di dalamnya",
      "Lingkaran dengan 4 titik di dalamnya",
      "Lingkaran dengan 6 titik di dalamnya"
    ],
    k: "D",
    image: "figural-images/B1-24.svg",
    boss: 1
  },
  {
    id: 445,
    code: "B1-25",
    cat: "Figural",
    type: "Serial",
    q: "Perhatikan deret bangun pada gambar berikut. Jumlah sisi bangun bertambah satu setiap langkah. Bangun manakah yang melanjutkan deret ini?",
    options: [
      "Segitiga",
      "Segi empat",
      "Segi lima",
      "Segi tujuh",
      "Segi enam"
    ],
    k: "E",
    image: "figural-images/B1-25.svg",
    boss: 1
  },
  {
    id: 446,
    code: "B1-26",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Perhatikan gambar berikut. Pada pasangan pertama, jumlah sisi bangun bertambah satu. Bangun manakah yang melengkapi pasangan kedua?",
    options: [
      "Segi enam",
      "Segi lima",
      "Segi tujuh",
      "Segi empat",
      "Lingkaran"
    ],
    k: "A",
    image: "figural-images/B1-26.svg",
    boss: 1
  },
  {
    id: 447,
    code: "B1-27",
    cat: "Figural",
    type: "Analogi gambar",
    q: "Perhatikan gambar berikut. Pada pasangan pertama, warna bangun dibalik (putih menjadi hitam). Bangun manakah yang melengkapi pasangan kedua?",
    options: [
      "Segitiga putih",
      "Segitiga hitam",
      "Lingkaran hitam",
      "Segi empat hitam",
      "Segitiga putih dengan titik"
    ],
    k: "B",
    image: "figural-images/B1-27.svg",
    boss: 1
  },
  {
    id: 448,
    code: "B1-28",
    cat: "Figural",
    type: "Ketidaksamaan",
    q: "Perhatikan kelima bangun berikut. Empat bangun memiliki jumlah sisi yang sama. Bangun manakah yang berbeda dari yang lain?",
    options: [
      "Gambar A",
      "Gambar B",
      "Gambar C",
      "Gambar D",
      "Gambar E"
    ],
    k: "C",
    image: "figural-images/B1-28.svg",
    boss: 1
  },
  {
    id: 449,
    code: "B1-29",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Perhatikan matriks bintang 3x3 berikut. Jumlah bintang pada setiap baris selalu sama. Berapa bintang yang mengisi kotak kosong di sudut kanan bawah?",
    options: [
      "1 bintang",
      "3 bintang",
      "4 bintang",
      "2 bintang",
      "5 bintang"
    ],
    k: "D",
    image: "figural-images/B1-29.svg",
    boss: 1
  },
  {
    id: 450,
    code: "B1-30",
    cat: "Figural",
    type: "Penalaran matriks",
    q: "Perhatikan matriks lingkaran 3x3 berikut. Setiap baris memuat 1, 2, dan 3 lingkaran. Berapa lingkaran yang mengisi kotak kosong di sudut kanan bawah?",
    options: [
      "1 lingkaran",
      "3 lingkaran",
      "4 lingkaran",
      "5 lingkaran",
      "2 lingkaran"
    ],
    k: "E",
    image: "figural-images/B1-30.svg",
    boss: 1
  }
];
});
