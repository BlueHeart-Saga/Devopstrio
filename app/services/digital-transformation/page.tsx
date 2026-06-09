import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata = {
  title: "Digital Transformation | Devopstrio",
  description: "Modernize legacy systems, automate processes, establish intelligent workflows, and scale change management. Align technology with enterprise business outcomes with Devopstrio.",
};

export default function DigitalTransformationPage() {
  return (
    <ServicePageLayout
      title="Digital Transformation"
      badge="Strategic Change"
      subtitle="Upgrading legacy monolith software systems, deploying custom workflow engines, and drafting transition guides to modernize enterprise processes."
      stats={[
        { value: "50+", label: "Enterprises Modernized" },
        { value: "40%+", label: "Process Efficiency" },
        { value: "2.5x", label: "Velocity Increase" },
        { value: "100%", label: "Adoption Rate" }
      ]}
      capabilities={[
        {
          id: "digital-strategy",
          title: "Digital Strategy",
          description: "Helping enterprises draft modern technology adoption roadmaps and business-tech alignment.",
          items: [
            "ROI estimation blueprints for cloud and AI migrations",
            "Competitor technology analysis and target state definition",
            "IT budget planning and organizational alignment strategies"
          ]
        },
        {
          id: "enterprise-modernization",
          title: "Enterprise Modernization",
          description: "Transforming legacy operations, infrastructure, and core business models.",
          items: [
            "Transitioning legacy mainframes to cloud-native platforms",
            "Restructuring IT departments into cross-functional product teams",
            "API-enabling legacy systems to expose business capabilities"
          ]
        },
        {
          id: "process-automation",
          title: "Process Automation",
          description: "Eliminating manual workflows using robotic process automation and custom integrations.",
          items: [
            "Automated document processing using AI and OCR tools",
            "Integration of disparate SaaS products to automate data entry",
            "Custom workflow orchestrations with low-code and custom code engines"
          ]
        },
        {
          id: "intelligent-workflows",
          title: "Intelligent Workflows",
          description: "Enhancing business processes with AI decision-making engines and real-time alerts.",
          items: [
            "Automated customer service routing based on sentiment analysis",
            "Dynamic pricing and inventory adjustment models",
            "Predictive maintenance scheduling in supply chain environments"
          ]
        },
        {
          id: "customer-experience-transformation",
          title: "Customer Experience Transformation",
          description: "Upgrading client-facing digital touchpoints to improve satisfaction and engagement.",
          items: [
            "Omni-channel client portal development",
            "Personalized user journeys using machine learning recommendations",
            "Real-time chat and AI support agent integrations"
          ]
        },
        {
          id: "legacy-system-modernization",
          title: "Legacy System Modernization",
          description: "Upgrading aging software components and legacy infrastructure to cut maintenance costs.",
          items: [
            "ColdFusion, COBOL, or PHP legacy migration to Go/NodeJS",
            "High-security migration plans preventing data loss during database upgrades",
            "Custom testing harnesses to verify logic equivalence"
          ]
        },
        {
          id: "business-transformation",
          title: "Business Transformation",
          description: "Aligning corporate organizational structure and processes with new technological capabilities.",
          items: [
            "Agile framework coaching (Scrum/Kanban) at scale",
            "KPI and productivity dashboard designs for C-level transparency",
            "Collaborative design thinking workshops"
          ]
        },
        {
          id: "change-management",
          title: "Change Management",
          description: "Ensuring seamless organizational transition during major technology rollouts.",
          items: [
            "Tailored technical training programs for internal engineering staff",
            "Technology adoption documentation and user guides",
            "Staged rollout plans minimizing team friction"
          ]
        }
      ]}
      ctaText="Consult with our Transformation Leads"
    />
  );
}
