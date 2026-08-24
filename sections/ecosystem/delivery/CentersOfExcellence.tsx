"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { MapPin, Brain, Cloud, Workflow, Shield, Layout, UserCheck } from "lucide-react";

interface CenterItem {
  discipline: string;
  location: string;
  icon: React.ReactNode;
  desc: string;
  image: string;
}

export function CentersOfExcellence() {
  const centers: CenterItem[] = [
    {
      discipline: "AI & Data Engineering",
      location: "Bengaluru Office",
      icon: <Brain size={15} />,
      desc: "LLM pipeline tuning, RAG setups, and lakehouse compression routines.",
      image: "/assets/common/1b065043b6959827c05a0073c93a4a53-1.png"
    },
    {
      discipline: "Cloud Operations",
      location: "Chennai Office",
      icon: <Cloud size={15} />,
      desc: "SecOps monitoring, multicloud deployments, and performance optimization.",
      image: "/assets/common/260b761ad40c3ad2acba2c6666894539-1.png"
    },
    {
      discipline: "DevOps Automation",
      location: "Thoothukudi Office",
      icon: <Workflow size={15} />,
      desc: "Infrastructure as Code, Kubernetes deployments, and automated testing.",
      image: "/assets/common/2fe7f9184c515b0c515ce38bc8a25efa-1.png"
    },
    {
      discipline: "Enterprise Consulting",
      location: "London HQ",
      icon: <Shield size={15} />,
      desc: "Digital strategy, compliance audits, and program orchestration.",
      image: "/assets/common/315e4fdc6263bfd240f36297e376576e-1.png"
    },
    {
      discipline: "Customer Experience",
      location: "London Office",
      icon: <Layout size={15} />,
      desc: "Design workshops, executive briefings, and product demonstrations.",
      image: "/assets/common/37b9b888cc479ea7b74d2d9a05c37597-1.png"
    },
    {
      discipline: "North America Services",
      location: "Tennessee Office",
      icon: <UserCheck size={15} />,
      desc: "Managed support, incident responses, and client relationship logs.",
      image: "/assets/common/45ea830d170d382ade235db479060da7-1.png"
    }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal className="mb-20 text-center max-w-2xl mx-auto">
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

        {/* 3-Column Microsoft Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {centers.map((center, idx) => (
            <Reveal key={center.discipline} delay={idx * 0.05} className="h-full">
              <div className="group flex flex-col justify-between bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl overflow-hidden hover:shadow-[0_0_30px_rgba(244,63,94,0.06)] transition-all duration-300 h-full min-h-[360px]">
                
                {/* Top Image Banner */}
                <div className="relative w-full h-36 overflow-hidden bg-zinc-900 border-b border-zinc-900">
                  <img src={center.image}
                    alt={center.discipline}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-[0.85] group-hover:brightness-[0.95]"
                  loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                </div>

                {/* Content Area */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Icon wrapper & Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 group-hover:bg-rose-950/20 transition-all duration-300 shrink-0">
                        {center.icon}
                      </div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">{center.discipline}</h4>
                    </div>

                    <p className="text-xs text-zinc-400 font-semibold leading-relaxed">
                      {center.desc}
                    </p>
                  </div>

                  {/* Card Footer Location Indicator */}
                  <div className="mt-6 pt-4 border-t border-zinc-900/60 flex items-center gap-1.5 text-[10px] font-mono text-zinc-300 uppercase font-bold">
                    <MapPin size={11} className="text-rose-500 shrink-0" />
                    <span>{center.location}</span>
                  </div>

                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
