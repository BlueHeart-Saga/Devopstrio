"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function AIDataCTA() {
  return (
    <section className="w-full py-24 bg-[#030303] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(220,38,38,0.03),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              DISCOVERY SESSION
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6">
            Build your first cognitive <span className="font-semibold text-rose-500">proof-of-concept</span>
          </h2>
          
          <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed max-w-xl mx-auto mb-10">
            Book a 2-week structured prototyping sprint with our ML engineers. We will ingest a sample dataset, setup a private vector instance, and deploy a functioning LLM endpoint.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-semibold tracking-wide text-white bg-rose-600 hover:bg-rose-700 transition-colors shadow-lg"
            >
              Book AI Discovery Sprint <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-semibold tracking-wide text-zinc-300 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-colors"
            >
              View other service practices
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
