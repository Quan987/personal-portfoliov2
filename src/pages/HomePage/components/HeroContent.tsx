import Navbutton from "@/components/ui/Navbutton";
import { HERO } from "@/pages/HomePage/home.constants";

export default function HeroContent() {
  return (
    <div className="flex flex-col gap-15 p-10">
      <h1 className="font-medium 2xl:text-7xl 2xl:leading-21">{HERO.title}</h1>
      <div className="flex flex-col gap-10 2xl:pr-30">
        <p className="text-pretty 2xl:text-lg leading-8  text-secondary-muted">
          {HERO.subtitle}
        </p>
        <Navbutton link="/contact" className="px-10 py-3 text-md">
          Get in Touch
        </Navbutton>
      </div>
    </div>
  );
}
