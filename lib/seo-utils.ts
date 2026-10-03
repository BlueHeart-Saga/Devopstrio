import { Metadata } from "next";

interface MetadataInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
  keywords,
  ogImage
}: MetadataInput): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devopstrio.co.uk";
  
  // Normalize the path so it starts with a leading slash and matches canonical structure
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${baseUrl}${cleanPath}`;
  
  // Cleanly replace any embedded "Devopstrio" or brand suffixes to avoid duplicate brand names
  let baseTitle = title
    .replace(/\bDevopstrio\b/gi, "")
    .replace(/[\s|:-]+$/, "")
    .replace(/^[\s|:-]+/, "")
    .replace(/\s+/g, " ")
    .trim();

  // If base title is too short (producing total length < 35 chars), enhance with keyword context
  if (baseTitle.length + " | Devopstrio".length < 35) {
    if (!/services|cloud|devops|ai|consulting|solutions|engineering|platform|privacy|terms|industry|marketing/i.test(baseTitle)) {
      baseTitle = `${baseTitle} — Enterprise Cloud & AI`;
    } else {
      baseTitle = `${baseTitle} Solutions`;
    }
  }

  let displayTitle = `${baseTitle} | Devopstrio`;

  // Trim display title cleanly at word boundaries if longer than 58 characters for strict Google title length compliance
  if (displayTitle.length > 58) {
    const brand = " | Devopstrio";
    const maxLen = 58 - brand.length;
    if (baseTitle.length > maxLen) {
      baseTitle = baseTitle
        .substring(0, maxLen)
        .replace(/\s+\S*$/, "")
        .trim()
        .replace(/[\s,.-]+$/, "");
    }
    displayTitle = `${baseTitle}${brand}`;
  }

  // Ensure description is cleanly within 120-155 characters
  let cleanDesc = description;
  if (cleanDesc.length > 155) {
    cleanDesc = cleanDesc.substring(0, 152).trim().replace(/[\s,.-]+$/, "") + "...";
  }

  const defaultKeywords = [
    "Devopstrio",
    "DevOps Consulting UK",
    "Platform Engineering Services",
    "Cloud Engineering Services",
    "Cloud Migration Services",
    "Azure Consulting Services",
    "AWS Consulting Services",
    "GCP Cloud Consulting",
    "Kubernetes Services",
    "Terraform Consulting",
    "DevSecOps Services",
    "Managed DevOps Services",
    "AI Consulting Services",
    "Generative AI Development",
    "Generative AI Consulting UK",
    "LLM Enterprise Application",
    "Vector Database Integration",
    "Data Engineering Services",
    "Business Intelligence Services",
    "Cybersecurity Consulting",
    "Cloud Security Services",
    "Digital Transformation Services",
    "Site Reliability Engineering",
    "Infrastructure as Code Services",
    "Enterprise Software Development",
    "MLOps Engineering",
    "IT Advisory Services UK",
    "SRE Automation",
    "Cloud Architecture",
    "Enterprise Software Solutions",
    "Data Governance"
  ];

  // Extract title-specific keywords so meta keywords dynamically match title and H1 for 100% keyword check compliance
  const titleWords = baseTitle
    .split(/[\s—|&,-]+/)
    .map(w => w.trim())
    .filter(w => w.length > 3 && !/^(and|with|for|our|the|your|from|into|over|upon|via|about|sheets|decks)$/i.test(w));

  const pathKeywords = cleanPath
    .split("/")
    .filter(Boolean)
    .map(segment => segment.replace(/-/g, " "))
    .filter(Boolean);

  const dynamicKeywords = [...new Set([...(keywords || []), ...titleWords, ...pathKeywords])];
  const mergedKeywords = [...new Set([...dynamicKeywords, ...defaultKeywords])];

  const image = ogImage || `${baseUrl}/webp/apple-touch-icon.webp`;

  return {
    title: displayTitle,
    description: cleanDesc,
    keywords: mergedKeywords.join(", "),
    alternates: {
      canonical: canonicalUrl,
      types: {
        "application/rss+xml": [
          { url: `${baseUrl}/feed.xml`, title: "Insights & Technical Publications Feed" }
        ]
      }
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: canonicalUrl,
      siteName: "Devopstrio",
      title: displayTitle,
      description: cleanDesc,
      images: [
        {
          url: image,
          width: ogImage ? 1200 : 180,
          height: ogImage ? 630 : 180,
          alt: title
        }
      ]
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title: displayTitle,
      description: cleanDesc,
      images: [image]
    }
  };
}

// Authoritative exact route map matching PAGES_SEO_DIRECTORY.md
const ROUTE_SEO_MAP: Record<string, { title: string; description: string; keywords?: string[] }> = {
  "/": {
    title: "Enterprise Cloud, DevOps & AI Engineering Services",
    description: "Devopstrio delivers principal-led cloud-native architecture, SRE automation, Zero-Trust cybersecurity, and production-grade Generative AI engineering.",
    keywords: ["Devopstrio", "Cloud Engineering", "DevOps Consulting", "Generative AI", "SRE Automation"]
  },
  "/sitemap": {
    title: "Site Index & Architecture Directory",
    description: "Navigate Devopstrio's complete site directory covering enterprise cloud services, AI innovation, ecosystem alliances, and technical publications.",
    keywords: ["Sitemap", "Site Directory", "Devopstrio Navigation", "Engineering Index"]
  },
  "/about": {
    title: "About Our Company & Technology Services",
    description: "Learn about Devopstrio Limited, our global engineering hubs, company history, enterprise values, and mission to eliminate software failure worldwide.",
    keywords: ["About Devopstrio", "Company History", "Engineering Hubs", "Global Services"]
  },
  "/about/company-overview": {
    title: "Company Overview | Corporate Identity & Mission",
    description: "Detailed corporate background of Devopstrio Limited, detailing our governance framework, executive mission, vision, and strategic goals.",
    keywords: ["Company Overview", "Corporate Identity", "Devopstrio Mission", "UK Tech Services"]
  },
  "/about/leadership-team": {
    title: "Leadership Team | Executive Officers & Technical Board",
    description: "Meet the principal engineers, enterprise architects, and executive leaders driving Devopstrio's cloud and AI innovations globally.",
    keywords: ["Leadership Team", "Executive Board", "Cloud Architects", "Devopstrio Directors"]
  },
  "/about/our-culture-people": {
    title: "Our Engineering Culture & Life",
    description: "Explore the work environment, continuous learning culture, diversity initiatives, and peer engineering standards at Devopstrio.",
    keywords: ["Devopstrio Culture", "Life at Devopstrio", "Engineering Culture", "Tech Guilds"]
  },
  "/about/global-internship": {
    title: "Global Internship Program | Early Career Tech Bootcamp",
    description: "Kickstart your cloud, DevOps, and AI engineering career with Devopstrio's hands-on global internship program and direct mentorship.",
    keywords: ["Global Internship", "Tech Bootcamp", "DevOps Internship", "AI Engineering Career"]
  },
  "/about/global-presence": {
    title: "Global Presence | Developer Hubs & Regional Centers",
    description: "Explore Devopstrio's international office locations and follow-the-sun delivery centers across the UK, Europe, and India.",
    keywords: ["Global Presence", "London Office", "Delivery Centers", "UK Engineering Hub"]
  },
  "/about/partnerships-certifications": {
    title: "Partnerships & Certifications | AWS, Azure & GCP",
    description: "Review Devopstrio's certified partner status with Microsoft Azure, Amazon Web Services, Google Cloud, Cisco, SAP, and ServiceNow.",
    keywords: ["AWS Partner", "Azure Solutions Partner", "GCP Premier Partner", "ISO 27001"]
  },
  "/about/awards-recognition": {
    title: "Awards & Industry Recognition Honors",
    description: "Discover the enterprise awards, workplace honors, and cloud architecture recognitions awarded to Devopstrio.",
    keywords: ["Devopstrio Awards", "Industry Recognition", "Top Cloud Consultancy", "DevOps Awards"]
  },
  "/about/sustainability-csr": {
    title: "Sustainability & CSR | Green Cloud & Ethical Tech",
    description: "Devopstrio's commitment to net-zero carbon cloud hosting, energy-efficient FinOps, and community open-source initiatives.",
    keywords: ["Green Cloud", "Sustainability", "FinOps Carbon Reduction", "Ethical Engineering"]
  },
  "/about/testimonials": {
    title: "Client Testimonials & Reviews Partner Praise",
    description: "Read verified reviews and testimonials from CTOs, CISOs, and VP Engineers who partner with Devopstrio for enterprise engineering.",
    keywords: ["Client Testimonials", "CTO Reviews", "Enterprise Partner Feedback", "Verified Case Reviews"]
  },
  "/about/customer-support": {
    title: "Enterprise Customer Support | 24/7 SRE Support Desk",
    description: "Access Devopstrio's 24/7 SRE support portal, ticket tracking, emergency incident response, and guaranteed SLA desks.",
    keywords: ["Customer Support", "24/7 SRE Portal", "Incident Management", "SLA Desk"]
  },
  "/careers": {
    title: "Careers & Global Engineering Opportunities",
    description: "Explore open positions for Senior DevOps Engineers, Cloud Architects, Security Consultants, and AI Specialists at Devopstrio.",
    keywords: ["Careers", "DevOps Jobs", "Cloud Architect Careers", "AI Engineering Jobs"]
  },
  "/careers/jobs": {
    title: "Open Job Positions Career Opportunities",
    description: "Browse active job openings, detailed role specifications, and apply to join Devopstrio's elite global engineering team.",
    keywords: ["Open Jobs", "Engineering Careers", "DevOps Opportunities", "Apply Devopstrio"]
  },
  "/contact": {
    title: "Contact Us & Schedule Scoping Call",
    description: "Get in touch with Devopstrio's principal consultants to request custom architecture assessments or project proposals.",
    keywords: ["Contact Us", "Technical Scoping Call", "Consultation", "Devopstrio Advisory"]
  },

  // Services Hubs & Individual Service Categories
  "/services": {
    title: "Engineering Services & Practice Areas | Devopstrio",
    description: "Comprehensive overview of Devopstrio's core practice areas spanning AI, Cloud, DevOps, Security, and Modern Software Engineering.",
    keywords: ["Engineering Services", "Practice Areas", "IT Advisory", "Enterprise Systems"]
  },
  "/services/explore": {
    title: "Services Explorer | Search 250+ Tech Capabilities",
    description: "Search, filter, and discover Devopstrio's complete index of 250+ modular technical capabilities and cloud blueprints.",
    keywords: ["Services Explorer", "Capability Search", "Cloud Blueprints", "DevOps Capabilities"]
  },
  "/services/ai-data-innovation": {
    title: "AI Service UK | AI Solutions & Business Automation",
    description: "Explore AI service UK solutions for smarter business operations. Get AI consulting, automation, development and custom AI solutions.",
    keywords: ["AI Service UK", "AI Solutions", "Business Automation", "AI Consulting UK", "Enterprise AI Development"]
  },
  "/services/ai-data-innovation/generative-ai-solutions": {
    title: "Gen AI Services UK | Generative AI Services & Consulting",
    description: "Transform business processes with Gen AI services UK. Get generative AI services, consulting and custom AI solutions for business growth.",
    keywords: ["Gen AI Services UK", "Generative AI Services", "Generative AI Consulting", "Custom AI Solutions", "Enterprise Gen AI"]
  },
  "/services/ai-data-innovation/ai-agents-automation": {
    title: "AI Agents UK | AI Automation & Agent Development",
    description: "Build smarter workflows with AI agents UK. Get AI automation services, intelligent automation and custom AI agent development for your business.",
    keywords: ["AI Agents UK", "AI Automation Services", "Intelligent Automation", "AI Agent Development", "Custom AI Agents"]
  },
  "/services/ai-data-innovation/machine-learning-engineering": {
    title: "Machine Learning Engineering Services UK | ML Solutions",
    description: "Build smarter systems with machine learning engineering services UK. Get ML consulting, model development and custom machine learning solutions.",
    keywords: ["Machine Learning Engineering Services UK", "ML Solutions UK", "ML Consulting", "Model Development", "Custom Machine Learning Solutions"]
  },
  "/services/ai-data-innovation/mlops-ai-operations": {
    title: "MLOps Services UK | AI Deployment & Model Monitoring",
    description: "Streamline AI operations with MLOps services UK. Get MLOps consulting, machine learning deployment and AI model monitoring solutions.",
    keywords: ["MLOps Services UK", "AI Deployment", "AI Model Monitoring", "MLOps Consulting", "Machine Learning Deployment"]
  },
  "/services/ai-data-innovation/mlops-pipeline-engineering": {
    title: "MLOps Services UK | AI Deployment & Model Monitoring",
    description: "Streamline AI operations with MLOps services UK. Get MLOps consulting, machine learning deployment and AI model monitoring solutions.",
    keywords: ["MLOps Services UK", "AI Deployment", "AI Model Monitoring", "MLOps Consulting", "Machine Learning Deployment"]
  },
  "/services/cloud-services": {
    title: "Cloud Services & Architecture | AWS, Azure & GCP",
    description: "Accelerate cloud migration, build multi-account landing zones, and reduce cloud spend by 35%+ with expert FinOps.",
    keywords: ["Cloud Services", "AWS Migration", "Azure Architecture", "GCP Consulting", "FinOps"]
  },
  "/services/cloud-services/cloud-migration": {
    title: "Cloud Migration Services UK | Devopstrio",
    description: "Explore cloud migration services in UK for secure workload transitions, modern infrastructure, hybrid cloud adoption and smoother operations.",
    keywords: ["Cloud Migration Services UK", "UK Cloud Migration", "Cloud Migration Specialists UK", "Workload Transition", "Hybrid Cloud Adoption"]
  },
  "/services/cloud-services/cloud-architecture": {
    title: "Cloud Architecture Services in UK | Devopstrio",
    description: "Explore cloud architecture services in the UK for secure, flexible infrastructure, modern cloud environments, and architectures aligned with business needs.",
    keywords: ["Cloud Architecture Services in UK", "Cloud Architecture UK", "Enterprise Cloud Architecture", "Cloud Infrastructure Design"]
  },
  "/services/cloud-services/aws-services": {
    title: "AWS Cloud Services UK | Devopstrio",
    description: "AWS services in UK give businesses access to cloud computing, storage, databases, networking, and security capabilities for modern infrastructure.",
    keywords: ["AWS Services UK", "AWS Cloud Services UK", "AWS Consulting UK", "Amazon Web Services UK"]
  },
  "/services/cloud-services/cloud-security": {
    title: "Cloud Security Services UK | Secure Cloud Operations",
    description: "Cloud security services UK to protect cloud infrastructure, data, workloads and access while addressing vulnerabilities, compliance risks and security threats.",
    keywords: ["Cloud Security Services UK", "Secure Cloud Operations", "Cloud Workload Protection", "Cloud Compliance UK"]
  },
  "/services/cybersecurity/security-assessment": {
    title: "Security Assessment Services UK | Devopstrio",
    description: "Security assessment services UK to identify vulnerabilities, review security controls, and address compliance risks across applications, networks, and cloud environments.",
    keywords: ["Security Assessment Services UK", "Security Assessment UK", "Vulnerability Review", "Compliance Risk Assessment"]
  },
  "/services/cybersecurity/vulnerability-management": {
    title: "Vulnerability Management Services UK | Risk & Threat Protection",
    description: "Vulnerability management services UK help identify, assess and remediate security weaknesses across networks, endpoints, applications and cloud environments.",
    keywords: ["Vulnerability Management Services UK", "Risk & Threat Protection", "Vulnerability Remediation", "Threat Visibility"]
  },
  "/services/devops-automation": {
    title: "DevOps & Automation Services | GitOps & CI/CD",
    description: "Automate software delivery pipelines, provision self-service developer portals, and orchestrate production Kubernetes.",
    keywords: ["DevOps Automation", "CI/CD Pipelines", "Kubernetes", "GitOps", "Infrastructure as Code"]
  },
  "/services/cybersecurity": {
    title: "Cybersecurity Services | Zero-Trust & Hardening",
    description: "Protect enterprise assets with automated vulnerability scanning, penetration testing, Zero-Trust networks, and IAM rules.",
    keywords: ["Cybersecurity", "Zero-Trust", "Penetration Testing", "SOC Operations", "IAM Security"]
  },
  "/services/software-development": {
    title: "Enterprise Software Development | SaaS & APIs",
    description: "Build scalable modern web applications, high-throughput microservices, and custom enterprise SaaS platforms.",
    keywords: ["Software Development", "Microservices", "SaaS Engineering", "Next.js", "API Integration"]
  },
  "/services/digital-transformation": {
    title: "Digital Transformation | Legacy Modernization",
    description: "Modernize monolithic mainframes, decouple legacy databases, and refactor business workflows into cloud-native microservices.",
    keywords: ["Digital Transformation", "Legacy Refactoring", "Workflow Automation", "Enterprise Modernization"]
  },
  "/services/data-engineering": {
    title: "Data Engineering Services | Lakehouse & ETL Pipelines",
    description: "Unify enterprise telemetry with Apache Flink, Delta Lake, and high-performance automated ETL data pipelines.",
    keywords: ["Data Engineering", "Data Lakes", "ETL Pipelines", "Delta Lake", "Real-Time Telemetry"]
  },
  "/services/managed-services": {
    title: "MSP UK | Secure Managed Services for Businesses",
    description: "Discover MSP UK services designed for secure and efficient business operations. Get managed service provider support and tailored solutions for your organisation.",
    keywords: ["MSP UK", "Managed Services", "Managed Service Provider UK", "IT Support UK", "Managed IT Services", "24/7 SRE", "Cluster Operations", "Database Support", "Incident Recovery"]
  },
  "/services/managed-services/infrastructure-management": {
    title: "Infrastructure Management Services UK | Expert Support",
    description: "Improve performance with infrastructure management services UK. Get secure infrastructure management, monitoring and reliable technical support.",
    keywords: ["Infrastructure Management Services UK", "IT Infrastructure Management UK", "Managed Infrastructure Services", "Network Infrastructure Management UK", "Infrastructure Management Solutions UK"]
  },
  "/services/managed-services/managed-cloud": {
    title: "Managed Cloud Services UK | Secure Cloud Solutions",
    description: "Scale securely with managed cloud services UK. Get reliable cloud management, monitoring and expert support for your business.",
    keywords: ["Managed Cloud Services UK", "Managed Cloud Solutions UK", "Managed Cloud Hosting UK", "Cloud Management Services UK", "Cloud Support UK"]
  },
  "/services/managed-services/cloud-managed-services": {
    title: "Managed Cloud Services UK | Secure Cloud Solutions",
    description: "Scale securely with managed cloud services UK. Get reliable cloud management, monitoring and expert support for your business.",
    keywords: ["Managed Cloud Services UK", "Managed Cloud Solutions UK", "Managed Cloud Hosting UK", "Cloud Management Services UK", "Cloud Support UK"]
  },
  "/services/qa-testing": {
    title: "QA & Performance Testing | Playwright & k6 Scripts",
    description: "Ensure zero-defect deployments with automated Playwright regression suites and heavy k6 API load testing.",
    keywords: ["QA Testing", "Automated Testing", "Playwright", "k6 Load Testing", "Quality Engineering"]
  },
  "/services/it-consulting": {
    title: "IT Strategy & Technical Consulting | Architecture Audits",
    description: "Independent technical audits, cloud maturity assessments, and enterprise disaster recovery planning by principal architects.",
    keywords: ["IT Consulting", "Architecture Audits", "Tech Advisory", "Disaster Recovery", "Cloud Assessment"]
  },
  "/services/ai-consulting": {
    title: "Enterprise AI Consulting & Advisory Practice | Devopstrio",
    description: "Strategic AI advisory, LLM feasibility audits, Responsible AI governance, and enterprise AI Centre of Excellence roadmaps.",
    keywords: ["AI Consulting", "AI Advisory", "LLM Strategy", "Cognitive Architecture", "AI Governance"]
  },
  "/services/ai-consulting/ai-strategy-advisory": {
    title: "AI Strategy & Executive Advisory Services | Devopstrio",
    description: "Executive AI strategy formulation, multi-year technology roadmap planning, and C-suite alignment for enterprise AI adoption.",
    keywords: ["AI Strategy", "Executive AI Advisory", "C-Suite AI Alignment", "Enterprise AI Roadmap"]
  },
  "/services/ai-consulting/ai-readiness-assessment": {
    title: "AI Readiness Assessment & Maturity Audit | Devopstrio",
    description: "Comprehensive evaluation of data infrastructure, technical debt, security posture, and organizational AI maturity.",
    keywords: ["AI Readiness Assessment", "AI Data Audit", "Infrastructure Readiness", "Technical Debt Score"]
  },
  "/services/ai-consulting/generative-ai-consulting": {
    title: "Generative AI Consulting & RAG Strategy | Devopstrio",
    description: "Tailored Generative AI strategy, LLM selection, RAG vector architecture design, and custom prompt engineering frameworks.",
    keywords: ["Generative AI Consulting", "LLM Strategy", "Enterprise RAG Design", "Vector Database Architecture"]
  },
  "/services/ai-consulting/ai-use-case-discovery": {
    title: "AI Use Case Discovery & Prioritization | Devopstrio",
    description: "Identify, evaluate, and rank enterprise AI use cases based on business impact, technical feasibility, and time-to-value.",
    keywords: ["AI Use Case Discovery", "AI Opportunity Mapping", "Impact Complexity Scoring", "AI PoC Scoping"]
  },
  "/services/ai-consulting/ai-governance-risk": {
    title: "AI Governance, Risk & Responsible AI Services | Devopstrio",
    description: "Establish Responsible AI frameworks, ethical guardrails, EU AI Act compliance policies, and hallucination risk mitigation.",
    keywords: ["AI Governance", "Responsible AI", "EU AI Act Compliance", "AI Risk Management", "Ethical AI Audit"]
  },
  "/services/ai-consulting/ai-operating-model": {
    title: "AI Operating Model & Centre of Excellence (CoE) | Devopstrio",
    description: "Design scalable AI organizational structures, talent upskilling plans, and enterprise AI Centres of Excellence (CoE).",
    keywords: ["AI Operating Model", "AI Centre of Excellence", "AI CoE Design", "MLOps Team Structure"]
  },
  "/services/ai-consulting/ai-roi-business-case": {
    title: "AI ROI, Business Case & Value Realisation | Devopstrio",
    description: "Build rigorous financial models, token cost estimations, TCO projections, and value tracking for enterprise AI investments.",
    keywords: ["AI ROI", "AI Business Case", "Token Cost Modeling", "AI Inference TCO"]
  },
  "/services/ai-consulting/ai-vendor-platform-selection": {
    title: "AI Vendor & Platform Selection Advisory | Devopstrio",
    description: "Unbiased technical evaluation and procurement advisory for AI platforms, vector databases, and cloud LLM providers.",
    keywords: ["AI Vendor Selection", "LLM Provider Evaluation", "Vector DB Benchmark", "AI Procurement Advisory"]
  },
  "/services/ai-modernization": {
    title: "AI System Modernization & Refactoring Practice | Devopstrio",
    description: "Upgrade legacy enterprise applications with intelligent agentic workflows, embedded LLM features, real-time analytics, and automated decision engines.",
    keywords: ["AI Modernization", "Legacy System Refactoring", "Agentic Workflows", "Embedded AI"]
  },
  "/services/ai-modernization/legacy-application-ai-modernization": {
    title: "Legacy Application AI Modernization Services | Devopstrio",
    description: "Transform legacy enterprise applications into AI-enabled intelligent platforms without risky full-codebase rewrites.",
    keywords: ["Legacy Application AI Modernization", "AI System Modernization", "Monolith AI Upgrade", "Legacy AI Wrapper"]
  },
  "/services/ai-modernization/ai-enabled-application-modernization": {
    title: "AI-Enabled Application Modernization | Devopstrio",
    description: "Enhance existing software with embedded foundation models, RAG search, intelligent document processing, and predictive agents.",
    keywords: ["AI-Enabled Application Modernization", "Embedded LLM Features", "Document AI Processing", "Predictive Agents"]
  },
  "/services/ai-modernization/code-modernization-refactoring": {
    title: "AI-Assisted Code Modernization & Refactoring | Devopstrio",
    description: "Accelerate legacy codebase refactoring, COBOL/Java/C# translation, and unit test generation using specialized AI code models.",
    keywords: ["Code Modernization", "AI Code Refactoring", "COBOL Translation", "Automated Test Generation"]
  },
  "/services/ai-modernization/legacy-system-intelligence": {
    title: "Legacy System Discovery & Intelligence | Devopstrio",
    description: "Use LLM intelligence to reverse-engineer undocumented legacy codebases, schema structures, and business logic rules.",
    keywords: ["Legacy System Intelligence", "Codebase Discovery", "Automated Documentation", "Business Rule Extraction"]
  },
  "/services/ai-modernization/ai-integration-existing-applications": {
    title: "AI Integration for Existing Applications | Devopstrio",
    description: "Integrate vector search, natural language interfaces, and autonomous AI agents smoothly into active enterprise software.",
    keywords: ["AI Integration", "Vector Search Integration", "Natural Language Interface", "Autonomous AI Agents"]
  },
  "/services/ai-modernization/monolith-modernization": {
    title: "Monolith Modernization with AI-Assisted Engineering | Devopstrio",
    description: "Decompose monolithic enterprise architectures into modular microservices using AI-guided domain-driven design.",
    keywords: ["Monolith Modernization", "AI Microservices Scaffolding", "Domain-Driven Design", "Database Decoupling"]
  },
  "/services/ai-modernization/ai-powered-testing-modernization": {
    title: "AI-Powered Testing & Quality Modernization | Devopstrio",
    description: "Modernize legacy QA processes with AI test case generation, self-healing Playwright scripts, and intelligent bug triage.",
    keywords: ["AI-Powered Testing", "Self-Healing Playwright", "Autonomous Test Case Generation", "Intelligent QA Triage"]
  },
  "/services/ai-modernization/modernization-assessment-roadmap": {
    title: "Modernization Assessment & Roadmap | Devopstrio",
    description: "Evaluate technical debt, calculate modernization ROI, and map a multi-phase AI-assisted system refactoring roadmap.",
    keywords: ["Modernization Assessment", "Modernization Roadmap", "Technical Debt Evaluation", "Refactoring ROI"]
  },
  "/services/ai-data-innovation/data-engineering": {
    title: "Data Engineering & AI Pipelines | Devopstrio AI",
    description: "Engineer high-throughput vector storage, feature stores, and clean data pipelines designed specifically for AI models.",
    keywords: ["AI Data Engineering", "Vector Storage", "Feature Store", "LLM Data Pipelines"]
  },
  "/services/devops-automation/platform-engineering": {
    title: "Platform Engineering Services | Developer Portals",
    description: "Design self-service Internal Developer Portals (IDPs) and automated infrastructure templates to accelerate engineering speed.",
    keywords: ["Platform Engineering Services", "Internal Developer Portal", "IDP Automation", "Self-Service Cloud"]
  },
  "/services/qa-testing/quality-engineering": {
    title: "Quality Engineering & Testing | Devopstrio Services",
    description: "Integrate continuous testing, shift-left QA practices, and automated regression frameworks into active build pipelines.",
    keywords: ["Quality Engineering Services", "Shift-Left QA", "Continuous Testing", "Regression Suites"]
  },
  "/services/ai-data-innovation/data-governance": {
    title: "Data Governance & Regulatory Compliance Services",
    description: "Establish automated data lineage, access controls, cataloging, and GDPR/CCPA compliance across corporate data assets.",
    keywords: ["Data Governance", "Regulatory Compliance", "Data Lineage", "GDPR CCPA"]
  },
  "/services/cloud-services/azure-services": {
    title: "Microsoft Azure Cloud Services & Migration Solutions",
    description: "Architect secure Azure cloud environments, AKS Kubernetes clusters, Azure AI services, and enterprise landing zones.",
    keywords: ["Azure Services", "AKS Migration", "Azure Landing Zone", "Microsoft Cloud"]
  },
  "/services/it-consulting/cloud-consulting": {
    title: "Cloud Consulting UK | Expert Cloud Strategy & Migration",
    description: "Trusted cloud consulting UK experts helping businesses migrate, optimize, and scale on Azure, AWS, and GCP. Get secure, cost-effective cloud solutions today.",
    keywords: ["Cloud Consulting UK", "Cloud Strategy", "Cloud Migration", "Azure AWS GCP", "Cloud Consulting Services"]
  },
  "/services/it-consulting/cybersecurity-consulting": {
    title: "Cybersecurity Consulting UK | Trusted Security Experts",
    description: "Protect your business with expert cybersecurity consulting UK companies rely on. From risk assessments to threat protection, we help you stay secure, compliant, and resilient.",
    keywords: ["Cybersecurity Consulting UK", "Cybersecurity Experts", "Threat Protection", "Risk Assessments", "SOC 2 ISO 27001"]
  },
  "/services/software-development/saas-product-development": {
    title: "SaaS Product Development UK | Custom Cloud Software Solutions",
    description: "Expert SaaS product development UK teams trust from MVP to enterprise scale. We design, build, and grow secure, multi-tenant SaaS platforms tailored to your business.",
    keywords: ["SaaS Product Development UK", "Custom Cloud Software Solutions", "Multi-Tenant SaaS", "MVP Development", "SaaS Engineering UK"]
  },
  "/services/qa-testing/api-testing": {
    title: "Automated API Testing & Contract Verification",
    description: "Ensure high-throughput REST and GraphQL API reliability with automated regression testing, mock servers, and contract checks.",
    keywords: ["API Testing", "Contract Verification", "REST Testing", "GraphQL Automation"]
  },
  "/services/qa-testing/security-testing": {
    title: "Security Testing & Penetration Audit Services",
    description: "Identify vulnerabilities, secure application endpoints, and conduct comprehensive penetration testing before deployment.",
    keywords: ["Security Testing", "Penetration Audit", "Vulnerability Assessment"]
  },
  "/services/managed-services/msp-uk": {
    title: "Managed Service Provider UK (MSP Services) | Devopstrio",
    description: "Premier UK Managed Service Provider (MSP) delivering 24/7 enterprise IT operations, Cyber Essentials Plus compliance, and SLA-backed multi-cloud management.",
    keywords: ["Managed Service Provider UK", "MSP Services UK", "MSP Provider UK", "24/7 Managed IT Operations", "Cyber Essentials Plus"]
  },
  "/services/managed-services/24-7-support-services": {
    title: "24/7 IT Support & Managed Operations | Devopstrio",
    description: "Round-the-clock IT support, infrastructure, application, cloud, platform, incident, and operational support with guaranteed SLA response times.",
    keywords: ["24/7 IT Support", "Managed Operations", "24/7 Managed Services", "Incident Support SLA", "Always-On Support"]
  },
  "/services/software-development/enterprise-application-development": {
    title: "Enterprise Application Development Services | Devopstrio",
    description: "Build robust, mission-critical enterprise software architectures designed for high transactional throughput and security.",
    keywords: ["Enterprise Application Development", "Custom Enterprise Software", "High Throughput Systems", "Enterprise Architecture"]
  },
  "/services/software-development/web-application-development": {
    title: "Web Application Development Services | Devopstrio",
    description: "Engineer dynamic, responsive Next.js and React web applications optimized for lightning-fast speeds and high conversions.",
    keywords: ["Web Application Development", "Next.js Development", "React Web Apps", "High-Performance Web Platforms"]
  },
  "/services/software-development/mobile-application-development": {
    title: "Mobile Application Development Services | Devopstrio",
    description: "Develop high-performance native and cross-platform mobile apps for iOS and Android with seamless offline synchronization.",
    keywords: ["Mobile Application Development", "iOS Development", "Android Apps", "Flutter Cross-Platform"]
  },
  "/services/digital-transformation/legacy-system-modernization": {
    title: "Legacy System Modernization Services | Devopstrio",
    description: "Migrate mainframe codebases and outdated relational databases to modern cloud-native architectures with zero operational disruption.",
    keywords: ["Legacy System Modernization", "Mainframe Migration", "Monolith Refactoring", "Cloud Native Modernization"]
  },
  "/services/managed-services/managed-devops-services": {
    title: "Managed DevOps Services | 24/7 SRE & Kubernetes",
    description: "Cluster lifecycle management, automated node upgrades, CI/CD runner tuning, and production ingress control.",
    keywords: ["Managed DevOps Services", "Kubernetes Management", "CI/CD Tuning", "SRE Governance"]
  },
  "/services/managed-services/managed-security-services": {
    title: "Managed Security Services (MSSP UK) | 24/7 SOC",
    description: "Continuous threat hunting, real-time alert triage, vulnerability isolation, and rapid incident remediation.",
    keywords: ["Managed Security Services", "MSSP UK", "24/7 SOC", "Threat Remediation", "SIEM Management"]
  },
  "/services/data-engineering/data-lakes-lakehouse-architecture": {
    title: "Data Lakes & Lakehouse Architecture Services | Devopstrio",
    description: "Unify batch and real-time streaming data on object storage using Delta Lake, Databricks, and Apache Iceberg lakehouse patterns.",
    keywords: ["Data Lakes", "Lakehouse Architecture", "Databricks", "Delta Lake", "Apache Iceberg"]
  },

  "/services/ai-data-innovation/business-intelligence-analytics": {
    title: "Business Intelligence & Analytics Services | Devopstrio",
    description: "Consolidated enterprise dashboards, telemetry, and reporting engines.",
    keywords: ["Business Intelligence & Analytics", "Business Intelligence & Analytics UK", "Devopstrio Services"]
  },
  "/services/ai-data-innovation/predictive-analytics": {
    title: "Predictive Analytics Services | Devopstrio",
    description: "Time-series forecasting, customer churn and predictive models.",
    keywords: ["Predictive Analytics", "Predictive Analytics UK", "Devopstrio Services"]
  },
  "/services/ai-data-innovation/generative-ai-mlops-engineering": {
    title: "Generative AI & MLOps Engineering Services | Devopstrio",
    description: "Comprehensive enterprise Generative AI architectures, LLM fine-tuning, vector database pipelines, and production MLOps operations.",
    keywords: ["Generative AI & MLOps Engineering", "Generative AI & MLOps Engineering UK", "Devopstrio Services"]
  },
  "/services/cloud-services/cloud-strategy-consulting": {
    title: "Cloud Strategy & Consulting Services | Devopstrio",
    description: "Designing tailored cloud architecture blueprints, vendor evaluation, and cloud readiness roadmaps.",
    keywords: ["Cloud Strategy & Consulting", "Cloud Strategy & Consulting UK", "Devopstrio Services"]
  },
  "/services/cloud-services/google-cloud-services": {
    title: "Google Cloud Services Services | Devopstrio",
    description: "GKE autopilot setups, BigQuery data platforms, and Vertex AI integrations on GCP.",
    keywords: ["Google Cloud Services", "Google Cloud Services UK", "Devopstrio Services"]
  },
  "/services/cloud-services/cloud-managed-services": {
    title: "Cloud Managed Services Services | Devopstrio",
    description: "24/7 outsourced management, OS patching, and active cloud backups.",
    keywords: ["Cloud Managed Services", "Cloud Managed Services UK", "Devopstrio Services"]
  },
  "/services/cloud-services/finops-cost-optimization": {
    title: "FinOps & Cost Optimization Services | Devopstrio",
    description: "Spend optimization, Savings Plan allocations, and traffic auto-scaling.",
    keywords: ["FinOps & Cost Optimization", "FinOps & Cost Optimization UK", "Devopstrio Services"]
  },
  "/services/cloud-services/multi-cloud-migration-ops": {
    title: "Multi-Cloud Migration & Operations Services | Devopstrio",
    description: "Comprehensive multi-cloud infrastructure strategy, seamless migration execution, landing zone automation, and 24/7 cloud management.",
    keywords: ["Multi-Cloud Migration & Operations", "Multi-Cloud Migration & Operations UK", "Devopstrio Services"]
  },
  "/services/devops-automation/cicd-implementation": {
    title: "CI/CD Implementation Services | Devopstrio",
    description: "Automated Git-triggered builds and testing environments.",
    keywords: ["CI/CD Implementation", "CI/CD Implementation UK", "Devopstrio Services"]
  },
  "/services/devops-automation/cicd-pipeline-automation": {
    title: "CI/CD Pipeline Automation Services | Devopstrio",
    description: "Comprehensive enterprise CI/CD pipeline automation, GitOps continuous delivery, automated testing gates, and deployment acceleration.",
    keywords: ["CI/CD Pipeline Automation", "CI/CD Pipeline Automation UK", "Devopstrio Services"]
  },
  "/services/devops-automation/infrastructure-as-code": {
    title: "Infrastructure as Code Services | Devopstrio",
    description: "Reusable Terraform, Ansible, and Packer infrastructure setups.",
    keywords: ["Infrastructure as Code", "Infrastructure as Code UK", "Devopstrio Services"]
  },
  "/services/devops-automation/kubernetes-services": {
    title: "Kubernetes Services Services | Devopstrio",
    description: "Multi-tenant EKS, AKS, GKE clusters with Karpenter and service mesh.",
    keywords: ["Kubernetes Services", "Kubernetes Services UK", "Devopstrio Services"]
  },
  "/services/devops-automation/kubernetes-container-orchestration": {
    title: "Kubernetes & Container Orchestration Services | Devopstrio",
    description: "Production-grade Kubernetes cluster design, automated auto-scaling, GitOps delivery, container security, and service mesh management.",
    keywords: ["Kubernetes & Container Orchestration", "Kubernetes & Container Orchestration UK", "Devopstrio Services"]
  },
  "/services/devops-automation/devsecops": {
    title: "DevSecOps Services | Devopstrio",
    description: "Sonarqube SAST checks and Snyk vulnerability scanning inside pipelines.",
    keywords: ["DevSecOps", "DevSecOps UK", "Devopstrio Services"]
  },
  "/services/devops-automation/site-reliability-engineering": {
    title: "Site Reliability Engineering (SRE) Services | Devopstrio",
    description: "SLI/SLO definition, error budget tracking, and pager alerts.",
    keywords: ["Site Reliability Engineering (SRE)", "Site Reliability Engineering (SRE) UK", "Devopstrio Services"]
  },
  "/services/devops-automation/release-automation": {
    title: "Release Automation Services | Devopstrio",
    description: "Canary deployments, blue-green releases, and rollback alerts.",
    keywords: ["Release Automation", "Release Automation UK", "Devopstrio Services"]
  },
  "/services/devops-automation/monitoring-observability": {
    title: "Monitoring, Observability & APM Services | Devopstrio",
    description: "Distributed OpenTelemetry tracing, Jaeger dashboards, APM metrics, and ELK logs.",
    keywords: ["Monitoring, Observability & APM", "Monitoring, Observability & APM UK", "Devopstrio Services"]
  },
  "/services/cybersecurity/penetration-testing": {
    title: "Penetration Testing Services | Devopstrio",
    description: "Ethical hacking, API authorization checks, and exploit reports.",
    keywords: ["Penetration Testing", "Penetration Testing UK", "Devopstrio Services"]
  },
  "/services/cybersecurity/security-operations-center": {
    title: "Security Operations Center (SOC) Services | Devopstrio",
    description: "24/7 SIEM monitoring, threat hunts, and SOAR event actions.",
    keywords: ["Security Operations Center (SOC)", "Security Operations Center (SOC) UK", "Devopstrio Services"]
  },
  "/services/cybersecurity/identity-access-management": {
    title: "Identity & Access Management Services | Devopstrio",
    description: "Okta single sign-on (SSO), adaptive MFA, and PAM tools.",
    keywords: ["Identity & Access Management", "Identity & Access Management UK", "Devopstrio Services"]
  },
  "/services/cybersecurity/cloud-security": {
    title: "Cloud Security Services | Devopstrio",
    description: "Prisma Cloud audits, micro-segmentation, and least-privilege rules.",
    keywords: ["Cloud Security", "Cloud Security UK", "Devopstrio Services"]
  },
  "/services/cybersecurity/compliance-governance": {
    title: "Compliance & Governance Services | Devopstrio",
    description: "Audit readiness for SOC2, ISO27001, HIPAA, and policy planning.",
    keywords: ["Compliance & Governance", "Compliance & Governance UK", "Devopstrio Services"]
  },
  "/services/cybersecurity/zero-trust-architecture": {
    title: "Zero Trust Architecture & Identity-Centric Security Services | Devopstrio",
    description: "Endpoint checks, identity verification, SDP setups, and SASE security boundaries.",
    keywords: ["Zero Trust Architecture & Identity-Centric Security", "Zero Trust Architecture & Identity-Centric Security UK", "Devopstrio Services"]
  },
  "/services/cybersecurity/zero-trust-architecture-iam": {
    title: "Zero Trust Architecture & IAM Services | Devopstrio",
    description: "Comprehensive Zero Trust identity architecture, least-privilege IAM controls, adaptive MFA, continuous micro-segmentation, and compliance enforcement.",
    keywords: ["Zero Trust Architecture & IAM", "Zero Trust Architecture & IAM UK", "Devopstrio Services"]
  },
  "/services/managed-services/247-managed-devops-secops": {
    title: "24/7 Managed DevOps & SecOps Services | Devopstrio",
    description: "24/7 dedicated SRE monitoring, managed DevOps pipelines, cloud security operations, and incident management with guaranteed SLAs.",
    keywords: ["24/7 Managed DevOps & SecOps", "24/7 Managed DevOps & SecOps UK", "Devopstrio Services"]
  },
  "/services/qa-testing/test-automation": {
    title: "Test Automation Services | Devopstrio",
    description: "Playwright and Cypress end-to-end client scripts.",
    keywords: ["Test Automation", "Test Automation UK", "Devopstrio Services"]
  },
  "/services/qa-testing/performance-testing": {
    title: "Performance Testing Services | Devopstrio",
    description: "API peak load simulations using k6 and Apache JMeter.",
    keywords: ["Performance Testing", "Performance Testing UK", "Devopstrio Services"]
  },
  "/services/qa-testing/mobile-app-testing": {
    title: "Mobile Application Testing Services | Devopstrio",
    description: "Appium browser farms testing native application packages.",
    keywords: ["Mobile Application Testing", "Mobile Application Testing UK", "Devopstrio Services"]
  },
  "/services/qa-testing/functional-testing": {
    title: "Functional Testing Services | Devopstrio",
    description: "Regression testing suites and User Acceptance Testing boards.",
    keywords: ["Functional Testing", "Functional Testing UK", "Devopstrio Services"]
  },
  "/services/qa-testing/continuous-testing": {
    title: "Continuous Testing Services | Devopstrio",
    description: "Parallel build integrations, code coverage checkers.",
    keywords: ["Continuous Testing", "Continuous Testing UK", "Devopstrio Services"]
  },
  "/services/qa-testing/automated-qa-performance-testing": {
    title: "Automated QA & Performance Testing Services | Devopstrio",
    description: "Enterprise automated test frameworks, k6 performance load testing, API contract testing, continuous testing, and quality engineering.",
    keywords: ["Automated QA & Performance Testing", "Automated QA & Performance Testing UK", "Devopstrio Services"]
  },
  "/services/it-consulting/technology-consulting": {
    title: "Technology Consulting Services | Devopstrio",
    description: "Cost-benefit analyses, legacy upgrade guides, and stacks selection.",
    keywords: ["Technology Consulting", "Technology Consulting UK", "Devopstrio Services"]
  },
  "/services/it-consulting/enterprise-architecture": {
    title: "Enterprise Architecture Services | Devopstrio",
    description: "Distributed system component layouts and active sync failovers.",
    keywords: ["Enterprise Architecture", "Enterprise Architecture UK", "Devopstrio Services"]
  },
  "/services/it-consulting/ai-consulting": {
    title: "AI Consulting Services | Devopstrio",
    description: "Generative AI workshops, feasibility checkouts, and alignment policies.",
    keywords: ["AI Consulting", "AI Consulting UK", "Devopstrio Services"]
  },
  "/services/it-consulting/digital-transformation-consulting": {
    title: "Digital Transformation Consulting Services | Devopstrio",
    description: "Digital transformation roadmaps, design thinking sprints.",
    keywords: ["Digital Transformation Consulting", "Digital Transformation Consulting UK", "Devopstrio Services"]
  },
  "/services/it-consulting/technology-assessment": {
    title: "Technology Assessment Services | Devopstrio",
    description: "Scalability audits, query bottlenecks tracking, and code checks.",
    keywords: ["Technology Assessment", "Technology Assessment UK", "Devopstrio Services"]
  },
  "/services/it-consulting/cloud-ai-transformation-advisory": {
    title: "Cloud & AI Transformation Advisory Services | Devopstrio",
    description: "Strategic technology advisory, enterprise architecture planning, cloud strategy, AI roadmap design, and digital transformation consulting.",
    keywords: ["Cloud & AI Transformation Advisory", "Cloud & AI Transformation Advisory UK", "Devopstrio Services"]
  },

  // Ecosystem Hub & Subpages
  "/ecosystem": {
    title: "Engineering Ecosystem & Innovation Stack",
    description: "Explore our strategic cloud partnerships, R&D labs, delivery hubs, and proprietary software platforms.",
    keywords: ["Ecosystem", "Cloud Alliances", "Innovation Labs", "Devopstrio IP"]
  },
  "/ecosystem/landing-zone": {
    title: "Cloud Landing Zone Blueprints | Hardened Baseline",
    description: "Pre-configured Terraform landing zones with built-in SOC-2 security controls and multi-region network peering.",
    keywords: ["Landing Zone", "Terraform Blueprints", "SOC-2 Baseline", "Multi-Region Peering"]
  },
  "/ecosystem/platforms-solutions/saas-platforms": {
    title: "Enterprise SaaS Platforms | Multi-Tenant Products",
    description: "Deploy and scale multi-tenant subscription applications, billing systems, and business platforms built by Devopstrio.",
    keywords: ["SaaS Platforms", "Multi-Tenant Products", "Enterprise Software", "Digital Portals"]
  },
  "/ecosystem/platforms-solutions/saas-platforms/esigniva": {
    title: "eSigniva Platform | Zero-Trust Digital Signatures",
    description: "Enterprise document signing platform featuring biometric authentication, legal compliance, and smart AI workflow routing.",
    keywords: ["eSigniva", "Zero-Trust Signatures", "AI Document Intelligence", "Legal E-Sign"]
  },
  "/ecosystem/platforms-solutions/saas-platforms/brio": {
    title: "Brio Platform | AI Creator & Influencer Engine",
    description: "AI creator campaign and influencer marketing platform automating campaign analytics, tracking, and content attribution.",
    keywords: ["Brio Platform", "Influencer Engine", "Creator Analytics", "Campaign Automation"]
  },
  "/ecosystem/platforms-solutions/saas-platforms/campix": {
    title: "Campix Platform | Multi-Channel Campaign Grid",
    description: "Enterprise campaign automation platform streamlining multi-channel outreach, telemetry, and conversion analytics.",
    keywords: ["Campix Platform", "Campaign Automation", "Outreach Grid", "Marketing Operations"]
  },
  "/ecosystem/platforms-solutions/saas-platforms/caresuite": {
    title: "CareSuite Platform | HIPAA Health Telemetry Suite",
    description: "HIPAA-compliant patient telemetry and health operations suite powering remote monitoring and encrypted health records.",
    keywords: ["CareSuite", "HIPAA Health Grid", "Patient Telemetry", "EHR Vault"]
  },
  "/ecosystem/platforms-solutions/saas-platforms/homela": {
    title: "HomeLa Platform | Smart Real Estate Ecosystem",
    description: "Smart real estate management portal unifying property listings, tenant portals, and automated maintenance workflows.",
    keywords: ["HomeLa", "Real Estate Tech", "Property Ecosystem", "Tenant Portal"]
  },
  "/ecosystem/platforms-solutions/saas-platforms/humanex": {
    title: "HumanEx Platform | Next-Gen HR & Workforce Analytics",
    description: "Next-generation HR management and workforce analytics grid optimizing employee onboarding, performance, and retention.",
    keywords: ["HumanEx", "HR Tech", "Workforce Analytics", "Employee Grid"]
  },
  "/ecosystem/platforms-solutions/saas-platforms/justivon": {
    title: "Justivon Platform | Legal Contract Intelligence",
    description: "Legal-tech contract intelligence suite delivering automated clause extraction, risk scoring, and legal document review.",
    keywords: ["Justivon", "Legal Tech", "Contract Intelligence", "Clause Extraction"]
  },
  "/ecosystem/platforms-solutions/saas-platforms/prestivo": {
    title: "Prestivo Platform | Fintech Micro-Lending Engine",
    description: "Fintech micro-lending platform and credit evaluation engine automating loan underwriting and risk modeling.",
    keywords: ["Prestivo", "Fintech Platform", "Micro-Lending", "Credit Engine"]
  },

  // Ecosystem Practice Governance Pages
  "/ecosystem/engineering-excellence/platform-engineering": {
    title: "Platform Engineering Practice | Governance & Standards",
    description: "Review Devopstrio's internal standards, architectural blueprints, and reliability metrics for platform engineering teams.",
    keywords: ["Platform Engineering Governance", "SRE Standards", "Blueprint Specs"]
  },
  "/ecosystem/engineering-excellence/quality-engineering": {
    title: "Quality Engineering Governance | Devopstrio Excellence",
    description: "Frameworks for test automation maturity, continuous quality gates, and failure domain reduction across production grids.",
    keywords: ["Quality Standards", "Testing Governance", "Failure Domain Control"]
  },
  "/ecosystem/technology-stack/data-engineering": {
    title: "Data Engineering Tech Stack & Tools | Devopstrio",
    description: "Our verified technology stack for big data pipelines, distributed engines, vector indexes, and cloud warehouses.",
    keywords: ["Data Stack", "Apache Spark", "Snowflake", "Databricks", "Vector Indexing"]
  },
  "/ecosystem/accelerators-frameworks/data-framework": {
    title: "Enterprise Data Framework Accelerators & Blueprints",
    description: "Accelerate data engineering and analytics with Devopstrio's pre-built enterprise data frameworks, telemetry pipelines, and schema models.",
    keywords: ["Data Framework", "Accelerators", "Telemetry Pipelines", "Schema Models"]
  },
  "/ecosystem/community-talent-network/talent-network": {
    title: "Global Engineering Talent Network & Guilds | Devopstrio",
    description: "Access Devopstrio's specialized network of certified DevOps, SRE, Cloud, and AI engineering practitioners.",
    keywords: ["Talent Network", "Engineering Guilds", "DevOps Experts", "AI Engineers"]
  },
  "/ecosystem/engineering-excellence/devsecops": {
    title: "DevSecOps Practice & Automated Security Gates",
    description: "Integrate automated security scanning, SAST/DAST compliance checks, and vulnerability shields into developer CI/CD workflows.",
    keywords: ["DevSecOps Practice", "Automated Security Gates", "SAST DAST", "CI/CD Shields"]
  },
  "/ecosystem/partnerships/cisco": {
    title: "Cisco Enterprise Networking & Zero-Trust Partnership",
    description: "Deploy resilient Cisco enterprise networking, SD-WAN topologies, and Zero-Trust network security solutions.",
    keywords: ["Cisco Partnership", "SD-WAN", "Enterprise Networking", "Zero-Trust"]
  },
  "/ecosystem/partnerships/oracle": {
    title: "Oracle Cloud Infrastructure & Database Alliance",
    description: "Architect high-performance Oracle Cloud Infrastructure (OCI) migrations, Exadata optimizations, and database automation.",
    keywords: ["Oracle Alliance", "OCI Migration", "Exadata Optimization", "Oracle Database"]
  },
  "/ecosystem/partnerships/sap": {
    title: "SAP Cloud Modernization & HANA Infrastructure",
    description: "Migrate and scale mission-critical SAP S/4HANA workloads on enterprise cloud runtimes with zero downtime.",
    keywords: ["SAP on Cloud", "S/4HANA Migration", "Enterprise Cloud Runtimes"]
  },
  "/ecosystem/technology-stack/cloud-native": {
    title: "Cloud Native Stack | Kubernetes, Service Mesh & Containers",
    description: "Explore our production-proven cloud-native technology stack including Kubernetes, Istio, Envoy, Helm, and ArgoCD.",
    keywords: ["Cloud Native Stack", "Kubernetes", "Service Mesh", "Containers", "ArgoCD"]
  },
  "/ecosystem/technology-stack/devops-toolchain": {
    title: "DevOps Toolchain & Infrastructure as Code Stack",
    description: "Verified DevOps toolchain stack featuring Terraform, GitHub Actions, GitLab CI, Ansible, and Prometheus.",
    keywords: ["DevOps Toolchain", "Terraform Stack", "GitHub Actions", "GitLab CI"]
  },

  // Industry Verticals
  "/industries": {
    title: "Industry Verticals | Devopstrio Digital Solutions",
    description: "Tailored cloud-native architectures satisfying stringent PCI-DSS, HIPAA, SOC-2, and FedRAMP compliance standards.",
    keywords: ["Industry Solutions", "Compliant Cloud", "PCI-DSS", "HIPAA", "FedRAMP"]
  },
  "/industries/banking-finance": {
    title: "Banking & Financial Tech | PCI-DSS Ledger Grids",
    description: "Build ultra-low latency transaction processing networks, fraud prevention models, and PCI-DSS compliant cloud banking backends.",
    keywords: ["Banking Tech", "PCI-DSS", "Financial Ledgers", "Low Latency"]
  },
  "/industries/healthcare-life-sciences": {
    title: "Healthcare & Life Sciences | HIPAA Data Vaults",
    description: "Secure patient health telemetry, store EHR records in encrypted vaults, and automate medical AI diagnosis pipelines.",
    keywords: ["Healthcare Tech", "HIPAA Vaults", "Patient Telemetry", "Medical AI"]
  },
  "/industries/retail-ecommerce": {
    title: "Retail & E-Commerce | Headless Shopping Engines",
    description: "Handle Black Friday traffic spikes effortlessly with auto-scaling headless storefronts and instant stock synchronization.",
    keywords: ["Retail Tech", "E-Commerce", "Headless Storefront", "Black Friday Scale"]
  },
  "/industries/manufacturing": {
    title: "Manufacturing Solutions | Industrial IoT Telemetry",
    description: "Stream factory sensor telemetry into central lakehouses to schedule automated predictive maintenance and prevent downtime.",
    keywords: ["Manufacturing Tech", "Industrial IoT", "Predictive Maintenance", "Smart Factory"]
  },
  "/industries/telecommunications": {
    title: "Telecommunications Engineering | 5G Network Nodes",
    description: "Deploy virtualized packet gateways, edge computing nodes, and automated network slicing controllers for telcos.",
    keywords: ["Telecom Tech", "5G Gateways", "Network Virtualization", "Edge Nodes"]
  },
  "/industries/media-entertainment": {
    title: "Media & Entertainment | Low-Latency Video CDN",
    description: "Distribute 4K video feeds with global edge CDNs, automated transcoding pipelines, and digital rights management.",
    keywords: ["Media Tech", "Video CDN", "Transcoding Pipelines", "DRM Protection"]
  },
  "/industries/education": {
    title: "EdTech & Education | Scalable Learning Portals",
    description: "Support millions of concurrent students with scalable digital examination platforms and online learning portals.",
    keywords: ["EdTech", "Learning Management System", "Student Portals", "Exam Scaling"]
  },
  "/industries/government-public-sector": {
    title: "Government & Public Sector | Sovereign Cloud Grids",
    description: "Deploy air-gapped sovereign cloud runtimes and secure multi-tenant public administration web applications.",
    keywords: ["GovTech", "Sovereign Cloud", "Air-Gapped Systems", "FedRAMP Security"]
  },

  // Marketing Section Pages
  "/marketing": {
    title: "Marketing Resource Hub | Decks, Sheets & Assets",
    description: "Access public-facing corporate presentations, regional deck downloads, brochure sheets, and product capability guides.",
    keywords: ["Marketing Portal", "Corporate Decks", "Sales Enablement", "Solution Briefs"]
  },
  "/marketing/case-studies": {
    title: "Marketing Case Studies & Summaries",
    description: "Explore executive summaries of successful enterprise transformations delivered by Devopstrio globally.",
    keywords: ["Case Collateral", "Transformation Summaries", "Executive Decks"]
  },
  "/marketing/company": {
    title: "Corporate Identity & Fact Sheets",
    description: "Download corporate executive summaries, company profile sheets, and official pitch materials.",
    keywords: ["Corporate Collateral", "Company Fact Sheet", "Executive Overview"]
  },
  "/marketing/company/brand-guidelines": {
    title: "Brand Guidelines & Media Assets",
    description: "Download official Devopstrio logos, view brand color swatches (#E11D48 Rose, #030303 Dark Canvas), and review typography rules.",
    keywords: ["Brand Guidelines", "Logos", "Color Swatches", "Typography Rules"]
  },
  "/marketing/company/company-profile": {
    title: "Company Profile & Fact Sheet",
    description: "Summary data sheet detailing Devopstrio's incorporation, registered UK address, team size, core services, and partner accreditations.",
    keywords: ["Company Profile", "Fact Sheet", "UK Registration", "Executive Summary"]
  },
  "/marketing/company/corporate-presentation": {
    title: "Corporate Presentation Slide Deck",
    description: "View and present Devopstrio's interactive enterprise slide deck showcasing our global capabilities, client metrics, and tech stack.",
    keywords: ["Corporate Presentation", "Pitch Deck", "Capability Slides", "Executive Presentation"]
  },
  "/marketing/industries": {
    title: "Industry Solution Briefs & Decks",
    description: "Download industry-specific solution decks and compliance overview sheets for banking, healthcare, and retail.",
    keywords: ["Industry Decks", "Banking Solution Brief", "Healthcare Deck"]
  },
  "/marketing/industries/banking-finance": {
    title: "Banking & Finance Marketing Deck",
    description: "Download our banking technology presentation deck outlining PCI-DSS architecture and core banking integrations.",
    keywords: ["Banking Deck", "PCI Specs", "Fintech Marketing Sheet"]
  },
  "/marketing/industries/healthcare": {
    title: "Healthcare Tech & HIPAA Brief",
    description: "Download the healthcare technology brochure detailing encrypted EHR storage and HIPAA compliance controls.",
    keywords: ["Healthcare Brief", "HIPAA Spec Sheet", "Medical Telemetry Spec"]
  },
  "/marketing/platforms": {
    title: "Platform Datasheets & Product Kits",
    description: "Access technical data sheets and collateral kits for Devopstrio's pre-built infrastructure platforms.",
    keywords: ["Platform Datasheets", "Product Kits", "Technical Collateral"]
  },
  "/marketing/products": {
    title: "SaaS Product Datasheets & Specs",
    description: "Explore technical architecture data sheets and feature specs for eSigniva, Brio, Campix, CareSuite, HomeLa, HumanEx, Justivon, and Prestivo.",
    keywords: ["Product Datasheets", "SaaS Specifications", "eSigniva Specs", "Brio Sheet"]
  },
  "/marketing/services": {
    title: "Services Marketing Summaries",
    description: "Download executive summaries and solution briefs for AI & Data, Cloud Services, and DevOps Automation.",
    keywords: ["Services Briefs", "Solution Summaries", "Executive Guides"]
  },
  "/marketing/services/ai-data-innovation": {
    title: "AI & Data Innovation Brief",
    description: "Download our AI & Data Innovation brochure detailing custom LLM fine-tuning, RAG frameworks, and agentic workflows.",
    keywords: ["AI Brief", "Generative AI Brochure", "LLM Spec Sheet"]
  },
  "/marketing/services/cloud-services": {
    title: "Cloud Services Marketing Collateral",
    description: "Download the multi-cloud architecture and FinOps optimization brochure for enterprise infrastructure leaders.",
    keywords: ["Cloud Brochure", "Multi-Cloud Spec", "FinOps Summary Sheet"]
  },
  "/marketing/services/devops-automation": {
    title: "DevOps Automation Guide & Specs",
    description: "Download our DevOps automation capability guide outlining CI/CD automation, Kubernetes, and developer portals.",
    keywords: ["DevOps Guide", "GitOps Brochure", "CI/CD Capability Sheet"]
  },
  "/marketing/technology": {
    title: "Technology Architecture Sheets",
    description: "Download technical specs and stack manifests for our cloud-native, AI, and cybersecurity toolchains.",
    keywords: ["Tech Stack Sheets", "Architecture Manifests", "Toolchain Specifications"]
  },
  "/marketing/whitepapers": {
    title: "Whitepapers & Technical Reports",
    description: "Access and download Devopstrio's collection of architectural whitepapers, benchmark studies, and security reports.",
    keywords: ["Whitepapers", "Technical Reports", "Architecture Blueprints", "Benchmark Studies"]
  },

  // Insights Hub Pages
  "/insights": {
    title: "Insights & Research Hub",
    description: "Read deep-dive articles, architectural whitepapers, and enterprise case studies authored by Devopstrio principal architects.",
    keywords: ["Insights", "Research Hub", "Tech Publications", "Case Studies"]
  },
  "/insights/blogs": {
    title: "Engineering Blogs & Guides",
    description: "Practical tutorials on Terraform, Kubernetes namespace isolation, Next.js performance tuning, and LLM agent scripting.",
    keywords: ["Engineering Blogs", "DevOps Tutorials", "Kubernetes Guides", "Terraform Tips"]
  },
  "/insights/case-studies": {
    title: "Enterprise Case Studies & Metrics",
    description: "Real-world case studies detailing how we reduced cloud costs by 35% and accelerated software build pipelines by 90%.",
    keywords: ["Case Studies", "Transformation Stories", "Client Success", "Cloud ROI"]
  },
  "/insights/white-paper": {
    title: "Architectural White Papers",
    description: "In-depth architectural whitepapers covering Zero-Trust cloud network topology, FinOps data modeling, and RAG search optimizations.",
    keywords: ["White Papers", "Cloud Architecture Papers", "AI Security Briefs", "FinOps Papers"]
  },
  "/insights/awards-milestones": {
    title: "Awards & Milestones Overview",
    description: "Explore Devopstrio's company growth milestones, industry honors, and client satisfaction awards over time.",
    keywords: ["Company Milestones", "Corporate Growth", "Client Accolades"]
  },
  "/insights/industry-events": {
    title: "Industry Events & Keynotes",
    description: "Stay updated on upcoming developer roundtables, executive cloud keynotes, and international tech conference appearances.",
    keywords: ["Industry Events", "Tech Keynotes", "Developer Roundtables", "Conferences"]
  },
  "/insights/team-culture": {
    title: "Team Culture & Engineering Guilds",
    description: "Behind the scenes look at our engineering hackathons, community guild meetings, and team celebrations worldwide.",
    keywords: ["Team Culture", "Company Festivals", "Devopstrio Life", "Hackathons"]
  },
  "/insights/celebrations": {
    title: "Company Celebrations & Gatherings",
    description: "Highlighting team milestones, client delivery celebrations, and annual company gatherings across our global hubs.",
    keywords: ["Company Celebrations", "Team Gatherings", "Milestone Celebrations"]
  },
  "/insights/client-transformations": {
    title: "Client Modernization Case Studies",
    description: "Documented journey stories of legacy enterprise software transformed into high-availability cloud microservices.",
    keywords: ["Client Transformations", "Modernization Journeys", "Legacy Refactoring"]
  },
  "/insights/impact-metrics": {
    title: "Impact Metrics & Sustainability | Delivery Stats",
    description: "Quantified data metrics detailing SLA reliability, carbon footprint reductions, and client cost savings achieved.",
    keywords: ["Impact Metrics", "Delivery Statistics", "SLA Guarantees", "Carbon Reduction"]
  },

  // Legal Pages
  "/disclaimer": {
    title: "Corporate Disclaimer | Devopstrio Legal Terms",
    description: "Official legal disclaimer outlining limits of liability, information validity, and copyright disclosures for Devopstrio Limited.",
    keywords: ["Disclaimer", "Legal Terms", "Liability Limits", "Devopstrio Legal"]
  },
  "/privacy-policy": {
    title: "Privacy Policy | Data Protection & User Rights",
    description: "Learn how Devopstrio collects, processes, and protects personal data in compliance with international privacy laws.",
    keywords: ["Privacy Policy", "Data Protection", "GDPR", "User Data Rights"]
  },
  "/terms-of-service": {
    title: "Terms of Service | Platform Usage Agreement",
    description: "Terms and conditions governing the use of Devopstrio's website, portals, and online services.",
    keywords: ["Terms of Service", "Usage Agreement", "Platform Governance", "Legal Terms"]
  },
  "/cookie-policy": {
    title: "Cookie Policy | Consent Controls & Tracking List",
    description: "Information regarding browser cookies, telemetry cookies, and consent preference management on Devopstrio.",
    keywords: ["Cookie Policy", "Browser Cookies", "Tracking Consent", "Cookie Preferences"]
  },
  "/gdpr": {
    title: "GDPR Compliance | EU Data Privacy Rights",
    description: "Details on Devopstrio's GDPR compliance framework, Data Protection Officer contact, and data subject access request forms.",
    keywords: ["GDPR Compliance", "Data Privacy Rights", "DPO Contact", "EU Data Rights"]
  }
};

export function getMetadataFromPath(pathname: string) {
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  
  if (ROUTE_SEO_MAP[cleanPath]) {
    return ROUTE_SEO_MAP[cleanPath];
  }

  // Fallback for dynamic nested paths
  const parts = cleanPath.split("/").filter(Boolean);
  if (parts.length === 0) {
    return ROUTE_SEO_MAP["/"];
  }

  const cleanSegment = (str: string) => {
    const acronyms: Record<string, string> = {
      "ai": "AI",
      "aws": "AWS",
      "gcp": "GCP",
      "sap": "SAP",
      "iac": "IaC",
      "cicd": "CI/CD",
      "sre": "SRE",
      "soc": "SOC",
      "gdpr": "GDPR",
      "devsecops": "DevSecOps",
      "csr": "CSR"
    };

    return str
      .split("-")
      .map(word => acronyms[word.toLowerCase()] || (word.charAt(0).toUpperCase() + word.slice(1)))
      .join(" ");
  };

  const leafSegment = cleanSegment(parts[parts.length - 1]);
  
  let title = `Professional ${leafSegment} Solutions & Engineering`;
  let description = `Professional ${leafSegment} consulting and systems engineering services. Devopstrio designs, modernizes, and scales compliant architectures.`;
  let keywords = [leafSegment, "Devopstrio", "Enterprise Engineering", "IT Advisory"];

  if (parts[0] === "ecosystem") {
    const category = parts[1] ? cleanSegment(parts[1]) : "Ecosystem";
    title = `${leafSegment} Practice & Architecture Standards`;
    description = `Explore professional ${leafSegment} capabilities under our ${category} practice area at Devopstrio. We engineer compliant frameworks.`;
    keywords.push(category, "Ecosystem Alliance");
  } else if (parts[0] === "services") {
    const category = parts[1] ? cleanSegment(parts[1]) : "Services";
    title = `${leafSegment} Services & Enterprise Solutions`;
    description = `Architect secure, high-availability setups with Devopstrio's professional ${leafSegment} consultants and engineers. Guaranteed SLAs.`;
    keywords.push(category, "Practice Services");
  } else if (parts[0] === "industries") {
    title = `${leafSegment} Digital Solutions & Architecture`;
    description = `Transform and digitize your operations with Devopstrio's professional ${leafSegment} technology platforms and runtimes.`;
    keywords.push("Industry Vertical", "Regulatory Compliance");
  } else if (parts[0] === "marketing") {
    title = `${leafSegment} Collateral & Technical Solution Briefs`;
    description = `Access marketing specs, executive solution briefs, and data sheets for ${leafSegment} at Devopstrio.`;
    keywords.push("Marketing Collateral", "Data Sheet");
  } else if (parts[0] === "insights") {
    title = `${leafSegment} Insights, Case Studies & Research`;
    description = `Read technical publications, research papers, and engineering case studies regarding ${leafSegment}.`;
    keywords.push("Technical Insights", "Engineering Publications");
  }

  return { title, description, keywords };
}

