import { Hero } from "@/components/Hero";
import { Favorites } from "@/components/Favorites";
import { Services } from "@/components/ServicesSection";
export default function Home() {
  return (
    <main style={{ padding: 32, textAlign: "center" }}>
      <Hero />
      <Services />
      <Favorites />
    </main>
  );
}
