import { hearingAidModels } from "@/data/hearingAids";
import { HearingAidModelCard } from "@/components/HearingAidModelCard";

const typeNames: Record<string, { greek: string; latin: string }> = {
  cic: { greek: "Ενδοκαναλικά", latin: "CIC" },
  ric: { greek: "Ανοιχτής Εφαρμογής", latin: "RIC" },
  bte: { greek: "Οπισθωτιαία", latin: "BTE" },
  rechargeable: { greek: "Επαναφορτιζόμενα", latin: "Rechargeable" },
};

export default async function HearingAidTypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params; // <--- await here!
  const models = hearingAidModels.filter((m) => m.type === type);

  if (!typeNames[type]) {
    return (
      <main className="  bg-gray-50 py-10">
        <h1 className="text-3xl font-bold text-primary text-center mb-8">
          Δεν βρέθηκε αυτή η κατηγορία.
        </h1>
      </main>
    );
  }

  const { greek, latin } = typeNames[type];

  return (
    <main className="py-10  bg-gray-50 ">
      <h1 className="text-3xl font-bold text-primary text-center mb-8">
        {greek} ({latin})
      </h1>
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-14">
        {models.map((model) => (
          <HearingAidModelCard key={model.id} model={model} />
        ))}
      </div>
    </main>
  );
}
