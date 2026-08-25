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
  cta?: { label: string; href: string };
  imageSrc?: string;
}

export function Hero({ badge, title, subtitle, stats, breadcrumbs, cta, imageSrc }: HeroProps) {
  const words = title.split(" ");
  const lastWord = words.pop();
  const remainingText = words.join(" ");

  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#030303] text-white pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 overflow-hidden border-b border-zinc-900/60">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.06),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left justify-center z-20">
            {/* Breadcrumb Navigation */}
            {/* <nav className="flex items-center gap-2 text-xs font-mono text-zinc-550 mb-8 overflow-x-auto whitespace-nowrap py-1">
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
            </nav> */}

            {/* Heading & description block */}
            <div className="max-w-4xl text-left w-full">
              {/* {badge && (
                <Reveal>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800/80 bg-zinc-950/40 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">
                      {badge}
                    </span>
                  </div>
                </Reveal>
              )} */}

              <Reveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.12] text-white mb-6">
                  {remainingText ? (
                    <>
                      {remainingText}
                      <br />
                      <span className="text-[#E11D48] whitespace-nowrap">{lastWord}</span>
                    </>
                  ) : (
                    title
                  )}
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed font-semibold max-w-xl mb-8">
                  {subtitle}
                </p>
              </Reveal>
            </div>
            {/* CTA Buttons */}
            {/* CTA Buttons */}
            <Reveal delay={0.25}>
              <div className="flex flex-wrap gap-4 items-center justify-start">
                {cta && (
                  <a
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
                    href={cta.href}
                  >
                    {cta.label}

                  </a>
                )}
                <Link
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                  href="/contact#contact-form"
                >
                  Talk to Expert

                </Link>
              </div>
            </Reveal>


          </div>

          {/* Right Column: Ecosystem Image */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end z-10 w-full">
            <Reveal delay={0.2} className="w-full flex items-center justify-center lg:justify-end">
              <img src={imageSrc || "/webp/assets/herocard/ecosystempage.webp"}
                alt="Ecosystem Illustration"
                className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[480px] h-auto object-contain select-none"
              loading="eager" />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

