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
  imageSrc = "/assets/components/cta img 001.png",
  imageAlt = "Devopstrio Representative",
  theme = "rose"
}: RepresentativeCTAProps) {
  const isEmerald = theme === "emerald";
  const highlightColor = isEmerald
    ? "text-emerald-400 font-bold"
    : "text-rose-500 font-bold";

  return (
    <section className="w-full pt-28 sm:pt-36 lg:pt-44 pb-4 sm:pb-8 bg-black border-t border-zinc-900 relative font-sans overflow-visible">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 overflow-visible">
        <Reveal className="overflow-visible">
          <div className="bg-[#080808] border border-zinc-800/80 rounded-3xl p-6 sm:p-8 lg:p-10 lg:pl-12 lg:pr-6 relative shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 min-h-[280px] sm:min-h-[320px] overflow-visible">
            
            {/* Left Content Column */}
            <div className="lg:w-[58%] xl:w-[60%] z-20 flex flex-col justify-center my-auto relative">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold tracking-tight text-white leading-[1.22] font-sans mb-4">
                {title}{" "}
                {highlightText && (
                  <span className={`${highlightColor} block sm:inline mt-1 sm:mt-0 font-bold`}>
                    {highlightText}
                  </span>
                )}
              </h2>

              <div className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal font-sans mb-9 sm:mb-10 max-w-2xl">
                {description}
              </div>

              {/* Tactile Dot-Matrix Style CTA Buttons with increased top gap */}
              <div className="flex flex-wrap items-center gap-5 sm:gap-7 pt-5 sm:pt-6">
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

            {/* Right Representative Image: Bottom flush with card baseline, top head extending outside */}
            <div className="lg:absolute lg:bottom-0 lg:right-2 xl:right-6 w-full sm:w-[520px] lg:w-[620px] xl:w-[680px] flex justify-center lg:justify-end items-end pointer-events-none z-10 overflow-visible">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] -mt-16 sm:-mt-24 lg:mt-0"
              />
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
