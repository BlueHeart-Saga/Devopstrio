"use client";

import React, { useState } from "react";
import { AlertCircle, CheckCircle, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { getCapability } from "@/data/services";
import { ServiceCapabilityInfo } from "@/data/services/types";

interface ChallengesProps {
  serviceSlug: string;
  capabilities: ServiceCapabilityInfo[];
}

export function Challenges({ serviceSlug, capabilities }: ChallengesProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  // Load capability details dynamically (fallback handles it safely)
  const activeCapInfo = capabilities[activeIdx];
  const capDetail = activeCapInfo
    ? getCapability(serviceSlug, activeCapInfo.slug)
    : null;

  return (
    <section id="challenges" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.015),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Section Header */}
        <Reveal className="mb-16 text-left">
          <div className="flex items-center gap-2 mb-4">

            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              CHALLENGES & SOLUTIONS
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Overcoming critical bottlenecks to <span className="font-semibold text-rose-500">enable growth</span>
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mt-3 max-w-xl">
            Explore the operational challenges inherent to these domains and the specific engineering solutions we implement.
          </p>
        </Reveal>

        {/* Tabbed Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-12 items-start">

          {/* Left Column: Capabilities List */}
          <div className="flex flex-col gap-2 border-l border-zinc-900 pl-2">
            {capabilities.map((cap, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={cap.slug}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full flex items-center justify-between text-left p-4 rounded-xl transition-all duration-300 group ${isActive
                      ? "bg-zinc-950 border border-zinc-900 text-white shadow-lg shadow-black/40"
                      : "text-zinc-500 hover:text-zinc-350 hover:bg-zinc-950/40 border border-transparent"
                    }`}
                >
                  <span className="text-[11px] md:text-xs font-semibold tracking-wide">
                    {cap.title}
                  </span>
                  <ChevronRight
                    size={14}
                    className={`transition-transform duration-300 ${isActive ? "text-rose-500 translate-x-1" : "text-zinc-700 group-hover:text-zinc-500"
                      }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Challenge & Solution Cards */}
          {capDetail && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">

              {/* Challenge Box */}
              <Reveal className="h-full">
                <div className="h-full flex flex-col justify-between bg-gradient-to-b from-zinc-950 to-black border border-zinc-900 rounded-3xl p-8 relative overflow-hidden group hover:border-zinc-850 transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.015),transparent_75%)] pointer-events-none" />

                  <div>
                    <div className="w-10 h-10 rounded-xl bg-red-950/10 border border-red-900/20 flex items-center justify-center text-red-500 mb-6">
                      <AlertCircle size={18} />
                    </div>
                    <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-3">
                      Core Challenge
                    </h3>
                    <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                      {capDetail.challenge}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-zinc-900/60 pt-4">
                    <span className="text-[10px] text-zinc-500 font-mono tracking-wider">
                      IMPACT PATHWAY
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Solution Box */}
              <Reveal delay={0.05} className="h-full">
                <div className="h-full flex flex-col justify-between bg-gradient-to-b from-zinc-950 to-black border border-rose-950/30 rounded-3xl p-8 relative overflow-hidden group hover:border-rose-900/40 transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.025),transparent_75%)] pointer-events-none" />

                  <div>
                    <div className="w-10 h-10 rounded-xl bg-rose-950/15 border border-rose-900/20 flex items-center justify-center text-rose-500 mb-6">
                      <CheckCircle size={18} />
                    </div>
                    <h3 className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-3">
                      Devopstrio Solution
                    </h3>
                    <p className="text-xs md:text-sm text-zinc-300 font-light leading-relaxed">
                      {capDetail.solution}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-zinc-900/60 pt-4">
                    <span className="text-[10px] text-rose-500/80 font-mono tracking-wider">
                      RESOLVED OUTCOME
                    </span>
                  </div>
                </div>
              </Reveal>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
