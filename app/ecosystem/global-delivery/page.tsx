import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function GlobalDeliveryPage() {
  return (
    <EcosystemPageLayout
      title="Global Delivery Network"
      category="Delivery"
      badge="Network"
      subtitle="Follow-the-sun SRE operations, regional compliance advisory centers, and distributed engineering corridors to guarantee uptime and speed."
      stats={[
        { value: "525+", label: "Ecosystem Experts" },
        { value: "5+", label: "Global Corridors" },
        { value: "24/7/365", label: "Operations Support" },
        { value: "99.99%", label: "Uptime Achieved" }
      ]}
      details={[
        {
          title: "SRE Support & Delivery Corridors",
          description: "Distributing workloads across multiple regional SRE centers to ensure 24/7 support coverage and database stability.",
          items: [
            "India Engineering Hub for core platform development and R&D labs",
            "UK advisory and client relationship operations center",
            "Europe and Middle East nearshore support and compliance advisory"
          ]
        },
        {
          title: "Talent & Compliance Networks",
          description: "Aligning SRE operations with regional data residency guidelines (GDPR, HIPAA, and SOC2) and hiring local talent.",
          items: [
            "On-demand senior cloud architects and SRE support engineers",
            "Strict tenant isolation audits and local security posture logs",
            "Standardized onboarding schedules and credentials controls"
          ]
        }
      ]}
      ctaText="Connect with Our Delivery Team"
    />
  );
}
