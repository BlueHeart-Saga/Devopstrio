import React from "react";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

// Life-at-Devopstrio sections
import { CultureHero } from "@/sections/about/life/CultureHero";
import { LifeHero } from "@/sections/about/life/LifeHero";
import CultureAlbumsSection from "@/sections/about/life/CultureAlbumsSection";
import { LifeMomentsGallery } from "@/sections/about/life/LifeMomentsGallery";
import { EmployeeStoriesSection } from "@/sections/about/life/EmployeeStoriesSection";
import { AwardsRecognition } from "@/sections/about/life/AwardsRecognition";
import { LifeFinalCTA } from "@/sections/about/life/LifeFinalCTA";

export const metadata: Metadata = {
  title: "Our Culture & People | Life at Devopstrio",
  description:
    "Discover what it's like to work at Devopstrio — a culture of innovation, ownership, continuous learning, and global collaboration in AI, Cloud, and DevOps.",
  alternates: {
    canonical: "https://devopstrio.co.uk/about/our-culture-people",
  },
  openGraph: {
    title: "Our Culture & People | Life at Devopstrio",
    description:
      "Join a world-class team building AI, Cloud, and DevOps solutions. Explore our culture, career paths, benefits, and open positions.",
    type: "website",
  },
};

import { FAQ } from "@/components/services/FAQ";
import { FAQSchema } from "@/components/seo/Schemas";

const cultureFaqs = [
  {
    q: "What defines Devopstrio's engineering culture and work environment?",
    a: "Our culture is built on continuous learning, peer code reviews, transparent governance, and blameless post-mortems. Engineers have autonomy to experiment with emerging technologies, conduct R&D hackathons, and deploy production systems with extreme ownership.",
    proof: "✓ Blameless Post-Mortems · 100% Peer Code Audits"
  },
  {
    q: "What learning and career development opportunities are provided?",
    a: "Every team member receives annual certification allowances for AWS, Azure, GCP, and Kubernetes accreditations, direct 1-on-1 mentorship from principal architects, and access to internal tech guilds.",
    tags: ["Certification Allowances", "Architect Mentorship", "Internal Tech Guilds"]
  },
  {
    q: "How does Devopstrio support flexible and remote working standards?",
    a: "We offer flexible hybrid and remote working models, structured follow-the-sun collaboration tools, ergonomic home-office setup stipends, and comprehensive wellness programs.",
    tags: ["Flexible Hybrid / Remote", "Ergonomic Stipends", "Wellness Support"]
  },
  {
    q: "How does Devopstrio foster diversity and inclusion across global hubs?",
    a: "We actively champion equal opportunities, inclusive hiring pipelines, and multicultural initiatives across our regional hubs in the UK, USA, and India.",
    proof: "✓ Multicultural Global Workforce Across UK, USA & India"
  }
];

export default function LifeAtDevopstrioPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "About Us", item: "/about/company-overview" },
          { name: "Our Culture & People", item: "/about/our-culture-people" },
        ]}
      />
      <FAQSchema faqs={cultureFaqs} />

      {/* 1. Hero */}
      <CultureHero />
      <LifeHero />

      {/* 3. Life Moments Gallery */}
      <LifeMomentsGallery />

      {/* 4. Culture Album PDF Banner */}
      <CultureAlbumsSection />

      {/* 5. Employee Stories */}
      <EmployeeStoriesSection />

      {/* 6. Awards & Recognition */}
      <AwardsRecognition />

      {/* 7. Culture FAQs */}
      <FAQ faqs={cultureFaqs} title="Culture & People" highlight="FAQs" />

      {/* 8. Final CTA */}
      <LifeFinalCTA />
    </main>
  );
}
