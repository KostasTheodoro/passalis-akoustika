import Image from "next/image";

type Props = {
  model: {
    id: string;
    name: string;
    images: string[];
    description: string;
  };
};

export function HearingAidModelCard({ model }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg w-full px-8 py-10 mb-14 flex flex-col items-center">
      {/* Centered model name at the very top */}
      <h3 className="text-2xl font-bold text-primary mb-6 text-center w-full">
        {model.name}
      </h3>
      <div className="flex flex-col md:flex-row items-center w-full gap-10">
        <div className="relative w-60 h-60 flex-shrink-0 mx-auto md:mx-0">
          <Image
            src={model.images[0]}
            alt={model.name}
            fill
            className="rounded-xl object-contain bg-gray-100"
            sizes="240px"
            unoptimized
            priority
          />
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start justify-center">
          <p className="text-gray-700 text-lg text-center md:text-left">
            {model.description}
          </p>
        </div>
      </div>
    </div>
  );
}
