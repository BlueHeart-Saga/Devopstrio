"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, Globe2, Users, ShieldCheck, ArrowRight, Headphones } from "lucide-react";

const pillars = [
  { icon: Clock, label: "24×7 Support Coverage" },
  { icon: Globe2, label: "Multi-Region Operations" },
  { icon: Users, label: "Dedicated Success Teams" },
  { icon: ShieldCheck, label: "Enterprise SLA Management" },
];

export const SupportHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,23,68,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Top badge strip */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-400 text-sm font-medium tracking-wider uppercase"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          Global Customer Support
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight"
        >
          Enterprise Support for
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-[#FF1744]">
            Cloud, AI & DevOps
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Get expert assistance from our engineering and support teams across global delivery centers — built for enterprise reliability.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#support-request"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF1744] hover:bg-red-600 text-white rounded-xl font-semibold transition-all shadow-[0_0_30px_rgba(255,23,68,0.4)] hover:shadow-[0_0_50px_rgba(255,23,68,0.6)]"
          >
            <Headphones className="w-5 h-5" />
            Submit Support Request
          </a>
          <a
            href="tel:+914612940062"
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900/60 hover:bg-zinc-900 text-white rounded-xl font-semibold border border-zinc-800 hover:border-zinc-600 transition-all backdrop-blur-sm"
          >
            Contact Support Team
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl backdrop-blur-sm"
            >
              <p.icon className="w-5 h-5 text-[#FF1744] shrink-0" />
              <span className="text-sm text-zinc-300 font-medium text-left">{p.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
};
