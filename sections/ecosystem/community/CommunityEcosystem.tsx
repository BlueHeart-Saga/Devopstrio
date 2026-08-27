"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface CommunityPillar {
  id: string;
  name: string;
  subtitle: string;
  pointsTitle: string;
  points: string[];
  subTitle: string;
  subPoints: string[];
  image: string;
}

export function CommunityEcosystem() {
  const [activeTab, setActiveTab] = useState("eng-community");

  const pillars: CommunityPillar[] = [
    {
      id: "eng-community",
      name: "Engineering Community",
      subtitle: "Where Technology Professionals Connect",
      pointsTitle: "Features",
      points: ["Developer Meetups", "Architecture Discussions", "Technical Roundtables", "Engineering Forums", "Innovation Challenges", "Community Projects"],
      subTitle: "Ecosystem Members",
      subPoints: ["Cloud Engineers", "DevOps Engineers", "Platform Engineers", "Security Engineers", "AI Engineers", "Data Engineers"],
      image: "/webp/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design.webp"
    },
    {
      id: "uni-programs",
      name: "University Programs",
      subtitle: "Bridging Academia and Industry",
      pointsTitle: "Programs",
      points: ["Campus Innovation Labs", "Industry Workshops", "Internship Programs", "Final Year Projects", "Technical Bootcamps", "Research Partnerships"],
      subTitle: "Highlights",
      subPoints: ["Guest Lectures", "Hackathons", "Career Development Programs", "Industry Mentoring"],
      image: "/webp/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design-1.webp"
    },
    {
      id: "talent",
      name: "Talent Network",
      subtitle: "Access to Exceptional Talent",
      pointsTitle: "Talent Pools",
      points: ["Cloud Talent Network", "DevOps Talent Network", "AI Talent Network", "Data Talent Network", "Security Talent Network", "SRE Talent Network"],
      subTitle: "Key Roles",
      subPoints: ["Cloud Architects", "Automation Engineers", "GenAI Engineers", "Platform Advocates"],
      image: "/webp/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design-2.webp"
    },
    {
      id: "open-source",
      name: "Open Source Initiatives",
      subtitle: "Contributing Back to Technology",
      pointsTitle: "Projects",
      points: ["Cloud Modules", "Terraform Templates", "Kubernetes Operators", "AI Starter Kits", "DevOps Toolkits", "Security Frameworks"],
      subTitle: "Repository Stats",
      subPoints: ["25+ Open Source Assets", "1000+ GitHub Stars", "500+ Contributions"],
      image: "/webp/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design-3.webp"
    },
    {
      id: "certs",
      name: "Certification Programs",
      subtitle: "Professional Growth Pathways",
      pointsTitle: "Certifications Sponsored",
      points: ["Azure Certifications", "AWS Certifications", "Kubernetes Certifications", "DevOps Certifications", "Security Certifications", "AI Certifications"],
      subTitle: "Benefits Offered",
      subPoints: ["Sponsored Training", "Certification Paths", "Internal Academies", "Hands-On Labs"],
      image: "/webp/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design-4.webp"
    },
    {
      id: "events",
      name: "Technical Events",
      subtitle: "Learning Through Collaboration",
      pointsTitle: "Event Types",
      points: ["Technology Summits", "Cloud Days", "AI Innovation Forums", "Security Conferences", "Engineering Meetups", "Architecture Workshops"],
      subTitle: "Statistics",
      subPoints: ["100+ Events Hosted", "5000+ Attendees", "50+ Industry Speakers"],
      image: "/webp/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design-5.webp"
    },
    {
      id: "mentorship",
      name: "Mentorship Network",
      subtitle: "Learning From Industry Leaders",
      pointsTitle: "Mentorship Paths",
      points: ["Senior Architect Mentorship", "Engineering Leadership Program", "Graduate Mentorship", "Women In Technology", "Fast-Track Intern Programs", "Peer Tech Circles"],
      subTitle: "Advisory Focus",
      subPoints: ["Career Milestones", "System Architectures", "Public Speaking", "Tooling Hardening"],
      image: "/webp/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design-6.webp"
    },
    {
      id: "advocacy",
      name: "Developer Advocacy",
      subtitle: "Empowering Technology Communities",
      pointsTitle: "Core Activities",
      points: ["Technical Blogging", "Conference Speaking", "Community Training", "Knowledge Sharing", "Open Source Evangelism", "Community Forums Support"],
      subTitle: "Outreach Channels",
      subPoints: ["Tech Forums", "GitHub issues", "Guild newsletters", "Local developer hubs"],
      image: "/webp/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design-7.webp"
    },
    {
      id: "future-talent",
      name: "Future Talent Program",
      subtitle: "Developing Tomorrow's Innovators",
      pointsTitle: "Tracks Offered",
      points: ["Graduate Engineers", "Internships", "Apprenticeships", "Innovation Challenges", "Research Fellowships", "Tech Bootcamps"],
      subTitle: "Pipeline Handoffs",
      subPoints: ["Learn", "Build", "Mentor", "Certify", "Deploy", "Lead"],
      image: "/webp/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design-8.webp"
    },
    {
      id: "research",
      name: "Research Collaborations",
      subtitle: "Industry + Academia Innovation",
      pointsTitle: "Focus Domains",
      points: ["Artificial Intelligence", "Cloud Computing", "Cybersecurity", "Data Analytics", "Platform Engineering", "Automation"],
      subTitle: "Key Outcomes",
      subPoints: ["Whitepapers", "R&D Proof of Concepts", "Security Baselines", "Academic Grants"],
      image: "/webp/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design-9.webp"
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
    const container = document.getElementById("community-tabs-container");
    const activeEl = document.getElementById(`community-tab-${activeTab}`);
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
              Community <span className="text-rose-500">Ecosystem</span>
            </h2>
          </div>
        </Reveal>

        {/* Premium Tab Pills Selector */}
        <div id="community-tabs-container" className="flex items-center gap-3 mb-12 pb-4 overflow-x-auto scrollbar-hide scroll-smooth -mx-6 px-6 md:mx-0 md:px-0 border-b border-zinc-900/60">
          {pillars.map((p) => (
            <button
              key={p.id}
              id={`community-tab-${p.id}`}
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

        {/* Main Redesigned Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Left Tall Card (Quote Style Layout) */}
          <Reveal className="lg:col-span-1 h-full">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-rose-500/30 p-8 flex flex-col justify-between h-full min-h-[380px] bg-gradient-to-br from-zinc-950/90 via-[#0a0506]/90 to-[#0f0709]/90 group/tall backdrop-blur-md transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              {/* Decorative meshes */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-rose-600/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-orange-600/5 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />

              {/* Expanding Image Layer with Glassmorphism */}
              <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover/tall:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
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

          {/* Right Points Grid */}
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

                  {/* Bottom Explore Button with Suitable Link */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between mt-auto z-10">
                    <Link
                      href="/ecosystem/community-talent-network"
                      className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-rose-500 group-hover/card:text-white transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
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
