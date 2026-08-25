"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface SubpageCapabilitiesProps {
  features: string[];
}

export function SubpageCapabilities({ features }: SubpageCapabilitiesProps) {
  return (
    <section id="features" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
        <Reveal className="mb-16">
          {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            CAPABILITIES
          </span> */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
            Co-engineered <span className="text-rose-500">deliverables</span>
          </h2>
          {/* <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mt-2 max-w-xl">
            Pre-packaged capability milestones and production assets validated against strategic architectural benchmarks.
          </p> */}
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-zinc-800 transition-all duration-300">
                <div>
                  <div className="flex items-center gap-2.5 mb-4 text-xs font-bold text-zinc-200">
                    <CheckCircle2 size={15} className="text-rose-500 flex-shrink-0" />
                    <span>Capability {(idx + 1).toString().padStart(2, "0")}</span>
                  </div>
                  <p className="text-base md:text-lg font-semibold text-zinc-300 leading-relaxed">
                    {feat}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
