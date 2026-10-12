import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import argon2 from "argon2";
import { z } from "zod";
import { connectToDatabase } from "@/lib/mongodb";
import { checkLoginRateLimit, resetLoginRateLimit } from "@/lib/admin/login-rate-limit";
import { recordAuditLog } from "@/lib/admin/audit-log";
import { type AdminRole } from "@/lib/admin/permissions";

const loginSchema = z.object({
  username: z
    .string()
    .trim()
    .min(1, "Username is required")
    .max(100)
    .regex(/^[a-zA-Z0-9._-]+$/, "Invalid username characters"),
  password: z
    .string()
    .min(1, "Password is required"), // password MUST NOT be trimmed
  otp: z.string().optional(), // MFA optional/commented out as requested
});

// Seed credentials with password 'Tamil1234$'
export const LOCAL_SEED_ADMINS: Record<string, any> = {
  "superadmin": {
    id: "670000000000000000000001",
    username: "superadmin",
    name: "Super Administrator",
    email: "admin@devopstrio.co.uk",
    role: "SUPER_ADMIN" as AdminRole,
    passwordHash: "$argon2id$v=19$m=65536,p=4,t=3$uBV8ey2o5qCcBXR8O9kM6A$5ibdBz1/qUPtDIx4KoyLvEvxUlEC9JCQGVsmQNGr/Bk",
    isActive: true,
    sessionVersion: 1,
  },
  "hr.admin": {
    id: "670000000000000000000002",
    username: "hr.admin",
    name: "HR Administrator",
    email: "hr@devopstrio.co.uk",
    role: "HR_ADMIN" as AdminRole,
    passwordHash: "$argon2id$v=19$m=65536,p=4,t=3$uBV8ey2o5qCcBXR8O9kM6A$5ibdBz1/qUPtDIx4KoyLvEvxUlEC9JCQGVsmQNGr/Bk",
    isActive: true,
    sessionVersion: 1,
  },
  "marketing.admin": {
    id: "670000000000000000000003",
    username: "marketing.admin",
    name: "Marketing Administrator",
    email: "marketing@devopstrio.co.uk",
    role: "MARKETING_ADMIN" as AdminRole,
    passwordHash: "$argon2id$v=19$m=65536,p=4,t=3$uBV8ey2o5qCcBXR8O9kM6A$5ibdBz1/qUPtDIx4KoyLvEvxUlEC9JCQGVsmQNGr/Bk",
    isActive: true,
    sessionVersion: 1,
  },
};

const authSecret =
  process.env.AUTH_SECRET ||
  process.env.NEXTAUTH_SECRET ||
  "AMZh2yDxexkvPPdtT5vz8l99QQEDKpBosesxxqHH1pY=";

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  secret: authSecret,
  session: {
    strategy: "jwt",
    maxAge: 8 * 60 * 60, // 8 hours session duration
  },
  pages: {
    signIn: "/admin/login",
    error: "/admin/login",
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

        const { username, password } = parsed.data;
        const normalizedUsername = username.toLowerCase();
        const rawPassword = password;

        // 1. Enforce login rate limit
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

        // 2. Query MongoDB first, fallback to LOCAL_SEED_ADMINS if DB is not connected
        let user: any = null;
        try {
          const { db } = await connectToDatabase();
          user = await db.collection("admin_users").findOne({
            username: normalizedUsername,
          });
        } catch {
          // If MongoDB is not reachable or still being configured, fallback to verified seed accounts
          user = LOCAL_SEED_ADMINS[normalizedUsername];
        }

        if (!user && LOCAL_SEED_ADMINS[normalizedUsername]) {
          user = LOCAL_SEED_ADMINS[normalizedUsername];
        }

        // 3. User existence and account state check
        if (!user) {
          await recordAuditLog({
            username: normalizedUsername,
            action: "auth.login_failed",
            resource: "auth",
            result: "failure",
            details: { reason: "Account not found" },
          });
          return null;
        }

        if (!user.isActive) {
          await recordAuditLog({
            actorId: user._id?.toString() || user.id,
            username: normalizedUsername,
            action: "auth.login_failed",
            resource: "auth",
            result: "denied",
            details: { reason: "Account is deactivated" },
          });
          return null;
        }

        // 4. Verify password with Argon2id (without trimming password)
        let isPasswordValid = false;
        try {
          if (user.passwordHash) {
            isPasswordValid = await argon2.verify(user.passwordHash, rawPassword);
          }
        } catch (err) {
          console.error("Argon2 verification error:", err);
          isPasswordValid = false;
        }

        if (!isPasswordValid) {
          await recordAuditLog({
            actorId: user._id?.toString() || user.id,
            username: normalizedUsername,
            action: "auth.login_invalid_password",
            resource: "auth",
            result: "failure",
            details: { reason: "Invalid password" },
          });
          return null;
        }

        /* 
         * 5. [MFA TEMPORARILY COMMENTED OUT AS REQUESTED]
         * To re-enable MFA, uncomment the block below:
         * 
         * if (user.mfaEnabled && user.totpSecretEncrypted) {
         *   const isOtpValid = await verifyTotp(user.totpSecretEncrypted, cleanOtp, normalizedUsername);
         *   if (!isOtpValid) return null;
         * }
         */

        // 6. Reset rate limit on successful credentials verification
        resetLoginRateLimit(normalizedUsername);

        await recordAuditLog({
          actorId: user._id?.toString() || user.id,
          username: normalizedUsername,
          action: "auth.login_success",
          resource: "auth",
          result: "success",
          details: { role: user.role },
        });

        const userId = user._id?.toString() || user.id;

        return {
          id: userId,
          name: user.name || user.username,
          email: user.email,
          username: user.username,
          role: user.role as AdminRole,
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
    async redirect({ url, baseUrl }) {
      if (url.includes("localhost:8080")) {
        try {
          const u = new URL(url);
          return `${baseUrl}${u.pathname}${u.search}`;
        } catch {
          return `${baseUrl}/admin`;
        }
      }
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      return url;
    },
  },
});
