import type { MetadataRoute } from "next";

const BASE_URL = "https://stcautotrade.id";
const LAST_MODIFIED = new Date("2026-06-07");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Halaman Utama ─────────────────────────────────────────────
    {
      url: BASE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/download`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/cara-kerja`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    // ── Indeks Artikel ────────────────────────────────────────────
    {
      url: `${BASE_URL}/artikel`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // ── Artikel: High Priority ────────────────────────────────────
    {
      url: `${BASE_URL}/artikel/robot-trading-stockity`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/artikel/auto-trade-stockity-gratis`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/artikel/cara-setting-robot-stockity`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.87,
    },
    {
      url: `${BASE_URL}/artikel/robot-stockity-android`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.86,
    },
    {
      url: `${BASE_URL}/artikel/cara-daftar-stockity`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/artikel/cara-profit-trading-stockity`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${BASE_URL}/artikel/modal-trading-stockity`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.83,
    },
    {
      url: `${BASE_URL}/artikel/stockity-aman-atau-penipuan`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${BASE_URL}/artikel/stockity-vs-binomo-vs-olymp-trade`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ── Artikel: Baru Ditambahkan Jun 2026 ───────────────────────
    {
      url: `${BASE_URL}/artikel/trading-binary-option-indonesia`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.87,
    },
    {
      url: `${BASE_URL}/artikel/cara-withdraw-stockity`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.86,
    },
    {
      url: `${BASE_URL}/artikel/strategi-martingale-stockity`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/artikel/sinyal-trading-stockity-gratis`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${BASE_URL}/artikel/robot-trading-ios-iphone`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.83,
    },

    // ── Artikel Baru — 7 Juni 2026 ───────────────────────────────
    {
      url: `${BASE_URL}/artikel/cara-deposit-stockity`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.87,
    },
    {
      url: `${BASE_URL}/artikel/copy-trading-stockity`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/artikel/minimal-deposit-stockity`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${BASE_URL}/artikel/robot-trading-pc-laptop`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.83,
    },
    {
      url: `${BASE_URL}/artikel/trading-binary-option-modal-kecil`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/artikel/indikator-trading-binary-option`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${BASE_URL}/artikel/cara-baca-candlestick-binary-option`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.83,
    },
    {
      url: `${BASE_URL}/artikel/aset-terbaik-trading-stockity`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${BASE_URL}/artikel/timeframe-trading-binary-option`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${BASE_URL}/artikel/cara-menghindari-loss-stockity`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.84,
    },
  ];
}