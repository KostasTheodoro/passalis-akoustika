import Link from "next/link";
import Image from "next/image";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import Script from "next/script";
export const metadata = pageMeta({
  title: "ΕΟΠΥΥ – Συμμετοχή & Αποζημίωση Ακουστικών | Πασσάλης",
  description:
    "Πώς καλύπτει ο ΕΟΠΥΥ 450€ (540€ για παιδιά) για ακουστικά βαρηκοΐας. Δικαιολογητικά, διαδικασία και τι πληρώνετε ως συμμετοχή.",
  path: "/synergates/eopyy",
  keywords: ["ΕΟΠΥΥ", "επιδότηση ακουστικών", "450€"],
});

export default function EOPYY() {
  return (
    <>
      {" "}
      <Script
        id="ld-breadcrumb-eopyy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Αρχική", path: "/" },
              { name: "Συνεργάτες", path: "/synergates" },
              { name: "ΕΟΠΥΥ", path: "/synergates/eopyy" },
            ])
          ),
        }}
      />
      <div className="flex flex-col min-h-screen bg-white">
        <div className="w-full aspect-[34/7] relative overflow-hidden">
          <Image
            src="/eoppy-blend.png"
            alt="EOPYY Banner"
            layout="fill"
            objectFit="cover"
            priority
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-16">
            ΕΟΠΥΥ – Συμμετοχή & Αποζημίωση Ακουστικών Βαρηκοΐας
          </h1>

          <div className="text-xl text-gray-700 mb-24 whitespace-pre-line leading-relaxed">
            Ο ΕΟΠΥΥ έχει αλλάξει τον τρόπο αποζημίωσης ετσι ώστε ο ασφαλισμένος
            να καταβάλλει μόνο την συμμετοχή του και όχι ολόκληρο το ποσό.
            {"\n\n"}
            Καλύπτει το ποσό των 450€ για άμεσα και έμμεσα ασφαλισμένους και
            βοηθά να έχουν πρόσβαση στις καλύτερες λύσεις που καλύπτουν τις
            ακουστικές τους ανάγκες, ενώ για παιδιά έως 16 ετών, ο ΕΟΠΥΥ
            καλύπτει το ποσό των 540€ ανά ακουστικό ανά 4 έτη.
            {"\n\n"}Ο ασφαλιζόμενος προσκομίζοντας τα απαραίτητα δικαιολογητικά
            σε εμάς, πλέον πληρώνει μόνο την συμμετοχή του αποφεύγοντας την
            διαδικασία κατάθεσης των χαρτιών και αναμονής για την αποζημίωση.
          </div>
          <Link
            href="/epikoinonia"
            className="inline-block border-2 border-primary bg-primary text-white font-bold text-lg px-12 py-4 rounded-full transition-colors duration-200 hover:bg-white hover:text-primary"
          >
            Επικοινωνήστε μαζί μας για περισσότερες λεπτομέρειες!
          </Link>
        </div>
      </div>
    </>
  );
}
