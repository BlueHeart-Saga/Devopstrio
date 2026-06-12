"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface IndustryOverviewProps {
  overviewHeading: string;
  overviewDesc1: string;
  overviewDesc2: string;
  challenges: string[];
}

export function IndustryOverview({
  overviewHeading,
  overviewDesc1,
  overviewDesc2,
  challenges
}: IndustryOverviewProps) {
  return (
    <section id="overview" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      {/* Glow highlight background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-rose-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left Side: Context & Operational Challenges */}
          <div className="lg:col-span-6 text-left">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">

                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  Domain Context
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug mb-8">
                {overviewHeading}
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-4">
                Key Operational Challenges
              </span>
              <div className="flex flex-col gap-3.5">
                {challenges.map((challenge, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs md:text-sm text-zinc-300">
                    <CheckCircle2 size={16} className="text-rose-500 flex-shrink-0 mt-0.5" />
                    <span>{challenge}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Side: Our Approach */}
          <div className="lg:col-span-6 text-left lg:pt-10">
            <Reveal>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-4">
                Our Engineering Approach
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-6 text-zinc-400 text-sm font-light leading-relaxed">
                <p className="border-l-2 border-zinc-800 pl-4">{overviewDesc1}</p>
                <p className="border-l-2 border-zinc-800 pl-4">{overviewDesc2}</p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
