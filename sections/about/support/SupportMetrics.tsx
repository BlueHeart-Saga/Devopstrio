"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const metrics = [
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 24, suffix: "×7", label: "Global Coverage" },
  { value: 2500, suffix: "+", label: "Projects Delivered" },
  { value: 525, suffix: "+", label: "Technology Experts" },
  { value: 4, suffix: "+", label: "Countries Served" },
  { value: 99.9, suffix: "%", label: "Platform Availability", decimal: true },
];

function useCounter(target: number, duration = 2000, decimal = false) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) setStarted(true);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(decimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target, duration, decimal]);

  return { count, ref };
}

const MetricCard = ({ value, suffix, label, decimal }: typeof metrics[0]) => {
  const { count, ref } = useCounter(value, 1800, decimal);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-[#FF1744] transition-colors duration-300 tabular-nums">
        {decimal ? count.toFixed(1) : count}{suffix}
      </div>
      <div className="text-sm text-zinc-500 font-medium">{label}</div>
    </div>
  );
};

export const SupportMetrics = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(255,23,68,0.06),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-mono tracking-widest text-[#FF1744] uppercase font-bold block mb-3"
          >
            By The Numbers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Customer Success <span className="text-[#FF1744]">Metrics</span>
          </motion.h2>
        </div>

        <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl px-10 py-14">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {metrics.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
              >
                <MetricCard {...m} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
