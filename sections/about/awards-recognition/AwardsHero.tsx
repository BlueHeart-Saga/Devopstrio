"use client";

import { motion } from "framer-motion";
import { ArrowRight, Trophy } from "lucide-react";
import Link from "next/link";
import React from "react";

export function AwardsHero() {
  const stats = [
    { value: "7+", label: "Years of Experience" },
    { value: "525+", label: "Tech Experts" },
    { value: "2.5k+", label: "Projects Delivered" },
    { value: "3+", label: "Countries" },
  ];

  return (
    <section className="relative min-h-[95vh] flex items-end justify-start overflow-hidden bg-black text-white pb-24 md:pb-28 z-10">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src="/assets/About-page/leadership/hero.png" 
          alt="Awards Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Deep cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/95 z-10" />
      </div>

      {/* Content Container (Bottom Left-aligned) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 w-full text-left pt-32">
        <div className="max-w-3xl space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/25 bg-rose-950/20 text-rose-500 text-xs font-mono font-bold tracking-widest uppercase"
          >
            <Trophy className="w-3.5 h-3.5 text-rose-500" />
            Awards, Recognition & Milestones
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight leading-[1.1] text-white"
          >
            Recognizing the <br className="hidden sm:block" />
            Work, Growth, and <br className="hidden sm:block" />
            <span className="text-[#E11D48]">Standards Behind Devopstrio.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-sm md:text-base font-medium text-zinc-300 max-w-xl leading-relaxed"
          >
            Our awards, recognitions, and professional milestones reflect Devopstrio’s commitment to building meaningful <Link href="/services/software-development" className="text-[#E11D48] hover:underline">technology solutions</Link>, trusted delivery relationships, and a culture of continuous progress. From industry acknowledgements to internal growth milestones, these moments represent the people, partnerships, and performance that shape our <Link href="/about" className="text-[#E11D48] hover:underline">corporate journey</Link>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Link
              href="#story"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-xs font-bold tracking-wider uppercase bg-[#E11D48] hover:bg-rose-600 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:-translate-y-0.5 gap-2"
            >
              <span>Explore Our Story</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-700 hover:border-white bg-transparent hover:bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5 gap-2"
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
            className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 border-t border-zinc-900/80 max-w-xl"
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
