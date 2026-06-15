"use client";

import React from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

interface InsightItem {
  title: string;
  desc: string;
  link: string;
}

interface IndustryInsightsProps {
  insights: InsightItem[];
}

export function IndustryInsights({ insights }: IndustryInsightsProps) {
  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
        <Reveal className="mb-16">
          <div className="flex items-center gap-2 mb-4">

            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              Insights & Research
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Featured industry <span className="font-semibold text-rose-500">research papers</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((ins, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <Link
                href={ins.link}
                className="group block h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors"
              >
                <h4 className="text-xs font-semibold text-zinc-200 group-hover:text-rose-500 transition-colors">{ins.title}</h4>
                <p className="text-[10px] text-zinc-550 leading-relaxed font-light mb-4">{ins.desc}</p>
                <span className="text-[9px] text-rose-500 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Read article <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
