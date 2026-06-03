"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function CompanyIntro() {
  return (
    <section className="w-full py-20 bg-[#050505] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">

        <Reveal className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                02 / INTRODUCING Devopstrio
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight">
              We are engineers at our core, solving <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">complex business deficits</span>.
            </h2>
          </div>
          <div className="text-zinc-450 text-base md:text-lg leading-relaxed font-light flex flex-col gap-6">
            <p>
              Founded with the belief that enterprise digital transformation is too often treated as a theoretical management exercise, Devopstrio focuses strictly on technical implementation.
            </p>
            <p>
              We design modular cloud structures, integrate intelligent neural and agentic models, audit active threat vectors, and help engineering organizations establish high-integrity continuous deployment loops.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
