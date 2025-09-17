import Burger from "@/components/menus/burger-menu/Burger";
import { useBurgerMenu } from "@/components/menus/burger-menu/BurgerMenuContext";
import DropDownMenu from "@/components/menus/burger-menu/DropDownMenu";
import { useRef, useEffect } from "react";

export default function HamburgerMenuContent() {
  const burgerRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { isOpen, toggleMenu } = useBurgerMenu();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (
        isOpen &&
        burgerRef.current &&
        dropdownRef.current &&
        !burgerRef.current.contains(target) &&
        !dropdownRef.current.contains(target)
      ) {
        toggleMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen, toggleMenu]);

  return (
    <>
      <Burger ref={burgerRef} />
      <DropDownMenu ref={dropdownRef} />
    </>
  );
}
