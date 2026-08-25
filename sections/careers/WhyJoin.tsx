"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollWordReveal } from "@/components/ui/ScrollWordReveal";
import Link from "next/link";

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

const whyChooseSentences = [
  "Strengthen your resume with production-grade enterprise projects.",
  "Collaborate directly with global cloud architects and AI leads.",
  "Fast-track your pathway to full-time engineering roles and rewards.",
  "Master cutting-edge Kubernetes, IaC, and Generative AI platforms."
];

export function WhyJoin() {
  const [activeSection, setActiveSection] = useState("why-join");

  useEffect(() => {
    const handleScroll = () => {
      let current = "why-join";
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

  const handleScrollToRoles = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("open-positions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="why-join" className="pt-12 pb-16 sm:pt-16 sm:pb-24 bg-black border-b border-zinc-900/60 relative overflow-hidden font-sans">
      {/* Ambient background glows */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[10%] left-1/4 w-[600px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">

        {/* ── 1. Hero Banner Card (bgbanner.webp) ── */}
        <Reveal className="mb-16">
          <div className="relative w-full rounded-3xl overflow-hidden min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] bg-zinc-950 border border-zinc-800/80 shadow-2xl flex items-center p-6 sm:p-10 lg:p-14">
            
            {/* Background Image: bgbanner.webp */}
            <img
              src="/webp/assets/careers/banner/bgbanner.webp"
              alt="Everything You Need to Build a Successful Tech Careers"
              className="absolute inset-0 w-full h-full object-cover object-right sm:object-center pointer-events-none select-none"
              loading="eager"
            />

            {/* Dark Gradient Overlay Fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 sm:via-black/70 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 z-10 pointer-events-none" />

            {/* Left Content Overlay (50% Width on Large Screens) */}
            <div className="relative z-20 w-full lg:w-1/2 max-w-xl text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.15] font-sans drop-shadow-xl">
                Everything You Need to Build a Successful{" "}
                <span className="text-rose-500 block sm:inline font-semibold">
                  Tech Careers
                </span>
              </h2>
            </div>

          </div>
        </Reveal>

        {/* ── 2. "Why people choose Devopstrio" Section ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-14 lg:gap-20 items-center pt-8 border-t border-zinc-900/60">

          <Reveal className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px] group">
              <img
                src="/webp/assets/careers/image2.webp"
                alt="Devopstrio Career Success"
                className="w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] group-hover:-translate-y-2 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div className="text-left">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-tight mb-6">
                Why people choose <span className="text-rose-500">Devopstrio</span>
              </h2>
            </Reveal>

            {/* Scroll-Driven Word Reveal for Short Sentences */}
            <div className="mb-10 max-w-xl">
              <ScrollWordReveal
                paragraphs={whyChooseSentences}
                className="space-y-4"
              />
            </div>

            <Reveal>
              <button
                onClick={handleScrollToRoles}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 transition-all duration-300 shadow-[0_4px_20px_rgba(225,29,72,0.35)] hover:scale-[1.02] border-0 border-none"
              >
                <span>Explore the Programs</span>
                <ArrowUpRight size={16} />
              </button>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
