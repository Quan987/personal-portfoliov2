import { PROJECTS } from "@/pages/ProjectPage/project.constants";
import ProjectHeader from "@/pages/ProjectPage/components/ProjectHeader";
import ProjectCarousel from "@/pages/ProjectPage/components/ProjectCarousel/ProjectCarousel";

export function Project() {
  return (
    <section id="projects">
      <ProjectHeader header={PROJECTS.header} subheader={PROJECTS.subheader} />
      <ProjectCarousel projects={PROJECTS.carousel} />
    </section>
  );
}
