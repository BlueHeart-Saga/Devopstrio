"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Briefcase,
  Factory,
  Rocket,
  Cpu,
  BookOpen,
  FileText,
  Presentation,
  Video,
  Download,
  Handshake,
  Newspaper,
  Layers,
  Sparkles,
  Eye,
  CheckCircle2,
  X,
  Share2,
  Send,
} from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { SectionNavbar } from "@/components/ui/SectionNavbar";

// Section Components
import { MarketingHero } from "@/sections/marketing/MarketingHero";
import { ResourceSearchFilter } from "@/sections/marketing/ResourceSearchFilter";
import { MarketingCategories } from "@/sections/marketing/MarketingCategories";
import { FeaturedResourcesSection } from "@/sections/marketing/FeaturedResourcesSection";
import { CompanyDocumentsSection } from "@/sections/marketing/CompanyDocumentsSection";
import { ServiceBrochuresSection } from "@/sections/marketing/ServiceBrochuresSection";
import { IndustryBrochuresSection } from "@/sections/marketing/IndustryBrochuresSection";
import { PlatformProductsSection } from "@/sections/marketing/PlatformProductsSection";
import { TechnologyResourcesSection } from "@/sections/marketing/TechnologyResourcesSection";
import { CaseStudiesSection } from "@/sections/marketing/CaseStudiesSection";
import { WhitepapersSection } from "@/sections/marketing/WhitepapersSection";
import { PresentationsSection } from "@/sections/marketing/PresentationsSection";
import { VideosSection } from "@/sections/marketing/VideosSection";
import { DownloadsLibrarySection } from "@/sections/marketing/DownloadsLibrarySection";
import { LatestTimelineSection } from "@/sections/marketing/LatestTimelineSection";
import { MarketingCTA } from "@/sections/marketing/MarketingCTA";

// Navigation section list for sticky SectionNavbar
const marketingSections = [
  { id: "categories-sec", label: "Categories" },
  { id: "featured-resources", label: "Featured" },
  { id: "company-documents", label: "Company Decks" },
  { id: "service-brochures", label: "Services" },
  { id: "industry-brochures", label: "Industries" },
  { id: "platform-products", label: "Platforms" },
  { id: "technology-resources", label: "Technology" },
  { id: "case-studies", label: "Case Studies" },
  { id: "whitepapers", label: "Whitepapers" },
  { id: "presentations", label: "Presentations" },
  { id: "videos-webinars", label: "Videos" },
  { id: "downloads-library", label: "Downloads Library" },
  { id: "latest-timeline", label: "Releases" },
];

interface ResourceItem {
  id: string;
  title: string;
  type: "PDF" | "PPT" | "Word" | "Video" | "Brochure" | "Whitepaper" | "Case Study" | "Datasheet";
  category: string;
  size: string;
  updated: string;
  description: string;
  downloads: number;
  badge?: string;
  image?: string;
  link?: string;
}

export default function MarketingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [previewItem, setPreviewItem] = useState<ResourceItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [requestFormData, setRequestFormData] = useState({
    name: "",
    email: "",
    company: "",
    resourceNeeded: "Custom Enterprise Pitch Deck",
    comments: "",
  });

  const [dbResources, setDbResources] = useState<ResourceItem[]>([]);

  useEffect(() => {
    const fetchBackendResources = async () => {
      try {
        const res = await fetch("/api/marketing-resources");
        if (!res.ok) return;
        const data = await res.json();
        if (Array.isArray(data)) {
          const mapped: ResourceItem[] = data
            .filter((item: any) => item.status === "published" || !item.status)
            .map((item: any) => ({
              id: item.id,
              title: item.title,
              type: (item.type || "PDF") as any,
              category: item.category,
              size: item.fileSize || "File",
              updated: item.updated_at
                ? new Date(item.updated_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })
                : "Recent",
              description: item.description,
              downloads: item.downloads || 0,
              badge: item.badge || (item.featured ? "FEATURED" : undefined),
              image: item.thumbnailUrl || undefined,
              link: item.fileUrl || undefined,
            }));
          setDbResources(mapped);
        }
      } catch (err) {
        console.error("Error fetching backend resources:", err);
      }
    };
    fetchBackendResources();
  }, []);


  const categories = [
    {
      id: "company",
      label: "Company Documents",
      icon: Building2,
      count: "8 Files",
      href: "/marketing/company",
      description: "Official executive corporate decks, global delivery capability statements, CMMI Level 5 credentials, and organization overview presentations.",
      image: "/webp/assets/herocard/aboutpage.webp",
    },
    {
      id: "services",
      label: "Service Brochures",
      icon: Briefcase,
      count: "10 Files",
      href: "/marketing/services",
      description: "Detailed practice sheets for AI & Data Innovation, Cloud Services, DevOps & Platform Engineering, Cybersecurity, and Managed IT Services.",
      image: "/webp/assets/herocard/servicespage.webp",
    },
    {
      id: "industries",
      label: "Industry Blueprints",
      icon: Factory,
      count: "8 Files",
      href: "/marketing/industries",
      description: "Domain-specific solutions for Banking & Financial Services, Healthcare & Life Sciences, Retail & E-Commerce, and Manufacturing Industry 4.0.",
      image: "/webp/assets/herocard/industriespage.webp",
    },
    {
      id: "platforms",
      label: "Platform Datasheets",
      icon: Rocket,
      count: "7 Files",
      href: "/marketing/platforms",
      description: "Product sheets and technical specifications for Humanex AI HR, Homela PropTech, CareSuite Telehealth, and Prestivo Credit Engine.",
      image: "/webp/assets/herocard/homepage.webp",
    },
    {
      id: "technology",
      label: "Technology Stack",
      icon: Cpu,
      count: "8 Files",
      href: "/marketing/technology",
      description: "Reference architectures for Azure AKS, AWS Serverless, GCP Vertex AI, Databricks Lakehouse, and Kubernetes GitOps playbooks.",
      image: "/webp/assets/data_overview_hero.webp",
    },
    {
      id: "case-studies",
      label: "Case Studies",
      icon: BookOpen,
      count: "6 Files",
      href: "/marketing/case-studies",
      description: "Real-world customer success stories detailing 40%+ cloud cost savings, zero-downtime migrations, and high-frequency event scaling.",
      image: "/webp/assets/herocard/ecosystempage.webp",
    },
    {
      id: "whitepapers",
      label: "Whitepapers & Reports",
      icon: FileText,
      count: "6 Files",
      href: "/marketing/whitepapers",
      description: "In-depth technical whitepapers covering RAG architectures, LLM fine-tuning, FinOps ROI frameworks, and Zero Trust security compliance.",
      image: "/webp/assets/herocard/insightspage.webp",
    },
    {
      id: "presentations",
      label: "Presentations & Decks",
      icon: Presentation,
      count: "6 Files",
      href: "/marketing/company/corporate-presentation",
      description: "Master client introductory pitch presentations, executive briefing decks, and partner engagement slide templates.",
      image: "/webp/assets/herocard/Marketinghero.webp",
    },
    {
      id: "videos",
      label: "Videos & Webinars",
      icon: Video,
      count: "5 Files",
      href: "/marketing",
      description: "Recorded technical webinars, corporate delivery model overviews, and live SaaS product walkthrough demonstrations.",
      image: "/webp/assets/common/09ff7846bc8c9998745688779c09f88d-1.webp",
    },
  ];


  const featuredResources: ResourceItem[] = [
    {
      id: "feat-1",
      title: "Devopstrio Corporate Overview & Capability Deck 2026",
      type: "PPT",
      category: "Company",
      size: "24.5 MB",
      updated: "July 2026",
      description: "Complete executive sales presentation outlining global delivery centers, CMMI Level 5 standards, enterprise AI practice, and cloud engineering.",
      downloads: 1420,
      badge: "POPULAR",
      image: "/webp/assets/herocard/Marketinghero.webp",
    },
    {
      id: "feat-2",
      title: "Generative AI & Enterprise LLM Implementation Blueprint",
      type: "Whitepaper",
      category: "Whitepapers",
      size: "14.2 MB",
      updated: "July 2026",
      description: "In-depth technical whitepaper on deploying RAG architectures, custom LLM fine-tuning, vector database benchmarking, and AI safety guardrails.",
      downloads: 980,
      badge: "NEW",
      image: "/webp/assets/common/09ff7846bc8c9998745688779c09f88d-1.webp",
    },
    {
      id: "feat-3",
      title: "Azure Cloud Migration & FinOps ROI Master Guide",
      type: "Case Study",
      category: "Case Studies",
      size: "8.9 MB",
      updated: "June 2026",
      description: "Case study detailing how a Fortune 500 financial institution achieved 42% cloud infrastructure cost savings with Devopstrio Azure FinOps.",
      downloads: 1150,
      badge: "UPDATED",
      image: "/webp/assets/herocard/aboutpage.webp",
    },
  ];

  const companyDocs: ResourceItem[] = [
    { id: "c-1", title: "Devopstrio Company Profile 2026", type: "PDF", category: "Company", size: "14.2 MB", updated: "July 2026", description: "Official corporate overview document detailing global delivery models and engineering standards.", downloads: 2840, link: "/marketing/company/company-profile" },
    { id: "c-2", title: "Master Corporate Pitch Presentation", type: "PPT", category: "Company", size: "32.1 MB", updated: "July 2026", description: "45-slide executive presentation for client introductory meetings and business partner proposals.", downloads: 1950, link: "/marketing/company/corporate-presentation" },
    { id: "c-3", title: "Devopstrio Brand Guidelines & Identity Kit", type: "PDF", category: "Company", size: "18.6 MB", updated: "June 2026", description: "Official vector logos, color tokens, typography standards, and slide master templates.", downloads: 820, link: "/marketing/company/brand-guidelines" },
    { id: "c-4", title: "Executive Capability Statement", type: "Brochure", category: "Company", size: "4.8 MB", updated: "July 2026", description: "2-page executive summary of engineering credentials, ISO 27001, and SOC2 certifications.", downloads: 1430 },
  ];

  const serviceBrochures: ResourceItem[] = [
    { id: "s-1", title: "AI & Data Innovation Service Brochure", type: "Brochure", category: "Services", size: "12.4 MB", updated: "July 2026", description: "Generative AI, LLM fine-tuning, RAG architecture, and predictive analytics practice sheet.", downloads: 1890, link: "/marketing/services/ai-data-innovation" },
    { id: "s-2", title: "Cloud Services & Multi-Cloud Architecture", type: "PDF", category: "Services", size: "10.1 MB", updated: "July 2026", description: "Azure, AWS, and GCP cloud migration, FinOps, serverless, and cloud-native modernisation.", downloads: 2150, link: "/marketing/services/cloud-services" },
    { id: "s-3", title: "DevOps & Platform Automation Brochure", type: "Brochure", category: "Services", size: "7.9 MB", updated: "June 2026", description: "Infrastructure as Code, CI/CD, GitOps, Kubernetes orchestration, and developer portals.", downloads: 1640, link: "/marketing/services/devops-automation" },
    { id: "s-4", title: "Cybersecurity & Zero Trust Architecture", type: "PDF", category: "Services", size: "9.3 MB", updated: "June 2026", description: "DevSecOps pipelines, penetration testing, compliance automation, and 24/7 SOC services.", downloads: 1220 },
    { id: "s-5", title: "Enterprise Software Engineering Catalog", type: "PDF", category: "Services", size: "11.8 MB", updated: "May 2026", description: "Custom web systems, microservices, mobile applications, and scalable digital platforms.", downloads: 990 },
    { id: "s-6", title: "Data Engineering & Analytics Practice Sheet", type: "Brochure", category: "Services", size: "8.6 MB", updated: "June 2026", description: "Snowflake, Databricks, real-time data streaming, lakehouse, and BI dashboards.", downloads: 780 },
  ];

  const industryBrochures: ResourceItem[] = [
    { id: "i-1", title: "Banking & Financial Services Solution Paper", type: "PDF", category: "Industries", size: "11.2 MB", updated: "July 2026", description: "Core banking cloud migration, payment gateway integration, PCI-DSS, and AI fraud detection.", downloads: 1540, link: "/marketing/industries/banking-finance" },
    { id: "i-2", title: "Healthcare & Life Sciences Platform Blueprint", type: "PDF", category: "Industries", size: "13.5 MB", updated: "June 2026", description: "HIPAA-compliant cloud vaults, EHR interoperability (HL7/FHIR), and telemedicine solutions.", downloads: 1310, link: "/marketing/industries/healthcare" },
    { id: "i-3", title: "Retail & E-commerce High-Scale Architecture", type: "Brochure", category: "Industries", size: "9.7 MB", updated: "June 2026", description: "Omnichannel retail engines, headless commerce, inventory AI, and Black Friday event scale.", downloads: 1100 },
    { id: "i-4", title: "Manufacturing & Industry 4.0 Telemetry", type: "PDF", category: "Industries", size: "10.4 MB", updated: "May 2026", description: "IoT sensor telemetry, digital twin models, predictive maintenance, and smart supply chain.", downloads: 870 },
  ];

  const platformProducts: ResourceItem[] = [
    { id: "p-1", title: "Humanex AI HR & Talent Platform Datasheet", type: "Datasheet", category: "Platforms", size: "6.2 MB", updated: "July 2026", description: "Automated candidate screening, employee engagement AI, and global payroll integration.", downloads: 2100, link: "/marketing/platforms" },
    { id: "p-2", title: "Homela Real Estate & PropTech Platform Kit", type: "Datasheet", category: "Platforms", size: "5.8 MB", updated: "June 2026", description: "Virtual property tours, tenant portal, automated leasing contracts, and maintenance dispatch.", downloads: 1450, link: "/marketing/platforms" },
    { id: "p-3", title: "CareSuite Digital Health Platform Overview", type: "Datasheet", category: "Platforms", size: "7.1 MB", updated: "June 2026", description: "Telehealth video consultations, electronic prescription routing, and patient management.", downloads: 1620, link: "/marketing/platforms" },
    { id: "p-4", title: "Campix Smart Campus Management System", type: "Datasheet", category: "Platforms", size: "6.5 MB", updated: "May 2026", description: "University admissions, LMS integration, student portals, and automated grading.", downloads: 930 },
    { id: "p-5", title: "Prestivo Fintech Credit Scoring Engine", type: "Datasheet", category: "Platforms", size: "8.3 MB", updated: "July 2026", description: "Automated credit underwriting, KYC/AML verification, and loan servicing engine.", downloads: 1780 },
    { id: "p-6", title: "Brio Enterprise Operations Hub Datasheet", type: "Datasheet", category: "Platforms", size: "5.1 MB", updated: "May 2026", description: "Unified enterprise dashboard for resource planning, asset tracking, and analytics.", downloads: 1120 },
  ];

  const techResources: ResourceItem[] = [
    { id: "t-1", title: "Azure Cloud Enterprise Reference Architecture", type: "Whitepaper", category: "Technology", size: "15.4 MB", updated: "July 2026", description: "Multi-region Azure Kubernetes Service (AKS), Hub-Spoke network topology, and Azure Sentinel.", downloads: 2450, link: "/marketing/technology" },
    { id: "t-2", title: "AWS Modernization & Serverless Blueprint", type: "Whitepaper", category: "Technology", size: "12.8 MB", updated: "June 2026", description: "AWS Lambda, EventBridge, DynamoDB, and CloudFront global CDN deployment patterns.", downloads: 1980, link: "/marketing/technology" },
    { id: "t-3", title: "Google Cloud Platform AI & BigQuery Blueprint", type: "PDF", category: "Technology", size: "10.6 MB", updated: "June 2026", description: "Vertex AI pipeline integration, BigQuery data warehouse, and Anthos multi-cloud cluster.", downloads: 1410 },
    { id: "t-4", title: "Kubernetes & ArgoCD GitOps Playbook", type: "Brochure", category: "Technology", size: "9.2 MB", updated: "May 2026", description: "Declarative continuous delivery, zero-downtime canary deployments, and Helm package control.", downloads: 1670 },
    { id: "t-5", title: "Terraform Infrastructure as Code Enterprise Standard", type: "PDF", category: "Technology", size: "11.5 MB", updated: "July 2026", description: "Modular IaC governance, state file locking, drift detection, and automated security scanning.", downloads: 1820 },
    { id: "t-6", title: "Databricks Lakehouse & Snowflake Data Stack Architecture", type: "Whitepaper", category: "Technology", size: "14.1 MB", updated: "June 2026", description: "Real-time streaming ingestion, Delta Lake pipelines, and enterprise data governance blueprint.", downloads: 2130 },
  ];

  const caseStudies: ResourceItem[] = [
    { id: "cs-1", title: "Global Banking Azure Migration & FinOps Case Study", type: "Case Study", category: "Case Studies", size: "4.5 MB", updated: "July 2026", description: "Migrated 300+ microservices to Azure Kubernetes with zero downtime and 42% cost savings.", downloads: 3100, link: "/marketing/case-studies" },
    { id: "cs-2", title: "Healthcare Telemedicine Scale & HIPAA Vault Case Study", type: "Case Study", category: "Case Studies", size: "5.1 MB", updated: "June 2026", description: "Built scalable web/mobile telehealth engine handling 1.2 million active monthly patient consults.", downloads: 2400, link: "/marketing/case-studies" },
    { id: "cs-3", title: "Retail Microservices Peak Event Scale Case Study", type: "Case Study", category: "Case Studies", size: "3.8 MB", updated: "May 2026", description: "Engineered cloud-native event-driven ordering system scaling to 50k transactions/second.", downloads: 1890, link: "/marketing/case-studies" },
  ];

  const whitepapers: ResourceItem[] = [
    { id: "w-1", title: "Generative AI in Enterprise Software 2026 Report", type: "Whitepaper", category: "Whitepapers", size: "18.4 MB", updated: "July 2026", description: "Comprehensive research report detailing LLM deployment patterns, RAG benchmarks, and ROI.", downloads: 4200, link: "/marketing/whitepapers" },
    { id: "w-2", title: "The Next-Gen Cloud Migration Playbook", type: "Whitepaper", category: "Whitepapers", size: "14.2 MB", updated: "June 2026", description: "Step-by-step roadmap for migrating legacy monolithic software to cloud-native microservices.", downloads: 2900, link: "/marketing/whitepapers" },
    { id: "w-3", title: "Zero Trust DevSecOps Strategy Paper", type: "Whitepaper", category: "Whitepapers", size: "11.7 MB", updated: "May 2026", description: "Practical framework for integrating automated security compliance into CI/CD pipelines.", downloads: 2150, link: "/marketing/whitepapers" },
  ];

  const presentations: ResourceItem[] = [
    { id: "pr-1", title: "Devopstrio Master Sales Deck 2026", type: "PPT", category: "Presentations", size: "38.2 MB", updated: "July 2026", description: "Master 45-slide client pitch deck with animated architecture diagrams and engagement models.", downloads: 3500 },
    { id: "pr-2", title: "Generative AI & Automation Client Presentation", type: "PPT", category: "Presentations", size: "22.6 MB", updated: "June 2026", description: "Executive briefing slides on enterprise GenAI implementation, costs, and timeline.", downloads: 2100 },
    { id: "pr-3", title: "Cloud-Native Infrastructure Pitch Deck", type: "PPT", category: "Presentations", size: "29.4 MB", updated: "June 2026", description: "Detailed presentation slides covering Azure, AWS, and GCP cloud migration methodologies.", downloads: 1850 },
  ];

  const videos: ResourceItem[] = [
    { id: "v-1", title: "Devopstrio Corporate Overview & Delivery Model", type: "Video", category: "Videos", size: "12 mins", updated: "July 2026", description: "Executive walkthrough of Devopstrio global delivery hubs, engineering culture, and clients.", downloads: 4500 },
    { id: "v-2", title: "Generative AI & LLM RAG Architecture Masterclass", type: "Video", category: "Videos", size: "45 mins", updated: "June 2026", description: "Technical webinar covering vector databases, prompt engineering, and RAG pipelines.", downloads: 3200 },
    { id: "v-3", title: "Humanex AI HR Platform Product Demo", type: "Video", category: "Videos", size: "8 mins", updated: "May 2026", description: "Live product demonstration of candidate screening AI and employee dashboard.", downloads: 2750 },
    { id: "v-4", title: "Azure Cloud FinOps & Cost Optimization Masterclass", type: "Video", category: "Videos", size: "28 mins", updated: "July 2026", description: "Step-by-step guidance on automated cloud cost allocation, right-sizing workloads, and savings plans.", downloads: 1980 },
    { id: "v-5", title: "Zero Trust DevSecOps Pipeline Live Technical Session", type: "Video", category: "Videos", size: "35 mins", updated: "June 2026", description: "Hands-on demo of vulnerability scanning, SBOM tracking, and secret management in CI/CD.", downloads: 2420 },
    { id: "v-6", title: "Kubernetes Enterprise Multi-Region Cluster Architecture", type: "Video", category: "Videos", size: "40 mins", updated: "July 2026", description: "Architectural deep-dive into multi-region disaster recovery, service mesh, and GitOps synchronization.", downloads: 3100 },
  ];

  // Merge DB resources into sections
  const getCategoryList = (catKeywords: string[], staticList: ResourceItem[]) => {
    const dbMatches = dbResources.filter(r => 
      catKeywords.some(kw => r.category?.toLowerCase().includes(kw.toLowerCase()))
    );
    return [...dbMatches, ...staticList];
  };

  const activeCompanyDocs = getCategoryList(["company"], companyDocs);
  const activeServiceBrochures = getCategoryList(["service"], serviceBrochures);
  const activeIndustryBrochures = getCategoryList(["industry", "solution"], industryBrochures);
  const activePlatformProducts = getCategoryList(["platform", "saas"], platformProducts);
  const activeTechResources = getCategoryList(["technology", "stack", "blueprint"], techResources);
  const activeCaseStudies = getCategoryList(["case"], caseStudies);
  const activeWhitepapers = getCategoryList(["whitepaper", "report"], whitepapers);
  const activePresentations = getCategoryList(["presentation", "deck"], presentations);
  const activeVideos = getCategoryList(["video", "webinar"], videos);

  const activeFeatured = [
    ...dbResources.filter(r => r.badge || r.category?.includes("Featured") || r.category?.includes("Release")),
    ...featuredResources
  ].slice(0, 6);

  const allResources: ResourceItem[] = Array.from(
    new Map(
      [
        ...dbResources,
        ...activeFeatured,
        ...activeCompanyDocs,
        ...activeServiceBrochures,
        ...activeIndustryBrochures,
        ...activePlatformProducts,
        ...activeTechResources,
        ...activeCaseStudies,
        ...activeWhitepapers,
        ...activePresentations,
        ...activeVideos,
      ].map(item => [item.id || item.title, item])
    ).values()
  );

  const filteredResources = allResources.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      selectedType === "All" || item.type.toLowerCase() === selectedType.toLowerCase();

    return matchesSearch && matchesType;
  });

  const handleDownload = async (item: ResourceItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setToastMessage(`Downloading "${item.title}" (${item.size})...`);
    setTimeout(() => setToastMessage(null), 4000);

    // If actual file URL exists, trigger download
    if (item.link) {
      const a = document.createElement("a");
      a.href = item.link;
      a.target = "_blank";
      a.download = item.title;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    // Increment backend download counter if MongoDB ID
    if (item.id && item.id.length > 15) {
      try {
        await fetch(`/api/marketing-resources/${item.id}`, { method: "PATCH" });
      } catch (err) {
        console.error("Failed to update download count", err);
      }
    }
  };

  const handleShareLink = (item: ResourceItem) => {
    navigator.clipboard?.writeText?.(window.location.origin + (item.link || "/marketing"));
    setToastMessage(`Asset link copied to clipboard!`);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "PDF":
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">PDF</span>;
      case "PPT":
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">PPT</span>;
      case "Video":
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30">VIDEO</span>;
      case "Brochure":
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">BROCHURE</span>;
      case "Whitepaper":
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">WHITEPAPER</span>;
      case "Case Study":
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">CASE STUDY</span>;
      default:
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-800 text-zinc-300">DOC</span>;
    }
  };

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl bg-zinc-900 border border-rose-500/50 text-white text-xs font-semibold shadow-2xl flex items-center gap-3 animate-bounce">
          <Sparkles className="w-4 h-4 text-rose-500" />
          {toastMessage}
        </div>
      )}

      {/* Hero Section */}
      <MarketingHero
        onDownloadProfile={() =>
          handleDownload({
            id: "c-1",
            title: "Devopstrio Company Profile 2026",
            type: "PDF",
            category: "Company",
            size: "14.2 MB",
            updated: "July 2026",
            description: "",
            downloads: 0,
          })
        }
      />

      {/* Sticky Section Navbar */}
      <SectionNavbar sections={marketingSections} />

      {/* Global Search and Format Filters */}
      <ResourceSearchFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        typeFilters={["All", "PDF", "PPT", "Brochure", "Whitepaper", "Case Study", "Datasheet", "Video"]}
        quickChips={["AI", "Azure", "Healthcare", "DevOps", "Whitepaper", "Cybersecurity", "Cloud Migration"]}
      />

      {/* Main Content Sections Wrapper */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 space-y-20">
        
        {/* Section 1: Categories */}
        <MarketingCategories
          categories={categories}
          onSelectCategory={(id) => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Section 2: Featured Resources Carousel */}
        <FeaturedResourcesSection
          resources={activeFeatured}
          getTypeBadge={getTypeBadge}
          onPreview={(item) => setPreviewItem(item)}
          onDownload={handleDownload}
        />

        {/* Section 3: Company Documents */}
        <CompanyDocumentsSection
          documents={activeCompanyDocs}
          getTypeBadge={getTypeBadge}
          onPreview={(item) => setPreviewItem(item)}
          onDownload={handleDownload}
        />

        {/* Section 4: Service Brochures */}
        <ServiceBrochuresSection
          services={activeServiceBrochures}
          getTypeBadge={getTypeBadge}
          onPreview={(item) => setPreviewItem(item)}
          onDownload={handleDownload}
        />

        {/* Section 5: Industry Brochures */}
        <IndustryBrochuresSection
          industries={activeIndustryBrochures}
          getTypeBadge={getTypeBadge}
          onPreview={(item) => setPreviewItem(item)}
          onDownload={handleDownload}
        />

        {/* Section 6: Platform Products */}
        <PlatformProductsSection
          platforms={activePlatformProducts}
          getTypeBadge={getTypeBadge}
          onPreview={(item) => setPreviewItem(item)}
          onDownload={handleDownload}
        />

        {/* Section 7: Technology Resources */}
        <TechnologyResourcesSection
          techResources={activeTechResources}
          getTypeBadge={getTypeBadge}
          onPreview={(item) => setPreviewItem(item)}
          onDownload={handleDownload}
        />

        {/* Section 8: Case Studies */}
        <CaseStudiesSection
          caseStudies={activeCaseStudies}
          getTypeBadge={getTypeBadge}
          onPreview={(item) => setPreviewItem(item)}
          onDownload={handleDownload}
        />

        {/* Section 9: Whitepapers */}
        <WhitepapersSection
          whitepapers={activeWhitepapers}
          getTypeBadge={getTypeBadge}
          onPreview={(item) => setPreviewItem(item)}
          onDownload={handleDownload}
        />

        {/* Section 10: Presentations */}
        <PresentationsSection
          presentations={activePresentations}
          getTypeBadge={getTypeBadge}
          onPreview={(item) => setPreviewItem(item)}
          onDownload={handleDownload}
        />

        {/* Section 11: Videos & Webinars */}
        <VideosSection
          videos={activeVideos}
          getTypeBadge={getTypeBadge}
          onPreview={(item) => setPreviewItem(item)}
        />

        {/* Section 12: Complete Downloads Library Table */}
        <DownloadsLibrarySection
          filteredResources={filteredResources}
          getTypeBadge={getTypeBadge}
          onPreview={(item) => setPreviewItem(item)}
          onDownload={handleDownload}
        />

        {/* Section 13: Latest Timeline Releases */}
        <LatestTimelineSection onPreview={(item) => setPreviewItem(item)} />

        {/* Section 14: CTA Section */}
        <MarketingCTA onRequestCustom={() => setIsRequestModalOpen(true)} />

      </div>

      {/* Preview Modal Overlay */}
      {previewItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-2xl w-full p-6 space-y-6 relative shadow-2xl animate-in fade-in zoom-in-95">
            <button
              onClick={() => setPreviewItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              {getTypeBadge(previewItem.type)}
              <span className="text-xs text-zinc-400">Updated {previewItem.updated}</span>
              <span className="text-xs text-zinc-400 font-mono">[{previewItem.size}]</span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">{previewItem.title}</h3>
              <p className="text-sm text-zinc-300 mt-2 leading-relaxed">{previewItem.description}</p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 space-y-2">
              <div className="flex justify-between text-xs text-zinc-400">
                <span>Category: <strong className="text-white">{previewItem.category}</strong></span>
                <span>Security: <strong className="text-emerald-400">Public Asset</strong></span>
              </div>
              <div className="flex justify-between text-xs text-zinc-400">
                <span>Total Downloads: <strong className="text-rose-400">{previewItem.downloads || 100}+</strong></span>
                <span>Format: <strong className="text-white">{previewItem.type}</strong></span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => handleShareLink(previewItem)}
                className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" /> Share Link
              </button>
              {previewItem.link ? (
                <Link
                  href={previewItem.link}
                  className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" /> Open Resource Page
                </Link>
              ) : (
                <button
                  onClick={(e) => {
                    handleDownload(previewItem, e);
                    setPreviewItem(null);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download File
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Request Custom Material Modal */}
      {isRequestModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-lg w-full p-6 space-y-6 relative shadow-2xl">
            <button
              onClick={() => {
                setIsRequestModalOpen(false);
                setRequestSubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {requestSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-rose-600/20 text-rose-500 border border-rose-500/30 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Request Received!</h3>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto">
                  Our marketing and sales enablement team will prepare your custom presentation or solution collateral and email you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsRequestModalOpen(false);
                    setRequestSubmitted(false);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-rose-600 text-white text-xs font-bold"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setRequestSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-rose-500" />
                    Request Custom Marketing Material
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Provide details and our team will craft customized sales collateral.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={requestFormData.name}
                      onChange={(e) => setRequestFormData({ ...requestFormData, name: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={requestFormData.email}
                      onChange={(e) => setRequestFormData({ ...requestFormData, email: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Corp / Devopstrio Partner"
                      value={requestFormData.company}
                      onChange={(e) => setRequestFormData({ ...requestFormData, company: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Material Type Needed</label>
                    <select
                      value={requestFormData.resourceNeeded}
                      onChange={(e) => setRequestFormData({ ...requestFormData, resourceNeeded: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    >
                      <option>Custom Enterprise Pitch Deck</option>
                      <option>Co-Branded Service Brochure</option>
                      <option>Tailored Industry Case Study</option>
                      <option>Generative AI ROI Model</option>
                      <option>Architecture Blueprint & Security Sheet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Additional Notes & Context</label>
                    <textarea
                      rows={3}
                      placeholder="Specify client name, deal size, key focus areas, or branding requirements..."
                      value={requestFormData.comments}
                      onChange={(e) => setRequestFormData({ ...requestFormData, comments: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsRequestModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" /> Submit Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </main>
  );
}
