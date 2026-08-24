"use client";
import React from "react";
import { motion } from "framer-motion";

const certifications = [
  { name: "AWS Professional", path: "/assets/About-page/Certification/Aws_1.svg" },
  { name: "Azure Solutions Expert", path: "/assets/About-page/Certification/AZURE-icon.svg" },
  { name: "CISSP Certified", path: "/assets/About-page/Certification/cissp.svg" },
  { name: "OSCP Security", path: "/assets/About-page/Certification/oscp.svg" },
  { name: "Ethical Hacker (CEH)", path: "/assets/About-page/Certification/CEH.svg" },
  { name: "CREST Accredited", path: "/assets/About-page/Certification/CREST.svg" },
  { name: "CISM Security", path: "/assets/About-page/Certification/CiSM.svg" },
  { name: "GIAC Auditor", path: "/assets/About-page/Certification/GIAC.svg" },
  { name: "ITIL Foundation", path: "/assets/About-page/Certification/itil-foundation.svg" },
  { name: "PMP Certification", path: "/assets/About-page/Certification/pmp-logo_v2.svg" },
];

const complianceLogos = [
  { name: "ISO/IEC 27001", path: "/assets/About-page/complience-Logos/ISO.png" },
  { name: "GDPR Compliance", path: "/assets/About-page/complience-Logos/GDPR.png" },
  { name: "HIPAA Compliant", path: "/assets/About-page/complience-Logos/HIPAA.png" },
  { name: "NIST Framework", path: "/assets/About-page/complience-Logos/NIST.png" },
  { name: "FDA Compliant", path: "/assets/About-page/complience-Logos/FDA.png" },
];

import Link from "next/link";

const awards = [
  {
    title: "Cloud & Infrastructure Excellence",
    desc: <>Recognised for high-performance multi-cloud architectures across AWS, Azure, and Google Cloud in our <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">cloud services</Link> programs.</>,
    image: "/assets/About-page/awards/dockum.png",
    tag: "CLOUD LEADERSHIP"
  },
  {
    title: "AI & Intelligent Automation",
    desc: <>Awarded for enterprise Generative AI integrations, intelligent agents, and operational workflows under <Link href="/services/ai-data-innovation" className="text-[#E11D48] hover:underline">AI & data innovation</Link>.</>,
    image: "/assets/About-page/awards/techmm.png",
    tag: "AI INNOVATION"
  },
  {
    title: "Enterprise Delivery Partnership",
    desc: <>Delivering sustainable cost reduction, reliable support, and scale for FTSE 100 leaders through <Link href="/services/devops-automation" className="text-[#E11D48] hover:underline">DevOps automation</Link>.</>,
    image: "/assets/About-page/awards/tuckim.png",
    tag: "TRUSTED PARTNER"
  }
];

export const AwardsRecognitionLeadership = () => {
  return (
    <section id="awards" className="py-28 bg-[#030303] border-t border-zinc-900/60 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute -left-40 top-1/3 w-[500px] h-[500px] rounded-full bg-[#FF1744]/2.5 blur-[130px] pointer-events-none" />
      <div className="absolute -right-40 bottom-1/3 w-[500px] h-[500px] rounded-full bg-blue-500/2 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-24">

        {/* Row 1: Certifications Marquee */}
        <div>
          <div className="text-center mb-10">
            {/* <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 block mb-3">
              Validation
            </span> */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight text-white mb-4">
              Our <span className="text-rose-500 font-semibold">Certifications</span>
            </h2>
          </div>

          <div className="relative w-full overflow-hidden py-4">
            {/* Left and right dark gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#030303] to-transparent z-15 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#030303] to-transparent z-15 pointer-events-none" />

            <motion.div
              className="flex flex-nowrap gap-6 items-center w-max whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 35,
                repeat: Infinity,
              }}
            >
              {[...certifications, ...certifications].map((cert, idx) => (
                <div
                  key={idx}
                  className="w-36 h-20 bg-zinc-900/30 backdrop-blur-md border border-zinc-800/40 rounded-xl flex items-center justify-center p-4 hover:border-zinc-700/50 hover:bg-zinc-900/50 transition-all duration-300 shrink-0 cursor-pointer"
                >
                  <img
                    src={cert.path}
                    alt={cert.name}
                    className="max-h-full max-w-full object-contain filter brightness-110"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Row 2: Compliance Frameworks Marquee */}
        <div>
          <div className="text-center mb-10">
            {/* <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 block mb-3">
              Security &amp; Trust
            </span> */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight text-white mb-4">
              Compliance <span className="text-rose-500 font-semibold">Frameworks</span>
            </h2>
          </div>

          <div className="relative w-full overflow-hidden py-4">
            {/* Left and right dark gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#030303] to-transparent z-15 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#030303] to-transparent z-15 pointer-events-none" />

            <motion.div
              className="flex flex-nowrap gap-6 items-center w-max whitespace-nowrap"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
            >
              {[...complianceLogos, ...complianceLogos, ...complianceLogos].map((comp, idx) => (
                <div
                  key={idx}
                  className="w-36 h-20 bg-zinc-900/30 backdrop-blur-md border border-zinc-800/40 rounded-xl flex items-center justify-center p-4 hover:border-zinc-700/50 hover:bg-zinc-900/50 transition-all duration-300 shrink-0 cursor-pointer"
                >
                  <img
                    src={comp.path}
                    alt={comp.name}
                    className="max-h-full max-w-full object-contain filter brightness-110"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Row 3: Awards & Recognition Grid */}
        <div>
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 block mb-3">
              Awards &amp; Recognition
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight text-white max-w-4xl mx-auto mb-4">
              Industry validation for outstanding engineering outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/20 backdrop-blur-md border border-zinc-800/30 p-6 rounded-2xl flex flex-col justify-between transition-all duration-500 hover:bg-zinc-900/40 hover:border-zinc-700/50 hover:-translate-y-1 shadow-[0_12px_35px_rgba(0,0,0,0.5)]"
              >
                {/* Dark Glassy Logo Container (No white layer!) */}
                <div className="w-full aspect-[16/10] bg-zinc-950/60 border border-zinc-900/80 rounded-xl flex items-center justify-center p-5 mb-5 shadow-inner">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="max-h-full max-w-full object-contain filter brightness-110"
                  />
                </div>

                {/* Info Text */}
                {/* <div className="text-left">
                  <p className="text-rose-500 font-bold text-[9px] uppercase tracking-wider mb-1.5">
                    {award.tag}
                  </p>
                  <p className="text-white font-bold text-base mb-1">
                    {award.title}
                  </p>
                  <p className="text-zinc-400 text-xs leading-relaxed font-semibold">
                    {award.desc}
                  </p>
                </div> */}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
