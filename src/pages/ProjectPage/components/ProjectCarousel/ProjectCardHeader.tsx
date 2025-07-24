interface ProjectCardHeaderProps {
  type: string;
  link: string;
}

export default function ProjectCardHeader({
  type,
  link,
}: ProjectCardHeaderProps) {
  return (
    <div
      id="card-header"
      className="text-foreground-secondary flex justify-between p-5"
    >
      <h4>{type}</h4>
      <a
        href={link}
        target="_blank"
        draggable="false"
        rel="noopener noreferrer"
        className="hover-tilt hover:-translate-y-0.5 hover:translate-x-0.5"
      >
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
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </a>
    </div>
  );
}
