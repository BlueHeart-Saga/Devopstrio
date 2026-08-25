"use client";

import { motion } from "framer-motion";
import React from "react";

export function AwardsHero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303] text-white pt-24 pb-16 sm:py-24 z-10 font-sans">
      
      {/* Normal Full-Brightness Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/webp/assets/About-page/leadership/hero.webp" 
          alt="Awards Background"
          className="w-full h-full object-cover object-center opacity-100"
        loading="eager" />
        
        {/* Subtle top & bottom edge gradients for navbar integration */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/70 via-transparent to-[#030303]/90 z-10" />
        
        {/* Ambient Red Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.15),transparent_70%)] blur-[140px] z-10" />
      </div>

      {/* Main Container Aligned at Bottom-Center (Single Line Feel-Good Quote) */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-20 flex flex-col items-center justify-end text-center mt-auto pb-12 sm:pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold tracking-tight leading-snug text-white font-sans [text-shadow:_0_4px_30px_rgb(0_0_0_/_100%),_0_2px_10px_rgb(0_0_0_/_100%)] drop-shadow-[0_20px_40px_rgba(0,0,0,1)] max-w-5xl"
        >
          &ldquo;Every achievement is a celebration of our passion, teamwork and <span className="text-rose-500 font-semibold drop-shadow-[0_0_35px_rgba(225,29,72,0.9)]">dedication.&rdquo;</span>
        </motion.h1>
      </div>
    </section>
  );
}

export default AwardsHero;
