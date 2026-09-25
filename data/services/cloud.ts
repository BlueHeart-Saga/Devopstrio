import { ServiceCategory, CapabilityDetail } from "./types";

export const cloudService: ServiceCategory = {
  slug: "cloud-services",
  title: "Cloud Services",
  badge: "Cloud Infrastructure",
  subtitle: "Accelerate your multi-cloud migrations, governance, and architecture on AWS, Microsoft Azure, and GCP. Partner with Devopstrio for FinOps and managed cloud solutions.",
  overviewHeading: "High-performance multi-cloud systems with guaranteed uptime",
  overviewDesc1: "We design and deploy enterprise-grade multi-cloud systems. Our migration architects relocate workloads to cloud environments, reducing latency and operational overheads.",
  overviewDesc2: "We construct secure landing zones, set up auto-scaling clusters, and configure cloud cost controllers. Our systems are backed by proactive FinOps optimization plans.",
  stats: [
    { value: "300+", label: "Cloud Migrations" },
    { value: "99.99%", label: "System Uptime" },
    { value: "35%+", label: "Operating Cost Saved" },
    { value: "40+", label: "Certified Engineers" }
  ],
  capabilities: [
    {
      slug: "cloud-strategy-consulting",
      title: "Cloud Strategy & Consulting",
      description: "Designing tailored cloud architecture blueprints, vendor evaluation, and cloud readiness roadmaps.",
      items: ["Multi-cloud feasibility and ROI analysis", "Technical vendor selection matrices", "Cloud architecture audits focusing on reliability"],
      href: "/services/cloud-services/cloud-strategy-consulting"
    },
    {
      slug: "cloud-migration",
      title: "Cloud Migration",
      description: "Re-hosting, re-platforming, and refactoring workloads to public and hybrid clouds with zero downtime.",
      items: ["Live VM migrations using AWS MGN", "Database replication with active sync using Azure DMS", "Automated cutover playbooks minimizing disruptions"],
      href: "/services/cloud-services/cloud-migration"
    },
    {
      slug: "cloud-architecture",
      title: "Cloud Architecture",
      description: "Design and blueprint enterprise-grade, highly available cloud environments.",
      items: ["High-availability disaster recovery designs", "Scalable microservices topologies", "Zero-trust network blueprints"],
      href: "/services/cloud-services/cloud-architecture"
    },
    {
      slug: "azure-services",
      title: "Azure Services",
      description: "Enterprise Azure landing zones, AKS Kubernetes clusters, and Microsoft cloud security governance.",
      items: ["Landing zones with automated security policies", "Azure Kubernetes (AKS) high-availability grids", "Azure Monitor & centralized Log Analytics"],
      href: "/services/cloud-services/azure-services"
    },
    {
      slug: "aws-services",
      title: "AWS Services",
      description: "Architecting and managing scalable, secure infrastructures on Amazon Web Services.",
      items: ["Declarative deployments using AWS CloudFormation and Terraform", "Containerized microservices on AWS EKS and ECS", "Serverless backends with AWS Lambda and DynamoDB"],
      href: "/services/cloud-services/aws-services"
    },
    {
      slug: "google-cloud-services",
      title: "Google Cloud Services",
      description: "Scalable GKE autopilot clusters, BigQuery data lakehouse pipelines, and Vertex AI integrations on GCP.",
      items: ["GKE Autopilot & Cloud Run microservices", "BigQuery multi-region data analytics platforms", "Vertex AI & Cloud Spanner scalable architectures"],
      href: "/services/cloud-services/google-cloud-services"
    },
    {
      slug: "cloud-security",
      title: "Cloud Security",
      description: "Continuous Cloud Security Posture Management (CSPM), automated compliance checks, and Zero-Trust IAM controls.",
      items: ["Automated Prisma Cloud / Wiz vulnerability scans", "Zero-Trust IAM & least-privilege policies", "Micro-segmentation & VPC firewall boundaries"],
      href: "/services/cloud-services/cloud-security"
    },
    {
      slug: "cloud-managed-services",
      title: "Cloud Managed Services",
      description: "24/7 outsourced multi-cloud management, automated operating system patching, and continuous cloud backup validation.",
      items: ["24/7 proactive multi-cloud SRE coverage", "Automated patch management & vulnerability mitigation", "Multi-region backup & disaster recovery drills"],
      href: "/services/cloud-services/cloud-managed-services"
    },
    {
      slug: "finops-cost-optimization",
      title: "FinOps & Cost Optimization",
      description: "Analyzing cloud spend, managing commitments, and pruning underutilized resources.",
      items: ["Real-time cloud spend dashboard integrations", "Savings Plan optimization algorithms", "Auto-scaling rules matching compute to live traffic metrics"],
      href: "/services/cloud-services/finops-cost-optimization"
    }
  ],
  outcomes: [
    "35% average reduction in monthly cloud infrastructure bills",
    "Zero-downtime database migrations with continuous sync validation",
    "100% adherence to cloud security posture benchmarks"
  ],
  industries: [
    "Logistics: Global fleet tracking databases and container routers",
    "Finance: High-frequency ledger hosting inside private subnets",
    "Government: GovCloud migrations and secure Row-Level Security PostgreSQL"
  ],
  techStack: [
    { name: "Terraform / OpenTofu", desc: "Declarative infrastructure as code utility." },
    { name: "AWS CloudFormation / Bicep", desc: "Native cloud orchestration templating." },
    { name: "Kubernetes (EKS/AKS/GKE)", desc: "Scale-ready container hosting platforms." }
  ],
  deliveryFramework: [
    "Phase 1: Cloud Assessment & Resource Audit",
    "Phase 2: Automated IaC Landing Zone Deployment",
    "Phase 3: Workload Migration & Cost Tuning"
  ],
  caseStudies: [
    {
      title: "Migrating property database for county records office to GovCloud.",
      desc: "We migrated 4.5M property documents from on-premise servers to AWS GovCloud. The setup includes daily automated backups and multi-factor employee authentication, cutting search times by 80%.",
      highlights: [
        "Transferred legacy data without loss",
        "Configured secure network firewall configurations",
        "Achieved 100% compliance with federal NIST guidelines"
      ]
    }
  ],
  faqs: [
    {
      q: "How do you control multi-cloud database drift?",
      a: "We use database replication hooks and sync validations to guarantee consistency before completing the final server cutover."
    },
    {
      q: "What tools do you use for cost monitoring?",
      a: "We integrate AWS Cost Explorer, Azure Cost Management, and specialized FinOps tooling like Kubecost and CloudCustodian."
    }
  ],
  ctaTitle: "Modernize your enterprise",
  ctaHighlight: "Cloud network",
  ctaDesc: "Schedule an assessment with our lead cloud architects to analyze your infrastructure bills and draft migration pathways.",
  ctaBtnText: "Consult Cloud Architect"
};

export const cloudCapabilities: Record<string, CapabilityDetail> = {
  "cloud-strategy-consulting": {
    slug: "cloud-strategy-consulting",
    title: "Cloud Strategy & Consulting",
    heroSubtitle: "Design highly-available cloud landing zones, evaluate vendor cost metrics, and map scalable migration blueprints.",
    challenge: "Enterprise legacy migrations frequently suffer from poorly defined sizing, vendor lock-in, security configuration gaps, and uncontrolled budget drift.",
    solution: "We provide deep structural audits, outline detailed application sizing requirements, compare pricing models, and draft declarative cloud blueprints.",
    features: [
      "Application dependency mapping and cloud readiness scoring",
      "Total Cost of Ownership (TCO) calculators and vendor comparison reports",
      "Multi-region high-availability disaster recovery (DR) designs"
    ],
    benefits: [
      "Elimination of unexpected capacity bottlenecking",
      "Clear cost projections before code is deployed",
      "Robust security posture from day one"
    ],
    deliveryApproach: [
      "Structural Audit: Analyzing on-premise servers and database sizes.",
      "Vendor Evaluation: Comparing performance and pricing matrices.",
      "Roadmap Handoff: Delivering Terraform landing zone scripts and plans."
    ],
    techStack: [
      { name: "Terraform", desc: "Multi-cloud infrastructure resource builder." },
      { name: "AWS Cost Calculator", desc: "Accurate cost planning utility." },
      { name: "Prisma Cloud", desc: "Security and compliance posture analyzer." }
    ],
    caseStudy: {
      title: "Designing high-availability disaster recovery layout for national retailer.",
      desc: "We audited and designed an automated multi-region failover network. The setup uses secondary replica databases in distinct regions, reducing failover time to under 4 minutes.",
      metrics: [
        { value: "<4 min", label: "Recovery Time Objective (RTO)" },
        { value: "0", label: "Single points of failure" },
        { value: "100%", label: "IaC coverage" }
      ]
    },
    faqs: [
      {
        q: "Do you design hybrid cloud configurations?",
        a: "Yes. We regularly connect private on-premise mainframes to AWS or Azure public resources using VPN gateways."
      },
      {
        q: "How do you evaluate cloud migration readiness?",
        a: "We score applications based on database size, stateful connections, and network bandwidth requirements."
      }
    ]
  },
  "cloud-migration": {
    slug: "cloud-migration",
    title: "Cloud Migration",
    heroSubtitle: "Cloud migration services in UK help organisations move applications, data, and workloads from existing infrastructure into suitable cloud environments. Our cloud migration solutions for UK businesses support smoother transitions, better resource management, and improved continuity across public and hybrid cloud platforms. Our cloud migration specialists UK also connect migration with efficient DevOps automation pipelines.",
    challenge: "Moving critical workloads to the cloud can expose organisations to application dependencies, data transfer issues, security gaps, and unexpected compatibility problems that delay migration projects and disrupt daily operations.",
    solution: "Our UK cloud migration services provide structured planning, workload assessment, and controlled transitions across modern cloud environments. Our cloud migration specialists coordinate each stage with your existing infrastructure, helping maintain visibility, security, and operational control.",
    features: [
      "Application and workload assessment before migration",
      "Secure data transfer with workload validation",
      "Planned cutover procedures with recovery options"
    ],
    benefits: [
      "Smoother transitions with minimal operational disruption",
      "Greater visibility across migrated workloads",
      "Faster recovery when migration issues arise"
    ],
    deliveryApproach: [
      "Phase 1: Application and workload assessment before migration.",
      "Phase 2: Secure data transfer with workload validation.",
      "Phase 3: Planned cutover procedures with recovery options."
    ],
    techStack: [
      { name: "AWS Application Migration Service", desc: "Low-level block replication engine." },
      { name: "AWS Database Migration Service (DMS)", desc: "Database sync and conversion pipeline." },
      { name: "Azure Migrate", desc: "Unified migration portal." }
    ],
    caseStudy: {
      title: "Migrating financial services ledger to AWS Aurora with zero downtime.",
      desc: "We migrated a 4TB transactional ledger from on-premise PostgreSQL servers to AWS Aurora. The migration ran in the background, validating transaction checksums live, with a seamless cutover.",
      metrics: [
        { value: "0 ms", label: "Cutover service downtime" },
        { value: "4TB", label: "Data migrated securely" },
        { value: "100%", label: "Transaction integrity verified" }
      ]
    },
    faqs: [
      {
        q: "What are cloud migration services in the UK?",
        a: "Cloud migration services help UK businesses move applications, data, and workloads from existing infrastructure to suitable cloud environments."
      },
      {
        q: "What is involved in a cloud migration?",
        a: "Cloud migration typically involves assessment, planning, workload preparation, data transfer, testing, deployment, and post-migration support."
      },
      {
        q: "Can you migrate legacy applications to the cloud?",
        a: "Yes. Our specialists can assess legacy applications and identify suitable migration approaches based on dependencies, performance, and business requirements."
      },
      {
        q: "Which cloud platforms do you support?",
        a: "We support leading platforms including Microsoft Azure, AWS, and Google Cloud, depending on your workloads and infrastructure requirements."
      },
      {
        q: "How long does cloud migration take?",
        a: "Migration timelines vary according to workload size, application complexity, data volume, dependencies, and the chosen migration approach."
      },
      {
        q: "Can cloud migration reduce IT costs?",
        a: "It can. Moving suitable workloads to the cloud may reduce infrastructure overhead and improve resource usage when the environment is properly managed."
      },
      {
        q: "How do you protect data during migration?",
        a: "We use controlled migration processes, validation checks, access controls, and security measures to protect data throughout the transition."
      },
      {
        q: "Do you provide cloud migration support after deployment?",
        a: "Yes. Cloud migration support UK can include monitoring, troubleshooting, optimisation, security reviews, and ongoing infrastructure assistance."
      },
      {
        q: "Can you support hybrid cloud migrations?",
        a: "Yes. Our UK cloud migration services can support transitions involving public, private, and hybrid cloud environments."
      },
      {
        q: "How do I choose the right cloud migration solution?",
        a: "The right cloud migration solution depends on your applications, data, security needs, existing infrastructure, budget, and long-term business requirements."
      }
    ]
  },
  "aws-services": {
    slug: "aws-services",
    title: "AWS Services",
    heroSubtitle: "AWS services in UK give businesses access to cloud computing, storage, databases, networking, and security capabilities. They support infrastructure modernisation, workload management, and flexible resource usage across different business requirements. Our AWS cloud solutions help organisations make better use of their cloud environment. Read our company overview to learn more.",
    challenge: "Managing enterprise AWS environments can introduce performance constraints, integration complexity, configuration issues, and deployment delays that affect engineering efficiency.",
    solution: "We provide secure, automated AWS infrastructure solutions aligned with your existing workflows. Our AWS cloud services include configuration controls, validation checks, and continuous monitoring to maintain visibility across your environment.",
    features: [
      "Automated deployment templates for AWS environments",
      "Continuous pipeline validation and compliance checks",
      "Terraform, OpenTofu, and AWS CloudFormation integration"
    ],
    benefits: [
      "Faster deployments with smoother release processes and fewer delays",
      "Clearer infrastructure visibility with continuous performance monitoring",
      "Better governance with consistent security and compliance controls"
    ],
    deliveryApproach: [
      "Phase 1: AWS Architecture & Security Assessment.",
      "Phase 2: Automated IaC Template Deployment & Pipeline Integration.",
      "Phase 3: Real-Time Telemetry, Monitoring & Governance Setup."
    ],
    techStack: [
      { name: "AWS CloudFormation", desc: "Native infrastructure orchestration." },
      { name: "Terraform / OpenTofu", desc: "Declarative infrastructure as code." },
      { name: "Amazon EKS & Lambda", desc: "Scalable container and serverless compute." }
    ],
    caseStudy: {
      title: "Automated AWS infrastructure for high-scale enterprise SaaS.",
      desc: "Deployed automated, multi-region AWS environments using Terraform and CloudFormation, achieving high availability and automated compliance validation.",
      metrics: [
        { value: "45%", label: "Faster Deployment Cycles" },
        { value: "99.99%", label: "Uptime Achieved" },
        { value: "100%", label: "IaC Automation" }
      ]
    },
    faqs: [
      {
        q: "What are AWS services in UK?",
        a: "AWS services provide UK businesses with cloud computing, storage, networking, databases, security, and infrastructure resources."
      },
      {
        q: "What AWS services can businesses use?",
        a: "Businesses can use AWS services for computing, storage, databases, networking, security, analytics, automation, and application deployment."
      },
      {
        q: "What are AWS cloud services used for?",
        a: "AWS cloud services help organisations run applications, manage data, improve infrastructure flexibility, and support changing workload demands."
      },
      {
        q: "Can you migrate existing systems to AWS?",
        a: "Yes. AWS migration services help businesses move applications, data, and workloads from existing infrastructure to AWS environments."
      },
      {
        q: "Are AWS services suitable for UK businesses?",
        a: "Yes. AWS solutions can support UK businesses with flexible infrastructure, security controls, workload management, and cloud operations."
      },
      {
        q: "How can AWS help reduce cloud costs?",
        a: "AWS can help control costs through resource right-sizing, automated scaling, usage monitoring, and removal of unused resources."
      },
      {
        q: "Can AWS support hybrid cloud environments?",
        a: "Yes. AWS supports hybrid cloud connectivity, allowing businesses to connect AWS infrastructure with existing on-premises environments."
      },
      {
        q: "How secure are AWS cloud environments?",
        a: "AWS provides security tools for access management, encryption, monitoring, compliance, and protection of cloud workloads."
      },
      {
        q: "Do you provide AWS support services?",
        a: "Yes. AWS support services can include monitoring, troubleshooting, optimisation, infrastructure management, and ongoing technical assistance."
      },
      {
        q: "How do I choose the right AWS solution?",
        a: "The right AWS solution depends on your workloads, security requirements, existing infrastructure, budget, performance needs, and business objectives."
      }
    ]
  },
  "cloud-security": {
    slug: "cloud-security",
    title: "Cloud Security",
    heroSubtitle: "Cloud security services UK provide structured protection for cloud infrastructure, applications, data, and user access across highly-available cloud environments. They enable organisations to secure sensitive workloads, manage access controls, identify vulnerabilities, and maintain stronger security standards while operating across modern cloud architectures.",
    challenge: "Unidentified cloud vulnerabilities reaching production without proper security validation, non-compliance with GDPR, HIPAA, or FSQS, and unmanaged access rights allowing privilege escalation.",
    solution: "We deliver structured cloud security services UK combining continuous posture management, zero-trust IAM policies, least-privilege controls, and automated compliance auditing.",
    features: [
      "Automated vulnerability scanning and security posture auditing",
      "Zero-Trust IAM controls and least-privilege enforcement",
      "Continuous compliance monitoring aligned with SOC-2, ISO-27001, and GDPR"
    ],
    benefits: [
      "Stronger Protection: Improved cloud security across production environments and critical workloads.",
      "Better Compliance: Audited cloud environments aligned with SOC 2 and relevant regulatory requirements.",
      "Greater Visibility: Improved threat monitoring, access control, workload protection, and day-to-day cloud security."
    ],
    deliveryApproach: [
      "Phase 1: Cloud Security Posture Audit & Vulnerability Assessment.",
      "Phase 2: IAM Hardening, Zero-Trust Controls & Network Micro-Segmentation.",
      "Phase 3: Continuous Threat Monitoring & Compliance Reporting."
    ],
    techStack: [
      { name: "Prisma Cloud", desc: "Cloud security posture management." },
      { name: "Wiz", desc: "Vulnerability and risk scanning." },
      { name: "AWS Security Hub / Azure Defender", desc: "Native cloud security suites." }
    ],
    caseStudy: {
      title: "Hardening cloud infrastructure and SOC 2 alignment for financial tech firm.",
      desc: "Implemented automated CSPM scanners and Zero-Trust access controls across multi-cloud environments, achieving full compliance pass rate.",
      metrics: [
        { value: "100%", label: "Audit Pass Rate" },
        { value: "0", label: "Critical Vulnerabilities" },
        { value: "24/7", label: "Threat Monitoring" }
      ]
    },
    faqs: [
      {
        q: "What are cloud security services UK?",
        a: "Cloud security services UK protect cloud infrastructure, applications, data, identities, and workloads from vulnerabilities, unauthorised access, and security threats."
      },
      {
        q: "What does cloud security protect?",
        a: "Cloud security protects sensitive data, applications, workloads, user identities, networks, and cloud infrastructure from security risks."
      },
      {
        q: "Why is cloud security important for businesses?",
        a: "Cloud security helps businesses reduce security risks, protect sensitive information, control access, and maintain secure cloud operations."
      },
      {
        q: "How does cloud security prevent unauthorised access?",
        a: "It uses identity controls, access policies, authentication, monitoring, and permission management to restrict unauthorised access."
      },
      {
        q: "Can cloud security help with compliance?",
        a: "Yes, cloud security can support compliance by strengthening access controls, data protection, monitoring, and security practices."
      },
      {
        q: "What cloud environments can be secured?",
        a: "Cloud security can be applied across public, private, hybrid, and multi-cloud environments depending on the organisation's setup."
      },
      {
        q: "How are cloud vulnerabilities identified?",
        a: "Vulnerabilities can be identified through security assessments, configuration reviews, vulnerability scanning, access reviews, and continuous monitoring."
      },
      {
        q: "Does cloud security protect data from internal threats?",
        a: "Yes, appropriate access controls, permissions, monitoring, and activity logging can help reduce the risk of internal data exposure."
      },
      {
        q: "How often should cloud security be assessed?",
        a: "Cloud security should be reviewed regularly and whenever there are significant changes to infrastructure, applications, users, or security requirements."
      },
      {
        q: "How can organisations improve their cloud security?",
        a: "Organisations can improve cloud security by reviewing access rights, monitoring workloads, addressing vulnerabilities, protecting sensitive data, and maintaining appropriate security controls."
      }
    ]
  }
};
