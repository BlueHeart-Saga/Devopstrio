"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface CaseStudy {
  title: string;
  metric: string;
  desc: string;
  image: string;
}

export function ExcellenceSuccessStories() {
  const caseStudies: CaseStudy[] = [
    { 
      title: "Cloud Modernization", 
      metric: "70% faster deployments", 
      desc: "Reconfigured a legacy monolithic API system into decoupled serverless container services, optimizing database latency.",
      image: "/webp/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca-1.webp"
    },
    { 
      title: "SaaS Platform Scaling", 
      metric: "100K+ active users supported", 
      desc: "Deployed row-level data isolation schemes and unified Stripe billing models, supporting rapid tenant onboarding.",
      image: "/webp/assets/common/782e79a0bc5e9f58cb9af6a27727ca7b-1.webp"
    },
    { 
      title: "DevOps Transformation", 
      metric: "10x faster release cycles", 
      desc: "Configured self-service developer templates, automated release check gates, and GitOps loops to decrease ticket wait times.",
      image: "/webp/assets/common/82090d7be4ef5694954ce77f9cc2e627-1.webp"
    },
    { 
      title: "Security Modernization", 
      metric: "Compliance-ready setup", 
      desc: "Integrated automated SAST scanning and credentials rotation policies into CI steps to pass audits cleanly.",
      image: "/webp/assets/common/90361fed0bb781d7c86e451995b4dbce-1.webp"
    }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal className="mb-20 text-left">
          {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            CASE STUDIES
          </span> */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
            Success <span className="text-rose-500">Stories</span>
          </h2>
          {/* <p className="text-zinc-400 text-sm font-semibold max-w-2xl leading-relaxed">
            Real-world outcomes demonstrating the reliability and scaling benefits of our engineering practices.
          </p> */}
        </Reveal>

        {/* Microsoft-Style Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study, idx) => (
            <Reveal key={study.title} delay={idx * 0.05} className="h-full">
              <div className="group flex flex-col justify-between bg-zinc-950/45 border border-zinc-900 hover:border-rose-500/25 rounded-3xl overflow-hidden hover:shadow-[0_0_30px_rgba(244,63,94,0.06)] transition-all duration-300 h-full min-h-[220px]">
                
                {/* Top Image Banner */}
                <div className="relative w-full h-36 overflow-hidden bg-zinc-900 border-b border-zinc-900">
                  <img src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-[0.8] group-hover:brightness-[0.9]"
                  loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                </div>

                {/* Content Area */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h4 className="text-base md:text-lg font-semibold text-white uppercase tracking-wider mb-2 transition-colors duration-300 group-hover:text-rose-450">
                      {study.title}
                    </h4>
                    
                    {/* Big Bold Metric */}
                    <div className="text-lg md:text-xl font-semibold text-rose-500 tracking-tight mb-3">
                      {study.metric}
                    </div>

                    {/* Description */}
                    {/* <p className="text-[12px] text-zinc-400 font-semibold leading-relaxed">
                      {study.desc}
                    </p> */}
                  </div>

                  {/* Card Footer Verification */}
                  <div className="mt-6 pt-4 border-t border-zinc-900/60 flex items-center justify-between text-[9px] font-mono text-zinc-350 font-bold uppercase tracking-wider">
                    <span>VERIFIED OUTCOME</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(225,29,72,0.8)]" />
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
