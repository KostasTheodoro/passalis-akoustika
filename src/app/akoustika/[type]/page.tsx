// app/akoustika/[type]/page.tsx
import { hearingAidModels } from "@/data/hearingAids";
import { HearingAidModelCard } from "@/components/HearingAidModelCard";
import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import Script from "next/script";

const typeNames: Record<string, { greek: string; latin: string }> = {
  cic: { greek: "Ενδοκαναλικά", latin: "CIC" },
  ric: { greek: "Ανοιχτής Εφαρμογής", latin: "RIC" },
  bte: { greek: "Οπισθωτιαία", latin: "BTE" },
  rechargeable: { greek: "Επαναφορτιζόμενα", latin: "Charge&Go" },
};

const typeDescs: Record<string, string> = {
  cic: "Σχεδόν αόρατα ακουστικά που εφαρμόζουν βαθιά στο κανάλι. Ιδανικά για διακριτική εμφάνιση με φυσικό ήχο.",
  ric: "Άνεση και υψηλή απόδοση με φυσική μεταφορά ήχου. Διακριτικός σχεδιασμός και εξατομικευμένη ρύθμιση.",
  bte: "Ανθεκτικά και ισχυρά για κάθε επίπεδο απώλειας. Εύχρηστα, αξιόπιστα και κατάλληλα για καθημερινή χρήση.",
  rechargeable:
    "Τέλος στις μπαταρίες μίας χρήσης. Επαναφορτιζόμενα ακουστικά με ευκολία και οικολογική χρήση.",
};

type RouteParams = { params: { type: string } };

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { type } = params;

  if (!typeNames[type]) {
    return pageMeta({
      title: "Ακουστικά Βαρηκοΐας – Πασσάλης Ακουστικά",
      description: "Λύσεις ακουστικών βαρηκοΐας για κάθε ανάγκη.",
      path: `/akoustika/${type}`,
    });
  }

  const { greek, latin } = typeNames[type];
  const desc = typeDescs[type] ?? "Ακουστικά βαρηκοΐας υψηλής ποιότητας.";

  return pageMeta({
    title: `${greek} (${latin}) Ακουστικά Βαρηκοΐας – Πασσάλης`,
    description: desc,
    path: `/akoustika/${type}`,
    keywords: ["ακουστικά βαρηκοΐας", greek, latin, "Μαρούσι"],
  });
}

export default function HearingAidTypePage({ params }: RouteParams) {
  const { type } = params;
  const models = hearingAidModels.filter((m) => m.type === type);

  if (!typeNames[type]) {
    return (
      <main className="py-10">
        <h1 className="text-3xl font-bold text-primary text-center mb-8">
          Δεν βρέθηκε αυτή η κατηγορία.
        </h1>
      </main>
    );
  }

  const { greek, latin } = typeNames[type];

  return (
    <>
      <Script
        id="ld-breadcrumb-akoustika-type"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Αρχική", path: "/" },
              { name: "Ακουστικά", path: "/akoustika" },
              { name: `${greek} (${latin})`, path: `/akoustika/${type}` },
            ])
          ),
        }}
      />

      <main className="py-10 bg-gray-50">
        <h1 className="text-3xl font-bold text-primary text-center mb-8">
          {greek} ({latin})
        </h1>
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-14">
          {models.map((model) => (
            <HearingAidModelCard key={model.id} model={model} />
          ))}
        </div>
      </main>
    </>
  );
}
