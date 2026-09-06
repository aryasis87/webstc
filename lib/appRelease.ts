// lib/appRelease.ts
// ─────────────────────────────────────────────────────────────────────
// SATU sumber untuk versi APK STC AutoTrade.
//
// Dibuat 2026-08-12 meniru koalaspro-web/lib/appRelease.ts. Sebelumnya angka
// versi dan tanggal ditulis lepas di beberapa berkas, dan `dateModified` pada
// schema sempat basi dua bulan (2026-06-07) tanpa ada yang sadar.
//
// CARA RILIS:
//   1. Tambahkan entri BARU di paling atas RILIS.
//   2. Naikkan versionCode di v2stc/src/lib/appVersion.ts DAN
//      v2stc/android/app/build.gradle — keduanya harus sama.
//   3. Salin APK ke public/StcAutoTrade.apk.
// ukuranByte diisi dari ukuran APK sebenarnya; dipakai menampilkan "x,x MB"
// agar tidak mengarang angka.
// ─────────────────────────────────────────────────────────────────────

export interface Rilis {
  versi: string;
  versionCode: number;
  /** ISO, dipakai schema dateModified. */
  tanggal: string;
  /** Untuk ditampilkan ke pengunjung. */
  tanggalTampil: string;
  ukuranByte: number;
  perubahan: string[];
}

export const RILIS: Rilis[] = [
  {
    versi: '5.13',
    versionCode: 33,
    tanggal: '2026-09-06',
    tanggalTampil: '6 September 2026',
    ukuranByte: 16460662,
    perubahan: [
      'Pemberitahuan di dashboard bila pembayaran aktivasi Anda ditolak (tidak valid): akses fitur dinonaktifkan dan muncul pesan agar Anda bisa mengajukan ulang dengan bukti yang benar.',
    ],
  },
  {
    versi: '5.12',
    versionCode: 32,
    tanggal: '2026-09-06',
    tanggalTampil: '6 September 2026',
    ukuranByte: 16460238,
    perubahan: [
      'Stop Loss & Target Profit kini berlaku HARIAN (lintas-sesi) di semua mode — tetap aktif walau bot dihentikan lalu dijalankan lagi di hari yang sama.',
      'Fitur baru: Trailing Profit (kunci keuntungan saat turun dari puncak) dan Stop Loss Ketat (bot berhenti sebelum menembus batas rugi).',
      'Harga aktivasi diperbarui: Mode REAL Rp 180.000, AI Signal Rp 100.000/bulan.',
    ],
  },
  {
    versi: '5.11',
    versionCode: 31,
    tanggal: '2026-08-26',
    tanggalTampil: '26 Agustus 2026',
    ukuranByte: 14971358,
    perubahan: [
      'Header halaman aktivasi dirapikan menjadi teks saja (ikon di judul dihapus) agar tampil lebih premium.',
    ],
  },
  {
    versi: '5.10',
    versionCode: 30,
    tanggal: '2026-08-26',
    tanggalTampil: '26 Agustus 2026',
    ukuranByte: 14972286,
    perubahan: [
      'Halaman aktivasi kini memeriksa ID akun secara langsung: begitu 9 angka terisi, muncul tanda centang bila ID ditemukan, atau pemberitahuan bila tidak ada.',
    ],
  },
  {
    versi: '5.9',
    versionCode: 29,
    tanggal: '2026-08-26',
    tanggalTampil: '26 Agustus 2026',
    ukuranByte: 14971666,
    perubahan: [
      'Ikon di header halaman aktivasi diganti dengan ikon kustom yang lebih premium (bukan ikon template).',
      'Perbaikan: halaman Aktivasi 5st kini bisa dibuka langsung tanpa harus login dulu, sama seperti aktivasi REAL & AI Signal.',
    ],
  },
  {
    versi: '5.8',
    versionCode: 28,
    tanggal: '2026-08-26',
    tanggalTampil: '26 Agustus 2026',
    ukuranByte: 14970762,
    perubahan: [
      'Halaman aktivasi (REAL / AI Signal / 5st) didesain ulang lebih premium: kartu ringkasan pesanan (harga + manfaat), indikator langkah, dan tata letak yang lebih rapi.',
    ],
  },
  {
    versi: '5.7',
    versionCode: 27,
    tanggal: '2026-08-26',
    tanggalTampil: '26 Agustus 2026',
    ukuranByte: 14977338,
    perubahan: [
      'Mode Fast Reversal kini eksklusif: hanya tampil dan bisa dipilih oleh akun yang sudah teraktivasi — tidak lagi terlihat untuk pengguna umum.',
    ],
  },
  {
    versi: '5.6',
    versionCode: 26,
    tanggal: '2026-08-26',
    tanggalTampil: '26 Agustus 2026',
    ukuranByte: 14977422,
    perubahan: [
      'Saat entry KALAH dan lanjut martingale, kartu hasil kini menampilkan langkah martingale-nya (mis. "Lanjut Martingale · langkah 2" + lencana MG) — bukan cuma menang/kalah.',
    ],
  },
  {
    versi: '5.5',
    versionCode: 25,
    tanggal: '2026-08-26',
    tanggalTampil: '26 Agustus 2026',
    ukuranByte: 14977070,
    perubahan: [
      'Mode 5st (Blitz 5 detik): hasil menang/kalah kini muncul sub-detik tepat saat order tutup — sebelumnya sedikit tertunda karena siklusnya yang pendek.',
    ],
  },
  {
    versi: '5.4',
    versionCode: 24,
    tanggal: '2026-08-26',
    tanggalTampil: '26 Agustus 2026',
    ukuranByte: 14977134,
    perubahan: [
      'Dashboard jauh lebih responsif saat mode berjalan: hasil menang/kalah entry kini muncul hampir instan begitu hitung mundur selesai (tak lagi telat & balapan dengan entry berikutnya).',
      'Today profit / PnL mode ikut diperbarui secara instan setelah hasil keluar.',
    ],
  },
  {
    versi: '5.3',
    versionCode: 23,
    tanggal: '2026-08-25',
    tanggalTampil: '25 Agustus 2026',
    ukuranByte: 14976922,
    perubahan: [
      'Panduan dirapikan: tabel perbandingan Aplikasi vs Web dihapus — diganti catatan singkat bahwa bot berjalan di server (aplikasi boleh ditutup saat sesi jalan).',
    ],
  },
  {
    versi: '5.2',
    versionCode: 22,
    tanggal: '2026-08-25',
    tanggalTampil: '25 Agustus 2026',
    ukuranByte: 14980670,
    perubahan: [
      'Pesan "Manajemen Modal" saat masuk kini tampil sebagai gambar poster yang lebih jelas, cukup ditutup dengan tombol X.',
    ],
  },
  {
    versi: '5.1',
    versionCode: 21,
    tanggal: '2026-08-25',
    tanggalTampil: '25 Agustus 2026',
    ukuranByte: 13186433,
    perubahan: [
      'Panduan diperbarui: langkah "Mendaftar akun" yang sudah tidak berlaku diganti "Masuk ke akun" (login dengan akun Stockity yang sudah ada).',
      'Keterangan aplikasi vs web disesuaikan: bot kini berjalan di server untuk keduanya, dan mode REAL berlaku di web maupun aplikasi setelah aktivasi.',
    ],
  },
  {
    versi: '5.0',
    versionCode: 20,
    tanggal: '2026-08-25',
    tanggalTampil: '25 Agustus 2026',
    ukuranByte: 13187081,
    perubahan: [
      'Tombol daftar akun dihapus dari halaman masuk — pendaftaran akun mandiri sudah tidak berlaku.',
      'QRIS pembayaran kini bisa langsung diunduh atau dibagikan dari halaman aktivasi (termasuk di aplikasi Android).',
      'Popup mode REAL dirapikan: pembukaan REAL hanya lewat aktivasi berbayar.',
    ],
  },
  {
    versi: '4.9',
    versionCode: 19,
    tanggal: '2026-08-21',
    tanggalTampil: '21 Agustus 2026',
    ukuranByte: 13180469,
    perubahan: [
      'Panduan diperbarui: mode Fast Reversal dan 5st (blitz 5 detik) kini dijelaskan lengkap, plus seksi baru Akses & aktivasi.',
      'Seksi Akses & aktivasi mencantumkan cara membuka akun REAL (Rp 180.000 / 30 hari), langganan AI Signal (Rp 100.000/bulan), add-on 5st (Rp 85.000/bulan), dan Agent Alpha (Rp 850.000 / 30 hari).',
    ],
  },
  {
    versi: '4.7',
    versionCode: 17,
    tanggal: '2026-08-14',
    tanggalTampil: '14 Agustus 2026',
    ukuranByte: 14390541,
    perubahan: [
      'Dashboard disegarkan — kartu keuntungan hari ini dan kartu aset/saldo kini bertint sudut lembut (hijau saat untung, merah saat rugi), tampil lebih rapi dan konsisten.',
    ],
  },
  {
    versi: '4.6',
    versionCode: 16,
    tanggal: '2026-08-14',
    tanggalTampil: '14 Agustus 2026',
    ukuranByte: 14390429,
    perubahan: [
      'Tampilan halaman profil disegarkan — avatar, kartu saldo, dan judul dibuat lebih rapi dan konsisten dengan gaya aplikasi.',
      'Panel admin di profil dilengkapi (khusus admin): aktivasi mode REAL kini bisa dinonaktifkan dan menempel ID dari papan klip, serta pengelolaan AI Signal dapat difilter dan diproses sekaligus.',
    ],
  },
  {
    versi: '4.5',
    versionCode: 15,
    tanggal: '2026-08-13',
    tanggalTampil: '13 Agustus 2026',
    ukuranByte: 14389137,
    perubahan: [
      'Perbaikan harga aktivasi pada tampilan berbahasa Inggris, Rusia, dan Melayu — sebelumnya masih menampilkan harga lama; kini seragam Rp 180.000 (mode REAL) dan Rp 100.000/bulan (AI Signal) di semua bahasa.',
    ],
  },
  {
    versi: '4.4',
    versionCode: 14,
    tanggal: '2026-08-13',
    tanggalTampil: '13 Agustus 2026',
    ukuranByte: 14389261,
    perubahan: [
      'Tampilan kode promo dihapus dari dashboard — programnya sudah tidak berjalan, jadi tidak ada lagi kode yang ditawarkan tapi tak bisa dipakai.',
      'Admin biasa kini benar-benar mendapat seluruh fitur pengelolaan, kecuali panel whitelist yang tetap khusus super admin.',
    ],
  },
  {
    versi: '4.3',
    versionCode: 13,
    tanggal: '2026-08-12',
    tanggalTampil: '12 Agustus 2026',
    ukuranByte: 14389589,
    perubahan: [
      'Halaman panduan pindah ke /panduan; tombol "Buka platform Stockity" kini membuka Stockity DI DALAM aplikasi, tidak lagi melempar ke peramban luar.',
      'Warna seluruh aplikasi disatukan lewat design system — sebelumnya beberapa halaman memakai hijau yang sedikit berbeda.',
      'Halaman riwayat tidak lagi dirender ulang dari nol saat dibuka (perbaikan hidrasi) — terasa lebih ringan di perangkat lemah.',
      'Pendaftaran akun baru dipastikan lewat aplikasi; pengguna diberi tahu di muka, bukan setelah mengisi formulir.',
    ],
  },
  {
    versi: '4.2',
    versionCode: 12,
    tanggal: '2026-08-03',
    tanggalTampil: '3 Agustus 2026',
    ukuranByte: 14300000,
    perubahan: [
      'Penyempurnaan mode dan perbaikan kestabilan.',
    ],
  },
];

export const RILIS_TERBARU = RILIS[0];

/** Ukuran APK dalam MB, satu desimal — mis. "13,7 MB". */
export function ukuranMB(byte: number = RILIS_TERBARU.ukuranByte): string {
  return (byte / 1048576).toFixed(1).replace('.', ',') + ' MB';
}
