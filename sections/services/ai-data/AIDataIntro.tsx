"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function AIDataIntro() {
  return (
    <section className="w-full py-20 bg-[#030303] text-zinc-300 border-b border-zinc-900">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Cognitive engineering that solves physical bottlenecks. We align LLM capabilities with deterministic workflows to guarantee output reliability.
          </h2>
        </Reveal>
        <Reveal>
          <div className="flex flex-col gap-6 text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
            <p>
              AI and Data represent the dual engines of modern enterprise growth. However, most implementations fail to transition from sandboxes to production due to hallucinations, latency problems, and lack of integration with core transactional databases.
            </p>
            <p>
              At devopstrio, we build deterministic cognitive workflows. By coupling Large Language Models with vector search databases, semantic caches, and rigorous model evaluation loops, we construct systems that are fast, cost-effective, and safe for customer interaction.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
