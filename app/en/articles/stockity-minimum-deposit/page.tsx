/**
 * app/en/articles/stockity-minimum-deposit/page.tsx
 * EN twin of /artikel/minimal-deposit-stockity
 * Primary: stockity minimum deposit
 */

import { buildEnMetadata, buildEnSchemas, type EnArticleSeoDef } from "../_lib/enArticleSeo";
import { EnArticleShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList } from "../_components/EnArticleShell";

const seo: EnArticleSeoDef = {
  slug: "stockity-minimum-deposit",
  idSlug: "minimal-deposit-stockity",
  title: "Stockity Minimum Deposit: Real Numbers & a Safe Starting Balance (2026)",
  description:
    "How much do you actually need to start on Stockity? The minimum deposit (around IDR 140,000), the minimum order (IDR 14,000), and why a safe working balance is bigger than the minimum — with the math shown.",
  keywords: [
    "stockity minimum deposit",
    "stockity deposit amount",
    "how much to start on stockity",
    "stockity minimum trade",
    "stockity starting balance",
    "stockity deposit guide",
  ],
  breadcrumbName: "Minimum Deposit",
  datePublished: "2026-07-09",
  faq: [
    { q: "What is the minimum deposit on Stockity?", a: "Around IDR 140,000 (roughly $9) — check the deposit page for the exact figure for your payment method, as it can vary slightly. It's one of the lowest entry points among binary options platforms." },
    { q: "What is the minimum order size?", a: "IDR 14,000 per trade. That ratio matters: with the minimum deposit you have about 10 minimum orders of room — enough to learn, not enough for aggressive strategies." },
    { q: "Is the minimum deposit enough to trade seriously?", a: "It's enough to test the platform with real money, but tight for risk management. A more comfortable working balance is around IDR 500,000 — roughly 35 minimum orders of buffer, which survives normal losing streaks with conservative settings." },
    { q: "Does a bigger deposit unlock anything?", a: "Deposit tiers may affect bonuses and promotional offers. Be careful with bonuses though — they usually carry turnover requirements that lock withdrawals until met. Read the terms before claiming." },
    { q: "Should I deposit before or after testing on demo?", a: "After. The demo account is free, uses real market data, and refills anytime. Deposit only once your demo results are consistent — the platform will still be there next week." },
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
        idHref="/artikel/minimal-deposit-stockity"
        title={<>Stockity Minimum Deposit:<br className="hidden sm:block" /> The Real Numbers</>}
        lede={<>The minimum gets you in the door — but <strong className="font-semibold text-[#1a1612]">the minimum and a workable balance are different numbers</strong>. Here's both, with the math that separates them.</>}
        stats={[
          { v: "±IDR 140k", l: "Minimum Deposit (≈ $9)" },
          { v: "IDR 14k", l: "Minimum per Order" },
          { v: "IDR 500k", l: "Comfortable Working Balance" },
          { v: "Demo", l: "Free Alternative First" },
        ]}
        related={[
          { href: "/en/articles/how-to-register-stockity", title: "How to Register on Stockity", desc: "Account setup and the safe first week" },
          { href: "/en/articles/stockity-demo-account", title: "Stockity Demo Account", desc: "Practice free before depositing anything" },
          { href: "/en/articles/stockity-martingale-strategy", title: "Martingale Strategy", desc: "Why balance size decides your settings" },
        ]}
        ctaEyebrow="Balance Ready?"
        ctaTitle="Put It to Work with STC AutoTrade"
        ctaDesc="Automated strategies with daily stop loss & stop profit — so a small balance survives long enough to grow. Free for members."
      >
        <section>
          <SectionLabel>01 · Numbers</SectionLabel>
          <H2>The Three Numbers That Matter</H2>
          <div className="space-y-4">
            <P>
              <strong className="text-[#1a1612]">Minimum deposit: around IDR 140,000</strong> (about
              $9 — verify the exact figure on the deposit page for your payment method).{" "}
              <strong className="text-[#1a1612]">Minimum order: IDR 14,000</strong>. Divide them and
              you get the number that actually matters: the minimum deposit buys you roughly{" "}
              <strong className="text-[#1a1612]">10 minimum-sized trades</strong> of room.
            </P>
            <P>
              Ten trades of room disappears fast — a normal losing streak plus a couple of mistakes,
              and the account is done before you've learned anything. That's why "can I start with the
              minimum" and "should I" have different answers.
            </P>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Buffer</SectionLabel>
          <H2>What a Safe Working Balance Looks Like</H2>
          <div className="space-y-4">
            <DataTable
              head={["Balance", "Room (min. orders)", "Verdict"]}
              rows={[
                ["IDR 140,000 (minimum)", "±10 orders", "Platform testing only — not for a real strategy"],
                ["IDR 280,000", "±20 orders", "Workable with flat stakes and strict discipline"],
                ["IDR 500,000", "±35 orders", "Comfortable buffer — survives a conservative martingale cycle"],
                ["IDR 1,000,000+", "±70 orders", "Room for 1–5% position sizing done properly"],
              ]}
            />
            <InfoBox icon="🧮" title="Where IDR 500,000 comes from">
              A conservative managed-martingale cycle (base IDR 14,000, 2.5× multiplier, 3 steps) puts
              about IDR 120,000 at risk per full cycle. A balance of IDR 500,000 survives multiple
              failed cycles — the minimum deposit survives roughly one.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>03 · Strategy</SectionLabel>
          <H2>Match the Deposit to the Strategy — Not the Other Way</H2>
          <div className="space-y-4">
            <P>
              Decide the strategy first, then fund it. Flat minimum stakes need the least; anything
              involving martingale multiplies the requirement with every step you allow. Bonuses can
              stretch a small deposit, but they come with turnover obligations that{" "}
              <strong className="text-[#1a1612]">lock withdrawals until fulfilled</strong> — a bad
              trade-off if you might want your money back soon.
            </P>
            <WarningBox>
              Never deposit money you cannot afford to lose — binary options are high risk, and with a
              payout around 80% you need roughly a 56% win rate just to break even. Start on the demo
              account, deposit small, withdraw small once to test the full cycle, then scale.
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
