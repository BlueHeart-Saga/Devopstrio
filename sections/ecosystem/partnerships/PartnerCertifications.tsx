"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CertBadge {
  name?: string;
  category?: string;
  year?: string;
  subtitle?: string;
  image: string;
}

interface PartnerCertificationsProps {
  title?: string;
  subtitle?: string;
  certifications: CertBadge[];
}

export function PartnerCertifications({ 
  title = "Partner Certifications & Accreditations", 
  subtitle = "Our teams are rigorously trained and certified to ensure world-class solution deliveries.",
  certifications 
}: PartnerCertificationsProps) {
  const [showAll, setShowAll] = useState(false);

  if (!certifications || certifications.length === 0) return null;

  // Show 6 initially (2 rows of 3 on desktop), click "View More" reveals remaining
  const initialCount = 6;
  const hasMore = certifications.length > initialCount;
  const displayedCertifications = showAll ? certifications : certifications.slice(0, initialCount);

  return (
    <div id="certifications" className="scroll-mt-24">
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white drop-shadow-md">
              {title}
            </h2>
          </Reveal>

          {/* 3 cards per row on desktop (lg:grid-cols-3) for spacious, large frames */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {displayedCertifications.map((cert, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-between bg-zinc-950/70 border border-zinc-900/90 rounded-2xl p-6 hover:border-rose-500/40 hover:shadow-[0_16px_40px_rgba(225,29,72,0.12)] transition-all duration-300 text-center gap-5 group h-full relative"
              >
                {/* Certificate Frame with bright crisp container for high visibility */}
                <div className="w-full h-64 sm:h-72 flex items-center justify-center p-5 rounded-xl bg-white border border-zinc-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.35)] group-hover:shadow-[0_12px_36px_rgba(225,29,72,0.2)] group-hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.name || `Certification ${idx + 1}`} 
                    className="max-h-full max-w-full object-contain filter contrast-[1.05] brightness-[1.02] transition-transform duration-300" 
                    loading="lazy" 
                  />
                </div>

                {/* Optional Certificate Details below frame if name exists */}
                {cert.name && (
                  <div className="flex flex-col items-center justify-center text-center w-full flex-grow pt-1 gap-2">
                    {(cert.year || cert.category) && (
                      <div className="flex items-center justify-center gap-2 flex-wrap">
                        {cert.year && (
                          <span className="text-[11px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                            {cert.year}
                          </span>
                        )}
                        {cert.category && (
                          <span className="text-xs font-medium tracking-wide text-zinc-400">
                            {cert.category}
                          </span>
                        )}
                      </div>
                    )}
                    <h4 className="text-base font-semibold text-white group-hover:text-rose-400 transition-colors leading-snug">
                      {cert.name}
                    </h4>
                    {cert.subtitle && (
                      <p className="text-xs text-zinc-400 leading-normal line-clamp-2">
                        {cert.subtitle}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* View More / View Less Toggle Button */}
          {hasMore && (
            <div className="mt-14 flex justify-center items-center">
              <button
                type="button"
                onClick={() => setShowAll(!showAll)}
                className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-sm font-semibold text-zinc-200 hover:text-white border border-zinc-800 hover:border-rose-500/50 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(225,29,72,0.25)] transition-all duration-300 cursor-pointer active:scale-95"
              >
                <span>{showAll ? "View Less" : `View More (${certifications.length - initialCount} more)`}</span>
                {showAll ? (
                  <ChevronUp className="w-4 h-4 text-rose-500 group-hover:-translate-y-0.5 transition-transform" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-rose-500 group-hover:translate-y-0.5 transition-transform" />
                )}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
