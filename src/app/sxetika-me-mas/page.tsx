import Image from "next/image";
import { pageMeta, breadcrumbJsonLd, aboutJsonLd } from "@/lib/seo";
import Script from "next/script";
import image1 from "@/app/assets/images/sxetika-me-mas/sxetika-me-mas-1.png";
import image2 from "@/app/assets/images/sxetika-me-mas/sxetika-me-mas-2.png";
import image3 from "@/app/assets/images/sxetika-me-mas/sxetika-me-mas-3.png";
import image4 from "@/app/assets/images/sxetika-me-mas/sxetika-me-mas-4.png";
import image5 from "@/app/assets/images/sxetika-me-mas/sxetika-me-mas-5.png";

export const metadata = pageMeta({
  title: "Σχετικά με μας – Πασσάλης Ακουστικά Μαρούσι",
  description:
    "Η ομάδα μας βελτιώνει την καθημερινότητά σας με σύγχρονες λύσεις ακοής και φροντίδα με σεβασμό και επαγγελματισμό.",
  path: "/sxetika-me-mas",
});

export default function AboutUs() {
  return (
    <>
      <Script
        id="ld-breadcrumb-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Αρχική", path: "/" },
              { name: "Σχετικά με μας", path: "/sxetika-me-mas" },
            ])
          ),
        }}
      />
      <Script
        id="ld-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd()) }}
      />

      <div>
        <section className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl font-extrabold text-primary mb-6 leading-tight">
                Αλλάζουμε τον τρόπο που οι άνθρωποι ακούν
              </h1>
              <p className="text-gray-700 text-lg mb-6">
                Η Passalis Ακουστικά Βαρηκοΐας είναι εδώ για να βελτιώσει την
                καθημερινότητά σας. Η ομάδα μας προσφέρει σύγχρονες λύσεις και
                φροντίδα με σεβασμό και επαγγελματισμό.
              </p>
              <p className="text-gray-700 text-base">
                Εμπιστευθείτε τους ειδικούς μας για να βρείτε το κατάλληλο
                ακουστικό βαρηκοΐας, προσαρμοσμένο στις δικές σας ανάγκες.
              </p>
            </div>

            <div>
              <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <Image
                  src={image1}
                  alt="Ακουστικά 1"
                  placeholder="blur"
                  className="rounded-xl object-cover w-full h-64 lg:h-44 shadow-lg"
                />
                <Image
                  src={image2}
                  alt="Ακουστικά 2"
                  placeholder="blur"
                  className="rounded-xl object-cover w-full h-64 lg:h-44 shadow-lg"
                />
                <Image
                  src={image3}
                  alt="Ακουστικά 3"
                  placeholder="blur"
                  className="rounded-xl object-cover w-full h-64 lg:h-44 shadow-lg"
                />
                <Image
                  src={image4}
                  alt="Ακουστικά 4"
                  placeholder="blur"
                  className="rounded-xl object-cover w-full h-64 lg:h-44 shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pt-14 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Η αποστολή μας
              </h2>
              <p className="text-gray-700 text-base mb-4">
                Στόχος μας είναι να προσφέρουμε εξατομικευμένη φροντίδα, με
                τεχνογνωσία και σεβασμό. Από τη διάγνωση έως την υποστήριξη μετά
                την πώληση, βρισκόμαστε δίπλα σας σε κάθε βήμα.
              </p>
              <p className="text-gray-700 text-base">
                Είμαστε υπερήφανοι για το ανθρώπινο δυναμικό μας και για την
                εμπιστοσύνη που μας δείχνετε όλα αυτά τα χρόνια.
              </p>
            </div>
            <div></div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pt-4 pb-6">
          <div className="w-full h-90 lg:h-130 relative">
            <Image
              src={image5}
              alt="Χαρούμενοι πελάτες"
              placeholder="blur"
              className="rounded-2xl shadow-lg object-cover"
              fill
              sizes="(min-width: 1024px) 100vw, 100vw"
            />
          </div>
        </section>
      </div>
    </>
  );
}
