"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";

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
      image: "/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design.png"
    },
    {
      id: "uni-programs",
      name: "University Programs",
      subtitle: "Bridging Academia and Industry",
      pointsTitle: "Programs",
      points: ["Campus Innovation Labs", "Industry Workshops", "Internship Programs", "Final Year Projects", "Technical Bootcamps", "Research Partnerships"],
      subTitle: "Highlights",
      subPoints: ["Guest Lectures", "Hackathons", "Career Development Programs", "Industry Mentoring"],
      image: "/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design-1.png"
    },
    {
      id: "talent",
      name: "Talent Network",
      subtitle: "Access to Exceptional Talent",
      pointsTitle: "Talent Pools",
      points: ["Cloud Talent Network", "DevOps Talent Network", "AI Talent Network", "Data Talent Network", "Security Talent Network", "SRE Talent Network"],
      subTitle: "Key Roles",
      subPoints: ["Cloud Architects", "Automation Engineers", "GenAI Engineers", "Platform Advocates"],
      image: "/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design-2.png"
    },
    {
      id: "open-source",
      name: "Open Source Initiatives",
      subtitle: "Contributing Back to Technology",
      pointsTitle: "Projects",
      points: ["Cloud Modules", "Terraform Templates", "Kubernetes Operators", "AI Starter Kits", "DevOps Toolkits", "Security Frameworks"],
      subTitle: "Repository Stats",
      subPoints: ["25+ Open Source Assets", "1000+ GitHub Stars", "500+ Contributions"],
      image: "/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design-3.png"
    },
    {
      id: "certs",
      name: "Certification Programs",
      subtitle: "Professional Growth Pathways",
      pointsTitle: "Certifications Sponsored",
      points: ["Azure Certifications", "AWS Certifications", "Kubernetes Certifications", "DevOps Certifications", "Security Certifications", "AI Certifications"],
      subTitle: "Benefits Offered",
      subPoints: ["Sponsored Training", "Certification Paths", "Internal Academies", "Hands-On Labs"],
      image: "/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design-4.png"
    },
    {
      id: "events",
      name: "Technical Events",
      subtitle: "Learning Through Collaboration",
      pointsTitle: "Event Types",
      points: ["Technology Summits", "Cloud Days", "AI Innovation Forums", "Security Conferences", "Engineering Meetups", "Architecture Workshops"],
      subTitle: "Statistics",
      subPoints: ["100+ Events Hosted", "5000+ Attendees", "50+ Industry Speakers"],
      image: "/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design-5.png"
    },
    {
      id: "mentorship",
      name: "Mentorship Network",
      subtitle: "Learning From Industry Leaders",
      pointsTitle: "Mentorship Paths",
      points: ["Senior Architect Mentorship", "Engineering Leadership Program", "Graduate Mentorship", "Women In Technology", "Fast-Track Intern Programs", "Peer Tech Circles"],
      subTitle: "Advisory Focus",
      subPoints: ["Career Milestones", "System Architectures", "Public Speaking", "Tooling Hardening"],
      image: "/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design-6.png"
    },
    {
      id: "advocacy",
      name: "Developer Advocacy",
      pointsTitle: "Core Activities",
      subtitle: "Empowering Technology Communities",
      points: ["Technical Blogging", "Conference Speaking", "Community Training", "Knowledge Sharing", "Open Source Evangelism", "Community Forums Support"],
      subTitle: "Outreach Channels",
      subPoints: ["Tech Forums", "GitHub issues", "Guild newsletters", "Local developer hubs"],
      image: "/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design-7.png"
    },
    {
      id: "future-talent",
      name: "Future Talent Program",
      subtitle: "Developing Tomorrow's Innovators",
      pointsTitle: "Tracks Offered",
      points: ["Graduate Engineers", "Internships", "Apprenticeships", "Innovation Challenges", "Research Fellowships", "Tech Bootcamps"],
      subTitle: "Pipeline Handoffs",
      subPoints: ["Learn", "Build", "Mentor", "Certify", "Deploy", "Lead"],
      image: "/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design-8.png"
    },
    {
      id: "research",
      name: "Research Collaborations",
      subtitle: "Industry + Academia Innovation",
      pointsTitle: "Focus Domains",
      points: ["Artificial Intelligence", "Cloud Computing", "Cybersecurity", "Data Analytics", "Platform Engineering", "Automation"],
      subTitle: "Key Outcomes",
      subPoints: ["Whitepapers", "R&D Proof of Concepts", "Security Baselines", "Academic Grants"],
      image: "/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design-9.png"
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
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              HUMAN CAPABILITY
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Community <span className="text-rose-500">Ecosystem</span>
            </h2>
            <p className="text-zinc-250 text-base md:text-lg font-semibold leading-relaxed">
              A comprehensive mapping of learning channels, developer communities, and academy certifications.
            </p>
          </div>
        </Reveal>

        {/* Tab Pills Selector */}
        <div id="community-tabs-container" className="flex items-center gap-2 mb-12 pb-4 overflow-x-auto scrollbar-hide scroll-smooth -mx-6 px-6 md:mx-0 md:px-0 border-b border-zinc-900/60">
          {pillars.map((p) => (
            <button
              key={p.id}
              id={`community-tab-${p.id}`}
              onClick={() => setActiveTab(p.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 border ${activeTab === p.id
                ? "bg-rose-600 border-rose-600 text-white shadow-[0_4px_20px_rgba(225,29,72,0.35)]"
                : "bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-900/50 hover:border-zinc-800"
                }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Main Redesigned Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Left Tall Card (Col 1, Spans entire height / 2 rows on desktop) */}
          <Reveal className="lg:col-span-1 h-full">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-rose-500/30 p-8 flex flex-col justify-between h-full min-h-[480px] bg-gradient-to-br from-zinc-950/90 via-[#0a0506]/90 to-[#0f0709]/90 group/tall backdrop-blur-md transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              {/* Decorative meshes */}
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

              {/* Card top details */}
              <div className="relative z-10">
                <span className="text-[10px] font-mono text-rose-500 tracking-widest uppercase block mb-4">
                  PILLAR DOMAIN
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight mb-4 group-hover/tall:text-rose-400 transition-colors">
                  {currentPillar.name}
                </h3>
                <p className="text-zinc-300 text-xs font-semibold leading-relaxed">
                  {currentPillar.subtitle}
                </p>
              </div>

              {/* Card bottom: Sub Points list */}
              <div className="relative z-10 mt-8 pt-6 border-t border-zinc-900/60">
                <span className="block text-[9px] font-mono font-bold text-rose-500 tracking-widest uppercase mb-3">
                  {currentPillar.subTitle}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentPillar.subPoints.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[9px] font-mono font-bold text-zinc-300 uppercase tracking-wider"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Points Grid (Col 2-4, 3 Columns x 2 Rows of smaller cards) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPillar.points.slice(0, 6).map((pt, idx) => (
              <Reveal key={pt} delay={idx * 0.04} className="h-full">
                <div className="group/card flex flex-col justify-between bg-zinc-950/30 border border-white/5 hover:border-rose-500/20 hover:bg-zinc-950/60 rounded-2xl p-6 transition-all duration-300 min-h-[220px] h-full relative overflow-hidden backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                  {/* Subtle color highlight glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 via-rose-600/0 to-rose-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Text details */}
                  <div>
                    <span className="text-[10px] font-mono text-rose-500 tracking-wider block mb-2">
                      FEATURE 0{idx + 1}
                    </span>
                    <h4 className="text-base font-semibold text-rose-500 group-hover:text-rose-450 transition-colors mb-2">
                      {pt}
                    </h4>
                    <p className="text-[12px] text-zinc-200 font-semibold leading-relaxed">
                      Fostering active engagement and technical growth through dedicated {pt.toLowerCase()} sessions across our global footprint.
                    </p>
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
