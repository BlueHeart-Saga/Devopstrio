"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface CaseStory {
  title: string;
  metric: string;
  desc: string;
}

export function CommunitySuccessStories() {
  const stories: CaseStory[] = [
    { title: "From Student to Cloud Architect", metric: "Graduate joins architecture team", desc: "Joined Devopstrio via university bootcamps, earned multi-cloud credentials, and now orchestrates AWS landing zones." },
    { title: "Community Contributor to Team Lead", metric: "Open source contributor promoted", desc: "Contributed modular Helm charts to our public repository, transitioned to full-time engineer, and now leads the DevOps group." },
    { title: "Certification to Career Growth", metric: "Developer passes CKA & AWS Security", desc: "Completed internal certification roadmap courses, earning security and orchestration credentials to lead client delivery projects." }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            CAREER ROADMAPS
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Success <span className="text-rose-500">Stories</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            Real histories of engineers who leveraged Devopstrio learning tracks, community forums, and cert grants to reach leadership roles.
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
