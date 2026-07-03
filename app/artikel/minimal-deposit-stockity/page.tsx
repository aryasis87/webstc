/**
 * app/artikel/minimal-deposit-stockity/page.tsx
 *
 * Target keyword:
 *   Primary  : minimal deposit stockity
 *   Secondary: minimum order STC AutoTrade, modal trading binary option,
 *              berapa minimum order stockity, modal awal trading bot
 */

import type { Metadata } from "next";
import Link from "next/link";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Minimal Deposit Stockity: Minimum Order & Modal Aman Trading Bot 2026",
  description:
    "Panduan lengkap minimum nominal order di STC AutoTrade (Rp 14.000/trade), simulasi modal untuk martingale, quick amounts tersedia, dan rekomendasi modal aman berdasarkan profil risiko. Mulai dari Demo gratis.",
  keywords: [
    "minimal deposit stockity",
    "minimum order STC AutoTrade",
    "modal trading binary option",
    "berapa minimum order stockity",
    "modal awal trading bot",
    "deposit minimum stockity",
    "berapa deposit awal stockity",
    "minimum deposit stockity",
    "syarat deposit stockity",
    "modal aman trading stockity",
    "nominal minimum trading stockity",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/minimal-deposit-stockity",
  },
  openGraph: {
    title: "Minimal Deposit Stockity: Minimum Order & Modal Aman Trading Bot 2026",
    description:
      "Minimum order Rp 14.000/trade di STC AutoTrade — simulasi modal martingale, rekomendasi modal aman, dan akun Demo gratis.",
    url: "https://stcautotrade.id/artikel/minimal-deposit-stockity",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [
      {
        url: "https://stcautotrade.id/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Minimal Deposit Stockity — Panduan 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Minimal Deposit Stockity: Minimum Order & Modal Aman 2026",
    description: "Minimum order Rp 14.000 di STC AutoTrade — simulasi modal, martingale, dan tips aman.",
    images: ["https://stcautotrade.id/og-image.webp"],
  },
};

/* ── JSON-LD Schemas ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Minimal Deposit Stockity: Minimum Order & Modal Aman Trading Bot 2026",
  description:
    "Panduan minimum nominal order di STC AutoTrade (Rp 14.000), simulasi martingale, dan rekomendasi modal berdasarkan profil risiko.",
  image: "https://stcautotrade.id/og-image.webp",
  datePublished: "2025-05-21",
  dateModified: "2026-06-07",
  author: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  publisher: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stcautotrade.id/artikel/minimal-deposit-stockity" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://stcautotrade.id" },
    { "@type": "ListItem", position: 2, name: "Artikel", item: "https://stcautotrade.id/artikel" },
    { "@type": "ListItem", position: 3, name: "Minimal Deposit Stockity", item: "https://stcautotrade.id/artikel/minimal-deposit-stockity" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa minimum nominal order di STC AutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum nominal order per trade di STC AutoTrade adalah Rp 14.000. Quick amounts yang tersedia di aplikasi: Rp 14.000, Rp 70.000, Rp 140.000, Rp 280.000, Rp 700.000, Rp 1.400.000, dan Rp 2.800.000.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah bisa trading dengan modal Rp 100.000?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, bisa. Dengan base amount Rp 14.000 dan martingale maksimal 2-3 step, modal Rp 100.000 cukup untuk 1 siklus (14K + 28K + 56K = 98K). Namun ini sangat ketat — tidak ada buffer. Disarankan minimal Rp 200.000-300.000 untuk bermain aman dengan base 14K.",
      },
    },
    {
      "@type": "Question",
      name: "Kapan sebaiknya pindah dari akun Demo ke Real?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pindah ke akun Real setelah: (1) Anda sudah memahami cara kerja semua mode bot, (2) sudah menemukan setting yang konsisten profit di Demo selama minimal 1-2 minggu, (3) sudah menyiapkan modal real yang tidak akan mengganggu keuangan Anda.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa modal yang aman untuk trading dengan bot STC AutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Modal aman minimal 10-20x dari base amount yang digunakan. Jika base Rp 14.000, sediakan minimal Rp 140.000-280.000 sebagai buffer. Jika base Rp 70.000, sediakan minimal Rp 700.000-1.400.000. Semakin banyak buffer, semakin banyak step martingale yang bisa di-recovery.",
      },
    },
    {
      "@type": "Question",
      name: "Apa itu Quick Amount di STC AutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quick Amount adalah tombol nominal yang tersedia di aplikasi STC AutoTrade untuk memudahkan setting base amount. Nilainya: Rp 14.000, Rp 70.000, Rp 140.000, Rp 280.000, Rp 700.000, Rp 1.400.000, dan Rp 2.800.000. Tinggal tap salah satu untuk langsung set nominal tersebut.",
      },
    },
  ],
};

/* ── Sub-components ───────────────────────────────────────────── */

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

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl px-5 py-4 flex gap-3">
      <span className="text-xl flex-shrink-0">✅</span>
      <p className="text-[13px] text-[#14532d] leading-relaxed">{children}</p>
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

function StepCard({ n, title, desc, sub }: { n: string; title: string; desc: string; sub?: string }) {
  return (
    <div className="flex gap-3.5 bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-3.5">
      <div className="w-7 h-7 min-w-[28px] rounded-full bg-[#dbeafe] flex items-center justify-center text-[11px] font-bold text-[#1d4ed8]">{n}</div>
      <div className="pt-0.5">
        <p className="text-[13px] font-semibold text-[#1a1612] mb-0.5">{title}</p>
        <p className="text-[12px] text-[#6b6058] leading-relaxed">{desc}</p>
        {sub && <p className="text-[11px] text-[#3b82f6] mt-1 font-medium">{sub}</p>}
      </div>
    </div>
  );
}

/* ── Page Component ───────────────────────────────────────────── */

export default function MinimalDepositStockityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#f9fafb] text-[#1a1612] font-[family-name:var(--font-dm-sans)]">
        {/* NAV */}
        <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5 h-14 flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2 no-underline">
              <span className="text-base font-bold text-[#1a1612]">STC <span className="text-[#3b82f6]">AutoTrade</span></span>
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/artikel" className="text-[13px] text-[#6b6058] hover:text-[#1a1612] transition-colors no-underline">Semua Artikel</Link>
              <a href="/StcAutoTrade.apk" download className="px-4 py-2 bg-[#1a1612] text-white text-[12px] font-semibold rounded-lg no-underline">Download APK</a>
            </div>
          </div>
        </nav>

        <main>
          {/* ARTICLE HEADER */}
          <div className="pt-28 pb-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <nav aria-label="breadcrumb" className="mb-6">
                <ol className="flex items-center gap-2 text-[12px] text-[#6b6058]">
                  <li><Link href="/" className="hover:text-[#1a1612] no-underline transition-colors">Beranda</Link></li>
                  <li>/</li>
                  <li><Link href="/artikel" className="hover:text-[#1a1612] no-underline transition-colors">Artikel</Link></li>
                  <li>/</li>
                  <li className="text-[#1a1612] font-medium">Minimal Deposit Stockity</li>
                </ol>
              </nav>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#eff6ff] text-[#1d4ed8] text-[11px] font-semibold mb-4">Modal & Manajemen Risiko</span>
              <h1 className="text-[28px] sm:text-[34px] font-bold text-[#1a1612] leading-[1.2] mb-4">
                Minimal Deposit Stockity: Minimum Order Rp 14.000 & Modal Aman untuk Bot
              </h1>
              <p className="text-[15px] text-[#6b6058] leading-relaxed mb-6">
                Banyak yang bingung membedakan minimum deposit Stockity.id dengan minimum nominal order di STC AutoTrade. Ini dua hal yang berbeda. Artikel ini menjelaskan keduanya — plus simulasi modal lengkap untuk trading dengan martingale.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { v: "Rp 14.000", l: "Min. Order/Trade" },
                  { v: "Demo Gratis", l: "Tanpa Modal" },
                  { v: "10–20×", l: "Buffer Aman" },
                  { v: "Otomatis", l: "Kalkulasi Bot" },
                ].map((s) => (
                  <div key={s.l} className="bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl px-4 py-3 text-center">
                    <p className="text-[15px] font-bold text-[#1a1612] mb-0.5">{s.v}</p>
                    <p className="text-[11px] text-[#6b6058]">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION 1 — Bedakan Minimum Order vs Minimum Deposit */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Konsep Dasar</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Bedakan: Minimum Order vs Minimum Deposit</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Ada dua angka berbeda yang sering dicampur aduk: minimum deposit ke Stockity.id (urusan platform) dan minimum nominal order di STC AutoTrade (urusan bot). Ini penjelasannya:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-4">
                  <p className="text-[12px] font-bold text-[#1d4ed8] mb-2">Minimum Deposit Stockity.id</p>
                  <p className="text-[13px] text-[#1e40af] leading-relaxed mb-2">Ketentuan dari platform Stockity.id tentang berapa minimal saldo yang bisa Anda depositkan ke akun.</p>
                  <p className="text-[11px] text-[#1d4ed8] font-semibold">→ Ditentukan oleh Stockity.id, cek langsung di platform mereka</p>
                </div>
                <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-4">
                  <p className="text-[12px] font-bold text-[#14532d] mb-2">Minimum Order STC AutoTrade</p>
                  <p className="text-[13px] text-[#166534] leading-relaxed mb-2">Nominal terkecil yang bisa digunakan bot per trade. Ini berlaku di dalam aplikasi STC AutoTrade.</p>
                  <p className="text-[11px] text-[#14532d] font-semibold">→ Rp 14.000 per trade (ditentukan STC AutoTrade)</p>
                </div>
              </div>
              <InfoBox icon="💡" title="Yang Relevan untuk Pengguna STC AutoTrade">
                Saat Anda setting Base Amount di STC AutoTrade, angka minimum yang bisa dimasukkan adalah Rp 14.000. Inilah yang dimaksud &ldquo;minimum&rdquo; dalam konteks bot trading — bukan minimum deposit ke Stockity.
              </InfoBox>
            </div>
          </section>

          {/* SECTION 2 — Quick Amounts */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f9fafb]">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Nominal Order</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Minimum Nominal Order di STC AutoTrade: Rp 14.000</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                STC AutoTrade menyediakan tombol <strong className="text-[#1a1612]">Quick Amount</strong> untuk memudahkan setting base amount. Tinggal tap nominal yang diinginkan — tidak perlu ketik manual.
              </p>
              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-4 mb-5">
                <p className="text-[12px] font-semibold text-[#1a1612] mb-3">Daftar Quick Amount di Aplikasi:</p>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { amount: "Rp 14.000", note: "Minimum" },
                    { amount: "Rp 70.000", note: "5× minimum" },
                    { amount: "Rp 140.000", note: "10× minimum" },
                    { amount: "Rp 280.000", note: "20× minimum" },
                    { amount: "Rp 700.000", note: "50× minimum" },
                    { amount: "Rp 1.400.000", note: "100× minimum" },
                    { amount: "Rp 2.800.000", note: "200× minimum" },
                  ].map((item) => (
                    <div key={item.amount} className="col-span-2 sm:col-span-1 bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-lg px-3 py-2.5 text-center">
                      <p className="text-[12px] font-bold text-[#1a1612]">{item.amount}</p>
                      <p className="text-[10px] text-[#6b6058]">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>
              <TipBox>
                Base Amount adalah nominal yang digunakan untuk setiap trade. Jika martingale aktif dan terjadi loss, nominal akan dikalikan multiplier untuk step berikutnya — jadi pastikan saldo cukup untuk beberapa step recovery.
              </TipBox>
            </div>
          </section>

          {/* SECTION 3 — Simulasi Modal Martingale */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Simulasi Modal</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Simulasi Modal untuk Martingale (1–7 Step)</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Berikut simulasi modal yang dibutuhkan jika semua step martingale loss (worst case scenario), dengan multiplier 2× dari base Rp 14.000:
              </p>
              <div className="bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl overflow-hidden mb-5">
                <div className="grid grid-cols-4 gap-0 bg-[#1a1612] px-4 py-2.5 text-[11px] font-semibold text-white">
                  <span>Step</span>
                  <span>Nominal</span>
                  <span>Total Loss</span>
                  <span>Modal Butuh</span>
                </div>
                {[
                  { step: "K1", nominal: "Rp 14.000", total: "Rp 14.000", modal: "Rp 14.000" },
                  { step: "K2", nominal: "Rp 28.000", total: "Rp 42.000", modal: "Rp 42.000" },
                  { step: "K3", nominal: "Rp 56.000", total: "Rp 98.000", modal: "Rp 98.000" },
                  { step: "K4", nominal: "Rp 112.000", total: "Rp 210.000", modal: "Rp 210.000" },
                  { step: "K5", nominal: "Rp 224.000", total: "Rp 434.000", modal: "Rp 434.000" },
                  { step: "K6", nominal: "Rp 448.000", total: "Rp 882.000", modal: "Rp 882.000" },
                  { step: "K7", nominal: "Rp 896.000", total: "Rp 1.778.000", modal: "Rp 1.778.000" },
                ].map((row, idx) => (
                  <div
                    key={row.step}
                    className={`grid grid-cols-4 gap-0 px-4 py-2.5 text-[12px] border-t border-[rgba(26,22,18,0.06)] ${idx === 0 ? "bg-[#f0fdf4]" : idx <= 2 ? "bg-white" : idx <= 4 ? "bg-[#fffbeb]" : "bg-[#fef2f2]"}`}
                  >
                    <span className="font-bold text-[#1a1612]">{row.step}</span>
                    <span className="text-[#1a1612]">{row.nominal}</span>
                    <span className="text-[#6b6058]">{row.total}</span>
                    <span className="font-semibold text-[#1a1612]">{row.modal}</span>
                  </div>
                ))}
              </div>
              <p className="text-[12px] text-[#6b6058] mb-4">Simulasi dengan multiplier 2× dari base Rp 14.000. Jika multiplier lebih besar (misal 3×), kebutuhan modal meningkat lebih cepat.</p>
              <WarningBox>
                Tabel di atas adalah skenario worst case — semua step loss tanpa satu pun yang win. Dalam praktik, biasanya ada win di tengah siklus. Tapi Anda perlu menyiapkan modal untuk kemungkinan terburuk agar bot tidak berhenti di tengah recovery.
              </WarningBox>
            </div>
          </section>

          {/* SECTION 4 — Kenapa Jangan Modal Kecil Tanpa Persiapan */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f9fafb]">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Manajemen Risiko</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Kenapa Jangan Langsung Pakai Modal Kecil Tanpa Persiapan</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Kesalahan paling umum trader pemula: deposit seadanya, langsung aktifkan bot dengan martingale step banyak, dan modal habis sebelum ada recovery. Ini mengapa persiapan penting:
              </p>
              <div className="space-y-3 mb-5">
                {[
                  {
                    masalah: "Modal terlalu kecil untuk martingale",
                    akibat: "Bot tidak bisa recovery saat loss beruntun — saldo habis di tengah siklus martingale",
                    solusi: "Siapkan modal minimal 10× base amount sebelum aktifkan martingale",
                  },
                  {
                    masalah: "Tidak set Stop Loss",
                    akibat: "Tanpa SL, bot terus jalan meskipun loss melebihi batas aman — seluruh saldo bisa habis",
                    solusi: "Selalu aktifkan SL harian — rekomendasikan 20-30% dari total modal",
                  },
                  {
                    masalah: "Base amount terlalu besar relatif terhadap modal",
                    akibat: "Satu siklus martingale 3-4 step sudah habiskan seluruh modal",
                    solusi: "Base amount idealnya tidak lebih dari 5-10% dari total modal Anda",
                  },
                  {
                    masalah: "Langsung pakai akun Real tanpa testing Demo",
                    akibat: "Belum paham cara kerja bot → salah konfigurasi → kerugian yang bisa dihindari",
                    solusi: "Gunakan akun Demo minimal 1-2 minggu sebelum pindah ke Real",
                  },
                ].map((item) => (
                  <div key={item.masalah} className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="text-red-500 text-sm flex-shrink-0">✗</span>
                      <p className="text-[13px] font-semibold text-[#1a1612]">{item.masalah}</p>
                    </div>
                    <p className="text-[12px] text-[#6b6058] mb-1.5 pl-5">Akibat: {item.akibat}</p>
                    <p className="text-[11px] text-[#3b82f6] font-medium pl-5">Solusi: {item.solusi}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 5 — Demo Account */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Akun Demo</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Mulai dari Akun Demo — Gratis Tanpa Modal</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Kabar baik: <strong className="text-[#1a1612]">tidak perlu modal sepeser pun</strong> untuk mulai belajar dan testing dengan STC AutoTrade. Akun Demo tersedia gratis dengan saldo virtual.
              </p>
              <div className="space-y-3 mb-5">
                <StepCard
                  n="1"
                  title="Login ke STC AutoTrade"
                  desc="Masuk dengan akun Stockity.id Anda. Akun Demo tersedia otomatis untuk semua pengguna yang sudah terdaftar (whitelist)."
                />
                <StepCard
                  n="2"
                  title="Lihat Header Dashboard"
                  desc="Di header dashboard, ada toggle atau pilihan akun yang menunjukkan 'Real' atau 'Demo'. Default bisa Real atau Demo tergantung setting terakhir."
                />
                <StepCard
                  n="3"
                  title="Pilih Demo"
                  desc="Tap/klik pilihan 'Demo' di header. Saldo langsung berubah ke saldo virtual — bukan uang nyata. Bot bisa dijalankan penuh dengan semua fitur."
                  sub="Saldo demo adalah virtual, tidak bisa dicairkan"
                />
                <StepCard
                  n="4"
                  title="Jalankan Bot dengan Berbagai Mode"
                  desc="Coba semua 6 mode: Signal Mode, Fastrade FTT, Fastrade CTC, AI Signal, Indicator, dan Momentum. Perhatikan mana yang paling sesuai dengan gaya trading Anda."
                />
                <StepCard
                  n="5"
                  title="Evaluasi dan Tentukan Setting"
                  desc="Setelah 1-2 minggu di Demo, evaluasi hasil trading. Jika konsisten profit, baru pindah ke akun Real dengan setting yang sudah terbukti."
                  sub="Data history tersedia untuk semua order demo"
                />
              </div>
              <TipBox>
                Di halaman History, Anda bisa melihat semua order yang pernah dieksekusi bot — termasuk saat demo. Gunakan data ini untuk mengevaluasi win rate, mode mana yang performa terbaik, dan seberapa sering martingale terpicu.
              </TipBox>
            </div>
          </section>

          {/* SECTION 6 — Rekomendasi Modal */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f9fafb]">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Panduan Modal</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Rekomendasi Modal Awal Berdasarkan Profil Risiko</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Berikut panduan modal berdasarkan profil risiko — dari yang paling konservatif hingga agresif:
              </p>
              <div className="space-y-4 mb-5">
                {[
                  {
                    profil: "Pemula / Belajar",
                    base: "Gunakan Demo",
                    modal: "Gratis",
                    step: "Tidak relevan",
                    desc: "Mulai di Demo sampai paham cara kerja bot dan menemukan mode yang cocok. Zero risk.",
                    color: "bg-[#eff6ff] border-[#bfdbfe]",
                    badge: "Direkomendasikan",
                    badgeColor: "bg-[#dbeafe] text-[#1d4ed8]",
                  },
                  {
                    profil: "Konservatif",
                    base: "Base: Rp 14.000",
                    modal: "Rp 200.000 – Rp 300.000",
                    step: "Max 3-4 step martingale",
                    desc: "Modal kecil, risiko minimal. Cukup untuk recovery 3-4 loss berturut-turut. Cocok untuk memulai dengan uang nyata pertama kali.",
                    color: "bg-[#f0fdf4] border-[#bbf7d0]",
                    badge: "Aman",
                    badgeColor: "bg-[#dcfce7] text-[#14532d]",
                  },
                  {
                    profil: "Moderat",
                    base: "Base: Rp 70.000",
                    modal: "Rp 700.000 – Rp 1.400.000",
                    step: "Max 3-4 step martingale",
                    desc: "Balance antara potensi profit dan manajemen risiko. Cukup untuk beberapa siklus recovery dengan base 70K.",
                    color: "bg-[#fffbeb] border-[#fde68a]",
                    badge: "Seimbang",
                    badgeColor: "bg-[#fef3c7] text-[#92400e]",
                  },
                  {
                    profil: "Agresif",
                    base: "Base: Rp 140.000+",
                    modal: "Rp 2.000.000+",
                    step: "Max 5-7 step martingale",
                    desc: "Potensi profit lebih besar, tapi risiko juga lebih tinggi. Hanya untuk trader yang sudah berpengalaman dan punya modal yang bisa ditanggung jika loss.",
                    color: "bg-[#fef2f2] border-[#fecaca]",
                    badge: "Risiko Tinggi",
                    badgeColor: "bg-[#fee2e2] text-[#dc2626]",
                  },
                ].map((item) => (
                  <div key={item.profil} className={`${item.color} border rounded-xl p-4`}>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[13px] font-bold text-[#1a1612]">{item.profil}</p>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}>{item.badge}</span>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-2 mb-2">
                      <div>
                        <p className="text-[10px] text-[#6b6058]">Base Amount</p>
                        <p className="text-[12px] font-semibold text-[#1a1612]">{item.base}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-[#6b6058]">Modal Direkomendasikan</p>
                        <p className="text-[12px] font-semibold text-[#1a1612]">{item.modal}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-[#6b6058]">Max Step</p>
                        <p className="text-[12px] font-semibold text-[#1a1612]">{item.step}</p>
                      </div>
                    </div>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <WarningBox>
                Angka di atas adalah panduan umum. Setiap trader punya situasi finansial berbeda. Pastikan hanya menggunakan dana yang benar-benar bisa Anda tanggung kerugiannya. Trading binary option adalah instrumen berisiko tinggi.
              </WarningBox>
            </div>
          </section>

          {/* SECTION 7 — Kesimpulan */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Ringkasan</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Kesimpulan</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">Poin kunci yang perlu Anda ingat:</p>
              <div className="space-y-3">
                {[
                  "Minimum deposit Stockity.id dan minimum order STC AutoTrade adalah dua hal berbeda — jangan dicampur.",
                  "Minimum nominal order per trade di STC AutoTrade adalah Rp 14.000.",
                  "Quick amounts tersedia: 14K, 70K, 140K, 280K, 700K, 1,4jt, 2,8jt.",
                  "Untuk martingale aman, siapkan modal minimal 10-20× dari base amount sebagai buffer.",
                  "Mulai selalu dari akun Demo — gratis, semua fitur aktif, tanpa risiko finansial.",
                  "Set Stop Loss harian sebelum aktifkan bot di akun Real — perlindungan modal wajib.",
                ].map((point) => (
                  <div key={point} className="flex gap-3 items-start">
                    <span className="text-[#3b82f6] font-bold text-sm flex-shrink-0">✓</span>
                    <p className="text-[13px] text-[#6b6058] leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f9fafb]">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Pertanyaan yang Sering Ditanyakan</h2>
              <div className="divide-y divide-[rgba(26,22,18,0.06)] border border-[rgba(26,22,18,0.06)] rounded-xl overflow-hidden">
                {[
                  {
                    q: "Berapa minimum nominal order di STC AutoTrade?",
                    a: "Minimum nominal order per trade di STC AutoTrade adalah Rp 14.000. Quick amounts yang tersedia di aplikasi: Rp 14.000, Rp 70.000, Rp 140.000, Rp 280.000, Rp 700.000, Rp 1.400.000, dan Rp 2.800.000.",
                  },
                  {
                    q: "Apakah bisa trading dengan modal Rp 100.000?",
                    a: "Ya, bisa. Dengan base amount Rp 14.000 dan martingale maksimal 2-3 step, modal Rp 100.000 cukup untuk 1 siklus (14K + 28K + 56K = 98K). Namun ini sangat ketat — tidak ada buffer. Disarankan minimal Rp 200.000-300.000 untuk bermain aman dengan base 14K.",
                  },
                  {
                    q: "Kapan sebaiknya pindah dari akun Demo ke Real?",
                    a: "Pindah ke akun Real setelah: (1) Anda sudah memahami cara kerja semua mode bot, (2) sudah menemukan setting yang konsisten profit di Demo selama minimal 1-2 minggu, (3) sudah menyiapkan modal real yang tidak akan mengganggu keuangan Anda.",
                  },
                  {
                    q: "Berapa modal yang aman untuk trading dengan bot STC AutoTrade?",
                    a: "Modal aman minimal 10-20x dari base amount yang digunakan. Jika base Rp 14.000, sediakan minimal Rp 140.000-280.000 sebagai buffer. Jika base Rp 70.000, sediakan minimal Rp 700.000-1.400.000. Semakin banyak buffer, semakin banyak step martingale yang bisa di-recovery.",
                  },
                  {
                    q: "Apa itu Quick Amount di STC AutoTrade?",
                    a: "Quick Amount adalah tombol nominal yang tersedia di aplikasi STC AutoTrade untuk memudahkan setting base amount. Nilainya: Rp 14.000, Rp 70.000, Rp 140.000, Rp 280.000, Rp 700.000, Rp 1.400.000, dan Rp 2.800.000. Tinggal tap salah satu untuk langsung set nominal tersebut.",
                  },
                ].map((faq) => (
                  <div key={faq.q} className="px-5 py-4">
                    <p className="text-[13px] font-semibold text-[#1a1612] mb-1.5">{faq.q}</p>
                    <p className="text-[13px] text-[#6b6058] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* INTERNAL LINKS */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Artikel Terkait</SectionLabel>
              <h2 className="text-[18px] font-bold text-[#1a1612] mb-4">Baca Juga</h2>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { href: "/artikel/cara-deposit-stockity", title: "Cara Deposit Stockity", desc: "Panduan deposit di Stockity.id untuk isi saldo akun trading Anda." },
                  { href: "/artikel/modal-trading-stockity", title: "Modal Trading Stockity", desc: "Panduan lengkap berapa modal yang ideal untuk berbagai profil trader." },
                  { href: "/artikel/strategi-martingale-stockity", title: "Strategi Martingale Stockity", desc: "Cara menggunakan martingale dengan bijak di STC AutoTrade." },
                ].map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="block p-4 bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl no-underline hover:border-[#3b82f6]/30 transition-colors"
                  >
                    <p className="text-[13px] font-semibold text-[#1a1612] mb-1">{r.title}</p>
                    <p className="text-[11px] text-[#6b6058]">{r.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-14 bg-[#1a1612]">
            <div className="max-w-3xl mx-auto px-5 text-center">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-white/40 mb-4">Mulai Sekarang</p>
              <h2 className="text-[24px] sm:text-[28px] font-bold text-white mb-3">Coba STC AutoTrade Gratis</h2>
              <p className="text-[14px] text-white/60 mb-8 max-w-md mx-auto leading-relaxed">
                Download aplikasinya dan trading otomatis langsung dari Android. Atau akses versi web tanpa install. Mode Demo tersedia gratis — tanpa deposit.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="/StcAutoTrade.apk" download className="px-7 py-3.5 bg-white text-[#1a1612] text-sm font-bold rounded-xl no-underline">Download APK Android</a>
                <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 border border-white/20 text-white text-sm font-semibold rounded-xl no-underline">Buka Versi Web</a>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="py-8 bg-[#1a1612] border-t border-white/5">
          <div className="max-w-3xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-white/40">© 2026 STC AutoTrade. Hak cipta dilindungi.</p>
            <div className="flex gap-5">
              <Link href="/" className="text-[12px] text-white/40 hover:text-white/70 no-underline transition-colors">Beranda</Link>
              <Link href="/artikel" className="text-[12px] text-white/40 hover:text-white/70 no-underline transition-colors">Artikel</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
