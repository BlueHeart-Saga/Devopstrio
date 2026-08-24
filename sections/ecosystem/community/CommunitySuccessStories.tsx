"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface CaseStory {
  title: string;
  metric: string;
  desc: string;
  image: string;
}

export function CommunitySuccessStories() {
  const stories: CaseStory[] = [
    { 
      title: "From Student to Cloud Architect", 
      metric: "Graduate joins architecture team", 
      desc: "Joined Devopstrio via university bootcamps, earned multi-cloud credentials, and now orchestrates AWS landing zones.",
      image: "/assets/common/945ab601f043c558e0a8162da2a1eb4c-1.png"
    },
    { 
      title: "Community Contributor to Team Lead", 
      metric: "Open source contributor promoted", 
      desc: "Contributed modular Helm charts to our public repository, transitioned to full-time engineer, and now leads the DevOps group.",
      image: "/assets/common/9d230407fdcdb1a78debc2abe0ff1925-1.png"
    },
    { 
      title: "Certification to Career Growth", 
      metric: "Developer passes CKA & AWS Security", 
      desc: "Completed internal certification roadmap courses, earning security and orchestration credentials to lead client delivery projects.",
      image: "/assets/common/9d91b93f83e6d4cd494ec13611b3e50e-1.png"
    }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal className="mb-20 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            CAREER ROADMAPS
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Success <span className="text-rose-500">Stories</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl leading-relaxed">
            Real histories of engineers who leveraged Devopstrio learning tracks, community forums, and certification grants to reach leadership roles.
          </p>
        </Reveal>

        {/* 3-Column Microsoft Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stories.map((story, idx) => (
            <Reveal key={story.title} delay={idx * 0.05} className="h-full">
              <div className="group flex flex-col justify-between bg-zinc-950/45 border border-zinc-900 hover:border-rose-500/25 rounded-3xl overflow-hidden hover:shadow-[0_0_30px_rgba(244,63,94,0.06)] transition-all duration-300 h-full min-h-[380px]">
                
                {/* Top Image Banner */}
                <div className="relative w-full h-40 overflow-hidden bg-zinc-900 border-b border-zinc-900">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-[0.8] group-hover:brightness-[0.9]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                </div>

                {/* Content Area */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 transition-colors duration-300 group-hover:text-rose-450">
                      {story.title}
                    </h4>
                    
                    {/* Bold Metric / Milestone */}
                    <div className="text-lg md:text-xl font-black text-rose-500 tracking-tight mb-3">
                      {story.metric}
                    </div>

                    {/* Description */}
                    <p className="text-xs md:text-sm text-zinc-400 font-semibold leading-relaxed">
                      {story.desc}
                    </p>
                  </div>

                  {/* Card Footer Verification */}
                  <div className="mt-6 pt-4 border-t border-zinc-900/60 flex items-center justify-between text-[9px] font-mono text-zinc-350 font-bold uppercase tracking-wider">
                    <span>VERIFIED ROADMAP</span>
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
