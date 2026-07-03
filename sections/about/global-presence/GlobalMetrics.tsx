"use client";

import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

export function GlobalMetrics() {
  const metrics = [
    { val: "6", label: "Offices" },
    { val: "3+", label: "Countries" },
    { val: "525+", label: "Technology Pros" },
    { val: "24/7", label: "Managed Support" },
    { val: "50+", label: "Enterprise Clients" },
    { val: "100+", label: "Transformations" }
  ];

  return (
    <section className="py-24 md:py-32 relative bg-zinc-950/20 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
            Scale Metrics
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-16">
            Global Operations by the Numbers
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-5 rounded-2xl bg-zinc-950/40 border border-white/5 shadow-sm hover:border-rose-500/20 transition-all cursor-default"
            >
              <h3 className="text-3xl font-extrabold text-white mb-2">{metric.val}</h3>
              <p className="text-[9px] uppercase font-mono tracking-widest text-zinc-500 font-bold leading-normal">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
