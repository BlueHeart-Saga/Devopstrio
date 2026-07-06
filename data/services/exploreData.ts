export interface SubService {
  name: string;
  description: string;
  group: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  iconName: string;
  subServiceCount: number;
  groups: {
    title: string;
    services: string[];
  }[];
  useCases: {
    challenge: string;
    solution: string;
  }[];
}

export interface BusinessObjective {
  id: string;
  title: string;
  description: string;
  iconName: string;
  relevantServices: string[];
}

export interface IndustryMap {
  name: string;
  iconName: string;
  challenges: string;
  recommendedServices: string[];
  link: string;
}

export interface TechStackCategory {
  name: string;
  technologies: {
    name: string;
    iconName: string;
    type: string;
  }[];
}

export interface EngagementModel {
  title: string;
  description: string;
  badge: string;
  features: string[];
}

export interface TransformationPackage {
  title: string;
  tagline: string;
  description: string;
  services: string[];
  outcome: string;
}

export interface CaseStudy {
  client: string;
  challenge: string;
  solution: string;
  outcome: string;
  services: string[];
  metrics: { value: string; label: string }[];
}

export interface FAQ {
  q: string;
  a: string;
}

export const exploreCategories: ServiceCategory[] = [
  {
    id: "ai-data-innovation",
    title: "AI & Data Innovation",
    slug: "ai-data-innovation",
    shortDesc: "Build AI-powered systems, intelligent workflows, analytics platforms, and enterprise data solutions.",
    iconName: "FiCpu",
    subServiceCount: 24,
    groups: [
      {
        title: "AI Strategy & Advisory",
        services: [
          "AI readiness assessment",
          "AI transformation roadmap",
          "Generative AI consulting",
          "AI governance setup",
          "AI use case discovery"
        ]
      },
      {
        title: "Generative AI Solutions",
        services: [
          "Enterprise chatbot development",
          "AI copilots",
          "RAG systems",
          "Knowledge assistants",
          "Prompt workflow engineering",
          "LLM integration",
          "Custom AI agents"
        ]
      },
      {
        title: "AI/ML Model Development",
        services: [
          "ML model development",
          "Predictive analytics",
          "Recommendation systems",
          "NLP pipelines",
          "Sentiment analysis",
          "Custom neural nets"
        ]
      },
      {
        title: "Computer Vision & NLP",
        services: [
          "Document intelligence",
          "OCR automation",
          "Image analysis",
          "Computer vision systems"
        ]
      },
      {
        title: "AI Operations & MLOps",
        services: [
          "MLOps pipelines",
          "Model deployment",
          "Model monitoring",
          "Feature engineering services"
        ]
      }
    ],
    useCases: [
      {
        challenge: "Public model pipelines leak private datasets and suffer from hallucinations.",
        solution: "Deploy self-hosted LLMs using Qdrant vector databases in isolated AWS Bedrock or Azure VPC lines."
      }
    ]
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    slug: "cloud-services",
    shortDesc: "Design, migrate, modernize, optimize, and manage cloud environments across public, private, and hybrid ecosystems.",
    iconName: "FiLayers",
    subServiceCount: 24,
    groups: [
      {
        title: "Cloud Strategy & Architecture",
        services: [
          "Cloud readiness assessment",
          "Cloud architecture design",
          "Cloud landing zones",
          "Cloud governance"
        ]
      },
      {
        title: "Cloud Migration",
        services: [
          "AWS migration services",
          "Azure migration services",
          "GCP migration services",
          "Cloud-native application migration"
        ]
      },
      {
        title: "Cloud Modernization",
        services: [
          "Containerization strategy",
          "Kubernetes infrastructure setup",
          "Serverless architecture services",
          "Storage modernization"
        ]
      },
      {
        title: "Multi-Cloud / Hybrid Cloud",
        services: [
          "Hybrid cloud implementation",
          "Multi-cloud deployment architecture",
          "Virtual network design"
        ]
      },
      {
        title: "Cloud Operations & FinOps",
        services: [
          "Backup and disaster recovery",
          "Cloud monitoring setup",
          "Cost optimization / FinOps",
          "Cloud performance optimization",
          "Managed cloud operations",
          "Cloud compliance support",
          "High availability architecture",
          "Business continuity planning"
        ]
      }
    ],
    useCases: [
      {
        challenge: "Unchecked multi-cloud configurations bleed budget with redundant resources.",
        solution: "Establish cloud-native FinOps policies, tagging mandates, and automated cluster resizing schemas."
      }
    ]
  },
  {
    id: "devops-automation",
    title: "DevOps & Automation",
    slug: "devops-automation",
    shortDesc: "Accelerate software delivery with CI/CD, IaC, platform engineering, release automation, and operational efficiency.",
    iconName: "FiZap",
    subServiceCount: 25,
    groups: [
      {
        title: "DevOps Transformation",
        services: [
          "DevOps maturity assessment",
          "Branch/release strategy consulting",
          "Environment automation"
        ]
      },
      {
        title: "CI/CD Engineering",
        services: [
          "CI/CD pipeline design",
          "GitHub Actions setup",
          "Azure DevOps pipelines",
          "GitLab CI/CD",
          "Jenkins pipeline engineering"
        ]
      },
      {
        title: "Infrastructure as Code",
        services: [
          "Terraform implementation",
          "Ansible automation",
          "Infrastructure provisioning"
        ]
      },
      {
        title: "Platform Engineering",
        services: [
          "Platform engineering foundations",
          "Internal developer platforms"
        ]
      },
      {
        title: "Container & Kubernetes Enablement",
        services: [
          "Docker platform enablement",
          "Kubernetes deployment automation"
        ]
      },
      {
        title: "Release Automation & SRE",
        services: [
          "Release automation",
          "Secrets management automation",
          "Observability pipeline setup",
          "SRE implementation",
          "Incident automation",
          "DevSecOps controls",
          "Policy-as-code",
          "Deployment rollback strategy",
          "Build optimization",
          "Artifact management"
        ]
      }
    ],
    useCases: [
      {
        challenge: "Slow manual builds block deployment and cause code drift between environments.",
        solution: "Code automated GitOps pipelines using Terraform and Github Actions to enable push-button deployments."
      }
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    slug: "cybersecurity",
    shortDesc: "Protect applications, infrastructure, identities, data, and operations through security engineering and compliance-first programs.",
    iconName: "FiShield",
    subServiceCount: 25,
    groups: [
      {
        title: "Security Assessment",
        services: [
          "Cybersecurity assessment",
          "Security posture review",
          "Vulnerability assessment",
          "Risk assessment"
        ]
      },
      {
        title: "Application & API Security",
        services: [
          "Secure SDLC consulting",
          "Application security review",
          "API security review"
        ]
      },
      {
        title: "Identity & Access Security",
        services: [
          "IAM architecture",
          "SSO / identity integration",
          "Privileged access governance"
        ]
      },
      {
        title: "Cloud Security",
        services: [
          "Cloud security hardening",
          "Zero trust architecture consulting",
          "Secrets and key management"
        ]
      },
      {
        title: "Governance, Risk & Compliance",
        services: [
          "Compliance readiness support",
          "ISO / GDPR alignment support",
          "Security policy framework",
          "SOC readiness"
        ]
      },
      {
        title: "Security Monitoring & Operations",
        services: [
          "Log monitoring strategy",
          "Security monitoring setup",
          "Endpoint security advisory",
          "Security incident response planning",
          "Email security hardening"
        ]
      }
    ],
    useCases: [
      {
        challenge: "APIs and endpoints are exposed to scanning and automated credential stuffing.",
        solution: "Hardened security profiles via IAM role configuration, API gateway rate limiting, and zero-trust policies."
      }
    ]
  },
  {
    id: "software-development",
    title: "Software Development",
    slug: "software-development",
    shortDesc: "Design and build modern web, mobile, enterprise, and SaaS platforms with scalable engineering practices.",
    iconName: "FiCode",
    subServiceCount: 25,
    groups: [
      {
        title: "Product Engineering",
        services: [
          "Product discovery",
          "MVP development",
          "SaaS application development",
          "Custom software development"
        ]
      },
      {
        title: "Web & Mobile Development",
        services: [
          "Enterprise web application development",
          "React application development",
          "Next.js development",
          "Mobile app development",
          "Cross-platform app development"
        ]
      },
      {
        title: "API & Backend Engineering",
        services: [
          "API development",
          "Microservices development",
          "Node.js backend development",
          "Python backend development",
          "FastAPI development"
        ]
      },
      {
        title: "UI/UX & Portals",
        services: [
          "UI/UX implementation",
          "Design system development",
          "Admin panel / dashboard development",
          "Portal development",
          "B2B platform development",
          "Marketplace platform development",
          "E-commerce platform development"
        ]
      },
      {
        title: "Modernization & Maintenance",
        services: [
          "Legacy application modernization",
          "Codebase refactoring",
          "Performance optimization",
          "Application maintenance and enhancement"
        ]
      }
    ],
    useCases: [
      {
        challenge: "Monolithic SaaS architectures prevent rapid features scaling and isolate team work.",
        solution: "Refactor backend routes to event-driven microservices running on serverless FastAPI endpoints."
      }
    ]
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    slug: "digital-transformation",
    shortDesc: "Reimagine business operations, platforms, customer journeys, and internal workflows through technology-led transformation.",
    iconName: "FiActivity",
    subServiceCount: 20,
    groups: [
      {
        title: "Transformation Strategy",
        services: [
          "Digital transformation strategy",
          "Digital maturity assessment",
          "Innovation roadmap workshops",
          "Cross-functional transformation planning"
        ]
      },
      {
        title: "Workflow Digitization",
        services: [
          "Process digitization consulting",
          "Workflow modernization",
          "Paperless operations transformation",
          "Internal portal modernization"
        ]
      },
      {
        title: "Process Automation",
        services: [
          "Automation opportunity mapping",
          "Low-code/no-code workflow strategy",
          "Enterprise process redesign",
          "Business automation blueprint"
        ]
      },
      {
        title: "Customer Experience",
        services: [
          "Customer experience transformation",
          "Self-service portal implementation",
          "Service workflow digitization"
        ]
      },
      {
        title: "Change Enablement",
        services: [
          "Department digitization programs",
          "Operating model transformation support",
          "Internal collaboration platform rollout",
          "Digital transformation PMO support"
        ]
      }
    ],
    useCases: [
      {
        challenge: "Legacy paper-based or disjointed internal processes slow down operations.",
        solution: "Deploy modern employee and customer self-service portals, automating key approval flows."
      }
    ]
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    slug: "data-engineering",
    shortDesc: "Build data platforms, pipelines, warehouses, governance layers, and real-time analytics foundations.",
    iconName: "FiDatabase",
    subServiceCount: 24,
    groups: [
      {
        title: "Data Platform Strategy",
        services: [
          "Data strategy consulting",
          "Data architecture design"
        ]
      },
      {
        title: "Data Integration & ETL",
        services: [
          "ETL/ELT pipelines",
          "Data migration engineering",
          "API-to-data integration",
          "Data transformation pipelines"
        ]
      },
      {
        title: "Warehousing & Lakehouse",
        services: [
          "Data warehouse implementation",
          "Lakehouse architecture",
          "Warehouse optimization"
        ]
      },
      {
        title: "Real-Time Data Systems",
        services: [
          "Real-time data streaming"
        ]
      },
      {
        title: "BI & Reporting",
        services: [
          "BI dashboard engineering",
          "Power BI / Tableau reporting",
          "Analytics engineering",
          "Reporting modernization",
          "Executive reporting solutions",
          "Analytics sandbox enablement"
        ]
      },
      {
        title: "Data Governance & Quality",
        services: [
          "Master data management",
          "Data quality frameworks",
          "Metadata management",
          "Governance operating model",
          "Data observability setup",
          "Customer data platform integration",
          "KPI reporting frameworks"
        ]
      }
    ],
    useCases: [
      {
        challenge: "Decentralized pipelines lead to duplicate data definitions and inaccurate dashboards.",
        solution: "Structure a central warehouse using Databricks Lakehouse architecture with Great Expectations testing."
      }
    ]
  },
  {
    id: "managed-services",
    title: "Managed Services",
    slug: "managed-services",
    shortDesc: "Ensure continuous reliability, monitoring, support, optimization, and operational management across critical environments.",
    iconName: "FiMonitor",
    subServiceCount: 20,
    groups: [
      {
        title: "Managed Cloud Operations",
        services: [
          "Managed cloud operations",
          "Managed infrastructure support",
          "Managed backup monitoring",
          "L2/L3 support services"
        ]
      },
      {
        title: "Managed DevOps",
        services: [
          "Managed DevOps support",
          "Managed CI/CD operations",
          "Managed environment administration"
        ]
      },
      {
        title: "Managed Application Support",
        services: [
          "Managed application maintenance",
          "SLA-based support services",
          "Patch and upgrade coordination"
        ]
      },
      {
        title: "Monitoring & Reliability",
        services: [
          "24/7 monitoring support",
          "Incident management support",
          "Managed observability support",
          "Production reliability support"
        ]
      },
      {
        title: "Service Desk & Security Operations",
        services: [
          "Support desk operations",
          "Security monitoring coordination",
          "Cost monitoring support",
          "Managed performance support"
        ]
      }
    ],
    useCases: [
      {
        challenge: "Internal operations teams are overwhelmed by alert fatigue and midnight outages.",
        solution: "Outsource active 24/7 L2/L3 support and monitoring with 15-minute response SLAs."
      }
    ]
  },
  {
    id: "qa-testing",
    title: "QA & Testing",
    slug: "qa-testing",
    shortDesc: "Deliver quality through functional, automation, performance, security, and release validation frameworks.",
    iconName: "FiCheckCircle",
    subServiceCount: 25,
    groups: [
      {
        title: "Functional Testing",
        services: [
          "Manual functional testing",
          "Regression automation",
          "Functional testing"
        ]
      },
      {
        title: "Test Automation",
        services: [
          "Test automation",
          "Test framework development",
          "CI-integrated test automation"
        ]
      },
      {
        title: "Performance & Security Testing",
        services: [
          "Performance testing",
          "Load testing",
          "Security testing support",
          "Web platform testing",
          "Mobile application testing"
        ]
      },
      {
        title: "Test Advisory & Quality Engineering",
        services: [
          "QA strategy setup",
          "Release validation",
          "UAT coordination",
          "Compatibility testing",
          "Usability testing",
          "Smoke/sanity testing",
          "Test case design",
          "Quality governance",
          "Defect lifecycle support",
          "Accessibility testing support",
          "Test data management",
          "QA process improvement",
          "Exploratory testing",
          "Production readiness validation"
        ]
      }
    ],
    useCases: [
      {
        challenge: "Releasing new components regularly triggers regression bugs in older features.",
        solution: "Deploy parallel E2E test suites inside GitHub Actions using Playwright to block broken code."
      }
    ]
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    slug: "it-consulting",
    shortDesc: "Align business goals with architecture, cloud strategy, technology roadmaps, operating models, and modernization plans.",
    iconName: "FiBriefcase",
    subServiceCount: 20,
    groups: [
      {
        title: "Technology Strategy",
        services: [
          "IT strategy consulting",
          "Technology roadmap planning",
          "Platform modernization advisory",
          "Capability assessment",
          "Digital roadmap creation"
        ]
      },
      {
        title: "Enterprise Architecture",
        services: [
          "Enterprise architecture review",
          "Application portfolio assessment",
          "Architecture governance setup",
          "Product engineering advisory"
        ]
      },
      {
        title: "Cloud & Platform Advisory",
        services: [
          "Cloud adoption roadmap",
          "DevOps operating model consulting",
          "Build vs buy analysis",
          "Vendor evaluation support"
        ]
      },
      {
        title: "Operating Model & Governance",
        services: [
          "Operating model design",
          "Delivery process consulting",
          "IT cost optimization consulting",
          "Transformation governance advisory",
          "PMO support",
          "Security and compliance roadmap",
          "Service operating model consulting"
        ]
      }
    ],
    useCases: [
      {
        challenge: "Unstructured migration paths delay execution and risk architecture misalignments.",
        solution: "Host structured technology selection workshops to align vendor criteria and map execution risks."
      }
    ]
  }
];

export const businessObjectives: BusinessObjective[] = [
  {
    id: "modernize",
    title: "Modernize Legacy Systems",
    description: "Upgrade slow, fragile architectures to secure, scalable, cloud-native services.",
    iconName: "FiLayers",
    relevantServices: [
      "AWS/Azure migration services",
      "Containerization strategy",
      "Kubernetes setup",
      "Legacy application modernization",
      "Codebase refactoring",
      "API development"
    ]
  },
  {
    id: "scale",
    title: "Scale Product Delivery",
    description: "Accelerate features shipping cycles through automated testing and GitOps.",
    iconName: "FiZap",
    relevantServices: [
      "CI/CD pipeline design",
      "GitHub Actions setup",
      "Test automation",
      "Platform engineering",
      "Managed DevOps",
      "Docker enablement"
    ]
  },
  {
    id: "ai-enable",
    title: "Enable AI in Operations",
    description: "Streamline workflows and extract value from corporate datasets via custom AI models.",
    iconName: "FiCpu",
    relevantServices: [
      "RAG systems",
      "Enterprise chatbots",
      "AI copilots",
      "MLOps pipelines",
      "Predictive analytics",
      "AI governance setup"
    ]
  },
  {
    id: "secure",
    title: "Improve Security & Compliance",
    description: "Protect intellectual property, user identities, and infrastructure against active threats.",
    iconName: "FiShield",
    relevantServices: [
      "Vulnerability assessment",
      "Cloud security hardening",
      "IAM architecture",
      "DevSecOps controls",
      "SOC readiness support",
      "Zero trust consulting"
    ]
  },
  {
    id: "build-new",
    title: "Build New Digital Products",
    description: "Design, build, and deploy custom modern web, mobile, and B2B SaaS platforms.",
    iconName: "FiCode",
    relevantServices: [
      "Product discovery",
      "MVP development",
      "Next.js development",
      "SaaS platform development",
      "UI/UX implementation",
      "Microservices development"
    ]
  },
  {
    id: "reliability",
    title: "Improve Reliability & Support",
    description: "Ensure zero-downtime, continuous telemetry, and rapid remediation for cloud systems.",
    iconName: "FiActivity",
    relevantServices: [
      "24/7 monitoring support",
      "Incident management support",
      "SRE implementation",
      "Managed application maintenance",
      "Database administration",
      "Data observability setup"
    ]
  }
];

export const industryMap: IndustryMap[] = [
  {
    name: "Banking & Finance",
    iconName: "FiShield",
    challenges: "Strict regulatory audits, high data throughput, identity management, and fraud protection.",
    recommendedServices: [
      "Cybersecurity compliance (SOC/ISO)",
      "Identity & Access Management",
      "Predictive analytics for fraud detection",
      "High availability databases"
    ],
    link: "/industries/banking-finance"
  },
  {
    name: "Healthcare & Life Sciences",
    iconName: "FiActivity",
    challenges: "Patient privacy compliance (HIPAA/GDPR), document scanning, and legacy clinical database integration.",
    recommendedServices: [
      "Document intelligence & OCR",
      "Secure private cloud migration",
      "Zero Trust networks",
      "QA functional & regression testing"
    ],
    link: "/industries/healthcare"
  },
  {
    name: "Retail & E-Commerce",
    iconName: "FiZap",
    challenges: "Peak traffic scaling, recommendation loops, API gateway security, and checkout reliability.",
    recommendedServices: [
      "Next.js web platform development",
      "Kubernetes & Karpenter autoscaling",
      "RAG product search assistants",
      "24/7 managed support"
    ],
    link: "/industries/retail-ecommerce"
  },
  {
    name: "Manufacturing",
    iconName: "FiLayers",
    challenges: "Predictive maintenance scheduling, supply chain tracking, and document workflows.",
    recommendedServices: [
      "Predictive analytics & ML models",
      "Workflow modernization portals",
      "ETL data pipeline engineering",
      "Cloud hybrid connections"
    ],
    link: "/industries/manufacturing"
  }
];

export const techStackCategories: TechStackCategory[] = [
  {
    name: "Cloud & Infrastructure",
    technologies: [
      { name: "AWS", iconName: "FaAws", type: "Cloud Provider" },
      { name: "Azure", iconName: "FaMicrosoft", type: "Cloud Provider" },
      { name: "GCP", iconName: "FaGoogle", type: "Cloud Provider" },
      { name: "Kubernetes", iconName: "FaDocker", type: "Container Grid" },
      { name: "Docker", iconName: "FaDocker", type: "Container Runtime" },
      { name: "Terraform", iconName: "FiLayers", type: "IaC Engine" }
    ]
  },
  {
    name: "Engineering Stack",
    technologies: [
      { name: "React", iconName: "FiCode", type: "Frontend Lib" },
      { name: "Next.js", iconName: "FiMonitor", type: "Web Framework" },
      { name: "Node.js", iconName: "FiCpu", type: "Backend Runtime" },
      { name: "Python", iconName: "FiCpu", type: "Language" },
      { name: "FastAPI", iconName: "FiZap", type: "API Framework" }
    ]
  },
  {
    name: "Data & AI Stack",
    technologies: [
      { name: "OpenAI", iconName: "FiCpu", type: "LLM API" },
      { name: "Qdrant", iconName: "FiDatabase", type: "Vector DB" },
      { name: "Apache Spark", iconName: "FiActivity", type: "Big Data" },
      { name: "BigQuery / Snowflake", iconName: "FiDatabase", type: "Data Warehouse" }
    ]
  },
  {
    name: "DevOps & Security Stacks",
    technologies: [
      { name: "GitHub Actions", iconName: "FaGithub", type: "CI/CD Pipeline" },
      { name: "GitLab CI", iconName: "FaGitlab", type: "CI/CD Pipeline" },
      { name: "Jenkins", iconName: "FaJenkins", type: "CI/CD Pipeline" },
      { name: "Jira / Slack", iconName: "FaJira", type: "Ops Integration" }
    ]
  }
];

export const engagementModels: EngagementModel[] = [
  {
    title: "Project-Based Delivery",
    badge: "Fixed Scope & Timeline",
    description: "Perfect for defined deliverables, proof of concepts, or structured modernization sprints.",
    features: [
      "Clearly outlined milestones & deliverables",
      "Fixed pricing structures mapped to outcomes",
      "Integrated PMO governance and status updates",
      "Standardized 2-week sprint validations"
    ]
  },
  {
    title: "Dedicated Engineering Teams",
    badge: "Agile Scale & Velocity",
    description: "Extend your internal resources with full-time, dedicated cloud, DevOps, or AI engineers.",
    features: [
      "100% focused engineers working in your sprints",
      "Direct integration into your Slack & Jira channels",
      "Rapid team scaling based on product needs",
      "Continuous knowledge mapping & code handovers"
    ]
  },
  {
    title: "Managed Services Engagement",
    badge: "24/7 Operations Support",
    description: "SLA-backed platform support, incident containment, monitoring, and database management.",
    features: [
      "24/7 active network operations center support",
      "15-minute response SLA for critical issues",
      "Continuous backups, patching, and FinOps audits",
      "Monthly performance and uptime reports"
    ]
  },
  {
    title: "Consulting & Advisory Sprints",
    badge: "Strategic Technology Blueprint",
    description: "Collaborative sprints to audit architectures, design cloud migrations, or plan AI roadmaps.",
    features: [
      "Led by Principal Architects & Directors",
      "Vendor and pricing assessment tables",
      "High-level system topology diagrams",
      "Complete risk registers and implementation runbooks"
    ]
  }
];

export const transformationPackages: TransformationPackage[] = [
  {
    title: "Cloud Modernization Accelerator",
    tagline: "Migrate and containerize in 90 days",
    description: "End-to-end audit, landing zone construction, secure Kubernetes setup, and phased data migration.",
    services: [
      "Cloud architecture design",
      "AWS/Azure migration services",
      "Kubernetes infrastructure setup",
      "DevOps CI/CD setup",
      "Cloud security hardening"
    ],
    outcome: "Reduced hosting bill by 35% with automatic cluster resizing and zero service outages."
  },
  {
    title: "AI Workflow Automation Suite",
    tagline: "Build secure cognitive workflows",
    description: "Discover LLM opportunities, structure semantic indices, and write autonomous chat/work agents.",
    services: [
      "Generative AI consulting",
      "RAG system engineering",
      "AI agent orchestration",
      "Data observability setup",
      "AI governance setup"
    ],
    outcome: "92% drop in manual document checking workload with secure closed-loop model containers."
  },
  {
    title: "SaaS Product Launch Toolkit",
    tagline: "From discovery to production MVP",
    description: "Construct user journeys, write FastAPI backends, build Next.js frontends, and configure CI/CD.",
    services: [
      "MVP product engineering",
      "Next.js web development",
      "API development & integrations",
      "Playwright test automation",
      "CI/CD GitOps pipelines"
    ],
    outcome: "Launched production-ready SaaS to market in 12 weeks with zero setup overhead."
  },
  {
    title: "Enterprise Data Foundation",
    tagline: "Unified lakehouse and reporting dashboard",
    description: "Map data schemas, write Apache Spark ETLs, deploy Databricks clusters, and structure BI panels.",
    services: [
      "Data strategy consulting",
      "ETL data pipeline engineering",
      "Lakehouse warehouse setup",
      "BI dashboard engineering",
      "Data quality frameworks"
    ],
    outcome: "Consolidated 15 external API streams into a single source of truth dashboard with automated data validation."
  }
];

export const serviceCaseStudies: CaseStudy[] = [
  {
    client: "Global Logistics Provider",
    challenge: "Manual address validation and order entry delayed dispatch routing by 6+ hours.",
    solution: "Designed an autonomous AI dispatcher agent reading client emails, validating shipping carrier APIs, and writing to PostgreSQL databases.",
    outcome: "Dispatch routing time cut to 4 minutes with 99.8% address parsing accuracy.",
    services: [
      "AI Agents & Automation",
      "Data Engineering",
      "Python API Development"
    ],
    metrics: [
      { value: "4m", label: "Dispatch routing delay" },
      { value: "99.8%", label: "Address parsing accuracy" }
    ]
  },
  {
    client: "Healthcare SaaS Platform",
    challenge: "Manual server upgrades and unmonitored databases triggered recurring HIPAA compliance audit gaps.",
    solution: "Codified cloud networks using Terraform landing zones, Okta IAM, and structured automated database backup validations.",
    outcome: "Achieved 100% SOC-2 compliance scoring with zero drift logs.",
    services: [
      "Cloud Security Hardening",
      "Terraform IaC setups",
      "Database Administration"
    ],
    metrics: [
      { value: "100%", label: "Compliance Score" },
      { value: "0", label: "Security Incidents" }
    ]
  },
  {
    client: "High-Volume FinTech Platform",
    challenge: "Slow build cycles and code regression bugs blocked product updates during peak trading hours.",
    solution: "Created git-triggered Github Actions pipelines integrated with Playwright parallel test grids and canary deploy templates.",
    outcome: "Deployment cycles accelerated to daily releases with zero production outages.",
    services: [
      "CI/CD Pipeline Design",
      "Playwright QA Automation",
      "Platform Engineering"
    ],
    metrics: [
      { value: "10x", label: "Release frequency increase" },
      { value: "0", label: "Downtime rollouts" }
    ]
  }
];

export const exploreFAQs: FAQ[] = [
  {
    q: "How is the Devopstrio service ecosystem structured?",
    a: "Our ecosystem organizes into 10 Core Pillars (such as Cloud, DevOps, QA, and AI). Each pillar contains detailed sub-service groups, offering a catalog of over 250 specialized engineering capabilities that can be engaged individually or as integrated programs."
  },
  {
    q: "Can we engage Devopstrio for only one service area?",
    a: "Absolutely. Many clients start with a single focused sprint (e.g., setting up a Kubernetes cluster or auditing cloud security) and expand into other service categories as their platform grows."
  },
  {
    q: "Do you provide end-to-end digital transformation programs?",
    a: "Yes. We combine consulting, product engineering, cloud modernization, and managed operations to deliver unified, multi-phase digital transformation blueprints for legacy businesses."
  },
  {
    q: "How do you scope custom service engagements?",
    a: "We start with a discovery consult to map your parameters, constraints, and business goals. We then provide a transparent, milestone-led Proposal detailing the scope, timeline, engineering profiles, and exact pricing."
  },
  {
    q: "Do you support cloud, AI, engineering, and managed operations together?",
    a: "Yes, this is our main differentiator. We have dedicated teams across each domain, allowing us to build, deploy, secure, and operate modern systems without requiring multiple separate agency vendor hand-offs."
  },
  {
    q: "Can services be tailored to specific compliance requirements?",
    a: "Yes. Our cybersecurity and engineering teams design all infrastructures to align with strict compliance parameters such as SOC-2, ISO-27001, HIPAA, or GDPR, integrating automated audits and policies-as-code."
  }
];
