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
      title: "Security Assessment & Posture Audits",
      description: "Evaluating digital infrastructure security postures, configuration drift, and asset access roles with deep vulnerability assessments.",
      items: [
        "Comprehensive infrastructure penetration tests",
        "Cloud configuration drift & IAM audits",
        "Vulnerability mapping & posture scoring"
      ],
      href: "/services/cybersecurity/security-assessment"
    },
    {
      slug: "vulnerability-management",
      title: "Vulnerability Management",
      description: "Proactive identification, continuous scanning, prioritization, and automated patching of enterprise security risks.",
      items: [
        "Continuous network & container scanning",
        "Risk-based CVSS threat prioritization",
        "Accelerated patch remediation workflows"
      ],
      href: "/services/cybersecurity/vulnerability-management"
    },
    {
      slug: "penetration-testing",
      title: "Penetration Testing & Red Teaming",
      description: "Rigorous offensive security assessments simulating real-world cyber adversaries to uncover and patch critical exploits.",
      items: [
        "Network boundary & API penetration testing",
        "Red-team adversary simulation exercises",
        "Comprehensive exploit mitigation reports"
      ],
      href: "/services/cybersecurity/penetration-testing"
    },
    {
      slug: "security-operations-center",
      title: "Security Operations Centre (SOC UK)",
      description: "24/7 UK-based continuous threat monitoring, SIEM telemetry correlation, and rapid incident containment.",
      items: [
        "Continuous threat intelligence & 24/7 monitoring",
        "SIEM log aggregation & real-time telemetry",
        "Automated incident triage & rapid response"
      ],
      href: "/services/cybersecurity/security-operations-center"
    },
    {
      slug: "identity-access-management",
      title: "Identity & Access Management (IAM)",
      description: "Secure digital perimeters with enterprise single sign-on, least-privilege role management, and continuous credential protection.",
      items: [
        "Okta / Microsoft Entra ID Single Sign-On (SSO)",
        "Adaptive MFA & conditional access policies",
        "Automated Privileged Access Management (PAM)"
      ],
      href: "/services/cybersecurity/identity-access-management"
    },
    {
      slug: "cloud-security",
      title: "Cloud Security & Workload Protection",
      description: "Protect multi-cloud workloads, Kubernetes clusters, and serverless applications with continuous CSPM and runtime guardrails.",
      items: [
        "Advanced cloud controls & CSPM posture auditing",
        "Kubernetes runtime threat detection",
        "Automated zero-drift cloud security guardrails"
      ],
      href: "/services/cybersecurity/cloud-security"
    },
    {
      slug: "compliance-governance",
      title: "Compliance & Governance",
      description: "Align IT infrastructure and cloud workflows with international standards including ISO 27001, SOC 2, PCI-DSS, and GDPR.",
      items: [
        "ISO 27001, SOC 2, PCI-DSS & HIPAA frameworks",
        "Continuous audit evidence collection",
        "Automated data privacy & GDPR governance"
      ],
      href: "/services/cybersecurity/compliance-governance"
    },
    {
      slug: "zero-trust-architecture",
      title: "Zero Trust Architecture",
      description: "Implement strict micro-segmentation, identity-first perimeter defense, and continuous verification across all network traffic.",
      items: [
        "Micro-segmented network architectures",
        "Continuous endpoint trust verification",
        "SASE perimeter security & encrypted tunnels"
      ],
      href: "/services/cybersecurity/zero-trust-architecture"
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
    metaTitle: "Security Assessment Services UK | Devopstrio",
    metaDescription: "Security assessment services UK to identify vulnerabilities, review security controls, and address compliance risks across applications, networks, and cloud environments.",
    heroSubtitle: "Security assessment services help identify weaknesses in your systems, networks, and user access before they lead to security threats or data breaches. Our approach includes vulnerability checks, access reviews, and compliance support for standards such as SOC-2, ISO-27001, and HIPAA. Explore our managed security operations for 24/7 security coverage.",
    challenge: "Hidden vulnerabilities can reach production without proper security assessment or validation. Security assessments uncover GDPR and HIPAA compliance gaps before they create regulatory risks, and UK security assessment services identify excessive access privileges to reduce data exposure.",
    solution: "Security assessment services help identify weaknesses in your systems, networks, and user access before they lead to security threats or data breaches. Our approach includes vulnerability checks, access reviews, and compliance support for standards such as SOC-2, ISO-27001, and HIPAA.",
    features: [
      "Discovery of hidden security vulnerabilities",
      "Removal of excessive database permissions",
      "Detailed security assessment findings for engineering teams"
    ],
    benefits: [
      "Discovery of hidden security vulnerabilities",
      "Removal of excessive database permissions",
      "Detailed security assessment findings for engineering teams"
    ],
    deliveryApproach: [
      "Phase 1: Vulnerability Mapping & Network Route Testing.",
      "Phase 2: Identity, Access Hierarchy & Database Permission Audits.",
      "Phase 3: Detailed Security Assessment Findings & Remediation Plan."
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
        q: "What are security assessment services?",
        a: "Security assessment services identify vulnerabilities across systems, applications, networks, access controls, and data."
      },
      {
        q: "Why do UK businesses need security assessment services?",
        a: "They help UK businesses identify security gaps, reduce risks, and strengthen existing security controls."
      },
      {
        q: "What does a security assessment include?",
        a: "A security assessment can include vulnerability checks, access reviews, application testing, configuration checks, and compliance reviews."
      },
      {
        q: "How often should a security assessment be performed?",
        a: "Assessment frequency depends on your security risks, regulatory requirements, IT environment, and system changes."
      },
      {
        q: "Can security assessments identify hidden vulnerabilities?",
        a: "Yes, security assessments can uncover weaknesses across applications, infrastructure, networks, configurations, and access controls."
      },
      {
        q: "Can security assessment services support GDPR compliance?",
        a: "Yes, they can identify security and access-control gaps that may affect GDPR compliance and data protection."
      },
      {
        q: "What is the difference between security and vulnerability assessments?",
        a: "A vulnerability assessment focuses on weaknesses, while a security assessment reviews broader controls, risks, access, and compliance."
      },
      {
        q: "Can security assessments review user access?",
        a: "Yes, they can review permissions, privileged accounts, user roles, and access controls for unnecessary privileges."
      },
      {
        q: "Can security assessment services cover cloud environments?",
        a: "Yes, assessments can review cloud configurations, identities, access controls, workloads, networks, and security settings."
      },
      {
        q: "Why choose security assessment services UK from Devopstrio?",
        a: "Devopstrio helps UK businesses identify vulnerabilities, review security controls, and address risks across their IT environment."
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
    metaTitle: "Vulnerability Management Services UK | Risk & Threat Protection",
    metaDescription: "Vulnerability management services UK help identify, assess and remediate security weaknesses across networks, endpoints, applications and cloud environments.",
    heroSubtitle: "Vulnerability Management is the systematic identification, assessment, and remediation of weaknesses across digital assets, network boundaries, applications, and user identities. It helps organisations maintain a stronger security posture through regular vulnerability assessments, risk-based remediation, access controls, and alignment with security and compliance requirements.",
    challenge: "Undetected vulnerabilities reaching production without proper assessment or remediation, unresolved security weaknesses creating compliance risks across GDPR, HIPAA, or FSQS requirements, and unmanaged vulnerabilities and access controls increasing the risk of privilege escalation and internal data exposure.",
    solution: "Vulnerability management services UK help organisations identify, assess, prioritise, and remediate security vulnerabilities across their IT environments through automated scanning, risk assessment, and continuous monitoring.",
    features: [
      "01 Asset Discovery",
      "02 Vulnerability Scanning",
      "03 Risk Assessment",
      "04 Remediation",
      "05 Continuous Monitoring"
    ],
    benefits: [
      "Reduced Exposure: Faster identification and remediation of vulnerabilities across critical assets.",
      "Continuous Visibility: Ongoing visibility across networks, endpoints, applications, and cloud environments.",
      "Stronger Compliance: Audited security environments aligned with SOC 2 and relevant regulatory requirements."
    ],
    deliveryApproach: [
      "01 Asset Discovery: Scanning networks, endpoints, applications, and cloud assets.",
      "02 Vulnerability Scanning: Running automated vulnerability checks across all layers.",
      "03 Risk Assessment: Prioritising security weaknesses based on severity and exploitability.",
      "04 Remediation: Deploying targeted fixes and patches with verification checks.",
      "05 Continuous Monitoring: Maintaining real-time security posture and threat intelligence."
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
        q: "What are vulnerability management services UK?",
        a: "Vulnerability management services UK help organisations identify, assess, prioritise, and remediate security vulnerabilities across their IT environments."
      },
      {
        q: "What is vulnerability management?",
        a: "Vulnerability management is an ongoing process of discovering security weaknesses, assessing their risk, and taking action to reduce exposure."
      },
      {
        q: "Why is vulnerability management important?",
        a: "It helps organisations identify security weaknesses early and reduce the risk of breaches, data exposure, and operational disruption."
      },
      {
        q: "How are vulnerabilities identified?",
        a: "Vulnerabilities can be identified through automated scanning, security assessments, configuration reviews, and continuous monitoring."
      },
      {
        q: "What systems can vulnerability management cover?",
        a: "Vulnerability management can cover networks, endpoints, servers, applications, cloud environments, and other connected assets."
      },
      {
        q: "How are vulnerabilities prioritised?",
        a: "Vulnerabilities are prioritised based on factors such as severity, asset importance, exploitability, and potential business impact."
      },
      {
        q: "Can vulnerability management support compliance?",
        a: "Yes, vulnerability management can support compliance by providing security assessments, remediation records, monitoring, and audit evidence."
      },
      {
        q: "How often should vulnerability scans be performed?",
        a: "Scanning frequency depends on the environment, risk level, regulatory requirements, and how frequently systems or applications change."
      },
      {
        q: "What happens after a vulnerability is identified?",
        a: "The vulnerability is assessed, prioritised according to risk, assigned for remediation, and reviewed to confirm that the issue has been addressed."
      },
      {
        q: "Can vulnerability management help cloud environments?",
        a: "Yes, vulnerability management can identify and track security weaknesses across cloud infrastructure, workloads, applications, and configurations."
      }
    ]
  }
};
