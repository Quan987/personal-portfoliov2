import clsx from "clsx";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type NavbuttonProps = {
  link: string;
  className?: string;
  children?: ReactNode;
};

export default function Navbutton({
  link = "",
  className = "",
  children,
}: NavbuttonProps) {
  return (
    <NavLink
      to={link}
      draggable={false}
      end
      className={clsx("btn-primary hover-tilt", className)}
    >
      {children}
    </NavLink>
  );
}
