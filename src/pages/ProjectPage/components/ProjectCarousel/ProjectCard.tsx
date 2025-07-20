import { ReactNode } from "react";

interface ProjectCardProps {
  children?: ReactNode;
  backgroundImage: string;
}

export default function ProjectCard({
  children,
  backgroundImage,
}: ProjectCardProps) {
  return (
    <div
      id="card"
      className="relative bg-no-repeat bg-cover flex flex-col justify-between text-primary-light rounded-xl 2xl:h-[35rem] "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {children}
    </div>
  );
}
