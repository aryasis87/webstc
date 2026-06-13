/**
 * app/artikel/page.tsx
 *
 * Halaman indeks artikel STC AutoTrade — Server Component murni.
 * Tidak ada "use client" — seluruh konten ada di HTML pertama untuk crawler.
 *
 * SEO:
 * - Metadata lengkap (title, description, canonical, OG, keywords)
 * - JSON-LD: BreadcrumbList + ItemList (sinyal koleksi artikel)
 * - Heading hierarchy: h1 (satu) → h2 per artikel
 * - Internal linking: setiap card mengarah ke slug artikel
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── Constants ─────────────────────────────────────────────────── */

const BASE_URL   = "https://stcautotrade.id";
const APK_PATH   = "/StcAutoTrade.apk";
const PAGE_URL   = `${BASE_URL}/artikel`;

/* ── Metadata ──────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Artikel STC AutoTrade — Panduan & Tips Robot Trading Stockity",
  description:
    "Kumpulan panduan robot trading Stockity: cara daftar, setting bot, strategi profit, modal minimum, perbandingan platform, dan review keamanan Stockity.id.",
  keywords: [
    "artikel stcautotrade",
    "panduan robot trading stockity",
    "cara setting bot stockity",
    "cara daftar stockity",
    "auto trade stockity gratis",
    "robot stockity android",
    "stockity aman penipuan",
    "modal trading stockity",
    "strategi profit stockity",
    "stockity vs binomo vs olymp trade",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Artikel STC AutoTrade — Panduan & Tips Robot Trading Stockity",
    description:
      "Kumpulan panduan robot trading Stockity: cara daftar, setting bot, strategi profit, modal minimum, perbandingan platform, dan review Stockity.id.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Artikel STC AutoTrade — Panduan Robot Trading Stockity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artikel STC AutoTrade — Panduan Robot Trading Stockity",
    description:
      "Panduan robot trading Stockity: daftar akun, setting bot, strategi profit, modal minimum, dan review keamanan.",
    images: [`${BASE_URL}/og-image.webp`],
  },
};

/* ── Data Artikel ──────────────────────────────────────────────── */

type Kategori = "Panduan" | "Strategi" | "Review" | "Edukasi";

interface Artikel {
  slug:      string;
  judul:     string;
  ringkasan: string;
  kategori:  Kategori;
  tanggal:   string;
  menit:     number;
}

const ARTIKEL: Artikel[] = [
  {
    slug:      "robot-trading-stockity",
    judul:     "Robot Trading Stockity: Panduan Lengkap Auto Trade 2026",
    ringkasan: "Panduan lengkap cara kerja robot trading Stockity, 6 mode strategi yang tersedia, manajemen risiko otomatis, dan cara mengaktifkan bot di akun Stockity.id.",
    kategori:  "Panduan",
    tanggal:   "21 Mei 2025",
    menit:     8,
  },
  {
    slug:      "auto-trade-stockity-gratis",
    judul:     "Auto Trade Stockity Gratis: Download Robot Stockity Terbaik 2026",
    ringkasan: "Cara mendapatkan robot trading Stockity secara gratis lewat STC AutoTrade — download APK Android atau akses versi web, lengkap dengan panduan aktivasi.",
    kategori:  "Panduan",
    tanggal:   "21 Mei 2025",
    menit:     6,
  },
  {
    slug:      "cara-setting-robot-stockity",
    judul:     "Cara Setting Robot Trading Stockity: Panduan Konfigurasi Bot 2026",
    ringkasan: "Panduan langkah demi langkah cara setting robot Stockity — konfigurasi martingale, stop loss, stop profit, pilih aset, dan aktifkan bot untuk trading otomatis.",
    kategori:  "Panduan",
    tanggal:   "21 Mei 2025",
    menit:     10,
  },
  {
    slug:      "robot-stockity-android",
    judul:     "Robot Stockity Android: Download APK Bot Trading Terbaik 2026",
    ringkasan: "Panduan download dan instal robot trading Stockity di Android — APK STC AutoTrade, persyaratan perangkat, izin instalasi, dan langkah pertama setelah instal.",
    kategori:  "Panduan",
    tanggal:   "21 Mei 2025",
    menit:     7,
  },
  {
    slug:      "cara-daftar-stockity",
    judul:     "Cara Daftar Stockity: Panduan Registrasi Akun & Mulai Trading 2026",
    ringkasan: "Langkah demi langkah cara daftar akun Stockity.id — dari registrasi, verifikasi email, deposit pertama, hingga menghubungkan akun ke robot STC AutoTrade.",
    kategori:  "Panduan",
    tanggal:   "21 Mei 2025",
    menit:     6,
  },
  {
    slug:      "sinyal-trading-stockity-gratis",
    judul:     "Sinyal Trading Stockity Gratis: CTC, AI Signal & Bot 2026",
    ringkasan: "Panduan mendapatkan sinyal trading Stockity gratis — cara kerja CTC Copy Trading, AI Signal, sinyal indikator, dan cara menggunakannya dengan robot otomatis.",
    kategori:  "Panduan",
    tanggal:   "1 Jun 2025",
    menit:     7,
  },
  {
    slug:      "cara-withdraw-stockity",
    judul:     "Cara Withdraw Stockity: Panduan Tarik Dana ke Rekening 2026",
    ringkasan: "Panduan lengkap cara withdraw Stockity — metode penarikan, minimum saldo, durasi proses, penyebab withdraw gagal, dan tips agar tarik dana berjalan lancar.",
    kategori:  "Panduan",
    tanggal:   "1 Jun 2025",
    menit:     8,
  },
  {
    slug:      "robot-trading-ios-iphone",
    judul:     "Robot Trading iPhone Stockity: Auto Trade di iOS Tanpa Instalasi 2026",
    ringkasan: "Panduan menggunakan robot trading Stockity di iPhone dan iPad — akses STC AutoTrade versi web di Safari tanpa instalasi APK, dengan fitur lengkap dan tips optimasi iOS.",
    kategori:  "Panduan",
    tanggal:   "1 Jun 2025",
    menit:     6,
  },
  {
    slug:      "cara-profit-trading-stockity",
    judul:     "Cara Profit Trading Stockity: Strategi & Tips Konsisten 2026",
    ringkasan: "Strategi, tips, dan sistem manajemen risiko untuk trading konsisten dan profitable di Stockity.id menggunakan robot STC AutoTrade.",
    kategori:  "Strategi",
    tanggal:   "21 Mei 2025",
    menit:     9,
  },
  {
    slug:      "modal-trading-stockity",
    judul:     "Modal Trading Stockity: Berapa Minimum & Cara Mulai Modal Kecil 2026",
    ringkasan: "Berapa modal minimum untuk trading Stockity otomatis? Panduan lengkap kalkulasi modal, manajemen risiko bertahap, dan cara memulai dari modal kecil dengan aman.",
    kategori:  "Strategi",
    tanggal:   "21 Mei 2025",
    menit:     7,
  },
  {
    slug:      "strategi-martingale-stockity",
    judul:     "Strategi Martingale Stockity: Panduan Setting Aman & Efektif 2026",
    ringkasan: "Panduan lengkap strategi martingale di Stockity — cara kerja, tabel kalkulator step & modal, multiplier aman, risiko, dan alternatif anti-martingale.",
    kategori:  "Strategi",
    tanggal:   "1 Jun 2025",
    menit:     10,
  },
  {
    slug:      "trading-binary-option-indonesia",
    judul:     "Trading Binary Option Indonesia: Panduan Lengkap untuk Pemula 2026",
    ringkasan: "Panduan lengkap trading binary option di Indonesia — apa itu binary option, cara kerja, platform terbaik, risiko nyata, dan cara mulai dengan robot trading otomatis.",
    kategori:  "Panduan",
    tanggal:   "1 Jun 2025",
    menit:     10,
  },
  {
    slug:      "stockity-aman-atau-penipuan",
    judul:     "Stockity Aman atau Penipuan? Review Jujur & Faktual 2026",
    ringkasan: "Ulasan jujur Stockity.id — keamanan platform, risiko nyata, bukti withdraw, dan analisis apakah Stockity terpercaya untuk trading binary option.",
    kategori:  "Review",
    tanggal:   "21 Mei 2025",
    menit:     11,
  },
  {
    slug:      "stockity-vs-binomo-vs-olymp-trade",
    judul:     "Stockity vs Binomo vs Olymp Trade: Perbandingan Platform 2026",
    ringkasan: "Perbandingan objektif tiga platform trading populer di Indonesia — fitur, payout, deposit minimum, regulasi, dan kompatibilitas dengan robot trading otomatis.",
    kategori:  "Review",
    tanggal:   "21 Mei 2025",
    menit:     12,
  },

  // ── Artikel Baru — 7 Juni 2026 ───────────────────────────────

  {
    slug:      "cara-deposit-stockity",
    judul:     "Cara Deposit Stockity: Isi Saldo via Stockity.id untuk Trading Bot 2026",
    ringkasan: "Deposit di Stockity dilakukan di platform Stockity.id — bukan di aplikasi STC AutoTrade. Panduan akses via Webview, saldo otomatis sinkron ke bot, dan cara mulai dari akun Demo gratis.",
    kategori:  "Panduan",
    tanggal:   "7 Jun 2026",
    menit:     7,
  },
  {
    slug:      "copy-trading-stockity",
    judul:     "Copy Trading Stockity: Panduan Mode Fastrade CTC di STC AutoTrade 2026",
    ringkasan: "Fastrade CTC adalah mode copy trading di STC AutoTrade yang mirror order dari master trader secara real-time dan otomatis. Panduan cara aktivasi, setting nominal, dan tips optimasi.",
    kategori:  "Panduan",
    tanggal:   "7 Jun 2026",
    menit:     7,
  },
  {
    slug:      "minimal-deposit-stockity",
    judul:     "Minimal Order STC AutoTrade: Rp 14.000 per Trade & Simulasi Modal 2026",
    ringkasan: "Minimum nominal order di STC AutoTrade adalah Rp 14.000 per trade. Panduan simulasi modal untuk martingale 1-7 step, rekomendasi buffer aman, dan cara mulai dari akun Demo gratis.",
    kategori:  "Panduan",
    tanggal:   "7 Jun 2026",
    menit:     6,
  },
  {
    slug:      "robot-trading-pc-laptop",
    judul:     "STC AutoTrade di PC & Laptop: Akses Versi Web via stcautotradepro.id 2026",
    ringkasan: "STC AutoTrade bisa diakses di PC dan laptop via browser di stcautotradepro.id — tanpa install, semua 6 mode tersedia, fitur identik dengan APK Android.",
    kategori:  "Panduan",
    tanggal:   "7 Jun 2026",
    menit:     6,
  },
  {
    slug:      "trading-binary-option-modal-kecil",
    judul:     "Trading Binary Option Modal Kecil: Simulasi Base Rp 14K di STC AutoTrade 2026",
    ringkasan: "Simulasi konkret trading dengan modal kecil di STC AutoTrade — base order Rp 14.000, tabel martingale 1-5 step, mode yang cocok, dan fitur SL otomatis untuk proteksi saldo.",
    kategori:  "Strategi",
    tanggal:   "7 Jun 2026",
    menit:     8,
  },
  {
    slug:      "indikator-trading-binary-option",
    judul:     "Indikator di STC AutoTrade: Panduan Mode SMA, EMA, RSI 2026",
    ringkasan: "Mode Indicator di STC AutoTrade v4.4 mendukung 3 indikator: SMA, EMA, dan RSI. Panduan setting period (1-200), sensitivity, RSI overbought/oversold, dan cara kerja eksekusi otomatis.",
    kategori:  "Edukasi",
    tanggal:   "7 Jun 2026",
    menit:     9,
  },
  {
    slug:      "cara-baca-candlestick-binary-option",
    judul:     "Cara Baca Candlestick & 4 Pola Mode Momentum STC AutoTrade 2026",
    ringkasan: "Mode Momentum STC AutoTrade mendeteksi 4 pola candlestick: CandleSabit, DojiTerjepit, DojiPembatalan, dan BBSARBreak. Setiap pola bisa enable/disable secara individual.",
    kategori:  "Edukasi",
    tanggal:   "7 Jun 2026",
    menit:     9,
  },
  {
    slug:      "aset-terbaik-trading-stockity",
    judul:     "Aset Terbaik untuk Trading di Stockity: Forex, Crypto & Komoditas 2026",
    ringkasan: "Panduan memilih aset di STC AutoTrade — aset diambil real-time dari API Stockity meliputi Forex (EUR/USD, USD/IDR), Gold, Oil, dan Crypto. Tips memilih aset sesuai mode bot.",
    kategori:  "Panduan",
    tanggal:   "7 Jun 2026",
    menit:     7,
  },
  {
    slug:      "timeframe-trading-binary-option",
    judul:     "Timeframe di STC AutoTrade: Panduan Mode Fastrade & Duration Signal 2026",
    ringkasan: "Timeframe 1m-1h hanya tersedia di mode Fastrade FTT & CTC. Mode Signal pakai duration 60-300 detik. Mode AI Signal, Indicator, dan Momentum tidak punya pilihan timeframe.",
    kategori:  "Edukasi",
    tanggal:   "7 Jun 2026",
    menit:     7,
  },
  {
    slug:      "cara-menghindari-loss-stockity",
    judul:     "Cara Menghindari Loss di STC AutoTrade: SL Harian, Always Signal & Demo 2026",
    ringkasan: "Panduan manajemen risiko di STC AutoTrade — setting Stop Loss & Stop Profit harian otomatis, fitur Always Signal untuk recovery martingale, analisis History page, dan akun Demo.",
    kategori:  "Strategi",
    tanggal:   "7 Jun 2026",
    menit:     8,
  },
];

const KATEGORI_META: Record<Kategori, { warna: string; bg: string }> = {
  Panduan:  { warna: "#1d4ed8", bg: "#eff6ff" },
  Strategi: { warna: "#0f766e", bg: "#f0fdfa" },
  Review:   { warna: "#7c3aed", bg: "#f5f3ff" },
  Edukasi:  { warna: "#b45309", bg: "#fffbeb" },
};

/* ── JSON-LD Schemas ───────────────────────────────────────────── */

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Artikel",       item: PAGE_URL },
  ],
};

const schemaItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Artikel STC AutoTrade — Panduan & Tips Robot Trading Stockity",
  description:
    "Kumpulan artikel panduan, strategi, dan review seputar robot trading Stockity menggunakan STC AutoTrade.",
  url: PAGE_URL,
  numberOfItems: ARTIKEL.length,
  itemListElement: ARTIKEL.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${BASE_URL}/artikel/${a.slug}`,
    name: a.judul,
  })),
};

/* ── Komponen Pembantu ─────────────────────────────────────────── */

function BadgeKategori({ k }: { k: Kategori }) {
  const { warna, bg } = KATEGORI_META[k];
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold tracking-wide"
      style={{ color: warna, backgroundColor: bg }}
    >
      {k}
    </span>
  );
}

function ArtikelCard({ artikel }: { artikel: Artikel }) {
  return (
    <Link
      href={`/artikel/${artikel.slug}`}
      className="group flex flex-col p-5 bg-white border border-[rgba(26,22,18,0.08)] rounded-2xl hover:border-[rgba(26,22,18,0.18)] hover:shadow-lg hover:shadow-black/[0.05] hover:-translate-y-0.5 transition-all no-underline"
    >
      {/* Kategori + menit baca */}
      <div className="flex items-center justify-between mb-3.5">
        <BadgeKategori k={artikel.kategori} />
        <span className="text-[11px] text-[#1a1612]/30">{artikel.menit} mnt baca</span>
      </div>

      {/* Judul */}
      <h2 className="text-[15px] font-semibold text-[#1a1612] leading-snug mb-2.5 group-hover:text-[#1d4ed8] transition-colors">
        {artikel.judul}
      </h2>

      {/* Ringkasan */}
      <p className="text-[13px] text-[#6b6058] leading-relaxed flex-1 mb-4">
        {artikel.ringkasan}
      </p>

      {/* Footer card */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[rgba(26,22,18,0.07)]">
        <span className="text-[11px] text-[#1a1612]/30">{artikel.tanggal}</span>
        <span className="text-[12px] font-medium text-[#1d4ed8] flex items-center gap-1">
          Baca
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 256 256" fill="currentColor" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/>
          </svg>
        </span>
      </div>
    </Link>
  );
}

/* ── Page ──────────────────────────────────────────────────────── */

export default function ArtikelPage() {
  const panduan  = ARTIKEL.filter((a) => a.kategori === "Panduan");
  const strategi = ARTIKEL.filter((a) => a.kategori === "Strategi");
  const review   = ARTIKEL.filter((a) => a.kategori === "Review");
  const edukasi  = ARTIKEL.filter((a) => a.kategori === "Edukasi");

  return (
    <>
      {/* ── JSON-LD ──────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaItemList) }}
      />

      <div className="bg-[#f9fafb] text-[#1a1612] font-[family-name:var(--font-dm-sans)]">

        {/* ── SKIP NAV ───────────────────────────────────── */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:px-5 focus:py-2.5 focus:bg-white focus:text-[#1a1612] focus:rounded-xl focus:shadow-xl focus:text-sm focus:font-semibold focus:border focus:border-[rgba(26,22,18,0.16)]"
        >
          Langsung ke konten utama
        </a>

        {/* ── NAV ────────────────────────────────────────── */}
        <nav
          aria-label="Navigasi utama STC AutoTrade"
          className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[rgba(26,22,18,0.08)]"
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 no-underline group">
              <Image
                src="/logo.webp"
                alt="Logo STC AutoTrade"
                width={28}
                height={28}
                className="rounded-[6px] shadow-sm"
              />
              <span className="text-sm font-semibold tracking-tight text-[#1a1612]">
                STC AutoTrade
              </span>
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href="/#fitur"
                className="hidden sm:flex items-center px-4 py-2 text-sm text-[#1a1612]/45 hover:text-[#1a1612] transition-colors no-underline"
              >
                Fitur
              </Link>
              <Link
                href="/artikel"
                className="hidden sm:flex items-center px-4 py-2 text-sm text-[#1d4ed8] font-semibold no-underline"
                aria-current="page"
              >
                Artikel
              </Link>
              <a
                href="https://stcautotradepro.id"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 border border-[#3b82f6]/30 text-[#1d4ed8] text-sm font-semibold rounded-lg hover:bg-[#eff6ff] transition-all no-underline"
              >
                Versi Web
              </a>
              <a
                href={APK_PATH}
                download
                className="flex items-center gap-1.5 px-4 py-2 bg-[#1a1612] text-[#f0f9ff] text-sm font-semibold rounded-lg hover:bg-[#1a1612]/85 transition-all hover:-translate-y-px no-underline shadow-sm"
              >
                Download
              </a>
            </div>
          </div>
        </nav>

        <main id="main-content">

          {/* ── HEADER ─────────────────────────────────────── */}
          <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 border-b border-[rgba(26,22,18,0.07)] bg-white overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 [background-image:linear-gradient(rgba(26,22,18,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(26,22,18,0.025)_1px,transparent_1px)] [background-size:64px_64px] pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-[400px] h-[300px] rounded-full bg-[#3b82f6]/[0.05] blur-3xl pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-1.5 text-[12px] text-[#1a1612]/35 list-none p-0 m-0">
                  <li><Link href="/" className="hover:text-[#1a1612]/60 transition-colors no-underline">Beranda</Link></li>
                  <li aria-hidden="true">/</li>
                  <li className="text-[#1a1612]/60 font-medium" aria-current="page">Artikel</li>
                </ol>
              </nav>

              <h1 className="font-[family-name:var(--font-dm-serif)] text-[36px] sm:text-[48px] font-normal tracking-[-0.03em] leading-[1.1] mb-4">
                Panduan &amp; Artikel<br />
                <span className="text-[#1d4ed8]">Robot Trading Stockity</span>
              </h1>
              <p className="text-[#6b6058] text-base sm:text-[17px] leading-relaxed max-w-xl mb-8">
                Kumpulan panduan lengkap, strategi trading, dan review platform — semuanya
                ditulis khusus untuk pengguna <strong className="text-[#1a1612] font-semibold">STC AutoTrade</strong>{" "}
                di Stockity.id.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-4 text-[13px] text-[#1a1612]/40">
                <span className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"/></svg>
                  {ARTIKEL.length} artikel
                </span>
                <span className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"/></svg>
                  {ARTIKEL.reduce((s, a) => s + a.menit, 0)} mnt total
                </span>
                <span>Diperbarui 2026</span>
              </div>
            </div>
          </section>

          {/* ── ARTIKEL PANDUAN ────────────────────────────── */}
          <section className="py-14 sm:py-20" aria-labelledby="heading-panduan">
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-6 rounded-full bg-[#1d4ed8]" aria-hidden="true" />
                <h2
                  id="heading-panduan"
                  className="text-xl font-semibold tracking-tight text-[#1a1612]"
                >
                  Panduan &amp; Tutorial
                </h2>
                <span className="text-[12px] text-[#1a1612]/30 ml-1">
                  {panduan.length} artikel
                </span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {panduan.map((a) => (
                  <ArtikelCard key={a.slug} artikel={a} />
                ))}
              </div>
            </div>
          </section>

          {/* ── ARTIKEL STRATEGI ───────────────────────────── */}
          <section
            className="py-14 sm:py-20 bg-white border-y border-[rgba(26,22,18,0.07)]"
            aria-labelledby="heading-strategi"
          >
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-6 rounded-full bg-[#0f766e]" aria-hidden="true" />
                <h2
                  id="heading-strategi"
                  className="text-xl font-semibold tracking-tight text-[#1a1612]"
                >
                  Strategi &amp; Modal
                </h2>
                <span className="text-[12px] text-[#1a1612]/30 ml-1">
                  {strategi.length} artikel
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {strategi.map((a) => (
                  <ArtikelCard key={a.slug} artikel={a} />
                ))}
              </div>
            </div>
          </section>

          {/* ── ARTIKEL EDUKASI ────────────────────────────── */}
          <section className="py-14 sm:py-20" aria-labelledby="heading-edukasi">
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-6 rounded-full bg-[#b45309]" aria-hidden="true" />
                <h2
                  id="heading-edukasi"
                  className="text-xl font-semibold tracking-tight text-[#1a1612]"
                >
                  Edukasi Trading
                </h2>
                <span className="text-[12px] text-[#1a1612]/30 ml-1">
                  {edukasi.length} artikel
                </span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {edukasi.map((a) => (
                  <ArtikelCard key={a.slug} artikel={a} />
                ))}
              </div>
            </div>
          </section>

          {/* ── ARTIKEL REVIEW ─────────────────────────────── */}
          <section
            className="py-14 sm:py-20 bg-white border-y border-[rgba(26,22,18,0.07)]"
            aria-labelledby="heading-review"
          >
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-6 rounded-full bg-[#7c3aed]" aria-hidden="true" />
                <h2
                  id="heading-review"
                  className="text-xl font-semibold tracking-tight text-[#1a1612]"
                >
                  Review &amp; Perbandingan
                </h2>
                <span className="text-[12px] text-[#1a1612]/30 ml-1">
                  {review.length} artikel
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {review.map((a) => (
                  <ArtikelCard key={a.slug} artikel={a} />
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ────────────────────────────────────────── */}
          <section className="relative py-20 sm:py-28 overflow-hidden bg-[#1a1612]">
            <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:64px_64px] pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/25 to-transparent" />
            <div className="relative max-w-xl mx-auto px-5 sm:px-8 text-center">
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3b82f6]/50 mb-5">
                Gratis · Android &amp; Web · Mulai Sekarang
              </p>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-[-0.03em] leading-[1.1] mb-5 text-[#e0f2fe]">
                Siap Mulai Trading Otomatis?
              </h2>
              <p className="text-[#e0f2fe]/45 text-base leading-relaxed mb-8">
                Download <strong className="text-[#e0f2fe]/70">STC AutoTrade</strong> (StockAutoTrade)
                atau buka versi web — mulai dari mode demo tanpa risiko.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={APK_PATH}
                  download
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#3b82f6] text-white text-sm font-bold rounded-xl hover:bg-[#2563eb] transition-all hover:-translate-y-0.5 no-underline shadow-xl shadow-[#3b82f6]/20"
                >
                  Download APK Android
                </a>
                <a
                  href="https://stcautotradepro.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 border border-white/20 text-white text-sm font-bold rounded-xl hover:bg-white/20 transition-all hover:-translate-y-0.5 no-underline"
                >
                  Buka Versi Web
                </a>
              </div>
            </div>
          </section>

        </main>

        {/* ── FOOTER ─────────────────────────────────────── */}
        <footer className="border-t border-[rgba(26,22,18,0.09)] py-8 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <Image
                  src="/logo.webp"
                  alt="Logo STC AutoTrade"
                  width={24}
                  height={24}
                  className="rounded-[5px] shadow-sm"
                />
                <span className="text-sm font-medium text-[#1a1612]/60">STC AutoTrade</span>
              </div>
              <p className="text-[11px] text-[#1a1612]/25 leading-snug">
                © 2026 STC AutoTrade (StockAutoTrade) · stcautotrade.id
              </p>
            </div>
            <p className="text-[12px] text-[#1a1612]/30 max-w-sm sm:text-right leading-relaxed">
              Trading mengandung risiko kerugian finansial. STC AutoTrade adalah alat bantu,
              bukan jaminan selalu profit. Pastikan Anda memahami risiko sebelum bertransaksi.
            </p>
          </div>
        </footer>

      </div>
    </>
  );
}