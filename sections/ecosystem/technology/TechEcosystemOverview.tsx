"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Brain, Cloud, Terminal, Database, Workflow, Shield, Layout, CheckSquare, Sparkles } from "lucide-react";

interface EcosystemDomain {
  name: string;
  desc: string;
  icon: React.ReactNode;
  image: string;
}

export function TechEcosystemOverview() {
  const domains: EcosystemDomain[] = [
    { 
      name: "Artificial Intelligence", 
      desc: "Building intelligent systems using neural networks, agents, and predictive engines.", 
      icon: <Brain size={24} />,
      image: "/assets/common/945ab601f043c558e0a8162da2a1eb4c%201.png"
    },
    { 
      name: "Cloud Native", 
      desc: "Constructing modern infrastructure at scale with serverless and Kubernetes.", 
      icon: <Cloud size={24} />,
      image: "/assets/common/9d230407fdcdb1a78debc2abe0ff1925%201.png"
    },
    { 
      name: "Software Engineering", 
      desc: "Developing highly responsive frontend and enterprise-grade backend systems.", 
      icon: <Terminal size={24} />,
      image: "/assets/common/9d91b93f83e6d4cd494ec13611b3e50e%201.png"
    },
    { 
      name: "Data Engineering", 
      desc: "Setting up real-time telemetry streams, data lakehouses, and governance grids.", 
      icon: <Database size={24} />,
      image: "/assets/common/b384eb0438c55e43c61e7595acc29638%201.png"
    },
    { 
      name: "DevOps Toolchain", 
      desc: "Continuous delivery configurations using GitOps pipelines and declarative IaC.", 
      icon: <Workflow size={24} />,
      image: "/assets/common/ddb20908c846f1426649343fea590cb7%201.png"
    },
    { 
      name: "Cybersecurity", 
      desc: "Zero-trust identity routing, security validation pipelines, and scanning services.", 
      icon: <Shield size={24} />,
      image: "/assets/common/e76e125035885aab9c9070ce85df239e%201.png"
    },
    { 
      name: "Platform Engineering", 
      desc: "Boosting developer onboarding speeds through unified self-service portal dashboards.", 
      icon: <Layout size={24} />,
      image: "/assets/common/e8fc628d320e4551e0527b648a0db21b%201.png"
    },
    { 
      name: "Quality Engineering", 
      desc: "Continuous quality verification using Playwright, Cypress, and performance load scripts.", 
      icon: <CheckSquare size={24} />,
      image: "/assets/common/ed602acdfd41667c71b96f247eca6d4e%201.png"
    },
    { 
      name: "Emerging Technologies", 
      desc: "Researching post-quantum cryptography algorithms, digital twins, and edge networks.", 
      icon: <Sparkles size={24} />,
      image: "/assets/common/f03cc521fb070dfae9d87768b791ff70%201.png"
    }
  ];

  return (
    <section id="overview" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            CORE MATRICES
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Technology Ecosystem <span className="text-rose-500">Overview</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            Our technology stack is structured into nine major pillars, supporting full lifecycle agility from discovery to operations.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {domains.map((dom, idx) => (
            <Reveal key={dom.name} delay={idx * 0.05}>
              <div className="relative rounded-[24px] border border-zinc-800/80 bg-[#0A0A0A] p-6 md:p-8 flex flex-col justify-between group h-full shadow-lg overflow-hidden transition-all duration-500 hover:border-rose-500/40 min-h-[340px]">
                
                {/* Expanding Image Layer with Glassmorphism */}
                <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none">
                  <img src={dom.image} alt={dom.name} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out opacity-70" />
                  
                  {/* Frosted Glass Blur Overlay */}
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
                  
                  {/* Vignette Gradient for depth and text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-white/5 border border-white/5 rounded-[24px]" />
                </div>

                {/* Content Layer */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 text-rose-500 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-400 transition-all duration-500">
                      {dom.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 tracking-tight transition-transform duration-500 group-hover:-translate-y-1">
                      {dom.name}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed font-medium group-hover:text-zinc-200 transition-colors duration-500">
                      {dom.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-zinc-800/60 group-hover:border-white/20 transition-colors duration-500 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider group-hover:text-rose-400 transition-colors">
                      ACTIVE PILLAR
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(225,29,72,0.8)]" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
