import Image from "next/image";
import Link from "next/link";

export type Provider = {
  name: string;
  description: string;
  features: string[];
  logoSrc: string;
  logoAlt: string;
  website: string;
};

export const ProviderCard = ({
  name,
  description,
  features,
  logoSrc,
  logoAlt,
  website,
}: Provider) => (
  <section className="bg-white rounded-2xl shadow-xl p-10 mb-14 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-primary text-center mb-4">{name}</h2>
    <p className="text-gray-800 mb-6 text-lg">{description}</p>
    <ul className="mb-8 text-gray-700 list-disc list-inside text-base pl-4 max-w-3xl mx-auto">
      {features.map((f) => (
        <li key={f} className="mb-1">
          {f}
        </li>
      ))}
    </ul>
    <div className="flex justify-center items-center p-20">
      <Link href={website} target="_blank" rel="noopener noreferrer">
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={220}
          height={100}
          className="object-contain transition-transform duration-150 hover:scale-105"
          priority
        />
      </Link>
    </div>
  </section>
);
