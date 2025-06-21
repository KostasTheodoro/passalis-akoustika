import Link from "next/link";
export function Favorites() {
  const images = [
    "https://picsum.photos/seed/1/300/200",
    "https://picsum.photos/seed/2/300/200",
    "https://picsum.photos/seed/3/300/200",
    "https://picsum.photos/seed/4/300/200",
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-3xl font-extrabold text-primary text-center mb-8">
        Τα ακουστικά μας
      </h2>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={src}
              alt={`Favorite ${i + 1}`}
              className="w-full h-40 object-cover"
            />
          </div>
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
