"use client";

import React from "react";
import { AlertTriangle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

import Link from "next/link";

interface ChallengeItem {
  title: string;
  desc: React.ReactNode;
}

interface IndustryChallengesProps {
  challenges: ChallengeItem[];
}

export function IndustryChallenges({ challenges }: IndustryChallengesProps) {
  return (
    <section id="challenges" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-900/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-left">
        <Reveal className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
              Challenges We Solve
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white max-w-2xl">
            Key operational <span className="text-[#E11D48]">roadblocks</span> we address
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {challenges.map((chal, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="group h-full bg-zinc-950/30 backdrop-blur-md border border-zinc-800/40 hover:border-[#E11D48]/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col items-start relative overflow-hidden">
                
                {/* Micro hover gradient glow inside card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Animated Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-[#E11D48]/10 border border-[#E11D48]/20 flex items-center justify-center mb-6 text-[#E11D48] transition-transform duration-300 group-hover:scale-110">
                  <AlertTriangle size={20} />
                </div>
                
                {/* Title */}
                <h4 className="text-base font-bold text-white mb-3 tracking-tight group-hover:text-[#E11D48] transition-colors duration-300">
                  {chal.title}
                </h4>
                
                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                  {chal.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
