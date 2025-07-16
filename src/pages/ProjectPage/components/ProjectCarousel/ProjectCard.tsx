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
      className="2xl:h-[36rem] relative bg-no-repeat bg-cover flex flex-col justify-between text-white rounded-xl "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {children}
    </div>
  );
}
