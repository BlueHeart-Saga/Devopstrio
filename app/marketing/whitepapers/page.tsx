"use client";

import React from "react";
import Link from "next/link";
import { FileText, Download, ArrowLeft } from "lucide-react";

export default function WhitepapersMarketingPage() {
  const whitepapers = [
    { title: "Generative AI in Enterprise Software 2026 Report", size: "18.4 MB", pages: "48 Pages", desc: "Comprehensive research report detailing LLM deployment patterns, RAG vs Fine-tuning benchmarks, and ROI analysis across enterprise domains." },
    { title: "The Next-Gen Cloud Migration Playbook", size: "14.2 MB", pages: "36 Pages", desc: "Step-by-step roadmap for migrating legacy monolithic software to cloud-native microservices architectures on AWS and Azure." },
    { title: "Zero Trust DevSecOps Strategy Paper", size: "11.7 MB", pages: "28 Pages", desc: "Practical framework for integrating automated security compliance, SAST/DAST, and supply chain security into CI/CD pipelines." },
    { title: "Enterprise Platform Engineering & Internal Developer Portals", size: "9.8 MB", pages: "24 Pages", desc: "How to build self-service developer portals that accelerate software delivery while maintaining security governance." },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
        
        <Link href="/marketing" className="inline-flex items-center gap-2 text-xs font-semibold text-rose-500 hover:text-rose-400">
          <ArrowLeft className="w-4 h-4" /> Back to Marketing Hub
        </Link>

        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase mb-3">
            <FileText className="w-3.5 h-3.5" /> Research & Thought Leadership
          </div>
          <h1 className="text-4xl font-extrabold text-white">Whitepapers & Industry Reports</h1>
          <p className="text-neutral-400 text-sm mt-2 max-w-2xl">
            In-depth engineering research papers, security benchmarks, and cloud modernization playbooks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whitepapers.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-rose-500/40 transition-all flex flex-col justify-between space-y-4">
              <div>
                <span className="px-2 py-0.5 text-xs font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded">
                  {item.pages}
                </span>
                <h3 className="text-xl font-bold text-white mt-3">{item.title}</h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{item.desc}</p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-xs text-neutral-500">{item.size} PDF</span>
                <button className="text-xs font-bold text-rose-400 flex items-center gap-1">
                  Download Whitepaper <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
