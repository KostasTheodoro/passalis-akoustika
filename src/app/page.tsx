import { Hero } from "@/components/Hero";
import { Favorites } from "@/components/Favorites";
export default function Home() {
  return (
    <main style={{ padding: 32, textAlign: "center" }}>
      <Hero />
      <Favorites />
    </main>
  );
}
