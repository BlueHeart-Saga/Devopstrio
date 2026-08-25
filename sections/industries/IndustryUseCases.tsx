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
    image: "/webp/assets/Industries-page/usecase/Banking.webp",
    path: "/industries/banking-finance"
  },
  {
    title: "Patient Record Auditing",
    industry: "Healthcare",
    result: "Zero security violations across 1,400 pod nodes.",
    image: "/webp/assets/Industries-page/usecase/Healthcare.webp",
    path: "/industries/healthcare-life-sciences"
  },
  {
    title: "Checkout Load Scaling",
    industry: "Retail",
    result: "Handled 4.5x traffic peaks during holiday sales.",
    image: "/webp/assets/Industries-page/usecase/Retail.webp",
    path: "/industries/retail-ecommerce"
  },
  {
    title: "IoT Asset Trackers",
    industry: "Logistics",
    result: "Real-time delivery routing updates under 3 seconds.",
    image: "/webp/assets/Industries-page/usecase/Logistics.webp",
    path: "/industries/manufacturing"
  },
  {
    title: "Mainframe Database Shift",
    industry: "Telecom",
    result: "Migrated 80TB database with zero transaction downtime.",
    image: "/webp/assets/Industries-page/usecase/Telecom.webp",
    path: "/industries/telecommunications"
  },
  {
    title: "Citizen API Gateway",
    industry: "Public Sector",
    result: "API lookup times reduced from 4.8s to 180ms.",
    image: "/webp/assets/Industries-page/usecase/Public-Sector.webp",
    path: "/industries/government-public-sector"
  },
  {
    title: "Distributed Media CDN",
    industry: "Media",
    result: "Global load latency reduced to under 45ms.",
    image: "/webp/assets/Industries-page/usecase/Media.webp",
    path: "/industries/media-entertainment"
  },
  {
    title: "Classroom Live Workspace",
    industry: "Education",
    result: "Supported 25,000 concurrent streaming classrooms.",
    image: "/webp/assets/Industries-page/usecase/Education.webp",
    path: "/industries/education"
  },
  {
    title: "Predictive Device Care",
    industry: "Manufacturing",
    result: "Reduced production machine downtime by 35%.",
    image: "/webp/assets/Industries-page/usecase/Manufacturing.webp",
    path: "/industries/manufacturing"
  },
  {
    title: "Automated Invoicing Gates",
    industry: "Fintech",
    result: "Automated verification for 50,000 daily files.",
    image: "/webp/assets/Industries-page/usecase/Fintech.webp",
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
    <section id="use-cases" className="w-full pt-6 pb-14 md:pt-8 md:pb-18 bg-[#030303] relative overflow-hidden text-white">
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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12 relative">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans relative inline-block">
              Proven Use Cases to{" "}
              <span className="relative inline-block">
                <span className="inline-block bg-rose-500 text-black font-extrabold px-3.5 py-1 mx-1.5 rounded-sm transform -rotate-3 shadow-[0_4px_20px_rgba(225,29,72,0.45)] align-middle uppercase tracking-wider text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  GROW
                </span>
                {/* Horizontally Flipped Arrow on Right Side of GROW */}
                <div className="absolute -top-6 sm:-top-8 md:-top-10 -right-12 sm:-right-20 md:-right-24 lg:-right-28 z-30 pointer-events-none select-none">
                  <img
                    src="/webp/assets/components/top-to-buttom-side-Arrowmid.webp"
                    alt="Connecting section arrow"
                    className="w-12 sm:w-16 md:w-20 lg:w-24 h-auto object-contain filter drop-shadow-[0_0_20px_rgba(225,29,72,0.4)] scale-x-[-1] transform -rotate-[30deg]"
                    loading="lazy"
                  />
                </div>
              </span>
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
                className="group block w-[300px] sm:w-[340px] bg-[#0b0b0c] border border-white/10 rounded-[24px] p-5 sm:p-6 hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.12)] transition-all duration-300 relative overflow-hidden cursor-pointer flex flex-col justify-between"
              >

                {/* Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                <div className="relative z-10 flex flex-col h-full justify-between">

                  <div>
                    {/* Flush Image Container without extra padding */}
                    <div className="relative w-full aspect-[16/10] rounded-2xl border border-white/10 overflow-hidden group-hover:border-rose-500/30 transition-all duration-300 mb-5">
                      <img
                        src={uc.image}
                        alt={uc.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none pointer-events-none"
                        loading="lazy"
                      />
                    </div>

                    {/* Industry Tag */}
                    <span className="text-xs font-semibold tracking-widest text-rose-500 uppercase block mb-1.5 font-sans">
                      {uc.industry}
                    </span>

                    {/* Improved Big Title */}
                    <h4 className="text-xl sm:text-2xl font-bold text-white leading-tight group-hover:text-rose-400 transition-colors duration-300 font-sans">
                      {uc.title}
                    </h4>
                  </div>

                  {/* Case Study Footer Link */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-zinc-400 group-hover:text-white transition-colors duration-300">
                    <span className="text-xs uppercase font-mono tracking-wider font-semibold text-zinc-400">
                      Case Study
                    </span>
                    <span className="text-xs sm:text-sm font-bold flex items-center gap-1.5 text-rose-400 group-hover:text-white transition-colors">
                      Learn More <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
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
