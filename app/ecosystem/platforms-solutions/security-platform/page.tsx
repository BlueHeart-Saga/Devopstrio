"use client";

import React, { useState, useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  Lock, Shield, ShieldAlert, Key, Activity, Eye, Layers, Sparkles, Cpu,
  Workflow, Server, CheckCircle2, ArrowUpRight, Plus, Minus, Terminal,
  Network, Globe, Database, AlertTriangle, TrendingUp, Users, Check,
  ChevronRight, Search, FileText, Sliders, ShieldCheck, EyeOff, Gauge,
  Zap, BarChart2, Settings, Mail, HardDrive, Bell, RefreshCw, Filter,
  Layers3, Compass, CheckSquare, Target, HelpCircle, PhoneCall, AlertCircle
} from "lucide-react";
import Link from "next/link";
import { Hero } from "@/components/services/Hero";

// ==========================================
// 2. PLATFORM OVERVIEW (SecurityOverview)
// ==========================================
const SecurityOverview = () => {
  const cards = [
    { title: "Identity & Access Management", desc: "SAML/OIDC integrations, Zero Trust browser credentials, and dynamic token authenticators.", icon: Lock },
    { title: "Threat Detection", desc: "Automated classification of staging threat logs and real-time scanning algorithms.", icon: ShieldAlert },
    { title: "Security Monitoring", desc: "Continuous event monitoring and index analytics maps for immediate situational audits.", icon: Activity },
    { title: "Compliance Management", desc: "Built-in controls measuring real-time operations alignment with global security frameworks.", icon: CheckCircle2 },
    { title: "Vulnerability Management", desc: "Automated scanner modules prioritizing staging exposures and server patches.", icon: Cpu },
    { title: "Incident Response", desc: "Targeted workflow containment routines resolving anomalies and routing priority alerts.", icon: Workflow }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">PLATFORM OVERVIEW</span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              One Platform for Complete Enterprise Protection
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Organizations now manage users, cloud infrastructure, endpoints, applications, APIs, and sensitive data across multiple environments. Our Security Platform brings everything together into a single, intelligent security layer that continuously protects, monitors, and responds to threats.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-rose-500/20 hover:shadow-[0_0_30px_rgba(225,29,72,0.03)] transition-all duration-300 min-h-[170px] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center mb-5 border border-rose-500/10">
                    <card.icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{card.title}</h3>
                </div>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold">{card.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 3. SECURITY CHALLENGES (SecurityChallenges)
// ==========================================
const SecurityChallenges = () => {
  const challenges = [
    { title: "Increasing Cyber Threats", desc: "Volume and sophistication of automated cyber threats targeting enterprise assets." },
    { title: "Identity & Access Risks", desc: "Weak access policies leading to compromised developer accounts." },
    { title: "Cloud Security Complexity", desc: "Misconfigured endpoints and unencrypted storage buckets in staging." },
    { title: "Compliance Requirements", desc: "Navigating evolving regulations without automated monitoring reports." },
    { title: "Manual Security Operations", desc: "Inefficient response rules slowing threat isolation workflows." },
    { title: "Lack of Visibility", desc: "Fragmented logs obscuring server vulnerabilities and threat routes." },
    { title: "Insider Threats", desc: "Preventing unauthorized access attempts by compromised internal credentials." },
    { title: "Ransomware Attacks", desc: "Mitigating malicious encryption attacks before endpoints are isolated." }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.015),transparent_70%)] blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">THE RISK LANDSCAPE</span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">Modern Security Challenges</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {challenges.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-6 bg-zinc-950/20 border border-zinc-900 rounded-xl hover:border-rose-500/20 transition-all duration-300 flex flex-col justify-between min-h-[160px]">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  <h3 className="text-sm md:text-base font-bold text-zinc-100 tracking-tight leading-tight">{item.title}</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-bold">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 4. PLATFORM CAPABILITIES (SecurityCapabilities)
// ==========================================
const SecurityCapabilities = () => {
  const capabilities = [
    { title: "Identity & Access Security", desc: "Enforce granular role-based access rules and Zero Trust browser credentials dynamically.", icon: Lock },
    { title: "Endpoint Protection", desc: "Isolate network configurations, secure cloud containers, and validate user signatures.", icon: Shield },
    { title: "Cloud Security", desc: "Audit configurations across Azure, AWS, and GCP endpoints automatically.", icon: Server },
    { title: "Threat Intelligence", desc: "Access continuous global threat feeds to map vulnerabilities against staging infrastructure.", icon: Network },
    { title: "Vulnerability Management", desc: "Scan dependency packages weekly to identify, classify, and prioritize code patches.", icon: Cpu },
    { title: "Security Monitoring", desc: "Monitor threat indicators via a 24×7 SOC dashboard tracking VPC connections.", icon: Activity },
    { title: "Compliance Automation", desc: "Deploy continuous audits to keep cloud posture aligned with global certifications.", icon: CheckSquare },
    { title: "Incident Response", desc: "Deploy automated playbook rules to isolate compromised credentials rapidly.", icon: Workflow }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">CORE CAPABILITIES</span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">Enterprise Security Capabilities</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="group flex flex-col text-left p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-rose-500/20 hover:shadow-[0_0_30px_rgba(225,29,72,0.02)] transition-all duration-300">
                <div className="w-12 h-12 rounded-[14px] bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-rose-500/40 group-hover:bg-rose-500/5 transition-all duration-300">
                  <item.icon className="w-5 h-5 text-rose-500" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-rose-400 transition-colors duration-300">
                  {item.title}
                </h3>
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
// 5. SECURITY ARCHITECTURE (SecurityArchitecture)
// ==========================================
const SecurityArchitecture = () => {
  const nodes = [
    { title: "Users / Endpoints / Apps / Cloud", icon: Users, status: "Secure Connections Only" },
    { title: "Identity Layer", icon: Lock, status: "SSO / OIDC Authentication" },
    { title: "Security Gateway", icon: Shield, status: "WAF & Traffic Filters" },
    { title: "Threat Detection Engine", icon: Cpu, status: "AI Behavioral Scanner" },
    { title: "SIEM / SOC Logs", icon: Database, status: "Immutable Event Archive" },
    { title: "AI Analytics Block", icon: Sparkles, status: "Heuristics & Risk Scoring" },
    { title: "Automation Engine", icon: Workflow, status: "Automated Incident Playbooks" },
    { title: "Compliance & Reporting", icon: CheckSquare, status: "Continuous Posture Audits" },
    { title: "Security Dashboard", icon: BarChart2, status: "Single Pane Operations Console" }
  ];

  return (
    <section className="w-full py-24 bg-[#050505] border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.015),transparent_70%)] blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">ARCHITECTURE</span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Enterprise Security Reference Architecture
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Traffic traverses identity layer firewalls, policy gateways, and machine learning engines before accessing isolated resource layers.
            </p>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto relative pl-8 md:pl-0">
          {/* Glowing Connecting Line */}
          <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-500 via-rose-950 to-zinc-900 -translate-x-1/2 z-0" />

          {nodes.map((node, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className="relative z-10 mb-10 last:mb-0 flex flex-col md:flex-row items-start md:items-center justify-between">
                {/* Left Side (Desktop Only) */}
                <div className={`w-full md:w-[45%] hidden md:block text-right pr-8 ${isEven ? "" : "opacity-0 pointer-events-none"}`}>
                  <h4 className="text-sm font-mono text-zinc-550 uppercase tracking-wider">{`Layer 0${idx + 1}`}</h4>
                  <h3 className="text-lg font-bold text-white mb-1 tracking-tight">{node.title}</h3>
                  <span className="text-xs text-rose-500 font-semibold">{node.status}</span>
                </div>

                {/* Center Node Bullet */}
                <div className="absolute left-[31px] md:left-1/2 w-8 h-8 rounded-full bg-zinc-950 border-2 border-rose-500 flex items-center justify-center -translate-x-1/2 z-20 shadow-[0_0_20px_rgba(225,29,72,0.4)]">
                  <node.icon className="w-3.5 h-3.5 text-rose-500" />
                </div>

                {/* Right Side / Mobile Layout */}
                <div className={`w-full md:w-[45%] pl-8 md:pl-8 text-left ${isEven ? "md:opacity-0 md:pointer-events-none" : ""}`}>
                  <div className="md:hidden">
                    <h4 className="text-[10px] font-mono text-zinc-550 uppercase tracking-wider">{`Layer 0${idx + 1}`}</h4>
                    <h3 className="text-base font-bold text-white mb-1 tracking-tight">{node.title}</h3>
                    <span className="text-xs text-rose-500 font-semibold">{node.status}</span>
                  </div>
                  <div className="hidden md:block">
                    <h4 className="text-sm font-mono text-zinc-550 uppercase tracking-wider">{`Layer 0${idx + 1}`}</h4>
                    <h3 className="text-lg font-bold text-white mb-1 tracking-tight">{node.title}</h3>
                    <span className="text-xs text-rose-500 font-semibold">{node.status}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 6. CORE SECURITY MODULES (SecurityModules)
// ==========================================
const SecurityModules = () => {
  const modules = [
    { title: "Identity Management", desc: "Centralize corporate directory validation with Zero Trust identity bindings.", icon: Lock },
    { title: "Endpoint Security", desc: "Isolate software components, check configuration baselines, and scan user nodes.", icon: Shield },
    { title: "Cloud Security", desc: "Deploy continuous posture checks to secure compute instances and storage buckets.", icon: Server },
    { title: "Network Security", desc: "Monitor active VPC flow logs and filter connections using smart firewall rules.", icon: Network },
    { title: "Email Protection", desc: "Shield internal directories by filtering malicious attachment patterns.", icon: Mail },
    { title: "SIEM Monitoring", desc: "Index global server logs and retain historical audit trails in immutable storage.", icon: Database },
    { title: "Compliance Center", desc: "Evaluate configurations automatically against ISO, SOC 2, and PCI-DSS policies.", icon: CheckSquare },
    { title: "Incident Response", desc: "Trigger automated containment scripts to revoke compromised user certificates.", icon: Workflow }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">PLATFORM MODULES</span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">Core Security Modules</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-6 bg-zinc-950/20 border border-zinc-900 rounded-2xl hover:border-zinc-800 transition-all duration-300 min-h-[175px] flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5">
                    <item.icon className="w-4 h-4 text-rose-500" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-bold">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 7. THREAT DETECTION WORKFLOW (ThreatWorkflow)
// ==========================================
const ThreatWorkflow = () => {
  const steps = [
    { step: "01", name: "Monitor", desc: "Collect data across global nodes, endpoints, and storage assets in real-time.", icon: Activity },
    { step: "02", name: "Detect", desc: "Analyze connections against threat feeds to flag suspicious activities.", icon: ShieldAlert },
    { step: "03", name: "Analyze", desc: "Evaluate staging logs and dependencies inside containment playbooks.", icon: Cpu },
    { step: "04", name: "Prioritize", desc: "Assess incident severity to score risk patterns and organize response queues.", icon: Sliders },
    { step: "05", name: "Respond", desc: "Isolate compromised virtual networks or suspend user tokens automatically.", icon: Workflow },
    { step: "06", name: "Recover", desc: "Roll back configurations, deploy server patches, and update firewall structures.", icon: RefreshCw }
  ];

  const staggerClasses = [
    "translate-y-0",                      // Card 1
    "md:translate-y-8 lg:translate-y-8",  // Card 2
    "lg:translate-y-16",                  // Card 3
    "md:translate-y-8 lg:translate-y-0",  // Card 4
    "lg:translate-y-8",                   // Card 5
    "md:translate-y-8 lg:translate-y-16", // Card 6
  ];

  return (
    <section className="w-full pt-24 pb-36 bg-[#030303] text-white border-b border-zinc-900 relative">
      {/* Background glowing mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        {/* Header Section */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              PLAYBOOK SEC
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white uppercase">
              Threat Detection <span className="text-rose-500">Workflow</span>
            </h2>
          </div>
        </Reveal>

        {/* 6-Step Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.step} delay={idx * 0.05}>
                <div className={`relative overflow-hidden bg-zinc-950/35 border border-white/10 rounded-3xl p-8 min-h-[260px] h-full flex flex-col justify-between backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:bg-zinc-900/10 transition-all duration-300 ${staggerClasses[idx] || ""}`}>

                  <div>
                    {/* Header: Large Styled Number & Icon */}
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-6xl font-mono font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-rose-500/30 via-rose-500/15 to-transparent select-none drop-shadow-[0_4px_16px_rgba(225,29,72,0.25)]">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-rose-600/10 text-rose-500 flex items-center justify-center">
                        <Icon size={18} />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg font-bold text-white mb-3 hover:text-rose-400 transition-colors duration-300">
                      {step.name}
                    </h3>

                    {/* Step Description */}
                    <p className="text-sm text-zinc-300 font-semibold leading-relaxed">
                      {step.desc}
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
// 8. PLATFORM FEATURES (SecurityFeatures)
// ==========================================
const SecurityFeatures = () => {
  const features = [
    { title: "Multi-cloud security", desc: "Protect Amazon AWS, Google Cloud, and Microsoft Azure directories dynamically." },
    { title: "Continuous monitoring", desc: "Map VPC flow logs and track configuration audits across all servers." },
    { title: "AI threat detection", desc: "Classify anomalies, score risks, and identify compromised signatures using heuristics." },
    { title: "Zero Trust access", desc: "Establish strict least-privilege security boundaries and validate browser signatures." },
    { title: "Security analytics", desc: "Index global server logs and generate dashboard visualizations in real-time." },
    { title: "Vulnerability scanning", desc: "Audit base repository packages to trace vulnerability targets and apply patches." },
    { title: "Threat intelligence", desc: "Sync platform firewalls with live cybersecurity threat feeds dynamically." },
    { title: "Compliance automation", desc: "Audit posture weekly to compile compliance metrics and export audit reports." },
    { title: "Risk scoring", desc: "Assign active risk scores to servers and applications to queue incident priorities." },
    { title: "Audit reporting", desc: "Compile infrastructure security metadata into formatted templates automatically." },
    { title: "Security dashboards", desc: "Manage threat vectors, logs, and active playbooks inside one centralized panel." },
    { title: "Automated remediation", desc: "Deploy containment scripts to block malicious egress routes instantly." }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">PLATFORM FEATURES</span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">Platform Features</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-6 bg-zinc-950/20 border border-zinc-900 rounded-xl hover:border-zinc-800 transition-all duration-300 min-h-[140px] flex flex-col justify-between">
                <h3 className="text-base font-bold text-zinc-100 tracking-tight mb-2">{item.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-bold">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 9. COMPLIANCE & GOVERNANCE (ComplianceSection)
// ==========================================
const ComplianceSection = () => {
  const complianceFrameworks = [
    { title: "ISO 27001", badge: "Information Security", desc: "Continuous checks on corporate directory access controls and data encryptions." },
    { title: "SOC 2 Type II", badge: "Trust Principles", desc: "Validate cloud storage configurations, logging archives, and firewall boundaries." },
    { title: "GDPR", badge: "Data Privacy", desc: "Ensure user data residency compliance and track personal database endpoints." },
    { title: "HIPAA", badge: "Healthcare", desc: "Secure electronic health record logs and establish strict administrative rules." },
    { title: "PCI-DSS", badge: "Payment Card", desc: "Audit staging merchant transaction ports and encrypt checkout application files." },
    { title: "NIST Framework", badge: "Cybersecurity", desc: "Align with national standard controls to structure response playbooks." },
    { title: "CIS Controls", badge: "Hardening Guide", desc: "Verify container base configurations against standard benchmark models." },
    { title: "Cyber Essentials", badge: "Infrastructure", desc: "Achieve base system perimeter protections and prevent script exploits." }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">AUDIT READY</span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">Built for Regulatory Compliance</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {complianceFrameworks.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl flex flex-col justify-between min-h-[200px] hover:border-zinc-800 transition-all duration-300">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-bold text-white tracking-tight">{item.title}</h3>
                    <span className="text-[9px] font-mono text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/10">
                      PASSED
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-zinc-550 uppercase tracking-widest block mb-4">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-bold">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 10. SUPPORTED TECHNOLOGIES (TechnologyStack)
// ==========================================
const TechnologyStack = () => {
  const logos = [
    { name: "AWS Security Hub", src: "/assets/Tech_logos/AWS.svg" },
    { name: "Google SCC", src: "/assets/Tech_logos/Google_Cloud.svg" },
    { name: "Azure AD", src: "/assets/Tech_logos/Microsoft%20Azure.svg" },
    { name: "Cisco Security", src: "/assets/Tech_logos/cisco.svg" },
    { name: "Elastic", src: "/assets/Tech_logos/Elastic.svg" },
    { name: "Microsoft Defender", src: "/assets/Home-page/partners/Microsoft.svg" },
    { name: "Microsoft Sentinel", src: "/assets/Home-page/partners/Microsoft.svg" },
    { name: "CrowdStrike Falcon", icon: ShieldCheck },
    { name: "Palo Alto Networks", icon: ShieldCheck },
    { name: "Fortinet Gateway", icon: ShieldCheck },
    { name: "Okta Identity", icon: ShieldCheck },
    { name: "Splunk Observability", icon: ShieldCheck },
    { name: "Wazuh SIEM", icon: ShieldCheck },
    { name: "Qualys", icon: ShieldCheck },
    { name: "Rapid7 Scanners", icon: ShieldCheck },
    { name: "Tenable Vulnerability", icon: ShieldCheck }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">INTEGRATIONS</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-6">Supported Technologies</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {logos.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.03}>
              <div className="p-4 bg-zinc-950/20 border border-zinc-900 rounded-xl flex flex-col items-center justify-center text-center h-28 hover:border-zinc-800 transition-all duration-300 group">
                {item.src ? (
                  <img src={item.src} alt={item.name} className="h-7 object-contain mb-3 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                ) : (
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-3">
                    <ShieldCheck className="w-4 h-4 text-rose-500" />
                  </div>
                )}
                <span className="text-[10px] font-bold text-zinc-400 group-hover:text-white transition-colors">
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
// 11. AI-POWERED SECURITY (AISecurity)
// ==========================================
const AISecurity = () => {
  const pillars = [
    {
      num: "01",
      icon: Database,
      title: "Event Aggregation",
      desc: "Aggregates millions of network parameters across VPC traffic paths, active nodes, and endpoint assets in real-time.",
      numColor: "text-rose-500",
      hoverColor: "group-hover:text-rose-500 group-hover:border-rose-500/30",
      glowColor: "rgba(244, 63, 94, 0.04)",
      borderColor: "rgba(244, 63, 94, 0.2)"
    },
    {
      num: "02",
      icon: Cpu,
      title: "Behavioral Heuristics",
      desc: "Filters normal logs and identifies abnormal connection pathways using smart machine learning templates.",
      numColor: "text-[#9F8EC9]",
      hoverColor: "group-hover:text-[#9F8EC9] group-hover:border-[#9F8EC9]/30",
      glowColor: "rgba(159, 142, 201, 0.04)",
      borderColor: "rgba(159, 142, 201, 0.2)"
    },
    {
      num: "03",
      icon: AlertTriangle,
      title: "Anomalous Scoring",
      desc: "Isolates threat indicators and assigns active risk severity levels from 0 to 100 on our unified dashboard.",
      numColor: "text-[#5EA5E0]",
      hoverColor: "group-hover:text-[#5EA5E0] group-hover:border-[#5EA5E0]/30",
      glowColor: "rgba(94, 165, 224, 0.04)",
      borderColor: "rgba(94, 165, 224, 0.2)"
    },
    {
      num: "04",
      icon: Zap,
      title: "Autonomous Response",
      desc: "Triggers automatic playbook containment steps like revoking certificates and blocking staging ports before teams are paged.",
      numColor: "text-[#86D16F]",
      hoverColor: "group-hover:text-[#86D16F] group-hover:border-[#86D16F]/30",
      glowColor: "rgba(134, 209, 111, 0.04)",
      borderColor: "rgba(134, 209, 111, 0.2)"
    }
  ];

  return (
    <section className="py-24 bg-[#030303] text-white relative overflow-hidden border-b border-zinc-900/60">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 xl:px-8 relative z-10 text-left">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              MACHINE LEARNING
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white uppercase">
              AI-Driven Threat Intelligence
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold mt-3">
              Artificial Intelligence continuously analyzes security events to identify suspicious behavior, detect anomalies, prioritize risks, and recommend automated responses before threats impact business operations.
            </p>
          </Reveal>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Reveal key={idx} delay={idx * 0.05 + 0.05}>
                <div className="group relative rounded-[2rem] p-8 bg-[#0A0A0C]/55 border border-zinc-900/90 hover:border-zinc-800 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between min-h-[340px] text-center overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)]">

                  {/* Subtle color-matching radial glow background on card hover */}
                  <div className="absolute -inset-px rounded-[2rem] transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none z-0"
                    style={{
                      background: `radial-gradient(circle at 50% 100%, ${p.glowColor}, transparent 65%)`,
                      border: `1px solid ${p.borderColor}`
                    }} />

                  <div className="relative z-10 flex flex-col items-center justify-between h-full w-full">

                    {/* Top Portion: Infographic Slit & Number */}
                    <div className="w-full flex flex-col items-center">
                      <div className="relative w-full h-20 overflow-hidden flex items-end justify-center">
                        {/* Number peeking from slot */}
                        <span className={`text-[6.5rem] font-black font-sans leading-none tracking-tighter select-none translate-y-[24px] transition-transform duration-500 ease-out group-hover:translate-y-[8px] ${p.numColor}`}>
                          {p.num}
                        </span>
                        {/* Shadow overlay to give pocket slit depth */}
                        <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/40 to-transparent pointer-events-none opacity-20" />
                      </div>

                      {/* Pocket Slit Horizontal Line */}
                      <div className="w-full h-px bg-zinc-850 relative">
                        <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-[#0A0A0C] to-transparent -translate-y-full opacity-90" />
                      </div>

                      {/* Title */}
                      <h3 className="text-sm font-bold uppercase tracking-wider text-white mt-7 mb-3 transition-colors duration-300">
                        {p.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed max-w-[210px]">
                        {p.desc}
                      </p>
                    </div>

                    {/* Bottom Portion: Icon */}
                    <div className={`w-9 h-9 rounded-full bg-zinc-950/80 border border-zinc-900 flex items-center justify-center text-zinc-500 mt-6 ${p.hoverColor} transition-all duration-500 group-hover:scale-110`}>
                      <Icon size={14} strokeWidth={2.5} />
                    </div>

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
// 12. BUSINESS OUTCOMES (BusinessOutcomes)
// ==========================================
const BusinessOutcomes = () => {
  const metrics = [
    { value: "99.9%", title: "Security Visibility", desc: "Full index mappings of internal server directories and credentials." },
    { value: "24×7", title: "Continuous Monitoring", desc: "Autonomous threat scanners monitoring live network streams." },
    { value: "80%", title: "Faster Threat Detection", desc: "Reducing vector scanning delays using dynamic database metrics." },
    { value: "60%", title: "Reduced Response Time", desc: "Automated workflows block egress routes before teams are paged." },
    { value: "100%", title: "Compliance Reporting", desc: "Real-time posture exports ready for external security audits." },
    { value: "Zero Trust", title: "Identity Protection", desc: "Continuous signature authentication of all system connections." }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">IMPACT SUMMARY</span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight text-white mb-6">Business Outcomes</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-6 bg-zinc-950/20 border border-zinc-900 rounded-2xl flex flex-col justify-between min-h-[160px] hover:border-zinc-800 transition-all duration-300">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">{item.value}</div>
                  <h3 className="text-sm md:text-base font-bold text-rose-500 mb-2 tracking-tight">{item.title}</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-bold">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 13. INDUSTRY USE CASES (IndustryUseCases)
// ==========================================
const IndustryUseCases = () => {
  const useCases = [
    { title: "Banking & Finance", desc: "Monitor transaction logs and audit directories continuously to prevent fraudulent access.", icon: Database },
    { title: "Healthcare & Med", desc: "Secure database endpoints and encrypt medical records to keep storage HIPAA compliant.", icon: Shield },
    { title: "Retail & E-comm", desc: "Audit customer checkout channels and secure payment API endpoints in real-time.", icon: Zap },
    { title: "Manufacturing", desc: "Isolate operational tech environments and lock down staging server nodes.", icon: Cpu },
    { title: "Government Agencies", desc: "Establish strict access credentials and index audit streams to protect citizen files.", icon: Lock },
    { title: "Telecommunications", desc: "Monitor infrastructure metrics and filter large volume network routing lines.", icon: Network }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        {/* Header */}
        <Reveal>
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">SECTOR DEPLOYMENTS</span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight text-white mb-4">
              Comprehensive security built to protect your business
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
              Explore integrated security solutions designed to protect specific industry regulatory frameworks and compliance standards.
            </p>
          </div>
        </Reveal>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left tall card */}
          <div className="lg:col-span-4 h-full min-h-[420px]">
            <Reveal className="h-full">
              <div className="relative overflow-hidden rounded-3xl h-full flex flex-col justify-end p-8 bg-zinc-900 border border-zinc-800 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] group">
                <div className="absolute inset-0 z-0">
                  <img
                    src="/assets/industry_case_cover.png"
                    alt="Layered security cover"
                    className="w-full h-full object-cover opacity-25 group-hover:scale-105 transition-transform duration-750"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent" />
                </div>

                <div className="relative z-10 flex flex-col h-full justify-between items-start">
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-rose-500 bg-rose-500/10 px-3.5 py-1 rounded-full mb-8">
                    TAILORED POLICIES
                  </span>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-tight">
                      Devopstrio Security <br />delivers layered protection
                    </h3>
                    <p className="text-xs text-zinc-450 leading-relaxed font-bold mb-6 max-w-sm">
                      Deploy custom playbooks and zero trust compliance profiles tailored for unique sector environments.
                    </p>
                    <Link
                      href="/contact"
                      className="px-5 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-white text-black hover:bg-zinc-200 transition-all duration-300 shadow-md shadow-white/5"
                    >
                      Secure Your Sector
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Cards grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 h-full">
              {useCases.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Reveal key={idx} delay={idx * 0.05} className="h-full">
                    <div className="relative group rounded-3xl p-6 bg-zinc-950/45 border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/10 transition-all duration-500 flex flex-col justify-between h-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
                      <div>
                        {/* Icon at top */}
                        <div className="w-10 h-10 rounded-2xl bg-rose-600/10 text-rose-500 flex items-center justify-center mb-5">
                          <Icon size={18} />
                        </div>
                        <h4 className="text-sm md:text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-xs text-zinc-400 leading-relaxed font-bold">
                          {item.desc}
                        </p>
                      </div>

                      {/* Link at bottom */}
                      <div className="mt-5">
                        <Link href="/contact" className="text-xs font-semibold text-rose-500 hover:text-rose-400 hover:underline inline-flex items-center gap-1.5 transition-all">
                          Learn more <ChevronRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 14. WHY DEVOPSTRIO SECURITY PLATFORM (WhyChoosePlatform)
// ==========================================
const WhyChoosePlatform = () => {
  const benefits = [
    { title: "Security by Design", desc: "Enforce strict verification defaults across all infrastructure blueprints." },
    { title: "AI-Powered Detection", desc: "Detect complex anomalous signatures without configuring complex manual alerts." },
    { title: "Cloud Native Layer", desc: "Instantly deploy controls inside AWS, Google Cloud, and Microsoft Azure nodes." },
    { title: "Zero Trust Architecture", desc: "Establish rigid security perimeters validating browser access routes continuously." },
    { title: "Continuous Monitoring", desc: "Index server logs and VPC traffic streams automatically inside live dashboards." },
    { title: "Compliance Ready", desc: "Generate audit-ready postures aligned with SOC 2, HIPAA, and PCI directives." },
    { title: "Automated Response", desc: "Contain threats instantly through policy rule actions before logs are compiled." },
    { title: "Enterprise Scalability", desc: "Scale security checks across thousands of users, nodes, and APIs." }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">WHY DEVOPSTRIO</span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight text-white mb-6">Why Devopstrio Security Platform</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-6 bg-zinc-950/20 border border-zinc-900 rounded-2xl flex flex-col justify-between min-h-[150px] hover:border-zinc-800 transition-all duration-300">
                <h3 className="text-base font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-bold">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 15. RELATED SOLUTIONS (RelatedSolutions)
// ==========================================
const RelatedSolutions = () => {
  const solutions = [
    { title: "Cybersecurity Services", desc: "Access hands-on expert consultants to structure global governance matrices." },
    { title: "Managed SOC", desc: "Outsource threat log monitoring and incident prioritization to 24×7 watch teams." },
    { title: "Cloud Security", desc: "Secure Azure, AWS, and GCP compute instances and isolated storage paths." },
    { title: "DevSecOps Integration", desc: "Automate code dependency scans and secure pipeline delivery templates." },
    { title: "Compliance Services", desc: "Compile infrastructure evidence to ready configurations for ISO audits." },
    { title: "Managed Services", desc: "Delegate backend operations, cloud setups, and application updates." },
    { title: "Identity Management", desc: "Deploy Okta directories, SAML integrations, and access authenticators." },
    { title: "Risk Assessment", desc: "Verify cloud configurations against security templates to audit vulnerabilities." }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">ECOSYSTEM LINKS</span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight text-white mb-6">Related Solutions</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl flex flex-col justify-between min-h-[170px] hover:border-zinc-800 transition-all duration-300">
                <h3 className="text-base font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-bold mb-4">{item.desc}</p>
                <Link href="/contact" className="text-xs text-rose-500 font-bold hover:underline flex items-center gap-1">
                  Learn More <ArrowUpRight size={12} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 16. FAQ SECTION (SecurityFAQ)
// ==========================================
const SecurityFAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    { q: "What does the Security Platform protect?", a: "It protects corporate directories, cloud networks (AWS, GCP, Azure), virtual server endpoints, containerized application files, and databases from exploits and unauthorized access." },
    { q: "Does it support multi-cloud environments?", a: "Yes, it unifies audit logging, IAM validation matrices, and threat scans across Amazon Web Services, Google Cloud, and Microsoft Azure." },
    { q: "Can it integrate with Microsoft Defender or Sentinel?", a: "Yes, it supports direct API hooks, allowing security logs and incident statuses to sync with Defender, Sentinel, and CrowdStrike Falcon." },
    { q: "Does it provide compliance reporting?", a: "Yes, it provides automated postures matching audits for SOC 2 Type II, ISO 27001, HIPAA, PCI-DSS, and NIST templates." },
    { q: "Is 24×7 monitoring available?", a: "Yes, we integrate with active security operations centers to provide round-the-clock threat analysis and real-time log reviews." },
    { q: "Can it automate incident response?", a: "Yes, you can configure playbooks to execute tasks automatically, such as shutting down leaking cloud ports or revoking compromised tokens." },
    { q: "Which security standards are supported?", a: "The platform natively checks rules against CIS Benchmarks, NIST Cybersecurity framework, and local Cyber Essentials requirements." },
    { q: "Does it support Zero Trust?", a: "Yes, it validates device signatures, tracks browser footprints, and authenticates session credentials continuously to enforce Zero Trust." }
  ];

  return (
    <section id="faq" className="w-full py-24 bg-[#030303] text-white relative border-b border-zinc-900/60">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10">
        <Reveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
            Questions we get <span className="text-white font-bold bg-gradient-to-r from-red-650 via-rose-600 to-rose-500 bg-clip-text text-transparent">asked every day</span>.
          </h2>
        </Reveal>

        {/* Accordion FAQ */}
        <div className="flex flex-col border-t border-zinc-900 mb-16">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="border-b border-zinc-900 py-6">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex justify-between items-center w-full text-left focus:outline-none group"
                >
                  <span className="text-sm md:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors">
                    {faq.q}
                  </span>
                  <div className="text-zinc-550 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                {isOpen && (
                  <div className="mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-bold max-w-3xl animate-fadeIn flex flex-col gap-4">
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
// 17. CTA SECTION (SecurityCTA)
// ==========================================
const SecurityCTA = () => {
  return (
    <section className="w-full py-32 bg-black text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <Reveal>
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">GET STARTED</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Secure Your Enterprise with Confidence</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Protect users, infrastructure, applications, and data through an intelligent security platform built for modern enterprises.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              Schedule a Security Assessment
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300"
            >
              Talk to Our Security Team
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
export default function SecurityPlatformPage() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      <Hero
        badge="Enterprise Security Platform"
        title={
          <>
            Enterprise Security <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Platform
            </span>
          </>
        }
        subtitle="Protect your business with a centralized security platform that unifies threat detection, identity management, compliance, monitoring, vulnerability management, and automated incident response."
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
          { label: "SECURITY PLATFORM" }
        ]}
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Request Security Assessment
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/contact"
            className="px-6 py-4 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300"
          >
            Talk to a Security Expert
          </Link>
        </div>
      </Hero>

      {/* 2. Platform Overview */}
      <SecurityOverview />

      {/* 3. Security Challenges */}
      <SecurityChallenges />

      {/* 4. Platform Capabilities */}
      <SecurityCapabilities />

      {/* 5. Security Architecture */}
      <SecurityArchitecture />

      {/* 6. Core Security Modules */}
      <SecurityModules />

      {/* 7. Threat Detection Workflow */}
      <ThreatWorkflow />

      {/* 8. Platform Features */}
      <SecurityFeatures />

      {/* 9. Compliance & Governance */}
      <ComplianceSection />

      {/* 10. Supported Technologies */}
      <TechnologyStack />

      {/* 11. AI-Powered Security */}
      <AISecurity />

      {/* 12. Business Outcomes */}
      <BusinessOutcomes />

      {/* 13. Industry Use Cases */}
      <IndustryUseCases />

      {/* 14. Why Devopstrio Security Platform */}
      <WhyChoosePlatform />

      {/* 15. Related Solutions */}
      <RelatedSolutions />

      {/* 16. FAQ */}
      <SecurityFAQ />

      {/* 17. CTA */}
      <SecurityCTA />
    </main>
  );
}
