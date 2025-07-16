import { NavLink } from "react-router-dom";
import { NAV_LINKS, SOCIAL_LINKS } from "@/config/constants";

// isChecked ? "animate-slide-in" : "animate-slide-out"
export default function Header() {
  return (
    <header className={"absolute inset-x-0 top-0 2xl:py-5 2xl:px-10 z-100"}>
      <nav className="flex justify-between items-center">
        <div className={"font-medium text-black text-xl 2xl:pl-3.5"}>
          Quan Tran
        </div>

        {/* Navigation internal */}
        <ul className="flex items-center group">
          {NAV_LINKS.map((link, index) => (
            <li key={link.id} className="">
              <NavLink
                // to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                to={link.href}
                className={({ isActive }) => `
                inline-block h-fit w-full duration-300 group-hover:text-zinc-500 hover:text-black 2xl:px-3.5 ${
                  isActive ? "text-black" : "text-zinc-500"
                }`}
                draggable={false}
                end
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Navigation external */}
        <ul className="flex items-center group">
          {SOCIAL_LINKS.map((link, index) => {
            // Calling the function to produce a react element, essentially this become: createElement(GitHubIcon)
            const Icon = link.icon;
            return (
              <li key={link.id} className="">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  draggable={false}
                  className="block duration-300 group-hover:text-zinc-500 hover:text-black 2xl:px-3.5"
                >
                  <Icon />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
