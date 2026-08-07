"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const foundationItems = [
  {
    id: "vision",
    title: "Our Vision",
    badge: "OUR FUTURE",
    description: "To become a leading global IT support and helpdesk service provider known for innovation, reliability, and customer-centric solutions. Architecting a future where software never fails through the synergy of AI intelligence and human creativity.",
    image: "/assets/About-page/mission/vision.png",
    stat1: "Resilient Foundations",
    stat2: "Zero-Failure Tech"
  },
  {
    id: "mission",
    title: "Our Mission",
    badge: "OUR PURPOSE",
    description: "To empower enterprises by simplifying complex technology into intelligent, AI-driven cloud ecosystems. We partner with leaders to accelerate innovation across AI, Cloud, DevOps, and modern software engineering.",
    image: "/assets/About-page/mission/mission.png",
    stat1: "AI Ecosystems",
    stat2: "Competitive Advantage"
  },
  {
    id: "values",
    title: "Core Values",
    badge: "OUR FOUNDATION",
    description: "Leveraging technology to enable business transformation from strategy and design to cloud, AI, and DevOps. Built on integrity, engineering excellence, and customer success.",
    image: "/assets/About-page/mission/core-value.png",
    stat1: "3,500+ Experts",
    stat2: "2,000+ Clients"
  }
];

export function MissionVisionValues() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeItem = foundationItems[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % foundationItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + foundationItems.length) % foundationItems.length);
  };

  return (
    <section className="py-12 bg-[#030303] text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-16">

        {/* 1. Top Specialization Banner */}
        <Reveal>
          <div className="relative rounded-3xl p-8 md:p-10 bg-zinc-950/60 border border-zinc-900 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-2xl text-left">
              <p className="text-lg md:text-xl font-bold tracking-tight text-zinc-100 leading-relaxed">
                We specialize in developing software solutions through the synergy of skilled professionals and efficient processes.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-8 shrink-0">
              <div className="flex items-center gap-4 border-r border-zinc-800 pr-8">
                <span className="text-zinc-500 text-xs font-mono tracking-widest uppercase">Member of</span>
                <span className="text-white font-black text-sm tracking-widest font-sans">IAOP</span>
              </div>

              <div className="text-left">
                <div className="text-[10px] font-bold text-rose-500 uppercase tracking-widest mb-1">4.9 ON CLUTCH</div>
                <div className="flex items-center gap-0.5 text-amber-500 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                <div className="text-[11px] font-bold text-zinc-400">100+ reviews</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 2. Interactive Section */}
        <Reveal>
          <div className="relative w-full">
            {/* Previous Header (Restored) */}
            <div className="text-center max-w-2xl mx-auto mb-12 relative">
              {/* Left-to-right arrow PNG pointing to header */}
              <div className="absolute -top-6 sm:-top-8 md:-top-10 -left-6 sm:-left-10 md:-left-14 lg:-left-20 z-20 pointer-events-none select-none">
                <img
                  src="/assets/components/lefttoright.png"
                  alt="Left to right arrow"
                  className="w-12 sm:w-16 md:w-20 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                />
              </div>

              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-rose-400 text-xs sm:text-sm font-mono font-bold tracking-[0.25em] uppercase mb-4">
                FOUNDATION OF DEVOPSTRIO
              </span>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white leading-[1.45]">
                <span className="relative inline-block text-white px-1 mr-1 whitespace-nowrap">
                  <span className="text-white font-semibold relative z-10">Mission</span>
                  {/* Modern Pencil Art Hand-Sketched Underline */}
                  <svg
                    className="absolute -bottom-4 left-0 w-full h-5 text-rose-500 pointer-events-none overflow-visible z-0"
                    viewBox="0 0 250 20"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Primary artistic pencil stroke */}
                    <path
                      d="M 3 14 C 50 6, 130 17, 245 9"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      className="opacity-90 filter drop-shadow-[0_0_10px_rgba(244,63,94,0.6)]"
                    />
                    {/* Secondary graphite texture pencil stroke overlay */}
                    <path
                      d="M 12 17 C 75 11, 165 18, 238 12"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeDasharray="6 3 14 4"
                      className="opacity-75 filter drop-shadow-[0_0_5px_rgba(244,63,94,0.4)]"
                    />
                  </svg>
                </span>
                , Vision &amp;{" "}
                <span className="bg-rose-500 text-white font-semibold px-4 py-1 mx-1 rounded-xl inline-block">
                  Our Values
                </span>
              </h2>
            </div>

            {/* Navigation Category Pill Tabs */}
            {/* <div className="flex items-center justify-center gap-3 mb-10 overflow-x-auto pb-2 scrollbar-none">
              {foundationItems.map((item, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-rose-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.4)]"
                        : "bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800"
                    }`}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div> */}

            {/* 2-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[380px]">
              
              {/* Left Column: Title, Description, and Navigation Arrows */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-4 text-left"
                  >
                    <span className="text-xs font-mono font-bold tracking-[0.25em] text-rose-500 uppercase block">
                      {activeItem.badge}
                    </span>
                    
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                      {activeItem.title}
                    </h3>

                    <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal pt-2 max-w-xl">
                      {activeItem.description}
                    </p>

                    <div className="pt-4 flex items-center gap-6 text-xs sm:text-sm font-semibold text-zinc-400 border-t border-zinc-900">
                      <span>{activeItem.stat1}</span>
                      <span className="text-rose-500 font-bold">{activeItem.stat2}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Left/Right Navigation Arrows */}
                <div className="flex items-center gap-4 pt-4">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous slide"
                    className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center text-zinc-300 hover:text-white hover:border-rose-500 hover:bg-rose-500/10 transition-all duration-300 cursor-pointer shadow-md group active:scale-95"
                  >
                    <ArrowLeft size={20} className="transform group-hover:-translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={handleNext}
                    aria-label="Next slide"
                    className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center text-zinc-300 hover:text-white hover:border-rose-500 hover:bg-rose-500/10 transition-all duration-300 cursor-pointer shadow-md group active:scale-95"
                  >
                    <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column: Single High-Res Image Container */}
              <div className="lg:col-span-6 relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-900 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeItem.id}
                    src={activeItem.image}
                    alt={activeItem.title}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover select-none"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
