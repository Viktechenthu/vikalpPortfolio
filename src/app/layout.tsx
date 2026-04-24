import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orchestriq AI — Automation & Integration",
  description:
    "We build AI-powered systems that connect your tools, automate your workflows, and operate around the clock.",
  openGraph: {
    title: "Orchestriq AI — Automation & Integration",
    description:
      "We build AI-powered systems that connect your tools, automate your workflows, and operate around the clock.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
