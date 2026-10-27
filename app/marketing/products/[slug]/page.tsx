import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronLeft,
  Download,
  Play,
  MessageSquare,
  CheckCircle2,
  Share2,
  ArrowUpRight,
  FileText,
  Sparkles
} from "lucide-react";
import { ContactForm } from "@/sections/contact/ContactForm";
import { generatePageMetadata } from "@/lib/seo-utils";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  if (slug === "safesign") {
    redirect("/marketing/products/esigniva");
  }
  const productName = (slug.toLowerCase() === "esigniva" || slug.toLowerCase() === "safesign") 
    ? "Esigniva" 
    : (slug.charAt(0).toUpperCase() + slug.slice(1));

  return generatePageMetadata({
    title: `${productName} SaaS Platform Collateral & Datasheets`,
    description: `Download official architectural datasheets, pitch decks, and feature specifications for ${productName} platform by Devopstrio.`,
    path: `/marketing/products/${slug === "safesign" ? "esigniva" : slug}`
  });
}

const commonImages = [
  "/webp/assets/common/09ff7846bc8c9998745688779c09f88d-1.webp",
  "/webp/assets/common/1b065043b6959827c05a0073c93a4a53-1.webp",
  "/webp/assets/common/260b761ad40c3ad2acba2c6666894539-1.webp",
  "/webp/assets/common/2fe7f9184c515b0c515ce38bc8a25efa-1.webp",
  "/webp/assets/common/315e4fdc6263bfd240f36297e376576e-1.webp",
  "/webp/assets/common/37b9b888cc479ea7b74d2d9a05c37597-1.webp",
  "/webp/assets/common/45ea830d170d382ade235db479060da7-1.webp",
  "/webp/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca-1.webp",
];

const esignivaConfig = {
  name: "Esigniva",
  category: "Security & eSign",
  tagline: "Enterprise Zero-Trust eSignature & Document Lifecycle",
  description: "AI-powered identity verification, zero-trust cryptographic signature verification, multi-party signing workflows, and tamper-evident audit trails for modern regulated enterprises.",
  image: commonImages[0],
  features: [
    "Cryptographic SHA-256 tamper-evident audit trails",
    "Multi-party sequential & parallel signing workflows",
    "eIDAS, ESIGN Act, and SOC-2 Type II compliant",
    "Instant webhook & REST API integration for web & ERP"
  ],
  classes: {
    bg: "bg-rose-500/10", border: "border-rose-500/30", text: "text-rose-400", button: "bg-rose-600 hover:bg-rose-500", primaryAssetBg: "bg-rose-500/10 border-rose-500/30"
  }
};

const productsData: Record<string, any> = {
  "esigniva": esignivaConfig,
  "safesign": esignivaConfig,
  "humanex": {
    name: "Humanex",
    category: "HRTech & People Ops",
    tagline: "Next-Gen HR & Workforce Intelligence Platform",
    description: "Complete employee lifecycle management with automated talent acquisition, digital onboarding pipelines, performance reviews, and predictive workforce analytics.",
    image: commonImages[1],
    features: [
      "Automated recruitment pipeline with AI applicant matching",
      "One-click multi-region compliance & payroll synchronization",
      "Continuous performance feedback & 360-degree reviews",
      "Predictive retention scoring & attrition risk heatmaps"
    ],
    classes: {
      bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", button: "bg-blue-600 hover:bg-blue-500", primaryAssetBg: "bg-blue-500/10 border-blue-500/30"
    }
  },
  "caresuite": {
    name: "CareSuite",
    category: "HealthTech & Clinical",
    tagline: "HIPAA-Compliant Healthcare Management Platform",
    description: "Secure clinical workflow and telehealth platform connecting patients, physicians, and medical labs with real-time EHR integration, e-prescriptions, and video triage.",
    image: commonImages[2],
    features: [
      "HIPAA, HITECH & GDPR certified data encryption layer",
      "High-definition encrypted WebRTC clinical video consultations",
      "FHIR & HL7 interoperability standards compliance",
      "Automated e-prescription routing to 25,000+ pharmacies"
    ],
    classes: {
      bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400", button: "bg-emerald-600 hover:bg-emerald-500", primaryAssetBg: "bg-emerald-500/10 border-emerald-500/30"
    }
  },
  "campix": {
    name: "Campix",
    category: "EdTech & University Ops",
    tagline: "Digital Campus & Academic Operations Ecosystem",
    description: "Comprehensive university operations platform combining adaptive learning management, student information systems, virtual classroom sync, and campus administration.",
    image: commonImages[3],
    features: [
      "Unified LMS supporting 25,000+ concurrent live classrooms",
      "Automated grading, plagiarism detection, and progress tracking",
      "Integrated tuition billing and scholarship management portal",
      "Mobile-first student campus portal with push notifications"
    ],
    classes: {
      bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-400", button: "bg-orange-600 hover:bg-orange-500", primaryAssetBg: "bg-orange-500/10 border-orange-500/30"
    }
  },
  "homela": {
    name: "Homela",
    category: "PropTech & Real Estate",
    tagline: "AI-Powered PropTech & Property Operations SaaS",
    description: "Smart property management platform connecting landlords, tenants, and property managers with automated lease tracking, maintenance triage, and rent reconciliation.",
    image: commonImages[4],
    features: [
      "Automated lease generation with digital signature signing",
      "Direct ACH, credit card, and Open Banking rent processing",
      "AI maintenance request triage & automated vendor routing",
      "Multi-property financial dashboards & tax compliance reports"
    ],
    classes: {
      bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400", button: "bg-purple-600 hover:bg-purple-500", primaryAssetBg: "bg-purple-500/10 border-purple-500/30"
    }
  },
  "prestivo": {
    name: "Prestivo",
    category: "EdTech & Learning",
    tagline: "Adaptive AI Learning & Corporate Training Management",
    description: "Personalized education experiences powered by machine learning content recommendations, real-time competency benchmarks, and skill matrix tracking.",
    image: commonImages[5],
    features: [
      "Adaptive learning pathways based on real-time quiz performance",
      "Interactive skill matrices & automated credential certification",
      "Enterprise SCORM & xAPI content compatibility",
      "Manager insights dashboard with team skill progression metrics"
    ],
    classes: {
      bg: "bg-indigo-500/10", border: "border-indigo-500/30", text: "text-indigo-400", button: "bg-indigo-600 hover:bg-indigo-500", primaryAssetBg: "bg-indigo-500/10 border-indigo-500/30"
    }
  },
  "brio": {
    name: "Brio",
    category: "FinTech & Payments",
    tagline: "High-Volume Multi-Gateway Payment Orchestration",
    description: "Next-generation FinTech payment orchestration platform enabling businesses to process, intelligently route, and reconcile millions of transactions across global gateways.",
    image: commonImages[6],
    features: [
      "Dynamic smart-routing reducing transaction drop-offs by 28%",
      "Instant multi-currency conversion supporting 135+ world currencies",
      "PCI-DSS Level 1 certified tokenization vault",
      "Real-time automated settlement & dispute management workflow"
    ],
    classes: {
      bg: "bg-pink-500/10", border: "border-pink-500/30", text: "text-pink-400", button: "bg-pink-600 hover:bg-pink-500", primaryAssetBg: "bg-pink-500/10 border-pink-500/30"
    }
  },
  "justivon": {
    name: "Justivon",
    category: "LegalTech & Case Mgmt",
    tagline: "End-to-End Legal Case & Matter Management SaaS",
    description: "Enterprise legal operations platform for law firms and corporate legal departments — covering matter intake, e-discovery, billing automation, and court filings.",
    image: commonImages[7],
    features: [
      "Centralized matter timeline with automated conflict checks",
      "Secure client portal for document sharing & status updates",
      "Automated time tracking with LEDES standard billing export",
      "Encrypted cloud document vault with version rollbacks"
    ],
    classes: {
      bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400", button: "bg-cyan-600 hover:bg-cyan-500", primaryAssetBg: "bg-cyan-500/10 border-cyan-500/30"
    }
  }
};

export default async function ProductMarketingPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  if (slug === "safesign") {
    redirect("/marketing/products/esigniva");
  }

  const product = productsData[slug] || {
    name: slug.charAt(0).toUpperCase() + slug.slice(1),
    category: "Enterprise Platform",
    tagline: "Enterprise Solution",
    description: "Advanced platform designed for modern enterprise workflows.",
    image: commonImages[0],
    features: [
      "Reduces operational overhead by up to 40%",
      "Enterprise-grade compliance (SOC-2, HIPAA, GDPR)",
      "Production-ready API & webhook integrations",
      "24/7 dedicated enterprise engineering support"
    ],
    classes: {
      bg: "bg-rose-500/10", border: "border-rose-500/20", text: "text-rose-400", button: "bg-rose-600 hover:bg-rose-500", primaryAssetBg: "bg-rose-500/10 border-rose-500/30"
    }
  };

  const assets = [
    { name: "Executive Product Brochure", type: "PDF - 2.4 MB", image: commonImages[4], primary: true },
    { name: "Technical Architecture Deck", type: "PPTX - 15 MB", image: commonImages[5], primary: false },
    { name: "Enterprise Pricing & Tiers", type: "PDF - 1.1 MB", image: commonImages[6], primary: false },
    { name: "Implementation & API Spec", type: "PDF - 3.5 MB", image: commonImages[7], primary: false },
  ];

  return (
    <main className="min-h-screen bg-[#030303] text-white pt-28 sm:pt-36 lg:pt-40 pb-24 font-sans relative overflow-hidden">
      {/* Subtle Ambient Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(225,29,72,0.12),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-12">
        
        {/* Navigation & Back Link */}
        <div>
          <Link 
            href="/marketing/products" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 border border-white/10 hover:border-rose-500/40 text-xs font-semibold text-zinc-300 hover:text-white transition-all shadow-sm"
          >
            <ChevronLeft className="w-4 h-4 text-rose-500" />
            Back to All SaaS Products
          </Link>
          
          {/* Hero Header */}
          <div className="mt-8 flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-zinc-950 border ${product.classes.border} overflow-hidden relative shrink-0 shadow-xl`}>
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
                    {product.name}
                  </h1>
                  <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">
                    {product.category || "Enterprise SaaS"}
                  </span>
                </div>
                <p className="text-base sm:text-lg text-zinc-400 font-normal">
                  {product.tagline}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button 
                aria-label="Share product page"
                className="p-3 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-xl border border-white/10 hover:border-white/20 transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <a 
                href="#contact"
                className={`px-5 py-3 ${product.classes.button} text-white rounded-xl text-sm font-semibold transition-all shadow-[0_0_25px_rgba(225,29,72,0.25)] flex items-center gap-2`}
              >
                <Sparkles className="w-4 h-4" />
                Request Pre-Sales Deck
              </a>
            </div>
          </div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Product Details & Demo */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview & Core Value Propositions */}
            <div className="bg-[#0b0b0e] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-rose-500 font-semibold block mb-2">
                  Platform Architecture
                </span>
                <h2 className="text-2xl font-bold text-white font-sans">Executive Overview</h2>
              </div>
              
              <p className="text-base text-zinc-300 leading-relaxed">
                {product.description}
              </p>
              
              <div className="pt-4 border-t border-white/5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4 font-mono">
                  Enterprise Value Propositions
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(product.features || [
                    "Reduces operational costs by 40%",
                    "Enterprise-grade compliance (SOC-2, HIPAA)",
                    "Seamless API integrations",
                    "24/7 dedicated support"
                  ]).map((feature: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <CheckCircle2 className={`w-5 h-5 ${product.classes.text} shrink-0 mt-0.5`} />
                      <span className="text-sm text-zinc-300 leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Video / Showcase Card */}
            <div className="bg-[#0b0b0e] border border-white/10 rounded-2xl p-6 overflow-hidden relative group">
              <div className="relative w-full aspect-video sm:h-72 rounded-xl overflow-hidden bg-zinc-950 border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                  alt="Dashboard Preview" 
                  className="w-full h-full object-cover opacity-45 group-hover:scale-105 transition-transform duration-700 select-none"
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-rose-600/90 border border-white/20 flex items-center justify-center pl-1 group-hover:scale-110 shadow-[0_0_30px_rgba(225,29,72,0.5)] transition-all">
                    <Play className="w-7 h-7 text-white fill-white" />
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <span className="px-3 py-1 bg-black/75 backdrop-blur-md rounded-full text-xs font-semibold text-zinc-200 border border-white/15">
                      2:45 • Architectural Walkthrough
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mt-2 font-sans">
                      Explore the {product.name} Workflow Engine
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Collateral Downloads & Pre-Sales Assistance */}
          <div className="space-y-6">
            
            {/* Downloadable Assets */}
            <div className="bg-[#0b0b0e] border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-white font-sans">Collateral & Assets</h2>
                <span className="text-xs font-mono text-zinc-500 uppercase">{assets.length} Files</span>
              </div>
              
              <div className="space-y-3">
                {assets.map((asset, i) => (
                  <div 
                    key={i} 
                    className={`flex items-center justify-between p-3.5 rounded-xl border ${asset.primary ? product.classes.primaryAssetBg : 'bg-black/40 border-white/10'} hover:border-rose-500/40 hover:bg-white/[0.03] transition-all cursor-pointer group`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-white/10 flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5 text-rose-500" />
                      </div>
                      <div className="min-w-0">
                        <p className={`text-sm font-semibold truncate ${asset.primary ? 'text-white' : 'text-zinc-200'} group-hover:text-rose-400 transition-colors`}>
                          {asset.name}
                        </p>
                        <p className="text-xs text-zinc-500 font-mono mt-0.5">{asset.type}</p>
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-rose-500/20 text-zinc-400 group-hover:text-rose-400 transition-colors shrink-0 ml-2">
                      <Download className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pre-Sales Engineering CTA Box */}
            <div className="bg-gradient-to-br from-rose-950/40 via-zinc-950 to-black border border-rose-500/25 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-lg font-bold text-white mb-1.5 font-sans">
                Need an Enterprise POC?
              </h3>
              <p className="text-sm text-zinc-400 mb-5 leading-relaxed">
                Our pre-sales architecture team can provision a custom demonstration environment tailored to your tech stack.
              </p>
              <a 
                href="#contact"
                className="w-full py-3 bg-white hover:bg-zinc-100 text-black font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-black" />
                Request Dedicated Demo
              </a>
            </div>

          </div>
        </div>

        {/* Contact Form Section */}
        <div id="contact" className="pt-10 border-t border-white/10">
          <ContactForm />
        </div>

      </div>
    </main>
  );
}
