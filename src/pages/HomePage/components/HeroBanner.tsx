import { HERO } from "@/pages/HomePage/home.constants";

export default function HeroBanner() {
  return (
    <div className="size-full p-5">
      <img
        src={HERO.illustration.image}
        alt={HERO.illustration.alt}
        draggable={false}
        loading="lazy"
        className="animate-float text-foreground-primary"
      />
    </div>
  );
}
