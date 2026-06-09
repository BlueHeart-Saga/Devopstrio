import { EcosystemDomain, EcosystemSubpageDetail } from "./types";

export const deliveryDomain: EcosystemDomain = {
  slug: "global-delivery",
  title: "Global Delivery Network",
  badge: "Global Operations",
  subtitle: "Leveraging our distributed engineering teams across Europe, India, and the United Kingdom to provide continuous, high-performance support.",
  overviewHeading: "Follow-the-sun engineering delivery networks securing operations",
  overviewDesc1: "We operate SRE hubs and support desks across multiple timezones. Our global delivery network ensures your software pipelines run with zero interruptions.",
  overviewDesc2: "By coordinating handovers between local offices, we resolve issues in real-time, providing true 24/7 service coverage.",
  stats: [
    { value: "3+", label: "Regional Hubs" },
    { value: "24/7/365", label: "Continuous Support" },
    { value: "<15m", label: "Incident Response Time" },
    { value: "99.99%", label: "Uptime Maintenance SLA" }
  ],
  subpages: [
    { slug: "united-kingdom", title: "United Kingdom Hub", description: "Local advisory, architecture consulting, and federal compliance guides." },
    { slug: "india", title: "India Operations", description: "Scale SRE execution, database maintenance, and continuous automation." },
    { slug: "europe", title: "Europe Hub", description: "GDPR compliance, regional cloud hosting, and consulting." },
    { slug: "follow-the-sun-support", title: "Follow-the-Sun Support", description: "Seamless timezone handovers, continuous monitoring, and alerts." },
    { slug: "managed-services-center", title: "Managed Services Center", description: "Outsourced system patching, backup checks, and cost reviews." }
  ],
  benefits: [
    "Continuous timezone handovers ensuring SRE coverage",
    "Onshore consulting combined with offshore cost savings",
    "Compliance with local data regulations including GDPR and UK Act"
  ],
  faqs: [
    { q: "How do you coordinate handoffs between offices?", a: "We run shared Slack channels, document issues in Jira, and conduct video handover meetings at shift ends." },
    { q: "What is your average response SLA?", a: "We guarantee responses to critical issues within 15 minutes." }
  ],
  ctaTitle: "Establish your global",
  ctaHighlight: "Delivery schedule",
  ctaDesc: "Speak with our operations leads to design a custom 24/7 support SLA for your workloads.",
  ctaBtnText: "Consult Operations Leads"
};

export const deliverySubpages: Record<string, EcosystemSubpageDetail> = {
  "united-kingdom": {
    slug: "united-kingdom",
    title: "United Kingdom Hub",
    heroSubtitle: "Consult UK-based solutions architects and design architectures meeting local compliance rules.",
    challenge: "UK businesses face complex data storage rules, local security requirements, and need onshore advisors for architecture strategy.",
    solution: "We establish our London advisory hub, designing architectures that comply with UK cyber security frameworks and data laws.",
    features: [
      "Onshore architecture consulting and compliance audits",
      "UK federal cloud hosting configurations",
      "Local incident escalation contact desks"
    ],
    benefits: [
      "Direct face-to-face consulting sessions in London",
      "100% compliance with UK Cyber Essentials Plus rules",
      "Rapid resolution of strategic design blockers"
    ],
    techStack: [
      { name: "AWS UK Regions", desc: "Sovereign local cloud resource hosting." },
      { name: "Jira Service Management", desc: "UK-hosted ticketing and audit log." },
      { name: "Okta Identity", desc: "Secure local worker identity validation." }
    ],
    caseStudy: {
      title: "Compliance audit and cloud strategy for London retailer.",
      desc: "Designed an AWS migration path for a major UK retail portal, ensuring compliance with local laws and securing transactions.",
      metrics: [
        { value: "100%", label: "UK compliance audits passed" },
        { value: "<30m", label: "Consultant booking turnaround" },
        { value: "0", label: "Data sovereignty issues found" }
      ]
    },
    faqs: [
      { q: "Are your UK engineers security cleared?", a: "Yes, we have SC-cleared staff available for government and financial sector workloads." },
      { q: "Where is our customer data stored?", a: "We configure resource locations to store all transactional data inside London regions." }
    ]
  },
  india: {
    slug: "india",
    title: "India Operations",
    heroSubtitle: "Scale operations using our Bangalore and Chennai SRE hubs.",
    challenge: "Hiring offshore SRE staff leads to quality issues, slow communication, and brittle pipeline configurations.",
    solution: "We build dedicated offshore engineering centers staffed by certified professionals running automated scripts.",
    features: [
      "High-throughput code execution and system automation centers",
      "Continuous database health checks and index updates",
      "Automated pipeline tests and library dependency checks"
    ],
    benefits: [
      "Access to highly skilled certified engineers at scale",
      "Continuous work on code pipelines during western night times",
      "50% average operational savings compared to onshore teams"
    ],
    techStack: [
      { name: "Terraform Cloud", desc: "Automated multi-workspace infrastructure deployment." },
      { name: "Datadog / APM", desc: "Telemetry monitoring and anomaly checks." },
      { name: "Slack Integrations", desc: "Real-time communication and pipeline alerts." }
    ],
    caseStudy: {
      title: "SRE support center scaling for logistics group.",
      desc: "Deployed a dedicated SRE team of 15 certified developers, automating database indexing tasks and securing operations.",
      metrics: [
        { value: "15", label: "Certified SRE engineers deployed" },
        { value: "60%", label: "Automation coverage increase" },
        { value: "99.95%", label: "Uptime achieved for core systems" }
      ]
    },
    faqs: [
      { q: "Do your SRE teams operate on weekends?", a: "Yes, we run rotating schedules providing continuous coverage, 365 days a year." },
      { q: "How do you maintain code quality standards?", a: "All code undergoes peer reviews and automated checks before merging." }
    ]
  },
  europe: {
    slug: "europe",
    title: "Europe Hub",
    heroSubtitle: "Design GDPR-compliant architectures and coordinate regional cloud deployments.",
    challenge: "European Union companies must navigate GDPR data rules, require local language support, and localized database hosting.",
    solution: "We establish hosting configurations utilizing EU West regions and design data lifecycle policies.",
    features: [
      "GDPR data privacy auditing templates",
      "Multi-region EU database replication configurations",
      "Local language project management options"
    ],
    benefits: [
      "Zero compliance risks via strict data localization",
      "Optimized latency for European users via local CDNs",
      "Clear audits mapping data lifecycle paths"
    ],
    techStack: [
      { name: "Azure Germany / Ireland", desc: "GDPR-compliant cloud host sites." },
      { name: "HashiCorp Vault", desc: "Encrypted data key storage." },
      { name: "Cilium Network", desc: "Zero-trust network segmentation tool." }
    ],
    caseStudy: {
      title: "GDPR compliance overhaul for European travel agency.",
      desc: "Audited and refactored a customer database, implementing encryption and automated deletion tasks to pass EU data privacy audits.",
      metrics: [
        { value: "0", label: "GDPR audit violations logged" },
        { value: "100%", label: "Disk storage encrypted" },
        { value: "<200ms", label: "European user connection latency" }
      ]
    },
    faqs: [
      { q: "How do you enforce GDPR regulations?", a: "We isolate customer PII, automate data deletion requests, and restrict cloud admin logins to European staff." },
      { q: "Do you support European clouds like OVH?", a: "Yes, we build Terraform scripts to deploy resources on OVHcloud and Scaleway." }
    ]
  },
  "follow-the-sun-support": {
    slug: "follow-the-sun-support",
    title: "Follow-the-Sun Support",
    heroSubtitle: "Guarantee SRE coverage by passing active sessions between our global hubs.",
    challenge: "SRE teams working overnight shifts experience high burnout rates, leading to mistakes and slow incident response times.",
    solution: "We build timezone handover schedules, transferring active issue logs between UK, US, and India hubs at shift ends.",
    features: [
      "Continuous system monitoring and alert routing",
      "Structured handoff templates logging incident actions",
      "Centralized call rotations automatically page active leads"
    ],
    benefits: [
      "Engineers work daytime hours, reducing mistakes and burnout",
      "Immediate response to alerts regardless of timezone",
      "Smooth coordination on complex multi-hour incidents"
    ],
    techStack: [
      { name: "PagerDuty", desc: "Incident routing and phone paging tool." },
      { name: "Opsgenie", desc: "Alert scheduling and escalation utility." },
      { name: "Confluence", desc: "Handoff runbook and documentation database." }
    ],
    caseStudy: {
      title: "Follow-the-sun SRE operations for global payment network.",
      desc: "Deployed timezone handovers between London and Bangalore, reducing average incident resolution times by 50%.",
      metrics: [
        { value: "50%", label: "Reduction in incident resolution times" },
        { value: "<15m", label: "Critical incident response time" },
        { value: "0", label: "Missed alert handoffs" }
      ]
    },
    faqs: [
      { q: "How do you handle incomplete incident tickets during shifts?", a: "The outgoing lead updates the ticket with steps taken, then conducts a live call with the incoming team." },
      { q: "Is customer contact available 24/7?", a: "Yes, customers can submit tickets or call our SRE lines at any hour." }
    ]
  },
  "managed-services-center": {
    slug: "managed-services-center",
    title: "Managed Services Center",
    heroSubtitle: "Outsource system patching, automated database backups, and cost reviews to our operations center.",
    challenge: "Internal teams spend too much time on repetitive tasks, neglecting core product features.",
    solution: "We deploy automated patching agents, schedule backup verifications, and run monthly cloud bill audits.",
    features: [
      "Automated OS patching schedules for server nodes",
      "Daily backup restoration tests checking integrity",
      "Monthly cloud cost analysis reports identifying waste"
    ],
    benefits: [
      "Internal developers focus entirely on business features",
      "Guaranteed patch compliance protecting against CVE exploits",
      "Consistent billing reviews lowering cloud expenses"
    ],
    techStack: [
      { name: "Ansible", desc: "Server configuration and patch runner tool." },
      { name: "AWS Backup", desc: "Automated cloud snapshot schedule controller." },
      { name: "Infracost", desc: "Infrastructure cost estimation utility." }
    ],
    caseStudy: {
      title: "Managed services deployment for media publisher.",
      desc: "Assumed management of 200 server VMs, implementing automated patches and backups to reduce client infrastructure tickets by 75%.",
      metrics: [
        { value: "200", label: "Managed virtual machines" },
        { value: "75%", label: "Reduction in infrastructure tickets" },
        { value: "100%", label: "Compliance patch audits passed" }
      ]
    },
    faqs: [
      { q: "Do you manage databases on-premise?", a: "Yes, we support hybrid datacenter environments using Ansible and SSH tunnels." },
      { q: "What happens if a backup restoration test fails?", a: "An alert is triggered, and our SRE team manually recreates and validates the backup snapshot." }
    ]
  }
};
