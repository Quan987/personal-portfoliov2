import { useEffect, useRef, useState } from "react";
import { DataSocialMedia } from "@/types/emailjs.types";

export default function MobileMenu({ socialMedia }: DataSocialMedia) {
  const [isChecked, setIsChecked] = useState(false);
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    document.body.style.overflow = isChecked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isChecked]);

  const handleClick = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div
      className={
        "flex lg:hidden lg:pointer-events-none lg:select-none lg:animate-none"
      }
    >
      <button
        type={"button"}
        onClick={handleClick}
        className="flex flex-col gap-1 md:gap-1 cursor-pointer z-20"
      >
        <span
          className={`hamburger-line ${
            isChecked ? "rotate-45 translate-y-[8px]" : ""
          }`}
        />
        <span
          className={`hamburger-line ${isChecked ? "opacity-0 scale-x-0" : ""}`}
        />
        <span
          className={`hamburger-line ${
            isChecked ? "-rotate-45 -translate-y-[8px]" : ""
          }`}
        />
      </button>

      {!initialRender.current && (
        <ul
          className={`z-10 absolute top-0 inset-x-0 flex flex-col justify-center gap-12 md:gap-14 w-full h-screen bg-silver ${
            isChecked ? "animate-slide-in" : "animate-slide-out"
          }`}
        >
          {socialMedia.map((media, index) => (
            <li
              key={`${index}-${media.name}`}
              className={"w-2/3 flex justify-end"}
            >
              <a
                href={media.link}
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  "flex items-center justify-center gap-2 active:text-navy-blue"
                }
              >
                <p className={"font-bold text-2xl md:text-3xl"}>{media.name}</p>
                <img
                  src={media.icon}
                  alt={`${media.name.toLowerCase()}-logo`}
                  className={"w-8 md:w-10 pointer-events-none select-none"}
                />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
