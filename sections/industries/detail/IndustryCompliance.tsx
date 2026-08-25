"use client";

import React from "react";
import { ShieldCheck, Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface IndustryComplianceProps {
  compliances: string[];
}

const complianceLogos = [
  { name: "FDA", image: "/webp/assets/About-page/complience-Logos/FDA.webp" },
  { name: "GDPR", image: "/webp/assets/About-page/complience-Logos/GDPR.webp" },
  { name: "HIPAA", image: "/webp/assets/About-page/complience-Logos/HIPAA.webp" },
  { name: "ISO", image: "/webp/assets/About-page/complience-Logos/ISO.webp" },
  { name: "NIST", image: "/webp/assets/About-page/complience-Logos/NIST.webp" }
];

export function IndustryCompliance({ compliances }: IndustryComplianceProps) {
  return (
    <section id="compliance" className="w-full py-20 md:py-28 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white font-sans">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-8 relative z-10 text-left">
        
        {/* Glassmorphic Outer Card container with Metallic Silver Foil Border */}
        <div className="p-[1px] rounded-[36px] bg-gradient-to-r from-zinc-700/60 via-slate-300/40 via-50% to-zinc-700/60 shadow-[0_30px_90px_rgba(0,0,0,0.9)]">
          <div className="bg-gradient-to-b from-[#0e0f13] via-[#09090c] to-[#040405] rounded-[35px] p-8 lg:p-14 relative overflow-hidden flex flex-col gap-12">
            
            {/* Ambient Background Glows */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.06),transparent_70%)] blur-3xl pointer-events-none z-0" />

            {/* Top Grid: Title & Badge on Left, Requirements Cards on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start relative z-10">
              
              {/* Left Column: Silver Star Badge & Heading */}
              <div className="relative z-10">
                <Reveal>
                  {/* Silver Star Rating / Enterprise Benchmark Badge */}
                  <div className="inline-flex items-center gap-3.5 px-5 py-2.5 rounded-full bg-zinc-900/95 border border-slate-300/40 text-slate-100 text-sm sm:text-base font-semibold tracking-wider uppercase shadow-[0_0_25px_rgba(255,255,255,0.15)] mb-6 font-sans">
                    <div className="flex items-center gap-1.5 text-slate-100">
                      <Star className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-slate-100 text-slate-100 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                      <Star className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-slate-100 text-slate-100 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                      <Star className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-slate-100 text-slate-100 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                      <Star className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-slate-100 text-slate-100 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                      <Star className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-slate-100 text-slate-100 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                    </div>
                    <span className="text-slate-100">CERTIFIED BENCHMARK</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white font-sans">
                    Regulatory safety & <span className="text-rose-500 font-bold">compliance alignment</span>
                  </h2>
                </Reveal>
              </div>

              {/* Right Column: Compliance Requirements List */}
              <div className="flex flex-col gap-4 relative z-10">
                {compliances.map((comp, idx) => {
                  const [title, desc] = comp.includes(":") ? comp.split(":") : [comp, ""];
                  return (
                    <Reveal key={idx} delay={idx * 0.05}>
                      <div className="group flex items-start gap-4 bg-[#0d0d0f] border border-white/10 p-5 rounded-[20px] hover:border-rose-500/40 hover:shadow-[0_8px_30px_rgba(225,29,72,0.12)] transition-all duration-300 relative overflow-hidden cursor-pointer">
                        
                        {/* Subtle Inner Glow on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
                        
                        {/* Shield Icon container */}
                        <div className="w-11 h-11 rounded-[14px] bg-rose-950/20 border border-rose-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 relative z-10 text-rose-500 group-hover:bg-rose-500 group-hover:text-black transition-all duration-300">
                          <ShieldCheck size={20} />
                        </div>

                        <div className="relative z-10">
                          <strong className="text-lg font-bold text-white mb-1.5 group-hover:text-rose-400 transition-colors duration-300 block font-sans">
                            {title.trim()}
                          </strong>
                          
                          {desc && (
                            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
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

            {/* Bottom Row: Compliance Logo Images Only (No boxes, no text, clean & larger images) */}
            <div className="pt-8 border-t border-zinc-800/80 relative z-10 w-full">
              <Reveal delay={0.15}>
                <div className="flex flex-wrap items-center justify-between sm:justify-around gap-6 sm:gap-10">
                  {complianceLogos.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-10 sm:h-12 md:h-14 w-auto object-contain filter brightness-110 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
