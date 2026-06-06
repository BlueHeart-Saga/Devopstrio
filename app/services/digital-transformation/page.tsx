import { ServicePageLayout } from "@/components/ServicePageLayout";

export default function DigitalTransformationPage() {
  return (
    <ServicePageLayout
      title="Digital Transformation"
      badge="Modernization"
      subtitle="Refactoring legacy monolith systems, migrating old databases, automating manual processes, and integrating custom CRM/ERP structures."
      stats={[
        { value: "50+", label: "Systems Modernized" },
        { value: "60%+", label: "Process Velocity" },
        { value: "40%+", label: "Hosting Cost Saved" },
        { value: "25+", label: "Enterprise Customers" }
      ]}
      capabilities={[
        {
          title: "Legacy Modernization",
          description: "Breaking down monolithic architectures into decoupled microservices and transitioning databases without downtime.",
          items: [
            "Decoupling monolith code bases using the Stranglers Fig design pattern",
            "Refactoring relational database tables into modern schemas",
            "Migrating legacy setups into cloud-native architectures"
          ]
        },
        {
          title: "Process & Integration Automations",
          description: "Automating manual business workflows and integrating third-party software like Salesforce, SAP, and Dynamics.",
          items: [
            "Custom workflow orchestration systems integrating with business databases",
            "Salesforce, SAP, and ServiceNow API connection setups",
            "Unified executive dashboards display real-time business metrics"
          ]
        }
      ]}
      ctaText="Consult with our Transformation Leads"
    />
  );
}
