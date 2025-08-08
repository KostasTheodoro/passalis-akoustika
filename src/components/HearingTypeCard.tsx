import { HearingType } from "@/data/hearingTypes";
import Link from "next/link";
import Image from "next/image";

export function HearingTypeCard({ type }: { type: HearingType }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg px-8 py-10 mb-14 max-w-4xl mx-auto flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-18">
        {type.title}
      </h2>

      <div className="flex flex-col md:flex-row items-center w-full md:gap-8 mb-8">
        <div className="relative w-60 h-60 flex-shrink-0 mx-auto md:mx-0">
          <Image
            src={type.image}
            alt={type.title}
            fill
            className="rounded-xl object-contain"
            unoptimized
            priority
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left flex items-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            {type.description}
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center mt-18">
        <Link
          href={`/akoustika/${type.slug}`}
          className="inline-block border-2 border-primary bg-primary text-white font-bold text-lg px-12 py-4 rounded-full transition-colors duration-200 hover:bg-white hover:text-primary"
        >
          Δείτε περισσότερα
        </Link>
      </div>
    </div>
  );
}
