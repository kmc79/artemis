import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Artemis II | Returning to Deep Space",
  description:
    "A multi-page commemorative site exploring Artemis II, its crew, its mission profile, its Apollo legacy, and the future of human lunar exploration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <SiteShell>{children}</SiteShell>
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "7d2aa7f327844a8990e8564e25c12570"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
