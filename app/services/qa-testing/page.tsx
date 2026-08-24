import React from "react";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { getServiceByCategory, servicesData } from "@/data/services";
import { getHeroBgImage } from "@/lib/services-utils";
import { Hero } from "@/components/services/Hero";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { ServiceOverview } from "@/sections/services/category/ServiceOverview";
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/Schemas";

// Dynamic Imports for Heavy Below-The-Fold Sections to Reduce Initial JS Payload
const CapabilityGrid = dynamic(() => import("@/components/services/CapabilityGrid").then((mod) => mod.CapabilityGrid));
const Challenges = dynamic(() => import("@/components/services/Challenges").then((mod) => mod.Challenges));
const TimelineProcess = dynamic(() => import("@/components/services/TimelineProcess").then((mod) => mod.TimelineProcess));
const TechnologyStack = dynamic(() => import("@/components/services/TechnologyStack").then((mod) => mod.TechnologyStack));
const IndustryCards = dynamic(() => import("@/components/services/IndustryCards").then((mod) => mod.IndustryCards));
const WhyDevopstrio = dynamic(() => import("@/sections/home/WhyDevOpsTrio").then((mod) => mod.WhyDevopstrio));
const ServiceMetrics = dynamic(() => import("@/sections/services/category/ServiceMetrics").then((mod) => mod.ServiceMetrics));
const ServiceRelated = dynamic(() => import("@/sections/services/category/ServiceRelated").then((mod) => mod.ServiceRelated));
const FAQ = dynamic(() => import("@/components/services/FAQ").then((mod) => mod.FAQ));
const CTA = dynamic(() => import("@/components/services/CTA").then((mod) => mod.CTA));

export async function generateMetadata() {
  const service = "qa-testing";
  const data = getServiceByCategory(service);
  if (!data) return {};

  return {
    title: `${data.title} | Devopstrio`,
    description: data.subtitle,
    openGraph: {
      title: `${data.title} | Devopstrio`,
      description: data.subtitle
    },
    alternates: {
      canonical: `/services/${service}`
    }
  };
}

export default async function ServiceCategoryPage() {
  const service = "qa-testing";
  const data = getServiceByCategory(service);

  if (!data) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: data.title }
  ];

  // Defined navbar anchors in matching display sequence
  const subSections = [
    { id: "overview", label: "Overview" },
    { id: "capabilities", label: "Capabilities" },
    { id: "challenges", label: "Challenges" },
    { id: "process", label: "Process" },
    { id: "technology", label: "Technology" },
    { id: "industries", label: "Industries" },
    { id: "why-devopstrio", label: "Why Us" },
    { id: "metrics", label: "Metrics" },
    { id: "related-services", label: "Related Services" },
    { id: "faq", label: "FAQ" }
  ];

  // Query up to 3 related services (excluding active slug)
  const allServices = Object.values(servicesData);
  const relatedServices = allServices
    .filter((s) => s.slug !== data.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "Services", item: "/services" },
        { name: data.title, item: `/services/${service}` }
      ]} />
      <ServiceSchema name={data.title} description={data.subtitle} offers={data.capabilities.map(c => c.title)} />
      {data.faqs && <FAQSchema faqs={data.faqs} />}

      {/* 1. Hero Block (pass stats as undefined since they have their own section now) */}
      <Hero
        badge={data.badge}
        title={data.title}
        subtitle={data.subtitle}
        stats={undefined}
        breadcrumbs={breadcrumbs}
        bgImage={getHeroBgImage(service)}
      />

      {/* Sticky Navigation Sub-Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 2. Overview Paragraphs */}
      <ServiceOverview
        title={data.title}
        subtitle={data.subtitle}
        image={getHeroBgImage(service)}
        overviewHeading={data.overviewHeading}
        overviewDesc1={data.overviewDesc1}
        overviewDesc2={data.overviewDesc2}
      />

      {/* 3. Capabilities Grid */}
      <CapabilityGrid serviceSlug={data.slug} capabilities={data.capabilities} />

      {/* 4. Challenges & Solutions Tabbed Panel */}
      <Challenges serviceSlug={data.slug} capabilities={data.capabilities} />

      {/* 5. Delivery Framework (Process) */}
      <TimelineProcess serviceSlug={data.slug} steps={data.deliveryFramework} />

      {/* 6. Technology Stack */}
      <div id="technology">
        <TechnologyStack techs={data.techStack} />
      </div>

      {/* 7. Industries Served */}
      <div id="industries">
        <IndustryCards industries={data.industries} />
      </div>

      {/* 8. Why Devopstrio Showcase */}
      <div id="why-devopstrio">
        <WhyDevopstrio />
      </div>

      {/* 9. Metrics Section */}
      <ServiceMetrics stats={data.stats || []} />

      {/* 10. Related Services Section */}
      <ServiceRelated relatedServices={relatedServices} />

      {/* 11. FAQ Accordions */}
      <FAQ faqs={data.faqs} />

      {/* 12. CTA Engage */}
      <CTA
        ctaTitle={data.ctaTitle}
        ctaHighlight={data.ctaHighlight}
        ctaDesc={data.ctaDesc}
        ctaBtnText={data.ctaBtnText}
      />
    </main>
  );
}
