"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const timelineEvents = [
  { year: "2020", title: "Foundation", desc: "Devopstrio is founded in Palo Alto by three platform engineering veterans with a vision to eliminate consultancy overhead." },
  { year: "2022", title: "European Expansion", desc: "Opened the London office to deliver cloud modernization and zero-trust security services to EMEA fintech operations." },
  { year: "2024", title: "AI Practice Launch", desc: "Established the custom AI and agentic engineering practice, deploying governed vector engines and automated workflow platforms." },
  { year: "2026", title: "Global Scale", desc: "Expanded to 140+ senior architects across London, Palo Alto, and Bangalore, supporting global SaaS and public sector enterprises." }
];

export function OurStory() {
  return (
    <section className="w-full py-20 bg-[#050505] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">

        <Reveal className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                04 / OUR STORY & JOURNEY
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight">
              Built where strategy, architecture, and <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">execution meet</span>.
            </h2>
          </div>
          <div className="text-zinc-450 text-base md:text-lg leading-relaxed font-light">
            <p>
              We exist because enterprise cloud transformations often stall due to execution gaps. We provide integrated squads that understand application logic, database orchestration, security telemetry, and business objectives simultaneously.
            </p>
          </div>
        </Reveal>

        {/* Timeline List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-zinc-900/60">
          {timelineEvents.map((event) => (
            <div key={event.year} className="group relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl font-light text-rose-500 font-mono">
                  {event.year}
                </span>
                <span className="h-[1px] flex-1 bg-zinc-900 group-hover:bg-zinc-800 transition-colors" />
              </div>
              <h3 className="text-sm font-semibold tracking-wide text-zinc-200 mb-2 group-hover:text-white transition-colors">
                {event.title}
              </h3>
              <p className="text-xs text-zinc-450 leading-relaxed font-light">
                {event.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
