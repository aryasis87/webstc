/**
 * app/en/articles/how-to-set-up-stockity-robot/page.tsx
 * EN twin of /artikel/cara-setting-robot-stockity
 * Primary: stockity robot settings, set up stockity bot
 */

import { buildEnMetadata, buildEnSchemas, type EnArticleSeoDef } from "../_lib/enArticleSeo";
import { EnArticleShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, Steps } from "../_components/EnArticleShell";
import Link from "next/link";

const seo: EnArticleSeoDef = {
  slug: "how-to-set-up-stockity-robot",
  idSlug: "cara-setting-robot-stockity",
  title: "How to Set Up Your Stockity Robot: Every Setting Explained (2026)",
  description:
    "Complete STC AutoTrade configuration guide: choosing a strategy mode, order size, managed martingale (steps & multiplier), daily stop loss and take profit — with recommended beginner values.",
  keywords: [
    "stockity robot settings",
    "set up stockity bot",
    "stc autotrade configuration",
    "martingale settings bot",
    "trading bot stop loss setup",
  ],
  breadcrumbName: "Robot Setup Guide",
  datePublished: "2026-07-04",
  faq: [
    { q: "What settings should a beginner start with?", a: "Demo account, AI Signal or Copy Trading mode, the minimum order size, martingale off (or max 2–3 steps with a 2× multiplier), a daily stop loss of about 10% of balance, and a daily take profit of 5–10%. Adjust only after a week of data." },
    { q: "How many martingale steps are safe?", a: "For most people: no more than 3. Each step multiplies exposure — with a 2× multiplier, a full 3-step cycle costs 7× your base order. Always check that a full failed cycle still fits inside your daily stop loss." },
    { q: "Should stop loss be per order or per day?", a: "The bot's stop loss is a daily total — that's the correct level to control. Per-order risk is controlled by your order size (keep it at 1–5% of balance)." },
    { q: "Can I change settings while a session is running?", a: "Stop the session first, adjust, then restart. Changing risk parameters mid-session — especially while losing — is exactly the emotional mistake automation is meant to prevent." },
    { q: "Do settings carry over between demo and real?", a: "Configuration stays with the app, but treat the switch as a fresh start: begin real trading at the smallest order size even if demo results were strong, and scale up gradually." },
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
        readMins={8}
        breadcrumbName={seo.breadcrumbName}
        idHref="/artikel/cara-setting-robot-stockity"
        title={<>Setting Up Your Stockity Robot:<br className="hidden sm:block" /> Every Option Explained</>}
        lede={<>The difference between a bot that compounds and a bot that burns out is <strong className="font-semibold text-[#1a1612]">rarely the strategy — it&apos;s the configuration</strong>. This guide walks through every setting in STC AutoTrade with recommended starting values.</>}
        stats={[
          { v: "5", l: "Core Settings" },
          { v: "1–5%", l: "Order Size Rule" },
          { v: "≤3", l: "Martingale Steps (most)" },
          { v: "Demo", l: "Where to Tune First" },
        ]}
        related={[
          { href: "/en/articles/stockity-trading-robot", title: "Stockity Trading Robot", desc: "The complete guide to auto trading" },
          { href: "/en/articles/ai-trading-stockity", title: "AI Trading on Stockity", desc: "How the AI Signal mode decides" },
          { href: "/en/articles/stockity-account-verification", title: "Account Verification", desc: "Finish KYC before your first withdrawal" },
        ]}
        ctaEyebrow="Configured?"
        ctaTitle="Run the Settings on Demo and Let the Data Judge"
        ctaDesc="7–14 days of demo statistics beat any opinion — including ours."
      >
        <section>
          <SectionLabel>01 · Mode</SectionLabel>
          <H2>Step 1 — Choose Your Strategy Mode</H2>
          <div className="space-y-4">
            <P>
              The mode determines where signals come from; everything else determines how much each signal
              can cost you. Beginner-friendly picks: <strong className="text-[#1a1612]">AI Signal</strong>{" "}
              (adaptive, zero analysis parameters) or <strong className="text-[#1a1612]">Copy Trading</strong>{" "}
              (mirror experienced traders). Indicator and Candlestick modes suit traders who already trust a
              specific technical approach.
            </P>
            <InfoBox icon="🎛️" title="One mode at a time">
              Test a single mode with fixed parameters for at least a week. Switching daily makes your
              statistics unreadable — you'll never know what actually worked.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Order Size</SectionLabel>
          <H2>Step 2 — Order Size: The 1–5% Rule</H2>
          <div className="space-y-4">
            <P>
              Set the order amount to <strong className="text-[#1a1612]">1–5% of your balance</strong> —
              beginners at the low end. At 2% per order, it takes roughly fifty consecutive losses to
              deplete an account; at 25%, just four. Survivability is a configuration choice.
            </P>
            <DataTable
              head={["Balance", "2% order (conservative)", "5% order (moderate)"]}
              rows={[
                ["Rp 700,000", "Rp 14,000 (platform minimum)", "Rp 35,000"],
                ["Rp 2,000,000", "Rp 40,000", "Rp 100,000"],
                ["Rp 5,000,000", "Rp 100,000", "Rp 250,000"],
              ]}
            />
          </div>
        </section>

        <section>
          <SectionLabel>03 · Martingale</SectionLabel>
          <H2>Step 3 — Managed Martingale (Optional, Handle with Care)</H2>
          <div className="space-y-4">
            <P>
              Martingale multiplies the next order after a loss to recover it. STC AutoTrade keeps it{" "}
              <strong className="text-[#1a1612]">managed</strong>: you cap the maximum steps and the
              multiplier, and the bot can never exceed them. The math you must respect: with a 2×
              multiplier, a full cycle costs 1+2+4 = 7× base order at 3 steps — and 31× at 5 steps.
            </P>
            <DataTable
              head={["Steps (2× multiplier)", "Full-cycle cost", "Verdict for most users"]}
              rows={[
                ["2", "3× base order", "Conservative"],
                ["3", "7× base order", "Reasonable ceiling"],
                ["4", "15× base order", "Aggressive"],
                ["5+", "31×+ base order", "One bad cycle threatens the account"],
              ]}
            />
            <WarningBox>
              Rule of thumb: a fully failed martingale cycle must still fit inside your daily stop loss.
              If it doesn't, reduce the steps or the base order — not the stop loss.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>04 · Daily Limits</SectionLabel>
          <H2>Step 4 — Daily Stop Loss &amp; Take Profit</H2>
          <Steps
            items={[
              { title: "Set the daily stop loss first", desc: "A common starting point is ~10% of balance. When the day's losses reach it, the session ends — no exceptions, no revenge trading. This is the setting that keeps accounts alive." },
              { title: "Set a daily take profit", desc: "5–10% of balance is a realistic daily target. Locking in green days is how weekly results stay positive even with mediocre win rates." },
              { title: "Never negotiate mid-session", desc: "Limits are decided before the session, with a cool head. Raising a stop loss during a red streak is emotion wearing a strategy costume." },
              { title: "Review weekly, not hourly", desc: "Judge settings on at least a week of data. Single sessions are noise; weeks are signal." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>05 · Reference</SectionLabel>
          <H2>Recommended Starting Configuration</H2>
          <DataTable
            head={["Setting", "Beginner value", "Note"]}
            rows={[
              ["Account", "Demo", "Switch to real only after 7–14 convincing days"],
              ["Mode", "AI Signal or Copy Trading", "No analysis parameters to tune"],
              ["Order size", "1–2% of balance", "Minimum order if balance is small"],
              ["Martingale", "Off, or 2–3 steps × 2.0", "Full cycle must fit inside stop loss"],
              ["Daily stop loss", "~10% of balance", "Non-negotiable once set"],
              ["Daily take profit", "5–10% of balance", "Lock green days"],
            ]}
          />
        </section>

        <section>
          <SectionLabel>06 · FAQ</SectionLabel>
          <H2>Frequently Asked Questions</H2>
          <FaqList items={seo.faq} />
        </section>
      </EnArticleShell>
    </>
  );
}
