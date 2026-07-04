"use client";

import React from "react";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { SectionNavbar } from "@/components/ui/SectionNavbar";

// Import Section Components
import { PartnershipsHero } from "@/sections/about/partnerships-certifications/PartnershipsHero";
import { WhyPartnershipsMatter } from "@/sections/about/partnerships-certifications/WhyPartnershipsMatter";
import { StrategicPartnerships } from "@/sections/about/partnerships-certifications/StrategicPartnerships";
import { AllBusinessPartners } from "@/sections/about/partnerships-certifications/AllBusinessPartners";
import { AllTechPartners } from "@/sections/about/partnerships-certifications/AllTechPartners";
import { AllCertifications } from "@/sections/about/partnerships-certifications/AllCertifications";
import { CertificationsAssurance } from "@/sections/about/partnerships-certifications/CertificationsAssurance";
import { ClientBenefits } from "@/sections/about/partnerships-certifications/ClientBenefits";
import { OperatingModel } from "@/sections/about/partnerships-certifications/OperatingModel";
import { TrustStatement } from "@/sections/about/partnerships-certifications/TrustStatement";
import { PartnershipsCTA } from "@/sections/about/partnerships-certifications/PartnershipsCTA";

const partnershipsSections = [
  { id: "hero", label: "Overview" },
  { id: "why-partnerships", label: "Why It Matters" },
  { id: "strategic-partners", label: "Strategic Partners" },
  { id: "certifications", label: "Delivery Readiness" },
  { id: "client-benefits", label: "Client Value" },
  { id: "operating-model", label: "Delivery Principles" },
];

export default function PartnershipsCertificationsPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <title>Partnerships & Certifications | Devopstrio</title>
      <meta name="description" content="Our industry certifications and co-engineering alliances with AWS, Microsoft Azure, Google Cloud, and Oracle." />
      
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "About Us", item: "/about/company-overview" },
        { name: "Partnerships & Certifications", item: "/about/partnerships-certifications" }
      ]} />
      
      {/* Glow Ambient background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_70%)] pointer-events-none" />

      {/* 1. Hero */}
      <div id="hero">
        <PartnershipsHero />
      </div>

      {/* Section Navbar */}
      <SectionNavbar sections={partnershipsSections} />

      {/* Divider */}
      <SvgWaveLine variant="smooth" />

      {/* 2. Why Partnerships Matter */}
      <div id="why-partnerships">
        <WhyPartnershipsMatter />
      </div>

      {/* Divider */}
      <SvgWaveLine variant="liquid" />

      {/* 3. Strategic Technology Partnerships */}
      <div id="strategic-partners">
        <StrategicPartnerships />
      </div>

      <div id="all-business-partners">
        <AllBusinessPartners />
      </div>

      <div id="all-tech-partners">
        <AllTechPartners />
      </div>

      <div id="all-certifications">
        <AllCertifications />
      </div>

      {/* Divider */}
      {/* <SvgWaveLine variant="dashed" /> */}

      {/* 4. Certifications, Standards, and Delivery Readiness */}
      <div id="certifications">
        <CertificationsAssurance />
      </div>

      {/* Divider */}
      {/* <SvgWaveLine variant="particles" /> */}

      {/* 5. What This Means for Our Clients */}
      <div id="client-benefits">
        <ClientBenefits />
      </div>

      {/* Divider */}
      <SvgWaveLine variant="liquid" />

      {/* 6. The Operating Principles Behind Our Delivery */}
      <div id="operating-model">
        <OperatingModel />
      </div>

      {/* Divider */}
      <SvgWaveLine variant="grid" />

      {/* 7. Trust Statement */}
      <TrustStatement />

      {/* Divider */}
      <SvgWaveLine variant="smooth" />

      {/* 8. Final CTA */}
      <PartnershipsCTA />
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
