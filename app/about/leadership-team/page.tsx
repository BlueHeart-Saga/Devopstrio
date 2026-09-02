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
  title: "Leadership & Executive Team | Devopstrio",
  description:
    "Meet the executive leaders, principal architects, and 525+ technology specialists driving AI, Cloud, DevOps, and Digital Transformation at Devopstrio.",
  alternates: {
    canonical: "https://devopstrio.co.uk/about/leadership-team",
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

import { FAQ } from "@/components/services/FAQ";
import { FAQSchema } from "@/components/seo/Schemas";

const leadershipFaqs = [
  {
    q: "Who leads Devopstrio's technical and executive organization?",
    a: "Devopstrio is led by principal technology directors, cloud enterprise architects, and executive officers with decades of experience guiding multi-cloud deployments, SRE practices, and AI innovations for Global 2000 enterprises.",
    proof: "✓ Principal-Led Advisory & Hands-on Architecture"
  },
  {
    q: "What certifications are held by Devopstrio's technical leadership?",
    a: "Our directors and principal architects hold top-tier certifications including AWS Certified Solutions Architect Professional, Azure Solutions Architect Expert, Google Cloud Professional Cloud Architect, and CKS/CKA Kubernetes certifications.",
    tags: ["AWS Certified Pro", "Azure Solutions Expert", "GCP Professional Architect", "CKA / CKS"]
  },
  {
    q: "How does Devopstrio's leadership structure support global enterprise clients?",
    a: "Our leadership team manages over 525+ technical specialists across 4 global locations (UK, USA, and India delivery centers), offering direct executive sponsorship and 24/7 follow-the-sun account governance.",
    proof: "✓ 525+ Technical Specialists · Executive Account Sponsorship"
  },
  {
    q: "What engineering philosophy guides Devopstrio's leadership?",
    a: "We believe in technical rigor, zero-downtime architecture, transparent client collaboration, and building high-trust engineering cultures focused on measurable enterprise ROI.",
    tags: ["Zero-Downtime Culture", "Technical Rigor", "Transparent Governance"]
  }
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
      <FAQSchema faqs={leadershipFaqs} />

      {/* 1. Vision & Story Hero */}
      <LeadershipHero />

      <LeadershipDeliver />

      {/* 2. 8 Timeless Leadership Principles */}
      <LeadershipPrinciples />

      {/* 3. 3 Strategic Pillars */}
      <Leadership3Pillars />

      {/* 4. PILLAR 01: INSPIRE — Executive Leadership & Senior Team */}
      <ExecutiveLeadership />

      {/* Principal Architects & Specialists */}
      <PrincipalArchitects />

      {/* 5. PILLAR 02: EMPOWER — Global Engineering Teams */}
      <GlobalEngineeringTeams />

      {/* 6. PILLAR 03: DELIVER — Leaders Who Deliver */}
      <LeadershipImpactDeliver />

      {/* Global Presence */}
      <GlobalPresence />

      {/* 7. Awards & Certifications */}
      <AwardsRecognitionLeadership />

      {/* 8. Leadership FAQs */}
      <FAQ faqs={leadershipFaqs} title="Leadership & Team" highlight="FAQs" />

      {/* 9. Our Culture & People + Careers CTA */}
      <LeadershipCareersCTA />
    </main>
  );
}


