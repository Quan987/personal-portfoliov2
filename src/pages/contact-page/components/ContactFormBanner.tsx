import { BREAKPOINT } from "@/constants/screen-breakpoint.constants";
import { useIsMobile } from "@/hooks/useIsMobile";
import ChatBubbleIcon from "@/pages/contact-page/components/ui/ChatBubbleIcon";

type ContactFormBannerProps = Readonly<{
  title: string;
  subheader1: string;
  subheader2: string;
  subheader3: string;
}>;

export default function ContactFormBanner({
  title,
  subheader1,
  subheader2,
  subheader3,
}: ContactFormBannerProps) {
  const isMobile = useIsMobile(BREAKPOINT.MD);
  return isMobile ? (
    <div className="bg-dark text-secondary flex flex-col gap-1 p-5">
      <div className="flex justify-start items-center gap-2">
        <ChatBubbleIcon className="size-5" />
        <h1 className="text-base font-medium">{title}</h1>
      </div>
      <p className="text-xs">{subheader2}</p>
    </div>
  ) : (
    <div
      id="contact-banner"
      className={
        "bg-dark text-secondary text-center flex-col-center w-full gap-[clamp(0.5rem,1vw,1.25rem)] text-[clamp(0.875rem,1vw,2rem)] md:py-[clamp(1.25rem,2vw,2.5rem)] lg:px-[clamp(2.5rem,5vw,3.75rem)]"
      }
    >
      <div className="flex-center gap-2.5">
        <ChatBubbleIcon className="size-[clamp(1.25rem,2vw,2.5rem)]" />
        <h1 className={"font-normal text-[clamp(1.25rem,1.5vw,2.5rem)]"}>
          {title}
        </h1>
      </div>
      <p className={"text-balance"}>
        <span>{subheader1}</span>
        {". "}
        <span>{subheader2}</span>
      </p>
      <p className={""}>{subheader3}</p>
    </div>
  );
}
