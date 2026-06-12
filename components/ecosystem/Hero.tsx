"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export interface HeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  stats?: { value: string; label: string }[];
  breadcrumbs: { label: string; href?: string }[];
}

export function Hero({ badge, title, subtitle, stats, breadcrumbs }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-black text-white pt-32 pb-16 px-6 border-b border-zinc-900/60">
      {/* Dynamic ambient glowing backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.06),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#09090b_1px,transparent_1px),linear-gradient(to_bottom,#09090b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-site mx-auto relative z-10">

        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-mono text-zinc-550 mb-8 overflow-x-auto whitespace-nowrap py-1">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={idx}>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-rose-500 transition-colors">
                    {crumb.label.toUpperCase()}
                  </Link>
                ) : (
                  <span className="text-rose-500 font-bold uppercase">{crumb.label}</span>
                )}
                {!isLast && <ChevronRight size={10} className="text-zinc-700 flex-shrink-0" />}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Headline block */}
        <div className="max-w-4xl text-left">
          {badge && (
            <Reveal>
              <div className="flex items-center gap-2 mb-4">

                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  {badge}
                </span>
              </div>
            </Reveal>
          )}

          <Reveal delay={0.05}>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight mb-6 text-white">
              {title}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light max-w-3xl mb-12">
              {subtitle}
            </p>
          </Reveal>
        </div>

        {/* Metrics Row */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {stats.map((stat, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-5 hover:border-zinc-800 hover:bg-zinc-900/5 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <span className="block text-3xl font-bold font-mono text-rose-500 mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                    {stat.value}
                  </span>
                  <span className="block text-[10px] font-mono tracking-wider text-zinc-550 uppercase">
                    {stat.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
