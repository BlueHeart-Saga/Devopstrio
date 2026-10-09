import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin/require-admin";

export default async function AdminRootPage() {
  const admin = await requireAdmin();

  if (admin.role === "MARKETING_ADMIN") {
    redirect("/admin/events");
  }

  redirect("/admin/jobs");
}
