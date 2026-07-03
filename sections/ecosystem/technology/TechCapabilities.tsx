"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Brain, Cloud, Terminal, Database, Workflow, Shield, Layout, CheckSquare, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PillarDetails {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  capabilities: string[];
  toolsLabel: string;
  tools: string[];
}

export function TechCapabilities() {
  const [activeTab, setActiveTab] = useState("ai");

  const pillars: PillarDetails[] = [
    {
      id: "ai",
      name: "Artificial Intelligence",
      subtitle: "Building Intelligent Enterprises",
      icon: <Brain size={16} />,
      capabilities: ["Generative AI Pipelines", "Stateful AI Agents", "Deep Machine Learning", "Natural Language Processing (NLP)", "Computer Vision Models", "Predictive Analytics", "MLOps Automation"],
      toolsLabel: "Technologies & Frameworks",
      tools: ["OpenAI", "Google Gemini", "Claude Anthropic", "Cohere", "LangChain", "LlamaIndex", "HuggingFace", "PyTorch", "TensorFlow"]
    },
    {
      id: "cloud",
      name: "Cloud Native",
      subtitle: "Modern Infrastructure at Scale",
      icon: <Cloud size={16} />,
      capabilities: ["Cloud Migration Planning", "Kubernetes Management", "Container Orchestration", "Serverless GPU Scaling", "Multi-Cloud Architectures"],
      toolsLabel: "Platforms & Systems",
      tools: ["Microsoft Azure", "Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "Oracle Cloud Infrastructure (OCI)"]
    },
    {
      id: "software",
      name: "Software Engineering",
      subtitle: "Enterprise Application Development",
      icon: <Terminal size={16} />,
      capabilities: ["High-Throughput Backends", "Responsive Edge Frontends", "Tamper-Proof Integrations", "Cross-Platform Mobile Apps"],
      toolsLabel: "Frontend, Backend & Mobile",
      tools: ["React / Next.js", "Angular / Vue", "Python / FastAPI", "Node.js / Express", ".NET / Java Spring", "React Native / Flutter", "Swift / Kotlin"]
    },
    {
      id: "data",
      name: "Data Engineering",
      subtitle: "Data-Driven Transformation",
      icon: <Database size={16} />,
      capabilities: ["Data Lakes Storage", "Modern Warehousing Schemas", "Real-Time Streaming event buses", "Analytics Processing", "Data Compliance & Governance"],
      toolsLabel: "Technologies & Toolkits",
      tools: ["Snowflake", "Databricks", "Apache Kafka", "Apache Spark", "Google BigQuery", "Apache Airflow", "dbt models"]
    },
    {
      id: "devops",
      name: "DevOps Toolchain",
      subtitle: "Accelerating Delivery Pipelines",
      icon: <Workflow size={16} />,
      capabilities: ["Continuous Delivery (CI/CD)", "Declarative Infrastructure as Code (IaC)", "GitOps Deployments", "Release Automation", "Telemetry & Monitoring"],
      toolsLabel: "Automation Tools",
      tools: ["GitHub Actions", "Azure DevOps Pipelines", "Jenkins server", "Terraform configurations", "Ansible playbooks", "ArgoCD loops", "Helm packages"]
    },
    {
      id: "security",
      name: "Cybersecurity",
      subtitle: "Secure by Design",
      icon: <Shield size={16} />,
      capabilities: ["Security Assessments", "DevSecOps pipelines", "Identity & Access Management (IAM)", "Compliance Audits", "Zero Trust Architectures"],
      toolsLabel: "Security Systems",
      tools: ["Okta", "Keycloak", "Wiz scanning", "Prisma Cloud", "CrowdStrike", "Snyk", "SonarQube SAST"]
    },
    {
      id: "platform",
      name: "Platform Engineering",
      subtitle: "Developer Productivity Platforms",
      icon: <Layout size={16} />,
      capabilities: ["Internal Developer Platforms (IDP)", "Developer Self-Service Portals", "Golden Path templates", "Environment Automation"],
      toolsLabel: "Productivity Tools",
      tools: ["Backstage", "Kubernetes", "Crossplane Orchestrator", "ArgoCD", "Terraform Enterprise"]
    },
    {
      id: "quality",
      name: "Quality Engineering",
      subtitle: "Continuous Quality Assurance",
      icon: <CheckSquare size={16} />,
      capabilities: ["End-to-End Test Automation", "Performance Load Testing", "API Contract Validation", "Integration Security Audits"],
      toolsLabel: "Testing Frameworks",
      tools: ["Playwright", "Cypress", "Selenium", "Apache JMeter", "k6 load runner", "Postman / Newman"]
    },
    {
      id: "emerging",
      name: "Emerging Technologies",
      subtitle: "Future Innovation",
      icon: <Sparkles size={16} />,
      capabilities: ["Agentic AI Systems", "Autonomous Robotic Logic", "Digital Twin Frameworks", "Edge Computing", "Quantum Computing Research", "Spatial Computing", "Extended Reality (XR)"],
      toolsLabel: "Research Focus Areas",
      tools: ["Multi-Agent swarms", "Wasm Edge runtimes", "Digital Twins pipelines", "Post-Quantum Cryptography"]
    }
  ];

  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  return (
    <section id="capabilities" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            CAPABILITY DEEP-DIVE
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Technology <span className="text-rose-500">Framework</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            Select a technology pillar to review core architectural capabilities, toolchains, and verified frameworks.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Tab Selectors */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {pillars.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`flex items-center justify-between p-5 md:p-6 rounded-2xl text-left border transition-all duration-300 ${
                  activeTab === p.id
                    ? "bg-rose-500/10 text-rose-500 border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.15)]"
                    : "bg-zinc-950/45 text-zinc-400 border-zinc-900/80 hover:text-zinc-300 hover:bg-zinc-900/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-300 ${
                    activeTab === p.id ? "bg-rose-950/30 border-rose-500/30" : "bg-zinc-900 border-zinc-850"
                  }`}>
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-white uppercase tracking-wider">{p.name}</h4>
                    <span className="text-xs text-zinc-400 font-mono uppercase font-bold">{p.subtitle}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Display Panel */}
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
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">{currentPillar.name}</h3>
                  <span className="text-sm font-mono font-bold text-rose-500 uppercase tracking-wider block">
                    {currentPillar.subtitle}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Capabilities List */}
                  <div>
                    <span className="block text-xs font-mono font-bold text-rose-500 uppercase tracking-widest mb-5">
                      CAPABILITIES
                    </span>
                    <ul className="space-y-4">
                      {currentPillar.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-3 text-sm md:text-base text-zinc-300 font-semibold">
                          <span className="w-2 h-2 rounded-full bg-rose-500 flex-shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools List */}
                  <div>
                    <span className="block text-xs font-mono font-bold text-rose-500 uppercase tracking-widest mb-5">
                      {currentPillar.toolsLabel}
                    </span>
                    <div className="flex flex-wrap gap-3">
                      {currentPillar.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs md:text-sm font-mono font-bold text-zinc-200 uppercase tracking-wider"
                        >
                          {tool}
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
