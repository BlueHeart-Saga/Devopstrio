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
    canonical: "/about/our-culture-people",
  },
  openGraph: {
    title: "Our Culture & People | Life at Devopstrio",
    description:
      "Join a world-class team building AI, Cloud, and DevOps solutions. Explore our culture, career paths, benefits, and open positions.",
    type: "website",
  },
};

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

      {/* 1. Hero */}
      <CultureHero />
      <LifeHero />

     

      {/* 3. Life Moments Gallery */}
      <LifeMomentsGallery />


       {/* 4. Culture Album PDF Banner & Flipbook Reader Section */}
      <CultureAlbumsSection />

      {/* 5. Employee Stories */}
      <EmployeeStoriesSection />

      {/* 6. Awards & Recognition */}
      <AwardsRecognition />

      {/* 6. Final CTA */}
      <LifeFinalCTA />
    </main>
  );
}
