import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["greek"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ακουστικά Πασσαλής",
  description: "Ανακάλυψτε τα καλύτερα ακουστικά βαρυκοίας",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body className={inter.className}></body>
      <Navbar />
      <main>{children}</main>
    </html>
  );
}
