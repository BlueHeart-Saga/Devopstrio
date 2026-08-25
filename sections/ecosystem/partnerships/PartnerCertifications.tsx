"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface CertBadge {
  name?: string;
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
  if (!certifications || certifications.length === 0) return null;

  return (
    <div id="certifications" className="scroll-mt-24">
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block drop-shadow-md">
              VERIFIED EXPERTISE
            </span> */}
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white drop-shadow-md">
              {title}
            </h2>
            {/* <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              {subtitle}
            </p> */}
          </Reveal>

          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/20 transition-all duration-300 text-center gap-4 group w-[160px] md:w-[180px]"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-2 relative group-hover:scale-105 transition-transform duration-300">
                  <img src={cert.image} 
                    alt={cert.name || `Certification ${idx + 1}`} 
                    className="w-full h-full object-contain filter brightness-95 contrast-105" 
                  loading="lazy" />
                </div>
                {cert.name && (
                  <h4 className="text-base md:text-lg font-semibold text-zinc-350 group-hover:text-white transition-colors leading-snug">
                    {cert.name}
                  </h4>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
