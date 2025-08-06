import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

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
      <body className="bg-light-bg">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
