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
      'Perbaikan harga aktivasi pada tampilan berbahasa Inggris, Rusia, dan Melayu — sebelumnya masih menampilkan harga lama; kini seragam Rp 150.000 (mode REAL) dan Rp 50.000/bulan (AI Signal) di semua bahasa.',
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
