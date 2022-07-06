/* eslint-disable linebreak-style */
import { createContext, useCallback, useMemo, useState, useContext } from 'react';
import { ThemeProvider } from '@emotion/react';
import { LightTheme, DarkTheme } from '../themes';
import { Box } from '@mui/system';


interface IThemeContextData {
    themeName: 'light' | 'dark'
    toggleTheme: () => void}


const ThemeContext = createContext({} as IThemeContextData);

interface IThemeProviderProps {
    children: React.ReactNode;
}

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

// eslint-disable-next-line react/prop-types
export const AppThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {

  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback((() => {
    setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
  }), []);

  const theme = useMemo(() => {
    if(themeName === 'light') return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};