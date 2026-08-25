"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface CertBadge {
  name: string;
  image: string;
}

export function Certifications() {
  const certifications: CertBadge[] = [
    { 
      name: "AWS Solutions Architect Pro", 
      image: "/webp/assets/ecosystem/aws-awards/image-120.webp"
    },
    { 
      name: "Azure Solutions Architect Expert", 
      image: "/webp/assets/ecosystem/microsofr-awards/image-123.webp"
    },
    { 
      name: "Google Cloud Professional Architect", 
      image: "/webp/assets/ecosystem/GCP-award/image-133.webp"
    },
    { 
      name: "AWS Security Specialty", 
      image: "/webp/assets/ecosystem/aws-awards/image-141.webp"
    },
    { 
      name: "Azure Security Engineer Associate", 
      image: "/webp/assets/ecosystem/microsofr-awards/image-125.webp"
    },
    { 
      name: "Google Cloud Professional Data Engineer", 
      image: "/webp/assets/ecosystem/GCP-award/image-134.webp"
    }
  ];

  return (
    <section id="certifications" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            VERIFIED EXPERTISE
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Ecosystem Certifications & <span className="text-rose-500">Accreditations</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            Our teams are rigorously trained and certified by our global technology partners to ensure world-class solution deliveries.
          </p>
        </Reveal>

        {/* Badge Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center justify-center bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/20 transition-all duration-300 text-center gap-4 group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-2 relative group-hover:scale-105 transition-transform duration-300">
                <img src={cert.image} 
                  alt={cert.name} 
                  className="w-full h-full object-contain filter brightness-95 contrast-105" 
                loading="lazy" />
              </div>
              <h4 className="text-xs md:text-sm font-bold text-zinc-350 group-hover:text-white transition-colors leading-snug min-h-[40px] flex items-center justify-center">
                {cert.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
