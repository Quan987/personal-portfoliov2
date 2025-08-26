import { Project } from "@/pages/project-page/types/project-base.types";

export type ProjectCarouselProps = {
  projects: ReadonlyArray<Project>;
};

// Subcomponent props derived from base types
export type ProjectCardHeaderProps = Pick<Project, "type" | "link">;

export type ProjectCardBodyProps = Pick<
  Project,
  "title" | "description" | "stacks" | "link"
>;

export type ProjectPaginationProps = Readonly<{
  current: number;
  count: number;
  onPageChange?: (page: number) => void;
}>;
