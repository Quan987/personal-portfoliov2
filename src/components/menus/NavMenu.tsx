import { type BaseMenuItem } from "@/types/menu.type";
import { NavLink, useNavigation } from "react-router-dom";

type NavMenuProps = {
  links: ReadonlyArray<BaseMenuItem>;
  onClick?: () => void;
};

export default function NavMenu({ links, onClick }: NavMenuProps) {
  const { state } = useNavigation();

  return (
    <ul
      className={`w-fit group flex flex-col items-start xl:flex-row xl:items-center gap-[clamp(1rem,1vw+0.5rem,2.75rem)] ${
        state === "loading" && "no-interact"
      }`}
    >
      {links.map(({ id, href, label, icon: Icon }, _) => (
        <li key={id} className="">
          <NavLink
            to={href}
            onClick={onClick}
            className={({ isActive }) =>
              `interactive-transition flex-center gap-[clamp(0.25rem,0.5vw,0.5rem)] text-muted-text menu-transition group-hover:text-muted-text/50 group-hover:font-normal hover:text-dark ${
                isActive && "text-primary font-medium"
              }`
            }
            prefetch="render"
            draggable={false}
            end
          >
            <Icon className="size-[clamp(1rem,1.25vw,1.875rem)]" />
            <p>{label}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
