"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const careersNavigationItems = [
  { id: "overview", label: "Who We Are" },
  { id: "why-join", label: "Why Join Us" },
  { id: "culture", label: "Culture & Life" },
  { id: "values", label: "Core Values" },
  { id: "growth", label: "Growth & Learning" },
  { id: "perks", label: "Perks & Benefits" },
  { id: "open-positions", label: "Open Positions" },
  { id: "hiring-process", label: "Hiring Process" },
  { id: "talent-network", label: "Talent Network" }
];

export function CareersIntroBanner() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      let current = "overview";
      for (const item of careersNavigationItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 150) {
            current = item.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 100;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleScrollToJob = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("open-positions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="overview" className="w-full bg-[#030303] text-white pt-4 pb-16 lg:pt-6 lg:pb-20 relative overflow-hidden border-b border-zinc-900/60">
      
      {/* Dark Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.05),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top-Centered Separated Heading */}
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight font-sans">
              Build your <span className="bg-rose-600 text-white px-4 sm:px-6 py-1 sm:py-1.5 rounded-xl inline-block transform -rotate-2 shadow-[0_10px_30px_rgba(225,29,72,0.4)] mx-1 font-bold">dream career</span> at Devopstrio
            </h2>
          </div>
        </Reveal>

        {/* 2-Column Intro Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Title + Indented Subtext & Button */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Reveal delay={0.05}>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight leading-[1.12] mb-6 font-sans">
                Let&apos;s Go Beyond your Potential<span className="text-rose-500 font-normal">_</span>
              </h3>
            </Reveal>

            {/* Indented Paragraph & CTA Button offset */}
            <div className="w-full pl-0 sm:pl-8 md:pl-14">
              <Reveal delay={0.1}>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-medium max-w-lg mb-8">
                  At Devopstrio, we provide a supportive environment where you can unleash your strengths and bring your best ideas to life. So, seize the opportunity to create value in your unique way.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <button
                  onClick={handleScrollToJob}
                  className="inline-flex items-center bg-[#0B0F17] hover:bg-rose-600 text-white text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-xl border border-zinc-800 hover:border-rose-500 rounded-none group"
                >
                  <span className="px-6 py-3.5">Find Your Job</span>
                  <span className="border-l border-zinc-800 group-hover:border-rose-500 px-4 py-3.5 flex items-center justify-center bg-black/40 group-hover:bg-rose-700/40 transition-colors">
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-rose-500 group-hover:text-white" />
                  </span>
                </button>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Banner Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <Reveal delay={0.2} className="w-full flex justify-center lg:justify-end">
              <img
                src="/assets/careers/banner.png"
                alt="Careers Banner"
                className="w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] h-auto object-contain select-none drop-shadow-2xl"
              />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
