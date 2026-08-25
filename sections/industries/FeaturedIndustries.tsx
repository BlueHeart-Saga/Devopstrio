"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { getWebPPath } from "@/lib/utils";

interface FeaturedIndustryItem {
  title: string;
  desc: string;
  image: string;
  slug: string;
}

const featuredIndustries: FeaturedIndustryItem[] = [
  {
    title: "Banking & Financial Services",
    desc: "We engineer transaction processing databases handling over 20,000 requests per second with automated fraud monitoring and SOC-2 security compliance.",
    image: "/webp/assets/Industries-page/industries/Banking-and-Finance.webp",
    slug: "banking-finance"
  },
  {
    title: "Healthcare & Life Sciences",
    desc: "Deploying secure patient record structures with full-disk data encryption, automated data ingestion channels, and runtime threat checkers.",
    image: "/webp/assets/Industries-page/industries/Healthcare-and-Life-Sciences.webp",
    slug: "healthcare-life-sciences"
  },
  {
    title: "Retail & E-Commerce",
    desc: "Optimizing high-traffic storefronts to handle 4.5x seasonal peak traffic surges with sub-200ms page load speeds and multi-cloud auto-scaling.",
    image: "/webp/assets/Industries-page/industries/Retail-and-E-Commerce.webp",
    slug: "retail-ecommerce"
  },
  {
    title: "Smart Manufacturing",
    desc: "Optimizing supply chain operations with real-time telemetry stream pipelines, predictive machine failure warnings, and IoT gateways.",
    image: "/webp/assets/Industries-page/industries/Manufacturing.webp",
    slug: "manufacturing"
  }
];

export function FeaturedIndustries() {
  return (
    <section id="featured" className="w-full pt-6 pb-14 md:pt-8 md:pb-18 bg-[#030303] relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-8 relative z-10 text-left">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 relative">
          {/* Left-to-right arrow PNG pointing to header */}
          {/* <div className="absolute -top-6 sm:-top-8 md:-top-10 -left-4 sm:-left-8 md:-left-12 lg:-left-16 z-20 pointer-events-none select-none">
            <img
              src="/webp/assets/components/lefttoright.webp"
              alt="Left to right arrow"
              className="w-12 sm:w-16 md:w-20 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.45)]"
              loading="lazy"
            />
          </div> */}

          <Reveal>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white mb-2 leading-tight font-sans">
              Architected to{" "}
              <span className="inline-block bg-rose-500 text-black font-extrabold px-3.5 py-1 mx-1.5 rounded-sm transform -rotate-3 shadow-[0_4px_20px_rgba(225,29,72,0.45)] align-middle uppercase tracking-wider text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
                CREATE
              </span>{" "}
              High-Impact Solutions
            </h2>
          </Reveal>
        </div>

        {/* 4 Vertical Pillar Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {featuredIndustries.map((feat, idx) => (
            <Reveal key={idx} delay={idx * 0.08} className="w-full h-full">
              <Link
                href={`/industries/${feat.slug}`}
                className="group relative block w-full h-[450px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden border border-white/10 hover:border-rose-500/50 transition-all duration-500 shadow-2xl cursor-pointer flex flex-col justify-between"
              >
                {/* Background Image with Blur Effect on Hover */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={getWebPPath(feat.image)}
                    alt={feat.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.8] group-hover:scale-105 group-hover:brightness-[0.35] group-hover:blur-md transition-all duration-700 select-none pointer-events-none"
                    loading="lazy"
                  />
                  {/* Overlay for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 via-40% to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                </div>

                {/* Top Action Arrow Button */}
                <div className="relative z-10 p-6 sm:p-7 flex items-center justify-end">
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white group-hover:bg-rose-600 group-hover:border-rose-600 group-hover:scale-110 transition-all duration-300 shrink-0">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Content Area: Title + Hover-revealed solution details */}
                <div className="relative z-10 p-6 sm:p-7 mt-auto">
                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-rose-400 transition-colors duration-300 leading-tight font-sans mb-1">
                    {feat.title}
                  </h3>

                  {/* Solution Details (Reveals on Hover with Image Blur) */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <div className="overflow-hidden pt-2">
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal font-sans mb-4">
                        {feat.desc}
                      </p>
                      <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-rose-400 group-hover:text-white transition-colors">
                        <span>Explore {feat.title}</span>
                        <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
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
