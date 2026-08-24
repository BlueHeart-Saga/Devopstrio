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
  cloud: "/assets/ecosystem/grid/grid-p/Generated-Design.png",
  "ai-data": "/assets/ecosystem/grid/grid-p/Generated-Design-1.png",
  enterprise: "/assets/ecosystem/grid/grid-p/Generated-Design-2.png",
  security: "/assets/ecosystem/grid/grid-p/Generated-Design-3.png",
  infra: "/assets/ecosystem/grid/grid-p/Generated-Design-4.png",
};

export function PartnerCategories() {
  const [activeTab, setActiveTab] = useState("cloud");

  const categories: Category[] = [
    {
      id: "cloud",
      label: "Cloud Partners",
      icon: <Cloud size={14} />,
      subtitle: "Hyper-scale infrastructure providers running core enterprise operations.",
      partners: [
        { 
          name: "Microsoft Azure", 
          logo: "/assets/Tech_logos/Microsoft-Azure.svg", 
          desc: "Enterprise application clouds, Active Directory IAM, and Office environments.", 
          href: "/ecosystem/partnerships/microsoft", 
          action: "Configure Azure" 
        },
        { 
          name: "Amazon Web Services", 
          logo: "/assets/Tech_logos/AWS.svg", 
          desc: "Scale compute infrastructure, serverless Lambda services, and S3 data lakes.", 
          href: "/ecosystem/partnerships/aws", 
          action: "Scale compute" 
        },
        { 
          name: "Google Cloud", 
          logo: "/assets/Tech_logos/Google_Cloud.svg", 
          desc: "Kubernetes GKE orchestrations, Vertex AI pipelines, and BigQuery warehouses.", 
          href: "/ecosystem/partnerships/google-cloud", 
          action: "Vertex pipelines" 
        },
        { 
          name: "Oracle Cloud", 
          logo: "/assets/Tech_logos/Oracle_Cloud.svg", 
          desc: "OCI databases, Enterprise application ERP, and custom transaction processing.", 
          href: "/ecosystem/partnerships/oracle", 
          action: "Deploy OCI" 
        }
      ]
    },
    {
      id: "ai-data",
      label: "AI & Data Partners",
      icon: <Cpu size={14} />,
      subtitle: "Industry leaders in large language modeling and real-time database tooling.",
      partners: [
        { 
          name: "OpenAI", 
          logo: "/assets/Tech-icons/openai-logo_svgstack_com_28971780931370.svg", 
          desc: "Large language models integration, agent assistants, and fine-tuning pipelines.", 
          href: "/ecosystem/partnerships", 
          action: "Integrate LLMs" 
        },
        { 
          name: "Snowflake", 
          logo: "/assets/Tech_logos/Snowflake.svg", 
          desc: "Unified global data cloud sharing analytics dashboards and structured warehouse operations.", 
          href: "/ecosystem/partnerships", 
          action: "Share analytics" 
        },
        { 
          name: "MongoDB", 
          logo: "/assets/Tech_logos/MongoDB.svg", 
          desc: "Flexible document-based databases, vector search integrations, and atlas storage.", 
          href: "/ecosystem/partnerships", 
          action: "Vector search" 
        },
        { 
          name: "Databricks", 
          logo: "/assets/Tech_logos/Databricks.svg", 
          desc: "Unified lakehouse engines executing large data streaming runs and ML flows.", 
          href: "/ecosystem/partnerships", 
          action: "Run ML flows" 
        }
      ]
    },
    {
      id: "enterprise",
      label: "Enterprise Partners",
      icon: <Layout size={14} />,
      subtitle: "Standardized platform managers driving company workflow automation.",
      partners: [
        { 
          name: "SAP", 
          logo: "/assets/Tech_logos/sap.svg", 
          desc: "Enterprise resources manager, financial ledger orchestration, and supplier chains.", 
          href: "/ecosystem/partnerships/sap", 
          action: "SAP on Cloud" 
        },
        { 
          name: "ServiceNow", 
          logo: "/assets/Tech_logos/Service_now.svg", 
          desc: "IT operations automation, HR tickets ticketing, and automated customer desk runs.", 
          href: "/ecosystem/partnerships/servicenow", 
          action: "ServiceNow ITSM" 
        },
        { 
          name: "Salesforce", 
          logo: "/assets/Home-page/Techtools/google-color.svg", 
          desc: "Enterprise CRM, customers pipeline analytics, and marketing cloud loops.", 
          href: "/ecosystem/partnerships", 
          action: "CRM analytics" 
        },
        { 
          name: "Atlassian", 
          logo: "/assets/Tech-icons/jira-logo_svgstack_com_28621780931167.svg", 
          desc: "Software engineering Jira boards, internal wiki directories, and collaborative cards.", 
          href: "/ecosystem/partnerships", 
          action: "Jira boards" 
        }
      ]
    },
    {
      id: "security",
      label: "Cybersecurity Partners",
      icon: <Shield size={14} />,
      subtitle: "Workloads protection providers validating identity borders.",
      partners: [
        { 
          name: "Palo Alto Networks", 
          logo: "/assets/Tech-icons/typescript-logo_svgstack_com_31481780931142.svg", 
          desc: "Next-gen network firewalls, Prisma cloud posture validation, and threat protection.", 
          href: "/ecosystem/partnerships", 
          action: "Prisma Cloud" 
        },
        { 
          name: "Cloudflare", 
          logo: "/assets/Tech_logos/Cloud_flaire.svg", 
          desc: "Global edge CDN networks, Web App Firewalls (WAF), and custom zero-trust corridors.", 
          href: "/ecosystem/partnerships", 
          action: "Edge perimeters" 
        },
        { 
          name: "HashiCorp", 
          logo: "/assets/Tech_logos/HashiCorp.svg", 
          desc: "Vault credentials secrets manager, Terraform infrastructure coding, and Consul grids.", 
          href: "/ecosystem/partnerships", 
          action: "Terraform IaC" 
        },
        { 
          name: "CrowdStrike", 
          logo: "/assets/Tech-icons/python-logo_svgstack_com_29121780931061.svg", 
          desc: "Endpoint detection and response (EDR), malware defense engines, and audit sweeps.", 
          href: "/ecosystem/partnerships", 
          action: "EDR sweeps" 
        }
      ]
    },
    {
      id: "infra",
      label: "Infrastructure Partners",
      icon: <Database size={14} />,
      subtitle: "Physical networking and operations providers handling core server pipelines.",
      partners: [
        { 
          name: "Cisco", 
          logo: "/assets/Tech_logos/cisco.svg", 
          desc: "Core enterprise switches, software-defined WAN routers, and Webex systems.", 
          href: "/ecosystem/partnerships/cisco", 
          action: "SD-WAN routing" 
        },
        { 
          name: "Red Hat", 
          logo: "/assets/Tech_logos/red_hat.svg", 
          desc: "Enterprise Linux servers, OpenShift Kubernetes, and Ansible scripting hubs.", 
          href: "/ecosystem/partnerships", 
          action: "OpenShift grids" 
        },
        { 
          name: "Datadog", 
          logo: "/assets/Tech_logos/Datadog.svg", 
          desc: "Unified SRE monitoring maps, application trace hooks, and server logs alerts.", 
          href: "/ecosystem/partnerships", 
          action: "SRE monitors" 
        },
        { 
          name: "Dynatrace", 
          logo: "/assets/Tech_logos/Dynatrace.svg", 
          desc: "AI-based system SRE observability dashboards, host metrics alerts, and database traces.", 
          href: "/ecosystem/partnerships", 
          action: "Observability map" 
        }
      ]
    }
  ];

  // Auto cycle tabs every 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = categories.findIndex((cat) => cat.id === activeTab);
      const nextIndex = (currentIndex + 1) % categories.length;
      setActiveTab(categories[nextIndex].id);
    }, 6000);

    return () => clearTimeout(timer);
  }, [activeTab]);

  // Smooth scroll active tab pill into view in the horizontal container without triggering page-level scrolling
  useEffect(() => {
    const container = document.getElementById("partner-tab-pills-container");
    const activeEl = document.getElementById(`partner-tab-pill-${activeTab}`);
    if (container && activeEl) {
      const containerRect = container.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();
      const relativeLeft = activeRect.left - containerRect.left + container.scrollLeft;
      const targetScrollLeft = relativeLeft - (containerRect.width / 2) + (activeRect.width / 2);

      container.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }
  }, [activeTab]);

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  const activeIndex = categories.findIndex((cat) => cat.id === activeTab);
  const stepNumber = (activeIndex + 1).toString().padStart(2, "0");

  return (
    <section id="categories" className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        {/* Header Section */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Ecosystem Portfolios
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Partner <span className="text-rose-500">Categories</span>
            </h2>
            <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed">
              We categorize our strategic partnerships across five core domains to provide enterprises with targeted, best-of-breed modernization.
            </p>
          </div>
        </Reveal>

        {/* Tab Pills Selector */}
        <div 
          id="partner-tab-pills-container" 
          className="flex items-center gap-2 mb-12 pb-4 overflow-x-auto scrollbar-hide scroll-smooth -mx-6 px-6 md:mx-0 md:px-0 border-b border-zinc-900/60"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`partner-tab-pill-${cat.id}`}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 border flex items-center gap-2 ${
                activeTab === cat.id
                  ? "bg-rose-600 border-rose-600 text-white shadow-[0_4px_20px_rgba(225,29,72,0.35)]"
                  : "bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-900/50 hover:border-zinc-800"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Categories Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Left Tall Card (Col 1, Spans entire height / 2 rows on desktop) */}
          <Reveal className="lg:col-span-1 h-full">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-rose-500/30 p-8 flex flex-col justify-between h-full min-h-[480px] bg-gradient-to-br from-zinc-950/90 via-[#0a0506]/90 to-[#0f0709]/90 group/tall backdrop-blur-md transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              {/* Internal decorative glowing meshes */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-rose-600/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-orange-600/5 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />

              {/* Dynamic Abstract Smoky Wave Backgrounds with Crossfade */}
              {categories.map((cat) => (
                <img
                  key={cat.id}
                  src={bgWaves[cat.id]}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover mix-blend-screen pointer-events-none transition-opacity duration-700 ease-in-out ${
                    activeTab === cat.id ? "opacity-35" : "opacity-0"
                  }`}
                />
              ))}

              {/* Card top details */}
              <div className="relative z-10">
                <span className="text-xs font-mono text-rose-500 tracking-widest uppercase block mb-4">
                  {stepNumber} / ECOSYSTEM DIVISION
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight mb-4 group-hover/tall:text-rose-400 transition-colors">
                  Integrate with our {currentCategory.label}
                </h3>
                <p className="text-zinc-200 text-sm md:text-base font-semibold leading-relaxed">
                  {currentCategory.subtitle}
                </p>
              </div>

              {/* Card bottom button */}
              <div className="relative z-10 mt-8">
                <Link
                  href="/contact#contact-form"
                  className="gap-2 w-fit inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
                >
                  Consult Alliance Leads{" "}
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Right Capabilities Grid (Col 2-4, 2 Columns x 2 Rows of smaller cards) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCategory.partners.map((partner, idx) => (
              <Reveal key={partner.name} delay={idx * 0.04} className="h-full">
                <div className="group/card flex flex-col justify-between bg-zinc-950/30 border border-white/5 hover:border-rose-500/20 hover:bg-zinc-950/60 rounded-2xl p-6 transition-all duration-300 min-h-[220px] h-full relative overflow-hidden backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                  
                  {/* Subtle color highlight glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 via-rose-600/0 to-rose-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Text details */}
                  <div>
                    <div className="flex items-center gap-3 mb-3 border-b border-zinc-900/60 pb-3">
                      {partner.logo && (
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-6 h-6 object-contain opacity-60 group-hover/card:opacity-100 transition-opacity duration-300 filter brightness-100 invert-[0.1]"
                        />
                      )}
                      <h4 className="text-base font-semibold text-rose-500 group-hover/card:text-rose-450 transition-colors">
                        {partner.name}
                      </h4>
                    </div>
                    <p className="text-sm text-zinc-300 font-medium leading-relaxed mb-6">
                      {partner.desc}
                    </p>
                  </div>

                  {/* Link action details */}
                  <Link
                    href={partner.href}
                    className="inline-flex items-center gap-2.5 group/link mt-auto w-fit"
                  >
                    <span className="w-7 h-7 rounded-full bg-rose-600/10 group-hover/link:bg-rose-600 text-rose-500 group-hover/link:text-white flex items-center justify-center transition-all duration-300">
                      <ChevronRight
                        size={12}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5"
                      />
                    </span>
                    <span className="text-xs md:text-sm font-semibold text-zinc-400 group-hover/link:text-zinc-200 transition-colors">
                      {partner.action}
                    </span>
                  </Link>

                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

