"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, X, Send, Check, ArrowRight } from "lucide-react";

import { CareersHero } from "@/sections/careers/CareersHero";
import { CareersBeyondHero } from "@/sections/careers/CareersBeyondHero";
import { GlobalInternshipSection } from "@/sections/careers/GlobalInternshipSection";
import { WhatMakesUsUnique } from "@/sections/careers/WhatMakesUsUnique";
import { WorkingAtDevopstrio } from "@/sections/careers/WorkingAtDevopstrio";
import { YourCareerAtDevopstrio } from "@/sections/careers/YourCareerAtDevopstrio";
import { DiscoverYourJobFamily } from "@/sections/careers/DiscoverYourJobFamily";
import { Job } from "@/sections/careers/careersData";

// Dynamic Imports for Heavy Below-The-Fold Sections to Reduce Initial JS Payload
const Careers3Pillars = dynamic(() => import("@/sections/careers/Careers3Pillars").then((mod) => mod.Careers3Pillars));
const CareersIntroBanner = dynamic(() => import("@/sections/careers/CareersIntroBanner").then((mod) => mod.CareersIntroBanner));
const WhyJoin = dynamic(() => import("@/sections/careers/WhyJoin").then((mod) => mod.WhyJoin));
const LifeAtDevopstrio = dynamic(() => import("@/sections/careers/LifeAtDevopstrio").then((mod) => mod.LifeAtDevopstrio));
const CoreValues = dynamic(() => import("@/sections/careers/CoreValues").then((mod) => mod.CoreValues));
const LearningGrowth = dynamic(() => import("@/sections/careers/LearningGrowth").then((mod) => mod.LearningGrowth));
const PerksBenefits = dynamic(() => import("@/sections/careers/PerksBenefits").then((mod) => mod.PerksBenefits));
const InteractiveMap = dynamic(() => import("@/sections/about/global-presence/InteractiveMap").then((mod) => mod.InteractiveMap));
const OpenPositions = dynamic(() => import("@/sections/careers/OpenPositions").then((mod) => mod.OpenPositions));
const HiringProcess = dynamic(() => import("@/sections/careers/HiringProcess").then((mod) => mod.HiringProcess));
const EmployeeStories = dynamic(() => import("@/sections/careers/EmployeeStories").then((mod) => mod.EmployeeStories));
const RepresentativeCTA = dynamic(() => import("@/components/ui/RepresentativeCTA").then((mod) => mod.RepresentativeCTA));

import { FAQ } from "@/components/services/FAQ";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/Schemas";

const careersFaqs = [
  {
    q: "What engineering roles does Devopstrio hire for globally?",
    a: "We actively hire Senior Cloud Architects (AWS/Azure/GCP), DevOps & Platform Engineers, Site Reliability Engineers (SRE), DevSecOps Specialists, Data Engineers, and AI Machine Learning Specialists across the UK, USA, and India.",
    tags: ["Cloud Architects", "DevOps & SRE", "DevSecOps", "AI & Data Engineers"]
  },
  {
    q: "What is Devopstrio's hiring process and interview structure?",
    a: "Our interview process consists of 4 streamlined stages: 1) Initial Talent Screening (30 mins), 2) Hands-on Architecture/Coding Assessment, 3) Technical Deep-Dive & System Design with Principal Engineers, and 4) Executive Cultural Alignment & Offer Review.",
    proof: "✓ 4-Stage Transparent Hiring Process · 10–14 Day Total Turnaround"
  },
  {
    q: "Does Devopstrio support remote and hybrid working arrangements?",
    a: "Yes. We offer flexible work arrangements including 100% remote positions, hybrid options at our regional hubs (London, Chennai, Bengaluru), flexible working hours, and home-office equipment stipends.",
    tags: ["Remote & Hybrid", "Flexible Hours", "Ergonomic Stipends"]
  },
  {
    q: "What benefits and continuous learning programs are offered?",
    a: "We provide comprehensive health insurance, annual cloud certification allowances (AWS Pro, Azure Expert, CKA), paid conference passes, 401k/pension matching, and direct 1-on-1 career mentorship.",
    proof: "✓ 100% Paid Cloud Certification Exams & Learning Stipends"
  }
];

export default function CareersPage() {
  const [activeJob, setActiveJob] = useState<Job | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", resume: "", note: "" });
  const [isInternshipDrawerOpen, setIsInternshipDrawerOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - 100;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }, 300);
        }
      }
    }
  }, []);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.resume) return;

    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  const closeModal = () => {
    setActiveJob(null);
    setFormSubmitted(false);
    setFormData({ name: "", email: "", resume: "", note: "" });
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-clip selection:bg-rose-500 selection:text-white">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "Careers", item: "/careers" }
      ]} />
      <FAQSchema faqs={careersFaqs} />

      {/* Structured Careers Components */}
      <CareersBeyondHero />
      <GlobalInternshipSection onOpenDrawer={() => setIsInternshipDrawerOpen(true)} />
      <WhatMakesUsUnique />
      <WorkingAtDevopstrio />
      <YourCareerAtDevopstrio />
      <DiscoverYourJobFamily />
      <OpenPositions />
      <HiringProcess />
      <CoreValues />
      <PerksBenefits />
      <EmployeeStories />

      {/* Careers FAQs */}
      <FAQ faqs={careersFaqs} title="Careers & Hiring" highlight="FAQs" />

      {/* Reusable Representative CTA Component */}
      <RepresentativeCTA
        title="Ready To Shape The Next Era Of"
        highlightText="Digital Engineering?"
        description="Join a high-performance global network of system architects, DevOps experts, and AI engineers. Build scalable infrastructure and accelerate your technology career."
        primaryBtnText="VIEW OPEN POSITIONS"
        primaryBtnHref="#open-positions"
        secondaryBtnText="GLOBAL INTERNSHIP"
        secondaryBtnHref="/about/global-internship"
      />

      {/* Floating Side Badge (Light Color, Single Line, Slim Width, Larger Text) */}
      <button
        onClick={() => setIsInternshipDrawerOpen(true)}
        className="fixed right-0 top-[42%] -translate-y-1/2 z-[40] hidden md:flex items-center justify-center bg-zinc-100 hover:bg-white text-zinc-950 font-semibold tracking-[0.2em] text-xs sm:text-sm md:text-base py-12 px-3.5 rounded-l-xl shadow-[0_4px_25px_rgba(0,0,0,0.2)] border border-r-0 border-zinc-300 transition-all duration-300 hover:pl-4.5 group cursor-pointer whitespace-nowrap"
        style={{ writingMode: "vertical-rl" }}
      >
        EXPLORE OUR GLOBAL INTERNSHIP
      </button>

      {/* Cartoon / Interactive Slide-Out Popup Panel */}
      <AnimatePresence>
        {isInternshipDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsInternshipDrawerOpen(false)}
              className="fixed inset-0 z-[90] bg-black/75 backdrop-blur-md cursor-pointer"
            />

            {/* Right Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[480px] lg:w-[560px] z-[100] bg-gradient-to-b from-zinc-950 via-zinc-900 to-black border-l border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.9)] p-6 sm:p-10 flex flex-col justify-between overflow-y-auto font-sans text-left"
            >
              {/* Background Ambient Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Top Close Button */}
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => setIsInternshipDrawerOpen(false)}
                    className="text-zinc-400 hover:text-white p-2 rounded-full hover:bg-zinc-800 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Cartoon Graphic (Using college.webp) */}
                <div className="relative w-full flex justify-center mb-8 group pointer-events-none">
                  <img
                    src="/webp/assets/careers/banner/internbanner.webp"
                    alt="Join Devopstrio Internship"
                    className="max-h-60 sm:max-h-72 w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Title & Copy with Increased Font Size & Semi-Bold Weight */}
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-snug mb-4 font-sans">
                  Interested to <span className="text-rose-500 font-semibold">join our team?</span>
                </h3>

                <p className="text-zinc-200 text-base sm:text-lg md:text-xl font-semibold leading-relaxed mb-8">
                  Are you interested to join our team? Visit our Global Internship page to discover real-world engineering projects, 1-on-1 mentorship, and tech career pathways.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3.5 pt-6 border-t border-zinc-800/80">
                <Link
                  href="/about/global-internship"
                  onClick={() => setIsInternshipDrawerOpen(false)}
                  className="w-full flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 transition-all duration-300 shadow-[0_4px_25px_rgba(225,29,72,0.4)] hover:scale-[1.02]"
                >
                  <span>Visit Global Internship Page</span>
                  <ArrowRight size={16} />
                </Link>

                <button
                  onClick={() => {
                    setIsInternshipDrawerOpen(false);
                    document.getElementById("open-positions")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-all duration-300"
                >
                  <span>Explore Open Roles</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
