/**
 * app/ru/articles/page.tsx — индекс русских статей (близнец /artikel и /en/articles)
 */

import type { Metadata } from "next";
import Link from "next/link";
import { RuNav, RuCta, RuFooter } from "../_components/RuChrome";

const BASE_URL = "https://stcautotrade.id";

export const metadata: Metadata = {
  title: "Статьи — гайды по торговле на Stockity | STC AutoTrade",
  description:
    "Русскоязычные гайды для трейдеров Stockity: справочник по торговому роботу, настройка, верификация аккаунта, вывод средств, ИИ-трейдинг и сравнения платформ.",
  keywords: ["stockity гайды", "stockity статьи", "stockity инструкция", "бот stockity гайд"],
  alternates: {
    canonical: `${BASE_URL}/ru/articles`,
    languages: {
      "id-ID": `${BASE_URL}/artikel`,
      en: `${BASE_URL}/en/articles`,
      ru: `${BASE_URL}/ru/articles`,
      "x-default": `${BASE_URL}/artikel`,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `${BASE_URL}/ru/articles`,
    siteName: "STC AutoTrade",
    title: "Статьи — гайды по торговле на Stockity",
    description: "Справочник по роботу, настройка, верификация, выводы, ИИ-трейдинг, сравнения.",
    images: [{ url: `${BASE_URL}/og-image.webp`, width: 1200, height: 630, alt: "Статьи STC AutoTrade" }],
  },
  twitter: { card: "summary_large_image" },
};

const ARTICLES = [
  { slug: "stockity-trading-robot", badge: "Гайд", title: "Торговый робот Stockity: полный гайд по автоторговле", desc: "Как работает робот, 6 торговых режимов, контроль риска и безопасный старт на демо.", mins: 9 },
  { slug: "how-to-set-up-stockity-robot", badge: "Гайд", title: "Настройка робота Stockity: каждый параметр с примерами", desc: "Выбор режима, размер сделки (правило 1–5%), математика мартингейла, дневные лимиты — со значениями для новичка.", mins: 8 },
  { slug: "stockity-vs-quotex", badge: "Обзор", title: "Stockity или Quotex: честное сравнение", desc: "8 аспектов: депозиты, выплаты, активы, платежи, выводы и поддержка автоторговли.", mins: 8 },
  { slug: "ai-trading-stockity", badge: "Обучение", title: "ИИ-трейдинг на Stockity: как работают AI-сигналы", desc: "ML-анализ в реальном времени, ИИ против ручного анализа, честные ограничения и запуск AI Signal.", mins: 8 },
  { slug: "stockity-account-verification", badge: "Гайд", title: "Верификация Stockity (KYC): пройдите с первого раза", desc: "Документы, шаги загрузки, сроки проверки и причины отказов — обязательна до вывода средств.", mins: 6 },
  { slug: "how-to-withdraw-from-stockity", badge: "Гайд", title: "Как вывести деньги со Stockity: шаги, сроки, проблемы", desc: "Требования, процесс выплаты, реальные сроки и лечение зависших или отклонённых заявок.", mins: 7 },
  { slug: "how-to-register-stockity", badge: "Гайд", title: "Регистрация на Stockity: от аккаунта до первой сделки", desc: "Процесс регистрации, почему сначала демо, и безопасный первый депозит, который новички пропускают.", mins: 6 },
  { slug: "is-stockity-legit", badge: "Обзор", title: "Stockity — развод или нет? Честный обзор по фактам", desc: "Что подтверждается (выплаты, KYC, демо), что проверить самому, и реальные риски без прикрас.", mins: 8 },
  { slug: "stockity-minimum-deposit", badge: "Гайд", title: "Минимальный депозит Stockity: реальные цифры", desc: "Минимум против рабочего баланса — с математикой, которая их разделяет, и безопасным запасом.", mins: 6 },
  { slug: "stockity-martingale-strategy", badge: "Стратегия", title: "Мартингейл на Stockity: сначала математика, потом деньги", desc: "Математика шагов, почему база — 2–2,5× и максимум 3 шага, и автоматизация с жёсткими лимитами.", mins: 8 },
  { slug: "stockity-demo-account", badge: "Гайд", title: "Демо-счёт Stockity: практикуйтесь как по-настоящему", desc: "Бесплатная практика на реальных данных, план на 7 дней и критерий готовности к реальному счёту.", mins: 6 },
];

const BADGE_STYLES: Record<string, string> = {
  "Гайд": "bg-[#dbeafe] text-[#1d4ed8]",
  "Обзор": "bg-[#ffedd5] text-[#c2410c]",
  "Обучение": "bg-[#fce7f3] text-[#be185d]",
};

const listSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Статьи STC AutoTrade на русском",
  itemListElement: ARTICLES.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${BASE_URL}/ru/articles/${a.slug}`,
    name: a.title,
  })),
};

export default function RuArticlesIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      <div className="min-h-screen bg-[#f6f4ef]">
        <RuNav idHref="/artikel" enHref="/en/articles" />

        <header className="max-w-5xl mx-auto px-5 sm:px-8 pt-14 pb-10">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#047857] mb-4">Статьи</p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5 max-w-3xl">
            Гайды по торговле на Stockity
          </h1>
          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            Практичные гайды без хайпа — о торговле на Stockity с автоматизацией и без. Нужно больше?
            В <Link href="/en/articles" className="text-[#047857] underline">английской библиотеке</Link> и{" "}
            <Link href="/artikel" className="text-[#047857] underline">индонезийской</Link> (40+ статей) — ещё.
          </p>
        </header>

        <main className="max-w-5xl mx-auto px-5 sm:px-8 pb-24">
          <div className="grid sm:grid-cols-2 gap-4">
            {ARTICLES.map((a) => (
              <Link key={a.slug} href={`/ru/articles/${a.slug}`} className="group block bg-white border border-[rgba(26,22,18,0.08)] rounded-2xl p-6 hover:border-[#10b981]/30 hover:shadow-sm transition-all no-underline">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`inline-flex items-center px-2.5 py-1 text-[11px] font-semibold rounded-full ${BADGE_STYLES[a.badge]}`}>{a.badge}</span>
                  <span className="text-[12px] text-[#1a1612]/65">~{a.mins} мин чтения</span>
                </div>
                <h2 className="text-[16px] font-semibold text-[#1a1612] mb-2 leading-snug group-hover:text-[#047857] transition-colors">{a.title} →</h2>
                <p className="text-[13px] text-[#6b6058] leading-relaxed">{a.desc}</p>
              </Link>
            ))}
          </div>
        </main>

        <RuCta />
        <RuFooter />
      </div>
    </>
  );
}
