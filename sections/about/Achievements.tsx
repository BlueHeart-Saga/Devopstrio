"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import Link from "next/link";

const concreteAchievements = [
  {
    title: "AI & Intelligent Automation",
    desc: "Building AI-powered solutions, intelligent agents, automation platforms, and data-driven applications that help businesses operate smarter.",
    tag: "INTELLIGENCE"
  },
  {
    title: "Cloud Transformation Excellence",
    desc: "Successfully modernizing and migrating enterprise workloads across Azure, AWS, and Google Cloud environments.",
    tag: "CLOUD"
  },
  {
    title: "Infrastructure Automation Leadership",
    desc: "Delivering scalable Infrastructure as Code solutions using Terraform, Kubernetes, GitOps, and modern DevOps practices.",
    tag: "AUTOMATION"
  },
  {
    title: "Security-First Innovation",
    desc: "Embedding cybersecurity, compliance, governance, and monitoring into every stage of digital transformation.",
    tag: "SECURITY"
  }
];

// Dynamically generate the 26 certification badge entries
const ourCerts = Array.from({ length: 26 }, (_, i) => ({
  name: `Certification ${i + 1}`,
  src: `/assets/About-page/our-Certification/Group_${i + 1}.png`
}));

// Static array for compliance logos
const complianceLogos = [
  { name: "FDA", src: "/assets/About-page/complience-Logos/FDA.png" },
  { name: "GDPR", src: "/assets/About-page/complience-Logos/GDPR.png" },
  { name: "HIPAA", src: "/assets/About-page/complience-Logos/HIPAA.png" },
  { name: "ISO", src: "/assets/About-page/complience-Logos/ISO.png" },
  { name: "NIST", src: "/assets/About-page/complience-Logos/NIST.png" }
];

// Static array for the 3 awards showcasing illustration images
const awards = [
  {
    title: "Cloud & Infrastructure Excellence",
    desc: "Recognised for high-performance multi-cloud architectures across AWS, Azure, and Google Cloud.",
    image: "/assets/About-page/awards/dockum.png",
    tag: "CLOUD LEADERSHIP"
  },
  {
    title: "AI & Intelligent Automation",
    desc: "Awarded for enterprise Generative AI integrations, intelligent agents, and operational workflows.",
    image: "/assets/About-page/awards/techmm.png",
    tag: "AI INNOVATION"
  },
  {
    title: "Enterprise Delivery Partnership",
    desc: "Delivering sustainable cost reduction, reliable support, and scale for FTSE 100 leaders.",
    image: "/assets/About-page/awards/tuckim.png",
    tag: "TRUSTED PARTNER"
  }
];

export function Achievements() {
  return (
    <section className="w-full py-20 bg-black text-white relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        
        {/* Split Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Intro */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-rose-500">
                  Innovation & Capabilities
                </span>
              </div>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
                Driving technology transformation through <span className="text-rose-500">innovation, expertise, and measurable business impact.</span>
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-semibold">
                We combine advanced <Link href="/services/cloud-services" className="text-rose-500 hover:underline">cloud methodologies</Link> with modern <Link href="/services/software-development" className="text-rose-500 hover:underline">software engineering</Link> to build resilient, secure, and cost-efficient digital ecosystems.
              </p>
            </Reveal>
          </div>

          {/* Right Column: 2x2 Fused Cards Grid */}
          <div className="lg:col-span-7">
            <Reveal className="border border-zinc-900 bg-zinc-900/40 gap-[1px] grid grid-cols-1 sm:grid-cols-2 overflow-hidden rounded-none">
              {concreteAchievements.map((item) => (
                <div 
                  key={item.title} 
                  className="p-6 bg-zinc-950 hover:bg-zinc-950/80 transition-all duration-300 group min-h-[160px] flex flex-col justify-between"
                >
                  <div>
                    <span className="block text-[9px] font-bold text-rose-500 uppercase tracking-widest mb-3">{item.tag}</span>
                    <h3 className="text-xs md:text-sm font-bold text-white mb-2 transition-colors duration-300 group-hover:text-rose-500">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-zinc-450 leading-relaxed font-semibold">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>

        </div>

        {/* 1st Segment: Our Certifications Marquee */}
        <div className="mt-24 border-t border-zinc-900/60 pt-16 relative">
          <Reveal className="mb-10 text-center">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
              Validation
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white">
              Our <span className="text-rose-500">Certifications</span>
            </h2>
          </Reveal>

          {/* Marquee Container with overlays */}
          <div className="relative w-full overflow-hidden py-4">
            {/* Left and right dark gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <motion.div 
              className="flex flex-nowrap gap-6 items-center w-max whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 55, // 26 items, slower scroll duration
                repeat: Infinity,
              }}
            >
              {[...ourCerts, ...ourCerts].map((item, idx) => (
                <div 
                  key={idx} 
                  className="w-36 h-20 flex items-center justify-center shrink-0"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain select-none pointer-events-none"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 2nd Segment: Compliance Marquee */}
        <div className="mt-16 relative">
          <Reveal className="mb-10 text-center">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
              Security & Trust
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white">
              Compliance <span className="text-rose-500">Frameworks</span>
            </h2>
          </Reveal>

          {/* Marquee Container scrolling in reverse for diversity */}
          <div className="relative w-full overflow-hidden py-4">
            {/* Left and right dark gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <motion.div 
              className="flex flex-nowrap gap-6 items-center w-max whitespace-nowrap"
              animate={{ x: ["-50%", "0%"] }} // reverse scroll direction
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
            >
              {/* Multiply the array to ensure seamless looping length */}
              {[...complianceLogos, ...complianceLogos, ...complianceLogos, ...complianceLogos].map((item, idx) => (
                <div 
                  key={idx} 
                  className="w-36 h-20 flex items-center justify-center shrink-0"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain select-none pointer-events-none"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 3rd Segment: Awards Showcase */}
        <div className="mt-24 border-t border-zinc-900/60 pt-16">
          <Reveal className="mb-12 text-center">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
              Awards & Recognition
            </span>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
              Industry validation for outstanding engineering outcomes
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((item) => (
              <Reveal 
                key={item.title} 
                className="group bg-zinc-950 border border-zinc-900 overflow-hidden hover:border-rose-600/30 transition-all duration-300 rounded-none"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900/40 flex items-center justify-center p-6">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-contain select-none pointer-events-none group-hover:scale-[1.04] transition-transform duration-500" 
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Achievements;
