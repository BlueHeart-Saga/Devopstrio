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
      {/* Quick Application Modal */}
      {activeJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Background Ambient Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-rose-500/10 rounded-full filter blur-3xl pointer-events-none" />

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-zinc-900 transition-colors"
            >
              <X size={20} />
            </button>

            {!formSubmitted ? (
              <>
                <div className="mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-rose-500 bg-rose-950/50 border border-rose-800/40 px-2.5 py-1 rounded-md mb-2 inline-block">
                    Quick Apply
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">{activeJob.title}</h3>
                  <p className="text-xs text-zinc-400 mt-1 flex items-center gap-3">
                    <span className="flex items-center gap-1"><MapPin size={12} className="text-rose-500" /> {activeJob.location}</span>
                    <span className="flex items-center gap-1"><Briefcase size={12} className="text-rose-500" /> {activeJob.type}</span>
                  </p>
                </div>

                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-mono tracking-wider text-zinc-400 uppercase mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 focus:border-rose-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-wider text-zinc-400 uppercase mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 focus:border-rose-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-wider text-zinc-400 uppercase mb-1">LinkedIn / Portfolio URL *</label>
                    <input
                      type="url"
                      required
                      placeholder="https://linkedin.com/in/johndoe"
                      value={formData.resume}
                      onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                      className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 focus:border-rose-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-wider text-zinc-400 uppercase mb-1">Cover Note (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us why you are interested in joining Devopstrio..."
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 focus:border-rose-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="w-full gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] disabled:opacity-50"
                  >
                    {formSubmitting ? "Submitting..." : "Submit Application"} <Send size={13} />
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center text-emerald-500 animate-bounce">
                  <Check size={28} className="stroke-[3]" />
                </div>
                <h4 className="text-lg font-bold text-white">Application Received!</h4>
                <p className="text-zinc-400 text-xs font-light max-w-sm">
                  Thank you, <span className="font-semibold text-white">{formData.name}</span>. Our recruitment specialists will review your credentials and follow up within 48 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Structured Careers Components */}
      <CareersBeyondHero />
      <GlobalInternshipSection onOpenDrawer={() => setIsInternshipDrawerOpen(true)} />
      <WhatMakesUsUnique />
      <WorkingAtDevopstrio />
      <YourCareerAtDevopstrio />
      {/* <DiscoverYourJobFamily /> */}
      <OpenPositions />
      {/* <HiringProcess /> */}
      {/* <CoreValues /> */}
      {/* <PerksBenefits /> */}
      {/* <InteractiveMap /> */}
      <EmployeeStories />

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
