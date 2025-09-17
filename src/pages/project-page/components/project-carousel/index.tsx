import { useCallback, useEffect, useState } from "react";
import {
  CarouselApi,
  Carousel,
  CarouselPrevious,
  CarouselNext,
} from "@/lib/shadcn/components/ui/carousel";
import { type ProjectCarouselProps } from "@/pages/project-page/types/project-carousel.types";
import ProjectCard from "@/pages/project-page/components/project-carousel/ProjectCard";
import ProjectCardPagination from "@/pages/project-page/components/project-carousel/ProjectCardPagination";
import { BREAKPOINT } from "@/constants/screen-breakpoint.constants";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const isMobile = useIsMobile(BREAKPOINT.LG);
  const [api, setApi] = useState<CarouselApi>();
  const [pagination, setPagination] = useState({
    currentPage: 0,
    totalPages: 0,
  });

  const scrollToPage = useCallback(
    (page: number) => api?.scrollTo(page),
    [api]
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    const updatePagination = () => {
      setPagination({
        totalPages: api.scrollSnapList().length,
        currentPage: api.selectedScrollSnap(),
      });
    };

    updatePagination();

    api.on("select", updatePagination);

    const handleResize = () => {
      api.reInit();
      updatePagination();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      api.off("select", updatePagination);
      window.removeEventListener("resize", handleResize);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      // plugins={[
      //   Autoplay({
      //     delay: CAROUSEL_AUTO_PLAY_DURATION,
      //     stopOnMouseEnter: true,
      //     stopOnInteraction: true,
      //     // stopOnFocusIn: true,
      //     breakpoints: {
      //       "(orientation: portrait)": {
      //         active: false, // disable autoplay in portrait
      //       },
      //     },
      //   }),
      // ]}
      opts={{
        align: "start",
        loop: false,
        slidesToScroll: 1,
        containScroll: "trimSnaps",
        breakpoints: {
          [`(min-width: ${BREAKPOINT.SM}px)`]: {
            slidesToScroll: 2,
          },
          [`(min-width: ${BREAKPOINT.MD}px)`]: {
            slidesToScroll: 1,
          },
          [`(min-width: ${BREAKPOINT.LG}px)`]: {
            slidesToScroll: 2,
          },
          [`(min-width: ${BREAKPOINT.XL}px)`]: {
            slidesToScroll: 1,
          },
        },
      }}
      id="project-carousel"
      className="w-full"
    >
      <ProjectCard projects={projects} />
      {!isMobile && (
        <>
          {" "}
          <CarouselPrevious className="carousel-button interactive-transition size-[clamp(1.75rem,2vw,3.25rem)] 3xl:-left-15 4xl:-left-23" />
          <CarouselNext className="carousel-button interactive-transition size-[clamp(1.75rem,2vw,3.25rem)] 3xl:-right-15 4xl:-right-23" />
        </>
      )}
      <ProjectCardPagination
        current={pagination.currentPage}
        count={pagination.totalPages}
        onPageChange={scrollToPage}
      />
    </Carousel>
  );
}
