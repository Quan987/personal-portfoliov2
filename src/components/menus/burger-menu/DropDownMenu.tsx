import { forwardRef } from "react";
import NavMenu from "@/components/menus/NavMenu";
import SocialMenu from "@/components/menus/SocialMenu";
import { NAV_LINKS } from "@/constants/nav-links.constants";
import { SOCIAL_LINKS } from "@/constants/social-links.constants";
import { useBurgerMenu } from "@/components/menus/burger-menu/BurgerMenuContext";

const DropDownMenu = forwardRef<HTMLDivElement>((_, ref) => {
  const { isOpen, toggleMenu } = useBurgerMenu();
  return (
    <div
      ref={ref}
      className={`expand-collapse-transition bg-light absolute top-full inset-x-0 w-full shadow-md overflow-hidden dropdown-transition ${
        isOpen
          ? "max-h-96 z-dropdown interact"
          : "max-h-0 -z-dropdown no-interact"
      }`}
    >
      <div className="px-[clamp(1.25rem,4vw,6.25rem)] py-3">
        <NavMenu links={NAV_LINKS} onClick={toggleMenu} />
        <SocialMenu links={SOCIAL_LINKS} />
      </div>
    </div>
  );
});
export default DropDownMenu;
