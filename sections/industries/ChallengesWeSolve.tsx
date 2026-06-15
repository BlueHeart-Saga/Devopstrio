"use client";

import React from "react";
import { AlertTriangle, Layers, Cpu } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function ChallengesWeSolve() {
  const industryChallenges = [
    {
      icon: <AlertTriangle size={18} />,
      title: "Strict Compliance Auditing",
      desc: "Navigating regional data sovereign laws (GDPR, HIPAA, SOC-2) while maintaining high delivery velocity."
    },
    {
      icon: <Layers size={18} />,
      title: "Legacy Infrastructure Modernization",
      desc: "Decoupling mainframe architectures into containerized microservices without impacting live production traffic."
    },
    {
      icon: <Cpu size={18} />,
      title: "Data Silo Ingestion",
      desc: "Aggregating petabytes of unstructured files into clean, low-latency delta lakehouse storage units."
    }
  ];

  return (
    <section id="challenges" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 text-left">
        
        {/* Section Header */}
        <Reveal className="mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
              Pain Points Resolved
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white max-w-2xl">
            Key roadblocks we <span className="text-[#E11D48]">help you resolve</span>
          </h2>
        </Reveal>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pb-12">
          {industryChallenges.map((chal, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="group h-full bg-[#0b0b0c] border border-white/10 rounded-[24px] p-8 flex flex-col justify-between min-h-[220px] hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)] transition-all duration-300 relative overflow-hidden cursor-pointer">
                
                {/* Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                <div className="relative z-10">
                  {/* Icon Badge */}
                  <div className="w-10 h-10 rounded-[12px] bg-rose-950/15 border border-[#E11D48]/20 flex items-center justify-center text-[#E11D48] group-hover:bg-[#E11D48] group-hover:text-white transition-all duration-300 mb-6">
                    {chal.icon}
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-bold text-white mb-2 tracking-tight transition-colors duration-300">
                    {chal.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                    {chal.desc}
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
