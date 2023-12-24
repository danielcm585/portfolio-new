import { createContext, useState } from "react";

export const themeContext = createContext();

export default function ThemeProvider({ children }) {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  
  const [ theme, setTheme ] = useState('light');

  return (
    <themeContext.Provider value={{ 
      theme, 
      setTheme,
      toggleTheme,
    }}>
      {children}
    </themeContext.Provider>
  );
}