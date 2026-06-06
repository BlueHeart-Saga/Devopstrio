import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function OraclePartnershipPage() {
  return (
    <EcosystemPageLayout
      title="Oracle Partnership"
      category="Partnerships"
      categoryUrl="/ecosystem/partnerships"
      badge="Platinum Partner"
      subtitle="Platinum status driving database modernization, Exadata optimization, Real Application Clusters (RAC), and GoldenGate replication setups."
      stats={[
        { value: "50+", label: "Database Migrations" },
        { value: "35+", label: "Oracle Experts" },
        { value: "Platinum", label: "Partner Level" },
        { value: "0", label: "Migration Data Loss" }
      ]}
      details={[
        {
          title: "Database Modernization & Migration",
          description: "Transitioning legacy Oracle on-premise databases into Exadata Cloud Infrastructure with absolute data integrity.",
          items: [
            "Zero downtime migrations using Oracle GoldenGate replication pipelines",
            "Exadata performance tuning and memory buffer cache adjustments",
            "Automated PL/SQL optimization and code structure refactorings"
          ]
        },
        {
          title: "High Availability & Security",
          description: "Setting up Real Application Clusters (RAC) and configuring Data Guard disaster recovery infrastructure.",
          items: [
            "RAC setups for high availability and workload load-balancing",
            "Data Guard configurations with real-time sync across distant locations",
            "Hardened Transparent Data Encryption (TDE) for database records"
          ]
        }
      ]}
      ctaText="Consult with our Database Team"
    />
  );
}
