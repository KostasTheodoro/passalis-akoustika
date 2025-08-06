import { Hero } from "@/components/Hero";
import { Favorites } from "@/components/Favorites";
import { Services } from "@/components/ServicesSection";
import { SigniaApp } from "@/components/SigniaApp";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services />
      <Favorites />
      <SigniaApp />
    </main>
  );
}
