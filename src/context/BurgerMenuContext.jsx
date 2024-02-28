import { createContext, useContext, useState } from 'react';

const BurgerMenuContext = createContext();

function BurgerMenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((open) => !open);
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
