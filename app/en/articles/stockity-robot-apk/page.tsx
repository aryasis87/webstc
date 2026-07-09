/**
 * app/en/articles/stockity-robot-apk/page.tsx
 * EN twin of /artikel/robot-stockity-android
 * Primary: stockity robot apk, stockity bot android
 */

import { buildEnMetadata, buildEnSchemas, type EnArticleSeoDef } from "../_lib/enArticleSeo";
import { EnArticleShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, Steps } from "../_components/EnArticleShell";

const seo: EnArticleSeoDef = {
  slug: "stockity-robot-apk",
  idSlug: "robot-stockity-android",
  title: "Stockity Robot APK for Android: Download & Install Guide (2026)",
  description:
    "STC AutoTrade — the Stockity trading robot for Android: what the APK does, safe download and installation steps, why the bot keeps trading with your phone off, and the web version for iPhone/PC users.",
  keywords: [
    "stockity robot apk",
    "stockity bot android",
    "stockity auto trading app",
    "download stockity robot",
    "binary options bot android",
    "stc autotrade apk",
  ],
  breadcrumbName: "Robot APK for Android",
  datePublished: "2026-07-09",
  faq: [
    { q: "Where do I download the Stockity robot APK?", a: "Only from the official site — stcautotrade.id/download. APKs from Telegram groups, file-sharing sites, or 'admins' in chats may be modified and can steal your account. The official APK is free for registered members." },
    { q: "Why isn't it on the Play Store?", a: "Google Play restricts binary-options-related apps regardless of legitimacy, so distribution is via direct APK — standard practice for this category. That makes downloading from the official source doubly important." },
    { q: "What Android version do I need?", a: "Android 8.0 (Oreo) or newer. On older devices — or on iPhone, iPad, and PC — use the web version at stcautotradepro.id instead: same account, same 6 strategy modes, nothing to install." },
    { q: "Does the bot stop when I close the app or turn off my phone?", a: "No. Strategies run on the server, not on your device — the app is a control panel. Once a mode is running, it keeps trading 24/7 with the app closed, the phone off, or your connection down, until it hits your stop loss/profit or you stop it." },
    { q: "Is the APK safe for my Stockity account?", a: "The official APK never stores your password — authentication uses an encrypted token on your device. Configure your own stop loss and stop profit before running any mode on a real account, and test on demo first." },
  ],
};

export const metadata = buildEnMetadata(seo);
const schemas = buildEnSchemas(seo);

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <EnArticleShell
        badge="Guide"
        date="July 9, 2026"
        readMins={6}
        breadcrumbName={seo.breadcrumbName}
        idHref="/artikel/robot-stockity-android"
        title={<>Stockity Robot APK:<br className="hidden sm:block" /> Download &amp; Install It Right</>}
        lede={<>The Android APK is the most popular way to run STC AutoTrade — but <strong className="font-semibold text-[#1a1612]">where you download it from decides whether your account stays yours</strong>. Official source, correct install, safe first run: all below.</>}
        stats={[
          { v: "Free", l: "For Registered Members" },
          { v: "8.0+", l: "Android Version Needed" },
          { v: "24/7", l: "Runs Server-Side" },
          { v: "6", l: "Strategy Modes" },
        ]}
        related={[
          { href: "/en/articles/how-to-set-up-stockity-robot", title: "Robot Setup Guide", desc: "Every setting explained after install" },
          { href: "/en/articles/how-to-register-stockity", title: "Register on Stockity", desc: "Create the account the bot connects to" },
          { href: "/en/articles/stockity-demo-account", title: "Demo Account", desc: "Test all 6 modes before real money" },
        ]}
        ctaEyebrow="No Android?"
        ctaTitle="The Web Version Runs Everywhere"
        ctaDesc="iPhone, iPad, PC, Mac — open stcautotradepro.id in any browser. Same account, same features, nothing to install."
      >
        <section>
          <SectionLabel>01 · What It Is</SectionLabel>
          <H2>What the APK Actually Does</H2>
          <div className="space-y-4">
            <P>
              STC AutoTrade for Android is the control panel for an automated trading engine that
              lives <strong className="text-[#1a1612]">on a server, not on your phone</strong>. You
              pick one of 6 strategy modes (AI Signal, Copy Trading, Indicator, Candlestick, Fastrade,
              Schedule), set your limits — order size, martingale steps, daily stop loss and stop
              profit — and the server executes. Close the app, kill the battery, lose signal: the
              strategy keeps running exactly as configured.
            </P>
            <InfoBox icon="📱" title="Phone requirements are modest">
              Because execution is server-side, the APK itself is light: any Android 8.0+ device
              works. Your phone's speed affects the dashboard, not the trading.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Install</SectionLabel>
          <H2>Download & Install, Step by Step</H2>
          <Steps
            items={[
              { title: "Download from the official site only", desc: "Get the APK from stcautotrade.id/download — never from chat groups or mirror sites. Modified APKs are the main account-theft vector in this niche." },
              { title: "Allow installs from your browser", desc: "Android will ask to allow installs from unknown sources for your browser (Settings → Security/Privacy). This is standard for any APK outside the Play Store — revoke it afterwards if you prefer." },
              { title: "Open the APK and install", desc: "Tap the downloaded file and follow the prompts. If Play Protect asks, review and continue — the warning appears for all non-Store APKs." },
              { title: "Log in or register", desc: "Existing Stockity account: log in. New user: the app includes registration — create the account and you get a demo balance to start with." },
              { title: "Start on demo, configure limits", desc: "Pick a mode, set order size and daily stop loss/profit, and run it on the demo account first. Move to real funds only after the settings prove themselves." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>03 · Alternatives</SectionLabel>
          <H2>iPhone, PC, or No Install at All</H2>
          <div className="space-y-4">
            <DataTable
              head={["Device", "How to Run STC AutoTrade"]}
              rows={[
                ["Android 8.0+", "APK from stcautotrade.id/download (this guide)"],
                ["iPhone / iPad", "Web version at stcautotradepro.id — Safari or Chrome, no install"],
                ["PC / Mac / Linux", "Web version in any browser — identical features"],
                ["Old Android (< 8.0)", "Web version in the browser works fine"],
              ]}
            />
            <WarningBox>
              There is no "premium APK", no paid unlocked version, and no reseller. STC AutoTrade is
              free for registered members — anyone selling access or asking for your password to
              "install it for you" is running a scam.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>04 · FAQ</SectionLabel>
          <H2>Frequently Asked Questions</H2>
          <FaqList items={seo.faq} />
        </section>
      </EnArticleShell>
    </>
  );
}
