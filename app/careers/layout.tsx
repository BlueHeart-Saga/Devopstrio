import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Devopstrio | Join Our Engineering Team",
  description: "Explore open career opportunities at Devopstrio. Join our global team of cloud architects, DevOps engineers, AI developers, and security specialists.",
  alternates: {
    canonical: "https://devopstrio.co.uk/careers",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
