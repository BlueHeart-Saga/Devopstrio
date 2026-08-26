"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Award, Cpu, Users, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface GlobalInternshipSectionProps {
  onOpenDrawer?: () => void;
}

export function GlobalInternshipSection({ onOpenDrawer }: GlobalInternshipSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      category: "GLOBAL ENGINEERING INTERNSHIP",
      title: "Global Internship Footprint",
      link: "/about/global-internship",
      image: "/webp/assets/careers/banner/new/globalmap.jpg",
    },
    {
      category: "MORE ABOUT OUR CULTURE",
      title: "Culture & Values",
      link: "/about/our-culture-people",
      image: "/webp/assets/careers/banner/new/culture.jpg",
    },
    {
      category: "ENGINEERING EXCELLENCE",
      title: "Cloud & DevOps Services",
      link: "/services",
      image: "/webp/assets/careers/banner/new/services.jpg",
    },
    {
      category: "LATEST TECH INSIGHTS",
      title: "Insights & Tech Blog",
      link: "/insights",
      image: "/webp/assets/careers/banner/new/blogs.jpg",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[activeIndex];
  const nextSlide = slides[(activeIndex + 1) % slides.length];

  const features = [
    {
      icon: <Cpu size={24} />,
      iconBg: "bg-rose-500/10 text-rose-400",
      title: "Production-Grade Sprints",
      desc: "Work on active client enterprise clouds, Kubernetes clusters, and Generative AI pipelines — zero dummy projects.",
    },
    {
      icon: <Users size={24} />,
      iconBg: "bg-amber-500/10 text-amber-400",
      title: "1-on-1 Executive Mentorship",
      desc: "Paired directly with principal architects and engineering directors throughout your 12-week intensive track.",
    },
    {
      icon: <Award size={24} />,
      iconBg: "bg-emerald-500/10 text-emerald-400",
      title: "100% Funded Certifications",
      desc: "Full financial sponsorship for official AWS, Azure, GCP, and Kubernetes (CKA/CKAD/CKS) industry certifications.",
    },
    {
      icon: <GraduationCap size={24} />,
      iconBg: "bg-sky-500/10 text-sky-400",
      title: "Direct Path to Full-Time Hire",
      desc: "Over 85% of high-performing engineering interns receive direct full-time employment offers upon completion.",
    },
  ];

  return (
    <section className="w-full bg-[#030303] text-white py-12 md:py-16 font-sans relative overflow-hidden">
      {/* Background Accent Spotlights */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[550px] h-[550px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.06),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-12 relative z-10">
        
        {/* Header Row */}
        <div className="mb-10 md:mb-14">
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.12]">
              Launch Your Engineering Career With Us.
            </h2>
          </Reveal>
        </div>

        {/* 2-Column Banner Showcase Cards Grid (Sharp Box Proportions: 8:4 Big Active + Next Card Slider) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-12 md:mb-14 items-start">
          
          {/* Main Active Big Card (lg:col-span-8 - Sharp Box) */}
          <div className="lg:col-span-8">
            <Reveal delay={0.15}>
              <Link href={currentSlide.link} className="group block cursor-pointer">
                <div className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] rounded-sm overflow-hidden bg-zinc-950 shadow-2xl mb-4">
                  <Image
                    key={currentSlide.image}
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent pointer-events-none" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight group-hover:text-rose-400 transition-colors">
                    {currentSlide.title}
                  </h3>
                </div>
              </Link>
            </Reveal>
          </div>

          {/* Next Small Card + Navigation Slider Controls (lg:col-span-4 - Sharp Box) */}
          <div className="lg:col-span-4">
            <Reveal delay={0.2}>
              <div>
                {/* Top Right Navigation Controls */}
                <div className="flex items-center justify-between mb-4">
                  {/* <span className="text-xs font-mono text-zinc-400 tracking-wider">
                    0{activeIndex + 1} / 0{slides.length}
                  </span> */}
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrev}
                      className="w-10 h-10 rounded-sm bg-zinc-900 border border-zinc-800/90 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors shadow-md cursor-pointer"
                      aria-label="Previous Slide"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-10 h-10 rounded-sm bg-zinc-900 border border-zinc-800/90 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors shadow-md cursor-pointer"
                      aria-label="Next Slide"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                {/* Next Upcoming Card (Sharp Box) */}
                <Link href={nextSlide.link} className="group block cursor-pointer">
                  <div className="relative w-full h-[300px] sm:h-[385px] md:h-[425px] rounded-sm overflow-hidden bg-zinc-950 shadow-2xl mb-4">
                    <Image
                      key={nextSlide.image}
                      src={nextSlide.image}
                      alt={nextSlide.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight group-hover:text-rose-400 transition-colors">
                      {nextSlide.title}
                    </h3>
                  </div>
                </Link>
              </div>
            </Reveal>
          </div>

        </div>

        {/* 4 Feature Cards Grid (Clean & Borderless Sharp Boxes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((item, idx) => (
            <Reveal key={idx} delay={0.25 + idx * 0.05}>
              <div className="h-full p-8 rounded-sm bg-zinc-950 hover:bg-zinc-900/80 transition-colors duration-300 flex flex-col justify-between group shadow-xl">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 rounded-sm ${item.iconBg} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Explore Global Internship Button (Moved to Bottom Side) */}
        <Reveal delay={0.3} className="flex justify-center md:justify-start pt-4">
          {onOpenDrawer ? (
            <button
              onClick={onOpenDrawer}
              className="inline-flex items-center bg-zinc-950 hover:bg-rose-600 border border-zinc-800 hover:border-rose-500 rounded-sm overflow-hidden transition-all duration-300 group cursor-pointer shadow-xl hover:shadow-[0_0_25px_rgba(225,29,72,0.4)]"
            >
              <span className="px-7 py-4 text-sm md:text-base font-semibold text-white tracking-wide border-r border-zinc-800 group-hover:border-rose-500/60 transition-colors">
                Explore Global Internship
              </span>
              <span className="px-4 py-4 text-white bg-rose-600/90 group-hover:bg-rose-700 transition-colors flex items-center justify-center">
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          ) : (
            <Link
              href="/about/global-internship"
              className="inline-flex items-center bg-zinc-950 hover:bg-rose-600 border border-zinc-800 hover:border-rose-500 rounded-sm overflow-hidden transition-all duration-300 group cursor-pointer shadow-xl hover:shadow-[0_0_25px_rgba(225,29,72,0.4)]"
            >
              <span className="px-7 py-4 text-sm md:text-base font-semibold text-white tracking-wide border-r border-zinc-800 group-hover:border-rose-500/60 transition-colors">
                Explore Global Internship
              </span>
              <span className="px-4 py-4 text-white bg-rose-600/90 group-hover:bg-rose-700 transition-colors flex items-center justify-center">
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          )}
        </Reveal>

      </div>
    </section>
  );
}

export default GlobalInternshipSection;
