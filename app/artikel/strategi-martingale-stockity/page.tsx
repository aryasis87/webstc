/**
 * app/artikel/strategi-martingale-stockity/page.tsx
 *
 * Target keyword:
 *   Primary  : strategi martingale stockity
 *   Secondary: cara pakai martingale di stockity, martingale binary option,
 *              kalkulator martingale stockity, setting martingale aman,
 *              martingale stc autotrade, anti martingale stockity
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Strategi Martingale Stockity: Panduan Setting Aman & Efektif 2026",
  description:
    "Panduan lengkap strategi martingale di Stockity — cara kerja, kalkulator martingale, setting aman untuk pemula, risiko, dan alternatif anti-martingale. Gunakan bersama STC AutoTrade.",
  keywords: [
    "strategi martingale stockity",
    "cara pakai martingale di stockity",
    "martingale binary option",
    "kalkulator martingale stockity",
    "setting martingale aman stockity",
    "martingale stc autotrade",
    "anti martingale stockity",
    "martingale robot trading stockity",
    "multiplier martingale stockity",
    "cara setting martingale step stockity",
    "martingale konservatif stockity",
    "risiko martingale binary",
    "martingale stop loss stockity",
    "martingale vs flat bet stockity",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/strategi-martingale-stockity",
  },
  openGraph: {
    title: "Strategi Martingale Stockity: Setting Aman & Efektif 2026",
    description:
      "Cara kerja martingale di Stockity, kalkulator step, multiplier, dan tips aman menggunakan strategi ini bersama robot STC AutoTrade.",
    url: "https://stcautotrade.id/artikel/strategi-martingale-stockity",
    type: "article",
    publishedTime: "2025-06-01T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [{ url: "https://stcautotrade.id/og-image.webp", width: 1200, height: 630, alt: "Strategi Martingale Stockity — STC AutoTrade" }],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Strategi Martingale Stockity: Panduan Setting Aman & Efektif 2026",
  description: "Panduan lengkap martingale di Stockity — cara kerja, kalkulator step, multiplier aman, dan risiko yang perlu dipahami.",
  author: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  publisher: { "@type": "Organization", name: "STC AutoTrade", logo: { "@type": "ImageObject", url: "https://stcautotrade.id/logo.webp" } },
  datePublished: "2025-06-01",
  dateModified: "2026-06-07",
  image: "https://stcautotrade.id/og-image.webp",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stcautotrade.id/artikel/strategi-martingale-stockity" },
  keywords: "strategi martingale stockity, martingale binary option, kalkulator martingale stockity",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: "https://stcautotrade.id" },
    { "@type": "ListItem", position: 2, name: "Artikel", item: "https://stcautotrade.id/artikel" },
    { "@type": "ListItem", position: 3, name: "Strategi Martingale Stockity", item: "https://stcautotrade.id/artikel/strategi-martingale-stockity" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa itu martingale di Stockity?",
      acceptedAnswer: { "@type": "Answer", text: "Martingale di Stockity adalah strategi manajemen modal di mana nominal order ditingkatkan (dikalikan multiplier) setelah setiap loss, sehingga satu kemenangan cukup untuk menutup semua kerugian sebelumnya dan menghasilkan profit kecil." },
    },
    {
      "@type": "Question",
      name: "Berapa multiplier martingale yang aman untuk Stockity?",
      acceptedAnswer: { "@type": "Answer", text: "Untuk pemula, multiplier 2–2,5× dengan max step 3 dianggap konservatif dan aman. Multiplier lebih tinggi (3–4×) memperbesar potensi recovery tapi juga memperbesar risiko saldo habis jika loss beruntun." },
    },
    {
      "@type": "Question",
      name: "Apakah martingale selalu menguntungkan di Stockity?",
      acceptedAnswer: { "@type": "Answer", text: "Tidak. Martingale meningkatkan probabilitas pemulihan dari loss beruntun, namun risiko terbesar adalah jika loss melebihi max step — seluruh siklus hangus. Win rate sinyal yang tinggi sangat membantu efektivitas martingale." },
    },
    {
      "@type": "Question",
      name: "Berapa modal yang dibutuhkan untuk martingale 3 step di Stockity?",
      acceptedAnswer: { "@type": "Answer", text: "Dengan nominal awal Rp 14.000 dan multiplier 2,5×: Step 1 = Rp 14.000, Step 2 = Rp 35.000, Step 3 = Rp 87.500. Total eksposur satu siklus penuh = Rp 136.500. Saldo minimal yang disarankan adalah 3–5× total eksposur = Rp 400.000–700.000." },
    },
    {
      "@type": "Question",
      name: "Apa itu anti-martingale di Stockity?",
      acceptedAnswer: { "@type": "Answer", text: "Anti-martingale (atau Paroli) adalah kebalikan martingale — nominal ditingkatkan setelah WIN, bukan loss. Strategi ini memanfaatkan momentum kemenangan beruntun dan membatasi kerugian saat loss." },
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

/* ── Kalkulator Martingale Data ───────────────────────────────── */

function buildMartingaleTable(base: number, multiplier: number, steps: number) {
  const rows: { step: number; nominal: number; totalLoss: number }[] = [];
  let nominal = base;
  let totalLoss = 0;
  for (let i = 1; i <= steps; i++) {
    rows.push({ step: i, nominal: Math.round(nominal), totalLoss: Math.round(totalLoss + nominal) });
    totalLoss += nominal;
    nominal *= multiplier;
  }
  return rows;
}

const formatRp = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);

/* ── Page ─────────────────────────────────────────────────────── */

export default function StrategiMartingaleStockityPage() {
  const tableConservative = buildMartingaleTable(14000, 2.5, 5);
  const tableModerate     = buildMartingaleTable(14000, 3, 5);

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
              <li className="text-[#1a1612]/70 font-medium">Strategi Martingale Stockity</li>
            </ol>
          </nav>
        </div>

        {/* ── Article Header ────────────────────────────────── */}
        <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="inline-flex items-center px-2.5 py-1 bg-[#ccfbf1] text-[#0f766e] text-[11px] font-semibold rounded-full">Strategi</span>
            <span className="text-[12px] text-[#1a1612]/35">1 Juni 2026</span>
            <span className="text-[12px] text-[#1a1612]/35">·</span>
            <span className="text-[12px] text-[#1a1612]/35">±10 menit baca</span>
          </div>

          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5">
            Strategi Martingale Stockity:<br className="hidden sm:block" />
            Panduan Setting Aman & Efektif 2026
          </h1>

          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            <strong className="font-semibold text-[#1a1612]">Strategi martingale di Stockity</strong> adalah salah satu
            teknik manajemen modal paling banyak digunakan trader binary option — namun juga paling banyak disalahpahami.
            Panduan ini menjelaskan cara kerja martingale, kalkulator step, setting yang aman, dan kapan
            sebaiknya <em>tidak</em> menggunakannya.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-8 border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden">
            {[
              { v: "2–2,5×", l: "Multiplier Aman" },
              { v: "Max 3", l: "Step Disarankan" },
              { v: "Otomatis", l: "di STC AutoTrade" },
              { v: "Stop Loss", l: "Wajib Aktif" },
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
              <SectionLabel>01 · Konsep Dasar</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Apa Itu Strategi Martingale di Stockity?
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  <strong className="text-[#1a1612]">Martingale</strong> adalah sistem manajemen modal yang berakar dari
                  dunia perjudian abad ke-18, kemudian diadaptasi ke trading finansial. Prinsipnya sederhana:{" "}
                  <strong className="text-[#1a1612]">setelah setiap kekalahan (loss), nominal order berikutnya
                  dikalikan dengan faktor tertentu (multiplier)</strong> — sehingga satu kemenangan cukup untuk
                  menutup semua kerugian sebelumnya dan tetap menghasilkan profit kecil.
                </p>
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Di Stockity.id (platform binary option), martingale sangat populer karena setiap order
                  hanya memiliki dua kemungkinan hasil: WIN atau LOSS. Jika win rate sinyal Anda cukup tinggi
                  (misalnya 60–70%), martingale bisa membantu merecovery loss lebih cepat.
                </p>
                <InfoBox icon="💡" title="Martingale di STC AutoTrade">
                  STC AutoTrade mengintegrasikan martingale secara otomatis. Anda cukup set{" "}
                  <strong>Nominal Awal</strong>, <strong>Multiplier</strong>, dan{" "}
                  <strong>Max Step</strong> — bot yang mengelola siklus martingale tanpa intervensi manual.
                </InfoBox>
              </div>
            </section>

            {/* ── Section 2: Kalkulator ─────────────────────── */}
            <section>
              <SectionLabel>02 · Kalkulator</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Kalkulator Martingale Stockity: Simulasi Step & Modal
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed mb-6">
                Tabel berikut menunjukkan simulasi nominal per step dan total eksposur modal untuk dua
                setting martingale yang umum digunakan. Gunakan ini sebagai referensi sebelum memilih
                multiplier dan modal awal Anda.
              </p>

              {/* Table Konservatif */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Konservatif</span>
                  <span className="text-[13px] text-[#6b6058]">Nominal awal Rp 14.000 · Multiplier 2,5×</span>
                </div>
                <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl overflow-hidden">
                  <table className="w-full text-[13px]">
                    <thead>
                      <tr className="bg-[#f9fafb] border-b border-[rgba(26,22,18,0.07)]">
                        <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Step</th>
                        <th className="text-right px-4 py-3 font-semibold text-[#1a1612]">Nominal Order</th>
                        <th className="text-right px-4 py-3 font-semibold text-[#1a1612]">Total Kerugian Kumulatif</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableConservative.map((row) => (
                        <tr key={row.step} className="border-b border-[rgba(26,22,18,0.05)] last:border-0">
                          <td className="px-4 py-3 text-[#6b6058]">Step {row.step}</td>
                          <td className="px-4 py-3 text-right font-medium text-[#1a1612]">{formatRp(row.nominal)}</td>
                          <td className="px-4 py-3 text-right text-[#6b6058]">{formatRp(row.totalLoss)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[11px] text-[#1a1612]/40 mt-2">Rekomendasi modal minimum untuk 3 step aktif: Rp 500.000–700.000</p>
              </div>

              {/* Table Moderat */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">Moderat</span>
                  <span className="text-[13px] text-[#6b6058]">Nominal awal Rp 14.000 · Multiplier 3×</span>
                </div>
                <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl overflow-hidden">
                  <table className="w-full text-[13px]">
                    <thead>
                      <tr className="bg-[#f9fafb] border-b border-[rgba(26,22,18,0.07)]">
                        <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Step</th>
                        <th className="text-right px-4 py-3 font-semibold text-[#1a1612]">Nominal Order</th>
                        <th className="text-right px-4 py-3 font-semibold text-[#1a1612]">Total Kerugian Kumulatif</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableModerate.map((row) => (
                        <tr key={row.step} className="border-b border-[rgba(26,22,18,0.05)] last:border-0">
                          <td className="px-4 py-3 text-[#6b6058]">Step {row.step}</td>
                          <td className="px-4 py-3 text-right font-medium text-[#1a1612]">{formatRp(row.nominal)}</td>
                          <td className="px-4 py-3 text-right text-[#6b6058]">{formatRp(row.totalLoss)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[11px] text-[#1a1612]/40 mt-2">Rekomendasi modal minimum untuk 3 step aktif: Rp 600.000–900.000</p>
              </div>

              <div className="mt-4">
                <WarningBox>
                  Semakin tinggi multiplier dan semakin banyak step, semakin besar modal yang harus tersedia
                  untuk meng-cover satu siklus loss penuh. Jangan memulai martingale dengan modal yang tidak
                  cukup untuk menanggung seluruh step.
                </WarningBox>
              </div>
            </section>

            {/* ── Section 3: Setting di STC AutoTrade ──────── */}
            <section>
              <SectionLabel>03 · Setting Bot</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cara Setting Martingale di STC AutoTrade
              </h2>
              <div className="space-y-3 max-w-2xl">
                {[
                  { n: "1", title: "Buka STC AutoTrade (APK atau web)", desc: "Login ke aplikasi STC AutoTrade — APK dari stcautotrade.id atau versi web di stcautotradepro.id." },
                  { n: "2", title: "Pilih mode strategi", desc: "Pilih mode yang ingin dikombinasikan dengan martingale — AI Signal, CTC Copy Trading, Indicator, atau mode lainnya." },
                  { n: "3", title: "Set Nominal Awal (Base Amount)", desc: "Masukkan nominal order pertama. Disarankan Rp 14.000–50.000 untuk pemula. Ini adalah jumlah yang digunakan di step 1 (order pertama setiap siklus)." },
                  { n: "4", title: "Aktifkan Martingale & Set Multiplier", desc: "Toggle martingale ON. Masukkan multiplier — mulai dengan 2 atau 2,5 untuk yang konservatif." },
                  { n: "5", title: "Set Max Step", desc: "Tentukan maksimal step kompensasi. Maksimal 3 step sangat disarankan untuk pemula. Jika loss melebihi max step, bot akan reset ke nominal awal (siklus baru)." },
                  { n: "6", title: "Aktifkan Stop Loss & Stop Profit", desc: "Ini WAJIB saat menggunakan martingale. Stop loss melindungi modal dari skenario terburuk jika pasar sedang tidak kondusif." },
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

            {/* ── Section 4: Risiko ─────────────────────────── */}
            <section>
              <SectionLabel>04 · Risiko & Batasan</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Risiko Martingale yang Wajib Dipahami
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Martingale bukan strategi tanpa risiko. Ada skenario di mana martingale bisa menghabiskan
                  seluruh modal dalam waktu singkat — terutama jika tidak dikombinasikan dengan stop loss
                  dan manajemen modal yang baik.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: "⚠️", title: "Loss beruntun melebihi Max Step", desc: "Jika pasar sedang sideways kuat atau ada berita besar yang membalikkan arah pasar secara tiba-tiba, loss bisa terjadi beruntun melampaui max step. Modal untuk satu siklus penuh bisa habis." },
                    { icon: "⚠️", title: "Eksposur meningkat eksponensial", desc: "Dengan multiplier 3× dan 5 step, order terakhir bernilai 243× nominal awal. Satu siklus penuh loss = kerugian besar. Ini kenapa max step harus dibatasi." },
                    { icon: "⚠️", title: "False sense of security", desc: "Martingale bisa terasa 'aman' karena sering recovery — namun satu sesi buruk bisa menghapus profit minggu-minggu sebelumnya. Disiplin stop loss sangat penting." },
                    { icon: "✅", title: "Mitigasi: Stop Loss + Win Rate Tinggi", desc: "Kombinasikan martingale dengan mode sinyal yang memiliki win rate tinggi (AI Signal atau CTC Copy Trading) dan selalu aktifkan stop loss harian. Ini adalah kombinasi paling aman." },
                  ].map((item) => (
                    <div key={item.title} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                      <div className="text-xl mb-2">{item.icon}</div>
                      <h3 className="text-[13px] font-semibold text-[#1a1612] mb-2">{item.title}</h3>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Section 5: Anti-Martingale ────────────────── */}
            <section>
              <SectionLabel>05 · Alternatif</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Anti-Martingale & Flat Bet: Alternatif yang Lebih Aman
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Jika Anda tidak nyaman dengan risiko martingale klasik, ada dua pendekatan alternatif:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                    <h3 className="text-[14px] font-semibold text-[#1a1612] mb-2">Anti-Martingale (Paroli)</h3>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed mb-3">
                      Tingkatkan nominal setelah WIN, bukan loss. Memanfaatkan momentum positif dan
                      membatasi kerugian saat loss karena nominal kembali ke awal setiap kalah.
                    </p>
                    <div className="bg-[#f0fdf4] rounded-lg px-3 py-2 border border-[#bbf7d0]">
                      <p className="text-[11px] text-[#166534]">Cocok untuk: trader konservatif yang ingin memanfaatkan momentum tanpa risiko martingale besar.</p>
                    </div>
                  </div>
                  <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                    <h3 className="text-[14px] font-semibold text-[#1a1612] mb-2">Flat Bet (Fixed Nominal)</h3>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed mb-3">
                      Nominal order sama di setiap order, tidak berubah apapun hasilnya. Paling sederhana,
                      paling mudah diprediksi risikonya. Keuntungan bergantung penuh pada win rate sinyal.
                    </p>
                    <div className="bg-[#f0fdf4] rounded-lg px-3 py-2 border border-[#bbf7d0]">
                      <p className="text-[11px] text-[#166534]">Cocok untuk: pemula yang baru memulai dan ingin memahami win rate strategi sebelum menambah kompleksitas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────── */}
            <section>
              <SectionLabel>06 · FAQ</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
                Pertanyaan Umum Seputar Martingale Stockity
              </h2>
              <div className="space-y-3">
                {[
                  { q: "Apa multiplier martingale terbaik di Stockity?", a: "Tidak ada 'terbaik' yang universal — tergantung win rate sinyal dan besar modal. Untuk pemula, multiplier 2–2,5× dengan max step 3 adalah titik awal yang aman dan umum digunakan." },
                  { q: "Apakah martingale bisa digunakan semua mode di STC AutoTrade?", a: "Ya. Martingale di STC AutoTrade bisa dikombinasikan dengan semua 6 mode strategi. Namun efektivitasnya paling optimal saat dikombinasikan dengan mode yang memiliki win rate tinggi seperti AI Signal atau CTC Copy Trading." },
                  { q: "Berapa max step yang aman?", a: "Maksimal 3 step sangat disarankan untuk pemula. Setiap tambahan step meningkatkan eksposur secara eksponensial. Trader berpengalaman dengan modal besar bisa menggunakan 4–5 step, namun risiko juga lebih besar." },
                  { q: "Bagaimana cara menghitung modal yang cukup untuk martingale?", a: "Hitung total eksposur satu siklus penuh (jumlah semua step jika semua loss). Saldo minimal yang disarankan adalah 3–5× total eksposur tersebut. Gunakan tabel kalkulator di atas sebagai referensi." },
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
                { href: "/artikel/modal-trading-stockity", title: "Modal Trading Stockity", desc: "Berapa modal minimum & cara mulai modal kecil" },
                { href: "/artikel/cara-profit-trading-stockity", title: "Cara Profit Trading Stockity", desc: "Strategi & tips konsisten profit 2026" },
                { href: "/artikel/robot-trading-stockity", title: "Robot Trading Stockity", desc: "Panduan lengkap auto trade Stockity 2026" },
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
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3b82f6] mb-1.5">Coba Martingale Otomatis</p>
              <p className="text-base font-semibold text-[#1a1612] mb-1">STC AutoTrade — Martingale Dikelola Otomatis oleh Bot</p>
              <p className="text-[13px] text-[#6b6058]">Set sekali, bot yang menjalankan siklus martingale — termasuk stop loss & stop profit otomatis.</p>
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
