"use client";

import React from "react";
import { AlertTriangle, Layers, Cpu } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const industryChallenges = [
  {
    icon: <AlertTriangle className="w-6 h-6 text-rose-500" />,
    title: "Strict Compliance Auditing",
    desc: "Navigating regional data sovereign laws (GDPR, HIPAA, SOC-2) while maintaining high delivery velocity."
  },
  {
    icon: <Layers className="w-6 h-6 text-rose-500" />,
    title: "Legacy Infrastructure Modernization",
    desc: "Decoupling mainframe architectures into containerized microservices without impacting live production traffic."
  },
  {
    icon: <Cpu className="w-6 h-6 text-rose-500" />,
    title: "Data Silo Ingestion",
    desc: "Aggregating petabytes of unstructured files into clean, low-latency delta lakehouse storage units."
  }
];

export function ChallengesWeSolve() {
  return (
    <section id="challenges" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
        <Reveal className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              PAIN POINTS RESOLVED
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Key roadblocks we <span className="font-semibold text-rose-500">help you resolve</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industryChallenges.map((chal, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="h-full bg-zinc-955/15 border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/20 transition-all">
                <div className="w-10 h-10 rounded bg-rose-955/15 border border-rose-900/20 flex items-center justify-center mb-6">
                  {chal.icon}
                </div>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">{chal.title}</h4>
                <p className="text-[10px] text-zinc-550 leading-relaxed font-light">{chal.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
