import { IconComponent } from "@/types/icon.types";

type AboutContentProps = Readonly<{
  subheader: ReadonlyArray<{
    id: string;
    description: string;
  }>;
  skillsIcon: ReadonlyArray<{
    id: string;
    name: string;
    icon: IconComponent;
  }>;
}>;

export default function AboutContent({
  subheader,
  skillsIcon,
}: AboutContentProps) {
  return (
    <div className="h-full flex flex-col items-end justify-end text-muted-text text-[clamp(0.75rem,0.9vw,2rem)] gap-[clamp(0.5rem,0.8vw,1rem)] lg:pl-[clamp(0rem,5.5vw,10rem)]">
      <ul className="flex flex-col gap-[clamp(0.5rem,0.8vw,1rem)]">
        {subheader.map(({ id, description }, index) => (
          <li
            key={id}
            className={`${
              index === 0 &&
              "text-primary font-medium text-[clamp(1rem,1.2vw,3rem)]"
            }`}
          >
            {description}
          </li>
        ))}
      </ul>

      {/* <div className="flex flex-col gap-[clamp(0.5rem,0.8vw,1rem)]"> */}
      {/* text-[clamp(0.875rem,1vw,2rem)] */}
      <p className="self-start">Tools & frameworks I've worked with:</p>

      <ul className="flex flex-wrap gap-[clamp(0.75rem,0.75vw,1rem)]">
        {skillsIcon.map(({ id, name, icon: Icon }) => (
          <li
            key={id}
            className="flex-col-center size-[clamp(2rem,2.5vw,4.25rem)] gap-[clamp(0.25rem,0.5vw,0.75rem)]"
          >
            <Icon className="size-1/2" />
            <p className="text-[clamp(0.65rem,0.7vw,1.25rem)]">{name}</p>
          </li>
        ))}
      </ul>
      {/* </div> */}

      <div className="bg-dark  no-interact w-[clamp(7.5rem,12vw,12rem)] h-[clamp(0.25rem,0.5vw,0.55rem)] mt-[clamp(1rem,1.5vw,3rem)]" />
    </div>
  );
}
