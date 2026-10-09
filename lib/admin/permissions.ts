export const permissions = {
  jobs: ["SUPER_ADMIN", "HR_ADMIN"],
  applications: ["SUPER_ADMIN", "HR_ADMIN"],
  hiringPosters: ["SUPER_ADMIN", "HR_ADMIN"],
  events: ["SUPER_ADMIN", "MARKETING_ADMIN"],
  announcements: ["SUPER_ADMIN", "MARKETING_ADMIN"],
  marketingResources: ["SUPER_ADMIN", "MARKETING_ADMIN"],
  cultureAlbums: ["SUPER_ADMIN", "MARKETING_ADMIN"],
  uploads: ["SUPER_ADMIN", "MARKETING_ADMIN", "HR_ADMIN"],
  users: ["SUPER_ADMIN"],
  auditLogs: ["SUPER_ADMIN"],
} as const;

export type AdminRole = "SUPER_ADMIN" | "MARKETING_ADMIN" | "HR_ADMIN";

export type Resource = keyof typeof permissions;

export function canAccess(role: AdminRole, resource: Resource): boolean {
  const allowed = permissions[resource] as readonly string[];
  return allowed.includes(role);
}

export interface AdminNavRoute {
  name: string;
  href: string;
  resource: Resource;
  icon: string;
}

export const ADMIN_NAV_ROUTES: AdminNavRoute[] = [
  { name: "Jobs Management", href: "/admin/jobs", resource: "jobs", icon: "Briefcase" },
  { name: "Hiring Posters", href: "/admin/hiring", resource: "hiringPosters", icon: "FileText" },
  { name: "Events & Meetups", href: "/admin/events", resource: "events", icon: "Calendar" },
  { name: "Announcements", href: "/admin/announcements", resource: "announcements", icon: "Megaphone" },
  { name: "Marketing Resources", href: "/admin/marketing", resource: "marketingResources", icon: "Layers" },
  { name: "Culture Albums", href: "/admin/culture-albums", resource: "cultureAlbums", icon: "Image" },
];

export function getAccessibleRoutes(role: AdminRole): AdminNavRoute[] {
  return ADMIN_NAV_ROUTES.filter((route) => canAccess(role, route.resource));
}
