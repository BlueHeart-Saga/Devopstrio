import { ServicePageLayout } from "@/components/ServicePageLayout";

export default function CybersecurityPage() {
  return (
    <ServicePageLayout
      title="Cybersecurity Services"
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
          title: "Penetration Testing & Auditing",
          description: "Simulating attacks to find system vulnerabilities, API integration flaws, and misconfigured ports.",
          items: [
            "Comprehensive black-box and white-box network penetration audits",
            "API endpoint vulnerability scanning and token validation checks",
            "Vulnerability scoring charts mapping issues against CVE standards"
          ]
        },
        {
          title: "Compliance & Managed SOC",
          description: "Setting up compliance dashboards mapping configuration files against regulations and monitoring active alerts.",
          items: [
            "SOC2, ISO27001, HIPAA policy and access rule structures",
            "Centralized logging SIEM configurations (Splunk/Sentinel)",
            "Automated alert response scripts stopping anomalous connections"
          ]
        }
      ]}
      ctaText="Request a Security Audit"
    />
  );
}
