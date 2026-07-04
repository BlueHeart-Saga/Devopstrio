"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

export function PartnershipsHero() {
  const stats = [
    { value: "8+", label: "Strategic Partners" },
    { value: "525+", label: "Tech Experts" },
    { value: "25+", label: "Domains" },
    { value: "24/7", label: "Delivery" },
  ];

  return (
    <section className="relative min-h-screen flex items-end justify-start overflow-hidden bg-black text-white pb-24 md:pb-28 z-10">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src="/assets/About-page/leadership/hero.png" 
          alt="Partnerships Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Deep cinematic gradients matching the leadership/life pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/95 z-10" />
      </div>

      {/* Content Container (Bottom Left-aligned) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 w-full text-left">
        <div className="max-w-2xl space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/25 bg-rose-950/20 text-rose-450 text-xs font-mono font-bold tracking-widest uppercase"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-rose-550" />
            Partnerships & Trust
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight leading-[1.1] text-white"
          >
            Building Trust Through <br className="hidden sm:block" />
            Strategic Alliances and <br className="hidden sm:block" />
            <span className="text-[#E11D48]">Delivery Standards.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-sm md:text-base font-medium text-zinc-300 max-w-xl leading-relaxed"
          >
            Devopstrio's partnerships and certification-driven approach reflect our commitment to quality, accountability, and long-term client success. By aligning with trusted technology platforms, we strengthen the way we deliver solutions across cloud, software, AI, and enterprise transformation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-xs font-bold tracking-wider uppercase bg-[#E11D48] hover:bg-rose-600 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:-translate-y-0.5 gap-2"
            >
              <span>Explore Capabilities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-550 hover:border-white bg-transparent hover:bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5 gap-2"
            >
              <span>Connect With Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          {/* Compact Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 border-t border-zinc-900/80 max-w-xl"
          >
            {stats.map((s, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-base font-black text-white hover:text-rose-500 transition-colors cursor-default">
                  {s.value}
                </span>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest font-mono">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
