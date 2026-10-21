"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  Users,
  Terminal,
  Layout,
  Activity,
  Shield,
  CheckSquare,
  ArrowUpRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface CapabilityItem {
  name: string;
  desc: string;
}

interface FrameworkPillar {
  id: string;
  name: string;
  subtitle: string;
  href: string;
  icon: React.ReactNode;
  points: CapabilityItem[];
  image: string;
}

export function ExcellenceFramework() {
  const [activeTab, setActiveTab] = useState("culture");
  const [isHovered, setIsHovered] = useState(false);

  // Exactly the 6 requested tabs in order
  const pillars: FrameworkPillar[] = [
    {
      id: "culture",
      name: "Engineering Culture",
      subtitle: "Building High-Performance Autonomous Engineering Teams",
      href: "/ecosystem/engineering-excellence/engineering-culture",
      icon: <Users size={16} />,
      image: "/webp/assets/ecosystem/grid/engineering-excellence-page_categories-Grid/Generated-Design.webp",
      points: [
        {
          name: "Ownership Mindset",
          desc: "Empowering autonomous squads with end-to-end operational accountability from commit to production."
        },
        {
          name: "Continuous Learning",
          desc: "Fostering active guild certifications, tech incubation labs, and engineering leadership tracks."
        },
        {
          name: "Technical Leadership",
          desc: "Steering sound technical governance, architecture radars, and enterprise clean code standards."
        },
        {
          name: "Knowledge Sharing",
          desc: "Encouraging open architecture RFCs, tech brown-bags, and cross-team centralized documentation."
        },
        {
          name: "Innovation Programs",
          desc: "Quarterly internal hackathons and incubation sprints exploring emergent AI and cloud paradigms."
        },
        {
          name: "Engineering Communities",
          desc: "Cross-functional domain guilds scaling architectural patterns and engineering best practices."
        }
      ]
    },
    {
      id: "software",
      name: "Software Engineering",
      subtitle: "Building Scalable, Mission-Critical Digital Products",
      href: "/ecosystem/engineering-excellence/software-engineering",
      icon: <Terminal size={16} />,
      image: "/webp/assets/ecosystem/grid/engineering-excellence-page_categories-Grid/Generated-Design-1.webp",
      points: [
        {
          name: "Full Stack Development",
          desc: "Building ultra-responsive edge web experiences and high-throughput backend services."
        },
        {
          name: "API Engineering",
          desc: "Designing resilient RESTful and GraphQL contracts with strict schema versioning."
        },
        {
          name: "Microservices Design",
          desc: "Architecting decoupled, domain-driven services communicating over asynchronous event buses."
        },
        {
          name: "Event-Driven Systems",
          desc: "Real-time streaming architectures processing high-concurrency event telemetry."
        },
        {
          name: "Enterprise Applications",
          desc: "Building fault-tolerant enterprise web applications engineered for mission-critical uptime."
        },
        {
          name: "Platform Integration",
          desc: "Standardizing tamper-proof tokenized API connectors across enterprise cloud platforms."
        }
      ]
    },
    {
      id: "platform",
      name: "Platform Engineering",
      subtitle: "Accelerating Developer Velocity & Self-Service Automation",
      href: "/ecosystem/engineering-excellence/platform-engineering",
      icon: <Layout size={16} />,
      image: "/webp/assets/ecosystem/grid/engineering-excellence-page_categories-Grid/Generated-Design-2.webp",
      points: [
        {
          name: "Internal Developer Platforms",
          desc: "Custom self-service portals abstracting cloud infrastructure and accelerating developer velocity."
        },
        {
          name: "Self-Service Environments",
          desc: "Instant ephemeral staging sandboxes and test environments provisioned on demand."
        },
        {
          name: "Golden Path Templates",
          desc: "Battle-tested microservice boilerplates with baked-in compliance, CI/CD, and observability."
        },
        {
          name: "Developer Experience (DevEx)",
          desc: "Eliminating developer cognitive friction with unified tooling, CLI automation, and clear docs."
        },
        {
          name: "Infrastructure Bootstrapping",
          desc: "Automated GitOps provisioning of secure container runtimes and cloud network fabrics."
        },
        {
          name: "Developer Portals",
          desc: "Centralized service catalogs, API registries, and system dependency visualizations."
        }
      ]
    },
    {
      id: "sre",
      name: "Site Reliability Engineering",
      subtitle: "Designing Resilient Architectures & High-Availability Operations",
      href: "/ecosystem/engineering-excellence/site-reliability-engineering",
      icon: <Activity size={16} />,
      image: "/webp/assets/ecosystem/grid/engineering-excellence-page_categories-Grid/Generated-Design-5.webp",
      points: [
        {
          name: "Observability & Telemetry",
          desc: "Distributed tracing, centralized log aggregation, and real-time APM telemetry."
        },
        {
          name: "Incident Response Control",
          desc: "Automated paging escalation, blameless post-mortem loops, and self-healing systems."
        },
        {
          name: "Capacity Planning",
          desc: "Predictive resource forecasting and automated autoscaling policies for traffic surges."
        },
        {
          name: "Disaster Recovery",
          desc: "Active-active multi-region failover protocols and continuous backup verification."
        },
        {
          name: "SLA & SLO Monitoring",
          desc: "Error budget management and automated alerting aligned with business reliability targets."
        },
        {
          name: "MTTR Optimization",
          desc: "Telemetry-driven root cause diagnosis reducing mean time to detection and resolution."
        }
      ]
    },
    {
      id: "devsecops",
      name: "DevSecOps",
      subtitle: "Integrating Continuous Security into Every Software Release",
      href: "/ecosystem/engineering-excellence/devsecops",
      icon: <Shield size={16} />,
      image: "/webp/assets/ecosystem/grid/engineering-excellence-page_categories-Grid/Generated-Design-4.webp",
      points: [
        {
          name: "Secure SDLC Validation",
          desc: "Automated security gates verifying static source code, dependencies, and container images."
        },
        {
          name: "Infrastructure Security",
          desc: "Enforcing declarative policy-as-code guardrails across Terraform and cloud landing zones."
        },
        {
          name: "Compliance Automation",
          desc: "Continuous automated evidence gathering for SOC 2, ISO 27001, and HIPAA compliance."
        },
        {
          name: "Vulnerability Management",
          desc: "Automated CVE scanning, container image patching, and real-time risk prioritization."
        },
        {
          name: "Security Monitoring",
          desc: "Centralized SIEM alerting, cloud audit trail logging, and anomaly threat detection."
        },
        {
          name: "Zero-Trust Boundary Design",
          desc: "Strict identity verification, micro-segmented networks, and least-privilege IAM policies."
        }
      ]
    },
    {
      id: "quality",
      name: "Quality Engineering",
      subtitle: "Delivering Production Confidence Through Comprehensive Automation",
      href: "/ecosystem/engineering-excellence/quality-engineering",
      icon: <CheckSquare size={16} />,
      image: "/webp/assets/ecosystem/grid/engineering-excellence-page_categories-Grid/Generated-Design-6.webp",
      points: [
        {
          name: "End-to-End Test Automation",
          desc: "Comprehensive cross-browser regression suites executed within CI/CD pipelines."
        },
        {
          name: "API Contract Validation",
          desc: "Strict request and response schema validation preventing downstream breaking changes."
        },
        {
          name: "Performance Load Testing",
          desc: "Simulating high-concurrency peak transaction loads using distributed test engines."
        },
        {
          name: "Security Verification",
          desc: "Dynamic vulnerability testing and token privilege validation on every build."
        },
        {
          name: "Accessibility Checking",
          desc: "Automated WCAG 2.1 AA audits ensuring inclusive, compliant digital user experiences."
        },
        {
          name: "Release Confidence Gate",
          desc: "Automated test coverage metrics ensuring defect-free enterprise software deployments."
        }
      ]
    }
  ];

  // Smooth scroll active tab pill into view in the horizontal container on user click
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const container = document.getElementById("framework-tabs-container");
    const activeEl = document.getElementById(`framework-tab-${tabId}`);
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
      id="framework"
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
              ENGINEERING EXCELLENCE FRAMEWORK
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              Engineering Excellence <span className="text-rose-500">Framework</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg font-normal leading-relaxed">
              Systematic engineering discipline, developer self-service platforms, and resilient operational standards.
            </p>
          </div>
        </Reveal>

        {/* Tab Pills Selector - Exactly 6 Categories */}
        <div className="w-full flex justify-center mb-12">
          <div
            id="framework-tabs-container"
            className="w-full max-w-full overflow-x-auto scrollbar-hide py-2 px-1"
          >
            <div className="flex items-center gap-1.5 sm:gap-2 mx-auto w-max bg-zinc-950/80 backdrop-blur-xl border border-white/10 p-1.5 sm:p-2 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              {pillars.map((p) => (
                <button
                  key={p.id}
                  id={`framework-tab-${p.id}`}
                  onClick={() => handleTabClick(p.id)}
                  className={`px-3.5 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all duration-300 border flex items-center gap-2 ${
                    activeTab === p.id
                      ? "bg-rose-600 border-rose-600 text-white shadow-[0_4px_20px_rgba(225,29,72,0.4)]"
                      : "bg-transparent border-transparent text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {p.icon}
                  <span>{p.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Left Tall Big Card (Only card with link button to dedicated solution page) */}
          <Reveal className="lg:col-span-1 h-full">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-rose-500/40 p-8 flex flex-col justify-between h-full min-h-[460px] bg-gradient-to-br from-zinc-950/95 via-[#0a0506]/95 to-[#0f0709]/95 group/tall backdrop-blur-md transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              {/* Internal decorative glowing meshes */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-rose-600/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-orange-600/5 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />

              {/* Expanding Image Layer with Glassmorphism */}
              <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover/tall:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none">
                <img
                  src={currentPillar.image}
                  alt={currentPillar.name}
                  className="w-full h-full object-cover scale-110 group-hover/tall:scale-100 transition-transform duration-1000 ease-out opacity-80"
                  loading="lazy"
                />
                
                {/* Frosted Glass Blur Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
                
                {/* Vignette Gradient for depth and text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-white/5 border border-white/5 rounded-[24px]" />
              </div>

              {/* Card top details */}
              <div className="relative z-10 flex flex-col justify-center my-auto">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center mb-6 text-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.2)]">
                  {currentPillar.icon}
                </div>
                <span className="text-4xl font-serif text-rose-500 block mb-2 leading-none opacity-90">“</span>
                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight leading-snug italic mb-4 group-hover/tall:text-rose-300 transition-colors">
                  {currentPillar.subtitle}
                </h3>
                <span className="text-xs md:text-sm font-bold text-rose-500 uppercase tracking-widest block">
                  — {currentPillar.name}
                </span>
              </div>

              {/* Bottom Big Card Link Button */}
              <div className="relative z-10 mt-8">
                <Link
                  href={currentPillar.href}
                  className="gap-2.5 w-full inline-flex items-center justify-center px-6 py-4 rounded-full text-sm font-semibold tracking-wide bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-500 hover:to-rose-400 text-white transition-all duration-300 shadow-[0_4px_24px_rgba(225,29,72,0.4)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  Explore solution
                  <ArrowUpRight size={16} />
                </Link>
              </div>

            </div>
          </Reveal>

          {/* Right Capabilities Grid (Small cards with NO explore button, NO navigation, 2-line description on hover) */}
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
                {currentPillar.points.map((pt) => (
                  <div
                    key={pt.name}
                    className="group/card flex flex-col justify-between bg-zinc-950/40 border border-white/5 hover:border-rose-500/30 hover:bg-zinc-950/80 rounded-2xl p-6 sm:p-7 transition-all duration-300 min-h-[190px] md:min-h-[200px] h-full relative overflow-hidden backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] cursor-default select-none hover:-translate-y-1"
                  >
                    {/* Subtle color highlight glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 via-rose-600/0 to-rose-600/15 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Top Capability Title */}
                    <div className="relative z-10 transition-transform duration-300 group-hover/card:-translate-y-0.5">
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.6)] group-hover/card:scale-125 transition-transform" />
                        <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 group-hover/card:text-rose-400 transition-colors">
                          Pillar Focus
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover/card:text-rose-300 transition-colors">
                        {pt.name}
                      </h4>
                    </div>

                    {/* Short 2-line description visible smoothly on hover */}
                    <div className="relative z-10 mt-auto pt-3">
                      <p className="text-xs sm:text-[13px] text-zinc-400 font-normal leading-relaxed line-clamp-2 transition-all duration-300 opacity-90 sm:opacity-0 sm:group-hover/card:opacity-100 sm:translate-y-1 sm:group-hover/card:translate-y-0 group-hover/card:text-zinc-200">
                        {pt.desc}
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
