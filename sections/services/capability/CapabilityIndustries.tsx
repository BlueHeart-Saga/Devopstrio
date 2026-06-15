"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface CapabilityIndustriesProps {
  industries: string[];
}

function getIndustrySlug(title: string): string {
  const lower = title.toLowerCase();
  if (lower.includes("bank") || lower.includes("financ")) return "banking-finance";
  if (lower.includes("retail") || lower.includes("commerce")) return "retail-ecommerce";
  if (lower.includes("health") || lower.includes("life") || lower.includes("med")) return "healthcare-life-sciences";
  if (lower.includes("manufactur")) return "manufacturing";
  if (lower.includes("media") || lower.includes("entertain")) return "media-entertainment";
  if (lower.includes("telecom")) return "telecommunications";
  if (lower.includes("educat")) return "education";
  if (lower.includes("govern") || lower.includes("public")) return "government-public-sector";
  return "";
}

export function CapabilityIndustries({ industries }: CapabilityIndustriesProps) {
  // Sector icon helper
  const getIcon = (title: string) => {
    const lower = title.toLowerCase();
    let src = "/assets/Home-page/industries-icon/Finacial.png";

    if (lower.includes("bank")) {
      src = "/assets/Home-page/industries-icon/Banking.png";
    } else if (lower.includes("financ")) {
      src = "/assets/Home-page/industries-icon/Finacial.png";
    } else if (lower.includes("retail") || lower.includes("commerce")) {
      src = "/assets/Home-page/industries-icon/retails-ecommerce.png";
    } else if (lower.includes("health") || lower.includes("life") || lower.includes("med")) {
      src = "/assets/Home-page/industries-icon/healthcare.png";
    } else if (lower.includes("manufactur")) {
      src = "/assets/Home-page/industries-icon/manufacture.png";
    } else if (lower.includes("media") || lower.includes("entertain")) {
      src = "/assets/Home-page/industries-icon/media-entertainments.png";
    } else if (lower.includes("telecom")) {
      src = "/assets/Home-page/industries-icon/tel-com.png";
    } else if (lower.includes("educat")) {
      src = "/assets/Home-page/industries-icon/education.png";
    } else if (lower.includes("govern") || lower.includes("public")) {
      src = "/assets/Home-page/industries-icon/Finacial.png";
    }

    return (
      <img 
        src={src} 
        alt={title} 
        className="w-30 h-30 object-contain group-hover:scale-105 transition-transform duration-300 pointer-events-none select-none"
      />
    );
  };

  return (
    <section id="industries" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background graphic glow */}
      <div className="absolute top-[30%] left-[-10%] w-[30%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.01),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left relative z-10">
        <Reveal className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              Sectors Served
            </span>
          </div>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-6 text-white uppercase">
            Target sector <span className="text-rose-500">applications</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((item, idx) => {
            const parts = item.split(":");
            const title = parts[0] || "Sector Specialization";
            const desc = parts.slice(1).join(":") || "";
            const slug = getIndustrySlug(title);
            const href = slug ? `/industries/${slug}` : "/industries";

            return (
              <Reveal key={idx} delay={idx * 0.03} className="h-full">
                <Link
                  href={href}
                  className="group flex flex-col justify-between h-full bg-zinc-950/40 border border-white/5 rounded-3xl p-8 hover:border-rose-500/35 hover:bg-zinc-950/60 transition-all duration-300 hover:scale-[1.01] text-center relative overflow-hidden cursor-pointer backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div>
                    {/* Icon Container */}
                    <div className="mb-6 flex items-center justify-center">
                      {getIcon(title)}
                    </div>
                    
                    <h3 className="text-base md:text-lg font-bold text-rose-500 mb-3 group-hover:text-rose-400 transition-colors uppercase tracking-wide">
                      {title}
                    </h3>
                    
                    {desc && (
                      <p className="text-xs text-white leading-relaxed font-bold group-hover:text-white transition-colors">
                        {desc.trim()}
                      </p>
                    )}
                  </div>

                  <div className="border-t border-zinc-900/60 pt-4 mt-6 flex justify-center">
                    <span className="text-[9px] text-rose-500 font-bold uppercase tracking-wider transition-transform duration-300 inline-flex items-center gap-1.5 group-hover:translate-y-[-2px]">
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
