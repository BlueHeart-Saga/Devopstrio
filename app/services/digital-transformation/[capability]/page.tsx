import React, { use } from "react";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { getServiceByCategory, getCapability } from "@/data/services";
import { getHeroBgImage } from "@/lib/services-utils";
import { Hero } from "@/components/services/Hero";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { CapabilityOverview } from "@/sections/services/capability/CapabilityOverview";
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/Schemas";

// Dynamic Imports for Heavy Below-The-Fold Sections to Reduce Initial JS Payload
const CapabilityProblem = dynamic(() => import("@/sections/services/capability/CapabilityProblem").then((mod) => mod.CapabilityProblem));
const CapabilityUseCases = dynamic(() => import("@/sections/services/capability/CapabilityUseCases").then((mod) => mod.CapabilityUseCases));
const CapabilityOutcomes = dynamic(() => import("@/sections/services/capability/CapabilityOutcomes").then((mod) => mod.CapabilityOutcomes));
const CapabilityArchitecture = dynamic(() => import("@/sections/services/capability/CapabilityArchitecture").then((mod) => mod.CapabilityArchitecture));
// const TechnologyStack = dynamic(() => import("@/components/services/TechnologyStack").then((mod) => mod.TechnologyStack));
const CapabilityBenefits = dynamic(() => import("@/sections/services/capability/CapabilityBenefits").then((mod) => mod.CapabilityBenefits));
const CapabilityIndustries = dynamic(() => import("@/sections/services/capability/CapabilityIndustries").then((mod) => mod.CapabilityIndustries));
const FAQ = dynamic(() => import("@/components/services/FAQ").then((mod) => mod.FAQ));
const CTA = dynamic(() => import("@/components/services/CTA").then((mod) => mod.CTA));
const RelatedServices = dynamic(() => import("@/components/services/RelatedServices").then((mod) => mod.RelatedServices));

interface PageProps {
  params: Promise<{ capability: string }>;
}

function getOverviewImage(serviceSlug: string): string {
  const serviceImgMap: Record<string, string> = {
    "ai-data-innovation": "/webp/assets/services/bg-ai.webp",
    "cloud-services": "/webp/assets/services/bg-cloud.webp",
    "devops-automation": "/webp/assets/services/bg-devops.webp",
    "cybersecurity": "/webp/assets/services/bg-cybersecurity.webp",
    "software-development": "/webp/assets/services/bg-software.webp",
    "digital-transformation": "/webp/assets/services/bg-transformation.webp",
    "data-engineering": "/webp/assets/services/bg-data.webp",
    "managed-services": "/webp/assets/services/bg-managed.webp",
    "qa-testing": "/webp/assets/services/bg-testing.webp",
    "it-consulting": "/webp/assets/services/bg-consulting.webp",
  };
  return serviceImgMap[serviceSlug] || "/webp/assets/services/bg-ai.webp";
}

export async function generateMetadata({ params }: PageProps) {
  const { capability } = await params;
  const service = "digital-transformation";
  const data = getCapability(service, capability);
  if (!data) return {};

  return {
    title: `${data.title} | Devopstrio`,
    description: data.heroSubtitle,
    openGraph: {
      title: `${data.title} | Devopstrio`,
      description: data.heroSubtitle
    },
    alternates: {
      canonical: `/services/${service}/${capability}`
    }
  };
}

export default function CapabilityPage({ params }: PageProps) {
  const { capability } = use(params);
  const service = "digital-transformation";
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
    { id: "business-problem", label: "Challenge" },
    { id: "solutions-outcomes", label: "Solutions & Outcomes" },
    { id: "use-cases", label: "Use Cases" },
    { id: "architecture", label: "Architecture" },
    // { id: "tech-stack", label: "Technology" },
    { id: "benefits", label: "Benefits" },
    { id: "industries", label: "Industries" },
    { id: "faq", label: "FAQ" },
    { id: "related-services", label: "Related Services" }
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "Services", item: "/services" },
        { name: serviceData.title, item: `/services/${service}` },
        { name: data.title, item: `/services/${service}/${capability}` }
      ]} />
      <ServiceSchema name={data.title} description={data.heroSubtitle} offers={data.benefits} />
      {data.faqs && <FAQSchema faqs={data.faqs} />}

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

      {/* Business Problem Section */}
      <CapabilityProblem 
        serviceSlug={service} 
        capabilityTitle={data.title} 
      />

      {/* 4. Solutions, Benefits & Outcomes Section */}
      <CapabilityOutcomes
        serviceSlug={service}
        capabilityTitle={data.title}
      />

      {/* 3. Use Cases (Key Deliverables) Section */}
      <CapabilityUseCases 
        serviceSlug={service}
        capabilityTitle={data.title}
      />

      {/* 5. Architecture Section */}
      <CapabilityArchitecture 
        serviceSlug={service}
        capabilityTitle={data.title}
      />

      {/* 6. Technology Stack Section */}
      {/* <div id="tech-stack">
        <TechnologyStack techs={data.techStack} />
      </div> */}

      {/* 7. Benefits Section */}
      <CapabilityBenefits benefits={data.benefits} />

      {/* 8. Industries Section */}
      <CapabilityIndustries industries={serviceData.industries} />

      {/* 10. Related Services Section */}
      <RelatedServices currentServiceSlug={service} />
      
      {/* 9. FAQ Section */}
      <FAQ faqs={data.faqs} />

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


export async function generateStaticParams() {
  const service = "digital-transformation";
  const serviceData = getServiceByCategory(service);
  if (!serviceData) return [];
  return serviceData.capabilities.map((cap) => ({
    capability: cap.slug
  }));
}

