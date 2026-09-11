import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const SiliconCursor = dynamic(() => import("@/components/SiliconCursor"), {
  ssr: false,
});

const SiliconParticles = dynamic(() => import("@/components/SiliconParticles"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Nigam Mehta | VLSI & AI Hardware Engineer",
  description:
    "Professional portfolio of Nigam Mehta, an Electronics Engineering student at SAKEC Mumbai specializing in VLSI Design, RTL Design, ASIC Verification, and AI Hardware.",
  keywords:
    "Nigam Mehta, VLSI Design, ASIC Verification, RTL Design, AI Hardware, Semiconductor Engineering, SAKEC, Verilog, Data Analytics",
  authors: [{ name: "Nigam Mehta" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {/* Custom Silicon Cursor */}
        <SiliconCursor />

        {/* Ambient Electron / Trace Particles */}
        <SiliconParticles />

        {/* Background Ambient Orbs */}
        <div className="orb-container">
          <div className="orb orb-purple"></div>
          <div className="orb orb-cyan"></div>
          <div className="orb orb-emerald"></div>
        </div>

        {children}
      </body>
    </html>
  );
}
