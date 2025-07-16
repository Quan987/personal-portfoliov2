import {ReactNode} from "react";

interface ParagraphTextProps {
    text: string;
    className?: string;
    children?: ReactNode;
}

export default function ParagraphText({ className, text, children }: ParagraphTextProps) {
    return(
        <p className={`${className}`}>{text} {children}</p>
    )
}