import {
  CarouselContent,
  CarouselItem,
} from "@/lib/shadcn/components/ui/carousel";
import { type ProjectCarouselProps } from "@/pages/project-page/components/project-carousel/project-carousel.types";
import ProjectCardBody from "@/pages/project-page/components/project-carousel/ProjectCardBody";
import ProjectCardHeader from "@/pages/project-page/components/project-carousel/ProjectCardHeader";
import { memo } from "react";

function ProjectCard({ projects }: ProjectCarouselProps) {
  return (
    <CarouselContent>
      {projects.map(
        ({
          id,
          isEmpty,
          type,
          title,
          description,
          stacks,
          link,
          illustration,
        }) => (
          <CarouselItem key={id} className="basis-1/3">
            <div
              id="card"
              className="relative bg-no-repeat bg-cover flex flex-col justify-between text-foreground-secondary rounded-xl 2xl:h-[35rem]"
              style={{
                backgroundImage: `url(${illustration.image})`,
              }}
            >
              {!isEmpty && (
                <>
                  <ProjectCardHeader type={type} link={link} />
                  <ProjectCardBody
                    title={title}
                    description={description}
                    stacks={stacks}
                    link={link}
                  />
                </>
              )}
            </div>
          </CarouselItem>
        )
      )}
    </CarouselContent>
  );
}

// wrap in React.memo so it still skips re-renders
export default memo(ProjectCard);
