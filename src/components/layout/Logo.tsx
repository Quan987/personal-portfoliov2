import { ReactNode } from "react";

type LogoProps = {
  className?: string;
  children?: ReactNode;
};

export default function Logo({ children, className }: LogoProps) {
  return (
    <div className={`font-medium text-primary ${className}`}>{children}</div>
  );
}
