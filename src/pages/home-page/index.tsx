import HeroBanner from "@/pages/home-page/components/HeroBanner";
import HeroContent from "@/pages/home-page/components/HeroContent";
import { HOME } from "@/constants/home.constants";

export default function Home() {
  return (
    <section id="home">
      <div className="grid gap-[clamp(3.75rem,4.5vw,6.25rem)] lg:grid-cols-2">
        <HeroContent title={HOME.title} subtitle={HOME.subtitle} />
        <HeroBanner
          image={HOME.illustration.image}
          alt={HOME.illustration.alt}
        />
      </div>
    </section>
  );
}
