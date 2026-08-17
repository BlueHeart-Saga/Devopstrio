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
          {/* <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            Scale Metrics
          </span> */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight text-white mb-16 font-sans">
            Global Operations by the Numbers
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="flex flex-col items-center text-center group"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 group-hover:text-rose-500 transition-colors tracking-tight font-sans">
                {metric.val}
              </h3>
              <p className="text-xs sm:text-sm uppercase font-mono tracking-widest text-zinc-400 font-semibold leading-normal">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
