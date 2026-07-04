/**
 * app/en/articles/stockity-account-verification/page.tsx
 * EN twin of /artikel/cara-verifikasi-akun-stockity
 * Primary: stockity verification, stockity kyc
 */

import { buildEnMetadata, buildEnSchemas, type EnArticleSeoDef } from "../_lib/enArticleSeo";
import { EnArticleShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, Steps, CardGrid } from "../_components/EnArticleShell";
import Link from "next/link";

const seo: EnArticleSeoDef = {
  slug: "stockity-account-verification",
  idSlug: "cara-verifikasi-akun-stockity",
  title: "Stockity Account Verification (KYC): Documents, Steps & Fixes (2026)",
  description:
    "How to verify your Stockity account: required documents, upload steps, how long review takes, the most common rejection reasons with fixes — and why KYC must be done before you can withdraw.",
  keywords: [
    "stockity verification",
    "stockity kyc",
    "verify stockity account",
    "stockity identity verification",
    "stockity verification rejected",
    "stockity withdrawal verification",
  ],
  breadcrumbName: "Account Verification",
  datePublished: "2026-07-04",
  faq: [
    { q: "Is verification mandatory on Stockity?", a: "Trading and depositing generally work before full verification, but WITHDRAWALS require completed identity verification (KYC). No KYC, no payout — so finish it early, not when your profit is already waiting." },
    { q: "How long does Stockity verification take?", a: "Typically a few hours up to 1–3 business days, depending on queue and document quality. Sharp, complete photos with matching profile data get processed fastest." },
    { q: "Which documents are accepted?", a: "A valid government ID (national ID card or passport) plus a selfie following the on-screen instructions. If you deposited with a bank card, proof of card ownership may also be requested." },
    { q: "Why was my verification rejected?", a: "The usual causes: blurry or cropped photos, profile data that doesn't exactly match the document, an expired document, or age requirements not met. Fix the specific cause and resubmit." },
    { q: "Does using a trading robot require extra verification?", a: "No. A bot like STC AutoTrade only connects to your account to execute orders — KYC status belongs to the Stockity account itself and is unaffected by bot usage." },
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
        readMins={6}
        breadcrumbName={seo.breadcrumbName}
        idHref="/artikel/cara-verifikasi-akun-stockity"
        title={<>Stockity Verification (KYC):<br className="hidden sm:block" /> Pass It on the First Try</>}
        lede={<>Most traders discover verification matters <strong className="font-semibold text-[#1a1612]">when their first withdrawal gets held</strong>. Do it early instead: here are the documents, the exact steps, and the rejection causes to avoid.</>}
        stats={[
          { v: "ID/Passport", l: "Main Document" },
          { v: "1×", l: "Once per Account" },
          { v: "~1–3 days", l: "Typical Review" },
          { v: "Required", l: "Before Withdrawal" },
        ]}
        related={[
          { href: "/en/articles/how-to-withdraw-from-stockity", title: "Withdrawing from Stockity", desc: "The payout flow after KYC is approved" },
          { href: "/en/articles/stockity-trading-robot", title: "Stockity Trading Robot", desc: "Automate your account the right way" },
          { href: "/en/faq", title: "STC AutoTrade FAQ", desc: "Common questions about the bot" },
        ]}
        ctaEyebrow="Verified?"
        ctaTitle="Automate Your Stockity Trading with STC AutoTrade"
        ctaDesc="6 strategy modes, automatic stop loss, 24/7 server-side sessions. Free for members."
      >
        <section>
          <SectionLabel>01 · Why</SectionLabel>
          <H2>What KYC Is and Why It Blocks Withdrawals</H2>
          <div className="space-y-4">
            <P>
              KYC (<em>Know Your Customer</em>) matches the account owner against an official document —
              a global financial-industry standard against money laundering and identity abuse, not a
              Stockity quirk. The practical consequence: you can register, deposit, and trade first, but{" "}
              <strong className="text-[#1a1612]">payouts stay locked until KYC is approved</strong>.
            </P>
            <InfoBox icon="🔐" title="Where your data goes">
              Upload documents only through the official Stockity site or app. Never send your ID to anyone
              claiming to be an "admin" in chat — that's how accounts get stolen.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Prepare</SectionLabel>
          <H2>What to Prepare</H2>
          <CardGrid
            items={[
              { icon: "🪪", title: "Valid government ID", desc: "National ID card or passport — original and unexpired. Photocopies and edited scans are rejected." },
              { icon: "🤳", title: "Selfie per instructions", desc: "Usually a selfie holding the document or as directed on the verification screen. Face and document must both be clearly visible." },
              { icon: "📇", title: "Matching profile data", desc: "Name and date of birth in your Stockity profile must match the document exactly — a single letter of difference can cause rejection." },
              { icon: "💳", title: "Card confirmation (sometimes)", desc: "If you deposited by bank card, proof of card ownership may be requested (photo with middle digits covered). E-wallet deposits usually skip this." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>03 · Steps</SectionLabel>
          <H2>The Verification Flow, Step by Step</H2>
          <Steps
            items={[
              { title: "Complete your profile", desc: "Log in to Stockity → Profile. Fill in your full name, date of birth, and phone number exactly as they appear on your document. Confirm email/phone if prompted." },
              { title: "Open the verification section", desc: "Found in profile/account settings; Stockity also prompts automatically when you request your first withdrawal." },
              { title: "Upload your ID", desc: "Photograph the document in good light: all edges visible, text readable, no glare. Use the rear camera — not a screenshot." },
              { title: "Upload the selfie", desc: "Follow the on-screen instructions. No hats or dark glasses; keep your whole face in frame." },
              { title: "Submit and wait", desc: "Status changes to 'under review' — typically a few hours to 1–3 business days. You can keep trading while you wait." },
              { title: "Check the result", desc: "Approved: withdrawals unlock. Rejected: read the stated reason, fix it, resubmit." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>04 · Rejections</SectionLabel>
          <H2>Common Rejection Causes &amp; Fixes</H2>
          <DataTable
            head={["Cause", "Fix"]}
            rows={[
              ["Blurry, dark, or cropped photo", "Reshoot with the rear camera, natural light, whole document in frame"],
              ["Profile data ≠ document data", "Edit your Stockity profile to match the document exactly, then resubmit"],
              ["Expired or unsupported document", "Use a valid national ID or passport — student cards and licenses are usually not accepted"],
              ["Glare covering the text", "Avoid direct overhead light; shoot near a window at a slight angle"],
              ["Age requirement not met", "Trading platforms enforce a minimum age; accounts below it cannot be verified"],
              ["Duplicate accounts", "One account per identity — duplicates risk permanent blocking"],
            ]}
          />
          <div className="mt-4">
            <WarningBox>
              Never buy a "pre-verified" Stockity account or verify with someone else's identity. Beyond
              breaking platform rules, the funds legally belong to that identity — and can vanish at any time.
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
