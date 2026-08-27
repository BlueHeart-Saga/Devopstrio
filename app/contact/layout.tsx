import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Engineering Teams & Global Hubs | Devopstrio",
  description: "Get in touch with Devopstrio's cloud and AI engineering experts for project inquiries, technical consulting, and global delivery partnerships.",
  alternates: {
    canonical: "https://devopstrio.co.uk/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
