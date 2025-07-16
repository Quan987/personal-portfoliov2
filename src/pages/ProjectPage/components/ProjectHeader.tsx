interface ProjectHeaderProps {
  header: string;
  subheader: string;
}

export default function ProjectHeader({
  header,
  subheader,
}: ProjectHeaderProps) {
  return (
    <div id="project-header" className="flex flex-col 2xl:gap-1 2xl:mb-10">
      <h1 className="2xl:text-5xl">{header}</h1>
      <p className="2xl:text-lg">{subheader}</p>
    </div>
  );
}
