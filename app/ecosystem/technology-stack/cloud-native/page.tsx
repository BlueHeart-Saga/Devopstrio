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
  BrainCircuit, Bot, Lightbulb, TrendingUp, CheckCircle, Target, Compass, Blocks, Code, FastForward
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ==========================================
// 2. CLOUD-NATIVE OVERVIEW
// ==========================================
const CloudNativeOverview = () => {
  const cards = [
    { title: "Cloud-Native Applications", desc: "Build modular, resilient web and mobile applications.", icon: Smartphone },
    { title: "Microservices", desc: "Decouple services for independent scaling.", icon: Blocks },
    { title: "Containers", desc: "Package software for any environment.", icon: Box },
    { title: "Kubernetes", desc: "Automate container deployment and scaling.", icon: Network },
    { title: "Platform Engineering", desc: "Create self-service internal developer platforms.", icon: Terminal },
    { title: "Continuous Delivery", desc: "Automate releases for faster time-to-market.", icon: FastForward }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">MODERN ENGINEERING</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
              Building Modern Applications for the Cloud Era
            </h2>
            <p className="text-zinc-450 text-sm leading-relaxed font-semibold mb-8 max-w-2xl">
              Cloud-native development enables organizations to deliver software faster, scale effortlessly, improve resilience, and continuously innovate. At Devopstrio, we combine cloud infrastructure, platform engineering, automation, and modern application architecture to help businesses build secure, high-performance digital platforms.
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
// 3. WHY CLOUD-NATIVE
// ==========================================
const WhyCloudNative = () => {
  const traditional = [
    "Monolithic Architecture", "Manual Deployment", "Limited Scalability",
    "Higher Downtime Risk", "Slower Release Cycles"
  ];
  const cloudNative = [
    "Microservices Architecture", "Automated Deployment (CI/CD)", "Elastic Auto-Scaling",
    "High Availability & Resilience", "Continuous Delivery"
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">EVOLUTION</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Why Organizations Are Moving to Cloud-Native
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Traditional */}
          <Reveal delay={0.1}>
            <div className="p-8 bg-zinc-950 border border-zinc-900 rounded-3xl h-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                <Minus className="w-4 h-4 text-zinc-500" /> Traditional Applications
              </h3>
              <ul className="space-y-4">
                {traditional.map((c, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-zinc-300 font-semibold">
                    <div className="w-2 h-2 rounded-full bg-zinc-700" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Cloud Native */}
          <Reveal delay={0.2}>
            <div className="p-8 bg-gradient-to-br from-rose-950/20 to-zinc-950 border border-rose-900/30 rounded-3xl h-full shadow-[0_8px_32px_0_rgba(225,29,72,0.1)]">
              <h3 className="text-sm font-bold text-rose-500 uppercase tracking-widest mb-6 flex items-center gap-3">
                <Plus className="w-4 h-4 text-rose-500" /> Cloud-Native Applications
              </h3>
              <ul className="space-y-4">
                {cloudNative.map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white font-bold">
                    <CheckCircle className="w-4 h-4 text-rose-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 4. CLOUD-NATIVE ARCHITECTURE
// ==========================================
const CloudNativeArchitecture = () => {
  return (
    <section className="py-24 bg-[#030303] text-white relative overflow-hidden border-b border-zinc-900/60">
      <div className="max-w-6xl mx-auto px-6 xl:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              REFERENCE ARCHITECTURE
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-16">
              Enterprise Cloud-Native Architecture
            </h2>
          </div>
        </Reveal>

        <div className="relative max-w-4xl mx-auto p-4 sm:p-8 rounded-[3rem] bg-zinc-950/40 border border-zinc-900 shadow-[0_0_50px_rgba(225,29,72,0.05)]">
          
          {/* Layer 1: Consumers */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 relative z-10 mb-8">
            <Reveal delay={0.1}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center min-w-[160px] shadow-lg hover:border-rose-500/50 transition-all group">
                <Users className="w-8 h-8 text-zinc-400 mb-3 group-hover:text-rose-400 transition-colors" />
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">Users</span>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center min-w-[160px] shadow-lg hover:border-rose-500/50 transition-all group">
                <Smartphone className="w-8 h-8 text-zinc-400 mb-3 group-hover:text-rose-400 transition-colors" />
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">Web / Mobile Apps</span>
              </div>
            </Reveal>
          </div>

          <div className="hidden sm:flex justify-center -my-4 relative z-0">
             <div className="w-px h-12 bg-gradient-to-b from-zinc-700 to-rose-500/50" />
          </div>

          {/* Layer 2: Edge & Routing */}
          <Reveal delay={0.3}>
            <div className="flex justify-center relative z-10 mb-8 mt-4 sm:mt-0">
              <div className="w-full max-w-md bg-zinc-950 border border-rose-900/30 rounded-2xl p-6 flex items-center justify-center gap-4 shadow-[0_4px_20px_rgba(225,29,72,0.1)]">
                <Network className="w-6 h-6 text-rose-500" />
                <span className="text-sm font-bold uppercase tracking-widest text-white">API Gateway & Ingress</span>
              </div>
            </div>
          </Reveal>

          <div className="hidden sm:flex justify-center -my-4 relative z-0">
             <div className="w-px h-12 bg-rose-500/50" />
          </div>

          {/* Layer 3: Microservices & Service Mesh */}
          <Reveal delay={0.4}>
            <div className="flex justify-center relative z-10 mb-8 mt-4 sm:mt-0">
              <div className="w-full max-w-3xl bg-zinc-900/80 border border-rose-500/20 rounded-2xl p-6 flex flex-col items-center justify-center gap-6 shadow-[0_4px_30px_rgba(225,29,72,0.15)] backdrop-blur-sm">
                
                <div className="flex items-center gap-4 w-full border-b border-zinc-800 pb-4">
                  <Globe className="w-5 h-5 text-zinc-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">Service Mesh</span>
                </div>

                <div className="flex flex-wrap justify-center gap-4 w-full">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="px-6 py-3 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                      <Blocks className="w-4 h-4 text-rose-500" />
                      <span className="text-xs font-bold uppercase text-white">Microservice {i}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </Reveal>

          <div className="hidden sm:flex justify-center -my-4 relative z-0">
             <div className="w-px h-12 bg-rose-500/50" />
          </div>

          {/* Layer 4: Containers & Orchestration */}
          <Reveal delay={0.5}>
            <div className="flex justify-center relative z-10 mb-8 mt-4 sm:mt-0">
              <div className="w-full max-w-xl bg-zinc-950 border border-emerald-500/30 rounded-2xl p-6 flex items-center justify-center gap-8 shadow-[0_0_30px_rgba(16,185,129,0.05)] hover:border-emerald-500 transition-all group">
                <div className="flex flex-col items-center gap-2">
                  <Box className="w-8 h-8 text-emerald-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Containers</span>
                </div>
                <div className="w-px h-12 bg-zinc-800" />
                <div className="flex flex-col items-center gap-2">
                  <Server className="w-8 h-8 text-emerald-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Kubernetes</span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="hidden sm:flex justify-center -my-4 relative z-0">
             <div className="w-px h-8 bg-zinc-700" />
          </div>

          {/* Layer 5: Cloud Foundation & Monitoring */}
          <Reveal delay={0.6}>
            <div className="flex justify-center relative z-10 mt-4 sm:mt-0">
              <div className="w-full max-w-4xl bg-zinc-950 border-2 border-zinc-800/50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <Cloud className="w-6 h-6 text-blue-500" />
                  <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">Cloud Infrastructure</span>
                </div>
                <div className="w-full sm:w-px h-px sm:h-10 bg-zinc-800" />
                <div className="flex items-center gap-4">
                  <Activity className="w-6 h-6 text-fuchsia-500" />
                  <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">Monitoring & Security</span>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

// ==========================================
// 5. CLOUD-NATIVE CAPABILITIES
// ==========================================
const CloudNativeCapabilities = () => {
  const capabilities = [
    { title: "Application Development", tag: "Build", desc: "Modern distributed applications built for immense scalability.", image: "/assets/common/1b065043b6959827c05a0073c93a4a53-1.png" },
    { title: "Kubernetes Engineering", tag: "Orchestrate", desc: "Production-ready, highly available Kubernetes environments.", image: "/assets/common/260b761ad40c3ad2acba2c6666894539-1.png" },
    { title: "Containerization", tag: "Package", desc: "Docker and OCI container platform standardization.", image: "/assets/common/315e4fdc6263bfd240f36297e376576e-1.png" },
    { title: "API & Microservices", tag: "Decouple", desc: "Independent, scalable service-oriented architecture.", image: "/assets/common/37b9b888cc479ea7b74d2d9a05c37597-1.png" },
    { title: "Platform Engineering", tag: "Empower", desc: "Self-service developer platforms and internal CI/CD tooling.", image: "/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca-1.png" },
    { title: "Infrastructure as Code", tag: "Automate", desc: "Automated cloud infrastructure provisioning via GitOps.", image: "/assets/common/782e79a0bc5e9f58cb9af6a27727ca7b-1.png" },
    { title: "DevSecOps", tag: "Secure", desc: "Integrated security scanning across the software lifecycle.", image: "/assets/common/82090d7be4ef5694954ce77f9cc2e627-1.png" },
    { title: "Observability", tag: "Monitor", desc: "Complete application visibility and performance insights.", image: "/assets/common/90361fed0bb781d7c86e451995b4dbce-1.png" }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">ENGINEERING SUITE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Our Cloud-Native Capabilities</h2>
          </div>
        </Reveal>

        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {capabilities.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="min-w-[300px] md:min-w-[360px] flex-shrink-0 snap-start">
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-rose-500/50 hover:shadow-[0_12px_40px_rgba(225,29,72,0.15)] transition-all duration-300 flex flex-col h-full min-h-[420px] group">
                <div className="w-full h-48 relative bg-zinc-900 overflow-hidden border-b border-zinc-800">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    unoptimized
                  />
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
// 6. DEVELOPMENT LIFECYCLE
// ==========================================
const DevelopmentLifecycle = () => {
  const steps = [
    { name: "Design", icon: Compass },
    { name: "Build", icon: Code },
    { name: "Containerize", icon: Box },
    { name: "Deploy", icon: Send },
    { name: "Scale", icon: Activity },
    { name: "Monitor", icon: Monitor },
    { name: "Optimize", icon: RefreshCw }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">LIFECYCLE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Cloud-Native Development Lifecycle</h2>
          </div>
        </Reveal>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 mt-12 w-full overflow-x-auto pb-8">
          <div className="hidden lg:block absolute top-[40px] left-[40px] right-[40px] h-px bg-zinc-800 z-0" />
          
          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className="w-full lg:w-auto relative z-10 flex flex-col items-center group flex-shrink-0 min-w-[120px]">
              <div className="w-20 h-20 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:border-rose-500 group-hover:text-rose-500 group-hover:bg-rose-500/10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <step.icon className="w-7 h-7" />
              </div>
              <span className="mt-4 text-xs font-bold uppercase tracking-wider text-zinc-300 group-hover:text-white transition-colors">
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
// 7. MICROSERVICES & CONTAINERS
// ==========================================
const MicroservicesSection = () => {
  const items = [
    "Microservices", "Docker Containers", "API Management", 
    "Service Discovery", "Container Registry", "Service Mesh"
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">MODULARITY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Modular Applications Built for Scale</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
// 8. PLATFORM ENGINEERING
// ==========================================
const PlatformEngineering = () => {
  const items = [
    "Internal Developer Platforms", "Self-Service Infrastructure", "CI/CD Pipelines",
    "GitOps", "Developer Portals", "Environment Automation"
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">PRODUCTIVITY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Accelerating Developer Productivity</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.03}>
              <div className="p-5 bg-zinc-950/40 border border-zinc-900 rounded-xl hover:border-emerald-500/30 hover:bg-zinc-900/10 transition-all duration-300 text-center flex items-center justify-center h-full min-h-[100px]">
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
// 9. DEVSECOPS & AUTOMATION
// ==========================================
const DevSecOpsSection = () => {
  const items = [
    "CI/CD Automation", "Infrastructure as Code", "Security Scanning",
    "Secrets Management", "Policy Enforcement", "Continuous Compliance"
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">SECURITY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Secure Automation Across Deployments</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.03}>
              <div className="p-5 bg-zinc-950/40 border border-zinc-900 rounded-xl hover:border-blue-500/30 hover:bg-zinc-900/10 transition-all duration-300 text-center flex items-center justify-center h-full min-h-[100px]">
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
// 10. TECHNOLOGY STACK
// ==========================================
const TechnologyStack = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { 
      name: "Containers", 
      items: [
        { name: "Docker", logo: "/assets/Tech_logos/Docker.svg" }, 
        { name: "Podman", logo: null }, 
        { name: "Container Registry", logo: null }
      ] 
    },
    { 
      name: "Orchestration", 
      items: [
        { name: "Kubernetes", logo: "/assets/Tech_logos/Kubernetes.svg" }, 
        { name: "OpenShift", logo: "/assets/Tech_logos/red_hat.svg" }, 
        { name: "Rancher", logo: null }, 
        { name: "Helm", logo: null }
      ] 
    },
    { 
      name: "DevOps", 
      items: [
        { name: "GitHub Actions", logo: "/assets/Tech_logos/GitHub.svg" }, 
        { name: "Azure DevOps", logo: "/assets/Tech_logos/Microsoft-Azure.svg" }, 
        { name: "GitLab CI", logo: "/assets/Tech_logos/GitLab.svg" }, 
        { name: "Jenkins", logo: "/assets/Tech_logos/Jenkins.svg" }, 
        { name: "ArgoCD", logo: null }, 
        { name: "FluxCD", logo: null }
      ] 
    },
    { 
      name: "Infrastructure", 
      items: [
        { name: "Terraform", logo: "/assets/Tech_logos/HashiCorp.svg" }, 
        { name: "Ansible", logo: "/assets/Tech_logos/red_hat.svg" }, 
        { name: "Pulumi", logo: null }
      ] 
    },
    { 
      name: "Observability", 
      items: [
        { name: "Prometheus", logo: null }, 
        { name: "Grafana", logo: null }, 
        { name: "Elastic", logo: "/assets/Tech_logos/Elastic.svg" }, 
        { name: "Datadog", logo: "/assets/Tech_logos/Datadog.svg" },
        { name: "Dynatrace", logo: "/assets/Tech_logos/Dynatrace.svg" }, 
        { name: "New Relic", logo: "/assets/Tech_logos/New_Relic.svg" }
      ] 
    },
    { 
      name: "Cloud", 
      items: [
        { name: "Azure", logo: "/assets/Tech_logos/Microsoft-Azure.svg" }, 
        { name: "AWS", logo: "/assets/Tech_logos/AWS.svg" }, 
        { name: "Google Cloud", logo: "/assets/Tech_logos/Google_Cloud.svg" }, 
        { name: "Oracle Cloud", logo: "/assets/Tech_logos/Oracle_Cloud.svg" }
      ] 
    }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-5xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">ECOSYSTEM</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Technologies We Use</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Tabs sidebar */}
            <div className="w-full md:w-1/3 flex flex-col gap-2">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === idx ? "bg-rose-500 text-white shadow-lg" : "bg-zinc-950 text-zinc-400 hover:bg-zinc-900 hover:text-white"}`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="w-full md:w-2/3 bg-zinc-950/40 border border-zinc-900 rounded-[2rem] p-8 min-h-[250px] flex items-center justify-center">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                {tabs[activeTab].items.map((item, i) => (
                  <div key={i} className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-center flex flex-col items-center justify-center gap-3 hover:border-rose-500/30 transition-colors min-h-[100px]">
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
// 11. BUSINESS OUTCOMES
// ==========================================
const BusinessOutcomes = () => {
  const outcomes = [
    { value: "70%", title: "Faster Deployments" },
    { value: "99.9%", title: "Application Availability" },
    { value: "60%", title: "Reduced Infrastructure Management" },
    { value: "Auto", title: "Scaling" },
    { value: "Cloud", title: "Resilience" },
    { value: "Continuous", title: "Innovation" }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">BUSINESS VALUE</span>
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
// 12. INDUSTRY USE CASES
// ==========================================
const IndustryUseCases = () => {
  const useCases = [
    { title: "Banking", tag: "Finance", desc: "Cloud-native digital banking.", image: "/assets/common/945ab601f043c558e0a8162da2a1eb4c-1.png" },
    { title: "Healthcare", tag: "Health", desc: "Scalable healthcare platforms.", image: "/assets/common/9d91b93f83e6d4cd494ec13611b3e50e-1.png" },
    { title: "Retail", tag: "Commerce", desc: "E-commerce modernization.", image: "/assets/common/b384eb0438c55e43c61e7595acc29638-1.png" },
    { title: "Manufacturing", tag: "Industrial", desc: "Industrial IoT platforms.", image: "/assets/common/e76e125035885aab9c9070ce85df239e-1.png" },
    { title: "Telecom", tag: "Networking", desc: "5G cloud-native services.", image: "/assets/common/f03cc521fb070dfae9d87768b791ff70-1.png" },
    { title: "Government", tag: "Public", desc: "Citizen digital platforms.", image: "/assets/common/f317dd71184f5c47d601eeb9508bf92c-1.png" },
    { title: "Education", tag: "Learning", desc: "Digital learning platforms.", image: "/assets/common/45ea830d170d382ade235db479060da7-1.png" },
    { title: "Logistics", tag: "Supply Chain", desc: "Supply chain platforms.", image: "/assets/common/2fe7f9184c515b0c515ce38bc8a25efa-1.png" }
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
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    unoptimized
                  />
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
// 13. WHY DEVOPSTRIO CLOUD-NATIVE
// ==========================================
const WhyChooseCloudNative = () => {
  const items = [
    "Cloud-First Architecture", "Platform Engineering Expertise", "DevSecOps Built-In", "Enterprise Kubernetes",
    "Automation at Scale", "High Availability", "Multi-Cloud Support", "Future-Ready Applications"
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">WHY DEVOPSTRIO</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Why Choose Devopstrio Cloud-Native</h2>
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
// 14. FAQ
// ==========================================
const TechnologyFAQ = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    { q: "What is cloud-native development?", a: "Cloud-native development is an approach to building and running applications that exploits the advantages of the cloud computing delivery model, using containers, microservices, and serverless architectures." },
    { q: "Do you support Kubernetes?", a: "Yes, Kubernetes engineering is a core capability. We design, deploy, and manage highly available Kubernetes clusters across AWS (EKS), Azure (AKS), and Google Cloud (GKE)." },
    { q: "Can you modernize monolithic applications?", a: "Absolutely. We specialize in refactoring and strangling monolithic applications into scalable microservices architectures." },
    { q: "What cloud platforms are supported?", a: "We support multi-cloud and hybrid environments, specializing in Microsoft Azure, Amazon Web Services (AWS), and Google Cloud Platform (GCP)." },
    { q: "Do you implement DevSecOps?", a: "Yes, security is shifted left. We integrate SAST, DAST, dependency scanning, and container security natively into your CI/CD pipelines." },
    { q: "Can you build microservices?", a: "Yes, we architect domains into independent, loosely coupled microservices that communicate via robust APIs and service meshes." },
    { q: "Do you support hybrid cloud?", a: "Yes, we build portable applications using Kubernetes and GitOps that can run uniformly across on-premise data centers and public clouds." },
    { q: "What monitoring tools are included?", a: "We implement comprehensive observability stacks using tools like Prometheus, Grafana, OpenTelemetry, Datadog, and ELK." }
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
// 15. CTA
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
            Build the Next Generation of Cloud Applications
          </h2>
          <p className="text-zinc-300 text-sm md:text-base font-semibold mb-10 max-w-xl mx-auto leading-relaxed">
            Accelerate software delivery, improve resilience, and modernize your application architecture with Devopstrio's cloud-native engineering expertise.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact#contact-form" className="inline-flex items-center gap-3 pl-6 pr-3 py-3.5 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              Start Your Cloud-Native Journey
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link href="/contact#contact-form" className="px-6 py-4 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300">
              Talk to a Platform Engineer
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
export default function CloudNativeTechnologyStackPage() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <Hero
        badge="Technology Stack"
        title={
          <>
            Cloud-Native <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Engineering
            </span>
          </>
        }
        subtitle="Build scalable, resilient, and cloud-first applications using containers, Kubernetes, microservices, DevSecOps, and platform engineering."
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
          { label: "CLOUD NATIVE" }
        ]}
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact#contact-form" className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5">
            Talk to a Cloud Expert
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link href="/contact#contact-form" className="px-6 py-4 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300">
            Explore Cloud-Native Solutions
          </Link>
        </div>
      </Hero>

      <CloudNativeOverview />
      <WhyCloudNative />
      <CloudNativeArchitecture />
      <CloudNativeCapabilities />
      <DevelopmentLifecycle />
      <MicroservicesSection />
      <PlatformEngineering />
      <DevSecOpsSection />
      <TechnologyStack />
      <BusinessOutcomes />
      <IndustryUseCases />
      <WhyChooseCloudNative />
      <TechnologyFAQ />
      <TechnologyCTA />
    </main>
  );
}
