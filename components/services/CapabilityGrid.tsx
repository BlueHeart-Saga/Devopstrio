"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export interface CapabilityItem {
  slug: string;
  title: string;
  description: string;
  items?: string[];
}

export interface CapabilityGridProps {
  serviceSlug: string;
  capabilities: CapabilityItem[];
}

export function CapabilityGrid({ serviceSlug, capabilities }: CapabilityGridProps) {
  return (
    <section id="capabilities" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Section Header */}
        <Reveal className="mb-16 text-left">
          <div className="flex items-center gap-2 mb-4">

            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              Capabilities
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Core practice <span className="font-semibold text-rose-500">specializations</span>
          </h2>
          <p className="text-zinc-500 text-xs md:text-sm font-light leading-relaxed mt-2 max-w-xl">
            Choose a capability below to view technical solution details, deliverables, and framework processes.
          </p>
        </Reveal>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((cap, idx) => {
            const href = `/services/${serviceSlug}/${cap.slug}`;
            return (
              <Reveal key={cap.slug} delay={idx * 0.05} className="h-full">
                <Link
                  href={href}
                  className="group flex flex-col justify-between h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 md:p-8 hover:border-rose-500/30 hover:bg-zinc-900/10 transition-all duration-300 hover:scale-[1.01] relative overflow-hidden cursor-pointer text-left"
                >
                  {/* Hover Spot Light Glow */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.025),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-6 border-b border-zinc-900/60 pb-4">
                      <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors">
                        {cap.title}
                      </h3>
                      <span className="w-8 h-8 rounded-full bg-zinc-900/40 border border-zinc-800/60 flex items-center justify-center text-zinc-500 group-hover:text-rose-500 group-hover:bg-rose-950/20 group-hover:border-rose-500/20 transition-all duration-300">
                        <ArrowUpRight size={13} className="stroke-[2.5]" />
                      </span>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed font-light mb-6 group-hover:text-zinc-350 transition-colors">
                      {cap.description}
                    </p>

                    {cap.items && cap.items.length > 0 && (
                      <ul className="flex flex-col gap-3 mb-6">
                        {cap.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-[11px] text-zinc-450 leading-relaxed">
                            <CheckCircle2 size={13} className="text-rose-500 mt-0.5 flex-shrink-0" />
                            <span className="font-light">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="border-t border-zinc-900/60 pt-4 mt-auto">
                    <span className="text-[10px] text-rose-500 font-semibold group-hover:translate-x-1 transition-transform duration-250 inline-flex items-center gap-1">
                      View capability details <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
