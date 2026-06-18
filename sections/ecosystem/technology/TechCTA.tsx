"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export function TechCTA() {
  return (
    <section className="w-full py-28 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(244,63,94,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-12 xl:px-8 text-center relative z-10">
        <Reveal>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
            <span className="text-xs font-mono font-bold tracking-widest text-rose-500 uppercase">
              CONSULTING SERVICES
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-black tracking-tight leading-tight mb-6">
            Technology That Powers <span className="text-rose-500">Transformation</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-zinc-400 text-xs md:text-sm xl:text-base font-semibold leading-relaxed mb-10 max-w-xl mx-auto">
            Build scalable, secure, and intelligent digital platforms with Devopstrio's technology ecosystem.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(244,63,94,0.2)] flex items-center justify-center gap-2 group border border-rose-500/20"
            >
              Schedule Consultation
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto px-6 py-3.5 bg-zinc-950/60 hover:bg-zinc-900 text-zinc-350 hover:text-white rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 border border-zinc-900 hover:border-zinc-800 flex items-center justify-center gap-2"
            >
              Explore Services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
