/**
 * app/en/articles/stockity-demo-account/page.tsx
 * EN twin of /artikel/akun-demo-stockity
 * Primary: stockity demo account
 */

import { buildEnMetadata, buildEnSchemas, type EnArticleSeoDef } from "../_lib/enArticleSeo";
import { EnArticleShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, Steps } from "../_components/EnArticleShell";

const seo: EnArticleSeoDef = {
  slug: "stockity-demo-account",
  idSlug: "akun-demo-stockity",
  title: "Stockity Demo Account: Free Practice with Real Market Data (2026)",
  description:
    "Everything about the Stockity demo account: how to get it (free, instant), what's identical to the real account and what isn't, a structured 7-day practice plan, and when you're actually ready to go live.",
  keywords: [
    "stockity demo account",
    "stockity demo",
    "stockity practice account",
    "binary options demo account",
    "stockity free demo",
    "demo trading stockity",
  ],
  breadcrumbName: "Demo Account",
  datePublished: "2026-07-09",
  faq: [
    { q: "Is the Stockity demo account free?", a: "Yes — it comes with every account at registration, loaded with virtual funds. No deposit is required to use it, and it never expires." },
    { q: "Does the demo use real prices?", a: "Yes. The demo runs on the same real-time market data as real accounts — charts, assets, and payouts behave identically. Only the money is virtual." },
    { q: "What happens when the demo balance runs out?", a: "You can refill it anytime at no cost. That's also its one weakness as a teacher: refills erase consequences, so treat the demo balance as if it were real to get honest results." },
    { q: "How long should I practice before going real?", a: "A structured 7 days minimum — regular sessions with one strategy, or until your win rate is consistently above the ~56% break-even threshold across a meaningful number of trades. Consistency matters more than a lucky day." },
    { q: "Does STC AutoTrade work on the demo account?", a: "Yes — all 6 strategy modes work on demo exactly as on real accounts. It's the recommended way to validate bot settings (mode, martingale limits, stop loss) before real money is involved." },
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
        idHref="/artikel/akun-demo-stockity"
        title={<>Stockity Demo Account:<br className="hidden sm:block" /> Practice Like It's Real</>}
        lede={<>The demo account is the <strong className="font-semibold text-[#1a1612]">only genuinely free lesson</strong> this market offers — same data, same interface, zero risk. Most people waste it by clicking randomly. Here's how to use it properly.</>}
        stats={[
          { v: "Free", l: "Included at Registration" },
          { v: "Real", l: "Live Market Data" },
          { v: "Refillable", l: "Virtual Balance Anytime" },
          { v: "7 days", l: "Structured Minimum" },
        ]}
        related={[
          { href: "/en/articles/how-to-register-stockity", title: "How to Register on Stockity", desc: "Get your account (and demo) in minutes" },
          { href: "/en/articles/stockity-martingale-strategy", title: "Martingale Strategy", desc: "Validate the cycle math on demo first" },
          { href: "/en/articles/stockity-minimum-deposit", title: "Minimum Deposit", desc: "What going live actually costs" },
        ]}
        ctaEyebrow="Practice with the Bot"
        ctaTitle="STC AutoTrade Works on Demo Too"
        ctaDesc="Test all 6 strategy modes with zero risk — then take the exact same settings live. Free for members."
      >
        <section>
          <SectionLabel>01 · What It Is</SectionLabel>
          <H2>Same Market, Virtual Money</H2>
          <div className="space-y-4">
            <P>
              The demo account mirrors the real one:{" "}
              <strong className="text-[#1a1612]">identical live market data, identical interface,
              identical payouts</strong>. The only differences are that the balance is virtual and —
              the important psychological catch — that it refills for free, which quietly removes the
              fear that shapes real trading decisions.
            </P>
            <DataTable
              head={["Aspect", "Demo", "Real Account"]}
              rows={[
                ["Market data & charts", "Real-time, identical", "Real-time, identical"],
                ["Payout percentages", "Same", "Same"],
                ["Balance", "Virtual, refillable free", "Your money"],
                ["Emotions", "Muted — nothing at stake", "Full force — the real test"],
                ["Withdrawals", "N/A", "After KYC verification"],
              ]}
            />
          </div>
        </section>

        <section>
          <SectionLabel>02 · Plan</SectionLabel>
          <H2>The Structured 7-Day Plan</H2>
          <Steps
            items={[
              { title: "Day 1–2: learn the terrain", desc: "Platform mechanics, order flow, one asset, one timeframe. No strategy yet — just stop making interface mistakes." },
              { title: "Day 3–5: one strategy, fixed rules", desc: "Pick a single strategy and trade it identically every session. Fixed stake, fixed hours, no improvisation — you're generating clean data about the strategy, not entertainment." },
              { title: "Day 6–7: review the numbers", desc: "Win rate across all trades, worst losing streak, results by hour of day. Above ~56% win rate consistently? The strategy clears break-even. Below? Adjust and repeat — on demo, not on real money." },
              { title: "Treat the balance as real", desc: "One refill discipline rule: if you blow the demo balance, review what went wrong before refilling. Refill-and-forget teaches exactly the habit that kills real accounts." },
              { title: "Then go small, not big", desc: "Graduate with a small deposit and the same rules that worked on demo. The strategy didn't change — only the emotions did. Daily stop loss from day one." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>03 · With the Bot</SectionLabel>
          <H2>Using Demo to Validate Bot Settings</H2>
          <div className="space-y-4">
            <P>
              The demo account is also the proper test bench for automation: run STC AutoTrade's
              strategy modes (AI Signal, Copy Trading, Indicator, Candlestick, Fastrade, Schedule)
              against real market data, tune the martingale limits and daily stops, and read the
              results from the history page — all before a single rupiah is exposed.
            </P>
            <InfoBox icon="🧪" title="A clean experiment">
              Change one setting at a time and give it enough trades to mean something. A week of one
              configuration beats seven days of seven configurations — noise isn't knowledge.
            </InfoBox>
            <WarningBox>
              Demo success doesn't guarantee live success — slippage of emotions is real, and markets
              shift. What demo does guarantee is filtering out strategies that fail even under ideal
              conditions. Anything that can't profit on demo has no business touching real money.
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
