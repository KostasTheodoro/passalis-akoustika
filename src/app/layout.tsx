import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

import type { Metadata } from "next";
import Script from "next/script";
import { defaultMetadata, orgJsonLd, websiteJsonLd } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <head>
        <meta name="msvalidate.01" content="7052D126EF24449A4DF24841FFCD2A38" />
        <Script
          id="ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd()) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
      </head>
      <body className="bg-light-bg">
        <Navbar />
        <main>{children}</main>
        <Footer />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
