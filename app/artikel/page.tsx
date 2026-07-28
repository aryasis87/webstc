/**
 * app/artikel/page.tsx
 *
 * Halaman indeks artikel STC AutoTrade — Server Component murni.
 * Tidak ada "use client" — seluruh konten ada di HTML pertama untuk crawler.
 *
 * SEO:
 * - Metadata lengkap (title, description, canonical, OG, keywords)
 * - JSON-LD: BreadcrumbList + ItemList (sinyal koleksi artikel)
 * - Heading hierarchy: h1 (satu) → h2 per artikel
 * - Internal linking: setiap card mengarah ke slug artikel
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";
import { ARTIKEL, type Artikel, type Kategori } from "./_lib/artikelIndex";

/* ── Constants ─────────────────────────────────────────────────── */

const BASE_URL   = "https://stcautotrade.id";
const APK_PATH   = "/StcAutoTrade.apk";
const PAGE_URL   = `${BASE_URL}/artikel`;

/* ── Metadata ──────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Artikel STC AutoTrade — Panduan & Tips Robot Trading Stockity",
  description:
    "Kumpulan panduan robot trading Stockity: cara daftar, setting bot, strategi profit, modal minimum, perbandingan platform, dan review keamanan Stockity.id.",
  keywords: [
    "artikel stcautotrade",
    "panduan robot trading stockity",
    "cara setting bot stockity",
    "cara daftar stockity",
    "auto trade stockity gratis",
    "robot stockity android",
    "stockity aman penipuan",
    "modal trading stockity",
    "strategi profit stockity",
    "stockity vs binomo vs olymp trade",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: { "id-ID": PAGE_URL, en: `${BASE_URL}/en/articles`, ru: `${BASE_URL}/ru/articles`, "x-default": PAGE_URL },
  },
  openGraph: {
    title: "Artikel STC AutoTrade — Panduan & Tips Robot Trading Stockity",
    description:
      "Kumpulan panduan robot trading Stockity: cara daftar, setting bot, strategi profit, modal minimum, perbandingan platform, dan review Stockity.id.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Artikel STC AutoTrade — Panduan Robot Trading Stockity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artikel STC AutoTrade — Panduan Robot Trading Stockity",
    description:
      "Panduan robot trading Stockity: daftar akun, setting bot, strategi profit, modal minimum, dan review keamanan.",
    images: [`${BASE_URL}/og-image.webp`],
  },
};

/* ── Meta visual kategori ──────────────────────────────────────── */


const KATEGORI_META: Record<Kategori, { warna: string; bg: string }> = {
  Panduan:  { warna: "#047857", bg: "#ecfdf5" },
  Strategi: { warna: "#0f766e", bg: "#f0fdfa" },
  Review:   { warna: "#7c3aed", bg: "#f5f3ff" },
  Edukasi:  { warna: "#b45309", bg: "#fffbeb" },
};

/* ── JSON-LD Schemas ───────────────────────────────────────────── */

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Artikel",       item: PAGE_URL },
  ],
};

const schemaItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Artikel STC AutoTrade — Panduan & Tips Robot Trading Stockity",
  description:
    "Kumpulan artikel panduan, strategi, dan review seputar robot trading Stockity menggunakan STC AutoTrade.",
  url: PAGE_URL,
  numberOfItems: ARTIKEL.length,
  itemListElement: ARTIKEL.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${BASE_URL}/artikel/${a.slug}`,
    name: a.judul,
  })),
};

/* ── Komponen Pembantu ─────────────────────────────────────────── */

function BadgeKategori({ k }: { k: Kategori }) {
  const { warna, bg } = KATEGORI_META[k];
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold tracking-wide"
      style={{ color: warna, backgroundColor: bg }}
    >
      {k}
    </span>
  );
}

function ArtikelCard({ artikel }: { artikel: Artikel }) {
  return (
    <Link
      href={`/artikel/${artikel.slug}`}
      className="group flex flex-col p-5 bg-white border border-[rgba(26,22,18,0.08)] rounded-2xl hover:border-[rgba(26,22,18,0.18)] hover:shadow-lg hover:shadow-black/[0.05] hover:-translate-y-0.5 transition-all no-underline"
    >
      {/* Kategori + menit baca */}
      <div className="flex items-center justify-between mb-3.5">
        <BadgeKategori k={artikel.kategori} />
        <span className="text-[11px] text-[#1a1612]/65">{artikel.menit} mnt baca</span>
      </div>

      {/* Judul */}
      <h2 className="text-[15px] font-semibold text-[#1a1612] leading-snug mb-2.5 group-hover:text-[#047857] transition-colors">
        {artikel.judul}
      </h2>

      {/* Ringkasan */}
      <p className="text-[13px] text-[#6b6058] leading-relaxed flex-1 mb-4">
        {artikel.ringkasan}
      </p>

      {/* Footer card */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[rgba(26,22,18,0.07)]">
        <span className="text-[11px] text-[#1a1612]/65">{artikel.tanggal}</span>
        <span className="text-[12px] font-medium text-[#047857] flex items-center gap-1">
          Baca
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 256 256" fill="currentColor" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/>
          </svg>
        </span>
      </div>
    </Link>
  );
}

/* ── Page ──────────────────────────────────────────────────────── */

export default function ArtikelPage() {
  const panduan  = ARTIKEL.filter((a) => a.kategori === "Panduan");
  const strategi = ARTIKEL.filter((a) => a.kategori === "Strategi");
  const review   = ARTIKEL.filter((a) => a.kategori === "Review");
  const edukasi  = ARTIKEL.filter((a) => a.kategori === "Edukasi");

  return (
    <>
      {/* ── JSON-LD ──────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaItemList) }}
      />

      <div className="bg-[#f6f4ef] text-[#1a1612] font-[family-name:var(--font-dm-sans)]">

        {/* ── SKIP NAV ───────────────────────────────────── */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:px-5 focus:py-2.5 focus:bg-white focus:text-[#1a1612] focus:rounded-xl focus:shadow-xl focus:text-sm focus:font-semibold focus:border focus:border-[rgba(26,22,18,0.16)]"
        >
          Langsung ke konten utama
        </a>

        {/* ── NAV ────────────────────────────────────────── */}
        <nav
          aria-label="Navigasi utama STC AutoTrade"
          className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[rgba(26,22,18,0.08)]"
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 no-underline group">
              <Image
                src="/logo.webp"
                alt="Logo STC AutoTrade"
                width={28}
                height={28}
                className="rounded-[6px] shadow-sm"
              />
              <span className="text-sm font-semibold tracking-tight text-[#1a1612]">
                STC AutoTrade
              </span>
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href="/#fitur"
                className="hidden sm:flex items-center px-4 py-2 text-sm text-[#1a1612]/65 hover:text-[#1a1612] transition-colors no-underline"
              >
                Fitur
              </Link>
              <Link
                href="/artikel"
                className="hidden sm:flex items-center px-4 py-2 text-sm text-[#047857] font-semibold no-underline"
                aria-current="page"
              >
                Artikel
              </Link>
              <a
                href={APK_PATH}
                download
                className="flex items-center gap-1.5 px-4 py-2 bg-[#1a1612] text-[#ecfdf5] text-sm font-semibold rounded-lg hover:bg-[#1a1612]/85 transition-all hover:-translate-y-px no-underline shadow-sm"
              >
                Download
              </a>
            </div>
          </div>
        </nav>

        <main id="main-content">

          {/* ── HEADER ─────────────────────────────────────── */}
          <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 border-b border-[rgba(26,22,18,0.07)] bg-white overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 [background-image:linear-gradient(rgba(26,22,18,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(26,22,18,0.025)_1px,transparent_1px)] [background-size:64px_64px] pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-[400px] h-[300px] rounded-full bg-[#047857]/[0.05] blur-3xl pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-1.5 text-[12px] text-[#1a1612]/65 list-none p-0 m-0">
                  <li><Link href="/" className="hover:text-[#1a1612]/65 transition-colors no-underline">Beranda</Link></li>
                  <li aria-hidden="true">/</li>
                  <li className="text-[#1a1612]/65 font-medium" aria-current="page">Artikel</li>
                </ol>
              </nav>

              <h1 className="font-[family-name:var(--font-dm-serif)] text-[36px] sm:text-[48px] font-normal tracking-[-0.03em] leading-[1.1] mb-4">
                Panduan &amp; Artikel<br />
                <span className="text-[#047857]">Robot Trading Stockity</span>
              </h1>
              <p className="text-[#6b6058] text-base sm:text-[17px] leading-relaxed max-w-xl mb-8">
                Kumpulan panduan lengkap, strategi trading, dan review platform — semuanya
                ditulis khusus untuk pengguna <strong className="text-[#1a1612] font-semibold">STC AutoTrade</strong>{" "}
                di Stockity.id.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-4 text-[13px] text-[#1a1612]/65">
                <span className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"/></svg>
                  {ARTIKEL.length} artikel
                </span>
                <span className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"/></svg>
                  {ARTIKEL.reduce((s, a) => s + a.menit, 0)} mnt total
                </span>
                <span>Diperbarui 2026</span>
              </div>
            </div>
          </section>

          {/* ── ARTIKEL PANDUAN ────────────────────────────── */}
          <section className="py-14 sm:py-20" aria-labelledby="heading-panduan">
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-6 rounded-full bg-[#047857]" aria-hidden="true" />
                <h2
                  id="heading-panduan"
                  className="text-xl font-semibold tracking-tight text-[#1a1612]"
                >
                  Panduan &amp; Tutorial
                </h2>
                <span className="text-[12px] text-[#1a1612]/65 ml-1">
                  {panduan.length} artikel
                </span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {panduan.map((a) => (
                  <ArtikelCard key={a.slug} artikel={a} />
                ))}
              </div>
            </div>
          </section>

          {/* ── ARTIKEL STRATEGI ───────────────────────────── */}
          <section
            className="py-14 sm:py-20 bg-white border-y border-[rgba(26,22,18,0.07)]"
            aria-labelledby="heading-strategi"
          >
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-6 rounded-full bg-[#0f766e]" aria-hidden="true" />
                <h2
                  id="heading-strategi"
                  className="text-xl font-semibold tracking-tight text-[#1a1612]"
                >
                  Strategi &amp; Modal
                </h2>
                <span className="text-[12px] text-[#1a1612]/65 ml-1">
                  {strategi.length} artikel
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {strategi.map((a) => (
                  <ArtikelCard key={a.slug} artikel={a} />
                ))}
              </div>
            </div>
          </section>

          {/* ── ARTIKEL EDUKASI ────────────────────────────── */}
          <section className="py-14 sm:py-20" aria-labelledby="heading-edukasi">
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-6 rounded-full bg-[#b45309]" aria-hidden="true" />
                <h2
                  id="heading-edukasi"
                  className="text-xl font-semibold tracking-tight text-[#1a1612]"
                >
                  Edukasi Trading
                </h2>
                <span className="text-[12px] text-[#1a1612]/65 ml-1">
                  {edukasi.length} artikel
                </span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {edukasi.map((a) => (
                  <ArtikelCard key={a.slug} artikel={a} />
                ))}
              </div>
            </div>
          </section>

          {/* ── ARTIKEL REVIEW ─────────────────────────────── */}
          <section
            className="py-14 sm:py-20 bg-white border-y border-[rgba(26,22,18,0.07)]"
            aria-labelledby="heading-review"
          >
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-6 rounded-full bg-[#7c3aed]" aria-hidden="true" />
                <h2
                  id="heading-review"
                  className="text-xl font-semibold tracking-tight text-[#1a1612]"
                >
                  Review &amp; Perbandingan
                </h2>
                <span className="text-[12px] text-[#1a1612]/65 ml-1">
                  {review.length} artikel
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {review.map((a) => (
                  <ArtikelCard key={a.slug} artikel={a} />
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ────────────────────────────────────────── */}
          <section className="relative py-20 sm:py-28 overflow-hidden bg-[#1a1612]">
            <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:64px_64px] pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#10b981]/25 to-transparent" />
            <div className="relative max-w-xl mx-auto px-5 sm:px-8 text-center">
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#047857]/50 mb-5">
                Gratis · Android &amp; Web · Mulai Sekarang
              </p>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-[-0.03em] leading-[1.1] mb-5 text-[#e0f2fe]">
                Siap Mulai Trading Otomatis?
              </h2>
              <p className="text-[#e0f2fe]/45 text-base leading-relaxed mb-8">
                Download <strong className="text-[#e0f2fe]/70">STC AutoTrade</strong> (TechnoAutoTrade)
                — mulai dari mode demo tanpa risiko.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={APK_PATH}
                  download
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#047857] text-white text-sm font-bold rounded-xl hover:bg-[#065f46] transition-all hover:-translate-y-0.5 no-underline shadow-xl shadow-[#047857]/20"
                >
                  Download APK Android
                </a>
              </div>
            </div>
          </section>

        </main>

        {/* ── FOOTER ─────────────────────────────────────── */}
        <SiteFooter />

      </div>
    </>
  );
}