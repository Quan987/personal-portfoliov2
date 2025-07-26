import HeroBanner from "@/pages/HomePage/components/HeroBanner";
import HeroContent from "@/pages/HomePage/components/HeroContent";

export function Home() {
  return (
    <section id="home" className="">
      <div className="size-full grid grid-cols-2 2xl:gap-20">
        <HeroContent />
        <HeroBanner />
      </div>
    </section>
  );
}
