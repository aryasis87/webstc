/**
 * app/artikel/cara-daftar-stockity/page.tsx
 *
 * Target keyword:
 *   Primary  : cara daftar stockity
 *   Secondary: cara buat akun stockity, daftar stockity gratis, cara registrasi stockity,
 *              cara daftar stockity lewat hp, cara verifikasi akun stockity,
 *              cara deposit stockity pertama kali, cara mulai trading stockity,
 *              stockity daftar akun baru, cara login stockity
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Cara Daftar Stockity: Panduan Registrasi Akun & Mulai Trading 2026",
  description:
    "Panduan lengkap cara daftar Stockity — langkah registrasi akun Stockity.id dari nol, verifikasi, deposit pertama kali, dan cara langsung mulai trading otomatis gratis via STC AutoTrade.",
  keywords: [
    "cara daftar stockity",
    "cara buat akun stockity",
    "daftar stockity gratis",
    "cara registrasi stockity",
    "cara daftar stockity lewat hp",
    "cara verifikasi akun stockity",
    "cara deposit stockity pertama kali",
    "cara mulai trading stockity",
    "stockity daftar akun baru",
    "cara login stockity",
    "cara daftar di stockity.id",
    "registrasi stockity indonesia",
    "buat akun stockity gratis",
    "cara aktivasi akun stockity",
    "pendaftaran akun stockity android",
    "cara daftar stockity pemula",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/cara-daftar-stockity",
  },
  openGraph: {
    title: "Cara Daftar Stockity: Panduan Registrasi Akun & Mulai Trading 2026",
    description:
      "Langkah demi langkah cara daftar akun Stockity.id — dari registrasi, verifikasi, deposit, hingga langsung trading otomatis.",
    url: "https://stcautotrade.id/artikel/cara-daftar-stockity",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-05-21T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [
      {
        url: "https://stcautotrade.id/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Cara Daftar Stockity — Panduan Registrasi Akun",
      },
    ],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Daftar Stockity: Panduan Registrasi Akun & Mulai Trading 2026",
  description:
    "Panduan lengkap cara daftar akun Stockity.id — registrasi, verifikasi, deposit pertama kali, dan mulai trading otomatis.",
  author: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  publisher: {
    "@type": "Organization",
    name: "STC AutoTrade",
    logo: { "@type": "ImageObject", url: "https://stcautotrade.id/logo.webp" },
  },
  datePublished: "2025-05-21",
  dateModified: "2026-05-21",
  image: "https://stcautotrade.id/og-image.webp",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://stcautotrade.id/artikel/cara-daftar-stockity",
  },
  keywords: "cara daftar stockity, cara buat akun stockity, daftar stockity gratis, registrasi stockity",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: "https://stcautotrade.id" },
    { "@type": "ListItem", position: 2, name: "Artikel", item: "https://stcautotrade.id/artikel" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Cara Daftar Stockity",
      item: "https://stcautotrade.id/artikel/cara-daftar-stockity",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cara Daftar Akun Stockity.id",
  description:
    "Panduan langkah demi langkah cara mendaftar akun Stockity.id dari nol — termasuk verifikasi, deposit, dan mulai trading.",
  totalTime: "PT10M",
  estimatedCost: { "@type": "MonetaryAmount", currency: "IDR", value: "0" },
  step: [
    { "@type": "HowToStep", position: 1, name: "Buka STC AutoTrade", text: "Download APK dari stcautotrade.id atau buka stcautotradepro.id di browser." },
    { "@type": "HowToStep", position: 2, name: "Pilih Daftar Akun Baru", text: "Tap atau klik tombol 'Daftar Akun Baru' di halaman utama aplikasi." },
    { "@type": "HowToStep", position: 3, name: "Isi data registrasi", text: "Masukkan nama lengkap, email aktif, nomor HP, dan buat password yang kuat." },
    { "@type": "HowToStep", position: 4, name: "Verifikasi email", text: "Cek kotak masuk email untuk link atau kode verifikasi dari Stockity. Klik link atau masukkan kode." },
    { "@type": "HowToStep", position: 5, name: "Login ke akun", text: "Gunakan email dan password yang sudah didaftarkan untuk login ke Stockity.id." },
    { "@type": "HowToStep", position: 6, name: "Mulai dari demo", text: "Sebelum deposit, aktifkan mode demo di STC AutoTrade untuk belajar trading tanpa risiko finansial." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah daftar akun Stockity gratis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, pendaftaran akun Stockity.id 100% gratis. Tidak ada biaya registrasi. Anda hanya membutuhkan email aktif dan koneksi internet. Deposit hanya diperlukan saat ingin mulai trading real — untuk mode demo tidak perlu deposit sama sekali.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama proses verifikasi akun Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Verifikasi email biasanya instan — dalam 1–5 menit setelah mendaftar. Cek folder Spam jika email tidak masuk. Untuk verifikasi KYC (jika diperlukan), prosesnya bisa 1–3 hari kerja.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah bisa daftar Stockity tanpa KTP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untuk akun basic dan mode demo, registrasi cukup dengan email dan data dasar. Verifikasi KTP (KYC) biasanya diperlukan saat ingin melakukan withdrawal dalam jumlah tertentu — ikuti panduan di platform Stockity.id.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa deposit minimum pertama di Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deposit minimum Stockity.id bervariasi — cek di platform Stockity.id untuk informasi terkini. Untuk memulai trading otomatis dengan aman menggunakan STC AutoTrade, kami sarankan minimal Rp 300.000–500.000 sebagai buffer martingale.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah bisa daftar Stockity lewat HP Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. Cara termudah adalah melalui aplikasi STC AutoTrade APK — download dari stcautotrade.id, buka aplikasi, dan pilih 'Daftar Akun Baru'. Proses registrasi Stockity dilakukan langsung di dalam aplikasi STC AutoTrade tanpa perlu berpindah browser.",
      },
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

/* ── Page ─────────────────────────────────────────────────────── */

export default function CaraDaftarStockityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#f9fafb]">
        {/* ── Nav ─────────────────────────────────────────── */}
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

        {/* ── Breadcrumb ──────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-[12px] text-[#1a1612]/40 flex-wrap">
              <li><Link href="/" className="hover:text-[#1a1612]/70 transition-colors no-underline">Beranda</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/artikel" className="hover:text-[#1a1612]/70 transition-colors no-underline">Artikel</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-[#1a1612]/70 font-medium">Cara Daftar Stockity</li>
            </ol>
          </nav>
        </div>

        {/* ── Article Header ──────────────────────────────── */}
        <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="inline-flex items-center px-2.5 py-1 bg-[#dbeafe] text-[#1d4ed8] text-[11px] font-semibold rounded-full">Panduan Pemula</span>
            <span className="text-[12px] text-[#1a1612]/35">21 Mei 2026</span>
            <span className="text-[12px] text-[#1a1612]/35">·</span>
            <span className="text-[12px] text-[#1a1612]/35">±10 menit baca</span>
          </div>

          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5">
            Cara Daftar Stockity:<br className="hidden sm:block" />
            Panduan Registrasi & Mulai Trading 2026
          </h1>

          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            Artikel ini menjelaskan{" "}
            <strong className="font-semibold text-[#1a1612]">cara daftar Stockity</strong>{" "}
            dari nol — registrasi akun, verifikasi email, deposit pertama kali, hingga cara
            langsung mulai trading otomatis menggunakan{" "}
            <strong className="font-semibold text-[#1a1612]">STC AutoTrade</strong> tanpa biaya.
          </p>

          {/* Quick info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-8 border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden">
            {[
              { v: "Gratis", l: "Biaya Registrasi" },
              { v: "<5 menit", l: "Waktu Daftar" },
              { v: "Instan", l: "Verifikasi Email" },
              { v: "Demo", l: "Mulai Tanpa Deposit" },
            ].map((s, i) => (
              <div key={i} className="bg-white py-4 px-3 text-center border-r border-[rgba(26,22,18,0.07)] last:border-0">
                <p className="font-[family-name:var(--font-dm-serif)] text-xl text-[#1a1612] mb-0.5">{s.v}</p>
                <p className="text-[11px] text-[#1a1612]/40">{s.l}</p>
              </div>
            ))}
          </div>
        </header>

        {/* ── Article Body ────────────────────────────────── */}
        <main className="max-w-4xl mx-auto px-5 sm:px-8 pb-24">
          <article className="space-y-14">

            {/* ── 01: Cara Daftar via STC AutoTrade ────── */}
            <section>
              <SectionLabel>01 · Cara Tercepat</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cara Daftar Stockity Paling Mudah: Lewat STC AutoTrade
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Cara paling efisien untuk{" "}
                  <strong className="text-[#1a1612]">daftar akun Stockity</strong> adalah melalui
                  aplikasi STC AutoTrade — karena proses registrasi Stockity.id dilakukan langsung
                  di dalam satu aplikasi, tanpa perlu berpindah browser atau platform.
                  Setelah daftar, akses bot trading gratis langsung aktif.
                </p>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Via APK */}
                  <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-8 h-8 rounded-xl bg-[#dbeafe] flex items-center justify-center text-sm">📱</div>
                      <h3 className="text-[14px] font-semibold text-[#1a1612]">Via APK Android (Rekomendasi)</h3>
                    </div>
                    <div className="space-y-2.5">
                      {[
                        { n: "1", t: "Download APK", d: "Buka stcautotrade.id di HP Android, download file APK STC AutoTrade." },
                        { n: "2", t: "Instal APK", d: "Aktifkan izin sumber tidak dikenal di Pengaturan, lalu instal APK." },
                        { n: "3", t: "Daftar di dalam app", d: "Buka STC AutoTrade → tap 'Daftar Akun Baru' → isi form registrasi." },
                        { n: "4", t: "Verifikasi email", d: "Cek email untuk link verifikasi. Klik link → akun aktif." },
                        { n: "5", t: "Login & mulai", d: "Login dengan email + password → akses bot langsung aktif." },
                      ].map((s) => (
                        <div key={s.n} className="flex gap-2.5 text-[12px]">
                          <span className="w-5 h-5 min-w-[20px] rounded-full bg-[#dbeafe] flex items-center justify-center text-[10px] font-bold text-[#1d4ed8] mt-0.5">{s.n}</span>
                          <div>
                            <span className="font-semibold text-[#1a1612]">{s.t}: </span>
                            <span className="text-[#6b6058]">{s.d}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Via Web */}
                  <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-8 h-8 rounded-xl bg-[#eff6ff] flex items-center justify-center text-sm">🌐</div>
                      <h3 className="text-[14px] font-semibold text-[#1a1612]">Via Versi Web (PC, Mac, iPhone)</h3>
                    </div>
                    <div className="space-y-2.5">
                      {[
                        { n: "1", t: "Buka browser", d: "Ketik stcautotradepro.id di Chrome, Safari, atau Firefox." },
                        { n: "2", t: "Klik Daftar", d: "Tap tombol 'Daftar Akun Baru' di halaman web." },
                        { n: "3", t: "Isi form registrasi", d: "Nama, email aktif, nomor HP, password → Submit." },
                        { n: "4", t: "Verifikasi email", d: "Buka email → klik link verifikasi dari Stockity." },
                        { n: "5", t: "Login & trading", d: "Login → semua fitur bot langsung tersedia." },
                      ].map((s) => (
                        <div key={s.n} className="flex gap-2.5 text-[12px]">
                          <span className="w-5 h-5 min-w-[20px] rounded-full bg-[#eff6ff] flex items-center justify-center text-[10px] font-bold text-[#1d4ed8] mt-0.5">{s.n}</span>
                          <div>
                            <span className="font-semibold text-[#1a1612]">{s.t}: </span>
                            <span className="text-[#6b6058]">{s.d}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 bg-[#f9fafb] rounded-lg px-3 py-2 border border-[rgba(26,22,18,0.06)]">
                      <p className="text-[11px] text-[#1a1612]/40">Tidak perlu download apapun — cocok untuk iPhone dan PC.</p>
                    </div>
                  </div>
                </div>

                <InfoBox icon="🎁" title="Keuntungan daftar via STC AutoTrade">
                  Daftar akun Stockity.id melalui STC AutoTrade berarti Anda langsung mendapatkan
                  akses ke bot trading gratis — tanpa proses terpisah. Satu langkah daftar,
                  dua akses sekaligus: akun Stockity.id + akses STC AutoTrade.
                </InfoBox>
              </div>
            </section>

            {/* ── 02: Data yang Dibutuhkan ──────────────── */}
            <section>
              <SectionLabel>02 · Persiapan</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Data yang Dibutuhkan untuk Daftar Stockity
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Sebelum mulai proses registrasi, pastikan Anda sudah menyiapkan:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "📧",
                      title: "Email Aktif",
                      wajib: true,
                      desc: "Email yang bisa Anda akses untuk verifikasi. Gmail atau email provider populer lainnya. Satu email = satu akun.",
                      tips: "Tips: gunakan email yang jarang dipakai untuk akun trading — lebih aman.",
                    },
                    {
                      icon: "📱",
                      title: "Nomor HP Aktif",
                      wajib: true,
                      desc: "Nomor HP Indonesia yang aktif. Mungkin diperlukan untuk verifikasi OTP di beberapa tahap.",
                      tips: "Tips: gunakan nomor yang selalu bisa menerima SMS.",
                    },
                    {
                      icon: "🔐",
                      title: "Password Kuat",
                      wajib: true,
                      desc: "Minimal 8 karakter, kombinasi huruf besar, huruf kecil, angka, dan simbol.",
                      tips: "Tips: jangan gunakan password yang sama dengan akun lain.",
                    },
                    {
                      icon: "🪪",
                      title: "KTP (Opsional)",
                      wajib: false,
                      desc: "Untuk verifikasi KYC — biasanya diperlukan saat ingin melakukan withdrawal di atas limit tertentu.",
                      tips: "Tidak diperlukan untuk mode demo atau trading awal.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{item.icon}</span>
                          <h3 className="text-[13px] font-semibold text-[#1a1612]">{item.title}</h3>
                        </div>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${item.wajib ? "bg-rose-50 text-rose-700 border-rose-200" : "bg-gray-50 text-gray-500 border-gray-200"}`}>
                          {item.wajib ? "Wajib" : "Opsional"}
                        </span>
                      </div>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed mb-2">{item.desc}</p>
                      <p className="text-[11px] text-[#3b82f6] font-medium">{item.tips}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 03: Panduan Verifikasi ────────────────── */}
            <section>
              <SectionLabel>03 · Verifikasi</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cara Verifikasi Akun Stockity
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Setelah mengisi form registrasi, Stockity akan mengirim email verifikasi.
                  Ini langkah yang sering menjadi kendala pemula — berikut panduan lengkapnya:
                </p>

                <div className="max-w-2xl space-y-3">
                  <StepCard
                    n="1"
                    title="Cek inbox email Anda"
                    desc="Buka email yang Anda daftarkan. Cari email dari Stockity.id dengan subjek berisi 'Verifikasi', 'Konfirmasi', atau 'Aktifkan Akun'."
                    sub="Biasanya masuk dalam 1–5 menit setelah registrasi."
                  />
                  <StepCard
                    n="2"
                    title="Cek folder Spam/Promotions"
                    desc="Jika tidak ada di inbox utama, cek folder Spam, Promotions (Gmail), atau Other (Outlook). Email verifikasi kadang tersaring otomatis."
                    sub="Gmail: cek tab 'Promosi' dan 'Spam'."
                  />
                  <StepCard
                    n="3"
                    title="Klik link verifikasi"
                    desc="Buka email Stockity → klik tombol atau link 'Verifikasi Email' / 'Aktifkan Akun'. Link akan membuka browser dan mengaktifkan akun Anda."
                    sub="Link verifikasi biasanya kedaluwarsa dalam 24–48 jam."
                  />
                  <StepCard
                    n="4"
                    title="Konfirmasi akun aktif"
                    desc="Setelah klik link, Anda akan diarahkan ke halaman konfirmasi bahwa akun sudah aktif. Kembali ke aplikasi STC AutoTrade dan login."
                  />
                  <StepCard
                    n="5"
                    title="Kirim ulang jika tidak menerima email"
                    desc="Jika email tidak masuk setelah 10 menit (termasuk di Spam), gunakan opsi 'Kirim Ulang Email Verifikasi' di halaman login STC AutoTrade atau Stockity.id."
                  />
                </div>

                <TipBox>
                  <strong>Masalah paling umum:</strong> email verifikasi masuk ke folder Spam atau
                  Promotions di Gmail. Jika tidak menemukan email setelah 10 menit, cek kedua
                  folder tersebut sebelum mencoba daftar ulang.
                </TipBox>
              </div>
            </section>

            {/* ── 04: Setelah Daftar ────────────────────── */}
            <section>
              <SectionLabel>04 · Setelah Daftar</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Apa yang Harus Dilakukan Setelah Daftar Stockity?
              </h2>
              <div className="space-y-5">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Akun aktif — sekarang apa? Berikut urutan langkah yang benar setelah berhasil
                  mendaftar Stockity:
                </p>

                <div className="space-y-3">
                  {[
                    {
                      fase: "Langkah 1",
                      title: "Mulai dari mode demo (WAJIB)",
                      icon: "🎮",
                      color: "bg-blue-50 text-blue-700",
                      desc: "Sebelum deposit apapun, aktifkan mode demo di STC AutoTrade. Mode demo menggunakan data pasar Stockity yang nyata tanpa risiko uang sungguhan. Ini bukan opsional — ini fondasi keberhasilan Anda.",
                      action: "Aktifkan demo di STC AutoTrade → pilih strategi → jalankan minimal 7 hari.",
                    },
                    {
                      fase: "Langkah 2",
                      title: "Pelajari dan validasi strategi",
                      icon: "📊",
                      color: "bg-violet-50 text-violet-700",
                      desc: "Selama demo, catat win rate harian, drawdown maksimal, dan respons bot terhadap kondisi pasar berbeda. Strategi yang konsisten di demo = kandidat untuk digunakan di real.",
                      action: "Target: win rate di atas 50% selama 7 hari berturut-turut.",
                    },
                    {
                      fase: "Langkah 3",
                      title: "Deposit minimal yang aman",
                      icon: "💰",
                      color: "bg-emerald-50 text-emerald-700",
                      desc: "Setelah strategi terbukti di demo, deposit ke akun Stockity.id. Mulai dengan nominal minimum — Rp 300.000–500.000 sudah cukup untuk profil konservatif dengan nominal awal Rp 14.000.",
                      action: "Deposit via metode pembayaran yang tersedia di Stockity.id.",
                    },
                    {
                      fase: "Langkah 4",
                      title: "Aktifkan bot real dengan stop loss",
                      icon: "🤖",
                      color: "bg-amber-50 text-amber-700",
                      desc: "Aktifkan bot trading di mode real. WAJIB: pasang stop loss sebelum start. Stop loss memastikan bot berhenti otomatis saat kerugian mencapai batas yang Anda tentukan.",
                      action: "Set stop loss 20–30% dari modal. Contoh: modal Rp 500K → SL Rp 100K.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xl">{item.icon}</span>
                        <div>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${item.color} mr-2`}>{item.fase}</span>
                          <span className="text-[13px] font-semibold text-[#1a1612]">{item.title}</span>
                        </div>
                      </div>
                      <p className="text-[13px] text-[#6b6058] leading-relaxed mb-2">{item.desc}</p>
                      <div className="bg-[#f9fafb] rounded-lg px-3 py-2 border border-[rgba(26,22,18,0.06)]">
                        <p className="text-[11px] text-[#1a1612]/50">→ {item.action}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 05: Cara Deposit ──────────────────────── */}
            <section>
              <SectionLabel>05 · Deposit</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cara Deposit Pertama Kali di Stockity
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Setelah akun aktif dan strategi teruji di demo, saatnya deposit.
                  Berikut panduan umum deposit di Stockity.id:
                </p>

                <div className="max-w-2xl space-y-3">
                  <StepCard
                    n="1"
                    title="Login ke Stockity.id"
                    desc="Buka stockity.id di browser atau lewat app. Login dengan email dan password yang sudah didaftarkan."
                  />
                  <StepCard
                    n="2"
                    title="Buka menu Deposit / Kasir"
                    desc="Cari menu 'Deposit', 'Kasir', atau 'Isi Saldo' di dashboard Stockity.id. Biasanya ada di pojok kanan atas atau menu profil."
                  />
                  <StepCard
                    n="3"
                    title="Pilih metode pembayaran"
                    desc="Stockity.id menyediakan berbagai metode — transfer bank lokal, e-wallet (OVO, DANA, GoPay), atau metode lainnya. Pilih yang paling mudah untuk Anda."
                    sub="Metode dan nominal minimum bisa berubah — cek langsung di platform Stockity.id."
                  />
                  <StepCard
                    n="4"
                    title="Masukkan nominal deposit"
                    desc="Masukkan jumlah yang ingin di-deposit. Untuk pemula dengan STC AutoTrade, minimal Rp 300.000–500.000 sudah cukup untuk setting konservatif."
                  />
                  <StepCard
                    n="5"
                    title="Konfirmasi dan ikuti instruksi pembayaran"
                    desc="Ikuti instruksi pembayaran sesuai metode yang dipilih. Saldo biasanya masuk dalam beberapa menit setelah pembayaran dikonfirmasi."
                  />
                </div>

                <WarningBox>
                  <strong>Penting:</strong> Informasi metode deposit, nominal minimum, dan prosedur
                  di Stockity.id bisa berubah sewaktu-waktu. Selalu cek langsung di platform
                  Stockity.id untuk informasi paling akurat dan terkini.
                </WarningBox>

                <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                  <h3 className="text-[13px] font-semibold text-[#1a1612] mb-3">
                    📊 Berapa Nominal Deposit yang Disarankan?
                  </h3>
                  <div className="space-y-2">
                    {[
                      { profil: "Pemula Ketat", deposit: "Rp 300.000", setting: "Nominal Rp 14K, multiplier 2×, max step 3" },
                      { profil: "Standar Pemula", deposit: "Rp 500.000", setting: "Nominal Rp 14K, multiplier 2,5×, max step 3" },
                      { profil: "Intermediate", deposit: "Rp 1.000.000", setting: "Nominal Rp 25K, multiplier 2,5×, max step 3" },
                    ].map((r) => (
                      <div key={r.profil} className="flex items-center justify-between text-[12px] py-2 border-b border-[rgba(26,22,18,0.05)] last:border-0">
                        <span className="font-semibold text-[#1a1612]">{r.profil}</span>
                        <span className="text-[#3b82f6] font-semibold">{r.deposit}</span>
                        <span className="text-[#6b6058] hidden sm:block">{r.setting}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ── 06: Masalah Umum Saat Daftar ─────────── */}
            <section>
              <SectionLabel>06 · Troubleshooting</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Masalah Umum Saat Daftar Stockity & Solusinya
              </h2>
              <div className="space-y-3">
                {[
                  {
                    masalah: "Email verifikasi tidak masuk",
                    solusi: "Cek folder Spam, Promotions (Gmail), atau Other (Outlook). Tunggu 10 menit. Jika masih tidak ada, gunakan 'Kirim Ulang Email Verifikasi' atau coba dengan alamat email lain.",
                    icon: "📧",
                  },
                  {
                    masalah: "Link verifikasi sudah kedaluwarsa",
                    solusi: "Link verifikasi biasanya berlaku 24–48 jam. Jika sudah kedaluwarsa, login ke halaman Stockity.id atau STC AutoTrade dan minta kirim ulang link verifikasi.",
                    icon: "⏱️",
                  },
                  {
                    masalah: "'Email sudah terdaftar' saat mencoba daftar",
                    solusi: "Email ini sudah pernah digunakan untuk daftar Stockity. Gunakan fitur 'Lupa Password' untuk memulihkan akun yang sudah ada, atau gunakan email yang berbeda.",
                    icon: "🔐",
                  },
                  {
                    masalah: "Halaman registrasi tidak bisa diakses / error",
                    solusi: "Coba bersihkan cache browser atau gunakan browser yang berbeda. Jika masalah berlanjut, akses melalui STC AutoTrade (APK atau web) sebagai jalur alternatif.",
                    icon: "🌐",
                  },
                  {
                    masalah: "Tidak bisa login setelah verifikasi",
                    solusi: "Pastikan email dan password diketik dengan benar (perhatikan huruf besar/kecil). Jika lupa password, gunakan fitur 'Lupa Password' di halaman login Stockity.id.",
                    icon: "🔑",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl px-5 py-4 flex gap-3">
                    <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-[13px] font-semibold text-[#1a1612] mb-1.5">{item.masalah}</p>
                      <p className="text-[12px] text-[#14532d] bg-[#f0fdf4] border border-[#bbf7d0] rounded-lg px-3 py-2">
                        <strong>Solusi:</strong> {item.solusi}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── FAQ ───────────────────────────────────── */}
            <section>
              <SectionLabel>07 · FAQ</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
                Pertanyaan Umum: Cara Daftar Stockity
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: "Apakah daftar akun Stockity benar-benar gratis?",
                    a: "Ya, 100% gratis. Tidak ada biaya registrasi, tidak ada biaya bulanan untuk akun. Anda hanya perlu email aktif. Deposit hanya diperlukan saat ingin trading real — mode demo tidak membutuhkan deposit sama sekali.",
                  },
                  {
                    q: "Bisakah satu orang punya dua akun Stockity?",
                    a: "Umumnya tidak. Platform Stockity.id biasanya membatasi satu akun per identitas (satu email, satu nomor HP, satu identitas KYC). Membuat akun ganda bisa berisiko pemblokiran akun.",
                  },
                  {
                    q: "Apakah perlu KTP untuk daftar Stockity?",
                    a: "Untuk registrasi awal dan mode demo, KTP tidak diperlukan. Verifikasi KYC dengan KTP biasanya baru diperlukan saat ingin melakukan withdrawal di atas limit tertentu.",
                  },
                  {
                    q: "Apakah bisa daftar Stockity tanpa nomor HP?",
                    a: "Nomor HP biasanya diperlukan dalam proses registrasi. Siapkan nomor HP Indonesia yang aktif dan bisa menerima SMS untuk kemudahan verifikasi.",
                  },
                  {
                    q: "Berapa lama proses dari daftar hingga bisa trading?",
                    a: "Kurang dari 10 menit untuk proses daftar + verifikasi email. Setelah itu, langsung bisa trading di mode demo. Untuk mode real, Anda perlu melakukan deposit terlebih dahulu yang prosesnya bervariasi tergantung metode pembayaran.",
                  },
                  {
                    q: "Apakah akun Stockity bisa dipakai di STC AutoTrade?",
                    a: "Ya. Justru cara paling mudah adalah mendaftar akun Stockity.id langsung melalui aplikasi STC AutoTrade — prosesnya terintegrasi dan setelah daftar, akses bot otomatis langsung aktif tanpa setup tambahan.",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl px-5 py-4">
                    <h3 className="text-[13px] sm:text-[14px] font-semibold text-[#1a1612] mb-2 leading-snug">{item.q}</h3>
                    <p className="text-[13px] text-[#6b6058] leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Kesimpulan ────────────────────────────── */}
            <section>
              <SectionLabel>08 · Kesimpulan</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Ringkasan: Cara Daftar Stockity dalam 5 Menit
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Daftar akun Stockity sangat mudah dan gratis. Cara tercepat:
                  download STC AutoTrade APK atau buka stcautotradepro.id →
                  tap "Daftar Akun Baru" → isi email, nomor HP, dan password →
                  verifikasi email → login. Selesai dalam kurang dari 5 menit,
                  langsung bisa trading demo.
                </p>
                <WarningBox>
                  <strong>Disclaimer:</strong> Trading binary option mengandung risiko
                  kerugian finansial. Mulai selalu dari mode demo sebelum menggunakan modal nyata.
                  Gunakan hanya dana yang siap Anda tanggung risikonya.
                </WarningBox>
              </div>
            </section>

          </article>

          {/* ── Internal Links ────────────────────────────── */}
          <div className="mt-14 pt-10 border-t border-[rgba(26,22,18,0.08)]">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/35 mb-5">Artikel Terkait</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { href: "/artikel/robot-trading-stockity", title: "Robot Trading Stockity", desc: "Panduan lengkap auto trade Stockity 2026" },
                { href: "/artikel/modal-trading-stockity", title: "Modal Trading Stockity", desc: "Berapa modal yang dibutuhkan untuk mulai?" },
                { href: "/artikel/cara-setting-robot-stockity", title: "Cara Setting Robot", desc: "Konfigurasi martingale, stop loss & strategi" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="group block bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-4 hover:border-[#3b82f6]/30 hover:shadow-sm transition-all no-underline">
                  <p className="text-[13px] font-semibold text-[#1a1612] mb-1 group-hover:text-[#3b82f6] transition-colors">{l.title} →</p>
                  <p className="text-[12px] text-[#6b6058]">{l.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </main>

        {/* ── CTA ─────────────────────────────────────────── */}
        <section className="border-t border-[rgba(26,22,18,0.08)] bg-white py-14">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#15803d] mb-1.5">Daftar Gratis · Demo Langsung</p>
              <p className="text-base font-semibold text-[#1a1612] mb-1">Daftar Stockity & Akses Bot Gratis Sekarang</p>
              <p className="text-[13px] text-[#6b6058]">Download STC AutoTrade — daftar akun Stockity langsung di dalam aplikasi, mulai demo dalam 5 menit.</p>
            </div>
            <div className="flex gap-2.5 flex-shrink-0">
              <Link href="/download" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1a1612] text-white text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all no-underline">
                Download Gratis
              </Link>
              <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2.5 border border-[rgba(26,22,18,0.16)] text-[#1a1612]/70 text-sm font-medium rounded-xl hover:border-[rgba(26,22,18,0.28)] hover:text-[#1a1612] transition-all no-underline">
                Versi Web
              </a>
            </div>
          </div>
        </section>

        {/* ── Footer ──────────────────────────────────────── */}
        <footer className="border-t border-[rgba(26,22,18,0.07)] py-6 bg-[#f9fafb]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-[11px] text-[#1a1612]/25">
              © 2026 STC AutoTrade (StockAutoTrade) · stcautotrade.id
            </p>
            <Link href="/" className="text-[11px] text-[#1a1612]/35 hover:text-[#1a1612]/60 transition-colors no-underline">← Beranda</Link>
          </div>
        </footer>
      </div>
    </>
  );
}