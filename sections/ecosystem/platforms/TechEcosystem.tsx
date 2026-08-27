"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface TechItem {
  name: string;
  iconPath: string;
}

interface TechGroup {
  category: string;
  items: TechItem[];
}

export function TechEcosystem() {
  const groups: TechGroup[] = [
    {
      category: "Frontend Stack",
      items: [
        { name: "React", iconPath: "/assets/Home-page/Techtools/React.svg" },
        { name: "Next.js", iconPath: "/assets/Home-page/Techtools/nextjs.svg" },
        { name: "TypeScript", iconPath: "/assets/Home-page/Techtools/typescript.svg" }
      ]
    },
    {
      category: "Backend Stack",
      items: [
        { name: "Node.js", iconPath: "/assets/Home-page/Techtools/Node.svg" },
        { name: "Go Lang", iconPath: "/assets/Tech-icons/go-lang-logo_svgstack_com_28411780931472.svg" },
        { name: "Python", iconPath: "/assets/Home-page/Techtools/python.svg" }
      ]
    },
    {
      category: "Data & Caching",
      items: [
        { name: "PostgreSQL", iconPath: "/assets/Home-page/Techtools/postgre.svg" },
        { name: "MongoDB", iconPath: "/assets/Tech-icons/mongo-db-logo_svgstack_com_28831780931486.svg" },
        { name: "Redis", iconPath: "/assets/Tech-icons/redis-logo_svgstack_com_29201780931292.svg" }
      ]
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "AWS", iconPath: "/assets/Home-page/Techtools/aws-color.svg" },
        { name: "MS Azure", iconPath: "/assets/Home-page/Techtools/MSAzure.svg" },
        { name: "Docker", iconPath: "/assets/Home-page/Techtools/docker.svg" }
      ]
    },
    {
      category: "AI & Innovation",
      items: [
        { name: "OpenAI", iconPath: "/assets/Tech-icons/openai-logo_svgstack_com_28971780931370.svg" },
        { name: "Google Cloud AI", iconPath: "/assets/Tech-icons/google-cloud-logo_svgstack_com_28371780931185.svg" },
        { name: "GitHub Copilot", iconPath: "/assets/Tech-icons/github-copilot-logo_svgstack_com_28101780931046.svg" }
      ]
    }
  ];

  return (
    <section id="tech-ecosystem" className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-650/[0.015] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            R&D SYSTEM ARCHITECTURE
          </span> */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
            Technology <span className="text-rose-500">Ecosystem</span>
          </h2>
          {/* <p className="text-zinc-400 text-sm font-semibold">
            The programming tools, databases, and LLM providers powering our proprietary software products.
          </p> */}
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {groups.map((group, idx) => (
            <Reveal key={group.category} delay={idx * 0.05} className="h-full">
              <div className="bg-[#0a0a0a]/60 border border-white/[0.03] hover:border-rose-500/20 rounded-[20px] p-5 transition-all duration-300 flex flex-col gap-4 h-full">
                <h4 className="text-lg md:text-xl font-semibold text-rose-500 uppercase tracking-widest border-b border-white/[0.03] pb-2">
                  {group.category}
                </h4>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center gap-3 bg-white/[0.015] border border-white/[0.03] rounded-xl px-3.5 py-2.5 hover:bg-white/[0.03] hover:border-white/[0.06] transition-all duration-300 group"
                    >
                      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 bg-black/40 rounded-md p-0.5 border border-white/[0.02]">
                        <img src={item.iconPath}
                          alt={item.name}
                          className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                        loading="lazy" />
                      </div>
                      <span className="text-xs md:text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors duration-300">
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
