import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Define the context type
interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
}

// Create the context with a default value of `undefined`
export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Define the props for the LanguageProvider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>('');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      console.log(storedLanguage)
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    console.log("Set Language to ",localStorage.getItem('language'))
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
