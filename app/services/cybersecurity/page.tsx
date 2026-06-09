import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata = {
  title: "Cybersecurity Services | Devopstrio",
  description: "Secure your enterprise with penetration testing, vulnerability management, 24/7 SOC monitoring, IAM controls, cloud security policies, and zero-trust architecture.",
};

export default function CybersecurityPage() {
  return (
    <ServicePageLayout
      title="Cybersecurity"
      badge="Security Hub"
      subtitle="Ethical hacking penetration tests, automated compliance posture audits, zero-trust network configurations, and 24/7 incident response monitoring."
      stats={[
        { value: "0", label: "Security Breaches" },
        { value: "<5 min", label: "MTTR Response" },
        { value: "100%", label: "SOC2 Compliance" },
        { value: "50+", label: "Hardened Firewalls" }
      ]}
      capabilities={[
        {
          id: "security-assessment",
          title: "Security Assessment",
          description: "Identifying, evaluating, and reporting security vulnerabilities across your IT landscape.",
          items: [
            "Threat modeling using STRIDE and PASTA methodologies",
            "Network configuration audits and firewall policy reviews",
            "Social engineering simulations and phishing defense assessments"
          ]
        },
        {
          id: "vulnerability-management",
          title: "Vulnerability Management",
          description: "Continuous discovery, prioritization, and patching of security vulnerabilities.",
          items: [
            "Automated asset discovery and inventory mapping",
            "Vulnerability scanning with Tenable Nessus and Qualys",
            "Risk-based patching schedules aligned with threat intelligence"
          ]
        },
        {
          id: "penetration-testing",
          title: "Penetration Testing",
          description: "Ethical hacking audits to test network, web application, and API defenses.",
          items: [
            "Black-box and white-box network penetration testing",
            "API endpoint testing for authorization bypass and injection issues",
            "Comprehensive exploit reporting with prioritized remediation paths"
          ]
        },
        {
          id: "soc",
          title: "Security Operations Center (SOC)",
          description: "24/7 continuous security monitoring, threat detection, and incident response.",
          items: [
            "SIEM platform engineering using Microsoft Sentinel and Splunk",
            "Real-time threat hunting using Endpoint Detection and Response (EDR) agents",
            "Playbook automation (SOAR) to isolate compromised hosts"
          ]
        },
        {
          id: "identity-access-management",
          title: "Identity & Access Management",
          description: "Ensuring right users have correct access to resources, enforcing least privilege.",
          items: [
            "Single Sign-On (SSO) integration with Okta, Azure AD, and Ping Identity",
            "Multi-Factor Authentication (MFA) and adaptive risk-based access policies",
            "Privileged Access Management (PAM) using CyberArk"
          ]
        },
        {
          id: "cloud-security",
          title: "Cloud Security",
          description: "Enforcing security guardrails across AWS, Azure, and GCP public clouds.",
          items: [
            "Cloud configuration compliance audits using CSPM tools",
            "Micro-segmentation and virtual network security configuration",
            "IAM permission trimming to establish least-privilege access"
          ]
        },
        {
          id: "compliance-governance",
          title: "Compliance & Governance",
          description: "Aligning security operations with regulatory frameworks and security standards.",
          items: [
            "Audit readiness mapping for SOC2 Type II, ISO 27001, and HIPAA",
            "Policy document design and security awareness programs",
            "Third-party vendor risk assessment programs"
          ]
        },
        {
          id: "zero-trust-architecture",
          title: "Zero Trust Architecture",
          description: "Redefining network perimeter security by authenticating every device and user.",
          items: [
            "Software-Defined Perimeter (SDP) configurations",
            "Continuous endpoint compliance checking before access grant",
            "Secure Access Service Edge (SASE) and micro-segmentation"
          ]
        }
      ]}
      ctaText="Request a Security Audit"
    />
  );
}
