/**
 * app/en/articles/_lib/enArticleSeo.ts
 * SEO helper for English articles — mirrors artikel/_lib/artikelSeo.ts and
 * wires hreflang pairs to the Indonesian twin (x-default = ID, main market).
 */

import type { Metadata } from "next";

const BASE_URL = "https://stcautotrade.id";

export interface EnArticleFaq {
  q: string;
  a: string;
}

export interface EnArticleSeoDef {
  /** slug under /en/articles/ */
  slug: string;
  /** slug of the Indonesian twin under /artikel/ */
  idSlug: string;
  title: string;
  description: string;
  keywords: string[];
  breadcrumbName: string;
  datePublished: string;
  dateModified?: string;
  faq: EnArticleFaq[];
}

export function enUrl(def: EnArticleSeoDef) {
  return `${BASE_URL}/en/articles/${def.slug}`;
}
export function idUrl(def: EnArticleSeoDef) {
  return `${BASE_URL}/artikel/${def.idSlug}`;
}

export function buildEnMetadata(def: EnArticleSeoDef): Metadata {
  const url = enUrl(def);
  const twin = idUrl(def);
  const mod = def.dateModified ?? def.datePublished;
  return {
    title: def.title,
    description: def.description,
    keywords: def.keywords,
    alternates: {
      canonical: url,
      languages: { "id-ID": twin, en: url, "x-default": twin },
    },
    openGraph: {
      title: def.title,
      description: def.description,
      url,
      type: "article",
      locale: "en_US",
      publishedTime: `${def.datePublished}T00:00:00.000Z`,
      modifiedTime: `${mod}T00:00:00.000Z`,
      authors: ["STC AutoTrade"],
      images: [{ url: `${BASE_URL}/og-image.webp`, width: 1200, height: 630, alt: `${def.breadcrumbName} — STC AutoTrade` }],
    },
  };
}

export function buildEnSchemas(def: EnArticleSeoDef): object[] {
  const url = enUrl(def);
  const mod = def.dateModified ?? def.datePublished;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: def.title,
      description: def.description,
      inLanguage: "en",
      author: { "@type": "Organization", name: "STC AutoTrade", url: BASE_URL },
      publisher: { "@type": "Organization", name: "STC AutoTrade", logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.webp` } },
      datePublished: def.datePublished,
      dateModified: mod,
      image: `${BASE_URL}/og-image.webp`,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      keywords: def.keywords.slice(0, 6).join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: `${BASE_URL}/en` },
        { "@type": "ListItem", position: 2, name: "Articles", item: `${BASE_URL}/en/articles` },
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
