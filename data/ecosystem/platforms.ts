import { EcosystemDomain, EcosystemSubpageDetail } from "./types";

export const platformsDomain: EcosystemDomain = {
  slug: "platforms-solutions",
  title: "Platforms & Solutions",
  badge: "Owned Products & IP",
  subtitle: "Leverage Devopstrio-owned software platforms, accelerators, and SaaS codebases built to reduce development setup times.",
  overviewHeading: "Pre-built software accelerators designed for rapid execution",
  overviewDesc1: "We build proprietary codebases, DevOps automations, and AI assistant frameworks. Our platforms decrease time-to-market by up to 90%, avoiding legacy rebuild overheads.",
  overviewDesc2: "Each platform is packaged with declarative IaC configs, allowing instant deployment into secure client clouds under SOC-2 parameters.",
  stats: [
    { value: "25+", label: "Proprietary Accelerators" },
    { value: "90%", label: "Faster Setup Times" },
    { value: "100%", label: "IaC Coverage" },
    { value: "SOC-2", label: "Pre-Audit Compliance" }
  ],
  subpages: [
    { slug: "saas-platforms", title: "SaaS Platforms", description: "Enterprise SaaS products, digital platforms, and business applications." },
    { slug: "devops-platform", title: "DevOps Platform", description: "Unified developer portal, CI/CD templates, and Kubernetes provisioning." },
    { slug: "cloud-management-platform", title: "Cloud Management Platform", description: "Multi-cloud budget dashboard, resource audits, and automated sizing." },
    { slug: "security-platform", title: "Security Platform", description: "Automated policy checker, container scans, and compliance audits." },
    { slug: "data-platform", title: "Data Platform", description: "Lakehouse compression, real-time database sync, and warehouse schemas." },
    { slug: "automation-platform", title: "Automation Platform", description: "Multi-agent workflows, API routers, and cron job managers." },
    { slug: "customer-experience-platform", title: "Customer Experience Platform", description: "Dynamic support portal, chatbot widgets, and telemetry feedback." }
  ],
  benefits: [
    "Drastic reduction in initial architecture build times",
    "Pre-audited compliance controls for rapid cloud deployment",
    "Continuous software updates from our platform team"
  ],
  faqs: [
    { q: "Do we have to host these on your servers?", a: "No, all our platforms are designed to be deployed directly into your own private cloud accounts." },
    { q: "What licensing models do you support?", a: "We offer enterprise subscription models, including full source code hand-off option plans." }
  ],
  ctaTitle: "Accelerate your development",
  ctaHighlight: "Software deployment",
  ctaDesc: "Contact our platform engineers to view live demonstrations and discuss setup integrations for your workspace.",
  ctaBtnText: "Request Platform Demo"
};

export const platformsSubpages: Record<string, EcosystemSubpageDetail> = {
  "saas-platforms": {
    slug: "saas-platforms",
    title: "SaaS Platforms",
    heroSubtitle: "Deploy and scale multi-tenant subscription applications, billing systems, and business platforms.",
    challenge: "Developing SaaS infrastructure (subscriptions, tenant isolation, billing) from scratch is slow and prone to errors.",
    solution: "We build secure, multi-tenant templates integrated with Stripe, user directories, and isolated DB schemas.",
    features: [
      "Multi-tenant database schema isolation rules",
      "Stripe subscription and billing engine setups",
      "Centralized identity access and tenant management"
    ],
    benefits: [
      "90% reduction in SaaS setup architecture time",
      "Robust billing integration preventing revenue leakage",
      "Pre-integrated security and compliance baselines"
    ],
    techStack: [
      { name: "Next.js / React", desc: "Responsive client app dashboard frontends." },
      { name: "Node.js / Express", desc: "Multi-tenant service controller APIs." },
      { name: "PostgreSQL", desc: "Isolated relational schema data storage." }
    ],
    caseStudy: {
      title: "SaaS platform rollout for enterprise client.",
      desc: "We deployed our multi-tenant SaaS workspace, enabling the client to onboard 6 custom sub-tenants and process transactions in weeks.",
      metrics: [
        { value: "6", label: "Onboarded tenant workspaces" },
        { value: "90%", label: "Faster time-to-market speed" },
        { value: "100%", label: "Subscription revenue visibility" }
      ]
    },
    faqs: [
      { q: "Is each tenant's data isolated?", a: "Yes, we support both row-level security (RLS) schemas and separate database-per-tenant configurations." },
      { q: "Can we use custom domains for tenants?", a: "Yes, our routing setup integrates with cloud CDN endpoints to map tenant-specific custom domains." }
    ]
  },
  "devops-platform": {
    slug: "devops-platform",
    title: "DevOps Platform",
    heroSubtitle: "Provide developer self-service templates and automate Kubernetes namespace provisioning.",
    challenge: "Developers wait days for SRE teams to provision cloud infrastructure, delaying feature rollouts.",
    solution: "We configure a Backstage developer portal enabling instant infrastructure setups using approved templates.",
    features: [
      "Self-service environment creator templates",
      "ArgoCD application tracking dashboard integrations",
      "Automated cloud network isolation rules"
    ],
    benefits: [
      "New feature launch cycles reduced from weeks to minutes",
      "Guaranteed security setup alignment across all projects",
      "Lower developer friction and ticketing backlog"
    ],
    techStack: [
      { name: "Backstage / React", desc: "Open-source developer portal framework." },
      { name: "Terraform Enterprise", desc: "Infrastructure management engine." },
      { name: "ArgoCD", desc: "GitOps deployment controller." }
    ],
    caseStudy: {
      title: "Developer self-service portal for retail client.",
      desc: "Deployed our Backstage portal template, allowing 400 developers to provision isolated Kubernetes test beds on-demand.",
      metrics: [
        { value: "400+", label: "Active developer users" },
        { value: "95%", label: "Reduction in infrastructure tickets" },
        { value: "5 minutes", label: "Average cluster setup time" }
      ]
    },
    faqs: [
      { q: "Can we restrict templates to specific teams?", a: "Yes, we integrate portal RBAC rules with Okta or Azure AD groups." },
      { q: "Does the platform track infrastructure cost?", a: "Yes, we integrate cost auditing charts directly inside the developer dashboard view." }
    ]
  },
  "cloud-management-platform": {
    slug: "cloud-management-platform",
    title: "Cloud Management Platform",
    heroSubtitle: "Track cloud spend, audit inactive resources, and automate sizing optimizations.",
    challenge: "Multi-cloud layouts suffer from unmonitored costs, abandoned test databases, and over-provisioned VMs.",
    solution: "We deploy our centralized cost telemetry dashboard, alerting teams to waste and suggesting sizes.",
    features: [
      "Unified cost telemetry dashboard matching tags",
      "Automated scaling schedulers shutting down test nodes",
      "Cloud budget threshold alert webhooks"
    ],
    benefits: [
      "35% average saving in monthly cloud bills",
      "Clear accountability tracking spend to specific projects",
      "Real-time identification of cost anomalies and spikes"
    ],
    techStack: [
      { name: "Infracost", desc: "Cloud resource cost estimation tool." },
      { name: "Grafana / Prometheus", desc: "Telemetry monitoring and alert charts." },
      { name: "AWS Cost Explorer API", desc: "Cost ledger querying endpoint." }
    ],
    caseStudy: {
      title: "Cloud cost optimization for fintech customer.",
      desc: "Connected our cost management suite to 12 active cloud accounts, shutting down orphaned databases to save $450k annually.",
      metrics: [
        { value: "12", label: "Optimized cloud accounts" },
        { value: "$450k", label: "Annual cloud spend saved" },
        { value: "35%", label: "Average monthly bill reduction" }
      ]
    },
    faqs: [
      { q: "Does this platform modify resources automatically?", a: "By default it suggests resizing. If authorized, it runs automated scripts to scale down nodes." },
      { q: "Is billing history saved?", a: "Yes, we query and store up to 3 years of billing records in an optimized analytics warehouse." }
    ]
  },
  "security-platform": {
    slug: "security-platform",
    title: "Security Platform",
    heroSubtitle: "Automate policy posture audits and scan container images for software vulnerabilities.",
    challenge: "Security reviews are manual bottleneck operations, delaying hotfixes and compliance validation.",
    solution: "We build a continuous security scanner dashboard checking code repositories and running Kubernetes audits.",
    features: [
      "Git-triggered SAST and dependency vulnerability scans",
      "Continuous Kubernetes configuration posture audits",
      "Automated compliance report summaries"
    ],
    benefits: [
      "Vulnerabilities patched before code is merged to main",
      "Continuous SOC-2 compliance checkouts with zero manual work",
      "Instant security posture alerts sent to developer feeds"
    ],
    techStack: [
      { name: "Trivy", desc: "Container image vulnerability scanner." },
      { name: "Snyk", desc: "Developer security platform auditing code." },
      { name: "Prisma Cloud", desc: "Cloud security posture management tool." }
    ],
    caseStudy: {
      title: "DevSecOps pipeline integration for medical provider.",
      desc: "Deployed our security auditing suite, running compliance checks across 50 software projects and securing patient records.",
      metrics: [
        { value: "50", label: "Scanned repositories" },
        { value: "0", label: "Critical vulns in production" },
        { value: "100%", label: "HIPAA audit success" }
      ]
    },
    faqs: [
      { q: "Does this platform support air-gapped environments?", a: "Yes, we build local scanner nodes that run inside private clusters without internet connections." },
      { q: "How are alerts prioritized?", a: "Alerts are classified based on CVSS scores and actual deployment exposure levels." }
    ]
  },
  "data-platform": {
    slug: "data-platform",
    title: "Data Platform",
    heroSubtitle: "Build modern lakehouse database structures and optimize real-time streaming queries.",
    challenge: "Dispersed databases lead to siloed analytics, slow reports, and complex pipeline script writing.",
    solution: "We deploy an open-source lakehouse platform consolidating database syncs using Apache Flink and Delta Lake.",
    features: [
      "Apache Flink stream processing logic blocks",
      "Delta Lake table structures with ACID transaction checks",
      "Optimized query views for analytics platforms"
    ],
    benefits: [
      "Unified source of truth for all business metrics",
      "Sub-second latency on analytics dashboards",
      "Reduced storage bills compared to traditional data warehouses"
    ],
    techStack: [
      { name: "Apache Flink", desc: "High-performance streaming engine." },
      { name: "Delta Lake / Parquet", desc: "Lakehouse storage format." },
      { name: "Trino", desc: "Fast ad-hoc SQL query compiler." }
    ],
    caseStudy: {
      title: "Real-time analytics engine for transport coordinator.",
      desc: "Configured our Delta Lake platform to stream GPS events from 8,000 buses, rendering route dashboards in real-time.",
      metrics: [
        { value: "8,000", label: "Monitored transit vehicles" },
        { value: "<2s", label: "Dashboard update latency" },
        { value: "70%", label: "Lower storage cost vs Redshift" }
      ]
    },
    faqs: [
      { q: "Is the data platform compatible with PowerBI?", a: "Yes, we provide standard JDBC/ODBC connectors linking Trino to PowerBI and Tableau." },
      { q: "How do you handle schema changes?", a: "We enable Delta Lake schema evolution, allowing column updates without rebuilding tables." }
    ]
  },
  "automation-platform": {
    slug: "automation-platform",
    title: "Automation Platform",
    heroSubtitle: "Run stateful multi-agent workflows and schedule complex batch file processing routines.",
    challenge: "Manual cron jobs fail silently, lack execution history logs, and struggle with multi-step APIs.",
    solution: "We build a centralized automation control panel running agent graphs and tracking task results.",
    features: [
      "Visual workflow builder linking API actions",
      "Stateful agent networks executing multi-step queries",
      "Automated alert routines logging run times"
    ],
    benefits: [
      "Eliminated manual spreadsheet transfers and data inputs",
      "Instant error alerts sent to SRE dashboards during failure",
      "Centralized log records tracking all background processes"
    ],
    techStack: [
      { name: "Temporal.io", desc: "Stateful orchestration framework." },
      { name: "Python / FastAPI", desc: "Custom business logic wrappers." },
      { name: "Airflow", desc: "Batch data scheduling engine." }
    ],
    caseStudy: {
      title: "Invoice processing automation for insurance client.",
      desc: "Deployed our Temporal workflow engine parsing, matching, and validating 40k monthly provider invoices automatically.",
      metrics: [
        { value: "40k", label: "Monthly processed invoices" },
        { value: "90%", label: "Manual workload reduction" },
        { value: "0", label: "Orphaned or lost processes" }
      ]
    },
    faqs: [
      { q: "Does the platform support long-running tasks?", a: "Yes, Temporal workflows are stateful and can pause for days waiting for approvals without wasting CPU." },
      { q: "How do you handle API timeouts?", a: "We build custom retry schedules with exponential backoff rules into all workflow steps." }
    ]
  },
  "customer-experience-platform": {
    slug: "customer-experience-platform",
    title: "Customer Experience Platform",
    heroSubtitle: "Embed conversational AI widgets and track client satisfaction telemetry.",
    challenge: "Support centers are overwhelmed by simple FAQs, leading to long queues and low customer ratings.",
    solution: "We deploy an AI-driven support widget connected to private knowledge bases, answering common questions instantly.",
    features: [
      "Conversational AI support widget with markdown output",
      "Customer telemetry logging tracking query usefulness",
      "Escalation routing forwarding complex tickets to live agents"
    ],
    benefits: [
      "70% of standard customer FAQs answered without agent help",
      "Real-time feedback tracking support performance",
      "Reduced support backlog and faster resolution for complex tickets"
    ],
    techStack: [
      { name: "Next.js / React", desc: "Embedded chatbot widget frontend." },
      { name: "LangChain", desc: "RAG query orchestration framework." },
      { name: "Qdrant", desc: "Knowledge base document embedding index." }
    ],
    caseStudy: {
      title: "AI chatbot deployment for travel booking provider.",
      desc: "Configured our customer experience widget to handle flight changes and answer refund policies, solving 30,000 queries monthly.",
      metrics: [
        { value: "30,000", label: "Monthly resolved chats" },
        { value: "72%", label: "Self-service resolution rate" },
        { value: "+15", label: "CSAT score improvement" }
      ]
    },
    faqs: [
      { q: "How do you update the chatbot's knowledge base?", a: "We script auto-sync tasks scanning corporate wikis or Google Drive directories every hour." },
      { q: "Does it support multiple languages?", a: "Yes, the LLM backend handles translations for over 40 languages automatically." }
    ]
  }
};
