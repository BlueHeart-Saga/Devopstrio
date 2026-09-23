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

import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";

export async function generateMetadata({ params }: PageProps) {
  const { capability } = await params;
  const service = "managed-services";
  const data = getCapability(service, capability);
  if (!data) return {};

  const seo = getMetadataFromPath(`/services/${service}/${capability}`);
  const title = seo.title !== data.title ? seo.title : `${data.title} Managed Services | Devopstrio`;
  return generatePageMetadata({
    title,
    description: seo.description || data.heroSubtitle,
    path: `/services/${service}/${capability}`,
    keywords: seo.keywords
  });
}

export default function CapabilityPage({ params }: PageProps) {
  const { capability } = use(params);
  const service = "managed-services";
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

  const isInfra = capability === "infrastructure-management";
  const isCloud = capability === "managed-cloud" || capability === "cloud-managed-services";

  const overrides = isInfra ? {
    overviewHeading: (
      <span>
        Streamlining Success with <span className="text-rose-500 font-semibold">Infrastructure Management Services UK</span>
      </span>
    ),
    overviewParagraph1: undefined,
    overviewParagraph2: undefined,
    
    deepDiveHeading: (
      <span>
        What Is <span className="text-rose-500 font-semibold">Infrastructure Management Services</span>?
      </span>
    ),
    deepDiveParagraph1: "Infrastructure management services combine hands-on engineering with day-to-day operations to simplify your systems, remove technical roadblocks, and roll out reliable, production-ready setups. Through secure, automated environments, our IT infrastructure management UK team keeps your digital platforms running smoothly. Learn more in our company overview.",
    deepDiveParagraph2: undefined,
    
    problemTitle: undefined,
    problemFullTitle: (
      <span>
        Fixing <span className="text-rose-500 font-semibold">Visibility Gaps &amp; Sluggish Response</span>
      </span>
    ),
    problemSubtitle: undefined,
    problemPoints: [
      "Slow, reactive fixes caused by missing real-time monitoring and alerting tools.",
      "Lengthy resolution times (MTTR) causing avoidable downtime across critical systems.",
      "Unreliable backups and untested failover processes leaving your data at risk."
    ],
    
    outcomesTitle: (
      <span>
        Reliable <span className="text-rose-500 font-semibold">Infrastructure Management Services UK</span>
      </span>
    ),
    outcomesDesc: undefined,
    
    useCasesTitle: undefined,
    useCasesSubtitle: undefined,
    
    architectureTitle: undefined,
    architectureSubtitle: undefined,
    architectureTopologyTitle: undefined,

    benefitsTitle: (
      <span>
        Real Results &amp; <span className="text-rose-500 font-semibold">Technical Advantages</span>
      </span>
    ),
    benefitsSubtitle: undefined,
    benefitsItems: [
      "Faster release cycles, with up to 45% quicker turnaround times.",
      "Complete system visibility, backed by live incident detection alerts.",
      "Thoroughly audited infrastructure, built to SOC-2 and compliance standards."
    ],
    faqTitle: "Technical",
    faqHighlight: "Insights"
  } : isCloud ? {
    overviewHeading: (
      <span>
        Reshaping the way you work with <span className="text-rose-500 font-semibold">Managed Cloud Services UK</span>
      </span>
    ),
    overviewParagraph1: undefined,
    overviewParagraph2: undefined,
    
    deepDiveHeading: (
      <span>
        What is <span className="text-rose-500 font-semibold">Managed Cloud Services</span>?
      </span>
    ),
    deepDiveParagraph1: "Managed cloud services are about bringing your computing, storage, and networking together in one reliable, virtual setup. It gives growing businesses the room to scale workloads as needed, keep sensitive data inside private, secure environments, and move away from costly physical servers toward flexible, pay-as-you-go cloud infrastructure. Take a look at our DevOps automation pipelines built to keep your cloud running efficiently.",
    deepDiveParagraph2: undefined,
    
    problemTitle: undefined,
    problemFullTitle: (
      <span>
        Solving The <span className="text-rose-500 font-semibold">Blind Spots That Slow You Down</span>
      </span>
    ),
    problemSubtitle: undefined,
    problemPoints: [
      "Waiting for things to break instead of catching them early, with no proper monitoring in place.",
      "Slow issue resolution that keeps your systems down longer than they need to be.",
      "Backups and failover checks that aren't consistent, leaving your data at risk."
    ],
    
    outcomesTitle: (
      <span>
        Trusted <span className="text-rose-500 font-semibold">Managed Cloud Services UK</span>
      </span>
    ),
    outcomesDesc: undefined,
    
    useCasesTitle: undefined,
    useCasesSubtitle: undefined,
    
    architectureTitle: undefined,
    architectureSubtitle: undefined,
    architectureTopologyTitle: undefined,

    benefitsTitle: (
      <span>
        Real Results &amp; <span className="text-rose-500 font-semibold">What You Actually Get</span>
      </span>
    ),
    benefitsSubtitle: undefined,
    benefitsItems: [
      "Stay ahead of security gaps before they become a problem",
      "Reliable recovery you can count on if something goes down",
      "Smaller cloud bills, thanks to right-sized infrastructure"
    ],
    faqTitle: "Technical",
    faqHighlight: "Insights"
  } : null;

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
        overrideHeading={overrides?.overviewHeading}
        overrideParagraph1={overrides?.overviewParagraph1}
        overrideParagraph2={overrides?.overviewParagraph2}
        overrideDeepDiveHeading={overrides?.deepDiveHeading}
        overrideDeepDiveParagraph1={overrides?.deepDiveParagraph1}
        overrideDeepDiveParagraph2={overrides?.deepDiveParagraph2}
      />

      {/* Business Problem Section */}
      <CapabilityProblem 
        serviceSlug={service} 
        capabilityTitle={data.title} 
        overrideTitle={overrides?.problemTitle}
        overrideFullTitle={overrides?.problemFullTitle}
        overrideSubtitle={overrides?.problemSubtitle}
        overridePoints={overrides?.problemPoints}
      />

      {/* 4. Solutions, Benefits & Outcomes Section */}
      <CapabilityOutcomes
        serviceSlug={service}
        capabilityTitle={data.title}
        overrideTitle={overrides?.outcomesTitle}
        overrideDesc={overrides?.outcomesDesc}
      />

      {/* 3. Use Cases (Key Deliverables) Section */}
      <CapabilityUseCases 
        serviceSlug={service}
        capabilityTitle={data.title}
        overrideTitle={overrides?.useCasesTitle}
        overrideSubtitle={overrides?.useCasesSubtitle}
      />

      {/* 5. Architecture Section */}
      <CapabilityArchitecture 
        serviceSlug={service}
        capabilityTitle={data.title}
        overrideTitle={overrides?.architectureTitle}
        overrideSubtitle={overrides?.architectureSubtitle}
        overrideTopologyTitle={overrides?.architectureTopologyTitle}
      />

      {/* 6. Technology Stack Section */}
      {/* <div id="tech-stack">
        <TechnologyStack techs={data.techStack} />
      </div> */}

      {/* 7. Benefits Section */}
      <CapabilityBenefits 
        benefits={overrides?.benefitsItems || data.benefits} 
        overrideTitle={overrides?.benefitsTitle}
        overrideSubtitle={overrides?.benefitsSubtitle}
      />

      {/* 8. Industries Section */}
      <CapabilityIndustries industries={serviceData.industries} />

      {/* 10. Related Services Section */}
      <RelatedServices currentServiceSlug={service} />
      
      {/* 9. FAQ Section */}
      <FAQ faqs={data.faqs} title={overrides?.faqTitle} highlight={overrides?.faqHighlight} />

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
  const service = "managed-services";
  const serviceData = getServiceByCategory(service);
  if (!serviceData) return [];
  return serviceData.capabilities.map((cap) => ({
    capability: cap.slug
  }));
}

