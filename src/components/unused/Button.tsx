import {ButtonHTMLAttributes, ReactNode} from "react";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
}

export default function Button({children, ...props}: ButtonProps) {
    return (
        <button {...props} className={"hover-tilt w-fit border-2 text-white border-blue-900 bg-blue-900 hover:bg-white hover:text-blue-900 rounded-md uppercase tracking-wide text-md px-14 py-3.5"}>{children}</button>
    )
}

// hover-tilt inline-block uppercase bg-tangerine text-black border-tangerine hover:bg-white hover:text-tangerine text-sm rounded-md border-1 mt-auto