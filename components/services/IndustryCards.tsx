"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export interface IndustryCardsProps {
  industries: string[];
}

function getOfficialIndustryInfo(title: string) {
  const lower = title.toLowerCase();
  
  if (lower.includes("bank") || lower.includes("financ")) {
    return {
      slug: "banking-finance",
      name: "Banking & Finance"
    };
  }
  if (lower.includes("retail") || lower.includes("commerce") || lower.includes("logistics")) {
    return {
      slug: "retail-ecommerce",
      name: "Retail & E-Commerce"
    };
  }
  if (lower.includes("health") || lower.includes("life") || lower.includes("med")) {
    return {
      slug: "healthcare-life-sciences",
      name: "Healthcare & Life Sciences"
    };
  }
  if (lower.includes("manufactur") || lower.includes("energy") || lower.includes("automotive")) {
    return {
      slug: "manufacturing",
      name: "Manufacturing"
    };
  }
  if (lower.includes("media") || lower.includes("entertain")) {
    return {
      slug: "media-entertainment",
      name: "Media & Entertainment"
    };
  }
  if (lower.includes("telecom") || lower.includes("networks")) {
    return {
      slug: "telecommunications",
      name: "Telecommunications"
    };
  }
  if (lower.includes("educat")) {
    return {
      slug: "education",
      name: "Education"
    };
  }
  
  return {
    slug: "government-public-sector",
    name: "Government & Public Sector"
  };
}

export function IndustryCards({ industries }: IndustryCardsProps) {
  const getIcon = (slug: string) => {
    let src = "/webp/assets/Home-page/industries-icon/Finacial.webp";

    if (slug === "banking-finance") {
      src = "/webp/assets/Home-page/industries-icon/Banking.webp";
    } else if (slug === "retail-ecommerce") {
      src = "/webp/assets/Home-page/industries-icon/retails-ecommerce.webp";
    } else if (slug === "healthcare-life-sciences") {
      src = "/webp/assets/Home-page/industries-icon/healthcare.webp";
    } else if (slug === "manufacturing") {
      src = "/webp/assets/Home-page/industries-icon/manufacture.webp";
    } else if (slug === "media-entertainment") {
      src = "/webp/assets/Home-page/industries-icon/media-entertainments.webp";
    } else if (slug === "telecommunications") {
      src = "/webp/assets/Home-page/industries-icon/tel-com.webp";
    } else if (slug === "education") {
      src = "/webp/assets/Home-page/industries-icon/education.webp";
    } else if (slug === "government-public-sector") {
      src = "/webp/assets/Home-page/industries-icon/Finacial.webp";
    }

    return (
      <img src={src} 
        alt={slug} 
        className="w-30 h-30 object-contain group-hover:scale-105 transition-transform duration-300 pointer-events-none select-none"
      loading="lazy" />
    );
  };

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background graphic glow */}
      <div className="absolute top-[30%] left-[-10%] w-[30%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.01),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left relative z-10">
        
        {/* Section Header */}
        <Reveal className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans">
            Target sector <span className="text-rose-500 font-semibold">applications</span>
          </h2>
        </Reveal>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((item, idx) => {
            const parts = item.split(":");
            const rawTitle = parts[0] || "Sector Specialization";
            const desc = parts.slice(1).join(":") || "";
            const { slug, name } = getOfficialIndustryInfo(rawTitle);

            return (
              <Reveal key={idx} delay={idx * 0.03} className="h-full">
                <Link
                  href={`/industries/${slug}`}
                  className="group flex flex-col justify-between h-full bg-zinc-950/40 border border-white/5 rounded-3xl p-8 hover:border-rose-500/35 hover:bg-zinc-950/60 transition-all duration-300 hover:scale-[1.01] text-center relative overflow-hidden cursor-pointer backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div>
                    {/* Icon Container */}
                    <div className="mb-6 flex items-center justify-center">
                      {getIcon(slug)}
                    </div>
                    
                    <h3 className="text-base md:text-lg font-bold text-rose-500 mb-3 group-hover:text-rose-400 transition-colors uppercase tracking-wide">
                      {name}
                    </h3>
                    
                    {/* {desc && (
                      <p className="text-xs text-white leading-relaxed font-bold group-hover:text-white transition-colors">
                        {desc.trim()}
                      </p>
                    )} */}
                  </div>

                  <div className="border-t border-zinc-900/60 pt-4 mt-6 flex justify-center">
                    <span className="text-sm font-semibold uppercase tracking-wider transition-transform duration-300 inline-flex items-center gap-1.5 group-hover:translate-y-[-2px]">
                      Explore Sector <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
