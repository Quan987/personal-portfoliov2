import {ButtonHTMLAttributes, ReactNode} from "react";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
}

export default function Button({children, ...props}: ButtonProps) {
    return (
        <button {...props} className={"hover-tilt w-fit border-1 border-tangerine bg-tangerine hover:bg-white hover:text-tangerine text-sm rounded-md uppercase px-10 py-3"}>{children}</button>
    )
}

// hover-tilt inline-block uppercase bg-tangerine text-black border-tangerine hover:bg-white hover:text-tangerine text-sm rounded-md border-1 mt-auto