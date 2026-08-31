import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Briefcase, Download, ChevronRight, ArrowLeft } from "lucide-react";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/marketing/services");
  return generatePageMetadata({
    title: seo.title,
    description: seo.description,
    path: "/marketing/services",
    keywords: seo.keywords
  });
}

export default function ServicesMarketingPage() {
  const serviceItems = [
    { title: "AI & Data Innovation Brochure", type: "PDF", size: "12.4 MB", desc: "Generative AI, LLM fine-tuning, RAG architecture, and predictive analytics capabilities.", href: "/marketing/services/ai-data-innovation" },
    { title: "Cloud Services & Multi-Cloud Architecture", type: "PDF", size: "10.1 MB", desc: "Azure, AWS, GCP cloud migration, FinOps, serverless, and cloud-native modernisation.", href: "/marketing/services/cloud-services" },
    { title: "DevOps & Platform Automation", type: "Brochure", size: "7.9 MB", desc: "Infrastructure as Code, CI/CD, GitOps, Kubernetes orchestration, and developer portals.", href: "/marketing/services/devops-automation" },
    { title: "Cybersecurity & Zero Trust Framework", type: "PDF", size: "9.3 MB", desc: "DevSecOps, penetration testing, ISO 27001, SOC2, and cloud security governance." },
    { title: "Enterprise Software Development", type: "PDF", size: "11.8 MB", desc: "Custom web systems, microservices, mobile apps, and scalable digital platforms." },
    { title: "Data Engineering & Analytics", type: "PDF", size: "14.0 MB", desc: "Snowflake/Databricks setup, real-time data streaming, lakehouse, and BI dashboards." },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://devopstrio.co.uk" },
          { name: "Marketing", url: "https://devopstrio.co.uk/marketing" },
          { name: "Services", url: "https://devopstrio.co.uk/marketing/services" }
        ]}
      />
      <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">

          <Link href="/marketing" className="inline-flex items-center gap-2 text-xs font-semibold text-rose-500 hover:text-rose-400">
            <ArrowLeft className="w-4 h-4" /> Back to Marketing Hub
          </Link>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase mb-3">
              <Briefcase className="w-3.5 h-3.5" /> Practice Offerings
            </div>
            <h1 className="text-4xl font-bold text-white">Service Brochures & Catalogs</h1>
            <p className="text-neutral-400 text-sm mt-2 max-w-2xl">
              Detailed service brochures, practice capabilities, and technical solutions across AI, Cloud, DevOps, and Security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceItems.map((item, idx) => (
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
                      View Service Sheet <ChevronRight className="w-3.5 h-3.5" />
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
