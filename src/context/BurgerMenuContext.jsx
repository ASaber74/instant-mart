import { createContext, useContext, useState } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const BurgerMenuContext = createContext();

function BurgerMenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    if (isOpen) {
      setIsOpen(false);
      enablePageScroll();
    } else {
      setIsOpen(true);
      disablePageScroll();
    }
  }

  return (
    <BurgerMenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </BurgerMenuContext.Provider>
  );
}

function useBurgerMenu() {
  const context = useContext(BurgerMenuContext);
  if (context === undefined)
    throw new Error('BurgerMenuContext was used outside of DarkModeProvider');

  return context;
}

export { BurgerMenuProvider, useBurgerMenu };
