"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, UserCheck } from "lucide-react";

export const SupportCTA = () => {
  return (
    <section
      id="support-request"
      className="relative py-36 bg-[#050505] border-t border-zinc-900 overflow-hidden"
    >
      {/* Layered radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(255,23,68,0.14),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Glow blobs */}
      <div className="absolute -left-48 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-red-500/10 blur-[120px]" />
      <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-red-600/10 blur-[120px]" />

      {/* Top/bottom edge lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-6 block">
            Need Immediate Assistance?
          </span>

          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
            Connect With Our <span className="text-rose-500">Engineering &amp; Support Teams</span>
          </h2>

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold max-w-2xl mx-auto mb-12">
            Resolve issues faster, optimise your cloud platforms, and accelerate business outcomes — with expert engineers available around the clock.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="mailto:career@devopstrioglobal.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-9 py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-semibold text-base transition-colors shadow-[0_0_35px_rgba(244,63,94,0.45)] hover:shadow-[0_0_55px_rgba(244,63,94,0.65)]"
            >
              Open Support Request
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="tel:+914612940062"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-9 py-4 bg-zinc-900/60 hover:bg-zinc-900 text-white rounded-xl font-semibold text-base transition-colors border border-zinc-800 hover:border-zinc-600 backdrop-blur-sm"
            >
              <UserCheck className="w-5 h-5" />
              Talk to an Expert
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
