"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  Server,
  Cpu,
  Shield,
  Layers,
  GitBranch,
  Star,
  ArrowUpRight,
  Activity,
  Terminal,
  Settings,
  CheckCircle2,
  Sparkles,
  BookOpen,
  ArrowRight,
  Lock,
  Boxes,
  Database,
  CloudLightning,
  ChevronDown,
  Search,
  Check,
  ExternalLink,
  Code,
  Github,
  GitFork
} from "lucide-react";
import Link from "next/link";

interface Blueprint {
  name: string;
  desc: string;
  tech: string;
  stars: number;
  forks: number;
  url: string;
  pushedAt: string;
  categories: string[];
}

// Map GitHub org topics and name fragments to categories
function mapTopicsToCategories(repo: any) {
  const topics = (repo.topics || []).map((t: any) => t.toLowerCase());
  const name = repo.name.toLowerCase();
  const cats = new Set<string>();

  const matches = (topicList: string[], nameFragments: string[] = []) =>
    topics.some((t: any) => topicList.includes(t)) || nameFragments.some((f: string) => name.includes(f));

  if (matches(['landing-zone','caf','governance','subscription'], ['landingzone','landing-zone'])) cats.add('landing-zone');
  if (matches(['ai','openai','llm','rag','genai','fabric','databricks','ml','mlops'], ['ai','data','llm','rag','genai','mlflow','lakehouse'])) cats.add('ai');
  if (matches(['security','zero-trust','defender','iam','compliance','siem','devsecops'], ['security','trust','zero-trust','compliance','siem','vault','privileged'])) cats.add('security');
  if (matches(['vdi','avd','w365','desktop','fslogix'], ['avd','vdi','w365','windows-365'])) cats.add('vdi');
  if (matches(['fintech','healthcare','telecom','retail','industry','bank','government'], ['lz','financial','healthcare','insurance','automotive'])) cats.add('industry');
  if (matches(['devops','terraform','bicep','actions','cicd','yaml','gitops','ansible','kubernetes','docker'], ['devops','tf-','terraform','bicep','platform','k8s','helm','gitops'])) cats.add('devops');

  if (cats.size === 0) cats.add('devops');
  return Array.from(cats);
}

// 1. Holographic Cyber Network Mesh Component for the Hero Avatar
const HolographicGrid = () => {
  return (
    <div className="relative w-full h-[320px] md:h-[450px] flex items-center justify-center overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-violet-600/10 to-transparent blur-3xl rounded-full animate-pulse pointer-events-none" />
      <div className="absolute w-[200px] h-[200px] bg-rose-600/5 rounded-full blur-[80px] top-1/4 left-1/4 pointer-events-none" />

      {/* Grid Canvas */}
      <svg className="w-full h-full opacity-70" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E11D48" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#E11D48" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E11D48" stopOpacity="1" />
            <stop offset="100%" stopColor="#E11D48" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 3D perspective lines */}
        {[...Array(15)].map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={i * 28}
            x2="400"
            y2={i * 28}
            stroke="url(#grid-grad)"
            strokeWidth="0.5"
            className="animate-pulse"
            style={{ animationDelay: `${i * 150}ms`, animationDuration: '4s' }}
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <line
            key={`v-${i}`}
            x1={i * 28}
            y1="0"
            x2={i * 28}
            y2="400"
            stroke="url(#grid-grad)"
            strokeWidth="0.5"
            className="animate-pulse"
            style={{ animationDelay: `${i * 200}ms`, animationDuration: '4s' }}
          />
        ))}

        {/* Diagonal wireframe connections */}
        <path
          d="M 120 120 L 200 170 L 280 120 L 240 240 L 160 240 L 120 120 Z M 200 170 L 200 290 M 120 120 L 160 240 M 280 120 L 240 240"
          stroke="#8B5CF6"
          strokeWidth="1"
          strokeDasharray="4 2"
          className="opacity-60"
        />

        {/* Outer orbital rings */}
        <circle cx="200" cy="180" r="90" stroke="#E11D48" strokeWidth="0.5" strokeDasharray="6 4" className="animate-spin" style={{ animationDuration: '40s' }} />
        <circle cx="200" cy="180" r="130" stroke="#8B5CF6" strokeWidth="0.5" strokeDasharray="3 6" className="animate-spin" style={{ animationDuration: '60s', animationDirection: 'reverse' }} />

        {/* Holographic face wireframe representation */}
        <path
          d="M 160 140 C 160 90, 240 90, 240 140 C 240 190, 220 210, 220 230 C 220 240, 210 250, 200 250 C 190 250, 180 240, 180 230 C 180 210, 160 190, 160 140 Z"
          stroke="#E11D48"
          strokeWidth="1.5"
          className="animate-pulse"
          style={{ animationDuration: '2.5s' }}
        />
        <path
          d="M 190 250 L 190 290 L 160 320 M 210 250 L 210 290 L 240 320"
          stroke="#E11D48"
          strokeWidth="1"
          className="opacity-75"
        />
        
        {/* Pulsating system nodes */}
        <circle cx="120" cy="120" r="4.5" fill="#E11D48" className="animate-ping" style={{ animationDuration: '2s' }} />
        <circle cx="120" cy="120" r="3" fill="#E11D48" />

        <circle cx="200" cy="170" r="4.5" fill="#8B5CF6" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="200" cy="170" r="3" fill="#8B5CF6" />

        <circle cx="280" cy="120" r="4.5" fill="#E11D48" className="animate-ping" style={{ animationDuration: '2.2s' }} />
        <circle cx="280" cy="120" r="3" fill="#E11D48" />

        <circle cx="240" cy="240" r="4.5" fill="#8B5CF6" className="animate-ping" style={{ animationDuration: '2.8s' }} />
        <circle cx="240" cy="240" r="3" fill="#8B5CF6" />

        <circle cx="160" cy="240" r="4.5" fill="#E11D48" className="animate-ping" style={{ animationDuration: '2.4s' }} />
        <circle cx="160" cy="240" r="3" fill="#E11D48" />

        <circle cx="200" cy="290" r="4.5" fill="#E11D48" className="animate-ping" style={{ animationDuration: '2.6s' }} />
        <circle cx="200" cy="290" r="3" fill="#E11D48" />
      </svg>

      {/* Floating particles */}
      <div className="absolute top-16 left-16 w-1.5 h-1.5 bg-rose-500 rounded-full animate-bounce" style={{ animationDuration: '2.8s' }} />
      <div className="absolute bottom-16 right-16 w-1.5 h-1.5 bg-violet-500 rounded-full animate-bounce" style={{ animationDuration: '3.6s' }} />
      <div className="absolute top-1/2 right-12 w-1 h-1 bg-white rounded-full animate-pulse" />
    </div>
  );
};

export default function EcosystemLandingZonePage() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const [blueprints, setBlueprints] = useState<Blueprint[]>([]);
  const [loading, setLoading] = useState(true);

  // Fallback static blueprints in case of API issues
  const fallbackBlueprints: Blueprint[] = [
    {
      name: "terraform-aws-landing-zone",
      desc: "Hardened multi-account landing zone blueprint based on AWS Control Tower, core hub-and-spoke Shared VPC, and security logging.",
      tech: "HCL",
      stars: 148,
      forks: 38,
      url: "https://github.com/Devopstrio/terraform-aws-landing-zone",
      pushedAt: new Date().toISOString(),
      categories: ["landing-zone", "devops"]
    },
    {
      name: "terraform-gcp-landing-zone",
      desc: "Enterprise GCP base landing zone featuring resource folder hierarchy, Shared VPC subnets, and Cloud Identity Access Control.",
      tech: "HCL",
      stars: 112,
      forks: 29,
      url: "https://github.com/Devopstrio/terraform-gcp-landing-zone",
      pushedAt: new Date().toISOString(),
      categories: ["landing-zone", "devops"]
    },
    {
      name: "kubernetes-hardened-eks",
      desc: "Production-ready EKS configuration featuring Cilium eBPF network policies, IRSA role mapping, and sealed-secret injections.",
      tech: "Go / Shell",
      stars: 245,
      forks: 56,
      url: "https://github.com/Devopstrio/kubernetes-hardened-eks",
      pushedAt: new Date().toISOString(),
      categories: ["kubernetes", "devops"]
    },
    {
      name: "security-cilium-mesh",
      desc: "High-performance network security engine powered by eBPF. Enables transparent encryption, Hubble metrics, and L7 policies.",
      tech: "Go",
      stars: 204,
      forks: 39,
      url: "https://github.com/Devopstrio/security-cilium-mesh",
      pushedAt: new Date().toISOString(),
      categories: ["security", "kubernetes"]
    },
    {
      name: "ai-rag-private-network",
      desc: "Secure private database perimeters for GenAI/LLM pipelines. Configures isolated PgVector and GPU network boundaries.",
      tech: "Python",
      stars: 276,
      forks: 74,
      url: "https://github.com/Devopstrio/ai-rag-private-network",
      pushedAt: new Date().toISOString(),
      categories: ["ai", "devops"]
    }
  ];

  // Fetch GitHub repos dynamically
  useEffect(() => {
    async function fetchRepos() {
      setLoading(true);
      const token = "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";
      const org = "Devopstrio";
      const headers: HeadersInit = {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${token}`
      };

      try {
        let allRepos: any[] = [];
        let page = 1;

        while (page <= 10) {
          const res = await fetch(
            `https://api.github.com/orgs/${org}/repos?per_page=100&page=${page}&sort=pushed&type=public`,
            { headers }
          );

          if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

          const batch = await res.json();
          if (!batch.length) break;

          allRepos = allRepos.concat(batch.filter((r: any) => !r.fork && !r.archived));
          page++;
        }

        if (allRepos.length > 0) {
          const mapped: Blueprint[] = allRepos.map(r => ({
            name: r.name,
            desc: r.description || "Enterprise acceleration blueprint by Devopstrio.",
            tech: r.language || "Documentation",
            stars: r.stargazers_count || 0,
            forks: r.forks_count || 0,
            url: r.html_url,
            pushedAt: r.pushed_at,
            categories: mapTopicsToCategories(r)
          }));
          setBlueprints(mapped);
        } else {
          setBlueprints(fallbackBlueprints);
        }
      } catch (err) {
        console.warn("Using fallback blueprints due to API issue:", err);
        setBlueprints(fallbackBlueprints);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  // Cloud Architecture Tiers mapping the row of cards under Hero
  const architectureTiers = [
    {
      title: "Developer Sandbox",
      subtitle: "Best for prototyping & exploration",
      price: "Open Source",
      accent: "border-zinc-800 hover:border-zinc-700 bg-zinc-950/20",
      buttonText: "Download Code",
      isPopular: false,
      features: [
        "Single Cloud Account / Sandbox Setup",
        "Standard public network egress",
        "Default VPC configurations",
        "Pre-configured IAM basic profiles",
        "GitHub actions deployment recipes"
      ]
    },
    {
      title: "Standard Landing Zone",
      subtitle: "Best for growing growth startup bases",
      price: "Enterprise Core",
      accent: "border-rose-500 bg-rose-500/[0.02] shadow-[0_0_30px_rgba(244,63,94,0.1)]",
      buttonText: "Deploy Baseline Blueprint",
      isPopular: true,
      features: [
        "3 Cloud Accounts (Dev, Staging, Prod)",
        "Unified Identity Integration (AWS SSO / Okta)",
        "Hub-and-Spoke Shared VPC Networks",
        "Central Log Archive & Audit Trails",
        "Standard compliance guardrails"
      ]
    },
    {
      title: "Enterprise Platform",
      subtitle: "Best for scale and global operations",
      price: "Enterprise Scale",
      accent: "border-zinc-800 hover:border-zinc-700 bg-zinc-950/20",
      buttonText: "Request Architecture Specs",
      isPopular: false,
      features: [
        "Multi-Account Organizations Structure",
        "SAML/OIDC identity with SSO providers",
        "Transit Gateway & secure corporate VPNs",
        "HashiCorp Vault secret injection layers",
        "Automated drift detection & remediation"
      ]
    },
    {
      title: "Sovereign / AI Ready",
      subtitle: "Best for strictly regulated & GPU workloads",
      price: "Custom Secure",
      accent: "border-zinc-800 hover:border-zinc-700 bg-zinc-950/20",
      buttonText: "Consult Platform Architect",
      isPopular: false,
      features: [
        "Hardened NVIDIA GPU nodes configuration",
        "Private local vector database zones",
        "Data Residency rules compliance",
        "Zero-Trust container meshes (Cilium)",
        "Dedicated Devopstrio co-engineering"
      ]
    }
  ];

  const faqItems = [
    {
      q: "What is an Enterprise Landing Zone?",
      a: "An Enterprise Landing Zone is a pre-configured framework that defines a secure, compliant multi-account environment in the cloud. It provides foundational configurations for network topologies, identity management, logging, security guardrails, and financial budgeting to ensure that application teams can deploy workloads quickly and safely."
    },
    {
      q: "How does the AI Landing Zone differ from standard landing zones?",
      a: "Standard landing zones focus on general cloud administration. Our AI Landing Zone includes specialized infrastructure patterns to run Generative AI and LLM architectures. This includes private data perimeters to prevent company data leakage to external models, optimized GPU scaling configurations, and vector database baselines."
    },
    {
      q: "Is everything managed using Infrastructure as Code (IaC)?",
      a: "Yes. 100% of our Landing Zone blueprints are written in modern Terraform / OpenTofu and Helm templates. This guarantees that your environment is fully reproducible, version-controlled, and free of manual drift."
    },
    {
      q: "How long does a standard deployment take?",
      a: "Leveraging our pre-engineered blueprints, we can spin up a fully-customized multi-cloud landing zone within 4 to 6 weeks, which is significantly faster than traditional consulting timelines (often taking 6-9 months)."
    }
  ];

  const techIcons = [
    "AWS", "Google Cloud", "Azure", "Terraform", "Kubernetes",
    "ArgoCD", "Cilium", "HashiCorp Vault", "Docker", "GitHub Actions",
    "Databricks", "Snowflake", "Okta", "Prometheus", "Grafana"
  ];

  const tabs = ["All", "Landing Zone", "AI & Data", "Security", "VDI", "Industry", "DevOps"];

  // Filtered blueprints logic based on Active Tab and Search Query
  const filteredBlueprints = blueprints.filter((bp) => {
    const matchesTab =
      activeTab === "All" ||
      (activeTab === "Landing Zone" && bp.categories.includes("landing-zone")) ||
      (activeTab === "AI & Data" && bp.categories.includes("ai")) ||
      (activeTab === "Security" && bp.categories.includes("security")) ||
      (activeTab === "VDI" && bp.categories.includes("vdi")) ||
      (activeTab === "Industry" && bp.categories.includes("industry")) ||
      (activeTab === "DevOps" && bp.categories.includes("devops"));

    const matchesSearch =
      bp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bp.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bp.tech.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'landing-zone': return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case 'ai': return "bg-rose-500/10 text-rose-450 border-rose-500/20";
      case 'security': return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case 'vdi': return "bg-sky-500/10 text-sky-400 border-sky-500/20";
      case 'industry': return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case 'devops': return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      default: return "bg-zinc-900 text-zinc-400 border-zinc-800";
    }
  };

  const formatPushedDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
    } catch (e) {
      return "Recent";
    }
  };

  return (
    <main className="min-h-screen bg-black text-white pt-24 font-sans selection:bg-rose-600 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-12 md:py-24">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-600/[0.03] rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-violet-600/[0.02] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center relative z-10">
          
          {/* Left Column: Title, Subtitle, Search bar */}
          <div className="text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-500/[0.04] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-rose-400 uppercase font-bold">
                  BUILD PLATFORM
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
                What would you like to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-violet-500">
                  build today?
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold max-w-xl mb-10">
                Accelerate your cloud architecture with our production-grade landing zones, open-source blueprints, and AI-ready infrastructures. Securely orchestrated, fully parameterized, and ready to deploy.
              </p>
            </Reveal>

            {/* Interactive Search Console inside Hero */}
            <Reveal delay={0.15}>
              <div className="max-w-xl relative flex items-center bg-zinc-950/80 border border-zinc-850 rounded-xl p-1.5 focus-within:border-rose-500/40 transition-colors shadow-2xl">
                <Search className="w-4 h-4 text-zinc-500 ml-3.5 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search 50+ enterprise blueprints (e.g. AWS Shared VPC)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-0 outline-0 text-xs md:text-sm text-white placeholder-zinc-500 w-full px-3 py-2.5 font-semibold"
                />
                <button 
                  onClick={() => {
                    const el = document.getElementById("catalog-grid");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-all duration-300 shadow-[0_0_15px_rgba(244,63,94,0.25)] whitespace-nowrap"
                >
                  Find Blueprint
                </button>
              </div>
              <div className="flex items-center gap-2 mt-4 text-[10px] md:text-xs text-zinc-500 font-semibold pl-2">
                <span>Popular:</span>
                <button onClick={() => setSearchQuery("AWS")} className="text-zinc-400 hover:text-rose-400 transition-colors">AWS Control Tower</button>
                <span>•</span>
                <button onClick={() => setSearchQuery("Cilium")} className="text-zinc-400 hover:text-rose-400 transition-colors">Cilium eBPF</button>
                <span>•</span>
                <button onClick={() => setSearchQuery("RAG")} className="text-zinc-400 hover:text-rose-400 transition-colors">Private RAG</button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Holographic Cyber Portrait Mesh */}
          <div className="hidden lg:block relative">
            <Reveal delay={0.2}>
              <HolographicGrid />
            </Reveal>
          </div>

        </div>
      </section>

      {/* 2. CHOOSE YOUR CLOUD ARCHITECTURE (TIERS) */}
      <section className="py-20 border-t border-zinc-900/60 bg-zinc-950/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="text-[10px] font-bold tracking-[0.25em] text-rose-500 uppercase block mb-3">
                DEPLOYMENT MODELS
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-6">
                Choose Your Cloud Architecture
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-semibold">
                Select a standardized deployment tier to establish your baseline in minutes. Each model compiles directly to Terraform templates with robust parameters.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architectureTiers.map((tier, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className={`border rounded-xl p-6 transition-all duration-500 group relative flex flex-col justify-between h-full ${tier.accent}`}>
                  {tier.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-rose-600 text-[9px] font-bold tracking-widest text-white uppercase shadow-lg shadow-rose-600/20">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-rose-400 transition-colors">
                      {tier.title}
                    </h3>
                    <p className="text-[11px] text-zinc-500 font-semibold mb-4 leading-normal">
                      {tier.subtitle}
                    </p>

                    <div className="border-y border-zinc-900/80 py-3 mb-6">
                      <span className="text-lg font-mono font-bold text-rose-455">
                        {tier.price}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-[11px] text-zinc-400 font-semibold">
                          <CheckCircle2 size={13} className="text-rose-500/70 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className={`w-full py-2.5 rounded-lg text-center text-xs font-bold transition-all duration-300 ${
                      tier.isPopular 
                        ? "bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/10" 
                        : "border border-zinc-800 hover:border-rose-500/40 text-zinc-300 hover:text-white"
                    }`}
                  >
                    {tier.buttonText}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNOLOGY ALLIANCE STRIP */}
      <section className="border-y border-zinc-900/60 bg-zinc-950/40 py-6 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        <div className="flex select-none overflow-hidden gap-12 w-full">
          <div className="flex gap-16 min-w-full justify-around items-center animate-marquee whitespace-nowrap">
            {techIcons.concat(techIcons).map((icon, idx) => (
              <span
                key={idx}
                className="text-zinc-650 hover:text-rose-500/70 transition-colors duration-300 font-mono text-[10px] md:text-xs tracking-wider font-bold uppercase flex items-center gap-2"
              >
                <Sparkles size={9} className="text-rose-500/30" />
                {icon}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HUGE COMPONENT LIBRARY GRID / GITHUB BLUEPRINTS */}
      <section id="catalog-grid" className="py-24 relative">
        <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-rose-500/[0.01] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <Reveal>
                <span className="text-[10px] font-bold tracking-[0.25em] text-rose-500 uppercase block mb-3">
                  BLUEPRINTS DIRECTORY
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
                  Browse GitHub Infrastructure Modules
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-semibold max-w-xl">
                  Deploy secure Terraform configurations, hardened Kubernetes namespaces, or pre-configured MLOps pipelines right from our directory.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <a
                href="https://github.com/Devopstrio"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 md:mt-0 px-5 py-2.5 rounded-lg border border-zinc-800 hover:border-rose-500/50 hover:bg-rose-500/[0.02] text-zinc-300 hover:text-white font-bold text-xs tracking-wide transition-all duration-300 flex items-center gap-2"
              >
                <GitBranch size={13} className="text-rose-500" />
                <span>Visit org on GitHub</span>
              </a>
            </Reveal>
          </div>

          {/* Filtering Tabs & Search Summary */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-900 pb-6 mb-8">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-zinc-900 text-rose-500 border border-rose-500/20"
                      : "text-zinc-450 hover:text-white hover:bg-zinc-900/30"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="text-[11px] text-zinc-500 font-mono font-bold">
              Showing {filteredBlueprints.length} of {blueprints.length} Blueprints
            </div>
          </div>

          {/* Dynamic Sync Live Badge */}
          {!loading && blueprints.length > 0 && (
            <div className="mb-6 flex justify-start">
              <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold text-emerald-400 bg-emerald-500/[0.06] border border-emerald-500/20 rounded-full px-3 py-1 shadow-sm animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Live · {blueprints.length} repositories loaded from GitHub
              </span>
            </div>
          )}

          {/* Catalog Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-zinc-950/20 border border-zinc-900 rounded-xl p-6 animate-pulse h-48" />
              ))}
            </div>
          ) : filteredBlueprints.length === 0 ? (
            <div className="text-center py-20 border border-zinc-900/80 rounded-xl bg-zinc-950/10">
              <Terminal className="w-8 h-8 text-zinc-700 mx-auto mb-4" />
              <p className="text-xs text-zinc-500 font-bold">No blueprints match your filter criteria.</p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveTab("All"); }}
                className="mt-4 text-xs font-bold text-rose-500 hover:underline"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlueprints.map((bp, index) => (
                <Reveal key={bp.name} delay={index * 0.03}>
                  <div className="bg-zinc-950/40 border border-zinc-900/85 hover:border-rose-500/30 hover:bg-zinc-950/80 rounded-xl p-6 transition-all duration-500 group relative flex flex-col justify-between h-full">
                    {/* Visual Hover Glow line */}
                    <div className="absolute -inset-px bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
                    
                    <div>
                      {/* Top Row: Provider badge, Status version */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex flex-wrap gap-1">
                          {bp.categories.map(cat => (
                            <span key={cat} className={`text-[8px] font-bold font-mono uppercase tracking-wider px-2 py-0.5 rounded border ${getCategoryColor(cat)}`}>
                              {cat.replace(/-/g, ' ')}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-zinc-500 font-mono font-bold">
                            {formatPushedDate(bp.pushedAt)}
                          </span>
                        </div>
                      </div>

                      {/* Code Repo Title */}
                      <h3 className="text-sm md:text-base font-bold text-white font-mono group-hover:text-rose-450 transition-colors mb-3 flex items-center gap-1.5">
                        <Terminal size={14} className="text-rose-500/60" />
                        <span>{bp.name}</span>
                      </h3>

                      {/* Description */}
                      <p className="text-zinc-400 text-xs leading-relaxed mb-6 font-semibold opacity-90">
                        {bp.desc}
                      </p>
                    </div>

                    {/* Bottom stats & links */}
                    <div className="border-t border-zinc-900/60 pt-4 mt-auto flex items-center justify-between text-[11px] font-mono font-semibold">
                      <div className="flex items-center gap-3 text-zinc-500">
                        <span className="flex items-center gap-1">
                          <Star size={11} className="text-amber-500" />
                          {bp.stars}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork size={11} />
                          {bp.forks}
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        <a
                          href={bp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-rose-400 transition-colors flex items-center gap-1"
                        >
                          <span>Code</span>
                          <ExternalLink size={10} />
                        </a>

                        <Link
                          href="/contact"
                          className="text-white group-hover:text-rose-500 transition-colors flex items-center gap-0.5"
                        >
                          <span>Deploy</span>
                          <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-24 border-t border-zinc-900/60 bg-zinc-950/10">
        <div className="max-w-4xl mx-auto px-6 md:px-12 xl:px-8">
          <div className="text-center mb-16">
            <Reveal>
              <span className="text-[10px] font-bold tracking-[0.25em] text-rose-500 uppercase block mb-3">
                QUESTIONS & ANSWERS
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-6">
                Landing Zone Operations FAQ
              </h2>
            </Reveal>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = openAccordion === idx;
              return (
                <Reveal key={idx} delay={idx * 0.05}>
                  <div className="border border-zinc-900 bg-zinc-950/20 rounded-xl overflow-hidden transition-all duration-350">
                    <button
                      onClick={() => setOpenAccordion(isOpen ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-zinc-950/60 transition-colors"
                    >
                      <span className="text-xs md:text-sm font-bold text-zinc-200">
                        {item.q}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-zinc-500 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-rose-500" : ""
                        }`}
                      />
                    </button>
                    
                    <div
                      className={`transition-all duration-350 overflow-hidden ${
                        isOpen ? "max-h-[300px] border-t border-zinc-900/60" : "max-h-0"
                      }`}
                    >
                      <div className="p-6 text-xs md:text-sm leading-relaxed text-zinc-400 font-semibold bg-zinc-950/40">
                        {item.a}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-24 border-t border-zinc-900/60 bg-gradient-to-b from-zinc-950/20 to-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/[0.03] rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center px-6 md:px-12 xl:px-8 relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-rose-500/10 bg-rose-500/[0.03] mb-6">
              <Lock className="w-3.5 h-3.5 text-rose-500" />
              <span className="text-[10px] font-bold font-mono tracking-wider uppercase text-rose-500">
                Secure & Compliant Baseline
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Ready to Establish a Production-Grade Foundation?
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-semibold max-w-2xl mx-auto mb-10">
              Schedule an architecture discovery session with our principal co-engineers. We will analyze your workloads compliance targets and customize a blueprint path.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-medium text-xs md:text-sm tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(244,63,94,0.3)] hover:scale-[1.02]"
              >
                Schedule Discovery Call
              </Link>
              
              <a
                href="mailto:info@devopstrio.com"
                className="px-6 py-3 rounded-lg border border-zinc-800 hover:border-rose-500/50 hover:bg-rose-500/[0.02] text-zinc-300 hover:text-white font-medium text-xs md:text-sm tracking-wide transition-all duration-300"
              >
                Contact Sales Engineering
              </a>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
