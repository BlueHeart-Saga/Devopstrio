"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";

interface AcceleratorCategory {
  id: string;
  name: string;
  subtitle: string;
  capabilities: string[];
  examplesTitle: string;
  examples: string[];
  image: string;
}

export function AcceleratorsEcosystem() {
  const [activeTab, setActiveTab] = useState("cloud");

  const categories: AcceleratorCategory[] = [
    {
      id: "cloud",
      name: "Cloud Accelerators",
      subtitle: "Enterprise Cloud Foundation",
      capabilities: ["Azure Landing Zones", "AWS Landing Zones", "OCI Foundation Templates", "Multi-Cloud Governance", "Network Blueprints", "DNS Provisioning"],
      examplesTitle: "Benefits",
      examples: ["Faster Provisioning", "Security Built-In", "Compliance Ready"],
      image: "/webp/assets/ecosystem/grid/accelerators-frameworks-_Grid/Generated-Design.webp"
    },
    {
      id: "devops",
      name: "DevOps Accelerators",
      subtitle: "Automation First Delivery",
      capabilities: ["CI/CD Templates", "GitHub Actions Libraries", "Azure DevOps Pipelines", "Kubernetes Templates", "Terraform Modules", "Helm Charts"],
      examplesTitle: "Examples",
      examples: ["One-Click Deployment", "Automated Environment Creation", "GitOps Workflows"],
      image: "/webp/assets/ecosystem/grid/accelerators-frameworks-_Grid/Generated-Design-1.webp"
    },
    {
      id: "ai",
      name: "AI Frameworks",
      subtitle: "Enterprise AI Starter Kits",
      capabilities: ["AI Agent Frameworks", "RAG Architecture", "Prompt Engineering Toolkit", "AI Search Framework", "Knowledge Assistants", "Inference Cache Layers"],
      examplesTitle: "Examples",
      examples: ["Recruitment AI", "Customer Support AI", "Content Intelligence", "AI Analytics"],
      image: "/webp/assets/ecosystem/grid/accelerators-frameworks-_Grid/Generated-Design-2.webp"
    },
    {
      id: "security",
      name: "Security Frameworks",
      subtitle: "Secure By Default",
      capabilities: ["Secure Landing Zones", "IAM Templates", "DevSecOps Pipelines", "Compliance Automation", "WAF Policy Templates", "Vulnerability Rules"],
      examplesTitle: "Frameworks",
      examples: ["ISO-Aligned Controls", "GDPR Ready Templates", "Security Baselines"],
      image: "/webp/assets/ecosystem/grid/accelerators-frameworks-_Grid/Generated-Design-3.webp"
    },
    {
      id: "data",
      name: "Data Frameworks",
      subtitle: "Modern Data Foundations",
      capabilities: ["Data Lake Frameworks", "Analytics Blueprints", "Streaming Pipelines", "Data Governance Templates", "Spark Tuning Configurations", "Data Catalog Blueprints"],
      examplesTitle: "Platforms",
      examples: ["Snowflake", "Databricks", "PostgreSQL", "BigQuery"],
      image: "/webp/assets/ecosystem/grid/accelerators-frameworks-_Grid/Generated-Design-4.webp"
    },
    {
      id: "saas",
      name: "SaaS Frameworks",
      subtitle: "Product Development Accelerators",
      capabilities: ["Multi-Tenant Architecture", "Authentication Framework", "Subscription Management", "Billing Integration", "Role-Based Access Control", "Admin Dashboard Framework"],
      examplesTitle: "Examples",
      examples: ["Humanex", "Brio", "SafeSign", "Campix"],
      image: "/webp/assets/ecosystem/grid/accelerators-frameworks-_Grid/Generated-Design-5.webp"
    },
    {
      id: "blueprints",
      name: "Platform Blueprints",
      subtitle: "Enterprise Platform Patterns",
      capabilities: ["HR Platforms blueprint", "Recruitment Platforms blueprints", "Healthcare Platforms layouts", "Learning Platforms schemas", "Financial Platforms models", "CRM Operations layouts"],
      examplesTitle: "Blueprint Includes",
      examples: ["Architecture specs", "Security boundaries", "API routing templates", "Deployment Models"],
      image: "/webp/assets/ecosystem/grid/accelerators-frameworks-_Grid/Generated-Design-6.webp"
    },
    {
      id: "templates",
      name: "Enterprise Templates",
      subtitle: "Ready-To-Deploy Assets",
      capabilities: ["Customer Portal layouts", "Employee Portal blueprints", "Vendor Portal modules", "Knowledge Portal networks", "Service Desk widgets", "Executive Dashboards"],
      examplesTitle: "Benefits",
      examples: ["Instant onboarding", "Audited security", "Pre-designed theme hooks"],
      image: "/webp/assets/ecosystem/grid/accelerators-frameworks-_Grid/Generated-Design-7.webp"
    },
    {
      id: "delivery",
      name: "Delivery Accelerators",
      subtitle: "Faster Project Execution",
      capabilities: ["Architecture templates", "Sprint coordination kits", "QA automation scripts", "Monitoring dashboards", "Deployment playbooks", "SLA tracking charts"],
      examplesTitle: "Benefits",
      examples: ["Reduced design bottlenecks", "Clean delivery audits", "Zero manual deployments"],
      image: "/webp/assets/ecosystem/grid/accelerators-frameworks-_Grid/Generated-Design-8.webp"
    }
  ];

  // Auto cycle tabs every 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = categories.findIndex((c) => c.id === activeTab);
      const nextIndex = (currentIndex + 1) % categories.length;
      setActiveTab(categories[nextIndex].id);
    }, 8000);
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Smooth scroll active tab pill into view in the horizontal container
  useEffect(() => {
    const container = document.getElementById("accelerators-tabs-container");
    const activeEl = document.getElementById(`accelerator-tab-${activeTab}`);
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

  const currentCat = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="framework" className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ACCELERATOR CLASSIFICATION
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Framework <span className="text-rose-500">Ecosystem</span>
            </h2>
            <p className="text-zinc-250 text-base md:text-lg font-semibold leading-relaxed">
              Select a framework category to review pre-engineered blueprints, automation tools, and delivery code assets.
            </p>
          </div>
        </Reveal>

        {/* Tab Pills Selector */}
        <div id="accelerators-tabs-container" className="flex items-center gap-2 mb-12 pb-4 overflow-x-auto scrollbar-hide scroll-smooth -mx-6 px-6 md:mx-0 md:px-0 border-b border-zinc-900/60">
          {categories.map((c) => (
            <button
              key={c.id}
              id={`accelerator-tab-${c.id}`}
              onClick={() => setActiveTab(c.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 border ${activeTab === c.id
                ? "bg-rose-600 border-rose-600 text-white shadow-[0_4px_20px_rgba(225,29,72,0.35)]"
                : "bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-900/50 hover:border-zinc-800"
                }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Main Redesigned Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Left Tall Card (Col 1, Spans entire height / 2 rows on desktop) */}
          <Reveal className="lg:col-span-1 h-full">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-rose-500/30 p-8 flex flex-col justify-between h-full min-h-[480px] bg-gradient-to-br from-zinc-950/90 via-[#0a0506]/90 to-[#0f0709]/90 group/tall backdrop-blur-md transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              {/* Decorative meshes */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-rose-600/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-orange-600/5 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />

              {/* Expanding Image Layer with Glassmorphism */}
              <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover/tall:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none">
                <img src={currentCat.image}
                  alt={currentCat.name}
                  className="w-full h-full object-cover scale-110 group-hover/tall:scale-100 transition-transform duration-1000 ease-out opacity-80"
                loading="lazy" />
                
                {/* Frosted Glass Blur Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
                
                {/* Vignette Gradient for depth and text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-white/5 border border-white/5 rounded-[24px]" />
              </div>

              {/* Card top details */}
              <div className="relative z-10">
                <span className="text-[10px] font-mono text-rose-500 tracking-widest uppercase block mb-4">
                  CORE CLASSIFICATION
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight mb-4 group-hover/tall:text-rose-400 transition-colors">
                  {currentCat.name}
                </h3>
                <p className="text-zinc-300 text-xs font-semibold leading-relaxed">
                  {currentCat.subtitle}
                </p>
              </div>

              {/* Card bottom: Examples / Benefits list */}
              <div className="relative z-10 mt-8 pt-6 border-t border-zinc-900/60">
                <span className="block text-[9px] font-mono font-bold text-rose-500 tracking-widest uppercase mb-3">
                  {currentCat.examplesTitle}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentCat.examples.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[9px] font-mono font-bold text-zinc-300 uppercase tracking-wider"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Capabilities Grid (Col 2-4, 3 Columns x 2 Rows of smaller cards) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCat.capabilities.slice(0, 6).map((cap, idx) => (
              <Reveal key={cap} delay={idx * 0.04} className="h-full">
                <div className="group/card flex flex-col justify-between bg-zinc-950/30 border border-white/5 hover:border-rose-500/20 hover:bg-zinc-950/60 rounded-2xl p-6 transition-all duration-300 min-h-[220px] h-full relative overflow-hidden backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                  {/* Subtle color highlight glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 via-rose-600/0 to-rose-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Text details */}
                  <div>
                    <span className="text-[10px] font-mono text-rose-500 tracking-wider block mb-2">
                      CAPABILITY 0{idx + 1}
                    </span>
                    <h4 className="text-base font-semibold text-rose-500 group-hover:text-rose-400 transition-colors mb-2">
                      {cap}
                    </h4>
                    <p className="text-[12px] text-zinc-200 font-semibold leading-relaxed">
                      Deploying modular configurations and audited blueprints to accelerate {cap.toLowerCase()} setups across all clusters.
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
