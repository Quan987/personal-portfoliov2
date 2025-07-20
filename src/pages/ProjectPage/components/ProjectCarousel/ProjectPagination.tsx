interface ProjectPaginationProps {
  current: number;
  count: number;
}

export default function ProjectPagination({
  current,
  count,
}: ProjectPaginationProps) {
  return (
    <div className="text-secondary-muted text-center text-sm mt-5">
      Page {current} of {count}
    </div>
  );
}
