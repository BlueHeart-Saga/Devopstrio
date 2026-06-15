"use client";

import React from "react";
import Link from "next/link";
import { Layers, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface RelatedServiceItem {
  title: string;
  href: string;
}

interface IndustryRelatedServicesProps {
  relatedServices: RelatedServiceItem[];
}

// Map outdated/incorrect service page URLs to valid routes defined in Navbar.tsx
function getCorrectServiceLink(href: string): { title: string; href: string } {
  const h = href.toLowerCase();
  if (h.includes("cloud-platform-engineering") || h.includes("platform-engineering")) {
    return { title: "Platform Engineering", href: "/services/devops-automation/platform-engineering" };
  }
  if (h.includes("sre-operations") || h.includes("site-reliability-engineering")) {
    return { title: "Site Reliability Engineering (SRE)", href: "/services/devops-automation/site-reliability-engineering" };
  }
  if (h.includes("product-engineering")) {
    return { title: "Product Engineering", href: "/services/software-development/product-engineering" };
  }
  if (h.includes("devops-automation")) {
    return { title: "DevOps & Automation", href: "/services/devops-automation" };
  }
  return { title: "", href: "" };
}

function resolveServiceLink(item: RelatedServiceItem): RelatedServiceItem {
  const corrected = getCorrectServiceLink(item.href);
  if (corrected.href) {
    return corrected;
  }
  
  // Fallback checks on title strings
  const t = item.title.toLowerCase();
  if (t.includes("platform")) return { title: "Platform Engineering", href: "/services/devops-automation/platform-engineering" };
  if (t.includes("sre") || t.includes("reliability")) return { title: "Site Reliability Engineering (SRE)", href: "/services/devops-automation/site-reliability-engineering" };
  if (t.includes("product")) return { title: "Product Engineering", href: "/services/software-development/product-engineering" };
  if (t.includes("devops")) return { title: "DevOps & Automation", href: "/services/devops-automation" };
  
  return item;
}

// Premium description lookups matching Navbar descriptions
const serviceDescriptions: Record<string, string> = {
  "/services/devops-automation/platform-engineering": "Developer self-service templates and Backstage portal configurations.",
  "/services/devops-automation/site-reliability-engineering": "SLI/SLO definition, error budget tracking, and pager alerts.",
  "/services/software-development/product-engineering": "Rapid MVP prototyping and customer experience design sprints.",
  "/services/devops-automation": "Automated delivery frameworks and continuous deployment controllers."
};

export function IndustryRelatedServices({ relatedServices }: IndustryRelatedServicesProps) {
  return (
    <section id="related-services" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 text-left">
        
        {/* Section Header */}
        <Reveal className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
              Practice Links
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white max-w-2xl">
            Explore related <span className="text-[#E11D48]">services</span>
          </h2>
        </Reveal>

        {/* Services Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedServices.map((srv, idx) => {
            const resolved = resolveServiceLink(srv);
            const desc = serviceDescriptions[resolved.href] || "Enterprise integrations, deployment automations, and modern telemetry.";
            
            return (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <Link
                  href={resolved.href}
                  className="group block h-full bg-[#0b0b0c] border border-white/10 rounded-[24px] p-6 hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)] transition-all duration-300 relative overflow-hidden cursor-pointer"
                >
                  
                  {/* Subtle Inner Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                  {/* Top card row */}
                  <div className="flex justify-between items-center relative z-10">
                    <span className="w-10 h-10 rounded-[12px] bg-rose-950/15 border border-[#E11D48]/20 flex items-center justify-center text-[#E11D48] group-hover:bg-[#E11D48] group-hover:text-white transition-all duration-300">
                      <Layers size={18} />
                    </span>
                    <span className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  {/* Text details */}
                  <div className="mt-8 relative z-10">
                    <h4 className="text-base font-bold text-white group-hover:text-[#E11D48] transition-colors duration-300">
                      {resolved.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold mt-2">
                      {desc}
                    </p>
                  </div>

                </Link>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
