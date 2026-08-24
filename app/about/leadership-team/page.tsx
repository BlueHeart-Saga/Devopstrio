import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { SectionNavbar } from "@/components/ui/SectionNavbar";

import { LeadershipHero } from "@/sections/about/leadership/LeadershipHero";

// Dynamic Imports for Heavy Below-The-Fold Sections to Reduce Initial JS Payload
const LeadershipPrinciples = dynamic(() => import("@/sections/about/leadership/LeadershipPrinciples").then((mod) => mod.LeadershipPrinciples));
const Leadership3Pillars = dynamic(() => import("@/sections/about/leadership/Leadership3Pillars").then((mod) => mod.Leadership3Pillars));
const ExecutiveLeadership = dynamic(() => import("@/sections/about/leadership/ExecutiveLeadership").then((mod) => mod.ExecutiveLeadership));
const PrincipalArchitects = dynamic(() => import("@/sections/about/leadership/PrincipalArchitects").then((mod) => mod.PrincipalArchitects));
const GlobalEngineeringTeams = dynamic(() => import("@/sections/about/leadership/GlobalEngineeringTeams").then((mod) => mod.GlobalEngineeringTeams));
const LeadershipDeliver = dynamic(() => import("@/sections/about/leadership/LeadershipDeliver").then((mod) => mod.LeadershipDeliver));
const LeadershipImpactDeliver = dynamic(() => import("@/sections/about/leadership/LeadershipImpactDeliver").then((mod) => mod.LeadershipImpactDeliver));
const GlobalPresence = dynamic(() => import("@/sections/about/leadership/GlobalPresence").then((mod) => mod.GlobalPresence));
const AwardsRecognitionLeadership = dynamic(() => import("@/sections/about/leadership/AwardsRecognitionLeadership").then((mod) => mod.AwardsRecognitionLeadership));
const LeadershipCareersCTA = dynamic(() => import("@/sections/about/leadership/LeadershipCareersCTA").then((mod) => mod.LeadershipCareersCTA));

export const metadata: Metadata = {
  title: "Leadership & Team | Devopstrio — Engineering Excellence Worldwide",
  description:
    "Meet the executive leaders, principal architects, and 525+ technology specialists driving AI, Cloud, DevOps, and Digital Transformation at Devopstrio.",
  alternates: {
    canonical: "/about/leadership-team",
  },
  openGraph: {
    title: "Leadership & Team | Devopstrio",
    description:
      "525+ technology experts, principal architects, and executive leaders across 4 global locations. Discover the team behind Devopstrio's engineering excellence.",
    type: "website",
  },
};

const leadershipSections = [
  { id: "hero", label: "Vision & Story" },
  { id: "principles", label: "Leadership Principles" },
  { id: "pillars", label: "Strategic Pillars" },
  { id: "executive-leadership", label: "Inspire: Executive Leaders" },
  { id: "global-teams", label: "Empower: Global Engineering" },
  { id: "leadership-deliver", label: "Deliver: Solutions & Impact" },
  { id: "awards", label: "Certifications & Awards" },
];

export default function LeadershipTeamPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "About Us", item: "/about/company-overview" },
          { name: "Leadership & Team", item: "/about/leadership-team" },
        ]}
      />

      {/* 1. Vision & Story Hero (Sticky 5-Chapter Scroll Sequence) */}
      <LeadershipHero />

      {/* Section Sticky Navigator */}
      {/* <SectionNavbar sections={leadershipSections} /> */}

      {/* 2. 8 Timeless Leadership Principles (Editorial Deck) */}
      {/* <LeadershipPrinciples /> */}


       <LeadershipDeliver />

      {/* 3. 3 Strategic Pillars (Inspire, Empower, Deliver) */}
      <Leadership3Pillars />

      {/* 4. PILLAR 01: INSPIRE — Executive Leadership & Senior Team */}
      <ExecutiveLeadership />

      {/* Optional: Principal Architects & Specialists */}
      {/* <PrincipalArchitects /> */}

      {/* 5. PILLAR 02: EMPOWER — Global Engineering Teams (525+ Specialists) */}
      {/* <GlobalEngineeringTeams /> */}

      {/* 6. PILLAR 03: DELIVER — Leaders Who Deliver. Solutions That Matter. */}
      <LeadershipImpactDeliver />
     

      {/* Optional: Global Presence (Worldwide Locations) */}
      {/* <GlobalPresence /> */}

      {/* 7. Awards, Accreditations & Certifications */}
      {/* <AwardsRecognitionLeadership /> */}

      {/* 8. Our Culture & People + Careers CTA */}
      <LeadershipCareersCTA />
    </main>
  );
}


