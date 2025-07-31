import HeroBanner from "@/pages/home-page/components/HeroBanner";
import HeroContent from "@/pages/home-page/components/HeroContent";
import { HOME } from "@/pages/home-page/home.constants";

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
