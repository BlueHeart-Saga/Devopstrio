import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innovation Labs & Emerging Technology R&D | Devopstrio",
  description: "Inside Devopstrio Innovation Labs: pioneering agentic AI, quantum computing baselines, zero-trust security, and cloud R&D.",
  alternates: {
    canonical: "https://devopstrio.co.uk/ecosystem/innovation-labs",
  },
};

export default function InnovationLabsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
