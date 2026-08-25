"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface SuccessStory {
  title: string;
  metric: string;
  desc: string;
  image: string;
}

export function AcceleratorSuccessStories() {
  const stories: SuccessStory[] = [
    { 
      title: "Multi-Cloud Deployment", 
      metric: "8 weeks reduced to 5 days", 
      desc: "Configured target AWS and Azure landing zones using modular Terraform scripts, establishing secure network connections.",
      image: "/webp/assets/common/e76e125035885aab9c9070ce85df239e-1.webp"
    },
    { 
      title: "SaaS Product Launch", 
      metric: "MVP delivered in 60 days", 
      desc: "Built a subscription billing setup and tenant authorization interface using pre-built SaaS starter code, accelerating time-to-market.",
      image: "/webp/assets/common/f03cc521fb070dfae9d87768b791ff70-1.webp"
    },
    { 
      title: "AI Assistant Platform", 
      metric: "Production-ready in weeks", 
      desc: "Integrated pre-built AI agent routing models and vector search frameworks, launching an enterprise data assistant.",
      image: "/webp/assets/common/f317dd71184f5c47d601eeb9508bf92c-1.webp"
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
            VERIFIED HISTORIES
          </span> */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
            Success <span className="text-rose-500">Stories</span>
          </h2>
          {/* <p className="text-zinc-400 text-sm font-semibold max-w-2xl leading-relaxed">
            Real-world outcomes demonstrating how enterprise teams accelerate delivery times using our frameworks.
          </p> */}
        </Reveal>

        {/* 3-Column Microsoft Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stories.map((story, idx) => (
            <Reveal key={story.title} delay={idx * 0.05} className="h-full">
              <div className="group flex flex-col justify-between bg-zinc-950/45 border border-zinc-900 hover:border-rose-500/25 rounded-3xl overflow-hidden hover:shadow-[0_0_30px_rgba(244,63,94,0.06)] transition-all duration-300 h-full min-h-[220px]">
                
                {/* Top Image Banner */}
                <div className="relative w-full h-40 overflow-hidden bg-zinc-900 border-b border-zinc-900">
                  <img src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-[0.8] group-hover:brightness-[0.9]"
                  loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                </div>

                {/* Content Area */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h4 className="text-base md:text-lg font-semibold text-white uppercase tracking-wider mb-2 transition-colors duration-300 group-hover:text-rose-450">
                      {story.title}
                    </h4>
                    
                    {/* Bold Metric */}
                    <div className="text-lg md:text-xl font-semibold text-rose-500 tracking-tight mb-3">
                      {story.metric}
                    </div>

                    {/* Description */}
                    {/* <p className="text-xs md:text-sm text-zinc-400 font-semibold leading-relaxed">
                      {story.desc}
                    </p> */}
                  </div>

                  {/* Card Footer Verification */}
                  <div className="mt-6 pt-4 border-t border-zinc-900/60 flex items-center justify-between text-[9px] font-mono text-zinc-350 font-bold uppercase tracking-wider">
                    <span>VERIFIED ACCELERATION</span>
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
