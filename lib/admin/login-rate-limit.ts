import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// In-memory fallback map for dev or when Upstash Redis is not yet provisioned
interface AttemptRecord {
  count: number;
  resetAt: number;
}
const localAttemptMap = new Map<string, AttemptRecord>();

let redisRateLimiter: Ratelimit | null = null;

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  try {
    redisRateLimiter = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(5, "10 m"), // 5 attempts per 10 minutes
      prefix: "devopstrio:admin:login",
    });
  } catch (err) {
    console.warn("Failed to initialize Upstash Redis rate limiter, using in-memory limiter:", err);
  }
}

export async function checkLoginRateLimit(identifier: string): Promise<{ success: boolean; remaining: number }> {
  if (redisRateLimiter) {
    try {
      const result = await redisRateLimiter.limit(identifier);
      return { success: result.success, remaining: result.remaining };
    } catch (err) {
      console.warn("Redis rate limit check failed, falling back to in-memory:", err);
    }
  }

  // In-memory rate limiter fallback (5 attempts per 10 minutes)
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const maxAttempts = 5;

  const record = localAttemptMap.get(identifier);

  if (!record || now > record.resetAt) {
    localAttemptMap.set(identifier, { count: 1, resetAt: now + windowMs });
    return { success: true, remaining: maxAttempts - 1 };
  }

  if (record.count >= maxAttempts) {
    return { success: false, remaining: 0 };
  }

  record.count += 1;
  return { success: true, remaining: maxAttempts - record.count };
}

export function resetLoginRateLimit(identifier: string): void {
  localAttemptMap.delete(identifier);
}
