import Image from "next/image";
import PhoneImage from "@/components/PhoneImage";
import { FadeUp, StaggerView, FadeItem, FAQItem, CountUp } from "@/components/AnimatedSections";
import { HeroBadge, HeroHeading, HeroStatBar, HambatanSection, RiskCards } from "@/components/ClientAnimations";

const APK_PATH = "/StcAutoTrade.apk";

/* ── Data ─────────────────────────────────────────────────────────── */

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

const MODES = [
  { tag: "Schedule",  color: "text-blue-700 bg-blue-50 border border-blue-100",          title: "Trading Terjadwal",          desc: "Jadwalkan order berdasarkan pola historis. Bot eksekusi tepat waktu — bahkan saat Anda tidur.",                                                    for: "Trader dengan data historis teratur" },
  { tag: "Fastrade",  color: "text-emerald-700 bg-emerald-50 border border-emerald-100", title: "Trading Cepat",              desc: "Bot membaca momentum pasar pada timeframe 1m–1h dan mengeksekusi order mengikuti arah yang terdeteksi.",                                          for: "Trader aktif yang suka banyak order" },
  { tag: "CTC",       color: "text-violet-700 bg-violet-50 border border-violet-100",    title: "Copy Trading",               desc: "Tidak perlu analisis sendiri. Bot mengikuti sinyal sumber terpercaya dan eksekusi real-time di akun Anda.",                                        for: "Pemula yang ingin belajar bertahap" },
  { tag: "AI Signal", color: "text-rose-700 bg-rose-50 border border-rose-100",          title: "Sinyal Kecerdasan Buatan",   desc: "Algoritma AI menganalisis pasar secara real-time, mengidentifikasi pola, dan menghasilkan sinyal UP/DOWN otomatis.",                              for: "Trader yang ingin keputusan berbasis data" },
  { tag: "Indicator", color: "text-amber-700 bg-amber-50 border border-amber-100",       title: "Indikator Teknikal",         desc: "Bot membaca SMA, EMA, dan RSI — indikator klasik trader profesional — untuk menentukan waktu entry terbaik.",                                    for: "Trader dengan dasar analisis teknikal" },
  { tag: "Momentum",  color: "text-orange-700 bg-orange-50 border border-orange-100",    title: "Pola Candlestick",           desc: "Bot mengenali Candle Sabit, Doji Terjepit, dan BB SAR Break yang sering mendahului pergerakan harga signifikan.",                                  for: "Trader yang memahami price action" },
];

const STEPS = [
  { n: "01", title: "Pilih platform Anda",        desc: "Download APK untuk Android, atau buka langsung di browser via stcautotradepro.id — tanpa instal, siap di perangkat apapun termasuk PC, laptop, dan iPhone." },
  { n: "02", title: "Daftar akun baru",           desc: "Belum punya akun? Daftar akun harus melalui aplikasi STC AutoTrade — prosesnya cepat dan gratis, tanpa perlu berpindah ke aplikasi lain." },
  { n: "03", title: "Login dengan akun Stockity", desc: "Masuk menggunakan email dan password akun Stockity.id yang telah dibuat. Selamat, sudah bisa menggunakan STC AutoTrade!" },
  { n: "04", title: "Mulai dari mode demo",       desc: "Jangan terburu ke mode real. Gunakan demo minimal 7 hari untuk memahami strategi dan memvalidasi pengaturan Anda tanpa risiko finansial." },
  { n: "05", title: "Beralih ke mode real",       desc: "Setelah strategi teruji, mulai dengan nominal kecil. Tingkatkan bertahap seiring pertumbuhan kepercayaan diri Anda." },
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

/* ── Page ─────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaSoftwareApp) }} />

      <div className="bg-white text-zinc-900 font-[family-name:var(--font-dm-sans)]">

        {/* ── SKIP NAV ───────────────────────────────────────── */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:px-4 focus:py-2 focus:bg-white focus:text-zinc-900 focus:rounded-lg focus:shadow-lg focus:text-sm focus:font-medium focus:border focus:border-zinc-200"
        >
          Langsung ke konten utama
        </a>

        {/* ── NAV ────────────────────────────────────────────── */}
        <nav aria-label="Navigasi utama STC AutoTrade" className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2.5 no-underline">
              <Image src="/logo.webp" alt="Logo STC AutoTrade" width={26} height={26} className="rounded-lg" />
              <span className="text-sm font-semibold text-zinc-900">STC AutoTrade</span>
            </a>
            <div className="flex items-center gap-0.5">
              <a href="#fitur"      className="hidden sm:flex items-center px-3 py-2 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors no-underline rounded-lg">Fitur</a>
              <a href="#cara-kerja" className="hidden sm:flex items-center px-3 py-2 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors no-underline rounded-lg">Panduan</a>
              <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center px-3 py-2 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors no-underline rounded-lg">Versi Web</a>
              <a href={APK_PATH} download className="ml-2 flex items-center gap-1.5 px-4 py-2 bg-zinc-900 text-white text-sm font-semibold rounded-lg hover:bg-zinc-700 transition-colors no-underline shadow-sm">
                Download
              </a>
            </div>
          </div>
        </nav>

        <main id="main-content">

          {/* ── HERO ───────────────────────────────────────────── */}
          <section className="relative pt-32 pb-20 sm:pt-44 sm:pb-28 overflow-hidden border-b border-zinc-100">
            {/* Dot grid */}
            <div className="absolute inset-0 [background-image:radial-gradient(circle,#e4e4e7_1px,transparent_1px)] [background-size:32px_32px] opacity-50 pointer-events-none" />
            {/* Blue glow */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-500/[0.07] blur-[120px] rounded-full pointer-events-none" />

            <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
              <div className="grid lg:grid-cols-[1fr_300px] gap-10 lg:gap-24 items-center">

                {/* Left */}
                <div>
                  <HeroBadge />
                  <HeroHeading apkPath={APK_PATH} />
                </div>

                {/* Right — phone (visible on all screens) */}
                <div className="animate-fade-up animate-delay-300 flex justify-center lg:justify-end">
                  <div className="animate-float">
                    <PhoneImage
                      src="/gambar1.webp"
                      alt="Tampilan layar utama aplikasi STC AutoTrade menampilkan mode AI Signal aktif di akun Stockity.id"
                      label="STC AutoTrade · AI Signal"
                      priority
                    />
                  </div>
                </div>
              </div>

              <HeroStatBar />
            </div>
          </section>

          {/* ── BRAND ALIASES ──────────────────────────────────── */}
          <section className="py-4 border-b border-zinc-100 bg-zinc-50/70">
            <div className="max-w-5xl mx-auto px-5 sm:px-8">
              <FadeUp>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 justify-center">
                  <span className="text-[11px] text-zinc-400 font-medium shrink-0">Dikenal juga sebagai:</span>
                  {[
                    "StcAutoTrade", "StockAutoTrade", "Stc Auto Trade", "Stock Auto Trade",
                    "Robot Stockity", "Auto Stockity", "Bot Stockity Otomatis", "Stockity Auto Trade",
                  ].map((alias) => (
                    <span key={alias} className="text-[11px] text-zinc-500">{alias}</span>
                  ))}
                </div>
              </FadeUp>
            </div>
          </section>

          {/* ── PLATFORM ───────────────────────────────────────── */}
          <section className="py-20 sm:py-28 border-b border-zinc-100" id="platform">
            <div className="max-w-5xl mx-auto px-5 sm:px-8">
              <FadeUp className="text-center mb-12">
                <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400 mb-4">Platform</p>
                <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">Tersedia di Android &amp; Semua Browser</h2>
                <p className="text-zinc-500 text-sm mt-3 max-w-md mx-auto leading-relaxed">
                  Pilih yang paling nyaman — instal APK di Android atau langsung buka di browser tanpa instalasi.
                </p>
              </FadeUp>
              <StaggerView className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">

                {/* APK Card */}
                <FadeItem>
                  <div className="flex flex-col gap-4 p-6 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-300 hover:shadow-md hover:shadow-black/[0.04] hover:-translate-y-0.5 transition-all h-full">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-lg" aria-hidden="true">📱</div>
                      <div>
                        <p className="text-sm font-bold text-zinc-900">Aplikasi Android</p>
                        <p className="text-[11px] text-zinc-400 font-medium">stcautotrade.id · APK</p>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {["Berjalan di background 24 jam", "Notifikasi order real-time", "Performa optimal di Android 10.0+"].map((f) => (
                        <li key={f} className="flex items-center gap-2 text-[13px] text-zinc-500">
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"><circle cx="6.5" cy="6.5" r="6" fill="#2563eb" fillOpacity=".12"/><path d="M4 6.5l2 2 3-3.5" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a href={APK_PATH} download className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-zinc-900 text-white text-sm font-semibold rounded-xl hover:bg-zinc-700 transition-colors no-underline">
                      Download APK
                    </a>
                  </div>
                </FadeItem>

                {/* Web Card */}
                <FadeItem>
                  <div className="flex flex-col gap-4 p-6 bg-blue-600 rounded-2xl hover:bg-blue-700 hover:-translate-y-0.5 transition-all h-full">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="white"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a88.1,88.1,0,0,1,1.68-16.6H81.19a161.79,161.79,0,0,0,0,33.2H41.68A88.1,88.1,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h39.51A88.11,88.11,0,0,1,215.32,128H174.81a161.79,161.79,0,0,0,0-33.2ZM200.68,88H165.64c-5.56-22.77-15.47-43.28-29.41-60.41A88.35,88.35,0,0,1,200.68,88ZM119.77,27.59C105.83,44.72,95.92,65.23,90.36,88H55.32A88.35,88.35,0,0,1,119.77,27.59ZM55.32,168H90.36c5.56,22.77,15.47,43.28,29.41,60.41A88.35,88.35,0,0,1,55.32,168Zm80.95,60.41c13.94-17.13,23.85-37.64,29.41-60.41h35.04A88.35,88.35,0,0,1,136.27,228.41Z"/></svg>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Versi Web</p>
                        <p className="text-[11px] text-white/60 font-medium">stcautotradepro.id</p>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {["Tanpa instal — langsung di browser", "Kompatibel PC, Mac, iPhone, iPad", "Fitur lengkap sama seperti APK"].map((f) => (
                        <li key={f} className="flex items-center gap-2 text-[13px] text-white/80">
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"><circle cx="6.5" cy="6.5" r="6" fill="white" fillOpacity=".2"/><path d="M4 6.5l2 2 3-3.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-blue-700 text-sm font-semibold rounded-xl hover:bg-blue-50 transition-colors no-underline">
                      Buka Versi Web
                    </a>
                  </div>
                </FadeItem>
              </StaggerView>
            </div>
          </section>

          {/* ── SOCIAL PROOF ───────────────────────────────────── */}
          <section className="py-20 sm:py-28 border-b border-zinc-100 bg-zinc-50">
            <div className="max-w-5xl mx-auto px-5 sm:px-8">
              <FadeUp className="text-center mb-14">
                <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400 mb-4">Dipercaya Trader Indonesia</p>
                <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">Angka yang Bicara Sendiri</h2>
              </FadeUp>

              {/* CountUp stats */}
              <div className="grid grid-cols-3 gap-6 sm:gap-10 text-center max-w-2xl mx-auto mb-16">
                <CountUp to={50000} suffix="+" label="Order dieksekusi" />
                <CountUp to={3200} suffix="+" label="Trader aktif" />
                <CountUp to={4.9} decimals={1} suffix="★" label="Rating pengguna" />
              </div>

              <div className="border-t border-zinc-200 mb-14" />

              {/* Testimonials */}
              <StaggerView className="grid sm:grid-cols-3 gap-4">
                {TESTIMONIALS.map((t) => (
                  <FadeItem key={t.name}>
                    <div className="flex flex-col p-6 bg-white border border-zinc-100 rounded-2xl h-full hover:border-zinc-200 hover:shadow-sm transition-all">
                      {/* Stars */}
                      <div className="flex gap-0.5 mb-4" aria-label="Rating 5 bintang">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#eab308" aria-hidden="true">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                      <p className="text-[14px] text-zinc-600 leading-relaxed mb-5 flex-1">"{t.text}"</p>
                      <div>
                        <p className="text-[13px] font-semibold text-zinc-900">{t.name}</p>
                        <p className="text-[12px] text-zinc-400 mt-0.5">{t.role}</p>
                      </div>
                    </div>
                  </FadeItem>
                ))}
              </StaggerView>
            </div>
          </section>

          {/* ── HAMBATAN TRADER ────────────────────────────────── */}
          <section className="py-20 sm:py-28 border-b border-zinc-100">
            <div className="max-w-5xl mx-auto px-5 sm:px-8">
              <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-start">
                <FadeUp>
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400 mb-4">Mengapa STC AutoTrade?</p>
                  <h2 className="text-3xl sm:text-4xl font-medium tracking-tight leading-tight mb-5">
                    Empat Hambatan Terbesar<br className="hidden sm:block" /> Trader Pemula
                  </h2>
                  <p className="text-zinc-500 text-[15px] leading-relaxed mb-8">
                    Sebagian besar trader baru tidak gagal karena kurang modal — mereka gagal karena masalah yang
                    seharusnya bisa dicegah. <strong className="text-zinc-900">STC AutoTrade</strong> hadir sebagai solusinya.
                  </p>
                  <a href={APK_PATH} download className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors no-underline">
                    Download Gratis Sekarang
                  </a>
                </FadeUp>
                <HambatanSection apkPath={APK_PATH} />
              </div>
            </div>
          </section>

          {/* ── 6 MODE STRATEGI ────────────────────────────────── */}
          <section className="py-20 sm:py-28 border-b border-zinc-100 bg-zinc-50" id="fitur">
            <div className="max-w-5xl mx-auto px-5 sm:px-8">
              <FadeUp className="text-center mb-12">
                <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400 mb-4">6 Mode Strategi</p>
                <h2 className="text-3xl sm:text-4xl font-medium tracking-tight max-w-lg mx-auto leading-tight">
                  Strategi untuk Setiap Gaya Trading
                </h2>
                <p className="text-zinc-500 text-sm mt-3 max-w-md mx-auto leading-relaxed">
                  Semua mode berjalan otomatis — pilih satu, atur parameter, dan biarkan bot bekerja.
                </p>
              </FadeUp>
              <StaggerView className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {MODES.map((m) => (
                  <FadeItem key={m.tag}>
                    <article className="flex flex-col gap-3 p-5 bg-white border border-zinc-100 rounded-xl hover:border-zinc-200 hover:shadow-md hover:shadow-black/[0.04] hover:-translate-y-0.5 transition-all h-full">
                      <span className={`self-start text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md ${m.color}`}>{m.tag}</span>
                      <h3 className="text-[15px] font-semibold tracking-tight text-zinc-900">{m.title}</h3>
                      <p className="text-[13px] text-zinc-500 leading-relaxed flex-1">{m.desc}</p>
                      <p className="text-[12px] text-zinc-400 border-t border-zinc-100 pt-3 flex items-center gap-1.5">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l2.5 2.5 5.5-5" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        {m.for}
                      </p>
                    </article>
                  </FadeItem>
                ))}
              </StaggerView>
            </div>
          </section>

          {/* ── MANAJEMEN RISIKO ───────────────────────────────── */}
          <section className="py-20 sm:py-28 border-b border-zinc-100">
            <div className="max-w-5xl mx-auto px-5 sm:px-8">
              <div className="grid lg:grid-cols-[260px_1fr] gap-14 lg:gap-20 items-start">

                <div className="lg:sticky lg:top-24 flex flex-col items-center">
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
                    <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400 mb-4">Manajemen Risiko</p>
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight leading-tight mb-4">
                      Perlindungan Modal Otomatis
                    </h2>
                    <p className="text-zinc-500 text-[15px] leading-relaxed mb-5">
                      Fitur bawaan memastikan Anda tidak kehilangan lebih dari yang sudah direncanakan — bahkan tanpa memantau layar.
                    </p>
                    <div className="flex gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100 mb-7">
                      <div className="w-4 h-4 mt-0.5 shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      </div>
                      <p className="text-[13px] text-blue-700 leading-relaxed">
                        STC AutoTrade adalah alat bantu eksekusi strategi, bukan jaminan selalu profit.
                        Hasil trading tetap dipengaruhi kondisi pasar yang tidak dapat diprediksi.
                      </p>
                    </div>
                  </FadeUp>
                  <RiskCards />
                </div>
              </div>
            </div>
          </section>

          {/* ── MODE DEMO ──────────────────────────────────────── */}
          <section className="py-20 sm:py-28 border-b border-zinc-100">
            <div className="max-w-5xl mx-auto px-5 sm:px-8">
              <div className="relative overflow-hidden bg-blue-950 rounded-3xl p-8 sm:p-14">
                {/* Inner dot pattern */}
                <div className="absolute inset-0 [background-image:radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

                <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <FadeUp>
                    <p className="text-[11px] font-semibold tracking-widest uppercase text-blue-300/60 mb-4">Untuk Pemula</p>
                    <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl sm:text-5xl font-normal tracking-tight leading-[1.1] mb-5 text-white">
                      Mulai dari Demo.<br />Tanpa Risiko.
                    </h2>
                    <p className="text-blue-200/60 text-[15px] leading-relaxed mb-8">
                      Semua fitur berjalan penuh menggunakan saldo virtual dengan data pasar nyata.
                      Uji strategi dan hanya pindah ke mode real setelah benar-benar siap.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-3 mb-8">
                      {[
                        { t: "Data pasar nyata",   s: "Saldo virtual, kondisi real" },
                        { t: "Semua 6 mode",        s: "Uji tanpa risiko finansial" },
                        { t: "Riwayat lengkap",     s: "Evaluasi sebelum ke real" },
                      ].map((item) => (
                        <div key={item.t} className="p-3.5 rounded-xl bg-white/[0.06] border border-white/[0.08]">
                          <p className="text-[13px] font-semibold text-white/90 mb-1">{item.t}</p>
                          <p className="text-[12px] text-blue-300/50 leading-snug">{item.s}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a href={APK_PATH} download className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 bg-white text-zinc-900 text-sm font-bold rounded-xl hover:bg-blue-50 transition-colors no-underline">
                        Download APK Android
                      </a>
                      <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 bg-white/[0.08] border border-white/[0.12] text-white text-sm font-bold rounded-xl hover:bg-white/[0.14] transition-all no-underline">
                        Coba Versi Web
                      </a>
                    </div>
                  </FadeUp>

                  <FadeUp delay={0.15} className="flex justify-center lg:justify-end">
                    <PhoneImage
                      src="/gambar3.webp"
                      alt="Tampilan mode demo STC AutoTrade menampilkan riwayat order dan statistik profit/loss dengan data pasar nyata"
                      label="Dashboard Trading"
                      fit="contain"
                    />
                  </FadeUp>
                </div>
              </div>
            </div>
          </section>

          {/* ── CARA INSTALL ───────────────────────────────────── */}
          <section className="py-20 sm:py-28 border-b border-zinc-100 bg-zinc-50" id="cara-kerja">
            <div className="max-w-5xl mx-auto px-5 sm:px-8">
              <FadeUp className="text-center mb-14">
                <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400 mb-4">Cara Mulai</p>
                <h2 className="text-3xl sm:text-4xl font-medium tracking-tight max-w-md mx-auto leading-tight">
                  5 Langkah Memulai STC AutoTrade
                </h2>
              </FadeUp>
              <div className="max-w-xl mx-auto">
                {STEPS.map((s, i) => (
                  <FadeUp key={s.n} delay={i * 0.07}>
                    <div className="flex gap-5 py-6 border-b border-zinc-100 last:border-0">
                      <div className="w-8 h-8 min-w-[32px] rounded-full border border-zinc-200 bg-white flex items-center justify-center text-[12px] font-semibold text-zinc-400 shadow-sm">
                        {i + 1}
                      </div>
                      <div className="pt-1">
                        <h3 className="text-[15px] font-semibold mb-1.5 text-zinc-900">{s.title}</h3>
                        <p className="text-[13px] text-zinc-500 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>

          {/* ── FAQ ────────────────────────────────────────────── */}
          <section className="py-20 sm:py-28 border-b border-zinc-100">
            <div className="max-w-2xl mx-auto px-5 sm:px-8">
              <FadeUp className="mb-10">
                <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400 mb-4">FAQ</p>
                <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">Pertanyaan tentang STC AutoTrade</h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <dl>
                  {FAQS.map((item) => (
                    <FAQItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </dl>
              </FadeUp>
            </div>
          </section>

          {/* ── CTA ────────────────────────────────────────────── */}
          <section className="relative py-24 sm:py-36 overflow-hidden bg-zinc-950">
            <div className="absolute inset-0 [background-image:radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">
              <FadeUp>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-blue-400/50 mb-6">Gratis · Android &amp; Web · Mulai Sekarang</p>
                <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl sm:text-6xl font-normal tracking-tight leading-[1.1] max-w-2xl mx-auto mb-5 text-white">
                  Mulai Trading Otomatis Sekarang
                </h2>
                <p className="text-zinc-500 text-base sm:text-lg leading-relaxed max-w-md mx-auto mb-10">
                  Download <strong className="text-zinc-300">STC AutoTrade</strong> atau buka versi web — mulai dari mode demo
                  tanpa risiko, dan rasakan perbedaannya.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
                  <a href={APK_PATH} download className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-9 py-4 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-500 transition-colors no-underline shadow-2xl shadow-blue-600/20">
                    Download APK Android
                  </a>
                  <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-9 py-4 bg-white/[0.08] border border-white/[0.12] text-white text-sm font-bold rounded-xl hover:bg-white/[0.14] transition-all no-underline">
                    Buka Versi Web
                  </a>
                </div>
                <p className="mt-5 text-[12px] text-zinc-600">Android 10.0+ · Versi Web semua perangkat · Gratis</p>
              </FadeUp>
            </div>
          </section>

        </main>

        {/* ── FOOTER ─────────────────────────────────────────── */}
        <footer className="border-t border-zinc-100 py-8 bg-white">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Image src="/logo.webp" alt="Logo STC AutoTrade" width={22} height={22} className="rounded-md" />
                <span className="text-sm font-medium text-zinc-500">STC AutoTrade</span>
              </div>
              <p className="text-[11px] text-zinc-400">© 2026 STC AutoTrade (StockAutoTrade) · stcautotrade.id</p>
            </div>
            <p className="text-[12px] text-zinc-400 max-w-xs sm:text-right leading-relaxed">
              Trading mengandung risiko kerugian finansial. STC AutoTrade adalah alat bantu, bukan jaminan selalu profit.
            </p>
          </div>
        </footer>

      </div>
    </>
  );
}
