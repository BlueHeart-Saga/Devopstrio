"use client";

import React from "react";
import Link from "next/link";
import { Cloud, Download, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function CloudServicesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">
        
        <Link href="/marketing/services" className="inline-flex items-center gap-2 text-xs font-semibold text-rose-500 hover:text-rose-400">
          <ArrowLeft className="w-4 h-4" /> Back to Service Brochures
        </Link>

        <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full">
              Cloud Service Brochure • 10.1 MB
            </span>
            <span className="text-xs text-neutral-400">Azure, AWS & GCP</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Cloud Services & Multi-Cloud Infrastructure</h1>
          
          <p className="text-neutral-300 text-sm leading-relaxed">
            Complete architectural guide and brochure for Devopstrio cloud transformation services: 6-R migration strategy, multi-cloud management, cloud FinOps cost governance, serverless systems, and cloud security compliance.
          </p>

          <div className="space-y-3 pt-4 border-t border-neutral-800">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Service Highlights:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Microsoft Azure Migration & Modernization</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> AWS Well-Architected Framework</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Google Cloud & Anthos Hybrid Setup</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> FinOps Cloud Cost Governance</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Serverless Microservices Migration</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> 24/7 Managed NOC & SOC Monitoring</li>
            </ul>
          </div>

          <div className="pt-6 border-t border-neutral-800 flex items-center gap-4">
            <button className="px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm flex items-center gap-2 transition-colors">
              <Download className="w-4 h-4" /> Download PDF (10.1 MB)
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
