"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Server, Workflow, Brain, Shield, Database, Layout, Command, FolderPlus, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AcceleratorCategory {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  capabilities: string[];
  examplesTitle: string;
  examples: string[];
}

export function AcceleratorsEcosystem() {
  const [activeTab, setActiveTab] = useState("cloud");

  const categories: AcceleratorCategory[] = [
    {
      id: "cloud",
      name: "Cloud Accelerators",
      subtitle: "Enterprise Cloud Foundation",
      icon: <Server size={16} />,
      capabilities: ["Azure Landing Zones", "AWS Landing Zones", "OCI Foundation Templates", "Multi-Cloud Governance", "Network Blueprints"],
      examplesTitle: "Benefits",
      examples: ["Faster Provisioning", "Security Built-In", "Compliance Ready"]
    },
    {
      id: "devops",
      name: "DevOps Accelerators",
      subtitle: "Automation First Delivery",
      icon: <Workflow size={16} />,
      capabilities: ["CI/CD Templates", "GitHub Actions Libraries", "Azure DevOps Pipelines", "Kubernetes Templates", "Terraform Modules"],
      examplesTitle: "Examples",
      examples: ["One-Click Deployment", "Automated Environment Creation", "GitOps Workflows"]
    },
    {
      id: "ai",
      name: "AI Frameworks",
      subtitle: "Enterprise AI Starter Kits",
      icon: <Brain size={16} />,
      capabilities: ["AI Agent Frameworks", "RAG Architecture", "Prompt Engineering Toolkit", "AI Search Framework", "Knowledge Assistants"],
      examplesTitle: "Examples",
      examples: ["Recruitment AI", "Customer Support AI", "Content Intelligence", "AI Analytics"]
    },
    {
      id: "security",
      name: "Security Frameworks",
      subtitle: "Secure By Default",
      icon: <Shield size={16} />,
      capabilities: ["Secure Landing Zones", "IAM Templates", "DevSecOps Pipelines", "Compliance Automation"],
      examplesTitle: "Frameworks",
      examples: ["ISO-Aligned Controls", "GDPR Ready Templates", "Security Baselines"]
    },
    {
      id: "data",
      name: "Data Frameworks",
      subtitle: "Modern Data Foundations",
      icon: <Database size={16} />,
      capabilities: ["Data Lake Frameworks", "Analytics Blueprints", "Streaming Pipelines", "Data Governance Templates"],
      examplesTitle: "Platforms",
      examples: ["Snowflake", "Databricks", "PostgreSQL", "BigQuery"]
    },
    {
      id: "saas",
      name: "SaaS Frameworks",
      subtitle: "Product Development Accelerators",
      icon: <Layout size={16} />,
      capabilities: ["Multi-Tenant Architecture", "Authentication Framework", "Subscription Management", "Billing Integration", "Role-Based Access Control", "Admin Dashboard Framework"],
      examplesTitle: "Examples",
      examples: ["Humanex", "Brio", "SafeSign", "Campix"]
    },
    {
      id: "blueprints",
      name: "Platform Blueprints",
      subtitle: "Enterprise Platform Patterns",
      icon: <Command size={16} />,
      capabilities: ["HR Platforms blueprint", "Recruitment Platforms blueprints", "Healthcare Platforms layouts", "Learning Platforms schemas", "Financial Platforms models"],
      examplesTitle: "Blueprint Includes",
      examples: ["Architecture specs", "Security boundaries", "API routing templates", "Deployment Models"]
    },
    {
      id: "templates",
      name: "Enterprise Templates",
      subtitle: "Ready-To-Deploy Assets",
      icon: <FolderPlus size={16} />,
      capabilities: ["Customer Portal layouts", "Employee Portal blueprints", "Vendor Portal modules", "Knowledge Portal networks", "Service Desk widgets"],
      examplesTitle: "Benefits",
      examples: ["Instant onboarding", "Audited security", "Pre-designed theme hooks"]
    },
    {
      id: "delivery",
      name: "Delivery Accelerators",
      subtitle: "Faster Project Execution",
      icon: <Compass size={16} />,
      capabilities: ["Architecture templates", "Sprint coordination kits", "QA automation scripts", "Monitoring dashboards", "Deployment playbooks"],
      examplesTitle: "Benefits",
      examples: ["Reduced design bottlenecks", "Clean delivery audits", "Zero manual deployments"]
    }
  ];

  const currentCat = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="framework" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            ACCELERATOR CLASSIFICATION
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Framework <span className="text-rose-500">Ecosystem</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            Select a framework category to review pre-engineered blueprints, automation tools, and delivery code assets.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left selectors */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={`flex items-center justify-between p-4.5 rounded-2xl text-left border transition-all duration-300 ${
                  activeTab === c.id
                    ? "bg-rose-500/10 text-rose-500 border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.15)]"
                    : "bg-zinc-950/45 text-zinc-455 border-zinc-900/80 hover:text-zinc-350 hover:bg-zinc-900/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-300 ${
                    activeTab === c.id ? "bg-rose-950/30 border-rose-500/30" : "bg-zinc-900 border-zinc-850"
                  }`}>
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">{c.name}</h4>
                    <span className="text-[8px] text-zinc-555 font-mono uppercase font-bold">{c.subtitle}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Display Board */}
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
                  <h3 className="text-lg font-bold text-white mb-2">{currentCat.name}</h3>
                  <span className="text-xs font-mono font-bold text-rose-500 uppercase tracking-wider">
                    {currentCat.subtitle}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Capabilities */}
                  <div>
                    <span className="block text-[10px] font-mono font-bold text-rose-500 uppercase tracking-widest mb-4">
                      CAPABILITIES
                    </span>
                    <ul className="space-y-3">
                      {currentCat.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2.5 text-xs text-zinc-350 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Examples */}
                  <div>
                    <span className="block text-[10px] font-mono font-bold text-rose-500 uppercase tracking-widest mb-4">
                      {currentCat.examplesTitle}
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {currentCat.examples.map((ex) => (
                        <span
                          key={ex}
                          className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-850 text-[10px] font-mono font-bold text-zinc-300 uppercase tracking-wider"
                        >
                          {ex}
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
