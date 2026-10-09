import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import argon2 from "argon2";
import { z } from "zod";
import { connectToDatabase } from "@/lib/mongodb";
import { verifyTotp, encryptTotpSecret } from "@/lib/admin/mfa";
import { checkLoginRateLimit, resetLoginRateLimit } from "@/lib/admin/login-rate-limit";
import { recordAuditLog } from "@/lib/admin/audit-log";
import { type AdminRole } from "@/lib/admin/permissions";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  password: z.string().min(1, "Password is required"),
  otp: z.string().regex(/^\d{6}$/, "Authenticator code must be 6 digits"),
});

// Built-in seed accounts for local dev when MongoDB is not configured
export const BUILTIN_LOCAL_ADMINS: Record<string, any> = {
  "superadmin": {
    id: "670000000000000000000001",
    username: "superadmin",
    name: "Super Administrator",
    email: "admin@devopstrio.co.uk",
    role: "SUPER_ADMIN" as AdminRole,
    passwordHash: "$argon2id$v=19$m=65536,p=4,t=3$pxa2BY6+Vl46BTSwPpX81w$YlofILOkGaiOgjjf4OJdLgc2b3/+cH3dPxwv7ns71UE",
    totpSecretEncrypted: encryptTotpSecret("KIRHA2CHM4YTEOJW"),
    isActive: true,
    mfaEnabled: true,
    sessionVersion: 1,
  },
  "hr.admin": {
    id: "670000000000000000000002",
    username: "hr.admin",
    name: "HR Administrator",
    email: "hr@devopstrio.co.uk",
    role: "HR_ADMIN" as AdminRole,
    passwordHash: "$argon2id$v=19$m=65536,p=4,t=3$UpHTxZBIsP2MfXxzj/IROw$PkvqOyOcJRbUqUtlWsPDHZeeaUs83OLQUgE93/UWf9E",
    totpSecretEncrypted: encryptTotpSecret("CRAGGNIDJB5RYZIU"),
    isActive: true,
    mfaEnabled: true,
    sessionVersion: 1,
  },
  "marketing.admin": {
    id: "670000000000000000000003",
    username: "marketing.admin",
    name: "Marketing Administrator",
    email: "marketing@devopstrio.co.uk",
    role: "MARKETING_ADMIN" as AdminRole,
    passwordHash: "$argon2id$v=19$m=65536,p=4,t=3$u07ji/xWubym7Ydx6yRGGA$P/LF/Vbb305838vNZmRLSn9JhZccBIXY9Zv9jW7C8nA",
    totpSecretEncrypted: encryptTotpSecret("DFUC6W3VGRHGYZLA"),
    isActive: true,
    mfaEnabled: true,
    sessionVersion: 1,
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET || "devopstrio-admin-portal-auth-secret-jwt-key-2026",
  session: {
    strategy: "jwt",
    maxAge: 8 * 60 * 60, // 8 hours session duration
  },
  pages: {
    signIn: "/admin/login",
  },
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
        otp: { label: "Authenticator Code", type: "text" },
      },
      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials);
        if (!parsed.success) {
          return null;
        }

        const { username, password, otp } = parsed.data;
        const normalizedUsername = username.trim().toLowerCase();

        // 1. Rate limiting check (5 attempts per 10 minutes)
        const rateLimit = await checkLoginRateLimit(normalizedUsername);
        if (!rateLimit.success) {
          await recordAuditLog({
            username: normalizedUsername,
            action: "auth.login_throttled",
            resource: "auth",
            result: "denied",
            details: { reason: "Rate limit exceeded" },
          });
          throw new Error("Too many failed attempts. Please try again in 10 minutes.");
        }

        let user: any = null;

        // 2. Fetch administrator account from MongoDB if connected
        try {
          const { db } = await connectToDatabase();
          user = await db.collection("admin_users").findOne({
            username: normalizedUsername,
            isActive: true,
          });
        } catch (dbErr) {
          console.warn("MongoDB not connected, checking local seed admin accounts:", dbErr);
        }

        // Fallback to built-in seed accounts for local dev if DB is not connected
        if (!user && BUILTIN_LOCAL_ADMINS[normalizedUsername]) {
          user = BUILTIN_LOCAL_ADMINS[normalizedUsername];
        }

        if (!user || !user.passwordHash || !user.totpSecretEncrypted) {
          await recordAuditLog({
            username: normalizedUsername,
            action: "auth.login_failed",
            resource: "auth",
            result: "failure",
            details: { reason: "Account not found or inactive" },
          });
          return null;
        }

        // 3. Verify Argon2id password hash
        const isPasswordValid = await argon2.verify(user.passwordHash, password);
        if (!isPasswordValid) {
          await recordAuditLog({
            actorId: user.id || user._id?.toString(),
            username: normalizedUsername,
            action: "auth.login_invalid_password",
            resource: "auth",
            result: "failure",
          });
          return null;
        }

        // 4. Verify 6-digit TOTP code
        const isOtpValid = verifyTotp(user.totpSecretEncrypted, otp);
        if (!isOtpValid) {
          await recordAuditLog({
            actorId: user.id || user._id?.toString(),
            username: normalizedUsername,
            action: "auth.login_invalid_mfa",
            resource: "auth",
            result: "failure",
          });
          return null;
        }

        // 5. Success - Reset rate limit and record audit
        resetLoginRateLimit(normalizedUsername);
        await recordAuditLog({
          actorId: user.id || user._id?.toString(),
          username: normalizedUsername,
          action: "auth.login_success",
          resource: "auth",
          result: "success",
          details: { role: user.role },
        });

        const userId = user.id || user._id?.toString();

        return {
          id: userId,
          name: user.name || user.username,
          email: user.email,
          username: user.username,
          role: (user.role as AdminRole) || "HR_ADMIN",
          sessionVersion: user.sessionVersion || 1,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.adminId = user.id;
        token.role = user.role;
        token.sessionVersion = user.sessionVersion;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.adminId) {
        session.user.id = token.adminId as string;
        session.user.role = (token.role as AdminRole) || "HR_ADMIN";
        session.user.sessionVersion = (token.sessionVersion as number) || 1;
        session.user.username = (token.username as string) || "";
      }
      return session;
    },
  },
});
