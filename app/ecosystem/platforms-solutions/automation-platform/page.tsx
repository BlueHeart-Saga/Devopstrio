"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight, Plus, Minus, Database, Cpu, BarChart2,
  Activity, Layers, Sparkles, Server, Workflow, HardDrive, Shield,
  Zap, Lock, Globe, AlertTriangle, ChevronRight, ShieldCheck, EyeOff, Gauge,
  Settings, RefreshCw, ShoppingBag, Factory, BookOpen, Heart, FileText, Sliders,
  Terminal, Box, GitBranch, Key, Users, Command, Network, Monitor, Send, Bell, Cloud
} from "lucide-react";
import Link from "next/link";

// ==========================================
// 2. PLATFORM OVERVIEW (AutomationOverview)
// ==========================================
const AutomationOverview = () => {
  const cards = [
    { title: "Business Process Automation", desc: "Automate approvals, requests, and onboarding workflows seamlessly.", icon: Workflow },
    { title: "DevOps Automation", desc: "Automate CI/CD pipelines, testing, and continuous release orchestration.", icon: GitBranch },
    { title: "Cloud Automation", desc: "Automate cloud scaling, backups, patching, and resource maintenance.", icon: Server },
    { title: "Infrastructure Automation", desc: "Provision environments instantly using Infrastructure as Code (IaC).", icon: Terminal },
    { title: "Workflow Orchestration", desc: "Connect people, systems, and APIs into end-to-end unified workflows.", icon: Network },
    { title: "AI Automation", desc: "Leverage artificial intelligence to classify, route, and optimize operations.", icon: Cpu }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">

        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">AUTOMATE EVERYTHING</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4 uppercase">
              Automate Processes. Accelerate Innovation.
            </h2>
            <p className="text-zinc-450 text-sm leading-relaxed font-semibold mb-8 max-w-2xl">
              Modern enterprises rely on hundreds of manual tasks across IT, cloud, development, and business operations. Our Automation Platform connects people, systems, and workflows to eliminate repetitive work, improve consistency, and increase operational efficiency through intelligent automation.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="group bg-zinc-950/45 border border-zinc-900 rounded-[2rem] overflow-hidden flex flex-col justify-between h-full hover:border-zinc-800 hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] transition-all duration-300 p-8 min-h-[240px]">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-6">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-white mb-3 tracking-tight group-hover:text-rose-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 3. AUTOMATION CHALLENGES
// ==========================================
const AutomationChallenges = () => {
  const challenges = [
    { title: "Manual Processes", desc: "Hours wasted on repetitive data entry and approvals.", icon: AlertTriangle },
    { title: "Slow Software Delivery", desc: "Manual testing and deployment delaying time-to-market.", icon: RefreshCw },
    { title: "Infrastructure Complexity", desc: "Inconsistent configurations across multiple cloud environments.", icon: Layers },
    { title: "Repetitive Operations", desc: "IT staff bogged down by password resets and routine tickets.", icon: Settings },
    { title: "Human Errors", desc: "Costly mistakes caused by manual configuration and deployment.", icon: EyeOff },
    { title: "Siloed Systems", desc: "Disparate tools and systems that require manual synchronization.", icon: Box },
    { title: "Compliance Delays", desc: "Difficulty enforcing governance policies and producing audit logs.", icon: ShieldCheck },
    { title: "Scaling Challenges", desc: "Inability to scale operations rapidly due to manual bottlenecks.", icon: Gauge }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.015),transparent_70%)] blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">

        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">BOTTLENECKS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4 uppercase">
              Solving Modern Automation Challenges
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="relative group rounded-3xl p-6 bg-zinc-950/45 border border-zinc-900 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between h-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center mb-5 group-hover:text-rose-500 transition-colors">
                      <Icon size={18} />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2 group-hover:text-rose-400 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-450 leading-relaxed font-bold">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 4. PLATFORM CAPABILITIES
// ==========================================
const AutomationCapabilities = () => {
  const capabilities = [
    { title: "Business Workflow Automation", desc: "Digitize approvals, requests, onboarding, and operational workflows.", icon: Workflow },
    { title: "Infrastructure Automation", desc: "Provision cloud infrastructure using Infrastructure as Code.", icon: Server },
    { title: "DevOps Pipeline Automation", desc: "Automate build, testing, deployment, and release pipelines.", icon: GitBranch },
    { title: "Cloud Operations Automation", desc: "Automate scaling, monitoring, backup, patching, and maintenance.", icon: Cloud },
    { title: "AI-Powered Process Automation", desc: "Use AI to classify requests, trigger workflows, and optimize operations.", icon: Cpu },
    { title: "IT Operations Automation", desc: "Automate routine administrative and operational tasks.", icon: Settings },
    { title: "Integration Automation", desc: "Connect enterprise applications, APIs, ERP, CRM, and cloud platforms.", icon: Network },
    { title: "Compliance Automation", desc: "Automate policy enforcement, governance checks, and audit reporting.", icon: ShieldCheck }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">PLATFORM ENGINE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">Enterprise Automation Capabilities</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-6 bg-zinc-950/45 border border-zinc-900 rounded-3xl hover:border-rose-500/20 hover:bg-zinc-900/10 transition-all duration-300 flex flex-col justify-between min-h-[220px]">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-6">
                  <item.icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-xs text-zinc-455 leading-relaxed font-bold">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 5. AUTOMATION ARCHITECTURE
// ==========================================
const AutomationArchitecture = () => {
  const steps = [
    { label: "Users", icon: Users, color: "text-zinc-400" },
    { label: "Business Portal", icon: Monitor, color: "text-zinc-300" },
    { label: "Workflow Engine", icon: Workflow, color: "text-rose-400" },
    { label: "Automation Orchestrator", icon: Command, color: "text-rose-500" },
    { label: "Business Rules", icon: Settings, color: "text-rose-600" },
    { label: "Cloud / Infra / Apps / DBs / APIs", icon: Server, color: "text-indigo-400" },
    { label: "Monitoring", icon: Activity, color: "text-teal-400" },
    { label: "Analytics Dashboard", icon: BarChart2, color: "text-emerald-400" }
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden border-b border-zinc-900/60">
      <div className="max-w-4xl mx-auto px-6 xl:px-8 relative z-10 text-center">
        <Reveal>
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
            REFERENCE ARCHITECTURE
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white uppercase mb-16">
            Enterprise Automation Reference Architecture
          </h2>
        </Reveal>

        <div className="flex flex-col items-center justify-center relative">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-zinc-800 via-rose-500/50 to-emerald-500/50" />

          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="relative z-10 flex flex-col items-center mb-8 group">
                <div className="bg-zinc-950 border border-zinc-800 rounded-xl py-4 px-8 flex items-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:border-zinc-700 transition-colors">
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                  <span className="text-sm font-bold tracking-wide">{step.label}</span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="h-8 w-px" /> // Spacer for the line
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 6. CORE PLATFORM MODULES
// ==========================================
const AutomationModules = () => {
  const modules = [
    { title: "Workflow Engine", desc: "Design and execute multi-step logic visually.", icon: Workflow },
    { title: "Automation Hub", desc: "Centralized repository for managing scripts and templates.", icon: Layers },
    { title: "Integration Engine", desc: "Connect pre-built APIs and webhooks securely.", icon: Network },
    { title: "DevOps Pipelines", desc: "Deploy code automatically through defined stages.", icon: GitBranch },
    { title: "Infrastructure Automation", desc: "Provision clusters and networks via templates.", icon: Server },
    { title: "AI Decision Engine", desc: "Route requests dynamically based on historical data.", icon: Cpu },
    { title: "Monitoring", desc: "Track execution status and system health.", icon: Activity },
    { title: "Reporting", desc: "Generate audit logs and KPI dashboards.", icon: BarChart2 }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">PLATFORM MODULES</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">Core Platform Modules</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-3xl hover:border-rose-500/20 hover:shadow-[0_10px_30px_rgba(225,29,72,0.03)] transition-all duration-300 min-h-[220px] flex flex-col justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight">{item.title}</h3>
                </div>
                <p className="text-xs text-zinc-450 leading-relaxed font-bold mt-4">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 7. AUTOMATION LIFECYCLE
// ==========================================
const AutomationLifecycle = () => {
  const steps = [
    { name: "Identify", icon: EyeOff },
    { name: "Design", icon: FileText },
    { name: "Automate", icon: Command },
    { name: "Integrate", icon: Network },
    { name: "Deploy", icon: Zap },
    { name: "Monitor", icon: Activity },
    { name: "Optimize", icon: RefreshCw }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">LIFECYCLE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">Automation Lifecycle</h2>
          </div>
        </Reveal>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 mt-12">
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-zinc-800 -translate-y-1/2 z-0" />

          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className="w-full lg:w-auto relative z-10 flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full bg-zinc-950 border-2 border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:border-rose-500 group-hover:text-rose-500 group-hover:bg-rose-500/10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <step.icon className="w-6 h-6" />
              </div>
              <span className="mt-4 text-xs font-bold uppercase tracking-wider text-zinc-400 group-hover:text-white transition-colors">
                {step.name}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 8. PLATFORM FEATURES
// ==========================================
const AutomationFeatures = () => {
  const features = [
    "Workflow Designer", "Low-Code Automation", "API Integrations", "Event-Driven Automation",
    "Infrastructure as Code", "Multi-cloud Support", "Approval Engine", "Notifications",
    "Monitoring", "Reporting", "AI Recommendations", "Role-Based Security"
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">PLATFORM FEATURE GRID</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">Complete Platform Features</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.03}>
              <div className="p-5 bg-zinc-950/40 border border-zinc-900 rounded-xl hover:border-zinc-800 hover:bg-zinc-900/10 transition-all duration-300 text-center flex items-center justify-center h-full min-h-[100px]">
                <span className="text-xs md:text-sm font-bold text-zinc-300 tracking-tight">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 9. AI & INTELLIGENT AUTOMATION
// ==========================================
const AIAutomation = () => {
  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_75%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* Left Side */}
        <div className="lg:col-span-5 text-left">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              COGNITIVE ORCHESTRATION
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">
              Intelligent Automation Built for Modern Enterprises
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-semibold">
              The platform uses AI to identify repetitive tasks, automate decisions, classify requests, recommend workflows, optimize infrastructure, and improve operational efficiency.
            </p>
          </Reveal>
        </div>

        {/* Right Side: Flow */}
        <div className="lg:col-span-7 w-full relative">
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-4 relative pl-8">
              <div className="absolute left-[20px] top-4 bottom-4 w-px bg-rose-500/30" />

              {["Events", "AI Engine", "Decision Logic", "Workflow", "Automation", "Business Results"].map((step, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="w-3 h-3 rounded-full bg-rose-500 flex-shrink-0 absolute left-[15px]" />
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg px-6 py-4 flex-grow shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                    <span className="text-sm font-bold text-white uppercase tracking-wider">{step}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 10. INTEGRATION ECOSYSTEM
// ==========================================
const IntegrationEcosystem = () => {
  const integrations = [
    "ERP", "CRM", "HR Systems", "Microsoft 365", "ServiceNow",
    "SAP", "Databases", "APIs", "Cloud Platforms", "Messaging Platforms"
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">ECOSYSTEM</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">Connect Every Business System</h2>
          </div>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-4">
          {integrations.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.04}>
              <div className="px-6 py-3 bg-zinc-950/40 border border-zinc-900 rounded-full hover:border-rose-500/30 transition-all duration-300">
                <span className="text-xs font-bold text-zinc-300 tracking-wider uppercase">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 11. SUPPORTED TECHNOLOGIES (TechnologyStack)
// ==========================================
const TechnologyStack = () => {
  const techs = [
    { name: "GitHub Actions", logo: "/assets/Tech_logos/GitHub.svg" },
    { name: "Azure DevOps", logo: "/assets/Tech_logos/Microsoft Azure.svg" },
    { name: "GitLab CI", logo: "/assets/Tech_logos/GitLab.svg" },
    { name: "Jenkins", logo: "/assets/Tech_logos/Jenkins.svg" },
    { name: "Terraform", logo: "/assets/Tech_logos/HashiCorp.svg" },
    { name: "Ansible", logo: "/assets/Tech_logos/red_hat.svg" },
    { name: "Docker", logo: "/assets/Tech_logos/Docker.svg" },
    { name: "Kubernetes", logo: "/assets/Tech_logos/Kubernetes.svg" },
    { name: "Power Automate", logo: "/assets/Tech-icons/microsoft-logo_svgstack_com_28801780931272.svg" },
    { name: "ServiceNow", logo: "/assets/Tech_logos/Service_now.svg" },
    { name: "UiPath", logo: "/assets/Tech_logos/sap.svg" },
    { name: "Auto Anywhere", logo: "/assets/Tech_logos/vmware.svg" },
    { name: "HashiCorp", logo: "/assets/Tech_logos/HashiCorp.svg" },
    { name: "AWS", logo: "/assets/Tech_logos/AWS.svg" },
    { name: "Azure", logo: "/assets/Tech_logos/Microsoft Azure.svg" },
    { name: "Google Cloud", logo: "/assets/Tech_logos/Google_Cloud.svg" },
    { name: "Python", logo: "/assets/Tech-icons/python-logo_svgstack_com_29121780931061.svg" },
    { name: "PowerShell", logo: "/assets/Tech-icons/windows-powershell-logo_svgstack_com_29041780931352.svg" }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">INTEGRATED STACK</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">Supported Technologies</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techs.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.02}>
              <div className="p-6 bg-zinc-950/65 border border-zinc-900 rounded-3xl hover:border-rose-500/20 flex flex-col items-center justify-center gap-4 text-center min-h-[150px] group transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
                {/* Logo wrapper */}
                <div className="w-14 h-14 flex items-center justify-center bg-zinc-900/80 rounded-2xl border border-zinc-800 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-7 h-7 object-contain opacity-80 group-hover:opacity-100 transition-all duration-350 filter brightness-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.25)]"
                  />
                </div>
                {/* Title */}
                <span className="text-[10px] font-bold text-zinc-400 group-hover:text-white transition-colors duration-300 uppercase tracking-widest leading-none">
                  {item.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 12. BUSINESS OUTCOMES
// ==========================================
const BusinessOutcomes = () => {
  const outcomes = [
    { value: "70%", title: "Reduction in Manual Tasks" },
    { value: "60%", title: "Faster Deployment" },
    { value: "99.9%", title: "Automation Reliability" },
    { value: "24×7", title: "Process Execution" },
    { value: "40%", title: "Operational Cost Savings" },
    { value: "100%", title: "Workflow Visibility" }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">BUSINESS VALUE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">Business Outcomes</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-8 bg-zinc-950/40 border border-zinc-900 rounded-[2rem] hover:border-rose-500/20 transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[190px]">
                <div className="text-3xl md:text-4xl font-black text-rose-500 mb-3 tracking-tight">
                  {item.value}
                </div>
                <h4 className="text-xs font-bold text-white tracking-widest uppercase">{item.title}</h4>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 13. INDUSTRY USE CASES
// ==========================================
const IndustryUseCases = () => {
  const useCases = [
    { title: "Banking", desc: "Loan approvals and compliance workflows.", icon: Database },
    { title: "Healthcare", desc: "Patient onboarding and document processing.", icon: Heart },
    { title: "Retail", desc: "Inventory synchronization and order automation.", icon: ShoppingBag },
    { title: "Manufacturing", desc: "Production workflows and maintenance automation.", icon: Factory },
    { title: "Telecommunications", desc: "Network provisioning and service activation.", icon: Workflow },
    { title: "Government", desc: "Citizen service workflows and approvals.", icon: Globe },
    { title: "Education", desc: "Student enrollment and administration.", icon: BookOpen },
    { title: "Logistics", desc: "Shipment tracking and warehouse automation.", icon: Activity }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">SECTOR DEPLOYMENTS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4 uppercase">
              Industry Use Cases
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="relative group rounded-3xl p-6 bg-zinc-950/45 border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/10 transition-all duration-500 flex flex-col h-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
                <div className="w-10 h-10 rounded-2xl bg-rose-600/10 text-rose-500 flex items-center justify-center mb-5">
                  <item.icon size={18} />
                </div>
                <h4 className="text-sm font-bold text-white mb-2 group-hover:text-rose-400 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-bold">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 14. WHY DEVOPSTRIO AUTOMATION PLATFORM
// ==========================================
const WhyChooseAutomation = () => {
  const pillars = [
    { title: "Automation-First Engineering", icon: Command },
    { title: "AI-Driven Workflows", icon: Cpu },
    { title: "Cloud Native", icon: Cloud },
    { title: "Enterprise Integrations", icon: Network },
    { title: "Secure by Design", icon: Shield },
    { title: "Scalable Architecture", icon: Layers },
    { title: "Low-Code Enablement", icon: Terminal },
    { title: "Continuous Optimization", icon: RefreshCw }
  ];

  return (
    <section className="py-24 bg-[#030303] text-white relative overflow-hidden border-b border-zinc-900/60">
      <div className="max-w-7xl mx-auto px-6 xl:px-8 relative z-10 text-center">
        <Reveal>
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
            OUR ADVANTAGE
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white uppercase mb-16">
            Why Devopstrio Automation Platform
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="group relative rounded-[2rem] p-6 bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-zinc-400 flex items-center justify-center mb-4 group-hover:text-rose-500 group-hover:scale-110 transition-all">
                  <p.icon size={20} />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                  {p.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 15. RELATED SOLUTIONS
// ==========================================
const RelatedSolutions = () => {
  const solutions = [
    { title: "DevOps & Automation", path: "/ecosystem/platforms-solutions/automation-platform" },
    { title: "Cloud Services", path: "/ecosystem/platforms-solutions/cloud-management-platform" },
    { title: "Managed Services", path: "/services/managed-services" },
    { title: "AI & Data Innovation", path: "/ecosystem/innovation-labs/ai-lab" },
    { title: "ServiceNow Partnership", path: "/ecosystem/partnerships/servicenow" },
    { title: "Microsoft Partnership", path: "/ecosystem/partnerships/microsoft" },
    { title: "Digital Transformation", path: "/services/digital-transformation" }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">ECOSYSTEM LINKS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">Related Solutions</h2>
          </div>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-4">
          {solutions.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.03}>
              <Link href={item.path} className="px-6 py-4 bg-zinc-950 border border-zinc-900 hover:border-rose-500/30 rounded-2xl flex items-center gap-3 transition-all duration-300">
                <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">{item.title}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 16. FAQ
// ==========================================
const AutomationFAQ = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    { q: "What processes can the platform automate?", a: "It can automate IT provisioning, HR onboarding, finance approvals, CI/CD pipelines, and cloud scaling." },
    { q: "Does it support Infrastructure as Code?", a: "Yes, it fully supports Terraform, Ansible, and ARM templates for declarative infrastructure deployment." },
    { q: "Can it integrate with ERP and CRM systems?", a: "Absolutely. We offer native API connectors for SAP, Salesforce, ServiceNow, and Microsoft Dynamics." },
    { q: "Does it support cloud automation?", a: "Yes, our platform automates operations across AWS, Azure, and Google Cloud environments seamlessly." },
    { q: "Is AI included in workflow automation?", a: "Yes, cognitive AI engines automatically classify requests and recommend optimal routing logic." },
    { q: "Which DevOps tools are supported?", a: "We integrate with GitHub Actions, GitLab CI, Jenkins, Azure DevOps, Docker, and Kubernetes." },
    { q: "Can business users create workflows?", a: "Yes, our low-code workflow designer allows non-technical users to build processes via drag-and-drop." },
    { q: "Does it support multi-cloud environments?", a: "Our platform is cloud-agnostic, supporting hybrid and multi-cloud orchestration natively." }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] text-white relative border-b border-zinc-900/60">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10">
        <Reveal className="max-w-3xl mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">FAQ</span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-4 uppercase">
            Questions we get <span className="bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">asked every day</span>
          </h2>
        </Reveal>

        <div className="flex flex-col border-t border-zinc-900">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={idx} className="border-b border-zinc-900 py-6">
                <button onClick={() => toggleFaq(idx)} className="flex justify-between items-center w-full text-left focus:outline-none group">
                  <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                    {faq.q}
                  </span>
                  <div className="text-zinc-500 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                {isOpen && (
                  <div className="mt-4 text-xs text-zinc-400 font-bold max-w-3xl">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 17. CTA
// ==========================================
const AutomationCTA = () => {
  return (
    <section className="w-full py-32 bg-black text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 xl:px-8 relative z-10">
        <Reveal>
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">GET STARTED</span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-black mb-6 tracking-tight uppercase text-white">
            Ready to Automate and Scale Your Business?
          </h2>
          <p className="text-zinc-300 text-sm md:text-base font-semibold mb-10 max-w-xl mx-auto leading-relaxed">
            Transform manual processes into intelligent, automated workflows that improve productivity, reduce costs, and accelerate digital transformation.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact#contact-form" className="inline-flex items-center gap-3 pl-6 pr-3 py-3.5 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              Request a Platform Demo
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link href="/contact#contact-form" className="px-6 py-4 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300">
              Talk to an Automation Expert
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function AutomationPlatformPage() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <Hero
        badge="Enterprise Automation Platform"
        title={
          <>
            Enterprise Automation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Platform
            </span>
          </>
        }
        subtitle="Accelerate digital transformation by automating business workflows, cloud operations, DevOps pipelines, infrastructure provisioning, and enterprise processes from a single intelligent platform."
        particles={true}
        particleColors={["#ffffff", "#fda4af", "#f43f5e"]}
        particleBaseSize={150}
        magicRings={true}
        magicRingsColor="#f43f5e"
        magicRingsColorTwo="#9f1239"
        magicRingsRingCount={4}
        magicRingsSpeed={0.5}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "PLATFORMS & SOLUTIONS", href: "/ecosystem/platforms-solutions" },
          { label: "AUTOMATION PLATFORM" }
        ]}
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact#contact-form" className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5">
            Request Platform Demo
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link href="/contact#contact-form" className="px-6 py-4 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300">
            Talk to an Automation Expert
          </Link>
        </div>
      </Hero>

      <AutomationOverview />
      <AutomationChallenges />
      <AutomationCapabilities />
      <AutomationArchitecture />
      <AutomationModules />
      <AutomationLifecycle />
      <AutomationFeatures />
      <AIAutomation />
      <IntegrationEcosystem />
      <TechnologyStack />
      <BusinessOutcomes />
      <IndustryUseCases />
      <WhyChooseAutomation />
      <RelatedSolutions />
      <AutomationFAQ />
      <AutomationCTA />
    </main>
  );
}
