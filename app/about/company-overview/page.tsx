import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { SectionNavbar } from "@/components/ui/SectionNavbar";

export const metadata: Metadata = {
  title: "Company Overview & Enterprise Profile | Devopstrio",
  description: "Learn about Devopstrio's company overview, engineering team, core pillars, and global operations delivering enterprise cloud and AI solutions.",
  alternates: {
    canonical: "https://devopstrio.co.uk/about/company-overview",
  },
};

// Import Section Components
import { OverviewHero } from "@/sections/about/overview/OverviewHero";

// Dynamic Imports for Heavy Below-The-Fold Sections to Reduce Initial JS Payload
const CompanyOverviewPillars = dynamic(() => import("@/sections/about/overview/CompanyOverviewPillars").then((mod) => mod.CompanyOverviewPillars));
const CompanyOverviewSection = dynamic(() => import("@/sections/about/overview/CompanyOverviewSection").then((mod) => mod.CompanyOverviewSection));
const WhoWeAreWhatWeDoSection = dynamic(() => import("@/sections/about/overview/WhoWeAreWhatWeDoSection").then((mod) => mod.WhoWeAreWhatWeDoSection));
const OurPeopleSection = dynamic(() => import("@/sections/about/overview/OurPeopleSection").then((mod) => mod.OurPeopleSection));
const MissionVisionValues = dynamic(() => import("@/sections/about/overview/MissionVisionValues").then((mod) => mod.MissionVisionValues));
const OurFutureSection = dynamic(() => import("@/sections/about/overview/OurFutureSection").then((mod) => mod.OurFutureSection));
const EnterpriseCTA = dynamic(() => import("@/sections/about/overview/EnterpriseCTA").then((mod) => mod.EnterpriseCTA));

const overviewSections = [
  { id: "hero", label: "Overview" },
  { id: "people", label: "Our People" },
  { id: "values", label: "Our Values" },
  { id: "future", label: "Our Future" },
];

import { FAQ } from "@/components/services/FAQ";
import { FAQSchema } from "@/components/seo/Schemas";

const overviewFaqs = [
  {
    q: "What is Devopstrio's core business and enterprise mission?",
    a: "Devopstrio Limited is a principal-led technology services and cloud engineering firm based in London, UK. Our mission is to eliminate software failure and accelerate enterprise growth by architecting resilient multi-cloud infrastructures, automated CI/CD pipelines, Zero-Trust security networks, and production-grade Generative AI solutions.",
    proof: "✓ Registered in England & Wales · Global Delivery Infrastructure"
  },
  {
    q: "Where is Devopstrio headquartered and what regions do you serve?",
    a: "Devopstrio is headquartered at 128 City Road, London, EC1V 2NX, United Kingdom. We operate global delivery centers across the UK, USA, Europe, and India, delivering 24/7 follow-the-sun engineering support and managed SRE services for multinational enterprises.",
    tags: ["London UK HQ", "Follow-the-Sun Delivery", "24/7 Global SRE"]
  },
  {
    q: "What cloud and technology platforms does Devopstrio specialize in?",
    a: "We hold certified partner accreditations across Microsoft Azure, Amazon Web Services (AWS), Google Cloud Platform (GCP), Cisco Zero-Trust Networking, SAP HANA Cloud Modernization, Oracle Cloud Infrastructure (OCI), and ServiceNow enterprise integrations.",
    tags: ["AWS Advanced Partner", "Azure Solutions Partner", "Google Cloud Premier"]
  },
  {
    q: "How does Devopstrio ensure 99.99% uptime for enterprise operations?",
    a: "We embed Site Reliability Engineering (SRE) practices, automated self-healing Kubernetes clusters, IaC vulnerability scanning, and multi-region active-active database replication. For managed services, we guarantee sub-15-minute response times for P1 incidents backed by formal SLAs.",
    proof: "✓ 99.99% SLA Uptime Guarantee · <15 min P1 Response"
  },
  {
    q: "What security compliance standards does Devopstrio adhere to?",
    a: "All Devopstrio engineering practices, delivery pipelines, and cloud landing zones strictly comply with SOC-2 Type II, ISO 27001, Cyber Essentials Plus, HIPAA, PCI-DSS, and GDPR data privacy standards.",
    proof: "✓ ISO 27001 · SOC-2 Type II · Cyber Essentials Certified"
  }
];

export default function CompanyOverviewPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "About Us", item: "/about/company-overview" },
        { name: "Company Overview", item: "/about/company-overview" }
      ]} />
      <FAQSchema faqs={overviewFaqs} />
      
      {/* Glow Ambient background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_70%)] pointer-events-none" />

      {/* 1. Overview Section */}
      <div id="hero">
        <OverviewHero />
      </div>

      {/* Section Navbar */}
      <SectionNavbar sections={overviewSections} />

      {/* Overview Content */}
      <CompanyOverviewPillars />
      <CompanyOverviewSection />

      {/* 2. Our People Section */}
      <div id="people">
        <OurPeopleSection />
      </div>

      {/* 3. Our Values Section */}
      <div id="values">
        <MissionVisionValues />
      </div>

      {/* 4. Our Future Section */}
      <div id="future">
        <OurFutureSection />
      </div>

      {/* 5. Company Overview FAQ */}
      <FAQ faqs={overviewFaqs} title="Company Overview" highlight="FAQs" />

      {/* 6. Enterprise Call to Action */}
      <EnterpriseCTA />
    </main>
  );
}

// Pure SVG Code Wave Divider components (High-Level Designs)
function SvgWaveLine({ variant }: { variant: "smooth" | "dashed" | "particles" | "grid" | "liquid" }) {
  const GradientDef = () => (
    <defs>
      <linearGradient id="wave-grad" x1="0" y1="24" x2="1440" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e11d48" stopOpacity="0" />
        <stop offset="0.2" stopColor="#be123c" stopOpacity="0.6" />
        <stop offset="0.5" stopColor="#f43f5e" stopOpacity="0.8" />
        <stop offset="0.8" stopColor="#be123c" stopOpacity="0.6" />
        <stop offset="1" stopColor="#e11d48" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="wave-glow" x1="0" y1="24" x2="1440" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e11d48" stopOpacity="0" />
        <stop offset="0.5" stopColor="#f43f5e" stopOpacity="0.1" />
        <stop offset="1" stopColor="#e11d48" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="grid-fade" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
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

        {variant === "smooth" && (
          <>
            <path d="M0 48C360 80 1080 16 1440 48" stroke="url(#wave-grad)" strokeWidth="2" className="drop-shadow-[0_0_6px_rgba(244,63,94,0.3)]" />
            <path d="M0 48C360 80 1080 16 1440 48" fill="url(#wave-glow)" opacity="0.3" transform="translate(0, 4)" />
          </>
        )}

        {variant === "dashed" && (
          <path d="M0 64C480 -32 960 -32 1440 64" stroke="url(#wave-grad)" strokeWidth="2.5" strokeDasharray="6 8" className="drop-shadow-[0_0_4px_rgba(244,63,94,0.4)]" />
        )}

        {variant === "particles" && (
          <>
            <path d="M0 48C240 96 480 0 720 48C960 96 1200 0 1440 48" stroke="url(#wave-grad)" strokeWidth="0.8" strokeDasharray="1 10" strokeLinecap="round" className="drop-shadow-[0_0_3px_rgba(244,63,94,0.3)]" />
            <path d="M0 40C240 88 480 -8 720 40C960 88 1200 -8 1440 40" stroke="url(#wave-grad)" strokeWidth="2" strokeDasharray="2 15" strokeLinecap="round" opacity="0.4" className="drop-shadow-[0_0_4px_rgba(244,63,94,0.4)]" />
            <path d="M0 56C240 104 480 8 720 56C960 104 1200 8 1440 56" stroke="url(#wave-grad)" strokeWidth="1" strokeDasharray="1 20" strokeLinecap="round" opacity="0.2" />
          </>
        )}

        {variant === "grid" && (
          <>
            <g opacity="0.4">
              {[...Array(40)].map((_, i) => {
                const y1 = 48 + Math.sin((i / 40) * Math.PI) * 24;
                return (
                  <line key={i} x1={i * 36.9} y1={y1} x2={i * 36.9} y2="120" stroke="url(#grid-fade)" strokeWidth="1" />
                );
              })}
            </g>
            <path d="M0 48C480 96 960 96 1440 48" stroke="url(#wave-grad)" strokeWidth="1.5" className="drop-shadow-[0_0_4px_rgba(244,63,94,0.3)]" />
          </>
        )}

        {variant === "liquid" && (
          <>
            <path d="M0 48C360 8 1080 88 1440 48" stroke="url(#wave-grad)" strokeWidth="3" className="drop-shadow-[0_0_6px_rgba(244,63,94,0.3)]" />
            <path d="M0 52C400 12 1040 92 1440 52" stroke="url(#wave-grad)" strokeWidth="2" opacity="0.4" />
            <path d="M0 44C320 4 1120 84 1440 44" stroke="url(#wave-grad)" strokeWidth="1" opacity="0.2" />
            <path d="M0 60C450 20 990 100 1440 60" stroke="url(#wave-grad)" strokeWidth="0.5" opacity="0.1" />
          </>
        )}
      </svg>
    </div>
  );
}
