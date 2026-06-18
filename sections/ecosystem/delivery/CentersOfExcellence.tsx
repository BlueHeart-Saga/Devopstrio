"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { MapPin, Brain, Cloud, Workflow, Shield, Layout, UserCheck } from "lucide-react";

interface CenterItem {
  discipline: string;
  location: string;
  icon: React.ReactNode;
  desc: string;
}

export function CentersOfExcellence() {
  const centers: CenterItem[] = [
    { discipline: "AI & Data Engineering", location: "Bengaluru", icon: <Brain size={16} />, desc: "LLM pipeline tuning, RAG setups, and lakehouse compression routines." },
    { discipline: "Cloud Operations", location: "Chennai", icon: <Cloud size={16} />, desc: "SecOps monitoring, multicloud deployments, and performance optimization." },
    { discipline: "DevOps Automation", location: "Thoothukudi", icon: <Workflow size={16} />, desc: "Infrastructure as Code, Kubernetes deployments, and automated testing." },
    { discipline: "Enterprise Consulting", location: "London HQ", icon: <Shield size={16} />, desc: "Digital strategy, compliance audits, and program orchestration." },
    { discipline: "Customer Experience", location: "London W1", icon: <Layout size={16} />, desc: "Design workshops, executive briefings, and product demonstrations." },
    { discipline: "North America Services", location: "Tennessee", icon: <UserCheck size={16} />, desc: "Managed support, incident responses, and client relationship logs." }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            CENTRALIZED EXPERTISE
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Global Centers <span className="text-rose-500">of Excellence</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            Specialized engineering and operational teams dedicated to specific technological domains across our footprint.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {centers.map((center) => (
            <div
              key={center.discipline}
              className="group flex flex-col justify-between p-6 bg-zinc-950/45 border border-zinc-900 hover:border-rose-500/10 rounded-2xl transition-all duration-300 min-h-[160px]"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 group-hover:bg-rose-950/20 transition-all duration-300">
                    {center.icon}
                  </div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{center.discipline}</h4>
                </div>
                <p className="text-[10px] text-zinc-450 font-semibold leading-relaxed">
                  {center.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-900/60 flex items-center gap-1.5 text-[9px] font-mono text-zinc-550 uppercase font-bold">
                <MapPin size={10} className="text-rose-500" />
                <span>LOCATION: {center.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
