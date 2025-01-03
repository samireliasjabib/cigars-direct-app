import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface MegaMenuContextType {
  isScrolled: boolean;
  isOpenMegaMenu: boolean;
  toggleMegaMenu: () => void;
}

const MegaMenuContext = createContext<MegaMenuContextType | undefined>(undefined);

interface MegaMenuProviderProps {
  children: ReactNode;
}

export function MegaMenuProvider({ children }: MegaMenuProviderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenMegaMenu, setOpenMegaMenu] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsScrolled(scrollPosition > viewportHeight * 0.3);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMegaMenu = () => {
    setOpenMegaMenu(!isOpenMegaMenu);
  };

  const value = {
    isScrolled,
    isOpenMegaMenu,
    toggleMegaMenu,
  };

  return (
    <MegaMenuContext.Provider value={value}>
      {children}
    </MegaMenuContext.Provider>
  );
}

export function useMegaMenu() {
  const context = useContext(MegaMenuContext);
  if (context === undefined) {
    throw new Error('useMegaMenu must be used within a MegaMenuProvider');
  }
  return context;
}
