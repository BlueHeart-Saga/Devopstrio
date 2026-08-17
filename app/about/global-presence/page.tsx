"use client";

import React from "react";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { SectionNavbar } from "@/components/ui/SectionNavbar";

// Import Section Components
import { PresenceHero } from "@/sections/about/global-presence/PresenceHero";
import { StoryIntro } from "@/sections/about/global-presence/StoryIntro";
import { BrandStory } from "@/sections/about/global-presence/BrandStory";
import { EngineeringStory } from "@/sections/about/global-presence/EngineeringStory";
import { InteractiveMap } from "@/sections/about/global-presence/InteractiveMap";
import { HubSpotlight } from "@/sections/about/global-presence/HubSpotlight";
import { DeliveryModel } from "@/sections/about/global-presence/DeliveryModel";
import { BusinessBenefits } from "@/sections/about/global-presence/BusinessBenefits";
import { GlobalMetrics } from "@/sections/about/global-presence/GlobalMetrics";
import { GlobalCTA } from "@/sections/about/global-presence/GlobalCTA";

// Section Navbar Items
const globalPresenceSections = [
  { id: "hero", label: "Overview" },
  { id: "story", label: "Our Story" },
  { id: "brand-story", label: "Grounded in Purpose" },
  { id: "engineering-story", label: "Engineering Impact" },
  { id: "map", label: "Worldwide Map" },
  { id: "hubs", label: "Inside Our Hubs" },
  { id: "delivery", label: "Delivery Model" },
  { id: "benefits", label: "Why It Matters" },
  { id: "numbers", label: "Metrics" },
];

const locations = [
  {
    name: "London",
    country: "UK",
    region: "Europe",
    type: "Global HQ / Client Experience Centre",
    role: "Connecting Global Expertise. Supporting Innovation. Delivering Excellence.",
    employees: "200+",
    top: 27.68,
    left: 46.9,
    tag: "HQ"
  },
  {
    name: "Tennessee",
    country: "USA",
    region: "North America",
    type: "North America Operations",
    role: "Regional client support, collaboration coverage, and operational continuity for US-based engagements.",
    employees: "50+",
    top: 37.5,
    left: 23.5,
    tag: "Support"
  },
  {
    name: "Bengaluru",
    country: "India",
    region: "India",
    type: "Corporate Office",
    role: "Leading Strategy. Accelerating Technology. Enabling Global Growth.",
    employees: "150+",
    top: 51.1,
    left: 68.35,
    tag: "Corporate"
  },
  {
    name: "Chennai",
    country: "India",
    region: "India",
    type: "Technology & Operations Center",
    role: "Managed cloud operations, DevSecOps, infrastructure monitoring, and security-aligned delivery.",
    employees: "75+",
    top: 50.9,
    left: 69.1,
    tag: "Ops"
  },
  {
    name: "Thoothukudi",
    country: "India",
    region: "India",
    type: "Innovation Hub",
    role: "Empowering Talent. Accelerating Innovation. Creating Global Impact.",
    employees: "150+",
    top: 52.99,
    left: 68.53,
    tag: "Innovation"
  },
];

const filters = ["All", "India", "Europe", "North America"];

export default function GlobalPresencePage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans relative">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "About Us", item: "/about/company-overview" },
        { name: "Global Presence", item: "/about/global-presence" }
      ]} />

      {/* Glow Ambient background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_70%)] pointer-events-none" />

      {/* 1. Hero Section */}
      <div id="hero">
        <PresenceHero />
      </div>

      {/* Section Navbar */}
      {/* <SectionNavbar sections={globalPresenceSections} /> */}

      {/* Divider */}
      {/* <SvgWaveLine variant="smooth" /> */}

      {/* 2. Global Story Intro */}
      <div id="story">
        <StoryIntro />
      </div>

      {/* Divider */}
      {/* <SvgWaveLine variant="dashed" /> */}

      {/* Brand Story (Zoho-style) */}
      <div id="brand-story">
        <BrandStory />
      </div>

      {/* Divider */}
      {/* <SvgWaveLine variant="particles" /> */}

      {/* Engineering Story */}
      {/* <div id="engineering-story">
        <EngineeringStory />
      </div> */}

      {/* Divider */}
      <SvgWaveLine variant="liquid" />

      {/* 3. Interactive World Map */}
      <div id="map">
        <InteractiveMap locations={locations} filters={filters} />
      </div>

      {/* Divider */}
      <SvgWaveLine variant="smooth" />

      {/* 4. Location Spotlight Grid */}
      <div id="hubs">
        <HubSpotlight locations={locations} />
      </div>

      {/* Divider */}
      <SvgWaveLine variant="liquid" />

      {/* 5. How Our Global Delivery Model Works */}
      <div id="delivery">
        <DeliveryModel />
      </div>

      {/* Divider */}
      {/* <SvgWaveLine variant="smooth" /> */}

      {/* 6. Why It Matters to Clients */}
      {/* <div id="benefits">
        <BusinessBenefits />
      </div> */}

      {/* Divider */}
      {/* <SvgWaveLine variant="liquid" /> */}

      {/* 7. Global Operations by the Numbers */}
      {/* <div id="numbers">
        <GlobalMetrics />
      </div> */}

      {/* Divider */}
      <SvgWaveLine variant="smooth" />

      {/* 8. Connect With a Regional Team (CTA) */}
      <GlobalCTA />
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
