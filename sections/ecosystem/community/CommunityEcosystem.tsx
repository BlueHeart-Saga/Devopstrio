"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Users, BookOpen, UserCheck, Star, Award, Calendar, Compass, Share2, AwardIcon, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CommunityPillar {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  pointsTitle: string;
  points: string[];
  subTitle: string;
  subPoints: string[];
}

export function CommunityEcosystem() {
  const [activeTab, setActiveTab] = useState("eng-community");

  const pillars: CommunityPillar[] = [
    {
      id: "eng-community",
      name: "Engineering Community",
      subtitle: "Where Technology Professionals Connect",
      icon: <Users size={16} />,
      pointsTitle: "Features",
      points: ["Developer Meetups", "Architecture Discussions", "Technical Roundtables", "Engineering Forums", "Innovation Challenges", "Community Projects"],
      subTitle: "Ecosystem Members",
      subPoints: ["Cloud Engineers", "DevOps Engineers", "Platform Engineers", "Security Engineers", "AI Engineers", "Data Engineers"]
    },
    {
      id: "uni-programs",
      name: "University Programs",
      subtitle: "Bridging Academia and Industry",
      icon: <BookOpen size={16} />,
      pointsTitle: "Programs",
      points: ["Campus Innovation Labs", "Industry Workshops", "Internship Programs", "Final Year Projects", "Technical Bootcamps", "Research Partnerships"],
      subTitle: "Highlights",
      subPoints: ["Guest Lectures", "Hackathons", "Career Development Programs", "Industry Mentoring"]
    },
    {
      id: "talent",
      name: "Talent Network",
      subtitle: "Access to Exceptional Talent",
      icon: <UserCheck size={16} />,
      pointsTitle: "Talent Pools",
      points: ["Cloud Talent Network (Azure, AWS, OCI)", "DevOps Talent Network (Kubernetes, SRE)", "AI Talent Network (ML, GenAI)", "Data Talent Network (Analytics, Warehouse)", "Security Talent Network (Cybersecurity)"],
      subTitle: "Key Roles",
      subPoints: ["Cloud Architects", "Automation Engineers", "GenAI Engineers", "Platform Advocates"]
    },
    {
      id: "open-source",
      name: "Open Source Initiatives",
      subtitle: "Contributing Back to Technology",
      icon: <Star size={16} />,
      pointsTitle: "Projects",
      points: ["Cloud Modules", "Terraform Templates", "Kubernetes Operators", "AI Starter Kits", "DevOps Toolkits", "Security Frameworks"],
      subTitle: "Repository Stats",
      subPoints: ["25+ Open Source Assets", "1000+ GitHub Stars", "500+ Community Contributions"]
    },
    {
      id: "certs",
      name: "Certification Programs",
      subtitle: "Professional Growth Pathways",
      icon: <Award size={16} />,
      pointsTitle: "Certifications Sponsored",
      points: ["Azure Certifications", "AWS Certifications", "Kubernetes Certifications", "DevOps Certifications", "Security Certifications", "AI Certifications"],
      subTitle: "Benefits Offered",
      subPoints: ["Sponsored Training", "Certification Paths", "Internal Academies", "Hands-On Labs"]
    },
    {
      id: "events",
      name: "Technical Events",
      subtitle: "Learning Through Collaboration",
      icon: <Calendar size={16} />,
      pointsTitle: "Event Types",
      points: ["Technology Summits", "Cloud Days", "AI Innovation Forums", "Security Conferences", "Engineering Meetups", "Architecture Workshops"],
      subTitle: "Statistics",
      subPoints: ["100+ Events Hosted", "5000+ Attendees", "50+ Industry Speakers"]
    },
    {
      id: "mentorship",
      name: "Mentorship Network",
      subtitle: "Learning From Industry Leaders",
      icon: <Compass size={16} />,
      pointsTitle: "Mentorship Paths",
      points: ["Senior Architect Mentorship (Cloud Architecture)", "Engineering Leadership Program (Careers)", "Graduate Mentorship (Academia to Industry)", "Women In Technology (Inclusion Programs)"],
      subTitle: "Advisory Focus",
      subPoints: ["Career Milestones", "System Architectures", "Public Speaking", "Tooling Hardening"]
    },
    {
      id: "advocacy",
      name: "Developer Advocacy",
      subtitle: "Empowering Technology Communities",
      icon: <Share2 size={16} />,
      pointsTitle: "Core Activities",
      points: ["Technical Blogging", "Conference Speaking", "Community Training", "Knowledge Sharing", "Open Source Evangelism"],
      subTitle: "Outreach Channels",
      subPoints: ["Tech Forums", "GitHub issues", "Guild newsletters", "Local developer hubs"]
    },
    {
      id: "future-talent",
      name: "Future Talent Program",
      subtitle: "Developing Tomorrow's Innovators",
      icon: <AwardIcon size={16} />,
      pointsTitle: "Tracks Offered",
      points: ["Graduate Engineers", "Internships", "Apprenticeships", "Innovation Challenges", "Research Fellowships"],
      subTitle: "Pipeline Handoffs",
      subPoints: ["Learn", "Build", "Mentor", "Certify", "Deploy", "Lead"]
    },
    {
      id: "research",
      name: "Research Collaborations",
      subtitle: "Industry + Academia Innovation",
      icon: <Sparkles size={16} />,
      pointsTitle: "Focus Domains",
      points: ["Artificial Intelligence", "Cloud Computing", "Cybersecurity", "Data Analytics", "Platform Engineering", "Automation"],
      subTitle: "Key Outcomes",
      subPoints: ["Whitepapers", "R&D Proof of Concepts", "Security Baselines", "Academic Grants"]
    }
  ];

  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  return (
    <section id="framework" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            HUMAN CAPABILITY
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Community <span className="text-rose-500">Ecosystem</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            A comprehensive mapping of learning channels, developer communities, and academy certifications.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left selectors */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {pillars.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`flex items-center justify-between p-4.5 rounded-2xl text-left border transition-all duration-300 ${
                  activeTab === p.id
                    ? "bg-rose-500/10 text-rose-500 border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.15)]"
                    : "bg-zinc-950/45 text-zinc-455 border-zinc-900/80 hover:text-zinc-350 hover:bg-zinc-900/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-300 ${
                    activeTab === p.id ? "bg-rose-950/30 border-rose-500/30" : "bg-zinc-900 border-zinc-850"
                  }`}>
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">{p.name}</h4>
                    <span className="text-[8px] text-zinc-555 font-mono uppercase font-bold">{p.subtitle}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Display Board */}
          <div className="lg:col-span-8 min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-zinc-950/40 border border-zinc-900/60 rounded-3xl p-8 backdrop-blur-sm"
              >
                <div className="border-b border-zinc-900/60 pb-6 mb-8">
                  <h3 className="text-lg font-bold text-white mb-2">{currentPillar.name}</h3>
                  <span className="text-xs font-mono font-bold text-rose-500 uppercase tracking-wider">
                    {currentPillar.subtitle}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Capabilities */}
                  <div>
                    <span className="block text-[10px] font-mono font-bold text-rose-500 uppercase tracking-widest mb-4">
                      {currentPillar.pointsTitle}
                    </span>
                    <ul className="space-y-3">
                      {currentPillar.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2.5 text-xs text-zinc-350 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sub Points */}
                  <div>
                    <span className="block text-[10px] font-mono font-bold text-rose-500 uppercase tracking-widest mb-4">
                      {currentPillar.subTitle}
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {currentPillar.subPoints.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-850 text-[10px] font-mono font-bold text-zinc-300 uppercase tracking-wider"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
