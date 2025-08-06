"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Πώς λειτουργούν τα ακουστικά βαρηκοΐας;",
    a: "Τα ακουστικά ενισχύουν τους ήχους που χάνετε και τα προσαρμόζετε ανάλογα με το πρόβλημά σας και τις συνθήκες περιβάλλοντος.",
  },
  {
    q: "Πόση διάρκεια ζωής έχουν;",
    a: "Έχουν διάρκεια περίπου 4-6 έτη, ανάλογα με τη χρήση και τη φροντίδα τους.",
  },
  {
    q: "Υπάρχει δοκιμή πριν την αγορά;",
    a: "Ναι! Μπορείτε να τα δοκιμάσετε εδώ στο κατάστημά μας και να πειραματιστείτε με τις ρυθμίσεις.",
  },
  {
    q: "Μπορώ να πάρω οικονομική επιδότηση;",
    a: "Ναι, καλύπτονται μέσω ΕΟΠΥΥ, εφόσον έχετε σχετική γνωμάτευση.",
  },
  {
    q: "Πόσες μέρες διαρκεί η διαδικασία;",
    a: "Συνήθως 1–2 επισκέψεις για μετρήσεις και προσαρμογή.",
  },
  {
    q: "Υπάρχει εγγύηση;",
    a: "Ναι, παρέχουμε διετή εγγύηση συν τη συντήρηση για 3 χρόνια.",
  },

  {
    q: "Υπάρχει online υποστήριξη;",
    a: "Μπορείτε πάντα να επικοινωνείτε τηλεφωνικά ή μέσω email για βοήθεια.",
  },
  {
    q: "Υπάρχει επισκευή;",
    a: "Ναι, προσφέρουμε υπηρεσίες επισκευής στο κατάστημα ή κατόπιν παραγγελίας.",
  },
  {
    q: "Δέχεστε ραντεβού εκτός ωραρίου;",
    a: "Ναι, συναρμολογούμε εκτός ωραρίου με ραντεβού για ευκολία.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="max-w-3xl mx-auto pt-16 pb-36 px-4 ">
      <h1 className="text-4xl font-bold text-center text-primary mb-16">
        Συχνές Ερωτήσεις
      </h1>
      <dl>
        {faqs.map((item, idx) => (
          <div
            key={idx}
            className={`p-4 border-b transition-colors ${
              openIndex === idx
                ? "border-primary"
                : "border-brandlight hover:border-primary"
            }`}
          >
            <dt>
              <button
                type="button"
                className={` group flex justify-between w-full text-left focus:outline-none transition-colors
                  ${
                    openIndex === idx
                      ? "text-primary"
                      : "text-brandgray hover:text-primary"
                  }
                `}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="font-medium text-lg">{item.q}</span>
                <svg
                  className={`w-6 h-6 transition-transform duration-200 ${
                    openIndex === idx
                      ? "rotate-180 text-primary"
                      : "text-brandlight group-hover:text-primary"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </dt>
            {openIndex === idx && (
              <dd className="mt-2 text-brandgray">{item.a}</dd>
            )}
          </div>
        ))}
      </dl>
    </section>
  );
}
