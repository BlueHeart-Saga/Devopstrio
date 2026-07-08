"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, Compass, Code, GraduationCap, Users, ShieldAlert, Award, FileCheck, Layers } from "lucide-react";

import Link from "next/link";

export const MentorshipBenefits = () => {
  const mentoringItems = [
    { title: "Weekly Mentoring", desc: "One-on-one reviews with principal engineers to unblock progress and refine strategies.", icon: Users },
    { title: "Structured Code Reviews", desc: "Get real feedback on coding style, complexity, performance and modular layout structures.", icon: Code },
    { title: "Career Guidance", desc: <>Discuss industry options, prepare your profile, and map paths for modern <Link href="/careers" className="text-[#E11D48] hover:underline">software careers</Link>.</>, icon: Compass },
    { title: "Architecture Sessions", desc: "Participate in whiteboarding sessions mapping enterprise systems and database setups.", icon: Layers },
    { title: "Certification Support", desc: <>Prepare and study for <Link href="/ecosystem/partnerships" className="text-[#E11D48] hover:underline">cloud certifications (AWS, Azure)</Link> with sponsored study loops.</>, icon: GraduationCap }
  ];

  const benefits = [
    { title: "Industry Experience", desc: "Acquire real corporate experience." },
    { title: "Real Client Projects", desc: "Your code runs on production setups." },
    { title: "Technical Certifications", desc: "Supported study for professional credentials." },
    { title: "Global Team Collaboration", desc: "Coordinate across UK, Europe, & India teams." },
    { title: "Portfolio Development", desc: "High-credibility projects on your Github." },
    { title: "Career Opportunities", desc: "High performers secure full-time offers." },
    { title: "Letter of Recommendation", desc: "Detailed letter signed by Principal Architect." },
    { title: "Internship Certificate", desc: "Official accredited certificate of completion." }
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden border-t border-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Mentorship Column */}
          <div className="lg:col-span-6">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Mentorship Program
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
              Learn from <span className="text-rose-500">Industry Experts</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold mb-10">
              You will never work in isolation. Our mentors are embedded inside your delivery workflows to guide your professional trajectory.
            </p>

            <div className="flex flex-col gap-6">
              {mentoringItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex gap-4 p-5 bg-zinc-950/60 border border-zinc-900 hover:border-zinc-800 rounded-xl transition-all group"
                  >
                    <div className="p-3 h-fit rounded-lg bg-rose-500/10 text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-zinc-405 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Benefits Column */}
          <div className="lg:col-span-6 bg-zinc-950/40 border border-zinc-900 p-8 sm:p-12 rounded-3xl relative overflow-hidden backdrop-blur">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              What's In It For You
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Internship <span className="text-rose-500">Benefits</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 items-start p-4 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-zinc-800 transition-colors"
                >
                  <div className="p-1 rounded-md bg-rose-500/10 text-rose-500 mt-0.5">
                    <Check size={12} className="stroke-[3px]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">{benefit.title}</h3>
                    <p className="text-[11px] text-zinc-500 leading-normal font-medium">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-zinc-900 text-center">
              <span className="text-xs text-zinc-500 font-mono">Accredited by Devopstrio Core Engineering Standards</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
