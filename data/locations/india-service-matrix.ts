import { LocationServiceMapping, GlobalLocation } from "./types";
import { indiaLocations } from "./india-locations";
import { getAdaptedServiceBySlug } from "./service-adapter";
import { TARGET_SERVICE_SLUGS, getExactServiceKeyword } from "@/lib/keyword-utils";
import { getServiceProfile } from "./service-profiles";

export const pilotIndiaLocationServices: LocationServiceMapping[] = [
  // 1. Bengaluru + Cloud Managed Services
  {
    countryCode: "india",
    citySlug: "bengaluru",
    serviceSlug: "cloud-managed-services",
    publicationStatus: "published",
    h1Title: "Cloud Managed Services Bengaluru | 24/7 Enterprise SRE",
    metaTitle: "Cloud Managed Services Bengaluru | 24/7 SRE Support | Devopstrio",
    metaDescription: "Devopstrio delivers 24/7 managed cloud services from Embassy Golf Links, Bengaluru. Supporting AWS, Azure and GCP with rapid P1 incident SLAs and FinOps governance.",
    commercialIntentQuery: "Azure Managed Services Bangalore",
    localChallenge: {
      title: "Operating Hyperscale Cloud Infrastructure in Bengaluru's Tech Corridor",
      points: [
        "Uncontrolled multi-cloud billing and lack of FinOps governance across rapidly expanding unicorn and GCC platforms.",
        "Engineering burnout and cluster sprawl on EKS and AKS requiring dedicated round-the-clock site reliability engineering.",
        "Stringent data residency and compliance demands under the Digital Personal Data Protection (DPDP) Act."
      ]
    },
    localSolution: {
      title: "Enterprise SRE and Managed Cloud Delivery from Embassy Golf Links",
      description: "Devopstrio embeds certified cloud architects and follow-the-sun SREs directly from our Bengaluru Corporate Office. We monitor, patch, and optimize multi-cloud environments 24/7/365.",
      deliverables: [
        "24/7 active SRE cluster monitoring with contractual P1 incident triage SLAs",
        "Automated FinOps cost governance targeting 25-40% reduction in unallocated cloud spend",
        "Self-healing Kubernetes clusters with automated pod scaling and zero-downtime rolling upgrades",
        "Quarterly disaster recovery simulations and automated cross-region database failover"
      ]
    },
    industryContext: {
      industryTitle: "SaaS and Global Capability Center (GCC) Focus in Bengaluru",
      description: "Supporting high-velocity tech firms and multinational global capability centers along Outer Ring Road, Whitefield, and Electronic City that require 99.99% availability."
    },
    complianceHighlights: ["Digital Personal Data Protection (DPDP) Act", "ISO 27001", "SOC-2 Type II", "AWS and Azure Partner Verified"],
    faqs: [
      {
        q: "Where is Devopstrio's physical office in Bengaluru?",
        a: "Our corporate office is located at Embassy Golf Links Business Park, Off Intermediate Ring Road, Bengaluru, Karnataka-560071. Our senior architects provide on-site technical audits and strategic consulting throughout Bengaluru."
      },
      {
        q: "What cloud platforms do you manage for Bengaluru enterprises?",
        a: "We manage production workloads across Amazon Web Services (AWS ap-south-1 Mumbai and ap-south-2 Hyderabad regions), Microsoft Azure (Central India and South India), and Google Cloud Platform (asia-south1 and asia-south2)."
      },
      {
        q: "How does Devopstrio guarantee uptime and incident response?",
        a: "All enterprise contracts are backed by formal Service Level Agreements (SLAs) featuring contractual rapid response for P1 critical outages and robust infrastructure availability targets."
      }
    ]
  },

  // 2. Bengaluru + Generative AI Solutions
  {
    countryCode: "india",
    citySlug: "bengaluru",
    serviceSlug: "generative-ai-solutions",
    publicationStatus: "published",
    h1Title: "Generative AI Solutions Bengaluru | Enterprise LLMs and Agents",
    metaTitle: "Generative AI Solutions Bengaluru | Enterprise LLM Consulting | Devopstrio",
    metaDescription: "Devopstrio architects private Generative AI platforms, custom LLM fine-tuning, and multi-agent workflows for enterprises across Bengaluru's tech clusters.",
    commercialIntentQuery: "AI Consulting Bangalore",
    localChallenge: {
      title: "Overcoming Enterprise AI Deployment Barriers in Bengaluru",
      points: [
        "Protecting proprietary corporate intellectual property while leveraging state-of-the-art foundation models.",
        "High token latency and unsustainable GPU compute infrastructure costs on cloud platforms.",
        "Lack of robust Retrieval-Augmented Generation (RAG) pipelines leading to model hallucinations."
      ]
    },
    localSolution: {
      title: "Production-Grade AI Pipelines within Sovereign Cloud VPCs",
      description: "We deploy private open-weight and proprietary models inside your isolated virtual private cloud with semantic search, vector databases, and multi-agent orchestration.",
      deliverables: [
        "Private enterprise LLM deployment on dedicated GPU clusters (vLLM, TensorRT-LLM)",
        "Enterprise RAG architecture with hybrid vector search and re-ranking pipelines",
        "Multi-agent autonomous workflows using LangGraph and semantic kernel frameworks",
        "Hallucination mitigation and strict guardrails aligned with DPDP data privacy standards"
      ]
    },
    industryContext: {
      industryTitle: "Deep Tech and Enterprise Software Application in Bengaluru",
      description: "Empowering Bengaluru's product engineering labs to embed generative AI into customer intelligence, code synthesis, document extraction, and autonomous business workflows."
    },
    complianceHighlights: ["Private VPC Isolation", "DPDP Act Compliance", "Zero Data Training Guarantees", "ISO 27001"],
    faqs: [
      {
        q: "Can Devopstrio run Generative AI models completely on-premises or within our private cloud?",
        a: "Yes. We specialize in private VPC deployments (AWS, Azure, GCP) or on-premises GPU infrastructure, ensuring your proprietary enterprise data is never used for public model training."
      },
      {
        q: "What vector databases and frameworks do you implement?",
        a: "We implement production-grade vector solutions including Pinecone, Milvus, Qdrant, and pgvector on PostgreSQL, orchestrated with LangChain, LlamaIndex, and LangGraph."
      }
    ]
  },

  // 3. Chennai + CI/CD Implementation
  {
    countryCode: "india",
    citySlug: "chennai",
    serviceSlug: "cicd-implementation",
    publicationStatus: "published",
    h1Title: "Enterprise CI/CD Pipelines Chennai | Automated DevOps",
    metaTitle: "Enterprise CI/CD Implementation Chennai | Automated Pipelines | Devopstrio",
    metaDescription: "Devopstrio delivers automated CI/CD pipelines, GitOps workflows, and zero-downtime deployment architectures from our Guindy Operations Center in Chennai.",
    commercialIntentQuery: "DevOps Services Chennai",
    localChallenge: {
      title: "Modernizing Release Velocity for Chennai's SaaS and Automotive Firms",
      points: [
        "Manual deployment processes resulting in weekend outages and prolonged release verification cycles.",
        "Vulnerability scanning disconnected from developer workflows, leading to critical CVEs in production.",
        "Inconsistent development, staging, and production environments across hybrid infrastructures."
      ]
    },
    localSolution: {
      title: "Automated GitOps Pipelines and Continuous Delivery Architecture",
      description: "From our Chennai Technology and Operations Center in Guindy, Devopstrio builds end-to-end automated pipelines with integrated static code analysis, container scanning, and zero-downtime blue/green deployment.",
      deliverables: [
        "GitOps continuous delivery architecture using ArgoCD and Flux on Kubernetes",
        "Automated security scanning integrated into pull requests (SonarQube, Trivy, Snyk)",
        "Zero-downtime blue/green and canary deployment strategies with automated rollback",
        "Infrastructure as Code (IaC) governance using Terraform and AWS CloudFormation"
      ]
    },
    industryContext: {
      industryTitle: "SaaS Product and Automotive Embedded Systems Focus in Chennai",
      description: "Supporting Chennai's booming SaaS corridor on OMR and automotive engineering firms in Guindy and Sriperumbudur with high-integrity software delivery."
    },
    complianceHighlights: ["SLSA Level 3 Alignment", "SOC-2 Type II", "Cyber Essentials", "ISO 27001"],
    faqs: [
      {
        q: "Where is Devopstrio located in Chennai?",
        a: "Our Technology and Operations Center is located on the Ground Floor, Primus Building, Door No. SP-7A, Guindy Industrial Estate, SIDCO Industrial Estate, Chennai 600032."
      },
      {
        q: "How does Devopstrio ensure zero downtime during production updates?",
        a: "We implement automated blue/green and canary rollouts where new versions receive gradual production traffic while synthetic health probes verify zero latency degradation before full cutover."
      }
    ]
  },

  // 4. Chennai + Software Development
  {
    countryCode: "india",
    citySlug: "chennai",
    serviceSlug: "software-development",
    publicationStatus: "published",
    h1Title: "Enterprise Software Development Chennai | Custom Cloud Apps",
    metaTitle: "Custom Enterprise Software Development Chennai | Devopstrio",
    metaDescription: "Devopstrio engineers custom enterprise web applications, cloud-native microservices, and multi-tenant SaaS platforms from our Chennai Operations Center.",
    commercialIntentQuery: "Software Development Company Chennai",
    localChallenge: {
      title: "Building Scalable Digital Products for Chennai Enterprises",
      points: [
        "Legacy monolithic codebases that cannot scale during peak commercial load periods.",
        "Technical debt and fragmented API architectures slowing feature delivery velocity.",
        "High cost of maintaining un-optimized server fleets without modern cloud architecture."
      ]
    },
    localSolution: {
      title: "Domain-Driven Microservices and Cloud-Native Application Engineering",
      description: "We design, develop, and operate high-concurrency cloud applications using domain-driven design, asynchronous messaging, and modern containerized backend architectures.",
      deliverables: [
        "Cloud-native microservices engineering with Go, Node.js, Python, and Java Spring Boot",
        "High-performance event-driven messaging architectures using Apache Kafka and RabbitMQ",
        "Responsive, accessible web and mobile applications built with Next.js and React",
        "Database optimization across relational (PostgreSQL) and distributed NoSQL systems"
      ]
    },
    industryContext: {
      industryTitle: "B2B SaaS and Financial Technology Application in Chennai",
      description: "Engineering robust digital platforms for Chennai's tier-1 enterprise SaaS providers, logistics networks, and fintech transaction platforms."
    },
    complianceHighlights: ["OWASP Top 10 Compliant", "ISO 27001", "SOC-2 Type II", "CMMI Practices"],
    faqs: [
      {
        q: "What development methodology does Devopstrio utilize?",
        a: "We follow Agile Scrum and Kanban methodologies with bi-weekly sprint cadences, automated CI/CD builds, and continuous integration testing."
      }
    ]
  },

  // 5. Hyderabad + Cloud Migration
  {
    countryCode: "india",
    citySlug: "hyderabad",
    serviceSlug: "cloud-migration",
    publicationStatus: "published",
    h1Title: "Enterprise Cloud Migration Hyderabad | AWS and Azure Modernisation",
    metaTitle: "Enterprise Cloud Migration Hyderabad | AWS and Azure | Devopstrio",
    metaDescription: "Devopstrio delivers zero-downtime cloud migration, legacy modernization, and hybrid infrastructure engineering for Hyderabad enterprises and GCCs.",
    commercialIntentQuery: "Cloud Migration Services Hyderabad",
    localChallenge: {
      title: "Migrating Legacy Systems to the Cloud Across Hyderabad Hubs",
      points: [
        "Complex dependencies across on-premises Oracle, SAP, and legacy Windows Server workloads.",
        "Risk of prolonged business downtime during database migration and storage cutovers.",
        "Unclear Total Cost of Ownership (TCO) and licensing optimization when moving to cloud."
      ]
    },
    localSolution: {
      title: "Structured 7-Rs Migration Framework with Zero Data Loss",
      description: "Devopstrio executes automated discovery, dependency mapping, and phased cloud cutovers to AWS (Hyderabad ap-south-2) and Azure sovereign Indian data centers.",
      deliverables: [
        "Automated infrastructure discovery and cloud TCO financial analysis",
        "Database re-platforming to managed cloud databases (AWS Aurora, Azure SQL, Cosmos DB)",
        "Zero-downtime replication cutover using AWS DMS and Azure Migrate",
        "Post-migration performance benchmarking and cloud security posture hardening"
      ]
    },
    industryContext: {
      industryTitle: "Pharma, Biotech and Financial GCC Sector in Hyderabad",
      description: "Supporting high-compliance pharmaceutical manufacturing facilities in Genome Valley and financial GCCs in HITEC City with secure cloud modernizations."
    },
    complianceHighlights: ["GAMP 5 and FDA 21 CFR Part 11 Readiness", "ISO 27001", "DPDP Act", "Zero Data Loss"],
    faqs: [
      {
        q: "Does Hyderabad have local cloud data centers?",
        a: "Yes. AWS operates a dedicated cloud region in Hyderabad (ap-south-2), and Microsoft operates major data center campuses, allowing complete in-region data sovereignty."
      }
    ]
  },

  // 6. Mumbai + Penetration Testing
  {
    countryCode: "india",
    citySlug: "mumbai",
    serviceSlug: "penetration-testing",
    publicationStatus: "published",
    h1Title: "Penetration Testing and Cybersecurity Mumbai | BFSI Security",
    metaTitle: "Penetration Testing and Cybersecurity Mumbai | CREST Aligned | Devopstrio",
    metaDescription: "Devopstrio conducts CREST-aligned penetration testing, cloud vulnerability assessments, and RBI/SEBI security compliance audits for Mumbai enterprises.",
    commercialIntentQuery: "Cybersecurity Company Mumbai",
    localChallenge: {
      title: "Securing Financial Infrastructure in India's Banking Capital",
      points: [
        "Stringent cybersecurity audit guidelines mandated by the Reserve Bank of India (RBI) and SEBI.",
        "Sophisticated adversary attacks targeting public-facing digital banking APIs and payment gateways.",
        "Cloud configuration drift creating unauthorized data exfiltration vulnerabilities."
      ]
    },
    localSolution: {
      title: "CREST-Aligned Penetration Testing and Threat Simulation",
      description: "Our certified ethical hackers and security researchers conduct simulated real-world cyberattacks across web applications, mobile platforms, APIs, and cloud networks.",
      deliverables: [
        "Web and mobile application penetration testing aligned with OWASP Top 10 and SANS 25",
        "API security testing validating authorization controls, rate limiting, and data exposure",
        "Cloud security posture management (CSPM) audits for AWS, Azure, and Google Cloud",
        "Executive vulnerability remediation reports with actionable engineering patch guides"
      ]
    },
    industryContext: {
      industryTitle: "Banking, FinTech and Enterprise Headquarters in Mumbai",
      description: "Safeguarding banks, insurance firms, payment aggregators, and enterprise corporations across Bandra Kurla Complex (BKC) and South Mumbai."
    },
    complianceHighlights: ["RBI Cybersecurity Framework", "SEBI Cloud Security Mandates", "PCI-DSS v4.0", "ISO 27001"],
    faqs: [
      {
        q: "Are Devopstrio's security audits compliant with RBI directives?",
        a: "Yes. Our methodologies adhere to the RBI Cybersecurity Framework for Banks and NBFCs, including comprehensive VA/PT reporting and vulnerability verification."
      }
    ]
  },

  // 7. Pune + Platform Engineering
  {
    countryCode: "india",
    citySlug: "pune",
    serviceSlug: "platform-engineering",
    publicationStatus: "published",
    h1Title: "Platform Engineering Pune | Internal Developer Platforms",
    metaTitle: "Platform Engineering and Developer Portals Pune | Devopstrio",
    metaDescription: "Devopstrio implements Backstage internal developer platforms (IDP), self-service Kubernetes automation, and Golden Paths for engineering teams in Pune.",
    commercialIntentQuery: "Platform Engineering Pune",
    localChallenge: {
      title: "Eliminating Engineering Bottlenecks in Pune Tech Clusters",
      points: [
        "Developers waiting days for infrastructure provisioning and cluster namespace access.",
        "Cognitive overload from complex Kubernetes manifests and fragmented deployment scripts.",
        "Inconsistent security and compliance standards across microservice development teams."
      ]
    },
    localSolution: {
      title: "Self-Service Internal Developer Platforms (IDP) with Backstage",
      description: "We build unified developer portals that empower software engineers to provision compliant cloud resources, scaffold microservices, and inspect service health autonomously.",
      deliverables: [
        "Custom Spotify Backstage developer portal implementation tailored to your organization",
        "Pre-approved Golden Path service templates with automated CI/CD and monitoring baked in",
        "Self-service ephemeral preview environments on Kubernetes for pull request validation",
        "Centralized software catalog, API documentation, and tech radar governance"
      ]
    },
    industryContext: {
      industryTitle: "Automotive Tech and Product Engineering in Pune",
      description: "Accelerating delivery velocity for engineering teams in Hinjewadi, Magarpatta, and Kharadi developing embedded systems, enterprise SaaS, and FinTech."
    },
    complianceHighlights: ["Developer Velocity Boost", "Kubernetes Native", "Zero-Trust Service Catalog", "ISO 27001"],
    faqs: [
      {
        q: "What is the primary benefit of Platform Engineering for our Pune team?",
        a: "It eliminates friction by allowing developers to self-service cloud infrastructure in minutes using pre-approved, compliant templates, dramatically reducing time-to-market."
      }
    ]
  },

  // 8. Delhi NCR + Zero Trust Architecture
  {
    countryCode: "india",
    citySlug: "delhi-ncr",
    serviceSlug: "zero-trust-architecture",
    publicationStatus: "published",
    h1Title: "Zero Trust Architecture Delhi NCR | Cyber Resilience",
    metaTitle: "Zero Trust Security Consulting Delhi NCR | Gurugram Noida | Devopstrio",
    metaDescription: "Devopstrio architects Zero-Trust security networks, identity federation, and microsegmentation for enterprises across New Delhi, Gurugram, and Noida.",
    commercialIntentQuery: "Zero Trust Security Delhi",
    localChallenge: {
      title: "Securing Multi-Site Hybrid Networks Across Delhi NCR",
      points: [
        "Perimeter-based legacy VPN networks failing to defend against identity theft and credential compromise.",
        "Complex hybrid networks spanning corporate offices in Gurugram, data centers in Noida, and remote teams.",
        "Stringent incident reporting mandates from CERT-In requiring continuous logging and threat visibility."
      ]
    },
    localSolution: {
      title: "Never Trust, Always Verify: Identity and Network Microsegmentation",
      description: "We replace vulnerable network perimeters with identity-aware proxies, least-privilege role models, continuous device posture verification, and encrypted network overlays.",
      deliverables: [
        "Zero Trust Network Access (ZTNA) implementation replacing vulnerable enterprise VPNs",
        "Identity federation and multi-factor authentication (MFA) with conditional access policies",
        "Software-defined microsegmentation preventing lateral movement across server clusters",
        "Automated CERT-In compliant audit logging, SIEM integration, and incident triage"
      ]
    },
    industryContext: {
      industryTitle: "Corporate HQs and Public Infrastructure in Delhi NCR",
      description: "Protecting government ministries, telecom operators, and multinational corporate headquarters across Cyber City Gurugram and Noida Expressway."
    },
    complianceHighlights: ["CERT-In Cybersecurity Mandates", "NIST SP 800-207 Zero Trust", "ISO 27001", "SOC-2 Type II"],
    faqs: [
      {
        q: "How does Zero Trust address CERT-In cybersecurity requirements in India?",
        a: "Zero Trust enforces centralized identity auditing and immutable log synchronization, ensuring compliance with CERT-In's 6-hour incident reporting and NTP synchronization directives."
      }
    ]
  },

  // 9. Coimbatore + SaaS Product Development
  {
    countryCode: "india",
    citySlug: "coimbatore",
    serviceSlug: "saas-product-development",
    publicationStatus: "published",
    h1Title: "SaaS Product Development Coimbatore | Multi-Tenant Architecture",
    metaTitle: "B2B SaaS Product Development Coimbatore | Devopstrio",
    metaDescription: "Devopstrio engineers multi-tenant cloud architectures, scalable subscription platforms, and automated CI/CD for growing SaaS companies in Coimbatore.",
    commercialIntentQuery: "SaaS Product Development Coimbatore",
    localChallenge: {
      title: "Scaling SaaS Architecture from Coimbatore to Global Markets",
      points: [
        "Designing multi-tenant database models that balance data isolation, scalability, and operational costs.",
        "Automating subscription metering, billing reconciliation, and self-service customer onboarding.",
        "Achieving international SOC-2 Type II readiness required by North American and European buyers."
      ]
    },
    localSolution: {
      title: "Production-Ready Multi-Tenant SaaS Foundation",
      description: "We partner with Coimbatore's ambitious SaaS founders to architect multi-tenant cloud platforms designed for global enterprise scale, data security, and seamless feature delivery.",
      deliverables: [
        "Multi-tenant database architecture with tenant-level encryption and schema isolation",
        "Stripe and global payment gateway integrations with automated usage-based metering",
        "Automated tenant provisioning, feature flag management, and role-based access control",
        "Comprehensive SOC-2 Type II readiness audit preparation and vulnerability remediation"
      ]
    },
    industryContext: {
      industryTitle: "B2B SaaS and Industrial IoT Ecosystem in Coimbatore",
      description: "Empowering fast-growing SaaS startups in TIDEL Park and Saravanampatti to build high-trust digital products for international markets."
    },
    complianceHighlights: ["SOC-2 Type II Readiness", "Multi-Tenant Isolation", "ISO 27001", "GDPR and DPDP"],
    faqs: [
      {
        q: "How does Devopstrio assist Coimbatore startups with SOC-2 compliance?",
        a: "We architect your cloud infrastructure with infrastructure as code, automated audit logging, vulnerability scanners, and encryption to meet all SOC-2 Trust Services Criteria."
      }
    ]
  },

  // 10. Kochi + Cloud Managed Services
  {
    countryCode: "india",
    citySlug: "kochi",
    serviceSlug: "cloud-managed-services",
    publicationStatus: "published",
    h1Title: "Cloud Managed Services Kochi | 24/7 Managed IT Infopark",
    metaTitle: "Cloud Managed Services Kochi | 24/7 Infopark SRE | Devopstrio",
    metaDescription: "Devopstrio delivers 24/7 managed cloud services, SRE cluster monitoring, and automated disaster recovery for enterprises across Infopark Kochi.",
    commercialIntentQuery: "Managed IT Services Kochi",
    localChallenge: {
      title: "Ensuring 24/7 Platform Reliability for Kochi Export Enterprises",
      points: [
        "Supporting global clients in North America and Europe across opposing time zones without local staffing gaps.",
        "Unplanned cloud downtime affecting customer SLAs and international business credibility.",
        "Managing hybrid infrastructure connecting Infopark offices with AWS and Azure cloud zones."
      ]
    },
    localSolution: {
      title: "24/7 Follow-the-Sun SRE Monitoring and Cloud Infrastructure Care",
      description: "Devopstrio provides dedicated, certified SRE teams who continuously monitor, tune, and safeguard your cloud environments, providing contractual rapid response for P1 critical events.",
      deliverables: [
        "24/7/365 active operations center monitoring with proactive health telemetry",
        "Automated multi-region disaster recovery and continuous automated backups",
        "Kubernetes cluster optimization, security patching, and vulnerability management",
        "Direct access to principal cloud architects for scheduled scaling and architecture reviews"
      ]
    },
    industryContext: {
      industryTitle: "IT Export and Maritime Logistics Focus in Kochi",
      description: "Delivering enterprise platform resilience for software export companies and maritime supply chain operators in Infopark Kakkanad and SmartCity Kochi."
    },
    complianceHighlights: ["24/7 SRE SLA", "ISO 27001", "SOC-2 Type II", "Undersea Fiber Resilience"],
    faqs: [
      {
        q: "What incident response SLAs does Devopstrio provide in Kochi?",
        a: "We contractually commit to rapid response times for P1 critical incidents and enterprise high-availability infrastructure targets."
      }
    ]
  }
];

export function createDynamicIndiaMapping(city: GlobalLocation, serviceSlug: string): LocationServiceMapping {
  const s = getAdaptedServiceBySlug(serviceSlug);
  const keyword = getExactServiceKeyword(serviceSlug, s?.title);
  const cityName = city.displayName;
  const profile = getServiceProfile(serviceSlug, cityName, "india");

  return {
    countryCode: "india",
    citySlug: city.slug,
    serviceSlug: serviceSlug,
    publicationStatus: "published",
    h1Title: `${keyword} Near Me in ${cityName}`,
    metaTitle: `${keyword} ${cityName} | Devopstrio`,
    metaDescription: `Explore ${keyword.toLowerCase()} for ${cityName} businesses, including Azure, AWS, cloud migration, infrastructure management and security solutions.`,
    commercialIntentQuery: `${keyword.toLowerCase()} near me in ${cityName}`,
    localChallenge: {
      title: profile.challengeTitle,
      points: profile.challengePoints
    },
    localSolution: {
      title: profile.solutionTitle,
      description: profile.solutionDesc,
      deliverables: profile.deliverables
    },
    industryContext: {
      industryTitle: `${cityName} Regional Commercial Ecosystem`,
      description: `Tailored engineering delivery supporting ${cityName}'s technology corridors, enterprise hubs, and digital scaleups.`
    },
    complianceHighlights: profile.complianceHighlights,
    faqs: profile.faqs
  };
}

export function getIndiaPilotMapping(citySlug: string, serviceSlug: string): LocationServiceMapping | undefined {
  const exact = pilotIndiaLocationServices.find(
    m => m.citySlug === citySlug && m.serviceSlug === serviceSlug && m.publicationStatus === "published"
  );
  if (exact) return exact;

  const city = Object.values(indiaLocations).find(l => l.slug === citySlug && l.publicationStatus === "published");
  if (!city) return undefined;

  const adapted = getAdaptedServiceBySlug(serviceSlug);
  if (!adapted) return undefined;

  return createDynamicIndiaMapping(city, serviceSlug);
}

export function getPublishedIndiaMappingsForCity(citySlug: string): LocationServiceMapping[] {
  const city = Object.values(indiaLocations).find(l => l.slug === citySlug && l.publicationStatus === "published");
  if (!city) return [];

  return TARGET_SERVICE_SLUGS.map(serviceSlug => {
    return getIndiaPilotMapping(citySlug, serviceSlug)!;
  }).filter(Boolean);
}

export function getPublishedIndiaCityServices(): LocationServiceMapping[] {
  const publishedCities = Object.values(indiaLocations).filter(l => l.publicationStatus === "published");
  const all: LocationServiceMapping[] = [];

  for (const city of publishedCities) {
    for (const serviceSlug of TARGET_SERVICE_SLUGS) {
      const mapping = getIndiaPilotMapping(city.slug, serviceSlug);
      if (mapping) all.push(mapping);
    }
  }
  return all;
}
