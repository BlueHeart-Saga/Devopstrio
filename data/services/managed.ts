import { ServiceCategory, CapabilityDetail } from "./types";

export const managedService: ServiceCategory = {
  slug: "managed-services",
  title: "MSP UK",
  badge: "Managed Service Provider",
  subtitle: "Discover MSP UK services designed for secure and efficient business operations. Get managed service provider support and tailored solutions for your organisation.",
  overviewHeading: "Round-the-clock peace of mind with our managed service provider UK team",
  overviewDesc1: "As a leading MSP in the UK, we monitor your systems, manage security patches, fine-tune databases, and check backups day and night. Our response times are backed by guaranteed SLAs. Explore our dedicated support page and read our company overview.",
  overviewDesc2: "",
  stats: [
    { value: "99.99%", label: "Platform Uptime SLA" },
    { value: "<15m", label: "Incident Triage Time" },
    { value: "24/7", label: "Global Timezone Support" },
    { value: "100%", label: "Backup Success Rate" }
  ],
  capabilities: [
    {
      slug: "infrastructure-management",
      title: "Infrastructure Management Services UK",
      description: "Comprehensive IT infrastructure management, server provisioning, network monitoring, and system optimization across UK enterprise environments.",
      items: [
        "Automated deployment templates for scalable infrastructure management",
        "Continuous validation, pipeline scanning, and compliance checks",
        "Native compatibility with Prometheus, Datadog, and PagerDuty setups"
      ],
      href: "/services/managed-services/infrastructure-management"
    },
    {
      slug: "managed-cloud",
      title: "Managed Cloud Services UK",
      description: "End-to-end cloud workload operations, auto-scaling configuration, cost governance, and security posture management on AWS, Azure, and GCP.",
      items: [
        "Continuous cloud validation, scanning, and compliance verification",
        "Cloud security monitoring, configuration drift, and performance tuning",
        "Server resource right-sizing, workload optimization, and cost allocation"
      ],
      href: "/services/managed-services/managed-cloud"
    },
    {
      slug: "managed-devops",
      title: "Managed DevOps & Kubernetes",
      description: "Cluster lifecycle management, automated node upgrades, CI/CD runner tuning, and production ingress control.",
      items: [
        "Automated Kubernetes node upgrades",
        "EKS/GKE/AKS cluster health monitoring",
        "CI/CD runner performance tuning"
      ],
      href: "/services/managed-services/managed-devops"
    },
    {
      slug: "managed-security",
      title: "24/7 Managed Security Operations (SOC)",
      description: "Continuous threat hunting, real-time alert triage, vulnerability isolation, and rapid incident remediation.",
      items: [
        "SIEM & SOC alert management",
        "Automated threat containment",
        "Zero-day vulnerability isolation"
      ],
      href: "/services/managed-services/managed-security"
    },
    {
      slug: "application-support",
      title: "Application Support & Maintenance (SLA)",
      description: "Guaranteed SLA response times, proactive bug resolution, dependency patching, and continuous application performance tuning.",
      items: [
        "Guaranteed SLA defect resolution response",
        "Real-time Sentry exception tracking & triage",
        "Continuous application performance tuning"
      ],
      href: "/services/managed-services/application-support"
    },
    {
      slug: "database-administration",
      title: "Database Administration & Governance",
      description: "Ongoing database maintenance, automated snapshot verifications, index tuning, and HA failover drills.",
      items: [
        "PostgreSQL & MySQL performance tuning",
        "Automated point-in-time restore drills",
        "Replication latency & storage audits"
      ],
      href: "/services/managed-services/database-administration"
    },
    {
      slug: "monitoring-incident-management",
      title: "Monitoring & Incident Management",
      description: "Full-stack observability, PagerDuty on-call escalation, synthetic health checks, and 15-minute triage SLAs.",
      items: [
        "Prometheus & Datadog telemetry grids",
        "15-minute incident triage SLA guarantee",
        "Blameless post-mortem RCA reports"
      ],
      href: "/services/managed-services/monitoring-incident-management"
    },
    {
      slug: "twenty-four-seven-support",
      title: "24/7 Dedicated Support Services",
      description: "Round-the-clock follow-the-sun engineer coverage, dedicated communication channels, and immediate response for critical outages.",
      items: [
        "24/7 follow-the-sun engineer coverage",
        "Dedicated Slack/Teams war room channels",
        "15-minute critical outage response SLA"
      ],
      href: "/services/managed-services/twenty-four-seven-support"
    },
    {
      slug: "managed-service-provider-msp-uk",
      title: "Managed Service Provider (MSP UK)",
      description: "UK-based premier Managed Service Provider (MSP) delivering 24/7 enterprise IT operations, Cyber Essentials Plus compliance, and SLA-backed multi-cloud management.",
      items: [
        "Dedicated London & UK SRE technical account teams",
        "UK GDPR, Cyber Essentials Plus & ISO 27001 compliance",
        "24/7 proactive multi-cloud infrastructure & incident SLAs"
      ],
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
      q: "What do Devopstrio's MSP services include?",
      a: "Our MSP support covers round-the-clock incident response, ongoing system monitoring, cloud cost management, operating system patching, database tuning, and reliable backups."
    },
    {
      q: "What response time SLAs can we expect from your MSP provider?",
      a: "As a dependable managed service provider, we respond fastest to critical P1 outages, follow closely behind for P2 system issues, and address non-critical requests within a set turnaround — all backed by clear, guaranteed SLAs."
    },
    {
      q: "How does your MSP monitor our infrastructure?",
      a: "Our MSP solutions include monitoring agents that keep an eye on CPU, memory, disk, and network performance, plus application health, with every metric feeding straight into our centralised alerting system."
    },
    {
      q: "Do we keep control of our cloud account credentials?",
      a: "Yes. As your MSP provider, we never take ownership of your infrastructure — everything stays in your own cloud accounts. Our engineers access it through secure, cross-account IAM roles, which you're free to revoke whenever you choose."
    },
    {
      q: "How does your MSP handle backups and restore testing?",
      a: "Our MSP services include daily snapshots, backups replicated to isolated accounts, and automated recovery tests that confirm your backups actually work when you need them."
    },
    {
      q: "How does your MSP company handle patching and maintenance?",
      a: "As an experienced managed service provider, we roll out security patches during scheduled maintenance windows, using blue-green deployments to keep service interruptions to a minimum."
    },
    {
      q: "How does your MSP support database administration and tuning?",
      a: "Our MSP support team handles index rebuilding, configures autovacuum thresholds, adjusts buffer sizes, and keeps an eye on replication lag, so your databases stay fast and responsive."
    },
    {
      q: "Do you help with security incidents and containment?",
      a: "Yes. As your MSP company, our on-call engineers follow proven containment playbooks — isolating compromised systems, rotating credentials, and supporting forensic investigation until the threat is fully resolved."
    },
    {
      q: "What kind of reporting does your MSP provide?",
      a: "As part of our MSP services, we send monthly reports covering system uptime, incident history, resource usage, and opportunities to cut costs further."
    },
    {
      q: "How does your MSP manage escalations to our internal team?",
      a: "Our managed staffing services include clear escalation paths, reaching your designated leads by PagerDuty, Slack, or phone — but only when an incident genuinely needs internal input."
    }
  ],
  ctaTitle: "Secure your platform",
  ctaHighlight: "Uptime contracts",
  ctaDesc: "Contact our SRE leads to outline your uptime requirements and review your platform monitoring configs.",
  ctaBtnText: "Request Support Consult"
};

export const managedCapabilities: Record<string, CapabilityDetail> = {
  "infrastructure-management": {
    slug: "infrastructure-management",
    title: "Infrastructure Management Services UK",
    heroSubtitle: "Improve performance with infrastructure management services UK. Get secure infrastructure management, monitoring and reliable technical support.",
    challengeLabel: "Key Challenges",
    challenge: "Managing production-grade IT infrastructure presents recurring performance issues, complex system integration challenges, and deployment bottlenecks that slow down engineering teams and business operations.",
    bottleneckLabel: "IT Infrastructure Bottleneck",
    solutionLabel: "Our Infrastructure Management Approach",
    solution: "We deliver infrastructure management services UK with highly available, automated, and secure configurations. Our infrastructure management solutions UK integrate with build workflows, configure validation checks, and establish continuous monitoring dashboards.",
    deliverablesLabel: "Infrastructure Management Service Deliverables",
    features: [
      "Automated deployment templates for scalable infrastructure management solutions",
      "Continuous validation, pipeline scanning, and compliance verification checks",
      "Native compatibility with Prometheus / Datadog and PagerDuty / Opsgenie setups"
    ],
    outcomesLabel: "Infrastructure Management Service Benefits",
    benefits: [
      "Accelerated release frequency and up to 45% reduction in cycle times",
      "Complete infrastructure observability with real-time incident warning alerts",
      "Fully-audited infrastructure aligned with SOC-2 and regulatory frameworks"
    ],
    outcomeBottomLabel: "Infrastructure Management Business Outcome",
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
        q: "What Sets Devopstrio Apart in Infrastructure Management Services UK?",
        a: "We bring together smart automation, skilled engineers, and ready-made Infrastructure as Code (IaC) tools to deliver managed infrastructure services quickly, keeping your data secure and systems fully visible."
      },
      {
        q: "How Do We Track Success in Infrastructure Management Services UK?",
        a: "We monitor essential metrics like deployment speed, system latency, SLA adherence, compute performance, and security scan results, so every IT infrastructure management UK engagement delivers clear, measurable value."
      },
      {
        q: "What Security Measures Protect Our Infrastructure Management Services UK Setups?",
        a: "We apply strict least-privilege access, automate credential rotation, deploy network firewalls, and run ongoing vulnerability checks across every layer, keeping your managed infrastructure services UK setup secure and resilient."
      },
      {
        q: "Will Your Infrastructure Management Services UK Work With Our Legacy Systems?",
        a: "Absolutely. Our network infrastructure management UK team builds secure API connectors, data sync pipelines, and hybrid bridges, such as site-to-site VPNs or Direct Connect, linking new tools to your existing setup."
      },
      {
        q: "How Do We Manage Scaling and Traffic Surges for Your Systems?",
        a: "Our infrastructure management company UK sets up horizontal pod autoscaling (HPA) and load balancing rules that automatically adjust resources based on CPU, memory, or request demand."
      },
      {
        q: "How Long Does It Take to Launch Our Services?",
        a: "Most projects go live within 4 to 8 weeks, depending on system complexity, integration needs, and how mature your existing codebase is."
      },
      {
        q: "Will Your Team Train and Support Our Staff Afterward?",
        a: "Yes. We provide detailed architecture blueprints, configuration runbooks, and hands-on workshops with your engineers, ensuring a smooth handover and confident team."
      },
      {
        q: "How Do We Monitor Speed and Performance Across Your Systems?",
        a: "We set up OpenTelemetry instrumentation, sending traces, logs, and metrics to centralised dashboards like Grafana or Datadog for real-time visibility."
      },
      {
        q: "Which Compliance Standards Support Our Infrastructure Management Services UK?",
        a: "Our infrastructure setups align with SOC-2, ISO 27001, HIPAA, and GDPR standards, using strong encryption and audit logging protocols."
      },
      {
        q: "What Cost Savings Come With Infrastructure Management Services UK?",
        a: "Clients typically see a 30-50% drop in manual operations overhead, better resource efficiency, and reduced hosting costs through smart auto-scaling and caching, with our managed infrastructure services UK."
      }
    ]
  },
  "managed-cloud": {
    slug: "managed-cloud",
    title: "Managed Cloud Services UK",
    heroSubtitle: "Scale securely with managed cloud services UK. Get reliable cloud management, monitoring and expert support for your business.",
    challengeLabel: "Key Cloud Management Challenges",
    challenge: "Managing cloud environments in modern enterprises can create deployment bottlenecks, configuration drift, security risks, and scalability challenges that affect business agility and operational efficiency.",
    bottleneckLabel: "Cloud Management Bottleneck",
    solutionLabel: "Our Managed Cloud Approach",
    solution: "We deliver Managed Cloud Services UK with resilient, secure, and automated cloud environments. Our Managed Cloud Solutions UK integrate with build pipelines, enforce validation parameters, and establish real-time monitoring alerts.",
    deliverablesLabel: "Managed Cloud Service Deliverables",
    features: [
      "Continuous validation, pipeline scanning, and compliance verification checks",
      "Cloud security monitoring, configuration management, and performance optimisation",
      "Server resource sizing, workload optimisation, and cost allocation"
    ],
    outcomesLabel: "Managed Cloud Service Benefits",
    benefits: [
      "Protection from security vulnerabilities through continuous cloud monitoring",
      "Reliable recovery support during unexpected system outages",
      "Lower cloud infrastructure costs through resource optimisation"
    ],
    outcomeBottomLabel: "Managed Cloud Business Outcome",
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
        q: "What makes our managed cloud services different?",
        a: "We bring together hands-on automation, experienced engineers, and ready-made infrastructure code to deliver managed cloud hosting UK businesses can rely on, quickly and without compromising on data security or day-to-day visibility."
      },
      {
        q: "How do you track results from your managed cloud services UK?",
        a: "We keep an eye on the numbers that matter: how fast we get you live, how quickly systems respond, whether we're hitting agreed SLAs, how efficiently things run, and how well security checks hold up."
      },
      {
        q: "How do you keep your managed cloud services UK secure?",
        a: "We build in least-privilege access from the start, rotate credentials automatically, put firewalls around your network, and run ongoing vulnerability scans across every layer of the system."
      },
      {
        q: "Will your managed cloud services UK work with our older systems?",
        a: "Yes. We set up secure API connections, sync your data pipelines, and build hybrid network links (like site-to-site VPNs or Direct Connect) so your new setup works smoothly alongside your existing infrastructure."
      },
      {
        q: "How do your managed cloud services UK handle busy traffic?",
        a: "We set up automatic pod scaling and smart load balancing, so resources scale up or down on their own depending on CPU use, memory, or how many requests come in."
      },
      {
        q: "How long does a managed cloud services UK rollout take?",
        a: "Most rollouts take 4 to 8 weeks, depending on how complex your systems are, what needs to connect, and how well your existing codebase is set up."
      },
      {
        q: "Do you train our team and hand everything over properly?",
        a: "Yes. Our managed cloud services UK team hands over full architecture blueprints, setup guides, and runs hands-on sessions with your engineers so the switch-over goes smoothly."
      },
      {
        q: "How do you keep tabs on your managed cloud services UK?",
        a: "We set up OpenTelemetry tracking and send traces, logs, and metrics to central dashboards in Grafana or Datadog, so you can see exactly what's happening in real time."
      },
      {
        q: "Which Compliance Standards Do Our UK Managed Cloud Services Support?",
        a: "Our managed cloud hosting aligns with SOC-2, ISO 27001, HIPAA, and GDPR, backed by encryption and audit logging."
      },
      {
        q: "How Much Can Managed Cloud Services UK Save Your Business?",
        a: "Businesses using our managed cloud hosting UK typically cut operational overhead by 30-50%, gain better resource efficiency, and reduce hosting costs through smart auto-scaling and caching."
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

