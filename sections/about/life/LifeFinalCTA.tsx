"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export const LifeFinalCTA = () => {
  return (
    <section
      id="join-team"
      className="relative py-36 overflow-hidden bg-black border-t border-zinc-800"
    >
      {/* Layered gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,23,68,0.18),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Glowing orbs */}
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-red-500/10 blur-[100px]" />
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-red-600/10 blur-[100px]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium tracking-wider uppercase mb-8">
            Build the Future With Us
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Ready to Engineer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-[#FF1744]">
              What's Next?
            </span>
          </h2>

          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Join a team passionate about technology, innovation, and delivering real-world impact at scale. Your next career chapter starts here.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="/careers"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF1744] hover:bg-red-600 text-white rounded-xl font-semibold text-base transition-colors shadow-[0_0_30px_rgba(255,23,68,0.4)] hover:shadow-[0_0_45px_rgba(255,23,68,0.6)]"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900/60 hover:bg-zinc-900 text-white rounded-xl font-semibold text-base transition-colors border border-zinc-800 hover:border-zinc-700 backdrop-blur-sm"
            >
              <MessageSquare className="w-5 h-5" />
              Talk to Recruitment
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
