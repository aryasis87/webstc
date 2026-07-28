/**
 * app/en/download/page.tsx — English twin of /download
 * Primary: stockity bot download, stockity robot apk
 */

import type { Metadata } from "next";
import Link from "next/link";
import { EnNav, EnCta, EnFooter, EnSectionLabel } from "../_components/EnChrome";

const BASE_URL = "https://stcautotrade.id";

export const metadata: Metadata = {
  title: "Download STC AutoTrade — Stockity Bot APK & Web Version",
  description:
    "Download the free STC AutoTrade APK for Android or use the web version on iPhone, PC, and Mac. Installation guide, system requirements, and first-run setup for your Stockity trading bot.",
  keywords: [
    "stockity bot download",
    "stockity robot apk",
    "stc autotrade download",
    "stockity auto trading app",
    "download trading bot android",
  ],
  alternates: {
    canonical: `${BASE_URL}/en/download`,
    languages: {
      "id-ID": `${BASE_URL}/download`,
      en: `${BASE_URL}/en/download`,
      ru: `${BASE_URL}/ru/download`,
      "x-default": `${BASE_URL}/download`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${BASE_URL}/en/download`,
    siteName: "STC AutoTrade",
    title: "Download STC AutoTrade — Stockity Bot APK & Web Version",
    description: "Free APK for Android + web version for every other device. Guide included.",
    images: [{ url: `${BASE_URL}/og-image.webp`, width: 1200, height: 630, alt: "Download STC AutoTrade" }],
  },
  twitter: { card: "summary_large_image" },
};

/** @id #app — merges with the global SoftwareApplication entity (layout.tsx) */
const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${BASE_URL}/#app`,
  name: "STC AutoTrade",
  operatingSystem: "Android 8.0+, Web Browser (all platforms)",
  applicationCategory: "FinanceApplication",
  downloadUrl: `${BASE_URL}/StcAutoTrade.apk`,
  inLanguage: ["id", "en"],
  offers: { "@type": "Offer", price: "0", priceCurrency: "IDR", availability: "https://schema.org/InStock" },
};

export default function EnDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <div className="min-h-screen bg-[#f6f4ef]">
        <EnNav idHref="/download" />

        <header className="max-w-5xl mx-auto px-5 sm:px-8 pt-14 pb-10">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#047857] mb-4">Download</p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5 max-w-3xl">
            Get STC AutoTrade on Any Device
          </h1>
          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            One account, two ways to run it: the <strong className="font-semibold text-[#1a1612]">Android APK</strong>{" "}
            or the <strong className="font-semibold text-[#1a1612]">web version</strong> for iPhone, iPad,
            Windows, macOS, and Linux. Both are free for registered members.
          </p>
          <div className="flex flex-wrap gap-3 mt-7">
            <a href="/StcAutoTrade.apk" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1612] text-white text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all no-underline">⬇ Download APK (Android)</a>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-5 sm:px-8 pb-24 space-y-16">
          {/* Requirements */}
          <section>
            <EnSectionLabel>01 · Requirements</EnSectionLabel>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
              What You Need
            </h2>
            <div className="grid sm:grid-cols-3 gap-4 max-w-4xl">
              {[
                { icon: "👤", title: "A Stockity account", desc: "The bot trades on your own Stockity account. Registration is free — verify your identity early so withdrawals are never delayed." },
                { icon: "🤳", title: "Android 8.0+ (for APK)", desc: "Any reasonably modern Android phone. Allow installation from your browser when prompted — the APK is distributed directly by us." },
                { icon: "🌐", title: "Any browser (for web)", desc: "Chrome, Safari, Firefox, or Edge on any OS. No installation, always the latest version." },
              ].map((r) => (
                <div key={r.title} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                  <div className="text-xl mb-2">{r.icon}</div>
                  <h3 className="text-[13px] font-semibold text-[#1a1612] mb-2">{r.title}</h3>
                  <p className="text-[12.5px] text-[#6b6058] leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Install steps */}
          <section>
            <EnSectionLabel>02 · Installation</EnSectionLabel>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
              Install &amp; First Run in 5 Steps
            </h2>
            <div className="space-y-3 max-w-2xl">
              {[
                { title: "Download the APK (or open the web app)", desc: "Android: tap the download button above. Other devices: open stcautotradepro.id — skip to step 4." },
                { title: "Allow the installation", desc: "Android will ask permission to install apps from your browser. Approve it — this prompt is standard for any APK distributed outside the Play Store." },
                { title: "Install and open STC AutoTrade", desc: "Installation takes seconds. Open the app when it finishes." },
                { title: "Log in with your Stockity account", desc: "Use the same email and password as your Stockity login. If you registered on Stockity via Google/Facebook, set an account password there first." },
                { title: "Start on the demo account", desc: "Pick a strategy mode, set your order size and risk limits, and run your first session on demo. Move to the real account only after you're satisfied with the results." },
              ].map((s, i) => (
                <div key={i} className="flex gap-4 bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-5 py-4">
                  <div className="w-8 h-8 min-w-[32px] rounded-full border border-[rgba(26,22,18,0.12)] bg-[#f0fdf4] flex items-center justify-center text-[12px] font-bold text-[#0f766e]">{i + 1}</div>
                  <div className="pt-0.5">
                    <h3 className="text-[13px] font-semibold text-[#1a1612] mb-1">{s.title}</h3>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* APK vs Web */}
          <section>
            <EnSectionLabel>03 · APK vs Web</EnSectionLabel>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
              Which One Should You Use?
            </h2>
            <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl overflow-hidden max-w-3xl">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-[#f6f4ef] border-b border-[rgba(26,22,18,0.07)]">
                    <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Aspect</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Android APK</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Web Version</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Devices", "Android only", "Everything with a browser"],
                    ["Installation", "One-time APK install", "None"],
                    ["Updates", "Built-in update prompt", "Always latest automatically"],
                    ["Features", "Full", "Full"],
                    ["Sessions", "Run on server either way — device can go offline", "Same"],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[rgba(26,22,18,0.05)] last:border-0">
                      <td className="px-4 py-3 font-medium text-[#1a1612]">{row[0]}</td>
                      <td className="px-4 py-3 text-[#6b6058]">{row[1]}</td>
                      <td className="px-4 py-3 text-[#6b6058]">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[13px] text-[#6b6058] mt-4 max-w-3xl">
              Not sure? Start with the web version — zero commitment — then install the APK if Android is
              your daily device. Full details on strategy modes are on the{" "}
              <Link href="/en/how-it-works" className="text-[#047857] underline">how it works</Link> page.
            </p>
          </section>
        </main>

        <EnCta eyebrow="Ready?" title="Download Now and Test Everything on Demo First" desc="No cost, no card, no risk — your first sessions should always run on the demo account." />
        <EnFooter />
      </div>
    </>
  );
}
