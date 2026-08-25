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
  GitCommit, Repeat, FileCode2, PieChart, LineChart, Link as LinkIcon, LockKeyhole, Fingerprint, Radar, 
  SearchCode, Bug, RadioReceiver
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ==========================================
// 2. CYBERSECURITY OVERVIEW
// ==========================================
const CybersecurityOverview = () => {
  const cards = [
    { title: "Cloud Security", desc: "Protect dynamic cloud workloads.", icon: Cloud },
    { title: "Identity Protection", desc: "Secure access and authentication.", icon: Fingerprint },
    { title: "Application Security", desc: "Shift security left in DevSecOps.", icon: Code },
    { title: "Security Operations", desc: "24/7 continuous threat monitoring.", icon: Radar },
    { title: "Compliance", desc: "Meet global regulatory standards.", icon: FileText },
    { title: "Threat Intelligence", desc: "Proactive defense and analytics.", icon: BrainCircuit }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">OVERVIEW</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
              Engineering Security into Every Layer
            </h2>
            <p className="text-zinc-450 text-sm leading-relaxed font-semibold mb-8 max-w-2xl">
              Cybersecurity is no longer a standalone function—it is an essential part of modern digital transformation. At Devopstrio, we integrate security across cloud infrastructure, software engineering, identities, data, and operations to build resilient, compliant, and enterprise-ready environments.
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
// 3. MODERN SECURITY CHALLENGES
// ==========================================
const SecurityChallenges = () => {
  const challenges = [
    "Advanced Cyber Threats", "Cloud Misconfigurations", "Identity Risks", "Ransomware",
    "Insider Threats", "Supply Chain Attacks", "Compliance Pressure", "Shadow IT"
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">THE PROBLEM</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Today's Security Challenges
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
// 4. ZERO TRUST SECURITY ARCHITECTURE
// ==========================================
const ZeroTrustArchitecture = () => {
  return (
    <section className="py-24 bg-[#030303] text-white relative overflow-hidden border-b border-zinc-900/60">
      <div className="max-w-6xl mx-auto px-6 xl:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ECOSYSTEM
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-16">
              Enterprise Zero Trust Architecture
            </h2>
          </div>
        </Reveal>

        <div className="relative max-w-4xl mx-auto p-4 sm:p-8 rounded-[3rem] bg-zinc-950/40 border border-zinc-900 shadow-[0_0_50px_rgba(225,29,72,0.05)]">
          
          {/* Layer 1: Users */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 relative z-10 mb-8">
            <Reveal delay={0.1}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center min-w-[200px] shadow-lg hover:border-rose-500/50 transition-all group">
                <Users className="w-8 h-8 text-zinc-400 mb-3 group-hover:text-rose-400 transition-colors" />
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">Users & Devices</span>
              </div>
            </Reveal>
          </div>

          <div className="hidden sm:flex justify-center -my-4 relative z-0">
             <div className="w-px h-12 bg-gradient-to-b from-zinc-700 to-rose-500/50" />
          </div>

          {/* Layer 2: Identity & Policy */}
          <Reveal delay={0.3}>
            <div className="flex justify-center relative z-10 mb-8 mt-4 sm:mt-0">
              <div className="w-full max-w-2xl bg-zinc-900/80 border border-rose-500/20 rounded-2xl p-6 flex flex-col items-center justify-center gap-6 shadow-[0_4px_30px_rgba(225,29,72,0.15)] backdrop-blur-sm">
                <div className="flex items-center gap-4 w-full border-b border-zinc-800 pb-4">
                  <ShieldCheck className="w-5 h-5 text-rose-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">Zero Trust Verification</span>
                </div>
                <div className="flex flex-wrap justify-center gap-4 w-full">
                  <div className="px-6 py-3 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                    <Fingerprint className="w-4 h-4 text-emerald-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white">Identity Verification</span>
                  </div>
                  <div className="px-6 py-3 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white">Policy Engine</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="hidden sm:flex justify-center -my-4 relative z-0">
             <div className="w-px h-12 bg-rose-500/50" />
          </div>

          {/* Layer 3: Secure Access */}
          <Reveal delay={0.4}>
            <div className="flex justify-center relative z-10 mb-8 mt-4 sm:mt-0">
              <div className="w-full max-w-md bg-zinc-950 border border-fuchsia-900/30 rounded-2xl p-6 flex items-center justify-center gap-4 shadow-[0_4px_20px_rgba(217,70,239,0.1)]">
                <LockKeyhole className="w-6 h-6 text-fuchsia-500" />
                <span className="text-sm font-bold uppercase tracking-widest text-white">Secure Access Gateway</span>
              </div>
            </div>
          </Reveal>

          <div className="hidden sm:flex justify-center -my-4 relative z-0">
             <div className="w-px h-12 bg-rose-500/50" />
          </div>

          {/* Layer 4: Resources */}
          <Reveal delay={0.5}>
            <div className="flex justify-center relative z-10 mb-8 mt-4 sm:mt-0">
              <div className="w-full max-w-3xl bg-zinc-950 border border-blue-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(59,130,246,0.05)] hover:border-blue-500/50 transition-all group">
                <div className="flex items-center gap-4 flex-1 justify-center">
                  <Box className="w-6 h-6 text-blue-500" />
                  <span className="text-sm font-bold uppercase tracking-widest text-zinc-300">Applications</span>
                </div>
                <div className="w-full sm:w-px h-px sm:h-10 bg-zinc-800" />
                <div className="flex items-center gap-4 flex-1 justify-center">
                  <Cloud className="w-6 h-6 text-blue-500" />
                  <span className="text-sm font-bold uppercase tracking-widest text-zinc-300">Cloud Resources</span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="hidden sm:flex justify-center -my-4 relative z-0">
             <div className="w-px h-10 bg-zinc-700" />
          </div>

          {/* Layer 5: SOC */}
          <Reveal delay={0.6}>
            <div className="flex justify-center relative z-10 mt-4 sm:mt-0">
              <div className="w-full max-w-xl bg-zinc-900 border-2 border-zinc-800/50 rounded-2xl p-6 flex items-center justify-center gap-6">
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <Activity className="w-6 h-6 text-rose-500 group-hover:text-rose-400 transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Monitoring</span>
                </div>
                <div className="w-px h-10 bg-zinc-700" />
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <Radar className="w-6 h-6 text-rose-500 group-hover:text-rose-400 transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Security Analytics</span>
                </div>
                <div className="w-px h-10 bg-zinc-700" />
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <Shield className="w-6 h-6 text-rose-500 group-hover:text-rose-400 transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">SOC</span>
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
// 5. SECURITY TECHNOLOGY DOMAINS
// ==========================================
const SecurityDomains = () => {
  const capabilities = [
    { title: "Identity & Access Security", tag: "Identity", desc: "Secure identities, authentication, authorization, and privileged access.", image: "/webp/assets/common/1b065043b6959827c05a0073c93a4a53-1.webp" },
    { title: "Cloud Security", desc: "Protect workloads across Azure, AWS, GCP, and hybrid environments.", tag: "Cloud", image: "/webp/assets/common/260b761ad40c3ad2acba2c6666894539-1.webp" },
    { title: "Network Security", tag: "Network", desc: "Secure enterprise connectivity, segmentation, VPNs, and Zero Trust networking.", image: "/webp/assets/common/315e4fdc6263bfd240f36297e376576e-1.webp" },
    { title: "Application Security", tag: "DevSecOps", desc: "Integrate security throughout the software development lifecycle.", image: "/webp/assets/common/37b9b888cc479ea7b74d2d9a05c37597-1.webp" },
    { title: "Endpoint Security", tag: "Endpoint", desc: "Protect servers, workstations, mobile devices, and cloud workloads.", image: "/webp/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca-1.webp" },
    { title: "Data Protection", tag: "Data", desc: "Encrypt, classify, and govern sensitive enterprise information.", image: "/webp/assets/common/782e79a0bc5e9f58cb9af6a27727ca7b-1.webp" },
    { title: "Security Operations", tag: "SOC", desc: "Continuous monitoring, incident response, and operational resilience.", image: "/webp/assets/common/82090d7be4ef5694954ce77f9cc2e627-1.webp" },
    { title: "Governance & Compliance", tag: "Compliance", desc: "Support regulatory compliance and enterprise security policies.", image: "/webp/assets/common/90361fed0bb781d7c86e451995b4dbce-1.webp" }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">DOMAINS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Comprehensive Security Across Every Layer</h2>
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
// 6. SECURITY OPERATIONS LIFECYCLE
// ==========================================
const SecurityLifecycle = () => {
  const steps = [
    { label: "Identify", icon: Search },
    { label: "Protect", icon: Shield },
    { label: "Detect", icon: Radar },
    { label: "Investigate", icon: SearchCode },
    { label: "Respond", icon: Zap },
    { label: "Recover", icon: RefreshCw },
    { label: "Improve", icon: TrendingUp }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">LIFECYCLE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Security Operations Lifecycle</h2>
          </div>
        </Reveal>

        <div className="relative flex flex-row items-center justify-between gap-6 lg:gap-0 mt-12 w-full overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="absolute top-[32px] left-[40px] right-[40px] h-px bg-zinc-800 z-0 min-w-[700px]" />
          
          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className="w-auto relative z-10 flex flex-col items-center group flex-shrink-0 min-w-[110px] snap-center">
              <div className="w-16 h-16 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:border-rose-500 group-hover:text-rose-500 group-hover:bg-rose-500/10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <step.icon className="w-6 h-6" />
              </div>
              <span className="mt-4 text-[10px] font-bold uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors bg-[#030303] px-2">
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
// 7. IDENTITY & ACCESS SECURITY
// ==========================================
const IdentitySecurity = () => {
  const items = ["Single Sign-On", "Multi-Factor Authentication", "Privileged Access Management", "Identity Governance", "Conditional Access", "Directory Services"];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">IDENTITY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Securing Enterprise Identity</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
// 8. CLOUD & INFRASTRUCTURE SECURITY
// ==========================================
const CloudInfrastructureSecurity = () => {
  const items = ["Cloud Security Posture Management", "Infrastructure Hardening", "Network Segmentation", "Container Security", "Kubernetes Security", "Secrets Management"];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">CLOUD</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Secure Multi-Cloud Infrastructure</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.03}>
              <div className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-emerald-500/30 hover:bg-zinc-900/10 transition-all duration-300 text-center flex items-center justify-center h-full min-h-[100px]">
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
// 9. APPLICATION & DEVSECOPS SECURITY
// ==========================================
const DevSecOpsSecurity = () => {
  const items = ["Secure SDLC", "SAST", "DAST", "Dependency Scanning", "Container Image Security", "API Security", "Secrets Detection", "Supply Chain Security"];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">DEVSECOPS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Secure Software Delivery</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.03}>
              <div className="p-5 bg-zinc-950/40 border border-zinc-900 rounded-xl hover:border-purple-500/30 hover:bg-zinc-900/10 transition-all duration-300 text-center flex items-center justify-center h-full min-h-[90px]">
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
// 10. THREAT DETECTION & RESPONSE
// ==========================================
const ThreatDetection = () => {
  const items = ["SIEM", "SOAR", "Threat Intelligence", "Vulnerability Management", "Endpoint Detection & Response", "Security Analytics", "Incident Response", "Digital Forensics"];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">SOC</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Intelligent Threat Monitoring</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.03}>
              <div className="p-5 bg-zinc-950/40 border border-zinc-900 rounded-xl hover:border-rose-500/30 hover:bg-zinc-900/10 transition-all duration-300 text-center flex items-center justify-center h-full min-h-[90px]">
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
    { name: "Identity", items: [{ name: "Microsoft Entra ID", logo: "/assets/Tech_logos/Microsoft-Azure.svg" }, { name: "Okta", logo: null }, { name: "Auth0", logo: null }, { name: "Ping Identity", logo: null }] },
    { name: "Cloud Security", items: [{ name: "Microsoft Defender", logo: "/assets/Tech_logos/Microsoft-Azure.svg" }, { name: "AWS Security Hub", logo: "/assets/Tech_logos/AWS.svg" }, { name: "Google Security Command Center", logo: "/assets/Tech_logos/Google_Cloud.svg" }, { name: "Prisma Cloud", logo: null }] },
    { name: "Network Security", items: [{ name: "Cisco", logo: null }, { name: "Fortinet", logo: null }, { name: "Palo Alto", logo: null }, { name: "Zscaler", logo: null }, { name: "Cloudflare", logo: null }] },
    { name: "DevSecOps", items: [{ name: "SonarQube", logo: null }, { name: "Trivy", logo: null }, { name: "Snyk", logo: null }, { name: "Checkmarx", logo: null }, { name: "GitHub Advanced Security", logo: "/assets/Tech_logos/GitHub.svg" }] },
    { name: "SIEM & SOC", items: [{ name: "Microsoft Sentinel", logo: "/assets/Tech_logos/Microsoft-Azure.svg" }, { name: "Splunk", logo: null }, { name: "Elastic Security", logo: "/assets/Tech_logos/Elastic.svg" }, { name: "QRadar", logo: null }, { name: "Wazuh", logo: null }] },
    { name: "Endpoint Security", items: [{ name: "CrowdStrike", logo: null }, { name: "Microsoft Defender", logo: "/assets/Tech_logos/Microsoft-Azure.svg" }, { name: "SentinelOne", logo: null }, { name: "Sophos", logo: null }] },
    { name: "Secrets & IAM", items: [{ name: "HashiCorp Vault", logo: "/assets/Tech_logos/HashiCorp.svg" }, { name: "Azure Key Vault", logo: "/assets/Tech_logos/Microsoft-Azure.svg" }, { name: "AWS Secrets Manager", logo: "/assets/Tech_logos/AWS.svg" }, { name: "Google Secret Manager", logo: "/assets/Tech_logos/Google_Cloud.svg" }] }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-6xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">ECOSYSTEM</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Technologies We Use</h2>
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
// 12. BUSINESS OUTCOMES
// ==========================================
const BusinessOutcomes = () => {
  const outcomes = [
    { value: "99.9%", title: "Security Visibility" },
    { value: "Zero Trust", title: "Identity Protection" },
    { value: "24×7", title: "Threat Monitoring" },
    { value: "Continuous", title: "Compliance" },
    { value: "Reduced", title: "Security Risks" },
    { value: "Enterprise", title: "Resilience" }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
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
// 13. INDUSTRY USE CASES
// ==========================================
const IndustryUseCases = () => {
  const useCases = [
    { title: "Banking", tag: "Finance", desc: "Fraud prevention, secure digital banking, PCI compliance.", image: "/webp/assets/common/945ab601f043c558e0a8162da2a1eb4c-1.webp" },
    { title: "Healthcare", tag: "Health", desc: "Patient data protection and healthcare compliance.", image: "/webp/assets/common/9d91b93f83e6d4cd494ec13611b3e50e-1.webp" },
    { title: "Retail", tag: "Commerce", desc: "Secure payment systems and customer identity protection.", image: "/webp/assets/common/b384eb0438c55e43c61e7595acc29638-1.webp" },
    { title: "Manufacturing", tag: "Industrial", desc: "Industrial IoT security and operational resilience.", image: "/webp/assets/common/e76e125035885aab9c9070ce85df239e-1.webp" },
    { title: "Telecommunications", tag: "Networking", desc: "Network security and secure service delivery.", image: "/webp/assets/common/f03cc521fb070dfae9d87768b791ff70-1.webp" },
    { title: "Government", tag: "Public", desc: "Citizen data protection and secure digital services.", image: "/webp/assets/common/f317dd71184f5c47d601eeb9508bf92c-1.webp" },
    { title: "Education", tag: "Learning", desc: "Identity management and campus security.", image: "/webp/assets/common/45ea830d170d382ade235db479060da7-1.webp" },
    { title: "Logistics", tag: "Supply Chain", desc: "Supply chain protection and operational security.", image: "/webp/assets/common/2fe7f9184c515b0c515ce38bc8a25efa-1.webp" }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
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
// 14. WHY DEVOPSTRIO CYBERSECURITY
// ==========================================
const WhyChooseCybersecurity = () => {
  const items = [
    "Security by Design", "Zero Trust Architecture", "Cloud Security Expertise", "DevSecOps Integration",
    "Continuous Monitoring", "Compliance Ready", "Threat Intelligence", "Enterprise-Scale Protection"
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">WHY DEVOPSTRIO</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Why Devopstrio Cybersecurity</h2>
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
// 15. FAQ
// ==========================================
const TechnologyFAQ = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    { q: "What cybersecurity technologies does Devopstrio use?", a: "We leverage a best-in-class security stack including Microsoft Security, CrowdStrike, Palo Alto, Okta, HashiCorp, and cloud-native security tools from Azure, AWS, and GCP." },
    { q: "Do you implement Zero Trust architecture?", a: "Yes. We design and implement Zero Trust principles where no entity is inherently trusted, requiring continuous verification of identities, devices, and network access." },
    { q: "Can you secure multi-cloud environments?", a: "Absolutely. We utilize Cloud Security Posture Management (CSPM) and Cloud Workload Protection Platforms (CWPP) to secure unified operations across AWS, Azure, and Google Cloud." },
    { q: "How do you integrate security into DevOps?", a: "We build DevSecOps pipelines by integrating SAST, DAST, dependency scanning, and container security natively into CI/CD workflows using tools like SonarQube, GitHub Advanced Security, and Snyk." },
    { q: "Which compliance frameworks are supported?", a: "We design security architectures that help organizations achieve and maintain compliance with frameworks such as SOC 2, ISO 27001, HIPAA, PCI DSS, and GDPR." },
    { q: "Do you provide continuous security monitoring?", a: "Yes, we implement SIEM and SOAR solutions like Microsoft Sentinel and Elastic Security to provide 24/7 threat detection, analytics, and automated incident response." },
    { q: "Can you protect APIs and containers?", a: "Yes, we harden API gateways, implement Web Application Firewalls (WAF), and secure Kubernetes clusters and Docker containers against runtime threats." },
    { q: "How do you manage enterprise identities?", a: "We deploy robust IAM architectures featuring Single Sign-On (SSO), Multi-Factor Authentication (MFA), and Privileged Access Management (PAM) using Entra ID and Okta." }
  ];

  return (
    <section className="w-full py-24 bg-black text-white relative border-b border-zinc-900/60">
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
// 16. CTA
// ==========================================
const TechnologyCTA = () => {
  return (
    <section className="w-full py-32 bg-[#030303] text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 xl:px-8 relative z-10">
        <Reveal>
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">GET STARTED</span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-black mb-6 tracking-tight text-white">
            Secure Your Digital Enterprise
          </h2>
          <p className="text-zinc-300 text-sm md:text-base font-semibold mb-10 max-w-xl mx-auto leading-relaxed">
            Strengthen your security posture with modern cybersecurity technologies, intelligent monitoring, Zero Trust architecture, and cloud-native protection from Devopstrio.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact#contact-form" className="inline-flex items-center gap-3 pl-6 pr-3 py-3.5 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              Speak with a Security Expert
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link href="/contact#contact-form" className="px-6 py-4 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300">
              Start Your Security Assessment
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
export default function CybersecurityPage() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <Hero
        badge="Technology Stack"
        title={
          <>
            Enterprise <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Cybersecurity
            </span>
          </>
        }
        subtitle="Architect the impenetrable enterprise. We engineer resilient Zero Trust architectures, advanced threat detection, and cloud-native security frameworks to protect your critical digital assets."
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
          { label: "CYBERSECURITY" }
        ]}
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact#contact-form" className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5">
            Explore Security Solutions
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link href="/contact#contact-form" className="px-6 py-4 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300">
            Speak with a Security Expert
          </Link>
        </div>
      </Hero>

      <CybersecurityOverview />
      <SecurityChallenges />
      <ZeroTrustArchitecture />
      <SecurityDomains />
      <SecurityLifecycle />
      <IdentitySecurity />
      <CloudInfrastructureSecurity />
      <DevSecOpsSecurity />
      <ThreatDetection />
      <TechnologyStack />
      <BusinessOutcomes />
      <IndustryUseCases />
      <WhyChooseCybersecurity />
      <TechnologyFAQ />
      <TechnologyCTA />
    </main>
  );
}
