"use client";

import React from "react";
import { ServicesHero } from "@/sections/services/ServicesHero";
import { CategoriesGrid } from "@/sections/services/CategoriesGrid";
import { CoreServices } from "@/sections/home/CoreServices";
import { DetailedServices } from "@/sections/services/DetailedServices";
import { LifecycleSection } from "@/sections/services/LifecycleSection";
import { IndustriesSection } from "@/sections/home/IndustriesSection";
import { WhyDevopstrio } from "@/sections/home/WhyDevOpsTrio";
import { TechStackSection } from "@/sections/services/TechStackSection";
import { CaseStudyHighlight } from "@/sections/services/CaseStudyHighlight";
import { EngagementModels } from "@/sections/services/EngagementModels";
import { FaqSection } from "@/sections/services/FaqSection";
import { ServicesCTA } from "@/sections/services/ServicesCTA";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { Reveal } from "@/components/ui/Reveal";

const servicesSections = [
  { id: "categories", label: "Categories" },
  { id: "capabilities", label: "Capabilities" },
  // { id: "detailed-services", label: "Services Explorer" },
  { id: "delivery-framework", label: "Framework" },
  { id: "industries", label: "Industries" },
  { id: "why-devopstrio", label: "Why Us" },
  { id: "technology-ecosystem", label: "Tech Ecosystem" },
  { id: "client-impact", label: "Client Impact" },
  { id: "engagement-models", label: "Engagement Models" },
  { id: "faq", label: "FAQ" }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      
      {/* Cinematic Hero Title Header */}
      {/* <section className="pt-16 pb-4 md:pb-8 text-center relative bg-[#030303]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.05),transparent_50%)] pointer-events-none" />
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4 text-white">
            Services <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Devopstrio</span>
          </h1>
          <p className="text-zinc-400 font-medium max-w-xl mx-auto">
            From cognitive AI pipelines and global cloud orchestration to zero-trust compliance frameworks.
          </p>
        </Reveal>
      </section> */}

      {/* Structured Services Sections with High-Level Coded SVG Wave Lines */}
      <div className="flex flex-col bg-black">
        <ServicesHero />
      </div>

      {/* Sticky Section Sub-Navbar */}
      <SectionNavbar sections={servicesSections} />
      <SvgWaveLine variant="smooth" />

      {/* 2. Service Categories Grid */}
      <div id="categories">
        <CategoriesGrid />
      </div>
      {/* <SvgWaveLine variant="dashed" /> */}

      {/* 3. Core Capabilities Slider */}
      <div id="capabilities">
        <CoreServices />
      </div>
      {/* <SvgWaveLine variant="particles" /> */}

      {/* 4. Detailed Services Explorer */}
      {/* <div id="detailed-services">
        <DetailedServices />
      </div> */}
      <SvgWaveLine variant="grid" />

      {/* 5. Delivery Framework (Lifecycle) */}
      <div id="delivery-framework">
        <LifecycleSection />
      </div>
      <SvgWaveLine variant="liquid" />

      {/* 6. Industries Served */}
      <div id="industries">
        <IndustriesSection />
      </div>
      <SvgWaveLine variant="smooth" />

      {/* 7. Why Devopstrio (Stats & Tabs) */}
      <div id="why-devopstrio">
        <WhyDevopstrio />
      </div>
      {/* <SvgWaveLine variant="dashed" /> */}

      {/* 8. Technology Ecosystem (Tech Stack) */}
      <div id="technology-ecosystem">
        <TechStackSection />
      </div>
      {/* <SvgWaveLine variant="particles" /> */}

      {/* 9. Client Impact Case Study */}
      <div id="client-impact">
        <CaseStudyHighlight />
      </div>
      <SvgWaveLine variant="grid" />

      {/* 10. Engagement Models */}
      <div id="engagement-models">
        <EngagementModels />
      </div>
      <SvgWaveLine variant="liquid" />

      {/* 11. FAQ Accordions */}
      <div id="faq">
        <FaqSection />
      </div>
      <SvgWaveLine variant="smooth" />

      {/* 12. Final CTA Section */}
      <ServicesCTA />

    </main>
  );
}

// Pure SVG Code Wave Divider components (High-Level Designs matching the About and Contact Page)
function SvgWaveLine({ variant }: { variant: "smooth" | "dashed" | "particles" | "grid" | "liquid" }) {
  const GradientDef = () => (
    <defs>
      <linearGradient id="wave-grad-services" x1="0" y1="24" x2="1440" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e11d48" stopOpacity="0" />
        <stop offset="0.2" stopColor="#be123c" stopOpacity="0.6" />
        <stop offset="0.5" stopColor="#f43f5e" stopOpacity="0.8" />
        <stop offset="0.8" stopColor="#be123c" stopOpacity="0.6" />
        <stop offset="1" stopColor="#e11d48" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="wave-glow-services" x1="0" y1="24" x2="1440" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e11d48" stopOpacity="0" />
        <stop offset="0.5" stopColor="#f43f5e" stopOpacity="0.1" />
        <stop offset="1" stopColor="#e11d48" stopOpacity="0" />
      </linearGradient>
      {/* Grid specific fading gradient */}
      <linearGradient id="grid-fade-services" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
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
            <path d="M0 48C360 80 1080 16 1440 48" stroke="url(#wave-grad-services)" strokeWidth="2" className="drop-shadow-[0_0_6px_rgba(244,63,94,0.3)]" />
            <path d="M0 48C360 80 1080 16 1440 48" fill="url(#wave-glow-services)" opacity="0.3" transform="translate(0, 4)" />
          </>
        )}

        {/* 2. Dashed Neon Wave */}
        {variant === "dashed" && (
          <path d="M0 64C480 -32 960 -32 1440 64" stroke="url(#wave-grad-services)" strokeWidth="2.5" strokeDasharray="6 8" className="drop-shadow-[0_0_4px_rgba(244,63,94,0.4)]" />
        )}

        {/* 3. Particle Wave (Sine wave with scattered dots) */}
        {variant === "particles" && (
          <>
            <path d="M0 48C240 96 480 0 720 48C960 96 1200 0 1440 48" stroke="url(#wave-grad-services)" strokeWidth="0.8" strokeDasharray="1 10" strokeLinecap="round" className="drop-shadow-[0_0_3px_rgba(244,63,94,0.3)]" />
            <path d="M0 40C240 88 480 -8 720 40C960 88 1200 -8 1440 40" stroke="url(#wave-grad-services)" strokeWidth="2" strokeDasharray="2 15" strokeLinecap="round" opacity="0.4" className="drop-shadow-[0_0_4px_rgba(244,63,94,0.4)]" />
            <path d="M0 56C240 104 480 8 720 56C960 104 1200 8 1440 56" stroke="url(#wave-grad-services)" strokeWidth="1" strokeDasharray="1 20" strokeLinecap="round" opacity="0.2" />
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
                  <line key={i} x1={i * 36.9} y1={y1} x2={i * 36.9} y2="120" stroke="url(#grid-fade-services)" strokeWidth="1" />
                );
              })}
            </g>
            {/* Base line */}
            <path d="M0 48C480 96 960 96 1440 48" stroke="url(#wave-grad-services)" strokeWidth="1.5" className="drop-shadow-[0_0_4px_rgba(244,63,94,0.3)]" />
          </>
        )}

        {/* 5. Liquid Wave (Overlapping fluid strokes) */}
        {variant === "liquid" && (
          <>
            <path d="M0 48C360 8 1080 88 1440 48" stroke="url(#wave-grad-services)" strokeWidth="3" className="drop-shadow-[0_0_6px_rgba(244,63,94,0.3)]" />
            <path d="M0 52C400 12 1040 92 1440 52" stroke="url(#wave-grad-services)" strokeWidth="2" opacity="0.4" />
            <path d="M0 44C320 4 1120 84 1440 44" stroke="url(#wave-grad-services)" strokeWidth="1" opacity="0.2" />
            <path d="M0 60C450 20 990 100 1440 60" stroke="url(#wave-grad-services)" strokeWidth="0.5" opacity="0.1" />
          </>
        )}
      </svg>
    </div>
  );
}
