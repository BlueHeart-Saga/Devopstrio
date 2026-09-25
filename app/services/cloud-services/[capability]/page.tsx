import React, { use } from "react";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
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
  const service = "cloud-services";
  const data = getCapability(service, capability);
  if (!data) return {};

  const seo = getMetadataFromPath(`/services/${service}/${capability}`);
  const title = seo.title !== data.title ? seo.title : `${data.title} Cloud Services | Devopstrio`;
  return generatePageMetadata({
    title,
    description: seo.description || data.heroSubtitle,
    path: `/services/${service}/${capability}`,
    keywords: seo.keywords
  });
}

export default function CapabilityPage({ params }: PageProps) {
  const { capability } = use(params);
  const service = "cloud-services";
  const serviceData = getServiceByCategory(service);
  const data = getCapability(service, capability);

  if (!data || !serviceData) {
    notFound();
  }

  const isCloudMigration = capability === "cloud-migration";
  const isCloudArch = capability === "cloud-architecture";
  const isAws = capability === "aws-services";
  const isAzure = capability === "azure-services";
  const isGcp = capability === "google-cloud-services";
  const isCloudSec = capability === "cloud-security";

  const overrides = isCloudMigration ? {
    overviewHeading: "Modernising Operations with Cloud Migration Services UK",
    overviewParagraph1: "Cloud migration services in UK help organisations move applications, data, and workloads from existing infrastructure into suitable cloud environments.",
    overviewParagraph2: (
      <span>
        Our cloud migration solutions for UK businesses support smoother transitions, better resource management, and improved continuity across public and hybrid cloud platforms. Our cloud migration specialists UK also connect migration with efficient{" "}
        <Link href="/services/devops-automation" className="text-rose-500 hover:underline font-bold">
          DevOps automation pipelines
        </Link>.
      </span>
    ),
    
    deepDiveHeading: "Modernising Operations with Cloud Migration Services UK",
    deepDiveParagraph1: (
      <span>
        Cloud migration services in UK help organisations move applications, data, and workloads from existing infrastructure into suitable cloud environments. Our cloud migration solutions for UK businesses support smoother transitions, better resource management, and improved continuity across public and hybrid cloud platforms.
      </span>
    ),
    deepDiveParagraph2: (
      <span>
        Our cloud migration specialists UK also connect migration with efficient{" "}
        <Link href="/services/devops-automation" className="text-rose-500 hover:underline font-bold">
          DevOps automation pipelines
        </Link>{" "}
        designed to optimize cloud efficiency.
      </span>
    ),
    
    problemTitle: "Addressing Rising Cloud Costs & Downtime",
    problemSubtitle: "How unoptimized cloud migration and legacy dependencies increase operational risk.",
    problemPoints: [
      "Unused cloud resources increasing unnecessary spending and unexpected billing costs.",
      "Limited redundancy across environments creating greater exposure to service interruptions.",
      "Manual workload management making traffic spikes harder to handle efficiently."
    ],
    
    outcomesTitle: "Business Outcomes from Cloud Migration",
    outcomesDesc: "Our UK cloud migration services provide structured planning, workload assessment, and controlled transitions across modern cloud environments.",
    
    useCasesTitle: "Cloud Migration Services UK Across Core Industries",
    useCasesSubtitle: "Discover how UK businesses migrate critical workloads to public and hybrid clouds with minimal disruption and maximum operational resilience.",
    
    architectureTitle: "Modern Cloud Migration Architecture & Framework",
    architectureSubtitle: "Our cloud migration solutions in UK combine structured discovery, workload validation, and automated cutover playbooks to deliver seamless transitions.",
    
    techStackTitle: "Cloud Migration Technologies",
    techStackSubtitle: "We integrate enterprise-grade migration utilities, active replication streams, and hybrid cloud bridges to support safe data transitions.",
    
    benefitsTitle: "Business Outcomes from Cloud Migration",
    benefitsSubtitle: "Smoother transitions, greater visibility across migrated workloads, and faster recovery when migration issues arise."
  } : isCloudSec ? {
    overviewHeading: "Transforming operations with Cloud Security Services UK",
    overviewParagraph1: "Cloud security services UK provide structured protection for cloud infrastructure, applications, data, and user access across highly-available cloud environments.",
    overviewParagraph2: (
      <span>
        They enable organisations to secure sensitive workloads, manage access controls, identify vulnerabilities, and maintain stronger security standards while operating across modern cloud architectures.
      </span>
    ),
    
    deepDiveHeading: "Transforming operations with Cloud Security Services UK",
    deepDiveParagraph1: (
      <span>
        Cloud security services UK provide structured protection for cloud infrastructure, applications, data, and user access across highly-available cloud environments.
      </span>
    ),
    deepDiveParagraph2: (
      <span>
        They enable organisations to secure sensitive workloads, manage access controls, identify vulnerabilities, and maintain stronger security standards while operating across modern cloud architectures.
      </span>
    ),
    
    problemTitle: "Addressing Cloud Security & Compliance Risks",
    problemSubtitle: "Unidentified vulnerabilities and unmanaged access rights exposing cloud environments to severe operational and compliance risks.",
    problemPoints: [
      "Unidentified cloud vulnerabilities reaching production without proper security validation.",
      "Non-compliance with GDPR, HIPAA, or FSQS exposing organisations to regulatory and financial risks.",
      "Unmanaged access rights allowing privilege escalation and unauthorised internal data access."
    ],
    
    outcomesTitle: "Key Outcomes from Cloud Security Services UK",
    outcomesDesc: "We provide comprehensive cloud security services in UK, combining continuous posture management, zero-trust IAM policies, and automated compliance auditing.",
    
    useCasesTitle: "Cloud Security Services UK for Stronger Protection",
    useCasesSubtitle: "Discover how UK enterprises secure multi-cloud environments, protect sensitive data, and maintain continuous compliance across core industry verticals.",
    
    architectureTitle: "Security That Supports Everyday Cloud Operations",
    architectureSubtitle: "Our cloud security architecture combines automated posture management, zero-trust access controls, and real-time threat intelligence to protect mission-critical workloads.",
    
    techStackTitle: "Cloud Security Technology Stack",
    techStackSubtitle: "We deploy industry-leading CSPM, vulnerability scanning, and IAM governance platforms to ensure complete infrastructure visibility and compliance.",
    
    benefitsTitle: "Enterprise-Ready Cloud Security services uk",
    benefitsSubtitle: "Improved cloud security across production environments, audited setups aligned with SOC 2, and enhanced day-to-day threat monitoring."
  } : isCloudArch ? {
    overviewHeading: "DELIVERING RESULTS WITH CLOUD ARCHITECTURE SERVICES",
    overviewParagraph1: "Design and deploy enterprise-grade, highly available cloud environments across the UK.",
    overviewParagraph2: (
      <span>
        We build cloud architecture services in the UK that deploy automated environments, enforce rigorous{" "}
        <Link href="/services/managed-services" className="text-rose-500 hover:underline font-bold">
          telemetry monitoring services
        </Link>{" "}
        and establish secure VPC routing — fully aligned with UK GDPR, Cyber Essentials, and industry compliance standards.
      </span>
    ),
    
    deepDiveHeading: "WHAT ARE CLOUD ARCHITECTURE SERVICES IN THE UK?",
    deepDiveParagraph1: (
      <span>
        Cloud Architecture Services in the UK refers to the strategic design and deployment of scalable, secure, and highly available computing environments tailored to British enterprise needs. It empowers UK businesses to handle workloads dynamically, protect sensitive data using{" "}
        <Link href="/services/cybersecurity" className="text-rose-500 hover:underline font-bold">
          enterprise cybersecurity frameworks
        </Link>{" "}
        and move away from capital-heavy on-premise infrastructure.
      </span>
    ),
    deepDiveParagraph2: (
      <span>
        Whether you need multi-region AKS/EKS container clusters, optimised database configurations, or FinOps-driven cost management across AWS, Azure, or Google Cloud our cloud architecture services in the UK ensure your infrastructure is highly secure, fully compliant with UK regulatory frameworks. Discover how our{" "}
        <Link href="/services/devops-automation" className="text-rose-500 hover:underline font-bold">
          DevOps automation pipelines
        </Link>{" "}
        facilitate this deployment.
      </span>
    ),
    
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
    overviewParagraph2: (
      <span>
        We deliver automated cloud environments, proactive monitoring, and secure Amazon VPC networking to support compliance, reliability, and business growth. Learn about our{" "}
        <Link href="/services/devops-automation" className="text-rose-500 hover:underline font-bold">
          DevOps automation capabilities
        </Link>{" "}
        on AWS.
      </span>
    ),
    
    deepDiveHeading: "What Are AWS Services?",
    deepDiveParagraph1: (
      <span>
        AWS services in UK give businesses access to cloud computing, storage, databases, networking, and security capabilities. They support infrastructure modernisation, workload management, and flexible resource usage across different business requirements. Our AWS cloud solutions help organisations make better use of their cloud environment. Read our{" "}
        <Link href="/about/company-overview" className="text-rose-500 hover:underline font-bold">
          company overview
        </Link>{" "}
        to learn more.
      </span>
    ),
    deepDiveParagraph2: (
      <span>
        Whether deploying multi-region Amazon EKS clusters, optimizing Amazon RDS databases, or automating cloud cost management with AWS-native FinOps tools, our AWS cloud services in UK deliver secure, compliant, and high-performance infrastructure built to support growing business demands. Partner with our{" "}
        <Link href="/services/cybersecurity" className="text-rose-500 hover:underline font-bold">
          cloud security engineers
        </Link>{" "}
        to secure all your AWS workloads.
      </span>
    ),
    
    problemTitle: "Addressing AWS Cloud Costs & Downtime",
    problemSubtitle: "How inefficient AWS cloud environments increase costs, downtime, and operational risk.",
    problemPoints: [
      "Unused AWS resources increasing monthly spending and creating unnecessary infrastructure costs.",
      "Single-region deployments leaving critical applications exposed to unexpected service interruptions.",
      "Manual resource adjustments during demand increases causing slower performance and operational disruption."
    ],
    
    outcomesTitle: "AWS Capabilities Built for Modern Infrastructure",
    outcomesDesc: "We design, deploy, manage, and optimize AWS cloud services that improve performance, enhance productivity, and deliver measurable business value for UK businesses.",
    
    useCasesTitle: "AWS Cloud Services Across UK Industries",
    useCasesSubtitle: "Discover how UK businesses use AWS cloud services to automate operations, secure critical infrastructure, improve scalability, and drive measurable business growth.",
    
    architectureTitle: "AWS Architecture Built for Scale & Security",
    architectureSubtitle: "Our AWS cloud services in UK combine modern AWS platforms, intelligent automation, security controls, and infrastructure best practices to deliver scalable, resilient, and enterprise-ready cloud solutions.",
    
    techStackTitle: "AWS cloud Technology Stack",
    techStackSubtitle: "We integrate industry-leading AWS services, automation tools, and cloud-native technologies to deliver AWS cloud services in UK with high availability, security, and enterprise performance.",
    
    benefitsTitle: "Business Benefits of AWS Cloud Services",
    benefitsSubtitle: "Faster deployments with smoother release processes and fewer delays, clearer infrastructure visibility with continuous performance monitoring, and better governance with consistent security and compliance controls."
  } : isAzure ? {
    overviewHeading: "Accelerating outcomes with Microsoft Azure services in UK",
    overviewParagraph1: "Delivering landing zones, AKS clusters, and serverless applications through Microsoft Azure services in UK to support scalable, cloud-native environments.",
    overviewParagraph2: (
      <span>
        We deploy automated environments, implement rigorous telemetry monitoring, and establish secure VPC routing. Our configurations align with industry regulations. Learn how this complies with our{" "}
        <Link href="/services/cybersecurity" className="text-rose-500 hover:underline font-bold">
          security audit protocols
        </Link>{" "}
        for Azure environments.
      </span>
    ),
    
    deepDiveHeading: "What are Microsoft Azure services in UK?",
    deepDiveParagraph1: (
      <span>
        Microsoft Azure services in UK provide the strategic alignment of computing resources, storage, and networking within highly available virtualized environments. They enable enterprises to scale workloads dynamically and secure sensitive applications. Read about our{" "}
        <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">
          central cloud consulting services
        </Link>{" "}
        for transition templates.
      </span>
    ),
    deepDiveParagraph2: (
      <span>
        Whether establishing multi-region AKS container environments, optimizing database performance, or automating cost tracking through FinOps practices, Microsoft Azure services in UK help ensure your infrastructure remains secure. Integrate our{" "}
        <Link href="/services/devops-automation" className="text-rose-500 hover:underline font-bold">
          GitOps deployment frameworks
        </Link>{" "}
        for continuous updates.
      </span>
    ),
    
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
    overviewParagraph2: (
      <span>
        We deliver automated environments, comprehensive telemetry monitoring, and secure VPC network configurations to meet industry regulatory requirements. Explore our{" "}
        <Link href="/services/cybersecurity" className="text-rose-500 hover:underline font-bold">
          security policy frameworks
        </Link>{" "}
        for cloud governance.
      </span>
    ),
    
    deepDiveHeading: "What is Google Cloud Consulting?",
    deepDiveParagraph1: (
      <span>
        Google Cloud Consulting provides the strategic alignment of computing resources, storage, and networking within highly available virtualized environments. It enables enterprises to scale workloads dynamically and secure sensitive workloads. Compare this with our{" "}
        <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">
          main cloud capabilities catalog
        </Link>{" "}
        to choose the right partner.
      </span>
    ),
    deepDiveParagraph2: (
      <span>
        Whether establishing multi-region GKE container environments, optimizing database performance, or automating cost tracking through FinOps practices, Google Cloud Consulting helps ensure your infrastructure remains highly secure. Discover how our{" "}
        <Link href="/services/devops-automation" className="text-rose-500 hover:underline font-bold">
          Kubernetes orchestration pipelines
        </Link>{" "}
        are built to support GKE.
      </span>
    ),
    
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
    // { id: "tech-stack", label: "Technology" },
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
        <TechnologyStack 
          techs={data.techStack} 
          overrideTitle={overrides?.techStackTitle}
          overrideSubtitle={overrides?.techStackSubtitle}
        />
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
  const service = "cloud-services";
  const serviceData = getServiceByCategory(service);
  if (!serviceData) return [];
  return serviceData.capabilities.map((cap) => ({
    capability: cap.slug
  }));
}

