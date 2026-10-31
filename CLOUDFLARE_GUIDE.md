# Deploying Nigam Portfolio to Cloudflare Pages

This guide walks you through deploying this Next.js 14 portfolio to **Cloudflare Pages**.

---

## What was already prepared in the code:
- Added `export const runtime = "edge";` to `src/app/api/contact/route.ts` so your contact API and rate limiter run natively on Cloudflare's global Edge network.
- Verified local Next.js build (`npm run build`) compiles with zero errors.

---

## Step-by-Step Deployment Instructions

### 1. Push your changes to GitHub
In your terminal, commit and push the updated route file:
```bash
git add src/app/api/contact/route.ts
git commit -m "Configure contact API for Cloudflare Edge runtime"
git push origin main
```

---

### 2. Connect to Cloudflare Pages
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) and log in (or create a free account).
2. In the left navigation, click **Workers & Pages**.
3. Click the blue **Create application** button, then select the **Pages** tab.
4. Click **Connect to Git** and choose your GitHub repository (`Nigam-Portfolio` or your repo name).
5. Click **Begin setup**.

---

### 3. Configure Build Settings
Fill in the deployment settings as follows:

| Field | Value |
|---|---|
| **Project name** | `nigam-portfolio` (or your choice) |
| **Production branch** | `main` |
| **Framework preset** | **Next.js** |
| **Build command** | `npx @cloudflare/next-on-pages@1` |
| **Build output directory** | `.vercel/output/static` |

---

### 4. Set Compatibility Flag (Important)
Before hitting save, or immediately after in **Settings > Functions**:
- Under **Compatibility flags**, add:
  - Flag name: `nodejs_compat` (for both Production and Preview)

---

### 5. Add Environment Variables
Expand **Environment variables (advanced)** and add your secrets:

| Variable | Description |
|---|---|
| `BREVO_API_KEY` | Your Brevo (Sendinblue) API key for sending contact emails |
| `UPSTASH_REDIS_REST_URL` | *(Optional)* Upstash Redis REST URL for spam protection |
| `UPSTASH_REDIS_REST_TOKEN` | *(Optional)* Upstash Redis REST Token |
| `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` | *(Optional)* hCaptcha site key if enabled |
| `HCAPTCHA_SECRET_KEY` | *(Optional)* hCaptcha secret key if enabled |

---

### 6. Deploy!
Click **Save and Deploy**.
Cloudflare will:
1. Pull your code.
2. Build the Next.js pages and edge functions on their cloud Linux servers.
3. Give you a live URL like `https://nigam-portfolio.pages.dev` in ~1-2 minutes!
