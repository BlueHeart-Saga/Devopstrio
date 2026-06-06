import { ServicePageLayout } from "@/components/ServicePageLayout";

export default function ManagedServicesPage() {
  return (
    <ServicePageLayout
      title="Managed Services"
      badge="24/7 Operations"
      subtitle="Follow-the-sun SRE platform support, continuous uptime monitoring, database failover controls, and secure backups."
      stats={[
        { value: "24/7/365", label: "Operations Support" },
        { value: "99.99%", label: "Uptime Guaranteed" },
        { value: "15 min", label: "Max SLA Response" },
        { value: "50+", label: "Platforms Monitored" }
      ]}
      capabilities={[
        {
          title: "SRE Platform & Infrastructure Operations",
          description: "Providing incident response and telemetry configurations to detect and address resource issues before they impact clients.",
          items: [
            "24/7/365 active monitoring with automated alerts (PagerDuty/OpsGenie)",
            "Kubernetes pod auto-scaling and cluster recovery routines",
            "Continuous cloud cost checks and FinOps adjustments"
          ]
        },
        {
          title: "Database Support & Disaster Recovery",
          description: "Managing databases, optimizing indexes, performing backups, and running automated disaster recovery drills.",
          items: [
            "Database engine maintenance (PostgreSQL, MySQL, MongoDB)",
            "Automatic multi-region backup schedules with encryption validation",
            "Failover dry-runs ensuring absolute data integrity during outage drills"
          ]
        }
      ]}
      ctaText="Request a Managed Services Proposal"
    />
  );
}
