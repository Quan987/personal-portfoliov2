import { PROJECTS } from "@/pages/ProjectPage/project.constants";
import { ProjectCarousel } from "./components/ProjectCarousel";
import ProjectHeader from "@/pages/ProjectPage/components/ProjectHeader";

export function Project() {
  return (
    <section id="projects" className="">
      <ProjectHeader header={PROJECTS.header} subheader={PROJECTS.subheader} />
      <ProjectCarousel />
    </section>
  );
}
