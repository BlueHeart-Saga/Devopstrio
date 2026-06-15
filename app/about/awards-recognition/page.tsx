"use client";

import React from "react";
import { Achievements } from "@/sections/about/Achievements";
import { AwardsList } from "@/sections/about/AwardsList";
import { MetricsStats } from "@/sections/about/MetricsStats";
import { AboutCTA } from "@/sections/about/AboutCTA";
import { Reveal } from "@/components/ui/Reveal";

export default function AwardsRecognitionPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      {/* Page Header */}
      <section className="pt-20 pb-4 text-center relative bg-[#030303]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Reveal>
            <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-3 font-bold">Awards & Acclaim</span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4 text-white leading-tight">
              Awards & <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Recognition</span>
            </h1>
            <p className="text-zinc-400 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Celebrating technical excellence, platform uptime records, and industry accolades across the DevOps and Cloud ecosystems.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content */}

       <div className="border-t border-zinc-900/60">
          <AwardsList />
        </div>


      <div className="bg-black flex flex-col gap-12">
        <Achievements />

       
        
        <div className="border-t border-zinc-900/60">
          <MetricsStats />
        </div>
        
        <AboutCTA />
      </div>
    </main>
  );
}
