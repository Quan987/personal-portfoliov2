import { useBurgerMenu } from "@/components/menus/burger-menu/BurgerMenuContext";
import { forwardRef } from "react";

const Burger = forwardRef<HTMLButtonElement>((_, ref) => {
  const { isOpen, toggleMenu } = useBurgerMenu();
  return (
    <button
      ref={ref}
      id="hamburger-container"
      onClick={toggleMenu}
      className="flex flex-col justify-around size-5 bg-transparent border-none cursor-pointer z-hamburger focus:outline-none p-0"
    >
      <div
        className={`hamburger-bar icon-morph-transition ${
          isOpen ? "-rotate-45" : "rotate-0"
        }`}
      ></div>
      <div
        className={`hamburger-bar icon-morph-transition ${
          isOpen ? "opacity-0 -translate-x-2.5" : "opacity-100 translate-x-0"
        }`}
      ></div>
      <div
        className={`hamburger-bar icon-morph-transition ${
          isOpen ? "rotate-45" : "rotate-0"
        }`}
      ></div>
    </button>
  );
});
export default Burger;
