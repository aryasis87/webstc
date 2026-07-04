/**
 * app/en/articles/stockity-trading-robot/page.tsx
 * EN twin of /artikel/robot-trading-stockity (pillar)
 * Primary: stockity trading robot, stockity bot
 */

import { buildEnMetadata, buildEnSchemas, type EnArticleSeoDef } from "../_lib/enArticleSeo";
import { EnArticleShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, Steps } from "../_components/EnArticleShell";
import Link from "next/link";

const seo: EnArticleSeoDef = {
  slug: "stockity-trading-robot",
  idSlug: "robot-trading-stockity",
  title: "Stockity Trading Robot: The Complete Guide to Auto Trading (2026)",
  description:
    "Everything about automating your Stockity account: how a trading robot works, the 6 strategy modes of STC AutoTrade, risk controls, supported devices, and how to start safely on demo.",
  keywords: [
    "stockity trading robot",
    "stockity bot",
    "stockity auto trading",
    "stockity robot free",
    "automated trading stockity",
    "binary options robot",
  ],
  breadcrumbName: "Stockity Trading Robot",
  datePublished: "2026-07-04",
  faq: [
    { q: "What exactly does a Stockity robot do?", a: "It connects to your Stockity account and places orders automatically based on a strategy you choose — signals from AI, copied traders, technical indicators, candlestick patterns, or your own schedule — while enforcing the risk limits you set." },
    { q: "Is STC AutoTrade free?", a: "Yes, it's free for registered members: no purchase price, no subscription, no profit share. You trade with your own funds on your own Stockity account." },
    { q: "Does the robot work when my phone is off?", a: "Yes. Sessions run on the server, not your device. Once started, the bot keeps trading 24/7 regardless of your phone's state." },
    { q: "Can the robot lose money?", a: "Yes — any honest answer is yes. Markets carry risk and win rates vary with conditions. The robot's job is disciplined execution and enforced limits (daily stop loss / take profit), not guaranteed profit. Always start on demo." },
    { q: "Do I need trading experience to use it?", a: "No coding and no chart-reading are required to start — pick a mode, set your order size and limits, and run it on demo. That said, learning basics like money management makes you a much better bot operator." },
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
        date="July 4, 2026"
        readMins={9}
        breadcrumbName={seo.breadcrumbName}
        idHref="/artikel/robot-trading-stockity"
        title={<>Stockity Trading Robot:<br className="hidden sm:block" /> The Complete Guide</>}
        lede={<>A trading robot turns your Stockity account into a system that <strong className="font-semibold text-[#1a1612]">executes without emotion, around the clock, inside limits you define</strong>. This guide covers how it works, what it can and cannot do, and how to start safely.</>}
        stats={[
          { v: "6", l: "Strategy Modes" },
          { v: "24/7", l: "Server-Side Sessions" },
          { v: "Auto", l: "Stop Loss & Take Profit" },
          { v: "Free", l: "For Members" },
        ]}
        related={[
          { href: "/en/articles/how-to-set-up-stockity-robot", title: "How to Set Up the Robot", desc: "Step-by-step configuration of every setting" },
          { href: "/en/articles/ai-trading-stockity", title: "AI Trading on Stockity", desc: "How the AI Signal mode works under the hood" },
          { href: "/en/articles/how-to-withdraw-from-stockity", title: "Withdrawing from Stockity", desc: "Getting your profit to your bank account" },
        ]}
        ctaEyebrow="Start Free"
        ctaTitle="Run Your First Automated Session on the Demo Account"
        ctaDesc="Android APK or web version — pick a mode, set your limits, watch it trade. No risk."
      >
        <section>
          <SectionLabel>01 · Concept</SectionLabel>
          <H2>What a Trading Robot Actually Is</H2>
          <div className="space-y-4">
            <P>
              A Stockity trading robot is software that connects to <strong className="text-[#1a1612]">your own
              Stockity account</strong> and places UP/DOWN orders automatically according to a strategy.
              Your funds never leave your account; the robot is an executor, not a fund manager. Deposits
              and withdrawals stay entirely under your control on the Stockity platform.
            </P>
            <P>
              The value is not magic signals — it&apos;s <strong className="text-[#1a1612]">execution
              quality</strong>: entries at the exact signal moment, identical discipline on the 1st and the
              100th order, and hard risk limits that cannot be broken in the heat of a losing streak.
            </P>
            <InfoBox icon="🖥️" title="Server-side by design">
              STC AutoTrade sessions run on our servers. Start a session from your phone or browser, then
              close the app — the bot keeps working. You come back to review results, not to babysit it.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Modes</SectionLabel>
          <H2>The 6 Strategy Modes</H2>
          <DataTable
            head={["Mode", "How it decides", "Best for"]}
            rows={[
              ["AI Signal", "Machine-learning model scores live price action and fires UP/DOWN signals", "Hands-off trading with adaptive signals"],
              ["Copy Trading (CTC)", "Mirrors entries from experienced traders in real time", "Following proven decision-makers"],
              ["Indicators", "Classic strategies — SMA, EMA, RSI, MACD, Bollinger — with your parameters", "Traders who trust a specific indicator"],
              ["Candlestick Momentum", "Detects reversal/breakout patterns: Hammer, Doji, BB + Parabolic SAR", "Price-action style, automated"],
              ["Fastrade FTT", "High-frequency candle-following logic", "Short, active sessions"],
              ["Schedule", "Executes a list of timed signals you provide", "Signal-group members and planners"],
            ]}
          />
          <div className="mt-4">
            <P>
              Every mode runs identically on the Stockity <strong className="text-[#1a1612]">demo account</strong>{" "}
              with live market data — so you can measure each one before risking anything.
            </P>
          </div>
        </section>

        <section>
          <SectionLabel>03 · Risk Controls</SectionLabel>
          <H2>The Guardrails That Matter More Than Any Signal</H2>
          <div className="space-y-4">
            <DataTable
              head={["Control", "What it does"]}
              rows={[
                ["Daily stop loss", "Hard daily loss limit — hit it and the session ends. The single most important setting."],
                ["Daily take profit", "Reach your target and the bot stops on green instead of giving it back."],
                ["Managed martingale (optional)", "Loss recovery with a hard ceiling: you cap max steps and multiplier; the bot can never exceed them."],
                ["Order size", "Fixed amount per order — pair it with the 1–5% money-management rule."],
              ]}
            />
            <WarningBox>
              No robot eliminates market risk, and anyone promising fixed daily returns is selling a scam,
              not software. The robot enforces your discipline — profitability still depends on strategy
              and market conditions. Trade only with funds you can afford to risk.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>04 · Getting Started</SectionLabel>
          <H2>From Zero to First Demo Session</H2>
          <Steps
            items={[
              { title: "Create a Stockity account", desc: "Registration is free. Complete identity verification (KYC) early — withdrawals require it and it's better done before your first profit, not after." },
              { title: "Get STC AutoTrade", desc: <>Install the <Link href="/en/download" className="text-[#047857] underline">Android APK or open the web version</Link> — iPhone, PC, and Mac all work through the browser.</> },
              { title: "Log in and pick a mode", desc: "Use your Stockity credentials. Beginners usually start with AI Signal or Copy Trading — nothing to configure beyond risk limits." },
              { title: "Set your limits", desc: <>Order size, optional martingale (max 3 steps for most people), daily stop loss and take profit. Full walkthrough: <Link href="/en/articles/how-to-set-up-stockity-robot" className="text-[#047857] underline">robot setup guide</Link>.</> },
              { title: "Run 7–14 days on demo", desc: "Collect your own statistics across different market conditions. Move to the real account with the smallest order size only after the numbers convince you." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>05 · FAQ</SectionLabel>
          <H2>Frequently Asked Questions</H2>
          <FaqList items={seo.faq} />
        </section>
      </EnArticleShell>
    </>
  );
}
