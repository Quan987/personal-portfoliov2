import { createContext, useContext, useState, type ReactNode } from "react";

type BurgerMenuContextType = {
  isOpen: boolean;
  toggleMenu: () => void;
};

type BurgerMenuProviderProps = {
  children?: ReactNode;
};

// Create context
const BurgerMenuContext = createContext<BurgerMenuContextType | null>(null);

// Context Provider
export function BurgerMenuProvider({ children }: BurgerMenuProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleMenu() {
    return setIsOpen((prev) => !prev);
  }

  return (
    <BurgerMenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </BurgerMenuContext.Provider>
  );
}

// Use context
export function useBurgerMenu() {
  const context = useContext<BurgerMenuContextType | null>(BurgerMenuContext);

  if (!context) {
    throw new Error("useBurgerMenu must be used within <BurgerMenuProvider>");
  }
  return context;
}
