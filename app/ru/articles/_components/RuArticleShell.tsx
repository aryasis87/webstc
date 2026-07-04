/**
 * app/ru/articles/_components/RuArticleShell.tsx
 * Каркас русской статьи — зеркалит EnArticleShell с русским хромом и
 * переключателями на близнецов ID/EN. Контентные блоки переиспользуются
 * из индонезийского каркаса (они языконезависимы).
 */

import Link from "next/link";
import Image from "next/image";

export {
  SectionLabel,
  H2,
  P,
  InfoBox,
  WarningBox,
  Steps,
  CardGrid,
  DataTable,
  FaqList,
} from "../../../artikel/_components/ArtikelShell";

export interface RuRelatedLink {
  href: string;
  title: string;
  desc: string;
}

const BADGE_STYLES: Record<string, string> = {
  "Гайд":       "bg-[#dbeafe] text-[#1d4ed8]",
  "Стратегия":  "bg-[#ede9fe] text-[#6d28d9]",
  "Обзор":      "bg-[#ffedd5] text-[#c2410c]",
  "Обучение":   "bg-[#fce7f3] text-[#be185d]",
};

export function RuArticleShell({
  badge,
  date,
  readMins,
  breadcrumbName,
  idHref,
  enHref,
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
  /** путь индонезийского близнеца */
  idHref: string;
  /** путь английского близнеца */
  enHref: string;
  title: React.ReactNode;
  lede: React.ReactNode;
  stats: { v: string; l: string }[];
  related: RuRelatedLink[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDesc: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f6f4ef]">
      {/* ── Навигация ─────────────────────────────────────── */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[rgba(26,22,18,0.08)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <Link href="/ru" className="flex items-center gap-2.5 no-underline">
            <Image src="/logo.webp" alt="Логотип STC AutoTrade" width={28} height={28} className="rounded-[6px]" />
            <span className="text-sm font-semibold text-[#1a1612]">STC AutoTrade</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/ru/how-it-works" className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#1a1612]/65 hover:text-[#1a1612] transition-colors no-underline">Как это работает</Link>
            <Link href="/ru/articles" className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#1a1612]/65 hover:text-[#1a1612] transition-colors no-underline">Статьи</Link>
            <Link href={enHref} className="inline-flex items-center px-2.5 py-1.5 text-xs font-semibold text-[#1a1612]/70 border border-[rgba(26,22,18,0.14)] rounded-lg hover:border-[rgba(26,22,18,0.3)] transition-colors no-underline" title="Read in English">EN</Link>
            <Link href={idHref} className="inline-flex items-center px-2.5 py-1.5 text-xs font-semibold text-[#1a1612]/70 border border-[rgba(26,22,18,0.14)] rounded-lg hover:border-[rgba(26,22,18,0.3)] transition-colors no-underline" title="Baca dalam Bahasa Indonesia">ID</Link>
            <Link href="/ru/download" className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1a1612] text-white text-xs font-semibold rounded-lg hover:bg-[#1a1612]/85 transition-colors no-underline">Скачать</Link>
          </div>
        </div>
      </nav>

      {/* ── Хлебные крошки ────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-5">
        <nav aria-label="Хлебные крошки">
          <ol className="flex items-center gap-1.5 text-[12px] text-[#1a1612]/65 flex-wrap">
            <li><Link href="/ru" className="hover:text-[#1a1612] transition-colors no-underline">Главная</Link></li>
            <li aria-hidden="true">›</li>
            <li><Link href="/ru/articles" className="hover:text-[#1a1612] transition-colors no-underline">Статьи</Link></li>
            <li aria-hidden="true">›</li>
            <li className="text-[#1a1612]/70 font-medium">{breadcrumbName}</li>
          </ol>
        </nav>
      </div>

      {/* ── Шапка статьи ──────────────────────────────────── */}
      <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-10">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className={`inline-flex items-center px-2.5 py-1 text-[11px] font-semibold rounded-full ${BADGE_STYLES[badge] ?? BADGE_STYLES["Обучение"]}`}>{badge}</span>
          <span className="text-[12px] text-[#1a1612]/65">{date}</span>
          <span className="text-[12px] text-[#1a1612]/65">·</span>
          <span className="text-[12px] text-[#1a1612]/65">~{readMins} мин чтения</span>
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

      {/* ── Тело статьи ───────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 pb-24">
        <article className="space-y-14">{children}</article>

        <div className="mt-14 pt-10 border-t border-[rgba(26,22,18,0.08)]">
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/65 mb-5">Похожие статьи</p>
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
            <Link href="/ru/download" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1a1612] text-white text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all no-underline">Скачать APK</Link>
            <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2.5 border border-[rgba(26,22,18,0.16)] text-[#1a1612]/70 text-sm font-medium rounded-xl hover:border-[rgba(26,22,18,0.28)] hover:text-[#1a1612] transition-all no-underline">Веб-версия</a>
          </div>
        </div>
      </section>

      {/* ── Футер ─────────────────────────────────────────── */}
      <footer className="border-t border-[rgba(26,22,18,0.07)] py-6 bg-[#f6f4ef]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[11px] text-[#1a1612]/65">© 2026 STC AutoTrade (StockAutoTrade) · stcautotrade.id</p>
          <div className="flex items-center gap-4">
            <Link href={enHref} className="text-[11px] text-[#1a1612]/65 hover:text-[#1a1612] transition-colors no-underline">English</Link>
            <Link href={idHref} className="text-[11px] text-[#1a1612]/65 hover:text-[#1a1612] transition-colors no-underline">Bahasa Indonesia</Link>
            <Link href="/ru" className="text-[11px] text-[#1a1612]/65 hover:text-[#1a1612] transition-colors no-underline">← Главная</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
