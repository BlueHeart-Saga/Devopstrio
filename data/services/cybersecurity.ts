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
    },
    {
      slug: "cloud-security",
      title: "Cloud Security",
      description: "Enhancing cloud workload protection and compliance across multi-cloud environments.",
      items: ["Advanced security controls & Identity management", "Continuous compliance monitoring", "Automated threat detection & risk reduction"]
    },
    {
      slug: "security-operations-centre",
      title: "Security Operations Centre",
      description: "24/7 threat monitoring, incident detection, and rapid response in the UK.",
      items: ["Continuous threat intelligence & monitoring", "SIEM log aggregation & alert management", "Automated incident investigation & compliance reporting"]
    },
    {
      slug: "vulnerability-management",
      title: "Vulnerability Management",
      description: "Proactive identification, prioritization, and remediation of business security risks.",
      items: ["Continuous vulnerability scanning", "Risk-based threat prioritization", "Accelerated patch remediation & compliance support"]
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
  },
  "cloud-security": {
    slug: "cloud-security",
    title: "Cloud Security",
    metaTitle: "Cloud Security Services in UK | Enterprise Cloud Protection",
    metaDescription: "Secure workloads and strengthen compliance with our Cloud Security Services in UK, designed to protect modern cloud environments.",
    heroSubtitle: "Secure workloads and strengthen compliance with our Cloud Security Services in UK, designed to protect modern cloud environments.",
    challenge: "Our Cloud Security Services in UK addressed complex security challenges with proven cloud protection, compliance, and continuous risk management.",
    solution: "Our Cloud Security Services in UK strengthened cloud environments by implementing advanced security controls, identity and access management, and continuous compliance monitoring. We secured multi-cloud infrastructures, protected sensitive business data, and reduced security risks through industry-recognized cloud security practices.",
    features: [
      "Identity Protection: Secured user access and automated permission reviews",
      "Risk Management: Reduced cloud risks and configuration drift",
      "Security Monitoring: Enabled continuous visibility across cloud workloads",
      "Policy Enforcement: Applied consistent automated security policies",
      "Workload Protection: Protected sensitive business data and cloud workloads",
      "Resilient Infrastructure: Built for long-term operational reliability"
    ],
    benefits: [
      "Advanced Protection: Strengthened cloud security posture across production environments",
      "Continuous Compliance: Maintained regulatory standards and automated audit readiness",
      "Operational Resilience: Improved cloud reliability, workload protection, and threat visibility"
    ],
    deliveryApproach: [
      "Security Assessment & Identity Audit: Evaluating cloud access hierarchies, IAM permissions, and asset exposure.",
      "Security Automation & Policy Enforcement: Applying automated threat detection, encryption, and policy-based security.",
      "Continuous Compliance & Monitoring: Enabling 24/7 visibility, vulnerability scans, and audit reporting."
    ],
    techStack: [
      { name: "Wiz / Prisma Cloud", desc: "Cloud Security Posture Management (CSPM) and threat analysis." },
      { name: "HashiCorp Vault", desc: "Secrets management and automated credential rotation." },
      { name: "Okta / AWS IAM", desc: "Zero-Trust Identity and Access Management." }
    ],
    caseStudy: {
      title: "Delivering Secure Cloud Security Services in UK",
      desc: "Integrated automated threat detection, vulnerability assessments, and policy-based security enforcement to improve cloud visibility and operational resilience.",
      metrics: [
        { value: "100%", label: "Cloud Workload Protection Coverage" },
        { value: "0", label: "Security Breaches Allowed" },
        { value: "SOC-2 / HIPAA", label: "Regulatory Compliance Achieved" }
      ]
    },
    faqs: [
      {
        q: "What industries do your Cloud Security Services in UK support?",
        a: "Our Cloud Security Services in UK strengthen security across healthcare, finance, retail, manufacturing, and technology sectors by delivering secure, compliant cloud environments."
      },
      {
        q: "How do you protect sensitive data across multi-cloud setups?",
        a: "We implement advanced encryption at rest and in transit, zero-trust network segmentation, dynamic IAM access policies, and automated CSPM posture monitoring."
      }
    ]
  },
  "security-operations-centre": {
    slug: "security-operations-centre",
    title: "Security Operations Centre",
    metaTitle: "Security Operations Centre in UK | Cyber Threat Detection",
    metaDescription: "Strengthen your cybersecurity with our Security Operations Centre in UK. We deliver 24/7 monitoring, threat detection, incident response, SIEM management, and continuous security operations for modern businesses.",
    heroSubtitle: "Enhance cyber resilience with our Security Operations Centre in UK, delivering 24/7 threat monitoring, incident detection, and rapid response.",
    challenge: "Organizations face complex cyber risks requiring centralized security operations to improve threat visibility, streamline incident management, and maintain cyber resilience.",
    solution: "Centralized security operations were established to improve threat visibility, streamline incident management, and strengthen cyber resilience across enterprise environments. Through our Security Operations Centre in UK, organizations gained continuous monitoring, security intelligence, and a structured approach to managing evolving cyber risks.",
    features: [
      "Continuous Monitoring: Tracked security events across cloud, network, and endpoint environments",
      "Threat Intelligence: Identified emerging risks and zero-day vulnerabilities",
      "Alert Management: Prioritized critical alerts and eliminated false positives",
      "Incident Handling: Accelerated investigations and containment procedures",
      "Compliance Reporting: Simplified audit readiness and regulatory reporting",
      "Operational Visibility: Monitored critical business assets 24/7/365"
    ],
    benefits: [
      "Threat Visibility: Improved attack detection and real-time security telemetry",
      "Response Efficiency: Reduced incident response time and investigation complexity",
      "Compliance Readiness: Simplified audit reporting and security governance"
    ],
    deliveryApproach: [
      "SIEM Log Aggregation & Rule Tuning: Connecting cloud, network, and endpoint logs into central intelligence grids.",
      "24/7 Active Monitoring & Alert Prioritization: Triaging alerts continuously to isolate high-risk threats.",
      "Forensic Analysis & Incident Handling: Executing automated containment, forensic reports, and compliance auditing."
    ],
    techStack: [
      { name: "Splunk / Datadog SIEM", desc: "Centralized log aggregation and threat intelligence." },
      { name: "CrowdStrike Falcon", desc: "Endpoint detection and response (EDR/XDR)." },
      { name: "Microsoft Sentinel", desc: "Cloud-native SIEM and security orchestration." }
    ],
    caseStudy: {
      title: "Measurable Security Outcomes for UK Enterprise SOC",
      desc: "Our Security Operations Centre in UK combined continuous monitoring, threat intelligence, and automated incident handling to maintain compliance and protect critical operations.",
      metrics: [
        { value: "<15m", label: "Average Incident Triage Time" },
        { value: "24/7/365", label: "Continuous Threat Telemetry" },
        { value: "100%", label: "Audit Readiness & Compliance" }
      ]
    },
    faqs: [
      {
        q: "What services does your Security Operations Centre in UK cover?",
        a: "Our Security Operations Centre in UK delivers 24/7 threat monitoring, incident response, SIEM management, threat intelligence, vulnerability analysis, and continuous security operations."
      },
      {
        q: "How does the SOC help with regulatory compliance?",
        a: "We provide automated audit trails, continuous access logs, forensic investigation reports, and real-time compliance dashboards aligned with SOC-2, ISO 27001, and HIPAA."
      }
    ]
  },
  "vulnerability-management": {
    slug: "vulnerability-management",
    title: "Vulnerability Management",
    metaTitle: "Vulnerability Management Services in UK | Cybersecurity Experts",
    metaDescription: "Protect your business with Vulnerability Management Services in UK. Identify, prioritize, and remediate security risks while improving compliance and cyber resilience.",
    heroSubtitle: "Every business faces new security risks every day, and Vulnerability Management Services help identify and address those risks before they become costly incidents.",
    challenge: "Unpatched security vulnerabilities increase business risk, while limited visibility across IT assets, networks, and cloud environments creates compliance and regulatory challenges.",
    solution: "Our Vulnerability Management Services provide a proactive approach to securing your systems against evolving cyber threats. We combine expert analysis with continuous monitoring to uncover security gaps before attackers can take advantage of them.",
    features: [
      "Continuous Monitoring: Identify new vulnerabilities as they emerge across digital systems",
      "Risk Prioritization: Focus on threats with the highest potential business impact",
      "Faster Remediation: Resolve critical security issues and unpatched vulnerabilities quickly",
      "Compliance Support: Strengthen security requirements and pass regulatory audits",
      "Complete Visibility: Monitor networks, endpoints, databases, and cloud applications",
      "Proactive Protection: Reduce cyber risks before they escalate into security breaches"
    ],
    benefits: [
      "Reduced security risks through faster vulnerability identification and remediation",
      "Continuous visibility across networks, endpoints, and cloud environments",
      "Stronger compliance with industry standards and proactive risk management"
    ],
    deliveryApproach: [
      "Discovery & Asset Mapping: Scanning networks, servers, application repositories, and endpoints.",
      "Risk Scoring & Prioritization: Evaluating threat impact based on CVSS scores and business criticality.",
      "Guided Patching & Rescanning: Deploying remediation patches and executing verification scans."
    ],
    techStack: [
      { name: "Tenable / Nessus", desc: "Enterprise vulnerability scanner and asset discovery engine." },
      { name: "Qualys / Snyk", desc: "Application dependency and container vulnerability scanner." },
      { name: "Jira / ServiceNow", desc: "Automated ticket routing for security patch management." }
    ],
    caseStudy: {
      title: "Real Security Outcomes That Matter",
      desc: "Our Vulnerability Management Services helped businesses reduce cyber risks, improve security visibility, and strengthen compliance through continuous monitoring and expert remediation.",
      metrics: [
        { value: "95%", label: "Reduction in High-Risk Vulnerabilities" },
        { value: "24h", label: "Critical Patch SLA" },
        { value: "100%", label: "Complete Asset Visibility" }
      ]
    },
    faqs: [
      {
        q: "Why do businesses need Vulnerability Management Services in UK?",
        a: "Vulnerability Management Services uncover weak points before attackers can exploit them, providing continuous monitoring, regulatory compliance support, and long-term business resilience."
      },
      {
        q: "How does vulnerability prioritization work?",
        a: "We analyze threat intelligence, asset business criticality, and exploitation likelihood to ensure your team focuses on patching high-impact risks first."
      }
    ]
  }
};
