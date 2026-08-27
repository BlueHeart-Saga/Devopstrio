"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Code2, Cpu, Shield, Users, ArrowUpRight, CheckCircle2, Award, Terminal } from "lucide-react";
import Link from "next/link";

export function CommunityGrowthFramework() {
  const guilds = [
    {
      title: "Cloud & IaC Engineering Guild",
      icon: <Code2 className="w-6 h-6 text-rose-500" />,
      desc: "Specialized guild focused on Azure Enterprise Landing Zones, AWS Control Tower, and modular Terraform infrastructure.",
      link: "/services/cloud-services",
      items: ["Azure & AWS Blueprint Workshops", "Terraform & Bicep Code Reviews", "Multi-Cloud Governance Labs"]
    },
    {
      title: "AI & GenAI Innovation Guild",
      icon: <Cpu className="w-6 h-6 text-rose-500" />,
      desc: "Community space for enterprise LLMOps, RAG pipelines, vector search, and autonomous AI agent architectures.",
      link: "/services/it-consulting/ai-digital-transformation",
      items: ["Azure OpenAI & Vector Search", "Prompt Engineering Masterclasses", "LLMOps Pipeline Benchmarks"]
    },
    {
      title: "Platform & GitOps Guild",
      icon: <Terminal className="w-6 h-6 text-rose-500" />,
      desc: "Dedicated guild for Internal Developer Platforms (IDP), Kubernetes operator design, and ArgoCD deployment automation.",
      link: "/services/devops-automation",
      items: ["Hardened AKS & EKS Baselines", "ArgoCD & FluxCD GitOps Patterns", "CI/CD Security Gate Automation"]
    },
    {
      title: "Zero Trust & Security Guild",
      icon: <Shield className="w-6 h-6 text-rose-500" />,
      desc: "Security engineering community standardizing SAST/DAST rules, IAM guardrails, and SOC2/ISO compliance templates.",
      link: "/services/cybersecurity",
      items: ["Zero Trust Architecture Reviews", "Vulnerability Scanning Hacks", "Cloud Compliance Automation"]
    }
  ];

  return (
    <section id="guilds" className="w-full py-24 bg-black text-white border-b border-zinc-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal className="mb-16 text-center max-w-3xl mx-auto">
          {/* <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-rose-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Users className="w-4 h-4 text-white" />
            Specialized Engineering Guilds
          </div> */}
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-4 text-white">
            Talent Growth & <span className="text-rose-500">Guild Pathways</span>
          </h2>
          {/* <p className="text-zinc-300 text-sm md:text-base font-semibold max-w-2xl mx-auto">
            Deep-dive technical communities connecting engineers with hands-on labs, open-source projects, and peer mentorship.
          </p> */}
        </Reveal>

        {/* Guilds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {guilds.map((guild, idx) => (
            <Reveal key={guild.title} delay={idx * 0.1}>
              <div className="group flex flex-col justify-between bg-zinc-950/40 border border-white/5 hover:border-rose-500/30 rounded-3xl p-8 transition-all duration-300 h-full backdrop-blur-md">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:bg-rose-950/30 group-hover:border-rose-500/40 transition-all duration-300">
                    {guild.icon}
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight uppercase mb-3">
                    {guild.title}
                  </h3>

                  <p className="text-zinc-300 text-sm md:text-base font-normal leading-relaxed mb-6">
                    {guild.desc}
                  </p>

                  <ul className="space-y-3 mb-8 border-t border-zinc-900 pt-6">
                    {guild.items.map((item) => (
                      <li key={item} className="text-sm md:text-base text-zinc-200 font-semibold flex items-center gap-3">
                        <CheckCircle2 className="w-4.5 h-4.5 text-rose-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-zinc-900">
                  <Link
                    href={guild.link}
                    className="inline-flex items-center gap-2 text-sm md:text-base font-semibold uppercase tracking-wider text-rose-500 hover:text-white transition-colors"
                  >
                    <span>Explore Guild Path</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
