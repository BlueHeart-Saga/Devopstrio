"use client";

import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

interface PartnerLogo {
  src: string;
  alt: string;
}

const partnerLogos: PartnerLogo[] = [
  { src: "/assets/Home-page/partners/BT.svg", alt: "BT" },
  { src: "/assets/Home-page/partners/bp-logo.svg", alt: "BP" },
  { src: "/assets/Home-page/partners/NHS.svg", alt: "NHS" },
  { src: "/assets/Home-page/partners/Boviet_Solar.png", alt: "Boviet Solar" },
  { src: "/assets/Home-page/partners/gxo.svg", alt: "GXO" },
  { src: "/assets/Home-page/partners/ASDA.svg", alt: "ASDA" },
  { src: "/assets/Home-page/partners/Microsoft.svg", alt: "Microsoft" },
  { src: "/assets/Home-page/partners/Virgin.svg", alt: "Virgin" },
  { src: "/assets/Home-page/partners/Costco.svg", alt: "Costco" },
  { src: "/assets/Home-page/partners/Metrobank.svg", alt: "Metro Bank" }
];

const doubledLogos = [...partnerLogos, ...partnerLogos];

export function TrustBanner() {
  return (
    <section className="w-full border-y border-zinc-900/60 bg-zinc-950/20 backdrop-blur-sm py-10 relative z-20 overflow-hidden">
      {/* Decorative premium radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-20 bg-rose-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Side: Premium Enterprise Copy */}
          <div className="flex-shrink-0 max-w-sm">
            <Reveal>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-2 block">
                ENTERPRISE TRUST
              </span>
            </Reveal>
            <Reveal>
              <h3 className="text-base md:text-lg font-bold text-white tracking-tight leading-snug">
                Trusted by the world's most <br className="hidden sm:block lg:hidden" />
                innovative enterprises.
              </h3>
            </Reveal>
          </div>

          {/* Right Side: Logo Marquee Ticker */}
          <div className="flex-grow relative overflow-hidden py-2.5 lg:max-w-[70%] xl:max-w-[75%]">
            {/* Smooth edge fading gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-[#030303]/90 via-[#030303]/40 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-[#030303]/90 via-[#030303]/40 to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-16 md:gap-20 items-center whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 45,
                repeat: Infinity
              }}
            >
              {doubledLogos.map((logo, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-6 md:max-h-7 w-auto object-contain select-none"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
