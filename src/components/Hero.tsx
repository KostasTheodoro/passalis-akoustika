import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative w-full h-96 flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('https://picsum.photos/1920/600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* content */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl font-extrabold text-white mb-4">
          Καλωσήρθατε στα ακουστικά Πασσαλής
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          Ειμαστέ εδω για να σας δώσουμε την καλύτερη εμπειρία στα ακουστικά
          βαρηκοΐας
        </p>
        <Link
          href="/syxnes-erotiseis"
          className="inline-block bg-primary text-white font-medium py-2 px-6 rounded-lg hover:bg-primary-dark transition"
        >
          Συχνές Ερωτήσεις
        </Link>
      </div>
    </section>
  );
}
