import { type BaseMenuItem } from "@/types/menu.type";

type SocialMenuProps = {
  links: ReadonlyArray<BaseMenuItem>;
  className?: string;
};

export default function SocialMenu({ links }: SocialMenuProps) {
  return (
    <ul
      className={
        "w-fit group flex py-[clamp(1.25rem,2vw,1.5rem)] xl:py-0 gap-[clamp(0.75rem,1vw,1.5rem)]"
      }
    >
      {links.map(({ id, href, icon: Icon }, _) => {
        return (
          <li
            key={id}
            className="p-[clamp(0.375rem,0.35vw,0.625rem)] interactive-transition border-1 border-muted-text text-primary rounded-full cursor-pointer menu-transition group-hover:text-muted-text/50 group-hover:border-muted-text/50 hover:text-secondary hover:bg-dark hover:border-dark active:border-dark active:bg-dark active:text-secondary"
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              draggable={false}
              className="block "
            >
              <Icon className="fill-current size-[clamp(1.25rem,calc(1.5vw_-_0.25rem),2.5rem)]" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
