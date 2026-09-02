import React from "react";
import dynamic from "next/dynamic";
import { EcosystemTopHero } from "@/sections/ecosystem/EcosystemTopHero";
import { EcosystemHero } from "@/sections/ecosystem/EcosystemHero";
import { SectionNavbar } from "@/components/ui/SectionNavbar";

// Dynamic Imports for Heavy Below-The-Fold Sections to Reduce Initial JS Payload
const EcosystemOverview = dynamic(() => import("@/sections/ecosystem/EcosystemOverview").then((mod) => mod.EcosystemOverview));
const EcosystemPillars = dynamic(() => import("@/sections/ecosystem/EcosystemPillars").then((mod) => mod.EcosystemPillars));
const CloudPartnerShowcase = dynamic(() => import("@/sections/ecosystem/CloudPartnerShowcase").then((mod) => mod.CloudPartnerShowcase));
const PlatformPortfolio = dynamic(() => import("@/sections/ecosystem/PlatformPortfolio").then((mod) => mod.PlatformPortfolio));
const TechnologyLandscape = dynamic(() => import("@/sections/ecosystem/TechnologyLandscape").then((mod) => mod.TechnologyLandscape));
const AllianceNetwork = dynamic(() => import("@/sections/ecosystem/AllianceNetwork").then((mod) => mod.AllianceNetwork));
const GlobalPresence = dynamic(() => import("@/sections/contact/GlobalPresence").then((mod) => mod.GlobalPresence));
const DomainExcellence = dynamic(() => import("@/sections/ecosystem/domain/DomainExcellence").then((mod) => mod.DomainExcellence));
const InnovationLabs = dynamic(() => import("@/sections/ecosystem/InnovationLabs").then((mod) => mod.InnovationLabs));
const EcosystemMetrics = dynamic(() => import("@/sections/ecosystem/EcosystemMetrics").then((mod) => mod.EcosystemMetrics));
const EcosystemCTA = dynamic(() => import("@/sections/ecosystem/EcosystemCTA").then((mod) => mod.EcosystemCTA));

const ecosystemSections = [
  { id: "overview", label: "Overview" },
  { id: "domains", label: "Domains" },
  { id: "portfolio", label: "Portfolio" },
  { id: "landscape", label: "Landscape" },
  { id: "alliances", label: "Alliances" },
  { id: "delivery", label: "Delivery" },
  { id: "excellence", label: "Excellence" },
  { id: "labs", label: "Labs" },
  { id: "metrics", label: "Metrics" }
];

import { FAQ } from "@/components/services/FAQ";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/Schemas";

const ecosystemFaqs = [
  {
    q: "What components make up Devopstrio's Global Engineering Ecosystem?",
    a: "Our ecosystem integrates strategic cloud partnerships (AWS, Azure, GCP, NVIDIA), internal accelerators, domain excellence centers, open innovation labs, and a global talent network across the UK, USA, and India.",
    tags: ["Cloud Partnerships", "Domain COE", "Innovation Labs", "Global Talent"]
  },
  {
    q: "How do Devopstrio's accelerators speed up enterprise deployments?",
    a: "Our pre-built Terraform landing zones, Karpenter autoscaling blueprints, RAG vector pipelines, and GitOps CI/CD templates reduce initial architecture setup time from months to under 14 days.",
    proof: "✓ 14-Day Rapid Architecture Deployment Blueprints"
  },
  {
    q: "What is the role of Devopstrio Innovation Labs?",
    a: "Our R&D labs prototype bleeding-edge technologies including GenAI RAG pipelines, zero-trust micro-segmentation, eBPF kernel observability, and serverless FinOps automation before deployment.",
    proof: "✓ Continuous R&D · GenAI & Zero-Trust Prototypes"
  },
  {
    q: "How can enterprise partners join the Devopstrio Alliance Network?",
    a: "Technology vendors, cloud ISVs, and enterprise partners can engage with our strategic alliance team for joint solution engineering, co-selling, and integrated customer delivery.",
    tags: ["Partner Alliance", "Joint Engineering", "Co-Selling"]
  }
];

export default function EcosystemLandingPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "Ecosystem", item: "/ecosystem" }
      ]} />
      <FAQSchema faqs={ecosystemFaqs} />

      {/* 1. Ecosystem Hero Section */}
      <div className="flex flex-col bg-black">
        <EcosystemTopHero />
      </div>

      {/* 2. Ecosystem Overview */}
      <div id="overview">
        <EcosystemOverview />
      </div>

      {/* 3. Core Ecosystem Domains (Pillars) */}
      <div id="domains">
        <EcosystemPillars />
      </div>

      {/* Cloud Partner Showcase */}
      <div id="cloud-partners">
        <CloudPartnerShowcase />
      </div>

      {/* 4. Platform Portfolio */}
      <div id="portfolio">
        <PlatformPortfolio />
      </div>

      {/* 5. Technology Landscape */}
      <div id="landscape">
        <TechnologyLandscape />
      </div>

      {/* 6. Strategic Alliance Network */}
      <div id="alliances">
        <AllianceNetwork />
      </div>

      {/* 7. Global Delivery Network */}
      <div id="delivery" className="relative z-10 w-full bg-black">
        <GlobalPresence
          title={
            <>
              Wherever You Build &amp; Scale, Our{" "}
              <span className="bg-rose-500 text-white font-semibold px-4 py-1 mx-1 rounded-xl inline-block">
                Ecosystem
              </span>{" "}
              Is Already There.
            </>
          }
        />
      </div>

      {/* 8. Engineering Excellence */}
      <div id="excellence">
        <DomainExcellence />
      </div>

      {/* 9. Innovation Labs */}
      <div id="labs">
        <InnovationLabs />
      </div>

      {/* 10. Ecosystem Metrics (Business Outcomes) */}
      <div id="metrics">
        <EcosystemMetrics />
      </div>

      {/* 11. Ecosystem FAQs */}
      <FAQ faqs={ecosystemFaqs} title="Ecosystem Architecture" highlight="FAQs" />

      {/* 12. Final CTA */}
      <EcosystemCTA />

    </main>
  );
}

// Pure SVG Code Wave Divider components (High-Level Designs matching the About, Services and Contact Page)
function SvgWaveLine({ variant }: { variant: "smooth" | "dashed" | "particles" | "grid" | "liquid" }) {
  const GradientDef = () => (
    <defs>
      <linearGradient id="wave-grad-ecosystem" x1="0" y1="24" x2="1440" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e11d48" stopOpacity="0" />
        <stop offset="0.2" stopColor="#be123c" stopOpacity="0.6" />
        <stop offset="0.5" stopColor="#f43f5e" stopOpacity="0.8" />
        <stop offset="0.8" stopColor="#be123c" stopOpacity="0.6" />
        <stop offset="1" stopColor="#e11d48" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="wave-glow-ecosystem" x1="0" y1="24" x2="1440" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e11d48" stopOpacity="0" />
        <stop offset="0.5" stopColor="#f43f5e" stopOpacity="0.1" />
        <stop offset="1" stopColor="#e11d48" stopOpacity="0" />
      </linearGradient>
      {/* Grid specific fading gradient */}
      <linearGradient id="grid-fade-ecosystem" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e11d48" stopOpacity="0.2" />
        <stop offset="1" stopColor="#e11d48" stopOpacity="0" />
      </linearGradient>
    </defs>
  );

  return (
    <div className="w-full h-16 md:h-24 relative bg-transparent flex items-center justify-center overflow-hidden -my-8 md:-my-12 z-10 pointer-events-none">
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <GradientDef />

        {/* 1. Smooth Wave */}
        {variant === "smooth" && (
          <>
            <path d="M0 48C360 80 1080 16 1440 48" stroke="url(#wave-grad-ecosystem)" strokeWidth="2" className="drop-shadow-[0_0_6px_rgba(244,63,94,0.3)]" />
            <path d="M0 48C360 80 1080 16 1440 48" fill="url(#wave-glow-ecosystem)" opacity="0.3" transform="translate(0, 4)" />
          </>
        )}

        {/* 2. Dashed Neon Wave */}
        {variant === "dashed" && (
          <path d="M0 64C480 -32 960 -32 1440 64" stroke="url(#wave-grad-ecosystem)" strokeWidth="2.5" strokeDasharray="6 8" className="drop-shadow-[0_0_4px_rgba(244,63,94,0.4)]" />
        )}

        {/* 3. Particle Wave (Sine wave with scattered dots) */}
        {variant === "particles" && (
          <>
            <path d="M0 48C240 96 480 0 720 48C960 96 1200 0 1440 48" stroke="url(#wave-grad-ecosystem)" strokeWidth="0.8" strokeDasharray="1 10" strokeLinecap="round" className="drop-shadow-[0_0_3px_rgba(244,63,94,0.3)]" />
            <path d="M0 40C240 88 480 -8 720 40C960 88 1200 -8 1440 40" stroke="url(#wave-grad-ecosystem)" strokeWidth="2" strokeDasharray="2 15" strokeLinecap="round" opacity="0.4" className="drop-shadow-[0_0_4px_rgba(244,63,94,0.4)]" />
            <path d="M0 56C240 104 480 8 720 56C960 104 1200 8 1440 56" stroke="url(#wave-grad-ecosystem)" strokeWidth="1" strokeDasharray="1 20" strokeLinecap="round" opacity="0.2" />
          </>
        )}

        {/* 4. Grid Wave */}
        {variant === "grid" && (
          <>
            {/* Vertical grid lines dropping down */}
            <g opacity="0.4">
              {[...Array(40)].map((_, i) => {
                const y1 = 48 + Math.sin((i / 40) * Math.PI) * 24;
                return (
                  <line key={i} x1={i * 36.9} y1={y1} x2={i * 36.9} y2="120" stroke="url(#grid-fade-ecosystem)" strokeWidth="1" />
                );
              })}
            </g>
            {/* Base line */}
            <path d="M0 48C480 96 960 96 1440 48" stroke="url(#wave-grad-ecosystem)" strokeWidth="1.5" className="drop-shadow-[0_0_4px_rgba(244,63,94,0.3)]" />
          </>
        )}

        {/* 5. Liquid Wave (Overlapping fluid strokes) */}
        {variant === "liquid" && (
          <>
            <path d="M0 48C360 8 1080 88 1440 48" stroke="url(#wave-grad-ecosystem)" strokeWidth="3" className="drop-shadow-[0_0_6px_rgba(244,63,94,0.3)]" />
            <path d="M0 52C400 12 1040 92 1440 52" stroke="url(#wave-grad-ecosystem)" strokeWidth="2" opacity="0.4" />
            <path d="M0 44C320 4 1120 84 1440 44" stroke="url(#wave-grad-ecosystem)" strokeWidth="1" opacity="0.2" />
            <path d="M0 60C450 20 990 100 1440 60" stroke="url(#wave-grad-ecosystem)" strokeWidth="0.5" opacity="0.1" />
          </>
        )}
      </svg>
    </div>
  );
}
