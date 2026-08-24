"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface PrincipleItem {
  title: string;
  desc: string;
  image: string;
  action: string;
}

export function EngineeringPrinciples() {
  const principles: PrincipleItem[] = [
    { 
      title: "Build Once, Scale Everywhere", 
      desc: "Using containerization templates and modular service frameworks to ensure quick adaptations on AWS, Azure, or private hardware.", 
      image: "/assets/common/e76e125035885aab9c9070ce85df239e-1.png",
      action: "Explore framework"
    },
    { 
      title: "Security By Design", 
      desc: "Validating inputs, encrypting database records, and scanning container images before code gets merged into mainline branches.", 
      image: "/assets/common/f317dd71184f5c47d601eeb9508bf92c-1.png",
      action: "Verify standard"
    },
    { 
      title: "Automation First", 
      desc: "Replacing manual dashboard configurations with GitOps declarative files and script templates to prevent human setup errors.", 
      image: "/assets/common/ddb20908c846f1426649343fea590cb7-1.png",
      action: "View pipelines"
    },
    { 
      title: "Cloud Native Thinking", 
      desc: "Constructing microservices to run on auto-scalable serverless nodes or dynamic Kubernetes namespaces.", 
      image: "/assets/common/09ff7846bc8c9998745688779c09f88d-1.png",
      action: "Deploy nodes"
    },
    { 
      title: "Continuous Improvement", 
      desc: "Conducting post-incident write-ups and technology audits to continuously optimize load speeds and uptime parameters.", 
      image: "/assets/common/b384eb0438c55e43c61e7595acc29638-1.png",
      action: "Audit uptime"
    },
    { 
      title: "Customer-Centric Engineering", 
      desc: "Measuring application success against real-world user latency, availability, and onboarding satisfaction levels.", 
      image: "/assets/common/ed602acdfd41667c71b96f247eca6d4e-1.png",
      action: "Measure metrics"
    }
  ];

  return (
    <section id="principles" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.012] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            CORE MANDATES
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Engineering <span className="text-rose-500">Principles</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            Six architectural rules guiding the development, deployment, and security of every digital product we engineer.
          </p>
        </Reveal>

        {/* 3-Column Microsoft Card Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {principles.map((pr, idx) => (
            <Reveal key={pr.title} delay={idx * 0.05} className="h-full">
              <div
                className="bg-zinc-950/40 border border-zinc-900 rounded-[24px] p-6 hover:border-rose-500/20 hover:bg-zinc-900/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full min-h-[460px] group shadow-lg"
              >
                <div>
                  {/* Top Image Banner Container */}
                  <div className="relative w-full h-[180px] rounded-[16px] overflow-hidden bg-zinc-900/60 mb-6 border border-zinc-800/40">
                    <img src={pr.image}
                      alt={pr.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103 filter brightness-[0.8] group-hover:brightness-[0.9]"
                    loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-bold text-white mb-3 tracking-tight group-hover:text-rose-400 transition-colors duration-300">
                    {pr.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-zinc-400 font-semibold leading-relaxed mb-6">
                    {pr.desc}
                  </p>
                </div>

                {/* Left-Aligned Bottom Action Button */}
                <div className="mt-auto">
                  <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white transition-all duration-300 w-fit hover:shadow-[0_0_15px_rgba(244,63,94,0.3)]">
                    {pr.action}
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
