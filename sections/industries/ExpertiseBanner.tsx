"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Star, ShieldCheck, Sparkles, Award, CheckCircle2 } from "lucide-react";

const complianceLogos = [
  {
    name: "FDA",
    image: "/webp/assets/About-page/complience-Logos/FDA.webp",
    badge: "FDA COMPLIANT"
  },
  {
    name: "GDPR",
    image: "/webp/assets/About-page/complience-Logos/GDPR.webp",
    badge: "GDPR READY"
  },
  {
    name: "HIPAA",
    image: "/webp/assets/About-page/complience-Logos/HIPAA.webp",
    badge: "HIPAA SECURE"
  },
  {
    name: "ISO",
    image: "/webp/assets/About-page/complience-Logos/ISO.webp",
    badge: "ISO 27001"
  },
  {
    name: "NIST",
    image: "/webp/assets/About-page/complience-Logos/NIST.webp",
    badge: "NIST FRAMEWORK"
  }
];

export function ExpertiseBanner() {
  return (
    <section id="expertise" className="w-full pt-6 pb-14 md:pt-8 md:pb-18 bg-[#030303] relative overflow-hidden text-white font-sans">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-8 relative z-10 text-left">
        
        {/* Ultra-Premium Glassmorphic Banner with Metallic Silver Foil Border */}
        <div className="p-[1px] rounded-[36px] bg-gradient-to-r from-zinc-700/60 via-slate-300/40 via-50% to-zinc-700/60 shadow-[0_30px_90px_rgba(0,0,0,0.9)]">
          <div className="bg-gradient-to-b from-[#0e0f13] via-[#09090c] to-[#040405] rounded-[35px] p-8 lg:p-12 relative overflow-hidden flex flex-col gap-10">
            
            {/* Ambient Background Lighting Glows */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.06),transparent_70%)] blur-3xl pointer-events-none z-0" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] blur-3xl pointer-events-none z-0" />

            {/* Top Row: Title + Silver Star Badge + Stats */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between items-start lg:items-center relative z-10 w-full">
              
              {/* Left Column: Silver Star Badge & Headline */}
              <div className="lg:w-[65%]">
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

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white font-sans">
                    Co-engineered compliance & <span className="text-rose-500 font-bold">security benchmarks</span>
                  </h3>
                </Reveal>
              </div>

              {/* Right Column: Key Security Metrics */}
              <div className="lg:w-[35%] flex justify-start lg:justify-end gap-6 sm:gap-8 text-left relative z-10 w-full">
                <div className="border-l-2 border-rose-500/40 pl-4">
                  <span className="block text-3xl sm:text-4xl font-black text-rose-500 mb-1 font-mono">100%</span>
                  <span className="block text-xs sm:text-sm font-semibold tracking-widest text-zinc-400 uppercase">Audit readiness</span>
                </div>
                <div className="border-l-2 border-slate-300/40 pl-4">
                  <span className="block text-3xl sm:text-4xl font-black text-slate-200 mb-1 font-mono">ZERO</span>
                  <span className="block text-xs sm:text-sm font-semibold tracking-widest text-zinc-400 uppercase">Security Breaches</span>
                </div>
              </div>

            </div>

            {/* Bottom Row: Compliance Logos Only (No boxes, no text, clean & larger images) */}
            <div className="pt-6 border-t border-zinc-800/80 relative z-10 w-full">
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
