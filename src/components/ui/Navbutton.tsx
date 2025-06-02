import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavbuttonProps {
  link: string;
  cssClass?: string;
  children?: ReactNode;
}

export default function Navbutton({
  link = "",
  cssClass = "",
  children,
}: NavbuttonProps) {
  return (
    <NavLink
      to={link}
      draggable={false}
      end
      className={({}) =>
        `block w-fit bg-black text-white text-md border-2 border-black rounded-lg transition-all duration-200 hover:-translate-1 hover:bg-white hover:text-black ${cssClass}`
      }
    >
      {children}
    </NavLink>
  );
}
