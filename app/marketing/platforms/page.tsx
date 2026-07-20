"use client";

import React from "react";
import Link from "next/link";
import { Rocket, Download, ChevronRight, ArrowLeft } from "lucide-react";

export default function PlatformsMarketingPage() {
  const platforms = [
    { title: "Humanex AI HR & Talent Platform", type: "Datasheet", size: "6.2 MB", desc: "Automated candidate screening, employee engagement AI, and global payroll integration.", href: "/ecosystem/platforms-solutions/saas-platforms/humanex" },
    { title: "Homela Real Estate & PropTech Platform", type: "Datasheet", size: "5.8 MB", desc: "Virtual property tours, tenant portal, automated leasing contracts, and maintenance dispatch." },
    { title: "CareSuite Digital Health Platform", type: "Datasheet", size: "7.1 MB", desc: "Telehealth video consultations, electronic prescription routing, and patient management." },
    { title: "Campix Smart Campus Management System", type: "Datasheet", size: "6.5 MB", desc: "University admissions, LMS integration, student portals, and automated grading." },
    { title: "Prestivo Fintech Credit Scoring Engine", type: "Datasheet", size: "8.3 MB", desc: "Automated credit underwriting, KYC/AML verification, and loan servicing engine." },
    { title: "Brio Enterprise Operations Hub", type: "Datasheet", size: "5.1 MB", desc: "Unified enterprise dashboard for resource planning, asset tracking, and analytics." },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
        
        <Link href="/marketing" className="inline-flex items-center gap-2 text-xs font-semibold text-rose-500 hover:text-rose-400">
          <ArrowLeft className="w-4 h-4" /> Back to Marketing Hub
        </Link>

        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase mb-3">
            <Rocket className="w-3.5 h-3.5" /> Proprietary SaaS Platforms
          </div>
          <h1 className="text-4xl font-extrabold text-white">Platform Datasheets & Product Kits</h1>
          <p className="text-neutral-400 text-sm mt-2 max-w-2xl">
            Explore product collateral, architectural datasheets, and feature blueprints for Devopstrio SaaS platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((item, idx) => (
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
                    View Platform <ChevronRight className="w-3.5 h-3.5" />
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
