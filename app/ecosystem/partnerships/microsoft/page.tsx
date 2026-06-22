"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Cpu,
  Database,
  Shield,
  Briefcase,
  Users,
  Terminal,
  Sparkles,
  Layout,
  Lock,
  Workflow,
  LineChart,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

export default function MicrosoftAllianceHub() {
  // 9. Industry Solutions Tab State
  const [activeIndustry, setActiveIndustry] = useState("Healthcare");

  // 14. FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // 1. Hero Highlights
  const heroHighlights = [
    "Microsoft Solutions Partner",
    "Azure Cloud Expertise",
    "AI & Data Modernization",
    "Enterprise Security",
    "Global Delivery Capability"
  ];

  // 2. Stats
  const stats = [
    { value: "50+", label: "Azure Projects" },
    { value: "10+", label: "Azure Certified Engineers" },
    { value: "24x7", label: "Managed Support" },
    { value: "99.95%", label: "Availability Targets" }
  ];

  // 3. Core Competencies
  const competencies = [
    {
      title: "Azure Cloud",
      desc: "Architecting secure landing zones, enterprise migrations, and dynamic auto-scaling clusters.",
      icon: <Cloud className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Microsoft AI",
      desc: "Deploying secure, isolated Azure OpenAI models, cognitive searches, and custom Copilots.",
      icon: <Cpu className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Data & Analytics",
      desc: "Unifying telemetry, warehousing, and event ingestion utilizing Microsoft Fabric and Synapse.",
      icon: <Database className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Modern Workplace",
      desc: "Optimizing employee workflows via low-code Power Platform and Teams integrations.",
      icon: <Layout className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Security & Compliance",
      desc: "Securing identity, endpoints, and cloud infrastructures using Sentinel and Entra ID.",
      icon: <Shield className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Business Applications",
      desc: "Streamlining enterprise operational workflows with customized CRM/ERP connections.",
      icon: <Briefcase className="w-6 h-6 text-rose-500" />
    }
  ];

  // 4. Azure Transformation Services
  const azureServices = [
    { title: "Azure Migration", desc: "Rehost, replatform, or refactor legacy server stacks into Azure securely." },
    { title: "Landing Zone Setup", desc: "Establish multi-subscription guardrails, network topology, and governance." },
    { title: "Cloud Architecture", desc: "Design resilient, highly available system environments optimized for performance." },
    { title: "AKS Kubernetes", desc: "Deploy containerized microservices managed via auto-scaling AKS clusters." },
    { title: "Azure DevOps", desc: "Build automated GitOps CI/CD pipelines, package management, and test cycles." },
    { title: "Managed Azure Operations", desc: "Sustained patch management, monitoring, backup drills, and cost optimization." }
  ];

  // 5. Microsoft AI & Copilot
  const aiSolutions = [
    { title: "Azure OpenAI", desc: "Private enterprise instances of GPT-4, DALL-E, and Embeddings." },
    { title: "Microsoft Copilot", desc: "Custom extension packages tailored to business operations workflows." },
    { title: "AI Assistants", desc: "Dedicated conversational agents mapped directly to corporate databases." },
    { title: "Knowledge Search", desc: "Semantic indexing and Vector search models across enterprise docs." },
    { title: "Document Intelligence", desc: "Automate high-throughput structured data extractions from legacy paperwork." },
    { title: "AI Automation", desc: "Integrate LLM reasoning pipelines into repetitive server processing cycles." }
  ];

  // 6. Microsoft Data Platform
  const dataPlatform = [
    { title: "Microsoft Fabric", desc: "Unified analytics platform connecting data lakes directly to business teams." },
    { title: "Power BI", desc: "Real-time dashboard analytics, interactive reporting, and corporate data stories." },
    { title: "Azure Synapse", desc: "Enterprise data warehousing and serverless big data telemetry processing." },
    { title: "Azure Data Factory", desc: "High-scale serverless data integration and pipeline orchestrations (ETL)." },
    { title: "SQL Server Modernization", desc: "Migrate legacy on-premises databases to Azure SQL Managed Instances." },
    { title: "Data Governance", desc: "Enforce organizational compliance, cataloging, and security with Microsoft Purview." }
  ];

  // 7. Security & Compliance
  const securityStack = [
    { title: "Microsoft Defender", desc: "Comprehensive protection across endpoints, cloud systems, and identities." },
    { title: "Microsoft Sentinel", desc: "Cloud-native SIEM/SOAR system for enterprise-wide threat detection." },
    { title: "Identity Management", desc: "Enforce multi-factor access and conditional policies utilizing Microsoft Entra ID." },
    { title: "Zero Trust Architecture", desc: "Strict verification architectures protecting all resource segments." },
    { title: "Compliance Audits", desc: "Verify system configurations against ISO 27001, SOC2, and GDPR baselines." },
    { title: "Security Operations", desc: "24/7 endpoint telemetry monitoring, triage processes, and remediation runs." }
  ];

  // 8. Modern Workplace
  const modernWorkplace = [
    { title: "Microsoft 365", desc: "Enterprise office applications integrated natively with cloud productivity systems." },
    { title: "Teams Collaboration", desc: "Custom communication hubs, app extensions, and system notifications integration." },
    { title: "SharePoint", desc: "Secure intranet portals, document management repositories, and wiki directories." },
    { title: "Power Platform", desc: "Low-code application builder suite optimized for quick internal rollouts." },
    { title: "Power Apps", desc: "Custom operational mobile and web utility applications mapped to cloud datasets." },
    { title: "Power Automate", desc: "Robotic process automation flows streamlining legacy enterprise work queues." }
  ];

  // 9. Industry Accelerators Data
  const industries = [
    {
      name: "Healthcare",
      challenge: "Strict HIPAA compliance regulations, fragmented patient records, and slow electronic medical system networks.",
      solution: "Deploy secure Azure Health Data Services to integrate records via FHIR API, monitored with Microsoft Sentinel.",
      outcome: "99.99% compliance adherence, 40% faster response times, and unified clinical system views."
    },
    {
      name: "Financial Services",
      challenge: "Real-time transaction fraud, legacy core banking pipelines, and high customer churn rates.",
      solution: "Implement Azure Synapse and AI anomaly detection models to process transactional data lakes at sub-second speeds.",
      outcome: "35% decrease in fraud detection lag and advanced predictive model scores."
    },
    {
      name: "Retail",
      challenge: "Supply chain disruptions, inaccurate inventory catalogs, and impersonal e-commerce marketing.",
      solution: "Unify POS systems using Microsoft Fabric and construct automated Copilot recommenders using Azure OpenAI.",
      outcome: "25% boost in average shopping cart size and real-time national stock alignment."
    },
    {
      name: "Manufacturing",
      challenge: "High machinery downtime costs, siloed factory IoT metrics, and inefficient resource planning.",
      solution: "Install Azure IoT Hub streams connecting machinery telemetry to predictive maintenance databases in real time.",
      outcome: "30% reduction in unplanned floor stops and extended hardware lifecycles."
    },
    {
      name: "Public Sector",
      challenge: "Outdated legacy service portals, budget restrictions, and strict digital accessibility standards.",
      solution: "Migrate client systems onto Azure Government Cloud zones and automate portal answers with AI assistants.",
      outcome: "50% lower application hosting costs and streamlined citizen query routing."
    },
    {
      name: "Technology",
      challenge: "Scaling app backends dynamically, dev team friction, and security gaps in code repositories.",
      solution: "Introduce Github Enterprise, Azure DevOps pipelines, and AKS Kubernetes clusters.",
      outcome: "4x quicker deployment frequencies and automated security scans during builds."
    }
  ];

  // 10. Success Stories
  const successStories = [
    {
      title: "Azure Migration",
      subtitle: "Enterprise FinTech Replatforming",
      challenge: "A legacy financial firm suffered from high hosting costs and unreliable hardware failover drills on local servers.",
      solution: "Architected a secure multi-region Azure Landing Zone, migrating 120+ microservices to AKS with automated database backups.",
      result: "45% reduction in yearly infrastructure expenditure and zero downtime recorded during regional switch drills."
    },
    {
      title: "AI Implementation",
      subtitle: "Enterprise Legal Document Copilot",
      challenge: "Contracts team spent thousands of operational hours manually verifying regulatory clause matches across historical PDF records.",
      solution: "Deployed a secure Azure OpenAI instance connected to Azure AI Search, building a custom clause comparison web assistant.",
      result: "90% faster document audit turnaround times, freeing legal experts to focus on final approvals."
    },
    {
      title: "Power BI Analytics",
      subtitle: "Global Retail Inventory Insights",
      challenge: "Siloed dashboard datasets led to incorrect regional stock reports, causing warehouse bottlenecks and sales losses.",
      solution: "Ingested transaction events into Microsoft Fabric, powering automated real-time Power BI reporting models.",
      result: "Eliminated out-of-stock events for top-selling items and optimized nationwide warehouse delivery schedules."
    },
    {
      title: "Security Transformation",
      subtitle: "Zero Trust Health System Defense",
      challenge: "A multi-hospital network faced a spike in targeted phishing attacks and device security vulnerabilities.",
      solution: "Configured unified Microsoft Defender protection across 15,000 devices and deployed Sentinel SIEM dashboards.",
      result: "98% decrease in cyber threat response times, successfully stopping malware execution at the host level."
    }
  ];

  // 11. Certifications
  const certifications = [
    { name: "Azure Administrator", image: "/assets/ecosystem/microsofr-awards/image 126.png" },
    { name: "Azure Architect", image: "/assets/ecosystem/microsofr-awards/image 123.png" },
    { name: "Azure Developer", image: "/assets/ecosystem/microsofr-awards/image 124.png" },
    { name: "Azure Security Engineer", image: "/assets/ecosystem/microsofr-awards/image 125.png" },
    { name: "Data Engineer", image: "/assets/ecosystem/microsofr-awards/image 127.png" },
    { name: "AI Engineer", image: "/assets/ecosystem/microsofr-awards/image 128.png" }
  ];

  // 12. Tech Ecosystem
  const techEcosystem = [
    "Azure", "AKS", "Azure OpenAI", "Power BI", "Fabric",
    "Defender", "Sentinel", "Entra ID", "DevOps", "GitHub Enterprise"
  ];

  // 13. Delivery Framework
  const deliverySteps = [
    { phase: "Assess", desc: "Audit existing software catalogs, security setups, and calculate Azure cloud migration cost savings." },
    { phase: "Design", desc: "Draft landing zone plans, security governance policies, and target architecture blueprints." },
    { phase: "Migrate", desc: "Execute non-disruptive pilot moves, configure data synchronizations, and cut over services." },
    { phase: "Optimize", desc: "Fine-tune resource sizing, cloud database query speeds, and cloud spending metrics." },
    { phase: "Secure", desc: "Enable Entra access policies, deploy Defender agents, and run penetration drills." },
    { phase: "Operate", desc: "Establish 24/7 SRE monitoring response models, system patches, and cloud dashboard reports." }
  ];

  // 14. FAQ
  const faqs = [
    {
      q: "Why Microsoft Azure?",
      a: "Azure provides unparalleled integration with enterprise core frameworks, hybrid cloud hosting capacities, industry-leading compliance registries, and the absolute gold standard in Generative AI via Azure OpenAI."
    },
    {
      q: "How does Azure compare to AWS?",
      a: "Both platforms offer extensive, resilient infrastructure. However, Azure stands out for native Windows and SQL server support, enterprise active directory syncs, and unified business application environments."
    },
    {
      q: "Do you provide managed services?",
      a: "Yes, Devopstrio offers around-the-clock Cloud Ops monitoring, patching, performance tuning, and backup operations for your entire Azure infrastructure."
    },
    {
      q: "Can you migrate legacy applications?",
      a: "Absolutely. Our teams analyze, refactor, and migrate complex legacy software stacks using the Azure Cloud Adoption Framework to ensure smooth migration with minimal disruption."
    },
    {
      q: "Do you build AI solutions with Azure OpenAI?",
      a: "Yes, we specialize in building customized RAG (Retrieval-Augmented Generation) assistants, cognitive document analytics, and secure chatbot tools in compliance with strict privacy guidelines."
    },
    {
      q: "What Entra ID (Azure AD) security policies do you configure?",
      a: "We set up Zero Trust architectures, Multi-Factor Authentication (MFA), Conditional Access policies, role-based access control (RBAC), and identity logs tracking within Azure Sentinel."
    },
    {
      q: "How do you optimize Azure costs for large enterprises?",
      a: "We utilize Azure Advisor recommendations, configure auto-scaling rules for VMs, schedule database shutdown patterns during off-hours, and leverage Azure Reserved Instances and hybrid benefit licenses."
    },
    {
      q: "What is Azure Kubernetes Service (AKS) and how do you implement it?",
      a: "AKS is Microsoft's managed Kubernetes engine. We construct CI/CD pipelines using GitHub Actions to deploy containerized microservices onto AKS, with monitoring integrated via Azure Monitor."
    },
    {
      q: "Do you support hybrid cloud setups using Azure Arc?",
      a: "Yes. We configure Azure Arc to extend Azure management and services to non-Azure, on-premises, or multi-cloud servers, allowing unified policy enforcement and telemetry audits."
    },
    {
      q: "What is your disaster recovery SLA for Azure infrastructures?",
      a: "We build multi-region replication architectures using Azure Site Recovery and backup solutions, targeting RTOs of under 1 hour and RPOs of under 15 minutes for critical databases."
    }
  ];

  // 15. Related Partnerships
  const relatedPartnerships = [
    { name: "AWS Partnership", desc: "Amazon Web Services cloud enablement & DevOps systems.", href: "/ecosystem/partnerships/aws" },
    { name: "Google Cloud Partnership", desc: "Next-gen GCP data warehousing and predictive AI models.", href: "/ecosystem/partnerships/google-cloud" },
    { name: "Oracle Partnership", desc: "Database modernization and enterprise ERP database migrations.", href: "/ecosystem/partnerships/oracle" },
    { name: "ServiceNow Alliance", desc: "Automated IT service workflows and digital workforce modules.", href: "/ecosystem/partnerships/servicenow" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/ecosystem/bg-cloud.png"
            alt="Microsoft Alliance background"
            className="w-full h-full object-cover object-center opacity-100 select-none pointer-events-none scale-[1.02]"
          />
          {/* Only a dark radial circle in the center behind the text */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_45%,transparent_75%)] pointer-events-none" />
          {/* Bottom shadow fade to blend with the black page background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-20 flex flex-col items-center text-center">

          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              Microsoft Strategic Alliance
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white max-w-5xl mb-6">
              Microsoft Alliance <span className="text-rose-500">Ecosystem Hub</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2} className="max-w-3xl">
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold mb-8">
              Accelerating Cloud, AI, Data & Enterprise Transformation through Microsoft Technologies.
            </p>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Talk to Azure Expert
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <a
              href="#overview"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Microsoft Services
            </a>
          </Reveal>

        </div>
      </section>

      {/* 2. ALLIANCE OVERVIEW */}
      <section id="overview" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <div className="lg:col-span-6">
              <Reveal className="text-left">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  ALLIANCE VALUE
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-6 text-white">
                  Strategic Partnership <span className="text-rose-500">Overview</span>
                </h2>
                <p className="text-zinc-350 text-sm md:text-base leading-relaxed font-bold mb-8">
                  Devopstrio and Microsoft work together to help enterprises modernize applications, migrate workloads to Azure, implement AI solutions, and strengthen cybersecurity.
                </p>
                <div className="h-[1px] bg-zinc-900 w-full mb-8" />
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-bold">
                  Through customized architectural blueprints and verified deployment methodologies, we reduce operational migration risk and maximize resource efficiency in the cloud.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-6 select-none">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-8 bg-zinc-950/50 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300 text-left group"
                  >
                    <div className="text-3xl md:text-4xl lg:text-5xl font-black text-rose-500 tracking-tighter mb-2 font-mono group-hover:scale-105 transition-transform duration-300 origin-left">
                      {stat.value}
                    </div>
                    <div className="text-[10px] md:text-xs font-mono text-zinc-400 uppercase tracking-widest leading-snug font-bold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE COMPETENCIES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ECOSYSTEM CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Core <span className="text-rose-500">Competencies</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold">
              Comprehensive technical capabilities mapped directly to Microsoft systems.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competencies.map((c, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300 min-h-[200px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 border-b border-zinc-900/60 pb-4">
                    <h4 className="text-base font-bold text-white uppercase tracking-wider">{c.title}</h4>
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {c.icon}
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-350 font-bold leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AZURE CLOUD SERVICES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              AZURE MIGRATION & SRE
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Azure <span className="text-rose-500">Transformation Services</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {azureServices.map((service, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block mb-2 font-bold">0{idx + 1}</span>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{service.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MICROSOFT AI & COPILOT */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              GENERATIVE AI SOLUTIONS
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Enterprise <span className="text-rose-500">AI Solutions</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiSolutions.map((sol, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{sol.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DATA & ANALYTICS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              BUSINESS DATA INTELLIGENCE
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Data & <span className="text-rose-500">Analytics</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataPlatform.map((d, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <LineChart className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{d.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECURITY & COMPLIANCE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ZERO TRUST SECURITY
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Microsoft <span className="text-rose-500">Security Stack</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityStack.map((sec, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Lock className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{sec.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{sec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. MODERN WORKPLACE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              COLLABORATIVE ENGINEERING
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Digital Workplace <span className="text-rose-500">Transformation</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modernWorkplace.map((w, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Workflow className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{w.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRY SOLUTIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              TAILORED INDUSTRY EXPERTISES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Industry <span className="text-rose-500">Accelerators</span>
            </h2>
          </Reveal>

          {/* Industry Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 select-none">
            {industries.map((ind) => (
              <button
                key={ind.name}
                onClick={() => setActiveIndustry(ind.name)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 border ${activeIndustry === ind.name
                    ? "bg-rose-600 text-white border-rose-600 shadow-md shadow-rose-600/10"
                    : "bg-zinc-950 text-zinc-400 border-zinc-900 hover:text-white"
                  }`}
              >
                {ind.name}
              </button>
            ))}
          </div>

          {/* Active Industry Panel */}
          {industries.map((ind) => {
            if (ind.name !== activeIndustry) return null;
            return (
              <div
                key={ind.name}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 lg:p-12 transition-all duration-500 animate-fadeIn"
              >
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block mb-3 font-bold">CHALLENGE</span>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-snug">{ind.name} Roadblocks</h3>
                    <p className="text-zinc-300 text-xs md:text-sm leading-relaxed font-bold">{ind.challenge}</p>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block mb-3 font-bold">SOLUTION</span>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-snug">Our Azure blueprint</h3>
                    <p className="text-zinc-300 text-xs md:text-sm leading-relaxed font-bold">{ind.solution}</p>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block mb-3 font-bold">OUTCOME</span>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-snug">Client metric achievements</h3>
                    <p className="text-zinc-300 text-xs md:text-sm leading-relaxed font-bold">{ind.outcome}</p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* 10. SUCCESS STORIES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CASE STUDIES
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Customer <span className="text-rose-500">Outcomes</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300"
              >
                <div>
                  <span className="text-[10px] font-mono text-rose-500 tracking-wider uppercase font-bold block mb-1">
                    {story.title}
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-white mb-6 tracking-wide">
                    {story.subtitle}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] font-mono text-rose-500 uppercase tracking-wider block mb-1 font-bold">Challenge</span>
                      <p className="text-xs text-zinc-350 leading-relaxed font-bold">{story.challenge}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-rose-500 uppercase tracking-wider block mb-1 font-bold">Solution</span>
                      <p className="text-xs text-zinc-350 leading-relaxed font-bold">{story.solution}</p>
                    </div>
                    <div className="pt-2 border-t border-zinc-900/80">
                      <span className="text-[9px] font-mono text-rose-500 uppercase tracking-wider block mb-1 font-bold">Result</span>
                      <p className="text-xs text-zinc-300 font-bold leading-relaxed">{story.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. MICROSOFT CERTIFICATIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              VERIFIED EXPERTISE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Certified <span className="text-rose-500">Excellence</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold">
              Highly credentialed engineering teams certified directly by Microsoft.
            </p>
          </Reveal>

          {/* Badge Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col items-center justify-center bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/20 transition-all duration-300 text-center gap-4 group"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-2 relative group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain filter brightness-95 contrast-105"
                  />
                </div>
                <h4 className="text-xs md:text-sm font-bold text-zinc-350 group-hover:text-rose-500 transition-colors leading-snug min-h-[40px] flex items-center justify-center">
                  {cert.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. TECHNOLOGY ECOSYSTEM */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              MICROSOFT TECHNOLOGIES WE USE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Technology <span className="text-rose-500">Ecosystem</span>
            </h2>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto select-none">
            {techEcosystem.map((tech) => (
              <div
                key={tech}
                className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. DELIVERY FRAMEWORK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              OUR STEP-BY-STEP PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Microsoft Delivery <span className="text-rose-500">Methodology</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {deliverySteps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl p-6 relative group overflow-hidden"
              >
                <div className="text-[28px] font-black text-rose-500/10 font-mono tracking-tighter leading-none mb-3">
                  0{idx + 1}
                </div>
                <h4 className="text-sm md:text-base font-bold text-white uppercase tracking-wider mb-2">{step.phase}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            <div className="lg:col-span-5">
              <Reveal className="text-left sticky top-28">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  ALLIANCE QUESTIONS
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white mb-5">
                  Frequently Asked <span className="text-rose-500">Questions</span>
                </h2>
                <p className="text-zinc-455 text-xs md:text-sm font-bold max-w-md">
                  Everything you need to know about our custom Microsoft Azure implementation and consulting models.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-col gap-4 select-none">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-zinc-950/50 border border-zinc-900 hover:border-rose-500/10 rounded-2xl overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm md:text-base text-white uppercase tracking-wider"
                      >
                        {faq.q}
                        <ChevronDown
                          className={`w-4 h-4 text-zinc-550 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180 text-rose-500" : ""
                            }`}
                        />
                      </button>

                      <div
                        className={`transition-all duration-350 ease-in-out overflow-hidden ${isOpen ? "max-h-[200px] border-t border-zinc-900/60" : "max-h-0"
                          }`}
                      >
                        <p className="p-6 text-xs md:text-sm text-zinc-400 leading-relaxed font-bold">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 15. RELATED PARTNERSHIPS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              EXPLORE OTHER NETWORKS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Related <span className="text-rose-500">Partnerships</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPartnerships.map((partner) => (
              <Link
                key={partner.name}
                href={partner.href}
                className="group flex flex-col justify-between p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 min-h-[160px]"
              >
                <div>
                  <h4 className="text-sm md:text-base font-bold text-white uppercase tracking-wider mb-2 flex items-center justify-between">
                    {partner.name}
                    <ChevronRight className="w-4 h-4 text-zinc-650 group-hover:translate-x-1 group-hover:text-rose-500 transition-all" />
                  </h4>
                  <p className="text-xs text-zinc-400 font-bold leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 16. FINAL CTA */}
      <section className="relative w-full py-32 bg-[#030303] overflow-hidden text-center">
        {/* Ambient background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10 flex flex-col items-center">

          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              GET STARTED TODAY
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Ready to Build on <span className="text-rose-500">Microsoft?</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed max-w-xl mb-10 font-bold">
              Whether you're migrating to Azure, building AI solutions, or modernizing enterprise applications, our Microsoft specialists can help.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Schedule Consultation
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Azure Team
            </Link>
          </Reveal>

        </div>
      </section>

    </main>
  );
}
