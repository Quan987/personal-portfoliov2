
interface HorizontalLineProps {
    lineWidth: string;
}

export default function HorizontalLine({lineWidth}: HorizontalLineProps) {
    return (
        <hr className={`${lineWidth}  border-2 border-orange-600 rounded-3xl pointer-events-none select-none`}/>
    )
}