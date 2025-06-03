import data from "@/data/dataConstants.ts";
import MobileMenu from "@/components/nav/MobileMenu.tsx";
import NonMobileMenu from "@/components/nav/NonMobileMenu.tsx";
import { NavLink } from "react-router-dom";

// isChecked ? "animate-slide-in" : "animate-slide-out"

const socialMedia = data.socialMedia;
const menuItems = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
  return (
    <header className={"absolute inset-x-0 top-0 2xl:py-5 2xl:px-10 z-100"}>
      <nav className="flex justify-between items-center">
        <p className={"font-medium text-black text-xl 2xl:pl-3.5"}>Quan Tran</p>

        {/* Navigation internal */}
        <ul className="flex items-center group">
          {menuItems.map((item, index) => (
            <li key={`${index}-${item}`} className="">
              <NavLink
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className={({ isActive }) => `
                inline-block h-fit w-full duration-300 group-hover:text-zinc-500 hover:text-black 2xl:px-3.5 ${
                  isActive ? "text-black" : "text-zinc-500"
                }`}
                draggable={false}
                end
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Navigation external */}
        <ul className="flex items-center group">
          {socialMedia.map((media, index) => (
            <li key={`${index}-${media}`} className="">
              <a
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                draggable={false}
                className="block duration-300 group-hover:text-zinc-500 hover:text-black 2xl:px-3.5"
              >
                {media.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
