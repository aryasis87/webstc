"use client";

/**
 * components/calculators/CompoundCalculator.tsx
 *
 * Kalkulator compounding & profit trading — proyeksi saldo dari modal awal,
 * target harian (%), dan jumlah hari; bandingkan mode compound vs nominal
 * tetap. Plus mini-kalkulator break-even win rate dari payout.
 * Tanpa dependensi; kalkulasi murni di klien.
 */

import { useState } from "react";

const rp = (n: number) => "Rp " + Math.round(n).toLocaleString("id-ID");
const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export default function CompoundCalculator() {
  const [modal, setModal] = useState(500000);
  const [rate, setRate] = useState(2);
  const [hari, setHari] = useState(20);
  const [compound, setCompound] = useState(true);
  const [payout, setPayout] = useState(80);

  const m0 = clamp(modal || 0, 10000, 10_000_000_000);
  const r = clamp(rate || 0, 0.1, 20) / 100;
  const n = clamp(Math.round(hari) || 1, 1, 260);
  const p = clamp(payout || 0, 40, 95);

  const saldo = (d: number) => (compound ? m0 * Math.pow(1 + r, d) : m0 * (1 + r * d));
  const akhir = saldo(n);
  const akhirLain = compound ? m0 * (1 + r * n) : m0 * Math.pow(1 + r, n);
  const bep = 100 / (100 + p) * 100;

  // Milestone: bagi periode jadi ±4 titik
  const langkah = Math.max(1, Math.ceil(n / 4));
  const milestones: number[] = [];
  for (let d = langkah; d < n; d += langkah) milestones.push(d);
  milestones.push(n);

  const inputCls =
    "w-full px-3.5 py-2.5 bg-white border border-[rgba(26,22,18,0.14)] rounded-xl text-[14px] text-[#1a1612] focus:outline-none focus:border-[#10b981]/60";
  const labelCls = "block text-[12px] font-semibold text-[#1a1612]/70 mb-1.5";

  return (
    <div className="max-w-2xl">
      {/* ── Input ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
        <div>
          <label className={labelCls} htmlFor="cc-modal">Modal awal (Rp)</label>
          <input id="cc-modal" type="number" min={10000} step={50000} value={modal}
            onChange={(e) => setModal(Number(e.target.value))} className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="cc-rate">Target harian (%)</label>
          <input id="cc-rate" type="number" min={0.1} max={20} step={0.5} value={rate}
            onChange={(e) => setRate(Number(e.target.value))} className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="cc-hari">Hari trading</label>
          <input id="cc-hari" type="number" min={1} max={260} step={1} value={hari}
            onChange={(e) => setHari(Number(e.target.value))} className={inputCls} />
        </div>
      </div>

      {/* ── Mode toggle ── */}
      <div className="flex gap-2 mb-6" role="group" aria-label="Mode perhitungan">
        <button type="button" onClick={() => setCompound(true)}
          className={`px-4 py-2 rounded-xl text-[13px] font-semibold transition-colors ${compound ? "bg-[#1a1612] text-white" : "bg-white border border-[rgba(26,22,18,0.14)] text-[#1a1612]/60"}`}>
          Compound (profit diputar)
        </button>
        <button type="button" onClick={() => setCompound(false)}
          className={`px-4 py-2 rounded-xl text-[13px] font-semibold transition-colors ${!compound ? "bg-[#1a1612] text-white" : "bg-white border border-[rgba(26,22,18,0.14)] text-[#1a1612]/60"}`}>
          Nominal tetap
        </button>
      </div>

      {/* ── Ringkasan ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        <div className="bg-[#1a1612] rounded-2xl px-5 py-4">
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/60 mb-1">
            Proyeksi saldo setelah {n} hari
          </p>
          <p className="font-[family-name:var(--font-dm-serif)] text-2xl text-white">{rp(akhir)}</p>
          <p className="text-[11px] text-white/55 mt-1">
            Total profit {rp(akhir - m0)} ({(((akhir - m0) / m0) * 100).toFixed(0)}%)
          </p>
        </div>
        <div className="bg-white border border-[rgba(26,22,18,0.09)] rounded-2xl px-5 py-4">
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/60 mb-1">
            Jika mode {compound ? "nominal tetap" : "compound"}
          </p>
          <p className="font-[family-name:var(--font-dm-serif)] text-2xl text-[#1a1612]">{rp(akhirLain)}</p>
          <p className="text-[11px] text-[#6b6058] mt-1">
            Selisih {rp(Math.abs(akhir - akhirLain))} — kekuatan bunga berbunga
          </p>
        </div>
      </div>

      {/* ── Milestone ── */}
      <div className="overflow-x-auto rounded-2xl border border-[rgba(26,22,18,0.09)] mb-8">
        <table className="w-full text-left bg-white">
          <thead>
            <tr className="border-b border-[rgba(26,22,18,0.09)]">
              <th className="px-4 py-3 text-[11px] font-semibold tracking-[0.1em] uppercase text-[#1a1612]/60">Hari ke-</th>
              <th className="px-4 py-3 text-[11px] font-semibold tracking-[0.1em] uppercase text-[#1a1612]/60">Saldo proyeksi</th>
              <th className="px-4 py-3 text-[11px] font-semibold tracking-[0.1em] uppercase text-[#1a1612]/60">Profit berjalan</th>
            </tr>
          </thead>
          <tbody>
            {milestones.map((d) => (
              <tr key={d} className="border-b border-[rgba(26,22,18,0.05)] last:border-0">
                <td className="px-4 py-3 text-[13px] font-semibold text-[#1a1612]">{d}</td>
                <td className="px-4 py-3 text-[13px] text-[#1a1612]">{rp(saldo(d))}</td>
                <td className="px-4 py-3 text-[13px] font-semibold text-[#047857]">+{rp(saldo(d) - m0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Mini: break-even win rate ── */}
      <div className="bg-white border border-[rgba(26,22,18,0.09)] rounded-2xl px-5 py-5">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/60 mb-3">
          Bonus: break-even win rate dari payout
        </p>
        <div className="flex flex-wrap items-end gap-4">
          <div className="w-32">
            <label className={labelCls} htmlFor="cc-payout">Payout (%)</label>
            <input id="cc-payout" type="number" min={40} max={95} step={1} value={payout}
              onChange={(e) => setPayout(Number(e.target.value))} className={inputCls} />
          </div>
          <div>
            <p className="text-[12px] text-[#6b6058] mb-0.5">Win rate minimum agar tidak rugi</p>
            <p className="font-[family-name:var(--font-dm-serif)] text-3xl text-[#1a1612]">{bep.toFixed(1)}%</p>
          </div>
        </div>
        <p className="text-[12px] text-[#6b6058] mt-3 leading-relaxed">
          Rumus: 100 ÷ (100 + payout). Dengan payout {p}%, menang {bep.toFixed(1)}% dari seluruh
          order baru sekadar impas — profit dimulai di atas angka itu.
        </p>
      </div>
    </div>
  );
}
