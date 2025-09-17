import { RefObject } from "react";

type RouteLoadingIndicatorProps = {
  className?: string;
  stagger: number;
  dotCount: number;
  ref?: RefObject<HTMLDivElement | null>;
};

export default function RouteLoadingIndicator({
  stagger,
  dotCount,
  className,
}: // ref,
RouteLoadingIndicatorProps) {
  return (
    <div
      id="loading-indicator-screen"
      // ref={ref}
      className={`size-full z-loading bg-light absolute inset-0 ${className}`}
    >
      <div className="h-full flex-col-center gap-[clamp(0.75rem,2vw,3rem)]">
        <span className="sr-only">Loading...</span>
        <div className="flex-center gap-[clamp(0.75rem,1.25vw,1.5rem)]">
          {Array.from({ length: dotCount }).map((_, index) => (
            <div
              key={`${index + stagger}-loading-dot`}
              className="bg-dark rounded-full animate-bounce-fade size-[clamp(0.75rem,1.25vw,2rem)]"
              style={{
                animationDuration: `var(--bounce-fade-animation-duration)`,
                animationDelay: `${index * stagger}ms`,
              }}
            ></div>
          ))}
        </div>
        <p className="font-normal text-center text-[clamp(1.25rem,2vw,3rem)]">
          Taking you there...
        </p>
      </div>
    </div>
  );
}
