import Link from "next/link";
import Image from "next/image";
import { hearingAidModels } from "@/data/hearingAids";

const hearingTypes = ["cic", "ric", "bte", "rechargeable"];
type HearingType = (typeof hearingTypes)[number];

const favorites = hearingTypes
  .map((type) => {
    const model = hearingAidModels.find((m) => m.type === type);
    if (!model) return null;
    return {
      type,
      img: model.images[0],
      name: model.name,
    };
  })
  .filter(
    (fav): fav is { type: HearingType; img: string; name: string } => !!fav
  );

export function Favorites() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-3xl font-extrabold text-primary text-center mb-8">
        Τα ακουστικά μας
      </h2>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {favorites.map((fav) => (
          <Link
            href={`/akoustika/${fav.type}`}
            key={fav.type}
            className="overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105  bg-white"
          >
            <Image
              src={fav.img}
              alt={fav.name}
              width={300}
              height={200}
              className="w-full h-80 object-contain"
              unoptimized
              priority
            />
            <h3 className="mt-3 text-lg font-semibold text-primary text-center pb-8">
              {fav.name}
            </h3>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          href="/akoustika"
          className="inline-block border-2 border-primary bg-primary text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 hover:bg-white hover:text-primary"
        >
          Δείτε όλα τα ακουστικά
        </Link>
      </div>
    </section>
  );
}
