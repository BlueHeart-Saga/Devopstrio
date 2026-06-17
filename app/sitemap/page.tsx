"use client";

import React from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { 
  Network, 
  Cpu, 
  Building2, 
  BookOpen, 
  ShieldCheck, 
  Info, 
  ArrowUpRight,
  TrendingUp,
  MapPin,
  HeartHandshake
} from "lucide-react";

interface SitemapItem {
  name: string;
  href: string;
  desc?: string;
}

interface SitemapCategory {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  items: SitemapItem[];
  accentColor: string;
}

const sitemapData: SitemapCategory[] = [
  {
    title: "Practice Areas",
    description: "Explore our core capabilities, engineering standards, and cloud accelerators.",
    icon: Cpu,
    accentColor: "from-rose-500 to-red-600",
    items: [
      { name: "AI & Data Innovation", href: "/services/ai-data-innovation", desc: "Cognitive AI pipelines and enterprise LLM models." },
      { name: "Cloud Services", href: "/services/cloud-services", desc: "Multi-region AKS/EKS container grids & FinOps." },
      { name: "DevOps & Automation", href: "/services/devops-automation", desc: "GitOps, CI/CD automation & platform engineering." },
      { name: "Cybersecurity", href: "/services/cybersecurity", desc: "Zero-trust networks, IAM audits & compliance hardening." },
      { name: "Software Development", href: "/services/software-development", desc: "Next.js applications, Go APIs & modular backend architecture." },
      { name: "Digital Transformation", href: "/services/digital-transformation", desc: "Legacy modernization & agile workflow refactoring." },
      { name: "Data Engineering", href: "/services/data-engineering", desc: "Lakehouses, ETL/ELT pipelines & orchestration." },
      { name: "Managed Services", href: "/services/managed-services", desc: "24/7 SRE support, cluster management & incident response." },
      { name: "QA & Testing", href: "/services/qa-testing", desc: "Automated regression tests, Playwright scripts & k6 benchmarks." },
      { name: "IT Consulting", href: "/services/it-consulting", desc: "Technology audits, architecture blueprints & disaster recovery." }
    ]
  },
  {
    title: "Industries",
    description: "Tailored digital environments built to satisfy strict vertical regulatory standards.",
    icon: Building2,
    accentColor: "from-blue-500 to-indigo-600",
    items: [
      { name: "Banking & Finance", href: "/industries/banking-finance", desc: "PCI-compliant transaction flows and ledger setups." },
      { name: "Healthcare & Life Sciences", href: "/industries/healthcare-life-sciences", desc: "HIPAA-certified data vaults & electronic health records." },
      { name: "Retail & E-Commerce", href: "/industries/retail-ecommerce", desc: "Headless shopping carts and real-time inventory systems." },
      { name: "Manufacturing", href: "/industries/manufacturing", desc: "IoT device telemetry tracking and supply chain planning." },
      { name: "Telecommunications", href: "/industries/telecommunications", desc: "Virtual border gateways and low-latency proxy setups." },
      { name: "Media & Entertainment", href: "/industries/media-entertainment", desc: "Secure video streaming layers and asset pipelines." },
      { name: "Education", href: "/industries/education", desc: "Centralized learning systems and digital class portals." },
      { name: "Government & Public Sector", href: "/industries/government-public-sector", desc: "Secure multi-tenant citizen portals and air-gapped runtimes." }
    ]
  },
  {
    title: "Ecosystem",
    description: "Our co-engineering alliances, technology frameworks, and execution methods.",
    icon: Network,
    accentColor: "from-emerald-500 to-teal-600",
    items: [
      { name: "Strategic Partnerships", href: "/ecosystem/partnerships", desc: "Certified co-engineering ties with AWS, GCP, and Azure." },
      { name: "R&D Innovation Labs", href: "/ecosystem/innovation-labs", desc: "Prototyping future AI pipelines and Edge computing architectures." },
      { name: "Platforms & Solutions", href: "/ecosystem/platforms-solutions", desc: "Our proprietary open-source tools and infrastructure templates." },
      { name: "Technology Stack", href: "/ecosystem/technology-stack", desc: "An overview of all components, libraries, and runtimes we build with." },
      { name: "Global Delivery", href: "/ecosystem/global-delivery", desc: "Distributed team nodes ensuring follow-the-sun service reliability." },
      { name: "Engineering Excellence", href: "/ecosystem/engineering-excellence", desc: "Our rigorous code standards, peer reviews, and SRE principles." },
      { name: "Accelerators & Frameworks", href: "/ecosystem/accelerators-frameworks", desc: "Modular startup code bases that trim weeks off project lifecycles." }
    ]
  },
  {
    title: "Insights Hub",
    description: "Deep-dives, case studies, and corporate milestones written by our engineers.",
    icon: BookOpen,
    accentColor: "from-violet-500 to-purple-600",
    items: [
      { name: "Insights Home", href: "/insights", desc: "Portal overview for all technology research papers and reports." },
      { name: "Blogs", href: "/insights/blogs", desc: "DevOps tutorials, system configurations, and scripting tips." },
      { name: "Case Studies", href: "/insights/case-studies", desc: "Documented digital transformations and engineering success stories." },
      { name: "White Papers", href: "/insights/white-paper", desc: "Architectural blueprints and security briefs by our tech leads." },
      { name: "Awards & Milestones", href: "/insights/awards-milestones", desc: "Our engineering awards, client praise, and company growth." },
      { name: "Industry Events", href: "/insights/industry-events", desc: "Upcoming keynotes, webinars, and developer roundtables." },
      { name: "Celebrations", href: "/insights/celebrations", desc: "Behind-the-scenes views of our company festivals, gatherings, and events." },
      { name: "Team Culture", href: "/insights/team-culture", desc: "The values, collaborative habits, and diversity that make up Devopstrio." },
      { name: "Client Transformations", href: "/insights/client-transformations", desc: "Stories highlighting partner satisfaction and business growth." },
      { name: "Impact Metrics", href: "/insights/impact-metrics", desc: "Quantified efficiency scores and carbon reduction footprints." }
    ]
  },
  {
    title: "Company",
    description: "Meet the organization, leadership team, and check our support channels.",
    icon: HeartHandshake,
    accentColor: "from-amber-500 to-orange-600",
    items: [
      { name: "Company Overview", href: "/about/company-overview", desc: "Our founding story, mission, and vision statements." },
      { name: "Leadership & Team", href: "/about/leadership-team", desc: "The expert engineering leads directing Devopstrio." },
      { name: "Life at Devopstrio", href: "/about/life-at-devopstrio", desc: "A showcase of our work environment and team perks." },
      { name: "Global Presence", href: "/about/global-presence", desc: "Interactive map of our developer hubs and sales offices." },
      { name: "Partnerships & Certifications", href: "/about/partnerships-certifications", desc: "Enterprise certifications that qualify our cloud delivery." },
      { name: "Awards & Recognition", href: "/about/awards-recognition", desc: "Our collection of technical and workplace accolades." },
      { name: "Sustainability & CSR", href: "/about/sustainability-csr", desc: "Our pledge to green hostings and community engineering." },
      { name: "Testimonials & Success", href: "/about/testimonials", desc: "Written and recorded feedback from our enterprise clients." },
      { name: "Customer Support", href: "/about/customer-support", desc: "Access 24/7 portals, open billing questions, or ticket systems." },
      { name: "Contact Us", href: "/contact", desc: "Submit details to start your custom engineering assessment." }
    ]
  },
  {
    title: "Resources & Policies",
    description: "Compliance details, terms of service, and cookie choices.",
    icon: ShieldCheck,
    accentColor: "from-zinc-500 to-zinc-650",
    items: [
      { name: "Disclaimer", href: "/disclaimer", desc: "Legal responsibilities, source limits, and copyright declarations." },
      { name: "Privacy Policy", href: "/privacy-policy", desc: "Data protection guidelines outlining user privacy rights." },
      { name: "Terms of Service", href: "/terms-of-service", desc: "Rules and responsibilities governing platform usage." },
      { name: "Cookie Policy", href: "/cookie-policy", desc: "Tracking disclosures, browser cookie lists, and consent controls." },
      { name: "GDPR Compliance", href: "/gdpr", desc: "EU data privacy compliance protocols and request forms." }
    ]
  }
];

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white pt-28 pb-24 font-sans relative overflow-hidden">
      {/* Background Graphic Glows */}
      <div className="absolute top-[10%] right-[-10%] w-[40%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[40%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Page Header */}
        <div className="text-left border-b border-zinc-900 pb-10 mb-16">
          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
              Site Navigation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Sitemap
            </h1>
            <p className="text-zinc-400 font-medium max-w-xl text-sm md:text-base leading-relaxed">
              Quickly locate all capability pages, industry regulatory profiles, co-engineering assets, and publications across Devopstrio.
            </p>
          </Reveal>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapData.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <Reveal key={catIdx} delay={catIdx * 0.05} className="flex flex-col h-full">
                <div className="group flex flex-col h-full rounded-[28px] border border-white/10 bg-zinc-950/20 hover:bg-zinc-950/40 p-8 transition-all duration-300 relative overflow-hidden hover:border-rose-500/30">
                  {/* Subtle hover background accent */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${category.accentColor} opacity-[0.02] group-hover:opacity-[0.06] blur-[24px] pointer-events-none transition-opacity duration-300`} />

                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.accentColor} flex items-center justify-center text-white shadow-lg`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white tracking-tight">
                        {category.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 font-medium mb-8 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Links List */}
                  <div className="flex-grow">
                    <ul className="space-y-4">
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="group/item border-b border-white/5 pb-3 last:border-0 last:pb-0">
                          <Link 
                            href={item.href}
                            className="flex items-start justify-between gap-4 text-xs font-semibold text-zinc-300 hover:text-white transition-colors duration-200"
                          >
                            <div className="flex flex-col gap-0.5">
                              <span className="group-hover/item:text-rose-500 transition-colors">
                                {item.name}
                              </span>
                              {item.desc && (
                                <span className="text-[10px] font-normal text-zinc-500 leading-normal block">
                                  {item.desc}
                                </span>
                              )}
                            </div>
                            <ArrowUpRight 
                              size={12} 
                              className="text-zinc-600 group-hover/item:text-rose-500 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all duration-200 flex-shrink-0 mt-0.5" 
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </main>
  );
}
