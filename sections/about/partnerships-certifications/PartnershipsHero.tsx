"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowDown } from "lucide-react";

export function PartnershipsHero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("why-partnerships");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white pt-28 pb-20 sm:pt-32 sm:pb-24 z-10 font-sans">
      
      {/* Background Handshake Image Layer (Shifted Right with Zero Grey Body) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/webp/assets/About-page/hero/partnerships_hero_perfect.webp"
          alt="Partnerships and Enterprise Certifications Handshake"
          className="w-[104%] lg:w-[105%] max-w-none h-full object-cover object-right translate-x-[2%] sm:translate-x-[2.5%] lg:translate-x-[3.5%] opacity-90 filter contrast-105 brightness-100"
          loading="eager"
        />
        
        {/* Left Dark Gradient Overlay - Smooth & Subtle */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 sm:via-black/85 md:via-black/70 to-transparent w-full md:w-3/4 lg:w-[55%]" />
        
        {/* Soft, Subtle, Low-Intensity Ambient Backdrop Light */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(225,29,72,0.08),transparent_70%)] pointer-events-none" />
        <div className="absolute top-1/4 left-10 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[180px] pointer-events-none" />

        {/* Top and Bottom Smooth Blend Gradients */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none" />
      </div>

      {/* Main Content Container (z-10) */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-12 relative z-10 flex flex-col justify-center text-left py-8 sm:py-12">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Eyebrow Label - Subtle & Clean */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-5 sm:mb-6"
          >
            <div className="w-8 h-[2px] bg-rose-600/70 rounded-full" />
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.2em] text-zinc-400 uppercase">
              PARTNERSHIPS &amp; ENTERPRISE CERTIFICATIONS
            </span>
          </motion.div>

          {/* Main Hero Headline - Elegant & Calm */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-semibold tracking-tight leading-[1.08] text-white font-sans mb-6"
          >
            Stronger<br />
            Partnerships.<br />
            Greater Impact.
          </motion.h1>

          {/* Subtitle - Soft & Professional */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg font-normal leading-relaxed max-w-xl mb-10 text-left"
          >
            Trusted partners. Recognized certifications.<br />
            Built for what&apos;s next.
          </motion.p>

          {/* Partner Logos Strip - Clean Monochrome & Floating Without Stray Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-5 sm:gap-7 pt-2 sm:pt-3"
          >
            {/* AWS - Crisp & Clean */}
            <div className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors cursor-pointer group">
              <span className="font-bold text-base sm:text-lg tracking-tight lowercase font-sans text-zinc-300 group-hover:text-white transition-colors">
                aws
              </span>
              <svg className="w-4 h-2 text-zinc-400 group-hover:text-[#ff9900] transition-colors -mb-1" viewBox="0 0 24 10" fill="currentColor">
                <path d="M2.5 1C8.5 7 15.5 7 21.5 1c.5-.4 1.2.2.8.7C16.5 8.5 7.5 8.5 1.7 1.7c-.4-.5.3-1.1.8-.7z"/>
              </svg>
            </div>

            <div className="h-4 w-px bg-zinc-800 hidden sm:block" />

            {/* Microsoft */}
            <div className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer group">
              <svg className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 0h11.377v11.377H0zM12.623 0H24v11.377H12.623zM0 12.623h11.377V24H0zM12.623 12.623H24V24H12.623z" />
              </svg>
              <span className="text-xs sm:text-sm font-medium tracking-tight text-zinc-400 group-hover:text-white transition-colors">Microsoft</span>
            </div>

            <div className="h-4 w-px bg-zinc-800 hidden sm:block" />

            {/* Google Cloud */}
            <div className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer group">
              <svg className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
              </svg>
              <span className="text-xs sm:text-sm font-medium tracking-tight text-zinc-400 group-hover:text-white transition-colors">Google Cloud</span>
            </div>

            <div className="h-4 w-px bg-zinc-800 hidden sm:block" />

            {/* Enterprise Partners / Security Shield */}
            <div className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer group">
              <ShieldCheck className="w-4 h-4 text-zinc-400 group-hover:text-rose-400 transition-colors" />
              <span className="text-xs sm:text-sm font-medium tracking-tight text-zinc-400 group-hover:text-white transition-colors">Enterprise Partners</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Left Vertical Indicator Line & Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        onClick={scrollToNext}
        className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 lg:left-12 flex items-center gap-2.5 text-zinc-600 hover:text-zinc-300 transition-colors cursor-pointer group z-20"
        title="Scroll down"
      >
        <div className="w-[1.5px] h-5 bg-zinc-800 group-hover:bg-zinc-500 transition-colors" />
        <ArrowDown className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-y-1 transition-all duration-300" />
      </motion.div>

    </section>
  );
}

export default PartnershipsHero;
