
interface ProjectCardProps {
    name: string;
}

export default function ProjectCard({name}: ProjectCardProps) {
    return (
        <button type={"button"}>
            <a>
                <h3>{name}</h3>
                <figure>
                    <img alt={"none"}/>
                    <figcaption>Tech Stack</figcaption>
                </figure>
                <p>Description</p>
            </a>
        </button>
    )
}