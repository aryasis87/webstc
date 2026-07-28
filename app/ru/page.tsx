/**
 * app/ru/page.tsx — русская главная (близнец / и /en)
 * Primary: робот stockity, бот stockity, автоторговля stockity
 */

import type { Metadata } from "next";
import Link from "next/link";
import { RuNav, RuCta, RuFooter, RuSectionLabel } from "./_components/RuChrome";

const BASE_URL = "https://stcautotrade.id";

const LANGS = {
  "id-ID": BASE_URL,
  en: `${BASE_URL}/en`,
  ru: `${BASE_URL}/ru`,
  "x-default": BASE_URL,
};

export const metadata: Metadata = {
  title: "STC AutoTrade — бесплатный торговый робот для Stockity",
  description:
    "Автоматизируйте торговлю на Stockity с STC AutoTrade: 6 торговых режимов, AI-сигналы, копитрейдинг, автоматический стоп-лосс. APK для Android и веб-версия. Бесплатно для участников.",
  keywords: [
    "робот stockity",
    "бот stockity",
    "автоторговля stockity",
    "торговый робот бинарные опционы",
    "stockity сигналы",
    "бот для бинарных опционов",
  ],
  alternates: { canonical: `${BASE_URL}/ru`, languages: LANGS },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `${BASE_URL}/ru`,
    siteName: "STC AutoTrade",
    title: "STC AutoTrade — бесплатный торговый робот для Stockity",
    description: "6 режимов, AI-сигналы, копитрейдинг, автоматический стоп-лосс. Бесплатно для участников.",
    images: [{ url: `${BASE_URL}/og-image.webp`, width: 1200, height: 630, alt: "STC AutoTrade — торговый робот для Stockity" }],
  },
  twitter: { card: "summary_large_image" },
};

const faq = [
  { q: "STC AutoTrade действительно бесплатный?", a: "Да — для зарегистрированных участников. Нет цены покупки, подписки и комиссии с прибыли. Вы торгуете на собственном счёте Stockity собственными средствами." },
  { q: "Работает ли бот, если закрыть приложение?", a: "Да. Сессии выполняются на наших серверах, а не на вашем телефоне. Запущенная сессия продолжает торговать 24/7, даже если телефон выключен." },
  { q: "Нужен ли телефон на Android?", a: "Нет. Помимо APK для Android есть полноценная веб-версия на stcautotradepro.id — работает на iPhone, iPad, Windows, macOS и Linux в любом современном браузере." },
  { q: "Гарантирует ли бот прибыль?", a: "Нет — и ни один честный инструмент не гарантирует. Рынок всегда несёт риск. STC AutoTrade улучшает скорость, дисциплину и контроль риска (автоматический стоп-лосс/тейк-профит), но результат зависит от стратегии и рынка. Начинайте с демо-счёта." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function RuHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-[#f6f4ef]">
        <RuNav idHref="/" enHref="/en" />

        {/* ── Hero ─────────────────────────────────────────── */}
        <header className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-14">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#047857] mb-4">Автоматическая торговля на Stockity</p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl sm:text-6xl font-normal tracking-tight leading-[1.08] text-[#1a1612] mb-6 max-w-3xl">
            Ваш счёт Stockity<br className="hidden sm:block" /> торгует круглосуточно.
          </h1>
          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
            <strong className="font-semibold text-[#1a1612]">STC AutoTrade</strong> подключается к вашему
            счёту Stockity и исполняет сделки автоматически — 6 торговых режимов, управляемый мартингейл,
            автоматический дневной стоп-лосс и тейк-профит. Бесплатно для зарегистрированных участников.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/ru/download" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1612] text-white text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all no-underline">Скачать APK для Android</Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-12 border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden">
            {[
              { v: "6", l: "Торговых режимов" },
              { v: "24/7", l: "Работа на сервере" },
              { v: "Авто", l: "Стоп-лосс и тейк-профит" },
              { v: "0 ₽", l: "Для участников" },
            ].map((s, i) => (
              <div key={i} className="bg-white py-5 px-4 text-center border-r border-[rgba(26,22,18,0.07)] last:border-0">
                <p className="font-[family-name:var(--font-dm-serif)] text-3xl text-[#1a1612] mb-0.5">{s.v}</p>
                <p className="text-[11px] text-[#1a1612]/65">{s.l}</p>
              </div>
            ))}
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-5 sm:px-8 pb-24 space-y-16">
          {/* ── Режимы ──────────────────────────────────────── */}
          <section>
            <RuSectionLabel>01 · Торговые режимы</RuSectionLabel>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
              Шесть способов торговать — выберите свой
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "🤖", title: "AI Signal", desc: "Сигналы машинного обучения из анализа рынка в реальном времени — исполняются автоматически на вашем счёте." },
                { icon: "📋", title: "Копитрейдинг (CTC)", desc: "Зеркалирование сигналов опытных трейдеров — каждый вход копируется на ваш счёт в реальном времени." },
                { icon: "📊", title: "Индикаторы", desc: "Классические стратегии на автопилоте: SMA, EMA, RSI, MACD, полосы Боллинджера с вашими параметрами." },
                { icon: "🕯️", title: "Свечной моментум", desc: "Распознавание разворотов и пробоев — Hammer, Doji, пробой Боллинджера + Parabolic SAR." },
                { icon: "⚡", title: "Fastrade FTT", desc: "Высокочастотное следование за свечой — для коротких активных сессий." },
                { icon: "🗓️", title: "Режим расписания", desc: "Загрузите список сигналов со временем — бот исполнит каждый точно по расписанию." },
              ].map((m) => (
                <div key={m.title} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                  <div className="text-xl mb-2">{m.icon}</div>
                  <h3 className="text-[14px] font-semibold text-[#1a1612] mb-1.5">{m.title}</h3>
                  <p className="text-[12.5px] text-[#6b6058] leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Риск ────────────────────────────────────────── */}
          <section>
            <RuSectionLabel>02 · Риск прежде всего</RuSectionLabel>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
              Построен вокруг управления риском, а не обещаний
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
              {[
                { title: "Автоматический дневной стоп-лосс", desc: "Задайте максимальный дневной убыток — при его достижении бот останавливается. Никакой «отыгровки»." },
                { title: "Автоматический тейк-профит", desc: "Дневная цель достигнута — бот фиксирует результат и останавливается, не отдавая прибыль обратно." },
                { title: "Управляемый мартингейл", desc: "Опциональное восстановление убытка с жёсткими лимитами: вы задаёте максимум шагов и множитель." },
                { title: "Полноценный демо-режим", desc: "Все режимы работают на демо-счёте Stockity с реальными рыночными данными. Сначала проверьте — потом доверяйте." },
              ].map((f) => (
                <div key={f.title} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                  <h3 className="text-[13px] font-semibold text-[#1a1612] mb-2">✅ {f.title}</h3>
                  <p className="text-[12.5px] text-[#6b6058] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-[#6b6058] mt-5 max-w-3xl">
              Мы не обещаем фиксированную дневную доходность — честно это невозможно. Бот даёт
              дисциплинированное исполнение <em>ваших</em> лимитов 24 часа в сутки. Подробнее —{" "}
              <Link href="/ru/how-it-works" className="text-[#047857] underline">как это работает</Link>.
            </p>
          </section>

          {/* ── Устройства ──────────────────────────────────── */}
          <section>
            <RuSectionLabel>03 · Любое устройство</RuSectionLabel>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
              APK для Android или веб — сессии живут на сервере
            </h2>
            <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl overflow-hidden max-w-3xl">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-[#f6f4ef] border-b border-[rgba(26,22,18,0.07)]">
                    <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Ваше устройство</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Как использовать</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Телефон / планшет Android", "Установите APK — полный нативный опыт"],
                    ["iPhone / iPad", "Веб-версия на stcautotradepro.id — без установки"],
                    ["Windows / macOS / Linux", "Веб-версия в любом современном браузере"],
                    ["Телефон выключен / нет сети", "Сессии продолжаются — бот живёт на сервере, а не на устройстве"],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[rgba(26,22,18,0.05)] last:border-0">
                      <td className="px-4 py-3 font-medium text-[#1a1612]">{row[0]}</td>
                      <td className="px-4 py-3 text-[#6b6058]">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── FAQ ─────────────────────────────────────────── */}
          <section>
            <RuSectionLabel>04 · Частые вопросы</RuSectionLabel>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
              Частые вопросы
            </h2>
            <div className="space-y-3 max-w-3xl">
              {faq.map((item, i) => (
                <div key={i} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl px-5 py-4">
                  <h3 className="text-[13px] sm:text-[14px] font-semibold text-[#1a1612] mb-2 leading-snug">{item.q}</h3>
                  <p className="text-[13px] text-[#6b6058] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-[#6b6058] mt-5">
              Больше ответов — на <Link href="/ru/faq" className="text-[#047857] underline">странице FAQ</Link>.
            </p>
          </section>
        </main>

        <RuCta />
        <RuFooter />
      </div>
    </>
  );
}
