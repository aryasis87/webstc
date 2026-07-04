/**
 * app/en/how-it-works/page.tsx — English twin of /cara-kerja
 * Primary: how stockity bot works, stockity bot strategy modes
 */

import type { Metadata } from "next";
import Link from "next/link";
import { EnNav, EnCta, EnFooter, EnSectionLabel } from "../_components/EnChrome";

const BASE_URL = "https://stcautotrade.id";

export const metadata: Metadata = {
  title: "How STC AutoTrade Works — 6 Strategy Modes & Risk Controls",
  description:
    "Under the hood of the Stockity trading bot: how server-side sessions work, what each of the 6 strategy modes does, and how automatic stop loss, take profit, and managed martingale protect your balance.",
  keywords: [
    "how stockity bot works",
    "stockity bot strategy",
    "stc autotrade how it works",
    "automated trading explained",
    "trading bot risk management",
  ],
  alternates: {
    canonical: `${BASE_URL}/en/how-it-works`,
    languages: {
      "id-ID": `${BASE_URL}/cara-kerja`,
      en: `${BASE_URL}/en/how-it-works`,
      ru: `${BASE_URL}/ru/how-it-works`,
      "x-default": `${BASE_URL}/cara-kerja`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${BASE_URL}/en/how-it-works`,
    siteName: "STC AutoTrade",
    title: "How STC AutoTrade Works — 6 Strategy Modes & Risk Controls",
    description: "Server-side sessions, 6 strategy modes, and the risk controls that guard your balance.",
    images: [{ url: `${BASE_URL}/og-image.webp`, width: 1200, height: 630, alt: "How STC AutoTrade Works" }],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to run an automated trading session with STC AutoTrade",
  description: "Connect your Stockity account, choose a strategy mode, set risk limits, and let the server-side bot execute.",
  step: [
    { "@type": "HowToStep", name: "Log in", text: "Sign in to STC AutoTrade with your Stockity credentials." },
    { "@type": "HowToStep", name: "Choose a mode", text: "Pick one of 6 strategy modes: AI Signal, Copy Trading, Indicators, Candlestick Momentum, Fastrade, or Schedule." },
    { "@type": "HowToStep", name: "Set risk limits", text: "Configure order size, optional martingale limits, daily stop loss and take profit." },
    { "@type": "HowToStep", name: "Start the session", text: "The bot runs on the server 24/7 — your device can go offline." },
    { "@type": "HowToStep", name: "Review results", text: "Check the complete trade history and adjust settings weekly." },
  ],
};

export default function EnHowItWorksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <div className="min-h-screen bg-[#f6f4ef]">
        <EnNav idHref="/cara-kerja" />

        <header className="max-w-5xl mx-auto px-5 sm:px-8 pt-14 pb-10">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#047857] mb-4">How It Works</p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5 max-w-3xl">
            What Happens After You Press Start
          </h1>
          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            No black box: this page explains where the bot actually runs, how each strategy mode decides,
            and which guardrails stand between the market and your balance.
          </p>
        </header>

        <main className="max-w-5xl mx-auto px-5 sm:px-8 pb-24 space-y-16">
          {/* Architecture */}
          <section>
            <EnSectionLabel>01 · Architecture</EnSectionLabel>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
              The Bot Lives on a Server — Not on Your Phone
            </h2>
            <div className="space-y-3 max-w-2xl">
              {[
                { title: "You configure, the server executes", desc: "The app (APK or web) is a remote control. When you start a session, it hands your configuration to our server — from that moment the server does the trading." },
                { title: "Your device can disappear", desc: "Close the app, lose signal, run out of battery — the session continues. You reopen the app later just to watch results or stop the bot." },
                { title: "Orders go to YOUR Stockity account", desc: "The bot places orders through your own account. Funds never move to us; deposits and withdrawals happen on Stockity as usual, under your control." },
                { title: "Every order is logged", desc: "Wins and losses alike are recorded in the trade history — your evaluation is built on complete data, not memory." },
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

          {/* Modes detail */}
          <section>
            <EnSectionLabel>02 · Strategy Modes</EnSectionLabel>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
              How Each of the 6 Modes Decides
            </h2>
            <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl overflow-hidden">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-[#f6f4ef] border-b border-[rgba(26,22,18,0.07)]">
                    <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Mode</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Signal source</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["AI Signal", "Machine-learning model scoring real-time price action", "Hands-off trading with adaptive signals"],
                    ["Copy Trading (CTC)", "Entries mirrored from experienced traders", "Following proven decision-makers"],
                    ["Indicators", "SMA / EMA / RSI / MACD / Bollinger with your parameters", "Traders with a favorite classic strategy"],
                    ["Candlestick Momentum", "Reversal & breakout patterns (Hammer, Doji, BB+PSAR)", "Price-action believers"],
                    ["Fastrade FTT", "Candle-following logic at high frequency", "Short, active sessions"],
                    ["Schedule", "Your own list of timed signals", "Signal-group members & planners"],
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

          {/* Risk controls */}
          <section>
            <EnSectionLabel>03 · Guardrails</EnSectionLabel>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
              The Guardrails Between the Market and Your Balance
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
              {[
                { icon: "🛑", title: "Daily stop loss", desc: "Hard daily loss limit. When hit, the session ends — the single most important setting in the entire app." },
                { icon: "🎯", title: "Daily take profit", desc: "The mirror image: reach your daily target and the bot locks it in by stopping." },
                { icon: "📶", title: "Managed martingale (optional)", desc: "Loss recovery with a hard ceiling: you set max steps and multiplier. The bot can never 'improvise' beyond them." },
                { icon: "🧪", title: "Demo everything", desc: "All modes run identically on the Stockity demo account with live market data. Statistical confidence first, real money second." },
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
                Honest disclosure: no bot eliminates market risk, and win rates vary with market
                conditions. STC AutoTrade improves execution and discipline — it does not promise profit.
                Trade only with funds you can afford to risk.
              </p>
            </div>
          </section>
        </main>

        <EnCta eyebrow="See It Yourself" title="Run Your First Session on the Demo Account" desc="Pick a mode, set your limits, and watch the server trade — risk-free." />
        <EnFooter />
      </div>
    </>
  );
}
