"use client";

import { motion, useInView, useReducedMotion, AnimatePresence, MotionConfig, type Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Plus } from "@phosphor-icons/react";

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
    <MotionConfig reducedMotion="user">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay, ease: EASE_OUT }}
        className={className}
      >
        {children}
      </motion.div>
    </MotionConfig>
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
    <MotionConfig reducedMotion="user">
      <motion.div
        ref={ref}
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className={className}
      >
        {children}
      </motion.div>
    </MotionConfig>
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

/* ── FAQ accordion item ────────────────────────────────────────── */

export function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${q.replace(/\s+/g, "-").toLowerCase().slice(0, 30)}`;
  return (
    <MotionConfig reducedMotion="user">
      <div className="border-b border-[rgba(23,20,15,0.09)]">
        <dt>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls={id}
            className="w-full flex items-center justify-between py-5 text-left gap-4 cursor-pointer group"
          >
            <span className="text-[15px] font-semibold text-[#17140f]">{q}</span>
            <motion.span
              animate={{ rotate: open ? 45 : 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-7 h-7 rounded-full border border-[rgba(23,20,15,0.15)] group-hover:border-emerald-700/40 group-hover:text-emerald-800 flex items-center justify-center flex-shrink-0 text-[#6b6459] transition-colors"
            >
              <Plus weight="bold" size={13} />
            </motion.span>
          </button>
        </dt>
        <AnimatePresence initial={false}>
          {open && (
            <motion.dd
              key="answer"
              id={id}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: EASE_OUT }}
              className="overflow-hidden m-0"
            >
              <p className="pb-5 text-[14px] text-[#6b6459] leading-relaxed max-w-xl">{a}</p>
            </motion.dd>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
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
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setValue(to);
      return;
    }
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
  }, [inView, to, decimals, reducedMotion]);

  return (
    <div ref={ref} className={className}>
      <div className="font-[family-name:var(--font-dm-serif)] text-4xl sm:text-[52px] text-[#17140f] leading-none mb-2.5 tracking-tight">
        {prefix}{decimals > 0 ? value.toFixed(decimals) : value.toLocaleString("id-ID")}{suffix}
      </div>
      <p className="text-[12px] tracking-[0.14em] uppercase text-[#6b6459]">{label}</p>
    </div>
  );
}
