import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { JetBrains_Mono } from "next/font/google";
import { profile } from "@/config/profile";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.metaDescription,
  applicationName: `${profile.name} — ${profile.title}`,
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    profile.name,
    "Bug Hunter",
    "Security Engineer",
    "Application Security",
    "Penetration Testing",
    "Vulnerability Research",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    siteName: `${profile.name} — ${profile.title}`,
    title: `${profile.name} — ${profile.title}`,
    description: profile.metaDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: `${profile.name} — ${profile.title}`,
    description: profile.metaDescription,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#08070D",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full font-mono antialiased">
        <a
          href="#whoami"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:border focus:border-line focus:bg-surface focus:px-3 focus:py-2 focus:text-[13px] focus:text-highlight"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
