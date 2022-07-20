import { createContext, useCallback, useState, useContext } from 'react';

interface IDrawerContextData {
    isDrawerOpen: boolean
    toggleDrawerOpen: () => void
    drawerOptions: IDrawerOptions[];
    setDrawerOptions: (nweDrawerOptions: IDrawerOptions[]) => void;
  }


const DrawerContext = createContext({} as IDrawerContextData);

interface IThemeProviderProps {
    children: React.ReactNode;
}

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

interface IDrawerOptions {
  icon: string;
  path: string;
  label: string;
}

// eslint-disable-next-line react/prop-types
export const DrawerProvider: React.FC<IThemeProviderProps> = ({ children }) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions , setDrawerOptions] = useState<IDrawerOptions[]>([]);

  const toggleDrawerOpen = useCallback((() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }), []);

  const handleSetDrawerOptions = useCallback(((newDrawerOption: IDrawerOptions[]) => {
    setDrawerOptions(newDrawerOption);
  }), []);


  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen, drawerOptions, setDrawerOptions }}>
      {children}
    </DrawerContext.Provider>
  );
};