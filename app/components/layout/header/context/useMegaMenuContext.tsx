import { createContext, useContext, useCallback, useMemo, useEffect, useState, ReactNode } from 'react';

interface MegaMenuState {
  isScrolled: boolean;
  isOpenMegaMenu: boolean;
}

interface MegaMenuContextValue extends MegaMenuState {
  toggleMegaMenu: () => void;
}

const MegaMenuContext = createContext<MegaMenuContextValue | undefined>(undefined);

export function useMegaMenuContext() {
  const context = useContext(MegaMenuContext);
  if (context === undefined) {
    throw new Error('useMegaMenuContext must be used within a MegaMenuProvider');
  }
  return context;
}

interface MegaMenuProviderProps {
  children: ReactNode;
}

export function MegaMenuProvider({ children }: MegaMenuProviderProps) {
  const [state, setState] = useState<MegaMenuState>({
    isScrolled: false,
    isOpenMegaMenu: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const shouldBeScrolled = scrollPosition > viewportHeight * 0.3;

      setState(prev => {
        if (prev.isScrolled !== shouldBeScrolled) {
          return {
            ...prev,
            isScrolled: shouldBeScrolled,
          };
        }
        return prev;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMegaMenu = useCallback(() => {
    setState(prev => ({
      ...prev,
      isOpenMegaMenu: !prev.isOpenMegaMenu,
    }));
  }, []);

  const value = useMemo(() => ({
    ...state,
    toggleMegaMenu,
  }), [state, toggleMegaMenu]);

  return (
    <MegaMenuContext.Provider value={value}>
      {children}
    </MegaMenuContext.Provider>
  );
}
