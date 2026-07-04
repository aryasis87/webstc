/**
 * app/ru/download/page.tsx — русский близнец /download и /en/download
 * Primary: скачать бот stockity, stockity robot apk
 */

import type { Metadata } from "next";
import Link from "next/link";
import { RuNav, RuCta, RuFooter, RuSectionLabel } from "../_components/RuChrome";

const BASE_URL = "https://stcautotrade.id";

const LANGS = {
  "id-ID": `${BASE_URL}/download`,
  en: `${BASE_URL}/en/download`,
  ru: `${BASE_URL}/ru/download`,
  "x-default": `${BASE_URL}/download`,
};

export const metadata: Metadata = {
  title: "Скачать STC AutoTrade — APK бота Stockity и веб-версия",
  description:
    "Скачайте бесплатный APK STC AutoTrade для Android или используйте веб-версию на iPhone, ПК и Mac. Требования, установка за 5 шагов и первый запуск торгового бота Stockity.",
  keywords: [
    "скачать бот stockity",
    "stockity robot apk",
    "stc autotrade скачать",
    "приложение автоторговли stockity",
    "скачать торговый бот android",
  ],
  alternates: { canonical: `${BASE_URL}/ru/download`, languages: LANGS },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `${BASE_URL}/ru/download`,
    siteName: "STC AutoTrade",
    title: "Скачать STC AutoTrade — APK бота Stockity и веб-версия",
    description: "Бесплатный APK для Android + веб-версия для остальных устройств. Инструкция внутри.",
    images: [{ url: `${BASE_URL}/og-image.webp`, width: 1200, height: 630, alt: "Скачать STC AutoTrade" }],
  },
  twitter: { card: "summary_large_image" },
};

/** @id #app — сливается с глобальной сущностью SoftwareApplication */
const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${BASE_URL}/#app`,
  name: "STC AutoTrade",
  operatingSystem: "Android 8.0+, Web Browser (все платформы)",
  applicationCategory: "FinanceApplication",
  downloadUrl: `${BASE_URL}/StcAutoTrade.apk`,
  inLanguage: ["id", "en", "ru"],
  offers: { "@type": "Offer", price: "0", priceCurrency: "IDR", availability: "https://schema.org/InStock" },
};

export default function RuDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <div className="min-h-screen bg-[#f6f4ef]">
        <RuNav idHref="/download" enHref="/en/download" />

        <header className="max-w-5xl mx-auto px-5 sm:px-8 pt-14 pb-10">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#047857] mb-4">Скачать</p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5 max-w-3xl">
            STC AutoTrade на любом устройстве
          </h1>
          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            Один аккаунт — два способа запуска: <strong className="font-semibold text-[#1a1612]">APK для
            Android</strong> или <strong className="font-semibold text-[#1a1612]">веб-версия</strong> для
            iPhone, iPad, Windows, macOS и Linux. Оба бесплатны для зарегистрированных участников.
          </p>
          <div className="flex flex-wrap gap-3 mt-7">
            <a href="/StcAutoTrade.apk" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1612] text-white text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all no-underline">⬇ Скачать APK (Android)</a>
            <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-[rgba(26,22,18,0.16)] text-[#1a1612]/80 text-sm font-medium rounded-xl hover:border-[rgba(26,22,18,0.3)] transition-all no-underline">🌐 Открыть веб-версию</a>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-5 sm:px-8 pb-24 space-y-16">
          {/* Требования */}
          <section>
            <RuSectionLabel>01 · Требования</RuSectionLabel>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
              Что понадобится
            </h2>
            <div className="grid sm:grid-cols-3 gap-4 max-w-4xl">
              {[
                { icon: "👤", title: "Аккаунт Stockity", desc: "Бот торгует на вашем собственном счёте Stockity. Регистрация бесплатна — верификацию (KYC) пройдите заранее, чтобы выводы не задерживались." },
                { icon: "🤳", title: "Android 8.0+ (для APK)", desc: "Любой современный Android. Разрешите установку из браузера при запросе — APK распространяется нами напрямую." },
                { icon: "🌐", title: "Любой браузер (для веба)", desc: "Chrome, Safari, Firefox или Edge на любой ОС. Без установки, всегда последняя версия." },
              ].map((r) => (
                <div key={r.title} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                  <div className="text-xl mb-2">{r.icon}</div>
                  <h3 className="text-[13px] font-semibold text-[#1a1612] mb-2">{r.title}</h3>
                  <p className="text-[12.5px] text-[#6b6058] leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Установка */}
          <section>
            <RuSectionLabel>02 · Установка</RuSectionLabel>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
              Установка и первый запуск за 5 шагов
            </h2>
            <div className="space-y-3 max-w-2xl">
              {[
                { title: "Скачайте APK (или откройте веб-версию)", desc: "Android: кнопка выше. Остальные устройства: откройте stcautotradepro.id — и переходите к шагу 4." },
                { title: "Разрешите установку", desc: "Android запросит разрешение на установку из браузера — это стандартно для приложений вне Play Store." },
                { title: "Установите и откройте приложение", desc: "Установка занимает секунды." },
                { title: "Войдите со своим аккаунтом Stockity", desc: "Те же email и пароль, что на Stockity. Если регистрировались через Google/Facebook — сначала задайте пароль аккаунта на Stockity." },
                { title: "Начните с демо-счёта", desc: "Выберите режим, задайте размер сделки и лимиты риска, запустите первую сессию на демо. На реальный счёт — только после убедительных результатов." },
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

          {/* APK vs Web */}
          <section>
            <RuSectionLabel>03 · APK или веб</RuSectionLabel>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
              Что выбрать?
            </h2>
            <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl overflow-hidden max-w-3xl">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-[#f6f4ef] border-b border-[rgba(26,22,18,0.07)]">
                    <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Аспект</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">APK Android</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Веб-версия</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Устройства", "Только Android", "Всё, где есть браузер"],
                    ["Установка", "Разовая установка APK", "Не нужна"],
                    ["Обновления", "Встроенное предложение обновиться", "Всегда последняя версия"],
                    ["Функции", "Полные", "Полные"],
                    ["Сессии", "В любом случае на сервере — устройство может быть офлайн", "То же самое"],
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
            <p className="text-[13px] text-[#6b6058] mt-4 max-w-3xl">
              Сомневаетесь? Начните с веб-версии — ноль обязательств, — а APK поставьте, если Android ваше
              основное устройство. Подробности о режимах — на странице{" "}
              <Link href="/ru/how-it-works" className="text-[#047857] underline">как это работает</Link>.
            </p>
          </section>
        </main>

        <RuCta eyebrow="Готовы?" title="Скачайте и проверьте всё сначала на демо" desc="Без оплаты, без карты, без риска — первые сессии всегда должны идти на демо-счёте." />
        <RuFooter />
      </div>
    </>
  );
}
