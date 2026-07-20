"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Download, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function AIDataInnovationServicePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">
        
        <Link href="/marketing/services" className="inline-flex items-center gap-2 text-xs font-semibold text-rose-500 hover:text-rose-400">
          <ArrowLeft className="w-4 h-4" /> Back to Service Brochures
        </Link>

        <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 text-xs font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-full">
              Service Brochure • 12.4 MB
            </span>
            <span className="text-xs text-neutral-400">Updated July 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">AI & Data Innovation Capabilities</h1>
          
          <p className="text-neutral-300 text-sm leading-relaxed">
            Detailed capability sheet covering Devopstrio end-to-end AI offerings: Generative AI, Retrieval-Augmented Generation (RAG), custom LLM fine-tuning, computer vision, vector database implementation, and enterprise MLOps pipelines.
          </p>

          <div className="space-y-3 pt-4 border-t border-neutral-800">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Key Capabilities Covered:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Enterprise LLM & GenAI Agents</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> RAG & Vector Database Architecture</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Custom Model Fine-Tuning & MLOps</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Secure AI Governance & Guardrails</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Computer Vision & Document AI</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Predictive Analytics & Real-Time Data</li>
            </ul>
          </div>

          <div className="pt-6 border-t border-neutral-800 flex items-center gap-4">
            <button className="px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm flex items-center gap-2 transition-colors">
              <Download className="w-4 h-4" /> Download Brochure (12.4 MB)
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
