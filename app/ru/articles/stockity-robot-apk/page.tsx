/**
 * app/ru/articles/stockity-robot-apk/page.tsx
 * RU-близнец /artikel/robot-stockity-android (слаг RU = слагу EN)
 */

import { buildRuMetadata, buildRuSchemas, type RuArticleSeoDef } from "../_lib/ruArticleSeo";
import { RuArticleShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, Steps } from "../_components/RuArticleShell";

const seo: RuArticleSeoDef = {
  slug: "stockity-robot-apk",
  idSlug: "robot-stockity-android",
  title: "Робот Stockity для Android (APK): безопасная установка (2026)",
  description:
    "STC AutoTrade — торговый робот Stockity для Android: что делает APK, как безопасно скачать и установить, почему бот торгует даже с выключенным телефоном, и веб-версия для iPhone/ПК.",
  keywords: [
    "stockity робот apk",
    "stockity бот android",
    "скачать робот stockity",
    "робот бинарных опционов android",
    "stc autotrade apk",
    "автоторговля stockity",
  ],
  breadcrumbName: "Робот APK для Android",
  datePublished: "2026-07-09",
  faq: [
    { q: "Где скачать APK робота Stockity?", a: "Только с официального сайта — stcautotrade.id/download. APK из Telegram-групп, файлообменников или от «админов» в чатах могут быть модифицированы и украсть ваш аккаунт. Официальный APK бесплатен для зарегистрированных участников." },
    { q: "Почему его нет в Play Store?", a: "Google Play ограничивает приложения, связанные с бинарными опционами, независимо от их легитимности, поэтому распространение идёт напрямую через APK — стандартная практика для этой категории. Тем важнее качать только из официального источника." },
    { q: "Какая версия Android нужна?", a: "Android 8.0 (Oreo) и новее. На старых устройствах — а также на iPhone, iPad и ПК — используйте веб-версию на stcautotradepro.id: тот же аккаунт, те же 6 режимов, ничего устанавливать не нужно." },
    { q: "Бот остановится, если закрыть приложение или выключить телефон?", a: "Нет. Стратегии исполняются на сервере, а не на устройстве — приложение лишь пульт управления. Запущенный режим торгует 24/7 при закрытом приложении, выключенном телефоне и пропавшем интернете, пока не сработает ваш стоп-лосс/стоп-профит или вы его не остановите." },
    { q: "Безопасен ли APK для аккаунта Stockity?", a: "Официальный APK никогда не хранит ваш пароль — аутентификация через зашифрованный токен на устройстве. Перед запуском любого режима на реальном счёте настройте стоп-лосс и стоп-профит и сначала проверьте всё на демо." },
  ],
};

export const metadata = buildRuMetadata(seo);
const schemas = buildRuSchemas(seo);

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <RuArticleShell
        badge="Гайд"
        date="9 июля 2026"
        readMins={6}
        breadcrumbName={seo.breadcrumbName}
        idHref="/artikel/robot-stockity-android"
        enHref="/en/articles/stockity-robot-apk"
        title={<>Робот Stockity (APK):<br className="hidden sm:block" /> скачайте и установите правильно</>}
        lede={<>APK для Android — самый популярный способ запустить STC AutoTrade, но <strong className="font-semibold text-[#1a1612]">источник загрузки решает, останется ли аккаунт вашим</strong>. Официальный источник, правильная установка, безопасный первый запуск — всё ниже.</>}
        stats={[
          { v: "Бесплатно", l: "Для зарегистрированных" },
          { v: "8.0+", l: "Требуемый Android" },
          { v: "24/7", l: "Работа на сервере" },
          { v: "6", l: "Режимов стратегий" },
        ]}
        related={[
          { href: "/ru/articles/how-to-set-up-stockity-robot", title: "Настройка робота", desc: "Каждый параметр после установки" },
          { href: "/ru/articles/how-to-register-stockity", title: "Регистрация на Stockity", desc: "Создайте счёт, к которому подключится бот" },
          { href: "/ru/articles/stockity-demo-account", title: "Демо-счёт", desc: "Проверьте все 6 режимов до реальных денег" },
        ]}
        ctaEyebrow="Нет Android?"
        ctaTitle="Веб-версия работает везде"
        ctaDesc="iPhone, iPad, ПК, Mac — откройте stcautotradepro.id в любом браузере. Тот же аккаунт, те же функции, без установки."
      >
        <section>
          <SectionLabel>01 · Что это</SectionLabel>
          <H2>Что на самом деле делает APK</H2>
          <div className="space-y-4">
            <P>
              STC AutoTrade для Android — пульт управления торговым движком, который живёт{" "}
              <strong className="text-[#1a1612]">на сервере, а не в телефоне</strong>. Вы выбираете
              один из 6 режимов (AI Signal, копитрейдинг, индикаторы, свечи, Fastrade, расписание),
              задаёте лимиты — размер сделки, шаги мартингейла, дневные стоп-лосс и стоп-профит — и
              сервер исполняет. Закройте приложение, посадите батарею, потеряйте сигнал: стратегия
              продолжит работать ровно как настроена.
            </P>
            <InfoBox icon="📱" title="Требования к телефону скромные">
              Исполнение на сервере, поэтому сам APK лёгкий: подойдёт любой Android 8.0+. Скорость
              телефона влияет на панель управления, а не на торговлю.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Установка</SectionLabel>
          <H2>Скачивание и установка по шагам</H2>
          <Steps
            items={[
              { title: "Качайте только с официального сайта", desc: "APK берите на stcautotrade.id/download — никогда из чатов и зеркал. Модифицированные APK — главный способ кражи аккаунтов в этой нише." },
              { title: "Разрешите установку из браузера", desc: "Android попросит разрешить установку из неизвестных источников для браузера (Настройки → Безопасность). Это стандартно для любого APK вне Play Store — потом разрешение можно отозвать." },
              { title: "Откройте APK и установите", desc: "Нажмите на скачанный файл и следуйте подсказкам. Если спросит Play Protect — проверьте и продолжите: предупреждение показывается всем APK вне маркета." },
              { title: "Войдите или зарегистрируйтесь", desc: "Есть счёт Stockity — входите. Новичок — в приложении есть регистрация: создайте счёт и получите демо-баланс для старта." },
              { title: "Начните с демо и настройте лимиты", desc: "Выберите режим, задайте размер сделки и дневные стоп-лосс/стоп-профит, прогоните на демо. На реальные деньги — только после того, как настройки себя показали." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>03 · Альтернативы</SectionLabel>
          <H2>iPhone, ПК или вообще без установки</H2>
          <div className="space-y-4">
            <DataTable
              head={["Устройство", "Как запустить STC AutoTrade"]}
              rows={[
                ["Android 8.0+", "APK со stcautotrade.id/download (этот гайд)"],
                ["iPhone / iPad", "Веб-версия stcautotradepro.id — Safari или Chrome, без установки"],
                ["ПК / Mac / Linux", "Веб-версия в любом браузере — функции идентичны"],
                ["Старый Android (< 8.0)", "Веб-версия в браузере работает без проблем"],
              ]}
            />
            <WarningBox>
              Не существует «премиум-APK», платной разблокированной версии и реселлеров. STC AutoTrade
              бесплатен для зарегистрированных участников — любой, кто продаёт доступ или просит пароль,
              чтобы «установить за вас», — мошенник.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>04 · FAQ</SectionLabel>
          <H2>Частые вопросы</H2>
          <FaqList items={seo.faq} />
        </section>
      </RuArticleShell>
    </>
  );
}
