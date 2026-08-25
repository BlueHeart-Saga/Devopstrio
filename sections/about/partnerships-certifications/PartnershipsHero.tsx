"use client";

import { motion } from "framer-motion";
import React from "react";

export function PartnershipsHero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303] text-white pt-24 pb-16 sm:py-24 z-10 font-sans">
      
      {/* Background Image Layer: bgimage.png */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/webp/assets/About-page/hero/bgimage.webp"
          alt="Hero Background"
          className="w-full h-full object-cover object-center opacity-75 filter contrast-110 brightness-110"
          loading="eager"
          onError={(e) => {
            e.currentTarget.src = "/webp/assets/About-page/hero/bgimage.webp";
          }}
        />
        {/* Soft Ambient Overlay Gradients for High Visibility & Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        {/* Ambient Red Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.15),transparent_70%)] blur-[140px]" />
      </div>

      {/* Main Content Container (50% Text Area Left-Aligned at Bottom) */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-20 flex flex-col items-start justify-end text-left mt-auto pb-12 sm:pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[3.75rem] font-semibold tracking-tight leading-[1.15] text-white font-sans w-full md:w-1/2 lg:w-1/2 max-w-2xl sm:max-w-3xl drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)]"
        >
          &ldquo;Great Innovation Is <br className="hidden sm:block" />
          Never Built Alone. <br className="hidden sm:block" />
          <span className="text-rose-500 font-semibold drop-shadow-[0_0_35px_rgba(225,29,72,0.6)]">It&apos;s Engineered Together.&rdquo;</span>
        </motion.h1>
      </div>
    </section>
  );
}

export default PartnershipsHero;
