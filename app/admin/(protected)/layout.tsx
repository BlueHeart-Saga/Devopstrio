import React from "react";
import { redirect } from "next/navigation";
import { requireAdmin, AdminAuthError } from "@/lib/admin/require-admin";
import { AdminNavBar } from "@/components/admin/AdminNavBar";

export default async function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let admin;

  try {
    admin = await requireAdmin();
  } catch (error) {
    if (error instanceof AdminAuthError && error.status === 401) {
      redirect("/admin/login");
    }
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <AdminNavBar
        user={{
          username: admin.username,
          role: admin.role,
          name: admin.name,
          email: admin.email,
        }}
      />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
