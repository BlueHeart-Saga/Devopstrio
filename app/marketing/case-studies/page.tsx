"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Download, ArrowLeft } from "lucide-react";

export default function CaseStudiesMarketingPage() {
  const caseStudies = [
    { title: "Global Banking Azure Cloud Migration & FinOps", client: "Fortune 100 Investment Bank", metrics: "42% AWS Cost Savings", size: "4.5 MB", desc: "Migrated 300+ microservices to Azure Kubernetes with zero downtime and established FinOps governance." },
    { title: "Healthcare Telemedicine Scale & HIPAA Vault", client: "Leading US Health System", metrics: "1.2M Active Monthly Consults", size: "5.1 MB", desc: "Built scalable web/mobile telehealth engine with end-to-end video encryption and EHR interoperability." },
    { title: "Retail Microservices & Peak Event Architecture", client: "Global E-Commerce Giant", metrics: "99.999% Uptime during Black Friday", size: "3.8 MB", desc: "Engineered cloud-native event-driven ordering system scaling to 50k transactions/second." },
    { title: "AI-Powered Customer Support Automation", client: "Global Telecom Carrier", metrics: "65% Deflection Rate", size: "6.0 MB", desc: "Deployed Generative AI RAG assistant handling 2.5 million quarterly customer support queries." },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">

        <Link href="/marketing" className="inline-flex items-center gap-2 text-xs font-semibold text-rose-500 hover:text-rose-400">
          <ArrowLeft className="w-4 h-4" /> Back to Marketing Hub
        </Link>

        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5" /> Client Success Stories
          </div>
          <h1 className="text-4xl font-bold text-white">Enterprise Case Studies</h1>
          <p className="text-neutral-400 text-sm mt-2 max-w-2xl">
            Real-world enterprise case studies documenting ROI metrics, client transformation, and architectural solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-rose-500/40 transition-all flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-rose-400 font-bold uppercase tracking-wider">{item.client}</span>
                  <span className="px-2.5 py-0.5 text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">{item.metrics}</span>
                </div>
                <h3 className="text-xl font-bold text-white mt-3">{item.title}</h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{item.desc}</p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-xs text-neutral-500">{item.size} PDF</span>
                <button className="text-xs font-bold text-rose-400 flex items-center gap-1">
                  Download Case Study <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
