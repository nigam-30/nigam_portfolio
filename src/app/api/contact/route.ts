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
    let debugMessage = "";

    // A. Primary: Dispatch via Brevo Transactional Email REST API if configured
    if (process.env.BREVO_API_KEY) {
      try {
        const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "api-key": process.env.BREVO_API_KEY.trim(),
            Accept: "application/json",
          },
          body: JSON.stringify({
            sender: {
              name: `${sanitizedName} (Portfolio)`,
              email: recipientEmail,
            },
            to: [
              {
                name: "Nigam Mehta",
                email: recipientEmail,
              },
            ],
            replyTo: {
              name: sanitizedName,
              email: sanitizedEmail,
            },
            subject: `Portfolio Message from ${sanitizedName}`,
            htmlContent: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
                <h2 style="color: #0f172a; margin-top: 0; font-size: 20px; border-bottom: 2px solid #00d9ff; padding-bottom: 8px;">New Portfolio Contact Message</h2>
                <p style="margin: 12px 0; font-size: 14px; color: #334155;"><strong>From:</strong> ${sanitizedName} (&lt;<a href="mailto:${sanitizedEmail}" style="color: #0284c7;">${sanitizedEmail}</a>&gt;)</p>
                <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                  <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">${sanitizedMessage}</p>
                </div>
                <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0 16px 0;" />
                <p style="font-size: 12px; color: #64748b; margin: 0;">Sent directly from your portfolio contact form (nigam-portfolio.onrender.com)</p>
              </div>
            `,
          }),
        });

        if (brevoRes.ok) {
          delivered = true;
          debugMessage = "Delivered successfully via Brevo";
        } else {
          const errData = await brevoRes.text();
          debugMessage = `Brevo API error (${brevoRes.status}): ${errData}`;
          console.error("Brevo API error:", errData);
        }
      } catch (brevoErr) {
        debugMessage = `Brevo dispatch exception: ${brevoErr instanceof Error ? brevoErr.message : String(brevoErr)}`;
        console.error("Brevo dispatch error:", brevoErr);
      }
    } else {
      debugMessage = "BREVO_API_KEY environment variable is not defined";
    }

    // B. Fallback: FormSubmit direct webhook
    if (!delivered) {
      try {
        const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
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
          debugMessage += " | Fallback FormSubmit sent";
        } else {
          const fsErr = await formSubmitRes.text();
          debugMessage += ` | FormSubmit status ${formSubmitRes.status}: ${fsErr}`;
        }
      } catch (mailError) {
        debugMessage += ` | FormSubmit exception: ${mailError instanceof Error ? mailError.message : String(mailError)}`;
        console.error("Mail forward fallback error:", mailError);
      }
    }

    console.log(
      `[MESSAGE INBOX FORWARD] To: ${recipientEmail} | From: ${sanitizedName} <${sanitizedEmail}> | Status: ${
        delivered ? "SENT" : "QUEUED"
      } | Debug: ${debugMessage}`
    );

    return NextResponse.json({
      success: true,
      delivered,
      debug: debugMessage,
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
