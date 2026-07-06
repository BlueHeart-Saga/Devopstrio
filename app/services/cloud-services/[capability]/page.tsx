import React, { use } from "react";
import { notFound } from "next/navigation";
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
  const service = "cloud-services";
  const data = getCapability(service, capability);
  if (!data) return {};

  if (capability === "cloud-architecture") {
    return {
      title: "Cloud Architecture Services in UK | Secure & Scalable Solutions",
      description: "Transform your business with cloud architecture services in UK. We design secure, scalable, and cost-efficient cloud infrastructure to improve performance, resilience, and business growth.",
      openGraph: {
        title: "Cloud Architecture Services in UK | Secure & Scalable Solutions",
        description: "Transform your business with cloud architecture services in UK. We design secure, scalable, and cost-efficient cloud infrastructure to improve performance, resilience, and business growth."
      },
      alternates: {
        canonical: `/services/${service}/${capability}`
      }
    };
  }

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
  const service = "cloud-services";
  const serviceData = getServiceByCategory(service);
  const data = getCapability(service, capability);

  if (!data || !serviceData) {
    notFound();
  }

  const isCloudArch = capability === "cloud-architecture";
  const isAws = capability === "aws-services";
  const isAzure = capability === "azure-services";
  const isGcp = capability === "google-cloud-services";

  const overrides = isCloudArch ? {
    overviewHeading: "DELIVERING RESULTS WITH CLOUD ARCHITECTURE SERVICES",
    overviewParagraph1: "Design and deploy enterprise-grade, highly available cloud environments across the UK.",
    overviewParagraph2: "We build cloud architecture services in the UK that deploy automated environments, enforce rigorous telemetry monitoring, and establish secure VPC routing — fully aligned with UK GDPR, Cyber Essentials, and industry compliance standards.",
    
    deepDiveHeading: "WHAT ARE CLOUD ARCHITECTURE SERVICES IN THE UK?",
    deepDiveParagraph1: "Cloud Architecture Services in the UK refers to the strategic design and deployment of scalable, secure, and highly available computing environments tailored to British enterprise needs. It empowers UK businesses to handle workloads dynamically, protect sensitive data within compliant and move away from capital-heavy on-premise infrastructure.",
    deepDiveParagraph2: "Whether you need multi-region AKS/EKS container clusters, optimised database configurations, or FinOps-driven cost management across AWS, Azure, or Google Cloud our cloud architecture services in the UK ensure your infrastructure is highly secure, fully compliant with UK regulatory frameworks, and ready to scale with demand at any level.",
    
    problemTitle: "Reducing Cloud Costs & Downtime with Cloud Architecture Services in UK",
    problemSubtitle: "How inefficient cloud environments and rigid infrastructure designs reduce performance and increase operational costs.",
    problemPoints: [
      "Over-allocated cloud resources causing excessive infrastructure spend and unpredictable billing issues.",
      "Limited geo-redundant cloud architecture creating higher risks of critical service disruptions.",
      "Slow, manual scaling processes during traffic spikes, resulting in platform slowdowns and outages."
    ],
    
    outcomesTitle: "Enterprise Cloud Architecture Services in UK",
    outcomesDesc: "We design, build, deploy, and optimize custom cloud architectures that improve performance, enhance productivity, and deliver measurable business value across UK enterprises.",
    
    useCasesTitle: "Cloud Architecture Services in UK for Modern Enterprises",
    useCasesSubtitle: "Discover how UK enterprises adopt and deploy cloud architecture services across core industries to automate operations, secure critical infrastructure, and deliver measurable business value.",
    
    architectureTitle: "Scalable Cloud Architecture Built for Security & Performance",
    architectureSubtitle: "Our cloud architecture services in UK combine modern cloud platforms, automation frameworks, AI technologies, and security-first policies to build scalable, resilient, and enterprise-ready infrastructure.",
    
    techStackTitle: "Cloud Technologies Powering Our Architecture Services",
    techStackSubtitle: "We integrate enterprise-grade cloud platforms, automation frameworks, and infrastructure tools to deliver cloud architecture services in UK that support scalable, secure, and high-performance workloads.",
    
    benefitsTitle: "Business Benefits of Our Cloud Architecture Services",
    benefitsSubtitle: "Our cloud architecture services in UK deliver measurable improvements in performance, security, scalability, and cost efficiency through automated infrastructure, continuous optimization, and enterprise-grade compliance."
  } : isAws ? {
    overviewHeading: "Enterprise AWS Cloud Services in UK",
    overviewParagraph1: "Scalable Amazon EKS clusters, serverless AWS Lambda solutions, and secure Amazon DynamoDB deployments built on AWS.",
    overviewParagraph2: "We deliver automated cloud environments, proactive monitoring, and secure Amazon VPC networking to support compliance, reliability, and business growth across UK enterprises.",
    
    deepDiveHeading: "What Are AWS Cloud Services?",
    deepDiveParagraph1: "AWS cloud services in UK enable businesses to leverage scalable computing, secure storage, and intelligent networking through highly available cloud environments. They help organizations modernize infrastructure, protect critical workloads, and replace costly on-premises systems with flexible, pay-as-you-go AWS solutions.",
    deepDiveParagraph2: "Whether deploying multi-region Amazon EKS clusters, optimizing Amazon RDS databases, or automating cloud cost management with AWS-native FinOps tools, our AWS cloud services in UK deliver secure, compliant, and high-performance infrastructure built to support growing business demands.",
    
    problemTitle: "Reducing AWS cloud Costs & Downtime",
    problemSubtitle: "How inefficient AWS cloud environments increase costs, downtime, and operational risk",
    problemPoints: [
      "Over-provisioned AWS resources driving excessive cloud costs and unpredictable monthly billing.",
      "Limited multi-region AWS deployments increasing the risk of critical application downtime.",
      "Manual infrastructure scaling during traffic spikes causing performance bottlenecks and service disruptions."
    ],
    
    outcomesTitle: "Enterprise AWS Cloud Services in UK",
    outcomesDesc: "We design, deploy, manage, and optimize AWS cloud services that improve performance, enhance productivity, and deliver measurable business value for UK businesses.",
    
    useCasesTitle: "AWS Cloud Services Across UK Industries",
    useCasesSubtitle: "Discover how UK businesses use AWS cloud services to automate operations, secure critical infrastructure, improve scalability, and drive measurable business growth.",
    
    architectureTitle: "AWS Architecture Built for Scale & Security",
    architectureSubtitle: "Our AWS cloud services in UK combine modern AWS platforms, intelligent automation, security controls, and infrastructure best practices to deliver scalable, resilient, and enterprise-ready cloud solutions.",
    
    techStackTitle: "AWS cloud Technology Stack",
    techStackSubtitle: "We integrate industry-leading AWS services, automation tools, and cloud-native technologies to deliver AWS cloud services in UK with high availability, security, and enterprise performance.",
    
    benefitsTitle: "AWS Performance & Benefits",
    benefitsSubtitle: "Our AWS cloud services in UK improve performance, strengthen security, and optimize cloud costs through automation, continuous monitoring, and enterprise-grade compliance."
  } : isAzure ? {
    overviewHeading: "Accelerating outcomes with Microsoft Azure services in UK",
    overviewParagraph1: "Delivering landing zones, AKS clusters, and serverless applications through Microsoft Azure services in UK to support scalable, cloud-native environments.",
    overviewParagraph2: "We deploy automated environments, implement rigorous telemetry monitoring, and establish secure VPC routing. Our deployment parameters are configured to align with industry regulatory requirements, helping organizations maintain security and compliance.",
    
    deepDiveHeading: "What are Microsoft Azure services in UK?",
    deepDiveParagraph1: "Microsoft Azure services in UK provide the strategic alignment of computing resources, storage, and networking within highly available virtualized environments. They enable enterprises to scale workloads dynamically, secure sensitive applications through private landing zones, and transition from capital-intensive physical servers to agile, pay-as-you-go cloud architectures.",
    deepDiveParagraph2: "Whether establishing multi-region AKS container environments, optimizing database performance, or automating cost tracking through FinOps practices, Microsoft Azure services in UK help ensure your infrastructure remains highly secure, fully compliant with industry standards, and prepared to handle traffic demands of any scale.",
    
    problemTitle: "Solving Cloud Waste & Downtime with Microsoft Azure services in UK",
    problemSubtitle: "Architectures and configurations can impact performance without optimized Microsoft Azure services in UK.",
    problemPoints: [
      "Over-allocated virtual infrastructure leading to unnecessary cloud costs and billing inefficiencies.",
      "Lack of geo-redundant configurations increasing the risk of critical system downtime.",
      "Slow, manual response processes during traffic spikes, causing platform performance issues and unresponsive states."
    ],
    
    outcomesTitle: "Enterprise-Ready Azure Services in UK",
    outcomesDesc: "We design, build, deploy, and optimize custom azure services architectures that transform operations, improve productivity, and create measurable business value.",
    
    useCasesTitle: "How Organizations Use Microsoft Azure services in UK",
    useCasesSubtitle: "Discover how enterprise leaders adopt and deploy Microsoft Azure services in UK across core sectors to automate operations, protect critical infrastructure, and create measurable business value.",
    
    architectureTitle: "Scalable, Secure Microsoft Azure services in UK",
    architectureSubtitle: "Our architecture combines modern cloud platforms, AI technologies, secure policy controls, and automation frameworks to deliver enterprise-grade solutions.",
    
    techStackTitle: "Microsoft Azure services in UK Technology Stack",
    techStackSubtitle: "We integrate with high-performance tools, libraries, and microservice platforms optimized to support Microsoft Azure services in UK, handling large transaction volumes with low-latency performance.",
    
    benefitsTitle: "Business Outcomes with Microsoft Azure services in UK",
    benefitsSubtitle: "We measure our success by the stability, security, and cost efficiency we deliver. Through automated pipelines, continuous optimization, and strict SOC-2 compliance, our capabilities translate directly into measurable business value."
  } : isGcp ? {
    overviewHeading: "Accelerating outcomes with Google Cloud Consulting in UK",
    overviewParagraph1: "GKE Autopilot deployments, BigQuery analytics platforms, and Vertex AI solutions through Google Cloud Consulting services.",
    overviewParagraph2: "We deliver automated environments, comprehensive telemetry monitoring, and secure VPC network configurations to meet industry regulatory requirements.",
    
    deepDiveHeading: "What is Google Cloud Consulting?",
    deepDiveParagraph1: "Google Cloud Consulting provides the strategic alignment of computing resources, storage, and networking within highly available virtualized environments. It enables enterprises to scale workloads dynamically, secure sensitive workloads through private landing zones, and transition from capital-intensive physical servers to agile, pay-as-you-go cloud architectures.",
    deepDiveParagraph2: "Whether establishing multi-region GKE container environments, optimizing database performance, or automating cost tracking through FinOps practices, Google Cloud Consulting helps ensure your infrastructure remains highly secure, fully compliant with industry standards, and prepared to handle traffic demands of any scale.",
    
    problemTitle: "Reducing Cloud Waste with Google Cloud Consulting",
    problemSubtitle: "How inefficient cloud architectures and monolithic configurations impact business performance and operational costs.",
    problemPoints: [
      "Over-allocated virtual infrastructure driving unnecessary cloud spending and billing inefficiencies.",
      "Lack of geo-redundant configurations increasing the risk of critical system downtime.",
      "Slow, manual response processes during traffic spikes, leading to platform performance issues and service disruptions."
    ],
    
    outcomesTitle: "Expert Google Cloud Consulting for Modern Businesses",
    outcomesDesc: "We design, build, deploy, and optimize custom Google Cloud Consulting solutions that transform operations, improve productivity, and create measurable business value.",
    
    useCasesTitle: "How Businesses Benefit from Google Cloud Consulting",
    useCasesSubtitle: "See how organizations use Google Cloud Consulting across industries to streamline operations, strengthen critical infrastructure, and achieve measurable business growth.",
    
    architectureTitle: "Google Cloud Consulting Built for Growth & Security",
    architectureSubtitle: "Our architecture combines modern cloud platforms, AI technologies, secure policy controls, and automation frameworks to deliver enterprise-grade solutions.",
    
    techStackTitle: "Technology Stack for Google Cloud Consulting",
    techStackSubtitle: "We integrate high-performance tools, libraries, and microservice platforms designed to support large transaction volumes and low-latency application workloads.",
    
    benefitsTitle: "Business Benefits of Google Cloud Consulting",
    benefitsSubtitle: "We measure our success by the stability, security, and cost efficiency we deliver. Through automated pipelines, continuous optimization, and strict SOC-2 compliance, our solutions translate directly into measurable business value."
  } : undefined;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: serviceData.title, href: `/services/${service}` },
    { label: isCloudArch ? "Cloud Architecture" : isAws ? "AWS Services" : isAzure ? "Azure Services" : isGcp ? "Google Cloud Services" : data.title }
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

  const pageTitle = isCloudArch 
    ? "Cloud Architecture" 
    : isAws 
      ? "AWS Services" 
      : isAzure 
        ? "Azure Services" 
        : isGcp 
          ? "Google Cloud Services" 
          : data.title;

  const pageSchemaName = isCloudArch 
    ? "Cloud Architecture Services in UK" 
    : isAws 
      ? "AWS Cloud Services in UK" 
      : isAzure 
        ? "Microsoft Azure Services in UK" 
        : isGcp 
          ? "Google Cloud Consulting in UK" 
          : data.title;

  const pageSchemaDesc = isCloudArch 
    ? "Transform your business with cloud architecture services in UK. We design secure, scalable, and cost-efficient cloud infrastructure to improve performance, resilience, and business growth."
    : isAws 
      ? "Looking for AWS cloud services in UK? We provide secure AWS migration, cloud infrastructure, DevOps, cost optimization, and managed AWS solutions for businesses."
      : isAzure 
        ? "Explore Microsoft Azure services in UK for secure cloud infrastructure, AKS deployments, serverless applications, cloud migration, and enterprise scalability."
        : isGcp 
          ? "Expert Google Cloud Consulting in UK. We design scalable GKE clusters, BigQuery analytics, Vertex AI systems, and secure GCP migrations for enterprises."
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
        offers={data.benefits} 
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
  const service = "cloud-services";
  const serviceData = getServiceByCategory(service);
  if (!serviceData) return [];
  return serviceData.capabilities.map((cap) => ({
    capability: cap.slug
  }));
}

