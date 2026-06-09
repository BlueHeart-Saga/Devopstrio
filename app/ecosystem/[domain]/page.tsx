import React from "react";
import { notFound } from "next/navigation";
import { getEcosystemDomain } from "@/data/ecosystem";
import { Hero } from "@/components/ecosystem/Hero";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { Overview } from "@/components/ecosystem/Overview";
import { PartnerGrid } from "@/components/ecosystem/PartnerGrid";
import { BenefitCards } from "@/components/services/BenefitCards";
import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";

interface PageProps {
  params: Promise<{ domain: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { domain } = await params;
  const data = getEcosystemDomain(domain);
  if (!data) return {};

  return {
    title: `${data.title} | Devopstrio`,
    description: data.subtitle,
    openGraph: {
      title: `${data.title} | Devopstrio`,
      description: data.subtitle
    }
  };
}

export default async function EcosystemDomainPage({ params }: PageProps) {
  const { domain } = await params;
  const data = getEcosystemDomain(domain);

  if (!data) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: data.title }
  ];

  const subSections = [
    { id: "overview", label: "Overview" },
    { id: "ecosystem-pillars", label: "Ecosystem Pillars" },
    { id: "outcomes", label: "Benefits" },
    { id: "faq", label: "FAQ" },
    { id: "engage", label: "Engage" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16">
      {/* 1. Hero Block */}
      <Hero
        badge={data.badge}
        title={data.title}
        subtitle={data.subtitle}
        stats={data.stats}
        breadcrumbs={breadcrumbs}
      />

      {/* 2. Subsections Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 3. Overview */}
      <Overview
        heading={data.overviewHeading}
        desc1={data.overviewDesc1}
        desc2={data.overviewDesc2}
      />

      {/* 4. Subpages Grid (PartnerGrid) */}
      <PartnerGrid domainSlug={data.slug} subpages={data.subpages} />

      {/* 5. Benefits */}
      <BenefitCards title="Ecosystem benefits" benefits={data.benefits} />

      {/* 6. FAQ */}
      <FAQ faqs={data.faqs} />

      {/* 7. CTA */}
      <CTA
        ctaTitle={data.ctaTitle}
        ctaHighlight={data.ctaHighlight}
        ctaDesc={data.ctaDesc}
        ctaBtnText={data.ctaBtnText}
      />
    </main>
  );
}
