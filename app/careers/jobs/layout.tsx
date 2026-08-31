import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Job Positions | Devopstrio Career Opportunities",
  description: "Browse active job openings, detailed role specifications, and apply to join Devopstrio's elite global engineering team.",
  alternates: {
    canonical: "https://devopstrio.co.uk/careers/jobs",
  },
};

export default function JobsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
