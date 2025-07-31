import { cn } from "@/lib/shadcn/utils/utils";
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
      className={cn(
        "block w-fit bg-primary-dark text-foreground-secondary rounded-sm border-1 border-primary-dark hover:bg-primary-light hover:text-foreground-primary",
        className
      )}
    >
      {children}
    </NavLink>
  );
}
