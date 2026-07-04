"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { BookOpen, FileText, Compass, ChevronRight } from "lucide-react";
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
    <section id="publications" className="w-full py-24 md:py-32 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        
        {/* Main Section Header */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              R&D REPOSITORY
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Research & <span className="text-rose-500">Publications</span>
            </h2>
            <p className="text-zinc-400 text-sm font-semibold mb-8">
              Access our in-depth white papers, technical summaries, and architecture blueprints. Learn how our engineering teams benchmark multi-cloud scaling, fortify LLM interfaces, and secure deployments.
            </p>
            <button className="px-6 py-2.5 rounded-lg text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 transition-colors shadow-lg hover:shadow-[0_0_20px_rgba(225,29,72,0.4)]">
              View All Publications
            </button>
          </div>
        </Reveal>

        {/* Massive Hero Image Container with Overlay Glass Cards */}
        <div className="relative w-full rounded-[24px] lg:rounded-[32px] overflow-hidden min-h-[700px] border border-white/5 shadow-2xl">
          
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/assets/services/bg-ai.png" 
              alt="Research and Engineering Collaboration" 
              className="w-full h-full object-cover opacity-60"
            />
            {/* Gradient Overlay to ensure text readability at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>

          {/* Bottom Glass Cards Grid */}
          <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 lg:p-12 z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {publications.map((pub) => (
                <div
                  key={pub.title}
                  className="group flex flex-col justify-between p-8 bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/20 rounded-2xl transition-all duration-300 min-h-[300px] shadow-xl hover:bg-white/10"
                >
                  <div>
                    {/* White Rounded Square Icon Container */}
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-rose-600 mb-6 group-hover:scale-105 transition-transform duration-300">
                      {pub.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight leading-tight mb-4">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-zinc-300 font-medium leading-relaxed mb-8">
                      {pub.desc}
                    </p>
                  </div>

                  {/* Text Link CTA */}
                  <Link
                    href={pub.url}
                    className="inline-flex items-center gap-2 mt-auto"
                  >
                    <div className="w-6 h-6 rounded-full bg-rose-600 flex items-center justify-center text-white group-hover:bg-rose-500 transition-colors">
                      <ChevronRight size={14} strokeWidth={3} />
                    </div>
                    <span className="text-xs font-bold text-rose-400 group-hover:text-rose-300 transition-colors">
                      Read Technical Report
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
