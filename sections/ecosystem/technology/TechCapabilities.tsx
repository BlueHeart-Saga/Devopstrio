"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  Brain,
  Cloud,
  Terminal,
  Database,
  Workflow,
  Shield,
  Layout,
  CheckSquare,
  Sparkles,
  ArrowUpRight,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface CapabilityItem {
  name: string;
  desc: string;
}

interface PillarDetails {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  capabilities: CapabilityItem[];
  toolsLabel: string;
  tools: string[];
}

const pillarBgImages: Record<string, string> = {
  ai: "/assets/ecosystem/grid/technology-stack page_categories Grid/Generated Design.png",
  cloud: "/assets/ecosystem/grid/technology-stack page_categories Grid/Generated Design-1.png",
  software: "/assets/ecosystem/grid/technology-stack page_categories Grid/Generated Design-2.png",
  data: "/assets/ecosystem/grid/technology-stack page_categories Grid/Generated Design-3.png",
  devops: "/assets/ecosystem/grid/technology-stack page_categories Grid/Generated Design-4.png",
  security: "/assets/ecosystem/grid/technology-stack page_categories Grid/Generated Design-5.png",
  platform: "/assets/ecosystem/grid/technology-stack page_categories Grid/Generated Design-6.png",
  quality: "/assets/ecosystem/grid/technology-stack page_categories Grid/Generated Design-7.png",
  emerging: "/assets/ecosystem/grid/technology-stack page_categories Grid/Generated Design-8.png",
};

export function TechCapabilities() {
  const [activeTab, setActiveTab] = useState("ai");

  const pillars: PillarDetails[] = [
    {
      id: "ai",
      name: "Artificial Intelligence",
      subtitle: "Building Intelligent Enterprises",
      icon: <Brain size={16} />,
      capabilities: [
        { name: "Generative AI Pipelines", desc: "Deploy state-of-the-art LLMs, custom retrieval engines, and context cache systems." },
        { name: "Stateful AI Agents", desc: "Configure multi-agent orchestrations executing multi-step business decisions." },
        { name: "Deep Machine Learning", desc: "Train neural networks, tune custom parameters, and manage inference loops." },
        { name: "Natural Language Processing (NLP)", desc: "Build sentiment models, text processors, and translation systems." },
        { name: "Computer Vision Models", desc: "Deploy object detection, classification pipelines, and image processors." },
        { name: "Predictive Analytics", desc: "Predict sales forecasts, identify churn signals, and model trends." },
        { name: "MLOps Automation", desc: "Enforce model registry, tracking, and continuous drift detection." }
      ],
      toolsLabel: "Technologies & Frameworks",
      tools: ["OpenAI", "Google Gemini", "Claude Anthropic", "Cohere", "LangChain", "LlamaIndex", "HuggingFace", "PyTorch", "TensorFlow"]
    },
    {
      id: "cloud",
      name: "Cloud Native",
      subtitle: "Modern Infrastructure at Scale",
      icon: <Cloud size={16} />,
      capabilities: [
        { name: "Cloud Migration Planning", desc: "Re-host, re-platform, and migrate workloads with zero downtime." },
        { name: "Kubernetes Management", desc: "Orchestrate multi-tenant clusters with high availability and autoscaling." },
        { name: "Container Orchestration", desc: "Deploy Docker, Podman, and containerd microservices securely." },
        { name: "Serverless GPU Scaling", desc: "Optimize dynamic GPU resources for intensive model inference tasks." },
        { name: "Multi-Cloud Architectures", desc: "Build resilient landing zones across AWS, Azure, GCP, and OCI." }
      ],
      toolsLabel: "Platforms & Systems",
      tools: ["Microsoft Azure", "Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "Oracle Cloud Infrastructure (OCI)"]
    },
    {
      id: "software",
      name: "Software Engineering",
      subtitle: "Enterprise Application Development",
      icon: <Terminal size={16} />,
      capabilities: [
        { name: "High-Throughput Backends", desc: "Design ultra-fast APIs, microservices, and database models." },
        { name: "Responsive Edge Frontends", desc: "Deploy interactive user interfaces using Next.js and Tailwind." },
        { name: "Tamper-Proof Integrations", desc: "Establish secure API connections and token-based authorizations." },
        { name: "Cross-Platform Mobile Apps", desc: "Build native mobile experiences using React Native and Flutter." }
      ],
      toolsLabel: "Frontend, Backend & Mobile",
      tools: ["React / Next.js", "Angular / Vue", "Python / FastAPI", "Node.js / Express", ".NET / Java Spring", "React Native / Flutter", "Swift / Kotlin"]
    },
    {
      id: "data",
      name: "Data Engineering",
      subtitle: "Data-Driven Transformation",
      icon: <Database size={16} />,
      capabilities: [
        { name: "Data Lakes Storage", desc: "Design optimized storage partitions, raw lakes, and clean deltas." },
        { name: "Modern Warehousing Schemas", desc: "Model columnar indexes and warehouse tables for analytics." },
        { name: "Real-Time Streaming Event Buses", desc: "Ingest clickstreams and transactions using Kafka pipelines." },
        { name: "Analytics Processing", desc: "Compute telemetry metrics, aggregate databases, and build metrics layers." },
        { name: "Data Compliance & Governance", desc: "Configure catalogs, access controls, and track lineages." }
      ],
      toolsLabel: "Technologies & Toolkits",
      tools: ["Snowflake", "Databricks", "Apache Kafka", "Apache Spark", "Google BigQuery", "Apache Airflow", "dbt models"]
    },
    {
      id: "devops",
      name: "DevOps Toolchain",
      subtitle: "Accelerating Delivery Pipelines",
      icon: <Workflow size={16} />,
      capabilities: [
        { name: "Continuous Delivery (CI/CD)", desc: "Automate Git-triggered build cycles and security scans." },
        { name: "Declarative Infrastructure as Code (IaC)", desc: "Provision server environments with Terraform and Ansible." },
        { name: "GitOps Deployments", desc: "Enforce declarative state synchronizations using ArgoCD loops." },
        { name: "Release Automation", desc: "Deploy canary releases, blue-green pools, and auto-rollbacks." },
        { name: "Telemetry & Monitoring", desc: "Gather metrics, system health, and custom dashboard alerts." }
      ],
      toolsLabel: "Automation Tools",
      tools: ["GitHub Actions", "Azure DevOps Pipelines", "Jenkins server", "Terraform configurations", "Ansible playbooks", "ArgoCD loops", "Helm packages"]
    },
    {
      id: "security",
      name: "Cybersecurity",
      subtitle: "Secure by Design",
      icon: <Shield size={16} />,
      capabilities: [
        { name: "Security Assessments", desc: "Audit threat perimeters, networks, and credential boundaries." },
        { name: "DevSecOps Pipelines", desc: "Inject static scans, vulnerability checks, and container audits." },
        { name: "Identity & Access Management (IAM)", desc: "Configure single sign-on, privileges, and MFA policies." },
        { name: "Compliance Audits", desc: "Verify controls against SOC2, ISO 27001, HIPAA, and GDPR rules." },
        { name: "Zero Trust Architectures", desc: "Enforce segmentations, endpoint checks, and least-privilege logins." }
      ],
      toolsLabel: "Security Systems",
      tools: ["Okta", "Keycloak", "Wiz scanning", "Prisma Cloud", "CrowdStrike", "Snyk", "SonarQube SAST"]
    },
    {
      id: "platform",
      name: "Platform Engineering",
      subtitle: "Developer Productivity Platforms",
      icon: <Layout size={16} />,
      capabilities: [
        { name: "Internal Developer Platforms (IDP)", desc: "Build self-service developer templates to reduce onboarding time." },
        { name: "Developer Self-Service Portals", desc: "Configure developer workspaces, consoles, and portals." },
        { name: "Golden Path Templates", desc: "Standardize microservice code templates, deployment patterns, and environments." },
        { name: "Environment Automation", desc: "Provision automated sandboxes, staging domains, and test areas." }
      ],
      toolsLabel: "Productivity Tools",
      tools: ["Backstage", "Kubernetes", "Crossplane Orchestrator", "ArgoCD", "Terraform Enterprise"]
    },
    {
      id: "quality",
      name: "Quality Engineering",
      subtitle: "Continuous Quality Assurance",
      icon: <CheckSquare size={16} />,
      capabilities: [
        { name: "End-to-End Test Automation", desc: "Write browser testing scripts using Playwright and Cypress." },
        { name: "Performance Load Testing", desc: "Simulate concurrent user peaks using k6 and Apache JMeter." },
        { name: "API Contract Validation", desc: "Enforce API contract parameters, validations, and response schemas." },
        { name: "Integration Security Audits", desc: "Analyze third-party modules, libraries, and external integrations." }
      ],
      toolsLabel: "Testing Frameworks",
      tools: ["Playwright", "Cypress", "Selenium", "Apache JMeter", "k6 load runner", "Postman / Newman"]
    },
    {
      id: "emerging",
      name: "Emerging Technologies",
      subtitle: "Future Innovation",
      icon: <Sparkles size={16} />,
      capabilities: [
        { name: "Agentic AI Systems", desc: "Design self-learning multi-agent loops that adapt to operational environments." },
        { name: "Autonomous Robotic Logic", desc: "Develop intelligent control workflows and automated process loops." },
        { name: "Digital Twin Frameworks", desc: "Simulate real-world components, sensors, and physical systems." },
        { name: "Edge Computing", desc: "Deploy light runtimes and data processors to remote devices." },
        { name: "Quantum Computing Research", desc: "Explore quantum algorithms, gates, and computing frameworks." },
        { name: "Spatial Computing", desc: "Build extended reality, spatial tracking, and interactive models." }
      ],
      toolsLabel: "Research Focus Areas",
      tools: ["Multi-Agent swarms", "Wasm Edge runtimes", "Digital Twins pipelines", "Post-Quantum Cryptography"]
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
    const container = document.getElementById("tech-tab-pills-container");
    const activeEl = document.getElementById(`tech-tab-pill-${activeTab}`);
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
    <section id="capabilities" className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Header Section */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CAPABILITY DEEP-DIVE
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Technology <span className="text-rose-500">Framework</span>
            </h2>
            <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed">
              Select a technology pillar to review core architectural capabilities, toolchains, and verified frameworks.
            </p>
          </div>
        </Reveal>

        {/* Tab Pills Selector */}
        <div id="tech-tab-pills-container" className="flex items-center gap-2 mb-12 pb-4 overflow-x-auto scrollbar-hide scroll-smooth -mx-6 px-6 md:mx-0 md:px-0 border-b border-zinc-900/60">
          {pillars.map((pillar) => (
            <button
              key={pillar.id}
              id={`tech-tab-pill-${pillar.id}`}
              onClick={() => setActiveTab(pillar.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 border flex items-center gap-2 ${
                activeTab === pillar.id
                  ? "bg-rose-600 border-rose-600 text-white shadow-[0_4px_20px_rgba(225,29,72,0.35)]"
                  : "bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-900/50 hover:border-zinc-800"
              }`}
            >
              {pillar.name}
            </button>
          ))}
        </div>

        {/* Capabilities Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Left Tall Card (Col 1, Spans entire height / 2 rows on desktop) */}
          <Reveal className="lg:col-span-1 h-full">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-rose-500/30 p-8 flex flex-col justify-between h-full min-h-[480px] bg-gradient-to-br from-zinc-950/90 via-[#0a0506]/90 to-[#0f0709]/90 group/tall backdrop-blur-md transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              {/* Internal decorative glowing meshes */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-rose-600/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-orange-600/5 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />

              {/* Dynamic Abstract Background Image for Left Card */}
              {pillars.map((p) => (
                <img
                  key={p.id}
                  src={pillarBgImages[p.id]}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover mix-blend-screen pointer-events-none transition-opacity duration-700 ease-in-out ${
                    activeTab === p.id ? "opacity-35" : "opacity-0"
                  }`}
                />
              ))}

              {/* Card top details */}
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-6 text-rose-500">
                  {currentPillar.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight mb-3 group-hover/tall:text-rose-400 transition-colors">
                  {currentPillar.name}
                </h3>
                <span className="text-xs font-mono font-bold text-rose-500 uppercase tracking-wider block mb-6">
                  {currentPillar.subtitle}
                </span>

                {/* Verified tool list inside the tall card */}
                <div className="mt-6">
                  <span className="block text-[10px] font-mono font-bold text-rose-500 uppercase tracking-widest mb-4">
                    {currentPillar.toolsLabel}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentPillar.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-white/[0.04] text-[10px] font-mono font-bold text-zinc-350 tracking-wide"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card bottom button */}
              <div className="relative z-10 mt-8">
                <Link
                  href="/contact"
                  className="gap-2 w-fit inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
                >
                  Schedule Strategy Session{" "}
                  <ArrowUpRight
                    size={13}
                  />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Right Capabilities Grid (Col 2-4, 3 Columns x 2 Rows of smaller cards) */}
          <div className="lg:col-span-3 min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full"
              >
                {currentPillar.capabilities.map((item, idx) => (
                  <div
                    key={item.name}
                    className="group/card flex flex-col justify-between bg-zinc-950/30 border border-white/5 hover:border-rose-500/20 hover:bg-zinc-950/60 rounded-2xl p-6 transition-all duration-300 min-h-[200px] h-full relative overflow-hidden backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
                  >
                    {/* Subtle color highlight glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 via-rose-600/0 to-rose-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Text details */}
                    <div>
                      <span className="text-[10px] md:text-xs font-mono text-rose-500 tracking-widest uppercase font-bold block mb-3">
                        CORE CAPABILITY
                      </span>
                      <h4 className="text-lg md:text-xl font-bold text-white mb-3 group-hover/card:text-rose-400 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-sm md:text-base text-zinc-300 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Link action details */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 group/link mt-6 w-fit"
                    >
                      <span className="w-6 h-6 rounded-full bg-rose-600/10 group-hover/link:bg-rose-600 text-rose-500 group-hover/link:text-white flex items-center justify-center transition-all duration-300">
                        <ChevronRight
                          size={11}
                          className="transition-transform duration-300 group-hover/link:translate-x-0.5"
                        />
                      </span>
                      <span className="text-[11px] font-semibold text-zinc-400 group-hover/link:text-zinc-200 transition-colors">
                        Implement Framework
                      </span>
                    </Link>
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
