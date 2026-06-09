import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata = {
  title: "Managed IT Services | Devopstrio",
  description: "Leverage expert round-the-clock managed cloud services, managed DevOps automation, application support, infrastructure administration, and 24/7 on-call incident response.",
};

export default function ManagedServicesPage() {
  return (
    <ServicePageLayout
      title="Managed Services"
      badge="Operations Hub"
      subtitle="Round-the-clock site reliability engineering, database tuning, automated backups, security patching, and proactive incident response."
      stats={[
        { value: "24/7/365", label: "Operations" },
        { value: "99.99%", label: "Uptime Guaranteed" },
        { value: "<15 min", label: "Incident SLA" },
        { value: "50+", label: "Managed Platforms" }
      ]}
      capabilities={[
        {
          id: "managed-cloud-services",
          title: "Managed Cloud Services",
          description: "Day-to-day operations and cloud infrastructure maintenance.",
          items: [
            "Multi-account cloud administration and IAM credential rotations",
            "Patching, operating system updates, and software installations",
            "Scalability audits and automatic resource adjustments"
          ]
        },
        {
          id: "managed-devops-services",
          title: "Managed DevOps Services",
          description: "Ongoing maintenance of CI/CD pipelines, IaC repositories, and automation tooling.",
          items: [
            "Pipeline performance tuning and cache management",
            "Infrastructure as Code updates for new cloud resource versions",
            "Automation of dev environment provisioning"
          ]
        },
        {
          id: "managed-security-services",
          title: "Managed Security Services",
          description: "Outsource threat monitoring, firewall management, and incident mitigation.",
          items: [
            "24/7 SIEM monitoring and endpoint alert processing",
            "WAF rules maintenance and DDoS mitigation configs",
            "Rapid threat containment and post-incident reporting"
          ]
        },
        {
          id: "application-support",
          title: "Application Support",
          description: "Resolving user bugs, monitoring application errors, and releasing minor patches.",
          items: [
            "SLA-backed bug resolution and level-3 application engineering",
            "Error reporting platform configuration (Sentry/Bugsnag)",
            "Application performance tuning and memory leak fixes"
          ]
        },
        {
          id: "infrastructure-management",
          title: "Infrastructure Management",
          description: "Maintaining physical, virtualized, and hybrid hardware deployments.",
          items: [
            "Virtual machine provisioning and hypervisor upgrades",
            "Storage area network (SAN) configurations",
            "Load balancer setup and SSL certificate rotations"
          ]
        },
        {
          id: "database-administration",
          title: "Database Administration",
          description: "Monitoring database performance, running index rebuilds, and securing tables.",
          items: [
            "PostgreSQL, MySQL, and MSSQL performance tuning",
            "Automated database backup testing and recovery drills",
            "Database security hardening and access log auditing"
          ]
        },
        {
          id: "monitoring-incident-management",
          title: "Monitoring & Incident Management",
          description: "PagerDuty integrations, system health checks, and on-call engineer escalations.",
          items: [
            "Custom alerting thresholds preventing alert fatigue",
            "Automated incident runbooks executing recovery scripts",
            "Post-mortem incident analysis and root cause audits"
          ]
        },
        {
          id: "247-support-services",
          title: "24/7 Support Services",
          description: "Direct developer help desk availability round the clock for critical system failures.",
          items: [
            "Multi-channel support (Slack, email, phone) with response SLAs",
            "Dedicated on-call engineer shifts covering all timezones",
            "Escalation path management to senior technical leadership"
          ]
        }
      ]}
      ctaText="Request Operations Support"
    />
  );
}
