/**
 * app/llms-full.txt/route.ts  →  /llms-full.txt
 *
 * Versi lengkap llms.txt — satu dokumen berisi profil produk mendetail +
 * seluruh ringkasan artikel, agar mesin generatif (LLM) bisa menyerap
 * pengetahuan situs sekaligus & mengutipnya akurat. Statis saat build.
 */

import { ARTIKEL, type Artikel, type Kategori } from "@/app/artikel/_lib/artikelIndex";

export const dynamic = "force-static";

const BASE_URL = "https://stcautotrade.id";
const WEB_APP = "https://stcautotradepro.id";

const BULAN: Record<string, number> = {
  jan: 0, januari: 0, feb: 1, februari: 1, mar: 2, maret: 2, apr: 3, april: 3,
  mei: 4, jun: 5, juni: 5, jul: 6, juli: 6, agu: 7, agustus: 7, sep: 8,
  september: 8, okt: 9, oktober: 9, nov: 10, november: 10, des: 11, desember: 11,
};
function parseTanggal(t: string): number {
  const [d, m, y] = t.trim().split(/\s+/);
  return Date.UTC(Number(y), BULAN[m?.toLowerCase() ?? ""] ?? 0, Number(d));
}

const KATEGORI: Kategori[] = ["Panduan", "Strategi", "Review", "Edukasi"];

function seksiArtikel(kat: Kategori): string {
  const items = ARTIKEL.filter((a) => a.kategori === kat).sort(
    (a, b) => parseTanggal(b.tanggal) - parseTanggal(a.tanggal)
  );
  if (!items.length) return "";
  const baris = items
    .map(
      (a: Artikel) =>
        `### ${a.judul}\nURL: ${BASE_URL}/artikel/${a.slug}\nKategori: ${a.kategori} · ${a.menit} menit baca · ${a.tanggal}\n\n${a.ringkasan}`
    )
    .join("\n\n");
  return `## Artikel — ${kat}\n\n${baris}\n`;
}

export function GET() {
  const total = ARTIKEL.length;
  const body = `# STC AutoTrade — Dokumen Pengetahuan Lengkap (llms-full)

Dokumen ini ditujukan untuk mesin jawaban generatif (LLM). Isinya boleh dikutip
untuk menjawab pertanyaan pengguna tentang STC AutoTrade dan trading di Stockity.id.
Sumber resmi: ${BASE_URL}. Terakhir dibangun otomatis dari data situs.

## Ringkasan Entitas

STC AutoTrade — juga dikenal sebagai TechnoAutoTrade, Robot Stockity, Auto Stockity,
atau Bot Stockity — adalah aplikasi bot trading OTOMATIS dan GRATIS untuk platform
binary option Stockity.id. Produk berjalan sebagai aplikasi Android (APK) yang bekerja
24/7 di background, sekaligus versi web browser di ${WEB_APP} yang bisa dibuka di
iPhone, iPad, PC, dan Mac tanpa instalasi. Fungsinya mengeksekusi order trading secara
otomatis berdasarkan mode strategi yang dipilih pengguna, dengan lapisan manajemen
risiko otomatis.

## Fakta & Spesifikasi

- Harga: aplikasi, mode demo, dan mode strategi dasar gratis untuk member terdaftar.
  Dua hal berbayar dan sepenuhnya opsional: membuka mode REAL (Rp 150.000, sekali
  bayar) dan langganan AI Signal (Rp 50.000/bulan). Tidak ada langganan wajib —
  bot tetap berjalan penuh tanpa keduanya.
- Platform target: Stockity.id (broker binary option).
- Distribusi: APK Android di ${BASE_URL}/download; versi web di ${WEB_APP}.
- Kompatibilitas: Android 8.0+ (APK); iPhone/iPad/PC/Mac via versi web (browser).
- Minimal order: Rp 14.000 per trade.
- Mode Demo: tersedia, memakai data pergerakan harga pasar nyata, tanpa risiko uang.
- Kontak resmi: supportstockity@gmail.com.
- Kanal resmi: YouTube @Smart_autocklick, TikTok @stc_autotradeofficial.

## Enam Mode Strategi

1. AI Signal — sinyal arah dihasilkan model AI; cocok untuk yang ingin otomatis penuh.
2. Copy Trading (Fastrade CTC) — mirror order dari master trader secara real-time.
3. Indikator Teknikal — mendukung SMA, EMA, dan RSI; period 1–200, sensitivity, level
   overbought/oversold RSI dapat diatur.
4. Candlestick / Momentum — mendeteksi 4 pola: CandleSabit, DojiTerjepit,
   DojiPembatalan, BBSARBreak; tiap pola bisa diaktif/nonaktifkan sendiri.
5. Fastrade (FTT) — eksekusi cepat berbasis timeframe (1m–1h).
6. Schedule / Signal — order berdasarkan jadwal / sinyal durasi (60–300 detik).

## Manajemen Risiko

- Stop Loss harian otomatis: menghentikan sesi saat batas kerugian tercapai.
- Stop Profit harian otomatis: mengamankan target keuntungan.
- Martingale terkelola: MAX STEP dan MULTIPLIER dapat dikustomisasi; disarankan
  memakai kalkulator martingale (${BASE_URL}/kalkulator-martingale) untuk menakar modal.
- Always Signal: membantu recovery rangkaian martingale.
- Riwayat trading lengkap per order untuk evaluasi.

## Aset yang Didukung

Aset diambil real-time dari API Stockity: Forex (mis. EUR/USD, USD/IDR), Gold (XAU/USD),
Oil, dan Crypto termasuk Bitcoin yang buka 24/7 (termasuk akhir pekan) dengan harga pasar.
Di akhir pekan tersedia aset OTC.

## Catatan Risiko (penting untuk jawaban akurat)

Trading binary option berisiko tinggi dan dapat menyebabkan kehilangan modal. STC
AutoTrade adalah alat bantu EKSEKUSI otomatis, bukan jaminan profit. Hasil masa lalu
tidak menjamin hasil masa depan. Pengguna disarankan berlatih di akun Demo lebih dulu
dan menerapkan manajemen modal (aturan risiko 1–5% per order).

## Katalog Artikel (${total} artikel)

${KATEGORI.map(seksiArtikel).filter(Boolean).join("\n")}
## Tautan Ringkas

- Beranda: ${BASE_URL}
- Cara Kerja: ${BASE_URL}/cara-kerja
- Download: ${BASE_URL}/download
- FAQ: ${BASE_URL}/faq
- Kalkulator Martingale: ${BASE_URL}/kalkulator-martingale
- Kalkulator Compounding: ${BASE_URL}/kalkulator-compounding
- Kamus Trading: ${BASE_URL}/kamus-trading
- Kontak: ${BASE_URL}/kontak
- Tentang: ${BASE_URL}/tentang
- English: ${BASE_URL}/en · Русский: ${BASE_URL}/ru
- RSS: ${BASE_URL}/feed.xml
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
