/**
 * app/feed.xml/route.ts
 *
 * RSS 2.0 feed artikel ID — dibangun dari app/artikel/_lib/artikelIndex.ts
 * (sumber yang sama dengan halaman /artikel), jadi artikel baru otomatis
 * masuk feed. Statis: di-generate saat build.
 * Manfaat SEO: discovery artikel baru lebih cepat oleh crawler & agregator,
 * plus bisa dipakai auto-post ke Telegram/sosial.
 */

import { ARTIKEL, type Artikel } from "@/app/artikel/_lib/artikelIndex";

export const dynamic = "force-static";

const BASE_URL = "https://stcautotrade.id";

/** "4 Juli 2026" / "7 Jun 2026" → Date UTC (nama bulan ID, penuh/singkat) */
const BULAN: Record<string, number> = {
  jan: 0, januari: 0,
  feb: 1, februari: 1,
  mar: 2, maret: 2,
  apr: 3, april: 3,
  mei: 4,
  jun: 5, juni: 5,
  jul: 6, juli: 6,
  agu: 7, agustus: 7,
  sep: 8, september: 8,
  okt: 9, oktober: 9,
  nov: 10, november: 10,
  des: 11, desember: 11,
};

function parseTanggal(tanggal: string): Date {
  const [d, m, y] = tanggal.trim().split(/\s+/);
  const bulan = BULAN[m?.toLowerCase() ?? ""] ?? 0;
  return new Date(Date.UTC(Number(y), bulan, Number(d)));
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function itemXml(a: Artikel): string {
  const url = `${BASE_URL}/artikel/${a.slug}`;
  return [
    "    <item>",
    `      <title>${escapeXml(a.judul)}</title>`,
    `      <link>${url}</link>`,
    `      <guid isPermaLink="true">${url}</guid>`,
    `      <pubDate>${parseTanggal(a.tanggal).toUTCString()}</pubDate>`,
    `      <category>${escapeXml(a.kategori)}</category>`,
    `      <description>${escapeXml(a.ringkasan)}</description>`,
    "    </item>",
  ].join("\n");
}

export function GET() {
  const sorted = [...ARTIKEL].sort(
    (a, b) => parseTanggal(b.tanggal).getTime() - parseTanggal(a.tanggal).getTime()
  );
  // lastBuildDate deterministik (tanggal artikel terbaru), bukan waktu build
  const newest = parseTanggal(sorted[0].tanggal).toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>STC AutoTrade — Artikel Robot Trading Stockity</title>
    <link>${BASE_URL}/artikel</link>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Panduan, strategi, review, dan edukasi robot trading otomatis untuk Stockity.id dari STC AutoTrade (TechnoAutoTrade).</description>
    <language>id-ID</language>
    <lastBuildDate>${newest}</lastBuildDate>
${sorted.map(itemXml).join("\n")}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
