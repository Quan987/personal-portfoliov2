import { IconProps } from "@/components/icons/icon.types";
import { ComponentType } from "react";

interface AboutContentProps {
  subheader1: string;
  subheader2: string;
  subheader3: string;
  readonly skillsIcon: ReadonlyArray<{
    id: string;
    name: string;
    icon: ComponentType<IconProps>;
  }>;
}

export default function AboutContent({
  subheader1,
  subheader2,
  subheader3,
  skillsIcon,
}: AboutContentProps) {
  return (
    <div className="self-center text-md 2xl:pt-30 2xl:pl-45 text-secondary-muted">
      <div className="text-secondary-muted">
        <p className="font-medium text-xl text-primary-dark my-5">
          {subheader1}
        </p>
        <p className="my-5">{subheader2}</p>
        <p className="my-5">{subheader3}</p>
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
