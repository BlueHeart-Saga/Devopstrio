"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function ExpertiseBanner() {
  return (
    <section id="expertise" className="w-full py-20 bg-zinc-950/20 border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <Reveal>
            <h3 className="text-xl md:text-2xl font-light text-white mb-4">
              Co-engineered compliance & <span className="font-semibold text-rose-500">security benchmarks</span>
            </h3>
            <p className="text-[11px] text-zinc-550 leading-relaxed font-light max-w-3xl">
              We actively certify all deployments against strict industry policies. Our templates support pre-configured ISO-27001 configurations, HIPAA health isolation parameters, and SOC-2 audit databases.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-4 flex justify-start lg:justify-end gap-6 text-left">
          <div className="border-l border-rose-500/30 pl-4">
            <span className="block text-2xl font-bold font-mono text-rose-500">100%</span>
            <span className="block text-[9px] font-mono text-zinc-550 uppercase">Audit readiness</span>
          </div>
          <div className="border-l border-rose-500/30 pl-4">
            <span className="block text-2xl font-bold font-mono text-rose-500">Zero</span>
            <span className="block text-[9px] font-mono text-zinc-550 uppercase">Security breaches</span>
          </div>
        </div>
      </div>
    </section>
  );
}
