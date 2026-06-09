import { EcosystemDomain, EcosystemSubpageDetail } from "./types";

export const partnershipsDomain: EcosystemDomain = {
  slug: "partnerships",
  title: "Strategic Partnerships",
  badge: "Global Alliances",
  subtitle: "Collaborating with market leaders in cloud computing, databases, and enterprise software to build compliant, high-performing integration blueprints.",
  overviewHeading: "Co-engineered cloud solutions backed by certified architects",
  overviewDesc1: "We partner with AWS, Microsoft Azure, Google Cloud, and Oracle. Together, we deploy secure cloud infrastructure, automate deployment pipelines, and configure secure API systems under strict compliance guidelines.",
  overviewDesc2: "Through joint engineering programs, we develop pre-certified architecture templates, accelerating time-to-market and lowering migration costs for enterprise clients.",
  stats: [
    { value: "10+", label: "Strategic Technology Alliances" },
    { value: "500+", label: "Certified Engineers" },
    { value: "12+", label: "Co-Engineered Accelerators" },
    { value: "99.99%", label: "Joint Service Uptime SLA" }
  ],
  subpages: [
    { slug: "microsoft", title: "Microsoft Alliance", description: "Azure migrations, Enterprise Landing Zones, and SQL databases." },
    { slug: "aws", title: "AWS Partner Network", description: "AWS CloudFormation, serverless computing, and EKS clusters." },
    { slug: "google-cloud", title: "Google Cloud Ecosystem", description: "BigQuery analytics, Kubernetes GKE, and Vertex AI models." },
    { slug: "oracle", title: "Oracle Alliance", description: "OCI migrations, Autonomous Database optimization, and cloud PL/SQL runtimes." },
    { slug: "servicenow", title: "ServiceNow Integration", description: "ITSM workflow automation, custom integrations, and virtual agents." },
    { slug: "sap", title: "SAP on Cloud", description: "S/4HANA migrations, secure cloud hosting, and compliance blueprints." },
    { slug: "cisco", title: "Cisco Networking", description: "Secure SD-WAN designs, Zero-Trust networking, and unified communications." }
  ],
  benefits: [
    "Priority access to cloud platform beta features and roadmaps",
    "Pre-certified infrastructure layouts complying with HIPAA and SOC-2 guidelines",
    "Dedicated migration support from partner solution architects"
  ],
  faqs: [
    { q: "Are your developers certified on partner platforms?", a: "Yes, our team holds over 500 active certificates across AWS, Azure, Google Cloud, and Oracle platforms." },
    { q: "Do you design multi-cloud setups with these partners?", a: "Yes, we regularly deploy multi-cloud systems using Terraform to route workloads across AWS, Azure, and Google Cloud." }
  ],
  ctaTitle: "Co-engineer your cloud",
  ctaHighlight: "Alliance roadmap",
  ctaDesc: "Request a briefing to discuss how our strategic alliances can streamline your next cloud migration.",
  ctaBtnText: "Consult Alliance Leads"
};

export const partnershipsSubpages: Record<string, EcosystemSubpageDetail> = {
  microsoft: {
    slug: "microsoft",
    title: "Microsoft Alliance",
    heroSubtitle: "Deploy enterprise Azure landing zones, SQL databases, and secure identity networks with Microsoft certified leads.",
    challenge: "Enterprises migrating to Azure encounter configuration drift, loose IAM network rules, and complex legacy database migrations.",
    solution: "We build secure landing zones utilizing Azure Bicep templates, configure Okta/Azure AD identity access, and migrate databases via Azure DMS.",
    features: [
      "Enterprise Landing Zones built with Azure Bicep and ARM templates",
      "Container orchestration using Azure Kubernetes Service (AKS)",
      "App Services and Serverless Function App deployments"
    ],
    benefits: [
      "100% compliance with Microsoft Cloud Adoption Framework guidelines",
      "Lower monthly compute costs through Azure Hybrid Benefit configurations",
      "Seamless AD identity integration for hybrid offices"
    ],
    techStack: [
      { name: "Azure Bicep / ARM", desc: "Native declarative resource templating tools." },
      { name: "Azure AKS", desc: "Secure container management hub." },
      { name: "Microsoft SQL Server", desc: "Enterprise relational database server." }
    ],
    caseStudy: {
      title: "Azure Landing Zone migration for national database coordinator.",
      desc: "We deployed an Azure landing zone cluster with AKS container orchestration, relocating 4M database records securely and passing SOC-2 audits.",
      metrics: [
        { value: "100%", label: "SOC-2 Compliance Passed" },
        { value: "<15m", label: "Automated Build Delivery" },
        { value: "0", label: "Security Incidents Encountered" }
      ]
    },
    faqs: [
      { q: "Do you support Azure GovCloud?", a: "Yes, we deploy secure federal setups inside Azure Government Cloud complying with NIST standards." },
      { q: "How do you secure Azure SQL databases?", a: "We enable private endpoints, restrict ingress to virtual networks, and turn on automated encryption keys." }
    ]
  },
  aws: {
    slug: "aws",
    title: "AWS Partner Network",
    heroSubtitle: "Build serverless AWS backends, autoscaling EKS Kubernetes clusters, and secure KMS database configurations.",
    challenge: "AWS configurations suffer from unmanaged IAM wildcard permissions, unencrypted S3 buckets, and high monthly compute bills.",
    solution: "We write Terraform configurations, deploy secure AWS KMS encryption, configure AWS IAM policies, and tune resource sizes.",
    features: [
      "Infrastructure deployments utilizing Terraform and CloudFormation templates",
      "Kubernetes container management using Amazon EKS",
      "Serverless pipelines leveraging AWS Lambda and DynamoDB databases"
    ],
    benefits: [
      "Zero cluster configuration drift via GitOps",
      "35% average reduction in monthly AWS bills",
      "Automated threat notifications via AWS GuardDuty"
    ],
    techStack: [
      { name: "Terraform", desc: "Declarative multi-cloud infrastructure builder." },
      { name: "AWS EKS", desc: "High-performance Kubernetes service." },
      { name: "AWS Lambda", desc: "Serverless code execution environment." }
    ],
    caseStudy: {
      title: "Serverless telemetry collector for automotive manufacturer.",
      desc: "We deployed an AWS Lambda and DynamoDB telemetry collector, parsing 100M daily vehicle messages without latency.",
      metrics: [
        { value: "100M+", label: "Daily processed coordinates" },
        { value: "<50ms", label: "Telemetry ingestion latency" },
        { value: "45%", label: "Saved in monthly cloud bills" }
      ]
    },
    faqs: [
      { q: "What is your tier in the AWS Partner Network?", a: "We are an AWS Advanced Tier Services Partner with verified competencies in DevOps and Migration." },
      { q: "How do you protect database keys?", a: "We store keys inside AWS Secrets Manager, rotating credentials automatically every 30 days." }
    ]
  },
  "google-cloud": {
    slug: "google-cloud",
    title: "Google Cloud Ecosystem",
    heroSubtitle: "Leverage Google Cloud for container workloads, analytics databases, and machine learning model hosting.",
    challenge: "Managing massive data ingestion and model inference loops on-premise creates latency and high hardware maintenance overhead.",
    solution: "We configure BigQuery data warehouses, deploy autoscaling Google Kubernetes Engine (GKE) clusters, and connect Vertex AI toolsets.",
    features: [
      "BigQuery cluster structures and partitioned datastores",
      "Dynamic node scaling using GKE Autopilot clusters",
      "Compute Engine VMs with direct GPU mapping pipelines"
    ],
    benefits: [
      "Optimized query performance for petabyte-scale datasets",
      "Seamless ML pipelines with Vertex AI and Vertex Model Registry",
      "Reduced cluster management overhead via GKE Autopilot"
    ],
    techStack: [
      { name: "Google BigQuery", desc: "Highly scalable serverless cloud data warehouse." },
      { name: "Google GKE", desc: "Managed Kubernetes service with autopilot setups." },
      { name: "Vertex AI", desc: "Unified artificial intelligence development platform." }
    ],
    caseStudy: {
      title: "Google Cloud migration for video analytics client.",
      desc: "Relocated a pipeline handling 400 streams of video feeds onto Google Cloud, processing 10T of stream logs daily.",
      metrics: [
        { value: "10T+", label: "Daily processed video logs" },
        { value: "<250ms", label: "Object detection latency" },
        { value: "99.95%", label: "Stream availability SLA" }
      ]
    },
    faqs: [
      { q: "Do you support Google Cloud Anthos?", a: "Yes, we configure Anthos clusters for clients running hybrid cloud nodes." },
      { q: "Can we link BigQuery with local databases?", a: "Yes, we write Cloud Dataflow and Pub/Sub pipelines to sync databases in real-time." }
    ]
  },
  oracle: {
    slug: "oracle",
    title: "Oracle Alliance",
    heroSubtitle: "Deploy Oracle Autonomous Database setups and optimize enterprise PL/SQL applications on OCI.",
    challenge: "Legacy Oracle database clusters suffer from licensing audits, high DBA cost overheads, and tuning complexity.",
    solution: "We configure Oracle Cloud Infrastructure (OCI) migrations, migrate databases to Autonomous Transaction Processing, and script secure backup policies.",
    features: [
      "Autonomous Database clustering and self-patching configs",
      "Oracle GoldenGate real-time data integration templates",
      "OCI FastConnect dedicated bandwidth setups"
    ],
    benefits: [
      "Self-securing database schemas patching vulnerabilities in real-time",
      "Zero downtime migrations using GoldenGate replication tools",
      "40% cost reduction compared to legacy on-premise hardware"
    ],
    techStack: [
      { name: "Oracle Autonomous DB", desc: "Self-driving database cluster service." },
      { name: "Oracle OCI Console", desc: "Cloud management and policy engine." },
      { name: "Oracle GoldenGate", desc: "High-performance transactional data sync." }
    ],
    caseStudy: {
      title: "OCI Database relocation for financial transaction client.",
      desc: "Migrated a core relational database with 8TB of sensitive tables onto OCI Autonomous Database, reducing average query runtime by 65%.",
      metrics: [
        { value: "8TB", label: "Relocated database tables" },
        { value: "65%", label: "Query speedup achieved" },
        { value: "0", label: "Downtime during migrations" }
      ]
    },
    faqs: [
      { q: "Do you support Oracle Database migrations to AWS?", a: "Yes, we migrate Oracle databases to Amazon RDS using AWS DMS." },
      { q: "What security features does Autonomous Database provide?", a: "It provides transparent data encryption, secure audit logs, and automatic security patches." }
    ]
  },
  servicenow: {
    slug: "servicenow",
    title: "ServiceNow Integration",
    heroSubtitle: "Automate IT service management workflow routines and deploy custom business catalogs on ServiceNow.",
    challenge: "Manual ticket assignments and disconnected help desks lead to slow response SLA compliance audits.",
    solution: "We customize ServiceNow ITOM/ITSM models, program automated alert routing scripts, and deploy virtual chatbots.",
    features: [
      "ITSM incident automation workflow structures",
      "Custom catalog templates with JavaScript workflow rules",
      "App Engine custom application builder setups"
    ],
    benefits: [
      "80% reduction in average ticket resolution delays",
      "Automatic incident generation from cloud monitoring logs",
      "Centralized asset catalog tracking and compliance"
    ],
    techStack: [
      { name: "ServiceNow ITSM/ITOM", desc: "IT management and operations software suite." },
      { name: "ServiceNow App Engine", desc: "Low-code custom application framework." },
      { name: "ServiceNow IntegrationHub", desc: "API connector package for SaaS systems." }
    ],
    caseStudy: {
      title: "ITSM workflow overhaul for global logistics group.",
      desc: "Designed and configured a ServiceNow ticketing system automating assignments for 15,000 corporate agents worldwide.",
      metrics: [
        { value: "15,000", label: "Active platform users" },
        { value: "80%", label: "Auto-assignment success" },
        { value: "<5m", label: "Average ticket pickup time" }
      ]
    },
    faqs: [
      { q: "Can ServiceNow connect with Slack or Teams?", a: "Yes, we use ServiceNow IntegrationHub to sync incident feeds directly into communications software." },
      { q: "Do you support custom ServiceNow portal portals?", a: "Yes, we build responsive catalog portal layouts matching corporate style standards." }
    ]
  },
  sap: {
    slug: "sap",
    title: "SAP on Cloud",
    heroSubtitle: "Host SAP S/4HANA workloads safely inside AWS, Azure, and Google Cloud with verified setups.",
    challenge: "Running SAP on-premise requires expensive hardware updates, lacks automated backups, and suffers from database recovery bottlenecks.",
    solution: "We build secure cloud hosting layouts for SAP, configure SAP HANA clustering, and write disaster recovery scripts.",
    features: [
      "SAP S/4HANA cloud migration templates",
      "Disaster recovery setups with database mirroring pools",
      "HANA database partition configurations"
    ],
    benefits: [
      "Guaranteed disaster recovery backup recovery times (RTO)",
      "Dynamic virtual machine resizing during end-of-quarter workloads",
      "Enterprise security compliance validation under SOC-2 policies"
    ],
    techStack: [
      { name: "SAP S/4HANA", desc: "Enterprise resource planning database suite." },
      { name: "SAP HANA Studio", desc: "Database query and configuration studio." },
      { name: "Cloud Recovery Manager", desc: "Automated failover and mirroring utility." }
    ],
    caseStudy: {
      title: "SAP HANA migration to AWS for manufacturing enterprise.",
      desc: "Relocated a legacy SAP landscape with 12 active modules onto AWS, improving S/4HANA report generation speeds by 3x.",
      metrics: [
        { value: "12", label: "Migrated SAP modules" },
        { value: "3x", label: "Report compilation speedup" },
        { value: "99.99%", label: "Workload availability SLA" }
      ]
    },
    faqs: [
      { q: "Is SAP cloud migration secure?", a: "Yes, we secure the network with private VPN transit gateways, IAM roles, and disk encryptions." },
      { q: "Do you configure SAP database backups?", a: "Yes, we script automatic backups that dump to secure cloud object stores every hour." }
    ]
  },
  cisco: {
    slug: "cisco",
    title: "Cisco Networking",
    heroSubtitle: "Design secure SD-WAN networks and configure zero-trust network policies with Cisco hardware.",
    challenge: "Enterprise networks face perimeter security threats, slow WAN routing loops, and lack centralized packet monitoring.",
    solution: "We build Cisco SD-WAN configurations, establish Zero-Trust network rules, and set up Cisco Duo identity validations.",
    features: [
      "Cisco SD-WAN virtual tunnel configurations",
      "Zero-Trust network segmentation rules",
      "Cisco Duo adaptive multi-factor authentication (MFA)"
    ],
    benefits: [
      "Optimized traffic routing across international branch offices",
      "Instant quarantine of compromised network hosts",
      "Secure remote access for remote workers without VPN lag"
    ],
    techStack: [
      { name: "Cisco SD-WAN", desc: "Software-defined wide area network framework." },
      { name: "Cisco DNA Center", desc: "Centralized network management control panel." },
      { name: "Cisco Duo MFA", desc: "Adaptive identity validation service." }
    ],
    caseStudy: {
      title: "SD-WAN network deployment for international bank.",
      desc: "Configured Cisco SD-WAN tunnels connecting 120 regional branches with centralized cloud resources, securing operations.",
      metrics: [
        { value: "120", label: "Connected branch offices" },
        { value: "40%", label: "WAN data cost reduction" },
        { value: "0", label: "Security perimeter leaks" }
      ]
    },
    faqs: [
      { q: "Do you support Cisco ACI setups?", a: "Yes, we configure Cisco Application Centric Infrastructure (ACI) inside private datacenters." },
      { q: "How does Cisco Duo prevent identity fraud?", a: "It audits device security posture, IP location, and user patterns before authorizing access." }
    ]
  }
};
