"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Cloud, Cpu, Shield, Database, Layout, ChevronRight, ArrowUpRight } from "lucide-react";

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
          desc: "Enterprise application clouds and Active Directory IAM environments.", 
          href: "/ecosystem/partnerships/microsoft", 
          action: "Configure Azure" 
        },
        { 
          name: "Amazon Web Services", 
          logo: "/assets/Tech_logos/AWS.svg", 
          desc: "Scale compute infrastructure, serverless Lambda, and S3 data lakes.", 
          href: "/ecosystem/partnerships/aws", 
          action: "Scale compute" 
        },
        { 
          name: "Google Cloud", 
          logo: "/assets/Tech_logos/Google_Cloud.svg", 
          desc: "Kubernetes GKE orchestrations, Vertex AI, and BigQuery warehouses.", 
          href: "/ecosystem/partnerships/google-cloud", 
          action: "Vertex pipelines" 
        },
        { 
          name: "Oracle Cloud", 
          logo: "/assets/Tech_logos/Oracle_Cloud.svg", 
          desc: "OCI databases, Enterprise application ERP, and transaction processing.", 
          href: "/ecosystem/partnerships/oracle", 
          action: "Deploy OCI" 
        },
        { 
          name: "IBM Cloud", 
          logo: "/assets/Tech_logos/IBM_Cloud.svg", 
          desc: "Hybrid cloud integration, Red Hat OpenShift, and enterprise security.", 
          href: "/ecosystem/partnerships", 
          action: "IBM Hybrid" 
        },
        { 
          name: "DigitalOcean", 
          logo: "/assets/Tech_logos/Akamai.svg", 
          desc: "Simplified cloud compute droplets and managed Kubernetes clusters.", 
          href: "/ecosystem/partnerships", 
          action: "Deploy Droplets" 
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
          desc: "Large language models integration, agent assistants, and fine-tuning.", 
          href: "/ecosystem/partnerships", 
          action: "Integrate LLMs" 
        },
        { 
          name: "Snowflake", 
          logo: "/assets/Tech_logos/Snowflake.svg", 
          desc: "Unified global data cloud sharing analytics dashboards and warehouses.", 
          href: "/ecosystem/partnerships", 
          action: "Share analytics" 
        },
        { 
          name: "MongoDB", 
          logo: "/assets/Tech_logos/MongoDB.svg", 
          desc: "Flexible document-based databases and vector search integrations.", 
          href: "/ecosystem/partnerships", 
          action: "Vector search" 
        },
        { 
          name: "Databricks", 
          logo: "/assets/Tech_logos/Databricks.svg", 
          desc: "Unified lakehouse engines executing large data streaming & ML flows.", 
          href: "/ecosystem/partnerships", 
          action: "Run ML flows" 
        },
        { 
          name: "Elasticsearch", 
          logo: "/assets/Tech_logos/Elastic.svg", 
          desc: "Distributed search, log analytics, and real-time data indexing.", 
          href: "/ecosystem/partnerships", 
          action: "Search Engine" 
        },
        { 
          name: "Confluent", 
          logo: "/assets/Tech_logos/Confluent.svg", 
          desc: "Event streaming platform powered by Apache Kafka for enterprise pipelines.", 
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
          name: "SAP", 
          logo: "/assets/Tech_logos/sap.svg", 
          desc: "Enterprise resources manager and financial ledger orchestration.", 
          href: "/ecosystem/partnerships/sap", 
          action: "SAP on Cloud" 
        },
        { 
          name: "ServiceNow", 
          logo: "/assets/Tech_logos/Service_now.svg", 
          desc: "IT operations automation, HR ticketing, and customer desk runs.", 
          href: "/ecosystem/partnerships/servicenow", 
          action: "ServiceNow ITSM" 
        },
        { 
          name: "Salesforce", 
          logo: "/assets/Home-page/Techtools/google-color.svg", 
          desc: "Enterprise CRM, customers pipeline analytics, and marketing cloud.", 
          href: "/ecosystem/partnerships", 
          action: "CRM analytics" 
        },
        { 
          name: "Atlassian", 
          logo: "/assets/Tech-icons/jira-logo_svgstack_com_28621780931167.svg", 
          desc: "Software engineering Jira boards, wiki directories, and collaborative cards.", 
          href: "/ecosystem/partnerships", 
          action: "Jira boards" 
        },
        { 
          name: "GitLab", 
          logo: "/assets/Tech_logos/GitLab.svg", 
          desc: "Complete DevOps platform delivered as a single application.", 
          href: "/ecosystem/partnerships", 
          action: "DevOps Lifecycle" 
        },
        { 
          name: "GitHub", 
          logo: "/assets/Tech_logos/GitHub.svg", 
          desc: "Enterprise source code management, actions CI/CD, and security.", 
          href: "/ecosystem/partnerships", 
          action: "Code & Actions" 
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
          name: "Palo Alto Networks", 
          logo: "/assets/Tech_logos/red_hat.svg", 
          desc: "Next-gen firewalls and advanced threat prevention.", 
          href: "/ecosystem/partnerships", 
          action: "Prisma Cloud" 
        },
        { 
          name: "Cloudflare", 
          logo: "/assets/Tech_logos/Cloud_flaire.svg", 
          desc: "Secure, fast & reliable web infrastructure.", 
          href: "/ecosystem/partnerships", 
          action: "Edge perimeters" 
        },
        { 
          name: "Prisma Cloud", 
          logo: "/assets/Tech_logos/HashiCorp.svg", 
          desc: "Cloud-native security and compliance posture.", 
          href: "/ecosystem/partnerships", 
          action: "Posture Validation" 
        },
        { 
          name: "HashiCorp", 
          logo: "/assets/Tech_logos/HashiCorp.svg", 
          desc: "Infrastructure automation, Vault secrets, and security.", 
          href: "/ecosystem/partnerships", 
          action: "Terraform IaC" 
        },
        { 
          name: "CrowdStrike", 
          logo: "/assets/Tech-icons/python-logo_svgstack_com_29121780931061.svg", 
          desc: "Endpoint protection powered by AI and real-time telemetry.", 
          href: "/ecosystem/partnerships", 
          action: "EDR Sweeps" 
        },
        { 
          name: "Edge Perimeters", 
          logo: "/assets/Tech_logos/Akamai.svg", 
          desc: "Secure access for distributed zero-trust environments.", 
          href: "/ecosystem/partnerships", 
          action: "Zero Trust" 
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
          desc: "Core enterprise switches, software-defined WAN routers, and networking.", 
          href: "/ecosystem/partnerships/cisco", 
          action: "SD-WAN routing" 
        },
        { 
          name: "Red Hat", 
          logo: "/assets/Tech_logos/red_hat.svg", 
          desc: "Enterprise Linux servers, OpenShift Kubernetes, and Ansible hubs.", 
          href: "/ecosystem/partnerships", 
          action: "OpenShift grids" 
        },
        { 
          name: "Datadog", 
          logo: "/assets/Tech_logos/Datadog.svg", 
          desc: "Unified SRE monitoring maps, application trace hooks, and alerts.", 
          href: "/ecosystem/partnerships", 
          action: "SRE monitors" 
        },
        { 
          name: "Dynatrace", 
          logo: "/assets/Tech_logos/Dynatrace.svg", 
          desc: "AI-based system SRE observability dashboards and host metrics.", 
          href: "/ecosystem/partnerships", 
          action: "Observability map" 
        },
        { 
          name: "VMware", 
          logo: "/assets/Tech_logos/vmware.svg", 
          desc: "Multi-cloud virtualization, vSphere hypervisors, and cloud foundation.", 
          href: "/ecosystem/partnerships", 
          action: "vSphere Cloud" 
        },
        { 
          name: "Kubernetes", 
          logo: "/assets/Tech_logos/Kubernetes.svg", 
          desc: "Production-grade container orchestration and automated deployments.", 
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
            <p className="text-zinc-300 text-base md:text-lg font-normal leading-relaxed">
              &ldquo;Uniting global technology pioneers under a single collaborative ecosystem—driving transformation through <span className="text-rose-500 font-semibold">trusted platforms</span>, joint expertise, and <span className="text-rose-500 font-semibold">cloud innovation</span>.&rdquo;
            </p>
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
              className={`px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-2.5 ${
                activeTab === cat.id
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
                  className={`absolute inset-0 w-full h-full object-cover mix-blend-screen pointer-events-none transition-opacity duration-700 ease-in-out ${
                    activeTab === cat.id ? "opacity-35" : "opacity-0"
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
                <div className="group/card flex flex-col justify-between bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/25 hover:bg-white/[0.06] rounded-2xl p-6 transition-all duration-500 h-full relative overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] min-h-[145px]">
                  
                  {/* Glass Sheen Gradient & Hover Light Pulse */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] via-white/[0.03] to-transparent pointer-events-none" />
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Top Header: Logo & Partner Name */}
                  <div className="relative z-10 flex items-center gap-4 mb-4">
                    {/* Large Logo without BG or Border */}
                    {partner.logo && (
                      <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                        <img 
                          src={partner.logo}
                          alt={partner.name}
                          className="w-full h-full object-contain filter brightness-100 group-hover/card:scale-105 transition-transform duration-300"
                          loading="lazy" 
                        />
                      </div>
                    )}

                    <div>
                      <h4 className="text-xl md:text-2xl font-semibold text-white tracking-tight group-hover/card:text-rose-400 transition-colors">
                        {partner.name}
                      </h4>
                    </div>
                  </div>

                  {/* Bottom Side: Explore + Arrow */}
                  <div className="relative z-10 pt-3.5 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href={partner.href}
                      className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 font-semibold text-sm md:text-base tracking-wider transition-colors group/link"
                    >
                      <span>Explore</span>
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </Link>
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
