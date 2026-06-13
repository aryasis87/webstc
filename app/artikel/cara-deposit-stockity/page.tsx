/**
 * app/artikel/cara-deposit-stockity/page.tsx
 *
 * Target keyword:
 *   Primary  : cara deposit stockity
 *   Secondary: cara isi saldo stockity, deposit stockity bank lokal,
 *              deposit stockity via dana, deposit stockity minimum,
 *              cara top up stockity
 */

import type { Metadata } from "next";
import Link from "next/link";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Cara Deposit Stockity: Panduan Isi Saldo via Stockity.id 2026",
  description:
    "Panduan lengkap cara deposit di Stockity.id — tempat isi saldo yang sebenarnya untuk trading dengan bot STC AutoTrade. Termasuk akses via Webview, sinkronisasi saldo otomatis, dan tips mulai dari akun Demo gratis.",
  keywords: [
    "cara deposit stockity",
    "cara isi saldo stockity",
    "deposit stockity bank lokal",
    "deposit stockity via dana",
    "deposit stockity minimum",
    "cara top up stockity",
    "deposit stockity ovo",
    "deposit stockity gopay",
    "cara deposit di stockity.id",
    "top up akun stockity",
    "deposit stockity berapa lama",
    "cara isi saldo akun stockity",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/cara-deposit-stockity",
  },
  openGraph: {
    title: "Cara Deposit Stockity: Panduan Isi Saldo via Stockity.id 2026",
    description:
      "Panduan cara deposit di Stockity.id untuk trading dengan STC AutoTrade — akses via Webview, saldo otomatis sinkron, dan akun Demo gratis.",
    url: "https://stcautotrade.id/artikel/cara-deposit-stockity",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [
      {
        url: "https://stcautotrade.id/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Cara Deposit Stockity — Panduan 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cara Deposit Stockity: Panduan Isi Saldo via Stockity.id 2026",
    description:
      "Cara deposit di Stockity.id untuk trading dengan STC AutoTrade — saldo otomatis sinkron ke bot.",
    images: ["https://stcautotrade.id/og-image.webp"],
  },
};

/* ── JSON-LD Schemas ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Deposit Stockity: Panduan Isi Saldo via Stockity.id 2026",
  description:
    "Panduan lengkap cara deposit di Stockity.id untuk trading dengan bot STC AutoTrade, termasuk akses via Webview dan sinkronisasi saldo otomatis.",
  image: "https://stcautotrade.id/og-image.webp",
  datePublished: "2025-05-21",
  dateModified: "2026-06-07",
  author: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  publisher: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stcautotrade.id/artikel/cara-deposit-stockity" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://stcautotrade.id" },
    { "@type": "ListItem", position: 2, name: "Artikel", item: "https://stcautotrade.id/artikel" },
    { "@type": "ListItem", position: 3, name: "Cara Deposit Stockity", item: "https://stcautotrade.id/artikel/cara-deposit-stockity" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah deposit dilakukan di dalam aplikasi STC AutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak. Deposit dilakukan di platform Stockity.id, bukan di aplikasi STC AutoTrade. STC AutoTrade adalah bot trading yang terhubung ke akun Stockity — bukan platform trading itu sendiri. Di dalam aplikasi tersedia tombol Webview yang langsung membuka Stockity.id untuk keperluan deposit.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara melihat saldo di STC AutoTrade setelah deposit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Setelah deposit berhasil dikonfirmasi di Stockity.id, saldo akan otomatis tersinkronisasi ke dashboard STC AutoTrade. Saldo tampil di bagian header dashboard. Tidak perlu input manual — sinkronisasi terjadi secara real-time melalui koneksi API.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah bisa trading tanpa deposit menggunakan akun Demo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. Setiap akun STC AutoTrade memiliki dua mode: Real (uang nyata) dan Demo (saldo virtual gratis). Di mode Demo, tidak perlu deposit — bot bisa dijalankan penuh dengan semua fitur tanpa risiko kehilangan uang nyata. Sangat disarankan untuk pemula.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa minimum deposit di Stockity.id?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum deposit adalah ketentuan dari platform Stockity.id, bukan dari STC AutoTrade. Untuk informasi terkini, buka Stockity.id langsung atau akses via tombol Webview di dashboard STC AutoTrade dan lihat halaman deposit mereka.",
      },
    },
    {
      "@type": "Question",
      name: "Apa yang harus dilakukan jika saldo tidak tersinkronisasi setelah deposit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pastikan deposit sudah dikonfirmasi di Stockity.id terlebih dahulu. Jika sudah dikonfirmasi tapi saldo belum muncul di STC AutoTrade, coba refresh dashboard atau logout lalu login kembali. Saldo diambil dari API Stockity secara real-time, sehingga saldo yang sudah dikonfirmasi biasanya langsung tampil.",
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

export default function CaraDepositStockityPage() {
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
                  <li className="text-[#1a1612] font-medium">Cara Deposit Stockity</li>
                </ol>
              </nav>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#eff6ff] text-[#1d4ed8] text-[11px] font-semibold mb-4">Panduan & Tutorial</span>
              <h1 className="text-[28px] sm:text-[34px] font-bold text-[#1a1612] leading-[1.2] mb-4">
                Cara Deposit Stockity: Isi Saldo via Stockity.id untuk Trading Bot
              </h1>
              <p className="text-[15px] text-[#6b6058] leading-relaxed mb-6">
                STC AutoTrade adalah bot trading — bukan platform deposit. Semua urusan keuangan dilakukan langsung di Stockity.id. Panduan ini menjelaskan alur yang benar, cara akses dari dalam aplikasi, dan tips mulai dari Demo secara gratis.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { v: "Via Stockity.id", l: "Tempat Deposit" },
                  { v: "Otomatis Sync", l: "ke STC Bot" },
                  { v: "Demo Gratis", l: "Tanpa Deposit" },
                  { v: "Real + Demo", l: "2 Akun Tersedia" },
                ].map((s) => (
                  <div key={s.l} className="bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl px-4 py-3 text-center">
                    <p className="text-[15px] font-bold text-[#1a1612] mb-0.5">{s.v}</p>
                    <p className="text-[11px] text-[#6b6058]">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION 1 — Memahami Alur Keuangan */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Konsep Dasar</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Memahami Alur Keuangan di STC AutoTrade</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Banyak pengguna baru yang bingung mencari menu deposit di dalam aplikasi STC AutoTrade. Jawabannya: <strong className="text-[#1a1612]">menu deposit tidak ada di sini</strong> — dan memang tidak seharusnya ada. Ini bukan bug, tapi by design.
              </p>
              <InfoBox icon="💡" title="STC AutoTrade adalah Bot, Bukan Platform Trading">
                STC AutoTrade berfungsi sebagai robot trading otomatis yang terhubung ke akun Stockity.id Anda. Bot ini mengeksekusi order, mengelola martingale, dan memantau SL/TP — tapi tidak menyimpan uang. Semua saldo dan transaksi keuangan ada di Stockity.id.
              </InfoBox>
              <div className="mt-5 space-y-3">
                <p className="text-[14px] text-[#6b6058] leading-relaxed">Analoginya seperti ini: Stockity.id adalah rekening bank Anda, sedangkan STC AutoTrade adalah manajer investasi yang mengelola uang di rekening tersebut secara otomatis. Untuk menambah saldo, Anda tetap harus ke &ldquo;rekening bank&rdquo; — yaitu Stockity.id.</p>
                <div className="bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl p-4">
                  <p className="text-[12px] font-semibold text-[#1a1612] mb-3">Alur Keuangan STC AutoTrade:</p>
                  <div className="space-y-2">
                    {[
                      { step: "1", label: "Deposit di Stockity.id", desc: "Isi saldo akun Stockity Anda melalui metode pembayaran yang tersedia" },
                      { step: "2", label: "Saldo Tersinkronisasi", desc: "Saldo otomatis muncul di dashboard STC AutoTrade via koneksi API real-time" },
                      { step: "3", label: "Bot Trading Aktif", desc: "STC AutoTrade mengeksekusi order menggunakan saldo dari akun Stockity Anda" },
                      { step: "4", label: "Profit/Loss ke Akun", desc: "Hasil trading langsung masuk ke akun Stockity — bisa dicairkan kapan saja" },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-3 items-start">
                        <div className="w-6 h-6 min-w-[24px] rounded-full bg-[#dbeafe] flex items-center justify-center text-[10px] font-bold text-[#1d4ed8]">{item.step}</div>
                        <div>
                          <p className="text-[12px] font-semibold text-[#1a1612]">{item.label}</p>
                          <p className="text-[11px] text-[#6b6058]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <WarningBox>
                  Jangan cari menu &ldquo;Top Up&rdquo; atau &ldquo;Deposit&rdquo; di dalam aplikasi STC AutoTrade — tidak akan ketemu. Semua urusan deposit dan withdraw ada di Stockity.id. Gunakan tombol Webview di dashboard untuk akses cepat ke Stockity.id.
                </WarningBox>
              </div>
            </div>
          </section>

          {/* SECTION 2 — Cara Akses Halaman Deposit via Webview */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f9fafb]">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Akses Deposit</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Cara Akses Halaman Deposit dari STC AutoTrade</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                STC AutoTrade menyediakan tombol <strong className="text-[#1a1612]">Webview</strong> di dashboard yang langsung membuka Stockity.id tanpa harus keluar dari aplikasi. Ini cara paling cepat untuk akses deposit.
              </p>
              <div className="space-y-3">
                <StepCard
                  n="1"
                  title="Buka Dashboard STC AutoTrade"
                  desc="Login ke STC AutoTrade menggunakan email dan password akun Stockity.id Anda. Dashboard utama akan tampil dengan informasi saldo dan mode trading."
                  sub="Login menggunakan akun Stockity.id yang sama"
                />
                <StepCard
                  n="2"
                  title="Cari Tombol Webview"
                  desc="Di dashboard, cari tombol atau ikon bertuliskan 'Webview'. Tombol ini tersedia untuk akses cepat ke platform Stockity.id dari dalam aplikasi."
                  sub="Biasanya ada di menu atau area aksi cepat dashboard"
                />
                <StepCard
                  n="3"
                  title="Stockity.id Terbuka di Dalam App"
                  desc="Webview akan membuka Stockity.id langsung di dalam aplikasi STC AutoTrade. Anda sudah otomatis login karena menggunakan akun yang sama."
                  sub="Tampilan Stockity.id penuh di dalam aplikasi"
                />
                <StepCard
                  n="4"
                  title="Pilih Menu Deposit di Stockity.id"
                  desc="Di halaman Stockity.id yang terbuka, navigasi ke menu Deposit atau Keuangan untuk melanjutkan proses isi saldo."
                  sub="Ikuti panduan deposit di platform Stockity.id"
                />
                <StepCard
                  n="5"
                  title="Saldo Otomatis Sinkron"
                  desc="Setelah deposit berhasil dikonfirmasi di Stockity.id, kembali ke dashboard STC AutoTrade — saldo sudah otomatis terupdate tanpa perlu refresh manual."
                  sub="Sinkronisasi real-time via API"
                />
              </div>
              <div className="mt-5">
                <TipBox>
                  Alternatif: Buka Stockity.id langsung di browser HP atau PC Anda (tanpa melalui aplikasi STC AutoTrade). Login dengan email dan password yang sama, lalu lakukan deposit dari sana. Hasilnya sama — saldo akan sinkron ke STC AutoTrade.
                </TipBox>
              </div>
            </div>
          </section>

          {/* SECTION 3 — Cara Deposit di Stockity.id */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Langkah Deposit</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Cara Deposit di Stockity.id — Langkah Umum</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Proses deposit dilakukan sepenuhnya di platform Stockity.id. Berikut alur umum yang berlaku — untuk metode pembayaran terbaru dan ketentuan yang berlaku, selalu cek langsung di Stockity.id karena dapat berubah sewaktu-waktu.
              </p>
              <div className="space-y-3 mb-5">
                <StepCard
                  n="1"
                  title="Buka Stockity.id"
                  desc="Akses platform Stockity.id melalui browser atau tombol Webview di STC AutoTrade. Login dengan akun Anda jika belum login."
                  sub="Gunakan email & password yang sama dengan STC AutoTrade"
                />
                <StepCard
                  n="2"
                  title="Navigasi ke Menu Deposit"
                  desc="Cari menu Deposit, Keuangan, atau Isi Saldo di halaman Stockity.id. Biasanya ada di menu profil atau navigasi utama platform."
                />
                <StepCard
                  n="3"
                  title="Pilih Metode Pembayaran"
                  desc="Stockity.id menyediakan beberapa metode pembayaran sesuai region — bisa mencakup transfer bank lokal, e-wallet (OVO, DANA, GoPay), atau metode lainnya."
                  sub="Pilih metode yang paling mudah dan cepat untuk Anda"
                />
                <StepCard
                  n="4"
                  title="Masukkan Nominal Deposit"
                  desc="Masukkan jumlah saldo yang ingin Anda depositkan. Pastikan nominal memenuhi minimum deposit yang ditentukan Stockity.id."
                  sub="Minimum deposit adalah ketentuan Stockity.id, bukan STC AutoTrade"
                />
                <StepCard
                  n="5"
                  title="Lakukan Pembayaran"
                  desc="Ikuti instruksi pembayaran yang muncul — transfer ke nomor rekening/virtual account yang diberikan, atau lanjutkan via e-wallet."
                  sub="Simpan bukti pembayaran untuk konfirmasi jika diperlukan"
                />
                <StepCard
                  n="6"
                  title="Tunggu Konfirmasi"
                  desc="Stockity.id akan memproses dan mengkonfirmasi deposit. Waktu proses tergantung metode pembayaran — beberapa instan, beberapa butuh beberapa menit."
                  sub="Setelah dikonfirmasi, saldo otomatis masuk ke akun"
                />
              </div>
              <InfoBox icon="ℹ️" title="Informasi Metode Pembayaran Terkini">
                Metode pembayaran, minimum deposit, dan prosedur terbaru dapat berubah mengikuti kebijakan Stockity.id. Untuk informasi paling akurat dan terkini, buka langsung Stockity.id atau hubungi support mereka.
              </InfoBox>
            </div>
          </section>

          {/* SECTION 4 — Akun Demo */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f9fafb]">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Demo Account</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Akun Demo: Cara Latihan Tanpa Deposit Nyata</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Kabar baik untuk pemula: <strong className="text-[#1a1612]">tidak perlu deposit untuk mulai mencoba STC AutoTrade</strong>. Setiap akun memiliki dua mode yang bisa di-switch kapan saja — Real dan Demo.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
                    <p className="text-[13px] font-bold text-[#1a1612]">Akun Real</p>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Menggunakan uang nyata",
                      "Profit/loss nyata",
                      "Perlu deposit di Stockity.id",
                      "Hasil trading bisa dicairkan",
                      "Risiko nyata",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[12px] text-[#6b6058]">
                        <span className="text-[#10b981] mt-0.5 flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-[#3b82f6]"></div>
                    <p className="text-[13px] font-bold text-[#1a1612]">Akun Demo</p>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Saldo virtual gratis",
                      "Tidak perlu deposit",
                      "Semua fitur bot aktif",
                      "Tidak ada risiko finansial",
                      "Ideal untuk belajar & testing",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[12px] text-[#6b6058]">
                        <span className="text-[#3b82f6] mt-0.5 flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-3 mb-5">
                <p className="text-[13px] font-semibold text-[#1a1612]">Cara Switch antara Real dan Demo:</p>
                <StepCard
                  n="1"
                  title="Buka Dashboard STC AutoTrade"
                  desc="Login ke aplikasi. Di bagian header atau area atas dashboard, Anda akan melihat tombol switch akun."
                />
                <StepCard
                  n="2"
                  title="Toggle Real / Demo"
                  desc="Tap toggle atau pilihan 'Real' / 'Demo' di header dashboard. Bot akan langsung berpindah ke mode akun yang dipilih."
                  sub="Switch bisa dilakukan kapan saja, bahkan saat bot tidak aktif"
                />
                <StepCard
                  n="3"
                  title="Saldo Berganti Otomatis"
                  desc="Setelah switch, saldo yang tampil di dashboard langsung berubah — saldo demo (virtual) atau saldo real (dari akun Stockity nyata Anda)."
                />
              </div>
              <TipBox>
                Sangat disarankan untuk menjalankan semua 6 mode bot di akun Demo terlebih dahulu — pahami cara kerja martingale, SL/TP, dan setiap mode sebelum pindah ke akun Real dengan uang nyata.
              </TipBox>
            </div>
          </section>

          {/* SECTION 5 — Saldo Otomatis Sinkron */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Sinkronisasi Saldo</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Saldo Otomatis Tersinkronisasi ke Bot</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Setelah deposit dikonfirmasi di Stockity.id, Anda tidak perlu melakukan apapun di STC AutoTrade. Saldo diambil langsung dari API Stockity secara real-time.
              </p>
              <div className="bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl p-5 mb-5">
                <p className="text-[12px] font-semibold text-[#1a1612] mb-3">Cara Kerja Sinkronisasi:</p>
                <div className="space-y-3">
                  {[
                    { icon: "🔗", title: "Koneksi API Real-time", desc: "STC AutoTrade terhubung ke API Stockity.id menggunakan kredensial login Anda. Koneksi ini aktif selama bot berjalan." },
                    { icon: "💰", title: "Saldo Dibaca Langsung", desc: "Saldo yang tampil di dashboard STC AutoTrade adalah saldo aktual dari akun Stockity Anda, dibaca secara langsung — bukan salinan." },
                    { icon: "⚡", title: "Update Real-time", desc: "Setiap order yang dieksekusi bot langsung mempengaruhi saldo di Stockity.id. Tidak ada lag atau penundaan signifikan." },
                    { icon: "🔄", title: "Tidak Perlu Input Manual", desc: "Tidak perlu memasukkan saldo secara manual ke STC AutoTrade. Bot membaca saldo aktual dari Stockity setiap saat." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <span className="text-lg flex-shrink-0">{item.icon}</span>
                      <div>
                        <p className="text-[12px] font-semibold text-[#1a1612] mb-0.5">{item.title}</p>
                        <p className="text-[11px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <InfoBox icon="🔑" title="Login = Koneksi Otomatis">
                Karena STC AutoTrade menggunakan email dan password Stockity.id yang sama, saat Anda login ke STC AutoTrade, bot otomatis terhubung ke akun Stockity Anda. Tidak ada pengaturan tambahan yang diperlukan.
              </InfoBox>
            </div>
          </section>

          {/* SECTION 6 — Rekomendasi Nominal */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f9fafb]">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Rekomendasi Modal</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Rekomendasi Nominal Awal untuk Trading dengan Bot STC AutoTrade</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Minimum order per trade di STC AutoTrade adalah <strong className="text-[#1a1612]">Rp 14.000</strong>. Namun, untuk trading dengan aman — terutama jika menggunakan martingale — Anda butuh buffer modal yang cukup.
              </p>
              <div className="space-y-3 mb-5">
                {[
                  {
                    level: "Pemula / Coba-coba",
                    modal: "Gunakan Demo dulu",
                    desc: "Tidak perlu deposit. Jalankan bot di mode Demo dengan saldo virtual sampai Anda benar-benar paham cara kerja setiap fitur.",
                    color: "bg-[#eff6ff] border-[#bfdbfe]",
                    badge: "Gratis",
                    badgeColor: "bg-[#dbeafe] text-[#1d4ed8]",
                  },
                  {
                    level: "Mulai Real — Konservatif",
                    modal: "Base Rp 14.000 — 70.000",
                    desc: "Mulai dengan base amount kecil. Siapkan modal 10-20x base amount sebagai buffer martingale. Base 14K → siapkan minimal Rp 150-300K.",
                    color: "bg-[#f0fdf4] border-[#bbf7d0]",
                    badge: "Aman",
                    badgeColor: "bg-[#dcfce7] text-[#14532d]",
                  },
                  {
                    level: "Menengah",
                    modal: "Base Rp 70.000 — 140.000",
                    desc: "Base amount lebih besar untuk potensi profit lebih tinggi. Siapkan modal buffer 10-15x base amount. Base 70K → siapkan minimal Rp 700K — 1jt.",
                    color: "bg-[#fffbeb] border-[#fde68a]",
                    badge: "Moderat",
                    badgeColor: "bg-[#fef3c7] text-[#92400e]",
                  },
                ].map((item) => (
                  <div key={item.level} className={`${item.color} border rounded-xl px-4 py-4`}>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[13px] font-bold text-[#1a1612]">{item.level}</p>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}>{item.badge}</span>
                    </div>
                    <p className="text-[13px] font-semibold text-[#1a1612] mb-1">{item.modal}</p>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <WarningBox>
                Jangan mendeposit uang yang tidak bisa Anda tanggung kerugiannya. Trading binary option mengandung risiko tinggi. Selalu gunakan fitur Stop Loss (SL) harian di STC AutoTrade untuk membatasi kerugian maksimal per hari.
              </WarningBox>
            </div>
          </section>

          {/* SECTION 7 — Kesimpulan */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Ringkasan</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Kesimpulan</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Poin paling penting yang perlu diingat tentang deposit dan STC AutoTrade:
              </p>
              <div className="space-y-3 mb-5">
                {[
                  "STC AutoTrade adalah bot trading, bukan platform keuangan — tidak ada fitur deposit di dalamnya.",
                  "Deposit dilakukan di Stockity.id, bisa diakses via tombol Webview dari dalam dashboard STC AutoTrade.",
                  "Saldo otomatis tersinkronisasi ke STC AutoTrade setelah deposit dikonfirmasi — tidak perlu input manual.",
                  "Setiap akun punya mode Real dan Demo — mulai dari Demo dulu untuk belajar tanpa risiko finansial.",
                  "Login STC AutoTrade menggunakan email dan password Stockity.id yang sama — satu akun untuk segalanya.",
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
                    q: "Apakah deposit dilakukan di dalam aplikasi STC AutoTrade?",
                    a: "Tidak. Deposit dilakukan di platform Stockity.id, bukan di aplikasi STC AutoTrade. STC AutoTrade adalah bot trading yang terhubung ke akun Stockity — bukan platform trading itu sendiri. Di dalam aplikasi tersedia tombol Webview yang langsung membuka Stockity.id untuk keperluan deposit.",
                  },
                  {
                    q: "Bagaimana cara melihat saldo di STC AutoTrade setelah deposit?",
                    a: "Setelah deposit berhasil dikonfirmasi di Stockity.id, saldo akan otomatis tersinkronisasi ke dashboard STC AutoTrade. Saldo tampil di bagian header dashboard. Tidak perlu input manual — sinkronisasi terjadi secara real-time melalui koneksi API.",
                  },
                  {
                    q: "Apakah bisa trading tanpa deposit menggunakan akun Demo?",
                    a: "Ya. Setiap akun STC AutoTrade memiliki dua mode: Real (uang nyata) dan Demo (saldo virtual gratis). Di mode Demo, tidak perlu deposit — bot bisa dijalankan penuh dengan semua fitur tanpa risiko kehilangan uang nyata. Sangat disarankan untuk pemula.",
                  },
                  {
                    q: "Berapa minimum deposit di Stockity.id?",
                    a: "Minimum deposit adalah ketentuan dari platform Stockity.id, bukan dari STC AutoTrade. Untuk informasi terkini, buka Stockity.id langsung atau akses via tombol Webview di dashboard STC AutoTrade dan lihat halaman deposit mereka.",
                  },
                  {
                    q: "Apa yang harus dilakukan jika saldo tidak tersinkronisasi setelah deposit?",
                    a: "Pastikan deposit sudah dikonfirmasi di Stockity.id terlebih dahulu. Jika sudah dikonfirmasi tapi saldo belum muncul di STC AutoTrade, coba refresh dashboard atau logout lalu login kembali. Saldo diambil dari API Stockity secara real-time, sehingga saldo yang sudah dikonfirmasi biasanya langsung tampil.",
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
                  { href: "/artikel/cara-daftar-stockity", title: "Cara Daftar Stockity", desc: "Panduan registrasi akun Stockity.id untuk mulai menggunakan STC AutoTrade." },
                  { href: "/artikel/modal-trading-stockity", title: "Modal Trading Stockity", desc: "Berapa modal yang dibutuhkan untuk trading dengan bot STC AutoTrade secara aman." },
                  { href: "/artikel/cara-withdraw-stockity", title: "Cara Withdraw Stockity", desc: "Panduan cara menarik profit dari akun Stockity.id ke rekening atau e-wallet Anda." },
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
