import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Cpu, Download, ArrowLeft, CheckCircle2 } from "lucide-react";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/marketing/technology");
  return generatePageMetadata({
    title: seo.title,
    description: seo.description,
    path: "/marketing/technology",
    keywords: seo.keywords
  });
}

export default function TechnologyMarketingPage() {
  const techDocs = [
    { title: "Enterprise Technology Radar 2026", type: "PDF", size: "15.3 MB", desc: "Annual technical evaluation of frameworks, databases, LLM engines, and cloud runtimes." },
    { title: "Cloud-Native Infrastructure Architecture Blueprint", type: "PDF", size: "11.2 MB", desc: "Reference architecture for multi-region Kubernetes, service mesh, and zero-trust networking." },
    { title: "Generative AI Technical Stack Specification", type: "PDF", size: "9.6 MB", desc: "Hardware requirements, GPU clustering, vector indexes, and quantization benchmarks." },
    { title: "DevSecOps Security & Compliance Manifest", type: "PDF", size: "7.8 MB", desc: "Automated scanning rules, IAM policy blueprints, and SOC-2 audit compliance templates." },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://devopstrio.co.uk" },
          { name: "Marketing", url: "https://devopstrio.co.uk/marketing" },
          { name: "Technology", url: "https://devopstrio.co.uk/marketing/technology" }
        ]}
      />
      <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">

          <Link href="/marketing" className="inline-flex items-center gap-2 text-xs font-semibold text-rose-500 hover:text-rose-400">
            <ArrowLeft className="w-4 h-4" /> Back to Marketing Hub
          </Link>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase mb-3">
              <Cpu className="w-3.5 h-3.5" /> Stack & Architecture
            </div>
            <h1 className="text-4xl font-bold text-white">Technology Stack & Architecture Documents</h1>
            <p className="text-neutral-400 text-sm mt-2 max-w-2xl">
              Technical specs, architectural manifests, and technology radar reports for enterprise engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techDocs.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-rose-500/40 transition-all flex flex-col justify-between space-y-4">
                <div>
                  <span className="px-2 py-0.5 text-xs font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded">
                    {item.type}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-3">{item.title}</h3>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                  <span className="text-xs text-neutral-500">{item.size} PDF</span>
                  <button className="text-xs font-bold text-rose-400 flex items-center gap-1">
                    Download Document <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
