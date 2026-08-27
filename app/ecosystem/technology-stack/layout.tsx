import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modern Technology Stack & Cloud Native Architecture | Devopstrio",
  description: "Explore Devopstrio's enterprise technology stack featuring cloud-native architectures, multi-cloud platforms, DevOps toolchains, and AI frameworks.",
  alternates: {
    canonical: "https://devopstrio.co.uk/ecosystem/technology-stack",
  },
};

export default function TechStackLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
