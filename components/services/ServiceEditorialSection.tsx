"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Image as ImageIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialContent, servicesEditorialData } from "@/data/service-editorial-data";

interface ServiceEditorialSectionProps {
  slug: string;
  imageSrc?: string;
}

export function ServiceEditorialSection({ slug, imageSrc }: ServiceEditorialSectionProps) {
  const content: EditorialContent | undefined = servicesEditorialData[slug];

  if (!content) {
    return null;
  }

  const activeImage = imageSrc || content.photoConcept.imageSrc;

  return (
    <section
      id="editorial"
      className="w-full py-20 sm:py-24 lg:py-28 bg-[#020202] text-white border-b border-zinc-900/80 relative font-sans"
    >
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-12">
        {/* Section Eyebrow: Editorial Brief styled consistently with other section headers */}
        <Reveal>
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#E11D48]">
              EDITORIAL BRIEF
            </span>
          </div>
        </Reveal>

        {/* 52/48 Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[52fr_48fr] gap-10 lg:gap-14 items-start">
          {/* Left Column: Editorial Content (~52%) */}
          <div className="flex flex-col">
            <Reveal>
              <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] xl:text-[42px] font-semibold tracking-tight text-white leading-[1.15] mb-6">
                {content.headingPrefix}
                <span className="text-[#E11D48]">{content.headingHighlight}</span>
                {content.headingSuffix || ""}
              </h2>
            </Reveal>

            {/* Paragraph Above Pull Quote */}
            <Reveal delay={0.05}>
              <p className="text-base text-zinc-300 font-normal leading-[1.72] mb-5">
                {content.paragraph1}
              </p>
            </Reveal>

            {/* Editorial Pull Quote: Clean vertical red accent, no card background */}
            <Reveal delay={0.1}>
              <blockquote className="border-l-2 border-[#E11D48] pl-5 sm:pl-6 my-5 sm:my-6">
                <p className="text-[17px] sm:text-[18px] text-zinc-200 font-medium not-italic leading-[1.65]">
                  {content.quote}
                </p>
              </blockquote>
            </Reveal>

            {/* Paragraph Below Pull Quote */}
            <Reveal delay={0.15}>
              <p className="text-base text-zinc-300 font-normal leading-[1.72]">
                {content.paragraph2Intro}
                <Link
                  href={content.linkHref}
                  className="text-white underline decoration-zinc-700 underline-offset-4 hover:decoration-[#E11D48] hover:text-[#E11D48] transition-colors"
                >
                  {content.linkText}
                </Link>
                {content.paragraph2Outro}
              </p>
            </Reveal>
          </div>

          {/* Right Column: Clean, Neat Image Slot (~48%) */}
          <div className="w-full">
            <Reveal delay={0.1}>
              {activeImage ? (
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800/80 shadow-2xl">
                  <Image
                    src={activeImage}
                    alt={`${content.headingPrefix}${content.headingHighlight}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-cover object-center"
                    priority={false}
                  />
                </div>
              ) : (
                /* Neat Clean Image Placement Slot */
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] bg-zinc-950/70 rounded-xl border border-dashed border-zinc-800/90 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-zinc-400 mb-3">
                    <ImageIcon className="w-5 h-5 text-zinc-400" />
                  </div>
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                    Image Placement Slot
                  </p>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
