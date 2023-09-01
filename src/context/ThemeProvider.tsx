'use client'
import React,{useState, ReactNode, createContext} from 'react'


type Theme = '' | 'light-theme';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {

  const [theme, setTheme] = useState<Theme>('');
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === '' ? 'light-theme' : ''));
  };

  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
      <body className={theme}>
        {children}
      </body>
    </ThemeContext.Provider>
  )
}
export { ThemeProvider, ThemeContext };