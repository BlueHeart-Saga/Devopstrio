import { createCipheriv, createDecipheriv, randomBytes, createHash } from "node:crypto";
import { authenticator } from "otplib";

// Allow 2 steps (±60s) window for clock drift between user device and cloud server
authenticator.options = {
  window: 2,
  step: 30,
};

function getEncryptionKey(): Buffer {
  const key = process.env.MFA_ENCRYPTION_KEY || process.env.AUTH_SECRET || "devopstrio-mfa-default-dev-secret-key-2026";

  // If 64-char hex string (32 bytes)
  if (/^[0-9a-f]{64}$/i.test(key)) {
    return Buffer.from(key, "hex");
  }

  // Otherwise SHA-256 hash to guarantee 32-byte key for AES-256
  return createHash("sha256").update(key).digest();
}

/**
 * Encrypt a plain TOTP secret using AES-256-GCM
 */
export function encryptTotpSecret(secret: string): string {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", getEncryptionKey(), iv);

  const encrypted = Buffer.concat([
    cipher.update(secret, "utf8"),
    cipher.final(),
  ]);

  return [
    iv.toString("hex"),
    cipher.getAuthTag().toString("hex"),
    encrypted.toString("hex"),
  ].join(".");
}

/**
 * Decrypt an AES-256-GCM encrypted TOTP secret
 */
export function decryptTotpSecret(encoded: string): string {
  const [iv, tag, data] = encoded.split(".");

  if (!iv || !tag || !data) {
    throw new Error("Invalid MFA encrypted secret format");
  }

  const decipher = createDecipheriv(
    "aes-256-gcm",
    getEncryptionKey(),
    Buffer.from(iv, "hex")
  );

  decipher.setAuthTag(Buffer.from(tag, "hex"));

  return Buffer.concat([
    decipher.update(Buffer.from(data, "hex")),
    decipher.final(),
  ]).toString("utf8");
}

/**
 * Generate a new random base32 TOTP secret
 */
export function generateTotpSecret(): string {
  return authenticator.generateSecret();
}

/**
 * Generate standard otpauth:// URI for QR code generation
 */
export function generateTotpUri(username: string, secret: string, issuer = "Devopstrio Admin"): string {
  return authenticator.keyuri(username, issuer, secret);
}

/**
 * Verify a 6-digit TOTP token against an encrypted or raw base32 secret
 */
export function verifyTotp(encryptedSecret: string, token: string): boolean {
  const cleanToken = token.replace(/\s+/g, "").trim();
  if (!/^\d{6}$/.test(cleanToken)) return false;

  const raw = (encryptedSecret || "").trim();
  if (!raw) return false;

  // 1. Direct check if secret is raw Base32 (16 to 32 chars)
  if (/^[A-Z2-7]{16,32}$/i.test(raw)) {
    try {
      if (authenticator.check(cleanToken, raw.toUpperCase())) return true;
    } catch {}
  }

  // 2. Try AES-256-GCM decryption
  try {
    const plainSecret = decryptTotpSecret(raw);
    if (authenticator.check(cleanToken, plainSecret)) return true;
  } catch {}

  // 3. Fallback direct check
  try {
    return authenticator.check(cleanToken, raw);
  } catch {
    return false;
  }
}
