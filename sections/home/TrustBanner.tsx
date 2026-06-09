"use client";

import { motion } from "framer-motion";

interface PartnerLogo {
  src: string;
  alt: string;
  className?: string;
}

const partnerLogos: PartnerLogo[] = [
  { src: "/assets/Home-page/partners/BT.svg", alt: "BT", className: "h-10 md:h-12" },
  { src: "/assets/Home-page/partners/bp-logo.svg", alt: "BP", className: "h-12 md:h-14" },
  { src: "/assets/Home-page/partners/NHS.svg", alt: "NHS", className: "h-8 md:h-10" },
  { src: "/assets/Home-page/partners/Boviet_Solar.png", alt: "Boviet Solar", className: "h-8 md:h-9" },
  { src: "/assets/Home-page/partners/gxo.svg", alt: "GXO", className: "h-7 md:h-8" },
  { src: "/assets/Home-page/partners/ASDA.svg", alt: "ASDA", className: "h-7 md:h-8" },
  { src: "/assets/Home-page/partners/Microsoft.svg", alt: "Microsoft", className: "h-8 md:h-9" },
  { src: "/assets/Home-page/partners/Virgin.svg", alt: "Virgin", className: "h-7 md:h-8" },
  { src: "/assets/Home-page/partners/Costco.svg", alt: "Costco", className: "h-7 md:h-9" },
  { src: "/assets/Home-page/partners/Metrobank.svg", alt: "Metro Bank", className: "h-8 md:h-10" }
];

const doubledLogos = [...partnerLogos, ...partnerLogos];

export function TrustBanner() {
  return (
    <div className="w-full mt-0 pt-4 overflow-hidden relative z-20 flex flex-col items-center">
      <h3 className="text-lg md:text-xl font-bold text-white mb-1 text-center tracking-tight">
        Trusted by Industry Leaders
      </h3>
      <p className="text-zinc-400 text-xs md:text-sm mb-4 text-center font-bold">
        Join 10,000+ companies worldwide that trust our platform
      </p>

      <div className="relative w-full flex items-center overflow-hidden py-2">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-16 md:gap-24 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity
          }}
        >
          {doubledLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`object-contain ${logo.className || "h-8"}`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
