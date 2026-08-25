"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const techStack = [
  { name: "Microsoft Azure", path: "/assets/Home-page/Techtools/MSAzure.svg" },
  { name: "Amazon Web Services", path: "/assets/Home-page/Techtools/aws-color.svg" },
  { name: "Google Cloud", path: "/assets/Home-page/Techtools/google-color.svg" },
  { name: "React", path: "/assets/Home-page/Techtools/React.svg" },
  { name: "Python", path: "/assets/Home-page/Techtools/python.svg" },
  { name: "Go Lang", path: "/assets/Home-page/Techtools/GO.svg" },
  { name: "Node.js", path: "/assets/Home-page/Techtools/Node.svg" },
  { name: "Next.js", path: "/assets/Home-page/Techtools/next-js-color.svg" },
  { name: "OpenAI", path: "/assets/Tech-icons/openai-logo_svgstack_com_28971780931370.svg" },
  { name: "Android", path: "/assets/Home-page/Techtools/Android.svg" },
  { name: "Angular", path: "/assets/Home-page/Techtools/Angular.svg" },
  { name: "Flutter", path: "/assets/Home-page/Techtools/flutter.svg" },
  { name: "PHP", path: "/assets/Home-page/Techtools/PHP.svg" },
  { name: "Vue.js", path: "/assets/Home-page/Techtools/Vue.svg" }
];

const alliances = [
  { name: "Microsoft", path: "/assets/Home-page/partners/Microsoft.svg" },
  { name: "Airbnb", path: "/assets/Home-page/partners/Airbnb.svg" },
  { name: "GoDaddy", path: "/assets/Home-page/partners/godaddy.svg" },
  { name: "ServiceNow", path: "/webp/assets/Home-page/partners/servicenow.webp" },
  { name: "NHS Health", path: "/assets/Home-page/partners/NHS.svg" },
  { name: "Costco Wholesale", path: "/assets/Home-page/partners/Costco.svg" },
  { name: "BT Group", path: "/assets/Home-page/partners/BT.svg" },
  { name: "Paymentology", path: "/assets/Home-page/partners/paymentology.svg" },
  { name: "Metro Bank", path: "/assets/Home-page/partners/Metrobank.svg" },
  { name: "ASDA", path: "/assets/Home-page/partners/ASDA.svg" },
  { name: "Virgin", path: "/assets/Home-page/partners/Virgin.svg" },
  { name: "Lenovo", path: "/assets/Home-page/partners/lenovo.svg" }
];

const deliveryHubs = [
  { name: "United Kingdom", desc: "HQ & Strategy" },
  { name: "India CoE", desc: "Delivery & Engineering" },
  { name: "Managed Services", desc: "24/7 Operations" },
  { name: "Follow-the-Sun Support", desc: "Global Support" },
  { name: "North America", desc: "Enterprise Sales" },
  { name: "Europe West", desc: "Client Relations" }
];

const marqueeAnimation = `
  @keyframes marqueeLeft {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  @keyframes marqueeRight {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0%); }
  }
  .animate-marquee-left {
    display: flex;
    width: max-content;
    animation: marqueeLeft 35s linear infinite;
  }
  .animate-marquee-right {
    display: flex;
    width: max-content;
    animation: marqueeRight 35s linear infinite;
  }
  .marquee-row:hover .animate-marquee-left,
  .marquee-row:hover .animate-marquee-right {
    animation-play-state: paused;
  }
`;

import Link from "next/link";

export function SystemArchitecture() {
  const doubleTech = [...techStack, ...techStack];
  const doubleAlliances = [...alliances, ...alliances];
  const doubleDelivery = [...deliveryHubs, ...deliveryHubs];

  return (
    <section id="architecture" className="w-full py-24 bg-[#030303] border-b border-zinc-900 relative overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: marqueeAnimation }} />

      {/* Ambient Glow */}
      <div className="absolute top-[20%] left-[-10%] w-[30%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 flex flex-col items-center">

        {/* Top Section: Centered Header & Description */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ECOSYSTEM ARCHITECTURE
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              A Unified Ecosystem Built <span className="text-rose-500">for Global Scale</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-zinc-200 text-xs sm:text-sm md:text-base leading-relaxed font-semibold max-w-2xl">
              Devopstrio combines strategic technology partnerships, proprietary platforms, engineering accelerators, innovation labs, and global delivery capabilities into a unified ecosystem that enables organizations to build, modernize, and scale with confidence. Read our <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">company overview</Link> and find out more about our <Link href="/services" className="text-rose-500 hover:underline font-bold">engineering services</Link>.
            </p>
          </Reveal>
        </div>

        {/* Middle Section: Centered Enterprise Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-8 gap-x-4 w-full border-t border-b border-zinc-900 py-8 mb-16 text-center max-w-5xl">
          {[
            { val: "50+", desc: "Technology Partners" },
            { val: "15+", desc: "Proprietary Accelerators" },
            { val: "8+", desc: "Innovation Labs" },
            { val: "24×7", desc: "Global Operations" },
            { val: "100+", desc: "Certified Engineers" },
            { val: "4+", desc: "Delivery Regions" },
          ].map((m, idx) => (
            <Reveal key={idx} delay={idx * 0.04}>
              <div className="flex flex-col items-center">
                <span className="block text-2xl sm:text-3xl font-bold font-mono text-white mb-1">
                  {m.val}
                </span>
                <span className="block text-[9px] font-mono tracking-widest text-zinc-550 uppercase leading-snug">
                  {m.desc}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Ecosystem System Layers Stack (Full Width Layout) */}
        <div className="flex flex-col items-center justify-start w-full gap-4 max-w-4xl mb-12">
          <Reveal>
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2 text-center">
              Ecosystem System Layers
            </h3>
          </Reveal>

          <div className="flex flex-col gap-3.5 w-full">
            {[
              { title: "Business Outcomes", items: "Growth • Innovation • Efficiency", color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/2" },
              { title: "Platforms & Solutions", items: "Humanex • Brio • SafeSign • Campix", color: "text-blue-400 border-blue-500/20 bg-blue-500/2" },
              { title: "Innovation Labs", items: "AI Lab • Cloud Lab • DevOps Lab", color: "text-amber-400 border-emerald-500/20 bg-amber-500/2" },
              { title: "Engineering Frameworks", items: "IaC • CI/CD • Security • Observability", color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/2" },
              { title: "Technology & Partners", items: "Microsoft • AWS • Google • Oracle", color: "text-rose-400 border-rose-500/20 bg-rose-500/2" },
            ].map((layer, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="w-full">
                <div className={`border ${layer.color} rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:bg-zinc-900/40 transition-all duration-300 gap-2`}>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-400">
                    Layer 0{5 - idx}: {layer.title}
                  </span>
                  <span className="text-[11px] font-bold tracking-wide">
                    {layer.items}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>

      {/* Full Bleed Widescreen Auto Scrolling Logo Marquees Container (No max-width constraints!) */}
      <div className="w-full relative z-20 mt-12 py-10 bg-gradient-to-b from-[#030303] via-zinc-950/20 to-[#030303] border-t border-b border-zinc-900/60 overflow-hidden">
        {/* Deep edge shadow blur overlays matching blacktheme (#030303) */}
        <div className="absolute top-0 bottom-0 left-0 w-32 sm:w-64 bg-gradient-to-r from-[#030303] via-[#030303]/80 via-[#030303]/30 to-transparent pointer-events-none z-30" />
        <div className="absolute top-0 bottom-0 right-0 w-32 sm:w-64 bg-gradient-to-l from-[#030303] via-[#030303]/80 via-[#030303]/30 to-transparent pointer-events-none z-30" />

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 flex flex-col gap-10">

          {/* Row 1: Strategic Technology Stack */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-rose-500 mb-1 text-center">
              Strategic Technology Stack
            </h4>
            <p className="text-[10px] sm:text-xs text-zinc-400 leading-relaxed font-semibold text-center mb-4">
              AI, Cloud, Data, Security, DevOps, Platform Engineering
            </p>
            <div className="w-full overflow-hidden relative py-1 marquee-row">
              <div className="animate-marquee-left gap-4">
                {doubleTech.map((partner, index) => (
                  <div
                    className="group/logo relative w-28 h-14 bg-white border border-zinc-950 rounded-xl flex items-center justify-center p-3 hover:border-rose-500/35 hover:shadow-[0_0_20px_rgba(225,29,72,0.15)] transition-all duration-300 cursor-pointer flex-shrink-0"
                    key={`tech-${index}`}
                  >
                    <Image
                      src={partner.path}
                      alt={partner.name}
                      width={60}
                      height={20}
                      className="max-h-6 object-contain opacity-85 group-hover/logo:opacity-100 transition-opacity duration-300"
                      unoptimized
                    />
                    {/* Tooltip */}
                    <span className="absolute bottom-full left-[50%] translate-x-[-50%] mb-2 bg-rose-600 text-white text-[8px] font-bold py-1 px-2.5 rounded shadow-lg opacity-0 pointer-events-none group-hover/logo:opacity-100 transition-all duration-200 whitespace-nowrap z-50">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Strategic Alliance Network */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-rose-500 mb-1 text-center">
              Strategic Alliance Network
            </h4>
            <p className="text-[10px] sm:text-xs text-zinc-400 leading-relaxed font-semibold text-center mb-4">
              Microsoft, AWS, Google Cloud, Oracle, ServiceNow, SAP
            </p>
            <div className="w-full overflow-hidden relative py-1 marquee-row">
              <div className="animate-marquee-right gap-4">
                {doubleAlliances.map((partner, index) => (
                  <div
                    className="group/logo relative w-28 h-14 bg-white border border-zinc-950 rounded-xl flex items-center justify-center p-3 hover:border-rose-500/35 hover:shadow-[0_0_20px_rgba(225,29,72,0.15)] transition-all duration-300 cursor-pointer flex-shrink-0"
                    key={`alliance-${index}`}
                  >
                    <Image
                      src={partner.path}
                      alt={partner.name}
                      width={60}
                      height={20}
                      className="max-h-6 object-contain opacity-85 group-hover/logo:opacity-100 transition-opacity duration-300"
                      unoptimized
                    />
                    {/* Tooltip */}
                    <span className="absolute bottom-full left-[50%] translate-x-[-50%] mb-2 bg-rose-600 text-white text-[8px] font-bold py-1 px-2.5 rounded shadow-lg opacity-0 pointer-events-none group-hover/logo:opacity-100 transition-all duration-200 whitespace-nowrap z-50">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 3: Delivery & Operations Network */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-rose-500 mb-1 text-center">
              Delivery & Operations Network
            </h4>
            <p className="text-[10px] sm:text-xs text-zinc-400 leading-relaxed font-semibold text-center mb-4">
              UK • India • Managed Services • Follow-the-Sun Support
            </p>
            <div className="w-full overflow-hidden relative py-1 marquee-row">
              <div className="animate-marquee-left gap-4">
                {doubleDelivery.map((partner, index) => (
                  <div
                    className="group/logo relative w-44 h-16 bg-white border border-zinc-200 rounded-xl flex flex-col items-center justify-center p-3 hover:border-rose-500/35 hover:shadow-[0_0_20px_rgba(225,29,72,0.15)] transition-all duration-300 cursor-pointer flex-shrink-0"
                    key={`delivery-${index}`}
                  >
                    <span className="text-[10px] font-bold text-zinc-900 uppercase tracking-wider">{partner.name}</span>
                    <span className="text-[8px] text-zinc-500 font-semibold mt-1">{partner.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
