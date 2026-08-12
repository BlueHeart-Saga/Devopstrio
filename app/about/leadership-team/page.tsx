import React from "react";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { SectionNavbar } from "@/components/ui/SectionNavbar";

import { LeadershipHero } from "@/sections/about/leadership/LeadershipHero";
import { LeadershipPrinciples } from "@/sections/about/leadership/LeadershipPrinciples";
import { Leadership3Pillars } from "@/sections/about/leadership/Leadership3Pillars";
import { ExecutiveLeadership } from "@/sections/about/leadership/ExecutiveLeadership";
import { PrincipalArchitects } from "@/sections/about/leadership/PrincipalArchitects";
import { GlobalEngineeringTeams } from "@/sections/about/leadership/GlobalEngineeringTeams";
import { LeadershipDeliver } from "@/sections/about/leadership/LeadershipDeliver";
import { GlobalPresence } from "@/sections/about/leadership/GlobalPresence";
import { AwardsRecognitionLeadership } from "@/sections/about/leadership/AwardsRecognitionLeadership";
import { LeadershipCareersCTA } from "@/sections/about/leadership/LeadershipCareersCTA";

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
      <LeadershipPrinciples />

      {/* 3. 3 Strategic Pillars (Inspire, Empower, Deliver) */}
      <Leadership3Pillars />

      {/* 4. PILLAR 01: INSPIRE — Executive Leadership & Senior Team */}
      <ExecutiveLeadership />

      {/* Optional: Principal Architects & Specialists */}
      {/* <PrincipalArchitects /> */}

      {/* 5. PILLAR 02: EMPOWER — Global Engineering Teams (525+ Specialists) */}
      <GlobalEngineeringTeams />

      {/* 6. PILLAR 03: DELIVER — Leaders Who Deliver. Solutions That Matter. */}
      <LeadershipDeliver />

      {/* Optional: Global Presence (Worldwide Locations) */}
      {/* <GlobalPresence /> */}

      {/* 7. Awards, Accreditations & Certifications */}
      <AwardsRecognitionLeadership />

      {/* 8. Our Culture & People + Careers CTA */}
      <LeadershipCareersCTA />
    </main>
  );
}


