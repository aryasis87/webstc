/**
 * app/artikel/trading-binary-option-indonesia/page.tsx
 *
 * Target keyword:
 *   Primary  : trading binary option indonesia
 *   Secondary: cara trading binary option pemula, binary option adalah,
 *              platform trading binary terbaik indonesia, cara mulai binary option,
 *              apa itu binary option, binary option legal indonesia
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Trading Binary Option Indonesia: Panduan Lengkap untuk Pemula 2026",
  description:
    "Panduan lengkap trading binary option di Indonesia — apa itu binary option, cara kerja, platform terbaik, strategi pemula, risiko, dan cara mulai dengan robot trading otomatis.",
  keywords: [
    "trading binary option indonesia",
    "cara trading binary option pemula",
    "binary option adalah",
    "platform trading binary terbaik indonesia",
    "cara mulai binary option",
    "apa itu binary option",
    "binary option legal indonesia",
    "risiko binary option",
    "binary option stockity",
    "cara profit binary option",
    "aplikasi trading binary option android",
    "robot trading binary option indonesia",
    "binary option untuk pemula",
    "trading binary option gratis",
    "platform binary option indonesia",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/trading-binary-option-indonesia",
  },
  openGraph: {
    title: "Trading Binary Option Indonesia: Panduan Lengkap Pemula 2026",
    description: "Apa itu binary option, cara kerjanya, platform terbaik di Indonesia, dan cara mulai trading otomatis dengan robot.",
    url: "https://stcautotrade.id/artikel/trading-binary-option-indonesia",
    type: "article",
    publishedTime: "2025-06-01T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [{ url: "https://stcautotrade.id/og-image.webp", width: 1200, height: 630, alt: "Trading Binary Option Indonesia — STC AutoTrade" }],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Trading Binary Option Indonesia: Panduan Lengkap untuk Pemula 2026",
  description: "Panduan lengkap trading binary option di Indonesia — cara kerja, platform, strategi, risiko, dan cara mulai dengan robot trading.",
  author: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  publisher: { "@type": "Organization", name: "STC AutoTrade", logo: { "@type": "ImageObject", url: "https://stcautotrade.id/logo.webp" } },
  datePublished: "2025-06-01",
  dateModified: "2026-06-07",
  image: "https://stcautotrade.id/og-image.webp",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stcautotrade.id/artikel/trading-binary-option-indonesia" },
  keywords: "trading binary option indonesia, binary option adalah, cara trading binary option pemula",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: "https://stcautotrade.id" },
    { "@type": "ListItem", position: 2, name: "Artikel", item: "https://stcautotrade.id/artikel" },
    { "@type": "ListItem", position: 3, name: "Trading Binary Option Indonesia", item: "https://stcautotrade.id/artikel/trading-binary-option-indonesia" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa itu binary option?",
      acceptedAnswer: { "@type": "Answer", text: "Binary option adalah instrumen trading finansial di mana trader memprediksi apakah harga suatu aset akan naik (UP) atau turun (DOWN) dalam durasi waktu tertentu. Hasilnya hanya dua kemungkinan: profit tetap (jika prediksi benar) atau kehilangan modal yang diorder (jika prediksi salah)." },
    },
    {
      "@type": "Question",
      name: "Apakah trading binary option legal di Indonesia?",
      acceptedAnswer: { "@type": "Answer", text: "Status regulasi binary option di Indonesia berada di area abu-abu. OJK tidak secara eksplisit meregulasi binary option sebagai instrumen yang diakui, namun juga tidak melarang aktivitas trading individual. Pastikan Anda menggunakan platform yang terpercaya dan memahami sepenuhnya risiko yang ada." },
    },
    {
      "@type": "Question",
      name: "Berapa modal minimum untuk trading binary option di Indonesia?",
      acceptedAnswer: { "@type": "Answer", text: "Di platform seperti Stockity.id, Anda bisa mulai trading binary option dengan modal minimal Rp 50.000–100.000. Namun untuk trading yang lebih nyaman dengan manajemen risiko yang baik, disarankan mulai dengan Rp 500.000–1.000.000." },
    },
    {
      "@type": "Question",
      name: "Apakah binary option sama dengan saham?",
      acceptedAnswer: { "@type": "Answer", text: "Tidak. Saham berarti Anda memiliki bagian dari perusahaan secara nyata. Binary option hanya memprediksi arah pergerakan harga dalam waktu singkat — Anda tidak memiliki aset apapun. Binary option jauh lebih berisiko karena hasilnya biner (menang semua atau kalah semua)." },
    },
    {
      "@type": "Question",
      name: "Bisakah pemula profit dari binary option?",
      acceptedAnswer: { "@type": "Answer", text: "Pemula bisa profit dari binary option, namun memerlukan pembelajaran yang serius dan manajemen risiko yang ketat. Menggunakan robot trading seperti STC AutoTrade dengan mode CTC Copy Trading atau AI Signal sangat membantu pemula karena mengurangi ketergantungan pada analisis manual." },
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

export default function TradingBinaryOptionIndonesiaPage() {
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
              <li className="text-[#1a1612]/70 font-medium">Trading Binary Option Indonesia</li>
            </ol>
          </nav>
        </div>

        {/* ── Article Header ────────────────────────────────── */}
        <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="inline-flex items-center px-2.5 py-1 bg-[#dbeafe] text-[#1d4ed8] text-[11px] font-semibold rounded-full">Panduan</span>
            <span className="text-[12px] text-[#1a1612]/35">1 Juni 2026</span>
            <span className="text-[12px] text-[#1a1612]/35">·</span>
            <span className="text-[12px] text-[#1a1612]/35">±10 menit baca</span>
          </div>

          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5">
            Trading Binary Option Indonesia:<br className="hidden sm:block" />
            Panduan Lengkap untuk Pemula 2026
          </h1>

          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            <strong className="font-semibold text-[#1a1612]">Trading binary option di Indonesia</strong> terus
            berkembang pesat — didorong oleh kemudahan akses platform dan munculnya robot trading otomatis.
            Panduan ini menjelaskan apa itu binary option, cara kerjanya, platform yang tersedia,
            risiko nyata, dan cara memulai dengan aman menggunakan robot trading.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-8 border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden">
            {[
              { v: "2 Hasil", l: "UP atau DOWN" },
              { v: "1–60 Menit", l: "Durasi Order" },
              { v: "Rp 50rb", l: "Modal Awal" },
              { v: "Robot", l: "Tersedia di STC" },
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
              <SectionLabel>01 · Apa Itu Binary Option</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Apa Itu Trading Binary Option?
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  <strong className="text-[#1a1612]">Binary option</strong> (atau opsi biner) adalah instrumen
                  trading di mana Anda memprediksi apakah harga suatu aset (mata uang, komoditas, indeks saham)
                  akan <strong className="text-[#1a1612]">naik (UP/CALL)</strong> atau{" "}
                  <strong className="text-[#1a1612]">turun (DOWN/PUT)</strong> dalam durasi waktu yang telah
                  ditentukan — misalnya 1 menit, 5 menit, 15 menit, atau 1 jam.
                </p>
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Dinamakan "binary" karena hasilnya hanya memiliki dua kemungkinan:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                    <div className="text-2xl mb-2">✅</div>
                    <h3 className="text-[14px] font-semibold text-emerald-800 mb-2">Prediksi Benar = WIN</h3>
                    <p className="text-[13px] text-emerald-700 leading-relaxed">
                      Anda mendapatkan profit tetap (fixed payout) — biasanya 70–90% dari nilai order.
                      Contoh: order Rp 100.000, profit = Rp 70.000–90.000.
                    </p>
                  </div>
                  <div className="bg-rose-50 border border-rose-200 rounded-xl p-5">
                    <div className="text-2xl mb-2">❌</div>
                    <h3 className="text-[14px] font-semibold text-rose-800 mb-2">Prediksi Salah = LOSS</h3>
                    <p className="text-[13px] text-rose-700 leading-relaxed">
                      Anda kehilangan seluruh nilai order. Contoh: order Rp 100.000 → kehilangan
                      Rp 100.000 (atau sebagian, tergantung platform).
                    </p>
                  </div>
                </div>

                <InfoBox icon="💡" title="Binary option vs Trading Forex / Saham">
                  Di Forex atau saham, keuntungan/kerugian Anda bervariasi sesuai pergerakan harga.
                  Di binary option, hasilnya tetap dan sudah diketahui sebelum order masuk.
                  Ini membuatnya lebih sederhana dipahami, namun risikonya juga lebih tinggi
                  karena satu prediksi salah = kehilangan seluruh modal order.
                </InfoBox>
              </div>
            </section>

            {/* ── Section 2: Cara Kerja ─────────────────────── */}
            <section>
              <SectionLabel>02 · Cara Kerja</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cara Kerja Trading Binary Option di Stockity
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Berikut alur sederhana bagaimana satu siklus trading binary option berlangsung:
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { n: "1", title: "Pilih Aset & Durasi", desc: "Pilih aset yang ingin ditradingkan (EUR/USD, emas, saham, dll.) dan durasi order (1 menit, 5 menit, 15 menit, dll.)." },
                    { n: "2", title: "Pilih Arah (UP/DOWN)", desc: "Prediksi apakah harga aset akan lebih tinggi (UP/CALL) atau lebih rendah (DOWN/PUT) dari harga saat ini ketika waktu habis." },
                    { n: "3", title: "Tunggu Hasil", desc: "Saat durasi berakhir, sistem otomatis membandingkan harga penutupan dengan harga saat order masuk. Benar = WIN, Salah = LOSS." },
                  ].map((s) => (
                    <div key={s.n} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                      <div className="w-8 h-8 rounded-full bg-[#dbeafe] flex items-center justify-center text-[13px] font-bold text-[#1d4ed8] mb-3">{s.n}</div>
                      <h3 className="text-[13px] font-semibold text-[#1a1612] mb-1.5">{s.title}</h3>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Section 3: Platform ───────────────────────── */}
            <section>
              <SectionLabel>03 · Platform di Indonesia</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Platform Trading Binary Option Populer di Indonesia
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Ada beberapa platform binary option yang populer di kalangan trader Indonesia.
                  Berikut gambaran singkat masing-masing:
                </p>

                <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-[13px]">
                      <thead>
                        <tr className="bg-[#f9fafb] border-b border-[rgba(26,22,18,0.07)]">
                          <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Platform</th>
                          <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Min. Deposit</th>
                          <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Payout</th>
                          <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Robot Trading</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { platform: "Stockity.id ⭐", deposit: "Rp 50.000", payout: "Hingga 92%", robot: "STC AutoTrade (gratis)" },
                          { platform: "Binomo", deposit: "Rp 70.000", payout: "Hingga 87%", robot: "Terbatas" },
                          { platform: "Olymp Trade", deposit: "Rp 70.000", payout: "Hingga 90%", robot: "Terbatas" },
                          { platform: "IQ Option", deposit: "$10", payout: "Hingga 95%", robot: "API tersedia" },
                        ].map((row) => (
                          <tr key={row.platform} className="border-b border-[rgba(26,22,18,0.05)] last:border-0">
                            <td className="px-4 py-3 font-medium text-[#1a1612]">{row.platform}</td>
                            <td className="px-4 py-3 text-[#6b6058]">{row.deposit}</td>
                            <td className="px-4 py-3 text-[#6b6058]">{row.payout}</td>
                            <td className="px-4 py-3 text-[#6b6058]">{row.robot}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="text-[13px] text-[#6b6058]">
                  Perbandingan lebih lengkap →{" "}
                  <Link href="/artikel/stockity-vs-binomo-vs-olymp-trade" className="text-[#3b82f6] hover:underline no-underline font-medium">
                    Stockity vs Binomo vs Olymp Trade
                  </Link>
                </p>
              </div>
            </section>

            {/* ── Section 4: Risiko ─────────────────────────── */}
            <section>
              <SectionLabel>04 · Risiko Nyata</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Risiko Trading Binary Option yang Harus Dipahami
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Trading binary option memiliki profil risiko yang sangat berbeda dari investasi konvensional.
                  Memahami risiko ini adalah prasyarat sebelum mulai.
                </p>

                <div className="space-y-3">
                  {[
                    { icon: "⚠️", title: "Risiko kehilangan seluruh modal order", desc: "Berbeda dengan saham atau reksa dana, satu prediksi salah di binary option = kehilangan 100% modal order tersebut. Ini membuat pengelolaan risiko per order sangat krusial." },
                    { icon: "⚠️", title: "Risiko overtrade dan FOMO", desc: "Kemudahan membuka order (cukup klik UP/DOWN) membuat banyak pemula melakukan terlalu banyak order impulsif, terutama setelah loss — berharap recovery cepat. Ini adalah salah satu penyebab terbesar modal habis." },
                    { icon: "⚠️", title: "Win rate harus di atas 50% untuk profit bersih", desc: "Karena payout umumnya 70–92% (bukan 100%), Anda perlu win rate lebih dari ~52–54% hanya untuk break even. Strategi dan sinyal yang baik sangat menentukan." },
                    { icon: "✅", title: "Mitigasi: Robot trading + manajemen risiko ketat", desc: "Robot trading seperti STC AutoTrade membantu mengeliminasi trading emosional dan memastikan stop loss dieksekusi — dua faktor terbesar penyebab kehilangan modal di binary option." },
                  ].map((item) => (
                    <div key={item.title} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5 flex gap-3">
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <h3 className="text-[13px] font-semibold text-[#1a1612] mb-1.5">{item.title}</h3>
                        <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <WarningBox>
                  <strong>Peringatan keras:</strong> Jangan pernah menggunakan uang yang Anda tidak siap
                  kehilangan sepenuhnya untuk trading binary option. Mulai dengan modal kecil, pelajari
                  strategi di mode demo, dan naikkan bertahap setelah konsisten profit.
                </WarningBox>
              </div>
            </section>

            {/* ── Section 5: Cara Mulai ─────────────────────── */}
            <section>
              <SectionLabel>05 · Cara Mulai</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cara Mulai Trading Binary Option di Indonesia sebagai Pemula
              </h2>
              <div className="max-w-2xl space-y-3">
                {[
                  { n: "1", title: "Pilih platform yang terpercaya", desc: "Gunakan platform yang memiliki rekam jejak baik di Indonesia — Stockity.id adalah pilihan populer dengan antarmuka Bahasa Indonesia dan dukungan transfer bank lokal." },
                  { n: "2", title: "Daftar akun dan verifikasi", desc: "Daftar gratis, verifikasi email, dan lengkapi KYC (foto KTP) untuk bisa melakukan deposit dan withdraw." },
                  { n: "3", title: "Pelajari platform dengan akun demo", desc: "Semua platform terpercaya menyediakan akun demo dengan saldo virtual. Gunakan minimal 7–14 hari untuk memahami cara kerja platform sebelum deposit uang nyata." },
                  { n: "4", title: "Gunakan robot trading untuk mengurangi emosi", desc: "Download STC AutoTrade dan hubungkan ke akun Stockity.id Anda. Robot trading membantu mengeksekusi sinyal secara disiplin tanpa pengaruh emosi — sangat membantu pemula." },
                  { n: "5", title: "Deposit dengan modal yang siap direlakan", desc: "Mulai dengan deposit minimal — Rp 100.000–500.000. Ini adalah 'biaya sekolah' untuk belajar trading nyata. Jangan deposit besar di awal." },
                  { n: "6", title: "Terapkan manajemen risiko ketat", desc: "Aktifkan stop loss harian, batasi nominal per order (maksimal 2–5% dari total saldo), dan selalu punya target profit harian yang realistis sebelum mulai." },
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

            {/* ── FAQ ───────────────────────────────────────── */}
            <section>
              <SectionLabel>06 · FAQ</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
                Pertanyaan Umum Trading Binary Option Indonesia
              </h2>
              <div className="space-y-3">
                {[
                  { q: "Apa perbedaan binary option dan trading forex?", a: "Di forex, profit/loss Anda bergantung pada seberapa jauh harga bergerak. Di binary option, hasilnya tetap — benar = profit sekian persen, salah = kehilangan modal order. Binary option lebih sederhana tapi risikonya lebih tinggi per order." },
                  { q: "Apakah binary option halal?", a: "Ini adalah pertanyaan yang kompleks dan sering diperdebatkan. Sebagian ulama menganggap binary option mengandung unsur gharar (ketidakpastian berlebih) dan maysir (judi), namun ada juga yang berpendapat berbeda dengan syarat tertentu. Disarankan berkonsultasi dengan ahli fiqh keuangan syariah." },
                  { q: "Apakah ada robot trading binary option gratis?", a: "Ya. STC AutoTrade adalah robot trading binary option yang tersedia gratis untuk member terdaftar. Mendukung platform Stockity.id dengan 6 mode strategi, manajemen risiko otomatis, dan tersedia sebagai APK Android maupun versi web." },
                  { q: "Berapa win rate minimal agar profit di binary option?", a: "Dengan payout 80%, Anda perlu win rate minimal ~55.6% untuk break even. Artinya dari setiap 10 order, minimal 6 harus WIN. Strategi yang konsisten menghasilkan win rate 60–70% sudah tergolong sangat baik di binary option." },
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
                { href: "/artikel/cara-daftar-stockity", title: "Cara Daftar Stockity", desc: "Panduan registrasi akun & mulai trading 2026" },
                { href: "/artikel/stockity-aman-atau-penipuan", title: "Stockity Aman atau Penipuan?", desc: "Review jujur platform Stockity.id 2026" },
                { href: "/artikel/stockity-vs-binomo-vs-olymp-trade", title: "Stockity vs Binomo vs Olymp Trade", desc: "Perbandingan tiga platform populer Indonesia" },
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
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3b82f6] mb-1.5">Mulai dengan Robot Trading</p>
              <p className="text-base font-semibold text-[#1a1612] mb-1">Trading Binary Option Lebih Mudah dengan STC AutoTrade</p>
              <p className="text-[13px] text-[#6b6058]">Bot trading otomatis untuk Stockity.id — gratis untuk member, tersedia di Android & web.</p>
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
