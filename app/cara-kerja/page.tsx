/**
 * app/cara-kerja/page.tsx
 * Penjelasan lengkap cara kerja STC AutoTrade — Server Component
 * Menarget keyword: "cara kerja stcautotrade", "strategi trading stockity",
 * "martingale stockity", "setting stop loss stockity", dll.
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cara Kerja STC AutoTrade — 6 Strategi & Manajemen Risiko Stockity",
  description:
    "Pelajari cara kerja STC AutoTrade secara lengkap: 6 mode strategi (AI Signal, Copy Trading, Martingale, Indicator, Candlestick, Schedule), stop loss otomatis, stop profit, dan cara memulai dari mode demo.",
  keywords: [
    "cara kerja stcautotrade",
    "cara kerja robot stockity",
    "strategi trading stockity otomatis",
    "ai signal stockity",
    "copy trading stockity",
    "martingale stockity setting",
    "stop loss stockity otomatis",
    "indicator sma ema rsi stockity",
    "candlestick pattern stockity bot",
    "schedule trading stockity",
    "fastrade stockity",
    "cara setting bot stockity pemula",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/cara-kerja",
  },
  openGraph: {
    title: "Cara Kerja STC AutoTrade — 6 Strategi & Manajemen Risiko Stockity",
    description:
      "Penjelasan lengkap 6 mode strategi, sistem martingale, stop loss/profit otomatis, dan panduan memulai STC AutoTrade.",
    url: "https://stcautotrade.id/cara-kerja",
    type: "website",
    images: [
      {
        url: "https://stcautotrade.id/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Cara Kerja STC AutoTrade — 6 Strategi Trading Otomatis Stockity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cara Kerja STC AutoTrade — 6 Strategi & Manajemen Risiko Stockity",
    description:
      "Penjelasan lengkap 6 mode strategi, sistem martingale, stop loss/profit otomatis, dan panduan memulai STC AutoTrade.",
    images: ["https://stcautotrade.id/og-image.webp"],
  },
};

/* ── Data ─────────────────────────────────────────────────────── */

const STRATEGIES = [
  {
    tag: "AI Signal",
    tagColor: "bg-rose-50 text-rose-700 border-rose-200",
    dotColor: "bg-rose-500",
    title: "Sinyal Kecerdasan Buatan",
    subtitle: "Analisis pasar real-time berbasis algoritma",
    desc: "Mode AI Signal menggunakan algoritma machine learning untuk menganalisis pergerakan harga secara real-time. Bot memproses ratusan data poin setiap detik — volume, momentum, pola harga — kemudian menghasilkan sinyal UP atau DOWN otomatis berdasarkan probabilitas tertinggi.",
    howItWorks: [
      "Algoritma memindai pergerakan harga Stockity setiap detik",
      "Model mendeteksi pola dari data historis dan kondisi live",
      "Sinyal UP/DOWN digenerate saat probabilitas melampaui threshold",
      "Bot mengeksekusi order langsung sesuai sinyal",
    ],
    bestFor: "Trader yang ingin keputusan berbasis data tanpa analisis manual",
    risk: "Menengah",
  },
  {
    tag: "CTC",
    tagColor: "bg-violet-50 text-violet-700 border-violet-200",
    dotColor: "bg-violet-500",
    title: "Copy Trading",
    subtitle: "Ikuti sinyal trader berpengalaman secara otomatis",
    desc: "Mode CTC (Copy Trading) memungkinkan bot mengikuti sinyal dari sumber trader terpercaya secara real-time. Setiap sinyal yang diterima langsung dieksekusi di akun Anda — tanpa perlu menganalisis pasar sendiri. Ideal untuk pemula yang ingin belajar sambil trading.",
    howItWorks: [
      "Pilih sumber sinyal CTC yang tersedia di aplikasi",
      "Bot memantau sinyal dari sumber secara real-time",
      "Setiap sinyal masuk otomatis dieksekusi di akun Stockity Anda",
      "Riwayat setiap order tersimpan untuk evaluasi performa",
    ],
    bestFor: "Pemula yang ingin belajar bertahap sambil melihat hasil nyata",
    risk: "Rendah–Menengah",
  },
  {
    tag: "Indicator",
    tagColor: "bg-amber-50 text-amber-700 border-amber-200",
    dotColor: "bg-amber-500",
    title: "Indikator Teknikal",
    subtitle: "SMA, EMA, dan RSI — analisis profesional otomatis",
    desc: "Mode Indicator memberdayakan tiga indikator teknikal klasik yang digunakan trader profesional: SMA (Simple Moving Average), EMA (Exponential Moving Average), dan RSI (Relative Strength Index). Bot membaca kondisi indikator ini dan menentukan momen entry terbaik.",
    howItWorks: [
      "Bot menghitung nilai SMA, EMA, dan RSI secara real-time",
      "Sinyal beli/jual tergenerate saat indikator memenuhi kondisi tertentu",
      "Misalnya: EMA crossover naik + RSI di bawah 70 → sinyal UP",
      "Bot eksekusi order tepat saat kondisi indikator terpenuhi",
    ],
    bestFor: "Trader yang memahami analisis teknikal dasar",
    risk: "Menengah",
  },
  {
    tag: "Momentum",
    tagColor: "bg-orange-50 text-orange-700 border-orange-200",
    dotColor: "bg-orange-500",
    title: "Pola Candlestick",
    subtitle: "Deteksi otomatis formasi candle bertenaga",
    desc: "Mode Momentum/Candlestick mengenali formasi candlestick yang sering mendahului pergerakan harga signifikan — seperti Candle Sabit (Hammer/Shooting Star), Doji Terjepit, dan BB SAR Break. Bot mengidentifikasi pola ini secara real-time dan mengeksekusi order di momen yang tepat.",
    howItWorks: [
      "Bot memindai formasi candlestick pada setiap candle yang terbentuk",
      "Pola seperti Hammer, Doji, Engulfing, dan BB Break terdeteksi otomatis",
      "Konfirmasi dilakukan dengan analisis konteks tren sebelumnya",
      "Order masuk tepat setelah pola valid terkonfirmasi",
    ],
    bestFor: "Trader yang memahami price action dan pola candlestick",
    risk: "Menengah",
  },
  {
    tag: "Schedule",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    dotColor: "bg-blue-500",
    title: "Trading Terjadwal",
    subtitle: "Eksekusi order berdasarkan jadwal waktu",
    desc: "Mode Schedule memungkinkan Anda mengatur bot untuk trading pada waktu-waktu spesifik berdasarkan data historis. Jika Anda memiliki pola atau sesi trading tertentu yang terbukti menguntungkan, bot akan eksekusi secara tepat waktu — bahkan saat Anda tidur.",
    howItWorks: [
      "Atur jadwal sinyal: waktu, arah (UP/DOWN), dan aset target",
      "Tambahkan beberapa jadwal untuk berbagai sesi trading",
      "Bot berjalan otomatis sesuai jadwal yang ditetapkan",
      "Cocok untuk trader dengan data historis pola sesi tertentu",
    ],
    bestFor: "Trader dengan data historis dan pola sesi trading yang teruji",
    risk: "Tergantung kualitas jadwal",
  },
  {
    tag: "Fastrade",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dotColor: "bg-emerald-500",
    title: "Trading Cepat",
    subtitle: "Ikuti momentum pasar dengan frekuensi tinggi",
    desc: "Mode Fastrade dirancang untuk trader yang ingin frekuensi order tinggi. Bot membaca momentum pasar pada timeframe 1 menit hingga 1 jam dan mengeksekusi order mengikuti arah tren yang terdeteksi. Jumlah order lebih banyak — cocok dikombinasikan dengan martingale konservatif.",
    howItWorks: [
      "Bot memantau pergerakan harga pada timeframe pendek (1m–1h)",
      "Momentum terdeteksi berdasarkan kecepatan dan arah pergerakan harga",
      "Order masuk mengikuti arah momentum dominan",
      "Frekuensi order lebih tinggi dibanding mode lain",
    ],
    bestFor: "Trader aktif yang nyaman dengan volume order tinggi",
    risk: "Menengah–Tinggi",
  },
];

const RISK_FEATURES = [
  {
    title: "Stop Loss Otomatis",
    icon: "🛡️",
    desc: "Tetapkan batas kerugian maksimal harian dalam rupiah. Saat total kerugian mencapai batas tersebut, bot otomatis berhenti total dan tidak membuka order baru hingga hari berikutnya. Saldo Anda terlindungi tanpa perlu memantau terus-menerus.",
    example: "Contoh: Stop loss Rp 200.000. Jika kerugian hari ini sudah Rp 200.000, bot berhenti otomatis.",
  },
  {
    title: "Stop Profit Otomatis",
    icon: "🎯",
    desc: "Tentukan target profit harian. Saat target tercapai, bot berhenti — mengamankan keuntungan dari godaan untuk terus trading yang justru berisiko mengurangi profit yang sudah didapat.",
    example: "Contoh: Stop profit Rp 500.000. Begitu profit harian mencapai Rp 500.000, bot berhenti.",
  },
  {
    title: "Sistem Martingale Terkelola",
    icon: "📈",
    desc: "Setelah loss, nominal order berikutnya dikalikan dengan multiplier yang Anda tentukan — agar satu kemenangan menutup seluruh kerugian sebelumnya. Anda mengontrol MAX STEP (hingga berapa langkah kompensasi) dan MULTIPLIER (kelipatan nominal).",
    example: "Contoh: Nominal awal Rp 14.000, multiplier 2,5×, max step 3 → K1: Rp 35.000 → K2: Rp 87.500 → K3: Rp 218.750.",
  },
  {
    title: "Mode Demo Tanpa Risiko",
    icon: "🎮",
    desc: "Sebelum menggunakan uang nyata, uji strategi Anda di mode demo. Data pasar yang digunakan sama dengan mode real, sehingga hasil demo mencerminkan kondisi trading sesungguhnya. Wajib digunakan minimal 7 hari sebelum beralih ke mode real.",
    example: "Tips: Validasi strategi di demo minimal 7 hari. Jika profitable konsisten, baru beralih ke mode real dengan nominal kecil.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Pilih platform",
    desc: "Download APK untuk Android, atau buka stcautotradepro.id langsung di browser — PC, Mac, iPhone, semua bisa.",
  },
  {
    n: "02",
    title: "Daftar & login",
    desc: "Daftar akun baru melalui aplikasi STC AutoTrade, lalu login dengan akun Stockity.id yang baru dibuat.",
  },
  {
    n: "03",
    title: "Pilih strategi",
    desc: "Pemula disarankan mulai dengan CTC Copy Trading atau AI Signal — tidak perlu analisis manual.",
  },
  {
    n: "04",
    title: "Setting manajemen risiko",
    desc: "Aktifkan Stop Loss dan Stop Profit. Jika pakai martingale, mulai dengan multiplier rendah (2–2,5×) dan max step 3.",
  },
  {
    n: "05",
    title: "Demo minimal 7 hari",
    desc: "Uji strategi di mode demo. Evaluasi win rate dan drawdown sebelum beralih ke mode real.",
  },
  {
    n: "06",
    title: "Mulai mode real bertahap",
    desc: "Setelah strategi teruji, mulai dengan nominal minimum. Naikkan bertahap seiring kepercayaan diri.",
  },
];

/* ── Structured Data ──────────────────────────────────────────── */

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: "https://stcautotrade.id" },
    { "@type": "ListItem", position: 2, name: "Cara Kerja", item: "https://stcautotrade.id/cara-kerja" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cara Menggunakan STC AutoTrade untuk Trading Otomatis di Stockity",
  description:
    "Panduan langkah demi langkah cara mulai menggunakan bot trading STC AutoTrade di Stockity.id — dari instalasi hingga trading real.",
  step: STEPS.map((s) => ({
    "@type": "HowToStep",
    name: s.title,
    text: s.desc,
  })),
};

/* ── Page ─────────────────────────────────────────────────────── */

export default function CaraKerjaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="min-h-screen bg-[#f9fafb]">
        {/* ── Nav ───────────────────────────────────────────── */}
        <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[rgba(26,22,18,0.08)]">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 no-underline">
              <Image src="/logo.webp" alt="STC AutoTrade" width={28} height={28} className="rounded-[6px]" />
              <span className="text-sm font-semibold text-[#1a1612]">STC AutoTrade</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href="/faq"
                className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#1a1612]/60 hover:text-[#1a1612] transition-colors no-underline"
              >
                FAQ
              </Link>
              <Link
                href="/download"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1a1612] text-white text-xs font-semibold rounded-lg hover:bg-[#1a1612]/85 transition-colors no-underline"
              >
                Download
              </Link>
            </div>
          </div>
        </nav>

        {/* ── Breadcrumb ────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-[12px] text-[#1a1612]/40">
              <li><Link href="/" className="hover:text-[#1a1612]/70 transition-colors no-underline">Beranda</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-[#1a1612]/70 font-medium">Cara Kerja</li>
            </ol>
          </nav>
        </div>

        {/* ── Header ────────────────────────────────────────── */}
        <header className="max-w-5xl mx-auto px-5 sm:px-8 pt-10 pb-14">
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3b82f6] mb-3">
            Panduan Lengkap
          </p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5 max-w-2xl">
            Cara Kerja STC AutoTrade — 6 Strategi Trading Otomatis
          </h1>
          <p className="text-[#6b6058] text-base leading-relaxed max-w-2xl mb-6">
            STC AutoTrade (StcAutoTrade / StockAutoTrade) adalah robot trading otomatis untuk Stockity.id
            yang dilengkapi 6 mode strategi, manajemen risiko otomatis, dan sistem martingale terkelola.
            Halaman ini menjelaskan cara kerja setiap fitur secara detail.
          </p>
          {/* TOC */}
          <div className="flex flex-wrap gap-2">
            {["6 Strategi", "Manajemen Risiko", "Cara Mulai"].map((item, i) => (
              <a
                key={i}
                href={`#${["strategi", "risiko", "mulai"][i]}`}
                className="inline-flex items-center px-3 py-1.5 bg-white border border-[rgba(26,22,18,0.12)] rounded-lg text-[12px] font-medium text-[#1a1612]/60 hover:border-[#3b82f6]/40 hover:text-[#3b82f6] transition-all no-underline"
              >
                {item}
              </a>
            ))}
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-5 sm:px-8 pb-24 space-y-20">

          {/* ── Section: 6 Strategi ───────────────────────── */}
          <section id="strategi">
            <h2 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/35 mb-8 flex items-center gap-3">
              6 Mode Strategi Trading
              <span className="flex-1 h-px bg-[rgba(26,22,18,0.08)]" />
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {STRATEGIES.map((s) => (
                <article
                  key={s.tag}
                  className="bg-white rounded-2xl border border-[rgba(26,22,18,0.08)] p-6 hover:border-[rgba(26,22,18,0.14)] hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${s.tagColor}`}>
                      {s.tag}
                    </span>
                    <span className="text-[11px] text-[#6b6058]">
                      Risiko: {s.risk}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#1a1612] mb-1">{s.title}</h3>
                  <p className="text-[12px] text-[#6b6058] mb-3">{s.subtitle}</p>
                  <p className="text-[13px] text-[#6b6058] leading-relaxed mb-4">{s.desc}</p>
                  <div className="space-y-1.5 mb-4">
                    {s.howItWorks.map((step, i) => (
                      <div key={i} className="flex items-start gap-2 text-[12px] text-[#1a1612]/60">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.dotColor}`} />
                        {step}
                      </div>
                    ))}
                  </div>
                  <div className="pt-3 border-t border-[rgba(26,22,18,0.06)]">
                    <p className="text-[11px] text-[#1a1612]/35">
                      <span className="font-semibold text-[#1a1612]/50">Cocok untuk:</span> {s.bestFor}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ── Section: Manajemen Risiko ─────────────────── */}
          <section id="risiko">
            <h2 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/35 mb-8 flex items-center gap-3">
              Manajemen Risiko Otomatis
              <span className="flex-1 h-px bg-[rgba(26,22,18,0.08)]" />
            </h2>
            <p className="text-[#6b6058] text-[14px] leading-relaxed mb-7 max-w-2xl">
              Setiap strategi di STC AutoTrade dilengkapi sistem manajemen risiko otomatis.
              Fitur-fitur ini bekerja secara bersamaan — Anda tidak perlu memilih salah satu.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {RISK_FEATURES.map((f) => (
                <div key={f.title} className="bg-white rounded-2xl border border-[rgba(26,22,18,0.08)] p-6">
                  <div className="text-2xl mb-3">{f.icon}</div>
                  <h3 className="text-base font-semibold text-[#1a1612] mb-2">{f.title}</h3>
                  <p className="text-[13px] text-[#6b6058] leading-relaxed mb-3">{f.desc}</p>
                  <div className="bg-[#f9fafb] rounded-xl px-4 py-3 border border-[rgba(26,22,18,0.06)]">
                    <p className="text-[11px] text-[#1a1612]/50 leading-relaxed">{f.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section: Cara Mulai ───────────────────────── */}
          <section id="mulai">
            <h2 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/35 mb-8 flex items-center gap-3">
              Cara Memulai STC AutoTrade
              <span className="flex-1 h-px bg-[rgba(26,22,18,0.08)]" />
            </h2>
            <div className="max-w-2xl divide-y divide-[rgba(26,22,18,0.07)] border border-[rgba(26,22,18,0.08)] rounded-2xl overflow-hidden bg-white">
              {STEPS.map((s, i) => (
                <div key={s.n} className="flex gap-5 px-6 py-5">
                  <div className="w-8 h-8 min-w-[32px] rounded-full border border-[rgba(26,22,18,0.12)] bg-[#f9fafb] flex items-center justify-center text-[12px] font-semibold text-[#1a1612]/40">
                    {i + 1}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-[14px] font-semibold text-[#1a1612] mb-1">{s.title}</h3>
                    <p className="text-[13px] text-[#6b6058] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="border-t border-[rgba(26,22,18,0.08)] bg-white py-14">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-base font-semibold text-[#1a1612] mb-1">Siap memulai?</p>
              <p className="text-[13px] text-[#6b6058]">
                Download APK Android atau langsung buka versi web — mulai dari mode demo gratis.
              </p>
            </div>
            <div className="flex gap-2.5 flex-shrink-0">
              <Link
                href="/download"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1a1612] text-white text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all no-underline"
              >
                Download APK
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-[rgba(26,22,18,0.16)] text-[#1a1612]/70 text-sm font-medium rounded-xl hover:border-[rgba(26,22,18,0.28)] hover:text-[#1a1612] transition-all no-underline"
              >
                Lihat FAQ
              </Link>
            </div>
          </div>
        </section>

        {/* ── Footer ────────────────────────────────────────── */}
        <footer className="border-t border-[rgba(26,22,18,0.07)] py-6 bg-[#f9fafb]">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-4">
            <p className="text-[11px] text-[#1a1612]/25">
              © 2026 STC AutoTrade (StockAutoTrade) · stcautotrade.id · Stockity Auto Trade
            </p>
            <Link href="/" className="text-[11px] text-[#1a1612]/35 hover:text-[#1a1612]/60 transition-colors no-underline">
              ← Beranda
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}