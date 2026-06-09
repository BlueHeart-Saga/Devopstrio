"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function IndustriesIntro() {
  return (
    <section className="w-full py-24 bg-black text-zinc-300 border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
        
        {/* Left Column Heading */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Core Capability
              </span>
            </div>
          </Reveal>
          
          <Reveal delay={0.05}>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              We bridge the gap between complex software design and domain-specific regulatory constraints.
            </h2>
          </Reveal>
        </div>

        {/* Right Column Paragraphs */}
        <div className="lg:col-span-7 lg:pt-10">
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6 text-zinc-400 text-sm font-light leading-relaxed">
              <p className="border-l-2 border-zinc-800 pl-4">
                Integrating AI models, setting up scalable microservice nodes, and scheduling database queries require special domain context. Financial structures demand strict audit trails; medical systems require encrypted patient privacy; logistics teams need low-latency routing calculations.
              </p>
              <p className="border-l-2 border-zinc-800 pl-4">
                At Devopstrio, our engineering teams are segmented by sector specialization. This structure ensures that your system builders understand your compliance frameworks, operations benchmarks, and security goals from day one.
              </p>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
