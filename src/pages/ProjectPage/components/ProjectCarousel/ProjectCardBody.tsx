export interface ProjectCardBodyProps {
  title: string;
  description: string;
  stacks: readonly string[];
  link: string;
}

export default function ProjectCardBody({
  title,
  description,
  stacks,
  link,
}: ProjectCardBodyProps) {
  return (
    <div
      id="card-body"
      className="flex flex-col 2xl:p-5 backdrop-blur-sm mask-t-from-90% rounded-xl"
    >
      <div className="flex flex-col gap-3 2xl:pt-5 2xl:pb-10">
        <div className="2xl:text-2xl">{title}</div>
        <p className="2xl:text-sm">{description}</p>
        <ul className="flex gap-3 2xl:text-sm">
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
        className="flex justify-center gap-2 text-black bg-white border-white border-2 rounded-full mt-auto 2xl:py-2 transition-colors duration-300 hover:bg-white/0 hover:text-white"
      >
        <p>View Project</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
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
