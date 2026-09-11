import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

// Initialize Upstash Redis client
// Note: We use try/catch inside functions or check existence to avoid throwing build errors
const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

// General API rate limiter (20 requests per 60 seconds)
const apiRatelimit = redis
  ? new Ratelimit({
      redis: redis,
      limiter: Ratelimit.slidingWindow(20, "60 s"),
      analytics: true,
      prefix: "@upstash/ratelimit/api",
    })
  : null;

export async function middleware(request: NextRequest) {
  // Only apply rate limiting to /api/* endpoints
  if (request.nextUrl.pathname.startsWith("/api")) {
    if (!apiRatelimit) {
      // If Upstash configuration is missing (e.g. during dev setup without keys),
      // we fail open and allow the request through.
      return NextResponse.next();
    }

    const ip = request.ip ?? request.headers.get("x-forwarded-for") ?? "127.0.0.1";

    try {
      const { success, reset } = await apiRatelimit.limit(ip);

      if (!success) {
        const retryAfter = Math.max(0, Math.ceil((reset - Date.now()) / 1000));
        return new NextResponse(
          JSON.stringify({ error: "Too many requests. Please try again later." }),
          {
            status: 429,
            headers: {
              "Content-Type": "application/json",
              "Retry-After": retryAfter.toString(),
            },
          }
        );
      }
    } catch (error) {
      // Fail open on Redis connection/execution failures to ensure high availability
      console.error("General API rate limiting error:", error);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
