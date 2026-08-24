"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export interface RepresentativeCTAProps {
  title?: React.ReactNode;
  highlightText?: string;
  description?: React.ReactNode;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  theme?: "rose" | "emerald";
}

export function RepresentativeCTA({
  title = "Ready To Shape The Next Era Of",
  highlightText = "Digital Transformation?",
  description = (
    <>
      We Are Looking For Exceptional Engineers, <span className="underline decoration-1 underline-offset-4 font-semibold">Cloud Architects</span>, And Builders To Co-Develop High-Integrity Systems And Solve Critical Infrastructure Challenges Under Our <span className="underline decoration-1 underline-offset-4 font-semibold">Internship Program</span> And Career Paths.
    </>
  ),
  primaryBtnText = "VIEW OPEN POSITIONS",
  primaryBtnHref = "/about/global-internship",
  secondaryBtnText = "EXPLORE CULTURE",
  secondaryBtnHref = "/about/our-culture-people",
  imageSrc = "/assets/components/cta-img-001.png",
  imageAlt = "Devopstrio Representative",
  theme = "rose"
}: RepresentativeCTAProps) {
  const isEmerald = theme === "emerald";
  const highlightColor = isEmerald
    ? "text-emerald-400 font-bold"
    : "text-rose-500 font-bold";

  return (
    <section className="w-full pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 bg-black relative font-sans overflow-x-clip">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <Reveal>
          <div className="bg-[#080808] border border-zinc-800/80 rounded-3xl p-6 sm:p-10 lg:p-12 lg:pl-14 lg:pr-8 relative shadow-2xl flex flex-col lg:flex-row items-stretch justify-between gap-8 min-h-[320px] sm:min-h-[360px] lg:min-h-[380px]">
            
            {/* Left Content Column: Title at Top, CTA Buttons at Bottom */}
            <div className="w-full lg:w-[58%] xl:w-[60%] z-20 flex flex-col justify-between items-start text-left relative py-2">
              {/* Title at Top */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.18] font-sans mb-6 sm:mb-8 max-w-3xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                {title}{" "}
                {highlightText && (
                  <span className={`${highlightColor} block sm:inline mt-1 sm:mt-0 font-semibold`}>
                    {highlightText}
                  </span>
                )}
              </h2>

              {/* Tactile CTA Buttons at Bottom with Gap */}
              <div className="mt-auto pt-6 sm:pt-8 flex flex-wrap items-center gap-5 sm:gap-7">
                {primaryBtnText && (
                  <Link
                    href={primaryBtnHref}
                    className={`btn-tactile group ${isEmerald ? "[--btn-theme-bg:#059669] [--btn-theme-focus:#10b981]" : ""}`}
                  >
                    <div>
                      <span>
                        {primaryBtnText}
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                )}

                {secondaryBtnText && (
                  <Link
                    href={secondaryBtnHref}
                    className="btn-tactile btn-tactile-secondary group"
                  >
                    <div>
                      <span>
                        {secondaryBtnText}
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                )}
              </div>
            </div>

            {/* Right Representative Image: Bottom touches card bottom border line exactly, top extends further outside top border */}
            <div className="lg:absolute lg:bottom-0 lg:right-2 xl:right-6 w-full sm:w-[520px] lg:w-[640px] xl:w-[700px] flex justify-center lg:justify-end items-end pointer-events-none z-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] lg:max-h-[calc(100%+160px)] xl:max-h-[calc(100%+180px)] -mt-24 sm:-mt-32 lg:mt-0"
              loading="lazy" />
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default RepresentativeCTA;
