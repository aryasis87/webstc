/**
 * app/en/articles/how-to-register-stockity/page.tsx
 * EN twin of /artikel/cara-daftar-stockity
 * Primary: how to register on stockity, stockity sign up
 */

import { buildEnMetadata, buildEnSchemas, type EnArticleSeoDef } from "../_lib/enArticleSeo";
import { EnArticleShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, Steps, CardGrid } from "../_components/EnArticleShell";

const seo: EnArticleSeoDef = {
  slug: "how-to-register-stockity",
  idSlug: "cara-daftar-stockity",
  title: "How to Register on Stockity: Sign-Up Guide & First Steps (2026)",
  description:
    "Step-by-step Stockity registration: what you need, the sign-up flow, why you should start on the demo account, a safe first deposit — and how to automate your trading with STC AutoTrade afterwards.",
  keywords: [
    "how to register on stockity",
    "stockity sign up",
    "stockity registration",
    "create stockity account",
    "stockity demo account",
    "stockity first deposit",
  ],
  breadcrumbName: "Register on Stockity",
  datePublished: "2026-07-09",
  faq: [
    { q: "Is registering on Stockity free?", a: "Yes — creating an account costs nothing, and you get a demo account with virtual funds to practice on before depositing any real money." },
    { q: "What do I need to sign up?", a: "An active email address, a phone number, and a strong password. Identity documents are not required at registration — verification (KYC) comes later, and is mandatory only before your first withdrawal." },
    { q: "Can I register through STC AutoTrade?", a: "Yes. The STC AutoTrade app (Android APK) and web version include a registration flow for new Stockity accounts — you can sign up and connect the bot in one place, free for members." },
    { q: "Should I deposit right after registering?", a: "No. Spend at least 7 days on the demo account first — validate your strategy and learn the platform with zero risk. Deposit only after your demo results are consistent." },
    { q: "How much should my first deposit be?", a: "Start small. A working balance around IDR 500,000 (≈ $30) is a reasonable safe buffer for conservative settings with the minimum order of IDR 14,000 — never deposit money you cannot afford to lose." },
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
        idHref="/artikel/cara-daftar-stockity"
        title={<>How to Register on Stockity:<br className="hidden sm:block" /> From Sign-Up to First Trade</>}
        lede={<>Registration takes minutes — but what you do <strong className="font-semibold text-[#1a1612]">right after</strong> decides whether your account survives. This guide covers the sign-up flow and the safe first steps most beginners skip.</>}
        stats={[
          { v: "Free", l: "Account & Demo Included" },
          { v: "3 items", l: "Email, Phone, Password" },
          { v: "7 days", l: "Recommended Demo First" },
          { v: "18+", l: "Minimum Age" },
        ]}
        related={[
          { href: "/en/articles/stockity-account-verification", title: "Account Verification (KYC)", desc: "Required before your first withdrawal" },
          { href: "/en/articles/is-stockity-legit", title: "Is Stockity Legit?", desc: "An honest review before you commit money" },
          { href: "/en/articles/stockity-trading-robot", title: "Stockity Trading Robot", desc: "Automate your new account with STC AutoTrade" },
        ]}
        ctaEyebrow="Account Ready?"
        ctaTitle="Connect STC AutoTrade — Free for Members"
        ctaDesc="6 strategy modes, automatic stop loss & stop profit, runs server-side 24/7. Android APK or straight from your browser."
      >
        <section>
          <SectionLabel>01 · Prepare</SectionLabel>
          <H2>What You Need Before Signing Up</H2>
          <CardGrid
            items={[
              { icon: "📧", title: "Active email", desc: "You'll confirm it during sign-up and use it for account recovery — use a real inbox you control." },
              { icon: "📱", title: "Phone number", desc: "Used for confirmations and security. One account per person — duplicates risk blocking." },
              { icon: "🔑", title: "Strong password", desc: "Unique to Stockity. Never reuse a password from other sites, and never share it — no legitimate admin will ever ask for it." },
              { icon: "🪪", title: "ID document (later)", desc: "Not needed at registration. Identity verification (KYC) is required only before your first withdrawal — but doing it early avoids payout delays." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>02 · Steps</SectionLabel>
          <H2>The Registration Flow, Step by Step</H2>
          <Steps
            items={[
              { title: "Open the registration form", desc: "Register through the official platform — or directly inside STC AutoTrade (Android APK or the web version), which includes Stockity sign-up for new users." },
              { title: "Enter email, password & currency", desc: "Fill in your details, pick your account currency, and accept the terms. Double-check the email — it's your recovery lifeline." },
              { title: "Confirm your email", desc: "Click the confirmation link sent to your inbox. No email? Check spam, or request a resend." },
              { title: "Explore the demo account first", desc: "Every new account includes a demo balance with real market data. This is where you learn — not the real account." },
              { title: "Complete your profile", desc: "Fill in your name and date of birth exactly as they appear on your ID — it prevents verification problems later." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>03 · After</SectionLabel>
          <H2>The Safe First Week: Demo → Validate → Small Deposit</H2>
          <div className="space-y-4">
            <P>
              The single biggest beginner mistake is depositing on day one. Do it in this order instead:{" "}
              <strong className="text-[#1a1612]">at least 7 days on demo</strong>, validate one strategy
              until its results are consistent, then make a small first deposit — and only then trade real
              funds, with a daily stop loss configured from the start.
            </P>
            <DataTable
              head={["Phase", "What to Do", "Money at Risk"]}
              rows={[
                ["Day 1–7", "Demo trading — learn the platform, test one strategy", "None"],
                ["Day 7+", "Review demo stats: win rate, worst losing streak", "None"],
                ["First deposit", "Start small (≈ IDR 500,000 buffer is reasonable)", "Minimal"],
                ["Real trading", "Minimum order IDR 14,000, daily stop loss set", "Controlled"],
              ]}
            />
            <InfoBox icon="🤖" title="Automation from day one">
              STC AutoTrade works on demo accounts too — you can test all 6 strategy modes (AI Signal,
              Copy Trading, Indicator, Candlestick, Fastrade, Schedule) risk-free before any real money
              is involved. It's free for registered members.
            </InfoBox>
            <WarningBox>
              Only register through official channels. "Admins" in chat groups offering registration help,
              bonuses, or pre-verified accounts are a scam pattern — they end with a stolen account or
              stolen deposit.
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
