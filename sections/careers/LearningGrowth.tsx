"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function LearningGrowth() {
  const certifications = [
    { name: "Azure Solutions Architect Expert", progress: "94%", count: "18 Engineers certified" },
    { name: "AWS Certified DevOps Engineer", progress: "88%", count: "24 Engineers certified" },
    { name: "Google Cloud Professional Architect", progress: "82%", count: "12 Engineers certified" }
  ];

  const programs = [
    { title: "AI Training & Graph Models Workshops", desc: "Structured sessions exploring LangGraph, vector indexes, and semantic caching." },
    { title: "Leadership Acceleration Pathway", desc: "Career mentoring connecting senior architects with graduate engineers." },
    { title: "Technical Mentorship Cycles", desc: "Weekly peer reviews auditing Kubernetes configurations and database query tuning." },
    { title: "R&D Innovation Lab Sandboxes", desc: "Isolated sandboxes created on AWS to prototype security plug-ins." }
  ];

  return (
    <section className="py-24 bg-black border-b border-zinc-900/60">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          {/* Left Box: Certifications & Pathways */}
          <div>
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[2px] w-6 bg-rose-600"></span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">Growth Pathway</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug mb-6">
                Grow faster than your <span className="font-semibold text-rose-500">career path</span>
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mb-8">
                We fund, sponsor, and celebrate cloud certifications and structured learning tracks across AWS, Microsoft Azure, and Google Cloud.
              </p>
            </Reveal>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <Reveal key={idx} delay={idx * 0.05}>
                  <div className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-5 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-zinc-200">{cert.name}</span>
                      <span className="text-xs font-bold text-rose-500 font-mono">{cert.progress}</span>
                    </div>
                    <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden mb-2">
                      <div className="bg-rose-600 h-full rounded-full" style={{ width: cert.progress }} />
                    </div>
                    <span className="text-[10px] text-zinc-500 font-medium block">{cert.count}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Box: Programs and Labs */}
          <div className="bg-zinc-950/20 border border-zinc-900 rounded-3xl p-8 lg:p-10 relative overflow-hidden h-full flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_75%)] pointer-events-none" />
            
            <div>
              <Reveal>
                <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-3 font-bold">Academic Tracks</span>
                <h3 className="text-xl font-bold text-white mb-6">Continuous Development Programs</h3>
              </Reveal>

              <div className="space-y-6">
                {programs.map((prog, idx) => (
                  <Reveal key={idx} delay={idx * 0.05} className="flex gap-4">
                    <div className="w-5 h-5 rounded-full bg-rose-950/30 border border-rose-500/20 flex items-center justify-center text-[10px] font-bold text-rose-500 mt-0.5 flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-zinc-200 mb-1">{prog.title}</span>
                      <span className="block text-[10px] text-zinc-450 leading-relaxed font-light">{prog.desc}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
