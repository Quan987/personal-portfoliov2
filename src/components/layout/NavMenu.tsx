import { NAV_LINKS } from "@/config/constants";
import { NavLink } from "react-router-dom";

export default function NavMenu() {
  return (
    <ul className="flex items-center group gap-3">
      {NAV_LINKS.map((link, _) => (
        <li key={link.id} className="">
          <NavLink
            to={link.href}
            className={({ isActive }) =>
              `block size-full transition-colors duration-300 ${
                isActive ? "text-primary-dark" : "text-secondary-muted"
              } group-hover:text-secondary-muted hover:text-primary-dark px-2`
            }
            draggable={false}
            end
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
