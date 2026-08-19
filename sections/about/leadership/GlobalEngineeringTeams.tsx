"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";
import Link from "next/link";

interface TeamExpert {
  id: string;
  name: string;
  count: string;
  image: string;
  href: string;
}

const engineeringTeams: TeamExpert[] = [
  {
    id: "devops",
    name: "DevOps Engineers",
    count: "60+ Experts",
    image: "/assets/About-page/team/generated/devops.png",
    href: "/services/devops-automation",
  },
  {
    id: "cloud",
    name: "Cloud Engineers",
    count: "80+ Experts",
    image: "/assets/About-page/team/generated/cloud.png",
    href: "/services/cloud-services",
  },
  {
    id: "platform",
    name: "Platform Engineers",
    count: "40+ Experts",
    image: "/assets/About-page/team/generated/platform.png",
    href: "/services/devops-automation",
  },
  {
    id: "software",
    name: "Software Developers",
    count: "120+ Experts",
    image: "/assets/About-page/team/generated/software.png",
    href: "/services/software-development",
  },
  {
    id: "data",
    name: "Data Engineers",
    count: "50+ Experts",
    image: "/assets/About-page/team/generated/data.png",
    href: "/services/data-engineering",
  },
  {
    id: "ai",
    name: "AI Specialists",
    count: "35+ Experts",
    image: "/assets/About-page/team/generated/ai.png",
    href: "/services/ai-data-innovation",
  },
  {
    id: "cyber",
    name: "Cybersecurity Experts",
    count: "30+ Experts",
    image: "/assets/About-page/team/generated/cyber.png",
    href: "/services/cybersecurity",
  },
  {
    id: "qa",
    name: "QA Engineers",
    count: "45+ Experts",
    image: "/assets/About-page/team/generated/qa.png",
    href: "/services/qa-testing",
  },
  {
    id: "consulting",
    name: "IT Consultants",
    count: "65+ Experts",
    image: "/assets/About-page/team/generated/consulting.png",
    href: "/services/it-consulting",
  },
];

export const GlobalEngineeringTeams = () => {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play timer: advances pairs smoothly
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % engineeringTeams.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % engineeringTeams.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + engineeringTeams.length) % engineeringTeams.length);
  };

  const card1 = engineeringTeams[startIndex];
  const card2 = engineeringTeams[(startIndex + 1) % engineeringTeams.length];

  return (
    <section id="global-teams" className="pt-8 pb-10 sm:pt-12 sm:pb-14 bg-black relative overflow-hidden text-white">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Feel-Good Leadership Statement */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 pb-8 border-b border-zinc-900/60 relative z-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold tracking-tight text-white leading-tight font-sans">
            We are shaping the future of engineering,{" "}
            {/* <span className="relative inline-block text-rose-500 font-semibold px-1">
              <div className="absolute -top-8 sm:-top-10 md:-top-12 -right-12 sm:-right-16 md:-right-20 z-20 pointer-events-none select-none">
                <img
                  src="/assets/components/lefttoright.png"
                  alt="Arrow indicator"
                  className="w-14 sm:w-16 md:w-20 lg:w-22 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.5)] scale-x-[-1]"
                />
              </div>
              empowering
            </span> */}
            <span className="text-zinc-400 font-normal">
              empowering visionary leaders and world-class teams to build what&apos;s next.
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Section Heading (Shifted right for balanced visual harmony) */}
          <div className="lg:col-span-5 relative space-y-6 text-left pl-3 sm:pl-6 lg:pl-10 xl:pl-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-4">
              Leaders Who{" "}
              <span className="relative inline-block">
                {/* Curved arrow */}
                <div className="absolute -top-6 sm:-top-7 -left-12 sm:-left-14 md:-left-16 z-20 pointer-events-none select-none rotate-[-40deg]">
                  <img
                    src="/assets/components/Carrow-right.png"
                    alt="Curved arrow"
                    className="w-10 sm:w-12 md:w-14 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                  />
                </div>
                <span className="text-rose-500 font-semibold">Empower.</span>
              </span>{" "}
              Global Engineering Teams.
            </h2>
          </div>

          {/* Right Column: Single Featured Image (pencilrock.png) */}
          <div className="lg:col-span-7 flex items-center justify-center select-none py-2">
            <div className="relative w-full max-w-[340px] sm:max-w-[390px] md:max-w-[440px] rounded-3xl overflow-hidden group">
              <img
                src="/assets/About-page/leader/pencilrock.png"
                alt="Engineering Precision & Craftsmanship"
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02] block filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
