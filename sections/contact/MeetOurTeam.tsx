"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const keyLeaders = [
  { name: "Marcus Vance", role: "Principal Cloud Architect", expertise: "AWS specialist, managing secure landing zone design." },
  { name: "Elena Rostova", role: "Director of AI Practice", expertise: "Architecting governed multi-agent and LLM frameworks." },
  { name: "David Chen", role: "Head of Platform & SRE", expertise: "Specialist in CI/CD pipeline automation and drift control." },
  { name: "Sarah Jenkins", role: "VP of Cyber Governance", expertise: "Advising on SOC-2, HIPAA, and Zero-Trust network setups." }
];

export function MeetOurTeam() {
  return (
    <section className="w-full py-20 bg-[#030303] text-white relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">

        <Reveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              TECHNICAL LEADERSHIP
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight leading-tight">
            Meet our <span className="text-white font-bold bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">practices leaders</span>.
          </h2>
        </Reveal>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyLeaders.map((leader) => (
            <div
              key={leader.name}
              className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/20 hover:border-zinc-800 transition-colors group flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] font-mono text-rose-500 tracking-wider uppercase block mb-1">PRACTICE LEAD</span>
                <h3 className="text-sm font-semibold tracking-wide text-zinc-200 mb-1 group-hover:text-white transition-colors">
                  {leader.name}
                </h3>
                <span className="block text-[11px] text-zinc-450 font-normal uppercase tracking-wider mb-4">
                  {leader.role}
                </span>
                <p className="text-xs text-zinc-450 leading-relaxed font-bold">
                  {leader.expertise}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
