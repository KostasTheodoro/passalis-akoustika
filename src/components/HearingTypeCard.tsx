import { HearingType } from "@/data/hearingTypes";
import Link from "next/link";

export function HearingTypeCard({ type }: { type: HearingType }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg px-8 py-10 mb-14 max-w-4xl mx-auto flex flex-col items-center">
      {/* Τίτλος */}
      <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-18">
        {type.title}
      </h2>

      {/* Εικόνα & Κείμενο */}
      <div className="flex flex-col md:flex-row items-center w-full md:gap-8 mb-8">
        <div className="flex justify-center md:justify-start w-full md:w-1/3 mb-6 md:mb-0">
          <img
            src={type.image}
            alt={type.title}
            width={190}
            height={190}
            className="rounded-xl object-cover shadow-md"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left flex items-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            {type.description}
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="w-full flex justify-center mt-18">
        <Link
          href={`/akoustika/${type.slug}`}
          className="px-8 py-3 bg-primary text-white font-bold rounded-xl text-lg shadow hover:bg-primary/90 transition"
        >
          Δείτε περισσότερα
        </Link>
      </div>
    </div>
  );
}
