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
  HeartHandshake,
  Layers,
  FileText
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
      { name: "Services Explorer", href: "/services/explore", desc: "Interactive Capability Matrix" },
      { name: "AI & Data Innovation", href: "/services/ai-data-innovation", desc: "LLMs, RAG & Cognitive Automation" },
      { name: "Cloud Services", href: "/services/cloud-services", desc: "Azure, AWS & GCP Architecture" },
      { name: "DevOps & Automation", href: "/services/devops-automation", desc: "CI/CD, IaC & GitOps Automation" },
      { name: "Cybersecurity Services", href: "/services/cybersecurity", desc: "Zero-Trust & Compliance Hardening" },
      { name: "Software Development", href: "/services/software-development", desc: "Enterprise Next.js & Microservices" },
      { name: "Digital Transformation", href: "/services/digital-transformation", desc: "Legacy Refactoring & Cloud Transition" },
      { name: "Data Engineering", href: "/services/data-engineering", desc: "Lakehouses & Telemetry Pipelines" },
      { name: "Managed Services", href: "/services/managed-services", desc: "24/7 SRE Operations & Support" },
      { name: "QA & Performance Testing", href: "/services/qa-testing", desc: "Automated Regression & k6 Benchmarks" },
      { name: "IT Strategy Consulting", href: "/services/it-consulting", desc: "Architecture Audits & Roadmaps" },
    ],
  },
  {
    title: "Ecosystem & Products",
    description: "Proprietary SaaS platforms, cloud landing zones, and co-engineering alliances.",
    icon: Layers,
    accentColor: "from-amber-500 to-rose-500",
    items: [
      { name: "Ecosystem Overview", href: "/ecosystem", desc: "Co-Engineering Hub & Alliances" },
      { name: "Cloud Landing Zone", href: "/ecosystem/landing-zone", desc: "SOC-2 Compliant Terraform Modules" },
      { name: "SafeSign Platform", href: "/ecosystem/platforms-solutions/saas-platforms/safesign", desc: "Zero-Trust E-Signatures" },
      { name: "Brio Marketing Engine", href: "/ecosystem/platforms-solutions/saas-platforms/brio", desc: "AI Influencer & Creator Portal" },
      { name: "CareSuite Health Grid", href: "/ecosystem/platforms-solutions/saas-platforms/caresuite", desc: "HIPAA Patient Telemetry" },
      { name: "Campix Operations", href: "/ecosystem/platforms-solutions/saas-platforms/campix", desc: "Campaign Operations Hub" },
      { name: "HomeLa Real Estate", href: "/ecosystem/platforms-solutions/saas-platforms/homela", desc: "Property Management Grid" },
      { name: "HumanEx HR Tech", href: "/ecosystem/platforms-solutions/saas-platforms/humanex", desc: "Workforce Analytics Platform" },
      { name: "Justivon Legal Tech", href: "/ecosystem/platforms-solutions/saas-platforms/justivon", desc: "Legal Contract Intelligence" },
      { name: "Prestivo Fintech", href: "/ecosystem/platforms-solutions/saas-platforms/prestivo", desc: "Micro-Lending & Credit Engine" },
    ],
  },
  {
    title: "Industry Verticals",
    description: "Regulatory-compliant runtimes for banking, healthcare, retail, and manufacturing.",
    icon: Building2,
    accentColor: "from-blue-500 to-indigo-600",
    items: [
      { name: "Industries Main Hub", href: "/industries", desc: "Vertical Cloud Runtimes" },
      { name: "Banking & Financial Services", href: "/industries/banking-finance", desc: "PCI-DSS High-Speed Ledgers" },
      { name: "Healthcare & Life Sciences", href: "/industries/healthcare-life-sciences", desc: "HIPAA Encrypted Vaults" },
      { name: "Retail & E-Commerce", href: "/industries/retail-ecommerce", desc: "Headless Storefront Scale" },
      { name: "Smart Manufacturing", href: "/industries/manufacturing", desc: "Industrial IoT & Telemetry" },
      { name: "Telecommunications", href: "/industries/telecommunications", desc: "5G Gateways & Edge Nodes" },
      { name: "Media & Entertainment", href: "/industries/media-entertainment", desc: "Low-Latency Video CDN" },
      { name: "Education & EdTech", href: "/industries/education", desc: "LMS & Student Exam Grids" },
      { name: "Government & Public Sector", href: "/industries/government-public-sector", desc: "Air-Gapped Sovereign Cloud" },
    ],
  },
  {
    title: "Corporate & Culture",
    description: "Company background, executive leadership, careers, and corporate governance.",
    icon: Info,
    accentColor: "from-emerald-500 to-teal-600",
    items: [
      { name: "About Devopstrio", href: "/about", desc: "Company Background & Mission" },
      { name: "Company Overview", href: "/about/company-overview", desc: "Corporate Identity & Governance" },
      { name: "Leadership Team", href: "/about/leadership-team", desc: "Executive Board & Architects" },
      { name: "Our Culture & People", href: "/about/our-culture-people", desc: "Life, Guilds & Engineering Values" },
      { name: "Global Internship", href: "/about/global-internship", desc: "12-Week Engineering Bootcamp" },
      { name: "Global Presence", href: "/about/global-presence", desc: "London HQ & Regional Nodes" },
      { name: "Partnerships & Certs", href: "/about/partnerships-certifications", desc: "AWS, Azure & GCP Badges" },
      { name: "Awards & Recognition", href: "/about/awards-recognition", desc: "Consultancy Accolades" },
      { name: "Sustainability & CSR", href: "/about/sustainability-csr", desc: "Net-Zero FinOps Initiatives" },
      { name: "Client Testimonials", href: "/about/testimonials", desc: "CTO & VP Engineering Reviews" },
      { name: "Customer Support", href: "/about/customer-support", desc: "24/7 SRE Incident Portal" },
      { name: "Careers Main Hub", href: "/careers", desc: "Engineering Roles & Culture" },
      { name: "Open Job Listings", href: "/careers/jobs", desc: "Active Senior Openings" },
      { name: "Contact Advisory", href: "/contact", desc: "Scope Technical Projects" },
    ],
  },
  {
    title: "Marketing & Insights",
    description: "Corporate presentations, technical whitepapers, blogs, and market collateral.",
    icon: BookOpen,
    accentColor: "from-purple-500 to-pink-600",
    items: [
      { name: "Marketing Collateral Portal", href: "/marketing", desc: "Public Sales & Pitch Assets" },
      { name: "Corporate Presentation", href: "/marketing/company/corporate-presentation", desc: "45-Slide Pitch Deck" },
      { name: "Company Fact Sheet", href: "/marketing/company/company-profile", desc: "Executive Summary PDF" },
      { name: "Brand Guidelines", href: "/marketing/company/brand-guidelines", desc: "Logos, Colors & Typography" },
      { name: "SaaS Product Specs", href: "/marketing/products", desc: "SafeSign & Brio Specs" },
      { name: "Insights Research Hub", href: "/insights", desc: "Deep-Dives & Benchmarks" },
      { name: "Engineering Blogs", href: "/insights/blogs", desc: "DevOps & Kubernetes Guides" },
      { name: "Case Studies", href: "/insights/case-studies", desc: "Real-World Enterprise ROI" },
      { name: "Whitepapers", href: "/insights/white-paper", desc: "Architectural Blueprints" },
    ],
  },
  {
    title: "Legal & Compliance",
    description: "Terms of service, privacy policy, GDPR rights, and cookie management.",
    icon: ShieldCheck,
    accentColor: "from-cyan-500 to-blue-600",
    items: [
      { name: "Privacy Policy", href: "/privacy-policy", desc: "Data Protection & Security" },
      { name: "Terms of Service", href: "/terms-of-service", desc: "Platform Usage Governance" },
      { name: "Cookie Policy", href: "/cookie-policy", desc: "Consent & Telemetry Rules" },
      { name: "GDPR Compliance", href: "/gdpr", desc: "EU Data Subject Rights" },
      { name: "Legal Disclaimer", href: "/disclaimer", desc: "Corporate Information Limits" },
    ],
  },
];

export function SitemapClient() {
  return (
    <div className="min-h-screen bg-[#030303] text-white pt-28 pb-24 relative overflow-hidden font-sans select-text">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[350px] bg-rose-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-rose-600/[0.03] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Top Hero Banner Header */}
        <div className="border-b border-zinc-900 pb-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold uppercase mb-4">
              <Network size={14} className="animate-pulse" />
              Devopstrio Architecture Index
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white">
              Sitemap & Enterprise System Directory
            </h1>
            <p className="text-zinc-400 text-sm md:text-base max-w-3xl leading-relaxed font-light">
              Full index of all practice areas, SaaS product platforms, industry compliance runtimes, corporate information, and research publications across Devopstrio.
            </p>
          </Reveal>
        </div>

        {/* Directory Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapData.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <Reveal key={cat.title} delay={idx * 0.05}>
                <div className="bg-zinc-950/60 border border-zinc-900 rounded-3xl p-6 md:p-8 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${cat.accentColor} opacity-90 text-white shadow-lg`}>
                        <IconComp size={20} />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
                        {cat.items.length} ROUTES
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-rose-400 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-light mb-6 leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Links List */}
                    <div className="space-y-3 pt-4 border-t border-zinc-900/80">
                      {cat.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group/link flex items-start justify-between gap-3 text-xs p-2 rounded-xl hover:bg-zinc-900/60 transition-all duration-200"
                        >
                          <div>
                            <span className="text-zinc-200 font-semibold group-hover/link:text-rose-400 transition-colors flex items-center gap-1.5">
                              {item.name}
                            </span>
                            {item.desc && (
                              <span className="text-[11px] text-zinc-500 block font-light mt-0.5">
                                {item.desc}
                              </span>
                            )}
                          </div>
                          <ArrowUpRight size={13} className="text-zinc-600 group-hover/link:text-rose-500 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all flex-shrink-0 mt-0.5" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </div>
  );
}
