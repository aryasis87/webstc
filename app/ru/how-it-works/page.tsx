/**
 * app/ru/how-it-works/page.tsx — русский близнец /cara-kerja и /en/how-it-works
 */

import type { Metadata } from "next";
import Link from "next/link";
import { RuNav, RuCta, RuFooter, RuSectionLabel } from "../_components/RuChrome";

const BASE_URL = "https://stcautotrade.id";

const LANGS = {
  "id-ID": `${BASE_URL}/cara-kerja`,
  en: `${BASE_URL}/en/how-it-works`,
  ru: `${BASE_URL}/ru/how-it-works`,
  "x-default": `${BASE_URL}/cara-kerja`,
};

export const metadata: Metadata = {
  title: "Как работает STC AutoTrade — 6 режимов и контроль риска",
  description:
    "Внутреннее устройство бота Stockity: серверные сессии, как решает каждый из 6 торговых режимов, и какие ограничители — стоп-лосс, тейк-профит, управляемый мартингейл — защищают ваш баланс.",
  keywords: [
    "как работает бот stockity",
    "стратегии бота stockity",
    "stc autotrade как работает",
    "автоматическая торговля объяснение",
    "управление риском торговый бот",
  ],
  alternates: { canonical: `${BASE_URL}/ru/how-it-works`, languages: LANGS },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `${BASE_URL}/ru/how-it-works`,
    siteName: "STC AutoTrade",
    title: "Как работает STC AutoTrade — 6 режимов и контроль риска",
    description: "Серверные сессии, 6 торговых режимов и ограничители, защищающие баланс.",
    images: [{ url: `${BASE_URL}/og-image.webp`, width: 1200, height: 630, alt: "Как работает STC AutoTrade" }],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Как запустить автоматическую торговую сессию в STC AutoTrade",
  description: "Подключите счёт Stockity, выберите режим, задайте лимиты риска — серверный бот исполняет сделки.",
  step: [
    { "@type": "HowToStep", name: "Вход", text: "Войдите в STC AutoTrade с учётными данными Stockity." },
    { "@type": "HowToStep", name: "Выбор режима", text: "Один из 6 режимов: AI Signal, копитрейдинг, индикаторы, свечной моментум, Fastrade или расписание." },
    { "@type": "HowToStep", name: "Лимиты риска", text: "Размер сделки, лимиты мартингейла, дневной стоп-лосс и тейк-профит." },
    { "@type": "HowToStep", name: "Запуск сессии", text: "Бот работает на сервере 24/7 — устройство может быть офлайн." },
    { "@type": "HowToStep", name: "Анализ результатов", text: "Полная история сделок; настройки пересматривайте еженедельно." },
  ],
};

export default function RuHowItWorksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <div className="min-h-screen bg-[#f6f4ef]">
        <RuNav idHref="/cara-kerja" enHref="/en/how-it-works" />

        <header className="max-w-5xl mx-auto px-5 sm:px-8 pt-14 pb-10">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#047857] mb-4">Как это работает</p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5 max-w-3xl">
            Что происходит после нажатия «Старт»
          </h1>
          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            Никакого «чёрного ящика»: где на самом деле работает бот, как каждый режим принимает решения
            и какие ограничители стоят между рынком и вашим балансом.
          </p>
        </header>

        <main className="max-w-5xl mx-auto px-5 sm:px-8 pb-24 space-y-16">
          {/* Архитектура */}
          <section>
            <RuSectionLabel>01 · Архитектура</RuSectionLabel>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
              Бот живёт на сервере, а не в вашем телефоне
            </h2>
            <div className="space-y-3 max-w-2xl">
              {[
                { title: "Вы настраиваете — сервер исполняет", desc: "Приложение (APK или веб) — это пульт управления. При запуске сессии конфигурация передаётся на сервер, и дальше торгует именно он." },
                { title: "Устройство может исчезнуть", desc: "Закройте приложение, потеряйте сеть, разрядите батарею — сессия продолжается. Вы возвращаетесь смотреть результаты, а не сторожить бота." },
                { title: "Сделки идут на ВАШ счёт Stockity", desc: "Бот выставляет ордера через ваш собственный счёт. Средства нам не передаются; пополнение и вывод — на Stockity, под вашим контролем." },
                { title: "Каждая сделка записана", desc: "Победы и поражения — всё в истории. Ваш еженедельный анализ строится на полных данных, а не на памяти." },
              ].map((s, i) => (
                <div key={i} className="flex gap-4 bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-5 py-4">
                  <div className="w-8 h-8 min-w-[32px] rounded-full border border-[rgba(26,22,18,0.12)] bg-[#f0fdf4] flex items-center justify-center text-[12px] font-bold text-[#0f766e]">{i + 1}</div>
                  <div className="pt-0.5">
                    <h3 className="text-[13px] font-semibold text-[#1a1612] mb-1">{s.title}</h3>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Режимы */}
          <section>
            <RuSectionLabel>02 · Режимы</RuSectionLabel>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
              Как решает каждый из 6 режимов
            </h2>
            <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl overflow-hidden">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-[#f6f4ef] border-b border-[rgba(26,22,18,0.07)]">
                    <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Режим</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Источник сигнала</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Кому подходит</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["AI Signal", "ML-модель оценивает движение цены в реальном времени", "Автономная торговля с адаптивными сигналами"],
                    ["Копитрейдинг (CTC)", "Зеркалирование входов опытных трейдеров", "Следование за проверенными решениями"],
                    ["Индикаторы", "SMA / EMA / RSI / MACD / Bollinger с вашими параметрами", "Тем, кто доверяет конкретной классике"],
                    ["Свечной моментум", "Развороты и пробои: Hammer, Doji, BB + Parabolic SAR", "Любителям price action"],
                    ["Fastrade FTT", "Высокочастотное следование за свечой", "Короткие активные сессии"],
                    ["Расписание", "Ваш список сигналов со временем исполнения", "Участникам сигнальных групп"],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[rgba(26,22,18,0.05)] last:border-0">
                      <td className="px-4 py-3 font-medium text-[#1a1612]">{row[0]}</td>
                      <td className="px-4 py-3 text-[#6b6058]">{row[1]}</td>
                      <td className="px-4 py-3 text-[#6b6058]">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Ограничители */}
          <section>
            <RuSectionLabel>03 · Ограничители</RuSectionLabel>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
              Что стоит между рынком и вашим балансом
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
              {[
                { icon: "🛑", title: "Дневной стоп-лосс", desc: "Жёсткий лимит дневного убытка. Достигнут — сессия завершается. Самая важная настройка приложения." },
                { icon: "🎯", title: "Дневной тейк-профит", desc: "Зеркальный лимит: цель достигнута — бот фиксирует прибыль остановкой." },
                { icon: "📶", title: "Управляемый мартингейл (опция)", desc: "Восстановление убытка с жёстким потолком: вы задаёте максимум шагов и множитель — бот не может «импровизировать»." },
                { icon: "🧪", title: "Всё проверяется на демо", desc: "Все режимы идентично работают на демо-счёте Stockity с живыми данными. Сначала статистика — потом деньги." },
              ].map((f) => (
                <div key={f.title} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                  <div className="text-xl mb-2">{f.icon}</div>
                  <h3 className="text-[13px] font-semibold text-[#1a1612] mb-2">{f.title}</h3>
                  <p className="text-[12.5px] text-[#6b6058] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#fffbeb] border border-[#fde68a] rounded-xl px-5 py-4 flex gap-3 mt-5 max-w-3xl">
              <span className="text-xl flex-shrink-0">⚠️</span>
              <p className="text-[13px] text-[#92400e] leading-relaxed">
                Честно: ни один бот не устраняет рыночный риск, а винрейт меняется вместе с рынком.
                STC AutoTrade даёт дисциплину исполнения — но не обещает прибыль. Торгуйте только теми
                средствами, потерю которых можете себе позволить.
              </p>
            </div>
          </section>
        </main>

        <RuCta eyebrow="Убедитесь сами" title="Запустите первую сессию на демо-счёте" desc="Выберите режим, задайте лимиты — и наблюдайте за серверной торговлей без риска." />
        <RuFooter />
      </div>
    </>
  );
}
