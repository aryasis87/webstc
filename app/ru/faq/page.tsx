/**
 * app/ru/faq/page.tsx — русский близнец /faq и /en/faq
 */

import type { Metadata } from "next";
import Link from "next/link";
import { RuNav, RuCta, RuFooter, RuSectionLabel } from "../_components/RuChrome";

const BASE_URL = "https://stcautotrade.id";

const LANGS = {
  "id-ID": `${BASE_URL}/faq`,
  en: `${BASE_URL}/en/faq`,
  ru: `${BASE_URL}/ru/faq`,
  "x-default": `${BASE_URL}/faq`,
};

export const metadata: Metadata = {
  title: "FAQ STC AutoTrade — частые вопросы о боте Stockity",
  description:
    "Ответы на частые вопросы о STC AutoTrade: цена, безопасность, аккаунты, торговые режимы, демо и реал, выводы, устройства и решение проблем.",
  keywords: [
    "stc autotrade faq",
    "бот stockity вопросы",
    "робот stockity безопасно",
    "торговый бот faq",
  ],
  alternates: { canonical: `${BASE_URL}/ru/faq`, languages: LANGS },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `${BASE_URL}/ru/faq`,
    siteName: "STC AutoTrade",
    title: "FAQ STC AutoTrade — частые вопросы о боте Stockity",
    description: "Цена, безопасность, режимы, демо и реал, выводы, устройства, решение проблем.",
    images: [{ url: `${BASE_URL}/og-image.webp`, width: 1200, height: 630, alt: "FAQ STC AutoTrade" }],
  },
  twitter: { card: "summary_large_image" },
};

const groups: { label: string; items: { q: string; a: string }[] }[] = [
  {
    label: "Цена и доступ",
    items: [
      { q: "Сколько стоит STC AutoTrade?", a: "Бесплатно для зарегистрированных участников. Без цены покупки, подписки и комиссии с прибыли. Вы торгуете собственными средствами на собственном счёте Stockity." },
      { q: "Почему бесплатно — в чём подвох?", a: "Бот растёт вместе с сообществом участников экосистемы Stockity. Скрытых платежей нет: пополнения и выводы проходят на Stockity и никогда — через нас." },
      { q: "Какие устройства поддерживаются?", a: "Android через APK, всё остальное (iPhone, iPad, Windows, macOS, Linux) — через веб-версию на stcautotradepro.id. Функциональность идентична." },
    ],
  },
  {
    label: "Безопасность и аккаунт",
    items: [
      { q: "Безопасен ли бот для моего счёта Stockity?", a: "Бот подключается к счёту исключительно для исполнения настроенных вами сделок. Средства остаются на вашем счёте Stockity — пополнение и вывод полностью под вашим контролем." },
      { q: "Влияет ли бот на верификацию Stockity?", a: "Нет. Верификация (KYC) относится к счёту Stockity и не зависит от использования бота. Пройдите её заранее, чтобы выводы не задерживались." },
      { q: "Можно ли остановить бота в любой момент?", a: "Да — одно нажатие немедленно завершает сессию. Дневные стоп-лосс и тейк-профит также завершают сессии автоматически по вашим лимитам." },
    ],
  },
  {
    label: "Торговля и результаты",
    items: [
      { q: "Гарантирует ли бот прибыль?", a: "Нет — и не доверяйте инструментам, которые обещают обратное. Рынок несёт неустранимый риск. Бот даёт дисциплинированное, быстрое, безэмоциональное исполнение вашей стратегии и лимитов — результат по-прежнему зависит от стратегии и рынка." },
      { q: "Какой винрейт можно ожидать?", a: "Он меняется в зависимости от режима, настроек и рынка — любая фиксированная цифра была бы нечестной. Запустите 7–14 дней на демо и измерьте собственную статистику: только она имеет значение." },
      { q: "Что такое управляемый мартингейл?", a: "Опциональная система восстановления убытка с жёсткими лимитами: вы задаёте максимум шагов и множитель, превысить их бот не может. Вместе с дневным стоп-лоссом худший сценарий определён заранее." },
      { q: "С какого режима начать?", a: "Большинство начинает с AI Signal или копитрейдинга на демо (настраивать нечего, кроме лимитов риска), затем пробует индикаторы или свечной моментум. Детали каждого режима — на странице «Как это работает»." },
    ],
  },
  {
    label: "Решение проблем",
    items: [
      { q: "Бот не входит, хотя Stockity работает — почему?", a: "Проверьте, что данные в боте в точности совпадают с логином Stockity (обновите их после смены пароля). Если аккаунт Stockity создан через Google/Facebook — сначала задайте пароль аккаунта на Stockity." },
      { q: "Телефон должен быть включён во время сессии?", a: "Нет. Сессии работают на наших серверах — телефон может быть выключен или офлайн, сессия продолжится. Открывайте приложение когда угодно, чтобы посмотреть результаты или остановить бота." },
      { q: "APK не устанавливается — что делать?", a: "Разрешите установку из браузера (стандартный запрос Android для приложений вне Play Store), убедитесь в Android 8.0+ и перекачайте файл, если загрузка прерывалась. Веб-версия всегда доступна как запасной вариант." },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: groups.flatMap((g) => g.items).map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function RuFaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-[#f6f4ef]">
        <RuNav idHref="/faq" enHref="/en/faq" />

        <header className="max-w-5xl mx-auto px-5 sm:px-8 pt-14 pb-10">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#047857] mb-4">FAQ</p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5 max-w-3xl">
            Частые вопросы
          </h1>
          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            Прямые ответы о цене, безопасности, режимах и решении проблем. Не нашли свой вопрос?
            Начните со страницы <Link href="/ru/how-it-works" className="text-[#047857] underline">как это работает</Link>.
          </p>
        </header>

        <main className="max-w-5xl mx-auto px-5 sm:px-8 pb-24 space-y-14">
          {groups.map((g, gi) => (
            <section key={g.label}>
              <RuSectionLabel>{String(gi + 1).padStart(2, "0")} · {g.label}</RuSectionLabel>
              <div className="space-y-3 max-w-3xl">
                {g.items.map((item, i) => (
                  <div key={i} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl px-5 py-4">
                    <h3 className="text-[13px] sm:text-[14px] font-semibold text-[#1a1612] mb-2 leading-snug">{item.q}</h3>
                    <p className="text-[13px] text-[#6b6058] leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>

        <RuCta />
        <RuFooter />
      </div>
    </>
  );
}
