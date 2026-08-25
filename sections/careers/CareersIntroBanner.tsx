"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { ArrowUpRight, ChevronsRight, Bot, Cpu, Layers, ShieldCheck, Eye } from "lucide-react";

const aiRolesTracks = [
  {
    id: "ai-agents",
    heroText: "AI AGENTS",
    icon: Bot,
    headerTextColor: "text-[#38BDF8]",
    iconColor: "text-[#38BDF8] group-hover:text-white",
    gradientBg: "from-[#041525]/90 via-[#062038]/70 to-[#020B14]/90",
    accentGlow: "bg-cyan-500/20",
    btnColor: "bg-[#041E34] text-cyan-300 border border-cyan-500/30 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-400",
    href: "/careers/jobs?q=AI+Agents",
    cardCascadeClass: "lg:translate-y-0",
  },
  {
    id: "gen-ai",
    heroText: "GEN AI",
    icon: Cpu,
    headerTextColor: "text-[#A855F7]",
    iconColor: "text-[#A855F7] group-hover:text-white",
    gradientBg: "from-[#1B0B2E]/90 via-[#260F40]/70 to-[#0C0416]/90",
    accentGlow: "bg-purple-500/20",
    btnColor: "bg-[#250E3D] text-purple-300 border border-purple-500/30 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-400",
    href: "/careers/jobs?q=Gen+AI",
    cardCascadeClass: "lg:translate-y-6",
  },
  {
    id: "mlops",
    heroText: "MLOPS",
    icon: Layers,
    headerTextColor: "text-[#F43F5E]",
    iconColor: "text-[#F43F5E] group-hover:text-white",
    gradientBg: "from-[#2A0813]/90 via-[#3D0C1B]/70 to-[#140308]/90",
    accentGlow: "bg-rose-500/25",
    btnColor: "bg-[#3D0A18] text-rose-300 border border-rose-500/30 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-400",
    href: "/careers/jobs?q=MLOps",
    cardCascadeClass: "lg:translate-y-12",
  },
  {
    id: "ai-safety",
    heroText: "AI SAFETY",
    icon: ShieldCheck,
    headerTextColor: "text-[#10B981]",
    iconColor: "text-[#10B981] group-hover:text-white",
    gradientBg: "from-[#032015]/90 via-[#053020]/70 to-[#01100A]/90",
    accentGlow: "bg-emerald-500/20",
    btnColor: "bg-[#042B1C] text-emerald-300 border border-emerald-500/30 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-400",
    href: "/careers/jobs?q=AI+Safety",
    cardCascadeClass: "lg:translate-y-6",
  },
  {
    id: "vision-ai",
    heroText: "VISION AI",
    icon: Eye,
    headerTextColor: "text-[#F59E0B]",
    iconColor: "text-[#F59E0B] group-hover:text-white",
    gradientBg: "from-[#261803]/90 via-[#382405]/70 to-[#120B01]/90",
    accentGlow: "bg-amber-500/20",
    btnColor: "bg-[#382204] text-amber-300 border border-amber-500/30 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-400",
    href: "/careers/jobs?q=Vision+AI",
    cardCascadeClass: "lg:translate-y-0",
  },
];

export function CareersIntroBanner() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "culture", "roles", "process", "benefits"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="overview" className="w-full bg-black text-white pt-2 pb-4 lg:pt-4 lg:pb-6 relative overflow-hidden font-sans border-b border-zinc-900/80">
      
      {/* Dark Ambient Lighting Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.08),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.05),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Header Section */}
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8 relative pt-2">
            
            {/* Straight Top-to-bottom Arrow PNG indicator */}
            <div className="flex justify-center mb-2 pointer-events-none select-none relative">
              <img
                src="/webp/assets/components/streight-toptobuttm.webp"
                alt="Straight Arrow indicator"
                className="w-10 sm:w-14 h-auto object-contain filter drop-shadow-[0_0_18px_rgba(244,63,94,0.6)]"
                loading="lazy"
              />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.25] font-sans">
              <span className="bg-rose-500 text-white px-4 py-1 rounded-xl inline-block font-semibold shadow-lg shadow-rose-500/20 mb-2 sm:mb-3">
                Learn Today.
              </span>
              <br />
              <span className="block text-white font-semibold">
                Create More{" "}
                <span className="relative inline-block text-white px-1 whitespace-nowrap">
                  <span className="text-white font-semibold relative z-10">Opportunities Tomorrow</span>
                  {/* Modern Pencil Art Hand-Sketched Underline */}
                  <svg
                    className="absolute -bottom-3 left-0 w-full h-4 text-rose-500 pointer-events-none overflow-visible z-0"
                    viewBox="0 0 250 20"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 3 14 C 50 6, 130 17, 245 9"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      className="opacity-90 filter drop-shadow-[0_0_10px_rgba(244,63,94,0.6)]"
                    />
                    <path
                      d="M 12 17 C 75 11, 165 18, 238 12"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeDasharray="6 3 14 4"
                      className="opacity-75 filter drop-shadow-[0_0_5px_rgba(244,63,94,0.4)]"
                    />
                  </svg>
                </span>
              </span>
            </h2>

          </div>
        </Reveal>

        {/* Stepped Cascade Cards Container */}
        <Reveal delay={0.15}>
          <div className="relative pt-2 pb-4 sm:pb-6">
            
            {/* Banner Container with Button Positioned further at the Right Edge */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 my-4 sm:my-6 flex justify-center bg-black">
              <div className="relative w-full max-w-4xl">
                <img
                  src="/webp/assets/careers/banner/learnbanner.webp"
                  alt="Learning & Career Development at Devopstrio"
                  className="w-full h-auto object-contain pointer-events-none select-none"
                  loading="lazy"
                />

                {/* Button placed further to the right side of the banner */}
                <div className="static sm:absolute sm:bottom-2 sm:-right-8 lg:-right-12 mt-4 sm:mt-0 flex justify-end z-30">
                  <Link
                    href="/about/global-internship"
                    className="relative inline-flex items-center gap-3.5 bg-gradient-to-r from-zinc-950/95 via-[#111625]/95 to-zinc-950/95 backdrop-blur-2xl border border-white/20 hover:border-rose-500/80 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-xs sm:text-sm md:text-base tracking-wide uppercase shadow-[0_12px_40px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_0_45px_rgba(225,29,72,0.45),inset_0_1px_2px_rgba(255,255,255,0.35)] transition-all duration-300 group overflow-hidden"
                  >
                    {/* Shiny Glass Highlight Sweep Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                    {/* Glossy Icon Container */}
                    <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-rose-500/20 border border-rose-400/40 group-hover:bg-rose-600 group-hover:border-rose-400 flex items-center justify-center text-rose-300 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(244,63,94,0.4)] shrink-0">
                      <ChevronsRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>

                    <span className="relative z-10 font-semibold tracking-wide">Explore Your Options at Devopstrio</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Global Engineering Hub City Skyline Silhouette SVG */}
            <div className="w-full overflow-hidden mt-4 opacity-30 pointer-events-none select-none flex justify-center">
              <svg
                className="w-full max-w-6xl h-16 sm:h-20 md:h-24 text-zinc-600 fill-current"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 120 L0 90 L25 90 L25 120 L40 120 L40 70 L75 70 L75 120 L90 120 L90 50 L115 50 L115 120 L135 120 L135 80 L160 80 L160 120 L180 120 L180 40 L210 40 L210 120 L230 120 L230 65 L260 65 L260 120 L285 120 L285 30 L320 30 L320 120 L350 120 L350 75 L380 75 L380 120 L410 120 L410 20 L435 20 L435 5 L445 5 L445 20 L470 20 L470 120 L500 120 L500 60 L530 60 L530 120 L560 120 L560 35 L595 35 L595 120 L625 120 L625 15 L640 15 L640 2 L650 2 L650 15 L665 15 L665 120 L695 120 L695 55 L725 55 L725 120 L755 120 L755 30 L790 30 L790 120 L815 120 L815 70 L845 70 L845 120 L870 120 L870 45 L900 45 L900 120 L925 120 L925 80 L955 80 L955 120 L980 120 L980 60 L1010 60 L1010 120 L1040 120 L1040 35 L1070 35 L1070 120 L1095 120 L1095 75 L1125 75 L1125 120 L1150 120 L1150 90 L1200 90 L1200 120 Z" />
              </svg>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
