import type { MetadataRoute } from "next";

const BASE_URL = "https://stcautotrade.id";

/**
 * Crawler mesin-jawaban & AI generatif yang SECARA EKSPLISIT dipersilakan
 * meng-crawl dan mengutip situs (GEO — Generative Engine Optimization).
 * Membiarkan mereka masuk = konten STC AutoTrade bisa muncul & dikutip akurat
 * di jawaban ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, dsb.
 * Peta ringkas untuk mereka: /llms.txt dan /llms-full.txt.
 */
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "GoogleOther",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "Bytespider",
  "CCBot",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "cohere-ai",
  "Diffbot",
  "YouBot",
  "DuckAssistBot",
  "Timpibot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      // Persilakan semua AI/answer-engine crawler (kecuali endpoint /api/).
      ...AI_BOTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
