import HorizontalLine from "@/components/ui/HorizontalLine.tsx";
import ProjectCard from "@/components/ProjectCard";
import {data} from "@/data/data-constants"

export default function Project() {
    return (
        <section id="projects" className="py-50 -scroll-m-25">
            <div className="py-4">
                <h2 className="text-2xl text-midnight-navy font-bold tracking-wider">Projects</h2>
                <HorizontalLine lineWidth={"w-full"}/>
            </div>
            <ul className="flex flex-col items-center justify-center">
                {data.projects.map((item, index) => (
                    <li key={`${item.title.trim().toLowerCase()}-${index}`}>
                        <ProjectCard data={item}/>
                    </li>
                ))}
            </ul>
        </section>
    )
}