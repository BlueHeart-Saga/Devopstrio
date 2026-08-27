"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Globe2, GraduationCap, Github, Trophy, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function GlobalCommunityImpact() {
  const initiatives = [
    {
      title: "Campus & University Labs",
      icon: <GraduationCap className="w-6 h-6 text-rose-500" />,
      tag: "ACADEMIA",
      desc: "Partnering with top technical universities for hands-on cloud labs, final-year capstone projects, and direct internship pipelines.",
      stat: "15+ Partner Universities",
      link: "/ecosystem/community-talent-network"
    },
    {
      title: "Open Source Code Asset Hub",
      icon: <Github className="w-6 h-6 text-rose-500" />,
      tag: "OPEN SOURCE",
      desc: "Over 180+ public GitHub modules, IaC blueprints, and automation libraries maintained openly for global developers.",
      stat: "1,200+ GitHub Stars",
      link: "https://github.com/orgs/Devopstrio/repositories"
    },
    {
      title: "Global Hackathons & Grants",
      icon: <Trophy className="w-6 h-6 text-rose-500" />,
      tag: "INNOVATION",
      desc: "Annual engineering hackathons awarding innovation grants, cloud credits, and direct career acceleration opportunities.",
      stat: "$50K+ Grants Awarded",
      link: "/ecosystem/community-talent-network"
    },
    {
      title: "Women in Tech Mentorship",
      icon: <Sparkles className="w-6 h-6 text-rose-500" />,
      tag: "LEADERSHIP",
      desc: "Dedicated 1-on-1 mentorship connecting senior principal architects with rising female leaders across cloud and DevOps.",
      stat: "200+ Mentorship Hours",
      link: "/ecosystem/community-talent-network"
    }
  ];

  return (
    <section id="initiatives" className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal className="mb-16 text-center max-w-3xl mx-auto">
          {/* <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-rose-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Globe2 className="w-4 h-4 text-white" />
            Global Outreach & Impact
          </div> */}
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-4 text-white">
            Community <span className="text-rose-500">Initiatives & Impact</span>
          </h2>
          {/* <p className="text-zinc-300 text-sm md:text-base font-semibold max-w-2xl mx-auto">
            Empowering the global developer ecosystem through academic partnerships, open-source code, and leadership grants.
          </p> */}
        </Reveal>

        {/* Initiatives 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {initiatives.map((init, idx) => (
            <Reveal key={init.title} delay={idx * 0.08} className="h-full">
              <div className="group flex flex-col justify-between bg-zinc-950/50 border border-white/5 hover:border-rose-500/40 rounded-2xl p-6 transition-all duration-300 h-full backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-rose-950/30 group-hover:border-rose-500/40 transition-colors">
                      {init.icon}
                    </div>
                    {/* <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-rose-400 font-semibold uppercase tracking-wider">
                      {init.tag}
                    </span> */}
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-rose-400 transition-colors mb-3 tracking-tight">
                    {init.title}
                  </h3>

                  {/* <p className="text-zinc-300 text-xs md:text-sm font-normal leading-relaxed mb-6">
                    {init.desc}
                  </p> */}
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between mt-auto">
                  {/* <span className="text-xs font-mono font-semibold text-rose-500">
                    {init.stat}
                  </span> */}
                  <a
                    href={init.link}
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
