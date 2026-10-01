# Electronics Engineering (VLSI Design & Technology) — Nigam Mehta

A modern, high-performance digital hardware and semiconductor engineering portfolio for **Nigam Mehta**, an Electronics Engineering student specializing in **VLSI Design & Technology** at SAKEC Mumbai. Engineered to showcase synthesizable RTL architectures, FPGA implementations, ASIC verification flows, embedded computing, and AI hardware acceleration.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, designed around a restrained silicon dark aesthetic (`#07090D`) with electric cyan accents (`#00D9FF`).

[![Live Site](https://img.shields.io/badge/Live_Site-nigam--portfolio.vercel.app-00D9FF?style=for-the-badge&logo=vercel&logoColor=black)](https://nigam-portfolio.vercel.app/)
[![GitHub Profile](https://img.shields.io/badge/GitHub-nigam--30-8B5CF6?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nigam-30)

---

## ⚡ Core Highlights & Architectural Features

- **Semiconductor Engineering Identity**: Minimalist, high-signal dark theme inspired by modern silicon design labs, NVIDIA/AMD technical aesthetics, and clean hardware documentation.
- **Deep Architectural Case Studies**: Dedicated case study routes (`/projects/[id]`) for major projects with timing closure metrics, gate-level schematics, simulation waveforms, and embedded PDF reports.
- **Featured Hardware IP Showcase**: Detailed technical presentations of synthesizable RTL designs, including an 8-bit Moore FSM sensor monitor with AMBA APB4 bus integration and an 8-bit 3-stage pipelined RISC processor.
- **Hardware Telemetry & Metrics**: Verifiable post-synthesis FPGA implementation figures (100 MHz clock closure, +6.720 ns WNS margin, Slice LUT and register utilization on Xilinx Spartan-7 fabric).
- **Categorized Engineering Skills**: Granular breakdown of RTL Design & HDL (Verilog, SystemVerilog), EDA & Simulation workflows (Vivado, Yosys, ModelSim), Embedded Systems, and AI Hardware tooling.
- **Experience & Education Timeline**: Interactive chronological view of industry training, internships, and academic coursework at SAKEC Mumbai.
- **Direct Inbox Dispatch**: Server-validated contact form with automatic dispatch to `mehtanigam3024@gmail.com` and one-click mail client fallback.
- **Fully Responsive & Accessible**: Zero-layout-shift architecture optimized for mobile, tablet, and desktop viewports with fast server-side generation.

---

## 📊 Featured Engineering Projects & Technical Documentation

| Project | Domain | Architecture & Stack | Repository & Demo | Documentation & Reports |
| :--- | :--- | :--- | :--- | :--- |
| **Design of a Modular Digital Data Monitoring Unit** | `Digital IP / RTL` | Verilog HDL, AMBA APB4 Slave, Moore FSM, Spartan-7 FPGA, Yosys | [🔗 GitHub Repo](https://github.com/nigam-30/Design-of-a-Modular-Digital-Data-Monitoring-Unit) | [📄 Phase 1 Report (PDF)](public/reports/Digital_data_monitor_Phase_1_report.pdf)<br>[📄 Phase 2 Report (PDF)](public/reports/Digital_data_monitor_Phase_2_Report.pdf) |
| **8-bit Pipelined Processor** | `Processor Architecture` | Synthesizable Verilog HDL, 3-Stage Pipeline, RAW Hazard Unit, Vivado XSim | [🔗 GitHub Repo](https://github.com/nigam-30/pipelined_processor) | [📄 Processor Report (PDF)](public/reports/Pipelined_Processor_Project_Report.pdf) |
| **EntropyX — Cryptographic Suite & Vault** | `Systems / Cryptography` | C++14 Engine (>400k ops/sec), AES-256-GCM, PBKDF2, Bloom Filter, React 19 | [🔗 GitHub Repo](https://github.com/nigam-30/entropyx)<br>[🌐 Live Demo](https://entropyx-password-suite.vercel.app/) | [📄 EntropyX Report (PDF)](public/reports/Entropyx_Project_Report.pdf) |
| **Bank Management System** | `High-Throughput Systems` | C++ STL backend (`std::unordered_map`), Python Flask REST API, File I/O | [🔗 GitHub Repo](https://github.com/nigam-30/Bank-Management-System) | [📄 Bank System Report (PDF)](public/reports/Bank_System_Project_Report.pdf) |
| **Rail Nova** | `Distributed Systems` | Python FastAPI, SQLite, SQLAlchemy ORM, WebSockets, JWT Auth | [🔗 GitHub Repo](https://github.com/nigam-30/Rail-Nova) | [📄 Rail Nova Report (PDF)](public/reports/Rail_Nova_Project_Report.pdf) |
| **Telecom Customer Churn Analytics** | `ML / Predictive Analytics` | Python, SQL, Scikit-learn, SMOTE Resampling, SHAP Explainability, Power BI | [🔗 GitHub Repo](https://github.com/nigam-30/Telecom_Churn_Analysis) | [📄 Churn Report (PDF)](public/reports/Telecom_Churn_Analysis_Report.pdf) |

---

## 📂 Repository Structure

```text
├── public/
│   ├── certificates/             # Verified credential documents & badges
│   ├── projects/                 # Gate-level schematics & simulation waveform diagrams
│   ├── reports/                  # Engineering reports & project documentation (PDFs)
│   ├── profile.jpg               # Professional engineer profile photograph
│   └── resume.pdf                # Downloadable engineering resume
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts  # Contact endpoint with direct dispatch to mehtanigam3024@gmail.com
│   │   ├── projects/[id]/page.tsx# Deep-dive architectural case study pages
│   │   ├── globals.css           # Global typography & dark palette variables
│   │   ├── layout.tsx            # Root metadata, OpenGraph, and font definitions
│   │   └── page.tsx              # Single-page application root
│   ├── components/
│   │   ├── About.tsx             # Editorial biography & engineering focus areas
│   │   ├── Certifications.tsx    # Credential badges modal & verification links
│   │   ├── Contact.tsx           # Contact form with direct inbox dispatch
│   │   ├── CurrentlyBuilding.tsx # Real-time active research & hardware prototypes
│   │   ├── EngineeringMetrics.tsx# Quantitative post-synthesis hardware metrics
│   │   ├── Experience.tsx        # Career & internship chronological timeline
│   │   ├── Footer.tsx            # Footer & copyright notices
│   │   ├── Hero.tsx              # Minimalist hero with key tags & profile presentation
│   │   ├── Navbar.tsx            # Sticky floating glassmorphic navigation
│   │   ├── OpenSource.tsx        # Open-source contributions & repositories
│   │   ├── Projects.tsx          # Featured work grid with direct case study links
│   │   └── Skills.tsx            # Categorized hardware, EDA, software, and AI skills
│   └── data/
│       └── projectsData.ts       # Structured hardware specifications & case study data
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies & scripts
├── tailwind.config.ts            # Design tokens & color system configuration
└── tsconfig.json                 # TypeScript compiler configuration
```

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React 18, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email Forwarding**: [FormSubmit](https://formsubmit.co/) direct dispatch to `mehtanigam3024@gmail.com`

---

## 💻 Local Setup & Development

### 1. Prerequisites
- [Node.js (v18.x or later)](https://nodejs.org/)
- `npm` (bundled with Node.js)

### 2. Installation
```bash
git clone https://github.com/nigam-30/nigam_portfolio.git
cd nigam_portfolio
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🚀 Deployment

The site is configured for continuous deployment on [Vercel](https://vercel.com/):
- Any push to `main` automatically triggers an optimized production build and deployment.
- Static generation (SSG) pre-renders all project routes and case studies for optimal performance and SEO.

---

## 📄 License & Attribution

Designed and engineered by **[Nigam Mehta](https://github.com/nigam-30)**. Open for personal showcase and portfolio reference.
