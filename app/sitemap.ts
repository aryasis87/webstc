import type { MetadataRoute } from "next";

const BASE_URL = "https://stcautotrade.id";
const LAST_MODIFIED = new Date("2026-07-04");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Halaman Utama (ID ↔ EN via anotasi hreflang) ─────────────
    {
      url: BASE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: { languages: { "id-ID": BASE_URL, en: `${BASE_URL}/en`, "x-default": BASE_URL } },
    },
    {
      url: `${BASE_URL}/download`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.95,
      alternates: { languages: { "id-ID": `${BASE_URL}/download`, en: `${BASE_URL}/en/download`, "x-default": `${BASE_URL}/download` } },
    },
    {
      url: `${BASE_URL}/cara-kerja`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { "id-ID": `${BASE_URL}/cara-kerja`, en: `${BASE_URL}/en/how-it-works`, "x-default": `${BASE_URL}/cara-kerja` } },
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: { languages: { "id-ID": `${BASE_URL}/faq`, en: `${BASE_URL}/en/faq`, "x-default": `${BASE_URL}/faq` } },
    },

    // ── Versi Bahasa Inggris ─────────────────────────────────────
    {
      url: `${BASE_URL}/en`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: { "id-ID": BASE_URL, en: `${BASE_URL}/en`, "x-default": BASE_URL } },
    },
    {
      url: `${BASE_URL}/en/download`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: { languages: { "id-ID": `${BASE_URL}/download`, en: `${BASE_URL}/en/download`, "x-default": `${BASE_URL}/download` } },
    },
    {
      url: `${BASE_URL}/en/how-it-works`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { "id-ID": `${BASE_URL}/cara-kerja`, en: `${BASE_URL}/en/how-it-works`, "x-default": `${BASE_URL}/cara-kerja` } },
    },
    {
      url: `${BASE_URL}/en/faq`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: { languages: { "id-ID": `${BASE_URL}/faq`, en: `${BASE_URL}/en/faq`, "x-default": `${BASE_URL}/faq` } },
    },

    // ── Indeks Artikel ────────────────────────────────────────────
    {
      url: `${BASE_URL}/artikel`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel`, en: `${BASE_URL}/en/articles`, "x-default": `${BASE_URL}/artikel` } },
    },

    // ── Kamus Istilah ─────────────────────────────────────────────
    {
      url: `${BASE_URL}/kamus-trading`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ── Artikel: High Priority ────────────────────────────────────
    {
      url: `${BASE_URL}/artikel/robot-trading-stockity`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/robot-trading-stockity`, en: `${BASE_URL}/en/articles/stockity-trading-robot`, "x-default": `${BASE_URL}/artikel/robot-trading-stockity` } },
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
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-setting-robot-stockity`, en: `${BASE_URL}/en/articles/how-to-set-up-stockity-robot`, "x-default": `${BASE_URL}/artikel/cara-setting-robot-stockity` } },
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
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-withdraw-stockity`, en: `${BASE_URL}/en/articles/how-to-withdraw-from-stockity`, "x-default": `${BASE_URL}/artikel/cara-withdraw-stockity` } },
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


    // ── Artikel Bahasa Inggris (Fase 2) ──────────────────────────
    {
      url: `${BASE_URL}/en/articles`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel`, en: `${BASE_URL}/en/articles`, "x-default": `${BASE_URL}/artikel` } },
    },
    {
      url: `${BASE_URL}/en/articles/stockity-trading-robot`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/robot-trading-stockity`, en: `${BASE_URL}/en/articles/stockity-trading-robot`, "x-default": `${BASE_URL}/artikel/robot-trading-stockity` } },
    },
    {
      url: `${BASE_URL}/en/articles/how-to-set-up-stockity-robot`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-setting-robot-stockity`, en: `${BASE_URL}/en/articles/how-to-set-up-stockity-robot`, "x-default": `${BASE_URL}/artikel/cara-setting-robot-stockity` } },
    },
    {
      url: `${BASE_URL}/en/articles/stockity-account-verification`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.72,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-verifikasi-akun-stockity`, en: `${BASE_URL}/en/articles/stockity-account-verification`, "x-default": `${BASE_URL}/artikel/cara-verifikasi-akun-stockity` } },
    },
    {
      url: `${BASE_URL}/en/articles/stockity-vs-quotex`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/stockity-vs-quotex`, en: `${BASE_URL}/en/articles/stockity-vs-quotex`, "x-default": `${BASE_URL}/artikel/stockity-vs-quotex` } },
    },
    {
      url: `${BASE_URL}/en/articles/ai-trading-stockity`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.72,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/ai-trading-stockity`, en: `${BASE_URL}/en/articles/ai-trading-stockity`, "x-default": `${BASE_URL}/artikel/ai-trading-stockity` } },
    },
    {
      url: `${BASE_URL}/en/articles/how-to-withdraw-from-stockity`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.72,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-withdraw-stockity`, en: `${BASE_URL}/en/articles/how-to-withdraw-from-stockity`, "x-default": `${BASE_URL}/artikel/cara-withdraw-stockity` } },
    },

    // ── Batch 10 Artikel — 4 Juli 2026 ───────────────────────────
    {
      url: `${BASE_URL}/artikel/stockity-vs-quotex`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.86,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/stockity-vs-quotex`, en: `${BASE_URL}/en/articles/stockity-vs-quotex`, "x-default": `${BASE_URL}/artikel/stockity-vs-quotex` } },
    },
    {
      url: `${BASE_URL}/artikel/bonus-deposit-stockity`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/artikel/turnamen-stockity`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${BASE_URL}/artikel/robot-trading-terbaik-indonesia`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/artikel/stc-autotrade-vs-trading-manual`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${BASE_URL}/artikel/manajemen-modal-trading-binary-option`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.83,
    },
    {
      url: `${BASE_URL}/artikel/psikologi-trading-binary-option`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.83,
    },
    {
      url: `${BASE_URL}/artikel/support-resistance-binary-option`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${BASE_URL}/artikel/kalender-ekonomi-binary-option`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${BASE_URL}/artikel/trading-otc-stockity-akhir-pekan`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.81,
    },

    // ── Artikel Baru — 4 Juli 2026 ────────────────────────────────
    {
      url: `${BASE_URL}/artikel/cara-verifikasi-akun-stockity`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.86,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-verifikasi-akun-stockity`, en: `${BASE_URL}/en/articles/stockity-account-verification`, "x-default": `${BASE_URL}/artikel/cara-verifikasi-akun-stockity` } },
    },
    {
      url: `${BASE_URL}/artikel/stockity-tidak-bisa-login`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    // ── Artikel Baru (Juli 2026) ──────────────────────────────────
    {
      url: `${BASE_URL}/artikel/cara-main-stockity-pemula`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/artikel/akun-demo-stockity`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${BASE_URL}/artikel/jam-trading-terbaik-stockity`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${BASE_URL}/artikel/ai-trading-stockity`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.86,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/ai-trading-stockity`, en: `${BASE_URL}/en/articles/ai-trading-stockity`, "x-default": `${BASE_URL}/artikel/ai-trading-stockity` } },
    },
  ];
}