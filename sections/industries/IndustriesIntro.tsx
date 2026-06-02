"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function IndustriesIntro() {
  return (
    <section className="w-full py-20 bg-[#030303] text-zinc-300 border-b border-zinc-900">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug text-left">
            We bridge the gap between complex software design and domain-specific regulatory constraints.
          </h2>
        </Reveal>
        <Reveal>
          <div className="flex flex-col gap-6 text-zinc-400 text-xs md:text-sm font-light leading-relaxed text-left">
            <p>
              Integrating AI models, setting up scalable microservice nodes, and scheduling database queries require special domain context. Financial structures demand strict audit trails; medical systems require encrypted patient privacy; logistics teams need low-latency routing calculations.
            </p>
            <p>
              At devopstrio, our engineering teams are segmented by sector specialization. This structure ensures that your system builders understand your compliance frameworks, operations benchmarks, and security goals from day one.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
