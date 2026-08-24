"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, CheckCircle, ExternalLink, ShieldCheck, Cpu, Database, Network } from "lucide-react";
import Link from "next/link";

interface AllianceDetails {
  name: string;
  badge: string;
  desc: string;
  capabilities: string[];
  solutions: string[];
  logo: string;
  ctaText: string;
  ctaLink: string;
  icon: React.ReactNode;
}

export function StrategicAlliances() {
  const alliances: AllianceDetails[] = [
    {
      name: "Microsoft Azure",
      badge: "Azure Gold Partner",
      desc: "Architecting enterprise hybrid cloud ecosystems, secure identity corridors, and AI-enabled business copilots.",
      capabilities: [
        "Azure Cloud Migration & Modernization",
        "Azure AI Foundry & Cognitive Services",
        "AKS (Azure Kubernetes Service) Clusters",
        "Synapse Analytics & SQL Databases",
        "Microsoft Sentinel Security Operations"
      ],
      solutions: [
        "Cloud Infrastructure Modernization",
        "Enterprise GenAI Copilot Platforms",
        "Secure Landing Zones (CAF)",
        "Managed Cloud Platform Support"
      ],
      logo: "/assets/Tech_logos/Microsoft-Azure.svg",
      ctaText: "Explore Microsoft Solutions",
      ctaLink: "/ecosystem/partnerships/microsoft",
      icon: <Network size={20} className="text-blue-500" />
    },
    {
      name: "Amazon Web Services (AWS)",
      badge: "AWS Advanced Partner",
      desc: "Engineering highly resilient serverless engines, secure multi-tenant microservices, and auto-scaling data pipelines.",
      capabilities: [
        "EKS (Elastic Kubernetes) Deployment",
        "Lambda & API Gateway Serverless Code",
        "Amazon Bedrock GenAI Integrations",
        "S3 Data Lakes & Analytics Warehouses",
        "Control Tower DevOps Automation"
      ],
      solutions: [
        "Serverless Microservices Refactoring",
        "Security & IAM Landing Zone Guardrails",
        "Migration Evaluator Assessments",
        "24x7 SRE Incident Response SLAs"
      ],
      logo: "/assets/Tech_logos/AWS.svg",
      ctaText: "Explore AWS Solutions",
      ctaLink: "/ecosystem/partnerships/aws",
      icon: <Cpu size={20} className="text-orange-500" />
    },
    {
      name: "Google Cloud Platform (GCP)",
      badge: "GCP Premier Partner",
      desc: "Delivering advanced telemetry frameworks, distributed machine learning pipelines, and cloud-native database clustering.",
      capabilities: [
        "Vertex AI ML Training & Deployment",
        "BigQuery Petabyte-Scale Analytics",
        "GKE Autopilot Container Pipelines",
        "Google Generative AI agentic setups",
        "MLOps & CI/CD workflow automation"
      ],
      solutions: [
        "Smart Data Platform Integration",
        "Custom Machine Learning Modeling",
        "Google Workspace Security Sweeps",
        "Managed GKE Infrastructure Support"
      ],
      logo: "/assets/Tech_logos/Google_Cloud.svg",
      ctaText: "Explore Google Cloud Solutions",
      ctaLink: "/ecosystem/partnerships/gcp",
      icon: <Database size={20} className="text-red-500" />
    },
    {
      name: "Oracle (OCI)",
      badge: "Oracle Enterprise Partner",
      desc: "Orchestrating mission-critical enterprise workloads, ERP integrations, and autonomous database deployments.",
      capabilities: [
        "OCI Cloud Infrastructure Setup",
        "Autonomous Database administration",
        "Oracle Fusion ERP Custom Integration",
        "High-Performance Database Clustering",
        "Legacy Database OOCI Migrations"
      ],
      solutions: [
        "Legacy Oracle workloads Lift-and-Shift",
        "Data Guard HA & disaster recovery",
        "Multi-cloud DB System Interconnects",
        "Enterprise ERP Pipeline Automation"
      ],
      logo: "/assets/Tech_logos/Oracle_Cloud.svg",
      ctaText: "Explore Oracle Solutions",
      ctaLink: "/ecosystem/partnerships/oracle",
      icon: <ShieldCheck size={20} className="text-rose-500" />
    }
  ];

  return (
    <section id="alliances" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-20 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            CORE ALLIANCES
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Strategic Alliance <span className="text-rose-500">Showcase</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            In-depth co-engineering competencies built in partnership with the world's leading technology organizations.
          </p>
        </Reveal>

        <div className="space-y-32">
          {alliances.map((alliance, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={alliance.name}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${isEven ? "" : "lg:flex-row-reverse"
                  }`}
              >
                {/* Visual / Logo Column */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                >
                  <div className="bg-zinc-950/40 border border-zinc-900/60 p-10 rounded-3xl relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
                    <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-rose-600/[0.015] blur-[80px] rounded-full pointer-events-none" />
                    <img src={alliance.logo}
                      alt={alliance.name}
                      className="h-20 w-auto object-contain brightness-95 mb-6 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                    loading="lazy" />
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                      AUTHORIZED PARTNER
                    </span>
                    <span className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
                      {alliance.badge}
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                >
                  <Reveal>
                    <div className="flex items-center gap-3 mb-4">
                      {alliance.icon}
                      <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">{alliance.name}</h3>
                    </div>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                      {alliance.desc}
                    </p>
                  </Reveal>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Capabilities */}
                    <div>
                      <span className="block text-xs font-mono font-bold text-rose-500 uppercase tracking-wider mb-3.5">
                        CAPABILITIES
                      </span>
                      <ul className="space-y-2.5">
                        {alliance.capabilities.map((cap) => (
                          <li key={cap} className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 font-medium leading-normal">
                            <CheckCircle size={14} className="text-rose-500 mt-0.5 flex-shrink-0" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                      <span className="block text-xs font-mono font-bold text-rose-500 uppercase tracking-wider mb-3.5">
                        SOLUTIONS
                      </span>
                      <ul className="space-y-2.5">
                        {alliance.solutions.map((sol) => (
                          <li key={sol} className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 font-medium leading-normal">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0" />
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Reveal delay={0.2}>
                    <Link
                      href={alliance.ctaLink}
                      className="inline-flex items-center gap-2 text-xs md:text-sm font-mono font-semibold uppercase tracking-wider text-rose-500 hover:text-rose-400 transition-colors group"
                    >
                      {alliance.ctaText}
                      <ArrowUpRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
