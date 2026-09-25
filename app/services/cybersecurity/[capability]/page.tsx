import React, { use } from "react";
import Link from "next/link";
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
  const service = "cybersecurity";
  const data = getCapability(service, capability);
  if (!data) return {};

  const seo = getMetadataFromPath(`/services/${service}/${capability}`);
  const title = data.metaTitle || (seo.title !== data.title ? seo.title : `${data.title} Cybersecurity | Devopstrio`);
  const description = data.metaDescription || seo.description || data.heroSubtitle;

  return generatePageMetadata({
    title,
    description,
    path: `/services/${service}/${capability}`,
    keywords: seo.keywords
  });
}

export default function CapabilityPage({ params }: PageProps) {
  const { capability } = use(params);
  const service = "cybersecurity";
  const serviceData = getServiceByCategory(service);
  const data = getCapability(service, capability);

  if (!data || !serviceData) {
    notFound();
  }

  const isSecAssessment = capability === "security-assessment";
  const isVulnMgmt = capability === "vulnerability-management";

  const overrides = isSecAssessment ? {
    overviewHeading: "Securing Your Business with Security Assessment Services uk",
    overviewParagraph1: "Security assessment services help identify weaknesses in your systems, networks, and user access before they lead to security threats or data breaches.",
    overviewParagraph2: (
      <span>
        Our approach includes vulnerability checks, access reviews, and compliance support for standards such as SOC-2, ISO-27001, and HIPAA. Explore our{" "}
        <Link href="/services/cybersecurity" className="text-rose-500 hover:underline font-bold">
          managed security operations
        </Link>{" "}
        for 24/7 security coverage.
      </span>
    ),
    
    deepDiveHeading: "What are Security Assessment Services?",
    deepDiveParagraph1: (
      <span>
        Security assessment services help identify weaknesses in your systems, networks, and user access before they lead to security threats or data breaches. Our approach includes vulnerability checks, access reviews, and compliance support for standards such as SOC-2, ISO-27001, and HIPAA. Explore our{" "}
        <Link href="/services/cybersecurity" className="text-rose-500 hover:underline font-bold">
          managed security operations
        </Link>{" "}
        for 24/7 security coverage.
      </span>
    ),
    
    problemTitle: "Managing Security & Compliance Risks",
    problemSubtitle: "Hidden vulnerabilities and excessive permissions create major security and regulatory exposure.",
    problemPoints: [
      "Hidden vulnerabilities can reach production without proper security assessment or validation.",
      "Security assessments can uncover GDPR, HIPAA compliance gaps before they create regulatory risks.",
      "UK security assessment services can identify excessive access privileges and reduce the risk of unauthorised data exposure."
    ],
    
    outcomesTitle: "Enterprise Security Assessment Services",
    outcomesDesc: "We provide comprehensive security assessment services across UK businesses, identifying hidden vulnerabilities and removing excessive access permissions.",
    
    useCasesTitle: "How Security Assessments Help UK Businesses",
    useCasesSubtitle: "Discover how UK organisations use structured security assessments to evaluate digital assets, enforce compliance, and protect customer trust.",
    
    architectureTitle: "Security Assessment Approach",
    architectureSubtitle: "Our structured security assessment framework combines network penetration testing, IAM role analysis, and automated compliance auditing.",
    
    benefitsTitle: "Key Outcomes of Security Assessment Services",
    benefitsSubtitle: "Discovery of hidden security vulnerabilities, removal of excessive database permissions, and detailed security assessment findings for engineering teams."
  } : isVulnMgmt ? {
    overviewHeading: "Transforming operations with Vulnerability Management Services UK",
    overviewParagraph1: "Vulnerability Management is the systematic identification, assessment, and remediation of weaknesses across digital assets, network boundaries, applications, and user identities.",
    overviewParagraph2: (
      <span>
        It helps organisations maintain a stronger security posture through regular vulnerability assessments, risk-based remediation, access controls, and alignment with security and compliance requirements.
      </span>
    ),
    
    deepDiveHeading: "Transforming operations with Vulnerability Management Services UK",
    deepDiveParagraph1: (
      <span>
        Vulnerability Management is the systematic identification, assessment, and remediation of weaknesses across digital assets, network boundaries, applications, and user identities. It helps organisations maintain a stronger security posture through regular vulnerability assessments, risk-based remediation, access controls, and alignment with security and compliance requirements.
      </span>
    ),
    
    problemTitle: "Solving Vulnerable Assets & Compliance Risks",
    problemSubtitle: "Unchecked software vulnerabilities and unmanaged access rights exposing enterprise infrastructure to severe threat exploitation.",
    problemPoints: [
      "Undetected vulnerabilities reaching production without proper assessment or remediation.",
      "Unresolved security weaknesses creating compliance risks across GDPR, HIPAA, or FSQS requirements.",
      "Unmanaged vulnerabilities and access controls increasing the risk of privilege escalation and internal data exposure."
    ],
    
    outcomesTitle: "Enterprise-Ready Vulnerability Management",
    outcomesDesc: "We provide comprehensive vulnerability management services in UK, combining automated scanning, risk prioritisation, and accelerated patch deployment.",
    
    useCasesTitle: "How Organizations Use Vulnerability Management uk",
    useCasesSubtitle: "Discover how UK enterprises discover weaknesses, prioritize critical patches, and maintain continuous threat visibility.",
    
    architectureTitle: "Vulnerability Management Framework",
    architectureSubtitle: "Our vulnerability management framework covers 01 Asset Discovery, 02 Vulnerability Scanning, 03 Risk Assessment, 04 Remediation, and 05 Continuous Monitoring.",
    
    benefitsTitle: "Key Outcomes from Vulnerability Management Services UK",
    benefitsSubtitle: "Reduced exposure across critical assets, continuous visibility across networks and cloud environments, and stronger compliance with industry standards."
  } : undefined;

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
        overrideHeading={overrides?.overviewHeading}
        overrideParagraph1={overrides?.overviewParagraph1}
        overrideParagraph2={overrides?.overviewParagraph2}
        overrideDeepDiveHeading={overrides?.deepDiveHeading}
        overrideDeepDiveParagraph1={overrides?.deepDiveParagraph1}
        overrideDeepDiveParagraph2={(overrides as any)?.deepDiveParagraph2}
      />

      {/* Business Problem Section */}
      <CapabilityProblem 
        serviceSlug={service} 
        capabilityTitle={data.title}
        overrideTitle={overrides?.problemTitle}
        overrideFullTitle={overrides?.problemTitle}
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
      />

      {/* 6. Technology Stack Section */}
      {/* <div id="tech-stack">
        <TechnologyStack techs={data.techStack} />
      </div> */}

      {/* 7. Benefits Section */}
      <CapabilityBenefits 
        benefits={data.benefits} 
        overrideTitle={overrides?.benefitsTitle}
        overrideSubtitle={overrides?.benefitsSubtitle}
      />

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
  const service = "cybersecurity";
  const serviceData = getServiceByCategory(service);
  if (!serviceData) return [];
  return serviceData.capabilities.map((cap) => ({
    capability: cap.slug
  }));
}

