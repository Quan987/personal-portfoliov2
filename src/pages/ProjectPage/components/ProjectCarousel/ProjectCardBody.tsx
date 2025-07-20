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
      className="flex flex-col backdrop-blur-sm mask-t-from-90% rounded-xl p-6 h-[18rem]"
    >
      <div className="flex flex-col gap-3">
        <div className="text-2xl">{title}</div>
        <p className="text-sm">{description}</p>
        <ul className="flex gap-3 text-sm">
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
        className="flex justify-center gap-2 text-primary-dark bg-primary-light border-primary-light border-2 rounded-full mt-auto py-2 transition-colors duration-300 hover:bg-primary-light/0 hover:text-primary-light"
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
