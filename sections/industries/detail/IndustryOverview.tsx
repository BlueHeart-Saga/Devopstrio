"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface IndustryOverviewProps {
  overviewHeading: string;
  overviewDesc1: string;
  overviewDesc2: string;
  challenges: string[];
  image?: string;
}

export function IndustryOverview({
  overviewHeading,
  overviewDesc1,
  overviewDesc2,
  challenges,
  image
}: IndustryOverviewProps) {
  // Map incoming bgImage/image to the premium illustration from /assets/Industries-page/industriescard/
  const getPremiumIllustration = (imgSrc: string) => {
    const src = imgSrc.toLowerCase();
    
    if (src.includes("finance") || src.includes("banking") || src.includes("bank")) {
      return "/assets/Industries-page/industriescard/Banking and finance.png";
    }
    if (src.includes("education")) {
      return "/assets/Industries-page/industriescard/Education.png";
    }
    if (src.includes("public") || src.includes("government") || src.includes("govt")) {
      return "/assets/Industries-page/industriescard/Government & Public Sector.png";
    }
    if (src.includes("healthcare") || src.includes("health") || src.includes("life")) {
      return "/assets/Industries-page/industriescard/Healthcare & Life Sciences.png";
    }
    if (src.includes("manufactur") || src.includes("manuf")) {
      return "/assets/Industries-page/industriescard/Manufacturing.png";
    }
    if (src.includes("media") || src.includes("entertainment")) {
      return "/assets/Industries-page/industriescard/Media & Entertainment.png";
    }
    if (src.includes("retail") || src.includes("commerce") || src.includes("retails")) {
      return "/assets/Industries-page/industriescard/Retail & E-Commerce.png";
    }
    if (src.includes("telecommunication") || src.includes("telecom") || src.includes("tele")) {
      return "/assets/Industries-page/industriescard/Telecommunications.png";
    }
    
    return "/assets/Home-page/business-overview/overview-lifestyle.png";
  };

  const displayImage = getPremiumIllustration(image || "");

  return (
    <section id="overview" className="w-full py-24 bg-[#030303] text-white relative overflow-hidden border-b border-zinc-900/60">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <Reveal>
          <div className="group relative overflow-hidden rounded-[32px] border border-zinc-800/60 bg-zinc-950/30 backdrop-blur-xl">
            
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 -left-20 w-96 h-96 bg-rose-600/10 blur-[120px]" />
              <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px]" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-0">
              
              {/* LEFT CONTENT: Overview Context & Approach */}
              <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12 text-left">
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500 mb-8 block">
                  Domain Context
                </span>
                
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold leading-tight tracking-tight mb-6 text-white">
                  {overviewHeading}
                </h2>

                <div className="space-y-4 text-zinc-400 text-sm leading-relaxed mb-8 font-medium">
                  <p className="border-l-2 border-[#E11D48] pl-4">{overviewDesc1}</p>
                  <p className="border-l-2 border-zinc-800/80 pl-4">{overviewDesc2}</p>
                </div>

                <a
                  href="#challenges"
                  className="inline-flex items-center gap-2 text-white font-semibold group/link w-fit text-sm"
                >
                  Analyze Challenges
                  <span className="w-8 h-8 rounded-full bg-[#E11D48] flex items-center justify-center transition-transform duration-300 group-hover/link:translate-x-1">
                    <ArrowRight size={14} />
                  </span>
                </a>
              </div>

              {/* RIGHT CONTENT: Lifestyle/Sector Image with Curved Padding */}
              <div className="p-0.5 flex items-center justify-center bg-zinc-950/20 border-t lg:border-t-0 lg:border-l border-zinc-900/60">
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-800/80 shadow-2xl group/img">
                  <img
                    src={displayImage}
                    alt="Industry Domain Context"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-[1.02]"
                  />
                  {/* Subtle glow/reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
