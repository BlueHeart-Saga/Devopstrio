import { connectToDatabase } from "@/lib/mongodb";

export interface AuditLogEntry {
  actorId?: string;
  username?: string;
  action: string;
  resource: string;
  resourceId?: string;
  result: "success" | "denied" | "failure";
  details?: Record<string, any>;
  ipAddress?: string;
  timestamp?: Date;
}

export async function recordAuditLog(entry: AuditLogEntry): Promise<void> {
  try {
    const { db } = await connectToDatabase();
    await db.collection("admin_audit_logs").insertOne({
      ...entry,
      timestamp: entry.timestamp || new Date(),
    });
  } catch (err) {
    console.error("Failed to write to admin_audit_logs:", err);
  }
}
