import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Engineering Jobs & Careers | Devopstrio",
  description: "Search open cloud architect, AI engineer, SRE, and DevOps jobs at Devopstrio. Explore remote and global positions.",
  alternates: {
    canonical: "https://devopstrio.co.uk/careers/jobs",
  },
};

export default function JobsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
