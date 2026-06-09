"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface IndustryComplianceProps {
  compliances: string[];
}

export function IndustryCompliance({ compliances }: IndustryComplianceProps) {
  return (
    <section id="compliance" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="bg-zinc-950/20 border border-zinc-900 rounded-3xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left relative overflow-hidden">
          {/* subtle background glow */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_70%)] blur-3xl pointer-events-none" />

          {/* Left Block */}
          <div>
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[2px] w-6 bg-rose-600"></span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  Governance & Audits
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-tight mb-4">
                Regulatory safety & <span className="font-semibold text-rose-500">compliance alignment</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed max-w-md">
                We develop software models under strict regulatory guidelines, integrating security audits, encrypted registries, and automated vulnerability scanners directly into our builds.
              </p>
            </Reveal>
          </div>

          {/* Right Block: Compliance Requirements */}
          <div className="flex flex-col gap-4">
            {compliances.map((comp, idx) => {
              const [title, desc] = comp.includes(":") ? comp.split(":") : [comp, ""];
              return (
                <Reveal key={idx} delay={idx * 0.05}>
                  <div className="flex items-start gap-4 bg-zinc-950/40 border border-zinc-900 p-5 rounded-2xl hover:border-zinc-800 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-rose-950/15 border border-rose-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ShieldCheck size={18} className="text-rose-500" />
                    </div>
                    <div>
                      <strong className="text-xs font-semibold text-zinc-200 block mb-1">
                        {title.trim()}
                      </strong>
                      {desc && (
                        <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                          {desc.trim()}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
