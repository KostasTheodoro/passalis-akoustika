import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    <html lang="el" className={inter.className}>
      <body>
        <Navbar />
        <main className="bg-light-bg ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
