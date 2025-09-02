import { Hero } from "@/components/Hero";
import { Favorites } from "@/components/Favorites";
import { Services } from "@/components/ServicesSection";
import { SigniaApp } from "@/components/SigniaApp";
import EOPYYCard from "@/components/Eoppy";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import Script from "next/script";

export const metadata = pageMeta({
  title: "Ακουστικά Βαρηκοΐας στο Μαρούσι – Πασσαλής Ακουστικά",
  description:
    "Δωρεάν έλεγχος ακοής, εξατομικευμένη εφαρμογή και πλήρη υποστήριξη μετά την αγορά. Ακουστικά βαρηκοΐας στο Μαρούσι με συμμετοχή ΕΟΠΥΥ 450€.",
  path: "/",
  keywords: ["ακουστικά βαρηκοΐας Μαρούσι", "έλεγχος ακοής", "ΕΟΠΥΥ ακουστικά"],
});

export default function Home() {
  return (
    <>
      {" "}
      <Script
        id="ld-breadcrumb-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: "Αρχική", path: "/" }])
          ),
        }}
      />
      <main className="">
        <Hero />
        <Services />
        <EOPYYCard />
        <Favorites />
        <SigniaApp />
      </main>
    </>
  );
}
