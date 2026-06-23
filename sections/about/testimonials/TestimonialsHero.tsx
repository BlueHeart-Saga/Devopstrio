"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

const stats = [
  { value: "2500+", label: "Projects Delivered" },
  { value: "525+", label: "Technology Experts" },
  { value: "4+", label: "Countries Served" },
  { value: "98%", label: "Client Satisfaction" },
];

export const TestimonialsHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,23,68,0.14),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/8 text-red-400 text-sm font-medium tracking-wider uppercase"
        >
          <TrendingUp className="w-4 h-4" />
          Testimonials &amp; Success Center
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.04] tracking-tight"
        >
          Trusted by Enterprises.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-[#FF1744]">
            Measured by Outcomes.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          See how organizations partner with Devopstrio to accelerate cloud transformation, modernize platforms, improve operational efficiency, and deliver measurable business results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF1744] hover:bg-red-600 text-white rounded-xl font-semibold transition-all shadow-[0_0_30px_rgba(255,23,68,0.4)] hover:shadow-[0_0_50px_rgba(255,23,68,0.6)]"
          >
            View Success Stories
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900/60 hover:bg-zinc-900 text-white rounded-xl font-semibold border border-zinc-800 hover:border-zinc-600 transition-all backdrop-blur-sm"
          >
            Talk to an Expert
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800/50 rounded-2xl overflow-hidden border border-zinc-800"
        >
          {stats.map((s, idx) => (
            <div key={idx} className="bg-zinc-900/60 backdrop-blur-sm px-8 py-7 text-center">
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
