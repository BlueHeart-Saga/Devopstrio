import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights, Technical Blogs & Case Studies | Devopstrio",
  description: "Stay ahead with Devopstrio insights: deep-dive technical publications, enterprise cloud migration case studies, and engineering benchmarks.",
  alternates: {
    canonical: "https://devopstrio.co.uk/insights",
  },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
