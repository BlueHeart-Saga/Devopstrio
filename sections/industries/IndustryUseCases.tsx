"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

const useCases = [
  {
    title: "Dynamic Credit Scoring",
    industry: "Banking",
    result: "92% faster loan approval decision loops.",
    image: "/assets/Industries-page/usecase/Banking.png",
    path: "/industries/banking-finance"
  },
  {
    title: "Patient Record Auditing",
    industry: "Healthcare",
    result: "Zero security violations across 1,400 pod nodes.",
    image: "/assets/Industries-page/usecase/Healthcare.png",
    path: "/industries/healthcare-life-sciences"
  },
  {
    title: "Checkout Load Scaling",
    industry: "Retail",
    result: "Handled 4.5x traffic peaks during holiday sales.",
    image: "/assets/Industries-page/usecase/Retail.png",
    path: "/industries/retail-ecommerce"
  },
  {
    title: "IoT Asset Trackers",
    industry: "Logistics",
    result: "Real-time delivery routing updates under 3 seconds.",
    image: "/assets/Industries-page/usecase/Logistics.png",
    path: "/industries/manufacturing"
  },
  {
    title: "Mainframe Database Shift",
    industry: "Telecom",
    result: "Migrated 80TB database with zero transaction downtime.",
    image: "/assets/Industries-page/usecase/Telecom.png",
    path: "/industries/telecommunications"
  },
  {
    title: "Citizen API Gateway",
    industry: "Public Sector",
    result: "API lookup times reduced from 4.8s to 180ms.",
    image: "/assets/Industries-page/usecase/Public-Sector.png",
    path: "/industries/government-public-sector"
  },
  {
    title: "Distributed Media CDN",
    industry: "Media",
    result: "Global load latency reduced to under 45ms.",
    image: "/assets/Industries-page/usecase/Media.png",
    path: "/industries/media-entertainment"
  },
  {
    title: "Classroom Live Workspace",
    industry: "Education",
    result: "Supported 25,000 concurrent streaming classrooms.",
    image: "/assets/Industries-page/usecase/Education.png",
    path: "/industries/education"
  },
  {
    title: "Predictive Device Care",
    industry: "Manufacturing",
    result: "Reduced production machine downtime by 35%.",
    image: "/assets/Industries-page/usecase/Manufacturing.png",
    path: "/industries/manufacturing"
  },
  {
    title: "Automated Invoicing Gates",
    industry: "Fintech",
    result: "Automated verification for 50,000 daily files.",
    image: "/assets/Industries-page/usecase/Fintech.png",
    path: "/industries/banking-finance"
  }
];

export function IndustryUseCases() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 374; // Card width (350px) + gap (24px)
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="use-cases" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      {/* Hide Scrollbar Style Block */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none !important;
        }
        .hide-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}} />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-left">

        {/* Section Header with Navigation Arrow Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans">
              Proven enterprise <span className="text-[#E11D48] font-semibold">use cases</span>
            </h2>
          </Reveal>

          {/* Navigation controls */}
          <Reveal className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-11 h-11 rounded-full border border-white/5 bg-[#0b0b0c] hover:bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-11 h-11 rounded-full border border-white/5 bg-[#0b0b0c] hover:bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300"
            >
              <ArrowUpRight size={16} />
            </button>
          </Reveal>
        </div>

        {/* Horizontal Slider List */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 pt-4 snap-x snap-mandatory relative"
        >
          {useCases.map((uc, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="flex-shrink-0 snap-start">
              <Link
                href={uc.path}
                className="group block w-[320px] sm:w-[350px] aspect-[3/4] bg-[#0b0b0c] border border-white/10 rounded-[24px] p-6 hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)] transition-all duration-300 relative overflow-hidden cursor-pointer"
              >

                {/* Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                <div className="flex flex-col h-full justify-between relative z-10">

                  <div>
                    {/* Double-bordered Image Frame with padding */}
                    <div className="relative w-full aspect-[16/10] rounded-[16px] border border-white/10 p-0.5 bg-zinc-950 overflow-hidden group-hover:border-rose-500/20 transition-all duration-300 mb-6">
                      <img
                        src={uc.image}
                        alt={uc.title}
                        className="w-full h-full object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-[1.03] select-none pointer-events-none"
                      />
                    </div>

                    {/* Industry Tag */}
                    <span className="text-[11px] font-semibold tracking-[0.15em] text-[#E11D48] uppercase block mb-2">
                      {uc.industry}
                    </span>

                    {/* Title */}
                    <h4 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#E11D48] transition-colors duration-300">
                      {uc.title}
                    </h4>
                  </div>

                  <div>
                    {/* Result */}
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                      {uc.result}
                    </p>

                    {/* Case Study Indicator Footer */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-zinc-500 group-hover:text-white transition-colors duration-300">
                      <span className="text-[10px] uppercase font-mono tracking-wider font-bold">
                        Case Study
                      </span>
                      <span className="text-[10px] font-bold flex items-center gap-1">
                        Learn More <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </div>

                </div>

              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
