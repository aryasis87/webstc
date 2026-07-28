/**
 * app/en/_components/EnChrome.tsx
 * Shared chrome (nav + CTA + footer) for the English pages.
 * Mirrors the Indonesian design language; links stay within /en where
 * an English page exists, and a language switcher points to the ID twin.
 */

import Link from "next/link";
import Image from "next/image";

export function EnNav({ idHref }: { idHref: string }) {
  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[rgba(26,22,18,0.08)]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        <Link href="/en" className="flex items-center gap-2.5 no-underline">
          <Image src="/logo.webp" alt="STC AutoTrade logo" width={28} height={28} className="rounded-[6px]" />
          <span className="text-sm font-semibold text-[#1a1612]">STC AutoTrade</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/en/how-it-works" className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#1a1612]/65 hover:text-[#1a1612] transition-colors no-underline">How It Works</Link>
          <Link href="/en/articles" className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#1a1612]/65 hover:text-[#1a1612] transition-colors no-underline">Articles</Link>
          <Link href="/en/faq" className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#1a1612]/65 hover:text-[#1a1612] transition-colors no-underline">FAQ</Link>
          {/* Language switcher — links to the Indonesian twin of this page */}
          <Link href={idHref} className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-[#1a1612]/70 border border-[rgba(26,22,18,0.14)] rounded-lg hover:border-[rgba(26,22,18,0.3)] transition-colors no-underline" title="Baca dalam Bahasa Indonesia">
            🇮🇩 ID
          </Link>
          <Link href="/en/download" className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1a1612] text-white text-xs font-semibold rounded-lg hover:bg-[#1a1612]/85 transition-colors no-underline">Download</Link>
        </div>
      </div>
    </nav>
  );
}

export function EnCta({
  eyebrow = "Get Started Free",
  title = "STC AutoTrade — Automated Trading for Your Stockity Account",
  desc = "6 strategy modes, automatic stop loss, runs 24/7 on our servers. Free for registered members.",
}: {
  eyebrow?: string;
  title?: string;
  desc?: string;
}) {
  return (
    <section className="border-t border-[rgba(26,22,18,0.08)] bg-white py-14">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#047857] mb-1.5">{eyebrow}</p>
          <p className="text-base font-semibold text-[#1a1612] mb-1">{title}</p>
          <p className="text-[13px] text-[#6b6058]">{desc}</p>
        </div>
        <div className="flex gap-2.5 flex-shrink-0">
          <Link href="/en/download" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1a1612] text-white text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all no-underline">Download APK</Link>
        </div>
      </div>
    </section>
  );
}

export function EnFooter() {
  return (
    <footer className="border-t border-[rgba(26,22,18,0.07)] py-6 bg-[#f6f4ef]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-[11px] text-[#1a1612]/65">© 2026 STC AutoTrade (TechnoAutoTrade) · stcautotrade.id</p>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-[11px] text-[#1a1612]/65 hover:text-[#1a1612] transition-colors no-underline">Bahasa Indonesia</Link>
          <Link href="/en" className="text-[11px] text-[#1a1612]/65 hover:text-[#1a1612] transition-colors no-underline">← Home</Link>
        </div>
      </div>
    </footer>
  );
}

export function EnSectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/65 mb-5 flex items-center gap-3">
      {children}
      <span className="flex-1 h-px bg-[rgba(26,22,18,0.08)]" />
    </p>
  );
}
