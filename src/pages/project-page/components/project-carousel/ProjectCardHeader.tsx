import { type ProjectCardHeaderProps } from "@/pages/project-page/types/project-carousel.types";

export default function ProjectCardHeader({
  type,
  link,
  isVisible,
}: ProjectCardHeaderProps) {
  return (
    <div
      id="card-header"
      className={`slide-fade ${
        isVisible ? "slide-fade-in" : "slide-fade-up"
      } z-20 absolute inset-x-0 top-0 text-secondary flex justify-between items-center py-3.5 px-[clamp(1rem,1.5vw,2rem)]`}
      onClick={(e) => e.stopPropagation()}
    >
      <h4 className="text-[clamp(0.75rem,1.1vw,1.5rem)]">{type}</h4>
      <a
        href={link}
        target="_blank"
        draggable="false"
        rel="noopener noreferrer"
        className={"hover-tilt"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-[clamp(1rem,1.5vw,2.25rem)]
"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </a>
    </div>
  );
}
