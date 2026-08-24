"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight, Plus, Minus, Database, Cpu, BarChart2,
  Activity, Layers, Sparkles, Server, Workflow, HardDrive, Shield,
  Zap, Lock, Globe, AlertTriangle, ChevronRight, ShieldCheck, EyeOff, Gauge,
  Settings, RefreshCw, ShoppingBag, Factory, BookOpen, Heart, FileText, Sliders,
  Terminal, Box, GitBranch, Key, Users, Command, Network, Monitor, Send, Bell, Cloud,
  Search, Smartphone, Phone, Mail, MessageCircle, MessageSquare, Twitter, Headset, Smile, User, Star, Map,
  BrainCircuit, Bot, Lightbulb, TrendingUp, CheckCircle, Target, Compass, Blocks, Code, FastForward,
  GitCommit, Repeat, FileCode2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ==========================================
// 2. OVERVIEW
// ==========================================
const DevOpsOverview = () => {
  const cards = [
    { title: "CI/CD Automation", desc: "Automate code integration and deployments.", icon: Repeat },
    { title: "Infrastructure as Code", desc: "Manage infrastructure through code.", icon: FileCode2 },
    { title: "Cloud Deployment", desc: "Reliable releases to any cloud.", icon: Cloud },
    { title: "DevSecOps", desc: "Integrate security into the pipeline.", icon: ShieldCheck },
    { title: "Monitoring", desc: "Continuous visibility and alerting.", icon: Activity },
    { title: "Platform Engineering", desc: "Self-service developer portals.", icon: Terminal }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">OVERVIEW</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
              Engineering Better Software Delivery
            </h2>
            <p className="text-zinc-450 text-sm leading-relaxed font-semibold mb-8 max-w-2xl">
              Modern software delivery requires automation, collaboration, security, and operational excellence. Devopstrio's DevOps Toolchain combines cloud-native technologies, CI/CD pipelines, Infrastructure as Code, platform engineering, and observability to help teams release software faster, more securely, and with greater reliability.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="group bg-zinc-950/45 border border-zinc-900 rounded-[2rem] overflow-hidden flex flex-col justify-between h-full hover:border-zinc-800 hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] transition-all duration-300 p-8 min-h-[220px]">
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
// 3. MODERN DEVOPS CHALLENGES
// ==========================================
const DevOpsChallenges = () => {
  const challenges = [
    "Slow Releases", "Manual Deployments", "Environment Drift", "Limited Visibility",
    "Security Bottlenecks", "Scaling Infrastructure", "Operational Complexity", "Production Risks"
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">THE PROBLEM</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Challenges We Solve
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {challenges.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-rose-900/50 hover:bg-zinc-900/10 transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[120px] group">
                <AlertTriangle className="w-6 h-6 text-zinc-600 mb-3 group-hover:text-rose-500 transition-colors" />
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
// 4. DEVOPS TOOLCHAIN ARCHITECTURE
// ==========================================
const ToolchainArchitecture = () => {
  return (
    <section className="py-24 bg-[#030303] text-white relative overflow-hidden border-b border-zinc-900/60">
      <div className="max-w-6xl mx-auto px-6 xl:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ECOSYSTEM
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-16">
              Enterprise DevOps Reference Architecture
            </h2>
          </div>
        </Reveal>

        <div className="relative max-w-4xl mx-auto p-4 sm:p-8 rounded-[3rem] bg-zinc-950/40 border border-zinc-900 shadow-[0_0_50px_rgba(225,29,72,0.05)]">
          
          {/* Layer 1: Devs & Code */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 relative z-10 mb-8">
            <Reveal delay={0.1}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center min-w-[160px] shadow-lg hover:border-rose-500/50 transition-all group">
                <Users className="w-8 h-8 text-zinc-400 mb-3 group-hover:text-rose-400 transition-colors" />
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">Developers</span>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center min-w-[160px] shadow-lg hover:border-rose-500/50 transition-all group">
                <GitBranch className="w-8 h-8 text-zinc-400 mb-3 group-hover:text-rose-400 transition-colors" />
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">Git Repository</span>
              </div>
            </Reveal>
          </div>

          <div className="hidden sm:flex justify-center -my-4 relative z-0">
             <div className="w-px h-12 bg-gradient-to-b from-zinc-700 to-rose-500/50" />
          </div>

          {/* Layer 2: CI/CD Pipeline */}
          <Reveal delay={0.3}>
            <div className="flex justify-center relative z-10 mb-8 mt-4 sm:mt-0">
              <div className="w-full max-w-2xl bg-zinc-900/80 border border-rose-500/20 rounded-2xl p-6 flex flex-col items-center justify-center gap-6 shadow-[0_4px_30px_rgba(225,29,72,0.15)] backdrop-blur-sm">
                <div className="flex items-center gap-4 w-full border-b border-zinc-800 pb-4">
                  <Workflow className="w-5 h-5 text-rose-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">Continuous Integration</span>
                </div>
                <div className="flex flex-wrap justify-center gap-4 w-full">
                  <div className="px-6 py-3 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                    <Code className="w-4 h-4 text-blue-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white">Build</span>
                  </div>
                  <div className="px-6 py-3 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white">Test & Secure</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="hidden sm:flex justify-center -my-4 relative z-0">
             <div className="w-px h-12 bg-rose-500/50" />
          </div>

          {/* Layer 3: Artifacts */}
          <Reveal delay={0.4}>
            <div className="flex justify-center relative z-10 mb-8 mt-4 sm:mt-0">
              <div className="w-full max-w-md bg-zinc-950 border border-rose-900/30 rounded-2xl p-6 flex items-center justify-center gap-4 shadow-[0_4px_20px_rgba(225,29,72,0.1)]">
                <Database className="w-6 h-6 text-fuchsia-500" />
                <span className="text-sm font-bold uppercase tracking-widest text-white">Container Registry</span>
              </div>
            </div>
          </Reveal>

          <div className="hidden sm:flex justify-center -my-4 relative z-0">
             <div className="w-px h-12 bg-rose-500/50" />
          </div>

          {/* Layer 4: Infrastructure & Deploy */}
          <Reveal delay={0.5}>
            <div className="flex justify-center relative z-10 mb-8 mt-4 sm:mt-0">
              <div className="w-full max-w-3xl bg-zinc-950 border border-emerald-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(16,185,129,0.05)] hover:border-emerald-500 transition-all group">
                <div className="flex items-center gap-4">
                  <Server className="w-6 h-6 text-emerald-500" />
                  <span className="text-sm font-bold uppercase tracking-widest text-zinc-300">Kubernetes</span>
                </div>
                <div className="w-full sm:w-px h-px sm:h-10 bg-zinc-800" />
                <div className="flex items-center gap-4">
                  <Cloud className="w-6 h-6 text-blue-500" />
                  <span className="text-sm font-bold uppercase tracking-widest text-zinc-300">Cloud Infrastructure</span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="hidden sm:flex justify-center -my-4 relative z-0">
             <div className="w-px h-10 bg-zinc-700" />
          </div>

          {/* Layer 5: Monitoring & Feedback */}
          <Reveal delay={0.6}>
            <div className="flex justify-center relative z-10 mt-4 sm:mt-0">
              <div className="w-full max-w-xl bg-zinc-900 border-2 border-zinc-800/50 rounded-2xl p-6 flex items-center justify-center gap-6">
                <Activity className="w-6 h-6 text-rose-500" />
                <span className="text-sm font-bold uppercase tracking-widest text-zinc-300">Observability & Feedback Loop</span>
                <RefreshCw className="w-6 h-6 text-rose-500" />
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

// ==========================================
// 5. CI/CD PIPELINE
// ==========================================
const CICDPipeline = () => {
  const steps = [
    { label: "Plan", icon: BookOpen },
    { label: "Code", icon: Code },
    { label: "Build", icon: Box },
    { label: "Test", icon: Activity },
    { label: "Security Scan", icon: Shield },
    { label: "Deploy", icon: Send },
    { label: "Observe", icon: Monitor },
    { label: "Improve", icon: RefreshCw }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">DELIVERY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Automated Software Delivery</h2>
          </div>
        </Reveal>

        <div className="relative flex flex-row items-start justify-between gap-6 lg:gap-0 mt-12 w-full overflow-x-auto pb-32 pt-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="absolute top-[48px] left-[60px] right-[60px] h-px bg-rose-900/30 z-0 min-w-[800px]" />
          
          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className="w-auto relative z-10 flex flex-col items-center group flex-shrink-0 min-w-[120px] snap-center">
              <div className="w-16 h-16 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:border-rose-500 group-hover:text-rose-500 group-hover:bg-rose-500/10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] rotate-45 mb-6 group-hover:rotate-0">
                <div className="-rotate-45 group-hover:rotate-0 transition-all duration-300">
                  <step.icon className="w-6 h-6" />
                </div>
              </div>
              <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-zinc-300 group-hover:text-white transition-colors relative z-20">
                {step.label}
              </span>
              <ul className="text-[10px] text-zinc-500 mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity absolute top-[100px] w-[140px] pointer-events-none">
                <li>Automated</li>
                <li>Secure</li>
                <li>Quality Gates</li>
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 6. CORE TOOLCHAIN CAPABILITIES
// ==========================================
const ToolchainCapabilities = () => {
  const capabilities = [
    { title: "Source Control", tag: "Code", desc: "Git-based collaboration and version control.", image: "/assets/common/1b065043b6959827c05a0073c93a4a53-1.png" },
    { title: "Continuous Integration", tag: "Build", desc: "Automated builds and unit testing.", image: "/assets/common/260b761ad40c3ad2acba2c6666894539-1.png" },
    { title: "Continuous Delivery", tag: "Release", desc: "Reliable automated deployment pipelines.", image: "/assets/common/315e4fdc6263bfd240f36297e376576e-1.png" },
    { title: "Release Automation", tag: "Deploy", desc: "Controlled, secure software releases.", image: "/assets/common/37b9b888cc479ea7b74d2d9a05c37597-1.png" },
    { title: "Infrastructure Automation", tag: "Provision", desc: "Provision environments automatically.", image: "/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca-1.png" },
    { title: "Configuration Management", tag: "Configure", desc: "Maintain consistent environments.", image: "/assets/common/782e79a0bc5e9f58cb9af6a27727ca7b-1.png" },
    { title: "Platform Engineering", tag: "Empower", desc: "Developer self-service platforms.", image: "/assets/common/82090d7be4ef5694954ce77f9cc2e627-1.png" },
    { title: "Monitoring", tag: "Observe", desc: "Continuous operational visibility.", image: "/assets/common/90361fed0bb781d7c86e451995b4dbce-1.png" }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">CAPABILITIES</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Core Toolchain Capabilities</h2>
          </div>
        </Reveal>

        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {capabilities.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="min-w-[300px] md:min-w-[360px] flex-shrink-0 snap-start">
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-rose-500/50 hover:shadow-[0_12px_40px_rgba(225,29,72,0.15)] transition-all duration-300 flex flex-col h-full min-h-[420px] group">
                <div className="w-full h-48 relative bg-zinc-900 overflow-hidden border-b border-zinc-800">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" unoptimized />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-rose-500 uppercase mb-2 block">{item.tag}</span>
                  <h3 className="text-base font-bold text-white mb-3 leading-tight tracking-tight">{item.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-semibold mb-6 flex-grow">{item.desc}</p>
                  <div className="mt-auto flex items-center gap-2 text-rose-500 text-xs font-bold hover:text-white transition-colors cursor-pointer w-fit">
                    <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-colors">
                      <ChevronRight size={14} />
                    </div>
                    Explore {item.title}
                  </div>
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
// 7. INFRASTRUCTURE AS CODE
// ==========================================
const InfrastructureAsCode = () => {
  const items = ["Terraform", "Ansible", "Pulumi", "Bicep", "CloudFormation", "Helm"];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">INFRASTRUCTURE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Automated Infrastructure Provisioning</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.03}>
              <div className="p-5 bg-zinc-950/40 border border-zinc-900 rounded-xl hover:border-blue-500/30 hover:bg-zinc-900/10 transition-all duration-300 text-center flex items-center justify-center h-full min-h-[90px]">
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
// 8. PLATFORM ENGINEERING
// ==========================================
const PlatformEngineering = () => {
  const items = ["Developer Portals", "Golden Paths", "Self-Service Infrastructure", "Environment Provisioning", "GitOps", "Internal Developer Platforms"];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">PLATFORM</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Empowering Development Teams</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.03}>
              <div className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-emerald-500/30 hover:bg-zinc-900/10 transition-all duration-300 text-center flex items-center justify-center h-full min-h-[120px]">
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
// 9. OBSERVABILITY & MONITORING
// ==========================================
const ObservabilitySection = () => {
  const items = ["Logs", "Metrics", "Tracing", "Alerting", "Dashboards", "Incident Management"];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">OBSERVABILITY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Complete Operational Visibility</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.03}>
              <div className="p-5 bg-zinc-950/40 border border-zinc-900 rounded-xl hover:border-fuchsia-500/30 hover:bg-zinc-900/10 transition-all duration-300 text-center flex items-center justify-center h-full min-h-[90px]">
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
// 10. SECURITY & DEVSECOPS
// ==========================================
const DevSecOpsSection = () => {
  const items = [
    "Secrets Management", "Container Security", "SAST", "DAST",
    "Image Scanning", "Policy Enforcement", "Compliance", "Supply Chain Security"
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">SECURITY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Security Throughout the Delivery Lifecycle</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.03}>
              <div className="p-5 bg-zinc-950/40 border border-zinc-900 rounded-xl hover:border-rose-500/30 hover:bg-zinc-900/10 transition-all duration-300 text-center flex items-center justify-center h-full min-h-[100px]">
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
// 11. TECHNOLOGY STACK
// ==========================================
const TechnologyStack = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "Source Control", items: [{ name: "GitHub", logo: "/assets/Tech_logos/GitHub.svg" }, { name: "GitLab", logo: "/assets/Tech_logos/GitLab.svg" }, { name: "Bitbucket", logo: null }] },
    { name: "CI/CD", items: [{ name: "GitHub Actions", logo: "/assets/Tech_logos/GitHub.svg" }, { name: "Azure DevOps", logo: "/assets/Tech_logos/Microsoft-Azure.svg" }, { name: "GitLab CI", logo: "/assets/Tech_logos/GitLab.svg" }, { name: "Jenkins", logo: "/assets/Tech_logos/Jenkins.svg" }, { name: "CircleCI", logo: null }] },
    { name: "Containers", items: [{ name: "Docker", logo: "/assets/Tech_logos/Docker.svg" }, { name: "Podman", logo: null }] },
    { name: "Kubernetes", items: [{ name: "Kubernetes", logo: "/assets/Tech_logos/Kubernetes.svg" }, { name: "OpenShift", logo: "/assets/Tech_logos/red_hat.svg" }, { name: "Rancher", logo: null }, { name: "Helm", logo: null }] },
    { name: "Infrastructure", items: [{ name: "Terraform", logo: "/assets/Tech_logos/HashiCorp.svg" }, { name: "Pulumi", logo: null }, { name: "Ansible", logo: "/assets/Tech_logos/red_hat.svg" }] },
    { name: "GitOps", items: [{ name: "ArgoCD", logo: null }, { name: "FluxCD", logo: null }] },
    { name: "Monitoring", items: [{ name: "Prometheus", logo: null }, { name: "Grafana", logo: null }, { name: "Elastic", logo: "/assets/Tech_logos/Elastic.svg" }, { name: "Datadog", logo: "/assets/Tech_logos/Datadog.svg" }, { name: "Dynatrace", logo: "/assets/Tech_logos/Dynatrace.svg" }, { name: "New Relic", logo: "/assets/Tech_logos/New_Relic.svg" }] },
    { name: "Cloud", items: [{ name: "Azure", logo: "/assets/Tech_logos/Microsoft-Azure.svg" }, { name: "AWS", logo: "/assets/Tech_logos/AWS.svg" }, { name: "Google Cloud", logo: "/assets/Tech_logos/Google_Cloud.svg" }, { name: "Oracle Cloud", logo: "/assets/Tech_logos/Oracle_Cloud.svg" }] },
    { name: "Security", items: [{ name: "Trivy", logo: null }, { name: "SonarQube", logo: null }, { name: "Vault", logo: "/assets/Tech_logos/HashiCorp.svg" }, { name: "Defender", logo: "/assets/Tech_logos/Microsoft-Azure.svg" }, { name: "Falco", logo: null }] }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-6xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">ECOSYSTEM</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Technology Stack</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-shrink-0 snap-start text-left px-6 py-4 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === idx ? "bg-rose-500 text-white shadow-lg" : "bg-zinc-950 text-zinc-400 hover:bg-zinc-900 hover:text-white"}`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            <div className="w-full md:w-2/3 bg-zinc-950/40 border border-zinc-900 rounded-[2rem] p-8 min-h-[300px] flex items-center justify-center">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
                {tabs[activeTab].items.map((item, i) => (
                  <div key={i} className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-center flex flex-col items-center justify-center gap-3 hover:border-rose-500/30 transition-colors min-h-[120px]">
                    {item.logo && (
                      <div className="h-8 flex items-center justify-center">
                        <Image src={item.logo} alt={item.name} width={40} height={40} className="object-contain max-h-8 w-auto opacity-80" unoptimized />
                      </div>
                    )}
                    <span className="text-[11px] font-bold text-zinc-300 tracking-wide uppercase">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// ==========================================
// 12. SOFTWARE DELIVERY LIFECYCLE
// ==========================================
const DeliveryLifecycle = () => {
  const steps = [
    { label: "Plan", icon: BookOpen },
    { label: "Develop", icon: Code },
    { label: "Integrate", icon: GitCommit },
    { label: "Test", icon: Activity },
    { label: "Secure", icon: Shield },
    { label: "Deploy", icon: Send },
    { label: "Operate", icon: Settings },
    { label: "Optimize", icon: TrendingUp }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">ROADMAP</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Software Delivery Lifecycle</h2>
          </div>
        </Reveal>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 mt-12 w-full overflow-x-auto pb-8 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="hidden lg:block absolute top-[40px] left-[40px] right-[40px] h-px bg-zinc-800 z-0" />
          
          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className="w-full lg:w-auto relative z-10 flex flex-col items-center group flex-shrink-0 min-w-[100px] snap-center">
              <div className="w-16 h-16 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:border-rose-500 group-hover:text-rose-500 group-hover:bg-rose-500/10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <step.icon className="w-6 h-6" />
              </div>
              <span className="mt-4 text-[10px] font-bold uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors">
                {step.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 13. BUSINESS OUTCOMES
// ==========================================
const BusinessOutcomes = () => {
  const outcomes = [
    { value: "80%", title: "Deployment Automation" },
    { value: "70%", title: "Faster Release Cycles" },
    { value: "99.9%", title: "Platform Availability" },
    { value: "50%", title: "Reduced Deployment Errors" },
    { value: "Continuous", title: "Security" },
    { value: "Developer", title: "Productivity" }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">IMPACT</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Business Outcomes</h2>
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
// 14. INDUSTRY USE CASES
// ==========================================
const IndustryUseCases = () => {
  const useCases = [
    { title: "Banking", tag: "Finance", desc: "Continuous delivery for digital banking.", image: "/assets/common/945ab601f043c558e0a8162da2a1eb4c-1.png" },
    { title: "Healthcare", tag: "Health", desc: "Secure application deployment.", image: "/assets/common/9d91b93f83e6d4cd494ec13611b3e50e-1.png" },
    { title: "Retail", tag: "Commerce", desc: "Rapid e-commerce releases.", image: "/assets/common/b384eb0438c55e43c61e7595acc29638-1.png" },
    { title: "Manufacturing", tag: "Industrial", desc: "IoT platform deployment.", image: "/assets/common/e76e125035885aab9c9070ce85df239e-1.png" },
    { title: "Government", tag: "Public", desc: "Secure software pipelines.", image: "/assets/common/f317dd71184f5c47d601eeb9508bf92c-1.png" },
    { title: "Telecommunications", tag: "Networking", desc: "Cloud-native network deployment.", image: "/assets/common/f03cc521fb070dfae9d87768b791ff70-1.png" },
    { title: "Education", tag: "Learning", desc: "Digital learning platforms.", image: "/assets/common/45ea830d170d382ade235db479060da7-1.png" },
    { title: "Logistics", tag: "Supply Chain", desc: "Supply chain application delivery.", image: "/assets/common/2fe7f9184c515b0c515ce38bc8a25efa-1.png" }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">SOLUTIONS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Industry Use Cases
            </h2>
          </div>
        </Reveal>

        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {useCases.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="min-w-[300px] md:min-w-[360px] flex-shrink-0 snap-start">
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-rose-500/50 hover:shadow-[0_12px_40px_rgba(225,29,72,0.15)] transition-all duration-300 flex flex-col h-full min-h-[420px] group">
                <div className="w-full h-40 relative bg-zinc-900 overflow-hidden border-b border-zinc-800">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" unoptimized />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-rose-500 uppercase mb-2 block">{item.tag}</span>
                  <h3 className="text-base font-bold text-white mb-3 leading-tight tracking-tight">{item.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-semibold mb-6 flex-grow">{item.desc}</p>
                  <div className="mt-auto flex items-center gap-2 text-rose-500 text-xs font-bold hover:text-white transition-colors cursor-pointer w-fit">
                    <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-colors">
                      <ChevronRight size={14} />
                    </div>
                    Learn More
                  </div>
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
// 15. WHY DEVOPSTRIO DEVOPS
// ==========================================
const WhyChooseDevOps = () => {
  const items = [
    "Automation First", "Cloud Native", "Platform Engineering", "Enterprise Security",
    "Scalable CI/CD", "Infrastructure as Code", "Observability Built-In", "Continuous Improvement"
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">WHY DEVOPSTRIO</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Why Devopstrio DevOps</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.04}>
              <div className="px-6 py-4 bg-zinc-950/40 border border-zinc-900 rounded-full hover:border-rose-500/30 transition-all duration-300 text-center">
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
// 16. FAQ
// ==========================================
const TechnologyFAQ = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    { q: "What is a DevOps Toolchain?", a: "A DevOps toolchain is a set of tools that aids in the delivery, development, and management of software applications throughout the systems development life cycle, from design and coding to deployment and monitoring." },
    { q: "Which CI/CD tools do you support?", a: "We support a wide ecosystem including GitHub Actions, GitLab CI, Azure DevOps, Jenkins, ArgoCD, and CircleCI, tailoring the pipeline to your specific engineering requirements." },
    { q: "Do you implement GitOps?", a: "Yes, we implement GitOps patterns using tools like ArgoCD and FluxCD to ensure declarative, version-controlled, and automated deployments to Kubernetes clusters." },
    { q: "Can you automate cloud infrastructure?", a: "Absolutely. We heavily utilize Infrastructure as Code (IaC) tools like Terraform, Pulumi, and Ansible to programmatically provision and configure cloud environments." },
    { q: "Do you support Kubernetes?", a: "Kubernetes is at the heart of our cloud-native DevOps offerings. We manage clusters across AKS, EKS, GKE, and OpenShift." },
    { q: "Is DevSecOps included?", a: "Yes. We shift security left by embedding SAST, DAST, dependency scanning, container image scanning, and compliance checks directly into the CI/CD pipeline." },
    { q: "Can existing pipelines be modernized?", a: "Yes, we regularly audit legacy deployment workflows and refactor them into modern, container-based automated pipelines." },
    { q: "Do you provide managed DevOps?", a: "Yes, we offer platform engineering and managed DevOps services to operate, maintain, and continuously improve your delivery ecosystem." }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] text-white relative border-b border-zinc-900/60">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10">
        <Reveal className="max-w-3xl mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">FAQ</span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-4">
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
                  <div className="mt-4 text-xs text-zinc-400 font-bold max-w-3xl leading-relaxed">
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
const TechnologyCTA = () => {
  return (
    <section className="w-full py-32 bg-black text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 xl:px-8 relative z-10">
        <Reveal>
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">GET STARTED</span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-black mb-6 tracking-tight text-white">
            Build Better Software, Faster
          </h2>
          <p className="text-zinc-300 text-sm md:text-base font-semibold mb-10 max-w-xl mx-auto leading-relaxed">
            Transform your software delivery lifecycle with automated pipelines, cloud-native engineering, Infrastructure as Code, and modern DevOps practices.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact#contact-form" className="inline-flex items-center gap-3 pl-6 pr-3 py-3.5 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              Talk to a DevOps Expert
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link href="/contact#contact-form" className="px-6 py-4 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300">
              Modernize Your Delivery Pipeline
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
export default function DevOpsToolchainPage() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <Hero
        badge="Technology Stack"
        title={
          <>
            DevOps <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Toolchain
            </span>
          </>
        }
        subtitle="Accelerate software delivery through modern DevOps practices, intelligent automation, Infrastructure as Code, CI/CD pipelines, cloud-native engineering, and platform operations."
        shapeGrid={true}
        shapeGridSpeed={0.5}
        shapeGridSquareSize={50}
        shapeGridDirection="diagonal"
        shapeGridBorderColor="rgba(255, 255, 255, 0.08)"
        shapeGridHoverFillColor="rgba(225, 29, 72, 0.2)"
        shapeGridShape="square"
        shapeGridHoverTrailAmount={3}
        dotField={true}
        dotFieldProps={{
          dotRadius: 2,
          dotSpacing: 24,
          bulgeStrength: 67,
          glowRadius: 200,
          sparkle: true,
          waveAmplitude: 10,
          gradientFrom: "rgba(225, 29, 72, 0.8)",
          gradientTo: "rgba(239, 68, 68, 0.5)",
          glowColor: "rgba(225, 29, 72, 0.15)",
        }}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "TECHNOLOGY STACK", href: "/ecosystem/technology-stack" },
          { label: "DEVOPS TOOLCHAIN" }
        ]}
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact#contact-form" className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5">
            Explore DevOps Solutions
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link href="/contact#contact-form" className="px-6 py-4 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300">
            Talk to DevOps Engineers
          </Link>
        </div>
      </Hero>

      <DevOpsOverview />
      <DevOpsChallenges />
      <ToolchainArchitecture />
      <CICDPipeline />
      <ToolchainCapabilities />
      <InfrastructureAsCode />
      <PlatformEngineering />
      <ObservabilitySection />
      <DevSecOpsSection />
      <TechnologyStack />
      <DeliveryLifecycle />
      <BusinessOutcomes />
      <IndustryUseCases />
      <WhyChooseDevOps />
      <TechnologyFAQ />
      <TechnologyCTA />
    </main>
  );
}
