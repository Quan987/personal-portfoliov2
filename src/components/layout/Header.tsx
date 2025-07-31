import { NAV_LINKS } from "@/constants/nav-links.constants";
import { SOCIAL_LINKS } from "@/constants/social-links.constants";
import NavMenu from "@/components/layout/NavMenu";
import SocialMenu from "@/components/layout/SocialMenu";

// isChecked ? "animate-slide-in" : "animate-slide-out"
export default function Header() {
  return (
    <header className={"z-header 2xl:py-5 2xl:px-15 2xl:text-lg"}>
      <nav className="flex justify-between items-center">
        <div className={"font-medium text-foreground-primary"}>Quan Tran</div>

        {/* Navigation internal */}
        <NavMenu links={NAV_LINKS} />

        {/* Navigation external */}
        <SocialMenu links={SOCIAL_LINKS} />
      </nav>
    </header>
  );
}
