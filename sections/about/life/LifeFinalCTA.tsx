"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

export const LifeFinalCTA = () => {
  return (
    <section
      id="join-team"
      className="relative py-36 overflow-hidden bg-black border-t border-zinc-800"
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-6 block">
            Build the Future With Us
          </span>

          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
            Ready to Engineer <span className="text-rose-500">What's Next?</span>
          </h2>

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold max-w-2xl mx-auto mb-12">
            Join a team passionate about technology, innovation, and delivering real-world impact at scale in <Link href="/services/cloud-services" className="text-rose-500 hover:underline">cloud platforms</Link> and <Link href="/services/devops-automation" className="text-rose-500 hover:underline">DevOps solutions</Link>. Your next career chapter starts here.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="/careers"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-semibold text-base transition-colors shadow-[0_0_30px_rgba(244,63,94,0.4)] hover:shadow-[0_0_45px_rgba(244,63,94,0.6)]"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="/contact#contact-form"
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
