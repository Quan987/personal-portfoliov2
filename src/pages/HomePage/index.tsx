import HeroBanner from "@/pages/HomePage/components/HeroBanner";
import HeroContent from "@/pages/HomePage/components/HeroContent";
import { HOME } from "@/pages/HomePage/home.constants";

export function Home() {
  return (
    <section id="home">
      <div className="size-full grid grid-cols-2 2xl:gap-20">
        <HeroContent title={HOME.title} subtitle={HOME.subtitle} />
        <HeroBanner
          image={HOME.illustration.image}
          alt={HOME.illustration.alt}
        />
      </div>
    </section>
  );
}
