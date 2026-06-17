"use client";

import React, { useState } from "react";
import { AlertCircle, CheckCircle, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { getCapability } from "@/data/services";
import { capabilityRegistry } from "@/data/services/dynamic-capabilities";
import { ServiceCapabilityInfo, CapabilityDetail } from "@/data/services/types";

interface ChallengesProps {
  serviceSlug: string;
  capabilities: ServiceCapabilityInfo[];
}

export function Challenges({ serviceSlug, capabilities }: ChallengesProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  // Fetch all capabilities for this service category from the registry (usually 8 items)
  const registryForService = capabilityRegistry[serviceSlug] || {};
  const registryCapabilities = Object.entries(registryForService).map(([slug, item]) => ({
    slug,
    title: item.title,
    description: item.desc
  }));

  // Fallback to the passed capabilities prop if registry is empty
  const activeCapabilities = registryCapabilities.length > 0 ? registryCapabilities : capabilities;

  // Load capability details dynamically
  const activeCapInfo = activeCapabilities[activeIdx];
  const capDetail = activeCapInfo
    ? (getCapability(serviceSlug, activeCapInfo.slug) as CapabilityDetail)
    : null;

  return (
    <section id="challenges" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.02),transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_right,rgba(244,63,94,0.02),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Section Header */}
        <Reveal>
          <div className="text-left max-w-3xl mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CHALLENGES & SOLUTIONS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white uppercase">
              Overcoming critical bottlenecks to <span className="text-rose-500">enable growth</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Explore the operational challenges inherent to these domains and the specific engineering solutions we implement.
            </p>
          </div>
        </Reveal>

        {/* Tabbed Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.4fr] gap-12 items-start">

          {/* Left Column: All Page-related Capabilities List */}
          <div className="flex flex-col gap-2 border-l border-zinc-900/60 pl-2">
            {activeCapabilities.map((cap, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={cap.slug}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full flex items-center justify-between text-left p-4 rounded-xl transition-all duration-300 group ${isActive
                      ? "bg-zinc-950 border border-zinc-800 text-white shadow-lg shadow-black/40"
                      : "text-zinc-500 hover:text-zinc-350 hover:bg-zinc-950/40 border border-transparent"
                    }`}
                >
                  <span className="text-[11px] md:text-xs font-bold tracking-wide uppercase">
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

          {/* Right Column: Active Challenge & Solution Cards with lists */}
          {capDetail && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

              {/* Challenge Box */}
              <Reveal className="h-full">
                <div className="h-full flex flex-col justify-between bg-zinc-950/40 border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-zinc-800/80 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.02),transparent_75%)] pointer-events-none" />

                  <div>
                    <div className="w-10 h-10 rounded-xl bg-red-950/20 border border-red-500/20 flex items-center justify-center text-red-500 mb-6">
                      <AlertCircle size={18} />
                    </div>
                    <h3 className="text-[11px] font-bold text-white uppercase tracking-widest mb-3">
                      Core Challenge
                    </h3>
                    <p className="text-xs md:text-sm text-zinc-400 font-semibold leading-relaxed mb-6">
                      {capDetail.challenge}
                    </p>
                  </div>

                  <div className="mt-auto border-t border-zinc-900/60 pt-4">
                    <span className="text-[10px] text-zinc-500 font-mono tracking-wider font-semibold">
                      IMPACT PATHWAY
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Solution Box (with nested feature lists) */}
              <Reveal delay={0.05} className="h-full">
                <div className="h-full flex flex-col justify-between bg-zinc-950/40 border border-rose-500/10 rounded-3xl p-8 relative overflow-hidden group hover:border-rose-500/30 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_75%)] pointer-events-none" />

                  <div className="flex flex-col h-full">
                    <div className="w-10 h-10 rounded-xl bg-rose-950/20 border border-rose-500/20 flex items-center justify-center text-rose-500 mb-6">
                      <CheckCircle size={18} />
                    </div>
                    <h3 className="text-[11px] font-bold text-white uppercase tracking-widest mb-3">
                      Devopstrio Solution
                    </h3>
                    <p className="text-xs md:text-sm text-zinc-200 font-semibold leading-relaxed mb-6">
                      {capDetail.solution}
                    </p>

                    {/* Solutions List: Deliverables */}
                    {capDetail.features && capDetail.features.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-zinc-900/60">
                        <h4 className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-2.5">
                          Solution Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {capDetail.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-[10px] md:text-[11px] text-zinc-300 font-semibold leading-relaxed">
                              <CheckCircle className="text-rose-500 flex-shrink-0 mt-0.5" size={11} />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Solutions List: Benefits */}
                    {capDetail.benefits && capDetail.benefits.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-zinc-900/60">
                        <h4 className="text-[9px] font-bold text-rose-500 uppercase tracking-widest mb-2.5">
                          Resolved Outcomes
                        </h4>
                        <ul className="space-y-2">
                          {capDetail.benefits.map((benefit, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2 text-[10px] md:text-[11px] text-zinc-200 font-semibold leading-relaxed">
                              <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 border-t border-zinc-900/60 pt-4">
                    <span className="text-[10px] text-rose-500 font-mono tracking-wider font-semibold">
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
