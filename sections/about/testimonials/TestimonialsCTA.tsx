"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";

export const TestimonialsCTA = () => {
  return (
    <section className="relative py-36 bg-[#050505] border-t border-zinc-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(255,23,68,0.13),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute -left-48 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-red-500/10 blur-[120px]" />
      <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-red-600/10 blur-[120px]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium tracking-wider uppercase mb-8">
            <Rocket className="w-4 h-4" />
            Your Success Story Starts Here
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Ready to Become Our
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-[#FF1744]">
              Next Success Story?
            </span>
          </h2>

          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Partner with Devopstrio to modernise platforms, accelerate innovation, and achieve measurable business outcomes that put you ahead of the competition.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-9 py-4 bg-[#FF1744] hover:bg-red-600 text-white rounded-xl font-semibold text-base transition-colors shadow-[0_0_35px_rgba(255,23,68,0.45)] hover:shadow-[0_0_55px_rgba(255,23,68,0.65)]"
            >
              Start Your Transformation
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-9 py-4 bg-zinc-900/60 hover:bg-zinc-900 text-white rounded-xl font-semibold text-base transition-colors border border-zinc-800 hover:border-zinc-600 backdrop-blur-sm"
            >
              Contact Our Team
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
