/**
 * app/en/articles/how-to-deposit-stockity/page.tsx
 * EN twin of /artikel/cara-deposit-stockity
 * Primary: how to deposit on stockity, stockity deposit methods
 */

import { buildEnMetadata, buildEnSchemas, type EnArticleSeoDef } from "../_lib/enArticleSeo";
import { EnArticleShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, Steps } from "../_components/EnArticleShell";

const seo: EnArticleSeoDef = {
  slug: "how-to-deposit-stockity",
  idSlug: "cara-deposit-stockity",
  title: "How to Deposit on Stockity: Methods, Steps & Timing (2026)",
  description:
    "Funding your Stockity account step by step: available payment methods (e-wallet, virtual account, QRIS), exact steps, how fast funds arrive, the minimum amount — and mistakes that delay crediting.",
  keywords: [
    "how to deposit on stockity",
    "stockity deposit methods",
    "stockity deposit guide",
    "fund stockity account",
    "stockity payment methods",
    "stockity deposit time",
  ],
  breadcrumbName: "How to Deposit",
  datePublished: "2026-07-09",
  faq: [
    { q: "What deposit methods does Stockity support?", a: "Local instant methods — e-wallets, bank virtual accounts (VA), and QRIS — with the exact list shown on the deposit page for your region. Instant methods typically credit within seconds to a few minutes." },
    { q: "What's the minimum deposit?", a: "Around IDR 140,000 (roughly $9); the precise figure per method is shown at checkout. See our minimum-deposit guide for why a comfortable working balance is higher than the minimum." },
    { q: "How long does a deposit take?", a: "Instant methods: seconds to minutes. If nothing arrives within 30–60 minutes, something's off — usually an expired virtual account or a transfer amount that doesn't match the invoice exactly." },
    { q: "Does STC AutoTrade see my new balance automatically?", a: "Yes. The bot reads your Stockity balance in real time through the API — no manual input. Deposit on the platform, and the dashboard reflects it immediately." },
    { q: "My deposit didn't arrive — what now?", a: "Check the deposit history status first, verify you paid the exact invoice amount before its expiry, wait out gateway delay, then contact support with your payment proof and account ID. Failed payments are refunded by the payment provider." },
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
        idHref="/artikel/cara-deposit-stockity"
        title={<>How to Deposit on Stockity:<br className="hidden sm:block" /> Methods, Steps &amp; Timing</>}
        lede={<>Funding the account is usually instant — <strong className="font-semibold text-[#1a1612]">when done exactly right</strong>. The methods, the steps, and the two small mistakes behind almost every "deposit not credited" complaint.</>}
        stats={[
          { v: "±140k", l: "Minimum (IDR, ≈ $9)" },
          { v: "< 5 min", l: "Instant Methods Credit" },
          { v: "3 types", l: "E-wallet · VA · QRIS" },
          { v: "API", l: "Bot Reads Balance Live" },
        ]}
        related={[
          { href: "/en/articles/stockity-minimum-deposit", title: "Minimum Deposit Explained", desc: "Minimum vs a workable starting balance" },
          { href: "/en/articles/how-to-register-stockity", title: "Register on Stockity", desc: "Set up the account before funding it" },
          { href: "/en/articles/how-to-withdraw-from-stockity", title: "How to Withdraw", desc: "Getting money out — the full payout flow" },
        ]}
        ctaEyebrow="Balance In?"
        ctaTitle="STC AutoTrade Reads It Instantly"
        ctaDesc="Real-time API connection — your deposit shows in the bot dashboard immediately, no manual input. Free for members."
      >
        <section>
          <SectionLabel>01 · Methods</SectionLabel>
          <H2>Payment Methods & How Fast They Credit</H2>
          <div className="space-y-4">
            <DataTable
              head={["Method", "Speed", "Notes"]}
              rows={[
                ["E-wallet", "Seconds–minutes", "Pay from the wallet app; watch for in-app payment expiry"],
                ["Bank virtual account (VA)", "Minutes", "Transfer the exact amount to the generated VA before it expires"],
                ["QRIS", "Seconds–minutes", "Scan and pay from any QRIS-supporting app; amount is locked to the invoice"],
              ]}
            />
            <P>
              The exact list varies by region and is always shown on the platform's deposit page —
              treat that page as the source of truth, since methods and limits change over time.
            </P>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Steps</SectionLabel>
          <H2>Depositing, Step by Step</H2>
          <Steps
            items={[
              { title: "Open the deposit page", desc: "Log in to Stockity and open the deposit/top-up menu. Pick your payment method." },
              { title: "Enter the amount", desc: "At least the minimum (± IDR 140,000). For your first deposit, keep it small — prove the flow works before committing your planned balance." },
              { title: "Pay exactly as invoiced", desc: "Copy the amount, don't retype it — VA and QRIS payments must match the invoice to the rupiah. Pay before the invoice expires." },
              { title: "Wait for automatic crediting", desc: "Instant methods credit in seconds to minutes. The balance updates on the platform — and in your STC AutoTrade dashboard via the real-time API, with no manual steps." },
              { title: "Verify in deposit history", desc: "Confirm the transaction shows as successful. Keep the payment proof until it does — it's your claim ticket if anything stalls." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>03 · Pitfalls</SectionLabel>
          <H2>The Two Mistakes Behind Most Delays</H2>
          <div className="space-y-4">
            <P>
              Nearly every stuck deposit traces to one of two things:{" "}
              <strong className="text-[#1a1612]">paying an expired invoice</strong> (the VA/QRIS was
              generated earlier and its window lapsed) or{" "}
              <strong className="text-[#1a1612]">an amount that doesn't match exactly</strong> — even
              one rupiah off can prevent automatic matching. Both are avoided by generating the
              invoice, paying it immediately, and copying the amount.
            </P>
            <InfoBox icon="💡" title="First deposit = a test run">
              Use a small amount the first time with any new payment method. Once the full cycle
              works — deposit in, later a small withdrawal out — scale to your planned balance.
            </InfoBox>
            <WarningBox>
              Deposit only through the official platform page. Never transfer to a personal account
              given by an "admin" in a chat group — that's the most common scam in this niche, and the
              money is unrecoverable.
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
