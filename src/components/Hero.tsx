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
          Καλωσήρθατε στα ακουστικά βαρηκοΐας Πασσαλής
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          Είμαστε εδώ για να σας βοηθήσουμε με όλες τις απορίες σας για τα
          ακουστικά βαρηκοΐας
        </p>
        <Link
          href="/syxnes-erotiseis"
          className="inline-block border-2 border-primary bg-primary text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 hover:bg-white hover:text-primary"
        >
          Συχνές Ερωτήσεις
        </Link>
      </div>
    </section>
  );
}
