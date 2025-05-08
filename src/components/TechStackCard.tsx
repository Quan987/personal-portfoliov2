
interface CardProps {
    title: string;
    icon: string;
}

export default function TechStackCard({title, icon}: CardProps) {
    return (
        <div className="h-32 w-28 flex flex-col items-center justify-center gap-2 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="size-14 p-4 border-1 border-solid border-silver-white rounded-full bg-silver-white pointer-events-none">
                <img loading="lazy" src={icon} alt={title}/>
            </div>
            <h2 className="text-sm text-center text-silver-white">{title}</h2>
        </div>
    )
}