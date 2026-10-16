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
  href?: string;
}

interface PillarDetails {
  id: string;
  name: string;
  subtitle: string;
  href: string;
  icon: React.ReactNode;
  capabilities: CapabilityItem[];
  toolsLabel: string;
  tools: string[];
}

const pillarBgImages: Record<string, string> = {
  ai: "/webp/assets/ecosystem/grid/technology-stack-page_categories-Grid/Generated-Design.webp",
  cloud: "/webp/assets/ecosystem/grid/technology-stack-page_categories-Grid/Generated-Design-1.webp",
  software: "/webp/assets/ecosystem/grid/technology-stack-page_categories-Grid/Generated-Design-2.webp",
  data: "/webp/assets/ecosystem/grid/technology-stack-page_categories-Grid/Generated-Design-3.webp",
  devops: "/webp/assets/ecosystem/grid/technology-stack-page_categories-Grid/Generated-Design-4.webp",
  security: "/webp/assets/ecosystem/grid/technology-stack-page_categories-Grid/Generated-Design-5.webp",
  platform: "/webp/assets/ecosystem/grid/technology-stack-page_categories-Grid/Generated-Design-6.webp",
  quality: "/webp/assets/ecosystem/grid/technology-stack-page_categories-Grid/Generated-Design-7.webp",
  emerging: "/webp/assets/ecosystem/grid/technology-stack-page_categories-Grid/Generated-Design-8.webp",
};

export function TechCapabilities() {
  const [activeTab, setActiveTab] = useState("ai");

  const pillars: PillarDetails[] = [
    {
      id: "ai",
      name: "Artificial Intelligence",
      subtitle: "Building Intelligent Enterprises",
      href: "/ecosystem/technology-stack/artificial-intelligence",
      icon: <Brain size={16} />,
      capabilities: [
        { 
          name: "Generative AI Pipelines", 
          desc: "Deploy state-of-the-art LLMs, custom retrieval engines, and context cache systems.",
          href: "/ecosystem/technology-stack/artificial-intelligence/generative-ai-pipelines"
        },
        { 
          name: "Stateful AI Agents", 
          desc: "Configure multi-agent orchestrations executing multi-step business decisions.",
          href: "/ecosystem/technology-stack/artificial-intelligence/stateful-ai-agents"
        },
        { 
          name: "Deep Machine Learning", 
          desc: "Train neural networks, tune custom parameters, and manage inference loops.",
          href: "/ecosystem/technology-stack/artificial-intelligence/deep-machine-learning"
        },
        { 
          name: "Natural Language Processing (NLP)", 
          desc: "Build sentiment models, text processors, and translation systems.",
          href: "/ecosystem/technology-stack/artificial-intelligence/natural-language-processing"
        },
        { 
          name: "Computer Vision Models", 
          desc: "Deploy object detection, classification pipelines, and image processors.",
          href: "/ecosystem/technology-stack/artificial-intelligence/computer-vision-models"
        },
        { 
          name: "Predictive Analytics", 
          desc: "Predict sales forecasts, identify churn signals, and model trends.",
          href: "/ecosystem/technology-stack/artificial-intelligence/predictive-analytics"
        },
        { 
          name: "MLOps Automation", 
          desc: "Enforce model registry, tracking, and continuous drift detection.",
          href: "/ecosystem/technology-stack/artificial-intelligence/mlops-automation"
        }
      ],
      toolsLabel: "Technologies & Frameworks",
      tools: ["OpenAI", "Google Gemini", "Claude Anthropic", "Cohere", "LangChain", "LlamaIndex", "HuggingFace", "PyTorch", "TensorFlow"]
    },
    {
      id: "cloud",
      name: "Cloud Native",
      subtitle: "Modern Infrastructure at Scale",
      href: "/ecosystem/technology-stack/cloud-native",
      icon: <Cloud size={16} />,
      capabilities: [
        { 
          name: "Cloud Migration Planning", 
          desc: "Re-host, re-platform, and migrate workloads with zero downtime.",
          href: "/ecosystem/technology-stack/cloud-native/cloud-migration-planning"
        },
        { 
          name: "Kubernetes Management", 
          desc: "Orchestrate multi-tenant clusters with high availability and autoscaling.",
          href: "/ecosystem/technology-stack/cloud-native/kubernetes-management"
        },
        { 
          name: "Container Orchestration", 
          desc: "Deploy Docker, Podman, and containerd microservices securely.",
          href: "/ecosystem/technology-stack/cloud-native/container-orchestration"
        },
        { 
          name: "Serverless GPU Scaling", 
          desc: "Optimize dynamic GPU resources for intensive model inference tasks.",
          href: "/ecosystem/technology-stack/cloud-native/serverless-gpu-scaling"
        },
        { 
          name: "Multi-Cloud Architectures", 
          desc: "Build resilient landing zones across AWS, Azure, GCP, and OCI.",
          href: "/ecosystem/technology-stack/cloud-native/multi-cloud-architectures"
        }
      ],
      toolsLabel: "Platforms & Systems",
      tools: ["Microsoft Azure", "Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "Oracle Cloud Infrastructure (OCI)"]
    },
    {
      id: "software",
      name: "Software Engineering",
      subtitle: "Enterprise Application Development",
      href: "/ecosystem/technology-stack/software-engineering",
      icon: <Terminal size={16} />,
      capabilities: [
        { 
          name: "High-Throughput Backends", 
          desc: "Design ultra-fast APIs, microservices, and database models.",
          href: "/ecosystem/technology-stack/software-engineering/high-throughput-backends"
        },
        { 
          name: "Responsive Edge Frontends", 
          desc: "Deploy interactive user interfaces using Next.js and Tailwind.",
          href: "/ecosystem/technology-stack/software-engineering/responsive-edge-frontends"
        },
        { 
          name: "Tamper-Proof Integrations", 
          desc: "Establish secure API connections and token-based authorizations.",
          href: "/ecosystem/technology-stack/software-engineering/tamper-proof-integrations"
        },
        { 
          name: "Cross-Platform Mobile Apps", 
          desc: "Build native mobile experiences using React Native and Flutter.",
          href: "/ecosystem/technology-stack/software-engineering/cross-platform-mobile-apps"
        }
      ],
      toolsLabel: "Frontend, Backend & Mobile",
      tools: ["React / Next.js", "Angular / Vue", "Python / FastAPI", "Node.js / Express", ".NET / Java Spring", "React Native / Flutter", "Swift / Kotlin"]
    },
    {
      id: "data",
      name: "Data Engineering",
      subtitle: "Data-Driven Transformation",
      href: "/ecosystem/technology-stack/data-engineering",
      icon: <Database size={16} />,
      capabilities: [
        { 
          name: "Data Lakes Storage", 
          desc: "Design optimized storage partitions, raw lakes, and clean deltas.",
          href: "/ecosystem/technology-stack/data-engineering/data-lakes-storage"
        },
        { 
          name: "Modern Warehousing Schemas", 
          desc: "Model columnar indexes and warehouse tables for analytics.",
          href: "/ecosystem/technology-stack/data-engineering/modern-warehousing-schemas"
        },
        { 
          name: "Real-Time Streaming Event Buses", 
          desc: "Ingest clickstreams and transactions using Kafka pipelines.",
          href: "/ecosystem/technology-stack/data-engineering/real-time-streaming-event-buses"
        },
        { 
          name: "Analytics Processing", 
          desc: "Compute telemetry metrics, aggregate databases, and build metrics layers.",
          href: "/ecosystem/technology-stack/data-engineering/analytics-processing"
        },
        { 
          name: "Data Compliance & Governance", 
          desc: "Configure catalogs, access controls, and track lineages.",
          href: "/ecosystem/technology-stack/data-engineering/data-compliance-governance"
        }
      ],
      toolsLabel: "Technologies & Toolkits",
      tools: ["Snowflake", "Databricks", "Apache Kafka", "Apache Spark", "Google BigQuery", "Apache Airflow", "dbt models"]
    },
    {
      id: "devops",
      name: "DevOps Toolchain",
      subtitle: "Accelerating Delivery Pipelines",
      href: "/ecosystem/technology-stack/devops-toolchain",
      icon: <Workflow size={16} />,
      capabilities: [
        { 
          name: "Continuous Delivery (CI/CD)", 
          desc: "Automate Git-triggered build cycles and security scans.",
          href: "/ecosystem/technology-stack/devops-toolchain/continuous-delivery-cicd"
        },
        { 
          name: "Declarative Infrastructure as Code (IaC)", 
          desc: "Provision server environments with Terraform and Ansible.",
          href: "/ecosystem/technology-stack/devops-toolchain/declarative-infrastructure-as-code"
        },
        { 
          name: "GitOps Deployments", 
          desc: "Enforce declarative state synchronizations using ArgoCD loops.",
          href: "/ecosystem/technology-stack/devops-toolchain/gitops-deployments"
        },
        { 
          name: "Release Automation", 
          desc: "Deploy canary releases, blue-green pools, and auto-rollbacks.",
          href: "/ecosystem/technology-stack/devops-toolchain/release-automation"
        },
        { 
          name: "Telemetry & Monitoring", 
          desc: "Gather metrics, system health, and custom dashboard alerts.",
          href: "/ecosystem/technology-stack/devops-toolchain/telemetry-monitoring"
        }
      ],
      toolsLabel: "Automation Tools",
      tools: ["GitHub Actions", "Azure DevOps Pipelines", "Jenkins server", "Terraform configurations", "Ansible playbooks", "ArgoCD loops", "Helm packages"]
    },
    {
      id: "security",
      name: "Cybersecurity",
      subtitle: "Secure by Design",
      href: "/ecosystem/technology-stack/cybersecurity",
      icon: <Shield size={16} />,
      capabilities: [
        { 
          name: "Security Assessments", 
          desc: "Audit threat perimeters, networks, and credential boundaries.",
          href: "/ecosystem/technology-stack/cybersecurity/security-assessments"
        },
        { 
          name: "DevSecOps Pipelines", 
          desc: "Inject static scans, vulnerability checks, and container audits.",
          href: "/ecosystem/technology-stack/cybersecurity/devsecops-pipelines"
        },
        { 
          name: "Identity & Access Management (IAM)", 
          desc: "Configure single sign-on, privileges, and MFA policies.",
          href: "/ecosystem/technology-stack/cybersecurity/identity-access-management"
        },
        { 
          name: "Compliance Audits", 
          desc: "Verify controls against SOC2, ISO 27001, HIPAA, and GDPR rules.",
          href: "/ecosystem/technology-stack/cybersecurity/compliance-audits"
        },
        { 
          name: "Zero Trust Architectures", 
          desc: "Enforce segmentations, endpoint checks, and least-privilege logins.",
          href: "/ecosystem/technology-stack/cybersecurity/zero-trust-architectures"
        }
      ],
      toolsLabel: "Security Systems",
      tools: ["Okta", "Keycloak", "Wiz scanning", "Prisma Cloud", "CrowdStrike", "Snyk", "SonarQube SAST"]
    },
    {
      id: "platform",
      name: "Platform Engineering",
      subtitle: "Developer Productivity Platforms",
      href: "/ecosystem/technology-stack/platform-engineering",
      icon: <Layout size={16} />,
      capabilities: [
        { 
          name: "Internal Developer Platforms (IDP)", 
          desc: "Build self-service developer templates to reduce onboarding time.",
          href: "/ecosystem/technology-stack/platform-engineering/internal-developer-platforms"
        },
        { 
          name: "Developer Self-Service Portals", 
          desc: "Configure developer workspaces, consoles, and portals.",
          href: "/ecosystem/technology-stack/platform-engineering/developer-self-service-portals"
        },
        { 
          name: "Golden Path Templates", 
          desc: "Standardize microservice code templates, deployment patterns, and environments.",
          href: "/ecosystem/technology-stack/platform-engineering/golden-path-templates"
        },
        { 
          name: "Environment Automation", 
          desc: "Provision automated sandboxes, staging domains, and test areas.",
          href: "/ecosystem/technology-stack/platform-engineering/environment-automation"
        }
      ],
      toolsLabel: "Productivity Tools",
      tools: ["Backstage", "Kubernetes", "Crossplane Orchestrator", "ArgoCD", "Terraform Enterprise"]
    },
    {
      id: "quality",
      name: "Quality Engineering",
      subtitle: "Continuous Quality Assurance",
      href: "/ecosystem/technology-stack/quality-engineering",
      icon: <CheckSquare size={16} />,
      capabilities: [
        { 
          name: "End-to-End Test Automation", 
          desc: "Write browser testing scripts using Playwright and Cypress.",
          href: "/ecosystem/technology-stack/quality-engineering/end-to-end-test-automation"
        },
        { 
          name: "Performance Load Testing", 
          desc: "Simulate concurrent user peaks using k6 and Apache JMeter.",
          href: "/ecosystem/technology-stack/quality-engineering/performance-load-testing"
        },
        { 
          name: "API Contract Validation", 
          desc: "Enforce API contract parameters, validations, and response schemas.",
          href: "/ecosystem/technology-stack/quality-engineering/api-contract-validation"
        },
        { 
          name: "Integration Security Audits", 
          desc: "Analyze third-party modules, libraries, and external integrations.",
          href: "/ecosystem/technology-stack/quality-engineering/integration-security-audits"
        }
      ],
      toolsLabel: "Testing Frameworks",
      tools: ["Playwright", "Cypress", "Selenium", "Apache JMeter", "k6 load runner", "Postman / Newman"]
    },
    {
      id: "emerging",
      name: "Emerging Technologies",
      subtitle: "Future Innovation",
      href: "/ecosystem/technology-stack/emerging-technologies",
      icon: <Sparkles size={16} />,
      capabilities: [
        { 
          name: "Agentic AI Systems", 
          desc: "Design self-learning multi-agent loops that adapt to operational environments.",
          href: "/ecosystem/technology-stack/emerging-technologies/agentic-ai-systems"
        },
        { 
          name: "Autonomous Robotic Logic", 
          desc: "Develop intelligent control workflows and automated process loops.",
          href: "/ecosystem/technology-stack/emerging-technologies/autonomous-robotic-logic"
        },
        { 
          name: "Digital Twin Frameworks", 
          desc: "Simulate real-world components, sensors, and physical systems.",
          href: "/ecosystem/technology-stack/emerging-technologies/digital-twin-frameworks"
        },
        { 
          name: "Edge Computing", 
          desc: "Deploy light runtimes and data processors to remote devices.",
          href: "/ecosystem/technology-stack/emerging-technologies/edge-computing"
        },
        { 
          name: "Quantum Computing Research", 
          desc: "Explore quantum algorithms, gates, and computing frameworks.",
          href: "/ecosystem/technology-stack/emerging-technologies/quantum-computing-research"
        },
        { 
          name: "Spatial Computing", 
          desc: "Build extended reality, spatial tracking, and interactive models.",
          href: "/ecosystem/technology-stack/emerging-technologies/spatial-computing"
        }
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
            {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CAPABILITY DEEP-DIVE
            </span> */}
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
              Technology <span className="text-rose-500">Framework</span>
            </h2>
            {/* <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed">
              Select a technology pillar to review core architectural capabilities, toolchains, and verified frameworks.
            </p> */}
          </div>
        </Reveal>

        {/* Tab Pills Selector */}
        <div id="tech-tab-pills-container" className="flex items-center gap-2 mb-12 pb-4 overflow-x-auto scrollbar-hide scroll-smooth -mx-6 px-6 md:mx-0 md:px-0 border-b border-zinc-900/60">
          <div className="flex items-center gap-2 bg-zinc-950/80 backdrop-blur-xl border border-white/10 p-2 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
            {pillars.map((pillar) => (
              <button
                key={pillar.id}
                id={`tech-tab-pill-${pillar.id}`}
                onClick={() => setActiveTab(pillar.id)}
                className={`px-6 md:px-7 py-3 md:py-3.5 rounded-full text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-300 border flex items-center gap-2.5 ${
                  activeTab === pillar.id
                    ? "bg-rose-600 border-rose-600 text-white shadow-[0_4px_20px_rgba(225,29,72,0.4)]"
                    : "bg-transparent border-transparent text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {pillar.icon}
                {pillar.name}
              </button>
            ))}
          </div>
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
                <img key={p.id}
                  src={pillarBgImages[p.id]}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover mix-blend-screen pointer-events-none transition-opacity duration-700 ease-in-out ${
                    activeTab === p.id ? "opacity-35" : "opacity-0"
                  }`}
                loading="lazy" />
              ))}

              {/* Card top details */}
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-6 text-rose-500">
                  {currentPillar.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight leading-tight mb-3 group-hover/tall:text-rose-400 transition-colors">
                  {currentPillar.name}
                </h3>
                {/* <span className="text-xs font-mono font-bold text-rose-500 uppercase tracking-wider block mb-6">
                  {currentPillar.subtitle}
                </span> */}

                {/* Verified tool list inside the tall card */}
                {/* <div className="mt-6">
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
                </div> */}
              </div>

              {/* Card bottom button */}
              <div className="relative z-10 mt-8">
                <Link
                  href={currentPillar.href}
                  className="gap-2.5 w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm md:text-base font-semibold tracking-wide bg-rose-600 hover:bg-rose-500 text-white transition-all duration-300 shadow-[0_4px_20px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
                >
                  Explore {currentPillar.name}{" "}
                  <ArrowUpRight
                    size={16}
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
                  <Link
                    key={item.name}
                    href={item.href || currentPillar.href}
                    className="group/card flex flex-col justify-between bg-zinc-950/40 border border-white/5 hover:border-rose-500/25 hover:bg-zinc-950/70 rounded-2xl p-7 md:p-8 transition-all duration-500 min-h-[220px] md:min-h-[230px] h-full relative overflow-hidden backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] cursor-pointer"
                  >
                    {/* Blurred background artwork image */}
                    <img
                      src={pillarBgImages[activeTab]}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-25 blur-md pointer-events-none mix-blend-screen scale-110 group-hover/card:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Subtle color highlight glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 via-rose-600/0 to-rose-600/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Text details — Vertically centered heading with no description */}
                    <div className="relative z-10 my-auto py-2">
                      <h4 className="text-xl md:text-2xl font-semibold text-white tracking-tight leading-snug group-hover/card:text-rose-400 transition-colors">
                        "{item.name}"
                      </h4>
                    </div>

                    {/* Explore Action Button */}
                    <div className="relative z-10 mt-auto pt-4">
                      <div className="inline-flex items-center gap-2 group/link">
                        <span className="w-7 h-7 rounded-full bg-rose-600/10 group-hover/card:bg-rose-600 text-rose-500 group-hover/card:text-white flex items-center justify-center transition-all duration-300">
                          <ChevronRight
                            size={14}
                            className="transition-transform duration-300 group-hover/card:translate-x-0.5"
                          />
                        </span>
                        <span className="text-xs md:text-sm font-semibold text-zinc-300 group-hover/card:text-white transition-colors">
                          Explore
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
