interface AboutBannerProps {
  header: string;
  illustration: {
    image: string;
    alt: string;
  };
}

export default function AboutBanner({
  header,
  illustration,
}: AboutBannerProps) {
  return (
    <div className="text-primary-dark">
      <h1 className="absolute w-fit uppercase tracking-wide font-medium 2xl:text-9xl 2xl:right-70 2xl:top-5">
        {header}
      </h1>
      <div className="bg-primary-dark pointer-none select-none absolute bottom-0 right-0 h-3 w-30"></div>

      <figure className="bg-secondary-light w-fit 2xl:h-[45rem] 2xl:pt-30 2xl:px-15">
        <img
          src={illustration.image}
          alt={illustration.alt}
          loading="lazy"
          draggable="false"
          className="block pointer-none select-none h-full"
        />
      </figure>
    </div>
  );
}
