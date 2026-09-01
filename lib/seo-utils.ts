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
    title: "AI & Data Innovation Services | Generative AI & MLOps",
    description: "Deploy production-grade Generative AI, custom LLM fine-tuning, RAG frameworks, and autonomous multi-agent networks.",
    keywords: ["AI Services", "Generative AI", "MLOps", "LLM Pipelines", "Data Engineering"]
  },
  "/services/cloud-services": {
    title: "Cloud Services & Architecture | AWS, Azure & GCP",
    description: "Accelerate cloud migration, build multi-account landing zones, and reduce cloud spend by 35%+ with expert FinOps.",
    keywords: ["Cloud Services", "AWS Migration", "Azure Architecture", "GCP Consulting", "FinOps"]
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
    title: "Managed SRE Services | 24/7 Cluster Operations",
    description: "Outsource cluster maintenance, database optimization, and emergency incident recovery to experienced SREs.",
    keywords: ["Managed Services", "24/7 SRE", "Cluster Operations", "Database Support", "Incident Recovery"]
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
    title: "Enterprise AI Consulting & Advisory | Devopstrio",
    description: "Strategic AI advisory, LLM feasibility audits, and enterprise cognitive architecture planning by senior AI consultants.",
    keywords: ["AI Consulting", "AI Advisory", "LLM Strategy", "Cognitive Architecture"]
  },
  "/services/it-consulting/ai-consulting": {
    title: "AI Advisory & Executive IT Consulting | Devopstrio",
    description: "Executive AI strategy consulting, ROI evaluations, and governance frameworks for enterprise technology leaders.",
    keywords: ["AI Strategy", "Executive IT Consulting", "AI Governance", "Tech Advisory"]
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
  "/services/ai-modernization": {
    title: "AI System Modernization & Refactoring | Devopstrio",
    description: "Upgrade legacy analytics engines into modern AI inference pipelines with vector indexing and agentic workflows.",
    keywords: ["AI Modernization", "Analytics Refactoring", "Inference Upgrade", "Agentic Workflows"]
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
  "/services/cloud-services/cloud-security": {
    title: "Enterprise Cloud Security & Compliance Hardening",
    description: "Protect cloud infrastructure with continuous posture management (CSPM), automated compliance checks, and IAM controls.",
    keywords: ["Cloud Security Services", "CSPM Hardening", "IAM Controls", "Compliance Security"]
  },
  "/services/it-consulting/cloud-consulting": {
    title: "Cloud Consulting & Strategy Advisory Services",
    description: "Strategic cloud advisory, multi-cloud architecture assessments, and migration roadmaps led by principal architects.",
    keywords: ["Cloud Consulting", "Strategy Advisory", "Multi-Cloud Assessment"]
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
  "/ecosystem/platforms-solutions/saas-platforms/safesign": {
    title: "SafeSign Platform | Zero-Trust Digital Signatures",
    description: "Enterprise document signing platform featuring biometric authentication, legal compliance, and smart AI workflow routing.",
    keywords: ["SafeSign", "Zero-Trust Signatures", "AI Document Intelligence", "Legal E-Sign"]
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
    description: "Explore technical architecture data sheets and feature specs for SafeSign, Brio, Campix, CareSuite, HomeLa, HumanEx, Justivon, and Prestivo.",
    keywords: ["Product Datasheets", "SaaS Specifications", "SafeSign Specs", "Brio Sheet"]
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

