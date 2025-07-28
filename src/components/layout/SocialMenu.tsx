import { SOCIAL_LINKS } from "@/constants";

export default function SocialMenu() {
  return (
    <ul className="flex items-center group gap-3">
      {SOCIAL_LINKS.map(({ id, href, icon: Icon }, _) => {
        return (
          <li key={id} className="">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              draggable={false}
              className="block transition-colors duration-200 text-foreground-primary group-hover:text-foreground-muted hover:text-foreground-primary px-2"
            >
              <Icon className="2xl:size-6.5 fill-current" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
