"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 items-stretch">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-between bg-zinc-950/70 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/40 hover:shadow-[0_12px_32px_rgba(225,29,72,0.12)] transition-all duration-300 text-center gap-4 group h-full"
              >
                {/* Certificate Frame */}
                <div className="w-full h-40 flex items-center justify-center p-3 rounded-xl bg-white/[0.03] border border-white/5 group-hover:border-white/10 group-hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.name || `Certification ${idx + 1}`} 
                    className="max-h-full max-w-full object-contain filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-300 rounded-lg" 
                    loading="lazy" 
                  />
                </div>

                {/* Certificate Name & Details below the certificate inside that card */}
                {cert.name && (
                  <div className="flex flex-col items-center justify-center text-center w-full flex-grow pt-1 gap-1.5">
                    {(cert.year || cert.category) && (
                      <div className="flex items-center justify-center gap-1.5 flex-wrap">
                        {cert.year && (
                          <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                            {cert.year}
                          </span>
                        )}
                        {cert.category && (
                          <span className="text-[11px] font-medium tracking-wide text-zinc-400">
                            {cert.category}
                          </span>
                        )}
                      </div>
                    )}
                    <h4 className="text-sm font-semibold text-white group-hover:text-rose-400 transition-colors leading-snug">
                      {cert.name}
                    </h4>
                    {cert.subtitle && (
                      <p className="text-[11px] text-zinc-400 leading-normal line-clamp-2">
                        {cert.subtitle}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
