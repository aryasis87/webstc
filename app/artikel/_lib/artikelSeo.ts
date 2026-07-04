/**
 * app/artikel/_lib/artikelSeo.ts
 *
 * Helper SEO bersama untuk halaman artikel — membangun Metadata Next.js
 * dan JSON-LD (Article + BreadcrumbList + FAQPage) dari satu definisi,
 * sehingga setiap artikel dijamin punya canonical + schema lengkap tanpa
 * boilerplate manual. Folder _lib tidak menjadi route (konvensi App Router).
 */

import type { Metadata } from "next";

const BASE_URL = "https://stcautotrade.id";

export interface ArtikelFaq {
  q: string;
  a: string;
}

export interface ArtikelSeoDef {
  slug: string;
  /** Title tag lengkap (tanpa suffix template) */
  title: string;
  description: string;
  keywords: string[];
  /** Nama pendek untuk breadcrumb (≤ 40 char) */
  breadcrumbName: string;
  /** ISO date yyyy-mm-dd */
  datePublished: string;
  dateModified?: string;
  faq: ArtikelFaq[];
}

export function buildMetadata(def: ArtikelSeoDef): Metadata {
  const url = `${BASE_URL}/artikel/${def.slug}`;
  const mod = def.dateModified ?? def.datePublished;
  return {
    title: def.title,
    description: def.description,
    keywords: def.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: def.title,
      description: def.description,
      url,
      type: "article",
      publishedTime: `${def.datePublished}T00:00:00.000Z`,
      modifiedTime: `${mod}T00:00:00.000Z`,
      authors: ["STC AutoTrade"],
      images: [{ url: `${BASE_URL}/og-image.webp`, width: 1200, height: 630, alt: `${def.breadcrumbName} — STC AutoTrade` }],
    },
  };
}

/** Mengembalikan array object schema — render dengan satu .map() di page */
export function buildSchemas(def: ArtikelSeoDef): object[] {
  const url = `${BASE_URL}/artikel/${def.slug}`;
  const mod = def.dateModified ?? def.datePublished;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: def.title,
      description: def.description,
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
        { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Artikel", item: `${BASE_URL}/artikel` },
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
