import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

// Initialize Upstash Redis
const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

// Contact form rate limiter (3 submissions per IP per 1 hour)
const contactRatelimit = redis
  ? new Ratelimit({
      redis: redis,
      limiter: Ratelimit.slidingWindow(3, "1 h"),
      analytics: true,
      prefix: "@upstash/ratelimit/contact",
    })
  : null;

// Helper to sanitize HTML tags
function sanitizeInput(str: string): string {
  if (typeof str !== "string") return "";
  return str.replace(/<[^>]*>/g, "").trim();
}

// Helper to validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    // 1. Rate Limiting Check
    const ip = request.ip ?? request.headers.get("x-forwarded-for") ?? "127.0.0.1";

    if (contactRatelimit) {
      try {
        const { success, reset } = await contactRatelimit.limit(ip);
        if (!success) {
          const retryAfter = Math.max(0, Math.ceil((reset - Date.now()) / 1000));
          return new NextResponse(
            JSON.stringify({ error: "Too many contact submissions. Please try again later." }),
            {
              status: 429,
              headers: {
                "Content-Type": "application/json",
                "Retry-After": retryAfter.toString(),
              },
            }
          );
        }
      } catch (redisError) {
        // Fail open on Redis errors to ensure availability
        console.error("Contact rate limit error:", redisError);
      }
    }

    // 2. Parse request body
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
    }

    const { name, email, message } = body;

    // 3. Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (typeof name !== "string" || name.length > 50) {
      return NextResponse.json({ error: "Invalid name format or length." }, { status: 400 });
    }

    if (typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
    }

    if (typeof message !== "string" || message.length > 500) {
      return NextResponse.json({ error: "Invalid message format or length." }, { status: 400 });
    }

    // 4. Sanitization
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);

    // Double check that sanitization didn't empty out fields
    if (!sanitizedName || !sanitizedEmail || !sanitizedMessage) {
      return NextResponse.json({ error: "Invalid input content." }, { status: 400 });
    }

    // 5. Form Processing
    console.log(
      `[SECURE SUBMISSION] Name: ${sanitizedName}, Email: ${sanitizedEmail}, Message: ${sanitizedMessage}`
    );

    // Return success
    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    // Return generic error message only, never expose internal details
    console.error("Contact API Route error:", error);
    return NextResponse.json(
      { error: "An error occurred while sending your message." },
      { status: 500 }
    );
  }
}
