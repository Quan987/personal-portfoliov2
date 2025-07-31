import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  CarouselApi,
  Carousel,
  CarouselPrevious,
  CarouselNext,
} from "@/lib/shadcn/components/ui/carousel";
import { type ProjectCarouselProps } from "@/pages/project-page/components/project-carousel/project-carousel.types";
import ProjectCard from "@/pages/project-page/components/project-carousel/ProjectCard";
import ProjectCardPagination from "@/pages/project-page/components/project-carousel/ProjectCardPagination";

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [pagination, setPagination] = useState({
    currentPage: 0,
    totalPages: 0,
  });

  useEffect(() => {
    if (!api) {
      return;
    }
    setPagination({
      totalPages: api.scrollSnapList().length,
      currentPage: api.selectedScrollSnap() + 1,
    });

    api.on("select", () => {
      setPagination((prev) => ({
        ...prev,
        currentPage: api.selectedScrollSnap() + 1,
      }));
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnMouseEnter: true,
          stopOnInteraction: true,
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
      <ProjectCard projects={projects} />
      <CarouselPrevious className="carousel-button size-9" />
      <CarouselNext className="carousel-button size-9" />
      <ProjectCardPagination
        current={pagination.currentPage}
        count={pagination.totalPages}
      />
    </Carousel>
  );
}
