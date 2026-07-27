"use client";

import React from "react";
import Link from "next/link";
import { Factory, Download, ChevronRight, ArrowLeft } from "lucide-react";

export default function IndustriesMarketingPage() {
  const industryItems = [
    { title: "Banking & Financial Services Brochure", type: "Brochure", size: "11.2 MB", desc: "Core banking modernization, payment gateway integration, PCI-DSS, and AI fraud detection.", href: "/marketing/industries/banking-finance" },
    { title: "Healthcare & Life Sciences Solutions", type: "PDF", size: "13.5 MB", desc: "HIPAA-compliant platforms, EHR integration, AI medical imaging diagnostics, and telemedicine.", href: "/marketing/industries/healthcare" },
    { title: "Retail & E-commerce Platform Architecture", type: "PDF", size: "9.7 MB", desc: "Omnichannel retail engines, headless commerce, inventory AI, and high-concurrency event scale." },
    { title: "Manufacturing & Industry 4.0 Telemetry", type: "Brochure", size: "10.4 MB", desc: "IoT sensor telemetry, digital twin models, predictive maintenance, and smart supply chain." },
    { title: "Telecommunications & 5G Cloud Edge", type: "PDF", size: "8.9 MB", desc: "OSS/BSS integration, subscriber portals, network virtualization, and edge computing." },
    { title: "Government & Public Sector Solutions", type: "PDF", size: "12.0 MB", desc: "Citizen service portals, FedRAMP readiness, secure identity management, and cloud vaults." },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">

        <Link href="/marketing" className="inline-flex items-center gap-2 text-xs font-semibold text-rose-500 hover:text-rose-400">
          <ArrowLeft className="w-4 h-4" /> Back to Marketing Hub
        </Link>

        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase mb-3">
            <Factory className="w-3.5 h-3.5" /> Sector Blueprints
          </div>
          <h1 className="text-4xl font-bold text-white">Industry Solution Brochures</h1>
          <p className="text-neutral-400 text-sm mt-2 max-w-2xl">
            Domain-specific solution papers tailored for Banking, Healthcare, Retail, Manufacturing, and Government.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryItems.map((item, idx) => (
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
                {item.href ? (
                  <Link href={item.href} className="text-xs font-bold text-rose-400 flex items-center gap-1 hover:underline">
                    View Sector Sheet <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <button className="text-xs font-bold text-rose-400 flex items-center gap-1">
                    Download <Download className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
