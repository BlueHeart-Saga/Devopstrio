"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, ThumbsUp, Heart, User } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

export const SupportReviews = () => {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden flex items-center justify-center min-h-[600px] border-t border-zinc-900">
      
      {/* Huge Outlined Background Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none opacity-30 md:opacity-50">
        <h2 
          className="text-[150px] sm:text-[220px] md:text-[320px] leading-[0.75] font-black text-transparent tracking-tighter"
          style={{ WebkitTextStroke: "3px #84cc16" }}
        >
          feed
        </h2>
        <h2 
          className="text-[150px] sm:text-[220px] md:text-[320px] leading-[0.75] font-black text-transparent tracking-tighter"
          style={{ WebkitTextStroke: "3px #84cc16" }}
        >
          back
        </h2>
      </div>

      {/* Review Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-[32px] p-6 md:p-8 shadow-2xl mx-6"
      >
        {/* Overlapping Heart Bubble */}
        <div className="absolute -top-10 -right-4 md:-top-12 md:-right-12 w-24 h-24 md:w-32 md:h-32 bg-[#84cc16] rounded-3xl flex items-center justify-center shadow-lg transform rotate-3 hover:scale-105 transition-transform duration-300">
          <Heart className="w-12 h-12 md:w-16 md:h-16 text-white fill-white drop-shadow-md" />
          
          {/* Bubble Tail */}
          <div className="absolute -bottom-4 md:-bottom-5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-t-[20px] border-t-[#84cc16] border-r-[12px] border-r-transparent drop-shadow-md" />
        </div>

        {/* Card Header (Avatar + Name) */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-black border border-zinc-700 flex items-center justify-center shrink-0">
            <User className="w-8 h-8 text-zinc-300" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Emily R.</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-zinc-400 font-medium">Verified Google Review</span>
              <Image 
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png" 
                alt="Google"
                width={50}
                height={16}
                className="opacity-70 object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1.5 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-orange-400 fill-orange-400" />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-zinc-300 text-[14px] md:text-base leading-relaxed font-medium mb-5 pr-4">
          Devopstrio provided phenomenal support. Their engineers migrated our critical legacy infrastructure under our <Link href="/services/cloud-services" className="text-rose-500 hover:underline">cloud services</Link> seamlessly without any downtime. Every click landed exactly where it should, saving us countless hours. Highly recommended!
        </p>

        {/* Thumbs Up Action */}
        <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
          <ThumbsUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <span className="text-sm font-semibold">Helpful?</span>
        </button>

      </motion.div>

    </section>
  );
};
