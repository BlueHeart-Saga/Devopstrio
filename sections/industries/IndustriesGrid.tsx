"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const industries = [
  {
    slug: "banking-finance",
    name: "Banking & Finance",
    href: "/industries/banking-finance",
    image: "/webp/assets/Industries-page/industries/Banking-and-Finance.webp"
  },
  {
    slug: "healthcare-life-sciences",
    name: "Healthcare & Life Sciences",
    href: "/industries/healthcare-life-sciences",
    image: "/webp/assets/Industries-page/industries/Healthcare-and-Life-Sciences.webp"
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    href: "/industries/retail-ecommerce",
    image: "/webp/assets/Industries-page/industries/Retail-and-E-Commerce.webp"
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    href: "/industries/manufacturing",
    image: "/webp/assets/Industries-page/industries/Manufacturing.webp"
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    href: "/industries/telecommunications",
    image: "/webp/assets/Industries-page/industries/Telecommunications.webp"
  },
  {
    slug: "media-entertainment",
    name: "Media & Entertainment",
    href: "/industries/media-entertainment",
    image: "/webp/assets/Industries-page/industries/Media-and-Entertainment.webp"
  },
  {
    slug: "education",
    name: "Education",
    href: "/industries/education",
    image: "/webp/assets/Industries-page/industries/Education.webp"
  },
  {
    slug: "government-public-sector",
    name: "Government & Public Sector",
    href: "/industries/government-public-sector",
    image: "/webp/assets/Industries-page/industries/Government-and-Public-Sector.webp"
  }
];

export function IndustriesGrid() {
  return (
    <section id="overview" className="w-full pt-4 pb-14 md:pt-6 md:pb-18 bg-[#030303] text-white relative overflow-hidden">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-8 relative z-10">

        {/* Section Header (ref: IndustryExpertise.tsx) */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 relative">
          {/* Left-to-right arrow PNG pointing to header */}
          <div className="absolute -top-6 sm:-top-8 md:-top-10 -left-4 sm:-left-8 md:-left-12 lg:-left-16 z-20 pointer-events-none select-none">
            <img
              src="/webp/assets/components/lefttoright.webp"
              alt="Left to right arrow"
              className="w-12 sm:w-16 md:w-20 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.45)]"
              loading="lazy"
            />
          </div>

          <Reveal>
            <p className="text-white text-base sm:text-lg md:text-xl font-bold tracking-wide uppercase mb-3 font-sans">
              Different Industries. One Shared Future.
            </p>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white mb-2 leading-tight font-sans">
              <span className="inline-block bg-rose-500 text-black font-extrabold px-3.5 py-1 mx-1.5 rounded-sm transform -rotate-3 shadow-[0_4px_20px_rgba(225,29,72,0.45)] align-middle uppercase tracking-wider text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
                CONNECT
              </span>{" "}
              Technology with Innovation
            </h2>
          </Reveal>
        </div>

        {/* Premium Full-bleed Rectangular Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <Reveal key={ind.slug} delay={idx * 0.05} className="h-full">
              <Link
                href={ind.href}
                className="group block relative aspect-[16/10] rounded-[20px] overflow-hidden border border-white/10 hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)] transition-all duration-350 cursor-pointer"
              >
                {/* Full-bleed Background Image */}
                <img src={ind.image}
                  alt={ind.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] select-none pointer-events-none z-0"
                loading="lazy" />

                {/* Dark Gradient Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 z-10" />

                {/* Subtle Red Inner Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-15" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between z-20">
                  
                  {/* Top Block: Floating Redirect Arrow Badge */}
                  <div className="flex justify-end">
                    <span className="w-8 h-8 rounded-full bg-black/45 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-[#E11D48] group-hover:border-[#E11D48]/20 transition-all duration-300">
                      <ArrowUpRight size={14} className="stroke-[2.5]" />
                    </span>
                  </div>

                  {/* Bottom Block: Industry Name */}
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-rose-500 transition-colors duration-300 tracking-tight leading-snug font-sans">
                      {ind.name}
                    </h3>
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
