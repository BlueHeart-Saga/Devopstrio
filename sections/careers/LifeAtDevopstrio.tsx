"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import Link from "next/link";

export function LifeAtDevopstrio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section 
        id="culture"
        ref={containerRef}
        className="relative w-full h-[800px] md:h-[900px] bg-[#030303] overflow-hidden border-t border-b border-zinc-900"
      >
        {/* Dot Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-50 pointer-events-none" />
        
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.1),transparent_60%)] pointer-events-none blur-3xl z-0" />

        {/* Center Title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 drop-shadow-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-medium text-white tracking-tight text-center pointer-events-none"
          >
            Let's meet
          </motion.h2>
          <motion.svg 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-48 md:w-64 mt-2 mb-6 drop-shadow-[0_0_15px_rgba(225,29,72,0.5)] pointer-events-none" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 15C50 5 150 5 195 15" stroke="#E11D48" strokeWidth="4" strokeLinecap="round" />
          </motion.svg>
          {/* <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-xl font-bold uppercase tracking-[0.2em] text-zinc-400 pointer-events-none"
          >
            Life at Devopstrio
          </motion.p> */}
          {/* <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-xs md:text-sm text-zinc-500 font-bold max-w-xs mt-2 text-center pointer-events-auto z-20"
          >
            Explore our <Link href="/about/life" className="text-rose-500 hover:underline">culture and life</Link> details or read the <Link href="/about/overview" className="text-rose-500 hover:underline">company overview</Link>.
          </motion.p> */}
        </div>

        {/* --- SCATTERED IMAGES --- */}
        {/* Top Left Area */}
        <PhotoCard src="/webp/assets/About-page/events/Picture1.webp" className="top-[8%] left-[4%]" rotate={-4} />
        <PhotoCard src="/webp/assets/About-page/events/Picture2.webp" className="top-[25%] left-[12%]" rotate={5} />
        <PhotoCard src="/webp/assets/About-page/events/Picture3.webp" className="top-[45%] left-[5%]" rotate={-2} />
        <PhotoCard src="/webp/assets/About-page/events/Picture4.webp" className="top-[12%] left-[22%]" rotate={3} />
        <PhotoCard src="/webp/assets/About-page/events/Picture5.webp" className="top-[5%] left-[38%]" rotate={-6} />
        
        {/* Bottom Left Area */}
        <PhotoCard src="/webp/assets/About-page/events/Picture6.webp" className="bottom-[40%] left-[8%]" rotate={7} />
        <PhotoCard src="/webp/assets/About-page/events/Picture7.webp" className="bottom-[20%] left-[4%]" rotate={-3} />
        <PhotoCard src="/webp/assets/About-page/events/Picture8.webp" className="bottom-[8%] left-[15%]" rotate={4} />
        <PhotoCard src="/webp/assets/About-page/events/Picture9.webp" className="bottom-[25%] left-[25%]" rotate={-5} />
        <PhotoCard src="/webp/assets/About-page/events/Picture10.webp" className="bottom-[5%] left-[32%]" rotate={2} />

        {/* Top Right Area */}
        <PhotoCard src="/webp/assets/About-page/events/Picture11.webp" className="top-[10%] right-[5%]" rotate={4} />
        <PhotoCard src="/webp/assets/About-page/events/Picture12.webp" className="top-[30%] right-[15%]" rotate={-3} />
        <PhotoCard src="/webp/assets/About-page/events/Picture13.webp" className="top-[50%] right-[8%]" rotate={6} />
        <PhotoCard src="/webp/assets/About-page/events/Picture14.webp" className="top-[8%] right-[25%]" rotate={-5} />
        <PhotoCard src="/webp/assets/About-page/events/Picture15.webp" className="top-[20%] right-[35%]" rotate={2} />
        <PhotoCard src="/webp/assets/About-page/events/Picture16.webp" className="top-[5%] right-[45%]" rotate={-4} />

        {/* Bottom Right Area */}
        <PhotoCard src="/webp/assets/About-page/events/Picture17.webp" className="bottom-[35%] right-[5%]" rotate={-7} />
        <PhotoCard src="/webp/assets/About-page/events/Picture18.webp" className="bottom-[15%] right-[8%]" rotate={5} />
        <PhotoCard src="/webp/assets/About-page/events/Picture19.webp" className="bottom-[8%] right-[28%]" rotate={-2} />
        <PhotoCard src="/webp/assets/About-page/events/Picture20.webp" className="bottom-[25%] right-[22%]" rotate={4} />
        <PhotoCard src="/webp/assets/About-page/events/Picture21.webp" className="bottom-[5%] right-[42%]" rotate={-6} />

      </section>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-zoom-out backdrop-blur-sm"
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
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  function PhotoCard({ src, className, rotate }: { src: string, className: string, rotate: number }) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
        whileInView={{ opacity: 1, scale: 1, rotate }}
        viewport={{ once: true }}
        drag
        dragConstraints={containerRef}
        whileDrag={{ scale: 1.15, zIndex: 50, rotate: 0, boxShadow: "0 25px 50px -12px rgba(225, 29, 72, 0.3)" }}
        onClick={() => setSelectedImage(src)}
        className={`absolute p-2 pb-6 md:p-2 md:pb-8 bg-zinc-100 shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-zinc-300 cursor-grab active:cursor-grabbing z-10 hover:z-30 hover:scale-105 transition-transform duration-300 rounded-sm ${className}`}
      >
        <div className="w-24 h-24 md:w-36 md:h-36 bg-zinc-200 overflow-hidden shadow-inner border border-zinc-300/50">
          <img src={src} alt="Team Event" className="w-full h-full object-cover pointer-events-none" loading="lazy" />
        </div>
      </motion.div>
    );
  }
}
