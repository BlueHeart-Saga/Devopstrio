import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Presence | Devopstrio",
  description: "Devopstrio combines UK leadership with distributed engineering and operations hubs across India and North America—giving clients local responsiveness and global scale.",
  alternates: {
    canonical: "/about/global-presence"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
