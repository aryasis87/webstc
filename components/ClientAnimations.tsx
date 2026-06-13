"use client";

import dynamic from "next/dynamic";

const APK_PATH = "/StcAutoTrade.apk";

/* ── HeroBadge ──────────────────────────────────────────────────── */

export const HeroBadge = dynamic(
  () => import("@/components/AnimatedSections").then((m) => m.HeroBadge),
  {
    ssr: false,
    loading: () => (
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-semibold tracking-widest uppercase mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        Android &amp; Web · Stockity.id
      </div>
    ),
  }
);

/* ── HeroHeading ────────────────────────────────────────────────── */

export const HeroHeading = dynamic(
  () => import("@/components/AnimatedSections").then((m) => m.HeroHeading),
  {
    ssr: false,
    loading: () => (
      <>
        <h1 className="font-[family-name:var(--font-dm-serif)] text-5xl sm:text-[56px] lg:text-[64px] font-normal tracking-tight leading-[1.06] mb-6 text-zinc-900">
          STC AutoTrade —<br />
          <span className="bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400 bg-clip-text text-transparent">
            Robot Trading<br />Otomatis Stockity
          </span>
        </h1>
        <p className="text-zinc-500 text-base sm:text-[17px] leading-relaxed mb-9 max-w-lg">
          <strong className="text-zinc-900 font-semibold">STC AutoTrade</strong>{" "}
          (StcAutoTrade / StockAutoTrade) terhubung langsung ke akun Stockity.id Anda dan
          mengeksekusi strategi secara otomatis — 24 jam non-stop, bebas emosi.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={APK_PATH} download className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-zinc-900 text-white text-sm font-semibold rounded-xl no-underline">
            Download Aplikasi Android
          </a>
          <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-zinc-200 text-zinc-700 text-sm font-semibold rounded-xl no-underline">
            Buka Versi Web
          </a>
        </div>
      </>
    ),
  }
);

/* ── HeroStatBar ────────────────────────────────────────────────── */

export const HeroStatBar = dynamic(
  () => import("@/components/AnimatedSections").then((m) => m.HeroStatBar),
  {
    ssr: false,
    loading: () => (
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-zinc-100 border border-zinc-100 rounded-2xl overflow-hidden mt-14 max-w-2xl bg-white shadow-sm">
        {[
          { n: "6",    l: "Mode Strategi" },
          { n: "2",    l: "Platform" },
          { n: "24/7", l: "Bot Aktif" },
          { n: "4.9★", l: "Rating Pengguna" },
        ].map((s) => (
          <div key={s.l} className="py-5 px-4 text-center">
            <div className="font-[family-name:var(--font-dm-serif)] text-3xl text-blue-600 leading-none mb-1.5">{s.n}</div>
            <div className="text-[11px] text-zinc-400 leading-tight">{s.l}</div>
          </div>
        ))}
      </div>
    ),
  }
);

/* ── HambatanSection ────────────────────────────────────────────── */

export const HambatanSection = dynamic(
  () => import("@/components/AnimatedSections").then((m) => m.HambatanSection),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-col gap-3">
        {[
          { t: "Tidak bisa pantau pasar terus-menerus", d: "Peluang muncul kapan saja. Tanpa alat bantu, momen terbaik terlewat saat Anda sibuk atau beristirahat." },
          { t: "Keputusan dipengaruhi emosi",            d: "FOMO dan panik saat loss adalah musuh terbesar trader. Keputusan emosional hampir selalu menguras saldo." },
          { t: "Analisis teknikal terasa rumit",         d: "RSI, moving average, pola candlestick — semua asing bagi pemula dan butuh berbulan-bulan untuk dikuasai." },
          { t: "Tidak ada disiplin manajemen modal",     d: "Tanpa stop loss tegas, trader membiarkan kerugian membesar dengan harapan harga akan berbalik sendiri." },
        ].map((item) => (
          <div key={item.t} className="flex gap-4 p-5 bg-white border border-zinc-100 rounded-xl">
            <div className="w-6 h-6 mt-0.5 flex-shrink-0 rounded bg-blue-100" />
            <div>
              <p className="text-[15px] font-semibold mb-1.5 text-zinc-900">{item.t}</p>
              <p className="text-[13px] text-zinc-500 leading-relaxed">{item.d}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  }
);

/* ── RiskCards ──────────────────────────────────────────────────── */

export const RiskCards = dynamic(
  () => import("@/components/AnimatedSections").then((m) => m.RiskCards),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-col gap-3">
        {[
          { title: "Stop Loss Otomatis",         desc: "Tentukan batas kerugian maksimal harian. Bot berhenti total saat tercapai — saldo terlindungi tanpa pengawasan." },
          { title: "Stop Profit Otomatis",        desc: "Tetapkan target keuntungan harian. Bot berhenti saat tercapai, mengamankan profit dari godaan overtrade." },
          { title: "Sistem Martingale Terkelola", desc: "Setelah loss, nominal order berikutnya disesuaikan agar satu win menutup semua kerugian sebelumnya." },
          { title: "Pengaturan Tersimpan",        desc: "Semua konfigurasi tersimpan otomatis. Tidak perlu setup ulang setiap membuka aplikasi." },
          { title: "Riwayat Trading Lengkap",     desc: "Setiap order tercatat detail: waktu, aset, nominal, hasil, profit, dan status martingale." },
        ].map((r) => (
          <div key={r.title} className="flex gap-4 p-5 bg-white border border-zinc-100 rounded-xl">
            <div className="w-6 h-6 mt-0.5 flex-shrink-0 rounded bg-blue-100" />
            <div>
              <p className="text-sm font-semibold mb-1 text-zinc-900">{r.title}</p>
              <p className="text-[13px] text-zinc-500 leading-relaxed">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  }
);
