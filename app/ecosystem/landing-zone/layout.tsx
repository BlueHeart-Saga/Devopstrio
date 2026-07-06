import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devopstrio | Cloud · AI · DevOps Acceleration Platform",
  description: "Enterprise Landing Zone & AI Transformation Specialists. Open-source blueprints, Terraform modules, and GenAI-ready architectures by Devopstrio.",
  alternates: {
    canonical: "/ecosystem/landing-zone"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
