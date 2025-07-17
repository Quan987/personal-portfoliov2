import {
  GitHubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "@/components/icons";

export const SOCIAL_LINKS = [
  {
    id: "social-media-github-link",
    name: "Github",
    href: "https://github.com/Quan987",
    icon: GitHubIcon, // Since GitHubicon is a function, when we storing it like this, we store it as function referene instead of the JSX or element itself
  },
  {
    id: "social-media-linkedin-link",
    name: "Linkedin",
    href: "https://www.linkedin.com/in/qtrann1379",
    icon: LinkedInIcon,
  },
  {
    id: "social-media-twitter-link",
    name: "Twitter",
    href: "https://x.com/qtrann1379",
    icon: TwitterIcon,
  },
  {
    id: "social-media-pinterest-link",
    name: "Pinterest",
    href: "https://www.pinterest.com/qtrann1379/",
    icon: PinterestIcon,
  },
] as const;
