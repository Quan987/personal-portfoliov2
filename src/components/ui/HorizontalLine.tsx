
interface HorizontalLineProps {
    lineWidth: string;
}

export default function HorizontalLine({lineWidth}: HorizontalLineProps) {
    return (
        <hr className={`${lineWidth} border-1 rounded-3xl border-midnight-navy opacity-70 pointer-events-none select-none`}/>
    )
}