import type { MetadataRoute } from "next";

const BASE_URL = "https://stcautotrade.id";

/**
 * lastModified per halaman — Google hanya memakai lastmod sebagai petunjuk
 * crawl jika tanggalnya kredibel; tanggal seragam untuk semua URL diabaikan.
 * Artikel: samakan dengan dateModified ?? datePublished pada def artikelnya
 * (artikelSeo/enArticleSeo/ruArticleSeo) — saat merevisi artikel, perbarui
 * KEDUANYA. Perubahan chrome (nav/footer) tidak perlu menaikkan tanggal.
 */
const D = (isoDate: string) => new Date(isoDate);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Halaman Utama (ID ↔ EN via anotasi hreflang) ─────────────
    {
      url: BASE_URL,
      lastModified: D("2026-07-04"),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: { languages: { "id-ID": BASE_URL, en: `${BASE_URL}/en`, ru: `${BASE_URL}/ru`, "x-default": BASE_URL } },
    },
    {
      url: `${BASE_URL}/download`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.95,
      alternates: { languages: { "id-ID": `${BASE_URL}/download`, en: `${BASE_URL}/en/download`, ru: `${BASE_URL}/ru/download`, "x-default": `${BASE_URL}/download` } },
    },
    {
      url: `${BASE_URL}/cara-kerja`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { "id-ID": `${BASE_URL}/cara-kerja`, en: `${BASE_URL}/en/how-it-works`, ru: `${BASE_URL}/ru/how-it-works`, "x-default": `${BASE_URL}/cara-kerja` } },
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: { languages: { "id-ID": `${BASE_URL}/faq`, en: `${BASE_URL}/en/faq`, ru: `${BASE_URL}/ru/faq`, "x-default": `${BASE_URL}/faq` } },
    },

    // ── Versi Bahasa Inggris ─────────────────────────────────────
    {
      url: `${BASE_URL}/en`,
      lastModified: D("2026-07-04"),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: { "id-ID": BASE_URL, en: `${BASE_URL}/en`, ru: `${BASE_URL}/ru`, "x-default": BASE_URL } },
    },
    {
      url: `${BASE_URL}/en/download`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: { languages: { "id-ID": `${BASE_URL}/download`, en: `${BASE_URL}/en/download`, ru: `${BASE_URL}/ru/download`, "x-default": `${BASE_URL}/download` } },
    },
    {
      url: `${BASE_URL}/en/how-it-works`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { "id-ID": `${BASE_URL}/cara-kerja`, en: `${BASE_URL}/en/how-it-works`, ru: `${BASE_URL}/ru/how-it-works`, "x-default": `${BASE_URL}/cara-kerja` } },
    },
    {
      url: `${BASE_URL}/en/faq`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: { languages: { "id-ID": `${BASE_URL}/faq`, en: `${BASE_URL}/en/faq`, ru: `${BASE_URL}/ru/faq`, "x-default": `${BASE_URL}/faq` } },
    },


    // ── Versi Bahasa Rusia ───────────────────────────────────────
    {
      url: `${BASE_URL}/ru`,
      lastModified: D("2026-07-04"),
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: { languages: { "id-ID": BASE_URL, en: `${BASE_URL}/en`, ru: `${BASE_URL}/ru`, "x-default": BASE_URL } },
    },
    {
      url: `${BASE_URL}/ru/download`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { "id-ID": `${BASE_URL}/download`, en: `${BASE_URL}/en/download`, ru: `${BASE_URL}/ru/download`, "x-default": `${BASE_URL}/download` } },
    },
    {
      url: `${BASE_URL}/ru/how-it-works`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: { languages: { "id-ID": `${BASE_URL}/cara-kerja`, en: `${BASE_URL}/en/how-it-works`, ru: `${BASE_URL}/ru/how-it-works`, "x-default": `${BASE_URL}/cara-kerja` } },
    },
    {
      url: `${BASE_URL}/ru/faq`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: { "id-ID": `${BASE_URL}/faq`, en: `${BASE_URL}/en/faq`, ru: `${BASE_URL}/ru/faq`, "x-default": `${BASE_URL}/faq` } },
    },

    // ── Indeks Artikel ────────────────────────────────────────────
    {
      url: `${BASE_URL}/artikel`,
      lastModified: D("2026-07-04"),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel`, en: `${BASE_URL}/en/articles`, ru: `${BASE_URL}/ru/articles`, "x-default": `${BASE_URL}/artikel` } },
    },

    // ── Kamus Istilah ─────────────────────────────────────────────
    {
      url: `${BASE_URL}/kamus-trading`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ── Halaman Trust / Perusahaan (E-E-A-T; ID saja) ─────────────
    {
      url: `${BASE_URL}/tentang`,
      lastModified: D("2026-07-09"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/kontak`,
      lastModified: D("2026-07-09"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/kebijakan-privasi`,
      lastModified: D("2026-07-09"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/syarat-ketentuan`,
      lastModified: D("2026-07-09"),
      changeFrequency: "yearly",
      priority: 0.3,
    },

    // ── Tool / Kalkulator (linkable assets) ───────────────────────
    {
      url: `${BASE_URL}/kalkulator-martingale`,
      lastModified: D("2026-07-09"),
      changeFrequency: "yearly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/kalkulator-compounding`,
      lastModified: D("2026-07-09"),
      changeFrequency: "yearly",
      priority: 0.75,
    },

    // ── Artikel: High Priority ────────────────────────────────────
    {
      url: `${BASE_URL}/artikel/sinyal-schedule-harian-gratis`,
      lastModified: D("2026-08-01"),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/artikel/jasa-pembuatan-aplikasi-trading`,
      lastModified: D("2026-07-30"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/artikel/biaya-pembuatan-aplikasi`,
      lastModified: D("2026-07-30"),
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/artikel/sewa-aplikasi-trading`,
      lastModified: D("2026-07-30"),
      changeFrequency: "monthly",
      priority: 0.87,
    },
    {
      url: `${BASE_URL}/artikel/white-label-aplikasi-trading`,
      lastModified: D("2026-07-30"),
      changeFrequency: "monthly",
      priority: 0.86,
    },
    {
      url: `${BASE_URL}/artikel/jasa-pembuatan-bot-telegram`,
      lastModified: D("2026-07-30"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/artikel/cara-membuat-bot-trading-sendiri`,
      lastModified: D("2026-07-30"),
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${BASE_URL}/artikel/robot-trading-stockity`,
      lastModified: D("2026-05-21"),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/robot-trading-stockity`, en: `${BASE_URL}/en/articles/stockity-trading-robot`, ru: `${BASE_URL}/ru/articles/stockity-trading-robot`, "x-default": `${BASE_URL}/artikel/robot-trading-stockity` } },
    },
    {
      url: `${BASE_URL}/artikel/auto-trade-stockity-gratis`,
      lastModified: D("2026-05-21"),
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/artikel/cara-setting-robot-stockity`,
      lastModified: D("2026-05-21"),
      changeFrequency: "monthly",
      priority: 0.87,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-setting-robot-stockity`, en: `${BASE_URL}/en/articles/how-to-set-up-stockity-robot`, ru: `${BASE_URL}/ru/articles/how-to-set-up-stockity-robot`, "x-default": `${BASE_URL}/artikel/cara-setting-robot-stockity` } },
    },
    {
      url: `${BASE_URL}/artikel/robot-stockity-android`,
      lastModified: D("2026-05-21"),
      changeFrequency: "monthly",
      priority: 0.86,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/robot-stockity-android`, en: `${BASE_URL}/en/articles/stockity-robot-apk`, ru: `${BASE_URL}/ru/articles/stockity-robot-apk`, "x-default": `${BASE_URL}/artikel/robot-stockity-android` } },
    },
    {
      url: `${BASE_URL}/artikel/cara-daftar-stockity`,
      lastModified: D("2026-05-21"),
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-daftar-stockity`, en: `${BASE_URL}/en/articles/how-to-register-stockity`, ru: `${BASE_URL}/ru/articles/how-to-register-stockity`, "x-default": `${BASE_URL}/artikel/cara-daftar-stockity` } },
    },
    {
      url: `${BASE_URL}/artikel/cara-profit-trading-stockity`,
      lastModified: D("2026-05-21"),
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${BASE_URL}/artikel/modal-trading-stockity`,
      lastModified: D("2026-05-21"),
      changeFrequency: "monthly",
      priority: 0.83,
    },
    {
      url: `${BASE_URL}/artikel/stockity-aman-atau-penipuan`,
      lastModified: D("2026-05-21"),
      changeFrequency: "monthly",
      priority: 0.82,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/stockity-aman-atau-penipuan`, en: `${BASE_URL}/en/articles/is-stockity-legit`, ru: `${BASE_URL}/ru/articles/is-stockity-legit`, "x-default": `${BASE_URL}/artikel/stockity-aman-atau-penipuan` } },
    },
    {
      url: `${BASE_URL}/artikel/stockity-vs-binomo-vs-olymp-trade`,
      lastModified: D("2026-05-21"),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/stockity-vs-binomo-vs-olymp-trade`, en: `${BASE_URL}/en/articles/stockity-vs-binomo-vs-olymp-trade`, ru: `${BASE_URL}/ru/articles/stockity-vs-binomo-vs-olymp-trade`, "x-default": `${BASE_URL}/artikel/stockity-vs-binomo-vs-olymp-trade` } },
    },

    // ── Artikel: Baru Ditambahkan Jun 2026 ───────────────────────
    {
      url: `${BASE_URL}/artikel/trading-binary-option-indonesia`,
      lastModified: D("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.87,
    },
    {
      url: `${BASE_URL}/artikel/cara-withdraw-stockity`,
      lastModified: D("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.86,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-withdraw-stockity`, en: `${BASE_URL}/en/articles/how-to-withdraw-from-stockity`, ru: `${BASE_URL}/ru/articles/how-to-withdraw-from-stockity`, "x-default": `${BASE_URL}/artikel/cara-withdraw-stockity` } },
    },
    {
      url: `${BASE_URL}/artikel/strategi-martingale-stockity`,
      lastModified: D("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/strategi-martingale-stockity`, en: `${BASE_URL}/en/articles/stockity-martingale-strategy`, ru: `${BASE_URL}/ru/articles/stockity-martingale-strategy`, "x-default": `${BASE_URL}/artikel/strategi-martingale-stockity` } },
    },
    {
      url: `${BASE_URL}/artikel/sinyal-trading-stockity-gratis`,
      lastModified: D("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${BASE_URL}/artikel/robot-trading-ios-iphone`,
      lastModified: D("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.83,
    },

    // ── Artikel Baru — 7 Juni 2026 ───────────────────────────────
    {
      url: `${BASE_URL}/artikel/cara-deposit-stockity`,
      lastModified: D("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.87,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-deposit-stockity`, en: `${BASE_URL}/en/articles/how-to-deposit-stockity`, ru: `${BASE_URL}/ru/articles/how-to-deposit-stockity`, "x-default": `${BASE_URL}/artikel/cara-deposit-stockity` } },
    },
    {
      url: `${BASE_URL}/artikel/copy-trading-stockity`,
      lastModified: D("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/artikel/minimal-deposit-stockity`,
      lastModified: D("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.84,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/minimal-deposit-stockity`, en: `${BASE_URL}/en/articles/stockity-minimum-deposit`, ru: `${BASE_URL}/ru/articles/stockity-minimum-deposit`, "x-default": `${BASE_URL}/artikel/minimal-deposit-stockity` } },
    },
    {
      url: `${BASE_URL}/artikel/robot-trading-pc-laptop`,
      lastModified: D("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.83,
    },
    {
      url: `${BASE_URL}/artikel/trading-binary-option-modal-kecil`,
      lastModified: D("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/artikel/indikator-trading-binary-option`,
      lastModified: D("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${BASE_URL}/artikel/cara-baca-candlestick-binary-option`,
      lastModified: D("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.83,
    },
    {
      url: `${BASE_URL}/artikel/aset-terbaik-trading-stockity`,
      lastModified: D("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${BASE_URL}/artikel/timeframe-trading-binary-option`,
      lastModified: D("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${BASE_URL}/artikel/cara-menghindari-loss-stockity`,
      lastModified: D("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.84,
    },



    // ── Artikel Bahasa Rusia ─────────────────────────────────────
    {
      url: `${BASE_URL}/ru/articles`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.72,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel`, en: `${BASE_URL}/en/articles`, ru: `${BASE_URL}/ru/articles`, "x-default": `${BASE_URL}/artikel` } },
    },
    {
      url: `${BASE_URL}/ru/articles/stockity-trading-robot`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.72,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/robot-trading-stockity`, en: `${BASE_URL}/en/articles/stockity-trading-robot`, ru: `${BASE_URL}/ru/articles/stockity-trading-robot`, "x-default": `${BASE_URL}/artikel/robot-trading-stockity` } },
    },
    {
      url: `${BASE_URL}/ru/articles/how-to-set-up-stockity-robot`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.68,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-setting-robot-stockity`, en: `${BASE_URL}/en/articles/how-to-set-up-stockity-robot`, ru: `${BASE_URL}/ru/articles/how-to-set-up-stockity-robot`, "x-default": `${BASE_URL}/artikel/cara-setting-robot-stockity` } },
    },
    {
      url: `${BASE_URL}/ru/articles/stockity-account-verification`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.65,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-verifikasi-akun-stockity`, en: `${BASE_URL}/en/articles/stockity-account-verification`, ru: `${BASE_URL}/ru/articles/stockity-account-verification`, "x-default": `${BASE_URL}/artikel/cara-verifikasi-akun-stockity` } },
    },
    {
      url: `${BASE_URL}/ru/articles/stockity-vs-quotex`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.68,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/stockity-vs-quotex`, en: `${BASE_URL}/en/articles/stockity-vs-quotex`, ru: `${BASE_URL}/ru/articles/stockity-vs-quotex`, "x-default": `${BASE_URL}/artikel/stockity-vs-quotex` } },
    },
    {
      url: `${BASE_URL}/ru/articles/ai-trading-stockity`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.65,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/ai-trading-stockity`, en: `${BASE_URL}/en/articles/ai-trading-stockity`, ru: `${BASE_URL}/ru/articles/ai-trading-stockity`, "x-default": `${BASE_URL}/artikel/ai-trading-stockity` } },
    },
    {
      url: `${BASE_URL}/ru/articles/how-to-withdraw-from-stockity`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.65,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-withdraw-stockity`, en: `${BASE_URL}/en/articles/how-to-withdraw-from-stockity`, ru: `${BASE_URL}/ru/articles/how-to-withdraw-from-stockity`, "x-default": `${BASE_URL}/artikel/cara-withdraw-stockity` } },
    },

    // ── Artikel Bahasa Inggris (Fase 2) ──────────────────────────
    {
      url: `${BASE_URL}/en/articles`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel`, en: `${BASE_URL}/en/articles`, ru: `${BASE_URL}/ru/articles`, "x-default": `${BASE_URL}/artikel` } },
    },
    {
      url: `${BASE_URL}/en/articles/stockity-trading-robot`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/robot-trading-stockity`, en: `${BASE_URL}/en/articles/stockity-trading-robot`, ru: `${BASE_URL}/ru/articles/stockity-trading-robot`, "x-default": `${BASE_URL}/artikel/robot-trading-stockity` } },
    },
    {
      url: `${BASE_URL}/en/articles/best-stockity-trading-bot`,
      lastModified: D("2026-08-08"),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/bot-trading-stockity-terbaik`, en: `${BASE_URL}/en/articles/best-stockity-trading-bot`, "x-default": `${BASE_URL}/artikel/bot-trading-stockity-terbaik` } },
    },
    {
      url: `${BASE_URL}/en/articles/how-to-set-up-stockity-robot`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-setting-robot-stockity`, en: `${BASE_URL}/en/articles/how-to-set-up-stockity-robot`, ru: `${BASE_URL}/ru/articles/how-to-set-up-stockity-robot`, "x-default": `${BASE_URL}/artikel/cara-setting-robot-stockity` } },
    },
    {
      url: `${BASE_URL}/en/articles/stockity-account-verification`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.72,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-verifikasi-akun-stockity`, en: `${BASE_URL}/en/articles/stockity-account-verification`, ru: `${BASE_URL}/ru/articles/stockity-account-verification`, "x-default": `${BASE_URL}/artikel/cara-verifikasi-akun-stockity` } },
    },
    {
      url: `${BASE_URL}/en/articles/stockity-vs-quotex`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/stockity-vs-quotex`, en: `${BASE_URL}/en/articles/stockity-vs-quotex`, ru: `${BASE_URL}/ru/articles/stockity-vs-quotex`, "x-default": `${BASE_URL}/artikel/stockity-vs-quotex` } },
    },
    {
      url: `${BASE_URL}/en/articles/ai-trading-stockity`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.72,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/ai-trading-stockity`, en: `${BASE_URL}/en/articles/ai-trading-stockity`, ru: `${BASE_URL}/ru/articles/ai-trading-stockity`, "x-default": `${BASE_URL}/artikel/ai-trading-stockity` } },
    },
    {
      url: `${BASE_URL}/en/articles/how-to-withdraw-from-stockity`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.72,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-withdraw-stockity`, en: `${BASE_URL}/en/articles/how-to-withdraw-from-stockity`, ru: `${BASE_URL}/ru/articles/how-to-withdraw-from-stockity`, "x-default": `${BASE_URL}/artikel/cara-withdraw-stockity` } },
    },

    // ── Twin EN/RU Baru — 9 Juli 2026 ────────────────────────────
    {
      url: `${BASE_URL}/en/articles/how-to-register-stockity`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-daftar-stockity`, en: `${BASE_URL}/en/articles/how-to-register-stockity`, ru: `${BASE_URL}/ru/articles/how-to-register-stockity`, "x-default": `${BASE_URL}/artikel/cara-daftar-stockity` } },
    },
    {
      url: `${BASE_URL}/en/articles/is-stockity-legit`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/stockity-aman-atau-penipuan`, en: `${BASE_URL}/en/articles/is-stockity-legit`, ru: `${BASE_URL}/ru/articles/is-stockity-legit`, "x-default": `${BASE_URL}/artikel/stockity-aman-atau-penipuan` } },
    },
    {
      url: `${BASE_URL}/ru/articles/how-to-register-stockity`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.68,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-daftar-stockity`, en: `${BASE_URL}/en/articles/how-to-register-stockity`, ru: `${BASE_URL}/ru/articles/how-to-register-stockity`, "x-default": `${BASE_URL}/artikel/cara-daftar-stockity` } },
    },
    {
      url: `${BASE_URL}/ru/articles/is-stockity-legit`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.68,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/stockity-aman-atau-penipuan`, en: `${BASE_URL}/en/articles/is-stockity-legit`, ru: `${BASE_URL}/ru/articles/is-stockity-legit`, "x-default": `${BASE_URL}/artikel/stockity-aman-atau-penipuan` } },
    },

    // ── Twin EN/RU Batch 2 — 9 Juli 2026 ─────────────────────────
    {
      url: `${BASE_URL}/en/articles/stockity-minimum-deposit`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.73,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/minimal-deposit-stockity`, en: `${BASE_URL}/en/articles/stockity-minimum-deposit`, ru: `${BASE_URL}/ru/articles/stockity-minimum-deposit`, "x-default": `${BASE_URL}/artikel/minimal-deposit-stockity` } },
    },
    {
      url: `${BASE_URL}/en/articles/stockity-martingale-strategy`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.74,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/strategi-martingale-stockity`, en: `${BASE_URL}/en/articles/stockity-martingale-strategy`, ru: `${BASE_URL}/ru/articles/stockity-martingale-strategy`, "x-default": `${BASE_URL}/artikel/strategi-martingale-stockity` } },
    },
    {
      url: `${BASE_URL}/en/articles/stockity-demo-account`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.73,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/akun-demo-stockity`, en: `${BASE_URL}/en/articles/stockity-demo-account`, ru: `${BASE_URL}/ru/articles/stockity-demo-account`, "x-default": `${BASE_URL}/artikel/akun-demo-stockity` } },
    },
    {
      url: `${BASE_URL}/ru/articles/stockity-minimum-deposit`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.66,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/minimal-deposit-stockity`, en: `${BASE_URL}/en/articles/stockity-minimum-deposit`, ru: `${BASE_URL}/ru/articles/stockity-minimum-deposit`, "x-default": `${BASE_URL}/artikel/minimal-deposit-stockity` } },
    },
    {
      url: `${BASE_URL}/ru/articles/stockity-martingale-strategy`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.67,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/strategi-martingale-stockity`, en: `${BASE_URL}/en/articles/stockity-martingale-strategy`, ru: `${BASE_URL}/ru/articles/stockity-martingale-strategy`, "x-default": `${BASE_URL}/artikel/strategi-martingale-stockity` } },
    },
    {
      url: `${BASE_URL}/ru/articles/stockity-demo-account`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.66,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/akun-demo-stockity`, en: `${BASE_URL}/en/articles/stockity-demo-account`, ru: `${BASE_URL}/ru/articles/stockity-demo-account`, "x-default": `${BASE_URL}/artikel/akun-demo-stockity` } },
    },

    // ── Twin EN/RU Batch 3 — 9 Juli 2026 ─────────────────────────
    {
      url: `${BASE_URL}/en/articles/stockity-trading-hours`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.73,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/jam-trading-terbaik-stockity`, en: `${BASE_URL}/en/articles/stockity-trading-hours`, ru: `${BASE_URL}/ru/articles/stockity-trading-hours`, "x-default": `${BASE_URL}/artikel/jam-trading-terbaik-stockity` } },
    },
    {
      url: `${BASE_URL}/en/articles/stockity-robot-apk`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/robot-stockity-android`, en: `${BASE_URL}/en/articles/stockity-robot-apk`, ru: `${BASE_URL}/ru/articles/stockity-robot-apk`, "x-default": `${BASE_URL}/artikel/robot-stockity-android` } },
    },
    {
      url: `${BASE_URL}/ru/articles/stockity-trading-hours`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.66,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/jam-trading-terbaik-stockity`, en: `${BASE_URL}/en/articles/stockity-trading-hours`, ru: `${BASE_URL}/ru/articles/stockity-trading-hours`, "x-default": `${BASE_URL}/artikel/jam-trading-terbaik-stockity` } },
    },
    {
      url: `${BASE_URL}/ru/articles/stockity-robot-apk`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.68,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/robot-stockity-android`, en: `${BASE_URL}/en/articles/stockity-robot-apk`, ru: `${BASE_URL}/ru/articles/stockity-robot-apk`, "x-default": `${BASE_URL}/artikel/robot-stockity-android` } },
    },

    // ── Twin EN/RU Batch 4 (final) — 9 Juli 2026 ─────────────────
    {
      url: `${BASE_URL}/en/articles/how-to-deposit-stockity`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.74,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-deposit-stockity`, en: `${BASE_URL}/en/articles/how-to-deposit-stockity`, ru: `${BASE_URL}/ru/articles/how-to-deposit-stockity`, "x-default": `${BASE_URL}/artikel/cara-deposit-stockity` } },
    },
    {
      url: `${BASE_URL}/en/articles/how-to-trade-on-stockity`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.76,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-main-stockity-pemula`, en: `${BASE_URL}/en/articles/how-to-trade-on-stockity`, ru: `${BASE_URL}/ru/articles/how-to-trade-on-stockity`, "x-default": `${BASE_URL}/artikel/cara-main-stockity-pemula` } },
    },
    {
      url: `${BASE_URL}/en/articles/stockity-vs-binomo-vs-olymp-trade`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.74,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/stockity-vs-binomo-vs-olymp-trade`, en: `${BASE_URL}/en/articles/stockity-vs-binomo-vs-olymp-trade`, ru: `${BASE_URL}/ru/articles/stockity-vs-binomo-vs-olymp-trade`, "x-default": `${BASE_URL}/artikel/stockity-vs-binomo-vs-olymp-trade` } },
    },
    {
      url: `${BASE_URL}/ru/articles/how-to-deposit-stockity`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.67,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-deposit-stockity`, en: `${BASE_URL}/en/articles/how-to-deposit-stockity`, ru: `${BASE_URL}/ru/articles/how-to-deposit-stockity`, "x-default": `${BASE_URL}/artikel/cara-deposit-stockity` } },
    },
    {
      url: `${BASE_URL}/ru/articles/how-to-trade-on-stockity`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.68,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-main-stockity-pemula`, en: `${BASE_URL}/en/articles/how-to-trade-on-stockity`, ru: `${BASE_URL}/ru/articles/how-to-trade-on-stockity`, "x-default": `${BASE_URL}/artikel/cara-main-stockity-pemula` } },
    },
    {
      url: `${BASE_URL}/ru/articles/stockity-vs-binomo-vs-olymp-trade`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.67,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/stockity-vs-binomo-vs-olymp-trade`, en: `${BASE_URL}/en/articles/stockity-vs-binomo-vs-olymp-trade`, ru: `${BASE_URL}/ru/articles/stockity-vs-binomo-vs-olymp-trade`, "x-default": `${BASE_URL}/artikel/stockity-vs-binomo-vs-olymp-trade` } },
    },

    // ── Batch 10 Artikel — 4 Juli 2026 ───────────────────────────
    {
      url: `${BASE_URL}/artikel/stockity-vs-quotex`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.86,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/stockity-vs-quotex`, en: `${BASE_URL}/en/articles/stockity-vs-quotex`, ru: `${BASE_URL}/ru/articles/stockity-vs-quotex`, "x-default": `${BASE_URL}/artikel/stockity-vs-quotex` } },
    },
    {
      url: `${BASE_URL}/artikel/bonus-deposit-stockity`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/artikel/turnamen-stockity`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${BASE_URL}/artikel/robot-trading-terbaik-indonesia`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/artikel/stc-autotrade-vs-trading-manual`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${BASE_URL}/artikel/bot-trading-stockity-terbaik`,
      lastModified: D("2026-08-08"),
      changeFrequency: "monthly",
      priority: 0.86,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/bot-trading-stockity-terbaik`, en: `${BASE_URL}/en/articles/best-stockity-trading-bot`, "x-default": `${BASE_URL}/artikel/bot-trading-stockity-terbaik` } },
    },
    {
      url: `${BASE_URL}/artikel/manajemen-modal-trading-binary-option`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.83,
    },
    {
      url: `${BASE_URL}/artikel/psikologi-trading-binary-option`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.83,
    },
    {
      url: `${BASE_URL}/artikel/support-resistance-binary-option`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${BASE_URL}/artikel/kalender-ekonomi-binary-option`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${BASE_URL}/artikel/trading-otc-stockity-akhir-pekan`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.81,
    },

    // ── Artikel Baru — 4 Juli 2026 ────────────────────────────────
    {
      url: `${BASE_URL}/artikel/cara-verifikasi-akun-stockity`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.86,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-verifikasi-akun-stockity`, en: `${BASE_URL}/en/articles/stockity-account-verification`, ru: `${BASE_URL}/ru/articles/stockity-account-verification`, "x-default": `${BASE_URL}/artikel/cara-verifikasi-akun-stockity` } },
    },
    {
      url: `${BASE_URL}/artikel/stockity-tidak-bisa-login`,
      lastModified: D("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.85,
    },

    // ── Batch 6 Artikel — 9 Juli 2026 ─────────────────────────────
    {
      url: `${BASE_URL}/artikel/pajak-trading-binary-option`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/artikel/berapa-penghasilan-trading-binary-option`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/artikel/withdraw-stockity-pending`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${BASE_URL}/artikel/deposit-stockity-tidak-masuk`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.83,
    },
    {
      url: `${BASE_URL}/artikel/trading-gold-stockity`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.83,
    },
    {
      url: `${BASE_URL}/artikel/trading-bitcoin-stockity`,
      lastModified: D("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.83,
    },

    // ── Artikel Baru (Juli 2026) ──────────────────────────────────
    {
      url: `${BASE_URL}/artikel/cara-main-stockity-pemula`,
      lastModified: D("2026-07-03"),
      changeFrequency: "monthly",
      priority: 0.88,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/cara-main-stockity-pemula`, en: `${BASE_URL}/en/articles/how-to-trade-on-stockity`, ru: `${BASE_URL}/ru/articles/how-to-trade-on-stockity`, "x-default": `${BASE_URL}/artikel/cara-main-stockity-pemula` } },
    },
    {
      url: `${BASE_URL}/artikel/akun-demo-stockity`,
      lastModified: D("2026-07-03"),
      changeFrequency: "monthly",
      priority: 0.84,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/akun-demo-stockity`, en: `${BASE_URL}/en/articles/stockity-demo-account`, ru: `${BASE_URL}/ru/articles/stockity-demo-account`, "x-default": `${BASE_URL}/artikel/akun-demo-stockity` } },
    },
    {
      url: `${BASE_URL}/artikel/jam-trading-terbaik-stockity`,
      lastModified: D("2026-07-03"),
      changeFrequency: "monthly",
      priority: 0.84,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/jam-trading-terbaik-stockity`, en: `${BASE_URL}/en/articles/stockity-trading-hours`, ru: `${BASE_URL}/ru/articles/stockity-trading-hours`, "x-default": `${BASE_URL}/artikel/jam-trading-terbaik-stockity` } },
    },
    {
      url: `${BASE_URL}/artikel/ai-trading-stockity`,
      lastModified: D("2026-07-03"),
      changeFrequency: "monthly",
      priority: 0.86,
      alternates: { languages: { "id-ID": `${BASE_URL}/artikel/ai-trading-stockity`, en: `${BASE_URL}/en/articles/ai-trading-stockity`, ru: `${BASE_URL}/ru/articles/ai-trading-stockity`, "x-default": `${BASE_URL}/artikel/ai-trading-stockity` } },
    },
  ];
}