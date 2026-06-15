import React from "react";
import { notFound } from "next/navigation";
import { getServiceByCategory, getCapability } from "@/data/services";
import { getHeroBgImage, getArchitectureSteps } from "@/lib/services-utils";
import { Hero } from "@/components/services/Hero";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { CapabilityOverview } from "@/sections/services/capability/CapabilityOverview";
import { CapabilityUseCases } from "@/sections/services/capability/CapabilityUseCases";
import { CapabilityOutcomes } from "@/sections/services/capability/CapabilityOutcomes";
import { CapabilityArchitecture } from "@/sections/services/capability/CapabilityArchitecture";
import { TechnologyStack } from "@/components/services/TechnologyStack";
import { CapabilityBenefits } from "@/sections/services/capability/CapabilityBenefits";
import { CapabilityIndustries } from "@/sections/services/capability/CapabilityIndustries";
import { FAQ } from "@/components/services/FAQ";
import { CTA } from "@/components/services/CTA";
import { RelatedServices } from "@/components/services/RelatedServices";

interface PageProps {
  params: Promise<{ service: string; capability: string }>;
}

function getOverviewImage(serviceSlug: string): string {
  const serviceImgMap: Record<string, string> = {
    "ai-data-innovation": "/assets/services/bg-ai.png",
    "cloud-services": "/assets/services/bg-cloud.png",
    "devops-automation": "/assets/services/bg-devops.png",
    "cybersecurity": "/assets/services/bg-cybersecurity.png",
    "software-development": "/assets/services/bg-software.png",
    "digital-transformation": "/assets/services/bg-transformation.png",
    "data-engineering": "/assets/services/bg-data.png",
    "managed-services": "/assets/services/bg-managed.png",
    "qa-testing": "/assets/services/bg-testing.png",
    "it-consulting": "/assets/services/bg-consulting.png",
  };
  return serviceImgMap[serviceSlug] || "/assets/services/bg-ai.png";
}

export async function generateMetadata({ params }: PageProps) {
  const { service, capability } = await params;
  const data = getCapability(service, capability);
  if (!data) return {};

  return {
    title: `${data.title} | Devopstrio`,
    description: data.heroSubtitle,
    openGraph: {
      title: `${data.title} | Devopstrio`,
      description: data.heroSubtitle
    }
  };
}

export default async function CapabilityPage({ params }: PageProps) {
  const { service, capability } = await params;
  const serviceData = getServiceByCategory(service);
  const data = getCapability(service, capability);

  if (!data || !serviceData) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: serviceData.title, href: `/services/${service}` },
    { label: data.title }
  ];

  const subSections = [
    { id: "overview", label: "Overview" },
    { id: "use-cases", label: "Use Cases" },
    { id: "solutions-outcomes", label: "Solutions & Outcomes" },
    { id: "architecture", label: "Architecture" },
    { id: "tech-stack", label: "Technology" },
    { id: "benefits", label: "Benefits" },
    { id: "industries", label: "Industries" },
    { id: "faq", label: "FAQ" },
    { id: "related-services", label: "Related Services" }
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans">

      {/* 1. Hero Block */}
      <Hero
        badge={serviceData.title}
        title={data.title}
        subtitle={data.heroSubtitle}
        breadcrumbs={breadcrumbs}
        bgImage={getHeroBgImage(service, capability)}
      />

      {/* Sticky Navigation Sub-Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 2. Overview Section */}
      <CapabilityOverview 
        title={data.title} 
        subtitle={data.heroSubtitle} 
        image={getOverviewImage(service)} 
      />

      {/* 3. Use Cases (Key Deliverables) Section */}
      <CapabilityUseCases features={data.features} />

      {/* 4. Solutions, Benefits & Outcomes Section */}
      <CapabilityOutcomes
        solution={data.solution}
        deliveryApproach={data.deliveryApproach}
        challenge={data.challenge}
        benefits={data.benefits}
      />

      {/* 5. Architecture Section */}
      <CapabilityArchitecture steps={getArchitectureSteps(service, data.title)} />

      {/* 6. Technology Stack Section */}
      <div id="tech-stack">
        <TechnologyStack techs={data.techStack} />
      </div>

      {/* 7. Benefits Section */}
      <CapabilityBenefits benefits={data.benefits} />

      {/* 8. Industries Section */}
      <CapabilityIndustries industries={serviceData.industries} />

      {/* 9. FAQ Section */}
      <FAQ faqs={data.faqs} />

      {/* 10. Related Services Section */}
      <RelatedServices currentServiceSlug={service} />

      {/* 11. CTA Section */}
      <CTA
        ctaTitle="Co-create your capability"
        ctaHighlight="Deployment plan"
        ctaDesc={`Book a detailed technical session with our principal systems engineers to deploy ${data.title.toLowerCase()}.`}
        ctaBtnText="Consult Capability Lead"
        backLink={`/services/${service}`}
      />

    </main>
  );
}
