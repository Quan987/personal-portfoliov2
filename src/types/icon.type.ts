import { JSX, SVGProps } from "react";

// This type is for a normal SVG element’s props — just like what you'd pass to <svg> (<svg {...props}></svg>)
export type IconProps = SVGProps<SVGSVGElement>;

// Any field of this type is a JSX component that takes IconProps (like className, width, fill, etc.) and returns an SVG element.
export type IconComponent = (props: IconProps) => JSX.Element;
