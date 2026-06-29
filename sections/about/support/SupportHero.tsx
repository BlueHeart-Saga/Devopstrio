"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const floatingIcons = [
  { name: "tiktok", bg: "bg-[#000000] border border-zinc-700", left: "5%", top: "20%", size: 48, delay: 0.1 }, 
  { name: "whatsapp", bg: "bg-[#25D366]", left: "8.5%", top: "46.7%", size: 56, delay: 0.2 }, 
  { name: "discord", bg: "bg-[#5865F2]", left: "18.2%", top: "69.5%", size: 64, delay: 0.3 }, 
  { name: "youtube", bg: "bg-[#FF0000]", left: "32.8%", top: "84.6%", size: 72, delay: 0.4 }, 
  
  { name: "instagram", bg: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]", left: "50%", top: "90%", size: 88, delay: 0.5 }, 
  
  { name: "facebook", bg: "bg-[#1877F2]", left: "67.2%", top: "84.6%", size: 72, delay: 0.6 }, 
  { name: "pinterest", bg: "bg-[#E60023]", left: "81.8%", top: "69.5%", size: 64, delay: 0.7 }, 
  { name: "reddit", bg: "bg-[#FF4500]", left: "91.5%", top: "46.7%", size: 56, delay: 0.8 }, 
  { name: "twitter", bg: "bg-[#1DA1F2]", left: "95%", top: "20%", size: 48, delay: 0.9 }, 
];

export const SupportHero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-24 pb-12">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(255,255,255,0.03),transparent)] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto relative h-[500px] md:h-[650px] mt-10 md:mt-0">
        
        {/* Floating Icons (Elliptical U-Shape Curve) */}
        {floatingIcons.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 15, 
              delay: item.delay 
            }}
            style={{ 
              left: item.left, 
              top: item.top,
              width: item.size,
              height: item.size,
            }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-white shadow-2xl ${item.bg}`}
          >
            {/* Inner subtle glow/border */}
            <div className="absolute inset-0 rounded-full border border-white/20" />
            <img 
              src={`https://cdn.simpleicons.org/${item.name}/white`}
              alt={item.name}
              style={{ width: item.size * 0.45, height: item.size * 0.45 }}
              className="drop-shadow-md object-contain"
            />
          </motion.div>
        ))}

        {/* Central Text Content */}
        <div className="absolute top-[8%] md:top-[12%] left-1/2 -translate-x-1/2 w-full max-w-[90%] md:max-w-2xl text-center z-20 flex flex-col items-center pointer-events-none">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 md:mb-8 rounded-full border border-zinc-700/60 bg-zinc-800/40 text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-zinc-300 backdrop-blur-md shadow-lg"
          >
            Omnichannel Support
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-6 leading-[1.1] tracking-tight"
          >
            Route issues to the<br className="hidden md:block" />
            right place, every time
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-[19px] text-zinc-400 max-w-[540px] mx-auto mb-10 leading-relaxed font-medium"
          >
            Enterprise support ensures every request lands exactly where it should, no matter the platform or device.
          </motion.p>

          <motion.a
            href="#support-request"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white hover:bg-zinc-200 text-black rounded-full font-semibold transition-all hover:scale-105 pointer-events-auto shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
          >
            Learn more
          </motion.a>
        </div>

      </div>
    </section>
  );
};
