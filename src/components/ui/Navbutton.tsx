import { cn } from "@/lib/ui-shadcn/utils/utils";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavbuttonProps {
  link: string;
  className?: string;
  children?: ReactNode;
}

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
        "block w-fit bg-primary-dark text-primary-light rounded-md border-2 border-primary-dark transition-all duration-200 hover:-translate-1 hover:bg-primary-light hover:text-primary-dark",
        className
      )}
    >
      {children}
    </NavLink>
  );
}
