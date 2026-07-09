/**
 * app/en/articles/is-stockity-legit/page.tsx
 * EN twin of /artikel/stockity-aman-atau-penipuan
 * Primary: is stockity legit, stockity review, stockity scam
 * Stance mirrors the ID article: honest, evidence-based, no overclaiming —
 * regulation status is presented as "verify on the platform yourself".
 */

import { buildEnMetadata, buildEnSchemas, type EnArticleSeoDef } from "../_lib/enArticleSeo";
import { EnArticleShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList } from "../_components/EnArticleShell";

const seo: EnArticleSeoDef = {
  slug: "is-stockity-legit",
  idSlug: "stockity-aman-atau-penipuan",
  title: "Is Stockity Legit or a Scam? An Honest Review (2026)",
  description:
    "An evidence-based Stockity review: what actually works (real payouts, KYC, demo account), what to verify yourself (regulation), the risks nobody should hide from you, and how to test the platform safely.",
  keywords: [
    "is stockity legit",
    "stockity review",
    "stockity scam",
    "stockity safe",
    "stockity withdrawal proof",
    "stockity binary options review",
  ],
  breadcrumbName: "Is Stockity Legit?",
  datePublished: "2026-07-09",
  faq: [
    { q: "Is Stockity a scam?", a: "Based on observable behavior — accounts can be registered, demo works with real market data, deposits are credited, and verified users do withdraw funds — Stockity operates as a functioning binary options platform, not an exit scam. That is different from saying it's risk-free: binary options trading itself is high risk." },
    { q: "Is Stockity regulated?", a: "Regulation claims change over time and differ by jurisdiction, so don't take any article's word for it — including ours. Check the current legal information directly on the platform's official site, and understand how binary options are treated by your local regulator before trading." },
    { q: "Can I really withdraw my money?", a: "Yes — provided your account passes identity verification (KYC), the destination account is in your own name, and any bonus turnover requirements are met. Most 'can't withdraw' complaints trace back to one of those three conditions." },
    { q: "What's the safest way to test Stockity?", a: "The demo account: real market data, zero risk. Then, if you proceed, a small first deposit and a small first withdrawal — testing the full cycle end-to-end before committing meaningful money." },
    { q: "Is using a robot like STC AutoTrade safe for my account?", a: "STC AutoTrade never stores your password — authentication uses an encrypted token on your device. The bot executes the strategy you configure, with automatic stop loss and stop profit. It reduces emotional mistakes; it does not remove market risk." },
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
        badge="Review"
        date="July 9, 2026"
        readMins={8}
        breadcrumbName={seo.breadcrumbName}
        idHref="/artikel/stockity-aman-atau-penipuan"
        title={<>Is Stockity Legit?<br className="hidden sm:block" /> An Honest, Evidence-Based Review</>}
        lede={<>No affiliate hype, no fear-mongering. We separate <strong className="font-semibold text-[#1a1612]">what can be verified</strong> — payouts, KYC, demo — from what you should always check yourself, and name the risks that are real regardless of platform.</>}
        stats={[
          { v: "Working", l: "Deposits & Withdrawals" },
          { v: "KYC", l: "Identity Checks Enforced" },
          { v: "Demo", l: "Free, Real Market Data" },
          { v: "High Risk", l: "Binary Options by Nature" },
        ]}
        related={[
          { href: "/en/articles/how-to-register-stockity", title: "How to Register on Stockity", desc: "Sign-up guide with a safe first week" },
          { href: "/en/articles/how-to-withdraw-from-stockity", title: "Withdrawing from Stockity", desc: "The payout process, tested step by step" },
          { href: "/en/articles/stockity-trading-robot", title: "Stockity Trading Robot", desc: "What STC AutoTrade does — and doesn't do" },
        ]}
        ctaEyebrow="Decided to Try It?"
        ctaTitle="Start on Demo with STC AutoTrade"
        ctaDesc="Test the platform and the bot with zero risk — all 6 strategy modes work on the demo account. Free for members."
      >
        <section>
          <SectionLabel>01 · Method</SectionLabel>
          <H2>How to Judge Any Trading Platform</H2>
          <div className="space-y-4">
            <P>
              &ldquo;Legit or scam&rdquo; is the wrong binary. The useful questions are observable ones:{" "}
              <strong className="text-[#1a1612]">Does money actually come back out? Are identity rules
              enforced? Is there a free way to test? Are the risks disclosed?</strong> A platform can pass
              all of those and still be a place where undisciplined traders lose money — because the
              product itself, binary options, is high risk by design.
            </P>
            <InfoBox icon="🔍" title="Our position">
              We build a trading bot for Stockity, so we use the platform daily — that's experience, and
              also a bias you should know about. Everything below is phrased so you can verify it yourself.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Evidence</SectionLabel>
          <H2>What Checks Out — and What to Verify Yourself</H2>
          <DataTable
            head={["Aspect", "Status", "Notes"]}
            rows={[
              ["Deposits credited", "✅ Works", "Instant methods (e-wallet, VA, QRIS) credit within minutes"],
              ["Withdrawals paid", "✅ Works", "Requires KYC + same-name destination; typically processed within a business day"],
              ["Demo account", "✅ Free", "Real market data — the honest way to test before depositing"],
              ["KYC enforcement", "✅ Enforced", "Anti-fraud identity checks before payouts — a positive signal, not a red flag"],
              ["Official regulation", "ℹ️ Verify yourself", "Claims change over time — check current legal info on the platform and your local regulator's stance"],
              ["Profit guarantee", "❌ Doesn't exist", "Anyone promising guaranteed profit — on any platform — is the actual scam"],
            ]}
          />
        </section>

        <section>
          <SectionLabel>03 · Risks</SectionLabel>
          <H2>The Risks That Are Real — On Any Platform</H2>
          <div className="space-y-4">
            <P>
              An honest review must say this plainly: with a payout around 80%, you need roughly a{" "}
              <strong className="text-[#1a1612]">56% win rate just to break even</strong>, and most retail
              traders who trade on gut feeling lose money. The platform being legitimate does not make the
              product safe — discipline, small position sizes, and daily loss limits do the protecting.
            </P>
            <WarningBox>
              Also real: impersonation scams around the platform — fake "admins" in chat groups asking for
              passwords or deposits to private accounts, sellers of "pre-verified" accounts, and signal
              groups promising 90% win rates. None of these are the platform itself; all of them will cost
              you money.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>04 · Test</SectionLabel>
          <H2>The Safe Way to Find Out for Yourself</H2>
          <div className="space-y-4">
            <P>
              Don't trust reviews — including this one — more than your own test cycle:{" "}
              <strong className="text-[#1a1612]">demo first</strong> (a week minimum, real market data),
              then a <strong className="text-[#1a1612]">small deposit</strong>, then a{" "}
              <strong className="text-[#1a1612]">small withdrawal</strong> to prove the full money cycle
              end-to-end. Only scale up after all three steps have worked for you personally.
            </P>
            <InfoBox icon="🛡️" title="Where STC AutoTrade fits">
              The bot adds mechanical discipline: your strategy runs exactly as configured, with automatic
              daily stop loss and stop profit, server-side 24/7. Your password never touches our servers —
              authentication is an encrypted token on your device.
            </InfoBox>
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
