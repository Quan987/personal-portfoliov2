import Navbutton from "@/components/ui/Navbutton";

type HeroContentProps = Readonly<{
  title: string;
  subtitle: string;
}>;

export default function HeroContent({ title, subtitle }: HeroContentProps) {
  return (
    <div className="flex flex-col gap-[clamp(1rem,2vw,3rem)] py-[clamp(0rem,1vw,3.75rem)]">
      <h1 className="text-primary font-medium leading-tight text-[clamp(2.5rem,3.75vw,15rem)]">
        {title}
      </h1>

      <div className="text-muted-text flex flex-col gap-[clamp(1.5rem,2.5vw,2.5rem)]">
        <p className="text-pretty leading-relaxed text-[clamp(0.875rem,1.15vw,5rem)] pr-[clamp(0rem,5vw,11.25rem)]">
          {subtitle}
        </p>

        <Navbutton
          link="/contact"
          className="text-[clamp(0.75rem,1vw,3rem)] px-[clamp(1.25rem,2vw,3.5rem)] py-[clamp(0.625rem,0.85vw,1.5rem)]"
        >
          Get in Touch
        </Navbutton>
      </div>
    </div>
  );
}

// Contine fixing leading for subtitle
