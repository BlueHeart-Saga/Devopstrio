"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface ServiceOverviewProps {
  overviewHeading: string;
  overviewDesc1: string;
  overviewDesc2: string;
}

export function ServiceOverview({
  overviewHeading,
  overviewDesc1,
  overviewDesc2,
}: ServiceOverviewProps) {
  return (
    <section id="overview" className="w-full py-24 bg-black border-b border-zinc-900/60 text-zinc-350">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Overview
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              {overviewHeading}
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:pt-10">
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6 text-zinc-200 text-sm font-semibold leading-relaxed">
              <p className="border-l-2 border-zinc-850 pl-4">{overviewDesc1}</p>
              <p className="border-l-2 border-zinc-850 pl-4">{overviewDesc2}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
