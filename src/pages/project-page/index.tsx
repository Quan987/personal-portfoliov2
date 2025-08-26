import ProjectCarousel from "@/pages/project-page/components/project-carousel";
import ProjectHeader from "@/pages/project-page/components/ProjectHeader";
import { PROJECTS } from "@/pages/project-page/project-carousel.constants";

export function Project() {
  return (
    <section
      id="projects"
      className="lg:px-[clamp(0rem,calc(5rem_-_5vw),1.25rem)] xl:py-10 2xl:py-0"
    >
      <ProjectHeader header={PROJECTS.header} subheader={PROJECTS.subheader} />
      <ProjectCarousel projects={PROJECTS.carousel} />
    </section>
  );
}
