import StackIcon from "@/components/icons/StackIcon";
import LinkIcon from "@/components/icons/LinkIcon";

interface ProjectCardProps {
    data: {
        title: string;
        description: string;
        stack: string[];
        link: string;
    }
}

export default function ProjectCard({data}: ProjectCardProps) {
    return (
        <div className="scale-animation p-6 my-3 bg-midnight-navy text-beige rounded-lg shadow-md text-wrap">
            <StackIcon/>
            <h5 className="text-xl my-2">{data.title}</h5>
            <p className="text-sm my-3 opacity-80">{data.description}</p>
            <ul className="text-xs flex items-center gap-x-4 my-4 flex-wrap opacity-60">
                {data.stack.map((item, index) => (
                    <li key={`${item.trim()}-${index}`}>{item}</li>
                ))}
            </ul>
            <a href={data.link} target="_blank" rel="noopener noreferrer" className="inline-flex font-medium items-center gap-2 hover:text-silver-white active:text-silver-white">
                <span>View Project</span>
                <LinkIcon/>
            </a>
        </div>
    );
}