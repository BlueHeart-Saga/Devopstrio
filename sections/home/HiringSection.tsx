"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Cpu, HardDrive, ShieldAlert } from "lucide-react";

export function HiringSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-[#050505] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
        
        <Reveal className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-center">
          
          {/* Left Block */}
          <div>
            <div className="flex items-center gap-2 mb-4">

              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
                CAREERS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-8">
              Join our team of <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">technical creators</span>.
            </h2>
            <p className="text-zinc-400 text-sm md:text-lg leading-relaxed font-bold max-w-md mb-8">
              We look for senior architects, database engineers, SRE specialists, and ML engineers who value precision, clean code, and zero organizational friction.
            </p>
            
            <a 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(225,29,72,0.25)] hover:-translate-y-0.5" 
              href="/contact"
            >
              Explore Open Roles <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Right Block: Open Roles Minimal List */}
          <div className="border border-zinc-900 bg-zinc-950/20 p-8 rounded-2xl flex flex-col gap-6 shadow-2xl relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.02),transparent_50%)] pointer-events-none" />
            <span className="text-xs font-mono tracking-wider text-zinc-500 uppercase pb-4 border-b border-zinc-900">
              ACTIVE ENGINEERING ROLES
            </span>
            
            <div className="flex justify-between items-center py-2 border-b border-zinc-900/60 last:border-b-0">
              <div>
                <span className="block text-sm font-semibold text-zinc-250">Senior Site Reliability Engineer</span>
                <span className="text-xs text-zinc-500 uppercase tracking-wide">Palo Alto // Hybrid</span>
              </div>
              <span className="text-[10px] font-mono text-rose-500 px-2 py-0.5 bg-rose-950/20 border border-rose-900/30 rounded">HOT</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-zinc-900/60 last:border-b-0">
              <div>
                <span className="block text-sm font-semibold text-zinc-250">Lead ML Platform Architect</span>
                <span className="text-xs text-zinc-500 uppercase tracking-wide">London // Hybrid</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 px-2 py-0.5 bg-zinc-900 border border-zinc-850 rounded">FULL_TIME</span>
            </div>

            <div className="flex justify-between items-center py-2 last:border-b-0">
              <div>
                <span className="block text-sm font-semibold text-zinc-250">Senior Cloud Security Engineer</span>
                <span className="text-xs text-zinc-500 uppercase tracking-wide">Bangalore // Hybrid</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 px-2 py-0.5 bg-zinc-900 border border-zinc-850 rounded">FULL_TIME</span>
            </div>
          </div>

        </Reveal>

      </div>
    </section>
  );
}
