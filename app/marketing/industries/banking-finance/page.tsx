import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Download, ArrowLeft, CheckCircle2 } from "lucide-react";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/marketing/industries/banking-finance");
  return generatePageMetadata({
    title: seo.title,
    description: seo.description,
    path: "/marketing/industries/banking-finance",
    keywords: seo.keywords
  });
}

export default function BankingFinanceIndustryPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://devopstrio.co.uk" },
          { name: "Marketing", url: "https://devopstrio.co.uk/marketing" },
          { name: "Industries", url: "https://devopstrio.co.uk/marketing/industries" },
          { name: "Banking & Finance", url: "https://devopstrio.co.uk/marketing/industries/banking-finance" }
        ]}
      />
      <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">

          <Link href="/marketing/industries" className="inline-flex items-center gap-2 text-xs font-semibold text-rose-500 hover:text-rose-400">
            <ArrowLeft className="w-4 h-4" /> Back to Industry Solution Sheets
          </Link>

          <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full">
                Industry Solution Sheet • 11.2 MB
              </span>
              <span className="text-xs text-neutral-400">Banking & Fintech</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white">Banking & Financial Services Solutions</h1>

            <p className="text-neutral-300 text-sm leading-relaxed">
              Detailed solution guide for tier-1 banks, payment providers, and fintech institutions. Covers core banking cloud migration, zero-downtime microservices transformation, PCI-DSS compliance, and real-time AI transaction risk analysis.
            </p>

            <div className="space-y-3 pt-4 border-t border-neutral-800">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Solution Highlights:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Legacy Mainframe to Azure/AWS Migration</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> High-Concurrency Payment Gateway Integration</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> PCI-DSS & SOC2 Security & Encryption</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Real-time Fraud Detection & AML ML Models</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Open Banking APIs & ISO 20022 Messaging</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Mobile Banking Native iOS/Android Apps</li>
              </ul>
            </div>

            <div className="pt-6 border-t border-neutral-800 flex items-center gap-4">
              <button className="px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm flex items-center gap-2 transition-colors">
                <Download className="w-4 h-4" /> Download PDF (11.2 MB)
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
