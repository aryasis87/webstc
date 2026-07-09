/**
 * components/InfoPageShell.tsx
 *
 * Kerangka visual bersama halaman informasi/trust (tentang, kontak,
 * kebijakan-privasi, syarat-ketentuan): nav, breadcrumb, header, area
 * konten prose, dan footer — mengikuti pola ArtikelShell agar halaman
 * cukup mengisi konten section.
 */

import Link from "next/link";
import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";

export function InfoPageShell({
  breadcrumbName,
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  breadcrumbName: string;
  eyebrow: string;
  title: React.ReactNode;
  intro: React.ReactNode;
  /** Baris "Terakhir diperbarui …" (halaman legal) — opsional */
  updated?: string;
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
          <ol className="flex items-center gap-1.5 text-[12px] text-[#1a1612]/65">
            <li><Link href="/" className="hover:text-[#1a1612] transition-colors no-underline">Beranda</Link></li>
            <li aria-hidden="true">›</li>
            <li className="text-[#1a1612]/70 font-medium">{breadcrumbName}</li>
          </ol>
        </nav>
      </div>

      {/* ── Header ────────────────────────────────────────── */}
      <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-10 pb-12">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#047857] mb-3">{eyebrow}</p>
        <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-4">
          {title}
        </h1>
        <p className="text-[#6b6058] text-base leading-relaxed max-w-xl">{intro}</p>
        {updated && (
          <p className="text-[12px] text-[#1a1612]/65 mt-4">Terakhir diperbarui: {updated}</p>
        )}
      </header>

      {/* ── Konten ────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 pb-24 space-y-12">{children}</main>

      {/* ── Footer ────────────────────────────────────────── */}
      <SiteFooter />
    </div>
  );
}

/* ── Blok konten bersama ──────────────────────────────────────── */

export function InfoSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="max-w-2xl">
      <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export function InfoP({ children }: { children: React.ReactNode }) {
  return <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">{children}</p>;
}

export function InfoList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex gap-2.5 text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
          <span className="text-[#10b981] flex-shrink-0 mt-0.5">•</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function InfoWarning({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#fffbeb] border border-[#fde68a] rounded-xl px-5 py-4 flex gap-3 max-w-2xl">
      <span className="text-xl flex-shrink-0">⚠️</span>
      <p className="text-[13px] text-[#92400e] leading-relaxed">{children}</p>
    </div>
  );
}
