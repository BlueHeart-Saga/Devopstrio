"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface ProgramItem {
  title: string;
  desc: string;
}

export function InnovationThroughEngineering() {
  const programs: ProgramItem[] = [
    { title: "Architecture Reviews", desc: "Systematic checks ensuring alignment with security policies and target scaling specifications." },
    { title: "Engineering Labs", desc: "R&D pods testing cloud-native platforms, green hosting patterns, and agentic workflows." },
    { title: "Internal Accelerators", desc: "Pre-built code models, deployment files, and API structures to minimize setup times." },
    { title: "Reusable Components", desc: "Pre-audited design elements, custom charts, and security components." },
    { title: "Platform Templates", desc: "Ready-to-use Next.js blueprints and infrastructure configurations." },
    { title: "AI-Assisted Development", desc: "LLM prompts, copilot setups, and type assertions to increase development speeds." }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            R&D PROGRAMS
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Innovation Through <span className="text-rose-500">Engineering</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            Our continuous improvement routines and accelerators created to speed up deployments and optimize platform security.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog) => (
            <div
              key={prog.title}
              className="bg-zinc-950/40 border border-zinc-900/80 rounded-2xl p-6 hover:border-rose-500/10 transition-all duration-300 min-h-[140px] flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">{prog.title}</h4>
                <p className="text-[10px] text-zinc-450 font-semibold leading-relaxed">
                  {prog.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
