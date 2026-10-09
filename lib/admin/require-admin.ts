import { auth } from "@/auth";
import { connectToDatabase } from "@/lib/mongodb";
import { canAccess, type AdminRole, type Resource } from "@/lib/admin/permissions";
import { recordAuditLog } from "@/lib/admin/audit-log";
import { ObjectId } from "mongodb";

export class AdminAuthError extends Error {
  constructor(
    public status: 401 | 403,
    message: string
  ) {
    super(message);
    this.name = "AdminAuthError";
  }
}

export interface AuthenticatedAdmin {
  id: string;
  username: string;
  role: AdminRole;
  email: string;
  name?: string;
}

const BUILTIN_FALLBACK_ROLES: Record<string, AdminRole> = {
  "superadmin": "SUPER_ADMIN",
  "hr.admin": "HR_ADMIN",
  "marketing.admin": "MARKETING_ADMIN",
};

/**
 * Validate that the request origin matches the host (CSRF protection)
 */
export function validateSameOrigin(req?: Request): boolean {
  if (!req) return true;
  const method = req.method ? req.method.toUpperCase() : "GET";
  if (["GET", "HEAD", "OPTIONS"].includes(method)) return true;

  const origin = req.headers.get("origin");
  const host = req.headers.get("host");

  if (!origin) {
    // If no origin, check referer
    const referer = req.headers.get("referer");
    if (!referer) return true; // Standard same-origin curl or internal call
    try {
      const refererHost = new URL(referer).host;
      if (host && refererHost !== host) {
        return false;
      }
    } catch {
      return false;
    }
    return true;
  }

  try {
    const originHost = new URL(origin).host;
    if (host && originHost !== host) {
      return false;
    }
  } catch {
    return false;
  }

  return true;
}

export async function requireAdmin(resource?: Resource, req?: Request): Promise<AuthenticatedAdmin> {
  // 1. CSRF Same-Origin Check on Mutating Requests
  if (req && !validateSameOrigin(req)) {
    await recordAuditLog({
      action: "security.csrf_blocked",
      resource: resource || "unknown",
      result: "denied",
      details: {
        origin: req.headers.get("origin") || undefined,
        method: req.method,
      },
    });
    throw new AdminAuthError(403, "Forbidden: Cross-site request rejected (CSRF check failed).");
  }

  // 2. Auth.js Session Validation
  const session = await auth();

  if (!session?.user?.id) {
    throw new AdminAuthError(401, "Authentication required. Please sign in to the administrator portal.");
  }

  const adminId = session.user.id;
  const sessionUsername = session.user.username || "";

  let user: any = null;

  // 3. Database lookup for account active status and session revocation check
  try {
    const { db } = await connectToDatabase();
    if (ObjectId.isValid(adminId)) {
      user = await db.collection("admin_users").findOne({
        _id: new ObjectId(adminId),
        isActive: true,
      });
    }
  } catch (dbErr) {
    // Fallback for local development when MongoDB is not connected
    if (BUILTIN_FALLBACK_ROLES[sessionUsername]) {
      user = {
        _id: adminId,
        username: sessionUsername,
        role: session.user.role || BUILTIN_FALLBACK_ROLES[sessionUsername],
        email: session.user.email || `${sessionUsername}@devopstrio.co.uk`,
        name: session.user.name,
        isActive: true,
        sessionVersion: 1,
      };
    }
  }

  if (!user && BUILTIN_FALLBACK_ROLES[sessionUsername]) {
    user = {
      _id: adminId,
      username: sessionUsername,
      role: session.user.role || BUILTIN_FALLBACK_ROLES[sessionUsername],
      email: session.user.email || `${sessionUsername}@devopstrio.co.uk`,
      name: session.user.name,
      isActive: true,
      sessionVersion: 1,
    };
  }

  if (!user) {
    throw new AdminAuthError(401, "Administrator account deactivated or no longer exists.");
  }

  // 4. Session Revocation Check (sessionVersion)
  const currentDbSessionVersion = user.sessionVersion || 1;
  const userJwtSessionVersion = session.user.sessionVersion || 1;

  if (currentDbSessionVersion !== userJwtSessionVersion) {
    throw new AdminAuthError(401, "Session has been revoked due to password change or security update. Please sign in again.");
  }

  const role = (user.role as AdminRole) || "HR_ADMIN";

  // 5. RBAC Permission Check
  if (resource && !canAccess(role, resource)) {
    await recordAuditLog({
      actorId: user._id?.toString() || user.id,
      username: user.username,
      action: `rbac.access_denied:${resource}`,
      resource,
      result: "denied",
      details: { role, method: req?.method },
    });

    throw new AdminAuthError(
      403,
      `Forbidden: Your administrator role (${role}) does not have permission to access '${resource}'.`
    );
  }

  return {
    id: user._id?.toString() || user.id,
    username: user.username as string,
    role,
    email: user.email as string,
    name: user.name as string | undefined,
  };
}
