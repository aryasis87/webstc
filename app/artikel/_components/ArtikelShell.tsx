/**
 * app/artikel/_components/ArtikelShell.tsx
 *
 * Kerangka visual bersama halaman artikel: nav, breadcrumb, header
 * (badge/tanggal/judul/lede/stat strip), area konten, related links,
 * CTA, dan footer. Halaman artikel tinggal mengisi konten section.
 * Folder _components tidak menjadi route (konvensi App Router).
 */

import Link from "next/link";
import Image from "next/image";

export interface RelatedLink {
  href: string;
  title: string;
  desc: string;
}

export interface ShellStat {
  v: string;
  l: string;
}

const BADGE_STYLES: Record<string, string> = {
  Panduan:         "bg-[#dbeafe] text-[#1d4ed8]",
  Strategi:        "bg-[#ede9fe] text-[#6d28d9]",
  Review:          "bg-[#ffedd5] text-[#c2410c]",
  Edukasi:         "bg-[#fce7f3] text-[#be185d]",
  Troubleshooting: "bg-[#fee2e2] text-[#b91c1c]",
};

export function ArtikelShell({
  badge,
  date,
  readMins,
  breadcrumbName,
  title,
  lede,
  stats,
  related,
  ctaEyebrow,
  ctaTitle,
  ctaDesc,
  children,
}: {
  badge: keyof typeof BADGE_STYLES | string;
  date: string;
  readMins: number;
  breadcrumbName: string;
  title: React.ReactNode;
  lede: React.ReactNode;
  stats: ShellStat[];
  related: RelatedLink[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDesc: string;
  children: React.ReactNode;
}) {
  return (
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
          <ol className="flex items-center gap-1.5 text-[12px] text-[#1a1612]/65 min-w-0">
            <li><Link href="/" className="hover:text-[#1a1612] transition-colors no-underline">Beranda</Link></li>
            <li aria-hidden="true">›</li>
            <li><Link href="/artikel" className="hover:text-[#1a1612] transition-colors no-underline">Artikel</Link></li>
            <li aria-hidden="true">›</li>
            <li className="text-[#1a1612]/70 font-medium truncate">{breadcrumbName}</li>
          </ol>
        </nav>
      </div>

      {/* ── Article Header ────────────────────────────────── */}
      <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-10">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className={`inline-flex items-center px-2.5 py-1 text-[11px] font-semibold rounded-full ${BADGE_STYLES[badge] ?? BADGE_STYLES.Edukasi}`}>{badge}</span>
          <span className="text-[12px] text-[#1a1612]/65">{date}</span>
          <span className="text-[12px] text-[#1a1612]/65">·</span>
          <span className="text-[12px] text-[#1a1612]/65">±{readMins} menit baca</span>
        </div>

        <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5">
          {title}
        </h1>

        <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">{lede}</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-8 border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <div key={i} className="bg-white py-4 px-4 text-center border-r border-[rgba(26,22,18,0.07)] last:border-0">
              <p className="font-[family-name:var(--font-dm-serif)] text-2xl text-[#1a1612] mb-0.5">{s.v}</p>
              <p className="text-[11px] text-[#1a1612]/65">{s.l}</p>
            </div>
          ))}
        </div>
      </header>

      {/* ── Article Body ──────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 pb-24">
        <article className="space-y-14">{children}</article>

        {/* ── Internal Links ────────────────────────────── */}
        <div className="mt-14 pt-10 border-t border-[rgba(26,22,18,0.08)]">
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/65 mb-5">Artikel Terkait</p>
          <div className="grid sm:grid-cols-3 gap-3">
            {related.map((l) => (
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
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#047857] mb-1.5">{ctaEyebrow}</p>
            <p className="text-base font-semibold text-[#1a1612] mb-1">{ctaTitle}</p>
            <p className="text-[13px] text-[#6b6058]">{ctaDesc}</p>
          </div>
          <div className="flex gap-2.5 flex-shrink-0">
            <Link href="/download" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1a1612] text-white text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all no-underline">Download APK</Link>
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
  );
}

/* ── Blok konten bersama ──────────────────────────────────────── */

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/65 mb-5 flex items-center gap-3">
      {children}
      <span className="flex-1 h-px bg-[rgba(26,22,18,0.08)]" />
    </p>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
      {children}
    </h2>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">{children}</p>;
}

export function InfoBox({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
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

export function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#fffbeb] border border-[#fde68a] rounded-xl px-5 py-4 flex gap-3">
      <span className="text-xl flex-shrink-0">⚠️</span>
      <p className="text-[13px] text-[#92400e] leading-relaxed">{children}</p>
    </div>
  );
}

/** Daftar langkah bernomor (kartu putih) */
export function Steps({ items }: { items: { title: string; desc: React.ReactNode }[] }) {
  return (
    <div className="space-y-3 max-w-2xl">
      {items.map((s, i) => (
        <div key={i} className="flex gap-4 bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-5 py-4">
          <div className="w-8 h-8 min-w-[32px] rounded-full border border-[rgba(26,22,18,0.12)] bg-[#f0fdf4] flex items-center justify-center text-[12px] font-bold text-[#0f766e]">{i + 1}</div>
          <div className="pt-0.5">
            <h3 className="text-[13px] font-semibold text-[#1a1612] mb-1">{s.title}</h3>
            <p className="text-[12px] text-[#6b6058] leading-relaxed">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Grid kartu 2 kolom (icon + judul + deskripsi) */
export function CardGrid({ items }: { items: { icon: string; title: string; desc: React.ReactNode }[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((item, i) => (
        <div key={i} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
          <div className="text-xl mb-2">{item.icon}</div>
          <h3 className="text-[13px] font-semibold text-[#1a1612] mb-2">{item.title}</h3>
          <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

/** Tabel data sederhana */
export function DataTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl overflow-hidden overflow-x-auto">
      <table className="w-full text-[13px]">
        <thead>
          <tr className="bg-[#f6f4ef] border-b border-[rgba(26,22,18,0.07)]">
            {head.map((h) => (
              <th key={h} className="text-left px-4 py-3 font-semibold text-[#1a1612]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[rgba(26,22,18,0.05)] last:border-0">
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-[#1a1612]" : "text-[#6b6058]"}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Daftar FAQ (kartu putih) — konten HARUS sama dengan faqSchema */
export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl px-5 py-4">
          <h3 className="text-[13px] sm:text-[14px] font-semibold text-[#1a1612] mb-2 leading-snug">{item.q}</h3>
          <p className="text-[13px] text-[#6b6058] leading-relaxed">{item.a}</p>
        </div>
      ))}
    </div>
  );
}
