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
  metadataBase: new URL("https://artemis.endless-summer.online"),
  title: "Artemis II | Returning to Deep Space",
  description:
    "A multi-page commemorative site exploring Artemis II, its crew, its mission profile, its Apollo legacy, and the future of human lunar exploration.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Artemis II | Returning to Deep Space",
    description:
      "A multi-page commemorative site exploring Artemis II, its crew, mission profile, Apollo legacy, and the future of human lunar exploration.",
    url: "https://artemis.endless-summer.online",
    siteName: "Artemis II",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artemis II | Returning to Deep Space",
    description:
      "A multi-page commemorative site exploring Artemis II, its crew, mission profile, Apollo legacy, and the future of human lunar exploration.",
  },
  verification: {
    google: "obtrA6EzPleBvdmWK2R-LnUbE-sQRc3C1Oqrj7qcQYw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Script
          id="structured-data-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Artemis II",
              url: "https://artemis.endless-summer.online",
              description:
                "A multi-page guide to Artemis II covering the crew, mission profile, Apollo legacy, technology comparisons, and future lunar missions.",
            }),
          }}
        />
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
