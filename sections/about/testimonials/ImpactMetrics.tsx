"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
    <section className="py-16 sm:py-24 bg-black border-t border-zinc-900 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Semibold Header, Subtitle Removed */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans"
          >
            Outcomes That <span className="text-rose-600 font-semibold">Speak for Themselves</span>
          </motion.h2>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative group bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 text-center overflow-hidden hover:border-rose-500/40 transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl font-bold font-mono text-rose-500 mb-2 leading-none">
                  {"static" in m
                    ? m.value
                    : <AnimatedNumber target={m.value as number} suffix={m.suffix} decimal={m.decimal} active={visible} />
                  }
                </div>
                <p className="text-base font-semibold text-zinc-300 font-sans mt-2">{m.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
