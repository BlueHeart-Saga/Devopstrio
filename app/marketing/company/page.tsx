import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Building2, Download, ChevronRight, ArrowLeft } from "lucide-react";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/marketing/company");
  return generatePageMetadata({
    title: seo.title,
    description: seo.description,
    path: "/marketing/company",
    keywords: seo.keywords
  });
}

export default function CompanyMarketingPage() {
  const companyDocs = [
    { title: "Company Profile 2026", type: "PDF", size: "14.2 MB", desc: "Official corporate overview document detailing global delivery models and engineering standards.", href: "/marketing/company/company-profile" },
    { title: "Corporate Presentation", type: "PPT", size: "32.1 MB", desc: "Executive pitch deck for client meetings and partnership proposals.", href: "/marketing/company/corporate-presentation" },
    { title: "Brand Guidelines & Asset Kit", type: "PDF", size: "18.6 MB", desc: "Official logos, typography, color tokens, and brand standards.", href: "/marketing/company/brand-guidelines" },
    { title: "Capability Statement", type: "PDF", size: "5.4 MB", desc: "Executive 2-page summary of engineering credentials and ISO/SOC2 certifications." },
    { title: "Fact Sheet 2026", type: "PDF", size: "2.1 MB", desc: "Key statistics, headcount breakdown, delivery centers, and partner tiers." },
    { title: "Global Presence & Delivery Network", type: "PDF", size: "8.3 MB", desc: "Comprehensive map of US, UK, UAE, and APAC delivery nodes." },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://devopstrio.co.uk" },
          { name: "Marketing", url: "https://devopstrio.co.uk/marketing" },
          { name: "Company", url: "https://devopstrio.co.uk/marketing/company" }
        ]}
      />
      <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">

          <Link href="/marketing" className="inline-flex items-center gap-2 text-xs font-semibold text-rose-500 hover:text-rose-400">
            <ArrowLeft className="w-4 h-4" /> Back to Marketing Hub
          </Link>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase mb-3">
              <Building2 className="w-3.5 h-3.5" /> Corporate Resources
            </div>
            <h1 className="text-4xl font-bold text-white">Company Decks & Brand Guidelines</h1>
            <p className="text-neutral-400 text-sm mt-2 max-w-2xl">
              Access official corporate profiles, investor decks, executive capability statements, and brand identity kits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyDocs.map((item, idx) => (
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
                      View Subpage <ChevronRight className="w-3.5 h-3.5" />
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
    </>
  );
}
