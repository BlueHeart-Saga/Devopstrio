"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface SuccessStory {
  title: string;
  metric: string;
  desc: string;
}

export function AcceleratorSuccessStories() {
  const stories: SuccessStory[] = [
    { title: "Multi-Cloud Deployment", metric: "8 weeks reduced to 5 days", desc: "Configured target AWS and Azure landing zones using modular Terraform scripts, establishing secure network connections." },
    { title: "SaaS Product Launch", metric: "MVP delivered in 60 days", desc: "Built a subscription billing setup and tenant authorization interface using pre-built SaaS starter code, accelerating time-to-market." },
    { title: "AI Assistant Platform", metric: "Production-ready in weeks", desc: "Integrated pre-built AI agent routing models and vector search frameworks, launching an enterprise data assistant." }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            VERIFIED HISTORIES
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Success <span className="text-rose-500">Stories</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            Real-world outcomes demonstrating how enterprise teams accelerate delivery times using our frameworks.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div
              key={story.title}
              className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-6 hover:border-rose-500/10 transition-all duration-300 min-h-[220px] flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">{story.title}</h4>
                <div className="text-lg font-black text-rose-500 tracking-tight mb-4">
                  {story.metric}
                </div>
                <p className="text-[10px] text-zinc-450 font-semibold leading-relaxed">
                  {story.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-900/60">
                <span className="text-[8px] font-mono text-zinc-555 font-bold uppercase tracking-wider">
                  VERIFIED OUTCOME
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
