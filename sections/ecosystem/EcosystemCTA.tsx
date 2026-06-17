"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function EcosystemCTA() {
  return (
    <section className="w-full py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(220,38,38,0.04),transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Reveal>
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            PARTNER PORTAL
          </span>

          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Join our strategic <span className="text-rose-500">alliance network</span>
          </h2>

          <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed max-w-xl mx-auto mb-10">
            Collaborate on new software prototypes, deploy co-engineered accelerators, and integrate architectures.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-700 transition-all duration-300 hover:shadow-[0_0_20px_rgba(244,63,94,0.35)]"
            >
              Request Partner Access <ArrowUpRight size={14} className="stroke-[2.5]" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
