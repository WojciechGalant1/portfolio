import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Wojciech Galant | Full-Stack Developer",
    template: "%s | Wojciech Galant",
  },
  description:
    "Full-stack developer building real-world systems — inventory, management, and SaaS applications with React, Laravel, and NestJS.",
  openGraph: {
    title: "Wojciech Galant | Full-Stack Developer",
    description:
      "Full-stack developer building real-world systems — inventory, management, and SaaS applications with React, Laravel, and NestJS.",
    type: "website",
    locale: "en_US",
    url: "https://wojciechgalant.dev",
    siteName: "Wojciech Galant Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wojciech Galant | Full-Stack Developer",
    description:
      "Full-stack developer building real-world systems with React, Laravel, and NestJS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
