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
  title: "Client Testimonials & Success Center | Devopstrio",
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

import { FAQ } from "@/components/services/FAQ";
import { ReviewSchema, FAQSchema } from "@/components/seo/Schemas";

const testimonialFaqs = [
  {
    q: "How does Devopstrio measure and verify client success metrics?",
    a: "We establish clear baseline telemetry before every engagement. Outcomes such as 30–50% FinOps cost reduction, 3× deployment velocity, and 99.99% uptime are tracked continuously in Grafana dashboards and audited quarterly.",
    proof: "✓ 2,500+ Projects Delivered · 98% Verified Client CSAT"
  },
  {
    q: "Can prospective enterprise clients request reference calls?",
    a: "Yes. For qualified enterprise scoping reviews, we arrange peer-to-peer reference conversations with active CTOs, CISOs, and VP Engineers who partner with Devopstrio across banking, healthcare, and retail verticals.",
    proof: "✓ Peer-to-Peer Enterprise Reference Connections"
  },
  {
    q: "What industries are represented in Devopstrio's client portfolio?",
    a: "Our client success references span Banking & Institutional Finance, Healthcare & Life Sciences, Retail & E-Commerce, Smart Manufacturing, Media & Entertainment, Government, and Telecom networks.",
    tags: ["Banking & Finance", "Healthcare & HIPAA", "E-Commerce", "Gov-Tech"]
  }
];

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
      <ReviewSchema />
      <FAQSchema faqs={testimonialFaqs} />

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
      <IndustriesTrust />

      {/* 8. Testimonials FAQs */}
      <FAQ faqs={testimonialFaqs} title="Client Success" highlight="FAQs" />

      {/* 9. Global CTA Component */}
      <TestimonialsCTA />
    </main>
  );
}
