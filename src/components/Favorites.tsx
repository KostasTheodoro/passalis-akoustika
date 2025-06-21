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
      <h2 className="text-2xl font-semibold text-primary mb-8 text-center">
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
          className="inline-block bg-primary text-white font-medium py-2 px-6 rounded-lg hover:bg-primary-dark transition"
        >
          Δείτε όλα τα ακουστικά
        </Link>
      </div>
    </section>
  );
}
