/**
 * Devopstrio Local Testing Helper - Get Live MFA Code from MongoDB
 * 
 * Usage:
 *   npx tsx scripts/get-otp.ts superadmin
 *   npx tsx scripts/get-otp.ts hr.admin
 *   npx tsx scripts/get-otp.ts marketing.admin
 */

import * as fs from "fs";
import * as path from "path";
import { MongoClient } from "mongodb";
import { decryptTotpSecret } from "../lib/admin/mfa";
import { authenticator } from "otplib";

function loadEnvFile(filePath: string) {
  if (fs.existsSync(filePath)) {
    const lines = fs.readFileSync(filePath, "utf-8").split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx > 0) {
        const key = trimmed.substring(0, eqIdx).trim();
        const val = trimmed.substring(eqIdx + 1).trim().replace(/^["']|["']$/g, "");
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}

loadEnvFile(path.resolve(process.cwd(), ".env.local"));
loadEnvFile(path.resolve(process.cwd(), ".env"));

async function main() {
  const username = (process.argv[2] || "superadmin").toLowerCase();
  const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;
  const dbName = process.env.DB_NAME || process.env.MONGODB_DB || "podcast";

  if (!mongoUri) {
    console.error("❌ No MongoDB URI found in environment.");
    process.exit(1);
  }

  const client = new MongoClient(mongoUri);
  await client.connect();
  const db = client.db(dbName);
  const user = await db.collection("admin_users").findOne({ username });
  await client.close();

  if (!user?.totpSecretEncrypted) {
    console.error(`❌ Could not resolve encrypted TOTP secret for user '${username}'.`);
    process.exit(1);
  }

  const plainSecret = decryptTotpSecret(user.totpSecretEncrypted);
  const token = authenticator.generate(plainSecret);
  const timeRemaining = 30 - Math.floor((Date.now() / 1000) % 30);

  console.log(`\n========================================`);
  console.log(` 🔑 LIVE MFA CODE FOR: ${username}`);
  console.log(`========================================`);
  console.log(` Current 6-Digit Code :  \x1b[1m\x1b[32m${token}\x1b[0m`);
  console.log(` Expires In           :  ${timeRemaining} seconds`);
  console.log(`========================================\n`);
}

main().catch((err) => {
  console.error("Failed to generate OTP:", err);
  process.exit(1);
});
