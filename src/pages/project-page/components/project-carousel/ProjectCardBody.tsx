import { type ProjectCardBodyProps } from "@/pages/project-page/types/project-carousel.types";

export default function ProjectCardBody({
  title,
  description,
  stacks,
  link,
  isVisible,
}: ProjectCardBodyProps) {
  return (
    <div
      id="card-body"
      className={`slide-fade ${
        isVisible ? "slide-fade-in" : "slide-fade-down"
      } z-20 absolute inset-x-0 bottom-0 text-secondary flex flex-col backdrop-blur-sm mask-t-from-90% rounded-xl p-[clamp(1rem,1.5vw,2rem)] h-[12rem] xl:h-[13rem] 2xl:h-[16rem] 3xl:h-[20rem] 4xl:h-[27rem] `}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-col gap-[clamp(0.25rem,0.75vw,1rem)]">
        <h3 className="cursor-default leading-tight text-[clamp(1rem,1.45vw,2.5rem)]">
          {title}
        </h3>

        <p className="text-[clamp(0.65rem,0.85vw,2rem)] md:pr-10 2xl:pr-5">
          {description}
        </p>
        <ul className="flex gap-1.5 md:gap-2 4xl:gap-3 text-[clamp(0.65rem,0.85vw,2rem)]">
          {stacks.map((stack, index) => (
            <li key={`${index}-${stack.toLowerCase()}`}>{stack}</li>
          ))}
        </ul>
      </div>

      <a
        id="project-link"
        href={link}
        draggable="false"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-center text-primary bg-light border-2 border-light rounded-full interactive-transition hover:bg-light/0 active:text-secondary active:bg-light/0 hover:text-secondary mt-auto gap-[clamp(0.25rem,1vw,0.5rem)] p-[clamp(0.35rem,0.45vw,0.875rem)]"
      >
        <p className="text-[clamp(0.75rem,1vw,2rem)]">View Project</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-[clamp(1rem,1.5vw,2.5rem)]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </a>
    </div>
  );
}
