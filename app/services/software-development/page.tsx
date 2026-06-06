import { ServicePageLayout } from "@/components/ServicePageLayout";

export default function SoftwareDevelopmentPage() {
  return (
    <ServicePageLayout
      title="Software Development"
      badge="Engineering Core"
      subtitle="Engineering modern responsive frontend systems, highly performant backends, secure API gateways, and native mobile applications."
      stats={[
        { value: "150+", label: "Applications Built" },
        { value: "45+", label: "Senior Engineers" },
        { value: "99.9%", label: "Code Coverage" },
        { value: "Go/TS", label: "Primary Stacks" }
      ]}
      capabilities={[
        {
          title: "Web & Mobile Engineering",
          description: "Building responsive web pages and native mobile applications with optimized client load speeds and clean code architectures.",
          items: [
            "Next.js/React and Tailwind CSS responsive frontend designs",
            "Native iOS, Android and Flutter/React Native mobile applications",
            "State management schemas and server-side rendering (SSR) setups"
          ]
        },
        {
          title: "Backend & API Architectures",
          description: "Designing low-latency backend APIs and event routing structures that process millions of records daily.",
          items: [
            "Low-latency microservices built in Go, .NET Core, Python, or Java",
            "GraphQL and REST API gateways with automated security validation",
            "Event-driven broker systems using Apache Kafka and RabbitMQ"
          ]
        }
      ]}
      ctaText="Hire Software Developers"
    />
  );
}
