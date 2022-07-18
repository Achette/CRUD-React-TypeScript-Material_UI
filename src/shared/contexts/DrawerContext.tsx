import { createContext, useCallback, useState, useContext } from 'react';

interface IDrawerContextData {
    isDrawerOpen: boolean
    toggleDrawerOpen: () => void}


const DrawerContext = createContext({} as IDrawerContextData);

interface IThemeProviderProps {
    children: React.ReactNode;
}

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

// eslint-disable-next-line react/prop-types
export const DrawerProvider: React.FC<IThemeProviderProps> = ({ children }) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback((() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }), []);


  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};