"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";

const stats = [
  { value: "525+", label: "Experts" },
  { value: "2500+", label: "Projects" },
  { value: "4+", label: "Locations" },
  { value: "20+", label: "Nationalities" },
  { value: "95%", label: "Satisfaction" },
];

import Link from "next/link";

export const LifeHero = () => {
  return (
    <section className="relative min-h-screen flex items-end justify-start overflow-hidden bg-black text-white pb-24 md:pb-28">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src="/assets/About-page/leadership/hero.png" 
          alt="Life at Devopstrio Team"
          className="w-full h-full object-cover object-center"
        />
        {/* Deep cinematic gradients matching the leadership pattern */}
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
            <Heart className="w-3.5 h-3.5 text-rose-550 fill-rose-550/20" />
            Life at Devopstrio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-white"
          >
            Where <span className="text-rose-500">Innovation</span><br />
            Meets Opportunity
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-sm md:text-base font-medium text-zinc-300 max-w-xl leading-relaxed"
          >
            Building world-class <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline">AI</Link>, <Link href="/services/cloud-services" className="text-rose-500 hover:underline">Cloud</Link>, <Link href="/services/data-engineering" className="text-rose-500 hover:underline">Data</Link>, and <Link href="/services/devops-automation" className="text-rose-500 hover:underline">DevOps solutions</Link> while creating meaningful careers and lasting impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#open-positions"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-xs font-bold tracking-wider uppercase bg-[#E11D48] hover:bg-rose-600 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:-translate-y-0.5 gap-2"
            >
              Explore Careers
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#join-team"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-550 hover:border-white bg-transparent hover:bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5 gap-2"
            >
              Join Our Team
            </a>
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
};

