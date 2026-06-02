"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Compass, Eye } from "lucide-react";

export function MissionVision() {
  return (
    <section className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.01),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
        
        <Reveal className="mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              03 / DRIVING MISSION
            </span>
          </div>
          <h2 className="text-3xl font-light tracking-tight leading-tight">
            Clear standards guiding our <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">technical execution</span>.
          </h2>
        </Reveal>

        {/* 3D Half-in, Half-out Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 pt-8">
          
          {/* Card 1: Mission */}
          <div className="relative border border-zinc-900 bg-zinc-950/20 p-8 rounded-2xl flex flex-col justify-between shadow-2xl min-h-[260px] group hover:border-zinc-800 transition-colors duration-300">
            {/* The "Half-in, Half-out" badge */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 shadow-xl group-hover:border-rose-500/30 transition-all duration-300">
              <Compass size={20} strokeWidth={1.5} />
            </div>
            
            <div className="pt-6">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-3">
                MISSION STATEMENT
              </span>
              <h3 className="text-xl font-normal text-white mb-4">
                Accelerating Technical Autonomy
              </h3>
              <p className="text-xs md:text-sm text-zinc-405 leading-relaxed font-light">
                To build high-integrity, secure cloud systems and custom artificial intelligence pipelines that allow enterprises to scale autonomously, operate safely, and maintain full ownership of their intellectual assets.
              </p>
            </div>
          </div>

          {/* Card 2: Vision */}
          <div className="relative border border-zinc-900 bg-zinc-950/20 p-8 rounded-2xl flex flex-col justify-between shadow-2xl min-h-[260px] group hover:border-zinc-800 transition-colors duration-300">
            {/* The "Half-in, Half-out" badge */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 shadow-xl group-hover:border-rose-500/30 transition-all duration-300">
              <Eye size={20} strokeWidth={1.5} />
            </div>

            <div className="pt-6">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-3">
                VISION STATEMENT
              </span>
              <h3 className="text-xl font-normal text-white mb-4">
                The Enterprise Benchmark
              </h3>
              <p className="text-xs md:text-sm text-zinc-405 leading-relaxed font-light">
                To establish the benchmark for digital consultancy delivery, replacing standard hours-based consulting models with outcome-driven partnerships that deliver permanent technology advantages.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
