"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Layers, Workflow, GitMerge, Cpu } from "lucide-react";

interface LogoItem {
  name: string;
  src: string;
}

interface JointCard {
  title: string;
  logo1: LogoItem;
  logo2: LogoItem;
  badgeText: string;
  icon: React.ReactNode;
}

export function JointSolutions() {
  const cards: JointCard[] = [
    {
      title: "Enterprise Copilot Platform",
      logo1: { name: "Azure", src: "/assets/Tech_logos/Microsoft-Azure.svg" },
      logo2: { name: "OpenAI", src: "/assets/Tech-icons/openai-logo_svgstack_com_28971780931370.svg" },
      badgeText: "GenAI Interconnect",
      icon: <Cpu size={22} className="text-rose-500" />
    },
    {
      title: "Cloud Native Transformation",
      logo1: { name: "AWS", src: "/assets/Tech_logos/AWS.svg" },
      logo2: { name: "Kubernetes", src: "/assets/Tech_logos/Kubernetes.svg" },
      badgeText: "K8s Orchestration",
      icon: <Workflow size={22} className="text-rose-500" />
    },
    {
      title: "Modern Data Intelligence",
      logo1: { name: "Google Cloud", src: "/assets/Tech_logos/Google_Cloud.svg" },
      logo2: { name: "Snowflake", src: "/assets/Tech_logos/Snowflake.svg" },
      badgeText: "Data Analytics",
      icon: <Layers size={22} className="text-rose-500" />
    },
    {
      title: "Enterprise Process Modernization",
      logo1: { name: "Oracle (OCI)", src: "/assets/Tech_logos/Oracle_Cloud.svg" },
      logo2: { name: "SAP", src: "/assets/Tech_logos/sap.svg" },
      badgeText: "ERP Automation",
      icon: <GitMerge size={22} className="text-rose-500" />
    }
  ];

  return (
    <section id="solutions" className="w-full py-24 bg-black text-white border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 xl:px-8 relative z-10">
        
        {/* Header - Title Only */}
        <Reveal className="mb-14 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-white">
            Joint Solution <span className="text-rose-500">Accelerators</span>
          </h2>
        </Reveal>

        {/* 2x2 Grid of Joint Solutions with Real Logo Integrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cards.map((card, idx) => (
            <Reveal key={card.title} delay={idx * 0.1}>
              <div className="group flex flex-col justify-between p-8 bg-[#09090b] rounded-2xl transition-all duration-300 shadow-2xl h-full min-h-[250px]">
                
                {/* Title Header - Title Only */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-900/50">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center">
                      {card.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Real Logos Interconnect Workflow Panel - Borderless */}
                <div className="relative w-full bg-zinc-950/80 rounded-2xl p-6 md:p-8 flex items-center justify-between gap-3 overflow-hidden transition-all duration-300">
                  
                  {/* Left Real Logo */}
                  <div className="flex items-center justify-center z-10">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-zinc-900/90 flex items-center justify-center p-3 shadow-md group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={card.logo1.src}
                        alt={card.logo1.name}
                        className="w-9 h-9 md:w-10 md:h-10 object-contain filter brightness-100"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Interconnect Connector Line */}
                  <div className="flex-1 relative flex items-center justify-center px-1">
                    <div className="w-full h-[2px] bg-gradient-to-r from-rose-500/80 via-rose-500 to-rose-500/80 relative">
                      <div className="absolute inset-0 bg-rose-500 blur-sm opacity-60" />
                    </div>
                    <span className="absolute px-4 py-1.5 bg-zinc-950 border border-rose-500/30 text-rose-500 text-xs md:text-sm font-semibold tracking-wider rounded-full uppercase shadow-md whitespace-nowrap z-10">
                      {card.badgeText}
                    </span>
                  </div>

                  {/* Right Real Logo */}
                  <div className="flex items-center justify-center z-10">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-zinc-900/90 flex items-center justify-center p-3 shadow-md group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={card.logo2.src}
                        alt={card.logo2.name}
                        className="w-9 h-9 md:w-10 md:h-10 object-contain filter brightness-100"
                        loading="lazy"
                      />
                    </div>
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
