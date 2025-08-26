import {
  CarouselContent,
  CarouselItem,
} from "@/lib/shadcn/components/ui/carousel";
import { type ProjectCarouselProps } from "@/pages/project-page/types/project-carousel.types";
import ProjectCardBody from "@/pages/project-page/components/project-carousel/ProjectCardBody";
import ProjectCardHeader from "@/pages/project-page/components/project-carousel/ProjectCardHeader";
import { memo } from "react";

function ProjectCard({ projects }: ProjectCarouselProps) {
  return (
    <CarouselContent className="-ml-[clamp(0.75rem,1vw,1.75rem)]">
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
        }) => {
          return (
            <CarouselItem
              key={id}
              className="basis-[85%] sm:basis-1/2 md:basis-[70%] lg:basis-1/2 xl:basis-[40%] 2xl:basis-1/3 pl-[clamp(0.75rem,1vw,1.75rem)]"
            >
              <div
                id="card"
                className={`relative bg-no-repeat bg-cover text-secondary rounded-xl flex flex-col justify-between w-full overflow-hidden h-[23rem] md:h-[35rem] lg:h-[28rem] 2xl:h-[32rem] 3xl:h-[38rem] 4xl:h-[51rem]`}
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
          );
        }
      )}
    </CarouselContent>
  );
}

// wrap in React.memo so it still skips re-renders
export default memo(ProjectCard);
