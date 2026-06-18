"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Users, Code, Layout, ShieldAlert, CheckSquare, Layers, Award, Activity, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FrameworkPillar {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  pointsTitle: string;
  points: string[];
  subInfoTitle: string;
  subInfo: string[];
}

export function ExcellenceFramework() {
  const [activeTab, setActiveTab] = useState("culture");

  const pillars: FrameworkPillar[] = [
    {
      id: "culture",
      name: "Engineering Culture",
      subtitle: "Building High-Performance Engineering Teams",
      icon: <Users size={16} />,
      pointsTitle: "Focus Areas",
      points: ["Ownership Mindset", "Continuous Learning", "Technical Leadership", "Knowledge Sharing", "Innovation Programs", "Engineering Communities"],
      subInfoTitle: "Culture Programs",
      subInfo: ["Internal Hackathons", "Technical Guilds", "Architecture Reviews", "Learning Platforms"]
    },
    {
      id: "software",
      name: "Software Engineering",
      subtitle: "Building Scalable Digital Products",
      icon: <Code size={16} />,
      pointsTitle: "Capabilities",
      points: ["Full Stack Development", "API Engineering", "Microservices Design", "Event-Driven Systems", "Enterprise Applications"],
      subInfoTitle: "Technology Focus",
      subInfo: ["React", "Next.js", "Node.js", "Python", "FastAPI", ".NET"]
    },
    {
      id: "platform",
      name: "Platform Engineering",
      subtitle: "Accelerating Developer Productivity",
      icon: <Layout size={16} />,
      pointsTitle: "Capabilities",
      points: ["Internal Developer Platforms", "Self-Service Environments", "Golden Path Templates", "Developer Experience"],
      subInfoTitle: "Tooling Stack & Benefits",
      subInfo: ["Kubernetes", "Backstage", "Terraform", "ArgoCD", "Faster Delivery", "Standardized Deployments"]
    },
    {
      id: "sre",
      name: "Site Reliability Engineering",
      subtitle: "Reliability By Design",
      icon: <Activity size={16} />,
      pointsTitle: "Focus Areas & Metrics",
      points: ["Observability & Logging", "Incident Response Control", "Capacity Planning", "Disaster Recovery", "SLA & SLO Monitoring", "MTTR Optimization"],
      subInfoTitle: "Tools",
      subInfo: ["Grafana", "Prometheus", "OpenTelemetry", "Azure Monitor"]
    },
    {
      id: "devsecops",
      name: "DevSecOps",
      subtitle: "Security Integrated Into Every Release",
      icon: <ShieldAlert size={16} />,
      pointsTitle: "Capabilities",
      points: ["Secure SDLC validation", "Infrastructure Security", "Compliance Automation", "Vulnerability Management", "Security Monitoring"],
      subInfoTitle: "Tools & Practices",
      subInfo: ["SAST / DAST scans", "Trivy container scan", "Snyk code audit", "SonarQube gate", "Zero Trust design"]
    },
    {
      id: "quality",
      name: "Quality Engineering",
      subtitle: "Delivering Confidence Through Automation",
      icon: <CheckSquare size={16} />,
      pointsTitle: "Capabilities",
      points: ["Test Automation", "API Contract Validation", "Performance Load Testing", "Security Verification", "Accessibility Checking"],
      subInfoTitle: "Tools & Metrics",
      subInfo: ["Playwright", "Cypress", "Postman", "k6 load runner", "Test coverage SLA", "Release Quality verification"]
    },
    {
      id: "governance",
      name: "Architecture Governance",
      subtitle: "Enterprise Architecture Standards",
      icon: <Layers size={16} />,
      pointsTitle: "Focus Areas",
      points: ["Cloud Architecture reviews", "Security Architecture alignments", "Data Architecture blueprints", "Solution Design templates", "Technical review boards"],
      subInfoTitle: "Governance Pipeline",
      subInfo: ["Design", "Review", "Approval", "Implementation", "Optimization"]
    },
    {
      id: "delivery",
      name: "Delivery Excellence",
      subtitle: "Consistent Delivery Outcomes",
      icon: <Award size={16} />,
      pointsTitle: "Methodologies",
      points: ["Agile Delivery frameworks", "Scrum sprints loops", "Kanban tracking boards", "SAFe scaled structures", "DevOps orchestration"],
      subInfoTitle: "Core Capabilities",
      subInfo: ["Sprint Planning", "Release Management", "Risk Management", "Continuous Improvement"]
    },
    {
      id: "innovation",
      name: "Continuous Innovation",
      subtitle: "Future Innovation Programs",
      icon: <Sparkles size={16} />,
      pointsTitle: "Focus Areas",
      points: ["Architecture reviews", "Engineering labs research", "Internal accelerators", "Reusable code libraries", "Platform blueprint designs", "AI-assisted coding environments"],
      subInfoTitle: "Programs",
      subInfo: ["Technology guilds", "Learning platforms", "Hackathons", "Guild research pipelines"]
    }
  ];

  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  return (
    <section id="framework" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            Delivery Standard
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Engineering Excellence <span className="text-rose-500">Framework</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            Our systematic framework outlining core culture, tooling stacks, and design standards ensuring reliable product delivery.
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
                    : "bg-zinc-950/45 text-zinc-400 border-zinc-900/80 hover:text-zinc-350 hover:bg-zinc-900/40"
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
                  {/* Focus list */}
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

                  {/* Subinfo List */}
                  <div>
                    <span className="block text-[10px] font-mono font-bold text-rose-500 uppercase tracking-widest mb-4">
                      {currentPillar.subInfoTitle}
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {currentPillar.subInfo.map((item) => (
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
