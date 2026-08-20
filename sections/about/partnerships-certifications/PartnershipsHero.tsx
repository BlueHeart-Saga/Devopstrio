"use client";

import { motion } from "framer-motion";
import React from "react";

export function PartnershipsHero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303] text-white pt-24 pb-16 sm:py-24 z-10 font-sans">
      
      {/* Ambient Red Glow Background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.18),transparent_70%)] blur-[130px]" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.12),transparent_70%)] blur-[130px]" />
      </div>

      {/* Main Container Aligned Perfectly with Navbar Container (max-w-7xl px-6 lg:px-12) */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-20 flex flex-col lg:flex-row items-center justify-between gap-12 my-auto">
        
        {/* Left Side: Simple Quote-like Headline */}
        <div className="w-full lg:max-w-2xl text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.25rem] font-semibold tracking-tight leading-[1.15] text-white font-sans drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)]"
          >
            &ldquo;Great Innovation Is <br className="hidden sm:block" />
            Never Built Alone. <br className="hidden sm:block" />
            <span className="text-rose-500 font-semibold drop-shadow-[0_0_35px_rgba(225,29,72,0.6)]">It&apos;s Engineered Together.&rdquo;</span>
          </motion.h1>
        </div>

        {/* Right Side: Partner Awards Graphic Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/About-page/hero/partner-awards1.png"
            alt="Partner Awards & Certifications"
            className="w-full max-w-[550px] lg:max-w-[650px] h-auto object-contain mix-blend-screen opacity-95 filter contrast-125 hover:opacity-100 transition-opacity"
            onError={(e) => {
              // Fallback to partner-awards.png if partner-awards1.png is not found
              e.currentTarget.src = "/assets/About-page/hero/partner-awards.png";
            }}
          />
        </div>

      </div>
    </section>
  );
}
