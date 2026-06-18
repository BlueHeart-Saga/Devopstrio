"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Brain, Cloud, Terminal, Database, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface TechItem {
  name: string;
  role: string;
  logo: string;
}

interface TechCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
  items: TechItem[];
}

export function LabsTechStack() {
  const [activeCategory, setActiveCategory] = useState("ai");

  const categories: TechCategory[] = [
    {
      id: "ai",
      label: "Artificial Intelligence",
      icon: <Brain size={16} />,
      items: [
        { name: "OpenAI", role: "LLM Endpoints & GPT models", logo: "/assets/Home-page/Techtools/typescript.svg" },
        { name: "Anthropic", role: "Claude model fine-tunings", logo: "/assets/Home-page/Techtools/python.svg" },
        { name: "Google Gemini", role: "Multimodal contextual search", logo: "/assets/Home-page/Techtools/google-color.svg" },
        { name: "LangChain", role: "Agent chaining orchestrations", logo: "/assets/Home-page/Techtools/nextjs.svg" },
        { name: "LlamaIndex", role: "Vector data connector indexers", logo: "/assets/Home-page/Techtools/docker.svg" }
      ]
    },
    {
      id: "cloud",
      label: "Cloud Infrastructures",
      icon: <Cloud size={16} />,
      items: [
        { name: "Microsoft Azure", role: "Secure compliant cloud spaces", logo: "/assets/Home-page/Techtools/MSAzure.svg" },
        { name: "Amazon Web Services", role: "Serverless Lambda & EKS runtimes", logo: "/assets/Home-page/Techtools/aws-color.svg" },
        { name: "Google Cloud", role: "Vertex AI ML & BigQuery storage", logo: "/assets/Home-page/Techtools/google-color.svg" },
        { name: "Oracle OCI", role: "Autonomous database clusters", logo: "/assets/Home-page/Techtools/Oracle.svg" }
      ]
    },
    {
      id: "devops",
      label: "Platform & DevOps",
      icon: <Terminal size={16} />,
      items: [
        { name: "Kubernetes", role: "Microservice pod orchestrations", logo: "/assets/Home-page/Techtools/docker.svg" },
        { name: "HashiCorp Terraform", role: "Declarative IaC configurations", logo: "/assets/Home-page/Techtools/typescript.svg" },
        { name: "GitHub Actions", role: "Automated CI pipeline triggers", logo: "/assets/Home-page/Techtools/nextjs.svg" },
        { name: "ArgoCD", role: "Continuous GitOps configurations", logo: "/assets/Home-page/Techtools/python.svg" }
      ]
    },
    {
      id: "data",
      label: "Data & Lakehouse",
      icon: <Database size={16} />,
      items: [
        { name: "Apache Kafka", role: "Real-time telemetry event streams", logo: "/assets/Home-page/Techtools/typescript.svg" },
        { name: "Databricks", role: "Unified analytics Lakehouses", logo: "/assets/Home-page/Techtools/python.svg" },
        { name: "Snowflake", role: "Global data share warehouses", logo: "/assets/Home-page/Techtools/docker.svg" },
        { name: "Apache Spark", role: "Distributed query executors", logo: "/assets/Home-page/Techtools/google-color.svg" }
      ]
    }
  ];

  const currentCategory = categories.find(c => c.id === activeCategory) || categories[0];

  return (
    <section id="tech-stack" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            R&D TOOLKITS
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Technology <span className="text-rose-500">Stack</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            The programming frameworks, clouds, and libraries validated by our labs for production implementation.
          </p>
        </Reveal>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2.5 mb-12 border-b border-zinc-900 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-rose-500/10 text-rose-500 border border-rose-500/20"
                  : "bg-zinc-950/45 text-zinc-500 border border-zinc-900/80 hover:text-zinc-350 hover:bg-zinc-900/40"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="min-h-[250px]">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {currentCategory.items.map((item) => (
              <div
                key={item.name}
                className="group flex flex-col justify-between p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 min-h-[140px]"
              >
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-zinc-450 font-semibold leading-relaxed">
                    {item.role}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-900/60 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-zinc-500 font-bold uppercase tracking-wider">
                    VALIDATED
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
