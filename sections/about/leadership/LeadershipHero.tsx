"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users2, ArrowDown } from "lucide-react";

const stats = [
  { value: "525+", label: "Technology Experts" },
  { value: "2500+", label: "Projects Delivered" },
  { value: "4+", label: "Global Locations" },
  { value: "7+", label: "Years of Excellence" },
];

export const LeadershipHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden bg-black text-white">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src="/assets/About-page/leadership_hero_bg.png" 
          alt="Devopstrio Leadership and Executive Office"
          className="w-full h-full object-cover object-center"
        />
        {/* Deep cinematic gradients matching the reference image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 z-10" />
      </div>

      {/* Content Container (Left-aligned) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 w-full pt-44 pb-36 text-left">
        <div className="max-w-3xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/25 bg-rose-950/20 text-rose-400 text-xs font-mono font-bold tracking-widest uppercase"
          >
            <Users2 className="w-3.5 h-3.5" />
            Leadership &amp; Talent Excellence
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] text-white"
          >
            Leadership Driving <br />
            <span className="text-rose-500">Innovation.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-lg md:text-xl font-medium text-zinc-300 max-w-2xl leading-relaxed"
          >
            Meet the leaders, architects, engineers, consultants, and specialists shaping the future of AI, Cloud, DevOps, Cybersecurity, and Digital Transformation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#executive-leadership"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-[#E11D48] hover:bg-rose-600 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:-translate-y-0.5 gap-2"
            >
              Meet Our Leaders
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="/careers"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-500 hover:border-white bg-transparent hover:bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5 gap-2"
            >
              Join Our Team
            </a>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-zinc-800/40 mt-16 max-w-4xl"
        >
          {stats.map((s, idx) => (
            <div key={idx} className="border-l border-zinc-800 pl-4 text-left">
              <p className="text-2xl sm:text-3xl font-black text-white mb-1 hover:text-rose-500 transition-colors cursor-default">
                {s.value}
              </p>
              <p className="text-[10px] text-zinc-550 font-bold uppercase tracking-wider">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Layout Details (Matching Mockup Reference) */}
      <div className="absolute bottom-8 left-6 lg:left-12 z-20 hidden sm:block">
        <span className="text-[10px] font-bold text-zinc-500 tracking-[0.25em] uppercase font-mono">
          ENTERPRISE EXCELLENCE &amp; CONSULTING
        </span>
      </div>

      <div className="absolute bottom-8 right-6 lg:right-12 z-20 flex items-center gap-3 text-zinc-500 select-none hidden sm:flex">
        <span className="text-[9px] font-black tracking-[0.3em] uppercase font-mono">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-zinc-500" />
        </motion.div>
      </div>
    </section>
  );
};
