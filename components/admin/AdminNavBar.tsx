"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  Briefcase,
  FileText,
  Calendar,
  Megaphone,
  Layers,
  Image,
  LogOut,
  Shield,
  User,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { type AdminRole, getAccessibleRoutes } from "@/lib/admin/permissions";

const ICON_MAP: Record<string, LucideIcon> = {
  Briefcase,
  FileText,
  Calendar,
  Megaphone,
  Layers,
  Image,
};

interface AdminNavBarProps {
  user: {
    username: string;
    role: AdminRole;
    name?: string;
    email?: string;
  };
}

export function AdminNavBar({ user }: AdminNavBarProps) {
  const pathname = usePathname();
  const accessibleRoutes = getAccessibleRoutes(user.role);

  const getRoleBadgeStyle = (role: AdminRole) => {
    switch (role) {
      case "SUPER_ADMIN":
        return "bg-rose-500/15 text-rose-400 border-rose-500/30";
      case "MARKETING_ADMIN":
        return "bg-amber-500/15 text-amber-400 border-amber-500/30";
      case "HR_ADMIN":
        return "bg-blue-500/15 text-blue-400 border-blue-500/30";
      default:
        return "bg-zinc-800 text-zinc-400 border-zinc-700";
    }
  };

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/admin/login" });
  };

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Role Badge */}
          <div className="flex items-center gap-3">
            <Link href="/admin" className="flex items-center gap-2 group">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-rose-400 transition-colors">
                DEVOPSTRIO<span className="text-rose-500">.</span>
              </span>
            </Link>
            <div className="h-4 w-px bg-zinc-800" />
            <div
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-xs font-mono font-medium ${getRoleBadgeStyle(
                user.role
              )}`}
            >
              <Shield className="w-3 h-3" />
              <span>{user.role.replace("_", " ")}</span>
            </div>
          </div>

          {/* User Status & Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-400">
              <User className="w-3.5 h-3.5 text-zinc-500" />
              <span className="font-mono text-zinc-300">{user.username}</span>
            </div>

            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors px-2 py-1 rounded-lg hover:bg-zinc-900 border border-transparent hover:border-zinc-800"
            >
              <span>Public Site</span>
              <ExternalLink className="w-3 h-3" />
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-rose-950/40 text-zinc-300 hover:text-rose-400 border border-zinc-800 hover:border-rose-900/50 text-xs font-medium transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Dynamic RBAC Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-2.5 -mx-4 px-4 sm:mx-0 sm:px-0 border-t border-zinc-900">
          {accessibleRoutes.map((route) => {
            const Icon = ICON_MAP[route.icon] || Briefcase;
            const isActive = pathname === route.href || pathname.startsWith(route.href + "/");

            return (
              <Link
                key={route.href}
                href={route.href}
                prefetch={true}
                className={`group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-rose-500/15 text-rose-300 border border-rose-500/30 shadow-[0_0_15px_rgba(244,63,94,0.15)]"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900/80 border border-transparent"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 transition-colors duration-200 ${isActive ? "text-rose-400" : "text-zinc-500 group-hover:text-zinc-300"}`} />
                <span>{route.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-rose-500 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
