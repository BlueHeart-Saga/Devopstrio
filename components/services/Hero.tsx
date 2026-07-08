"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export interface HeroProps {
  badge?: string;
  title: string | React.ReactNode;
  subtitle: string;
  stats?: { value: string; label: string }[];
  breadcrumbs: { label: string; href?: string }[];
  bgImage?: string;
  children?: React.ReactNode;
}

export function Hero({ badge, title, subtitle, stats, breadcrumbs, bgImage, children }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-black text-white min-h-[55vh] md:min-h-[60vh] flex flex-col justify-between pt-24 pb-12 md:pt-28 md:pb-16 border-b border-zinc-900/60">
      
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-rose-500/[0.04] rounded-full blur-[110px] pointer-events-none z-[1]" />
      <div className="absolute bottom-0 right-1/4 w-[550px] h-[550px] bg-violet-500/[0.02] rounded-full blur-[130px] pointer-events-none z-[1]" />

      {/* Background Image */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt={typeof title === "string" ? title : badge || "Hero Background"}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-100 select-none pointer-events-none transition-transform duration-1000 scale-[1.02]"
          />
          {/* Subtle dark radial overlay to ensure text readability without obscuring the background image */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.15)_60%,transparent_100%)] pointer-events-none" />
          {/* Bottom shadow fade to blend with the black page background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none" />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10 w-full px-12 xl:px-8 flex-grow flex flex-col justify-between">
        {/* Breadcrumb Navigation - Pinned to the top of the content container */}
        <nav className="flex items-center justify-start gap-2.5 text-[9px] md:text-[10px] font-bold tracking-[0.15em] text-zinc-400 mb-6 overflow-x-auto whitespace-nowrap py-1">
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
                {!isLast && <ChevronRight size={9} className="text-zinc-700 flex-shrink-0" />}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Headline block - Centered my-auto */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center my-auto py-8">
          {badge && (
            <Reveal>
              <div className="flex items-center justify-center mb-6">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-rose-500">
                  {badge}
                </span>
              </div>
            </Reveal>
          )}

          <Reveal delay={0.05}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-6 text-white text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              {title}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-semibold max-w-3xl text-center mx-auto opacity-90">
              {subtitle}
            </p>
          </Reveal>

          {children && (
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {children}
              </div>
            </Reveal>
          )}
        </div>

        {/* Metrics Row - Centered alignment at the bottom */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 max-w-5xl mx-auto w-full">
            {stats.map((stat, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="bg-zinc-950/20 backdrop-blur-md border border-white/[0.04] rounded-xl p-5 md:p-6 hover:border-rose-500/30 hover:bg-zinc-950/60 hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                  {/* Glowing Hover Background */}
                  <div className="absolute -inset-px bg-gradient-to-r from-rose-500/10 to-rose-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.06),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  {/* Top Accent Line */}
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-rose-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <span className="relative z-10 block text-2xl md:text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-rose-400 mb-1.5 transition-transform duration-300 origin-center text-center">
                    {stat.value}
                  </span>
                  <span className="relative z-10 block text-[9px] md:text-[10px] font-mono tracking-[0.18em] text-zinc-400 uppercase text-center font-bold">
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
