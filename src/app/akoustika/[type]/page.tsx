import { hearingAidModels } from "@/data/hearingAids";
import { HearingAidModelCard } from "@/components/HearingAidModelCard";
import { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import Script from "next/script";

const typeNames: Record<
  string,
  { greek: string; latin: string; desc: string }
> = {
  cic: {
    greek: "Ενδοκαναλικά",
    latin: "CIC",
    desc: "Σχεδόν αόρατα ακουστικά που εφαρμόζουν βαθιά στο κανάλι. Ιδανικά για διακριτική εμφάνιση με φυσικό ήχο.",
  },
  ric: {
    greek: "Ανοιχτής Εφαρμογής",
    latin: "RIC",
    desc: "Άνεση και υψηλή απόδοση με φυσική μεταφορά ήχου. Διακριτικός σχεδιασμός και εξατομικευμένη ρύθμιση.",
  },
  bte: {
    greek: "Οπισθωτιαία",
    latin: "BTE",
    desc: "Ανθεκτικά και ισχυρά για κάθε επίπεδο απώλειας. Εύχρηστα, αξιόπιστα και κατάλληλα για καθημερινή χρήση.",
  },
  rechargeable: {
    greek: "Επαναφορτιζόμενα",
    latin: "Charge&Go",
    desc: "Τέλος στις μπαταρίες μίας χρήσης. Επαναφορτιζόμενα ακουστικά με ευκολία και οικολογική χρήση.",
  },
};

type Props = { params: { type: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const type = params.type;
  if (!typeNames[type]) {
    return pageMeta({
      title: "Ακουστικά Βαρηκοΐας – Πασσάλης Ακουστικά",
      description: "Λύσεις ακουστικών βαρηκοΐας για κάθε ανάγκη.",
      path: `/akoustika/${type}`,
    });
  }

  const { greek, latin, desc } = typeNames[type];
  return pageMeta({
    title: `${greek} (${latin}) Ακουστικά Βαρηκοΐας – Πασσάλης`,
    description: desc,
    path: `/akoustika/${type}`,
    keywords: ["ακουστικά βαρηκοΐας", greek, latin, "Μαρούσι"],
  });
}

export default async function HearingAidTypePage({
  params,
}: {
  params: { type: string };
}) {
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
