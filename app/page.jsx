import Cards from "@/components/home/cards/cards";
import Facts from "@/components/home/facts/facts";
import Hero from "@/components/home/hero/hero";
import Listings from "@/components/home/listings/listings";
import Models from "@/components/home/models/models";
import Track from "@/components/home/track/track";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-montserrat)]">
      <Hero />
      <Facts />
      <Listings />
      <Cards />
      <Track />
      <Models />
    </div>
  );
}
