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
        <div className='light x1'></div>
      <div className='light x2'></div>
      <div className='light x3'></div>
      <div className='light x4'></div>
      <div className='light x5'></div>
      <div className='light x6'></div>
      <div className='light x7'></div>
      <div className='light x8'></div>
      <div className='light x9'></div>
      </body>
    </ThemeContext.Provider>
  )
}
export { ThemeProvider, ThemeContext };