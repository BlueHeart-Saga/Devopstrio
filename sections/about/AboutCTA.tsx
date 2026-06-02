"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

export function AboutCTA() {
  return (
    <section className="w-full py-28 md:py-36 bg-[#050505] text-white border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.03),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 text-center">
        <Reveal className="max-w-3xl mx-auto flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              12 / COLLABORATE
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight mb-8">
            Build serious technology with engineers who <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">care about the runtime</span>.
          </h2>
          
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-10 max-w-lg">
            Let's discuss how our senior squads can support your cloud engineering, AI evaluation framework, or system refactoring.
          </p>

          <a 
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(225,29,72,0.25)] hover:-translate-y-0.5" 
            href="/contact"
          >
            Start a Conversation <ArrowUpRight size={14} />
          </a>

        </Reveal>
      </div>
    </section>
  );
}
