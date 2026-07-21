import React, { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceByCategory, getCapability } from "@/data/services";
import { getHeroBgImage } from "@/lib/services-utils";
import { Hero } from "@/components/services/Hero";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { CapabilityOverview } from "@/sections/services/capability/CapabilityOverview";
import { CapabilityProblem } from "@/sections/services/capability/CapabilityProblem";
import { CapabilityUseCases } from "@/sections/services/capability/CapabilityUseCases";
import { CapabilityOutcomes } from "@/sections/services/capability/CapabilityOutcomes";
import { CapabilityArchitecture } from "@/sections/services/capability/CapabilityArchitecture";
import { TechnologyStack } from "@/components/services/TechnologyStack";
import { CapabilityBenefits } from "@/sections/services/capability/CapabilityBenefits";
import { CapabilityIndustries } from "@/sections/services/capability/CapabilityIndustries";
import { FAQ } from "@/components/services/FAQ";
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/Schemas";
import { CTA } from "@/components/services/CTA";
import { RelatedServices } from "@/components/services/RelatedServices";

interface PageProps {
  params: Promise<{ capability: string }>;
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
  const { capability } = await params;
  const service = "devops-automation";
  const data = getCapability(service, capability);
  if (!data) return {};

  if (capability === "devsecops") {
    return {
      title: "DevSecOps Services in UK | Secure CI/CD & DevOps Solutions",
      description: "Strengthen software security with DevSecOps services in UK. Integrate CI/CD security, SAST, vulnerability scanning, compliance, and automated DevOps workflows.",
      openGraph: {
        title: "DevSecOps Services in UK | Secure CI/CD & DevOps Solutions",
        description: "Strengthen software security with DevSecOps services in UK. Integrate CI/CD security, SAST, vulnerability scanning, compliance, and automated DevOps workflows."
      },
      alternates: {
        canonical: `/services/${service}/${capability}`
      }
    };
  }

  const title = data.metaTitle || `${data.title} | Devopstrio`;
  const description = data.metaDescription || data.heroSubtitle;

  return {
    title,
    description,
    openGraph: {
      title,
      description
    },
    alternates: {
      canonical: `/services/${service}/${capability}`
    }
  };
}

export default function CapabilityPage({ params }: PageProps) {
  const { capability } = use(params);
  const service = "devops-automation";
  const serviceData = getServiceByCategory(service);
  const data = getCapability(service, capability);

  if (!data || !serviceData) {
    notFound();
  }

  const isDevSecOps = capability === "devsecops";

  const overrides = isDevSecOps ? {
    overviewHeading: "Building Secure Software with DevSecOps Services in UK",
    overviewParagraph1: "SonarQube SAST analysis and Snyk vulnerability scanning integrated into CI/CD pipelines.",
    overviewParagraph2: (
      <span>
        We implement automated environments, advanced telemetry monitoring, and secure VPC routing configurations. Secure your container grids and microservices with our{" "}
        <Link href="/services/cybersecurity" className="text-rose-500 hover:underline font-bold">
          enterprise cybersecurity threat mitigation protocols
        </Link>{" "}
        for compliance.
      </span>
    ),
    
    deepDiveHeading: "What are DevSecOps services in UK?",
    deepDiveParagraph1: (
      <span>
        DevSecOps services in UK combine security, development, and operations into a unified approach that helps organizations streamline workflows, reduce security risks, and deliver production-ready applications. Explore how this relates to our{" "}
        <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">
          multi-cloud architecture models
        </Link>{" "}
        and find templates in our{" "}
        <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">
          company overview
        </Link>{" "}
        documentation.
      </span>
    ),
    deepDiveParagraph2: (
      <span>
        Leveraging advanced security automation and seamless tool integrations, DevSecOps services in UK focus on SonarQube SAST analysis and Snyk vulnerability scanning throughout CI/CD pipelines. This approach provides the foundation teams need to accelerate deployments, improve visibility. Verify these releases automatically using our{" "}
        <Link href="/services/qa-testing" className="text-rose-500 hover:underline font-bold">
          QA regression testing tools
        </Link>{" "}
        before pushing to production.
      </span>
    ),
    
    problemTitle: "Overcoming Delivery Delays with DevSecOps Services in UK",
    problemSubtitle: "How disconnected deployment pipelines create slower release cycles and increase application defects.",
    problemPoints: [
      "Inconsistent environments leading to configuration drift across development stages.",
      "Lack of automated validation processes allowing critical security defects to reach production.",
      "Slow, manual infrastructure builds creating deployment bottlenecks and release chaos."
    ],
    
    outcomesTitle: "DevSecOps in UK for Secure Software Delivery",
    outcomesDesc: "We design, implement, automate, and optimize DevSecOps services in UK to help businesses strengthen security, improve development workflows, and deliver measurable operational value.",
    
    useCasesTitle: "How Businesses Benefit from DevSecOps services in UK",
    useCasesSubtitle: "Learn how leading organizations implement DevSecOps services in UK across industries to strengthen security, streamline operations, and deliver measurable business outcomes.",
    
    architectureTitle: "DevSecOps services in UK Built for Secure Growth",
    architectureSubtitle: "Our architecture combines modern cloud platforms, AI technologies, secure policy controls, and automation frameworks to deliver enterprise-grade solutions.",
    
    techStackTitle: "Technology Stack Behind DevSecOps services in UK",
    techStackSubtitle: "We integrate enterprise-grade tools, security platforms, and automation frameworks designed to support high transaction volumes and low-latency application performance.",
    
    benefitsTitle: "Business Value of DevSecOps services in UK",
    benefitsSubtitle: "We measure success through the security, reliability, and operational efficiency we deliver. Using automated pipelines, continuous optimization, and strict SOC-2 compliance, our solutions create measurable business value and long-term operational improvements.",
    benefitsItems: [
      "Up to 45% faster release cycles and software deployment efficiency.",
      "Complete application observability with real-time telemetry dashboard alerts.",
      "Fully audited security configurations aligned with SOC-2 compliance standards."
    ]
  } : undefined;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: serviceData.title, href: `/services/${service}` },
    { label: isDevSecOps ? "DevSecOps Services" : data.title }
  ];

  const subSections = [
    { id: "overview", label: "Overview" },
    { id: "business-problem", label: "Challenge" },
    { id: "solutions-outcomes", label: "Solutions & Outcomes" },
    { id: "use-cases", label: "Use Cases" },
    { id: "architecture", label: "Architecture" },
    { id: "tech-stack", label: "Technology" },
    { id: "benefits", label: "Benefits" },
    { id: "industries", label: "Industries" },
    { id: "faq", label: "FAQ" },
    { id: "related-services", label: "Related Services" }
  ];

  const pageTitle = isDevSecOps ? "DevSecOps Services" : data.title;
  const pageSchemaName = isDevSecOps ? "DevSecOps Services in UK" : data.title;
  const pageSchemaDesc = isDevSecOps 
    ? "Strengthen software security with DevSecOps services in UK. Integrate CI/CD security, SAST, vulnerability scanning, compliance, and automated DevOps workflows."
    : data.heroSubtitle;

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "Services", item: "/services" },
        { name: serviceData.title, item: `/services/${service}` },
        { name: pageTitle, item: `/services/${service}/${capability}` }
      ]} />
      <ServiceSchema 
        name={pageSchemaName} 
        description={pageSchemaDesc} 
        offers={overrides?.benefitsItems || data.benefits} 
      />
      {data.faqs && <FAQSchema faqs={data.faqs} />}

      {/* 1. Hero Block */}
      <Hero
        badge={serviceData.title}
        title={pageTitle}
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
      <div id="tech-stack">
        <TechnologyStack 
          techs={data.techStack} 
          overrideTitle={overrides?.techStackTitle}
          overrideSubtitle={overrides?.techStackSubtitle}
        />
      </div>

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
  const service = "devops-automation";
  const serviceData = getServiceByCategory(service);
  if (!serviceData) return [];
  return serviceData.capabilities.map((cap) => ({
    capability: cap.slug
  }));
}
