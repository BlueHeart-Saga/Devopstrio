import { type DefaultSession, type DefaultUser } from "next-auth";
import { type AdminRole } from "@/lib/admin/permissions";

declare module "next-auth" {
  interface User extends DefaultUser {
    adminId?: string;
    role?: AdminRole;
    sessionVersion?: number;
    username?: string;
  }

  interface Session extends DefaultSession {
    user: {
      id: string;
      role: AdminRole;
      sessionVersion: number;
      username: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    adminId?: string;
    role?: AdminRole;
    sessionVersion?: number;
    username?: string;
  }
}
