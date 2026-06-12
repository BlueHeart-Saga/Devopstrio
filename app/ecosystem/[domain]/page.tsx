import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowUpRight, 
  Layers, 
  Cpu, 
  Activity, 
  Globe, 
  CheckCircle2, 
  ShieldCheck, 
  Workflow, 
  FileText 
} from "lucide-react";
import { getEcosystemDomain } from "@/data/ecosystem";
import { Hero } from "@/components/ecosystem/Hero";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";
import { Reveal } from "@/components/ui/Reveal";

interface PageProps {
  params: Promise<{ domain: string }>;
}

const alliances = [
  { name: "Microsoft", path: "/assets/Home-page/partners/Microsoft.svg" },
  { name: "AWS", path: "/assets/Tech-icons/amazon-web-service-logo_svgstack_com_7421780931787.svg" },
  { name: "Google Cloud", path: "/assets/Tech-icons/google-cloud-logo_svgstack_com_28371780931185.svg" },
  { name: "OpenAI", path: "/assets/Tech-icons/openai-logo_svgstack_com_28971780931370.svg" },
  { name: "Oracle", path: "/assets/Tech-icons/oracle-logo_svgstack_com_28991780931429.svg" },
  { name: "ServiceNow", path: "/assets/Home-page/partners/servicenow.svg" }
];

export async function generateMetadata({ params }: PageProps) {
  const { domain } = await params;
  const data = getEcosystemDomain(domain);
  if (!data) return {};

  return {
    title: `${data.title} | Devopstrio`,
    description: data.subtitle,
    openGraph: {
      title: `${data.title} | Devopstrio`,
      description: data.subtitle
    }
  };
}

export default async function EcosystemDomainPage({ params }: PageProps) {
  const { domain } = await params;
  const data = getEcosystemDomain(domain);

  if (!data) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: data.title }
  ];

  const subSections = [
    { id: "domains", label: "Sub-Domains" },
    { id: "architecture", label: "Architecture" },
    { id: "labs", label: "Innovation Labs" },
    { id: "tech-stack", label: "Technology" },
    { id: "partnerships", label: "Partnerships" },
    { id: "excellence", label: "Engineering" },
    { id: "delivery", label: "Global Delivery" },
    { id: "metrics", label: "Metrics" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      
      {/* 1. Hero Block */}
      <Hero
        badge={data.badge}
        title={data.title}
        subtitle={data.subtitle}
        stats={data.stats}
        breadcrumbs={breadcrumbs}
      />

      {/* Sticky Section Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 2. Ecosystem Domains (Subpages Grid) */}
      <section id="domains" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-left">
          
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Subpages & Resources
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Explore <span className="font-semibold text-rose-500">{data.title}</span> specializations
            </h2>
          </Reveal>

          {/* Subpages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.subpages.map((sub, idx) => (
              <Reveal key={sub.slug} delay={idx * 0.05} className="h-full">
                <Link
                  href={`/ecosystem/${data.slug}/${sub.slug}`}
                  className="group flex flex-col justify-between h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 hover:border-rose-500/30 hover:bg-zinc-900/10 transition-all duration-300 hover:scale-[1.01] relative overflow-hidden cursor-pointer"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-4 border-b border-zinc-900/60 pb-3">
                      <div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500">
                        <FileText size={14} />
                      </div>
                      <span className="w-8 h-8 rounded-full bg-zinc-900/40 border border-zinc-800/60 flex items-center justify-center text-zinc-500 group-hover:text-rose-500 group-hover:bg-rose-950/20 group-hover:border-rose-500/20 transition-all duration-300">
                        <ArrowUpRight size={13} className="stroke-[2.5]" />
                      </span>
                    </div>

                    <h3 className="text-xs font-semibold text-zinc-100 group-hover:text-white transition-colors mb-2">
                      {sub.title}
                    </h3>

                    <p className="text-[11px] text-zinc-450 leading-relaxed font-light mb-6">
                      {sub.desc}
                    </p>
                  </div>

                  <div className="border-t border-zinc-900/60 pt-3 mt-auto">
                    <span className="text-[9px] text-rose-500 font-semibold group-hover:translate-x-1 transition-transform duration-250 inline-flex items-center gap-1">
                      Read Documentation <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Ecosystem Architecture */}
      <section id="architecture" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
          
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Ecosystem Topology
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Connected alliance <span className="font-semibold text-rose-500">dataflow & layers</span>
            </h2>
          </Reveal>

          {/* Interactive Topology Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-rose-500/5 via-rose-500/20 to-rose-500/5 hidden md:block z-0 -translate-y-6" />

            <Reveal className="h-full z-10">
              <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/20 transition-all duration-300">
                <span className="block text-[9px] font-mono tracking-widest text-zinc-550 mb-4 uppercase">
                  LAYER 01
                </span>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 mb-4 group-hover:scale-105 transition-transform">
                  <Globe size={14} />
                </div>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  Cloud Infrastructure
                </h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                  Raw public cloud partitions, IAM roles, and storage components hosted on AWS, Azure, and Google Cloud.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.05} className="h-full z-10">
              <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/20 transition-all duration-300">
                <span className="block text-[9px] font-mono tracking-widest text-zinc-550 mb-4 uppercase">
                  LAYER 02
                </span>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 mb-4 group-hover:scale-105 transition-transform">
                  <Layers size={14} />
                </div>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  Devopstrio Accelerators
                </h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                  Pre-compiled landing zones, Terraform boilerplates, and deployment blueprints configured for SOC-2 compliance.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="h-full z-10">
              <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/20 transition-all duration-300">
                <span className="block text-[9px] font-mono tracking-widest text-zinc-550 mb-4 uppercase">
                  LAYER 03
                </span>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 mb-4 group-hover:scale-105 transition-transform">
                  <Cpu size={14} />
                </div>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  Cognitive Engines
                </h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                  Private RAG configurations, semantic LLM routers, agentic workflows, and low-latency databases.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="h-full z-10">
              <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/20 transition-all duration-300">
                <span className="block text-[9px] font-mono tracking-widest text-zinc-550 mb-4 uppercase">
                  LAYER 04
                </span>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 mb-4 group-hover:scale-105 transition-transform">
                  <Activity size={14} />
                </div>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  Client Environments
                </h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                  Production-ready business endpoints, automated retries, and active OpenTelemetry performance trackers.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* 4. Innovation Labs */}
      <section id="labs" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
          
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Innovation Centers
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Active R&D <span className="font-semibold text-rose-500">innovation labs</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Lab 1 */}
            <Reveal className="h-full">
              <div className="h-full bg-zinc-950/10 border border-zinc-900 rounded-3xl p-8 hover:border-rose-500/20 hover:bg-zinc-900/5 transition-all duration-300">
                <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-6">
                  LAB 01 / COGNITIVE AI
                </span>
                <h3 className="text-sm font-semibold text-white mb-3">
                  LLM Fine-Tuning & Prompt Safety
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                  Developing parameter-efficient techniques (PEFT) using QLoRA layers. Testing adversarial prompt firewall scripts to prevent LLM injection hazards.
                </p>
                <div className="border-t border-zinc-900/60 pt-4 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-500 text-[9px] font-mono border border-zinc-800">PyTorch</span>
                  <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-500 text-[9px] font-mono border border-zinc-800">Llama-3</span>
                  <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-500 text-[9px] font-mono border border-zinc-800">LangGraph</span>
                </div>
              </div>
            </Reveal>

            {/* Lab 2 */}
            <Reveal delay={0.05} className="h-full">
              <div className="h-full bg-zinc-950/10 border border-zinc-900 rounded-3xl p-8 hover:border-rose-500/20 hover:bg-zinc-900/5 transition-all duration-300">
                <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-6">
                  LAB 02 / ZERO TRUST
                </span>
                <h3 className="text-sm font-semibold text-white mb-3">
                  IaC Validation & Secrets Injection
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                  Automating dynamic secrets injections inside Kubernetes runtimes using HashiCorp Vault. Running dry-run validation checks on code layouts to ensure data protection.
                </p>
                <div className="border-t border-zinc-900/60 pt-4 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-500 text-[9px] font-mono border border-zinc-800">Vault</span>
                  <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-500 text-[9px] font-mono border border-zinc-800">Terraform</span>
                  <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-500 text-[9px] font-mono border border-zinc-800">Trivy</span>
                </div>
              </div>
            </Reveal>

            {/* Lab 3 */}
            <Reveal delay={0.1} className="h-full">
              <div className="h-full bg-zinc-950/10 border border-zinc-900 rounded-3xl p-8 hover:border-rose-500/20 hover:bg-zinc-900/5 transition-all duration-300">
                <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-6">
                  LAB 03 / PLATFORM SRE
                </span>
                <h3 className="text-sm font-semibold text-white mb-3">
                  Karpenter Auto-scaling & Telemetry
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                  Constructing low-cost autoscaling setups on EKS grids. Benchmarking OpenTelemetry tracing parameters to reduce transaction lookup delays.
                </p>
                <div className="border-t border-zinc-900/60 pt-4 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-500 text-[9px] font-mono border border-zinc-800">Kubernetes</span>
                  <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-500 text-[9px] font-mono border border-zinc-800">Prometheus</span>
                  <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-500 text-[9px] font-mono border border-zinc-800">Jaeger</span>
                </div>
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* 5. Technology Stack */}
      <section id="tech-stack" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
          
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Integrations Catalog
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Ecosystem <span className="font-semibold text-rose-500">technology integrations</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <Reveal className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                <h4 className="text-xs font-semibold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                  Cloud Platforms
                </h4>
                <ul className="space-y-2 text-[10px] text-zinc-450 font-light">
                  <li>Amazon Web Services (AWS)</li>
                  <li>Microsoft Azure Cloud</li>
                  <li>Google Cloud Platform (GCP)</li>
                  <li>Kubernetes Container Orchestration</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.05} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                <h4 className="text-xs font-semibold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                  Automation & IaC
                </h4>
                <ul className="space-y-2 text-[10px] text-zinc-450 font-light">
                  <li>Terraform & OpenTofu Codification</li>
                  <li>Ansible Configuration Automation</li>
                  <li>ArgoCD GitOps Deployment</li>
                  <li>GitHub Actions Pipeline Engines</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                <h4 className="text-xs font-semibold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                  AI & Data Platforms
                </h4>
                <ul className="space-y-2 text-[10px] text-zinc-450 font-light">
                  <li>PyTorch Neural Foundations</li>
                  <li>LangChain / LangGraph Orchestrators</li>
                  <li>Pinecone Vector Indexes</li>
                  <li>Qdrant High-Performance Stores</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                <h4 className="text-xs font-semibold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                  Observability & SRE
                </h4>
                <ul className="space-y-2 text-[10px] text-zinc-450 font-light">
                  <li>OpenTelemetry Tracing Frameworks</li>
                  <li>Prometheus Latency Collectors</li>
                  <li>Grafana Unified Telemetry Views</li>
                  <li>Datadog Dashboard Monitoring</li>
                </ul>
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* 6. Strategic Partnerships */}
      <section id="partnerships" className="py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
          
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Alliances
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Strategic <span className="font-semibold text-rose-500">partnership network</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
            {alliances.map((partner, i) => (
              <Reveal key={i} delay={i * 0.05} className="h-full">
                <div className="h-24 bg-zinc-950/20 border border-zinc-900 rounded-2xl flex items-center justify-center p-6 grayscale hover:grayscale-0 hover:border-zinc-850 hover:bg-zinc-900/5 transition-all duration-300">
                  <Image
                    src={partner.path}
                    alt={partner.name}
                    width={100}
                    height={32}
                    className="object-contain max-h-8"
                    unoptimized
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Engineering Excellence */}
      <section id="excellence" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
          
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Excellence Benchmarks
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Rigorous <span className="font-semibold text-rose-500">engineering standards</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <Reveal className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/20 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-950/15 border border-rose-900/20 flex items-center justify-center text-rose-500 mb-4">
                  <CheckCircle2 size={15} />
                </div>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  Automated Pipeline Testing
                </h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                  Every code commit runs through automated testing pipelines, executing regression checks, SAST code analysis, and CVE security scans.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.05} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/20 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-950/15 border border-rose-900/20 flex items-center justify-center text-rose-500 mb-4">
                  <ShieldCheck size={15} />
                </div>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  GitOps Configuration State
                </h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                  Live cloud infrastructure state is synchronized with git repository configurations, preventing manual shifts and ensuring auditability.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/20 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-950/15 border border-rose-900/20 flex items-center justify-center text-rose-500 mb-4">
                  <Workflow size={15} />
                </div>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  Zero Trust Privileges
                </h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                  Access keys are never stored in plain text. Compute hosts pull scoped credentials dynamically from HashiCorp Vault.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 8. Global Delivery Network */}
      <section id="delivery" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
          
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Availability Map
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Global <span className="font-semibold text-rose-500">delivery distribution</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <Reveal className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/20 transition-all duration-300">
                <span className="block text-[9px] font-mono tracking-widest text-zinc-550 mb-3 uppercase">
                  AMERICAS HUB
                </span>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  Technical Strategy & Consulting
                </h4>
                <p className="text-[10px] text-zinc-550 leading-relaxed font-light">
                  Architecting landing zones, database sizing blueprints, and managing client success integrations.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.05} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/20 transition-all duration-300">
                <span className="block text-[9px] font-mono tracking-widest text-zinc-550 mb-3 uppercase">
                  EMEA CENTER
                </span>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  Platform Engineering & Migrations
                </h4>
                <p className="text-[10px] text-zinc-550 leading-relaxed font-light">
                  Developing Terraform plans, migrating virtual machine databases, and configuring EKS clusters.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/20 transition-all duration-300">
                <span className="block text-[9px] font-mono tracking-widest text-zinc-550 mb-3 uppercase">
                  APAC CENTER
                </span>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  24/7 Managed Operations & Testing
                </h4>
                <p className="text-[10px] text-zinc-550 leading-relaxed font-light">
                  Managing system backups, running scale testing suites, and responding to system outages.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 9. Impact Metrics */}
      <section id="metrics" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
          
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Impact Quantified
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Quantifiable <span className="font-semibold text-rose-500">engineering outcomes</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            {/* If the domain has specific stats, use them; otherwise fall back to standard ones */}
            {data.stats && data.stats.length >= 4 ? (
              data.stats.slice(0, 4).map((stat, idx) => (
                <Reveal key={idx} delay={idx * 0.05} className="h-full">
                  <div className="h-full bg-gradient-to-b from-zinc-950 to-black border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/20 transition-all duration-300">
                    <span className="block text-4xl font-bold font-mono text-rose-500 mb-2">{stat.value}</span>
                    <h4 className="text-xs font-semibold text-zinc-200 mb-1">
                      {stat.label}
                    </h4>
                  </div>
                </Reveal>
              ))
            ) : (
              <>
                <Reveal className="h-full">
                  <div className="h-full bg-gradient-to-b from-zinc-950 to-black border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/20 transition-all duration-300">
                    <span className="block text-4xl font-bold font-mono text-rose-500 mb-2">4.8x</span>
                    <h4 className="text-xs font-semibold text-zinc-200 mb-1">
                      Workflow Frequency
                    </h4>
                  </div>
                </Reveal>
                <Reveal delay={0.05} className="h-full">
                  <div className="h-full bg-gradient-to-b from-zinc-950 to-black border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/20 transition-all duration-300">
                    <span className="block text-4xl font-bold font-mono text-rose-500 mb-2">-45%</span>
                    <h4 className="text-xs font-semibold text-zinc-200 mb-1">
                      Drift Reductions
                    </h4>
                  </div>
                </Reveal>
                <Reveal delay={0.1} className="h-full">
                  <div className="h-full bg-gradient-to-b from-zinc-950 to-black border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/20 transition-all duration-300">
                    <span className="block text-4xl font-bold font-mono text-rose-500 mb-2">120ms</span>
                    <h4 className="text-xs font-semibold text-zinc-200 mb-1">
                      Query Latency
                    </h4>
                  </div>
                </Reveal>
                <Reveal delay={0.15} className="h-full">
                  <div className="h-full bg-gradient-to-b from-zinc-950 to-black border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/20 transition-all duration-300">
                    <span className="block text-4xl font-bold font-mono text-rose-500 mb-2">99.99%</span>
                    <h4 className="text-xs font-semibold text-zinc-200 mb-1">
                      Target Uptime SLAs
                    </h4>
                  </div>
                </Reveal>
              </>
            )}

          </div>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <FAQ faqs={data.faqs} />

      {/* CTA Section */}
      <CTA
        ctaTitle={data.ctaTitle}
        ctaHighlight={data.ctaHighlight}
        ctaDesc={data.ctaDesc}
        ctaBtnText={data.ctaBtnText}
      />
    </main>
  );
}
