/**
 * app/en/articles/page.tsx — English articles index (twin of /artikel)
 */

import type { Metadata } from "next";
import Link from "next/link";
import { EnNav, EnCta, EnFooter } from "../_components/EnChrome";

const BASE_URL = "https://stcautotrade.id";

export const metadata: Metadata = {
  title: "Articles — Stockity Trading Guides in English | STC AutoTrade",
  description:
    "English guides for Stockity traders: the trading robot handbook, setup & configuration, account verification, withdrawals, AI trading, and platform comparisons.",
  keywords: ["stockity guides english", "stockity articles", "stockity tutorial english", "stockity bot guide"],
  alternates: {
    canonical: `${BASE_URL}/en/articles`,
    languages: {
      "id-ID": `${BASE_URL}/artikel`,
      en: `${BASE_URL}/en/articles`,
      ru: `${BASE_URL}/ru/articles`,
      "x-default": `${BASE_URL}/artikel`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${BASE_URL}/en/articles`,
    siteName: "STC AutoTrade",
    title: "Articles — Stockity Trading Guides in English",
    description: "Robot handbook, setup, verification, withdrawals, AI trading, comparisons.",
    images: [{ url: `${BASE_URL}/og-image.webp`, width: 1200, height: 630, alt: "STC AutoTrade Articles" }],
  },
  twitter: { card: "summary_large_image" },
};

const ARTICLES = [
  { slug: "stockity-trading-robot", badge: "Guide", title: "Stockity Trading Robot: The Complete Guide to Auto Trading", desc: "How a trading robot works, the 6 strategy modes, risk controls, and how to start safely on demo.", mins: 9 },
  { slug: "how-to-set-up-stockity-robot", badge: "Guide", title: "How to Set Up Your Stockity Robot: Every Setting Explained", desc: "Mode choice, order size (1–5% rule), managed martingale math, daily stop loss & take profit — with beginner values.", mins: 8 },
  { slug: "stockity-vs-quotex", badge: "Review", title: "Stockity vs Quotex: An Honest Comparison", desc: "8 aspects compared: deposits, payouts, assets, payments, withdrawals, and automation support.", mins: 8 },
  { slug: "ai-trading-stockity", badge: "Education", title: "AI Trading on Stockity: How the Robot's AI Signals Work", desc: "Real-time ML analysis, AI vs manual, honest limitations, and the AI Signal mode step by step.", mins: 8 },
  { slug: "stockity-account-verification", badge: "Guide", title: "Stockity Account Verification (KYC): Pass It on the First Try", desc: "Documents, upload steps, review timing, and the rejection causes to avoid — required before withdrawals.", mins: 6 },
  { slug: "how-to-withdraw-from-stockity", badge: "Guide", title: "How to Withdraw from Stockity: Steps, Timing & Common Issues", desc: "Requirements, the payout flow, realistic timing, and fixes for pending or rejected withdrawals.", mins: 7 },
  { slug: "how-to-register-stockity", badge: "Guide", title: "How to Register on Stockity: From Sign-Up to First Trade", desc: "The sign-up flow, why demo comes first, and the safe first deposit most beginners skip.", mins: 6 },
  { slug: "is-stockity-legit", badge: "Review", title: "Is Stockity Legit? An Honest, Evidence-Based Review", desc: "What checks out (payouts, KYC, demo), what to verify yourself, and the risks nobody should hide.", mins: 8 },
  { slug: "stockity-minimum-deposit", badge: "Guide", title: "Stockity Minimum Deposit: The Real Numbers", desc: "The minimum vs a workable balance — with the math that separates them and safe buffer sizes.", mins: 6 },
  { slug: "stockity-martingale-strategy", badge: "Strategy", title: "Martingale on Stockity: The Math Before the Money", desc: "Step math, why 2–2.5× with max 3 steps is the baseline, and how to automate it with hard limits.", mins: 8 },
  { slug: "stockity-demo-account", badge: "Guide", title: "Stockity Demo Account: Practice Like It's Real", desc: "Free practice on real market data, a structured 7-day plan, and when you're ready to go live.", mins: 6 },
  { slug: "stockity-trading-hours", badge: "Strategy", title: "Best Trading Hours on Stockity: The Session Map", desc: "The London–NY overlap in GMT, which hours to avoid, and scheduling a bot around the clock.", mins: 7 },
  { slug: "stockity-robot-apk", badge: "Guide", title: "Stockity Robot APK: Download & Install It Right", desc: "Official source, safe install steps, why the bot runs with your phone off, and the web alternative.", mins: 6 },
  { slug: "how-to-deposit-stockity", badge: "Guide", title: "How to Deposit on Stockity: Methods, Steps & Timing", desc: "E-wallet, VA, and QRIS deposits step by step — plus the two mistakes behind most delays.", mins: 6 },
  { slug: "how-to-trade-on-stockity", badge: "Guide", title: "How to Trade on Stockity: The Beginner's Guide", desc: "The UP/DOWN mechanics, the trading screen, your first demo week, and the five rules that matter.", mins: 8 },
  { slug: "stockity-vs-binomo-vs-olymp-trade", badge: "Review", title: "Stockity vs Binomo vs Olymp Trade: An Honest Comparison", desc: "Payouts, demos, tournaments, apps, and the automation factor — with our bias disclosed up front.", mins: 8 },
];

const BADGE_STYLES: Record<string, string> = {
  Guide: "bg-[#dbeafe] text-[#1d4ed8]",
  Review: "bg-[#ffedd5] text-[#c2410c]",
  Education: "bg-[#fce7f3] text-[#be185d]",
};

const listSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "STC AutoTrade English Articles",
  itemListElement: ARTICLES.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${BASE_URL}/en/articles/${a.slug}`,
    name: a.title,
  })),
};

export default function EnArticlesIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      <div className="min-h-screen bg-[#f6f4ef]">
        <EnNav idHref="/artikel" />

        <header className="max-w-5xl mx-auto px-5 sm:px-8 pt-14 pb-10">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#047857] mb-4">Articles</p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5 max-w-3xl">
            Stockity Trading Guides in English
          </h1>
          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            Practical, no-hype guides for trading Stockity with (and without) automation. Looking for more?
            The <Link href="/artikel" className="text-[#047857] underline">Indonesian library</Link> has 40+ articles.
          </p>
        </header>

        <main className="max-w-5xl mx-auto px-5 sm:px-8 pb-24">
          <div className="grid sm:grid-cols-2 gap-4">
            {ARTICLES.map((a) => (
              <Link key={a.slug} href={`/en/articles/${a.slug}`} className="group block bg-white border border-[rgba(26,22,18,0.08)] rounded-2xl p-6 hover:border-[#10b981]/30 hover:shadow-sm transition-all no-underline">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`inline-flex items-center px-2.5 py-1 text-[11px] font-semibold rounded-full ${BADGE_STYLES[a.badge]}`}>{a.badge}</span>
                  <span className="text-[12px] text-[#1a1612]/65">~{a.mins} min read</span>
                </div>
                <h2 className="text-[16px] font-semibold text-[#1a1612] mb-2 leading-snug group-hover:text-[#047857] transition-colors">{a.title} →</h2>
                <p className="text-[13px] text-[#6b6058] leading-relaxed">{a.desc}</p>
              </Link>
            ))}
          </div>
        </main>

        <EnCta />
        <EnFooter />
      </div>
    </>
  );
}
