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
    image: "/assets/Industries-page/industries/Banking & Finance.png"
  },
  {
    slug: "healthcare-life-sciences",
    name: "Healthcare & Life Sciences",
    href: "/industries/healthcare-life-sciences",
    image: "/assets/Industries-page/industries/Healthcare & Life Sciences.png"
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    href: "/industries/retail-ecommerce",
    image: "/assets/Industries-page/industries/Retail & E-Commerce.png"
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    href: "/industries/manufacturing",
    image: "/assets/Industries-page/industries/Manufacturing.png"
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    href: "/industries/telecommunications",
    image: "/assets/Industries-page/industries/Telecommunications.png"
  },
  {
    slug: "media-entertainment",
    name: "Media & Entertainment",
    href: "/industries/media-entertainment",
    image: "/assets/Industries-page/industries/Media & Entertainment.png"
  },
  {
    slug: "education",
    name: "Education",
    href: "/industries/education",
    image: "/assets/Industries-page/industries/Education.png"
  },
  {
    slug: "government-public-sector",
    name: "Government & Public Sector",
    href: "/industries/government-public-sector",
    image: "/assets/Industries-page/industries/Government & Public Sector.png"
  }
];

export function IndustriesGrid() {
  return (
    <section id="overview" className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        {/* Section Header */}
        <Reveal className="mb-20 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
              Core Domains
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white max-w-2xl">
            Specialized solutions for <span className="text-[#E11D48]">global industries</span>
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-semibold leading-relaxed mt-4 max-w-xl">
            Choose an industry to see our <Link href="/services" className="text-rose-500 hover:underline">specialized software capabilities</Link>, case studies, and <Link href="/services/cybersecurity" className="text-rose-500 hover:underline">compliance alignments</Link>.
          </p>
        </Reveal>

        {/* Premium Full-bleed Rectangular Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <Reveal key={ind.slug} delay={idx * 0.05} className="h-full">
              <Link
                href={ind.href}
                className="group block relative aspect-[16/10] rounded-[20px] overflow-hidden border border-white/10 hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)] transition-all duration-350 cursor-pointer"
              >
                {/* Full-bleed Background Image */}
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] select-none pointer-events-none z-0"
                />

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
                    <h3 className="text-base md:text-lg font-bold text-white group-hover:text-[#E11D48] transition-colors duration-300 tracking-tight leading-snug">
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
