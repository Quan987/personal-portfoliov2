import HorizontalLine from "@/components/ui/HorizontalLine";
import ProjectCard from "@/components/ProjectCard";
import data from "@/data/data-constants"


export default function Project() {
    return (
        <section id="projects" className="py-35 -scroll-m-25">
            <div className="flex justify-center items-center gap-3 py-15">
                <h2 className="text-3xl text-midnight-navy font-bold uppercase tracking-wider">Projects</h2>
                <HorizontalLine lineWidth={"w-full"}/>
            </div>
            <ul className="grid grid-cols-3 gap-5">
                {data.projects.map((item, index) => (
                    <li key={`${item.title.trim().toLowerCase()}-${index}`} className={"group"}>
                        <ProjectCard data={item} />
                    </li>
                ))}
            </ul>
        </section>
    )
}