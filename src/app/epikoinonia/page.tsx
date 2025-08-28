import ContactForm from "@/components/ContactForm";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { pageMeta, breadcrumbJsonLd, contactJsonLd } from "@/lib/seo";
import Script from "next/script";

export const metadata = pageMeta({
  title: "Επικοινωνία – Πασσάλης Ακουστικά Μαρούσι",
  description:
    "Επικοινωνήστε με Πασσάλης Ακουστικά στο Μαρούσι. Τηλέφωνο 210 612 9896, email info@passalis-akoustika.gr. Κλείστε δωρεάν έλεγχο ακοής.",
  path: "/epikoinonia",
  keywords: ["επικοινωνία", "ραντεβού", "Μαρούσι", "ακουστικά βαρηκοΐας"],
});

export default function Epikoinonia() {
  return (
    <>
      <Script
        id="ld-breadcrumb-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Αρχική", path: "/" },
              { name: "Επικοινωνία", path: "/epikoinonia" },
            ])
          ),
        }}
      />
      <Script
        id="ld-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd()) }}
      />

      <div className="min-h-screen py-16 px-2">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center pr-0 lg:pr-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-primary mb-4">
              Επικοινωνία
            </h1>
            <p className="text-lg text-brandlight mb-10 leading-relaxed">
              Η ομάδα μας είναι πάντα στη διάθεσή σας για να απαντήσει σε κάθε
              σας ερώτηση για τα προϊόντα και τις υπηρεσίες μας. Συμπληρώστε την
              παρακάτω φόρμα ή επικοινωνήστε μαζί μας μέσω τηλεφώνου ή email.
            </p>

            <dl className="space-y-6 text-base">
              <div className="flex items-center gap-3">
                <MapPinIcon
                  className="h-6 w-6 text-primary"
                  aria-hidden="true"
                />
                <span className="text-brandgray">
                  Δολιανής 74, Λεωφ. Κηφισίας 127,
                  <br /> Μαρούσι 151 24
                </span>
              </div>

              <div className="flex items-center gap-3">
                <PhoneIcon
                  className="h-6 w-6 text-primary"
                  aria-hidden="true"
                />
                <a
                  href="tel:+302106129896"
                  className="hover:text-primary text-brandgray transition-colors"
                >
                  210 612 9896
                </a>
              </div>

              <div className="flex items-center gap-3">
                <EnvelopeIcon
                  className="h-6 w-6 text-primary"
                  aria-hidden="true"
                />
                <a
                  href="mailto:info@passalis-akoustika.gr"
                  className="hover:text-primary text-brandgray transition-colors"
                >
                  info@passalis-akoustika.gr
                </a>
              </div>
            </dl>
          </div>

          <div className="flex flex-col justify-center">
            <ContactForm />
          </div>
        </div>

        <section className="py-36 flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.087441868825!2d23.80464681537398!3d38.04830817971486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a19968f09ee0db%3A0x121536f50b8e6e2a!2zzpHOtc67zqzOsM6xz4nOvyDigJggzprOkc6vzr_Ou867zqzOuc69IM6izpHOv8-BzrXOhM-BzrUgzpTOv8-Bzr3Okc6xz4nPhSDOkM6hIM6UzrjOtc67zq_Ou867!5e0!3m2!1sel!2sgr!4v1718802598390!5m2!1sel!2sgr"
            width="100%"
            height="340"
            style={{ border: 0, maxWidth: 640 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-lg border border-primary/30"
            title="Χάρτης Πασσάλης Ακουστικά"
          />
        </section>
      </div>
    </>
  );
}
