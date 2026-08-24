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
    <section id="overview" className="w-full bg-[#030303] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 relative overflow-visible border-b border-zinc-900/60">
      
      {/* Dark Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.05),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Left-Aligned Intro Content */}
        <div className="max-w-4xl flex flex-col items-start text-left">
          <Reveal delay={0.05}>
            <div className="relative mb-6 pt-6 sm:pt-8">
              {/* Top-to-bottom arrow PNG above Learn word */}
              <div className="absolute -top-12 sm:-top-16 -left-3 sm:-left-4 pointer-events-none select-none z-20">
                <img src="/assets/components/top-to-buttom-side-Arrowmid.png"
                  alt="Arrow indicator"
                  className="w-12 sm:w-16 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.5)]"
                loading="lazy" />
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.25] font-sans">
                <span className="bg-rose-500 text-white px-4 py-1 mr-1.5 rounded-xl inline-block font-semibold">
                  Learn
                </span>{" "}
                & Go Beyond your{" "}
                <span className="relative inline-block text-white px-1 whitespace-nowrap">
                  <span className="text-white font-semibold relative z-10">Potential.</span>
                  {/* Modern Pencil Art Hand-Sketched Underline */}
                  <svg
                    className="absolute -bottom-3 left-0 w-full h-4 text-rose-500 pointer-events-none overflow-visible z-0"
                    viewBox="0 0 250 20"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Primary artistic pencil stroke */}
                    <path
                      d="M 3 14 C 50 6, 130 17, 245 9"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      className="opacity-90 filter drop-shadow-[0_0_10px_rgba(244,63,94,0.6)]"
                    />
                    {/* Secondary graphite texture pencil stroke overlay */}
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
              </h3>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-zinc-200 text-base sm:text-lg md:text-xl leading-relaxed font-semibold max-w-2xl mb-8">
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
    </section>
  );
}
