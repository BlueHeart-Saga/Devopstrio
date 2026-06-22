"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { BookOpen, FileText, Compass, ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Publication {
  title: string;
  category: string;
  desc: string;
  author: string;
  readTime: string;
  url: string;
  icon: React.ReactNode;
}

export function ResearchPublications() {
  const publications: Publication[] = [
    {
      title: "Adversarial Prompting and LLM Safety Guardrails",
      category: "White Paper",
      desc: "An exploration into prompt injection attacks, vulnerability vectors in model interfaces, and real-time defense layers.",
      author: "Dr. Alistair Vance, Principal AI Researcher",
      readTime: "12 min read",
      url: "/insights",
      icon: <FileText size={18} />
    },
    {
      title: "Scaling Karpenter Node Group Limits in Multi-Tenant Kubernetes",
      category: "Technical Report",
      desc: "Benchmark findings on CPU provision speeds, spot node interruptions handling, and Karpenter limits configurations.",
      author: "Sarah Chen, Lead Platform Engineer",
      readTime: "8 min read",
      url: "/insights",
      icon: <Compass size={18} />
    },
    {
      title: "Zero Trust Architecture for Dynamic HashiCorp Vault Integrations",
      category: "Architecture Guide",
      desc: "Deep-dive guidelines outlining secure service token injections, dynamic database roles, and secret rotation patterns.",
      author: "Marcus Brodie, Principal Security Architect",
      readTime: "10 min read",
      url: "/insights",
      icon: <BookOpen size={18} />
    }
  ];

  return (
    <section id="publications" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            R&D REPOSITORY
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Research & <span className="text-rose-500">Publications</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            In-depth white papers, technical summaries, and architecture diagrams documented by our engineering teams.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <div
              key={pub.title}
              className="group flex flex-col justify-between p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300 min-h-[300px]"
            >
              <div>
                <div className="flex items-center justify-between mb-6 border-b border-zinc-900/60 pb-4">
                  <span className="text-[9px] font-mono text-rose-500 uppercase tracking-widest font-bold">
                    {pub.category}
                  </span>
                  <div className="text-zinc-500 group-hover:text-rose-500 transition-colors">
                    {pub.icon}
                  </div>
                </div>

                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 leading-normal">{pub.title}</h3>
                <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed mb-6">
                  {pub.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-900/60 flex flex-col gap-3">
                <div className="flex items-center justify-between text-[10px] text-zinc-500">
                  <span className="font-semibold">{pub.author}</span>
                  <span className="font-mono">{pub.readTime}</span>
                </div>
                <Link
                  href={pub.url}
                  className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-rose-500 hover:text-rose-400 transition-colors mt-2"
                >
                  Read on Insights
                  <ArrowUpRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
