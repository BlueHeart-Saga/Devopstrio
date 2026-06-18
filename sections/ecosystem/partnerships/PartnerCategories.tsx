"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Cloud, Cpu, Shield, Database, Layout, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PartnerItem {
  name: string;
  logo: string;
  desc: string;
}

interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
  subtitle: string;
  partners: PartnerItem[];
}

export function PartnerCategories() {
  const [activeTab, setActiveTab] = useState("cloud");

  const categories: Category[] = [
    {
      id: "cloud",
      label: "Cloud Partners",
      icon: <Cloud size={16} />,
      subtitle: "Hyper-scale infrastructure providers running core enterprise operations.",
      partners: [
        { name: "Microsoft Azure", logo: "/assets/Home-page/Techtools/MSAzure.svg", desc: "Enterprise application clouds, Active Directory IAM, and Office environments." },
        { name: "Amazon Web Services", logo: "/assets/Home-page/Techtools/aws-color.svg", desc: "Scale compute infrastructure, severless Lambda services, and S3 data lakes." },
        { name: "Google Cloud", logo: "/assets/Home-page/Techtools/google-color.svg", desc: "Kubernetes GKE orchestrations, Vertex AI pipelines, and BigQuery warehouses." },
        { name: "Oracle Cloud", logo: "/assets/Home-page/Techtools/Oracle.svg", desc: "OCI databases, Enterprise application ERP, and custom transaction processing." }
      ]
    },
    {
      id: "ai-data",
      label: "AI & Data Partners",
      icon: <Cpu size={16} />,
      subtitle: "Industry leaders in large language modeling and real-time database tooling.",
      partners: [
        { name: "OpenAI", logo: "/assets/Home-page/Techtools/typescript.svg", desc: "Large language models integration, agent assistants, and fine-tuning pipelines." },
        { name: "Snowflake", logo: "/assets/Home-page/Techtools/docker.svg", desc: "Unified global data cloud sharing analytics dashboards and structured warehouse operations." },
        { name: "MongoDB", logo: "/assets/Home-page/Techtools/nextjs.svg", desc: "Flexible document-based databases, vector search integrations, and atlas storage." },
        { name: "Databricks", logo: "/assets/Home-page/Techtools/python.svg", desc: "Unified lakehouse engines executing large data streaming runs and ML flows." }
      ]
    },
    {
      id: "enterprise",
      label: "Enterprise Software Partners",
      icon: <Layout size={16} />,
      subtitle: "Standardized platform managers driving company workflow automation.",
      partners: [
        { name: "SAP", logo: "/assets/Home-page/Techtools/MSAzure.svg", desc: "Enterprise resources manager, financial ledger orchestration, and supplier chains." },
        { name: "ServiceNow", logo: "/assets/Home-page/Techtools/aws-color.svg", desc: "IT operations automation, HR tickets ticketing, and automated customer desk runs." },
        { name: "Salesforce", logo: "/assets/Home-page/Techtools/google-color.svg", desc: "Enterprise CRM, customers pipeline analytics, and marketing cloud loops." },
        { name: "Atlassian", logo: "/assets/Home-page/Techtools/Oracle.svg", desc: "Software engineering Jira boards, internal wiki directories, and collaborative cards." }
      ]
    },
    {
      id: "security",
      label: "Cybersecurity Partners",
      icon: <Shield size={16} />,
      subtitle: "Workloads protection providers validating identity borders.",
      partners: [
        { name: "Palo Alto Networks", logo: "/assets/Home-page/Techtools/typescript.svg", desc: "Next-gen network firewalls, Prisma cloud posture validation, and threat protection." },
        { name: "Cloudflare", logo: "/assets/Home-page/Techtools/docker.svg", desc: "Global edge CDN networks, Web App Firewalls (WAF), and custom zero-trust corridors." },
        { name: "HashiCorp", logo: "/assets/Home-page/Techtools/nextjs.svg", desc: "Vault credentials secrets manager, Terraform infrastructure coding, and Consul grids." },
        { name: "CrowdStrike", logo: "/assets/Home-page/Techtools/python.svg", desc: "Endpoint detection and response (EDR), malware defense engines, and audit sweeps." }
      ]
    },
    {
      id: "infra",
      label: "Infrastructure Partners",
      icon: <Database size={16} />,
      subtitle: "Physical networking and operations providers handling core server pipelines.",
      partners: [
        { name: "Cisco", logo: "/assets/Home-page/Techtools/MSAzure.svg", desc: "Core enterprise switches, software-defined WAN routers, and Webex systems." },
        { name: "Red Hat", logo: "/assets/Home-page/Techtools/aws-color.svg", desc: "Enterprise Linux servers, OpenShift Kubernetes, and Ansible scripting hubs." },
        { name: "Datadog", logo: "/assets/Home-page/Techtools/google-color.svg", desc: "Unified SRE monitoring maps, application trace hooks, and server logs alerts." },
        { name: "Dynatrace", logo: "/assets/Home-page/Techtools/Oracle.svg", desc: "AI-based system SRE observability dashboards, host metrics alerts, and database traces." }
      ]
    }
  ];

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="categories" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            Ecosystem Portfolios
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Partner <span className="text-rose-500">Categories</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            We categorize our strategic partnerships across five core domains to provide enterprises with targeted, best-of-breed modernization.
          </p>
        </Reveal>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2.5 mb-12 border-b border-zinc-900 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-rose-500/10 text-rose-500 border border-rose-500/20"
                  : "bg-zinc-950/45 text-zinc-500 border border-zinc-900/80 hover:text-zinc-350 hover:bg-zinc-900/40"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Partner Grid */}
        <div className="min-h-[350px]">
          <div className="mb-8">
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-2">DOMAIN DIRECTIVE</p>
            <h3 className="text-white text-lg font-bold">{currentCategory.subtitle}</h3>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {currentCategory.partners.map((partner) => (
              <div
                key={partner.name}
                className="group flex flex-col justify-between p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 min-h-[220px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-zinc-900 pb-3">
                    <span className="text-[10px] font-mono text-zinc-450 uppercase font-bold tracking-wider">
                      {partner.name}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed mt-2">
                    {partner.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-900/60 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-rose-500 font-bold uppercase tracking-wider group-hover:text-rose-400 transition-colors">
                    View Integration
                  </span>
                  <ArrowRight size={12} className="text-zinc-650 group-hover:translate-x-1 group-hover:text-rose-500 transition-all" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
