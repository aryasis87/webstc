"use client";

import { useEffect, useState } from "react";

/**
 * Kartu "APK Segera Hadir" dengan countdown.
 * targetMs dihitung di server (waktu build/deploy + 6 jam) lalu di-bake ke HTML,
 * jadi hitungannya konsisten untuk semua pengunjung.
 */
export default function ApkComingSoon({ targetMs }: { targetMs: number }) {
  const [left, setLeft] = useState<number>(() => Math.max(0, targetMs - Date.now()));

  useEffect(() => {
    const id = setInterval(() => {
      setLeft(Math.max(0, targetMs - Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  const done = left <= 0;
  const h = Math.floor(left / 3_600_000);
  const m = Math.floor((left % 3_600_000) / 60_000);
  const s = Math.floor((left % 60_000) / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");

  const Box = ({ v, label }: { v: string; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="w-[58px] h-[64px] rounded-xl bg-[#1a1612] text-white flex items-center justify-center text-2xl font-bold tabular-nums">
        {v}
      </div>
      <span className="mt-1.5 text-[10px] font-medium uppercase tracking-wider text-[#1a1612]/40">{label}</span>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl border border-[rgba(26,22,18,0.08)] p-7 flex flex-col">
      <div className="flex items-center gap-2.5 mb-5">
        <div className="w-10 h-10 rounded-xl bg-[#fef3c7] flex items-center justify-center text-lg">🚧</div>
        <div>
          <p className="text-[13px] font-semibold text-[#1a1612]">APK Android</p>
          <p className="text-[11px] text-[#6b6058]">Sedang disiapkan</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-[#1a1612] mb-2 tracking-tight">
        APK Segera Hadir 🎉
      </h2>
      <p className="text-[13px] text-[#6b6058] leading-relaxed mb-6">
        Versi APK Android sedang kami siapkan. Sementara menunggu, silakan{" "}
        <strong className="text-[#1a1612]">gunakan versi web</strong> terlebih dahulu — fiturnya identik
        dan bisa langsung dipakai tanpa instalasi.
      </p>

      {!done ? (
        <>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#1a1612]/35 mb-3 text-center">
            Tersedia dalam
          </p>
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <Box v={pad(h)} label="Jam" />
            <span className="text-2xl font-bold text-[#1a1612]/25 -mt-4">:</span>
            <Box v={pad(m)} label="Menit" />
            <span className="text-2xl font-bold text-[#1a1612]/25 -mt-4">:</span>
            <Box v={pad(s)} label="Detik" />
          </div>
        </>
      ) : (
        <div className="mb-6 rounded-xl bg-[#f0fdf4] border border-green-200 px-4 py-3 text-center">
          <p className="text-[13px] font-semibold text-green-700">Hampir siap! Sementara ini gunakan versi web ya.</p>
        </div>
      )}

      <a
        href="https://stcautotradepro.id"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2.5 w-full px-5 py-3.5 bg-[#3b82f6] text-white text-sm font-bold rounded-xl hover:bg-[#2563eb] active:scale-[0.98] transition-all no-underline shadow-sm shadow-blue-200 mt-auto"
      >
        Gunakan Versi Web Sekarang
      </a>
      <p className="text-center text-[11px] text-[#1a1612]/30 mt-2.5">
        stcautotradepro.id · Gratis · Tanpa instalasi
      </p>
    </div>
  );
}
