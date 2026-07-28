/**
 * app/kamus-trading/page.tsx
 *
 * Kamus istilah trading binary option & Stockity — Server Component.
 * Menarget puluhan query long-tail "apa itu <istilah>" dalam satu halaman:
 * apa itu payout, apa itu martingale, apa itu candlestick, dll.
 * Schema: DefinedTermSet + BreadcrumbList.
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Kamus Istilah Trading Binary Option & Stockity (A–Z) — 37 Istilah",
  description:
    "Kamus lengkap istilah trading binary option dan Stockity untuk pemula — payout, martingale, candlestick, stop loss, win rate, OTC, dan 31 istilah lain dijelaskan dengan bahasa sederhana.",
  keywords: [
    "kamus trading",
    "istilah trading binary option",
    "istilah stockity",
    "apa itu payout trading",
    "apa itu martingale",
    "apa itu candlestick",
    "apa itu stop loss",
    "apa itu win rate",
    "apa itu otc trading",
    "istilah trading untuk pemula",
    "glosarium trading",
    "arti istilah binary option",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/kamus-trading",
  },
  openGraph: {
    title: "Kamus Istilah Trading Binary Option & Stockity (A–Z)",
    description:
      "34 istilah trading dijelaskan dengan bahasa sederhana — dari payout dan martingale sampai win rate dan OTC.",
    url: "https://stcautotrade.id/kamus-trading",
    type: "website",
    images: [
      {
        url: "https://stcautotrade.id/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Kamus Istilah Trading Binary Option & Stockity — STC AutoTrade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamus Istilah Trading Binary Option & Stockity (A–Z)",
    description: "34 istilah trading dijelaskan dengan bahasa sederhana untuk pemula.",
    images: ["https://stcautotrade.id/og-image.webp"],
  },
};

/* ── Data Istilah ─────────────────────────────────────────────── */

interface Istilah {
  term: string;
  def: string;
}

const KELOMPOK: { huruf: string; items: Istilah[] }[] = [
  {
    huruf: "A–B",
    items: [
      { term: "Aset (Asset)", def: "Instrumen yang diperdagangkan — pasangan mata uang (EUR/USD), komoditas (emas), indeks saham, atau kripto. Setiap aset punya payout dan karakter pergerakan berbeda." },
      { term: "Akun Demo", def: "Mode latihan dengan saldo virtual dan data pasar nyata. Semua fitur berjalan normal tanpa risiko uang asli — tempat wajib pemula memulai." },
      { term: "Akun Real", def: "Akun dengan uang asli hasil deposit. Profit di akun real bisa ditarik (withdraw) ke rekening bank atau e-wallet." },
      { term: "Binary Option", def: "Jenis trading di mana Anda memprediksi arah harga (naik/turun) dalam durasi tertentu. Hasilnya hanya dua kemungkinan: menang (dapat payout) atau kalah (nominal hangus) — karena itu disebut 'binary'." },
      { term: "Bot / Robot Trading", def: "Perangkat lunak yang mengeksekusi order secara otomatis berdasarkan strategi tertentu — seperti STC AutoTrade untuk platform Stockity. Menghilangkan faktor emosi dan bisa bekerja 24 jam." },
      { term: "Break Even", def: "Kondisi impas — total profit sama dengan total loss dalam satu periode. Win rate break-even binary option biasanya sekitar 55% (tergantung payout)." },
    ],
  },
  {
    huruf: "C–E",
    items: [
      { term: "Candlestick", def: "Bentuk grafik harga yang menampilkan harga buka, tutup, tertinggi, dan terendah dalam satu periode. Pola candlestick (Doji, Hammer, Engulfing) sering dipakai untuk memprediksi arah berikutnya." },
      { term: "Copy Trading (CTC)", def: "Metode trading dengan menyalin sinyal atau posisi trader lain secara otomatis. Di STC AutoTrade tersedia sebagai mode CTC — cocok untuk pemula yang belum bisa analisis sendiri." },
      { term: "Deposit", def: "Menyetor uang ke akun trading. Deposit minimum Stockity relatif kecil, namun manajemen risiko yang sehat menyarankan buffer lebih untuk siklus martingale." },
      { term: "Doji", def: "Pola candlestick di mana harga buka dan tutup hampir sama — menandakan keraguan pasar dan sering mendahului pembalikan arah." },
      { term: "Durasi (Expiry Time)", def: "Batas waktu berlakunya prediksi Anda — 1 menit, 5 menit, 1 jam, dst. Saat durasi berakhir, posisi ditutup dan hasilnya ditentukan." },
      { term: "Entry", def: "Momen membuka posisi/order. 'Entry point' yang baik adalah inti dari hampir semua strategi trading." },
    ],
  },
  {
    huruf: "F–L",
    items: [
      { term: "Fastrade", def: "Mode STC AutoTrade untuk trading frekuensi tinggi — bot membaca momentum pada timeframe pendek (1m–1h) dan mengeksekusi order mengikuti arah yang terdeteksi." },
      { term: "Flat Bet (Fixed Nominal)", def: "Strategi nominal tetap — jumlah order sama di setiap posisi, apapun hasil sebelumnya. Paling sederhana dan paling mudah dikontrol risikonya." },
      { term: "FOMO (Fear of Missing Out)", def: "Rasa takut ketinggalan peluang yang mendorong entry terburu-buru tanpa analisis. Salah satu emosi paling merusak dalam trading." },
      { term: "Indikator Teknikal", def: "Perhitungan matematis dari data harga untuk membantu keputusan — SMA, EMA, RSI, Bollinger Bands. STC AutoTrade membaca indikator ini otomatis di mode Indicator." },
      { term: "Likuiditas", def: "Seberapa ramai sebuah aset diperdagangkan. Likuiditas tinggi = pergerakan lebih tegas dan pola teknikal lebih dapat diandalkan. Paling tinggi saat overlap sesi Eropa–Amerika (19.00–23.00 WIB)." },
      { term: "Loss", def: "Order yang berakhir salah prediksi — nominal order hangus. Kebalikan dari win." },
    ],
  },
  {
    huruf: "M–P",
    items: [
      { term: "Martingale", def: "Strategi manajemen modal: setelah loss, nominal order berikutnya dikalikan multiplier agar satu kemenangan menutup semua kerugian sebelumnya. Berisiko tinggi tanpa batasan step — baca panduan lengkapnya di artikel strategi martingale." },
      { term: "Max Step", def: "Batas maksimal langkah kompensasi martingale. Setelah max step tercapai, nominal kembali ke awal. Maksimal 3 step disarankan untuk pemula." },
      { term: "Multiplier", def: "Faktor pengali nominal pada martingale. Multiplier 2,5× berarti order berikutnya 2,5 kali lipat setelah loss. Umum digunakan: 2–2,5× (konservatif)." },
      { term: "OTC (Over The Counter)", def: "Aset yang tetap tersedia saat pasar reguler tutup (akhir pekan). Karakter pergerakannya berbeda dari pasar reguler — uji strateginya secara terpisah." },
      { term: "Overtrade", def: "Trading berlebihan — terlalu banyak order dalam satu sesi, biasanya didorong emosi (mengejar loss atau keserakahan setelah win). Dicegah dengan stop loss/profit harian." },
      { term: "Payout", def: "Persentase keuntungan jika prediksi benar. Payout 80% artinya order Rp 100.000 yang menang menghasilkan profit Rp 80.000. Setiap aset punya payout berbeda yang berubah-ubah." },
      { term: "Price Action", def: "Analisis murni dari pergerakan harga (pola candle, level support/resistance) tanpa indikator tambahan." },
    ],
  },
  {
    huruf: "R–S",
    items: [
      { term: "Resistance", def: "Level harga di mana kenaikan cenderung tertahan — 'atap' psikologis pasar. Kebalikan dari support." },
      { term: "RSI (Relative Strength Index)", def: "Indikator momentum skala 0–100. Di atas 70 dianggap overbought (jenuh beli), di bawah 30 oversold (jenuh jual) — sering dipakai untuk mengantisipasi pembalikan." },
      { term: "Sideways", def: "Kondisi pasar bergerak menyamping tanpa tren jelas. Kondisi tersulit untuk strategi prediksi arah — banyak trader memilih tidak entry saat sideways ekstrem." },
      { term: "Sinyal (Signal)", def: "Rekomendasi arah order (UP/DOWN) beserta waktunya — bisa dari analisis manual, indikator, trader lain (copy trading), atau algoritma AI." },
      { term: "SMA / EMA", def: "Simple / Exponential Moving Average — rata-rata harga dalam periode tertentu untuk melihat arah tren. EMA memberi bobot lebih pada harga terbaru sehingga lebih responsif." },
      { term: "Stop Loss", def: "Batas kerugian maksimal yang menghentikan trading otomatis saat tercapai. Fitur perlindungan modal terpenting — di STC AutoTrade berjalan otomatis harian." },
      { term: "Stop Profit", def: "Target keuntungan yang menghentikan trading otomatis saat tercapai — mengamankan profit dari godaan overtrade." },
      { term: "Support", def: "Level harga di mana penurunan cenderung tertahan — 'lantai' psikologis pasar." },
    ],
  },
  {
    huruf: "T–W",
    items: [
      { term: "Timeframe", def: "Rentang waktu satu candle pada grafik (1m, 5m, 1h, dst). Timeframe pendek lebih detail tapi lebih banyak noise; timeframe panjang lebih halus tapi sinyalnya lambat." },
      { term: "Tren (Trend)", def: "Arah dominan pergerakan harga — naik (uptrend), turun (downtrend), atau menyamping (sideways). 'Trade with the trend' adalah nasihat klasik yang tetap relevan." },
      { term: "Win Rate", def: "Persentase order yang menang dari total order. Win rate 60% dari 100 order berarti 60 menang. Di binary option, win rate di atas ~55% umumnya sudah profitable (tergantung payout)." },
      { term: "Withdraw (WD)", def: "Menarik dana dari akun trading ke rekening bank atau e-wallet. Prosesnya diatur oleh platform (Stockity) — baca panduan cara withdraw di artikel kami." },
    ],
  },
];

/* ── Structured Data ──────────────────────────────────────────── */

const BASE_URL = "https://stcautotrade.id";

const definedTermSetSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": `${BASE_URL}/kamus-trading#istilah`,
  name: "Kamus Istilah Trading Binary Option & Stockity",
  description: "Kumpulan definisi istilah trading binary option dan Stockity dalam bahasa Indonesia sederhana.",
  inLanguage: "id",
  hasDefinedTerm: KELOMPOK.flatMap((k) =>
    k.items.map((i) => ({
      "@type": "DefinedTerm",
      name: i.term,
      description: i.def,
      inDefinedTermSet: `${BASE_URL}/kamus-trading#istilah`,
    }))
  ),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Kamus Trading", item: `${BASE_URL}/kamus-trading` },
  ],
};

/* ── Page ─────────────────────────────────────────────────────── */

const totalIstilah = KELOMPOK.reduce((n, k) => n + k.items.length, 0);

export default function KamusTradingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-[#f6f4ef]">
        {/* ── Nav ───────────────────────────────────────────── */}
        <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[rgba(26,22,18,0.08)]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 no-underline">
              <Image src="/logo.webp" alt="Logo STC AutoTrade" width={28} height={28} className="rounded-[6px]" />
              <span className="text-sm font-semibold text-[#1a1612]">STC AutoTrade</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/artikel" className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#1a1612]/65 hover:text-[#1a1612] transition-colors no-underline">Artikel</Link>
              <Link href="/faq" className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#1a1612]/65 hover:text-[#1a1612] transition-colors no-underline">FAQ</Link>
              <Link href="/download" className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1a1612] text-white text-xs font-semibold rounded-lg hover:bg-[#1a1612]/85 transition-colors no-underline">Download</Link>
            </div>
          </div>
        </nav>

        {/* ── Breadcrumb ────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-[12px] text-[#1a1612]/65">
              <li><Link href="/" className="hover:text-[#1a1612] transition-colors no-underline">Beranda</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-[#1a1612]/70 font-medium">Kamus Trading</li>
            </ol>
          </nav>
        </div>

        {/* ── Header ────────────────────────────────────────── */}
        <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-10 pb-12">
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#047857] mb-3">
            Referensi · {totalIstilah} Istilah · A–Z
          </p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-4">
            Kamus Istilah Trading
          </h1>
          <p className="text-[#6b6058] text-base leading-relaxed max-w-xl">
            Semua istilah binary option dan Stockity yang perlu diketahui pemula — dijelaskan dengan
            bahasa sederhana, tanpa jargon berbelit. Simpan halaman ini sebagai referensi saat membaca
            artikel atau menggunakan robot trading.
          </p>

          {/* Navigasi huruf */}
          <div className="flex flex-wrap gap-2 mt-7">
            {KELOMPOK.map((k) => (
              <a
                key={k.huruf}
                href={`#kelompok-${k.huruf.replace("–", "-")}`}
                className="inline-flex items-center px-3.5 py-1.5 bg-white border border-[rgba(26,22,18,0.1)] rounded-full text-[12px] font-semibold text-[#1a1612]/70 hover:border-[#047857]/40 hover:text-[#047857] transition-colors no-underline"
              >
                {k.huruf}
              </a>
            ))}
          </div>
        </header>

        {/* ── Daftar Istilah ────────────────────────────────── */}
        <main className="max-w-4xl mx-auto px-5 sm:px-8 pb-24 space-y-12">
          {KELOMPOK.map((k) => (
            <section key={k.huruf} id={`kelompok-${k.huruf.replace("–", "-")}`}>
              <h2 className="flex items-center gap-4 mb-6">
                <span className="font-[family-name:var(--font-dm-serif)] text-3xl text-[#047857]">{k.huruf}</span>
                <span className="flex-1 h-px bg-[rgba(26,22,18,0.1)]" aria-hidden="true" />
              </h2>
              <dl className="grid sm:grid-cols-2 gap-4 m-0">
                {k.items.map((i) => (
                  <div key={i.term} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                    <dt className="text-[14px] font-semibold text-[#1a1612] mb-1.5">{i.term}</dt>
                    <dd className="text-[13px] text-[#6b6058] leading-relaxed m-0">{i.def}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}

          {/* ── Lanjut belajar ─────────────────────────────── */}
          <section className="pt-4">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/65 mb-5 flex items-center gap-3">
              Lanjut Belajar
              <span className="flex-1 h-px bg-[rgba(26,22,18,0.08)]" />
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { href: "/artikel/cara-main-stockity-pemula", title: "Cara Main Stockity untuk Pemula", desc: "Panduan lengkap dari nol sampai order pertama" },
                { href: "/artikel/strategi-martingale-stockity", title: "Strategi Martingale Stockity", desc: "Kalkulator step & setting aman untuk pemula" },
                { href: "/artikel/ai-trading-stockity", title: "AI Trading Stockity", desc: "Cara kerja sinyal AI untuk binary option" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="group block bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-4 hover:border-[#10b981]/30 hover:shadow-sm transition-all no-underline">
                  <p className="text-[13px] font-semibold text-[#1a1612] mb-1 group-hover:text-[#047857] transition-colors">{l.title} →</p>
                  <p className="text-[12px] text-[#6b6058]">{l.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        </main>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="border-t border-[rgba(26,22,18,0.08)] bg-white py-14">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#047857] mb-1.5">Dari Teori ke Praktik</p>
              <p className="text-base font-semibold text-[#1a1612] mb-1">STC AutoTrade — Semua Istilah di Atas, Dikelola Otomatis</p>
              <p className="text-[13px] text-[#6b6058]">Martingale, stop loss, sinyal AI — bot yang menjalankan, Anda yang mengatur batasnya.</p>
            </div>
            <div className="flex gap-2.5 flex-shrink-0">
              <Link href="/download" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1a1612] text-white text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all no-underline">Download APK</Link>
            </div>
          </div>
        </section>

        {/* ── Footer ────────────────────────────────────────── */}
        <SiteFooter />
      </div>
    </>
  );
}
