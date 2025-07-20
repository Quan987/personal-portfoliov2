interface ProjectHeaderProps {
  header: string;
  subheader: string;
}

export default function ProjectHeader({
  header,
  subheader,
}: ProjectHeaderProps) {
  return (
    <div id="project-header" className="flex flex-col 2xl:gap-1 2xl:mb-5">
      <h1 className="2xl:text-4xl text-primary-dark">{header}</h1>
      <p className="text-secondary-muted 2xl:text-md">{subheader}</p>
    </div>
  );
}
