"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  Users,
  GraduationCap,
  Globe,
  GitBranch,
  Award,
  ArrowUpRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface CapabilityItem {
  name: string;
  desc: string;
}

interface CommunityPillar {
  id: string;
  name: string;
  subtitle: string;
  href: string;
  icon: React.ReactNode;
  bgImage: string;
  capabilities: CapabilityItem[];
}

export function CommunityEcosystem() {
  const [activeTab, setActiveTab] = useState("eng-community");
  const [isHovered, setIsHovered] = useState(false);

  // Exactly the 5 requested tabs with their respective URLs
  const pillars: CommunityPillar[] = [
    {
      id: "eng-community",
      name: "Engineering Community",
      subtitle: "Where Technology Professionals Connect, Share & Innovate",
      href: "/ecosystem/community-talent-network/engineering-community",
      icon: <Users size={16} />,
      bgImage: "/webp/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design.webp",
      capabilities: [
        {
          name: "Developer Meetups",
          desc: "Collaborative developer summits and hack sessions discussing cloud architectures."
        },
        {
          name: "Architecture Discussions",
          desc: "Deep dives with enterprise solutions architects on resilient platform designs."
        },
        {
          name: "Technical Roundtables",
          desc: "Peer-to-peer technical panels tackling production scalability and SRE challenges."
        },
        {
          name: "Engineering Forums",
          desc: "Interactive open knowledge hubs and code-review forums for active engineers."
        },
        {
          name: "Innovation Challenges",
          desc: "Collaborative hackathons and sprints solving real-world customer problems."
        },
        {
          name: "Community Projects",
          desc: "Open engineering collaboration on production-ready reusable microservices."
        }
      ]
    },
    {
      id: "uni-programs",
      name: "University Programs",
      subtitle: "Bridging Academia and Enterprise Industry Engineering",
      href: "/ecosystem/community-talent-network/university-programs",
      icon: <GraduationCap size={16} />,
      bgImage: "/webp/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design-1.webp",
      capabilities: [
        {
          name: "Campus Innovation Labs",
          desc: "State-of-the-art sandboxes and lab environments embedded in universities."
        },
        {
          name: "Industry Workshops",
          desc: "Hands-on engineering bootcamps led by senior enterprise cloud architects."
        },
        {
          name: "Internship Programs",
          desc: "Immersive 12-to-24 week paid engineering residencies in live client squads."
        },
        {
          name: "Final Year Projects",
          desc: "Co-created capstone projects solving actual industry technology challenges."
        },
        {
          name: "Technical Bootcamps",
          desc: "Accelerated training covering Kubernetes, DevOps, and cloud-native AI."
        },
        {
          name: "Research Partnerships",
          desc: "Joint research initiatives and academic grants advancing cloud computing."
        }
      ]
    },
    {
      id: "talent",
      name: "Global Talent Network",
      subtitle: "Access to Exceptional Global Engineering Talent & Specialists",
      href: "/ecosystem/community-talent-network/talent-network",
      icon: <Globe size={16} />,
      bgImage: "/webp/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design-2.webp",
      capabilities: [
        {
          name: "Cloud Talent Network",
          desc: "Vetted cloud architects and engineers across AWS, Azure, and GCP platforms."
        },
        {
          name: "DevOps Talent Network",
          desc: "Elite automation and platform engineers specializing in GitOps and CI/CD."
        },
        {
          name: "AI Talent Network",
          desc: "Specialized machine learning and GenAI engineers building LLM workflows."
        },
        {
          name: "Data Talent Network",
          desc: "Data platform architects handling real-time pipelines and analytics lakes."
        },
        {
          name: "Security Talent Network",
          desc: "Zero Trust and DevSecOps practitioners safeguarding enterprise workloads."
        },
        {
          name: "SRE Talent Network",
          desc: "Site Reliability Engineers ensuring 99.99% system availability and resilience."
        }
      ]
    },
    {
      id: "open-source",
      name: "Open Source Innovation",
      subtitle: "Contributing Back to Global Open Source Technology & Frameworks",
      href: "/ecosystem/community-talent-network/open-source-contributions",
      icon: <GitBranch size={16} />,
      bgImage: "/webp/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design-3.webp",
      capabilities: [
        {
          name: "Cloud Modules",
          desc: "Production-ready, battle-tested multi-cloud infrastructure building blocks."
        },
        {
          name: "Terraform Templates",
          desc: "Enterprise IaC modules enforcing security and compliance by default."
        },
        {
          name: "Kubernetes Operators",
          desc: "Custom CRDs and controllers automating complex workload lifecycles."
        },
        {
          name: "AI Starter Kits",
          desc: "Accelerated scaffolding templates for RAG and agentic AI architectures."
        },
        {
          name: "DevOps Toolkits",
          desc: "Reusable pipeline libraries accelerating GitOps delivery across platforms."
        },
        {
          name: "Security Frameworks",
          desc: "Open compliance policies and hardening benchmarks for enterprise stacks."
        }
      ]
    },
    {
      id: "certs",
      name: "Certification Programs",
      subtitle: "Professional Growth Pathways & Recognized Industry Credentials",
      href: "/ecosystem/community-talent-network/certification-programs",
      icon: <Award size={16} />,
      bgImage: "/webp/assets/ecosystem/grid/community-talent-network_categories-Grid/Generated-Design-4.webp",
      capabilities: [
        {
          name: "Azure Certifications",
          desc: "Comprehensive prep tracks for Solutions Architect and DevOps Expert credentials."
        },
        {
          name: "AWS Certifications",
          desc: "Targeted training and exam vouchers for AWS Professional & Specialty tracks."
        },
        {
          name: "Kubernetes Certifications",
          desc: "Hands-on lab training for CKA, CKAD, and CKS enterprise certifications."
        },
        {
          name: "DevOps Certifications",
          desc: "Industry-standard accreditations across Terraform, HashiCorp, and GitHub."
        },
        {
          name: "Security Certifications",
          desc: "Specialized credentials in cloud security, DevSecOps, and compliance."
        },
        {
          name: "AI Certifications",
          desc: "Accredited paths in prompt engineering, generative AI, and ML engineering."
        }
      ]
    }
  ];

  // Auto cycle tabs every 7 seconds when not hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setTimeout(() => {
      const currentIndex = pillars.findIndex((p) => p.id === activeTab);
      const nextIndex = (currentIndex + 1) % pillars.length;
      setActiveTab(pillars[nextIndex].id);
    }, 7000);
    return () => clearTimeout(timer);
  }, [activeTab, isHovered, pillars]);

  // Center active tab pill in horizontal scroll on mobile
  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const container = document.getElementById("community-tab-pills-container");
    const activeEl = document.getElementById(`community-tab-pill-${id}`);
    if (container && activeEl) {
      const containerRect = container.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();
      const relativeLeft = activeRect.left - containerRect.left + container.scrollLeft;
      const targetScrollLeft = relativeLeft - (containerRect.width / 2) + (activeRect.width / 2);

      container.scrollTo({
        left: Math.max(0, targetScrollLeft),
        behavior: "smooth"
      });
    }
  };

  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  return (
    <section
      id="overview"
      className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              COLLABORATIVE TALENT NETWORK
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              Community <span className="text-rose-500">Ecosystem</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg font-normal leading-relaxed">
              Connect with peer practitioners, explore university research programs, discover global talent, and co-create open source frameworks.
            </p>
          </div>
        </Reveal>

        {/* Tab Pills Selector - Exactly the 5 requested tabs */}
        <div className="w-full flex justify-center mb-12">
          <div
            id="community-tab-pills-container"
            className="w-full max-w-full overflow-x-auto scrollbar-hide py-2 px-1"
          >
            <div className="flex items-center gap-1.5 sm:gap-2 mx-auto w-max bg-zinc-950/80 backdrop-blur-xl border border-white/10 p-1.5 sm:p-2 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              {pillars.map((pillar) => (
                <button
                  key={pillar.id}
                  id={`community-tab-pill-${pillar.id}`}
                  onClick={() => handleTabClick(pillar.id)}
                  className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all duration-300 border flex items-center gap-2 ${
                    activeTab === pillar.id
                      ? "bg-rose-600 border-rose-600 text-white shadow-[0_4px_20px_rgba(225,29,72,0.4)]"
                      : "bg-transparent border-transparent text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {pillar.icon}
                  <span>{pillar.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Grid: Left Tall Big Card + Right 6-Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Left Tall Big Card (with Explore solution button linking to respective page) */}
          <Reveal className="lg:col-span-1 h-full">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-rose-500/40 p-8 flex flex-col justify-between h-full min-h-[460px] bg-gradient-to-br from-zinc-950/95 via-[#0a0506]/95 to-[#0f0709]/95 group/tall backdrop-blur-md transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              {/* Internal decorative glowing meshes */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-rose-600/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-orange-600/5 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />

              {/* Dynamic Abstract Background Image for Left Card */}
              {pillars.map((p) => (
                <img
                  key={p.id}
                  src={p.bgImage}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover mix-blend-screen pointer-events-none transition-opacity duration-700 ease-in-out ${
                    activeTab === p.id ? "opacity-35" : "opacity-0"
                  }`}
                  loading="lazy"
                />
              ))}

              {/* Card top details */}
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center mb-6 text-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.2)]">
                  {currentPillar.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight mb-3 group-hover/tall:text-rose-400 transition-colors">
                  {currentPillar.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mt-2">
                  {currentPillar.subtitle}
                </p>
              </div>

              {/* Big Card Link Button: Explore solution -> Respective Sub-Page URL */}
              <div className="relative z-10 mt-8">
                <Link
                  href={currentPillar.href}
                  className="gap-2.5 w-full inline-flex items-center justify-center px-6 py-4 rounded-xl text-sm font-semibold tracking-wide bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-500 hover:to-rose-400 text-white transition-all duration-300 shadow-[0_4px_24px_rgba(225,29,72,0.4)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  Explore solution
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Right Cards Grid (Small cards with NO navigation button, showing 2-line description on hover) */}
          <div className="lg:col-span-3 min-h-[460px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-full"
              >
                {currentPillar.capabilities.map((item) => (
                  <div
                    key={item.name}
                    className="group/card flex flex-col justify-between bg-zinc-950/40 border border-white/5 hover:border-rose-500/30 hover:bg-zinc-950/80 rounded-2xl p-6 sm:p-7 transition-all duration-300 min-h-[190px] md:min-h-[200px] h-full relative overflow-hidden backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] cursor-default select-none hover:-translate-y-1"
                  >
                    {/* Blurred background artwork image */}
                    <img
                      src={currentPillar.bgImage}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-15 blur-md pointer-events-none mix-blend-screen scale-110 group-hover/card:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Subtle color highlight glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 via-rose-600/0 to-rose-600/15 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Top Capability Title */}
                    <div className="relative z-10 transition-transform duration-300 group-hover/card:-translate-y-0.5">
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.6)] group-hover/card:scale-125 transition-transform" />
                        <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 group-hover/card:text-rose-400 transition-colors">
                          Pillar
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover/card:text-rose-300 transition-colors">
                        {item.name}
                      </h4>
                    </div>

                    {/* Short 2-line description visible smoothly on hover */}
                    <div className="relative z-10 mt-auto pt-3">
                      <p className="text-xs sm:text-[13px] text-zinc-400 font-normal leading-relaxed line-clamp-2 transition-all duration-300 opacity-90 sm:opacity-0 sm:group-hover/card:opacity-100 sm:translate-y-1 sm:group-hover/card:translate-y-0 group-hover/card:text-zinc-200">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
