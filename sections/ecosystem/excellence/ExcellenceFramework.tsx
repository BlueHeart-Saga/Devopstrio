"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface FrameworkPillar {
  id: string;
  name: string;
  subtitle: string;
  pointsTitle: string;
  points: string[];
  subInfoTitle: string;
  subInfo: string[];
  image: string;
}

export function ExcellenceFramework() {
  const [activeTab, setActiveTab] = useState("culture");

  const pillars: FrameworkPillar[] = [
    {
      id: "culture",
      name: "Engineering Culture",
      subtitle: "Building High-Performance Engineering Teams",
      pointsTitle: "Focus Areas",
      points: ["Ownership Mindset", "Continuous Learning", "Technical Leadership", "Knowledge Sharing", "Innovation Programs", "Engineering Communities"],
      subInfoTitle: "Culture Programs",
      subInfo: ["Internal Hackathons", "Technical Guilds", "Architecture Reviews", "Learning Platforms"],
      image: "/webp/assets/ecosystem/grid/engineering-excellence-page_categories-Grid/Generated-Design.webp"
    },
    {
      id: "software",
      name: "Software Engineering",
      subtitle: "Building Scalable Digital Products",
      pointsTitle: "Capabilities",
      points: ["Full Stack Development", "API Engineering", "Microservices Design", "Event-Driven Systems", "Enterprise Applications", "Platform Integration"],
      subInfoTitle: "Technology Focus",
      subInfo: ["React", "Next.js", "Node.js", "Python", "FastAPI", ".NET"],
      image: "/webp/assets/ecosystem/grid/engineering-excellence-page_categories-Grid/Generated-Design-1.webp"
    },
    {
      id: "platform",
      name: "Platform Engineering",
      subtitle: "Accelerating Developer Productivity",
      pointsTitle: "Capabilities",
      points: ["Internal Developer Platforms", "Self-Service Environments", "Golden Path Templates", "Developer Experience", "Infrastructure Bootstrapping", "Developer Portals"],
      subInfoTitle: "Tooling Stack & Benefits",
      subInfo: ["Kubernetes", "Backstage", "Terraform", "ArgoCD", "Faster Delivery", "Standardized Deployments"],
      image: "/webp/assets/ecosystem/grid/engineering-excellence-page_categories-Grid/Generated-Design-2.webp"
    },
    {
      id: "architecture",
      name: "Solution Architecture",
      subtitle: "Designing Scalable Enterprise Systems",
      pointsTitle: "Focus Areas",
      points: ["Enterprise Architecture", "Cloud Architecture", "Microservices", "API Strategy", "Event-Driven Systems", "Solution Blueprints"],
      subInfoTitle: "Strategy & Design",
      subInfo: ["Architecture Reviews", "Scalability Planning", "ADRs", "Design Patterns"],
      image: "/webp/assets/ecosystem/grid/engineering-excellence-page_categories-Grid/Generated-Design-3.webp"
    },
    {
      id: "devsecops",
      name: "DevSecOps",
      subtitle: "Security Integrated Into Every Release",
      pointsTitle: "Capabilities",
      points: ["Secure SDLC validation", "Infrastructure Security", "Compliance Automation", "Vulnerability Management", "Security Monitoring", "Least-Privilege Setup"],
      subInfoTitle: "Tools & Practices",
      subInfo: ["SAST / DAST scans", "Trivy container scan", "Snyk code audit", "SonarQube gate", "Zero Trust design"],
      image: "/webp/assets/ecosystem/grid/engineering-excellence-page_categories-Grid/Generated-Design-4.webp"
    },
    {
      id: "sre",
      name: "Site Reliability Engineering",
      subtitle: "Reliability By Design",
      pointsTitle: "Focus Areas & Metrics",
      points: ["Observability & Logging", "Incident Response Control", "Capacity Planning", "Disaster Recovery", "SLA & SLO Monitoring", "MTTR Optimization"],
      subInfoTitle: "Tools",
      subInfo: ["Grafana", "Prometheus", "OpenTelemetry", "Azure Monitor"],
      image: "/webp/assets/ecosystem/grid/engineering-excellence-page_categories-Grid/Generated-Design-5.webp"
    },
    {
      id: "quality",
      name: "Quality Engineering",
      subtitle: "Delivering Confidence Through Automation",
      pointsTitle: "Capabilities",
      points: ["Test Automation", "API Contract Validation", "Performance Load Testing", "Security Verification", "Accessibility Checking", "UAT Frameworks"],
      subInfoTitle: "Tools & Metrics",
      subInfo: ["Playwright", "Cypress", "Postman", "k6 load runner", "Test coverage SLA", "Release Quality verification"],
      image: "/webp/assets/ecosystem/grid/engineering-excellence-page_categories-Grid/Generated-Design-6.webp"
    },
    {
      id: "operations",
      name: "Engineering Operations",
      subtitle: "Optimizing Delivery and Governance",
      pointsTitle: "Capabilities",
      points: ["Engineering Governance", "SDLC Management", "Release Management", "CI/CD Operations", "Developer Productivity", "Agile Delivery"],
      subInfoTitle: "Metrics & Processes",
      subInfo: ["DORA Metrics", "Continuous Improvement", "Release Optimization", "SPACE Framework"],
      image: "/webp/assets/ecosystem/grid/engineering-excellence-page_categories-Grid/Generated-Design-7.webp"
    }
  ];

  // Auto cycle tabs every 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = pillars.findIndex((p) => p.id === activeTab);
      const nextIndex = (currentIndex + 1) % pillars.length;
      setActiveTab(pillars[nextIndex].id);
    }, 8000);
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Smooth scroll active tab pill into view in the horizontal container
  useEffect(() => {
    const container = document.getElementById("framework-tabs-container");
    const activeEl = document.getElementById(`framework-tab-${activeTab}`);
    if (container && activeEl) {
      const containerRect = container.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();
      const relativeLeft = activeRect.left - containerRect.left + container.scrollLeft;
      const targetScrollLeft = relativeLeft - (containerRect.width / 2) + (activeRect.width / 2);

      container.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth"
      });
    }
  }, [activeTab]);

  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  return (
    <section id="framework" className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
              Engineering Excellence <span className="text-rose-500">Framework</span>
            </h2>
          </div>
        </Reveal>

        {/* Premium Tab Pills Selector */}
        <div id="framework-tabs-container" className="flex items-center gap-3 mb-12 pb-4 overflow-x-auto scrollbar-hide scroll-smooth -mx-6 px-6 md:mx-0 md:px-0 border-b border-zinc-900/60">
          {pillars.map((p) => (
            <button
              key={p.id}
              id={`framework-tab-${p.id}`}
              onClick={() => setActiveTab(p.id)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-300 border ${activeTab === p.id
                ? "bg-rose-500 border-rose-500 text-white shadow-[0_4px_20px_rgba(244,63,94,0.4)]"
                : "bg-zinc-950/60 border-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-900/60"
                }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Categories Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Left Tall Card (Quote Feel Good Words Only) */}
          <Reveal className="lg:col-span-1 h-full">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-rose-500/30 p-8 flex flex-col justify-between h-full min-h-[380px] bg-gradient-to-br from-zinc-950/90 via-[#0a0506]/90 to-[#0f0709]/90 group/tall backdrop-blur-md transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              {/* Internal decorative glowing meshes */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-rose-600/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-orange-600/5 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />

              {/* Expanding Image Layer with Glassmorphism */}
              <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover/tall:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none">
                <img src={currentPillar.image}
                  alt={currentPillar.name}
                  className="w-full h-full object-cover scale-110 group-hover/tall:scale-100 transition-transform duration-1000 ease-out opacity-80"
                loading="lazy" />
                
                {/* Frosted Glass Blur Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
                
                {/* Vignette Gradient for depth and text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-white/5 border border-white/5 rounded-[24px]" />
              </div>

              {/* Quote Feel Words Only */}
              <div className="relative z-10 flex flex-col justify-center h-full my-auto">
                <span className="text-4xl font-serif text-rose-500 block mb-2 leading-none opacity-90">“</span>
                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight leading-snug italic mb-4 group-hover/tall:text-rose-300 transition-colors">
                  {currentPillar.subtitle}
                </h3>
                <span className="text-xs md:text-sm font-mono text-rose-500 font-semibold uppercase tracking-widest block">
                  — {currentPillar.name}
                </span>
              </div>

            </div>
          </Reveal>

          {/* Right Capabilities Grid (Points Only with Improved Text Size & Bottom Explore Button) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPillar.points.slice(0, 6).map((pt, idx) => (
              <Reveal key={pt} delay={idx * 0.04} className="h-full">
                <div className="group/card flex flex-col justify-between bg-zinc-950/30 border border-white/5 hover:border-rose-500/30 hover:bg-zinc-950/60 rounded-2xl p-6 transition-all duration-300 h-full relative overflow-hidden backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                  {/* Subtle color highlight glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 via-rose-600/0 to-rose-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Points Only with Improved Font Size */}
                  <div className="flex-grow flex items-center pt-2 pb-4">
                    <h4 className="text-lg md:text-xl font-semibold text-white group-hover/card:text-rose-400 transition-colors tracking-tight leading-snug">
                      {pt}
                    </h4>
                  </div>

                  {/* Bottom Explore Button with Link */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between mt-auto">
                    <Link
                      href="/services/cloud-services"
                      className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-rose-500 group-hover/card:text-white transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
