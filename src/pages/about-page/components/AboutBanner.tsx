import LoadingIcon from "@/components/icons/LoadingIcon";
import { useState } from "react";

type AboutBannerProps = Readonly<{
  header: string;
  readonly illustration: {
    image: string;
    alt: string;
  };
}>;

export default function AboutBanner({
  header,
  illustration,
}: AboutBannerProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className="text-primary relative w-fit xl:h-[32rem] 2xl:h-[38rem] 3xl:h-[44rem] 4xl:h-[58rem]">
      <h1 className="w-fit z-header uppercase tracking-wide whitespace-nowrap font-medium leading-none text-[clamp(2.5rem,6.50vw,11rem)] xl:absolute xl:top-5 xl:left-86 2xl:left-101 3xl:left-114.5 4xl:top-10 4xl:left-150">
        {header}
      </h1>
      {!loaded && (
        <div className="absolute inset-0 flex-center z-lazy-loading">
          <LoadingIcon className="size-[clamp(2.5rem,6vw,6.25rem)] text-surface animate-spin fill-info" />
        </div>
      )}
      <img
        src={illustration.image}
        alt={illustration.alt}
        draggable="false"
        className={`block no-interact size-full my-5 xl:my-0  ${
          !loaded && "blur-lg"
        }`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </figure>
  );
}
