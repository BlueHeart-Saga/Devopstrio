import React from "react";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

import { LeadershipHero } from "@/sections/about/leadership/LeadershipHero";
import { ExecutiveLeadership } from "@/sections/about/leadership/ExecutiveLeadership";
import { AdvisoryBoard } from "@/sections/about/leadership/AdvisoryBoard";
import { PrincipalArchitects } from "@/sections/about/leadership/PrincipalArchitects";
import { GlobalEngineeringTeams } from "@/sections/about/leadership/GlobalEngineeringTeams";
import { LeadershipPrinciples } from "@/sections/about/leadership/LeadershipPrinciples";
import { TechnologyExpertise } from "@/sections/about/leadership/TechnologyExpertise";
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

export default function LeadershipTeamPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden">
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "About Us", item: "/about/company-overview" },
          { name: "Leadership & Team", item: "/about/leadership-team" },
        ]}
      />

      {/* 1. Hero */}
      <LeadershipHero />

      {/* 2. Executive Leadership */}
      <ExecutiveLeadership />

      {/* 3. Advisory Board */}
      <AdvisoryBoard />

      {/* 4. Principal Architects */}
      <PrincipalArchitects />

      {/* 5. Global Engineering Teams */}
      <GlobalEngineeringTeams />

      {/* 6. Leadership Principles */}
      <LeadershipPrinciples />

      {/* 7. Technology Expertise */}
      <TechnologyExpertise />

      {/* 8. Global Presence */}
      <GlobalPresence />

      {/* 9. Awards & Recognition */}
      <AwardsRecognitionLeadership />

      {/* 10. Life at Devopstrio + Careers CTA */}
      <LeadershipCareersCTA />
    </main>
  );
}
