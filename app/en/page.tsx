/**
 * app/en/page.tsx — English landing page (twin of /)
 * Primary: stockity robot, stockity trading bot, stockity auto trading
 */

import type { Metadata } from "next";
import Link from "next/link";
import { EnNav, EnCta, EnFooter, EnSectionLabel } from "./_components/EnChrome";

const BASE_URL = "https://stcautotrade.id";

export const metadata: Metadata = {
  title: "STC AutoTrade — Free Automated Trading Bot for Stockity",
  description:
    "Automate your Stockity trading with STC AutoTrade: 6 strategy modes, AI signals, copy trading, automatic stop loss. Android APK & web version. Free for registered members.",
  keywords: [
    "stockity robot",
    "stockity trading bot",
    "stockity auto trading",
    "stockity bot free",
    "automated trading stockity",
    "stockity signals",
    "binary options bot",
  ],
  alternates: {
    canonical: `${BASE_URL}/en`,
    languages: {
      "id-ID": BASE_URL,
      en: `${BASE_URL}/en`,
      ru: `${BASE_URL}/ru`,
      "x-default": BASE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${BASE_URL}/en`,
    siteName: "STC AutoTrade",
    title: "STC AutoTrade — Free Automated Trading Bot for Stockity",
    description:
      "6 strategy modes, AI signals, copy trading, automatic stop loss. Android APK & web version. Free for members.",
    images: [{ url: `${BASE_URL}/og-image.webp`, width: 1200, height: 630, alt: "STC AutoTrade — Automated Trading Bot for Stockity" }],
  },
  twitter: { card: "summary_large_image" },
};

const faq = [
  { q: "Is STC AutoTrade really free?", a: "Yes — STC AutoTrade is free for registered members. There is no purchase price and no profit-sharing fee. You trade on your own Stockity account with your own funds." },
  { q: "Does the bot keep running if I close the app?", a: "Yes. Sessions run on our servers, not on your phone. Once a session is started, it keeps executing 24/7 even if your phone is off or offline." },
  { q: "Do I need an Android phone?", a: "No. Besides the Android APK, a full web version is available at stcautotradepro.id — it works on iPhone, iPad, Windows, macOS, and Linux through any modern browser." },
  { q: "Does the bot guarantee profit?", a: "No — and no honest tool does. Markets always carry risk. STC AutoTrade improves execution speed, consistency, and risk discipline (automatic stop loss / take profit), but outcomes depend on strategy and market conditions. Always start on the demo account." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function EnHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-[#f6f4ef]">
        <EnNav idHref="/" />

        {/* ── Hero ─────────────────────────────────────────── */}
        <header className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-14">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#047857] mb-4">Automated Trading for Stockity</p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl sm:text-6xl font-normal tracking-tight leading-[1.08] text-[#1a1612] mb-6 max-w-3xl">
            Your Stockity account,<br className="hidden sm:block" /> trading around the clock.
          </h1>
          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
            <strong className="font-semibold text-[#1a1612]">STC AutoTrade</strong> connects to your
            Stockity account and executes trades automatically — with 6 strategy modes, managed
            martingale, and automatic daily stop loss &amp; take profit. Free for registered members.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/en/download" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1612] text-white text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all no-underline">Download Android APK</Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-12 border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden">
            {[
              { v: "6", l: "Strategy Modes" },
              { v: "24/7", l: "Runs on Server" },
              { v: "Auto", l: "Stop Loss & Take Profit" },
              { v: "Free", l: "For Members" },
            ].map((s, i) => (
              <div key={i} className="bg-white py-5 px-4 text-center border-r border-[rgba(26,22,18,0.07)] last:border-0">
                <p className="font-[family-name:var(--font-dm-serif)] text-3xl text-[#1a1612] mb-0.5">{s.v}</p>
                <p className="text-[11px] text-[#1a1612]/65">{s.l}</p>
              </div>
            ))}
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-5 sm:px-8 pb-24 space-y-16">
          {/* ── Modes ───────────────────────────────────────── */}
          <section>
            <EnSectionLabel>01 · Strategy Modes</EnSectionLabel>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
              Six Ways to Trade — Pick Yours
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "🤖", title: "AI Signal", desc: "Machine-learning signals analyzed from real-time market data, executed automatically on your account." },
                { icon: "📋", title: "Copy Trading (CTC)", desc: "Mirror signals from experienced traders — every entry copied to your account in real time." },
                { icon: "📊", title: "Technical Indicators", desc: "Classic strategies on autopilot: SMA, EMA, RSI, MACD, Bollinger Bands with your parameters." },
                { icon: "🕯️", title: "Candlestick Momentum", desc: "Detects reversal and breakout patterns — Hammer, Doji, Bollinger + Parabolic SAR breakouts." },
                { icon: "⚡", title: "Fastrade FTT", desc: "High-frequency candle-following execution for traders who like fast sessions." },
                { icon: "🗓️", title: "Schedule Mode", desc: "Feed a list of timed signals and the bot executes each one precisely on schedule." },
              ].map((m) => (
                <div key={m.title} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                  <div className="text-xl mb-2">{m.icon}</div>
                  <h3 className="text-[14px] font-semibold text-[#1a1612] mb-1.5">{m.title}</h3>
                  <p className="text-[12.5px] text-[#6b6058] leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Risk management ─────────────────────────────── */}
          <section>
            <EnSectionLabel>02 · Risk First</EnSectionLabel>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
              Built Around Risk Management, Not Promises
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
              {[
                { title: "Automatic daily stop loss", desc: "Set a maximum daily loss — when it's hit, the bot stops. No revenge trading, ever." },
                { title: "Automatic take profit", desc: "Lock in your daily target: the bot stops on green instead of giving profits back." },
                { title: "Managed martingale", desc: "Optional loss-recovery with hard limits you control: max steps and multiplier." },
                { title: "Full demo mode", desc: "Every mode runs on the Stockity demo account with real market data. Test before you trust." },
              ].map((f) => (
                <div key={f.title} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                  <h3 className="text-[13px] font-semibold text-[#1a1612] mb-2">✅ {f.title}</h3>
                  <p className="text-[12.5px] text-[#6b6058] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-[#6b6058] mt-5 max-w-3xl">
              We don&apos;t promise fixed daily returns — nobody honestly can. What the bot delivers is
              disciplined execution of <em>your</em> limits, 24 hours a day. Read more in{" "}
              <Link href="/en/how-it-works" className="text-[#047857] underline">how it works</Link>.
            </p>
          </section>

          {/* ── Platforms ───────────────────────────────────── */}
          <section>
            <EnSectionLabel>03 · Any Device</EnSectionLabel>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
              Android APK or Web — Sessions Live on the Server
            </h2>
            <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl overflow-hidden max-w-3xl">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-[#f6f4ef] border-b border-[rgba(26,22,18,0.07)]">
                    <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Your device</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">How to use</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Android phone / tablet", "Install the APK — full native experience"],
                    ["iPhone / iPad", "Web version at stcautotradepro.id — no install needed"],
                    ["Windows / macOS / Linux", "Web version in any modern browser"],
                    ["Phone off / no signal", "Sessions keep running — the bot lives on our server, not your device"],
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
            <EnSectionLabel>04 · FAQ</EnSectionLabel>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
              Frequently Asked Questions
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
              More questions answered on the <Link href="/en/faq" className="text-[#047857] underline">full FAQ page</Link>.
            </p>
          </section>
        </main>

        <EnCta />
        <EnFooter />
      </div>
    </>
  );
}
