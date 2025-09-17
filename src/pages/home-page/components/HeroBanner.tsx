import LoadingIcon from "@/components/icons/LoadingIcon";
import { useState } from "react";

type HeroBannerProps = Readonly<{
  image: string;
  alt: string;
}>;

export default function HeroBanner({ image, alt }: HeroBannerProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative lg:px-[clamp(0rem,calc(1.5vw_-_0.75rem),5rem)]">
      {!loaded && (
        <div className="absolute inset-0 flex-center z-lazy-loading">
          <LoadingIcon className="size-[clamp(2.5rem,6vw,6.25rem)] text-surface animate-spin fill-info" />
        </div>
      )}
      <img
        src={image}
        alt={alt}
        draggable={false}
        className={`size-full text-primary ${
          loaded ? "animate-float" : "blur-lg"
        }`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
