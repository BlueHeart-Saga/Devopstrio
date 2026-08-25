"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

import Link from "next/link";

export function GlobalSupport() {
  return (
    <section id="support" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-[20%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">

          {/* Left Column: Support info */}
          <div className="lg:col-span-7 flex flex-col items-start text-left justify-center z-20">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                GLOBAL SUPPORT
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                24/7 Enterprise <span className="text-rose-500">Follow-the-Sun Support</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mb-8">
                Our technical support desks span critical time zones (London, India, USA) to ensure continuous monitoring, immediate incident management, and seamless pipeline recoveries at all times. Read about our dedicated <Link href="/about/customer-support" className="text-rose-500 hover:underline font-bold">support page</Link> or consult our <Link href="/about/company-overview" className="text-rose-500 hover:underline font-bold">company overview</Link>.
              </p>
            </Reveal>

            {/* Details table / Support Pillars */}
            <div className="flex flex-col gap-4 w-full border-t border-zinc-900/60 pt-6">
              <Reveal delay={0.25}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm">
                  {[
                    "24x7 Monitoring",
                    "Incident Management",
                    "Managed Cloud",
                    "Managed DevOps",
                    "Managed Security"
                  ].map((service, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      <span className="font-bold text-white">{service}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Column: SLA Dashboard */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end z-20">
            <Reveal delay={0.2} className="w-full max-w-[440px]">
              <div className="bg-zinc-950/25 border border-zinc-900/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_75%)] pointer-events-none" />

                <h3 className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 border-b border-zinc-900/60 pb-4 mb-4">
                  Support Commitments
                </h3>

                <div className="flex flex-col gap-4">
                  {[
                    { label: "Critical Incidents (P1)", val: "< 15 Mins" },
                    { label: "Standard Incidents (P2)", val: "< 1 Hour" },
                    { label: "Deployment Queries", val: "< 4 Hours" },
                    { label: "SLA Guarantee", val: "99.99%" }
                  ].map((row, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs md:text-sm border-b border-zinc-900/30 pb-2 last:border-0 last:pb-0">
                      <span className="text-zinc-400 font-semibold">{row.label}</span>
                      <strong className="text-emerald-500 font-bold font-mono">{row.val}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
