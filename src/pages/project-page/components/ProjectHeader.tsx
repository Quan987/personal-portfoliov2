type ProjectHeaderProps = Readonly<{
  header: string;
  subheader: string;
}>;

export default function ProjectHeader({
  header,
  subheader,
}: ProjectHeaderProps) {
  return (
    <div id="project-header" className="flex flex-col 2xl:gap-1 2xl:mb-5">
      <h1 className="2xl:text-4xl text-foreground-primary">{header}</h1>
      <p className="text-foreground-muted 2xl:text-md">{subheader}</p>
    </div>
  );
}
