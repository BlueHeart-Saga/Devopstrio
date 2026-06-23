"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Linkedin } from "lucide-react";

interface Expert {
  name: string;
  role: string;
  avatar: string;
  linkedin: string;
}

const experts: Expert[] = [
  {
    name: "Manikandan",
    role: "Founder",
    avatar: "/assets/About-page/leader/Founder.png",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Raghavendra S",
    role: "Global Delivery Manager",
    avatar: "/assets/About-page/team/membars/Kishore2.png",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Kandan Krishnamurthy",
    role: "Global Delivery Manager, Development",
    avatar: "/assets/About-page/team/membars/sagadevan.png",
    linkedin: "https://linkedin.com"
  }
];

export function TalkToExpert() {
  return (
    <section className="w-full py-12 bg-black text-white relative overflow-hidden">
      {/* Background decoration matching Azure-like developer aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#08080a_1px,transparent_1px),linear-gradient(to_bottom,#08080a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-950/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <Reveal>
            <span className="inline-block px-3 py-1 text-[9px] font-bold tracking-[0.2em] uppercase text-rose-500 border border-rose-500/30 rounded-none bg-black/40 mb-2">
              Direct Access
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-white mb-3">
              Talk to an Expert
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
              Skip the sales discovery loop. Connect directly with our primary practice leads to discuss architecture, compliance standards, or team extensions.
            </p>
          </Reveal>
        </div>

        {/* Expert Cards Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {experts.map((expert, idx) => (
            <Reveal key={expert.name} delay={0.1 * idx + 0.1}>
              <div className="group relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-850 shadow-md">
                
                {/* 1. Full Bleed Image Portrait */}
                <img
                  src={expert.avatar}
                  alt={expert.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
                
                {/* Subtle dark gradient overlay to ensure readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* 2. Floating White Card Overlay (Matching screenshot style) */}
                <div className="absolute bottom-3 left-3 right-3 bg-white rounded-xl p-3 flex items-center justify-between shadow-md">
                  <div>
                    <h3 className="text-xs md:text-sm font-bold text-zinc-950 leading-tight">
                      {expert.name}
                    </h3>
                    <p className="text-[9px] md:text-[10px] text-zinc-500 font-semibold mt-0.5">
                      {expert.role}
                    </p>
                  </div>
                  <a 
                    href={expert.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 ml-3 hover:opacity-80 transition-opacity"
                    aria-label={`${expert.name} LinkedIn Profile`}
                  >
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  </a>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TalkToExpert;
