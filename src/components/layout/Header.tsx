import Logo from "@/components/layout/Logo";
import NavMenu from "@/components/menus/NavMenu";
import SocialMenu from "@/components/menus/SocialMenu";
import HamburgerMenuContent from "@/components/ui/burger-menu";
import { BurgerMenuProvider } from "@/components/ui/burger-menu/BurgerMenuContext";
import { NAV_LINKS } from "@/constants/nav-links.constants";
import { BREAKPOINT } from "@/constants/screen-breakpoint.constants";
import { SOCIAL_LINKS } from "@/constants/social-links.constants";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Header() {
  const isMobile = useIsMobile(BREAKPOINT.XL);

  return (
    <header className={"z-header"}>
      <nav
        className={`relative flex justify-between items-center px-[clamp(1.25rem,4vw,6.25rem)] py-[clamp(1.25rem,1vw,2.5rem)] text-[clamp(1rem,1vw,2.5rem)]`}
      >
        <Logo className="">Quan Tran</Logo>
        {isMobile ? (
          <BurgerMenuProvider>
            <HamburgerMenuContent />
          </BurgerMenuProvider>
        ) : (
          <>
            {" "}
            <NavMenu links={NAV_LINKS} />
            <SocialMenu links={SOCIAL_LINKS} />
          </>
        )}
      </nav>
    </header>
  );
}
