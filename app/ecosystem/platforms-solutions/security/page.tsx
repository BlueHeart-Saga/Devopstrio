import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function SecuritySolutionsSubPage() {
  return (
    <EcosystemPageLayout
      title="Security Solutions"
      category="Platforms & Solutions"
      categoryUrl="/ecosystem/platforms-solutions"
      badge="Solutions"
      subtitle="Hardened Security Operations Center (SOC) platforms, compliance monitoring dashboards, and vulnerability analysis playbooks."
      stats={[
        { value: "0", label: "Security Breaches" },
        { value: "ISO", label: "27001 Certified" },
        { value: "<5 min", label: "MTTR Response" },
        { value: "100%", label: "HIPAA/SOC2 Audit" }
      ]}
      details={[
        {
          title: "SOC Platform & Incident Response",
          description: "Setting up centralized log aggregation, mapping correlations between security alerts, and running automated response playbooks.",
          items: [
            "Centralized SIEM/SOAR platforms (Splunk, Microsoft Sentinel)",
            "Automated alert remediation scripts reacting to anomalous behavior",
            "Continuous endpoint threat detection and network activity audits"
          ]
        },
        {
          title: "Continuous Compliance Monitoring",
          description: "Auditing cloud services continuously against security standards like SOC2, ISO27001, HIPAA, and PCI-DSS.",
          items: [
            "Real-time compliance dashboards displaying security status",
            "Automatic notification alerts for non-compliant resources",
            "Vulnerability analysis engines mapping package and image dependencies"
          ]
        }
      ]}
      ctaText="Request a Security Audit Call"
    />
  );
}
