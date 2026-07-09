/**
 * app/en/articles/stockity-martingale-strategy/page.tsx
 * EN twin of /artikel/strategi-martingale-stockity
 * Primary: martingale strategy binary options, stockity martingale
 */

import { buildEnMetadata, buildEnSchemas, type EnArticleSeoDef } from "../_lib/enArticleSeo";
import { EnArticleShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, Steps } from "../_components/EnArticleShell";
import Link from "next/link";

const seo: EnArticleSeoDef = {
  slug: "stockity-martingale-strategy",
  idSlug: "strategi-martingale-stockity",
  title: "Martingale Strategy on Stockity: Safe Settings & the Real Math (2026)",
  description:
    "How martingale actually works on Stockity: the step math, why 2–2.5× multiplier with max 3 steps is the conservative baseline, how much balance a cycle really needs, and the managed way to automate it.",
  keywords: [
    "stockity martingale",
    "martingale strategy binary options",
    "martingale calculator binary options",
    "safe martingale settings",
    "martingale multiplier",
    "managed martingale bot",
  ],
  breadcrumbName: "Martingale Strategy",
  datePublished: "2026-07-09",
  faq: [
    { q: "What is martingale in binary options?", a: "A recovery system: after a losing trade, the next order is increased (multiplied) so that one win covers all previous losses in the sequence plus a small profit. After a win, you reset to the base amount." },
    { q: "What are safe martingale settings?", a: "'Safe' is relative — but a 2–2.5× multiplier with a maximum of 3 steps is the conservative baseline: each win still covers prior losses, and the total cycle risk stays proportionate to a normal balance." },
    { q: "Why is the multiplier at least 2×?", a: "With an 80% payout, a win pays only 0.8× the stake. If your multiplier is too low, a win late in the sequence doesn't cover the accumulated losses — you 'win' and still lose money. Above 2× keeps every step net-positive." },
    { q: "How much balance does a martingale cycle need?", a: "Sum every step of the cycle: base 14,000 × 2.5 multiplier × 3 steps ≈ IDR 120,000 at risk per full cycle. Keep at least double that as balance so one failed cycle doesn't end the account. Our free martingale calculator does this math for any settings." },
    { q: "Can STC AutoTrade run martingale automatically?", a: "Yes — with managed limits: you set MAX STEP and MULTIPLIER yourself, and the bot executes the sequence with discipline, stopping at your daily stop loss. The dangerous part of martingale is human improvisation; the bot removes exactly that." },
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
        badge="Strategy"
        date="July 9, 2026"
        readMins={8}
        breadcrumbName={seo.breadcrumbName}
        idHref="/artikel/strategi-martingale-stockity"
        title={<>Martingale on Stockity:<br className="hidden sm:block" /> The Math Before the Money</>}
        lede={<>Martingale doesn't remove risk — it <strong className="font-semibold text-[#1a1612]">trades many small losses for a few large ones</strong>. Used with hard limits it's a legitimate tool; used on hope, it's how accounts die. Here's the difference, in numbers.</>}
        stats={[
          { v: "2–2.5×", l: "Conservative Multiplier" },
          { v: "3", l: "Max Steps (Baseline)" },
          { v: "±120k", l: "IDR at Risk per Cycle" },
          { v: "2×", l: "Balance Buffer vs Cycle" },
        ]}
        related={[
          { href: "/en/articles/stockity-minimum-deposit", title: "Stockity Minimum Deposit", desc: "Why balance size decides your settings" },
          { href: "/en/articles/how-to-set-up-stockity-robot", title: "Robot Setup Guide", desc: "Configure MAX STEP & MULTIPLIER properly" },
          { href: "/en/articles/stockity-demo-account", title: "Stockity Demo Account", desc: "Test your cycle math risk-free first" },
        ]}
        ctaEyebrow="Managed, Not Manual"
        ctaTitle="Run Managed Martingale with STC AutoTrade"
        ctaDesc="You set MAX STEP and MULTIPLIER — the bot executes with discipline and stops at your daily loss limit. Free for members."
      >
        <section>
          <SectionLabel>01 · Mechanics</SectionLabel>
          <H2>How a Martingale Sequence Actually Works</H2>
          <div className="space-y-4">
            <P>
              The idea is simple: after each loss, multiply the next stake so a single win recovers the
              whole sequence. With base IDR 14,000 and a 2.5× multiplier: step 1 = 14,000, step 2 =
              35,000, step 3 = 87,500. Win anywhere in the sequence and — because each win pays 80% of
              a stake that's larger than everything already lost — the cycle closes net positive.
            </P>
            <DataTable
              head={["Step", "Stake (2.5×)", "Total Spent", "Net if Won Here"]}
              rows={[
                ["1", "IDR 14,000", "IDR 14,000", "+IDR 11,200"],
                ["2", "IDR 35,000", "IDR 49,000", "+IDR 14,000"],
                ["3", "IDR 87,500", "IDR 136,500", "+IDR 21,000"],
              ]}
            />
            <P>
              The same table also shows the cost: lose all three steps and{" "}
              <strong className="text-[#1a1612]">IDR 136,500 is gone in three trades</strong>. That's
              the deal you're making — quantify it before accepting it. Our free{" "}
              <Link href="/kalkulator-martingale" className="text-[#047857] underline">martingale calculator</Link>{" "}
              runs these numbers for any settings (the tool is in Indonesian, but the math is universal).
            </P>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Settings</SectionLabel>
          <H2>Why 2–2.5× and Max 3 Steps Is the Baseline</H2>
          <div className="space-y-4">
            <P>
              Two constraints pin the settings down. The multiplier must be{" "}
              <strong className="text-[#1a1612]">high enough that a late win still profits</strong>{" "}
              (above ~2× at an 80% payout), and the step count must be{" "}
              <strong className="text-[#1a1612]">low enough that the total cycle fits your
              balance</strong>. These pull in opposite directions — 2–2.5× with 3 steps is where they
              balance for a normal account.
            </P>
            <WarningBox>
              Step counts escalate brutally: at 3× multiplier with 5 steps, the final order alone is
              243× your base stake. Deep-step martingale doesn't make recovery more likely — it makes
              the inevitable bad streak unpayable. If your settings only work "as long as I don't lose
              5 in a row", they don't work: 5-loss streaks are routine, not rare.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>03 · Practice</SectionLabel>
          <H2>Running It Without Blowing Up</H2>
          <Steps
            items={[
              { title: "Size the cycle against your balance", desc: "Total cycle risk (sum of all steps) should be a fraction of the account — keep at least 2× the cycle as balance so one failed cycle isn't fatal." },
              { title: "Set a daily stop loss in money, not hope", desc: "Decide the maximum daily loss before trading. When it's hit, you're done for the day — no 'one more cycle to recover'." },
              { title: "Reset after every win", desc: "The sequence exists only to recover losses. After a win, return to base stake immediately — riding increased stakes after recovery is how profit evaporates." },
              { title: "Validate on demo for a week", desc: "Run the exact settings on the demo account first. If the math holds there for a week of real market data, it's ready for a small real balance." },
              { title: "Automate the discipline", desc: "The failure mode of martingale is emotional improvisation mid-sequence. A bot with hard MAX STEP / MULTIPLIER limits executes the plan exactly as written." },
            ]}
          />
          <div className="mt-4">
            <InfoBox icon="🤖" title="Managed martingale in STC AutoTrade">
              Set MAX STEP and MULTIPLIER once; the bot runs the sequence, resets after wins, and
              stops at your daily stop loss or stop profit — server-side, 24/7, no emotions attached.
            </InfoBox>
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
