"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface CapabilityOverviewProps {
  title: string;
  subtitle: string;
  image: string;
}

export function CapabilityOverview({ title, subtitle, image }: CapabilityOverviewProps) {
  return (
    <section id="overview" className="w-full py-16 bg-[#030303] text-white relative overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">

        <Reveal>
          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950/30 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">

            {/* Background Glow */}
            <div className="absolute inset-0">
              <div className="absolute -top-20 -left-20 w-96 h-96 bg-rose-600/10 blur-[120px]" />
              <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-rose-600/5 blur-[120px]" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-0">

              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12 text-left">

                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-rose-500 mb-6 block">
                  Capability Overview
                </span>

                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold leading-tight tracking-tight mb-6 text-white uppercase">
                  Accelerating outcomes for <span className="text-rose-500">{title}</span>
                </h2>

                <div className="space-y-4 text-zinc-200 text-xs md:text-sm font-semibold leading-relaxed">
                  <p className="border-l-2 border-rose-500/50 pl-4">
                    {subtitle}
                  </p>
                  <p className="border-l-2 border-white/10 pl-4 text-zinc-400">
                    We deploy automated environments, rigorous telemetry monitoring, and secure VPC routing parameters to align with industry regulatory requirements.
                  </p>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="p-4 md:p-6 flex items-center justify-center bg-zinc-950/20 border-t lg:border-t-0 lg:border-l border-white/5">
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group/img">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover/img:scale-[1.02] pointer-events-none select-none"
                  />
                  {/* Subtle glow/reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
