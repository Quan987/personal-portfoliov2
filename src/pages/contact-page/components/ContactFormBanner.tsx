type ContactFormBannerProps = Readonly<{
  title: string;
  subheader1: string;
  subheader2: string;
}>;

export default function ContactFormBanner({
  title,
  subheader1,
  subheader2,
}: ContactFormBannerProps) {
  return (
    <div
      id="contact-banner"
      className={
        "bg-primary-dark text-foreground-secondary flex flex-col items-center 2xl:p-25"
      }
    >
      <h1 className={"text-3xl"}>{title}</h1>
      <div className={"text-center"}>
        <p className={"mt-10"}>{subheader1}</p>
        <p className={"mt-10"}>{subheader2}</p>
      </div>
    </div>
  );
}
