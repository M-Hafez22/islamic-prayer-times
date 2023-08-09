import React, { useState, createContext, useEffect } from "react";


export const LanguageContext = createContext();

export function LanguageProvider(props) {
  const [language, setLanguage] = useState("en");
  useEffect(() => {
    if (localStorage.getItem("language") !== null) {
      setLanguage(localStorage.getItem("language"))
    }
  }, [])
  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {props.children}
    </LanguageContext.Provider>
  )
}
