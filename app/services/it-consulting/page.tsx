import { ServicePageLayout } from "@/components/ServicePageLayout";

export default function ITConsultingPage() {
  return (
    <ServicePageLayout
      title="IT Consulting"
      badge="Advisory"
      subtitle="Comprehensive technical assessments, systems design advisory, cloud migration roadmaps, and software governance strategies."
      stats={[
        { value: "20+", label: "Years Advisory Experience" },
        { value: "45+", label: "Architects Available" },
        { value: "100%", label: "Alignment Success" },
        { value: "50+", label: "Audits Completed" }
      ]}
      capabilities={[
        {
          title: "Technology Assessment & Strategy",
          description: "Analyzing infrastructure setups, highlighting tech stack bottlenecks, and planning step-by-step modernization roadmaps.",
          items: [
            "Comprehensive infrastructure health audits and telemetry reviews",
            "Tech stack comparison charts aligning with system speed goals",
            "Detailed transformation roadmaps with cost estimation models"
          ]
        },
        {
          title: "Architecture & Cloud Strategy",
          description: "Selecting optimal microservices layouts, choosing secure database topologies, and planning public cloud governance networks.",
          items: [
            "Custom microservice API gateway layout blueprints",
            "High-availability database architecture schemas",
            "Cloud migration budgets and multi-account security plans"
          ]
        }
      ]}
      ctaText="Book an IT Consulting Call"
    />
  );
}
