"use client";

import React from "react";
import Link from "next/link";
import { Factory, Download, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function HealthcareIndustryPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">

        <Link href="/marketing/industries" className="inline-flex items-center gap-2 text-xs font-semibold text-rose-500 hover:text-rose-400">
          <ArrowLeft className="w-4 h-4" /> Back to Industry Solution Sheets
        </Link>

        <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">
              Industry Solution Sheet • 13.5 MB
            </span>
            <span className="text-xs text-neutral-400">Healthcare & Life Sciences</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white">Healthcare & Life Sciences Solutions</h1>

          <p className="text-neutral-300 text-sm leading-relaxed">
            HIPAA and GDPR-compliant technology solutions for hospital networks, pharmaceutical companies, and digital health startups. Features telehealth platforms, EHR integration (HL7/FHIR), and AI-driven clinical workflow automation.
          </p>

          <div className="space-y-3 pt-4 border-t border-neutral-800">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Solution Highlights:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> HIPAA & HITECH Cloud Security Vaults</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> HL7 FHIR Interoperability API Gateway</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Virtual Care & Telemedicine Web/Mobile App</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> AI Diagnostic Imaging & NLP Clinical Notes</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Patient Portal & Remote Monitoring Telemetry</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Pharma Supply Chain & Blockchain Traceability</li>
            </ul>
          </div>

          <div className="pt-6 border-t border-neutral-800 flex items-center gap-4">
            <button className="px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm flex items-center gap-2 transition-colors">
              <Download className="w-4 h-4" /> Download PDF (13.5 MB)
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
