"use client";

import React from "react";
import { Award } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface WhyChooseItem {
  title: string;
  desc: string;
}

interface IndustryWhyChooseProps {
  whyChoose: WhyChooseItem[];
}

export function IndustryWhyChoose({ whyChoose }: IndustryWhyChooseProps) {
  return (
    <section id="why-choose" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
        <Reveal className="mb-16">
          <div className="flex items-center gap-2 mb-4">

            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              Why Devopstrio
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Unrivaled <span className="font-semibold text-rose-500">engineering advantages</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChoose.map((why, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 mb-4">
                  <Award size={14} />
                </div>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">{why.title}</h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">{why.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
