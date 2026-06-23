"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Cpu, Cloud, Settings, Shield, Database, Layout, Server, Smartphone } from "lucide-react";

interface TechTool {
  name: string;
  logo?: string;
}

const landscapes = [
  {
    category: "AI & Cognitive Intelligence",
    icon: <Cpu size={20} />,
    description: "Deep learning models, neural pipelines, and semantic systems.",
    tools: [
      { name: "OpenAI", logo: "/assets/Tech-icons/openai-logo_svgstack_com_28971780931370.svg" },
      { name: "PyTorch", logo: "/assets/Tech-icons/pytorch-logo_svgstack_com_29131780931154.svg" },
      { name: "Python", logo: "/assets/Home-page/Techtools/python.svg" },
      { name: "Go", logo: "/assets/Home-page/Techtools/GO.svg" },
      { name: "LangChain" },
      { name: "Redis Semantic", logo: "/assets/Tech-icons/redis-logo_svgstack_com_29201780931292.svg" }
    ]
  },
  {
    category: "Cloud Infrastructure",
    icon: <Cloud size={20} />,
    description: "Secure landing zones, serverless runtimes, and hybrid hypervisors.",
    tools: [
      { name: "AWS", logo: "/assets/Home-page/Techtools/aws-color.svg" },
      { name: "Azure", logo: "/assets/Home-page/Techtools/MSAzure.svg" },
      { name: "Google Cloud", logo: "/assets/Home-page/Techtools/google-color.svg" },
      { name: "Cloudflare", logo: "/assets/Tech-icons/cloudflare-logo-icon_svgstack_com_28071780931769.svg" },
      { name: "VMware" },
      { name: "OpenStack" }
    ]
  },
  {
    category: "DevOps & Automation",
    icon: <Settings size={20} />,
    description: "Declarative infrastructure, GitOps, and platform tooling.",
    tools: [
      { name: "Docker", logo: "/assets/Tech-icons/docker-logo_svgstack_com_28191780931128.svg" },
      { name: "Terraform" },
      { name: "Kubernetes" },
      { name: "GitHub", logo: "/assets/Tech-icons/github-logo-svg_svgstack_com_28391780931442.svg" },
      { name: "GitLab", logo: "/assets/Tech-icons/gitlab-logo_svgstack_com_28401780931548.svg" },
      { name: "Backstage" }
    ]
  },
  {
    category: "Cybersecurity & IAM",
    icon: <Shield size={20} />,
    description: "Zero Trust architecture, dependency checking, and audit trials.",
    tools: [
      { name: "Snyk" },
      { name: "Wiz" },
      { name: "Vault", logo: "/assets/Tech-icons/redis-logo_svgstack_com_29201780931292.svg" },
      { name: "Okta" },
      { name: "SonarQube" }
    ]
  },
  {
    category: "Data Platforms",
    icon: <Database size={20} />,
    description: "Real-time streaming, warehousing, and lakehouses.",
    tools: [
      { name: "PostgreSQL", logo: "/assets/Home-page/Techtools/postgre.svg" },
      { name: "MySQL", logo: "/assets/Home-page/Techtools/MySQL.svg" },
      { name: "Oracle", logo: "/assets/Home-page/Techtools/Oracle.svg" },
      { name: "Snowflake" },
      { name: "Databricks" },
      { name: "Kafka" }
    ]
  },
  {
    category: "Frontend Architectures",
    icon: <Layout size={20} />,
    description: "Performant, SEO-optimized, and interactive web interfaces.",
    tools: [
      { name: "Next.js", logo: "/assets/Home-page/Techtools/next-js-color.svg" },
      { name: "React", logo: "/assets/Home-page/Techtools/React.svg" },
      { name: "Tailwind", logo: "/assets/Tech-icons/tailwindcss-logo_svgstack_com_31451780931467.svg" },
      { name: "TypeScript", logo: "/assets/Tech-icons/typescript-logo_svgstack_com_31481780931142.svg" },
      { name: "Zustand" },
      { name: "Playwright" }
    ]
  },
  {
    category: "Backend Services",
    icon: <Server size={20} />,
    description: "Type-safe, fast, and highly concurrent APIs.",
    tools: [
      { name: "Go", logo: "/assets/Home-page/Techtools/GO.svg" },
      { name: "Node.js", logo: "/assets/Home-page/Techtools/Node.svg" },
      { name: "Python", logo: "/assets/Home-page/Techtools/python.svg" },
      { name: "Rust", logo: "/assets/Tech-icons/rust-logo_svgstack_com_31291780931285.svg" },
      { name: "gRPC" }
    ]
  },
  {
    category: "Mobile Systems",
    icon: <Smartphone size={20} />,
    description: "Native and cross-platform applications.",
    tools: [
      { name: "React Native", logo: "/assets/Home-page/Techtools/React.svg" },
      { name: "Flutter", logo: "/assets/Home-page/Techtools/flutter.svg" },
      { name: "iOS", logo: "/assets/Home-page/Techtools/iOS.svg" },
      { name: "Android", logo: "/assets/Home-page/Techtools/Android.svg" }
    ]
  }
];

export function TechnologyLandscape() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (idx: number) => {
    setActiveIndex(idx);
  };

  const activeLandscape = landscapes[activeIndex];

  return (
    <section id="landscape" className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900/60 relative">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-12 xl:px-8 relative z-10">
        <Reveal className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            TECHNOLOGY LANDSCAPE
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Our Multi-Cloud <span className="text-rose-500">Tech Stack</span>
          </h2>
          <p className="text-zinc-300 text-base md:text-lg font-semibold leading-relaxed max-w-2xl">
            We work with the most modern tools across the software engineering lifecycle to ensure scale, security, and velocity.
          </p>
        </Reveal>

        {/* Tab Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Vertical Tabs Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {landscapes.map((land, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={land.category}
                  onClick={() => handleTabClick(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative flex flex-col justify-center min-h-[64px] ${
                    isActive
                      ? "bg-zinc-950/80 border-rose-500/30 text-white shadow-[0_0_20px_rgba(244,63,94,0.06)]"
                      : "bg-zinc-950/20 border-white/5 text-zinc-400 hover:border-zinc-800/80 hover:text-zinc-200"
                  }`}
                >
                  <span className="text-xs font-bold tracking-tight uppercase">
                    {land.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Active Details & Cards Grid */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <Reveal className="p-6 bg-zinc-950/15 border border-white/5 rounded-2xl backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2.5">
                <span className="text-rose-500">{activeLandscape.icon}</span>
                {activeLandscape.category}
              </h3>
              <p className="text-xs text-zinc-400 font-semibold leading-relaxed">
                {activeLandscape.description}
              </p>
            </Reveal>

            {/* Tools grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {activeLandscape.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="group/tool-card flex flex-col items-center justify-center text-center p-6 bg-zinc-950/45 border border-white/5 hover:border-rose-500/20 hover:bg-zinc-950/80 rounded-2xl transition-all duration-300 min-h-[160px] relative overflow-hidden backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 to-rose-600/5 opacity-0 group-hover/tool-card:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Icon Node Container */}
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900/40 border border-zinc-850 flex items-center justify-center mb-4 group-hover/tool-card:bg-zinc-900 group-hover/tool-card:scale-105 transition-all duration-300 relative">
                    {tool.logo ? (
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="w-8 h-8 object-contain transition-all duration-300"
                      />
                    ) : (
                      <span className="text-base font-bold font-mono text-rose-500">
                        {tool.name.charAt(0)}
                      </span>
                    )}
                  </div>

                  <h4 className="text-xs font-bold text-white mb-1 tracking-wide group-hover/tool-card:text-rose-400 transition-colors">
                    {tool.name}
                  </h4>
                  <span className="text-[9px] text-zinc-500 font-semibold uppercase tracking-wider">
                    {tool.logo ? "Enterprise Stack" : "Standard Core"}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
