import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Devopstrio | Global Cloud & AI Engineering Leaders",
  description: "Learn about Devopstrio's mission, global engineering team, and culture delivering enterprise cloud, AI, cybersecurity, and DevOps solutions.",
  alternates: {
    canonical: "https://devopstrio.co.uk/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
