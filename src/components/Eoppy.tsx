import Image from "next/image";
import Link from "next/link";

export default function EOPYYCard() {
  return (
    <div className="w-full flex justify-center items-center my-12">
      <Link
        href="/synergates/eopyy"
        className={`
       w-full max-w-sm
          bg-gradient-to-l from-primary to-cyan-200
          rounded-4xl shadow-xl py-7 px-4 flex flex-col items-center
          hover:scale-105 transition-transform
          card-hover
        `}
      >
        <div className="text-4xl font-bold text-white mb-2">450€</div>
        <div className="text-xl text-white font-normal mb-4 text-center">
          Επιδότηση από το ταμείο σας!
        </div>
        <div className="bg-white rounded-full shadow p-2 mb-4">
          <Image src="/eopyy.png" alt="EOPYY Logo" width={110} height={110} />
        </div>
        <div className="text-xl text-white font-normal text-center">
          Καταβάλλετε μόνο
          <br />
          τη συμμετοχή σας
        </div>
      </Link>
    </div>
  );
}
