"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "3+", label: "Continents" },
  { value: "24/7", label: "Operations" },
  { value: "99.9%", label: "Uptime" },
  { value: "Follow", label: "The Sun" },
];

export const GlobalPresenceHero = () => {
  return (
    <section className="relative min-h-screen flex items-end justify-start overflow-hidden bg-black text-white pb-24 md:pb-28">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img src="/webp/assets/About-page/global-presence-hero.webp" 
          alt="Devopstrio Global Presence"
          className="w-full h-full object-cover object-center"
        loading="eager" />
        {/* Deep cinematic gradients matching the leadership pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/95 z-10" />
      </div>

      {/* Content Container (Bottom Left-aligned) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 w-full text-left pt-32">
        <div className="max-w-2xl space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/25 bg-rose-950/20 text-rose-450 text-xs font-mono font-bold tracking-widest uppercase"
          >
            <MapPin className="w-3.5 h-3.5 text-rose-550 fill-rose-550/20" />
            Follow-the-Sun Operations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-white"
          >
            Global <br className="hidden sm:block" />
            <span className="text-rose-500">Presence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-sm md:text-base font-medium text-zinc-300 max-w-xl leading-relaxed"
          >
            With centers across the UK, USA, and India, our follow-the-sun model ensures <Link href="/services/devops-automation" className="text-rose-500 hover:underline">continuous software integration</Link>, database support, and active <Link href="/services/cloud-services" className="text-rose-500 hover:underline">cloud uptime</Link>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#locations"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-xs font-bold tracking-wider uppercase bg-[#E11D48] hover:bg-rose-600 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:-translate-y-0.5 gap-2"
            >
              View Locations
              <Globe className="w-3.5 h-3.5" />
            </a>
            <a
              href="/contact#contact-form"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-550 hover:border-white bg-transparent hover:bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5 gap-2"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Compact Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 border-t border-zinc-900/80 max-w-xl"
          >
            {stats.map((s, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-base font-black text-white hover:text-rose-500 transition-colors cursor-default">
                  {s.value}
                </span>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest font-mono">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
