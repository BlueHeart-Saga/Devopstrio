"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

interface CapabilityUseCasesProps {
  features: string[];
}

const cardImages = [
  "/assets/services/usecase_integration.png",
  "/assets/services/usecase_security.png",
  "/assets/services/usecase_synergy.png",
  "/assets/services/usecase_governance.png"
];

const premiumTitles = [
  "Architectural Integration",
  "Quality & Security Gates",
  "Native Platform Synergy",
  "Continuous Governance"
];

export function CapabilityUseCases({ features }: CapabilityUseCasesProps) {
  return (
    <section id="use-cases" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
        <Reveal className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              Practice Objectives &amp; Targets
            </span>
          </div>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-6 text-white">
            Target engineering <span className="text-rose-500">deliverables</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const cardImg = cardImages[idx % cardImages.length];
            const cardTitle = premiumTitles[idx % premiumTitles.length];
            return (
              <Reveal key={idx} delay={idx * 0.03} className="h-full">
                <div className="h-full bg-zinc-950/45 border border-white/10 hover:border-rose-500/30 rounded-[32px] p-6 flex flex-col justify-between hover:bg-zinc-900/40 transition-all duration-300 relative group backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                  
                  {/* Padded Rounded Image Header */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 group/img border border-white/5">
                    <img
                      src={cardImg}
                      alt={cardTitle}
                      className="w-full h-full object-cover opacity-90 group-hover/img:scale-[1.03] transition-transform duration-700 pointer-events-none select-none"
                    />
                    {/* Soft reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Card Content & Action Button */}
                  <div className="flex flex-col flex-grow justify-between text-left">
                    <div>
                      {/* Step badge */}
                      <span className="block text-[9px] font-mono tracking-widest text-rose-500 uppercase font-bold mb-2">
                        TARGET 0{idx + 1}
                      </span>
                      <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-rose-500 transition-colors">
                        {cardTitle}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed font-semibold mb-6">
                        {feat}
                      </p>
                    </div>

                    {/* Microsoft-style circular button row */}
                    <div className="flex items-center gap-3 pt-4 mt-auto border-t border-white/5">
                      <span className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-455 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-500 transition-all duration-300">
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 group-hover:text-white transition-colors">
                        Explore practice
                      </span>
                    </div>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
