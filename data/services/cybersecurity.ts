import { ServiceCategory, CapabilityDetail } from "./types";

export const cybersecurityService: ServiceCategory = {
  slug: "cybersecurity",
  title: "Cybersecurity",
  badge: "Zero Trust Security",
  subtitle: "Protect your digital assets with automated vulnerability scanning, secure IAM policies, SOC operations, and compliance frameworks.",
  overviewHeading: "Hardened digital assets with continuous audit readiness",
  overviewDesc1: "We build secure identity networks, threat detectors, and automated encryption logs. Our setups block external attacks, protecting database inputs from injection exploits.",
  overviewDesc2: "Our services audit cloud permissions, isolate network nodes, and secure application API keys under strict federal compliance parameters.",
  stats: [
    { value: "0", label: "Security Breaches Allowed" },
    { value: "24/7", label: "SOC Live Threat Scans" },
    { value: "100%", label: "Compliance Score Passed" },
    { value: "15m", label: "Average Incident Triage" }
  ],
  capabilities: [
    {
      slug: "security-assessment",
      title: "Security Assessment",
      description: "Evaluating digital infrastructure security postures, configuration drift, and asset access roles.",
      items: ["Comprehensive infrastructure penetration tests", "Identity access role audits", "Vulnerability mapping reviews"]
    },
    {
      slug: "compliance-governance",
      title: "Compliance & Governance",
      description: "Aligning web systems with international data privacy laws and compliance frameworks.",
      items: ["HIPAA data encryption checkers", "SOC-2 access verification logs", "PCI-DSS checkout flow audits"]
    }
  ],
  outcomes: [
    "Zero database record leaks during external penetration tests",
    "Continuous automated vulnerability updates on target repositories",
    "Instant warning notifications for API access key anomalies"
  ],
  industries: [
    "Finance: Transaction ledger tokenization and payment security",
    "Healthcare: Patient clinical record HIPAA subnets",
    "SaaS: Cloud identity federation and MFA protection"
  ],
  techStack: [
    { name: "Wiz / Prisma Cloud", desc: "Cloud security posture managers." },
    { name: "HashiCorp Vault", desc: "Secure API key and credential manager." },
    { name: "Okta / AWS IAM", desc: "Enterprise identity and access management." }
  ],
  deliveryFramework: [
    "Phase 1: Security Scan & Permission Audit",
    "Phase 2: Network Isolation & IAM Configuration",
    "Phase 3: SOC Monitoring & Incident Response Drills"
  ],
  caseStudies: [
    {
      title: "Hardening cloud network architecture for national database host.",
      desc: "We audited employee access roles, setup isolated database subnets, and deployed Wiz security alerts. The system now prevents unauthorized database queries, meeting NIST guidelines.",
      highlights: [
        "Eliminated wildcard access policies",
        "Setup automated key rotation schedules",
        "Passed third-party security audits"
      ]
    }
  ],
  faqs: [
    {
      q: "How do you protect database credentials?",
      a: "We store all secrets inside encrypted credential vaults, retrieving them dynamically at runtime and rotating them weekly."
    },
    {
      q: "What is your incident response time?",
      a: "Our security operations center (SOC) triage alerts within 15 minutes of trigger notifications."
    }
  ],
  ctaTitle: "Harden your digital",
  ctaHighlight: "Security perimeters",
  ctaDesc: "Request an assessment with our security leads to check access permissions and identify vulnerability gaps.",
  ctaBtnText: "Request Security Scan"
};

export const cybersecurityCapabilities: Record<string, CapabilityDetail> = {
  "security-assessment": {
    slug: "security-assessment",
    title: "Security Assessment",
    heroSubtitle: "Audit system configurations, map access hierarchies, and find critical security gaps.",
    challenge: "Enterprise cloud configurations suffer from legacy wildcard permissions, database storage drift, and unprotected API endpoints.",
    solution: "We run deep automated tests, scan repositories for credentials, map identity access pathways, and audit container setups.",
    features: [
      "Automated repository credential scanning pipelines",
      "Network route vulnerability tests",
      "Cloud platform identity access audits"
    ],
    benefits: [
      "Discovery of hidden security vulnerabilities",
      "Removal of excessive database permissions",
      "Detailed fix lists for engineering teams"
    ],
    deliveryApproach: [
      "Access Audit: Scanning identity roles and permissions.",
      "Vulnerability Sweep: Running port scans and check scripts.",
      "Fix Roadmap: Delivering vulnerability remediation plans."
    ],
    techStack: [
      { name: "Nmap / Burp Suite", desc: "Advanced security testing tools." },
      { name: "Wiz", desc: "Cloud resource security analyzer." },
      { name: "Trivy", desc: "Container image scanning tool." }
    ],
    caseStudy: {
      title: "Auditing database access permissions for cloud services provider.",
      desc: "We scanned 500+ identity roles, found 24 wildcard policies, and restricted database ingress to private VPC tunnels, passing SOC-2 validations.",
      metrics: [
        { value: "0", label: "Wildcard policies remaining" },
        { value: "100%", label: "Database ingress restricted" },
        { value: "SOC-2", label: "Compliance audit passed" }
      ]
    },
    faqs: [
      {
        q: "How often should assessments be performed?",
        a: "We recommend full assessments annually and continuous automated scans with every deployment."
      },
      {
        q: "Do you assess third-party SaaS integrations?",
        a: "Yes. We evaluate API token permissions and data storage practices of connected applications."
      }
    ]
  }
};
