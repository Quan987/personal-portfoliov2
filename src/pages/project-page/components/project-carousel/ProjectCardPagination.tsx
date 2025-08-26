import { BREAKPOINT } from "@/constants/screen-breakpoint.constants";
import { useIsMobile } from "@/hooks/useIsMobile";
import { type ProjectPaginationProps } from "@/pages/project-page/types/project-carousel.types";

export default function ProjectCardPagination({
  current,
  count,
  onPageChange,
}: ProjectPaginationProps) {
  const isMobile = useIsMobile(BREAKPOINT.XL);

  return isMobile ? (
    <div className="flex-center gap-2 md:gap-3 mt-6 md:mt-8">
      {Array.from({ length: count }, (_, index) => {
        return (
          <button
            key={`project-card-pagination-${index}`}
            type="button"
            onClick={() => onPageChange?.(index)}
            className={`
              size-2 md:size-2.5 rounded-full transition-colors 
              ${index === current ? "bg-dark" : "bg-surface"}
            `}
            aria-label={`Go to page ${index}`}
          />
        );
      })}
    </div>
  ) : (
    <div className="text-muted-text text-center text-[clamp(0.875rem,1vw,1.5rem)] mt-[clamp(1rem,1vw,2rem)]">
      Page {current + 1} of {count}
    </div>
  );
}
