/**
 * app/en/articles/how-to-withdraw-from-stockity/page.tsx
 * EN twin of /artikel/cara-withdraw-stockity
 * Primary: stockity withdrawal, how to withdraw from stockity
 */

import { buildEnMetadata, buildEnSchemas, type EnArticleSeoDef } from "../_lib/enArticleSeo";
import { EnArticleShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, Steps } from "../_components/EnArticleShell";
import Link from "next/link";

const seo: EnArticleSeoDef = {
  slug: "how-to-withdraw-from-stockity",
  idSlug: "cara-withdraw-stockity",
  title: "How to Withdraw from Stockity: Steps, Timing & Common Issues (2026)",
  description:
    "The complete Stockity withdrawal guide: requirements (KYC first), step-by-step payout flow, how long withdrawals take, minimums, and fixes for pending or rejected withdrawals.",
  keywords: [
    "stockity withdrawal",
    "how to withdraw from stockity",
    "stockity payout",
    "stockity withdrawal time",
    "stockity withdrawal pending",
    "stockity minimum withdrawal",
  ],
  breadcrumbName: "Withdrawing from Stockity",
  datePublished: "2026-07-04",
  faq: [
    { q: "Why can't I withdraw from Stockity?", a: "The most common cause by far: identity verification (KYC) not completed — payouts stay locked until it's approved. Other causes: unmet bonus turnover requirements, withdrawing to a method different from your deposit method, or amounts below the minimum." },
    { q: "How long do Stockity withdrawals take?", a: "Typically from a few hours up to 1–3 business days depending on the method and queue. First withdrawals can take longer because they often trigger the KYC review." },
    { q: "Is there a minimum withdrawal?", a: "Yes — platform minimums apply and vary by method and market. Check the withdrawal page in your account for the current figure before submitting." },
    { q: "Do I have to withdraw to the same method I deposited with?", a: "Platforms generally route payouts back through the deposit method first (an anti-money-laundering standard). Keep your deposit method active until the corresponding amount has been paid back out." },
    { q: "Does using a trading robot affect withdrawals?", a: "No. STC AutoTrade only executes trades — deposits and withdrawals happen on Stockity as usual, fully under your control. Profit made by the bot withdraws exactly like manual profit." },
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
        readMins={7}
        breadcrumbName={seo.breadcrumbName}
        idHref="/artikel/cara-withdraw-stockity"
        title={<>Withdrawing from Stockity:<br className="hidden sm:block" /> Get Paid Without Surprises</>}
        lede={<>Profit only becomes yours when it reaches your account. This guide covers the requirements (finish <strong className="font-semibold text-[#1a1612]">KYC first</strong>), the exact payout flow, realistic timing, and fixes for stuck withdrawals.</>}
        stats={[
          { v: "KYC", l: "Required First" },
          { v: "~1–3 days", l: "Typical Processing" },
          { v: "Same route", l: "Back via Deposit Method" },
          { v: "0 Fees*", l: "From the Bot Side" },
        ]}
        related={[
          { href: "/en/articles/stockity-account-verification", title: "Account Verification", desc: "Pass KYC on the first try" },
          { href: "/en/articles/stockity-trading-robot", title: "Stockity Trading Robot", desc: "Automate the trading side" },
          { href: "/en/articles/how-to-set-up-stockity-robot", title: "Robot Setup Guide", desc: "Risk limits that protect your profit" },
        ]}
        ctaEyebrow="Profit Secured?"
        ctaTitle="Let STC AutoTrade Handle Tomorrow's Session Too"
        ctaDesc="Automatic take profit locks green days — so there's something to withdraw. Free for members."
      >
        <section>
          <SectionLabel>01 · Requirements</SectionLabel>
          <H2>Before You Request a Payout</H2>
          <div className="space-y-4">
            <DataTable
              head={["Requirement", "Detail"]}
              rows={[
                ["KYC approved", "Identity verification must be completed — the #1 reason first withdrawals stall"],
                ["Bonus turnover met (if any)", "Bonus funds are locked behind trading-volume requirements; check the promo terms"],
                ["Amount ≥ minimum", "Minimums vary by method and market — see the withdrawal page in your account"],
                ["Matching payout method", "Payouts route back through your deposit method first (AML standard)"],
              ]}
            />
            <InfoBox icon="⏱️" title="Do KYC before you need it">
              Verification takes up to a few business days. Complete it right after registering — see the{" "}
              <Link href="/en/articles/stockity-account-verification" className="text-[#047857] underline">verification
              guide</Link> — so your first payout isn't stuck behind a document review.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Steps</SectionLabel>
          <H2>The Withdrawal Flow, Step by Step</H2>
          <Steps
            items={[
              { title: "Open the withdrawal menu", desc: "Log in to Stockity → balance/wallet section → Withdraw." },
              { title: "Choose the payout method", desc: "Pick the method matching your deposits (bank or e-wallet). Double-check the destination account details — payouts to wrong numbers are painful to recover." },
              { title: "Enter the amount", desc: "At or above the minimum, and within your withdrawable balance (bonus funds may be excluded until turnover is met)." },
              { title: "Confirm the request", desc: "Review everything, confirm, and note the request appears in your transaction history with a 'processing' status." },
              { title: "Wait for processing", desc: "Typically a few hours to 1–3 business days. The first withdrawal is usually the slowest; subsequent ones are faster." },
              { title: "Verify receipt", desc: "Check your bank/e-wallet. If the platform marks it paid but nothing arrives within the stated window, contact official Stockity support with the transaction ID." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>03 · Issues</SectionLabel>
          <H2>Pending or Rejected? Diagnose It Here</H2>
          <div className="space-y-4">
            <DataTable
              head={["Symptom", "Likely cause", "Fix"]}
              rows={[
                ["Request stuck at 'processing'", "Normal queue or first-withdrawal review", "Wait the stated window; first payouts take longest"],
                ["Rejected: verification required", "KYC not completed/approved", "Finish verification, then resubmit"],
                ["Rejected: bonus terms", "Turnover requirement not met", "Check promo terms; trade the required volume or forfeit the bonus per platform rules"],
                ["Amount less than requested", "Payment-provider fees on some methods", "Compare methods; choose the one with lowest fees for your market"],
                ["'Withdraw to deposit method' error", "Payout method ≠ deposit method", "Withdraw back through the original method first"],
              ]}
            />
            <WarningBox>
              Never hand your account to a third party promising to "unlock" withdrawals for a fee — that's
              a scam pattern. Every legitimate fix goes through your own account and official Stockity support.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>04 · Bot Angle</SectionLabel>
          <H2>Withdrawals and the Trading Robot</H2>
          <div className="space-y-4">
            <P>
              <Link href="/en/articles/stockity-trading-robot" className="text-[#047857] underline">STC AutoTrade</Link>{" "}
              never touches your money flow — it only places trades. Profit earned by the bot sits in your
              Stockity balance and withdraws exactly like manual profit. There are no bot-side fees or
              profit shares (*the platform&apos;s own payment fees, if any, apply as usual).
            </P>
            <P>
              One habit worth automating mentally: withdraw on a schedule (weekly or at a balance
              milestone), not emotionally. Pair it with the bot&apos;s automatic take profit and your green
              days convert into actual money in the bank — the only metric that ultimately matters.
            </P>
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
