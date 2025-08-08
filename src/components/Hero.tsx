import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full aspect-[11/2] flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/hero.png"
        alt="Hero background"
        fill
        priority
        className="object-cover object-center"
        quality={90}
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-primary/10 z-10" />

      <div className="relative z-20 px-4 w-full">
        <h1 className="text-4xl font-extrabold text-white m-4  text-shadow-lg text-shadow-black">
          Καλωσήρθατε στα ακουστικά βαρηκοΐας Πασσαλής
        </h1>
        <p className="text-xl text-white mb-6 text-shadow-lg text-shadow-black">
          Είμαστε εδώ για να σας βοηθήσουμε με όλες τις απορίες σας για τα
          ακουστικά βαρηκοΐας
        </p>
        <div className="mt-12">
          <Link
            href="/syxnes-erotiseis"
            className="inline-block border-2 border-primary bg-primary text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 hover:bg-white hover:text-primary"
          >
            Συχνές Ερωτήσεις
          </Link>
        </div>
      </div>
    </section>
  );
}
