"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  Cpu,
  Layers,
  Zap,
  Shield,
  Code,
  Activity,
  Database,
  Monitor,
  CheckCircle,
  Briefcase,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Check,
  X,
  Sparkles,
  Award,
  BookOpen,
  HelpCircle,
  Target,
  FileText
} from "lucide-react";
import { FaAws, FaMicrosoft, FaGoogle, FaDocker, FaGithub, FaGitlab, FaJenkins, FaJira } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";
import { DetailedServices } from "./DetailedServices";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

import {
  exploreCategories,
  businessObjectives,
  industryMap,
  techStackCategories,
  engagementModels,
  transformationPackages,
  serviceCaseStudies,
  exploreFAQs
} from "@/data/services/exploreData";

// Icon mapping helper
function getCategoryIcon(iconName: string, className = "w-6 h-6 text-rose-500") {
  switch (iconName) {
    case "FiCpu": return <Cpu className={className} />;
    case "FiLayers": return <Layers className={className} />;
    case "FiZap": return <Zap className={className} />;
    case "FiShield": return <Shield className={className} />;
    case "FiCode": return <Code className={className} />;
    case "FiActivity": return <Activity className={className} />;
    case "FiDatabase": return <Database className={className} />;
    case "FiMonitor": return <Monitor className={className} />;
    case "FiCheckCircle": return <CheckCircle className={className} />;
    case "FiBriefcase": return <Briefcase className={className} />;
    default: return <Code className={className} />;
  }
}

function getTechIcon(iconName: string, className = "w-5 h-5") {
  switch (iconName) {
    case "FaAws": return <FaAws className={`${className} text-orange-500`} />;
    case "FaMicrosoft": return <FaMicrosoft className={`${className} text-blue-500`} />;
    case "FaGoogle": return <FaGoogle className={`${className} text-red-500`} />;
    case "FaDocker": return <FaDocker className={`${className} text-blue-400`} />;
    case "FaGithub": return <FaGithub className={`${className} text-white`} />;
    case "FaGitlab": return <FaGitlab className={`${className} text-orange-600`} />;
    case "FaJenkins": return <FaJenkins className={`${className} text-red-600`} />;
    case "FaJira": return <FaJira className={`${className} text-blue-600`} />;
    case "FiLayers": return <Layers className={`${className} text-zinc-400`} />;
    case "FiCode": return <Code className={`${className} text-zinc-400`} />;
    case "FiMonitor": return <Monitor className={`${className} text-zinc-400`} />;
    case "FiCpu": return <Cpu className={`${className} text-zinc-400`} />;
    case "FiZap": return <Zap className={`${className} text-zinc-400`} />;
    case "FiDatabase": return <Database className={`${className} text-zinc-400`} />;
    case "FiActivity": return <Activity className={`${className} text-zinc-400`} />;
    default: return <Code className={`${className} text-zinc-400`} />;
  }
}

export function ExploreClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeExplorerTab, setActiveExplorerTab] = useState("ai-data-innovation");
  const [activeObjectiveTab, setActiveObjectiveTab] = useState("modernize");
  const [expandedAccordions, setExpandedAccordions] = useState<Record<string, boolean>>({
    "ai-data-innovation": true
  });
  const [activeFAQIndex, setActiveFAQIndex] = useState<number | null>(null);
  const [activeCatalogTab, setActiveCatalogTab] = useState("ai-data-innovation");

  // Flat list of all 220+ services for instant search
  const allServices = useMemo(() => {
    const list: { name: string; categoryTitle: string; categoryId: string; groupTitle: string }[] = [];
    exploreCategories.forEach((cat) => {
      cat.groups.forEach((group) => {
        group.services.forEach((serviceName) => {
          list.push({
            name: serviceName,
            categoryTitle: cat.title,
            categoryId: cat.id,
            groupTitle: group.title
          });
        });
      });
    });
    return list;
  }, []);

  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];
    return allServices.filter(
      (s) =>
        s.name.toLowerCase().includes(query) ||
        s.groupTitle.toLowerCase().includes(query) ||
        s.categoryTitle.toLowerCase().includes(query)
    );
  }, [searchQuery, allServices]);

  const activeCategory = useMemo(() => {
    return exploreCategories.find((c) => c.id === activeExplorerTab) || exploreCategories[0];
  }, [activeExplorerTab]);

  const activeObjective = useMemo(() => {
    return businessObjectives.find((o) => o.id === activeObjectiveTab) || businessObjectives[0];
  }, [activeObjectiveTab]);

  const selectedCatalogCategory = useMemo(() => {
    return exploreCategories.find((cat) => cat.id === activeCatalogTab) || exploreCategories[0];
  }, [activeCatalogTab]);

  const toggleAccordion = (id: string) => {
    setExpandedAccordions((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handlePillarCardClick = (id: string) => {
    setActiveExplorerTab(id);
    setExpandedAccordions((prev) => ({ ...prev, [id]: true }));
    const el = document.getElementById("interactive-explorer");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {/* SECTION 1 — HERO SECTION */}
      <section className="relative w-full min-h-[80vh] flex items-center bg-[#030303] text-white pt-20 pb-16 lg:pt-20 lg:pb-24 overflow-hidden border-b border-zinc-900/80">
        {/* Background Ambient Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.06),transparent_70%)] pointer-events-none z-0" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01),transparent_70%)] pointer-events-none z-0" />

        {/* Futuristic grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] opacity-60 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" />

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

            {/* Hero Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left justify-center z-20">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-500/5 mb-6 shadow-[0_0_15px_rgba(225,29,72,0.1)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-rose-500">
                    MASTER SERVICE ECOSYSTEM
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.12] text-white mb-6">
                  Unified Engineering &
                  <br />
                  <span className="text-[#E11D48] whitespace-nowrap">Transformation Core.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed font-semibold max-w-xl mb-8">
                  We bridge the gap between complex enterprise strategy and zero-defect execution. Devopstrio delivers 10 core capability pillars, offering <Link href="/services/cloud-services" className="text-rose-500 hover:underline">multi-region cloud scaling</Link>, <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline">autonomous cognitive AI workflows</Link>, <Link href="/services/devops-automation" className="text-rose-500 hover:underline">secure platform engineering</Link>, and <Link href="/ecosystem/global-delivery" className="text-rose-500 hover:underline">24/7 global operations</Link>.
                </p>
              </Reveal>

              {/* Real-time platform counters */}
              <Reveal delay={0.3}>
                <div className="grid grid-cols-3 gap-4 max-w-lg border-y border-zinc-900 py-6 mb-8 w-full">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">10</p>
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Core Pillars</p>
                  </div>
                  <div className="border-l border-zinc-900 pl-6">
                    <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">256</p>
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Sub-Services</p>
                  </div>
                  <div className="border-l border-zinc-900 pl-6">
                    <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">24/7/365</p>
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Global Delivery</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="flex flex-wrap gap-4 items-center justify-start">
                  <a
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
                    href="#core-pillars"
                  >
                    Explore Core Pillars
                  </a>
                  <Link
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                    href="/contact#contact-form"
                  >
                    Consult an Architect
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Hero Right Visual: Ecosystem Image */}
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-end z-10 w-full">
              <Reveal delay={0.2} className="w-full flex items-center justify-center lg:justify-end">
                <img src="/webp/assets/herocard/ecosystempage.webp"
                  alt="Ecosystem Capabilities"
                  className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[480px] h-auto object-contain select-none"
                loading="lazy" />
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — SERVICE ECOSYSTEM OVERVIEW */}
      <section className="py-20 bg-black border-b border-zinc-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal>
            <div className="group relative overflow-hidden rounded-[32px] border border-zinc-800/60 bg-zinc-950/30 backdrop-blur-xl p-8 md:p-12 lg:p-14">

              {/* Background Glow */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-rose-600/10 blur-[120px] transition-all duration-1000 group-hover:bg-rose-600/15" />
                <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] transition-all duration-1000 group-hover:bg-blue-600/15" />
                {/* Subtle glass border reflection */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>

              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center z-10">
                {/* Left side text column */}
                <div className="lg:col-span-5 space-y-5">
                  <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block drop-shadow-md">
                    THE LIFECYCLE
                  </span>
                  <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white drop-shadow-md">
                    How We Organize Our Service Lifecycle
                  </h2>
                  <p className="text-zinc-400 text-sm leading-relaxed font-medium drop-shadow-md">
                    Devopstrio’s service ecosystem is designed to support the full technology lifecycle—from initial advisory and architecture to product engineering, <Link href="/services/cloud-services" className="text-rose-500 hover:underline">cloud modernization</Link>, <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline">AI enablement</Link>, platform operations, <Link href="/services/cybersecurity" className="text-rose-500 hover:underline">cybersecurity</Link>, and managed support. Engage with us for focused delivery in a single domain or for integrated multi-service transformation programs.
                  </p>
                </div>

                {/* Right side steps column */}
                <div className="lg:col-span-7 overflow-x-auto pb-4 scrollbar-hide">
                  <div className="flex gap-4 min-w-[700px] md:min-w-0 md:grid md:grid-cols-3 md:gap-5">
                    {[
                      { step: "01", name: "Consult", desc: "Strategy & Readiness Assessment" },
                      { step: "02", name: "Architect", desc: "Design Landing Zones & Graphs" },
                      { step: "03", name: "Engineer", desc: "Next.js/FastAPI Custom Code" },
                      { step: "04", name: "Automate", desc: "GitOps Pipelines & IaC Modules" },
                      { step: "05", name: "Secure", desc: "Zero-Trust Hardening & SOC Audits" },
                      { step: "06", name: "Operate", desc: "24/7 Monitoring & Optimization" }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex-1 bg-zinc-950/60 border border-zinc-900/60 rounded-2xl p-5 hover:border-rose-500/40 hover:bg-zinc-950/80 transition-all duration-300 relative group/step shadow-lg hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                      >
                        <span className="text-xs font-mono font-bold text-rose-500/40 group-hover/step:text-rose-500 transition-colors block mb-2">{item.step}</span>
                        <h3 className="text-sm font-bold text-white mb-1 group-hover/step:text-rose-400 transition-colors">{item.name}</h3>
                        <p className="text-[11px] text-zinc-400 font-semibold leading-normal">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3 — 10 CORE SERVICE PILLARS GRID */}
      <section id="core-pillars" className="py-24 bg-[#020202] border-b border-zinc-900 relative">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-rose-600/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block drop-shadow-md">
                SERVICE PLATFORM
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4 drop-shadow-md">
                Explore Our 10 Core Service Pillars
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto drop-shadow-md">
                We specialize in ten integrated pillars designed to address every aspect of modern enterprise IT engineering, operational efficiency, and digital transformation.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {exploreCategories.map((cat, idx) => (
              <Reveal key={cat.id} delay={idx * 0.05} className="h-full">
                <div
                  onClick={() => handlePillarCardClick(cat.id)}
                  className="group cursor-pointer flex flex-col justify-between p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/40 rounded-2xl h-full min-h-[250px] transition-all duration-300 hover:bg-zinc-900/10 hover:shadow-[0_8px_32px_0_rgba(244,63,94,0.05)] hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-rose-600/5 rounded-full blur-2xl group-hover:scale-125 transition-all duration-500" />

                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-xl bg-rose-600/10 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                      {getCategoryIcon(cat.iconName, "w-5 h-5 text-rose-500 group-hover:text-white transition-colors")}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">{cat.title}</h3>
                      <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed mt-2 line-clamp-3">
                        {cat.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-zinc-900/60 mt-4 relative z-10">
                    <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase">{cat.subServiceCount} capabilities</span>
                    <span className="text-[10px] font-bold text-rose-500 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Explore <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4 — INTERACTIVE SERVICE EXPLORER */}
      <div id="interactive-explorer">
        <DetailedServices hideExploreButton />
      </div>

      {/* SECTION 5 — DETAILED SUB-SERVICE CATALOG BY CATEGORY (Redesigned Grid) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900 relative">
        {/* Background radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block drop-shadow-md">
                ECOSYSTEM DIRECTORY
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4 drop-shadow-md">
                Detailed Sub-Service Catalog
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto drop-shadow-md">
                Browse through our complete indexed structure categorized by service groups to view every sub-service capability we bring to our clients.
              </p>
            </Reveal>
          </div>

          {/* Tab Pills Selector */}
          <div className="flex items-center gap-2 mb-12 pb-4 overflow-x-auto scrollbar-hide scroll-smooth border-b border-zinc-900/60 scrollbar-thin">
            {exploreCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCatalogTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 border ${activeCatalogTab === cat.id
                    ? "bg-rose-600 border-rose-600 text-white shadow-[0_4px_20px_rgba(225,29,72,0.35)]"
                    : "bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-900/50 hover:border-zinc-800"
                  }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Categories Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
            {/* Left Tall Card (Col 1, Spans entire height) */}
            <Reveal className="lg:col-span-1 h-full">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-rose-500/30 p-8 flex flex-col justify-between h-full min-h-[480px] bg-gradient-to-br from-zinc-950/90 via-[#0a0506]/90 to-[#0f0709]/90 group/tall backdrop-blur-md transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
                {/* Internal decorative glowing meshes */}
                <div className="absolute -right-10 -top-10 w-48 h-48 bg-rose-600/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />
                <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-orange-600/5 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />

                {/* Card top details */}
                <div className="relative z-10">
                  <span className="text-[9px] font-mono text-rose-500 tracking-widest uppercase block mb-4">
                    ACTIVE PILLAR PRACTICE
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight leading-tight mb-4 group-hover/tall:text-rose-400 transition-colors">
                    {selectedCatalogCategory.title}
                  </h3>
                  <p className="text-zinc-400 text-xs font-semibold leading-relaxed mb-6">
                    {selectedCatalogCategory.shortDesc}
                  </p>

                  {/* Highlighted Use Case */}
                  {selectedCatalogCategory.useCases && selectedCatalogCategory.useCases.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-zinc-900 space-y-4">
                      <div className="space-y-1">
                        <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">The Challenge</p>
                        <p className="text-[11px] text-zinc-300 leading-relaxed font-medium">{selectedCatalogCategory.useCases[0].challenge}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[9px] font-bold text-rose-500 uppercase tracking-wider">Our Solution</p>
                        <p className="text-[11px] text-zinc-300 leading-relaxed font-medium">{selectedCatalogCategory.useCases[0].solution}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card bottom button */}
                <div className="relative z-10 mt-8">
                  <Link
                    href={`/services/${selectedCatalogCategory.slug}`}
                    className="gap-2 w-full inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-650 to-rose-650 hover:from-red-600 hover:to-rose-600 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
                  >
                    <span>Explore Practice</span>
                    <ArrowRight size={13} className="transition-transform duration-300 group-hover/tall:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Right Capabilities Grid */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCatalogCategory.groups.map((group, idx) => (
                <Reveal key={group.title} delay={idx * 0.04} className="h-full">
                  <div className="group/card flex flex-col justify-between bg-zinc-950/30 border border-white/5 hover:border-rose-500/20 hover:bg-zinc-950/60 rounded-2xl p-6 transition-all duration-300 min-h-[240px] h-full relative overflow-hidden backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 via-rose-600/0 to-rose-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div>
                      <h4 className="text-sm font-bold text-rose-500 group-hover:text-rose-400 mb-4 transition-colors">
                        {group.title}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {group.services.map((service, srvIdx) => (
                          <span
                            key={srvIdx}
                            className="px-2.5 py-1.5 rounded-md text-[10px] font-semibold bg-zinc-900/60 border border-zinc-900 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6 — 256 SERVICES MASTER CAPABILITY DIRECTORY (Search & Filter) */}
      <section className="py-24 bg-black border-b border-zinc-900 relative">
        <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-rose-600/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 md:px-12">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <Reveal>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white font-sans mb-4">
                Master Capability Directory
              </h2>
            </Reveal>
          </div>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto mb-10 relative">
            <div className="relative">
              <Search className="w-5 h-5 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services like: 'RAG systems', 'Kubernetes landing zones', 'SOC readiness'..."
                className="w-full bg-zinc-950 border border-zinc-900 focus:border-rose-500/60 focus:outline-none rounded-xl py-4 pl-12 pr-10 text-xs font-semibold text-white placeholder-zinc-500 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="w-7 h-7 rounded-full bg-zinc-900 hover:bg-zinc-800 absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-zinc-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick search keywords */}
            <div className="mt-3 flex flex-wrap gap-2 justify-center">
              <span className="text-[10px] text-zinc-500 font-bold uppercase py-0.5">Popular:</span>
              {["RAG", "Kubernetes", "DevSecOps", "Cloud Migration", "Managed Support"].map((kw) => (
                <button
                  key={kw}
                  onClick={() => setSearchQuery(kw)}
                  className="text-[10px] text-zinc-400 hover:text-rose-500 font-semibold"
                >
                  #{kw}
                </button>
              ))}
            </div>
          </div>

          {/* Search Results Display */}
          <div className="min-h-[150px]">
            {searchQuery.trim() ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                  <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">{searchResults.length} matches found</span>
                  <button onClick={() => setSearchQuery("")} className="text-xs text-rose-500 hover:underline flex items-center gap-1">Clear Search</button>
                </div>

                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {searchResults.map((s, idx) => (
                      <div key={idx} className="bg-zinc-950/70 border border-zinc-900/80 rounded-xl p-4 hover:border-rose-500/20 transition-all">
                        <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded">
                          {s.categoryTitle}
                        </span>
                        <h4 className="text-xs font-bold text-white mt-2 mb-1">{s.name}</h4>
                        <p className="text-[10px] text-zinc-500 font-bold">{s.groupTitle}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <p className="text-sm text-zinc-500 font-semibold">No capabilities found matching "{searchQuery}". Try auditing another term.</p>
                  </div>
                )}
              </div>
            ) : (
              // Default display when search is empty (Grouped chips showcase)
              <div className="bg-zinc-950/20 border border-zinc-900/60 rounded-3xl p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {exploreCategories.slice(0, 4).map((cat) => (
                    <div key={cat.id} className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-rose-500/10 flex items-center justify-center">
                          {getCategoryIcon(cat.iconName, "w-3 h-3 text-rose-500")}
                        </div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">{cat.title}</h4>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.groups[0]?.services.concat(cat.groups[1]?.services || []).slice(0, 6).map((srv, idx) => (
                          <span key={idx} className="px-2.5 py-1.5 rounded-md text-[10px] font-semibold bg-zinc-900/60 border border-zinc-900 text-zinc-400">
                            {srv}
                          </span>
                        ))}
                        <span className="px-2.5 py-1.5 rounded-md text-[10px] font-bold bg-zinc-900/20 text-rose-500 border border-rose-950/40">
                          +{cat.subServiceCount - 6} more capabilities
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center border-t border-zinc-900/80 pt-6">
                  <button
                    onClick={() => {
                      const el = document.getElementById("core-pillars");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-xs font-bold text-rose-500 hover:text-rose-400 inline-flex items-center gap-1.5"
                  >
                    Browse Complete Service Pillar Details <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* SECTION 7 — BROWSE BY BUSINESS OBJECTIVE */}
      <section className="py-24 bg-[#020202] border-b border-zinc-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.02),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block drop-shadow-md">
                BUSINESS OBJECTIVES
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4 drop-shadow-md">
                Browse Services by Business Goal
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto drop-shadow-md">
                Don't know our technology taxonomy? Browse targeted engineering services mapped to your strategic business goals.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left buttons tabs */}
            <div className="lg:col-span-5 space-y-3">
              {businessObjectives.map((obj) => {
                const isActive = activeObjectiveTab === obj.id;
                return (
                  <button
                    key={obj.id}
                    onClick={() => setActiveObjectiveTab(obj.id)}
                    className={`w-full text-left p-4 rounded-xl flex items-center justify-between border transition-all duration-300 ${isActive
                        ? "bg-zinc-950 border-rose-500/60 text-white shadow-[0_4px_20px_rgba(225,29,72,0.05)]"
                        : "bg-zinc-950/20 border-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-950/50"
                      }`}
                  >
                    <div className="space-y-1">
                      <span className="text-xs font-bold">{obj.title}</span>
                      <p className="text-[10px] text-zinc-500 font-semibold leading-relaxed line-clamp-1">{obj.description}</p>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isActive ? "text-rose-500" : "text-zinc-700"}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Display detail */}
            <div className="lg:col-span-7 bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-rose-500">Business Objective Alignment</span>
                  <h3 className="text-lg md:text-xl font-bold text-white">{activeObjective.title}</h3>
                  <p className="text-xs font-semibold text-zinc-400 leading-relaxed">{activeObjective.description}</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Recommended Practice Areas & Services:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeObjective.relevantServices.map((service, srvIdx) => (
                      <div key={srvIdx} className="bg-zinc-900/40 border border-zinc-900 rounded-xl p-3 flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span className="text-[11px] font-bold text-zinc-200">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-900/60 mt-8 flex flex-wrap items-center justify-between gap-4">
                <span className="text-[10px] font-semibold text-zinc-500">Align your technical workflows with clear business outcomes.</span>
                <Link
                  href="/contact#contact-form"
                  className="px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-rose-600 hover:bg-rose-500 text-white transition-colors inline-flex items-center gap-1.5"
                >
                  Scope Engagement <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 8 — BROWSE BY INDUSTRY */}
      <section className="py-24 bg-black border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block drop-shadow-md">
                INDUSTRIES SERVED
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4 drop-shadow-md">
                Browse Services by Industry
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto drop-shadow-md">
                We translate raw engineering capacity into domain-specific solutions engineered to pass audits and scale operations.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryMap.map((ind, idx) => (
              <div key={idx} className="bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center">
                    {getCategoryIcon(ind.iconName, "w-4.5 h-4.5 text-rose-500")}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">{ind.name}</h3>
                    <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed mt-2">
                      <strong className="text-zinc-500">Challenges:</strong> {ind.challenges}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Recommended Services:</p>
                    <ul className="space-y-1">
                      {ind.recommendedServices.map((rs, rsIdx) => (
                        <li key={rsIdx} className="text-[10px] text-zinc-300 font-semibold flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-rose-500" />
                          {rs}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-900 mt-6">
                  <Link
                    href={ind.link}
                    className="text-[10px] font-bold text-rose-500 uppercase tracking-wider inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    View Case Studies <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 9 — BROWSE BY TECHNOLOGY STACK */}
      <section className="py-24 bg-[#020202] border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block drop-shadow-md">
                TECHNOLOGY STACK
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4 drop-shadow-md">
                Browse by Technology Stack
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto drop-shadow-md">
                We write, run, secure, and monitor applications leveraging the industry's most reliable developer tools and cloud services.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStackCategories.map((cat, idx) => (
              <div key={idx} className="space-y-4 bg-zinc-950/20 border border-zinc-900/60 rounded-2xl p-6">
                <h3 className="text-xs font-bold text-rose-500 uppercase tracking-wider pb-2 border-b border-zinc-900">{cat.name}</h3>
                <div className="space-y-3">
                  {cat.technologies.map((tech, tIdx) => (
                    <div key={tIdx} className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/40 hover:bg-zinc-900/80 transition-colors">
                      <div className="flex items-center gap-2.5">
                        {getTechIcon(tech.iconName, "w-4 h-4")}
                        <span className="text-xs font-bold text-white">{tech.name}</span>
                      </div>
                      <span className="text-[9px] font-mono text-zinc-500 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-900">{tech.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 10 — ENGAGEMENT MODELS */}
      <section className="py-24 bg-black border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block drop-shadow-md">
                ENGAGEMENT MODELS
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4 drop-shadow-md">
                Enterprise Engagement Models
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto drop-shadow-md">
                We structure engagement models designed for agility, transparent billing, and clear ownership transfers.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementModels.map((model, idx) => (
              <div key={idx} className="bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 rounded-2xl p-6 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-rose-500 uppercase tracking-widest bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/20">{model.badge}</span>
                    <h3 className="text-sm font-bold text-white pt-2 group-hover:text-rose-400 transition-colors">{model.title}</h3>
                  </div>
                  <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">{model.description}</p>

                  <ul className="space-y-2 pt-2">
                    {model.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-[10px] text-zinc-300 font-semibold flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-rose-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-zinc-900 mt-6">
                  <Link
                    href="/contact#contact-form"
                    className="w-full text-center py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 transition-colors inline-block"
                  >
                    Select Model
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 11 — FEATURED TRANSFORMATION PACKAGES */}
      <section className="py-24 bg-[#020202] border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block drop-shadow-md">
                TRANSFORMATION PACKAGES
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4 drop-shadow-md">
                Featured Solution Packages
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto drop-shadow-md">
                We bundle complementary engineering practices into packaged sprints to accelerate your time-to-market.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {transformationPackages.map((pkg, idx) => (
              <div key={idx} className="bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 rounded-3xl p-8 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-zinc-500 font-bold uppercase tracking-widest">{pkg.tagline}</span>
                    <h3 className="text-base md:text-lg font-bold text-white group-hover:text-rose-400 transition-colors">{pkg.title}</h3>
                  </div>
                  <p className="text-xs font-semibold text-zinc-400 leading-relaxed">{pkg.description}</p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {pkg.services.map((srv, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-900 text-[10px] font-semibold text-zinc-300">
                        {srv}
                      </span>
                    ))}
                  </div>

                  <div className="bg-rose-500/[0.01] border border-rose-950/20 rounded-xl p-4 mt-4">
                    <p className="text-[9px] font-bold text-rose-500 uppercase tracking-wider">Target Outcome:</p>
                    <p className="text-[11px] font-semibold text-zinc-300 mt-1 leading-relaxed">{pkg.outcome}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-900/60 mt-6 flex items-center justify-between">
                  <span className="text-[10px] text-zinc-500 font-semibold">Includes 90-day stabilization & runbooks.</span>
                  <Link
                    href="/contact#contact-form"
                    className="text-xs font-bold text-rose-500 hover:text-rose-400 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    Inquire Package <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 12 — CASE STUDY / CLIENT TRANSFORMATION */}
      <section className="py-24 bg-black border-b border-zinc-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(244,63,94,0.02),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block drop-shadow-md">
                CLIENT SUCCESS
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4 drop-shadow-md">
                Client Transformation Showcases
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto drop-shadow-md">
                Read how we helped enterprises modernize workloads, configure AI agents, and secure endpoints.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {serviceCaseStudies.map((cs, idx) => (
              <div key={idx} className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-6 md:p-8 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                    <span className="text-xs font-bold text-white">{cs.client}</span>
                    <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase">Enterprise Case</span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-zinc-400 leading-relaxed">
                      <strong className="text-zinc-500 uppercase text-[9px] block mb-0.5">The Challenge</strong>
                      {cs.challenge}
                    </p>
                    <p className="text-xs font-semibold text-zinc-400 leading-relaxed">
                      <strong className="text-rose-500 uppercase text-[9px] block mb-0.5">Our Solution</strong>
                      {cs.solution}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-2">
                    {cs.services.map((srv, sIdx) => (
                      <span key={sIdx} className="px-2 py-0.5 rounded bg-zinc-900 text-[9px] font-semibold text-zinc-400">
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-900 mt-6 grid grid-cols-2 gap-4">
                  {cs.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center p-2.5 bg-zinc-900/40 rounded-xl border border-zinc-900">
                      <p className="text-base font-bold text-rose-500">{m.value}</p>
                      <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 13 — WHY DEVOPSTRIO FOR ENTERPRISE DELIVERY */}
      <section className="py-24 bg-[#020202] border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-2 block drop-shadow-md">WHY DEVOPSTRIO</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4 drop-shadow-md">
                  Architected for Secure, Enterprise-Grade Delivery
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium drop-shadow-md">
                  Devopstrio bridges the gap between <Link href="/services/cloud-services" className="text-rose-500 hover:underline">modern cloud complexity</Link> and <Link href="/services/devops-automation" className="text-rose-500 hover:underline">rapid operational engineering</Link>. We construct robust configurations built to withstand strict <Link href="/services/cybersecurity" className="text-rose-500 hover:underline">security compliance frameworks</Link>.
                </p>
              </Reveal>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-rose-500/10 flex items-center justify-center mt-1">
                    <Check className="w-3.5 h-3.5 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Full Lifecycle Support</h4>
                    <p className="text-[10px] text-zinc-400 font-semibold leading-relaxed mt-0.5">From roadmap assessments and container staging to active 24/7 security containment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-rose-500/10 flex items-center justify-center mt-1">
                    <Check className="w-3.5 h-3.5 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Audited Security Hardening</h4>
                    <p className="text-[10px] text-zinc-400 font-semibold leading-relaxed mt-0.5">Strict IAM least-privilege configurations, Wiz security scanning, and SOC audit preps.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Integrated Teams</h3>
                <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                  Eliminate multiple vendor hand-offs. We coordinate cloud, AI engineering, QA automation, and operations under a single team.
                </p>
              </div>

              <div className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">No Placeholders Policy</h3>
                <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                  Every capability listing features fully functional configurations, real-world case references, and battle-tested scripts.
                </p>
              </div>

              <div className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">SLA-Backed Containment</h3>
                <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                  Our managed ops framework supports active 24/7 logging with 15-minute response triggers for production incident containment.
                </p>
              </div>

              <div className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Global Scale</h3>
                <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                  We deploy multi-region container grids (AKS, EKS) designed for high concurrency, global load balancing, and failure failovers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14 — FAQ / SERVICE DISCOVERY QUESTIONS */}
      <section className="py-24 bg-black border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 md:px-12">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block drop-shadow-md">
                FAQ
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4 drop-shadow-md">
                Frequently Asked Questions
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto drop-shadow-md">
                Read transparent answers regarding scoping, team assignments, delivery frameworks, and system handovers.
              </p>
            </Reveal>
          </div>

          <div className="space-y-4">
            {exploreFAQs.map((faq, idx) => {
              const isOpen = activeFAQIndex === idx;
              return (
                <div key={idx} className="border border-zinc-900 rounded-xl bg-zinc-950/20 overflow-hidden">
                  <button
                    onClick={() => setActiveFAQIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-950/40 transition-colors"
                  >
                    <span className="text-xs font-bold text-white">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform ${isOpen ? "rotate-180 text-rose-500" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 border-t border-zinc-900/60 bg-zinc-950/20">
                      <p className="text-xs font-semibold text-zinc-400 leading-relaxed pt-2">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 15 — FINAL CTA / CONSULTATION SECTION */}
      <RepresentativeCTA
        title="Let's Build The Right Transformation Path"
        highlightText="For Your Business"
        description="Whether you need a focused engineering capability, a cloud modernization partner, an AI implementation roadmap, or end-to-end transformation support, Devopstrio can help you design the right engagement model."
        primaryBtnText="BOOK A CONSULTATION"
        primaryBtnHref="/contact#contact-form"
        secondaryBtnText="TALK TO A SPECIALIST"
        secondaryBtnHref="/contact#contact-form"
      />
    </div>
  );
}
