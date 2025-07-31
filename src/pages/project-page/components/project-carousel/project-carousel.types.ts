// Base types for reuse
type ProjectLink = Readonly<{
  link: string;
}>;

type ProjectIllustration = Readonly<{
  illustration: {
    image: string;
    alt: string;
  };
}>;

type ProjectMeta = Readonly<{
  id: string;
  isEmpty: boolean;
  type: string;
}>;

type ProjectContent = Readonly<{
  title: string;
  description: string;
  stacks: ReadonlyArray<string>;
}>;

// Final composed project
export type Project = ProjectMeta &
  ProjectLink &
  ProjectIllustration &
  ProjectContent;

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
}>;
