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
      items: ["Multi-cloud feasibility and ROI analysis", "Technical vendor selection matrices", "Cloud architecture audits focusing on reliability"]
    },
    {
      slug: "cloud-migration",
      title: "Cloud Migration",
      description: "Re-hosting, re-platforming, and refactoring workloads to public and hybrid clouds with zero downtime.",
      items: ["Live VM migrations using AWS MGN", "Database replication with active sync using Azure DMS", "Automated cutover playbooks minimizing disruptions"]
    },
    {
      slug: "aws-services",
      title: "AWS Services",
      description: "Architecting and managing scalable, secure infrastructures on Amazon Web Services.",
      items: ["Declarative deployments using AWS CloudFormation and Terraform", "Containerized microservices on AWS EKS and ECS", "Serverless backends with AWS Lambda and DynamoDB"]
    },
    {
      slug: "finops-cost-optimization",
      title: "FinOps & Cost Optimization",
      description: "Analyzing cloud spend, managing commitments, and pruning underutilized resources.",
      items: ["Real-time cloud spend dashboard integrations", "Savings Plan optimization algorithms", "Auto-scaling rules matching compute to live traffic metrics"]
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
    heroSubtitle: "Migrate critical production workloads, relational databases, and microservices to secure clouds with zero downtime.",
    challenge: "Traditional database migrations cause service interruptions, data drift, and database synchronization failures.",
    solution: "We use continuous replication engines to mirror databases live, validating transaction integrity before initiating final DNS cutovers.",
    features: [
      "Live VM migration with continuous background block-level replication",
      "Database schema conversion and active replication replication streams",
      "Automated fallback check scripts for safe rollback paths"
    ],
    benefits: [
      "Zero business downtime during migration cycles",
      "No transactional data loss or record duplication",
      "Automated rollbacks preventing service lockups"
    ],
    deliveryApproach: [
      "Setup Sync: Establishing live replication tunnels between source and target.",
      "Dry-run Validation: Running transaction scoring tests on target replicas.",
      "DNS Cutover: Executing final redirects and archiving legacy nodes."
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
        q: "What database engines can you migrate?",
        a: "We regularly migrate PostgreSQL, MySQL, Oracle, Microsoft SQL Server, and legacy MongoDB databases."
      },
      {
        q: "How do you verify migration checksums?",
        a: "We compute automated row-count checks and transaction hash validations between target and source databases."
      }
    ]
  }
};
