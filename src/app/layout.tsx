import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import ScrollToTopOnRefresh from "@/components/ScrollToTopOnRefresh";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F8FA" },
    { media: "(prefers-color-scheme: dark)", color: "#07090D" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Nigam Mehta — VLSI & Digital Hardware Engineer",
  description:
    "Portfolio of Nigam Mehta: B.Tech in Electronics Engineering specializing in VLSI Design & Technology, RTL Implementation, FPGA Prototyping, ASIC Verification, and AI Hardware Architectures.",
  keywords: [
    "Nigam Mehta",
    "VLSI Design",
    "RTL Design",
    "Digital Hardware",
    "FPGA",
    "ASIC Verification",
    "AI Hardware",
    "Verilog HDL",
    "SystemVerilog",
    "AMBA APB4",
    "Xilinx Vivado",
    "SAKEC Mumbai",
  ],
  authors: [{ name: "Nigam Mehta", url: "https://github.com/nigam-30" }],
  creator: "Nigam Mehta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nigam-portfolio.vercel.app/",
    title: "Nigam Mehta — VLSI & Digital Hardware Engineer",
    description:
      "Digital hardware design for intelligent systems. RTL Design · ASIC · FPGA · AI Hardware.",
    siteName: "Nigam Mehta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nigam Mehta — VLSI & Digital Hardware Engineer",
    description:
      "Digital hardware design for intelligent systems. RTL Design · ASIC · FPGA · AI Hardware.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-portfolio-bg text-portfolio-text min-h-screen selection:bg-portfolio-accent selection:text-black`}
      >
        <ThemeProvider>
          <ScrollToTopOnRefresh />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
