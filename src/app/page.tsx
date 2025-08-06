import { Hero } from "@/components/Hero";
import { Favorites } from "@/components/Favorites";
import { Services } from "@/components/ServicesSection";
import { SigniaApp } from "@/components/SigniaApp";
import EOPYYCard from "@/components/Eoppy";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services />
      <EOPYYCard />
      <Favorites />
      <SigniaApp />
    </main>
  );
}
