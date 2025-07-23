// app/akoustika/page.tsx
import { hearingTypes } from "@/data/hearingTypes";
import { HearingTypeCard } from "@/components/HearingTypeCard";

export default function Akoustika() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-12">
          Τύποι Ακουστικών Βαρηκοΐας
        </h1>
        {hearingTypes.map((type) => (
          <HearingTypeCard key={type.slug} type={type} />
        ))}
      </div>
    </main>
  );
}
