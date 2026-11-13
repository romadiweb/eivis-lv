import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";
import "./_components/home-cta.css";
import "./_components/home-hero.css";
import "./_components/home-feature-layout.css";
import "./_components/platform-steps.css";
import "./_components/integrations-card.css";
import "@/components/site-footer/site-footer.css";
import "@/components/site-header/site-header.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const secondary = JetBrains_Mono({
  variable: "--font-secondary",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Eivis",
  description: "A clean starting canvas for Eivis.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="lv"
      className={`${geistSans.variable} ${geistMono.variable} ${secondary.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
