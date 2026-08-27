import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community & Global Talent Network | Devopstrio",
  description: "Join Devopstrio's global community network connecting cloud engineers, open-source contributors, university labs, and technical guilds.",
  alternates: {
    canonical: "https://devopstrio.co.uk/ecosystem/community-talent-network",
  },
};

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
