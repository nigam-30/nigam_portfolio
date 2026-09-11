# Nigam Mehta — Electronics Engineering [VLSI DESIGN & TECHNOLOGY]

A modern, high-performance, responsive portfolio website engineered for **Nigam Mehta**, specializing in **VLSI Design & Technology, RTL Engineering, ASIC Verification, and Edge AI Hardware**.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, styled with an **EUV Lithography & Cobalt EDA** semiconductor dark aesthetic.

---

## ⚡ Core Features

- **EUV Lithography & Cobalt EDA Dark UI**: Tailored semiconductor cleanroom aesthetic featuring wafer micro-grids, interactive 3D circuit tilt cards, PCB traces, and silicon particle visual effects.
- **Interactive Top Navbar**: Sticky glassmorphic navigation bar with smooth section anchors and active state telemetry indicator.
- **Hero & Hardware Profile Bezel**: CRT-style profile photo frame with telemetry pins, system specs badges, and live online signal indicators.
- **About & Academic Profile**: Educational timeline detailing academic achievements at **SAKEC Mumbai** (B.Tech in Electronics Engineering — VLSI Design & Technology).
- **Featured Projects Grid**: Comprehensive showcase of hardware RTL designs, systems engineering, machine learning pipelines, and full-stack simulators with embedded direct PDF report viewers and GitHub repository links.
- **Experience Timeline**: Chronological interactive timeline of internships and industrial training programs.
- **Grouped Skills & Domains**: Structured categorizations across VLSI/Hardware, Embedded Systems, AI/ML, Software, and Cybersecurity.
- **Certifications Gallery**: Dynamic badge grid linking verified credentials from Cisco, IBM, Maven Silicon, OpenEDG, and Forage.
- **Secure Contact & Social Hub**: Direct links to GitHub, LinkedIn, and email, with rate-limited contact API support.

---

## 📂 Repository Structure

```text
├── public/
│   ├── certificates/             # Internship & course certification documents (PDFs & images)
│   ├── reports/                  # Project reports & technical documentation PDFs
│   │   ├── Bank_System_Project_Report.pdf
│   │   ├── Data Monitoring Unit Phase 1 Report.pdf
│   │   ├── Data Monitoring Unit Phase 2 Report.pdf
│   │   ├── Pipelined_Processor_Project_Report.pdf
│   │   ├── Rail_Nova_Project_Report.pdf
│   │   └── Telecom_Churn_Analysis_Report.pdf
│   ├── profile.jpg               # Profile photograph
│   └── resume.pdf                # Downloadable resume
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts  # Contact endpoint with Upstash Redis rate-limiting
│   │   ├── globals.css           # Global Tailwind CSS & EUV Cobalt theme variables
│   │   ├── layout.tsx            # Root HTML metadata & font definitions
│   │   └── page.tsx              # Single-page application root
│   └── components/
│       ├── About.tsx             # About section & education cards
│       ├── Certifications.tsx    # Certifications modal & badge grid
│       ├── CircuitSectionHeader.tsx # Reusable hardware-styled section header
│       ├── Contact.tsx           # Contact form & social channels
│       ├── Experience.tsx        # Career & internship timeline
│       ├── Footer.tsx            # Footer & copyright notices
│       ├── Hero.tsx              # Hero banner with profile photo & specs
│       ├── Navbar.tsx            # Sticky glassmorphic navigation bar
│       ├── Projects.tsx          # Featured projects with report viewers & GitHub links
│       ├── SiliconCursor.tsx     # Custom interactive circuit reticle cursor
│       ├── SiliconParticles.tsx  # Canvas-based ambient particle background
│       ├── Skills.tsx            # Categorized skills matrix
│       ├── TiltCircuitCard.tsx   # 3D gyroscope tilt container with animated circuit border
│       └── icons.tsx             # Custom SVG icons
├── .env.example                  # Template for environment variables
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies & scripts
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS design system configuration
├── test-site.bat                 # One-click Windows development & production build runner
├── tsconfig.json                 # TypeScript compiler configuration
└── vercel.json                   # Deployment configuration
```

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React 18, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & HTML5 Canvas Particles
- **Icons**: [Lucide React](https://lucide.dev/)
- **Rate Limiting (Optional)**: [Upstash Redis](https://upstash.com/) & `@upstash/ratelimit`

---

## 💻 Local Setup & Development

### 1. Prerequisites
- [Node.js (v18.x or later)](https://nodejs.org/)
- `npm` (bundled with Node.js)

### 2. Installation
Clone the repository and install all packages:
```bash
git clone https://github.com/nigam-30/portfolio-website.git
cd portfolio-website
npm install
```

### 3. One-Click Windows Runner (Recommended)
Double-click [`test-site.bat`](test-site.bat) to launch the interactive control panel:
- **Option [1]**: Starts the Next.js dev server and automatically opens `http://localhost:3000` in your browser.
- **Option [2]**: Runs a clean production build test.
- **Option [3]**: Builds and starts the production server.
- **Option [4]**: Clears the `.next` build cache.

### 4. Manual Commands
```bash
# Start development server with hot-reload
npm run dev

# Run production build compilation
npm run build

# Start production server
npm run start
```

---

## 🚀 Deployment

### Deploy to Vercel (Zero-Config)
1. Push your code to your GitHub repository.
2. Head to the [Vercel Dashboard](https://vercel.com/new) and click **Add New Project**.
3. Select your `portfolio-website` repository.
4. Framework preset will automatically be detected as **Next.js**.
5. Click **Deploy**.

---

## 📄 License & Attribution

Designed and engineered by **[Nigam Mehta](https://github.com/nigam-30)**. Open for personal showcase and portfolio reference.
