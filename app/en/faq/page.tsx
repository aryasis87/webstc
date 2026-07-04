/**
 * app/en/faq/page.tsx — English twin of /faq
 * Primary: stockity bot faq, stc autotrade questions
 */

import type { Metadata } from "next";
import Link from "next/link";
import { EnNav, EnCta, EnFooter, EnSectionLabel } from "../_components/EnChrome";

const BASE_URL = "https://stcautotrade.id";

export const metadata: Metadata = {
  title: "STC AutoTrade FAQ — Common Questions About the Stockity Bot",
  description:
    "Answers to the most common questions about STC AutoTrade: pricing, safety, accounts, strategy modes, demo vs real, withdrawals, devices, and troubleshooting.",
  keywords: [
    "stc autotrade faq",
    "stockity bot questions",
    "stockity robot safe",
    "trading bot faq",
  ],
  alternates: {
    canonical: `${BASE_URL}/en/faq`,
    languages: {
      "id-ID": `${BASE_URL}/faq`,
      en: `${BASE_URL}/en/faq`,
      ru: `${BASE_URL}/ru/faq`,
      "x-default": `${BASE_URL}/faq`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${BASE_URL}/en/faq`,
    siteName: "STC AutoTrade",
    title: "STC AutoTrade FAQ — Common Questions About the Stockity Bot",
    description: "Pricing, safety, modes, demo vs real, withdrawals, devices, troubleshooting.",
    images: [{ url: `${BASE_URL}/og-image.webp`, width: 1200, height: 630, alt: "STC AutoTrade FAQ" }],
  },
  twitter: { card: "summary_large_image" },
};

const groups: { label: string; items: { q: string; a: string }[] }[] = [
  {
    label: "Pricing & Access",
    items: [
      { q: "How much does STC AutoTrade cost?", a: "It's free for registered members. No purchase price, no subscription, no profit-sharing. You trade with your own funds on your own Stockity account." },
      { q: "Why is it free — what's the catch?", a: "The bot grows with its member community around the Stockity ecosystem. There is no hidden fee: your deposits and withdrawals happen on Stockity, never through us." },
      { q: "Which devices are supported?", a: "Android via the APK, and everything else (iPhone, iPad, Windows, macOS, Linux) via the web version at stcautotradepro.id. Features are identical." },
    ],
  },
  {
    label: "Safety & Account",
    items: [
      { q: "Is my Stockity account safe with the bot?", a: "The bot connects to your account solely to execute the orders you configure. Your funds stay in your Stockity account — depositing and withdrawing remain fully under your control on the Stockity platform." },
      { q: "Does using a bot affect my Stockity verification?", a: "No. Identity verification (KYC) belongs to your Stockity account and is unaffected by bot usage. Complete KYC early so withdrawals are never delayed." },
      { q: "Can I stop the bot anytime?", a: "Yes — one tap stops the session immediately. Daily stop loss and take profit can also end sessions automatically at the limits you set." },
    ],
  },
  {
    label: "Trading & Results",
    items: [
      { q: "Does the bot guarantee profit?", a: "No, and you should distrust any tool that claims otherwise. Markets carry irreducible risk. The bot delivers disciplined, fast, emotion-free execution of your strategy and limits — outcomes still depend on strategy and market conditions." },
      { q: "What win rate can I expect?", a: "It varies by mode, settings, and market conditions — any fixed number would be dishonest. Run 7–14 days on the demo account and measure your own statistics; that's the only answer that matters." },
      { q: "What is managed martingale?", a: "An optional loss-recovery system with hard limits: you choose the maximum steps and multiplier, and the bot can never exceed them. Combined with a daily stop loss, worst-case risk stays defined in advance." },
      { q: "Which strategy mode should I start with?", a: "Most beginners start with AI Signal or Copy Trading on demo (nothing to configure beyond risk limits), then explore Indicators or Candlestick Momentum once comfortable. Details on each mode are on the how-it-works page." },
    ],
  },
  {
    label: "Troubleshooting",
    items: [
      { q: "The bot can't log in but Stockity works — why?", a: "Make sure the credentials in the bot exactly match your Stockity login (update them after any password reset). If your Stockity account was created via Google/Facebook, set an account password on Stockity first so the bot can use it." },
      { q: "Does my phone need to stay on during sessions?", a: "No. Sessions run on our servers — your phone can be off or offline and the session continues. Reopen the app anytime to check results or stop the bot." },
      { q: "The APK won't install — what do I do?", a: "Allow installation from your browser when Android asks (standard for apps distributed outside the Play Store), ensure Android 8.0+, and re-download if the file was interrupted. The web version is always available as a fallback." },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: groups.flatMap((g) => g.items).map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function EnFaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-[#f6f4ef]">
        <EnNav idHref="/faq" />

        <header className="max-w-5xl mx-auto px-5 sm:px-8 pt-14 pb-10">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#047857] mb-4">FAQ</p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5 max-w-3xl">
            Frequently Asked Questions
          </h1>
          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            Straight answers about pricing, safety, strategy modes, and troubleshooting. Can&apos;t find
            yours? Start with <Link href="/en/how-it-works" className="text-[#047857] underline">how it works</Link>.
          </p>
        </header>

        <main className="max-w-5xl mx-auto px-5 sm:px-8 pb-24 space-y-14">
          {groups.map((g, gi) => (
            <section key={g.label}>
              <EnSectionLabel>{String(gi + 1).padStart(2, "0")} · {g.label}</EnSectionLabel>
              <div className="space-y-3 max-w-3xl">
                {g.items.map((item, i) => (
                  <div key={i} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl px-5 py-4">
                    <h3 className="text-[13px] sm:text-[14px] font-semibold text-[#1a1612] mb-2 leading-snug">{item.q}</h3>
                    <p className="text-[13px] text-[#6b6058] leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>

        <EnCta />
        <EnFooter />
      </div>
    </>
  );
}
