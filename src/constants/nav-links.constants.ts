import AboutIcon from "@/components/icons/AboutIcon";
import ContactIcon from "@/components/icons/ContactIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import ProjectIcon from "@/components/icons/ProjectIcon";

export const NAV_LINKS = [
  { id: "home-link", href: "/", label: "Home", icon: HomeIcon },
  { id: "about-link", href: "/about", label: "About", icon: AboutIcon },
  {
    id: "projects-link",
    href: "/projects",
    label: "Projects",
    icon: ProjectIcon,
  },
  { id: "contact-link", href: "/contact", label: "Contact", icon: ContactIcon },
] as const;
