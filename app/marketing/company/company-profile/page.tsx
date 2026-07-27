"use client";

import React from "react";
import Link from "next/link";
import { FileText, Download, ArrowLeft, CheckCircle2, Shield } from "lucide-react";

export default function CompanyProfileResourcePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">

        <Link href="/marketing/company" className="inline-flex items-center gap-2 text-xs font-semibold text-rose-500 hover:text-rose-400">
          <ArrowLeft className="w-4 h-4" /> Back to Company Resources
        </Link>

        <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 text-xs font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-full">
              PDF Document • 14.2 MB
            </span>
            <span className="text-xs text-neutral-400 flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-emerald-400" /> Verfied Public Asset
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white">Devopstrio Corporate Profile 2026</h1>

          <p className="text-neutral-300 text-sm leading-relaxed">
            The official 2026 corporate overview of Devopstrio. This document details our global technology delivery centers, CMMI Level 5 engineering standards, enterprise client portfolio, and end-to-end cloud, AI, and DevOps offerings.
          </p>

          <div className="space-y-3 pt-4 border-t border-neutral-800">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">What&apos;s Included:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Company History & Leadership</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Global Delivery Network (UK, US, UAE)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Core Practice Areas & Tech Stack</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Case Studies & Client Testimonials</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Security & Compliance (ISO 27001, SOC2)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Partnership Tiers (Microsoft, AWS, GCP)</li>
            </ul>
          </div>

          <div className="pt-6 border-t border-neutral-800 flex items-center gap-4">
            <button className="px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm flex items-center gap-2 transition-colors">
              <Download className="w-4 h-4" /> Download PDF (14.2 MB)
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
