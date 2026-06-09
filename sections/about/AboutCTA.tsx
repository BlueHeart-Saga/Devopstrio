"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export function AboutCTA() {
  return (
    <section className="w-full py-28 md:py-36 bg-black text-white border-t border-zinc-900 relative overflow-hidden">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-20 relative z-10 text-center">
        <Reveal className="max-w-3xl mx-auto flex flex-col items-center">

          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-rose-600"></span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-rose-500">
              Start Your Journey
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6 text-white">
            Ready to <span className="text-rose-500">modernise your infrastructure?</span>
          </h2>

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold mb-10 max-w-2xl">
            Whether you need a full delivery squad to rebuild a legacy platform, senior architects to guide an AI migration, or a dedicated team to support your operations — we're here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold tracking-wider uppercase bg-rose-600 hover:bg-rose-700 text-white transition-all duration-300 shadow-sm"
              href="/contact"
            >
              Get in Touch <ArrowRight size={14} />
            </a>
            <a
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold tracking-wider uppercase border border-zinc-800 bg-zinc-900 hover:bg-zinc-850 text-zinc-300 hover:text-white transition-all duration-300 shadow-sm"
              href="/contact"
            >
              Speak with an Engineer
            </a>
          </div>

        </Reveal>
      </div>
    </section>
  );
}
