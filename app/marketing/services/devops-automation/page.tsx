import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Download, ArrowLeft, CheckCircle2 } from "lucide-react";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/marketing/services/devops-automation");
  return generatePageMetadata({
    title: seo.title,
    description: seo.description,
    path: "/marketing/services/devops-automation",
    keywords: seo.keywords
  });
}

export default function DevOpsAutomationPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://devopstrio.co.uk" },
          { name: "Marketing", url: "https://devopstrio.co.uk/marketing" },
          { name: "Services", url: "https://devopstrio.co.uk/marketing/services" },
          { name: "DevOps & Automation", url: "https://devopstrio.co.uk/marketing/services/devops-automation" }
        ]}
      />
      <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">

          <Link href="/marketing/services" className="inline-flex items-center gap-2 text-xs font-semibold text-rose-500 hover:text-rose-400">
            <ArrowLeft className="w-4 h-4" /> Back to Service Brochures
          </Link>

          <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">
                Practice Brochure • 7.9 MB
              </span>
              <span className="text-xs text-neutral-400">DevOps & SRE Practice</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white">DevOps & Platform Automation Brochure</h1>

            <p className="text-neutral-300 text-sm leading-relaxed">
              Executive guide detailing Devopstrio&apos;s DevOps Automation practice. Details Infrastructure as Code (Terraform/Pulumi), GitOps deployment models (ArgoCD/Flux), internal developer portals (IDP), and 99.99% SLA Site Reliability Engineering.
            </p>

            <div className="space-y-3 pt-4 border-t border-neutral-800">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Practice Highlights:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Infrastructure as Code (Terraform/Pulumi)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Automated GitOps CI/CD Pipelines</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Self-Service Internal Developer Portals (IDP)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Kubernetes Orchestration & Helm Blueprints</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> DevSecOps Automated SAST/DAST Gates</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Full-Stack Observability (Datadog/Grafana)</li>
              </ul>
            </div>

            <div className="pt-6 border-t border-neutral-800 flex items-center gap-4">
              <button className="px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm flex items-center gap-2 transition-colors">
                <Download className="w-4 h-4" /> Download PDF (7.9 MB)
              </button>
              <Link href="/marketing" className="px-6 py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-bold text-sm transition-colors">
                Return to Hub
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
