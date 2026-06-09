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
      title: "Managed Cloud Services",
      description: "Managing cloud environments, resource allocation, and operating system patching.",
      items: ["Continuous security patching schedules", "Automated system backup routines", "Cloud resource usage optimization"]
    },
    {
      slug: "infra-management",
      title: "Infrastructure Management",
      description: "Monitoring network firewalls, storage volumes, and server cluster operations.",
      items: ["Server cluster load monitoring", "Firewall security rule assessments", "DNS server routing updates"]
    }
  ],
  outcomes: [
    "Continuous platform uptime under strict SLAs",
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
  }
};
