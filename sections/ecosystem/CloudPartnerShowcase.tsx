"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const cloudPartners = [
  {
    name: "Amazon Web Services",
    label: "AWS Partner",
    logo: "/assets/Home-page/Techtools/aws-color.svg",
    angle: -60, // Leftmost
    delay: "0s",
    floatOffset: "-translate-y-2",
  },
  {
    name: "Google Cloud",
    label: "GCP Premier",
    logo: "/assets/Home-page/Techtools/google-color.svg",
    angle: -30, // Left
    delay: "0.5s",
    floatOffset: "translate-y-1",
  },
  {
    name: "OpenAI",
    label: "Cognitive Partner",
    logo: "/assets/Tech-icons/openai-logo_svgstack_com_28971780931370.svg",
    angle: 0, // Center top
    delay: "1s",
    floatOffset: "-translate-y-4",
  },
  {
    name: "Microsoft Azure",
    label: "Gold Cloud",
    logo: "/assets/Home-page/Techtools/MSAzure.svg",
    angle: 30, // Right
    delay: "1.5s",
    floatOffset: "translate-y-2",
  },
  {
    name: "Oracle Cloud",
    label: "OCI Alliance",
    logo: "/assets/Home-page/Techtools/Oracle.svg",
    angle: 60, // Rightmost
    delay: "2s",
    floatOffset: "-translate-y-1",
  },
];

export function CloudPartnerShowcase() {
  return (
    <section id="cloud-partners" className="w-full py-12 sm:py-16 bg-black text-white border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background ambient glow spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.06),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 xl:px-12 relative z-10 text-center">
        
        {/* Section Header */}
        <Reveal className="mb-12 sm:mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-2">
            Connecting World-Class Cloud Partners into <span className="text-rose-500">One Unified Ecosystem</span>
          </h2>
        </Reveal>

        {/* Fan / Arc Floating Display Container */}
        <div className="relative w-full max-w-4xl mx-auto h-[380px] sm:h-[420px] md:h-[450px] flex items-end justify-center pb-2 pt-6 mt-4">

          {/* SVG Arc Connection Lines radiating from bottom center logo */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 text-rose-500/30"
            viewBox="0 0 800 400"
            fill="none"
            preserveAspectRatio="xMidYMax meet"
          >
            <defs>
              <linearGradient id="lineGlow" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#E11D48" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#E11D48" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Connecting lines from center logo (400, 360) to floating nodes */}
            {/* Leftmost AWS */}
            <path
              d="M 400 360 C 350 270, 160 240, 110 200"
              stroke="url(#lineGlow)"
              strokeWidth="2"
              strokeDasharray="6 6"
              className="animate-[dash_20s_linear_infinite]"
            />
            {/* Left GCP */}
            <path
              d="M 400 360 C 370 260, 280 190, 245 140"
              stroke="url(#lineGlow)"
              strokeWidth="2"
              strokeDasharray="6 6"
              className="animate-[dash_20s_linear_infinite]"
            />
            {/* Center OpenAI */}
            <path
              d="M 400 360 L 400 100"
              stroke="url(#lineGlow)"
              strokeWidth="2"
              strokeDasharray="6 6"
              className="animate-[dash_20s_linear_infinite]"
            />
            {/* Right Azure */}
            <path
              d="M 400 360 C 430 260, 520 190, 555 140"
              stroke="url(#lineGlow)"
              strokeWidth="2"
              strokeDasharray="6 6"
              className="animate-[dash_20s_linear_infinite]"
            />
            {/* Rightmost Oracle */}
            <path
              d="M 400 360 C 450 270, 640 240, 690 200"
              stroke="url(#lineGlow)"
              strokeWidth="2"
              strokeDasharray="6 6"
              className="animate-[dash_20s_linear_infinite]"
            />
          </svg>

          {/* Floating Partner Circle Nodes Layout */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center z-10 pointer-events-none">
            <div className="relative w-full h-full max-w-3xl">
              
              {/* Partner 1: AWS (Leftmost) */}
              <div className="absolute left-[2%] sm:left-[5%] top-[38%] sm:top-[35%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                <FloatingPartnerNode partner={cloudPartners[0]} />
              </div>

              {/* Partner 2: GCP (Left) */}
              <div className="absolute left-[24%] sm:left-[26%] top-[24%] sm:top-[22%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                <FloatingPartnerNode partner={cloudPartners[1]} />
              </div>

              {/* Partner 3: OpenAI (Center Top) */}
              <div className="absolute left-[50%] top-[12%] sm:top-[10%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                <FloatingPartnerNode partner={cloudPartners[2]} />
              </div>

              {/* Partner 4: Azure (Right) */}
              <div className="absolute right-[24%] sm:right-[26%] top-[24%] sm:top-[22%] translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                <FloatingPartnerNode partner={cloudPartners[3]} />
              </div>

              {/* Partner 5: Oracle (Rightmost) */}
              <div className="absolute right-[2%] sm:right-[5%] top-[38%] sm:top-[35%] translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                <FloatingPartnerNode partner={cloudPartners[4]} />
              </div>

            </div>
          </div>

          {/* Central Main Logo Hub (Devopstrio Logo) */}
          <div className="relative z-20 flex flex-col items-center justify-center pointer-events-auto">
            <div className="relative group cursor-pointer">
              {/* Outer pulsing ring glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-600 via-red-500 to-rose-600 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              
              {/* Central Circle Logo Shield */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#030303] border-2 border-rose-500/60 rounded-full flex items-center justify-center p-4 shadow-[0_0_40px_rgba(225,29,72,0.4)] group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/webp/assets/logo/logo.webp"
                  alt="Devopstrio Core Logo"
                  className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(244,63,94,0.6)]"
                  loading="eager"
                />
              </div>
            </div>

            {/* Central Badge Label */}
            {/* <span className="mt-4 px-4 py-1.5 rounded-full bg-zinc-950/90 border border-rose-500/40 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white shadow-lg backdrop-blur-md">
              Devopstrio Core Relay
            </span> */}
          </div>

        </div>

      </div>
    </section>
  );
}

{/* Helper Floating Partner Circle Component */}
function FloatingPartnerNode({
  partner,
}: {
  partner: { name: string; label: string; logo: string; delay: string; floatOffset: string };
}) {
  return (
    <div
      className={`group flex flex-col items-center gap-2.5 transition-transform duration-500 hover:scale-110 cursor-pointer ${partner.floatOffset}`}
      style={{ animationDelay: partner.delay }}
    >
      {/* Floating White Circle Container (Matching uploaded design reference) */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center p-3.5 sm:p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_35px_rgba(244,63,94,0.5)] transition-all duration-300 border-2 border-transparent group-hover:border-rose-500">
        <Image
          src={partner.logo}
          alt={partner.name}
          width={56}
          height={56}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          unoptimized
        />
      </div>

      {/* Floating Pill Label */}
      <span className="px-3 py-1 rounded-full bg-zinc-950/80 border border-zinc-800 text-[10px] sm:text-xs font-semibold text-zinc-300 group-hover:text-white group-hover:border-rose-500/50 transition-colors shadow-md whitespace-nowrap">
        {partner.name}
      </span>
    </div>
  );
}

export default CloudPartnerShowcase;
