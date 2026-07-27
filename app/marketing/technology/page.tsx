"use client";

import React from "react";
import Link from "next/link";
import { Cpu, Download, ArrowLeft } from "lucide-react";

export default function TechnologyMarketingPage() {
  const techItems = [
    { title: "Azure Cloud Enterprise Reference Architecture", type: "Blueprint", size: "15.4 MB", desc: "Multi-region Azure Kubernetes Service (AKS), Hub-Spoke network topology, and Azure Sentinel security." },
    { title: "AWS Modernization & Serverless Blueprint", type: "Blueprint", size: "12.8 MB", desc: "AWS Lambda, EventBridge, DynamoDB, and CloudFront global CDN deployment patterns." },
    { title: "Google Cloud Platform AI & BigQuery Architecture", type: "Blueprint", size: "10.6 MB", desc: "Vertex AI pipeline integration, BigQuery data warehouse, and Anthos multi-cloud cluster." },
    { title: "Kubernetes & ArgoCD GitOps Playbook", type: "Guide", size: "9.2 MB", desc: "Declarative continuous delivery, zero-downtime canary deployments, and Helm package control." },
    { title: "Generative AI RAG Architecture Guide", type: "Whitepaper", size: "14.1 MB", desc: "Vector indexing, Pinecone/Qdrant benchmarking, prompt security, and Enterprise LLM evaluation." },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">

        <Link href="/marketing" className="inline-flex items-center gap-2 text-xs font-semibold text-rose-500 hover:text-rose-400">
          <ArrowLeft className="w-4 h-4" /> Back to Marketing Hub
        </Link>

        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase mb-3">
            <Cpu className="w-3.5 h-3.5" /> Technical Blueprints
          </div>
          <h1 className="text-4xl font-bold text-white">Technology Stack & Architecture Documents</h1>
          <p className="text-neutral-400 text-sm mt-2 max-w-2xl">
            Reference architectures, cloud deployment blueprints, and engineering playbooks for solution architects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techItems.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-rose-500/40 transition-all flex flex-col justify-between space-y-4">
              <div>
                <span className="px-2 py-0.5 text-xs font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded">
                  {item.type}
                </span>
                <h3 className="text-lg font-bold text-white mt-3">{item.title}</h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{item.desc}</p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-xs text-neutral-500">{item.size}</span>
                <button className="text-xs font-bold text-rose-400 flex items-center gap-1">
                  Download <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
