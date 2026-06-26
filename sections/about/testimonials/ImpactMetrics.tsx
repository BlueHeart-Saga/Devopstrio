"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const metrics = [
  { value: 40, suffix: "%", label: "Average Cloud Cost Savings", decimal: false },
  { value: 60, suffix: "%", label: "Deployment Acceleration", decimal: false },
  { value: 99.95, suffix: "%", label: "Platform Availability", decimal: true },
  { value: 2500, suffix: "+", label: "Projects Delivered", decimal: false },
  { value: 525, suffix: "+", label: "Technology Specialists", decimal: false },
  { value: "24×7", suffix: "", label: "Global Support Coverage", static: true },
];

function AnimatedNumber({ target, suffix, decimal, active }: {
  target: number; suffix: string; decimal: boolean; active: boolean
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const steps = 60;
    const inc = target / steps;
    let cur = 0;
    const timer = setInterval(() => {
      cur += inc;
      if (cur >= target) { setCount(target); clearInterval(timer); }
      else setCount(decimal ? parseFloat(cur.toFixed(2)) : Math.floor(cur));
    }, 1800 / steps);
    return () => clearInterval(timer);
  }, [active, target, decimal]);
  return <>{decimal ? count.toFixed(2) : count}{suffix}</>;
}

export const ImpactMetrics = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 bg-[#050505] border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(255,23,68,0.07),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-4"
          >
            Impact at Scale
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4"
          >
            Outcomes That <span className="text-rose-500">Speak for Themselves</span>
          </motion.h2>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative group bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 text-center overflow-hidden hover:border-rose-500/30 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-black text-rose-500 mb-3 leading-none tabular-nums">
                  {"static" in m
                    ? m.value
                    : <AnimatedNumber target={m.value as number} suffix={m.suffix} decimal={m.decimal} active={visible} />
                  }
                </div>
                <p className="text-zinc-400 text-sm font-medium">{m.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
