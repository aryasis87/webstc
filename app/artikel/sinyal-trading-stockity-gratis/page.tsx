/**
 * app/artikel/sinyal-trading-stockity-gratis/page.tsx
 *
 * Target keyword:
 *   Primary  : sinyal trading stockity gratis
 *   Secondary: sinyal binary stockity, cara dapat sinyal stockity,
 *              ctc copy trading stockity, sinyal bot stockity,
 *              sinyal auto trade stockity, sinyal ai stockity
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Sinyal Trading Stockity Gratis: CTC, AI Signal & Bot 2026",
  description:
    "Panduan mendapatkan sinyal trading Stockity gratis — cara kerja CTC Copy Trading, AI Signal, sinyal indikator, dan cara menggunakannya dengan robot STC AutoTrade secara otomatis.",
  keywords: [
    "sinyal trading stockity gratis",
    "sinyal binary stockity",
    "cara dapat sinyal stockity",
    "ctc copy trading stockity",
    "sinyal bot stockity",
    "sinyal auto trade stockity",
    "sinyal ai stockity",
    "sinyal stockity akurat",
    "copy trading stockity",
    "sinyal robot trading stockity",
    "cara trading stockity dengan sinyal",
    "sinyal binary option gratis",
    "sinyal trading otomatis stockity",
    "ai signal stockity cara kerja",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/sinyal-trading-stockity-gratis",
  },
  openGraph: {
    title: "Sinyal Trading Stockity Gratis: CTC, AI Signal & Bot 2026",
    description: "Cara mendapatkan dan menggunakan sinyal trading Stockity gratis — CTC Copy Trading, AI Signal, dan integrasi dengan bot STC AutoTrade.",
    url: "https://stcautotrade.id/artikel/sinyal-trading-stockity-gratis",
    type: "article",
    publishedTime: "2025-06-01T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [{ url: "https://stcautotrade.id/og-image.webp", width: 1200, height: 630, alt: "Sinyal Trading Stockity Gratis — STC AutoTrade" }],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sinyal Trading Stockity Gratis: CTC, AI Signal & Bot 2026",
  description: "Panduan mendapatkan sinyal trading Stockity gratis — cara kerja CTC Copy Trading, AI Signal, dan integrasi dengan robot STC AutoTrade.",
  author: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  publisher: { "@type": "Organization", name: "STC AutoTrade", logo: { "@type": "ImageObject", url: "https://stcautotrade.id/logo.webp" } },
  datePublished: "2025-06-01",
  dateModified: "2026-06-07",
  image: "https://stcautotrade.id/og-image.webp",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stcautotrade.id/artikel/sinyal-trading-stockity-gratis" },
  keywords: "sinyal trading stockity gratis, ctc copy trading stockity, sinyal ai stockity",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: "https://stcautotrade.id" },
    { "@type": "ListItem", position: 2, name: "Artikel", item: "https://stcautotrade.id/artikel" },
    { "@type": "ListItem", position: 3, name: "Sinyal Trading Stockity Gratis", item: "https://stcautotrade.id/artikel/sinyal-trading-stockity-gratis" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah sinyal trading Stockity bisa didapat gratis?",
      acceptedAnswer: { "@type": "Answer", text: "Ya. Melalui STC AutoTrade, Anda bisa mendapatkan sinyal gratis via dua mode: CTC Copy Trading (sinyal dari trader berpengalaman di jaringan STC) dan AI Signal (sinyal berbasis machine learning). Keduanya tersedia tanpa biaya untuk member terdaftar." },
    },
    {
      "@type": "Question",
      name: "Apa itu CTC Copy Trading Stockity?",
      acceptedAnswer: { "@type": "Answer", text: "CTC (Copy Trading Channel) adalah fitur di STC AutoTrade di mana bot secara otomatis menyalin sinyal dari trader/channel terpercaya di jaringan STC. Setiap sinyal yang dikirim langsung dieksekusi sebagai order di akun Stockity.id Anda tanpa perlu analisis manual." },
    },
    {
      "@type": "Question",
      name: "Seberapa akurat sinyal AI Stockity?",
      acceptedAnswer: { "@type": "Answer", text: "Win rate sinyal AI bervariasi tergantung kondisi pasar — umumnya 55–70% pada kondisi pasar normal dengan tren jelas. Win rate cenderung lebih rendah saat pasar sideways atau ada berita besar. Ini kenapa manajemen risiko (stop loss, martingale konservatif) tetap diperlukan." },
    },
    {
      "@type": "Question",
      name: "Bisakah sinyal Stockity dieksekusi otomatis tanpa pengawasan?",
      acceptedAnswer: { "@type": "Answer", text: "Ya, itulah fungsi utama STC AutoTrade. Setelah Anda set mode (AI Signal atau CTC), bot akan menerima dan mengeksekusi setiap sinyal secara otomatis — bahkan saat Anda tidur, asalkan perangkat tetap menyala dan terhubung internet." },
    },
  ],
};

/* ── Komponen Lokal ───────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/35 mb-5 flex items-center gap-3">
      {children}
      <span className="flex-1 h-px bg-[rgba(26,22,18,0.08)]" />
    </p>
  );
}

function InfoBox({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl px-5 py-4 flex gap-3">
      <span className="text-xl flex-shrink-0">{icon}</span>
      <div>
        <p className="text-[12px] font-semibold text-[#1d4ed8] mb-1">{title}</p>
        <p className="text-[13px] text-[#1e40af] leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#fffbeb] border border-[#fde68a] rounded-xl px-5 py-4 flex gap-3">
      <span className="text-xl flex-shrink-0">⚠️</span>
      <p className="text-[13px] text-[#92400e] leading-relaxed">{children}</p>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────── */

export default function SinyalTradingStockityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#f9fafb]">
        {/* ── Nav ───────────────────────────────────────────── */}
        <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[rgba(26,22,18,0.08)]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 no-underline">
              <Image src="/logo.webp" alt="STC AutoTrade" width={28} height={28} className="rounded-[6px]" />
              <span className="text-sm font-semibold text-[#1a1612]">STC AutoTrade</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/cara-kerja" className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#1a1612]/60 hover:text-[#1a1612] transition-colors no-underline">Cara Kerja</Link>
              <Link href="/faq" className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#1a1612]/60 hover:text-[#1a1612] transition-colors no-underline">FAQ</Link>
              <Link href="/download" className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1a1612] text-white text-xs font-semibold rounded-lg hover:bg-[#1a1612]/85 transition-colors no-underline">Download</Link>
            </div>
          </div>
        </nav>

        {/* ── Breadcrumb ────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-[12px] text-[#1a1612]/40 flex-wrap">
              <li><Link href="/" className="hover:text-[#1a1612]/70 transition-colors no-underline">Beranda</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/artikel" className="hover:text-[#1a1612]/70 transition-colors no-underline">Artikel</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-[#1a1612]/70 font-medium">Sinyal Trading Stockity Gratis</li>
            </ol>
          </nav>
        </div>

        {/* ── Article Header ────────────────────────────────── */}
        <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="inline-flex items-center px-2.5 py-1 bg-[#dbeafe] text-[#1d4ed8] text-[11px] font-semibold rounded-full">Panduan</span>
            <span className="text-[12px] text-[#1a1612]/35">1 Juni 2026</span>
            <span className="text-[12px] text-[#1a1612]/35">·</span>
            <span className="text-[12px] text-[#1a1612]/35">±7 menit baca</span>
          </div>

          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5">
            Sinyal Trading Stockity Gratis:<br className="hidden sm:block" />
            CTC, AI Signal & Cara Kerjanya 2026
          </h1>

          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            Salah satu cara paling efektif trading di Stockity.id tanpa harus analisis manual adalah
            menggunakan <strong className="font-semibold text-[#1a1612]">sinyal trading Stockity</strong> yang
            dieksekusi otomatis oleh bot. Artikel ini menjelaskan sumber sinyal yang tersedia di{" "}
            <strong className="font-semibold text-[#1a1612]">STC AutoTrade</strong>, cara kerjanya,
            dan bagaimana menggunakannya secara gratis.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-8 border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden">
            {[
              { v: "2 Sumber", l: "Sinyal Gratis" },
              { v: "Otomatis", l: "Eksekusi Bot" },
              { v: "24/7", l: "Aktif" },
              { v: "Gratis", l: "Untuk Member" },
            ].map((s, i) => (
              <div key={i} className="bg-white py-4 px-4 text-center border-r border-[rgba(26,22,18,0.07)] last:border-0">
                <p className="font-[family-name:var(--font-dm-serif)] text-2xl text-[#1a1612] mb-0.5">{s.v}</p>
                <p className="text-[11px] text-[#1a1612]/40">{s.l}</p>
              </div>
            ))}
          </div>
        </header>

        {/* ── Article Body ──────────────────────────────────── */}
        <main className="max-w-4xl mx-auto px-5 sm:px-8 pb-24">
          <article className="space-y-14">

            {/* ── Section 1 ─────────────────────────────────── */}
            <section>
              <SectionLabel>01 · Apa Itu Sinyal Trading</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Apa Itu Sinyal Trading Stockity?
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  <strong className="text-[#1a1612]">Sinyal trading</strong> adalah rekomendasi arah order
                  (UP atau DOWN) yang dihasilkan berdasarkan analisis pasar — bisa dari algoritma komputer,
                  indikator teknikal, atau trader berpengalaman. Di platform Stockity.id (binary option),
                  sinyal yang akurat sangat menentukan apakah order Anda WIN atau LOSS.
                </p>
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Yang membuat STC AutoTrade berbeda adalah: sinyal ini tidak hanya tersedia, tapi juga
                  <strong className="text-[#1a1612]"> langsung dieksekusi secara otomatis</strong> ke akun
                  Stockity.id Anda — tanpa harus Anda buka platform dan klik manual setiap kali ada sinyal.
                </p>
                <InfoBox icon="🤖" title="Sinyal + Bot = Trading 24/7 Tanpa Pengawasan">
                  Kombinasi sinyal otomatis dan eksekusi bot memungkinkan Anda trading semalaman atau
                  seharian tanpa harus menatap layar. Bot menerima sinyal → bot mengeksekusi order →
                  manajemen risiko (stop loss/profit) berjalan otomatis.
                </InfoBox>
              </div>
            </section>

            {/* ── Section 2: Sumber Sinyal ──────────────────── */}
            <section>
              <SectionLabel>02 · Sumber Sinyal di STC AutoTrade</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                4 Sumber Sinyal Gratis di STC AutoTrade
              </h2>
              <div className="space-y-4">
                {[
                  {
                    tag: "AI Signal",
                    tagColor: "bg-rose-50 text-rose-700 border-rose-200",
                    title: "Sinyal Kecerdasan Buatan",
                    desc: "Algoritma machine learning memproses ratusan data pasar per detik — harga, volume, momentum, pola — dan menghasilkan sinyal UP/DOWN berdasarkan probabilitas tertinggi. Tidak memerlukan pengaturan manual apapun dari user.",
                    pros: ["Tidak perlu pengaturan manual", "Belajar dari pola pasar terkini", "Cocok untuk semua aset di Stockity"],
                    ideal: "Pemula yang ingin mulai langsung",
                  },
                  {
                    tag: "CTC Copy Trading",
                    tagColor: "bg-violet-50 text-violet-700 border-violet-200",
                    title: "Copy Sinyal Trader Berpengalaman",
                    desc: "Bot menyalin sinyal dari trader atau channel terpercaya di jaringan STC secara real-time. Setiap sinyal yang dikirim channel tersebut langsung dieksekusi di akun Anda. Cara paling mudah untuk mendapatkan sinyal dari trader yang sudah teruji.",
                    pros: ["Sinyal dari trader manusia berpengalaman", "Tidak perlu analisis sendiri", "Transparansi sumber sinyal"],
                    ideal: "Pemula & intermediate",
                  },
                  {
                    tag: "Indicator Signal",
                    tagColor: "bg-amber-50 text-amber-700 border-amber-200",
                    title: "Sinyal dari Indikator Teknikal",
                    desc: "Tiga indikator klasik — SMA, EMA, dan RSI — dijalankan otomatis oleh bot. Sinyal UP/DOWN dihasilkan saat kondisi indikator terpenuhi (misalnya: EMA crossover naik + RSI di bawah 70). Anda tidak perlu membaca chart sendiri.",
                    pros: ["Berbasis analisis teknikal terbuktikan", "Dapat dikustomisasi parameternya", "Deterministik — mudah dianalisis hasilnya"],
                    ideal: "Trader yang memahami analisis teknikal dasar",
                  },
                  {
                    tag: "Candlestick Pattern",
                    tagColor: "bg-orange-50 text-orange-700 border-orange-200",
                    title: "Sinyal dari Pola Candlestick",
                    desc: "Bot mendeteksi formasi candlestick bertenaga secara real-time: Hammer, Shooting Star, Doji, Engulfing, BB SAR Break. Setiap pola yang valid langsung menghasilkan sinyal dan dieksekusi. Berbasis price action murni.",
                    pros: ["Price action tanpa lag indikator", "Efektif di sesi dengan volatilitas jelas", "Tidak bergantung pada indikator lagging"],
                    ideal: "Trader dengan pemahaman price action",
                  },
                ].map((s) => (
                  <div key={s.tag} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5 sm:p-6">
                    <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${s.tagColor}`}>{s.tag}</span>
                      <span className="text-[11px] text-[#1a1612]/50">{s.ideal}</span>
                    </div>
                    <h3 className="text-[14px] font-semibold text-[#1a1612] mb-2">{s.title}</h3>
                    <p className="text-[13px] text-[#6b6058] leading-relaxed mb-3">{s.desc}</p>
                    <div className="space-y-1.5">
                      {s.pros.map((p) => (
                        <div key={p} className="flex items-center gap-2 text-[12px] text-[#6b6058]">
                          <span className="text-emerald-500 text-xs">✓</span>
                          {p}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Section 3: Cara Gunakan ───────────────────── */}
            <section>
              <SectionLabel>03 · Cara Menggunakan Sinyal</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cara Menggunakan Sinyal Stockity dengan STC AutoTrade
              </h2>
              <div className="max-w-2xl space-y-3">
                {[
                  { n: "1", title: "Download atau buka STC AutoTrade", desc: "Akses melalui APK Android (stcautotrade.id) atau versi web (stcautotradepro.id). Tidak perlu instalasi untuk versi web — langsung buka di browser." },
                  { n: "2", title: "Login dan hubungkan akun Stockity.id", desc: "Login di STC AutoTrade dan hubungkan ke akun Stockity.id Anda. Proses koneksi menggunakan token — password Anda tidak pernah disimpan di server manapun." },
                  { n: "3", title: "Pilih mode sinyal", desc: "Untuk pemula: pilih CTC Copy Trading atau AI Signal. Tidak perlu konfigurasi kompleks — cukup aktifkan dan bot langsung menerima sinyal." },
                  { n: "4", title: "Set manajemen risiko", desc: "Sebelum mengaktifkan bot, set Stop Loss harian dan Stop Profit. Aktifkan martingale jika diinginkan (opsional). Ini langkah paling penting." },
                  { n: "5", title: "Aktifkan bot", desc: "Klik tombol START/Aktifkan. Bot sekarang akan menerima setiap sinyal dari sumber yang dipilih dan mengeksekusi order secara otomatis di akun Stockity.id Anda." },
                  { n: "6", title: "Monitor hasil di riwayat transaksi", desc: "Anda bisa memantau performa sinyal melalui riwayat order di akun Stockity.id. Evaluasi win rate secara berkala dan sesuaikan setting jika diperlukan." },
                ].map((s) => (
                  <div key={s.n} className="flex gap-4 bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-5 py-4">
                    <div className="w-8 h-8 min-w-[32px] rounded-full border border-[rgba(26,22,18,0.12)] bg-[#eff6ff] flex items-center justify-center text-[12px] font-bold text-[#1d4ed8]">{s.n}</div>
                    <div className="pt-0.5">
                      <h3 className="text-[13px] font-semibold text-[#1a1612] mb-1">{s.title}</h3>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Section 4: Tips Sinyal ────────────────────── */}
            <section>
              <SectionLabel>04 · Tips Memaksimalkan Sinyal</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Tips Memaksimalkan Win Rate Sinyal Stockity
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: "⏰", title: "Trading di sesi aktif", desc: "Sinyal memiliki akurasi lebih tinggi saat market sedang aktif — sesi London (15.00–20.00 WIB) dan sesi New York (20.00–01.00 WIB). Hindari sesi Asia dini hari yang cenderung lebih sideways." },
                  { icon: "📊", title: "Pilih aset dengan tren jelas", desc: "Sinyal bekerja lebih baik pada aset yang memiliki tren jelas, bukan sideways. Cek kondisi pasar secara umum sebelum mengaktifkan bot — hindari hari-hari dengan rilis berita besar." },
                  { icon: "🛡️", title: "Selalu aktifkan stop loss", desc: "Tanpa stop loss, satu sesi buruk dengan sinyal akurasi rendah bisa menghapus profit berhari-hari. Stop loss harian adalah perlindungan paling fundamental." },
                  { icon: "📈", title: "Uji di mode demo terlebih dahulu", desc: "Sebelum menggunakan sinyal di akun real, uji selama 7–14 hari di mode demo. Catat win rate dan pola loss. Baru pindah ke real jika hasil demo konsisten." },
                ].map((tip) => (
                  <div key={tip.title} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                    <div className="text-xl mb-2.5">{tip.icon}</div>
                    <h3 className="text-[13px] font-semibold text-[#1a1612] mb-2">{tip.title}</h3>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed">{tip.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <WarningBox>
                  Tidak ada sinyal yang 100% akurat — selalu ada probabilitas loss pada setiap order.
                  Manajemen risiko (stop loss, martingale konservatif, modal yang cukup) sama pentingnya
                  dengan kualitas sinyal itu sendiri.
                </WarningBox>
              </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────── */}
            <section>
              <SectionLabel>05 · FAQ</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
                Pertanyaan Umum Seputar Sinyal Stockity
              </h2>
              <div className="space-y-3">
                {[
                  { q: "Apakah sinyal STC AutoTrade benar-benar gratis?", a: "Ya. Semua sumber sinyal di STC AutoTrade (AI Signal, CTC Copy Trading, Indicator, Candlestick) tersedia gratis untuk member terdaftar. Tidak ada biaya berlangganan sinyal — akses melalui aplikasi atau whitelist." },
                  { q: "Sinyal mana yang paling akurat di Stockity?", a: "Akurasi sinyal sangat bergantung pada kondisi pasar. Tidak ada satu sinyal yang selalu paling akurat. Di pasar trending, AI Signal dan Indicator cenderung performanya lebih baik. Di pasar dengan momentum jelas dari trader lain, CTC Copy Trading bisa sangat efektif." },
                  { q: "Apakah bisa menggunakan beberapa sumber sinyal sekaligus?", a: "Bergantung pada pengaturan di STC AutoTrade — beberapa mode bisa dikombinasikan. Namun lebih disarankan untuk memfokuskan satu mode terlebih dahulu, pahami win rate-nya, baru bereksperimen dengan kombinasi." },
                  { q: "Bagaimana cara berhenti menerima sinyal saat ingin jeda?", a: "Cukup klik tombol STOP atau nonaktifkan bot di aplikasi STC AutoTrade. Bot akan berhenti menerima dan mengeksekusi sinyal baru. Manajemen stop loss/profit otomatis juga ikut berhenti." },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl px-5 py-4">
                    <h3 className="text-[13px] sm:text-[14px] font-semibold text-[#1a1612] mb-2 leading-snug">{item.q}</h3>
                    <p className="text-[13px] text-[#6b6058] leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

          </article>

          {/* ── Internal Links ────────────────────────────── */}
          <div className="mt-14 pt-10 border-t border-[rgba(26,22,18,0.08)]">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/35 mb-5">Artikel Terkait</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { href: "/artikel/robot-trading-stockity", title: "Robot Trading Stockity", desc: "Panduan lengkap auto trade Stockity 2026" },
                { href: "/artikel/cara-setting-robot-stockity", title: "Cara Setting Robot Stockity", desc: "Konfigurasi bot step by step untuk pemula" },
                { href: "/artikel/cara-profit-trading-stockity", title: "Cara Profit Trading Stockity", desc: "Strategi & tips konsisten profit di Stockity" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="group block bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-4 hover:border-[#3b82f6]/30 hover:shadow-sm transition-all no-underline">
                  <p className="text-[13px] font-semibold text-[#1a1612] mb-1 group-hover:text-[#3b82f6] transition-colors">{l.title} →</p>
                  <p className="text-[12px] text-[#6b6058]">{l.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </main>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="border-t border-[rgba(26,22,18,0.08)] bg-white py-14">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3b82f6] mb-1.5">Sinyal Gratis, Eksekusi Otomatis</p>
              <p className="text-base font-semibold text-[#1a1612] mb-1">Mulai Trading dengan Sinyal AI & CTC Gratis</p>
              <p className="text-[13px] text-[#6b6058]">Download STC AutoTrade dan akses sinyal gratis hari ini — APK Android atau langsung di browser.</p>
            </div>
            <div className="flex gap-2.5 flex-shrink-0">
              <Link href="/download" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1a1612] text-white text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all no-underline">Download APK</Link>
              <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2.5 border border-[rgba(26,22,18,0.16)] text-[#1a1612]/70 text-sm font-medium rounded-xl hover:border-[rgba(26,22,18,0.28)] hover:text-[#1a1612] transition-all no-underline">Versi Web</a>
            </div>
          </div>
        </section>

        {/* ── Footer ────────────────────────────────────────── */}
        <footer className="border-t border-[rgba(26,22,18,0.07)] py-6 bg-[#f9fafb]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-[11px] text-[#1a1612]/25">© 2026 STC AutoTrade (StockAutoTrade) · stcautotrade.id</p>
            <Link href="/" className="text-[11px] text-[#1a1612]/35 hover:text-[#1a1612]/60 transition-colors no-underline">← Beranda</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
