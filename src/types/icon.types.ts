import { JSX, SVGProps } from "react";

// This type is for a normal SVG element’s props — just like what you'd pass to <svg> (<svg {...props}></svg>)
export type IconProps = SVGProps<SVGSVGElement>;

// IconComponent that will accept an IconProp
export type IconComponent = (props: IconProps) => JSX.Element;
