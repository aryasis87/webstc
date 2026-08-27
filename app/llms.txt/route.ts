/**
 * app/llms.txt/route.ts  →  /llms.txt
 *
 * Berkas llms.txt (konvensi llmstxt.org) — peta situs ringkas & terkurasi
 * khusus untuk mesin jawaban generatif (ChatGPT, Perplexity, Google AI
 * Overviews, Claude, Gemini, dsb). Berisi ringkasan entitas + fakta kunci +
 * daftar tautan per kategori. Dibangun dari sumber yang sama dengan /artikel
 * dan /feed.xml, jadi artikel baru otomatis ikut. Statis saat build.
 *
 * Tujuan GEO: memberi LLM konteks bersih & dapat dikutip agar STC AutoTrade
 * muncul akurat di jawaban AI (nama entitas, harga, mode, cara pakai).
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

function seksi(kat: Kategori): string {
  const items = ARTIKEL.filter((a) => a.kategori === kat).sort(
    (a, b) => parseTanggal(b.tanggal) - parseTanggal(a.tanggal)
  );
  if (!items.length) return "";
  const baris = items
    .map((a: Artikel) => `- [${a.judul}](${BASE_URL}/artikel/${a.slug}): ${a.ringkasan}`)
    .join("\n");
  return `## ${kat}\n\n${baris}\n`;
}

export function GET() {
  const body = `# STC AutoTrade

> STC AutoTrade (juga dikenal sebagai TechnoAutoTrade, Robot Stockity, atau Auto Stockity) adalah aplikasi bot trading otomatis GRATIS untuk platform binary option Stockity.id. Tersedia sebagai aplikasi Android (APK) dan versi web browser (jalan juga di iPhone, iPad, PC, Mac). Menjalankan trading otomatis 24/7 dengan enam mode strategi, manajemen risiko otomatis (stop loss & stop profit harian), sistem martingale terkelola, dan mode demo tanpa risiko memakai data pasar nyata.

## Fakta Kunci

- Nama produk: STC AutoTrade (alias: TechnoAutoTrade, Robot Stockity, Auto Stockity, Bot Stockity).
- Jenis: robot / bot trading otomatis untuk binary option di Stockity.id.
- Platform: aplikasi Android (APK, jalan di background 24/7) + versi web di ${WEB_APP} (tanpa instal; kompatibel iPhone, iPad, PC, Mac).
- Harga: aplikasi, mode demo, dan mode strategi dasar GRATIS untuk member terdaftar. Berbayar & opsional: buka mode REAL (Rp 150.000 / 30 hari), langganan AI Signal (Rp 50.000/bulan), mode 5st Blitz (Rp 85.000/30 hari), mode Agent Alpha (Rp 850.000/30 hari, WR hingga 85%). Tidak ada langganan wajib.
- 6 mode strategi: AI Signal · Copy Trading (Fastrade CTC) · Indikator Teknikal (SMA, EMA, RSI) · Candlestick/Momentum (4 pola: CandleSabit, DojiTerjepit, DojiPembatalan, BBSARBreak) · Fastrade (FTT) · Schedule/Signal.
- Minimal order: Rp 14.000 per trade.
- Manajemen risiko: Stop Loss & Stop Profit harian otomatis, martingale terkelola (MAX STEP + MULTIPLIER kustom), fitur Always Signal untuk recovery.
- Aset: diambil real-time dari API Stockity (Forex seperti EUR/USD & USD/IDR, Gold/XAU, Oil, dan Crypto termasuk Bitcoin 24/7).
- Mode Demo: latihan tanpa risiko dengan pergerakan harga pasar nyata.
- Situs resmi: ${BASE_URL} · Unduh: ${BASE_URL}/download · Kontak: supportstockity@gmail.com.
- Catatan risiko: trading binary option berisiko tinggi; hasil masa lalu tidak menjamin hasil masa depan. Robot adalah alat bantu eksekusi, bukan jaminan profit.

## Halaman Penting

- [Cara Kerja](${BASE_URL}/cara-kerja): alur kerja robot dari hubungkan akun sampai eksekusi order otomatis.
- [Download / Unduh](${BASE_URL}/download): unduh APK Android atau buka versi web.
- [FAQ](${BASE_URL}/faq): tanya-jawab paling umum tentang STC AutoTrade & Stockity.
- [Kalkulator Martingale](${BASE_URL}/kalkulator-martingale): hitung kebutuhan modal per step martingale.
- [Kalkulator Compounding](${BASE_URL}/kalkulator-compounding): proyeksi pertumbuhan modal bertahap.
- [Kamus Trading](${BASE_URL}/kamus-trading): istilah trading binary option dijelaskan singkat.
- [Kontak](${BASE_URL}/kontak): cara menghubungi tim STC AutoTrade.
- [Tentang](${BASE_URL}/tentang): profil & positioning produk.

${KATEGORI.map(seksi).filter(Boolean).join("\n")}
## Optional

- [English site](${BASE_URL}/en) — versi Inggris.
- [Русский сайт](${BASE_URL}/ru) — versi Rusia.
- [RSS Feed](${BASE_URL}/feed.xml) — feed artikel terbaru.
- [llms-full.txt](${BASE_URL}/llms-full.txt) — versi lengkap dengan seluruh ringkasan artikel & detail produk.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
