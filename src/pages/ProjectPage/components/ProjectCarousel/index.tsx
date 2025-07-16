import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/lib/ui-shadcn/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { PROJECTS } from "@pages/ProjectPage/project.constants";
import ProjectCard from "@/pages/ProjectPage/components/ProjectCarousel/ProjectCard";
import ProjectCardBody from "@/pages/ProjectPage/components/ProjectCarousel/ProjectCardBody";
import ProjectCardHeader from "@/pages/ProjectPage/components/ProjectCarousel/ProjectCardHeader";
import ProjectPagination from "@/pages/ProjectPage/components/ProjectCarousel/ProjectPagination";

export function ProjectCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);

    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      {" "}
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          loop: false,
          containScroll: "trimSnaps",
          breakpoints: {
            "(max-width: 1023px)": {
              watchDrag: true,
            },
            "(min-width: 1024px)": {
              watchDrag: false,
            },
          },
        }}
        id="project-carousel"
        className="w-full"
      >
        <CarouselContent>
          {PROJECTS.carousel.map((project, _) => (
            <CarouselItem key={project.id} className="basis-1/3">
              <ProjectCard backgroundImage={project.illustration.image}>
                {!project.isEmpty && (
                  <>
                    <ProjectCardHeader
                      type={project.type}
                      link={project.link}
                    />
                    <ProjectCardBody
                      title={project.title}
                      description={project.description}
                      stacks={project.stacks}
                      link={project.link}
                    />
                  </>
                )}
              </ProjectCard>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-black text-white" />
        <CarouselNext className="bg-black text-white" />
      </Carousel>
      <ProjectPagination current={current} count={count} />
    </>
  );
}
