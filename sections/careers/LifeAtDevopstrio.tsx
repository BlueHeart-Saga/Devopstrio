"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function LifeAtDevopstrio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section 
        ref={containerRef}
      className="relative w-full h-[800px] md:h-[900px] bg-[#f8f9fb] overflow-hidden border-t border-b border-zinc-200"
    >
      {/* Dot Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
      
      {/* Center Title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 pointer-events-none">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-medium text-zinc-900 tracking-tight"
        >
          Let's meet
        </motion.h2>
        <motion.svg 
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-48 md:w-64 mt-2 mb-6" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 15C50 5 150 5 195 15" stroke="#ff8da1" strokeWidth="4" strokeLinecap="round" />
        </motion.svg>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-base md:text-xl font-bold uppercase tracking-[0.2em] text-zinc-500"
        >
          Life at Devopstrio
        </motion.p>
      </div>

      {/* --- TOP LEFT QUADRANT --- */}
      <WhiteCard text="Raghavendra, Global Delivery" className="top-[15%] left-[8%] md:left-[12%]" rotate={-2} />
      <StickyNote text="Manikandan, Founder & CEO" color="bg-[#ffea79] text-zinc-900" className="top-[18%] left-[20%] md:left-[25%]" rotate={3} />
      <PhotoCard src="/assets/careers/lifeat-devopstrio/1.png" className="top-[35%] left-[5%] md:left-[15%]" rotate={-4} />
      <PhotoCard src="/assets/careers/lifeat-devopstrio/4.png" className="top-[60%] left-[8%] md:left-[12%]" rotate={5} />

      {/* --- BOTTOM LEFT QUADRANT --- */}
      <Emoji symbol="🔥" className="bottom-[45%] left-[25%]" />
      <StickyNote text="Kandan, Development" color="bg-[#ffcce5] text-zinc-900" className="bottom-[15%] left-[10%] md:left-[20%]" rotate={-5} />
      <PhotoCard src="/assets/careers/lifeat-devopstrio/5.png" className="bottom-[5%] left-[25%] md:left-[28%]" rotate={-6} />
      <Emoji symbol="💥" className="bottom-[35%] left-[8%] text-red-500 scale-150 opacity-60" />

      {/* --- TOP RIGHT QUADRANT --- */}
      <WhiteCard text="Jonas, Cloud Architect" className="top-[18%] right-[32%]" rotate={1} />
      <StickyNote text="Security & Compliance" color="bg-[#a3e635] text-zinc-900" className="top-[20%] right-[10%] md:right-[15%]" rotate={-3} />
      <PhotoCard src="/assets/careers/lifeat-devopstrio/2.png" className="top-[40%] right-[30%]" rotate={4} />
      <PhotoCard src="/assets/careers/lifeat-devopstrio/6.png" className="top-[10%] right-[5%] md:right-[10%]" rotate={-8} />
      <Emoji symbol="👋" className="top-[15%] right-[28%]" />

      {/* --- BOTTOM RIGHT QUADRANT --- */}
      <StickyNote text="Global Network" color="bg-[#60a5fa] text-white" className="bottom-[15%] right-[15%] md:right-[20%]" rotate={2} />
      <PhotoCard src="/assets/careers/lifeat-devopstrio/3.png" className="bottom-[8%] right-[40%] md:right-[35%]" rotate={-2} />
      <PhotoCard src="/assets/careers/lifeat-devopstrio/7.png" className="bottom-[35%] right-[8%] md:right-[12%]" rotate={7} />
      <PhotoCard src="/assets/careers/lifeat-devopstrio/8.png" className="bottom-[55%] right-[25%] md:right-[30%]" rotate={-3} />
      <Emoji symbol="😂" className="bottom-[25%] right-[40%]" />
      
      {/* Central-ish Items */}
      <WhiteCard text="DevOps Engineers" className="bottom-[30%] left-[42%] bg-[#fbbf24]" rotate={-2} />

    </section>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-12 cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all z-50"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Full size view"
              className="max-w-full max-h-full object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.1)] rounded-xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  // --- Sub-Components --- //

  function StickyNote({ text, color, className, rotate }: { text: string, color: string, className: string, rotate: number }) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
        whileInView={{ opacity: 1, scale: 1, rotate }}
        viewport={{ once: true }}
        drag
        dragConstraints={containerRef}
        whileDrag={{ scale: 1.1, zIndex: 50, rotate: 0, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
        className={`absolute w-36 h-36 md:w-48 md:h-48 p-4 shadow-md flex items-center justify-center text-center cursor-grab active:cursor-grabbing font-medium text-sm md:text-lg z-10 hover:z-30 transition-shadow ${color} ${className}`}
      >
        {text}
      </motion.div>
    );
  }

  function WhiteCard({ text, className, rotate }: { text: string, className: string, rotate: number }) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
        whileInView={{ opacity: 1, scale: 1, rotate }}
        viewport={{ once: true }}
        drag
        dragConstraints={containerRef}
        whileDrag={{ scale: 1.1, zIndex: 50, rotate: 0, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
        className={`absolute px-4 py-6 bg-white shadow-sm border border-zinc-100 flex items-center justify-center text-center cursor-grab active:cursor-grabbing text-[10px] md:text-xs text-zinc-600 font-medium z-10 hover:z-30 transition-shadow ${className}`}
      >
        {text}
      </motion.div>
    );
  }

  function PhotoCard({ src, className, rotate }: { src: string, className: string, rotate: number }) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
        whileInView={{ opacity: 1, scale: 1, rotate }}
        viewport={{ once: true }}
        drag
        dragConstraints={containerRef}
        whileDrag={{ scale: 1.1, zIndex: 50, rotate: 0, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)" }}
        onClick={() => setSelectedImage(src)}
        className={`absolute p-2 pb-8 md:p-3 md:pb-12 bg-white shadow-lg border border-zinc-200 cursor-grab active:cursor-grabbing z-10 hover:z-30 hover:scale-105 transition-transform duration-300 ${className}`}
      >
        <div className="w-24 h-24 md:w-36 md:h-36 bg-zinc-100 overflow-hidden shadow-inner">
          <img src={src} alt="Team Member" className="w-full h-full object-cover pointer-events-none" />
        </div>
      </motion.div>
    );
  }

  function Emoji({ symbol, className }: { symbol: string, className: string }) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        drag
        dragConstraints={containerRef}
        whileDrag={{ scale: 1.5, zIndex: 50 }}
        className={`absolute text-3xl md:text-5xl cursor-grab active:cursor-grabbing z-10 ${className}`}
      >
        {symbol}
      </motion.div>
    );
  }
}
