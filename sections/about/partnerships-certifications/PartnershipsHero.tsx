"use client";

import { motion } from "framer-motion";
import React from "react";
import { RibbonGraphic } from "@/components/ui/RibbonGraphic";

export function PartnershipsHero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303] text-white pt-24 pb-16 sm:py-24 z-10 font-sans">
      
      {/* Background Speaker Image Layer (Full Background, z-0) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/webp/assets/About-page/hero/bgimage.webp"
          alt="Hero Background"
          className="w-full h-full object-cover object-right md:object-center opacity-90 filter contrast-110 brightness-105"
          loading="eager"
          onError={(e) => {
            e.currentTarget.src = "/webp/assets/About-page/hero/bgimage.webp";
          }}
        />
        {/* Left Dark Gradient for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        
        {/* Right Edge & Corner Soft Black Fade */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-transparent to-transparent pointer-events-none" />
        
        {/* Top and Bottom Dark Theme Fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90 pointer-events-none" />

        {/* Soft Ambient Silver Glow Shadow (No Red Glow) */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] blur-[150px]" />
      </div>

      {/* 3D Ribbon Graphic Layer - Shifted slightly right (z-5) */}
      {/* <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 z-5 pointer-events-none overflow-hidden flex items-center justify-start">
        <RibbonGraphic className="w-full h-full opacity-85" />
      </div> */}

      {/* Main Content Container (z-10) */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-10 flex flex-col items-start justify-end text-left mt-auto pb-12 sm:pb-16">
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
