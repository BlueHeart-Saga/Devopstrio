"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export interface OverviewProps {
  heading: string;
  desc1: string;
  desc2: string;
}

export function Overview({ heading, desc1, desc2 }: OverviewProps) {
  return (
    <section id="overview" className="w-full py-24 bg-black border-b border-zinc-900/60 text-zinc-300">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Overview
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              {heading}
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:pt-10">
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6 text-zinc-400 text-sm font-light leading-relaxed">
              <p className="border-l-2 border-zinc-800 pl-4">{desc1}</p>
              <p className="border-l-2 border-zinc-800 pl-4">{desc2}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
