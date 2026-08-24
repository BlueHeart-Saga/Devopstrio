import React from "react";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

import { TestimonialsHero } from "@/sections/about/testimonials/TestimonialsHero";
import { FeaturedSuccess } from "@/sections/about/testimonials/FeaturedSuccess";
import { ClientTestimonials } from "@/sections/about/testimonials/ClientTestimonials";
import { ImpactMetrics } from "@/sections/about/testimonials/ImpactMetrics";
import { SuccessByService } from "@/sections/about/testimonials/SuccessByService";
import { CaseStudyHighlights } from "@/sections/about/testimonials/CaseStudyHighlights";
import { IndustriesTrust } from "@/sections/about/testimonials/IndustriesTrust";
import { TestimonialsCTA } from "@/sections/about/testimonials/TestimonialsCTA";

export const metadata: Metadata = {
  title: "Testimonials & Success Center | Devopstrio — Enterprise Cloud, AI & DevOps",
  description:
    "See how enterprises partner with Devopstrio to achieve 40% cloud cost reductions, 3× faster deployments, and 99.95% platform availability. Real outcomes, real impact.",
  alternates: {
    canonical: "/about/testimonials",
  },
  openGraph: {
    title: "Testimonials & Success Center | Devopstrio",
    description:
      "2500+ projects delivered. 98% client satisfaction. Discover how Devopstrio drives measurable business outcomes across cloud, AI, DevOps, and cybersecurity.",
    type: "website",
  },
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "About Us", item: "/about/company-overview" },
          { name: "Testimonials & Success", item: "/about/testimonials" },
        ]}
      />

      {/* 1. Hero */}
      <TestimonialsHero />

      {/* 2. Featured Client Success */}
      <FeaturedSuccess />

      {/* 3. Client Testimonials */}
      <ClientTestimonials />

      {/* 4. Impact Metrics */}
      <ImpactMetrics />

      {/* 5. Success by Service Area */}
      <SuccessByService />

      {/* 6. Case Study Highlights */}
      <CaseStudyHighlights />

      {/* 7. Industries & Trust Signals */}
      {/* <IndustriesTrust /> */}

      {/* 8. Global CTA Component */}
      <TestimonialsCTA />
    </main>
  );
}
