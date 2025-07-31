import { NavMenuProps } from "@/constants/links.type";
import { NavLink } from "react-router-dom";

export default function NavMenu({ links }: NavMenuProps) {
  return (
    <ul className="flex items-center group gap-3">
      {links.map(({ id, href, label }, _) => (
        <li key={id} className="">
          <NavLink
            to={href}
            className={({ isActive }) =>
              `block size-full transition-colors duration-250 group-hover:text-foreground-muted hover:text-foreground-primary px-2 ${
                isActive ? "text-foreground-primary" : "text-foreground-muted"
              }`
            }
            draggable={false}
            end
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
