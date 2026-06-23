"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users2 } from "lucide-react";

const stats = [
  { value: "525+", label: "Technology Experts" },
  { value: "2500+", label: "Projects Delivered" },
  { value: "4+", label: "Global Locations" },
  { value: "7+", label: "Years of Excellence" },
];

export const LeadershipHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(255,23,68,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center pt-28 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/8 text-red-400 text-sm font-medium tracking-wider uppercase"
        >
          <Users2 className="w-4 h-4" />
          Leadership &amp; Team Excellence
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.04] tracking-tight"
        >
          Leadership Driving
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-[#FF1744]">
            Innovation.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-2xl md:text-3xl font-light text-zinc-300 mb-4"
        >
          Teams Delivering <span className="text-white font-semibold">Impact.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Meet the leaders, architects, engineers, consultants, and specialists shaping the future of AI, Cloud, DevOps, Cybersecurity, and Digital Transformation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#executive-leadership"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF1744] hover:bg-red-600 text-white rounded-xl font-semibold transition-all shadow-[0_0_30px_rgba(255,23,68,0.4)] hover:shadow-[0_0_50px_rgba(255,23,68,0.6)]"
          >
            Meet Our Leaders
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/careers"
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900/60 hover:bg-zinc-900 text-white rounded-xl font-semibold border border-zinc-800 hover:border-zinc-600 transition-all backdrop-blur-sm"
          >
            Join Our Team
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800/50 rounded-2xl overflow-hidden border border-zinc-800/60"
        >
          {stats.map((s, idx) => (
            <div key={idx} className="bg-zinc-900/70 backdrop-blur-sm px-8 py-7 text-center">
              <p className="text-3xl md:text-4xl font-black text-white mb-1 hover:text-[#FF1744] transition-colors cursor-default">{s.value}</p>
              <p className="text-sm text-zinc-500 font-medium">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
};
