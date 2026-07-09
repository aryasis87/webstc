/**
 * app/ru/articles/_lib/ruArticleSeo.ts
 * SEO-хелпер русских статей. Слаги статей RU совпадают со слагами EN
 * (/ru/articles/<slug> ↔ /en/articles/<slug>); idSlug указывает на
 * индонезийского близнеца. hreflang всегда 4 записи: id-ID, en, ru,
 * x-default = ID (основной рынок).
 */

import type { Metadata } from "next";
import { ogImageUrl } from "@/app/artikel/_lib/artikelSeo";

const BASE_URL = "https://stcautotrade.id";

export interface RuArticleFaq {
  q: string;
  a: string;
}

export interface RuArticleSeoDef {
  /** slug под /ru/articles/ — совпадает со слагом EN-близнеца */
  slug: string;
  /** slug индонезийского близнеца под /artikel/ */
  idSlug: string;
  title: string;
  description: string;
  keywords: string[];
  breadcrumbName: string;
  datePublished: string;
  dateModified?: string;
  faq: RuArticleFaq[];
}

export function ruLangs(def: RuArticleSeoDef) {
  return {
    "id-ID": `${BASE_URL}/artikel/${def.idSlug}`,
    en: `${BASE_URL}/en/articles/${def.slug}`,
    ru: `${BASE_URL}/ru/articles/${def.slug}`,
    "x-default": `${BASE_URL}/artikel/${def.idSlug}`,
  };
}

export function buildRuMetadata(def: RuArticleSeoDef): Metadata {
  const url = `${BASE_URL}/ru/articles/${def.slug}`;
  const mod = def.dateModified ?? def.datePublished;
  return {
    title: def.title,
    description: def.description,
    keywords: def.keywords,
    alternates: { canonical: url, languages: ruLangs(def) },
    openGraph: {
      title: def.title,
      description: def.description,
      url,
      type: "article",
      locale: "ru_RU",
      publishedTime: `${def.datePublished}T00:00:00.000Z`,
      modifiedTime: `${mod}T00:00:00.000Z`,
      authors: ["STC AutoTrade"],
      images: [{ url: ogImageUrl(def.title, "ru"), width: 1200, height: 630, alt: `${def.breadcrumbName} — STC AutoTrade` }],
    },
    twitter: { card: "summary_large_image" },
  };
}

export function buildRuSchemas(def: RuArticleSeoDef): object[] {
  const url = `${BASE_URL}/ru/articles/${def.slug}`;
  const mod = def.dateModified ?? def.datePublished;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: def.title,
      description: def.description,
      inLanguage: "ru",
      author: { "@type": "Organization", name: "STC AutoTrade", url: BASE_URL },
      publisher: { "@type": "Organization", name: "STC AutoTrade", logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.webp` } },
      datePublished: def.datePublished,
      dateModified: mod,
      image: ogImageUrl(def.title, "ru"),
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      keywords: def.keywords.slice(0, 6).join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: `${BASE_URL}/ru` },
        { "@type": "ListItem", position: 2, name: "Статьи", item: `${BASE_URL}/ru/articles` },
        { "@type": "ListItem", position: 3, name: def.breadcrumbName, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: def.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
}
