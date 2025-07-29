type LoadingDotProps = {
  stagger: number;
  dotCount: number;
  className?: string;
};

export default function LoadingIndicator({
  stagger,
  dotCount,
  className,
}: LoadingDotProps) {
  return (
    <div
      className={`h-full z-loading bg-primary-light animate-fade-in ${className}`}
    >
      <span className="sr-only">Loading...</span>
      <div className="flex gap-3 justify-center items-center ">
        {Array.from({ length: dotCount }).map((_, index) => (
          <div
            className="size-5 bg-primary-dark rounded-full animate-bounce"
            style={{
              animationDelay: `${index * -stagger}ms`,
            }}
          ></div>
        ))}
      </div>
      <p className="mt-5 text-3xl font-normal text-center">
        Taking you there...
      </p>
    </div>
  );
}
