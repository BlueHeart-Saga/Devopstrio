"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";

import Link from "next/link";

const MotionLink = motion(Link);

export const TestimonialsCTA = () => {
  return (
    <section className="relative py-36 bg-black border-t border-zinc-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(255,255,255,0.05),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute -left-48 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/5 blur-[120px]" />
      <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-zinc-800/10 blur-[120px]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-400 mb-6 block">
            Your Success Story Starts Here
          </span>

          <h2 className="text-xl md:text-2xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-4">
            Ready to Become Our <span className="text-zinc-500">Next Success Story?</span>
          </h2>

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold max-w-2xl mx-auto mb-12">
            Partner with Devopstrio to modernise platforms with our <Link href="/services/cloud-services" className="text-rose-500 hover:underline">cloud services</Link>, accelerate innovation, and achieve measurable business outcomes outlined in our <Link href="/about/overview" className="text-rose-500 hover:underline">company overview</Link>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MotionLink
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-9 py-4 bg-white hover:bg-zinc-200 text-black rounded-xl font-semibold text-base transition-colors shadow-[0_0_35px_rgba(255,255,255,0.15)] hover:shadow-[0_0_55px_rgba(255,255,255,0.25)]"
            >
              Start Your Transformation
              <ArrowRight className="w-5 h-5" />
            </MotionLink>
            <MotionLink
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-9 py-4 bg-zinc-900/60 hover:bg-zinc-900 text-white rounded-xl font-semibold text-base transition-colors border border-zinc-800 hover:border-zinc-600 backdrop-blur-sm"
            >
              Contact Our Team
            </MotionLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
