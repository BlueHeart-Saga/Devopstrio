import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Platforms & SaaS Solution Ecosystem | Devopstrio",
  description: "Deploy enterprise-grade platforms for cloud management, customer experience, data analytics, and SaaS solutions.",
  alternates: {
    canonical: "https://devopstrio.co.uk/ecosystem/platforms-solutions",
  },
};

export default function PlatformsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
