"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Briefcase, X, Send, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

import { CareersHero } from "@/sections/careers/CareersHero";
import { WhyJoin } from "@/sections/careers/WhyJoin";
import { LifeAtDevopstrio } from "@/sections/careers/LifeAtDevopstrio";
import { CoreValues } from "@/sections/careers/CoreValues";
import { LearningGrowth } from "@/sections/careers/LearningGrowth";
import { PerksBenefits } from "@/sections/careers/PerksBenefits";
import { CareersPresence } from "@/sections/careers/CareersPresence";
import { OpenPositions } from "@/sections/careers/OpenPositions";
import { HiringProcess } from "@/sections/careers/HiringProcess";
import { EmployeeStories } from "@/sections/careers/EmployeeStories";
import { TalentNetwork } from "@/sections/careers/TalentNetwork";
import { Job } from "@/sections/careers/careersData";
import { SectionNavbar } from "@/components/ui/SectionNavbar";

const careersSections = [
  { id: "overview", label: "Overview" },
  { id: "why-join", label: "Why Join" },
  { id: "culture", label: "Culture" },
  { id: "values", label: "Values" },
  { id: "growth", label: "Growth" },
  { id: "open-positions", label: "Roles" },
  { id: "hiring-process", label: "Hiring" },
  { id: "talent-network", label: "Network" }
];

export default function CareersPage() {
  const [activeJob, setActiveJob] = useState<Job | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", resume: "", note: "" });

  const handleApplyClick = (job: Job) => {
    setActiveJob(job);
    setFormSubmitted(false);
    setFormData({ name: "", email: "", resume: "", note: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setActiveJob(null);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">

      {/* Cinematic Hero Title Header */}
      {/* <section className="pt-16 pb-4 md:pb-8 text-center relative bg-[#030303]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.05),transparent_50%)] pointer-events-none" />
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4 text-white">
            Careers at <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Devopstrio</span>
          </h1>
          <p className="text-zinc-400 font-medium max-w-xl mx-auto">
            Join a high-performance global network of system architects, DevOps experts, and AI engineers.
          </p>
        </Reveal>
      </section> */}
      {/* Dynamic application modal */}
      {activeJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl bg-zinc-950 border border-zinc-900 rounded-[32px] p-8 md:p-10 shadow-[0_25px_60px_-15px_rgba(225,29,72,0.15)]">

            <button
              onClick={() => setActiveJob(null)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white bg-zinc-900/60 p-2 rounded-full border border-zinc-800 transition-colors"
            >
              <X size={16} />
            </button>

            {!formSubmitted ? (
              <>
                <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-2 font-bold">Apply Position</span>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{activeJob.title}</h3>
                <p className="text-zinc-500 text-xs mb-6 flex items-center gap-1.5 font-medium">
                  <MapPin size={12} className="text-rose-500" /> {activeJob.location} | <Briefcase size={12} className="text-zinc-500" /> {activeJob.type}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-[10px] font-mono tracking-wider text-zinc-450 uppercase mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-900/40 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-650 focus:border-rose-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-wider text-zinc-450 uppercase mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john.doe@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-900/40 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-650 focus:border-rose-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-wider text-zinc-450 uppercase mb-2">Resume / Portfolio Link</label>
                    <input
                      type="url"
                      required
                      placeholder="https://github.com/johndoe or Google Drive link"
                      value={formData.resume}
                      onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                      className="w-full bg-zinc-900/40 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-650 focus:border-rose-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-wider text-zinc-450 uppercase mb-2">Cover Note (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us why you are interested in joining Devopstrio..."
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full bg-zinc-900/40 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-650 focus:border-rose-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
                  >
                    Submit Application <Send size={13} />
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center text-emerald-500 animate-bounce">
                  <Check size={28} className="stroke-[3]" />
                </div>
                <h4 className="text-lg font-bold text-white">Application Received!</h4>
                <p className="text-zinc-450 text-xs font-light max-w-sm">
                  Thank you, <span className="font-semibold text-white">{formData.name}</span>. Our recruitment specialists will review your credentials and follow up within 48 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Structured Careers Components */}
      <CareersHero />
      <SectionNavbar sections={careersSections} />
      <WhyJoin />
      <LifeAtDevopstrio />
      <CoreValues />
      <LearningGrowth />
      <PerksBenefits />
      <CareersPresence />
      <OpenPositions />
      <HiringProcess />
      <EmployeeStories />
      <TalentNetwork />

      {/* Floating Side Badge */}
      <Link 
        href="/about/global-internship" 
        className="fixed right-0 top-[35%] -translate-y-1/2 z-[40] hidden md:flex items-center justify-center bg-[#581326] hover:bg-[#701a32] text-white font-extrabold tracking-[0.2em] text-[11px] py-7 px-3.5 rounded-l-2xl shadow-[0_0_35px_rgba(225,29,72,0.35)] border border-r-0 border-rose-500/20 transition-all duration-300 hover:pl-5 group cursor-pointer"
        style={{ writingMode: "vertical-rl" }}
      >
        EXPLORE OUR GLOBAL INTERNSHIP
      </Link>
    </main>
  );
}
