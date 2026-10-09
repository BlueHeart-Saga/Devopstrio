/**
 * Devopstrio Local Testing Helper - Get Live MFA Code
 * 
 * Usage:
 *   npx tsx scripts/get-otp.ts superadmin
 *   npx tsx scripts/get-otp.ts hr.admin
 *   npx tsx scripts/get-otp.ts marketing.admin
 */

import { connectToDatabase } from "../lib/mongodb";
import { decryptTotpSecret } from "../lib/admin/mfa";
import { authenticator } from "otplib";

const KNOWN_SECRETS: Record<string, string> = {
  "superadmin": "KIRHA2CHM4YTEOJW",
  "hr.admin": "CRAGGNIDJB5RYZIU",
  "marketing.admin": "DFUC6W3VGRHGYZLA",
};

async function main() {
  const username = (process.argv[2] || "superadmin").toLowerCase();
  let plainSecret = KNOWN_SECRETS[username] || "";

  try {
    const { db } = await connectToDatabase();
    const user = await db.collection("admin_users").findOne({ username });
    if (user?.totpSecretEncrypted) {
      plainSecret = decryptTotpSecret(user.totpSecretEncrypted);
    }
  } catch (err) {
    // If DB is not connected locally, use configured secret
  }

  if (!plainSecret) {
    console.error(`❌ Could not resolve TOTP secret for '${username}'.`);
    process.exit(1);
  }

  const token = authenticator.generate(plainSecret);
  const timeRemaining = 30 - Math.floor((Date.now() / 1000) % 30);

  console.log(`\n========================================`);
  console.log(` 🔑 LIVE MFA CODE FOR: ${username}`);
  console.log(`========================================`);
  console.log(` Current 6-Digit Code :  \x1b[1m\x1b[32m${token}\x1b[0m`);
  console.log(` Expires In           :  ${timeRemaining} seconds`);
  console.log(` Secret Key (Base32)  :  ${plainSecret}`);
  console.log(`========================================\n`);
}

main().catch(console.error);
