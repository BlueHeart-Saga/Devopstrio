"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Cloud, Cpu, Shield, Database, Layout, ArrowUpRight } from "lucide-react";

interface PartnerItem {
  name: string;
  logo: string;
  desc: string;
  href: string;
  action: string;
}

interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
  subtitle: string;
  partners: PartnerItem[];
}

const bgWaves: Record<string, string> = {
  cloud: "/webp/assets/ecosystem/grid/grid-p/Generated-Design.webp",
  "ai-data": "/webp/assets/ecosystem/grid/grid-p/Generated-Design-1.webp",
  enterprise: "/webp/assets/ecosystem/grid/grid-p/Generated-Design-2.webp",
  security: "/webp/assets/ecosystem/grid/grid-p/Generated-Design-3.webp",
  infra: "/webp/assets/ecosystem/grid/grid-p/Generated-Design-4.webp",
};

export function PartnerCategories() {
  const [activeTab, setActiveTab] = useState("cloud");

  const categories: Category[] = [
    {
      id: "cloud",
      label: "Cloud Partners",
      icon: <Cloud size={20} />,
      subtitle: "Collaborating with industry leaders to deliver secure, scalable, and future-ready solutions.",
      partners: [
        {
          name: "Microsoft Azure",
          logo: "/assets/Tech_logos/Microsoft-Azure.svg",
          desc: "Enterprise landing zones, Azure OpenAI integration, AKS microservices, and hybrid Active Directory infrastructure.",
          href: "/ecosystem/partnerships/microsoft",
          action: "Configure Azure"
        },
        {
          name: "Amazon Web Services",
          logo: "/assets/Tech_logos/AWS.svg",
          desc: "Scalable AWS multi-region architectures, Karpenter-driven EKS clusters, Bedrock GenAI pipelines, and serverless automation.",
          href: "/ecosystem/partnerships/aws",
          action: "Scale compute"
        },
        {
          name: "Google Cloud",
          logo: "/assets/Tech_logos/Google_Cloud.svg",
          desc: "Production Google Kubernetes Engine (GKE) clusters, BigQuery real-time analytics, and Vertex AI agent deployments.",
          href: "/ecosystem/partnerships/google-cloud",
          action: "Vertex pipelines"
        },
        {
          name: "Oracle Cloud",
          logo: "/assets/Tech_logos/Oracle_Cloud.svg",
          desc: "High-throughput OCI cloud databases, enterprise ERP migrations, automated disaster recovery, and bare-metal compute.",
          href: "/ecosystem/partnerships/oracle",
          action: "Deploy OCI"
        },
        {
          name: "SAP",
          logo: "/assets/Tech_logos/sap.svg",
          desc: "End-to-end SAP S/4HANA cloud migration, automated ERP scaling on hyperscalers, and SAP BTP enterprise integration.",
          href: "/ecosystem/partnerships/sap",
          action: "SAP on Cloud"
        },
        {
          name: "ServiceNow",
          logo: "/assets/Tech_logos/Service_now.svg",
          desc: "Enterprise ITSM & ITOM workflow automation, CMDB discovery integration, and AI-powered virtual service desk orchestration.",
          href: "/ecosystem/partnerships/servicenow",
          action: "ServiceNow ITSM"
        }
      ]
    },
    {
      id: "ai-data",
      label: "AI & Data Partners",
      icon: <Cpu size={20} />,
      subtitle: "Industry leaders in large language modeling and real-time database tooling.",
      partners: [
        {
          name: "OpenAI",
          logo: "/assets/Tech-icons/openai-logo_svgstack_com_28971780931370.svg",
          desc: "Frontier LLM integrations (GPT-4o, o1), enterprise RAG knowledge stores, structured function calling, and custom fine-tuned agents.",
          href: "/ecosystem/partnerships",
          action: "Integrate LLMs"
        },
        {
          name: "Snowflake",
          logo: "/assets/Tech_logos/Snowflake.svg",
          desc: "Zero-copy data sharing, elastic petabyte-scale data warehousing, real-time analytics pipelines, and secure governance integrations.",
          href: "/ecosystem/partnerships",
          action: "Share analytics"
        },
        {
          name: "MongoDB",
          logo: "/assets/Tech_logos/MongoDB.svg",
          desc: "Distributed Atlas document databases, high-scale application state management, and real-time vector search embeddings.",
          href: "/ecosystem/partnerships",
          action: "Vector search"
        },
        {
          name: "Databricks",
          logo: "/assets/Tech_logos/Databricks.svg",
          desc: "Unified Delta Lake lakehouse architectures, distributed Apache Spark data pipelines, and end-to-end MLflow model lifecycle governance.",
          href: "/ecosystem/partnerships",
          action: "Run ML flows"
        },
        {
          name: "Elasticsearch",
          logo: "/assets/Tech_logos/Elastic.svg",
          desc: "Distributed enterprise search engines, high-speed log ingestion and telemetry, security SIEM indexing, and semantic vector retrieval.",
          href: "/ecosystem/partnerships",
          action: "Search Engine"
        },
        {
          name: "Confluent",
          logo: "/assets/Tech_logos/Confluent.svg",
          desc: "Enterprise event-streaming architectures powered by Apache Kafka, real-time CDC synchronization, and decoupled microservices messaging.",
          href: "/ecosystem/partnerships",
          action: "Event Streaming"
        }
      ]
    },
    {
      id: "enterprise",
      label: "Enterprise Partners",
      icon: <Layout size={16} />,
      subtitle: "Standardized platform managers driving company workflow automation.",
      partners: [
        {
          name: "IBM Cloud",
          logo: "/assets/Tech_logos/IBM_Cloud.svg",
          desc: "Hybrid cloud application modernization, Red Hat OpenShift on enterprise infrastructure, and mission-critical data compliance.",
          href: "/ecosystem/partnerships",
          action: "IBM Hybrid"
        },
        {
          name: "Docker",
          logo: "/assets/Tech_logos/Docker.svg",
          desc: "Enterprise containerization standards, multi-architecture build pipelines, Docker Compose developer parity, and secure image governance.",
          href: "/ecosystem/partnerships",
          action: "Containerization"
        },
        {
          name: "GitHub",
          logo: "/assets/Tech_logos/GitHub.svg",
          desc: "Enterprise source code governance, GitHub Actions CI/CD workflows, Advanced Security scanning, and automated Dependabot remediation.",
          href: "/ecosystem/partnerships",
          action: "Code & Actions"
        },
        {
          name: "GitLab",
          logo: "/assets/Tech_logos/GitLab.svg",
          desc: "Single-platform DevSecOps automation, self-hosted runner orchestration, container registry pipelines, and compliance audit frameworks.",
          href: "/ecosystem/partnerships",
          action: "DevOps Lifecycle"
        },
        {
          name: "Jenkins",
          logo: "/assets/Tech_logos/Jenkins.svg",
          desc: "Distributed CI/CD automation pipelines, automated Kubernetes build agents, legacy migration frameworks, and declarative pipeline code.",
          href: "/ecosystem/partnerships",
          action: "Automation CI/CD"
        },
        {
          name: "Atlassian Jira",
          logo: "/assets/Tech-icons/jira-logo_svgstack_com_28621780931167.svg",
          desc: "Enterprise Agile sprint orchestration, automated release tracking, Jira Service Management workflows, and Confluence documentation.",
          href: "/ecosystem/partnerships",
          action: "Jira Workflows"
        }
      ]
    },
    {
      id: "security",
      label: "Cybersecurity Partners",
      icon: <Shield size={16} />,
      subtitle: "Work with trusted technology leaders to strengthen security, ensure compliance, and reduce risk.",
      partners: [
        {
          name: "Cloudflare",
          logo: "/assets/Tech_logos/Cloud_flaire.svg",
          desc: "Global edge CDN acceleration, DDoS mitigation, Web Application Firewall (WAF) rules, and Cloudflare Access zero-trust networks.",
          href: "/ecosystem/partnerships",
          action: "Edge perimeters"
        },
        {
          name: "HashiCorp Vault",
          logo: "/assets/Tech_logos/HashiCorp.svg",
          desc: "Centralized secrets lifecycle management, dynamic cloud credentials, automated PKI certificate rotation, and sensitive data encryption.",
          href: "/ecosystem/partnerships",
          action: "Vault Security"
        },
        {
          name: "Akamai",
          logo: "/assets/Tech_logos/Akamai.svg",
          desc: "Edge computing distribution, zero-trust network access (ZTNA), micro-segmentation policies, and real-time API threat protection.",
          href: "/ecosystem/partnerships",
          action: "Zero Trust"
        },
        {
          name: "Prisma Cloud",
          logo: "/assets/Tech_logos/Cloud_flaire.svg",
          desc: "Cloud Security Posture Management (CSPM), container runtime security, automated CIS benchmark compliance, and vulnerability scanning.",
          href: "/ecosystem/partnerships",
          action: "CSPM Posture"
        },
        {
          name: "Cyber Intelligence House",
          logo: "/assets/Devopstrio_Partners/CYBER-INTELIGENCE-HOUSE.svg",
          desc: "Continuous external attack surface management, dark web threat monitoring, credential leak exposure scans, and threat intelligence feeds.",
          href: "/ecosystem/partnerships",
          action: "Threat Intel"
        },
        {
          name: "Infosec Partners",
          logo: "/assets/Devopstrio_Partners/inosec-partners.svg",
          desc: "Managed Detection & Response (MDR), 24x7 security operations center (SOC) triage, compliance audits (ISO 27001), and penetration testing.",
          href: "/ecosystem/partnerships",
          action: "MDR Operations"
        }
      ]
    },
    {
      id: "infra",
      label: "Infrastructure Partners",
      icon: <Database size={16} />,
      subtitle: "Physical networking and operations providers handling core server pipelines.",
      partners: [
        {
          name: "Cisco",
          logo: "/assets/Tech_logos/cisco.svg",
          desc: "Enterprise software-defined networking, SD-WAN routing topologies, zero-trust network architecture, and multi-cloud interconnects.",
          href: "/ecosystem/partnerships/cisco",
          action: "SD-WAN routing"
        },
        {
          name: "Red Hat",
          logo: "/assets/Tech_logos/red_hat.svg",
          desc: "Enterprise Linux (RHEL) server hardening, OpenShift container platform deployments, and automated Ansible automation controller hubs.",
          href: "/ecosystem/partnerships",
          action: "OpenShift grids"
        },
        {
          name: "Datadog",
          logo: "/assets/Tech_logos/Datadog.svg",
          desc: "Unified full-stack observability, synthetic monitoring pipelines, APM distributed tracing, and infrastructure telemetry dashboards.",
          href: "/ecosystem/partnerships",
          action: "SRE monitors"
        },
        {
          name: "Dynatrace",
          logo: "/assets/Tech_logos/Dynatrace.svg",
          desc: "Davis AI-driven root cause analysis, automated microservices dependency mapping, host metric tracking, and SLO performance monitoring.",
          href: "/ecosystem/partnerships",
          action: "Observability map"
        },
        {
          name: "VMware",
          logo: "/assets/Tech_logos/vmware.svg",
          desc: "Enterprise vSphere hypervisor clusters, NSX virtual network segmentation, private cloud virtualization, and hybrid cloud portability.",
          href: "/ecosystem/partnerships",
          action: "vSphere Cloud"
        },
        {
          name: "Kubernetes",
          logo: "/assets/Tech_logos/Kubernetes.svg",
          desc: "Production-grade container cluster architecture, custom controllers, Helm deployment automation, and zero-downtime rolling updates.",
          href: "/ecosystem/partnerships",
          action: "K8s Orchestration"
        }
      ]
    }
  ];

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="categories" className="w-full py-24 bg-black text-white border-b border-zinc-900 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 xl:px-8 relative z-10">

        {/* Header Section */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-4 text-white">
              Partner <span className="text-rose-500">Categories</span>
            </h2>
          </div>
        </Reveal>

        {/* Tab Pills Selector */}
        <div
          id="partner-tab-pills-container"
          className="flex items-center justify-start lg:justify-center gap-2.5 md:gap-3.5 mb-14 pb-3 overflow-x-auto scrollbar-hide scroll-smooth -mx-6 px-6 md:mx-0 md:px-0"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`partner-tab-pill-${cat.id}`}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-2.5 ${activeTab === cat.id
                ? "bg-rose-600 border border-rose-500 text-white shadow-[0_4px_20px_rgba(225,29,72,0.35)] scale-105"
                : "bg-zinc-950/80 border border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-900 hover:border-white/20"
                }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Categories Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-stretch">

          {/* Left Featured Card (Col 1) */}
          <Reveal className="lg:col-span-1 h-full">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 p-8 md:p-9 flex flex-col justify-between h-full min-h-[480px] bg-gradient-to-b from-zinc-950 via-[#14080b] to-[#1a090d] group/tall shadow-2xl">

              {/* Internal glowing accents */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

              {/* Dynamic Smoky Wave Overlay */}
              {categories.map((cat) => (
                <img
                  key={cat.id}
                  src={bgWaves[cat.id]}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover mix-blend-screen pointer-events-none transition-opacity duration-700 ease-in-out ${activeTab === cat.id ? "opacity-35" : "opacity-0"
                    }`}
                  loading="lazy"
                />
              ))}

              {/* Card Header Details */}
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight leading-tight mb-4">
                  Integrate with our <br />
                  <span className="text-rose-500 font-semibold">{currentCategory.label}</span>
                </h3>
                <div className="w-10 h-[2px] bg-rose-500 mb-5" />
                <p className="text-zinc-300 text-base md:text-lg font-normal leading-relaxed mb-6">
                  {currentCategory.subtitle}
                </p>
              </div>

              {/* Card Bottom CTA Button */}
              <div className="relative z-10 mt-8">
                <Link
                  href="/contact#contact-form"
                  className="w-full py-4 px-6 rounded-xl text-xs md:text-sm font-semibold uppercase tracking-wider bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-between shadow-lg shadow-rose-600/30 transition-all group/btn"
                >
                  <span>CONSULT ALLIANCE LEADS</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                </Link>
              </div>

            </div>
          </Reveal>

          {/* Right Partner Grid (Col 2-4: 3 Columns x 2 Rows of Glass Cards) */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategory.partners.map((partner, idx) => (
              <Reveal key={partner.name} delay={idx * 0.04} className="h-full">
                <div className="group/card flex flex-col justify-between bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-rose-500/40 hover:bg-white/[0.06] rounded-2xl p-6 transition-all duration-300 h-full relative overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-[0_12px_40px_rgba(225,29,72,0.18)] min-h-[175px]">

                  {/* Glass Sheen Gradient & Hover Light Pulse */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] via-white/[0.03] to-transparent pointer-events-none" />
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div>
                    {/* Top Header: Logo & Partner Name */}
                    <div className="relative z-10 flex items-center gap-3.5 mb-3">
                      {partner.logo && (
                        <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-full h-full object-contain filter brightness-100 group-hover/card:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      )}

                      <div className="min-w-0 flex-1">
                        <h4 className="text-lg md:text-xl font-bold text-white tracking-tight group-hover/card:text-rose-400 transition-colors truncate">
                          {partner.name}
                        </h4>
                      </div>
                    </div>

                    {/* Specific ~3-Line Content - Clean & Normally Visible Using Full Space */}
                    <p className="relative z-10 text-sm text-zinc-300 leading-relaxed font-normal">
                      {partner.desc}
                    </p>
                  </div>

                  {activeTab === "cloud" && (
                    /* Only for Cloud Partners: Explore Link without middle dividing line */
                    <div className="relative z-10 pt-3 mt-3 flex items-center justify-between">
                      <Link
                        href={partner.href}
                        className="inline-flex items-center gap-1.5 text-rose-400 hover:text-rose-300 font-semibold text-xs sm:text-sm tracking-wide transition-colors group/link"
                      >
                        <span>Explore Partner Hub</span>
                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </Link>
                    </div>
                  )}

                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
