import { IconComponent } from "@/types/icon.type";

type BaseMenuItem = {
  id: string;
  label: string;
  href: string;
};

export type NavMenuProps = {
  links: ReadonlyArray<BaseMenuItem>;
};

export type SocialMenuProps = {
  links: ReadonlyArray<
    BaseMenuItem & {
      icon: IconComponent;
    }
  >;
};
