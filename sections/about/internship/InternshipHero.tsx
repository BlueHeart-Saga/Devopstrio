"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Terminal } from "lucide-react";
import Image from "next/image";

const carouselCards = [
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600", label: "Cloud Architecture" },
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600", label: "AI & Machine Learning" },
  { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600", label: "DevOps & SRE" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600", label: "Cybersecurity" },
  { src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600", label: "Data Engineering" },
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600", label: "Software Development" },
];

export const InternshipHero = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center overflow-hidden bg-black pt-32 pb-24">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(225,29,72,0.08),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center relative z-10">
        
        {/* Top Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-medium shadow-sm">
            <Target size={14} className="text-rose-500" />
            <span>Finally, Internships that Actually Convert</span>
          </div>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium text-center text-white tracking-tight leading-[1.1] max-w-5xl mb-6"
        >
          Launch Your <span className="text-rose-500">Technology</span> Career
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-zinc-400 text-center max-w-2xl leading-relaxed mb-10"
        >
          Devopstrio is the premier engineering incubator, creating AI, Cloud, and Data experts that regularly deliver 50% to 500% more impact on real-world projects.
        </motion.p>

        {/* The Action Button (styled exactly like the image: black background, red left square icon block) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-24"
        >
          <button
            onClick={() => handleScroll("apply-form")}
            className="flex items-center gap-3 p-1.5 pr-6 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white rounded-xl transition-all duration-300 shadow-xl group"
          >
            {/* Red icon block inside button */}
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center shadow-inner">
              <Terminal size={18} className="text-white" />
            </div>
            <span className="font-semibold text-sm">Apply for Internship</span>
          </button>
        </motion.div>

      </div>

      {/* Full-width Carousel of Portrait Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full relative z-10 flex gap-4 overflow-hidden px-4 md:px-0 justify-center"
      >
        {/* Horizontal scroll container with hidden scrollbar */}
        <div className="flex gap-4 md:gap-6 w-full max-w-[1600px] mx-auto overflow-x-auto pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory px-4 md:px-8">
          {carouselCards.map((card, idx) => (
            <div 
              key={idx} 
              className="relative shrink-0 w-[240px] md:w-[280px] aspect-[3/4] rounded-[2rem] overflow-hidden snap-center group cursor-pointer border border-zinc-800 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-zinc-700 transition-colors"
            >
              {/* Background Image */}
              <Image 
                src={card.src} 
                alt={card.label} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              
              {/* Gradient Overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />

              {/* Top Glass Pill inside Card */}
              <div className="absolute top-5 inset-x-5 flex justify-center">
                <div className="inline-flex items-center gap-2 py-2 px-3 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white/90 text-[10px] sm:text-xs font-semibold shadow-sm w-full">
                  <div className="w-5 h-5 shrink-0 rounded-full bg-black/80 flex items-center justify-center">
                    <Terminal size={10} className="text-rose-500" />
                  </div>
                  <span className="truncate">Master {card.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
