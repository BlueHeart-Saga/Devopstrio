"use client";
import React from "react";
import { motion } from "framer-motion";

export const FounderQuoteSection = () => {
  return (
    <section className="bg-black relative text-white py-6 sm:py-8 md:py-10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[550px] h-[550px] bg-rose-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* Left Column: Premium Feel-Good Quote with Stylized Quote Icon */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7 z-10 py-2 space-y-5 sm:space-y-6"
          >
            {/* Dual-Tone Stylized Quote Icon (Ref: Uploaded Image Style) */}
            <div className="relative w-14 h-12 sm:w-16 sm:h-14 select-none pointer-events-none">
              <svg
                viewBox="0 0 90 70"
                className="w-full h-full filter drop-shadow-[0_4px_16px_rgba(244,63,94,0.4)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Offset Vibrant Rose Accent Shadow */}
                <g transform="translate(5, 5)" fill="#F43F5E">
                  <path d="M36 22C32 10 18 12 14 24C10 34 16 44 26 44C21 56 11 65 2 68C18 66 36 52 38 32C38 30 38 24 36 22Z" />
                  <path d="M80 22C76 10 62 12 58 24C54 34 60 44 70 44C65 56 55 65 46 68C62 66 80 52 82 32C82 30 82 24 80 22Z" />
                </g>
                {/* Foreground Crisp Dark Stroke & Fill */}
                <g fill="#0D0D12" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M36 22C32 10 18 12 14 24C10 34 16 44 26 44C21 56 11 65 2 68C18 66 36 52 38 32C38 30 38 24 36 22Z" />
                  <path d="M80 22C76 10 62 12 58 24C54 34 60 44 70 44C65 56 55 65 46 68C62 66 80 52 82 32C82 30 82 24 80 22Z" />
                </g>
              </svg>
            </div>

            {/* Simple Feel-Good Quote Statement with Enhanced Line-Height & Letter Spacing */}
            <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-semibold text-white leading-[1.38] sm:leading-[1.42] lg:leading-[1.4] tracking-[-0.015em] font-sans max-w-xl xl:max-w-2xl">
              “Great engineering is simple:{" "}
              <span className="text-rose-500 font-semibold drop-shadow-[0_0_20px_rgba(244,63,94,0.35)]">
                Build with heart
              </span>
              , empower people, and make technology feel effortless.”
            </blockquote>
          </motion.div>

          {/* Right Column: Large Borderless PNG Sketch Portrait (Flush Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-5 xl:col-span-5 flex items-end justify-center lg:justify-end relative w-full h-full pointer-events-none select-none"
          >
            {/* Ambient halo behind portrait */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-rose-500/10 blur-[100px] pointer-events-none" />

            {/* Large Cutout Portrait without borders */}
            <img src="/webp/assets/About-page/leader/Mani-sir-sketch_3.webp"
              alt="Manikandan PS - Founder & CEO"
              className="relative z-10 w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[460px] xl:max-w-[500px] h-auto object-contain object-bottom filter contrast-105 drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
            loading="lazy" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
