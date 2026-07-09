/**
 * app/en/articles/how-to-trade-on-stockity/page.tsx
 * EN twin of /artikel/cara-main-stockity-pemula
 * Primary: how to trade on stockity, stockity for beginners
 */

import { buildEnMetadata, buildEnSchemas, type EnArticleSeoDef } from "../_lib/enArticleSeo";
import { EnArticleShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, Steps, CardGrid } from "../_components/EnArticleShell";

const seo: EnArticleSeoDef = {
  slug: "how-to-trade-on-stockity",
  idSlug: "cara-main-stockity-pemula",
  title: "How to Trade on Stockity: A Complete Beginner's Guide (2026)",
  description:
    "Trading on Stockity from zero: how the UP/DOWN mechanics and 80% payout work, every element of the trading screen explained, your first demo trades, and the beginner rules that keep a first account alive.",
  keywords: [
    "how to trade on stockity",
    "stockity for beginners",
    "stockity tutorial",
    "binary options for beginners",
    "stockity up down trading",
    "how stockity works",
  ],
  breadcrumbName: "Stockity for Beginners",
  datePublished: "2026-07-09",
  faq: [
    { q: "How does trading on Stockity actually work?", a: "You pick an asset, an amount (from IDR 14,000), and an expiry time, then predict whether the price will be higher (UP) or lower (DOWN) at expiry. Correct: you earn the payout — around 80% of your stake. Wrong: the stake is lost." },
    { q: "Is Stockity suitable for complete beginners?", a: "The mechanics are simple to learn and the demo account is free — that makes starting easy. Profiting consistently is the hard part: with an 80% payout you need about a 56% win rate just to break even, which takes a real strategy and discipline." },
    { q: "How much money do I need to start?", a: "Nothing at first — learn on the demo account. When you go real, the minimum deposit is around IDR 140,000, though a working balance near IDR 500,000 gives risk management room to actually function." },
    { q: "What should a beginner absolutely avoid?", a: "Trading real money on day one, increasing stakes to chase losses, trading during major news releases, and trusting anyone who promises guaranteed profits or sells 'VIP signals'. Each of those ends the same way." },
    { q: "Can a bot trade for me as a beginner?", a: "Yes — STC AutoTrade's Copy Trading and AI Signal modes are designed to work without manual analysis, and it runs on demo too. But learn the basics first anyway: you need to understand what the bot is doing to configure its limits sensibly." },
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
        readMins={8}
        breadcrumbName={seo.breadcrumbName}
        idHref="/artikel/cara-main-stockity-pemula"
        title={<>How to Trade on Stockity:<br className="hidden sm:block" /> The Beginner's Guide</>}
        lede={<>The mechanics take five minutes to learn; <strong className="font-semibold text-[#1a1612]">not losing your first account takes rules</strong>. This guide covers both — the trading screen, your first demo trades, and the discipline that separates beginners who stay from those who quit broke.</>}
        stats={[
          { v: "UP/DOWN", l: "The Core Mechanic" },
          { v: "80%", l: "Payout per Winning Trade" },
          { v: "IDR 14k", l: "Minimum per Order" },
          { v: "Demo", l: "Where Beginners Start" },
        ]}
        related={[
          { href: "/en/articles/how-to-register-stockity", title: "Register on Stockity", desc: "Create your account in minutes" },
          { href: "/en/articles/stockity-demo-account", title: "Demo Account Guide", desc: "The structured 7-day practice plan" },
          { href: "/en/articles/stockity-trading-hours", title: "Best Trading Hours", desc: "When the market actually cooperates" },
        ]}
        ctaEyebrow="Skip the Manual Grind?"
        ctaTitle="STC AutoTrade Trades for You — With Your Limits"
        ctaDesc="Copy Trading & AI Signal modes need no analysis skills; stop loss & stop profit keep it disciplined. Works on demo. Free for members."
      >
        <section>
          <SectionLabel>01 · Mechanics</SectionLabel>
          <H2>The Whole Game in One Paragraph</H2>
          <div className="space-y-4">
            <P>
              Every Stockity trade is the same decision: will this asset's price be{" "}
              <strong className="text-[#1a1612]">higher or lower than it is now</strong> when the
              timer expires? Pick an asset, an amount (from IDR 14,000), an expiry, and press UP or
              DOWN. Right: you win about 80% of your stake. Wrong: the stake is gone. That asymmetry
              is the single most important number in this guide — it means winning half your trades{" "}
              <em>loses</em> money, and the break-even win rate is roughly 56%.
            </P>
            <InfoBox icon="🎯" title="Set your expectation here">
              Beginners who treat this as a coin-flip casino lose. Beginners who treat it as a
              probability game — where timing, levels, and discipline shift the odds a few points —
              have a chance. A few points is all the edge that exists.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Screen</SectionLabel>
          <H2>Reading the Trading Screen</H2>
          <CardGrid
            items={[
              { icon: "📈", title: "Price chart", desc: "Live market data — switch to candlestick view; it shows far more than the line chart." },
              { icon: "🪙", title: "Asset picker", desc: "Forex pairs, Gold, Crypto and more. Each has its own character and active hours — beginners should start with one asset only." },
              { icon: "💵", title: "Order amount", desc: "Your stake per trade, from IDR 14,000. Keep it at 1–5% of balance — the number one beginner killer is oversizing." },
              { icon: "⏱️", title: "Expiry (duration)", desc: "How long until the trade resolves — from a minute to longer. Shorter expiry = more noise; 1–5 minutes is common for this style." },
              { icon: "🔼", title: "UP / DOWN buttons", desc: "Your prediction. The payout percentage shown next to them is what a win pays." },
              { icon: "📜", title: "Order history", desc: "Every past trade with its result — your most honest teacher. Review it weekly." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>03 · First Steps</SectionLabel>
          <H2>Your First Week, in Order</H2>
          <Steps
            items={[
              { title: "Create the account", desc: "Register with an active email — directly on the platform or inside STC AutoTrade (APK or web version), which includes Stockity registration. Confirm the email." },
              { title: "Switch to the demo account", desc: "Virtual balance, real market data. Everything below happens here — not with real money." },
              { title: "Make 20 slow demo trades", desc: "One asset, one expiry (e.g. 1 minute), minimum stake equivalent. Goal: mechanical fluency, not profit." },
              { title: "Add one simple rule", desc: "For example: trade only in the liquid hours, only in the trend direction on the 5-minute chart. Track whether your win rate moves." },
              { title: "Review, then decide", desc: "After a structured week: win rate above ~56% consistently? Consider a small real deposit. Below? Stay on demo — it's free, your money isn't." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>04 · Rules</SectionLabel>
          <H2>The Five Beginner Rules That Matter</H2>
          <div className="space-y-4">
            <DataTable
              head={["Rule", "Why"]}
              rows={[
                ["Stake 1–5% of balance, never more", "Survives losing streaks — which are normal, not exceptional"],
                ["Set a daily stop loss before trading", "Caps the damage on tilt days, mechanically"],
                ["One asset, one strategy at a time", "Clean data; you can't learn from randomness"],
                ["No trading around major news", "Direction is a coin flip with extra violence"],
                ["Never chase losses with bigger stakes", "Unmanaged martingale is how first accounts die"],
              ]}
            />
            <WarningBox>
              Binary options are high risk — treat every rupiah deposited as money you can afford to
              lose. Anyone on social media promising guaranteed daily profits or selling "VIP signals"
              is monetizing beginners, not helping them.
            </WarningBox>
          </div>
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
