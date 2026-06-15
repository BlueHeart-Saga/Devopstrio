"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface IndustryComplianceProps {
  compliances: string[];
}

export function IndustryCompliance({ compliances }: IndustryComplianceProps) {
  return (
    <section id="compliance" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 text-left">
        
        {/* Glassmorphic Outer Card container matching IndustryOverview.tsx */}
        <div className="bg-[#0b0b0c] border border-white/10 rounded-[32px] p-8 lg:p-16 relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center text-left">
          
          {/* Subtle background glow */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] blur-3xl pointer-events-none z-0" />

          {/* Left Block: Narrative text */}
          <div className="relative z-10">
            <Reveal>
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500 mb-4 block">
                Governance & Audits
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
                Regulatory safety & <span className="text-[#E11D48]">compliance alignment</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                We develop software models under strict regulatory guidelines, integrating security audits, encrypted registries, and automated vulnerability scanners directly into our builds.
              </p>
            </Reveal>
          </div>

          {/* Right Block: Compliance Requirements Cards */}
          <div className="flex flex-col gap-4 relative z-10">
            {compliances.map((comp, idx) => {
              const [title, desc] = comp.includes(":") ? comp.split(":") : [comp, ""];
              return (
                <Reveal key={idx} delay={idx * 0.05}>
                  <div className="group flex items-start gap-4 bg-[#0d0d0f] border border-white/10 p-5 rounded-[20px] hover:border-rose-500/35 hover:shadow-[0_8px_24px_rgba(244,63,94,0.05)] transition-all duration-300 relative overflow-hidden cursor-pointer">
                    
                    {/* Subtle Inner Glow on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
                    
                    {/* Shield Icon container */}
                    <div className="w-10 h-10 rounded-[12px] bg-rose-950/15 border border-[#E11D48]/20 flex items-center justify-center flex-shrink-0 mt-0.5 relative z-10 text-[#E11D48] group-hover:bg-[#E11D48] group-hover:text-white transition-all duration-300">
                      <ShieldCheck size={18} />
                    </div>

                    <div className="relative z-10">
                      <strong className="text-sm font-bold text-white mb-1.5 group-hover:text-[#E11D48] transition-colors duration-300 block">
                        {title.trim()}
                      </strong>
                      
                      {desc && (
                        <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
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
