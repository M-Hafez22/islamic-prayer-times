import React, { createContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleTheme = () => {
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    setIsDark(!isDark);
  };

  useEffect(() => {
    const storedIsDark = localStorage.getItem("isDark") === "true";
    setIsDark(storedIsDark);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
