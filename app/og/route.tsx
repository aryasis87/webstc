/**
 * app/og/route.tsx
 *
 * Endpoint OG image dinamis — satu route untuk seluruh artikel (ID/EN/RU),
 * dipanggil dari helper SEO artikel via `?t=<judul>&l=<id|en|ru>`.
 * Gambar unik per artikel = CTR share sosial lebih baik + syarat kelayakan
 * Google Discover (max-image-preview:large sudah diset global).
 *
 * Font: Inter 700 di-subset per judul via Google Fonts (`text=` param) agar
 * huruf Kiril judul RU ikut ter-render; jika fetch gagal, fallback ke font
 * bawaan satori (latin) — gambar tetap jadi, bukan error 500.
 */

import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

const LABELS: Record<string, string> = {
  id: "Artikel",
  en: "Article",
  ru: "Статья",
};

const CREAM = "#f6f4ef";
const INK = "#1a1612";
const MUTED = "#6b6058";
const GREEN = "#10b981";
const GREEN_DARK = "#047857";
const GREEN_BG = "#d1fae5";

async function loadInter(text: string): Promise<ArrayBuffer | null> {
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=Inter:wght@700&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(cssUrl)).text();
    const src = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/);
    if (!src) return null;
    return await (await fetch(src[1])).arrayBuffer();
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const title = (sp.get("t") ?? "STC AutoTrade — Robot Trading Otomatis Stockity").slice(0, 120);
  const label = LABELS[sp.get("l") ?? "id"] ?? LABELS.id;

  // Subset font hanya untuk glif yang benar-benar tampil di gambar
  const inter = await loadInter(`${title} STC AutoTrade stcautotrade.id ${label}`);

  // Judul panjang → font mengecil agar tetap muat 3 baris
  const titleSize = title.length > 75 ? 52 : title.length > 50 ? 58 : 66;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: CREAM,
          padding: "64px 72px",
        }}
      >
        {/* Aksen brand di tepi atas */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 12,
            backgroundColor: GREEN,
          }}
        />

        {/* Baris wordmark */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                backgroundColor: INK,
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 30,
              }}
            >
              S
            </div>
            <div style={{ fontSize: 34, color: INK }}>STC AutoTrade</div>
          </div>
          <div style={{ fontSize: 26, color: MUTED }}>stcautotrade.id</div>
        </div>

        {/* Judul artikel */}
        <div
          style={{
            fontSize: titleSize,
            color: INK,
            lineHeight: 1.15,
            letterSpacing: -1,
            maxWidth: 1020,
          }}
        >
          {title}
        </div>

        {/* Baris bawah: badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: GREEN_BG,
              color: GREEN_DARK,
              fontSize: 24,
              padding: "10px 26px",
              borderRadius: 999,
            }}
          >
            {label}
          </div>
          <div style={{ fontSize: 24, color: MUTED }}>Robot Trading Otomatis Stockity</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      ...(inter
        ? { fonts: [{ name: "Inter", data: inter, weight: 700 as const, style: "normal" as const }] }
        : {}),
      headers: {
        // Gambar per URL tidak pernah berubah — biarkan CDN & scraper menyimpannya
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    }
  );
}
