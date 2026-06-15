"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export interface HeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  stats?: { value: string; label: string }[];
  breadcrumbs: { label: string; href?: string }[];
  bgImage?: string;
}

export function Hero({ badge, title, subtitle, stats, breadcrumbs, bgImage }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-black text-white min-h-[75vh] md:min-h-[80vh] flex flex-col justify-between pt-36 pb-20 border-b border-zinc-900/60">
      {/* Background Image */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-100 select-none pointer-events-none transition-transform duration-1000 scale-[1.02]"
          />
          {/* Only a dark radial circle in the center behind the text */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_45%,transparent_75%)] pointer-events-none" />
          {/* Bottom shadow fade to blend with the black page background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10 w-full px-6 md:px-12 lg:px-16 flex-grow flex flex-col justify-between">
        {/* Breadcrumb Navigation - Pinned to the top of the content container */}
        <nav className="flex items-center justify-start gap-2.5 text-[9px] md:text-[10px] font-medium tracking-[0.12em] text-zinc-400 mb-6 overflow-x-auto whitespace-nowrap py-1">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={idx}>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors text-zinc-400">
                    {crumb.label.toUpperCase()}
                  </Link>
                ) : (
                  <span className="text-rose-500 font-semibold">{crumb.label.toUpperCase()}</span>
                )}
                {!isLast && <ChevronRight size={10} className="text-zinc-600 flex-shrink-0" />}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Headline block - Centered my-auto */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center my-auto py-8">
          {badge && (
            <Reveal>
              <div className="flex items-center justify-center gap-2.5 mb-5">
                <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-rose-600"></span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-rose-500">
                  {badge}
                </span>
                <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-rose-600"></span>
              </div>
            </Reveal>
          )}

          <Reveal delay={0.05}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5 text-white text-center">
              {title}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-zinc-300 text-xs md:text-sm lg:text-base leading-relaxed font-normal max-w-3xl text-center mx-auto opacity-95">
              {subtitle}
            </p>
          </Reveal>
        </div>

        {/* Metrics Row - Centered alignment at the bottom */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 max-w-5xl mx-auto w-full">
            {stats.map((stat, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="bg-zinc-950/45 backdrop-blur-md border border-zinc-900/80 rounded-2xl p-5 hover:border-zinc-800 hover:bg-zinc-900/10 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <span className="block text-3xl font-bold font-mono text-rose-500 mb-1 group-hover:scale-[1.03] transition-transform duration-300 origin-center text-center">
                    {stat.value}
                  </span>
                  <span className="block text-[10px] font-mono tracking-wider text-zinc-550 uppercase text-center">
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
