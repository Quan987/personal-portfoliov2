import ProjectCarousel from "@/pages/project-page/components/project-carousel";
import ProjectHeader from "@/pages/project-page/components/ProjectHeader";
import { PROJECTS } from "@/pages/project-page/project.constants";

export function Project() {
  return (
    <section id="projects">
      <ProjectHeader header={PROJECTS.header} subheader={PROJECTS.subheader} />
      <ProjectCarousel projects={PROJECTS.carousel} />
    </section>
  );
}
