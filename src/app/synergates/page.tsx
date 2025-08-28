import Link from "next/link";
import Image from "next/image";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import Script from "next/script";

export const metadata = pageMeta({
  title: "Συνεργάτες – ΕΟΠΥΥ & Πάροχοι | Πασσάλης Ακουστικά",
  description:
    "Ενημερωθείτε για επιδότηση ΕΟΠΥΥ και δείτε τους επίσημους παρόχους ακουστικών βαρηκοΐας (Signia, Siemens, Rexton, A&M).",
  path: "/synergates",
});

export default function SynergatesPage() {
  return (
    <>
      <Script
        id="ld-breadcrumb-synergates"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Αρχική", path: "/" },
              { name: "Συνεργάτες", path: "/synergates" },
            ])
          ),
        }}
      />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-primary mb-12">
          Οι Συνεργάτες μας
        </h1>

        <div className="bg-white rounded-2xl shadow-lg px-8 py-10 mb-14 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
            ΕΟΠΥΥ
          </h2>
          <div className="flex flex-col md:flex-row items-center w-full md:gap-8 mb-8">
            <div className="relative w-48 h-48 flex-shrink-0 mx-auto md:mx-0">
              <Image
                src="/eopyy.png"
                alt="ΕΟΠΥΥ"
                fill
                className="rounded-xl object-contain "
                unoptimized
                priority
              />
            </div>
            <div className="md:w-2/3 text-center md:text-left flex items-center">
              <p className="text-brandgray text-lg leading-relaxed">
                Ενημερωθείτε για την επιδότηση του ΕΟΠΥΥ, τα δικαιολογητικά και
                τη διαδικασία αποζημίωσης για ακουστικά βαρηκοΐας.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center mt-10">
            <Link
              href="/synergates/eopyy"
              className="inline-block border-2 border-primary bg-primary text-white font-bold text-lg px-12 py-4 rounded-full transition-colors duration-200 hover:bg-white hover:text-primary"
            >
              Δείτε λεπτομέρειες
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg px-8 py-10 mb-14 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-20">
            Πάροχοι Ακουστικών Βαρηκοΐας
          </h2>
          <div className="flex flex-col md:flex-row items-center w-full md:gap-8 mb-8">
            <div className="relative w-48 h-48 flex-shrink-0 mx-auto md:mx-0">
              <Image
                src="/signia-logo.png"
                alt="Πάροχοι ακουστικών"
                fill
                className="rounded-xl object-contain "
                unoptimized
                priority
              />
            </div>
            <div className="md:w-2/3 text-center md:text-left flex items-center">
              <p className="text-brandgray text-lg leading-relaxed">
                Δείτε τους επίσημους παρόχους ακουστικών βαρηκοΐας με τους
                οποίους συνεργαζόμαστε, προσφέροντάς σας τις καλύτερες λύσεις
                για τις ανάγκες σας.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center mt-10">
            <Link
              href="/synergates/paroxoi"
              className="inline-block border-2 border-primary bg-primary text-white font-bold text-lg px-12 py-4 rounded-full transition-colors duration-200 hover:bg-white hover:text-primary"
            >
              Δείτε λεπτομέρειες
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
