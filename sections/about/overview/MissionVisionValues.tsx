"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export function MissionVisionValues() {
  return (
    <section className="py-8 bg-[#030303] text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-16">

        {/* 1. Top Specialization Banner */}
        <Reveal>
          <div className="relative rounded-3xl p-8 md:p-10 bg-zinc-950/60 border border-zinc-900 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-2xl text-left">
              {/* <span className="text-xs md:text-sm font-extrabold tracking-[0.25em] uppercase text-rose-500 block mb-2 font-mono">ABOUT DEVOPSTRIO</span> */}
              <p className="text-lg md:text-xl font-bold tracking-tight text-zinc-100 leading-relaxed">
                We specialize in developing software solutions through the synergy of skilled professionals and efficient processes.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-8 shrink-0">
              {/* IAOP Badge */}
              <div className="flex items-center gap-4 border-r border-zinc-800 pr-8">
                <span className="text-zinc-500 text-xs font-mono tracking-widest uppercase">Member of</span>
                <span className="text-white font-black text-sm tracking-widest font-sans">IAOP</span>
              </div>

              {/* Clutch Review Badge */}
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

        {/* 2. Mission, Vision & Values Single Row Cards */}
        <Reveal>
          <div className="relative w-full">
            {/* Header */}
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
                Mission, Vision &amp;{" "}
                <span className="relative inline-block text-white px-1 mx-1 whitespace-nowrap">
                  <span className="text-white font-semibold relative z-10">Core Values</span>
                  {/* Continuous red pen sketch loop underline */}
                  <svg
                    className="absolute -bottom-5 -left-2 w-[calc(100%+20px)] h-8 text-rose-500 pointer-events-none overflow-visible z-0"
                    viewBox="0 0 300 32"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 0 19 C 60 14, 160 7, 294 4 C 300 4, 298 12, 288 12 L 12 19 C 4 19, 8 26, 25 26 L 80 26"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-95 filter drop-shadow-[0_0_8px_rgba(244,63,94,0.7)]"
                    />
                  </svg>
                </span>
              </h2>
            </div>

            {/* Single Row 3-Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              
              {/* Card 1: Core Values */}
              <div className="group relative rounded-3xl p-5 lg:p-6 bg-zinc-950/70 border border-zinc-900 hover:border-rose-500/50 transition-all duration-500 flex flex-col justify-between shadow-xl cursor-pointer hover:shadow-[0_20px_50px_rgba(225,29,72,0.15)] min-h-[360px] overflow-hidden">
                <div>
                  <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4 border border-zinc-900 bg-zinc-900">
                    <img
                      src="/assets/About-page/mission/core-value.png"
                      alt="Our Core Values"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight mb-1 group-hover:text-rose-400 transition-colors">
                    Core Values
                  </h3>
                  <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-rose-500 uppercase block mb-2">
                    OUR FOUNDATION
                  </span>
                </div>


                {/* Glassmorphism Backdrop Blur Overlay on Hover */}
                <div className="absolute inset-0 p-6 bg-black/80 backdrop-blur-md flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20 pointer-events-none group-hover:pointer-events-auto border border-rose-500/40 rounded-3xl">
                  <div className="flex flex-col justify-center h-full text-center space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      Core Values
                    </h3>
                    <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] text-rose-400 uppercase">
                      OUR FOUNDATION
                    </span>
                    <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed font-medium pt-2">
                      Leveraging technology to enable business transformation from strategy and design to cloud, AI, and DevOps.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-zinc-800 text-xs font-semibold text-zinc-300 flex justify-between">
                    <span>3,500+ Experts</span>
                    <span className="text-rose-500 font-bold">2,000+ Clients</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Mission */}
              <div className="group relative rounded-3xl p-5 lg:p-6 bg-zinc-950/70 border border-zinc-900 hover:border-rose-500/50 transition-all duration-500 flex flex-col justify-between shadow-xl cursor-pointer hover:shadow-[0_20px_50px_rgba(225,29,72,0.15)] min-h-[360px] overflow-hidden">
                <div>
                  <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4 border border-zinc-900 bg-zinc-900">
                    <img
                      src="/assets/About-page/mission/mission.png"
                      alt="Our Mission"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight mb-1 group-hover:text-rose-400 transition-colors">
                    Our Mission
                  </h3>
                  <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-rose-500 uppercase block mb-2">
                    OUR PURPOSE
                  </span>
                </div>


                {/* Glassmorphism Backdrop Blur Overlay on Hover */}
                <div className="absolute inset-0 p-6 bg-black/80 backdrop-blur-md flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20 pointer-events-none group-hover:pointer-events-auto border border-rose-500/40 rounded-3xl">
                  <div className="flex flex-col justify-center h-full text-center space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      Our Mission
                    </h3>
                    <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] text-rose-400 uppercase">
                      OUR PURPOSE
                    </span>
                    <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed font-medium pt-2">
                      To empower enterprises by simplifying complex technology into intelligent, AI-driven cloud ecosystems.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-zinc-800 text-xs font-semibold text-zinc-300 flex justify-between">
                    <span>AI Ecosystems</span>
                    <span className="text-rose-500 font-bold">Competitive Advantage</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Vision */}
              <div className="group relative rounded-3xl p-5 lg:p-6 bg-zinc-950/70 border border-zinc-900 hover:border-rose-500/50 transition-all duration-500 flex flex-col justify-between shadow-xl cursor-pointer hover:shadow-[0_20px_50px_rgba(225,29,72,0.15)] min-h-[360px] overflow-hidden">
                <div>
                  <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4 border border-zinc-900 bg-zinc-900">
                    <img
                      src="/assets/About-page/mission/vision.png"
                      alt="Our Vision"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight mb-1 group-hover:text-rose-400 transition-colors">
                    Our Vision
                  </h3>
                  <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-rose-500 uppercase block mb-2">
                    OUR FUTURE
                  </span>
                </div>


                {/* Glassmorphism Backdrop Blur Overlay on Hover */}
                <div className="absolute inset-0 p-6 bg-black/80 backdrop-blur-md flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20 pointer-events-none group-hover:pointer-events-auto border border-rose-500/40 rounded-3xl">
                  <div className="flex flex-col justify-center h-full text-center space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      Our Vision
                    </h3>
                    <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] text-rose-400 uppercase">
                      OUR FUTURE
                    </span>
                    <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed font-medium pt-2">
                      Architecting a future where software never fails, through the synergy of AI intelligence and human creativity.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-zinc-800 text-xs font-semibold text-zinc-300 flex justify-between">
                    <span>Resilient Foundations</span>
                    <span className="text-rose-500 font-bold">Zero-Failure Tech</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
