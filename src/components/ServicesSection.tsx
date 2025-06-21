import {
  CheckBadgeIcon,
  SpeakerWaveIcon,
  WrenchIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";

export function Services() {
  const services = [
    {
      icon: <SpeakerWaveIcon className="h-8 w-8 text-primary mb-4" />,
      title: "Δωρεάν Έλεγχος Ακοής",
      description:
        "Πλήρης αξιολόγηση της ακοής σας με σύγχρονο εξοπλισμό, χωρίς καμία χρέωση.",
    },
    {
      icon: <WrenchIcon className="h-8 w-8 text-primary mb-4" />,
      title: "Προσαρμοσμένα Ακουστικά",
      description:
        "Κατασκευή και ρύθμιση ακουστικών βαρηκοΐας ειδικά φτιαγμένα για εσάς.",
    },
    {
      icon: <CheckBadgeIcon className="h-8 w-8 text-primary mb-4" />,
      title: "Εγγύηση & Συντήρηση",
      description:
        "Εγγύηση ποιότητας και δωρεάν service για όλη τη διάρκεια ζωής του εξοπλισμού.",
    },
    {
      icon: <HeartIcon className="h-8 w-8 text-primary mb-4" />,
      title: "Συνεχής Υποστήριξη",
      description:
        "Πλήρης υποστήριξη μετά την αγορά: ρυθμίσεις, συμβουλές και ό,τι άλλο χρειαστείτε.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-3xl font-extrabold text-primary text-center mb-8">
        Γιατί να μας επιλέξετε
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((svc, idx) => (
          <div key={idx} className="text-center px-4">
            <div className="flex items-center justify-center mb-2">
              {svc.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{svc.title}</h3>
            <p className="text-gray-600 text-sm">{svc.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Link
          href="/sxetika-me-mas"
          className="inline-block border-2 border-primary bg-primary text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 hover:bg-white hover:text-primary"
        >
          Ανακαλύψτε την ιστορία μας
        </Link>
      </div>
    </section>
  );
}
