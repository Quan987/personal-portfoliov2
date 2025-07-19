import { SOCIAL_LINKS } from "@/config/constants";

export default function SocialMenu() {
  return (
    <ul className="flex items-center group gap-3">
      {SOCIAL_LINKS.map(({ id, href, icon: Icon, name }, _) => {
        // Calling the function to produce a react element, essentially this become: createElement(GitHubIcon)
        // const LinkIcon = link.icon;
        return (
          <li key={id} className="">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              draggable={false}
              className="block size-full transition-colors duration-300 group-hover:text-secondary-muted hover:text-primary-dark px-2"
            >
              {/* <LinkIcon className="2xl:size-6.5" /> */}
              <Icon className="2xl:size-6.5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
