"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function BusinessImpact() {
  const impacts = [
    {
      value: "-45%",
      label: "Infrastructure Spend"
    },
    {
      value: "4.8x",
      label: "Release Frequency"
    },
    {
      value: "Zero",
      label: "Configuration Drift"
    },
    {
      value: "95%",
      label: "Token Bill Savings"
    }
  ];

  return (
    <section id="impact" className="w-full pt-6 pb-14 md:pt-8 md:pb-18 bg-[#030303] relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <Reveal className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans leading-tight">
            Quantifiable <span className="text-rose-500 font-semibold">business impact</span>
          </h2>
        </Reveal>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {impacts.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="group h-full bg-gradient-to-br from-zinc-950/90 via-[#0d070a]/80 to-zinc-950/90 border border-white/10 rounded-3xl p-7 flex flex-col justify-between min-h-[170px] sm:min-h-[190px] hover:border-rose-500/40 hover:shadow-[0_12px_40px_rgba(244,63,94,0.15)] transition-all duration-500 relative overflow-hidden cursor-pointer backdrop-blur-md">
                
                {/* Subtle Inner Glow on Hover */}
                <div className="absolute -right-8 -top-8 w-44 h-44 bg-rose-500/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 my-auto">
                  {/* Big Viewable Metric Value */}
                  <span className="block text-5xl lg:text-6xl font-extrabold text-white group-hover:text-rose-400 transition-colors duration-300 mb-3 tracking-tight font-sans">
                    {item.value}
                  </span>
                  
                  {/* Improved Semibold Viewable Label */}
                  <h4 className="text-xl sm:text-2xl font-semibold text-zinc-200 group-hover:text-white transition-colors duration-300 leading-snug font-sans">
                    {item.label}
                  </h4>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
