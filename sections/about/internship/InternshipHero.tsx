"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export const InternshipHero = () => {
  const handleScrollToForm = () => {
    const el = document.getElementById("apply-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-screen bg-black text-white flex items-end justify-start overflow-hidden font-sans select-none pb-14 sm:pb-20 lg:pb-24">
      {/* Background Image */}
      <img
        src="/assets/About-page/hero/bg-intern.png"
        alt="Global Internship Program"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none scale-[1.01]"
      />

      {/* Dark Gradient Overlays for Smooth Contrast & Navbar Blend */}
      <div className="absolute inset-0 bg-black/35 z-10 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black via-black/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-64 sm:h-80 bg-gradient-to-t from-black via-black/85 via-50% to-transparent z-10 pointer-events-none" />

      {/* Left Bottom Content Container */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-start gap-4 sm:gap-5"
        >
          {/* Interactive GIF Container with Hover Tooltip & Click-to-Scroll */}
          <div 
            onClick={handleScrollToForm}
            className="relative group cursor-pointer"
            title="Click to apply & join our team"
          >
            {/* Tooltip (Appears above GIF on hover) */}
            <div className="absolute -top-12 left-0 sm:left-1/2 sm:-translate-x-1/2 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-30 whitespace-nowrap">
              <div className="bg-rose-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-[0_10px_25px_rgba(225,29,72,0.6)] flex items-center gap-1.5 border border-rose-400/30">
                <Sparkles size={13} className="animate-pulse text-rose-200" />
                <span>Ready to join our team? Click to Apply</span>
                <ArrowDown size={13} className="animate-bounce" />
              </div>
              {/* Tooltip tail */}
              <div className="w-2.5 h-2.5 bg-rose-600 rotate-45 mx-auto -mt-1.5 shadow-sm" />
            </div>

            {/* Animated GIF Icon */}
            {/* <img
              src="/assets/components/XOsX.gif"
              alt="Devopstrio Innovation GIF - Click to Join Our Team"
              className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain rounded-2xl filter drop-shadow-[0_6px_25px_rgba(244,63,94,0.5)] group-hover:scale-110 group-hover:drop-shadow-[0_8px_35px_rgba(244,63,94,0.8)] transition-all duration-300"
            /> */}
          </div>

          {/* Quote Text */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-medium text-zinc-100 tracking-tight leading-relaxed font-sans drop-shadow-[0_4px_25px_rgba(0,0,0,0.95)] max-w-6xl">
            "Join our team as we work together to pioneer next-generation innovation — empowering curious minds to learn, build real-world tech, and shape the future with <span className="text-rose-500 font-extrabold">heart</span>."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
