/**
 * app/artikel/ai-trading-stockity/page.tsx
 *
 * Target keyword:
 *   Primary  : ai trading stockity
 *   Secondary: ai trading indonesia, robot ai binary option, sinyal ai
 *              trading, machine learning trading, ai signal stockity
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "AI Trading Stockity: Cara Kerja Robot AI untuk Binary Option 2026",
  description:
    "Bagaimana AI trading bekerja di Stockity? Penjelasan cara kerja sinyal AI, kelebihan vs analisis manual, batasan yang wajib dipahami, dan panduan menggunakan mode AI Signal di STC AutoTrade.",
  keywords: [
    "ai trading stockity",
    "ai trading indonesia",
    "robot ai binary option",
    "sinyal ai trading",
    "ai signal stockity",
    "machine learning trading",
    "trading pakai ai",
    "robot trading ai gratis",
    "kecerdasan buatan trading",
    "ai trading untuk pemula",
    "aplikasi ai trading android",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/ai-trading-stockity",
    languages: {
      "id-ID": "https://stcautotrade.id/artikel/ai-trading-stockity",
      en: "https://stcautotrade.id/en/articles/ai-trading-stockity",
      ru: "https://stcautotrade.id/ru/articles/ai-trading-stockity",
      "x-default": "https://stcautotrade.id/artikel/ai-trading-stockity",
    },
  },
  openGraph: {
    title: "AI Trading Stockity: Cara Kerja Robot AI untuk Binary Option 2026",
    description:
      "Cara kerja sinyal AI di Stockity, kelebihan dan batasannya, plus panduan mode AI Signal di STC AutoTrade.",
    url: "https://stcautotrade.id/artikel/ai-trading-stockity",
    type: "article",
    publishedTime: "2026-07-03T00:00:00.000Z",
    modifiedTime: "2026-07-03T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [{ url: "https://stcautotrade.id/og?t=AI%20Trading%20Stockity%3A%20Cara%20Kerja%20Robot%20AI%20untuk%20Binary%20Option%202026&l=id", width: 1200, height: 630, alt: "AI Trading Stockity — STC AutoTrade" }],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Trading Stockity: Cara Kerja Robot AI untuk Binary Option 2026",
  description: "Penjelasan cara kerja AI trading di Stockity — analisis machine learning, kelebihan vs manual, batasan, dan panduan mode AI Signal.",
  author: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  publisher: { "@type": "Organization", name: "STC AutoTrade", logo: { "@type": "ImageObject", url: "https://stcautotrade.id/logo.webp" } },
  datePublished: "2026-07-03",
  dateModified: "2026-07-03",
  image: "https://stcautotrade.id/og?t=AI%20Trading%20Stockity%3A%20Cara%20Kerja%20Robot%20AI%20untuk%20Binary%20Option%202026&l=id",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stcautotrade.id/artikel/ai-trading-stockity" },
  keywords: "ai trading stockity, ai trading indonesia, robot ai binary option, ai signal",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: "https://stcautotrade.id" },
    { "@type": "ListItem", position: 2, name: "Artikel", item: "https://stcautotrade.id/artikel" },
    { "@type": "ListItem", position: 3, name: "AI Trading Stockity", item: "https://stcautotrade.id/artikel/ai-trading-stockity" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Apa itu AI trading di Stockity?", acceptedAnswer: { "@type": "Answer", text: "AI trading adalah penggunaan algoritma kecerdasan buatan untuk menganalisis pergerakan pasar secara real-time dan menghasilkan sinyal UP/DOWN otomatis. Di STC AutoTrade, fitur ini tersedia melalui mode AI Signal yang terhubung langsung ke akun Stockity Anda." } },
    { "@type": "Question", name: "Apakah AI trading selalu profit?", acceptedAnswer: { "@type": "Answer", text: "Tidak. AI meningkatkan kualitas dan konsistensi keputusan dengan menghilangkan emosi, namun pasar tetap mengandung ketidakpastian. Selalu gunakan stop loss dan mulai dari mode demo." } },
    { "@type": "Question", name: "Apakah perlu paham coding untuk pakai AI trading?", acceptedAnswer: { "@type": "Answer", text: "Tidak. Di STC AutoTrade cukup pilih mode AI Signal, atur nominal dan manajemen risiko, lalu aktifkan bot — semua analisis berjalan otomatis di belakang layar." } },
    { "@type": "Question", name: "Apa bedanya AI Signal dengan indikator teknikal biasa?", acceptedAnswer: { "@type": "Answer", text: "Indikator klasik (SMA, EMA, RSI) menghitung formula tetap dari harga historis. AI Signal memproses lebih banyak variabel sekaligus — momentum, volume, pola — dan bobot keputusannya adaptif terhadap kondisi pasar terkini." } },
  ],
};

/* ── Komponen Lokal ───────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/65 mb-5 flex items-center gap-3">
      {children}
      <span className="flex-1 h-px bg-[rgba(26,22,18,0.08)]" />
    </p>
  );
}

function InfoBox({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#ecfdf5] border border-[#a7f3d0] rounded-xl px-5 py-4 flex gap-3">
      <span className="text-xl flex-shrink-0">{icon}</span>
      <div>
        <p className="text-[12px] font-semibold text-[#047857] mb-1">{title}</p>
        <p className="text-[13px] text-[#065f46] leading-relaxed">{children}</p>
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

export default function AiTradingStockityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#f6f4ef]">
        {/* ── Nav ───────────────────────────────────────────── */}
        <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[rgba(26,22,18,0.08)]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 no-underline">
              <Image src="/logo.webp" alt="Logo STC AutoTrade" width={28} height={28} className="rounded-[6px]" />
              <span className="text-sm font-semibold text-[#1a1612]">STC AutoTrade</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/cara-kerja" className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#1a1612]/65 hover:text-[#1a1612] transition-colors no-underline">Cara Kerja</Link>
              <Link href="/faq" className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#1a1612]/65 hover:text-[#1a1612] transition-colors no-underline">FAQ</Link>
              <Link href="/download" className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1a1612] text-white text-xs font-semibold rounded-lg hover:bg-[#1a1612]/85 transition-colors no-underline">Download</Link>
            </div>
          </div>
        </nav>

        {/* ── Breadcrumb ────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-[12px] text-[#1a1612]/65 flex-wrap">
              <li><Link href="/" className="hover:text-[#1a1612] transition-colors no-underline">Beranda</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/artikel" className="hover:text-[#1a1612] transition-colors no-underline">Artikel</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-[#1a1612]/70 font-medium">AI Trading Stockity</li>
            </ol>
          </nav>
        </div>

        {/* ── Article Header ────────────────────────────────── */}
        <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="inline-flex items-center px-2.5 py-1 bg-[#fce7f3] text-[#be185d] text-[11px] font-semibold rounded-full">Edukasi</span>
            <span className="text-[12px] text-[#1a1612]/65">3 Juli 2026</span>
            <span className="text-[12px] text-[#1a1612]/65">·</span>
            <span className="text-[12px] text-[#1a1612]/65">±8 menit baca</span>
          </div>

          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5">
            AI Trading Stockity: Cara Kerja<br className="hidden sm:block" />
            Robot AI untuk Binary Option
          </h1>

          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            <strong className="font-semibold text-[#1a1612]">AI trading</strong> bukan lagi milik institusi
            besar — trader ritel Indonesia kini bisa memakai sinyal kecerdasan buatan langsung di akun
            Stockity. Artikel ini membedah cara kerjanya, apa yang realistis diharapkan, dan apa yang tidak.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-8 border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden">
            {[
              { v: "Real-time", l: "Analisis Pasar" },
              { v: "0 Emosi", l: "Keputusan Konsisten" },
              { v: "24/7", l: "Bot di Server" },
              { v: "Demo", l: "Uji Tanpa Risiko" },
            ].map((s, i) => (
              <div key={i} className="bg-white py-4 px-4 text-center border-r border-[rgba(26,22,18,0.07)] last:border-0">
                <p className="font-[family-name:var(--font-dm-serif)] text-2xl text-[#1a1612] mb-0.5">{s.v}</p>
                <p className="text-[11px] text-[#1a1612]/65">{s.l}</p>
              </div>
            ))}
          </div>
        </header>

        {/* ── Article Body ──────────────────────────────────── */}
        <main className="max-w-4xl mx-auto px-5 sm:px-8 pb-24">
          <article className="space-y-14">

            {/* ── Section 1 ─────────────────────────────────── */}
            <section>
              <SectionLabel>01 · Konsep</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Apa Itu AI Trading?
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  AI trading adalah pemanfaatan <strong className="text-[#1a1612]">algoritma kecerdasan
                  buatan / machine learning</strong> untuk menganalisis pasar dan mengambil (atau
                  merekomendasikan) keputusan trading. Berbeda dengan indikator klasik yang menghitung
                  formula tetap, model AI belajar dari data historis dan menyesuaikan bobot keputusannya
                  terhadap kondisi pasar yang terus berubah.
                </p>
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Untuk binary option, output-nya sederhana namun kuat: sinyal{" "}
                  <strong className="text-[#1a1612]">UP atau DOWN</strong> beserta momen eksekusinya —
                  dihasilkan dari pemrosesan ratusan data poin per detik yang mustahil dilakukan manusia
                  secara manual.
                </p>
                <InfoBox icon="🧠" title="AI ≠ ramalan ajaib">
                  Model AI bekerja dengan probabilitas, bukan kepastian. Sinyal muncul saat peluang
                  melampaui threshold tertentu — sama seperti trader profesional yang hanya masuk saat
                  "odds" berpihak padanya.
                </InfoBox>
              </div>
            </section>

            {/* ── Section 2 ─────────────────────────────────── */}
            <section>
              <SectionLabel>02 · Cara Kerja</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Bagaimana Sinyal AI Dihasilkan?
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed mb-6">
                Di mode AI Signal STC AutoTrade, alurnya berjalan otomatis dari analisis sampai eksekusi:
              </p>
              <div className="space-y-3 max-w-2xl">
                {[
                  { n: "1", title: "Pengumpulan data real-time", desc: "Algoritma memindai pergerakan harga Stockity setiap detik — harga, momentum, volume, dan pola candle terbaru." },
                  { n: "2", title: "Pengenalan pola", desc: "Model membandingkan kondisi live dengan pola-pola dari data historis yang pernah dipelajari — jauh lebih banyak variabel daripada indikator tunggal." },
                  { n: "3", title: "Perhitungan probabilitas", desc: "Setiap kandidat sinyal diberi skor probabilitas. Hanya yang melampaui threshold yang diteruskan menjadi sinyal UP/DOWN." },
                  { n: "4", title: "Eksekusi otomatis", desc: "Bot langsung mengeksekusi order di akun Stockity Anda — tanpa jeda, tanpa keraguan, tanpa emosi. Stop loss dan martingale (jika aktif) dikelola otomatis." },
                ].map((s) => (
                  <div key={s.n} className="flex gap-4 bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-5 py-4">
                    <div className="w-8 h-8 min-w-[32px] rounded-full border border-[rgba(26,22,18,0.12)] bg-[#f0fdf4] flex items-center justify-center text-[12px] font-bold text-[#0f766e]">{s.n}</div>
                    <div className="pt-0.5">
                      <h3 className="text-[13px] font-semibold text-[#1a1612] mb-1">{s.title}</h3>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Section 3 ─────────────────────────────────── */}
            <section>
              <SectionLabel>03 · Perbandingan</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                AI Signal vs Analisis Manual: Kapan AI Unggul?
              </h2>
              <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl overflow-hidden">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="bg-[#f6f4ef] border-b border-[rgba(26,22,18,0.07)]">
                      <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Aspek</th>
                      <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Analisis Manual</th>
                      <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">AI Signal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Kecepatan analisis", "Menit — terbatas fokus manusia", "Milidetik, ratusan data poin/detik"],
                      ["Konsistensi", "Terpengaruh emosi & kelelahan", "Identik di order ke-1 dan ke-100"],
                      ["Jam operasional", "Terbatas waktu luang", "24 jam nonstop di server"],
                      ["Kurva belajar", "Berbulan-bulan", "Langsung pakai, atur risiko saja"],
                      ["Fleksibilitas intuisi", "Bisa membaca konteks berita/situasi", "Terbatas pada pola data yang dipelajari"],
                      ["Kontrol penuh", "Ya — setiap keputusan di tangan Anda", "Anda mengatur batasan, bot mengeksekusi"],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-[rgba(26,22,18,0.05)] last:border-0">
                        <td className="px-4 py-3 font-medium text-[#1a1612]">{row[0]}</td>
                        <td className="px-4 py-3 text-[#6b6058]">{row[1]}</td>
                        <td className="px-4 py-3 text-[#6b6058]">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[13px] text-[#6b6058] mt-4">
                Kombinasi terbaik untuk banyak trader: biarkan AI menangani eksekusi rutin, sementara Anda
                fokus pada manajemen modal dan evaluasi mingguan.
              </p>
            </section>

            {/* ── Section 4 ─────────────────────────────────── */}
            <section>
              <SectionLabel>04 · Batasan</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Batasan AI Trading yang Wajib Dipahami
              </h2>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: "⚠️", title: "Pasar tetap tidak pasti", desc: "AI meningkatkan probabilitas, bukan menghilangkan risiko. Kejadian tak terduga (berita besar, lonjakan mendadak) bisa membalikkan sinyal terbaik sekalipun." },
                    { icon: "⚠️", title: "Performa bergantung kondisi pasar", desc: "Model yang unggul di pasar bertren bisa melemah di pasar sideways ekstrem. Evaluasi hasil secara berkala, jangan set-and-forget selamanya." },
                    { icon: "⚠️", title: "Bukan pengganti manajemen modal", desc: "Sinyal sebagus apapun akan menguras saldo jika nominal order terlalu besar. Stop loss harian tetap wajib aktif." },
                    { icon: "✅", title: "Mitigasi: demo + batas risiko", desc: "Uji AI Signal di akun demo minimal 7 hari, aktifkan stop loss & stop profit, dan mulai akun real dengan nominal terkecil." },
                  ].map((item) => (
                    <div key={item.title} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                      <div className="text-xl mb-2">{item.icon}</div>
                      <h3 className="text-[13px] font-semibold text-[#1a1612] mb-2">{item.title}</h3>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <WarningBox>
                  Waspadai klaim "AI dengan win rate 99%" atau "profit pasti" — itu tanda penipuan. AI trading
                  yang jujur selalu bicara probabilitas dan manajemen risiko.
                </WarningBox>
              </div>
            </section>

            {/* ── Section 5 ─────────────────────────────────── */}
            <section>
              <SectionLabel>05 · Praktik</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cara Menggunakan Mode AI Signal di STC AutoTrade
              </h2>
              <div className="space-y-3 max-w-2xl">
                {[
                  { n: "1", title: "Download & login", desc: "Instal STC AutoTrade (APK Android) atau buka versi web di stcautotradepro.id, lalu login dengan akun Stockity Anda." },
                  { n: "2", title: "Pilih mode AI Signal", desc: "Dari daftar 6 mode strategi, pilih AI Signal. Tidak ada parameter analisis yang perlu diatur — model bekerja otomatis." },
                  { n: "3", title: "Atur nominal & manajemen risiko", desc: "Set nominal order (mulai kecil), martingale bila diinginkan (maks 3 step untuk pemula), lalu stop loss & stop profit harian." },
                  { n: "4", title: "Mulai di akun demo", desc: "Jalankan minimal 7 hari di demo. Amati win rate dan perilaku bot di berbagai kondisi pasar." },
                  { n: "5", title: "Aktifkan di akun real", desc: "Setelah yakin dengan hasil demo, pindah ke akun real dengan nominal terkecil dan naikkan bertahap." },
                ].map((s) => (
                  <div key={s.n} className="flex gap-4 bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-5 py-4">
                    <div className="w-8 h-8 min-w-[32px] rounded-full border border-[rgba(26,22,18,0.12)] bg-[#f0fdf4] flex items-center justify-center text-[12px] font-bold text-[#0f766e]">{s.n}</div>
                    <div className="pt-0.5">
                      <h3 className="text-[13px] font-semibold text-[#1a1612] mb-1">{s.title}</h3>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <InfoBox icon="🤖" title="Bot berjalan di server, bukan di HP Anda">
                  Setelah diaktifkan, AI Signal tetap bekerja meski aplikasi ditutup atau HP mati — bot
                  berjalan di server khusus 24 jam. Detail teknisnya ada di halaman{" "}
                  <Link href="/cara-kerja" className="text-[#047857] underline">cara kerja</Link>.
                </InfoBox>
              </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────── */}
            <section>
              <SectionLabel>06 · FAQ</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
                Pertanyaan Umum Seputar AI Trading
              </h2>
              <div className="space-y-3">
                {[
                  { q: "Apakah AI trading legal di Indonesia?", a: "Menggunakan perangkat lunak analisis/otomasi untuk akun trading pribadi Anda adalah praktik umum. Yang perlu diperhatikan adalah legalitas platform trading itu sendiri serta kepatuhan pada aturan yang berlaku — selalu lakukan riset mandiri." },
                  { q: "Berapa win rate mode AI Signal?", a: "Win rate bervariasi mengikuti kondisi pasar — tidak ada angka tetap yang jujur untuk dijanjikan. Cara terbaik mengetahuinya: jalankan di akun demo Anda sendiri selama beberapa hari dan ukur langsung." },
                  { q: "Apakah AI Signal bisa digabung dengan martingale?", a: "Bisa. Banyak pengguna menggabungkan AI Signal dengan martingale konservatif (multiplier 2–2,5×, maks 3 step) plus stop loss harian — kombinasi antara kualitas sinyal dan recovery loss." },
                  { q: "Apa bedanya AI Signal dengan Copy Trading (CTC)?", a: "AI Signal mengambil keputusan dari algoritma yang menganalisis pasar; CTC menyalin sinyal dari sumber trader berpengalaman. Keduanya otomatis — pilih yang hasilnya paling cocok dengan gaya Anda setelah diuji di demo." },
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
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/65 mb-5">Artikel Terkait</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { href: "/artikel/sinyal-trading-stockity-gratis", title: "Sinyal Trading Stockity Gratis", desc: "Semua sumber sinyal gratis & cara memakainya" },
                { href: "/artikel/copy-trading-stockity", title: "Copy Trading Stockity", desc: "Menyalin trader berpengalaman secara otomatis" },
                { href: "/artikel/robot-trading-stockity", title: "Robot Trading Stockity", desc: "Panduan lengkap auto trade Stockity 2026" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="group block bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-4 hover:border-[#10b981]/30 hover:shadow-sm transition-all no-underline">
                  <p className="text-[13px] font-semibold text-[#1a1612] mb-1 group-hover:text-[#047857] transition-colors">{l.title} →</p>
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
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#047857] mb-1.5">Coba AI Signal Sekarang</p>
              <p className="text-base font-semibold text-[#1a1612] mb-1">STC AutoTrade — Sinyal AI Langsung di Akun Stockity Anda</p>
              <p className="text-[13px] text-[#6b6058]">Analisis machine learning real-time, eksekusi otomatis, stop loss terkelola. Uji gratis di mode demo.</p>
            </div>
            <div className="flex gap-2.5 flex-shrink-0">
              <Link href="/download" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1a1612] text-white text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all no-underline">Download APK</Link>
              <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2.5 border border-[rgba(26,22,18,0.16)] text-[#1a1612]/70 text-sm font-medium rounded-xl hover:border-[rgba(26,22,18,0.28)] hover:text-[#1a1612] transition-all no-underline">Versi Web</a>
            </div>
          </div>
        </section>

        {/* ── Footer ────────────────────────────────────────── */}
        <footer className="border-t border-[rgba(26,22,18,0.07)] py-6 bg-[#f6f4ef]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-[11px] text-[#1a1612]/65">© 2026 STC AutoTrade (TechnoAutoTrade) · stcautotrade.id</p>
            <Link href="/" className="text-[11px] text-[#1a1612]/65 hover:text-[#1a1612] transition-colors no-underline">← Beranda</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
