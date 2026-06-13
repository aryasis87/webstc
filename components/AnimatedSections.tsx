"use client";

import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Eye,
  Brain,
  ChartBar,
  Warning,
  ShieldCheck,
  Target,
  TrendUp,
  FloppyDisk,
  ClipboardText,
  Plus,
  GlobeHemisphereWest,
  DownloadSimple,
} from "@phosphor-icons/react";

/* ── Motion constants ──────────────────────────────────────────── */

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const fadeItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
};

/* ── Reusable animated wrappers ────────────────────────────────── */

export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerView({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeItem} className={className}>
      {children}
    </motion.div>
  );
}

/* ── Hero animated elements ────────────────────────────────────── */

export function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-semibold tracking-widest uppercase mb-8"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse-dot" />
      Android &amp; Web · Stockity.id
    </motion.div>
  );
}

export function HeroHeading({ apkPath }: { apkPath: string }) {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT }}
        className="font-[family-name:var(--font-dm-serif)] text-5xl sm:text-[56px] lg:text-[64px] font-normal tracking-tight leading-[1.06] mb-6 text-zinc-900"
      >
        STC AutoTrade —<br />
        <span className="bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400 bg-clip-text text-transparent">
          Robot Trading<br />Otomatis Stockity
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.2, ease: EASE_OUT }}
        className="text-zinc-500 text-base sm:text-[17px] leading-relaxed mb-9 max-w-lg"
      >
        <strong className="text-zinc-900 font-semibold">STC AutoTrade</strong>{" "}
        (StcAutoTrade / StockAutoTrade) terhubung langsung ke akun Stockity.id Anda dan
        mengeksekusi strategi secara otomatis — 24 jam non-stop, bebas emosi.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.3, ease: EASE_OUT }}
        className="flex flex-col gap-3"
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={apkPath}
            download
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-zinc-900 text-white text-sm font-semibold rounded-xl hover:bg-zinc-700 transition-colors no-underline shadow-sm"
          >
            <DownloadSimple weight="bold" size={17} /> Download Aplikasi Android
          </a>
          <a
            href="https://stcautotradepro.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-zinc-200 text-zinc-700 text-sm font-semibold rounded-xl hover:border-zinc-300 hover:bg-zinc-50 transition-all no-underline"
          >
            <GlobeHemisphereWest weight="duotone" size={16} /> Buka Versi Web
          </a>
        </div>
        <a
          href="#cara-kerja"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-700 transition-colors no-underline group w-fit"
        >
          Pelajari Cara Kerja
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 256 256" fill="currentColor" className="transition-transform group-hover:translate-y-0.5" aria-hidden="true">
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/>
          </svg>
        </a>
      </motion.div>
    </>
  );
}

export function HeroStatBar() {
  const stats = [
    { n: "6",    l: "Mode Strategi" },
    { n: "2",    l: "Platform" },
    { n: "24/7", l: "Bot Aktif" },
    { n: "4.9★", l: "Rating Pengguna" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.45 }}
      className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-zinc-100 border border-zinc-100 rounded-2xl overflow-hidden mt-14 max-w-2xl bg-white shadow-sm"
    >
      {stats.map((s) => (
        <div key={s.l} className="py-5 px-4 text-center hover:bg-zinc-50 transition-colors">
          <div className="font-[family-name:var(--font-dm-serif)] text-3xl text-blue-600 leading-none mb-1.5">
            {s.n}
          </div>
          <div className="text-[11px] text-zinc-400 leading-tight">{s.l}</div>
        </div>
      ))}
    </motion.div>
  );
}

/* @deprecated — kept for backwards compatibility */
export function HeroPhoneFloat({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.25, ease: EASE_OUT }}
      className="flex justify-center lg:justify-end"
    >
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ── FAQ accordion item ────────────────────────────────────────── */

export function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${q.replace(/\s+/g, "-").toLowerCase().slice(0, 30)}`;
  return (
    <div className="border-b border-zinc-100">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
        className="w-full flex items-center justify-between py-5 text-left gap-4 cursor-pointer"
      >
        <span className="text-[15px] font-semibold text-zinc-900">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center flex-shrink-0 text-zinc-400"
        >
          <Plus weight="bold" size={13} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE_OUT }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[14px] text-zinc-500 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── "Hambatan Trader" section ─────────────────────────────────── */

const HAMBATAN = [
  { Icon: Eye,      t: "Tidak bisa pantau pasar terus-menerus", d: "Peluang muncul kapan saja. Tanpa alat bantu, momen terbaik terlewat saat Anda sibuk atau beristirahat." },
  { Icon: Brain,    t: "Keputusan dipengaruhi emosi",            d: "FOMO dan panik saat loss adalah musuh terbesar trader. Keputusan emosional hampir selalu menguras saldo." },
  { Icon: ChartBar, t: "Analisis teknikal terasa rumit",         d: "RSI, moving average, pola candlestick — semua asing bagi pemula dan butuh berbulan-bulan untuk dikuasai." },
  { Icon: Warning,  t: "Tidak ada disiplin manajemen modal",     d: "Tanpa stop loss tegas, trader membiarkan kerugian membesar dengan harapan harga akan berbalik sendiri." },
];

export function HambatanSection({ apkPath: _apkPath }: { apkPath: string }) {
  return (
    <StaggerView className="flex flex-col gap-3">
      {HAMBATAN.map((item) => (
        <FadeItem key={item.t}>
          <div className="flex gap-4 p-5 bg-white border border-zinc-100 rounded-xl hover:border-zinc-200 hover:shadow-sm hover:-translate-y-0.5 transition-all">
            <item.Icon weight="duotone" size={26} className="text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[15px] font-semibold mb-1.5 text-zinc-900">{item.t}</p>
              <p className="text-[13px] text-zinc-500 leading-relaxed">{item.d}</p>
            </div>
          </div>
        </FadeItem>
      ))}
    </StaggerView>
  );
}

/* ── CountUp animated number ───────────────────────────────────── */

export function CountUp({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  label,
  className = "",
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    let startTime: number | null = null;
    const tick = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * to;
      setValue(decimals > 0
        ? Math.round(current * 10 ** decimals) / 10 ** decimals
        : Math.round(current));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to, decimals]);

  return (
    <div ref={ref} className={className}>
      <div className="font-[family-name:var(--font-dm-serif)] text-4xl sm:text-5xl text-zinc-900 leading-none mb-2 tracking-tight">
        {prefix}{decimals > 0 ? value.toFixed(decimals) : value.toLocaleString("id-ID")}{suffix}
      </div>
      <p className="text-sm text-zinc-500">{label}</p>
    </div>
  );
}

/* ── Risk management cards ─────────────────────────────────────── */

const RISKS = [
  { icon: ShieldCheck,   title: "Stop Loss Otomatis",         desc: "Tentukan batas kerugian maksimal harian. Bot berhenti total saat tercapai — saldo terlindungi tanpa pengawasan." },
  { icon: Target,        title: "Stop Profit Otomatis",        desc: "Tetapkan target keuntungan harian. Bot berhenti saat tercapai, mengamankan profit dari godaan overtrade." },
  { icon: TrendUp,       title: "Sistem Martingale Terkelola", desc: "Setelah loss, nominal order berikutnya disesuaikan agar satu win menutup semua kerugian sebelumnya. Langkah dan kelipatan Anda atur sendiri." },
  { icon: FloppyDisk,    title: "Pengaturan Tersimpan",        desc: "Semua konfigurasi tersimpan otomatis. Tidak perlu setup ulang setiap membuka aplikasi." },
  { icon: ClipboardText, title: "Riwayat Trading Lengkap",     desc: "Setiap order tercatat detail: waktu, aset, nominal, hasil, profit, dan status martingale. Data lengkap untuk evaluasi strategi." },
];

export function RiskCards() {
  return (
    <StaggerView className="flex flex-col gap-3">
      {RISKS.map((r) => (
        <FadeItem key={r.title}>
          <div className="flex gap-4 p-5 bg-white border border-zinc-100 rounded-xl hover:border-zinc-200 hover:shadow-sm hover:-translate-y-0.5 transition-all">
            <r.icon weight="duotone" size={26} className="text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold mb-1 text-zinc-900">{r.title}</p>
              <p className="text-[13px] text-zinc-500 leading-relaxed">{r.desc}</p>
            </div>
          </div>
        </FadeItem>
      ))}
    </StaggerView>
  );
}
