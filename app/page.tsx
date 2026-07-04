import Image from "next/image";
import Link from "next/link";
import PhoneImage from "@/components/PhoneImage";
import MobileNav from "@/components/MobileNav";
import SiteFooter from "@/components/SiteFooter";
import { FadeUp, StaggerView, FadeItem, FAQItem, CountUp } from "@/components/AnimatedSections";

const APK_PATH = "/StcAutoTrade.apk";

/* ── Design tokens (kelas berulang) ──────────────────────────────── */

const HAIRLINE    = "border-[rgba(23,20,15,0.09)]";
const INK         = "text-[#17140f]";
const INK_DIM     = "text-[#6b6459]";
const SERIF       = "font-[family-name:var(--font-dm-serif)]";
const BTN_PRIMARY = "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#17140f] text-[#f6f4ef] text-sm font-semibold hover:bg-emerald-900 transition-colors no-underline";
const BTN_GHOST   = "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[rgba(23,20,15,0.16)] text-[#17140f] text-sm font-semibold hover:bg-white hover:border-[rgba(23,20,15,0.3)] transition-all no-underline";

/* ── Data ─────────────────────────────────────────────────────────── */

const ALIASES = [
  "StcAutoTrade", "StockAutoTrade", "Stc Auto Trade", "Stock Auto Trade",
  "Robot Stockity", "Auto Stockity", "Bot Stockity Otomatis", "Stockity Auto Trade",
];

const TESTIMONIALS = [
  {
    name: "Rizky Aditya",
    role: "Trader pemula · Jakarta",
    text: "Sudah 3 bulan pakai STC AutoTrade. Mode AI Signal konsisten, dan stop loss otomatis benar-benar menyelamatkan saldo saya berkali-kali. Wajib coba untuk pemula.",
  },
  {
    name: "Dewi Santika",
    role: "Ibu rumah tangga · Surabaya",
    text: "Awalnya ragu, tapi setelah demo 2 minggu hasilnya meyakinkan. Sekarang sudah mode real, profit kecil tapi konsisten. Bot tetap jalan meski HP saya mati.",
  },
  {
    name: "Hendra Putra",
    role: "Karyawan swasta · Bandung",
    text: "Bangun pagi langsung cek riwayat trading, sudah ada profit dari malam. Fitur stop profit otomatis juga keren — saldo aman dari godaan overtrade.",
  },
];

/* AI Signal di depan — jadi kartu unggulan pada bento grid */
const MODES = [
  { tag: "AI Signal", featured: true,  chip: "",                                                                title: "Sinyal Kecerdasan Buatan", desc: "Algoritma AI menganalisis pasar secara real-time, mengidentifikasi pola, dan menghasilkan sinyal UP/DOWN otomatis — keputusan berbasis data, bukan tebakan.", for: "Trader yang ingin keputusan berbasis data" },
  { tag: "CTC",       featured: false, chip: "text-violet-700 bg-violet-50 border-violet-100",                  title: "Copy Trading",             desc: "Tidak perlu analisis sendiri. Bot mengikuti sinyal sumber terpercaya dan eksekusi real-time di akun Anda.", for: "Pemula yang ingin belajar bertahap" },
  { tag: "Indicator", featured: false, chip: "text-amber-700 bg-amber-50 border-amber-100",                     title: "Indikator Teknikal",       desc: "Bot membaca SMA, EMA, dan RSI — indikator klasik trader profesional — untuk menentukan waktu entry terbaik.", for: "Trader dengan dasar analisis teknikal" },
  { tag: "Momentum",  featured: false, chip: "text-orange-700 bg-orange-50 border-orange-100",                  title: "Pola Candlestick",         desc: "Bot mengenali Candle Sabit, Doji Terjepit, dan BB SAR Break yang sering mendahului pergerakan harga signifikan.", for: "Trader yang memahami price action" },
  { tag: "Schedule",  featured: false, chip: "text-emerald-700 bg-emerald-50 border-emerald-100",               title: "Trading Terjadwal",        desc: "Jadwalkan order berdasarkan pola historis. Bot eksekusi tepat waktu — bahkan saat Anda tidur.", for: "Trader dengan data historis teratur" },
  { tag: "Fastrade",  featured: false, chip: "text-emerald-700 bg-emerald-50 border-emerald-100",               title: "Trading Cepat",            desc: "Bot membaca momentum pasar pada timeframe 1m–1h dan mengeksekusi order mengikuti arah yang terdeteksi.", for: "Trader aktif yang suka banyak order" },
];

const HAMBATAN = [
  { t: "Tidak bisa pantau pasar terus-menerus", d: "Peluang muncul kapan saja. Tanpa alat bantu, momen terbaik terlewat saat Anda sibuk atau beristirahat." },
  { t: "Keputusan dipengaruhi emosi",            d: "FOMO dan panik saat loss adalah musuh terbesar trader. Keputusan emosional hampir selalu menguras saldo." },
  { t: "Analisis teknikal terasa rumit",         d: "RSI, moving average, pola candlestick — semua asing bagi pemula dan butuh berbulan-bulan untuk dikuasai." },
  { t: "Tidak ada disiplin manajemen modal",     d: "Tanpa stop loss tegas, trader membiarkan kerugian membesar dengan harapan harga akan berbalik sendiri." },
];

const RISKS = [
  { title: "Stop Loss Otomatis",          desc: "Tentukan batas kerugian maksimal harian. Bot berhenti total saat tercapai — saldo terlindungi tanpa pengawasan." },
  { title: "Stop Profit Otomatis",        desc: "Tetapkan target keuntungan harian. Bot berhenti saat tercapai, mengamankan profit dari godaan overtrade." },
  { title: "Sistem Martingale Terkelola", desc: "Setelah loss, nominal order berikutnya disesuaikan agar satu win menutup semua kerugian sebelumnya. Langkah dan kelipatan Anda atur sendiri." },
  { title: "Pengaturan Tersimpan",        desc: "Semua konfigurasi tersimpan otomatis. Tidak perlu setup ulang setiap membuka aplikasi." },
  { title: "Riwayat Trading Lengkap",     desc: "Setiap order tercatat detail: waktu, aset, nominal, hasil, profit, dan status martingale. Data lengkap untuk evaluasi strategi." },
];

const STEPS = [
  { title: "Pilih platform Anda",        desc: "Download APK untuk Android, atau buka langsung di browser via stcautotradepro.id — tanpa instal, siap di perangkat apapun termasuk PC, laptop, dan iPhone." },
  { title: "Daftar akun baru",           desc: "Belum punya akun? Daftar akun harus melalui aplikasi STC AutoTrade — prosesnya cepat dan gratis, tanpa perlu berpindah ke aplikasi lain." },
  { title: "Login dengan akun Stockity", desc: "Masuk menggunakan email dan password akun Stockity.id yang telah dibuat. Selamat, sudah bisa menggunakan STC AutoTrade!" },
  { title: "Mulai dari mode demo",       desc: "Jangan terburu ke mode real. Gunakan demo minimal 7 hari untuk memahami strategi dan memvalidasi pengaturan Anda tanpa risiko finansial." },
  { title: "Beralih ke mode real",       desc: "Setelah strategi teruji, mulai dengan nominal kecil. Tingkatkan bertahap seiring pertumbuhan kepercayaan diri Anda." },
];

const FAQS = [
  { q: "Apa itu STC AutoTrade / StcAutoTrade?",                          a: "STC AutoTrade — juga dikenal sebagai StcAutoTrade, StockAutoTrade, Robot Stockity, atau Auto Stockity — adalah bot trading otomatis untuk platform Stockity.id. Tersedia sebagai APK Android maupun versi web di stcautotradepro.id." },
  { q: "Apa bedanya versi APK Android dan versi web?",                    a: "Versi APK diinstal di perangkat Android dan bisa berjalan di background. Versi web (stcautotradepro.id) tidak perlu instalasi — langsung buka di browser, cocok untuk PC, laptop, dan iPhone. Semua fitur tersedia di kedua versi." },
  { q: "Bagaimana cara menggunakan versi web STC AutoTrade?",             a: "Buka browser dan kunjungi stcautotradepro.id. Jika belum punya akun, daftar dulu melalui web tersebut — prosesnya cepat dan gratis. Setelah akun berhasil terbuat, login menggunakan akun Stockity.id." },
  { q: "Apa bedanya STC AutoTrade, StcAutoTrade, dan StockAutoTrade?",    a: "Ketiganya adalah nama yang merujuk produk yang sama. 'STC AutoTrade', 'Stc Auto Trade', 'StcAutoTrade', 'StockAutoTrade', dan 'Stock Auto Trade' adalah variasi penulisan brand yang sama." },
  { q: "Apakah Robot Stockity / Auto Stockity sama dengan STC AutoTrade?", a: "Ya. 'Robot Stockity', 'Auto Stockity', 'Stockity Auto Trade', dan 'Bot Stockity Otomatis' adalah sebutan populer untuk bot yang sama — STC AutoTrade (StockAutoTrade), tersedia via APK Android maupun versi web." },
  { q: "Bagaimana cara menginstal STC AutoTrade di Android?",             a: "Download file APK dari tombol di halaman ini. Aktifkan 'Instal dari sumber tidak dikenal' di Pengaturan → Keamanan. Buka file APK dan ikuti instruksi. Atau gunakan versi web di stcautotradepro.id tanpa instalasi." },
  { q: "Apakah perlu pengalaman trading?",                                a: "Tidak. STC AutoTrade dirancang agar bisa digunakan pemula sekalipun. Mode demo tersedia di versi APK maupun versi web untuk belajar tanpa risiko finansial." },
  { q: "Modal minimum yang disarankan?",                                  a: "Tidak ada ketentuan minimum, namun kami sarankan minimal Rp500.000 sebagai buffer aman untuk siklus martingale konservatif (nominal awal Rp14.000, multiplier 2,5x, 3 step)." },
  { q: "Tersedia untuk iOS (iPhone)?",                                    a: "Ya! Pengguna iPhone dan iPad bisa menggunakan STC AutoTrade langsung melalui versi web di stcautotradepro.id — buka di Safari atau Chrome tanpa instalasi. Versi APK hanya tersedia untuk Android." },
  { q: "Apakah data akun Stockity saya aman?",                            a: "Keamanan data Anda sepenuhnya terlindungi. Password tidak pernah dikirim ke, atau disimpan di server manapun — termasuk server kami. Hanya token autentikasi yang tersimpan, dienkripsi secara lokal di perangkat Anda." },
  { q: "Bot bisa jalan saat aplikasi ditutup?",                           a: "Ya. Bot berjalan di server khusus, bukan di perangkat Anda — sehingga tetap aktif 24 jam meski aplikasi ditutup, HP dimatikan, atau koneksi internet Anda terputus." },
];

/* ── JSON-LD ──────────────────────────────────────────────────────── */
const BASE_URL = "https://stcautotrade.id";

const schemaFAQPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: BASE_URL },
  ],
};

const schemaSoftwareApp = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  // @id sama dengan schema global di layout.tsx — kedua node di-merge Google
  // menjadi SATU entitas aplikasi (aggregateRating menempel ke #app, bukan
  // membentuk entitas duplikat anonim).
  "@id": `${BASE_URL}/#app`,
  name: "STC AutoTrade",
  alternateName: ["StcAutoTrade", "StockAutoTrade", "Robot Stockity", "Auto Stockity"],
  description: "Bot trading otomatis untuk platform Stockity.id. Tersedia sebagai APK Android dan versi web. Fitur: 6 mode strategi, stop loss & stop profit otomatis, martingale terkelola, riwayat trading lengkap.",
  url: BASE_URL,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Android, Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "IDR",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "1200",
    bestRating: "5",
    worstRating: "1",
  },
  author: { "@type": "Organization", name: "STC AutoTrade", url: BASE_URL },
  downloadUrl: `${BASE_URL}/StcAutoTrade.apk`,
  softwareVersion: "4.4",
  screenshot: `${BASE_URL}/og-image.webp`,
};

/* ── Sub-komponen presentasional ──────────────────────────────────── */

function Eyebrow({ n, children }: { n?: string; children: React.ReactNode }) {
  return (
    <p className={`flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] uppercase ${INK_DIM} mb-5`}>
      {n && (
        <>
          <span className="text-emerald-700">{n}</span>
          <span className="w-8 h-px bg-[rgba(23,20,15,0.3)]" aria-hidden="true" />
        </>
      )}
      {children}
    </p>
  );
}

function CheckIcon({ light = false }: { light?: boolean }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="6.5" cy="6.5" r="6" fill={light ? "white" : "#059669"} fillOpacity={light ? ".18" : ".12"} />
      <path d="M4 6.5l2 2 3-3.5" stroke={light ? "#6ee7b7" : "#059669"} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Page ─────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaSoftwareApp) }} />

      <div className={`bg-[#f6f4ef] ${INK} font-[family-name:var(--font-dm-sans)]`}>

        {/* ── SKIP NAV ───────────────────────────────────────── */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:px-4 focus:py-2 focus:bg-white focus:text-[#17140f] focus:rounded-lg focus:shadow-lg focus:text-sm focus:font-medium focus:border focus:border-[rgba(23,20,15,0.12)]"
        >
          Langsung ke konten utama
        </a>

        {/* ── NAV — pill mengambang ──────────────────────────── */}
        <nav aria-label="Navigasi utama STC AutoTrade" className="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-4">
          <div className={`max-w-5xl mx-auto flex items-center justify-between h-14 pl-4 pr-2.5 sm:pl-5 sm:pr-3 rounded-2xl bg-white/75 backdrop-blur-xl border ${HAIRLINE} shadow-lg shadow-[rgba(23,20,15,0.05)]`}>
            <a href="/" className="flex items-center gap-2.5 no-underline">
              <Image src="/logo.webp" alt="Logo STC AutoTrade" width={26} height={26} className="rounded-lg" />
              <span className={`${SERIF} text-[17px] ${INK} leading-none`}>STC AutoTrade</span>
            </a>
            <div className="flex items-center gap-0.5">
              <a href="#fitur"      className="hidden sm:flex items-center px-3 py-2 text-sm text-[#17140f]/60 hover:text-[#17140f] transition-colors no-underline rounded-lg">Fitur</a>
              <a href="#cara-kerja" className="hidden sm:flex items-center px-3 py-2 text-sm text-[#17140f]/60 hover:text-[#17140f] transition-colors no-underline rounded-lg">Panduan</a>
              <Link href="/artikel" className="hidden sm:flex items-center px-3 py-2 text-sm text-[#17140f]/60 hover:text-[#17140f] transition-colors no-underline rounded-lg">Artikel</Link>
              <Link href="/faq"     className="hidden sm:flex items-center px-3 py-2 text-sm text-[#17140f]/60 hover:text-[#17140f] transition-colors no-underline rounded-lg">FAQ</Link>
              <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center px-3 py-2 text-sm text-[#17140f]/60 hover:text-[#17140f] transition-colors no-underline rounded-lg">Versi Web</a>
              <a href={APK_PATH} download className="ml-1.5 flex items-center gap-1.5 px-4.5 sm:px-5 py-2.5 bg-[#17140f] text-[#f6f4ef] text-sm font-semibold rounded-xl hover:bg-emerald-900 transition-colors no-underline">
                Download
              </a>
              <MobileNav />
            </div>
          </div>
        </nav>

        <main id="main-content">

          {/* ── HERO ───────────────────────────────────────────── */}
          <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 overflow-hidden">
            {/* Glow lembut */}
            <div className="absolute -top-40 left-1/3 w-[720px] h-[480px] bg-emerald-500/[0.08] blur-[130px] rounded-full pointer-events-none" aria-hidden="true" />

            <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
              <div className="grid lg:grid-cols-[1fr_370px] gap-14 lg:gap-16 items-center">

                {/* Kiri — heading editorial */}
                <div>
                  <div className="animate-fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(23,20,15,0.1)] text-[11px] font-semibold tracking-[0.16em] uppercase text-emerald-800 mb-8 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" aria-hidden="true" />
                    Android &amp; Web · Stockity.id
                  </div>

                  <h1 className={`animate-fade-up animate-delay-100 ${SERIF} text-[44px] sm:text-[64px] lg:text-[74px] font-normal tracking-tight leading-[1.02] mb-7`}>
                    <span className="block font-[family-name:var(--font-dm-sans)] text-[12px] sm:text-[13px] font-semibold tracking-[0.24em] uppercase text-emerald-700 mb-5">
                      STC AutoTrade · StockAutoTrade
                    </span>
                    Robot Trading{" "}
                    <em className="text-emerald-600">Otomatis</em>
                    <br />
                    untuk Stockity
                  </h1>

                  <p className={`animate-fade-up animate-delay-200 ${INK_DIM} text-base sm:text-[17px] leading-relaxed mb-9 max-w-lg`}>
                    Terhubung langsung ke akun Stockity.id Anda dan mengeksekusi strategi
                    secara otomatis — <strong className={`${INK} font-semibold`}>24 jam non-stop, bebas emosi</strong>.
                    Gratis untuk member terdaftar.
                  </p>

                  <div className="animate-fade-up animate-delay-300 flex flex-col gap-4">
                    <div className="flex flex-wrap gap-3">
                      <a href={APK_PATH} download className={BTN_PRIMARY}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 2v8M5 7l3 3 3-3M3 12.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        Download APK — Gratis
                      </a>
                      <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className={BTN_GHOST}>
                        Buka Versi Web
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3 9l6-6M4.5 3H9v4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </a>
                    </div>
                    <a href="#cara-kerja" className={`inline-flex items-center gap-1.5 text-sm ${INK_DIM} hover:text-[#17140f] transition-colors no-underline group w-fit`}>
                      Pelajari cara kerja
                      <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor" className="transition-transform group-hover:translate-y-0.5" aria-hidden="true">
                        <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Kanan — panggung ponsel */}
                <div className="animate-fade-up animate-delay-300 flex justify-center lg:justify-end">
                  <div className="relative w-[330px] sm:w-[360px] rounded-[44px] bg-[#05261c] bg-noise overflow-hidden pt-12 px-6 h-[560px]">
                    <div className="absolute inset-0 [background-image:radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" aria-hidden="true" />
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[300px] h-[220px] bg-emerald-400/25 blur-[80px] rounded-full pointer-events-none" aria-hidden="true" />
                    <div className="absolute top-5 left-6 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.07] border border-white/[0.1] text-[10px] font-semibold tracking-[0.16em] uppercase text-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" aria-hidden="true" />
                      Bot aktif 24/7
                    </div>
                    <div className="relative mt-10 animate-float">
                      <PhoneImage
                        src="/gambar1.webp"
                        alt="Tampilan layar utama aplikasi STC AutoTrade menampilkan mode AI Signal aktif di akun Stockity.id"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Statistik hairline */}
              <div className={`animate-fade-up animate-delay-500 mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 border-y ${HAIRLINE} sm:divide-x sm:divide-[rgba(23,20,15,0.09)]`}>
                {[
                  { n: "6",    l: "Mode Strategi" },
                  { n: "2",    l: "Platform" },
                  { n: "24/7", l: "Bot Aktif" },
                  { n: "4.9★", l: "Rating Pengguna" },
                ].map((s) => (
                  <div key={s.l} className="py-6 px-4 sm:px-6 text-center sm:text-left">
                    <div className={`${SERIF} text-[34px] sm:text-4xl text-emerald-700 leading-none mb-2`}>{s.n}</div>
                    <div className={`text-[11px] tracking-[0.14em] uppercase ${INK_DIM}`}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── ALIAS TICKER ───────────────────────────────────── */}
          <section aria-label="Nama lain STC AutoTrade" className={`border-y ${HAIRLINE} py-4 overflow-hidden bg-[#efece4]/70`}>
            <p className="sr-only">Dikenal juga sebagai: {ALIASES.join(", ")}.</p>
            <div className="flex w-max animate-marquee" aria-hidden="true">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex items-center shrink-0">
                  {ALIASES.map((a) => (
                    <span key={a} className="flex items-center gap-7 px-7 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#17140f]/60 whitespace-nowrap">
                      {a}
                      <span className="text-emerald-700/80 text-[9px]">✦</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* ── 01 · PLATFORM ──────────────────────────────────── */}
          <section className="py-20 sm:py-28" id="platform">
            <div className="max-w-5xl mx-auto px-5 sm:px-8">
              <FadeUp>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12">
                  <div>
                    <Eyebrow n="01">Platform</Eyebrow>
                    <h2 className={`${SERIF} text-4xl sm:text-5xl tracking-tight leading-[1.05]`}>
                      Dua Cara <em className="text-emerald-600">Mengakses</em>
                    </h2>
                  </div>
                  <p className={`${INK_DIM} text-sm leading-relaxed max-w-xs sm:text-right sm:pb-1`}>
                    Instal APK di Android, atau langsung buka di browser — fiturnya identik.
                  </p>
                </div>
              </FadeUp>

              <StaggerView className="grid sm:grid-cols-2 gap-4">
                {/* APK */}
                <FadeItem>
                  <div className={`flex flex-col gap-5 p-8 bg-white border ${HAIRLINE} rounded-3xl hover:shadow-xl hover:shadow-[rgba(23,20,15,0.05)] hover:-translate-y-1 transition-all h-full`}>
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-[#17140f] flex items-center justify-center" aria-hidden="true">
                        <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M8 1.5v8M5 6.5l3 3 3-3M2.5 12.5h11" stroke="#f6f4ef" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                      <span className={`text-[10px] font-bold tracking-[0.16em] uppercase px-2.5 py-1 rounded-full border ${HAIRLINE} ${INK_DIM}`}>APK</span>
                    </div>
                    <div>
                      <h3 className={`${SERIF} text-2xl ${INK} mb-1`}>Aplikasi Android</h3>
                      <p className={`text-[12px] ${INK_DIM} font-medium`}>stcautotrade.id · Android 8.0+</p>
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {["Berjalan di background 24 jam", "Notifikasi order real-time", "Performa optimal di perangkat Android"].map((f) => (
                        <li key={f} className={`flex items-center gap-2.5 text-[13px] ${INK_DIM}`}>
                          <CheckIcon /> {f}
                        </li>
                      ))}
                    </ul>
                    <a href={APK_PATH} download className={`${BTN_PRIMARY} mt-auto w-full`}>Download APK</a>
                  </div>
                </FadeItem>

                {/* Web */}
                <FadeItem>
                  <div className="relative flex flex-col gap-5 p-8 bg-[#05261c] bg-noise rounded-3xl overflow-hidden hover:-translate-y-1 transition-all h-full">
                    <div className="absolute -top-20 -right-16 w-[240px] h-[200px] bg-emerald-400/20 blur-[70px] rounded-full pointer-events-none" aria-hidden="true" />
                    <div className="relative flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="#6ee7b7"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a88.1,88.1,0,0,1,1.68-16.6H81.19a161.79,161.79,0,0,0,0,33.2H41.68A88.1,88.1,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h39.51A88.11,88.11,0,0,1,215.32,128H174.81a161.79,161.79,0,0,0,0-33.2ZM200.68,88H165.64c-5.56-22.77-15.47-43.28-29.41-60.41A88.35,88.35,0,0,1,200.68,88ZM119.77,27.59C105.83,44.72,95.92,65.23,90.36,88H55.32A88.35,88.35,0,0,1,119.77,27.59ZM55.32,168H90.36c5.56,22.77,15.47,43.28,29.41,60.41A88.35,88.35,0,0,1,55.32,168Zm80.95,60.41c13.94-17.13,23.85-37.64,29.41-60.41h35.04A88.35,88.35,0,0,1,136.27,228.41Z"/></svg>
                      </div>
                      <span className="text-[10px] font-bold tracking-[0.16em] uppercase px-2.5 py-1 rounded-full border border-white/15 text-emerald-200">Web</span>
                    </div>
                    <div className="relative">
                      <h3 className={`${SERIF} text-2xl text-white mb-1`}>Versi Web</h3>
                      <p className="text-[12px] text-emerald-200/70 font-medium">stcautotradepro.id · tanpa instalasi</p>
                    </div>
                    <ul className="relative flex flex-col gap-2.5">
                      {["Tanpa instal — langsung di browser", "Kompatibel PC, Mac, iPhone, iPad", "Fitur lengkap sama seperti APK"].map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-[13px] text-emerald-50/80">
                          <CheckIcon light /> {f}
                        </li>
                      ))}
                    </ul>
                    <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="relative mt-auto inline-flex items-center justify-center gap-2 w-full px-7 py-3.5 rounded-full bg-emerald-400 text-emerald-950 text-sm font-bold hover:bg-emerald-300 transition-colors no-underline">
                      Buka Versi Web
                    </a>
                  </div>
                </FadeItem>
              </StaggerView>
            </div>
          </section>

          {/* ── 02 · SOCIAL PROOF ──────────────────────────────── */}
          <section className={`py-20 sm:py-28 border-t ${HAIRLINE}`}>
            <div className="max-w-5xl mx-auto px-5 sm:px-8">
              <FadeUp className="mb-14">
                <Eyebrow n="02">Dipercaya Trader Indonesia</Eyebrow>
                <h2 className={`${SERIF} text-4xl sm:text-5xl tracking-tight leading-[1.05] max-w-xl`}>
                  Angka yang <em className="text-emerald-600">Bicara</em> Sendiri
                </h2>
              </FadeUp>

              <div className={`grid grid-cols-1 sm:grid-cols-3 border-y ${HAIRLINE} sm:divide-x sm:divide-[rgba(23,20,15,0.09)] mb-14`}>
                <div className="py-8 px-2 sm:px-8"><CountUp to={50000} suffix="+" label="Order dieksekusi" /></div>
                <div className="py-8 px-2 sm:px-8"><CountUp to={3200} suffix="+" label="Trader aktif" /></div>
                <div className="py-8 px-2 sm:px-8"><CountUp to={4.9} decimals={1} suffix="★" label="Rating pengguna" /></div>
              </div>

              <StaggerView className="grid sm:grid-cols-3 gap-4">
                {TESTIMONIALS.map((t) => (
                  <FadeItem key={t.name}>
                    <figure className={`flex flex-col p-7 bg-white border ${HAIRLINE} rounded-3xl h-full hover:shadow-lg hover:shadow-[rgba(23,20,15,0.04)] transition-all m-0`}>
                      <div className={`${SERIF} text-[56px] leading-[0.5] text-emerald-600/25 mb-5 select-none`} aria-hidden="true">“</div>
                      <blockquote className={`text-[14px] ${INK} opacity-80 leading-relaxed mb-6 flex-1 m-0`}>{t.text}</blockquote>
                      <figcaption className={`pt-4 border-t ${HAIRLINE}`}>
                        <p className={`text-[13px] font-semibold ${INK}`}>{t.name}</p>
                        <p className={`text-[12px] ${INK_DIM} mt-0.5`}>{t.role}</p>
                      </figcaption>
                    </figure>
                  </FadeItem>
                ))}
              </StaggerView>
            </div>
          </section>

          {/* ── 03 · HAMBATAN ──────────────────────────────────── */}
          <section className={`py-20 sm:py-28 border-t ${HAIRLINE}`}>
            <div className="max-w-5xl mx-auto px-5 sm:px-8">
              <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-start">
                <FadeUp className="lg:sticky lg:top-28">
                  <Eyebrow n="03">Mengapa STC AutoTrade?</Eyebrow>
                  <h2 className={`${SERIF} text-4xl sm:text-5xl tracking-tight leading-[1.05] mb-6`}>
                    Empat Hambatan Terbesar <em className="text-emerald-600">Trader Pemula</em>
                  </h2>
                  <p className={`${INK_DIM} text-[15px] leading-relaxed mb-8 max-w-md`}>
                    Sebagian besar trader baru tidak gagal karena kurang modal — mereka gagal karena
                    masalah yang seharusnya bisa dicegah. <strong className={`${INK} font-semibold`}>STC AutoTrade</strong> hadir
                    sebagai solusinya.
                  </p>
                  <a href={APK_PATH} download className={BTN_PRIMARY}>Download Gratis Sekarang</a>
                </FadeUp>

                <StaggerView className={`border-t ${HAIRLINE}`}>
                  {HAMBATAN.map((item, i) => (
                    <FadeItem key={item.t}>
                      <div className={`flex gap-6 py-7 border-b ${HAIRLINE}`}>
                        <span className={`${SERIF} text-4xl leading-none text-emerald-700/30 select-none w-12 shrink-0`} aria-hidden="true">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className={`text-[16px] font-semibold mb-1.5 ${INK}`}>{item.t}</h3>
                          <p className={`text-[13.5px] ${INK_DIM} leading-relaxed`}>{item.d}</p>
                        </div>
                      </div>
                    </FadeItem>
                  ))}
                </StaggerView>
              </div>
            </div>
          </section>

          {/* ── 04 · 6 MODE STRATEGI (bento) ───────────────────── */}
          <section className={`py-20 sm:py-28 border-t ${HAIRLINE}`} id="fitur">
            <div className="max-w-5xl mx-auto px-5 sm:px-8">
              <FadeUp>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12">
                  <div>
                    <Eyebrow n="04">6 Mode Strategi</Eyebrow>
                    <h2 className={`${SERIF} text-4xl sm:text-5xl tracking-tight leading-[1.05]`}>
                      Strategi untuk Setiap <em className="text-emerald-600">Gaya Trading</em>
                    </h2>
                  </div>
                  <p className={`${INK_DIM} text-sm leading-relaxed max-w-xs sm:text-right sm:pb-1`}>
                    Pilih satu, atur parameter, dan biarkan bot bekerja.
                  </p>
                </div>
              </FadeUp>

              <StaggerView className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {MODES.map((m) => (
                  <FadeItem key={m.tag} className={m.featured ? "sm:col-span-2" : ""}>
                    {m.featured ? (
                      <article className="relative flex flex-col gap-4 p-8 bg-[#05261c] bg-noise rounded-3xl overflow-hidden h-full hover:-translate-y-1 transition-all">
                        <div className="absolute -top-24 -right-20 w-[280px] h-[220px] bg-emerald-400/20 blur-[80px] rounded-full pointer-events-none" aria-hidden="true" />
                        <span className="relative self-start text-[10px] font-bold tracking-[0.16em] uppercase px-2.5 py-1 rounded-full border border-emerald-300/25 bg-emerald-400/10 text-emerald-300">{m.tag}</span>
                        <h3 className={`relative ${SERIF} text-2xl sm:text-[28px] text-white`}>{m.title}</h3>
                        <p className="relative text-[14px] text-emerald-50/75 leading-relaxed flex-1 max-w-md">{m.desc}</p>
                        <p className="relative text-[12px] text-emerald-200/80 border-t border-white/10 pt-4 flex items-center gap-2">
                          <CheckIcon light /> {m.for}
                        </p>
                      </article>
                    ) : (
                      <article className={`flex flex-col gap-3.5 p-6 bg-white border ${HAIRLINE} rounded-3xl hover:shadow-lg hover:shadow-[rgba(23,20,15,0.04)] hover:-translate-y-1 transition-all h-full`}>
                        <span className={`self-start text-[10px] font-bold tracking-[0.16em] uppercase px-2.5 py-1 rounded-full border ${m.chip}`}>{m.tag}</span>
                        <h3 className={`text-[16px] font-semibold tracking-tight ${INK}`}>{m.title}</h3>
                        <p className={`text-[13px] ${INK_DIM} leading-relaxed flex-1`}>{m.desc}</p>
                        <p className={`text-[12px] ${INK_DIM} border-t ${HAIRLINE} pt-3.5 flex items-center gap-2`}>
                          <CheckIcon /> {m.for}
                        </p>
                      </article>
                    )}
                  </FadeItem>
                ))}
              </StaggerView>
            </div>
          </section>

          {/* ── 05 · MANAJEMEN RISIKO ──────────────────────────── */}
          <section className={`py-20 sm:py-28 border-t ${HAIRLINE}`}>
            <div className="max-w-5xl mx-auto px-5 sm:px-8">
              <div className="grid lg:grid-cols-[300px_1fr] gap-14 lg:gap-20 items-start">
                <div className="lg:sticky lg:top-28 flex flex-col items-center">
                  <FadeUp>
                    <PhoneImage
                      src="/gambar2.webp"
                      alt="Layar pengaturan manajemen risiko STC AutoTrade menampilkan stop loss otomatis dan konfigurasi martingale"
                      label="Stop Loss & Martingale"
                    />
                  </FadeUp>
                </div>

                <div>
                  <FadeUp>
                    <Eyebrow n="05">Manajemen Risiko</Eyebrow>
                    <h2 className={`${SERIF} text-4xl sm:text-5xl tracking-tight leading-[1.05] mb-5`}>
                      Perlindungan Modal <em className="text-emerald-600">Otomatis</em>
                    </h2>
                    <p className={`${INK_DIM} text-[15px] leading-relaxed mb-6 max-w-lg`}>
                      Fitur bawaan memastikan Anda tidak kehilangan lebih dari yang sudah
                      direncanakan — bahkan tanpa memantau layar.
                    </p>
                    <div className={`flex gap-3 p-4.5 rounded-2xl bg-white border ${HAIRLINE} mb-8 max-w-lg`}>
                      <span className="w-4 h-4 mt-0.5 shrink-0 rounded-full bg-emerald-100 flex items-center justify-center" aria-hidden="true">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      </span>
                      <p className={`text-[13px] ${INK_DIM} leading-relaxed`}>
                        STC AutoTrade adalah alat bantu eksekusi strategi, bukan jaminan selalu profit.
                        Hasil trading tetap dipengaruhi kondisi pasar yang tidak dapat diprediksi.
                      </p>
                    </div>
                  </FadeUp>

                  <StaggerView className={`border-t ${HAIRLINE}`}>
                    {RISKS.map((r, i) => (
                      <FadeItem key={r.title}>
                        <div className={`flex gap-6 py-6 border-b ${HAIRLINE}`}>
                          <span className="text-[12px] font-bold tracking-widest text-emerald-700 pt-1 w-8 shrink-0" aria-hidden="true">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <h3 className={`text-[15px] font-semibold mb-1 ${INK}`}>{r.title}</h3>
                            <p className={`text-[13px] ${INK_DIM} leading-relaxed`}>{r.desc}</p>
                          </div>
                        </div>
                      </FadeItem>
                    ))}
                  </StaggerView>
                </div>
              </div>
            </div>
          </section>

          {/* ── 06 · MODE DEMO ─────────────────────────────────── */}
          <section className="py-20 sm:py-28">
            <div className="max-w-5xl mx-auto px-5 sm:px-8">
              <div className="relative overflow-hidden bg-[#05261c] bg-noise rounded-[2.5rem] p-8 sm:p-14">
                <div className="absolute inset-0 [background-image:radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:26px_26px] pointer-events-none" aria-hidden="true" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" aria-hidden="true" />
                <div className="absolute -bottom-28 -left-20 w-[340px] h-[260px] bg-emerald-400/15 blur-[90px] rounded-full pointer-events-none" aria-hidden="true" />

                <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <FadeUp>
                    <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-emerald-300 mb-5">
                      <span className="text-emerald-400">06</span>
                      <span className="w-8 h-px bg-emerald-400/40" aria-hidden="true" />
                      Untuk Pemula
                    </p>
                    <h2 className={`${SERIF} text-4xl sm:text-[52px] tracking-tight leading-[1.05] mb-5 text-white`}>
                      Mulai dari Demo.
                      <br />
                      <em className="text-emerald-300">Tanpa Risiko.</em>
                    </h2>
                    <p className="text-emerald-50/70 text-[15px] leading-relaxed mb-8 max-w-md">
                      Semua fitur berjalan penuh menggunakan saldo virtual dengan data pasar nyata.
                      Uji strategi dan hanya pindah ke mode real setelah benar-benar siap.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-3 mb-9">
                      {[
                        { t: "Data pasar nyata", s: "Saldo virtual, kondisi real" },
                        { t: "Semua 6 mode",     s: "Uji tanpa risiko finansial" },
                        { t: "Riwayat lengkap",  s: "Evaluasi sebelum ke real" },
                      ].map((item) => (
                        <div key={item.t} className="p-4 rounded-2xl bg-white/[0.05] border border-white/[0.08]">
                          <p className="text-[13px] font-semibold text-white/90 mb-1">{item.t}</p>
                          <p className="text-[12px] text-emerald-200/80 leading-snug">{item.s}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a href={APK_PATH} download className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-400 text-emerald-950 text-sm font-bold hover:bg-emerald-300 transition-colors no-underline">
                        Download APK Android
                      </a>
                      <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/[0.07] border border-white/[0.14] text-white text-sm font-bold hover:bg-white/[0.14] transition-all no-underline">
                        Coba Versi Web
                      </a>
                    </div>
                  </FadeUp>

                  <FadeUp delay={0.15} className="flex justify-center lg:justify-end">
                    <PhoneImage
                      src="/gambar3.webp"
                      alt="Tampilan mode demo STC AutoTrade menampilkan riwayat order dan statistik profit/loss dengan data pasar nyata"
                      label="Dashboard Trading"
                      labelLight
                      fit="contain"
                    />
                  </FadeUp>
                </div>
              </div>
            </div>
          </section>

          {/* ── 07 · CARA MULAI ────────────────────────────────── */}
          <section className={`py-20 sm:py-28 border-t ${HAIRLINE}`} id="cara-kerja">
            <div className="max-w-5xl mx-auto px-5 sm:px-8">
              <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-20 items-start">
                <FadeUp className="lg:sticky lg:top-28">
                  <Eyebrow n="07">Cara Mulai</Eyebrow>
                  <h2 className={`${SERIF} text-4xl sm:text-5xl tracking-tight leading-[1.05] mb-5`}>
                    5 Langkah <em className="text-emerald-600">Memulai</em>
                  </h2>
                  <p className={`${INK_DIM} text-sm leading-relaxed max-w-xs mb-7`}>
                    Dari download sampai order pertama — kurang dari 10 menit.
                  </p>
                  <Link href="/cara-kerja" className={`inline-flex items-center gap-1.5 text-sm font-medium text-emerald-800 hover:text-emerald-950 transition-colors no-underline group`}>
                    Baca panduan lengkap
                    <svg width="13" height="13" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </FadeUp>

                <div className={`border-t ${HAIRLINE}`}>
                  {STEPS.map((s, i) => (
                    <FadeUp key={s.title} delay={i * 0.06}>
                      <div className={`flex gap-6 sm:gap-10 py-8 border-b ${HAIRLINE}`}>
                        <span
                          className={`${SERIF} text-[56px] sm:text-[68px] leading-[0.8] select-none text-transparent [-webkit-text-stroke:1.5px_rgba(4,120,87,0.55)] w-16 sm:w-24 shrink-0`}
                          aria-hidden="true"
                        >
                          {i + 1}
                        </span>
                        <div className="pt-1">
                          <h3 className={`text-[16px] font-semibold mb-1.5 ${INK}`}>{s.title}</h3>
                          <p className={`text-[13.5px] ${INK_DIM} leading-relaxed max-w-lg`}>{s.desc}</p>
                        </div>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── 08 · FAQ ───────────────────────────────────────── */}
          <section className={`py-20 sm:py-28 border-t ${HAIRLINE}`}>
            <div className="max-w-5xl mx-auto px-5 sm:px-8">
              <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-20 items-start">
                <FadeUp className="lg:sticky lg:top-28">
                  <Eyebrow n="08">FAQ</Eyebrow>
                  <h2 className={`${SERIF} text-4xl sm:text-5xl tracking-tight leading-[1.05] mb-5`}>
                    Pertanyaan yang <em className="text-emerald-600">Sering Muncul</em>
                  </h2>
                  <p className={`${INK_DIM} text-sm leading-relaxed max-w-xs mb-7`}>
                    Tidak menemukan jawaban Anda? Lihat halaman FAQ lengkap.
                  </p>
                  <Link href="/faq" className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-800 hover:text-emerald-950 transition-colors no-underline group">
                    Semua pertanyaan
                    <svg width="13" height="13" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </FadeUp>

                <FadeUp delay={0.1}>
                  <dl className={`border-t ${HAIRLINE} m-0`}>
                    {FAQS.map((item) => (
                      <FAQItem key={item.q} q={item.q} a={item.a} />
                    ))}
                  </dl>
                </FadeUp>
              </div>
            </div>
          </section>

          {/* ── CTA ────────────────────────────────────────────── */}
          <section className="relative py-24 sm:py-36 overflow-hidden bg-[#05261c] bg-noise">
            <div className="absolute inset-0 [background-image:radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" aria-hidden="true" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" aria-hidden="true" />
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-emerald-400/15 blur-[110px] rounded-full pointer-events-none" aria-hidden="true" />

            <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">
              <FadeUp>
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-300 mb-7">
                  Gratis · Android &amp; Web · Mulai Sekarang
                </p>
                <h2 className={`${SERIF} text-[44px] sm:text-7xl tracking-tight leading-[1.02] max-w-3xl mx-auto mb-6 text-white`}>
                  Mulai Trading <em className="text-emerald-300">Otomatis</em> Hari Ini
                </h2>
                <p className="text-emerald-50/60 text-base sm:text-lg leading-relaxed max-w-md mx-auto mb-11">
                  Download STC AutoTrade atau buka versi web — mulai dari mode demo tanpa
                  risiko, dan rasakan perbedaannya.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
                  <a href={APK_PATH} download className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 rounded-full bg-emerald-400 text-emerald-950 text-sm font-bold hover:bg-emerald-300 transition-colors no-underline shadow-2xl shadow-emerald-500/25">
                    Download APK Android
                  </a>
                  <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 rounded-full bg-white/[0.07] border border-white/[0.14] text-white text-sm font-bold hover:bg-white/[0.14] transition-all no-underline">
                    Buka Versi Web
                  </a>
                </div>
                <p className="mt-6 text-[12px] text-emerald-100/50">Android 8.0+ · Versi Web semua perangkat · Gratis untuk member</p>
              </FadeUp>
            </div>
          </section>

        </main>

        {/* ── FOOTER ─────────────────────────────────────────── */}
        <SiteFooter />

      </div>
    </>
  );
}
