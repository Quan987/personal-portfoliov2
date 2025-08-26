type ProjectHeaderProps = Readonly<{
  header: string;
  subheader: string;
}>;

export default function ProjectHeader({
  header,
  subheader,
}: ProjectHeaderProps) {
  return (
    <div
      id="project-header"
      className="flex flex-col gap-[clamp(0.25rem,0.3vw,0.5rem)] mb-[clamp(0.75rem,0.75vw,3rem)]"
    >
      <h1 className="text-primary leading-none text-[clamp(1.5rem,1.75vw,3.75rem)]">
        {header}
      </h1>
      <p className="text-muted-text text-[clamp(0.75rem,1vw,1.5rem)]">
        {subheader}
      </p>
    </div>
  );
}
