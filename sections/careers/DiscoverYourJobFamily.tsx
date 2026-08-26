"use client";

import React from "react";
import { Cloud, Bot, Shield, Code, Server, Compass, ArrowRight, Briefcase } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function DiscoverYourJobFamily() {
  const families = [
    {
      icon: Cloud,
      title: "Cloud & DevOps Engineering",
      badge: "SRE & Platform",
      color: "text-rose-500",
      bgColor: "bg-rose-500/10 border-rose-500/20",
      hoverBorder: "hover:border-rose-500/50",
      desc: "AWS, Azure, GCP, Kubernetes, Terraform, CI/CD pipelines, and zero-downtime Site Reliability Engineering.",
      roles: ["Cloud Architect", "DevOps Engineer", "SRE Principal"],
    },
    {
      icon: Bot,
      title: "AI & Data Innovation",
      badge: "GenAI & MLOps",
      color: "text-amber-400",
      bgColor: "bg-amber-500/10 border-amber-500/20",
      hoverBorder: "hover:border-amber-500/50",
      desc: "Generative AI solutions, LLM fine-tuning, ML pipelines, real-time data engineering, and predictive analytics.",
      roles: ["AI Specialist", "Data Engineer", "MLOps Lead"],
    },
    {
      icon: Shield,
      title: "Cybersecurity & Governance",
      badge: "Zero-Trust & SOC",
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10 border-emerald-500/20",
      hoverBorder: "hover:border-emerald-500/50",
      desc: "Penetration testing, threat intelligence, DevSecOps, IAM governance, and ISO/SOC compliance auditing.",
      roles: ["Security Architect", "Pentester", "DevSecOps Lead"],
    },
    {
      icon: Code,
      title: "Software Engineering",
      badge: "Full-Stack & APIs",
      color: "text-sky-400",
      bgColor: "bg-sky-500/10 border-sky-500/20",
      hoverBorder: "hover:border-sky-500/50",
      desc: "Cloud-native web applications, microservices architecture, modern frontend frameworks, and resilient REST/GraphQL APIs.",
      roles: ["Full-Stack Engineer", "Backend Developer", "API Architect"],
    },
    {
      icon: Server,
      title: "Managed Services & Ops",
      badge: "24/7 Operations",
      color: "text-violet-400",
      bgColor: "bg-violet-500/10 border-violet-500/20",
      hoverBorder: "hover:border-violet-500/50",
      desc: "24/7 follow-the-sun cloud infrastructure operations, incident response, and FinOps cost optimization.",
      roles: ["Cloud Support Engineer", "FinOps Analyst", "Incident Manager"],
    },
    {
      icon: Compass,
      title: "IT Consulting & Strategy",
      badge: "Architecture & Advisory",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10 border-orange-500/20",
      hoverBorder: "hover:border-orange-500/50",
      desc: "Digital transformation roadmapping, technical duediligence, vendor evaluation, and enterprise solution architecture.",
      roles: ["Principal Architect", "IT Strategist", "Engagement Director"],
    },
  ];

  const handleFamilyClick = () => {
    const el = document.getElementById("open-positions");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#030303] text-white py-20 md:py-28 border-b border-zinc-900/80 font-sans relative">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-12 relative z-10">
        
        {/* Header */}
        <Reveal delay={0.1} className="mb-14 text-center max-w-3xl mx-auto">
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-rose-500 block mb-2">
            Practice Areas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Discover your job family.
          </h2>
          <p className="text-zinc-400 text-base md:text-lg font-normal leading-relaxed">
            Find where your passion aligns across our global practice areas and engineering domains.
          </p>
        </Reveal>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {families.map((fam, idx) => {
            const Icon = fam.icon;
            return (
              <Reveal key={idx} delay={0.1 + idx * 0.05}>
                <div
                  onClick={handleFamilyClick}
                  className={`group h-full p-8 rounded-2xl bg-zinc-950/80 border border-zinc-850 ${fam.hoverBorder} transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 shadow-lg`}
                >
                  <div>
                    {/* Top Header Row */}
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-12 h-12 rounded-xl ${fam.bgColor} border flex items-center justify-center ${fam.color} group-hover:scale-110 transition-transform`}>
                        <Icon size={24} />
                      </div>
                      <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400">
                        {fam.badge}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-rose-400 transition-colors">
                      {fam.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed mb-6">
                      {fam.desc}
                    </p>
                  </div>

                  {/* Sample Roles Tags */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {fam.roles.map((r) => (
                        <span key={r} className="text-xs text-zinc-300 bg-zinc-900/60 px-2.5 py-1 rounded-md border border-zinc-800/60">
                          {r}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-semibold text-rose-400 group-hover:text-rose-300">
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={14} /> View Open Roles
                      </span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default DiscoverYourJobFamily;

