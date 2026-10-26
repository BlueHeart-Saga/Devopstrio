"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { BookOpen, Zap, Rocket, GraduationCap } from "lucide-react";

export function CultureTalentGrowth() {
  const careerLevels = [
    {
      level: "Level 1",
      title: "Software Engineer",
      scope: "Feature Execution & Clean Code",
      details: "Focuses on high-quality code implementation, unit test coverage, and collaborative sprint delivery within their pod."
    },
    {
      level: "Level 2",
      title: "Senior Engineer",
      scope: "System Design & Pod Mentorship",
      details: "Leads technical design for complex services, optimizes system bottlenecks, mentors team members, and drives operational health."
    },
    {
      level: "Level 3",
      title: "Staff Engineer / Architect",
      scope: "Cross-System Direction & RFCs",
      details: "Sets organization-wide architectural patterns, defines golden paths, resolves multi-pod dependencies, and drives engineering standards."
    },
    {
      level: "Level 4",
      title: "Principal Engineer / Fellow",
      scope: "Enterprise Tech Strategy & Innovation",
      details: "Pioneers multi-cloud and AI strategy, publishes internal blueprints, and represents Devopstrio across international conferences."
    }
  ];

  const learningPillars = [
    {
      title: "100% Funded Certifications",
      desc: "Full company sponsorship for AWS Solutions Architect, Azure DevOps, CKA, Terraform, and CISSP exams.",
      icon: GraduationCap
    },
    {
      title: "10% Innovation Time",
      desc: "Dedicated time every sprint for engineers to experiment with new languages, AI models, and internal tools.",
      icon: Rocket
    },
    {
      title: "Weekly Tech Talks",
      desc: "Global internal tech broadcasts where engineers showcase complex architectural solutions and production learnings.",
      icon: Zap
    },
    {
      title: "Full Tech Library Access",
      desc: "Unlimited subscriptions to O'Reilly Learning, ACM Digital Library, Coursera Enterprise, and cloud sandboxes.",
      icon: BookOpen
    }
  ];

  return (
    <>
      {/* 7. CAREER PATHWAYS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Reveal className="mb-16 text-center">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-rose-500 mb-3 block">GROWTH</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Engineering Career Pathways
            </h2>
            
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerLevels.map((lvl, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/60 border border-zinc-900 rounded-2xl hover:border-rose-500/30 transition-all flex flex-col justify-between group">
                <div>
                  <span className="text-xs md:text-sm font-mono font-bold text-rose-500 uppercase tracking-widest block mb-2">{lvl.level}</span>
                  <h4 className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-rose-400 transition-colors">{lvl.title}</h4>
                  <p className="text-sm text-zinc-300 font-semibold mb-4">{lvl.scope}</p>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed font-medium pt-4 border-t border-zinc-900">{lvl.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTINUOUS LEARNING */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Reveal className="mb-16 text-center">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-rose-500 mb-3 block">DEVELOPMENT</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Continuous Learning Ecosystem
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-rose-500/20 transition-all flex flex-col items-center text-center group">
                  <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center mb-4 border border-rose-500/20 group-hover:bg-rose-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-rose-500" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
