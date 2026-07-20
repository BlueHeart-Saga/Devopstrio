"use client";

import React from "react";
import Link from "next/link";
import { Cpu, Download, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function DevOpsAutomationPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">
        
        <Link href="/marketing/services" className="inline-flex items-center gap-2 text-xs font-semibold text-rose-500 hover:text-rose-400">
          <ArrowLeft className="w-4 h-4" /> Back to Service Brochures
        </Link>

        <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 text-xs font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-full">
              DevOps & Platform Engineering • 7.9 MB
            </span>
            <span className="text-xs text-neutral-400">Updated July 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">DevOps & Platform Automation Brochure</h1>
          
          <p className="text-neutral-300 text-sm leading-relaxed">
            Detailed practice guide covering Devopstrio CI/CD pipeline automation, Infrastructure as Code (Terraform/Ansible), Kubernetes cluster lifecycle management, GitOps, DevSecOps, and Internal Developer Portals (IDP).
          </p>

          <div className="space-y-3 pt-4 border-t border-neutral-800">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Practice Solutions:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Infrastructure as Code (Terraform, Pulumi)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Automated CI/CD Pipelines (GitHub Actions, Jenkins)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Enterprise Kubernetes & ArgoCD GitOps</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Internal Developer Portals & Developer Self-Service</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> DevSecOps Automated Vulnerability Scanning</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Prometheus, Grafana & Datadog Observability</li>
            </ul>
          </div>

          <div className="pt-6 border-t border-neutral-800 flex items-center gap-4">
            <button className="px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm flex items-center gap-2 transition-colors">
              <Download className="w-4 h-4" /> Download Brochure (7.9 MB)
            </button>
            <Link href="/marketing" className="px-6 py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-bold text-sm transition-colors">
              Return to Hub
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
