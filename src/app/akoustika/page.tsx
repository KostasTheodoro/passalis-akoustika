// app/akoustika/page.tsx
import { hearingTypes } from "@/data/hearingTypes";
import { HearingTypeCard } from "@/components/HearingTypeCard";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import Script from "next/script";

export const metadata = pageMeta({
  title: "Τύποι Ακουστικών Βαρηκοΐας – CIC, RIC, BTE, Επαναφορτιζόμενα",
  description:
    "Δείτε όλους τους τύπους ακουστικών βαρηκοΐας: CIC, RIC, BTE και Charge&Go. Βρείτε τη σωστή λύση για τις ανάγκες και τον τρόπο ζωής σας.",
  path: "/akoustika",
  keywords: ["CIC", "RIC", "BTE", "Charge&Go"],
});

export default function Akoustika() {
  return (
    <>
      <Script
        id="ld-breadcrumb-akoustika"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Αρχική", path: "/" },
              { name: "Ακουστικά", path: "/akoustika" },
            ])
          ),
        }}
      />

      <main className="min-h-screen py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-12">
            Τύποι Ακουστικών Βαρηκοΐας
          </h1>
          {hearingTypes.map((type) => (
            <HearingTypeCard key={type.slug} type={type} />
          ))}
        </div>
      </main>
    </>
  );
}
