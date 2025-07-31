type HeroBannerProps = Readonly<{
  image: string;
  alt: string;
}>;

export default function HeroBanner({ image, alt }: HeroBannerProps) {
  return (
    <div className="size-full p-5">
      <img
        src={image}
        alt={alt}
        draggable={false}
        className="animate-float text-foreground-primary"
      />
    </div>
  );
}
