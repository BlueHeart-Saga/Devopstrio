"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
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

const ALL_CAPABILITY_CARD_IMAGES = [
  "/assets/Services-Page/core-services/GenerativeAISolutions.png",
  "/assets/Services-Page/core-services/AIAgentsAutomation.png",
  "/assets/Services-Page/core-services/MLOps&AIOperations.png",
  "/assets/Services-Page/core-services/MachineLearningEngineering.png",
  "/assets/Services-Page/core-services/image.png",
  "/assets/Services-Page/core-services/image2.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 107.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 108.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 110.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 111.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 112.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 113.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 114.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 115.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 116.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 117.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 118.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 119.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 120.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 121.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 303.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 304.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 305.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 306.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 307.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 308.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 309.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 310.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 311.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 312.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 313.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 314.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 315.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 316.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 317.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 318.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 319.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 329.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 331.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 332.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 333.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 334.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 335.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 336.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 337.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 338.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 339.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 340.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 341.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 355.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 356.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 357.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 358.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 359.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 360.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 361.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 362.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 363.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 364.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 365.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 366.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 367.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 420.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 434.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 435.png",
  "/assets/Services-Page/Capability Overview section images/reorder/Frame 436.png"
];

function getCapabilityCardImage(serviceSlug: string, capSlug: string, index: number): string {
  let hash = 0;
  const str = serviceSlug + capSlug;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  const uniqueIdx = Math.abs(hash + index * 7) % ALL_CAPABILITY_CARD_IMAGES.length;
  return ALL_CAPABILITY_CARD_IMAGES[uniqueIdx];
}

export function CapabilityGrid({ serviceSlug, capabilities }: CapabilityGridProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Pad capabilities list to always have at least 6 cards (min 4-6 cards)
  let displayCapabilities = [...capabilities];
  if (displayCapabilities.length > 0 && displayCapabilities.length < 6) {
    while (displayCapabilities.length < 6) {
      displayCapabilities = [
        ...displayCapabilities,
        ...capabilities.map((cap) => ({
          ...cap,
          slug: `${cap.slug}-dup-${displayCapabilities.length}`
        }))
      ];
    }
  }

  // Handle responsive visible card counts matching CoreServices.tsx
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showCarousel = displayCapabilities.length > visibleCards;
  const maxIndex = displayCapabilities.length - visibleCards;

  // Auto-scroll loop one-by-one
  useEffect(() => {
    if (!showCarousel || isPaused) return;

    const timer = setInterval(() => {
      setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 4500);

    return () => clearInterval(timer);
  }, [maxIndex, isPaused, showCarousel]);

  const prev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const next = () => {
    setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const gap = 24; // gap-6
  const xTranslation = startIndex * (100 / visibleCards);

  return (
    <section
      id="capabilities"
      className="w-full pt-14 md:pt-20 pb-16 md:pb-24 bg-[#030303] text-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.05),transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_left,rgba(225,29,72,0.04),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CAPABILITIES
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Core Practice <span className="text-rose-500">Specializations</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Choose a capability below to view technical solution details, deliverables, and framework processes.
            </p>
          </div>
        </Reveal>

        {/* Carousel / Grid Viewport */}
        <div className="relative overflow-hidden w-full pb-4">
          {showCarousel ? (
            <motion.div
              className="flex gap-6"
              animate={{ x: `calc(-${xTranslation}% - ${startIndex * gap}px)` }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            >
              {displayCapabilities.map((cap, idx) => {
                const originalSlug = cap.slug.split("-dup-")[0];
                const href = `/services/${serviceSlug}/${originalSlug}`;
                const bgImage = getCapabilityCardImage(serviceSlug, originalSlug, idx);
                return (
                  <div
                    key={cap.slug}
                    className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 group flex flex-col bg-zinc-950 border border-zinc-800/60 rounded-2xl overflow-hidden hover:border-rose-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(225,29,72,0.07)]"
                  >
                    {/* Cover Image */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-900">
                      <img
                        src={bgImage}
                        alt={cap.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
                    </div>

                    {/* Card Body */}
                    <div className="flex flex-col flex-1 p-6 gap-3 text-left">
                      <span className="text-rose-500 text-[11px] font-bold uppercase tracking-widest">
                        CAPABILITY 0{idx + 1}
                      </span>
                      <h3 className="text-white text-base md:text-[17px] font-bold leading-snug">
                        {cap.title}
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-2">
                        {cap.description}
                      </p>

                      {cap.items && cap.items.length > 0 && (
                        <ul className="flex flex-col gap-2.5 mb-6">
                          {cap.items.slice(0, 3).map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-[11px] text-zinc-400 leading-normal">
                              <CheckCircle2 size={11} className="text-rose-500 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* CTA */}
                      <Link
                        href={href}
                        className="mt-auto inline-flex items-center gap-2.5 bg-zinc-900 hover:bg-rose-600 border border-zinc-800 hover:border-rose-600 text-zinc-300 hover:text-white rounded-lg px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 w-fit group/btn"
                      >
                        <span className="w-5 h-5 rounded-sm bg-rose-600 group-hover/btn:bg-white flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                          <ArrowUpRight size={11} className="text-white group-hover/btn:text-rose-600 transition-colors duration-300" />
                        </span>
                        Explore Details
                      </Link>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayCapabilities.map((cap, idx) => {
                const originalSlug = cap.slug.split("-dup-")[0];
                const href = `/services/${serviceSlug}/${originalSlug}`;
                const bgImage = getCapabilityCardImage(serviceSlug, originalSlug, idx);
                return (
                  <Reveal key={cap.slug} delay={idx * 0.05}>
                    <div className="group h-full flex flex-col bg-zinc-950 border border-zinc-800/60 rounded-2xl overflow-hidden hover:border-rose-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(225,29,72,0.07)]">
                      {/* Cover Image */}
                      <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-900">
                        <img
                          src={bgImage}
                          alt={cap.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
                      </div>

                      {/* Card Body */}
                      <div className="flex flex-col flex-1 p-6 gap-3 text-left">
                        <span className="text-rose-500 text-[11px] font-bold uppercase tracking-widest">
                          CAPABILITY 0{idx + 1}
                        </span>
                        <h3 className="text-white text-base md:text-[17px] font-bold leading-snug">
                          {cap.title}
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-2">
                          {cap.description}
                        </p>

                        {cap.items && cap.items.length > 0 && (
                          <ul className="flex flex-col gap-2.5 mb-6">
                            {cap.items.slice(0, 3).map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-[11px] text-zinc-400 leading-normal">
                                <CheckCircle2 size={11} className="text-rose-500 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* CTA */}
                        <Link
                          href={href}
                          className="mt-auto inline-flex items-center gap-2.5 bg-zinc-900 hover:bg-rose-600 border border-zinc-800 hover:border-rose-600 text-zinc-300 hover:text-white rounded-lg px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 w-fit group/btn"
                        >
                          <span className="w-5 h-5 rounded-sm bg-rose-600 group-hover/btn:bg-white flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                            <ArrowUpRight size={11} className="text-white group-hover/btn:text-rose-600 transition-colors duration-300" />
                          </span>
                          Explore Details
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>

        {/* Carousel Navigation Buttons */}
        {showCarousel && (
          <div className="flex items-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-zinc-700 hover:border-rose-500 hover:bg-rose-500/10 text-white flex items-center justify-center transition-all duration-300 active:scale-95"
              aria-label="Previous capabilities"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-zinc-700 hover:border-rose-500 hover:bg-rose-500/10 text-white flex items-center justify-center transition-all duration-300 active:scale-95"
              aria-label="Next capabilities"
            >
              <ArrowUpRight size={16} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
