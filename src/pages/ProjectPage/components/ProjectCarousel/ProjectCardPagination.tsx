type ProjectPaginationProps = Readonly<{
  current: number;
  count: number;
}>;

export default function ProjectCardPagination({
  current,
  count,
}: ProjectPaginationProps) {
  return (
    <div className="text-foreground-muted text-center text-sm mt-5">
      Page {current} of {count}
    </div>
  );
}
