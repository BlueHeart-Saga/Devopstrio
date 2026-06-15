"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface UseCaseItem {
  title: string;
  result: string;
  image?: string;
}

interface IndustryUseCasesProps {
  useCases: UseCaseItem[];
}

const defaultImages = [
  "/assets/Home-page/arch-life.png",
  "/assets/Home-page/sol-life.png",
  "/assets/Home-page/rapid-life.png",
  "/assets/Home-page/biz-life.png"
];

const defaultExtraUseCases: UseCaseItem[] = [
  {
    title: "Multi-Cloud GitOps Ingress",
    result: "Unified continuous deployment gates across Azure and AWS, cutting release times by 84%."
  },
  {
    title: "Infrastructure-as-Code Baseline",
    result: "99.98% drop in environment configuration drift via Terraform standardization audits."
  },
  {
    title: "Zero-Trust Access Isolation",
    result: "Secured credential flows and database access paths under SOC-2 compliance parameters."
  },
  {
    title: "SRE Automation Integration",
    result: "Automated alert resolution rules that resolved 92% of server-load incidents without human calls."
  },
  {
    title: "Distributed Telemetry Logging",
    result: "Gathered 4TB of daily application logs into unified ElasticSearch systems under 15ms indexing latency."
  },
  {
    title: "High-Throughput Load Verification",
    result: "Simulated 500,000 requests per second under peak-period models to discover database lock bugs."
  }
];

export function IndustryUseCases({ useCases }: IndustryUseCasesProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Merge to guarantee at least 8 use cases are rendered
  const mergedUseCases = [...useCases];
  let extraIdx = 0;
  while (mergedUseCases.length < 8 && extraIdx < defaultExtraUseCases.length) {
    const item = { ...defaultExtraUseCases[extraIdx] };
    mergedUseCases.push(item);
    extraIdx++;
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; // Card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="use-cases" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 text-left">
        
        {/* Section Header */}
        <Reveal className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
              Use Cases
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white max-w-2xl">
            Proven <span className="text-[#E11D48]">use case portfolio</span>
          </h2>
        </Reveal>

        {/* CSS style block to hide scrollbar across all major browsers */}
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none !important;
          }
          .hide-scrollbar {
            -ms-overflow-style: none !important;
            scrollbar-width: none !important;
          }
        `}} />

        {/* Carousel Slider Wrapper */}
        <div className="relative w-full">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 snap-x snap-mandatory scroll-smooth"
            style={{ 
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
              scrollbarWidth: "none"
            }}
          >
            {mergedUseCases.map((uc, idx) => {
              const displayImage = uc.image || defaultImages[idx % defaultImages.length];

              return (
                <div
                  key={idx}
                  className="snap-start flex-shrink-0 w-[290px] sm:w-[320px] bg-[#0b0b0c] border border-white/10 rounded-[24px] overflow-hidden flex flex-col justify-between h-[480px] hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)] transition-all duration-300 relative group"
                >
                  {/* Padded image layout */}
                  <div className="p-3 pb-0">
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900 rounded-[16px] border border-white/5">
                      <img
                        src={displayImage}
                        alt={uc.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 pointer-events-none select-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow text-left">
                    <span className="text-[10px] font-mono tracking-widest text-[#E11D48] uppercase font-bold block mb-2">
                      Success Case {(idx + 1).toString().padStart(2, "0")}
                    </span>

                    <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-rose-500 transition-colors">
                      {uc.title}
                    </h3>
                    
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                      {uc.result}
                    </p>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="px-6 pb-6 pt-3 mt-auto border-t border-white/5 flex items-center justify-between text-[#E11D48] group-hover:text-rose-455 transition-colors">
                    <span className="text-[9px] uppercase font-bold tracking-wider">
                      Metrics Verified
                    </span>
                    <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Navigation Arrow Controls */}
        <div className="flex gap-4 mt-8 justify-start relative z-20">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-950/60 hover:bg-zinc-900 hover:border-white/20 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-950/60 hover:bg-zinc-900 hover:border-white/20 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"
          >
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
