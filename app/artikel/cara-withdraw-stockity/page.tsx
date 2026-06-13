/**
 * app/artikel/cara-withdraw-stockity/page.tsx
 *
 * Target keyword:
 *   Primary  : cara withdraw stockity
 *   Secondary: tarik dana stockity, cairkan saldo stockity,
 *              minimum withdraw stockity, metode pembayaran stockity,
 *              verifikasi akun stockity, proses withdraw stockity
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Cara Withdraw Stockity: Panduan Tarik Dana ke Rekening 2026",
  description:
    "Panduan lengkap cara withdraw Stockity — tarik dana ke rekening bank, dompet digital, minimum penarikan, lama proses, dan tips agar withdraw cepat diproses.",
  keywords: [
    "cara withdraw stockity",
    "tarik dana stockity",
    "cairkan saldo stockity",
    "minimum withdraw stockity",
    "metode pembayaran stockity",
    "verifikasi akun stockity",
    "proses withdraw stockity",
    "withdraw stockity ke bank",
    "withdrawal stockity berapa lama",
    "cara tarik profit stockity",
    "stockity withdraw dana",
    "cara cairkan profit stockity",
    "withdraw stockity gagal",
    "cara daftar dan withdraw stockity",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/cara-withdraw-stockity",
  },
  openGraph: {
    title: "Cara Withdraw Stockity: Panduan Tarik Dana 2026",
    description:
      "Langkah-langkah withdraw Stockity ke rekening bank & dompet digital, minimum penarikan, dan tips agar proses cepat.",
    url: "https://stcautotrade.id/artikel/cara-withdraw-stockity",
    type: "article",
    publishedTime: "2025-06-01T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [
      {
        url: "https://stcautotrade.id/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Cara Withdraw Stockity — STC AutoTrade",
      },
    ],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Withdraw Stockity: Panduan Tarik Dana ke Rekening 2026",
  description:
    "Panduan lengkap cara withdraw Stockity — metode penarikan, minimum saldo, durasi proses, dan tips agar dana cepat masuk rekening.",
  author: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  publisher: {
    "@type": "Organization",
    name: "STC AutoTrade",
    logo: { "@type": "ImageObject", url: "https://stcautotrade.id/logo.webp" },
  },
  datePublished: "2025-06-01",
  dateModified: "2026-06-07",
  image: "https://stcautotrade.id/og-image.webp",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://stcautotrade.id/artikel/cara-withdraw-stockity",
  },
  keywords: "cara withdraw stockity, tarik dana stockity, cairkan saldo stockity",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: "https://stcautotrade.id" },
    { "@type": "ListItem", position: 2, name: "Artikel", item: "https://stcautotrade.id/artikel" },
    { "@type": "ListItem", position: 3, name: "Cara Withdraw Stockity", item: "https://stcautotrade.id/artikel/cara-withdraw-stockity" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa minimum withdraw Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum withdraw Stockity adalah Rp 50.000. Pastikan saldo akun real Anda mencukupi sebelum mengajukan penarikan.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama proses withdraw Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Proses withdraw Stockity umumnya berlangsung 1×24 jam kerja untuk transfer bank lokal (BCA, Mandiri, BNI, BRI). Beberapa metode dompet digital bisa lebih cepat.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah harus verifikasi identitas sebelum withdraw Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. Stockity.id mensyaratkan verifikasi identitas (KTP/SIM) sebelum memproses penarikan dana. Verifikasi biasanya selesai dalam 1–2 hari kerja.",
      },
    },
    {
      "@type": "Question",
      name: "Mengapa withdraw Stockity saya ditolak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Penyebab umum withdraw ditolak: (1) data rekening tidak cocok dengan nama akun, (2) akun belum terverifikasi, (3) saldo di bawah minimum penarikan, (4) ada turnover deposit yang belum terpenuhi.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada biaya withdraw di Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stockity.id umumnya tidak membebankan biaya withdraw dari sisi platform. Namun biaya transfer perbankan atau administrasi dari pihak bank/dompet digital bisa berlaku sesuai kebijakan masing-masing.",
      },
    },
    {
      "@type": "Question",
      name: "Bisakah withdraw Stockity ke rekening orang lain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak. Untuk keamanan, penarikan dana hanya bisa dilakukan ke rekening atau dompet digital atas nama yang sama dengan akun Stockity.id Anda.",
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

function FeatureCheck({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2.5 text-[13px] text-[#6b6058] leading-relaxed">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
        <circle cx="8" cy="8" r="7.5" stroke="#3b82f6" strokeOpacity="0.25" />
        <path d="M5.5 8L7.5 10L10.5 6" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {text}
    </div>
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

export default function CaraWithdrawStockityPage() {
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
              <li className="text-[#1a1612]/70 font-medium">Cara Withdraw Stockity</li>
            </ol>
          </nav>
        </div>

        {/* ── Article Header ────────────────────────────────── */}
        <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="inline-flex items-center px-2.5 py-1 bg-[#dbeafe] text-[#1d4ed8] text-[11px] font-semibold rounded-full">Panduan</span>
            <span className="text-[12px] text-[#1a1612]/35">1 Juni 2026</span>
            <span className="text-[12px] text-[#1a1612]/35">·</span>
            <span className="text-[12px] text-[#1a1612]/35">±8 menit baca</span>
          </div>

          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5">
            Cara Withdraw Stockity:<br className="hidden sm:block" />
            Panduan Tarik Dana ke Rekening 2026
          </h1>

          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            Sudah profit di Stockity.id dan ingin mencairkan dana? Artikel ini menjelaskan{" "}
            <strong className="font-semibold text-[#1a1612]">cara withdraw Stockity</strong> langkah demi langkah —
            metode penarikan yang tersedia, minimum saldo, durasi proses, dan tips agar{" "}
            <strong className="font-semibold text-[#1a1612]">tarik dana Stockity</strong> berjalan lancar tanpa kendala.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-8 border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden">
            {[
              { v: "Rp 50rb", l: "Min. Withdraw" },
              { v: "1×24 jam", l: "Proses Dana" },
              { v: "Bank & E-wallet", l: "Metode" },
              { v: "Gratis", l: "Biaya Platform" },
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
              <SectionLabel>01 · Persiapan</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Sebelum Withdraw: Pastikan Akun Anda Siap
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Sebelum mengajukan <strong className="text-[#1a1612]">penarikan dana Stockity</strong>, ada
                  beberapa hal yang perlu dipastikan agar prosesnya berjalan tanpa hambatan.
                </p>

                <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-6 space-y-3">
                  {[
                    { icon: "✅", title: "Akun sudah terverifikasi (KYC)", desc: "Upload foto KTP/SIM dan selfie melalui profil akun Stockity.id. Verifikasi biasanya selesai 1–2 hari kerja. Tanpa verifikasi, permintaan withdraw akan ditolak otomatis." },
                    { icon: "✅", title: "Saldo real mencapai minimum Rp 50.000", desc: "Hanya saldo di akun real yang bisa ditarik. Saldo demo tidak bisa dicairkan. Pastikan saldo real Anda mencukupi minimum penarikan." },
                    { icon: "✅", title: "Metode pembayaran sudah terdaftar", desc: "Tambahkan rekening bank atau dompet digital terlebih dahulu di pengaturan akun. Nama pemilik rekening harus sama persis dengan nama akun Stockity.id." },
                    { icon: "✅", title: "Turnover deposit terpenuhi (jika ada bonus)", desc: "Jika Anda menerima bonus deposit, mungkin ada persyaratan turnover (volume trading) yang harus dipenuhi sebelum dana bisa ditarik." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <span className="text-lg flex-shrink-0">{item.icon}</span>
                      <div>
                        <h3 className="text-[13px] font-semibold text-[#1a1612] mb-1">{item.title}</h3>
                        <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Section 2 ─────────────────────────────────── */}
            <section>
              <SectionLabel>02 · Langkah-Langkah</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cara Withdraw Stockity Langkah demi Langkah
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Berikut panduan lengkap <strong className="text-[#1a1612]">cara tarik dana Stockity</strong> dari
                  awal hingga dana masuk ke rekening Anda.
                </p>

                <div className="max-w-2xl space-y-3">
                  {[
                    { n: "1", title: "Login ke akun Stockity.id", desc: "Buka stockity.id di browser atau aplikasi, kemudian login menggunakan email dan password Anda." },
                    { n: "2", title: "Buka menu Keuangan / Kasir", desc: "Temukan menu 'Kasir', 'Keuangan', atau 'Withdraw' — biasanya ada di pojok kanan atas atau di profil akun." },
                    { n: "3", title: "Pilih tab 'Penarikan' atau 'Withdraw'", desc: "Pastikan Anda memilih tab penarikan, bukan deposit. Periksa saldo real yang tersedia sebelum melanjutkan." },
                    { n: "4", title: "Pilih metode penarikan", desc: "Pilih metode yang sudah terdaftar — transfer bank lokal (BCA, Mandiri, BNI, BRI, dll.) atau dompet digital (OVO, GoPay, DANA, dll.)." },
                    { n: "5", title: "Masukkan jumlah penarikan", desc: "Masukkan nominal yang ingin ditarik. Pastikan minimal Rp 50.000 dan tidak melebihi saldo real yang tersedia." },
                    { n: "6", title: "Konfirmasi dan submit permintaan", desc: "Periksa kembali data rekening tujuan dan nominal. Klik 'Konfirmasi' atau 'Submit'. Anda mungkin akan diminta memasukkan kode OTP via email/SMS untuk keamanan." },
                    { n: "7", title: "Tunggu proses 1×24 jam kerja", desc: "Setelah permintaan diajukan, tim Stockity akan memproses dalam 1×24 jam kerja. Status bisa dipantau di riwayat transaksi akun Anda." },
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

                <InfoBox icon="💡" title="Tips: Ajukan withdraw di jam kerja">
                  Permintaan withdraw yang diajukan pada hari kerja (Senin–Jumat, pukul 08.00–17.00 WIB)
                  cenderung diproses lebih cepat dibandingkan yang diajukan di akhir pekan atau malam hari.
                </InfoBox>
              </div>
            </section>

            {/* ── Section 3 ─────────────────────────────────── */}
            <section>
              <SectionLabel>03 · Metode Pembayaran</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Metode Pembayaran Withdraw Stockity
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed mb-5">
                Stockity.id mendukung beberapa metode penarikan untuk kemudahan trader Indonesia.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: "🏦",
                    title: "Transfer Bank Lokal",
                    items: ["BCA, Mandiri, BNI, BRI", "CIMB Niaga, Permata, dan bank lain", "Proses: 1×24 jam kerja", "Nama rekening harus sama dengan akun"],
                    note: "Metode paling umum dan tersedia untuk semua pengguna.",
                  },
                  {
                    icon: "📱",
                    title: "Dompet Digital (E-Wallet)",
                    items: ["OVO, GoPay, DANA, ShopeePay", "Proses: bisa lebih cepat dari bank", "Limit tergantung kebijakan e-wallet", "Nama akun e-wallet harus sesuai"],
                    note: "Cocok untuk penarikan dengan nominal lebih kecil dan cepat.",
                  },
                ].map((m) => (
                  <div key={m.title} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                    <div className="text-2xl mb-3">{m.icon}</div>
                    <h3 className="text-[14px] font-semibold text-[#1a1612] mb-3">{m.title}</h3>
                    <div className="space-y-2 mb-4">
                      {m.items.map((item) => <FeatureCheck key={item} text={item} />)}
                    </div>
                    <div className="bg-[#f9fafb] rounded-lg px-3.5 py-2.5 border border-[rgba(26,22,18,0.06)]">
                      <p className="text-[11px] text-[#1a1612]/45 leading-relaxed">{m.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Section 4 ─────────────────────────────────── */}
            <section>
              <SectionLabel>04 · Masalah Umum</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Mengapa Withdraw Stockity Ditolak atau Lama?
              </h2>
              <div className="space-y-3">
                {[
                  { masalah: "Data rekening tidak cocok", solusi: "Pastikan nama pemilik rekening bank/e-wallet 100% sama dengan nama yang terdaftar di akun Stockity. Perbedaan satu huruf pun bisa menyebabkan penolakan." },
                  { masalah: "Akun belum terverifikasi (KYC)", solusi: "Lengkapi verifikasi identitas di pengaturan profil akun Stockity.id. Upload KTP/SIM yang jelas dan foto selfie yang sesuai panduan. Tanpa KYC, withdraw tidak bisa diproses." },
                  { masalah: "Turnover bonus belum terpenuhi", solusi: "Jika Anda menerima bonus deposit, cek syarat turnover di halaman promosi atau hubungi support Stockity. Volume trading harus mencapai kelipatan tertentu dari jumlah bonus sebelum bisa withdraw." },
                  { masalah: "Saldo di bawah minimum", solusi: "Minimum withdraw Stockity adalah Rp 50.000. Pastikan saldo real mencukupi. Saldo demo tidak bisa ditarik." },
                  { masalah: "Withdraw diajukan di luar jam kerja", solusi: "Permintaan yang masuk di akhir pekan atau hari libur akan diproses pada hari kerja berikutnya. Ini normal dan bukan berarti ada masalah." },
                ].map((item) => (
                  <div key={item.masalah} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <span className="text-rose-500 text-lg flex-shrink-0 mt-0.5">✗</span>
                      <div>
                        <h3 className="text-[13px] font-semibold text-[#1a1612] mb-1.5">{item.masalah}</h3>
                        <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.solusi}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <WarningBox>
                  Jika withdraw masih bermasalah setelah memenuhi semua syarat, hubungi support resmi
                  Stockity.id melalui live chat di platform atau email resmi mereka. Jangan memberikan
                  password atau OTP kepada siapa pun yang mengklaim dari Stockity.
                </WarningBox>
              </div>
            </section>

            {/* ── Section 5 ─────────────────────────────────── */}
            <section>
              <SectionLabel>05 · Tips Withdraw Aman</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Tips Agar Withdraw Stockity Lancar dan Aman
              </h2>
              <div className="space-y-3">
                {[
                  "Lengkapi verifikasi KYC segera setelah mendaftar — jangan tunggu saat ingin withdraw",
                  "Daftarkan metode pembayaran menggunakan nama yang sama persis dengan KTP",
                  "Catat riwayat transaksi dan simpan bukti konfirmasi setiap withdraw",
                  "Jangan gunakan akun Stockity orang lain — withdraw hanya ke rekening atas nama sendiri",
                  "Aktifkan 2FA (Two-Factor Authentication) untuk keamanan ekstra akun",
                  "Gunakan email aktif yang bisa diakses — kode OTP dikirim ke email untuk konfirmasi withdraw",
                ].map((tip) => <FeatureCheck key={tip} text={tip} />)}
              </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────── */}
            <section>
              <SectionLabel>06 · FAQ</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
                Pertanyaan Umum Seputar Withdraw Stockity
              </h2>
              <div className="space-y-3">
                {[
                  { q: "Berapa minimum withdraw Stockity?", a: "Minimum penarikan dana di Stockity.id adalah Rp 50.000 dari saldo akun real." },
                  { q: "Berapa lama dana masuk setelah withdraw Stockity?", a: "Umumnya 1×24 jam kerja untuk transfer bank lokal. Dompet digital bisa lebih cepat. Permintaan di akhir pekan diproses pada hari kerja berikutnya." },
                  { q: "Apakah saldo demo Stockity bisa dicairkan?", a: "Tidak. Saldo demo hanya digunakan untuk latihan trading tanpa risiko. Hanya saldo akun real yang bisa ditarik ke rekening." },
                  { q: "Apakah ada pajak atas profit Stockity?", a: "Pengelolaan pajak atas penghasilan dari trading adalah tanggung jawab masing-masing trader sesuai peraturan perpajakan yang berlaku di Indonesia. Konsultasikan dengan konsultan pajak jika diperlukan." },
                  { q: "Bisakah withdraw Stockity ke rekening lain?", a: "Tidak. Untuk keamanan, penarikan hanya bisa ke rekening atau e-wallet atas nama yang sama dengan akun Stockity. Ini untuk mencegah penipuan dan pencucian uang." },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl px-5 py-4">
                    <h3 className="text-[13px] sm:text-[14px] font-semibold text-[#1a1612] mb-2 leading-snug">{item.q}</h3>
                    <p className="text-[13px] text-[#6b6058] leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

          </article>

          {/* ── Internal Links ────────────────────────────────── */}
          <div className="mt-14 pt-10 border-t border-[rgba(26,22,18,0.08)]">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/35 mb-5">Artikel Terkait</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { href: "/artikel/cara-daftar-stockity", title: "Cara Daftar Stockity", desc: "Panduan registrasi akun & verifikasi identitas" },
                { href: "/artikel/modal-trading-stockity", title: "Modal Trading Stockity", desc: "Berapa modal minimum & cara mulai modal kecil" },
                { href: "/artikel/stockity-aman-atau-penipuan", title: "Stockity Aman atau Penipuan?", desc: "Review jujur & faktual platform Stockity.id" },
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
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3b82f6] mb-1.5">Mulai Gratis Sekarang</p>
              <p className="text-base font-semibold text-[#1a1612] mb-1">Sudah punya akun? Coba Robot Trading STC AutoTrade</p>
              <p className="text-[13px] text-[#6b6058]">Otomatiskan trading Stockity Anda — APK Android atau langsung di browser.</p>
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
