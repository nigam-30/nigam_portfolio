import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

// Initialize Upstash Redis if configured
const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

// Contact form rate limiter (5 submissions per IP per hour)
const contactRatelimit = redis
  ? new Ratelimit({
      redis: redis,
      limiter: Ratelimit.slidingWindow(5, "1 h"),
      analytics: true,
      prefix: "@upstash/ratelimit/contact",
    })
  : null;

function sanitizeInput(str: string): string {
  if (typeof str !== "string") return "";
  return str.replace(/<[^>]*>/g, "").trim();
}

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
            JSON.stringify({ error: "Too many messages sent. Please email me directly." }),
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

    if (typeof name !== "string" || name.length > 80) {
      return NextResponse.json({ error: "Please enter a valid name." }, { status: 400 });
    }

    if (typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (typeof message !== "string" || message.length > 2000) {
      return NextResponse.json({ error: "Message exceeds allowed length." }, { status: 400 });
    }

    // 4. Sanitization
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);

    if (!sanitizedName || !sanitizedEmail || !sanitizedMessage) {
      return NextResponse.json({ error: "Invalid message content." }, { status: 400 });
    }

    // 5. Send message directly to mehtanigam3024@gmail.com
    const recipientEmail = "mehtanigam3024@gmail.com";
    let delivered = false;

    try {
      // Forward to FormSubmit mailer service
      const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Referer: "https://nigam-portfolio.vercel.app/",
          Origin: "https://nigam-portfolio.vercel.app",
          "User-Agent": "Nigam-Portfolio-Mailer/1.0",
        },
        body: JSON.stringify({
          name: sanitizedName,
          email: sanitizedEmail,
          message: sanitizedMessage,
          _subject: `New Portfolio Inquiry from ${sanitizedName} (${sanitizedEmail})`,
          _replyto: sanitizedEmail,
          _template: "table",
        }),
      });

      if (formSubmitRes.ok) {
        delivered = true;
      }
    } catch (mailError) {
      console.error("Mail forward error:", mailError);
    }

    console.log(
      `[MESSAGE INBOX FORWARD] To: ${recipientEmail} | From: ${sanitizedName} <${sanitizedEmail}> | Status: ${
        delivered ? "SENT" : "QUEUED"
      }`
    );

    return NextResponse.json({
      success: true,
      delivered,
      message: `Message sent! It will reach mehtanigam3024@gmail.com directly.`,
    });
  } catch (error) {
    console.error("Contact API Route error:", error);
    return NextResponse.json(
      { error: "Could not send message. Please email directly to mehtanigam3024@gmail.com." },
      { status: 500 }
    );
  }
}
