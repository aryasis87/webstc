"use client";

/**
 * components/calculators/MartingaleCalculator.tsx
 *
 * Kalkulator martingale interaktif — hitung nominal per step, total modal
 * yang dipertaruhkan, dan profit bersih jika menang di tiap step.
 * Tanpa dependensi; kalkulasi murni di klien.
 */

import { useState } from "react";

const rp = (n: number) =>
  "Rp " + Math.round(n).toLocaleString("id-ID");

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

interface Row {
  step: number;
  nominal: number;
  kumulatif: number;
  profitJikaMenang: number;
}

export default function MartingaleCalculator() {
  const [nominal, setNominal] = useState(14000);
  const [multiplier, setMultiplier] = useState(2.5);
  const [maxStep, setMaxStep] = useState(3);
  const [payout, setPayout] = useState(80);

  const n = clamp(nominal || 0, 1000, 100_000_000);
  const m = clamp(multiplier || 1, 1, 6);
  const steps = clamp(Math.round(maxStep) || 1, 1, 8);
  const p = clamp(payout || 0, 40, 95) / 100;

  const rows: Row[] = [];
  let kumulatif = 0;
  for (let i = 1; i <= steps; i++) {
    const nom = n * Math.pow(m, i - 1);
    const sebelumnya = kumulatif;
    kumulatif += nom;
    rows.push({
      step: i,
      nominal: nom,
      kumulatif,
      profitJikaMenang: nom * p - sebelumnya,
    });
  }
  const totalModal = kumulatif;
  const adaStepRugi = rows.some((r) => r.profitJikaMenang <= 0);
  const bufferSaran = totalModal * 2;

  const inputCls =
    "w-full px-3.5 py-2.5 bg-white border border-[rgba(26,22,18,0.14)] rounded-xl text-[14px] text-[#1a1612] focus:outline-none focus:border-[#10b981]/60";
  const labelCls = "block text-[12px] font-semibold text-[#1a1612]/70 mb-1.5";

  return (
    <div className="max-w-2xl">
      {/* ── Input ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div>
          <label className={labelCls} htmlFor="mc-nominal">Nominal awal (Rp)</label>
          <input id="mc-nominal" type="number" min={1000} step={1000} value={nominal}
            onChange={(e) => setNominal(Number(e.target.value))} className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="mc-mult">Multiplier (×)</label>
          <input id="mc-mult" type="number" min={1} max={6} step={0.1} value={multiplier}
            onChange={(e) => setMultiplier(Number(e.target.value))} className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="mc-step">Max step</label>
          <input id="mc-step" type="number" min={1} max={8} step={1} value={maxStep}
            onChange={(e) => setMaxStep(Number(e.target.value))} className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="mc-payout">Payout (%)</label>
          <input id="mc-payout" type="number" min={40} max={95} step={1} value={payout}
            onChange={(e) => setPayout(Number(e.target.value))} className={inputCls} />
        </div>
      </div>

      {/* ── Ringkasan ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        <div className="bg-[#1a1612] rounded-2xl px-5 py-4">
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/60 mb-1">
            Total modal dipertaruhkan ({steps} step)
          </p>
          <p className="font-[family-name:var(--font-dm-serif)] text-2xl text-white">{rp(totalModal)}</p>
          <p className="text-[11px] text-white/55 mt-1">
            Hangus seluruhnya jika kalah beruntun {steps}× tanpa menang
          </p>
        </div>
        <div className="bg-[#ecfdf5] border border-[#a7f3d0] rounded-2xl px-5 py-4">
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#047857] mb-1">
            Saran saldo minimum (buffer 2×)
          </p>
          <p className="font-[family-name:var(--font-dm-serif)] text-2xl text-[#065f46]">{rp(bufferSaran)}</p>
          <p className="text-[11px] text-[#065f46]/70 mt-1">
            Agar satu siklus gagal tidak langsung menghabiskan akun
          </p>
        </div>
      </div>

      {/* ── Tabel per step ── */}
      <div className="overflow-x-auto rounded-2xl border border-[rgba(26,22,18,0.09)]">
        <table className="w-full text-left bg-white">
          <thead>
            <tr className="border-b border-[rgba(26,22,18,0.09)]">
              <th className="px-4 py-3 text-[11px] font-semibold tracking-[0.1em] uppercase text-[#1a1612]/60">Step</th>
              <th className="px-4 py-3 text-[11px] font-semibold tracking-[0.1em] uppercase text-[#1a1612]/60">Nominal order</th>
              <th className="px-4 py-3 text-[11px] font-semibold tracking-[0.1em] uppercase text-[#1a1612]/60">Total keluar</th>
              <th className="px-4 py-3 text-[11px] font-semibold tracking-[0.1em] uppercase text-[#1a1612]/60">Profit bersih jika menang di step ini</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.step} className="border-b border-[rgba(26,22,18,0.05)] last:border-0">
                <td className="px-4 py-3 text-[13px] font-semibold text-[#1a1612]">{r.step}</td>
                <td className="px-4 py-3 text-[13px] text-[#1a1612]">{rp(r.nominal)}</td>
                <td className="px-4 py-3 text-[13px] text-[#6b6058]">{rp(r.kumulatif)}</td>
                <td className={`px-4 py-3 text-[13px] font-semibold ${r.profitJikaMenang > 0 ? "text-[#047857]" : "text-[#b91c1c]"}`}>
                  {r.profitJikaMenang > 0 ? "+" : ""}{rp(r.profitJikaMenang)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {adaStepRugi && (
        <div className="mt-4 bg-[#fee2e2] border border-[#fecaca] rounded-xl px-5 py-4">
          <p className="text-[13px] text-[#b91c1c] leading-relaxed">
            <strong>Multiplier terlalu kecil untuk payout ini:</strong> ada step yang tetap rugi
            meskipun menang. Naikkan multiplier (umumnya ≥ 2×) agar setiap kemenangan menutup
            seluruh kerugian sebelumnya.
          </p>
        </div>
      )}
    </div>
  );
}
