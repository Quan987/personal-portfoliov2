import { memo } from "react";
import {
  CarouselContent,
  CarouselItem,
} from "@/lib/ui-shadcn/components/ui/carousel";
import ProjectCardBody from "@/pages/ProjectPage/components/ProjectCarousel/ProjectCardBody";
import ProjectCardHeader from "@/pages/ProjectPage/components/ProjectCarousel/ProjectCardHeader";

export type ProjectCarouselProps = {
  projects: ReadonlyArray<{
    id: string;
    isEmpty: boolean;
    type: string;
    title: string;
    description: string;
    stacks: ReadonlyArray<string>;
    link: string;
    readonly illustration: {
      image: string;
      alt: string;
    };
  }>;
};

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
