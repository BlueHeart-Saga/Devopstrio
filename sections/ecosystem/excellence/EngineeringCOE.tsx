"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

interface CoeItem {
  id: string;
  name: string;
  focus: string;
  desc: string;
  image: string;
}

export function EngineeringCOE() {
  const centers: CoeItem[] = [
    {
      id: "01",
      name: "Cloud Excellence",
      focus: "Azure, AWS, OCI",
      desc: "Deploying multi-region systems, load balancers, and cost optimization structures.",
      image: "/webp/assets/ecosystem/innovation-labs-page-Showcase-_Card/Cloud.webp"
    },
    {
      id: "02",
      name: "AI Excellence",
      focus: "LLMs, Agents, Automation",
      desc: "Connecting secure inference loops, agent routers, and vector pipelines.",
      image: "/webp/assets/ecosystem/innovation-labs-page-Showcase-_Card/AI.webp"
    },
    {
      id: "03",
      name: "DevOps Excellence",
      focus: "CI/CD, IaC, GitOps",
      desc: "Configuring Kubernetes clusters, Terraform scripts, and git workflow steps.",
      image: "/webp/assets/ecosystem/innovation-labs-page-Showcase-_Card/Devops.webp"
    },
    {
      id: "04",
      name: "Security Excellence",
      focus: "DevSecOps, Compliance",
      desc: "Setting up SAST scanning gates, compliance reviews, and least-privilege policies.",
      image: "/webp/assets/ecosystem/innovation-labs-page-Showcase-_Card/cyber.webp"
    },
    {
      id: "05",
      name: "Data Excellence",
      focus: "Analytics, Warehousing",
      desc: "Designing lakehouse database grids, stream processing, and SQL views.",
      image: "/webp/assets/ecosystem/innovation-labs-page-Showcase-_Card/Data.webp"
    }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.01] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-8 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal className="mb-16 text-center max-w-3xl mx-auto">
          {/* <span className="text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            VERIFIED PILLARS
          </span> */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
            Centers of <span className="text-rose-500">Excellence</span>
          </h2>
          {/* <p className="text-zinc-350 text-sm md:text-base font-semibold leading-relaxed">
            Specialized engineering capability practices designed to accelerate execution and secure software integrations.
          </p> */}
        </Reveal>

        {/* 5-Column Layout Grid with Tall Vertical Rectangle Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {centers.map((center, idx) => (
            <Reveal key={center.name} delay={idx * 0.05} className="h-full">
              <div
                className="bg-[#0a0a0c] hover:border-rose-500/50 hover:bg-zinc-900/40 hover:-translate-y-2 transition-all duration-300 rounded-3xl p-5 flex flex-col justify-between h-full group overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.6)] cursor-pointer"
              >
                <div>
                  {/* Vertical Rectangle Showcase Image Container */}
                  <div className="relative w-full h-[230px] md:h-[250px] rounded-2xl overflow-hidden mb-5 border border-zinc-800/70 bg-zinc-950">
                    <Image
                      src={center.image}
                      alt={center.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                    
                  </div>

                  {/* Title & Capability Focus */}
                  <h3 className="text-base md:text-lg font-semibold text-white uppercase tracking-wider mb-1.5 group-hover:text-rose-400 transition-colors">
                    {center.name}
                  </h3>
                  
                  {/* <span className="block text-[10px] md:text-xs font-mono text-rose-500/90 uppercase tracking-widest font-bold mb-3.5">
                    {center.focus}
                  </span> */}

                  {/* Description */}
                  {/* <p className="text-xs md:text-sm text-zinc-300 font-normal leading-relaxed">
                    {center.desc}
                  </p> */}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
