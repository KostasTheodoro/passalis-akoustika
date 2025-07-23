import { Hero } from "@/components/Hero";
import { Favorites } from "@/components/Favorites";
import { Services } from "@/components/ServicesSection";
export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Favorites />
    </main>
  );
}
