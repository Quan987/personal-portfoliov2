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

// Composed type
export type Project = ProjectMeta &
  ProjectLink &
  ProjectIllustration &
  ProjectContent;
