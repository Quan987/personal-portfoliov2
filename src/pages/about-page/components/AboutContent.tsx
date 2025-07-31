import { IconComponent } from "@/types/icon.type";

type AboutContentProps = Readonly<{
  subheader1: string;
  subheader2: string;
  subheader3: string;
  skillsIcon: ReadonlyArray<{
    id: string;
    name: string;
    icon: IconComponent;
  }>;
}>;

export default function AboutContent({
  subheader1,
  subheader2,
  subheader3,
  skillsIcon,
}: AboutContentProps) {
  return (
    <div className="self-center text-md 2xl:pt-30 2xl:pl-45 text-foreground-muted">
      <div className="text-secondary-muted">
        <p className="font-medium text-xl text-foreground-primary my-4">
          {subheader1}
        </p>
        <p className="my-4">{subheader2}</p>
        <p className="my-4">{subheader3}</p>
      </div>

      <div>
        <p className="my-2">Tools & frameworks I've worked with:</p>
        <ul className="flex flex-wrap items-center gap-2">
          {skillsIcon.map(({ id, name, icon: Icon }, _) => {
            return (
              <li
                key={id}
                className="flex flex-col justify-center items-center gap-1 size-12"
              >
                <Icon className="size-6/12" />
                <p className="text-xs">{name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
