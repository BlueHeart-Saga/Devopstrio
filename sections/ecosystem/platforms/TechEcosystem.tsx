"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface TechGroup {
  category: string;
  items: string[];
}

export function TechEcosystem() {
  const groups: TechGroup[] = [
    { category: "Frontend Stack", items: ["React", "Next.js", "React Native"] },
    { category: "Backend Stack", items: ["FastAPI", "Node.js", ".NET Core"] },
    { category: "Data & Caching", items: ["PostgreSQL", "MongoDB", "Redis"] },
    { category: "Cloud & Runtimes", items: ["Azure Services", "Amazon Web Services", "Oracle OCI"] },
    { category: "Artificial Intelligence", items: ["OpenAI API", "Google Gemini", "Claude Anthropic", "Cohere LLMs"] }
  ];

  return (
    <section id="tech-ecosystem" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            R&D SYSTEM ARCHITECTURE
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Technology <span className="text-rose-500">Ecosystem</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            The programming tools, databases, and LLM providers powering our proprietary software products.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {groups.map((group) => (
            <div
              key={group.category}
              className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/10 transition-all duration-300 min-h-[180px] flex flex-col justify-between"
            >
              <div>
                <h4 className="text-[10px] font-mono font-bold text-rose-500 uppercase tracking-widest mb-4 border-b border-zinc-900 pb-2">
                  {group.category}
                </h4>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-xs font-bold text-white tracking-wide">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
