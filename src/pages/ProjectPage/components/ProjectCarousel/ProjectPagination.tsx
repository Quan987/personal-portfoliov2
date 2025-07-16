interface ProjectPaginationProps {
  current: number;
  count: number;
}

export default function ProjectPagination({
  current,
  count,
}: ProjectPaginationProps) {
  return (
    <div className="text-zinc-500 py-2 text-center text-sm pt-4">
      Page {current} of {count}
    </div>
  );
}
