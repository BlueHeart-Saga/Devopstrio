import { ServiceCategory, CapabilityDetail } from "./types";

export const managedService: ServiceCategory = {
  slug: "managed-services",
  title: "Managed Services",
  badge: "Operational Stability",
  subtitle: "Ensure platform uptime, continuous patching, database admin operations, and rapid incident response.",
  overviewHeading: "Guaranteed platform stability and 24/7 operational coverage",
  overviewDesc1: "We manage cloud infrastructures, database backups, and software systems. Our SRE teams monitor platform health, patch vulnerabilities, and resolve outages.",
  overviewDesc2: "We set up automated resource alerts, run daily restore tests, and enforce secure access protocols to keep your business operating.",
  stats: [
    { value: "99.99%", label: "Platform Uptime SLA" },
    { value: "<15m", label: "Incident Triage Time" },
    { value: "24/7", label: "Global Timezone Support" },
    { value: "100%", label: "Backup Success Rate" }
  ],
  capabilities: [
    {
      slug: "managed-cloud",
      title: "24/7 Managed Cloud Operations",
      description: "Proactive cloud operations, auto-scaling management, and automated OS patching under strict SLAs.",
      items: ["Continuous security patching schedules", "Automated system backup routines", "Cloud resource usage optimization"],
      href: "/services/managed-services/managed-cloud"
    },
    {
      slug: "infrastructure-management",
      title: "Hybrid & Multi-Cloud Infrastructure",
      description: "Monitoring network firewalls, storage volumes, and server cluster operations 24/7.",
      items: ["Server cluster load monitoring", "Firewall security rule assessments", "DNS server routing updates"],
      href: "/services/managed-services/infrastructure-management"
    },
    {
      slug: "managed-devops",
      title: "Managed DevOps & Kubernetes",
      description: "Cluster lifecycle management, automated node upgrades, CI/CD runner tuning, and production ingress control.",
      items: ["Automated Kubernetes node upgrades", "EKS/GKE/AKS cluster health monitoring", "CI/CD runner performance tuning"],
      href: "/services/managed-services/managed-devops"
    },
    {
      slug: "managed-security",
      title: "24/7 Managed Security Operations (SOC)",
      description: "Continuous threat hunting, real-time alert triage, vulnerability isolation, and rapid incident remediation.",
      items: ["SIEM & SOC alert management", "Automated threat containment", "Zero-day vulnerability isolation"],
      href: "/services/managed-services/managed-security"
    },
    {
      slug: "database-administration",
      title: "Database Administration & Governance",
      description: "Ongoing database maintenance, automated snapshot verifications, index tuning, and HA failover drills.",
      items: ["PostgreSQL & MySQL performance tuning", "Automated point-in-time restore drills", "Replication latency & storage audits"],
      href: "/services/managed-services/database-administration"
    },
    {
      slug: "monitoring-incident-management",
      title: "Monitoring & Incident Management",
      description: "Full-stack observability, PagerDuty on-call escalation, synthetic health checks, and 15-minute triage SLAs.",
      items: ["Prometheus & Datadog telemetry grids", "15-minute incident triage SLA guarantee", "Blameless post-mortem RCA reports"],
      href: "/services/managed-services/monitoring-incident-management"
    },
    {
      slug: "managed-service-provider-msp-uk",
      title: "Managed Service Provider (MSP UK)",
      description: "UK-based premier Managed Service Provider (MSP) delivering 24/7 enterprise IT operations, Cyber Essentials Plus compliance, and SLA-backed multi-cloud management.",
      items: ["Dedicated London & UK SRE technical account teams", "UK GDPR, Cyber Essentials Plus & ISO 27001 compliance", "24/7 proactive multi-cloud infrastructure & incident SLAs"],
      href: "/services/managed-services/managed-service-provider-msp-uk"
    }
  ],
  outcomes: [
    "Continuous platform uptime under strict 99.99% SLAs",
    "Rapid incident resolution with dedicated team loops",
    "Complete backup coverage with automated restore tests"
  ],
  industries: [
    "Healthcare: Patient portal hosting and HIPAA audit compliance",
    "Finance: Transaction database monitoring and security",
    "Logistics: Fleet coordinate server uptime"
  ],
  techStack: [
    { name: "Prometheus / Datadog", desc: "Telemetry monitoring and alert systems." },
    { name: "PagerDuty / Opsgenie", desc: "Incident routing and notification dispatcher." },
    { name: "Terraform / Ansible", desc: "Infrastructure updates and configurations." }
  ],
  deliveryFramework: [
    "Phase 1: Telemetry Setup & Alert Auditing",
    "Phase 2: Backup Configuration & Security Hardening",
    "Phase 3: Service Desk Activation & SLA Rotations"
  ],
  caseStudies: [
    {
      title: "24/7 infrastructure support for national health portal.",
      desc: "We deployed monitoring agents and incident dispatch routes for a health portal. The platform has sustained 99.99% uptime with triage response times under 15 minutes.",
      highlights: [
        "Setup automated restore check scripts",
        "Passed security audits with zero findings",
        "Triaged outage alerts in under 15 minutes"
      ]
    }
  ],
  faqs: [
    {
      q: "What is your backup retention policy?",
      a: "We configure hourly database snapshots and daily full backups, storing them across distinct physical regions for 7 years."
    },
    {
      q: "How do you handle critical platform alerts?",
      a: "Alerts are routed to on-call engineers using PagerDuty, escalating to senior SRE leads automatically if unresolved within 10 minutes."
    }
  ],
  ctaTitle: "Secure your platform",
  ctaHighlight: "Uptime contracts",
  ctaDesc: "Contact our SRE leads to outline your uptime requirements and review your platform monitoring configs.",
  ctaBtnText: "Request Support Consult"
};

export const managedCapabilities: Record<string, CapabilityDetail> = {
  "managed-cloud": {
    slug: "managed-cloud",
    title: "Managed Cloud Services",
    heroSubtitle: "Manage cloud environments, patch operating systems, and audit resource allocations 24/7.",
    challenge: "Cloud environments suffer from unpatched operating system vulnerabilities, database snapshot gaps, and rising resource bills.",
    solution: "We configure automated patch pipelines, run daily backup restore checks, and tune cloud server sizes.",
    features: [
      "Automated system patch pipelines and validation tests",
      "Encrypted cloud backups with daily restore validations",
      "Server resource size tuning and cost allocations"
    ],
    benefits: [
      "Protection from unpatched security vulnerabilities",
      "Guaranteed restore success during system outages",
      "Lower cloud infrastructure bills through size adjustments"
    ],
    deliveryApproach: [
      "Access Setup: Granting secure console permissions.",
      "Backup Audit: Setting up snapshots and retention times.",
      "Patch Run: Deploying automated software updates."
    ],
    techStack: [
      { name: "Ansible", desc: "Declarative system patch engine." },
      { name: "AWS Backup", desc: "Centralized cloud backup controller." },
      { name: "AWS Systems Manager", desc: "OS patch manager tool." }
    ],
    caseStudy: {
      title: "Managing cloud platform updates for SaaS database host.",
      desc: "We automated security patching across 150 Linux servers, achieving 100% security coverage with zero service downtime.",
      metrics: [
        { value: "150", label: "Linux servers patched automatically" },
        { value: "100%", label: "Security compliance score" },
        { value: "0", label: "Service interruptions during patching" }
      ]
    },
    faqs: [
      {
        q: "Do you patch database engines?",
        a: "Yes. We execute database minor version updates during scheduled off-peak maintenance windows."
      },
      {
        q: "How do you secure server access permissions?",
        a: "We block SSH ports, using AWS Systems Manager Session Manager for console access with multi-factor login checks."
      }
    ]
  },
  "infrastructure-management": {
    slug: "infrastructure-management",
    title: "Infrastructure Management",
    heroSubtitle: "24/7 hybrid and multi-cloud infrastructure maintenance, hypervisor tuning, and network routing.",
    challenge: "Hybrid enterprise infrastructure suffers from hardware degradation, silent network partition failures, and unmonitored storage saturation.",
    solution: "We provide end-to-end infrastructure oversight covering bare-metal, virtualized, and multi-cloud server clusters with 24/7 telemetry.",
    features: [
      "Continuous server cluster health and hypervisor metrics",
      "Automated firewall rule audits and routing optimization",
      "Storage volume auto-expansion and IOPS load balancing"
    ],
    benefits: [
      "Zero unmonitored infrastructure downtime incidents",
      "Predictable hardware lifecycle and capacity planning",
      "Unified operational visibility across on-premise and cloud"
    ],
    deliveryApproach: [
      "Topology Discovery: Mapping all physical and virtual nodes.",
      "Agent Rollout: Deploying telemetry collectors across clusters.",
      "Runbook Automation: Standardizing self-healing recovery actions."
    ],
    techStack: [
      { name: "Terraform", desc: "Declarative infrastructure provisioning." },
      { name: "Datadog / Prometheus", desc: "Full-stack cluster observability." },
      { name: "Cisco / Fortinet", desc: "Network security and routing gateways." }
    ],
    caseStudy: {
      title: "Hybrid cloud infrastructure stability for fintech processor.",
      desc: "Unified 300+ physical servers and multi-cloud VPCs under a single automated monitoring umbrella with sub-minute failover capabilities.",
      metrics: [
        { value: "99.995%", label: "Infrastructure availability achieved" },
        { value: "< 2 min", label: "Average automated failover duration" },
        { value: "300+", label: "Hybrid nodes managed 24/7" }
      ]
    },
    faqs: [
      {
        q: "Do you manage on-premise data centers alongside public cloud?",
        a: "Yes. We manage hybrid topologies connecting private VMware/KVM hypervisors to AWS, Azure, and Google Cloud with dedicated VPN and DirectConnect routing."
      },
      {
        q: "What SLAs are provided for infrastructure outages?",
        a: "We offer P1 critical response in under 15 minutes with 24/7 continuous engineer escalation until full recovery."
      }
    ]
  },
  "managed-devops": {
    slug: "managed-devops",
    title: "Managed DevOps & Kubernetes",
    heroSubtitle: "End-to-end pipeline maintenance, Kubernetes cluster lifecycle management, and CI/CD runner optimization.",
    challenge: "Development teams waste up to 35% of their sprint cycles debugging broken CI/CD runners, handling cluster upgrades, and troubleshooting ingress drifts.",
    solution: "We take full operational ownership of your DevOps toolchain, automating runner scaling, Kubernetes node pool updates, and deployment pipelines.",
    features: [
      "Zero-downtime Kubernetes control plane and worker node upgrades",
      "CI/CD pipeline cache tuning and ephemeral runner provisioning",
      "Helm chart governance and automated GitOps sync reconciliation"
    ],
    benefits: [
      "Engineers focus 100% on feature delivery without DevOps operational drag",
      "Release cycle velocity boosted by over 50% through caching",
      "Production-grade security scanning integrated natively into every build"
    ],
    deliveryApproach: [
      "Pipeline Audit: Profiling build bottlenecks and runner performance.",
      "Cluster Hardening: Implementing ArgoCD, cert-manager, and ingress controls.",
      "SRE Handover: Establishing 24/7 pipeline health telemetry."
    ],
    techStack: [
      { name: "Kubernetes (EKS/AKS/GKE)", desc: "Container orchestration platform." },
      { name: "ArgoCD / Flux", desc: "GitOps continuous delivery engines." },
      { name: "GitHub Actions / GitLab CI", desc: "Automated test and build pipelines." }
    ],
    caseStudy: {
      title: "Continuous DevOps operations for high-growth SaaS portal.",
      desc: "Managed Kubernetes cluster scaling and optimized CI/CD runners for a team of 80 developers, cutting build times from 28 minutes to 4 minutes.",
      metrics: [
        { value: "85%", label: "Reduction in pipeline execution duration" },
        { value: "0", label: "Failed Kubernetes control plane upgrades" },
        { value: "24/7", label: "Dedicated pipeline SRE coverage" }
      ]
    },
    faqs: [
      {
        q: "How do you handle Kubernetes version upgrades?",
        a: "We execute blue-green node pool rolling updates with automated pre-flight API deprecation checks, ensuring zero workload downtime."
      },
      {
        q: "Can you manage self-hosted runners on our own cloud infrastructure?",
        a: "Yes. We deploy autoscaling ephemeral runner fleets inside your private VPCs with strict IAM isolation and ephemeral disk cleanup."
      }
    ]
  },
  "managed-security": {
    slug: "managed-security",
    title: "Managed Security Services (SOC)",
    heroSubtitle: "24/7 threat detection, SIEM log correlation, vulnerability mitigation, and rapid incident response.",
    challenge: "Enterprise networks face thousands of daily threat events, leaving internal IT teams overwhelmed with false alerts while genuine vulnerabilities remain unpatched.",
    solution: "Our dedicated 24/7 SOC engineers monitor security events, correlate SIEM telemetry, block anomalous vectors, and remediate exploits in real time.",
    features: [
      "Continuous SIEM log analysis across endpoints, firewalls, and cloud APIs",
      "Automated WAF rule tuning and DDoS mitigation triggers",
      "Zero-day vulnerability isolation and priority patch deployment"
    ],
    benefits: [
      "Continuous compliance readiness for SOC-2, ISO 27001, and Cyber Essentials Plus",
      "Mean Time to Detect (MTTD) reduced from hours to under 3 minutes",
      "Complete threat containment before lateral movement occurs"
    ],
    deliveryApproach: [
      "Log Ingestion: Connecting SIEM agents to all cloud and network nodes.",
      "Threat Modeling: Establishing baseline behavioral detection rules.",
      "Active Defense: Launching 24/7 live SOC monitoring and incident playbooks."
    ],
    techStack: [
      { name: "Wiz / CrowdStrike", desc: "Cloud detection and endpoint protection." },
      { name: "Splunk / Microsoft Sentinel", desc: "Cloud-native SIEM log analytics." },
      { name: "Cloudflare / AWS WAF", desc: "Layer 7 web application firewalls." }
    ],
    caseStudy: {
      title: "24/7 Managed SOC operations for global payment gateway.",
      desc: "Delivered continuous threat monitoring across 2.5 million daily API calls with automated IP reputation filtering and zero security incidents.",
      metrics: [
        { value: "100%", label: "Audit compliance pass rate" },
        { value: "< 3 min", label: "Average threat detection and isolation speed" },
        { value: "0", label: "Uncontained intrusion breaches" }
      ]
    },
    faqs: [
      {
        q: "How fast do your SOC analysts respond to critical security alerts?",
        a: "Critical P1 security incidents are isolated and triaged within 5 minutes, followed by direct phone escalation to your designated security officer."
      },
      {
        q: "Do you assist with compliance reporting and audit submissions?",
        a: "Yes. We generate monthly executive security reports, audit evidence exports, and vulnerability remediation logs for your external auditors."
      }
    ]
  },
  "database-administration": {
    slug: "database-administration",
    title: "Database Administration",
    heroSubtitle: "Proactive database administration, automated backup verifications, query optimization, and high-availability clustering.",
    challenge: "Slow database queries, unverified backup snapshots, and replication lag frequently create application bottlenecks and risk irreversible data loss.",
    solution: "We manage PostgreSQL, MySQL, Redis, and MongoDB clusters with 24/7 query profiling, automated point-in-time restore drills, and active failover setups.",
    features: [
      "Automated continuous snapshot backups with verified restore drill scripts",
      "Query execution plan optimization and index fragmentation rebuilds",
      "Multi-region high availability replication and automated failover routing"
    ],
    benefits: [
      "Guaranteed zero data loss with point-in-time recovery (PITR) baselines",
      "Database query latency reduced by up to 70% through tuning",
      "Strict data encryption at rest and in transit matching GDPR & HIPAA"
    ],
    deliveryApproach: [
      "Health Assessment: Profiling database IOPS, slow queries, and index bloat.",
      "Backup Verification: Configuring encrypted multi-region snapshot routines.",
      "Active Optimization: Tuning connection pools and executing replication drills."
    ],
    techStack: [
      { name: "PostgreSQL / MySQL", desc: "Relational transactional database engines." },
      { name: "Redis / Memcached", desc: "In-memory caching and session clustering." },
      { name: "AWS Aurora / Azure SQL", desc: "Enterprise managed cloud database platforms." }
    ],
    caseStudy: {
      title: "Database performance optimization for e-commerce catalog.",
      desc: "Restructured index layouts and implemented automated failover for a 12TB PostgreSQL cluster, reducing peak query times from 4.2s to 180ms.",
      metrics: [
        { value: "95%", label: "Reduction in slow query incident alerts" },
        { value: "100%", label: "Automated daily restore test success" },
        { value: "12 TB", label: "Production database payload managed" }
      ]
    },
    faqs: [
      {
        q: "How often do you test backup restore capabilities?",
        a: "We execute automated restore validation tests weekly into isolated staging sandbox databases to ensure zero snapshot corruption."
      },
      {
        q: "Do you support database schema migrations during releases?",
        a: "Yes. Our team reviews schema migration scripts, executes non-locking index builds, and supervises production zero-downtime migrations."
      }
    ]
  },
  "monitoring-incident-management": {
    slug: "monitoring-incident-management",
    title: "Monitoring & Incident Management",
    heroSubtitle: "Full-stack observability, synthetic transaction testing, PagerDuty on-call escalation, and 15-minute triage SLAs.",
    challenge: "Fragmented monitoring tools lead to alert fatigue, missed outages, and delayed response times that degrade customer trust during critical incidents.",
    solution: "We build centralized observability dashboards, eliminate noisy alerts with smart thresholds, and provide 24/7 SRE response under strict SLAs.",
    features: [
      "Consolidated telemetry dashboards tracking CPU, memory, IOPS, and APM spans",
      "Automated synthetic user journey tests executing every 60 seconds",
      "15-minute incident triage SLA with detailed blameless post-mortems"
    ],
    benefits: [
      "Mean Time to Recovery (MTTR) slashed by over 65%",
      "Alert noise reduced by 80% through deduplication and correlation",
      "Transparent status page updates and comprehensive RCA documentation"
    ],
    deliveryApproach: [
      "Telemetry Integration: Instrumenting applications with OpenTelemetry and agents.",
      "Threshold Tuning: Establishing dynamic alert levels and escalation matrices.",
      "Runbook Deployment: Documenting step-by-step resolution scripts for on-call SREs."
    ],
    techStack: [
      { name: "Prometheus / Grafana", desc: "Open-source metric aggregation and visualization." },
      { name: "Datadog / New Relic", desc: "Enterprise APM and distributed tracing." },
      { name: "PagerDuty / Opsgenie", desc: "Automated on-call escalation routing." }
    ],
    caseStudy: {
      title: "Unified monitoring grid for logistics tracking system.",
      desc: "Implemented a 24/7 observability platform across 40 microservices, reducing critical downtime incidents by 78% within 90 days.",
      metrics: [
        { value: "< 10 min", label: "Average incident triage and stabilization" },
        { value: "78%", label: "Reduction in customer-reported outages" },
        { value: "24/7/365", label: "Continuous SRE operational coverage" }
      ]
    },
    faqs: [
      {
        q: "How do you avoid alert fatigue for our engineering team?",
        a: "We implement multi-window multi-burn-rate alerting based on Google SRE error budget principles, paging only on actionable user-impacting anomalies."
      },
      {
        q: "What happens after an incident is resolved?",
        a: "We publish a blameless root-cause analysis (RCA) document within 24 hours, detailing timeline events, technical root cause, and preventative action items."
      }
    ]
  },
  "managed-service-provider-msp-uk": {
    slug: "managed-service-provider-msp-uk",
    title: "Managed Service Provider (MSP UK)",
    heroSubtitle: "Premier UK Managed Service Provider delivering 24/7 SRE operations, Cyber Essentials Plus compliance, and SLA-backed multi-cloud management.",
    challenge: "UK enterprises and regulated organizations face strict compliance hurdles (GDPR, Cyber Essentials, ISO 27001), rising IT talent costs, and lack of dedicated UK-timezone technical leadership to manage mission-critical cloud platforms.",
    solution: "We act as your premier UK Managed Service Provider (MSP), delivering proactive 24/7 SRE operations, UK data sovereignty assurance, Cyber Essentials Plus alignment, and dedicated London/UK-based technical account management.",
    features: [
      "Dedicated UK-based SRE and Technical Account Management",
      "UK GDPR, Cyber Essentials Plus, and ISO 27001 compliance governance",
      "24/7/365 proactive multi-cloud infrastructure monitoring and incident management",
      "Strict 15-minute SLA response with transparent UK business hours escalation"
    ],
    benefits: [
      "Guaranteed UK data residency and regulatory compliance",
      "Over 45% reduction in operational IT overhead vs in-house teams",
      "99.99% platform uptime backed by enterprise financial SLAs"
    ],
    deliveryApproach: [
      "Compliance & Architecture Audit: Evaluating cloud infrastructure against UK Cyber Essentials and GDPR standards.",
      "SLA & Escalation Framework: Aligning UK business hours coverage and 24/7 emergency response runbooks.",
      "Continuous Managed Operations: Deploying dedicated SRE oversight, regular security reviews, and cost optimization."
    ],
    techStack: [
      { name: "AWS / Azure / GCP (UK Regions)", desc: "London (eu-west-2) & UK multi-cloud enterprise hosting." },
      { name: "Cyber Essentials Plus & ISO 27001", desc: "UK cybersecurity & governance standards." },
      { name: "Datadog / Prometheus / PagerDuty", desc: "Enterprise observability and 24/7 UK incident routing." }
    ],
    caseStudy: {
      title: "Full-stack Managed Service Provider engagement for UK Fintech firm.",
      desc: "Delivered 24/7 cloud management and Cyber Essentials Plus compliance for a London-based financial services platform, achieving 99.99% uptime and passing annual regulatory audits with zero findings.",
      metrics: [
        { value: "99.99%", label: "Platform uptime SLA maintained" },
        { value: "100%", label: "UK Cyber Essentials Plus compliance" },
        { value: "< 10m", label: "Average emergency incident response time" }
      ]
    },
    faqs: [
      {
        q: "Are your engineers and support teams based in the UK?",
        a: "Yes. We provide dedicated UK-based technical account managers and SREs aligned with UK business hours, backed by our 24/7 global follow-the-sun support."
      },
      {
        q: "Do you assist with UK compliance and data residency?",
        a: "Absolutely. We ensure all workload hosting, backups, and data processing remain strictly within UK cloud regions (e.g., AWS London eu-west-2 / Azure UK South) in full accordance with UK GDPR and Cyber Essentials guidelines."
      }
    ]
  },
  "managed-service-provider": {
    slug: "managed-service-provider",
    title: "Managed Service Provider (MSP UK)",
    heroSubtitle: "Premier UK Managed Service Provider delivering 24/7 SRE operations, Cyber Essentials Plus compliance, and SLA-backed multi-cloud management.",
    challenge: "UK enterprises and regulated organizations face strict compliance hurdles (GDPR, Cyber Essentials, ISO 27001), rising IT talent costs, and lack of dedicated UK-timezone technical leadership to manage mission-critical cloud platforms.",
    solution: "We act as your premier UK Managed Service Provider (MSP), delivering proactive 24/7 SRE operations, UK data sovereignty assurance, Cyber Essentials Plus alignment, and dedicated London/UK-based technical account management.",
    features: [
      "Dedicated UK-based SRE and Technical Account Management",
      "UK GDPR, Cyber Essentials Plus, and ISO 27001 compliance governance",
      "24/7/365 proactive multi-cloud infrastructure monitoring and incident management",
      "Strict 15-minute SLA response with transparent UK business hours escalation"
    ],
    benefits: [
      "Guaranteed UK data residency and regulatory compliance",
      "Over 45% reduction in operational IT overhead vs in-house teams",
      "99.99% platform uptime backed by enterprise financial SLAs"
    ],
    deliveryApproach: [
      "Compliance & Architecture Audit: Evaluating cloud infrastructure against UK Cyber Essentials and GDPR standards.",
      "SLA & Escalation Framework: Aligning UK business hours coverage and 24/7 emergency response runbooks.",
      "Continuous Managed Operations: Deploying dedicated SRE oversight, regular security reviews, and cost optimization."
    ],
    techStack: [
      { name: "AWS / Azure / GCP (UK Regions)", desc: "London (eu-west-2) & UK multi-cloud enterprise hosting." },
      { name: "Cyber Essentials Plus & ISO 27001", desc: "UK cybersecurity & governance standards." },
      { name: "Datadog / Prometheus / PagerDuty", desc: "Enterprise observability and 24/7 UK incident routing." }
    ],
    caseStudy: {
      title: "Full-stack Managed Service Provider engagement for UK Fintech firm.",
      desc: "Delivered 24/7 cloud management and Cyber Essentials Plus compliance for a London-based financial services platform, achieving 99.99% uptime and passing annual regulatory audits with zero findings.",
      metrics: [
        { value: "99.99%", label: "Platform uptime SLA maintained" },
        { value: "100%", label: "UK Cyber Essentials Plus compliance" },
        { value: "< 10m", label: "Average emergency incident response time" }
      ]
    },
    faqs: [
      {
        q: "Are your engineers and support teams based in the UK?",
        a: "Yes. We provide dedicated UK-based technical account managers and SREs aligned with UK business hours, backed by our 24/7 global follow-the-sun support."
      },
      {
        q: "Do you assist with UK compliance and data residency?",
        a: "Absolutely. We ensure all workload hosting, backups, and data processing remain strictly within UK cloud regions (e.g., AWS London eu-west-2 / Azure UK South) in full accordance with UK GDPR and Cyber Essentials guidelines."
      }
    ]
  },
  "managed-parts": {
    slug: "managed-parts",
    title: "Managed Service Provider UK",
    heroSubtitle: "UK-based dedicated SRE governance, Cyber Essentials Plus compliance, and SLA-backed multi-cloud management.",
    challenge: "UK enterprises and regulated organizations face strict compliance hurdles (GDPR, Cyber Essentials, ISO 27001), rising IT talent costs, and lack of dedicated UK-timezone technical leadership to manage mission-critical cloud platforms.",
    solution: "We act as your premier UK Managed Service Provider (MSP), delivering proactive 24/7 SRE operations, UK data sovereignty assurance, Cyber Essentials Plus alignment, and dedicated London/UK-based technical account management.",
    features: [
      "Dedicated UK-based SRE and Technical Account Management",
      "UK GDPR, Cyber Essentials Plus, and ISO 27001 compliance governance",
      "24/7/365 proactive multi-cloud infrastructure monitoring and incident management",
      "Strict 15-minute SLA response with transparent UK business hours escalation"
    ],
    benefits: [
      "Guaranteed UK data residency and regulatory compliance",
      "Over 45% reduction in operational IT overhead vs in-house teams",
      "99.99% platform uptime backed by enterprise financial SLAs"
    ],
    deliveryApproach: [
      "Compliance & Architecture Audit: Evaluating cloud infrastructure against UK Cyber Essentials and GDPR standards.",
      "SLA & Escalation Framework: Aligning UK business hours coverage and 24/7 emergency response runbooks.",
      "Continuous Managed Operations: Deploying dedicated SRE oversight, regular security reviews, and cost optimization."
    ],
    techStack: [
      { name: "AWS / Azure / GCP (UK Regions)", desc: "London (eu-west-2) & UK multi-cloud enterprise hosting." },
      { name: "Cyber Essentials Plus & ISO 27001", desc: "UK cybersecurity & governance standards." },
      { name: "Datadog / Prometheus / PagerDuty", desc: "Enterprise observability and 24/7 UK incident routing." }
    ],
    caseStudy: {
      title: "Full-stack Managed Service Provider engagement for UK Fintech firm.",
      desc: "Delivered 24/7 cloud management and Cyber Essentials Plus compliance for a London-based financial services platform, achieving 99.99% uptime and passing annual regulatory audits with zero findings.",
      metrics: [
        { value: "99.99%", label: "Platform uptime SLA maintained" },
        { value: "100%", label: "UK Cyber Essentials Plus compliance" },
        { value: "< 10m", label: "Average emergency incident response time" }
      ]
    },
    faqs: [
      {
        q: "Are your engineers and support teams based in the UK?",
        a: "Yes. We provide dedicated UK-based technical account managers and SREs aligned with UK business hours, backed by our 24/7 global follow-the-sun support."
      },
      {
        q: "Do you assist with UK compliance and data residency?",
        a: "Absolutely. We ensure all workload hosting, backups, and data processing remain strictly within UK cloud regions (e.g., AWS London eu-west-2 / Azure UK South) in full accordance with UK GDPR and Cyber Essentials guidelines."
      }
    ]
  },
  "twenty-four-seven-support": {
    slug: "twenty-four-seven-support",
    title: "24/7 Support Services",
    heroSubtitle: "Always-on developer support, Slack/Teams emergency escalations, and dedicated Site Reliability Engineers on rotation.",
    challenge: "Off-hours outages, slow response times from generic ticketing queues, and lack of senior engineer availability create massive business exposure during non-business hours.",
    solution: "We provide 24/7/365 follow-the-sun engineer coverage with direct Slack/Teams escalation channels, immediate live diagnostics, and guaranteed response SLAs.",
    features: [
      "Direct Slack/Microsoft Teams shared channels with on-duty SREs",
      "Follow-the-sun global operational coverage across UK, EU, and APAC",
      "Immediate live debugging sessions for urgent production blockers"
    ],
    benefits: [
      "Zero unassisted off-hours downtime incidents",
      "Direct communication with senior engineers—no tier-1 script readers",
      "Complete peace of mind for leadership during mission-critical launches"
    ],
    deliveryApproach: [
      "Channel Onboarding: Setting up dedicated shared Slack/Teams bridges.",
      "Escalation Matrix: Defining critical paging protocols and on-call rotations.",
      "Live Coverage: Launching continuous 24/7 SRE engineer rotations."
    ],
    techStack: [
      { name: "Slack / Teams", desc: "Direct enterprise communication channels." },
      { name: "PagerDuty", desc: "Live on-call escalation and paging." },
      { name: "Zendesk / Jira", desc: "SLA ticket tracking and audit histories." }
    ],
    caseStudy: {
      title: "24/7 SRE developer desk for high-volume retail platform.",
      desc: "Provided 24/7 live developer support across Black Friday peak shopping seasons, achieving 100% SLA compliance with average response time under 4 minutes.",
      metrics: [
        { value: "< 4 min", label: "Average live chat engineer response" },
        { value: "100%", label: "Peak season uptime sustained" },
        { value: "24/7/365", label: "Always-on senior SRE availability" }
      ]
    },
    faqs: [
      {
        q: "How does our team reach your on-call engineers?",
        a: "You can reach our engineers directly through your dedicated shared Slack/Teams channel, emergency phone hotline, or priority ticket portal."
      },
      {
        q: "Are your support engineers junior or senior?",
        a: "All support rotations are staffed by certified senior DevOps, Cloud, and SRE engineers capable of making architectural decisions and code-level fixes."
      }
    ]
  },
  "application-support": {
    slug: "application-support",
    title: "Application Support (SLA)",
    heroSubtitle: "Application bug triage, performance profiling, database connection tuning, and third-party API monitoring.",
    challenge: "Production applications suffer from intermittent memory leaks, slow database connection pools, unhandled runtime exceptions, and unmonitored third-party API degradations.",
    solution: "We take operational responsibility for application health, actively monitoring APM telemetry, triaging runtime errors in Sentry, and deploying hotfixes.",
    features: [
      "Continuous runtime exception tracking and stack-trace triage",
      "Application Performance Monitoring (APM) and latency profiling",
      "Database connection pool tuning and memory leak resolution"
    ],
    benefits: [
      "Application crash rates reduced by over 80%",
      "Faster bug triage and hotfix release cycles",
      "Continuous optimization of API latency and user response times"
    ],
    deliveryApproach: [
      "APM Integration: Instrumenting application code with Datadog/Sentry.",
      "Baseline Profiling: Analyzing slow transactions and memory profiles.",
      "SLA Support: Managing ongoing bug triage and performance hotfixes."
    ],
    techStack: [
      { name: "Sentry / Bugsnag", desc: "Real-time application error tracking." },
      { name: "Datadog APM", desc: "Distributed code tracing and latency profiling." },
      { name: "Node.js / Python / Java", desc: "Target application runtimes supported." }
    ],
    caseStudy: {
      title: "Application performance stabilization for healthcare portal.",
      desc: "Eliminated critical memory leak issues and stabilized database connection pools, reducing API response times by 62% across 800,000 monthly active users.",
      metrics: [
        { value: "62%", label: "Reduction in API endpoint latency" },
        { value: "99.99%", label: "Application runtime availability" },
        { value: "< 15m", label: "Critical exception triage SLA" }
      ]
    },
    faqs: [
      {
        q: "Do you fix bugs in our application source code?",
        a: "Yes. For supported stacks, our engineers investigate stack traces, reproduce issues, and submit pull requests with verified hotfixes directly to your repository."
      },
      {
        q: "What monitoring tools do you integrate with?",
        a: "We integrate with Sentry, Datadog, New Relic, Dynatrace, Prometheus, CloudWatch, and standard OpenTelemetry instrumentation."
      }
    ]
  }
};

