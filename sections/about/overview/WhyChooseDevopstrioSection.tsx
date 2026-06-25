"use client";

import React from "react";
import { Globe2, Cpu, Shield, Target } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function WhyChooseDevopstrioSection() {
  const pillars = [
    {
      num: "01",
      icon: Globe2,
      title: "Global Scale",
      desc: "Access elite engineering talent across our UK, European, and Indian delivery hubs, managed under a single flexible partnership model.",
      numColor: "text-[#64C4B2]",
      hoverColor: "group-hover:text-[#64C4B2] group-hover:border-[#64C4B2]/30",
      glowColor: "rgba(100, 196, 178, 0.04)",
      borderColor: "rgba(100, 196, 178, 0.2)"
    },
    {
      num: "02",
      icon: Cpu,
      title: "AI & Cloud Focus",
      desc: "Deep engineering expertise in GenAI workflows, lakehouse data architectures, and automated infrastructure co-development.",
      numColor: "text-[#9F8EC9]",
      hoverColor: "group-hover:text-[#9F8EC9] group-hover:border-[#9F8EC9]/30",
      glowColor: "rgba(159, 142, 201, 0.04)",
      borderColor: "rgba(159, 142, 201, 0.2)"
    },
    {
      num: "03",
      icon: Shield,
      title: "Zero-Trust Security",
      desc: "Compliance guardrails, secure Landing Zones, vulnerability management, and SRE frameworks embedded in every delivery.",
      numColor: "text-[#5EA5E0]",
      hoverColor: "group-hover:text-[#5EA5E0] group-hover:border-[#5EA5E0]/30",
      glowColor: "rgba(94, 165, 224, 0.04)",
      borderColor: "rgba(94, 165, 224, 0.2)"
    },
    {
      num: "04",
      icon: Target,
      title: "Outcome-Driven",
      desc: "We align project structures with direct business returns, cost optimization goals, and strict operational SLA assurances.",
      numColor: "text-[#86D16F]",
      hoverColor: "group-hover:text-[#86D16F] group-hover:border-[#86D16F]/30",
      glowColor: "rgba(134, 209, 111, 0.04)",
      borderColor: "rgba(134, 209, 111, 0.2)"
    }
  ];

  return (
    <section className="py-24 bg-[#030303] text-white relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_75%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-left">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              OUR ADVANTAGE
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white">
              Why Partner with Devopstrio?
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium mt-3">
              We help companies bridge the gap between complex technology architectures and high-impact business outcomes.
            </p>
          </Reveal>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Reveal key={idx} delay={idx * 0.05 + 0.05}>
                <div className="group relative rounded-[2rem] p-8 bg-[#0A0A0C]/55 border border-zinc-900/90 hover:border-zinc-800 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between min-h-[340px] text-center overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)]">
                  
                  {/* Subtle color-matching radial glow background on card hover */}
                  <div className="absolute -inset-px rounded-[2rem] transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none z-0"
                       style={{
                         background: `radial-gradient(circle at 50% 100%, ${p.glowColor}, transparent 65%)`,
                         border: `1px solid ${p.borderColor}`
                       }} />

                  <div className="relative z-10 flex flex-col items-center justify-between h-full w-full">
                    
                    {/* Top Portion: Infographic Slit & Number */}
                    <div className="w-full flex flex-col items-center">
                      <div className="relative w-full h-20 overflow-hidden flex items-end justify-center">
                        {/* Number peeking from slot */}
                        <span className={`text-[6.5rem] font-black font-sans leading-none tracking-tighter select-none translate-y-[24px] transition-transform duration-500 ease-out group-hover:translate-y-[8px] ${p.numColor}`}>
                          {p.num}
                        </span>
                        {/* Shadow overlay to give pocket slit depth */}
                        <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/40 to-transparent pointer-events-none opacity-20" />
                      </div>
                      
                      {/* Pocket Slit Horizontal Line */}
                      <div className="w-full h-px bg-zinc-850 relative">
                        <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-[#0A0A0C] to-transparent -translate-y-full opacity-90" />
                      </div>

                      {/* Title */}
                      <h3 className="text-sm font-bold uppercase tracking-wider text-white mt-7 mb-3 transition-colors duration-300">
                        {p.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed max-w-[210px]">
                        {p.desc}
                      </p>
                    </div>

                    {/* Bottom Portion: Icon */}
                    <div className={`w-9 h-9 rounded-full bg-zinc-950/80 border border-zinc-900 flex items-center justify-center text-zinc-500 mt-6 ${p.hoverColor} transition-all duration-500 group-hover:scale-110`}>
                      <Icon size={14} strokeWidth={2.5} />
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
