import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function SAPPartnershipPage() {
  return (
    <EcosystemPageLayout
      title="SAP Partnership"
      category="Partnerships"
      categoryUrl="/ecosystem/partnerships"
      badge="Silver Partner"
      subtitle="Silver Partner status driving ERP modernization, S/4HANA migrations, supply chain analytics, and custom database integrations."
      stats={[
        { value: "40+", label: "ERP Migrations" },
        { value: "25+", label: "SAP Basis Experts" },
        { value: "Silver", label: "Alliance Level" },
        { value: "20+", label: "Supply Chain Solutions" }
      ]}
      details={[
        {
          title: "S/4HANA Cloud Transition",
          description: "Transitioning legacy SAP ECC systems into S/4HANA cloud infrastructures with strict data governance.",
          items: [
            "Data cleansing and schema mapping scripts using SAP Data Services",
            "Functional testing for financial, supply chain, and HR modules",
            "Configuring secure SAP Fiori user interface networks"
          ]
        },
        {
          title: "ERP Custom Integrations",
          description: "Exposing secure API endpoints and writing ETL pipelines connecting SAP data to external cloud warehouses.",
          items: [
            "Real-time data synchronization using SAP Landscape Transformation Replication Server",
            "Custom API connections utilizing SAP Gateway and REST protocols",
            "Streaming SAP data logs to Snowflake and Databricks analytical meshes"
          ]
        }
      ]}
      ctaText="Connect with an SAP Consultant"
    />
  );
}
