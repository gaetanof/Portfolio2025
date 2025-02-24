import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const validLanguages = ['en', 'es'];
  const [language, setLanguage] = useState(() => {
    const storedLang = localStorage.getItem('language');
    if (validLanguages.includes(storedLang)) return storedLang;
    // Detecta si el navegador prefiere español
    if (navigator.language && navigator.language.startsWith('es')) {
      localStorage.setItem('language', 'es');
      return 'es';
    }
    localStorage.setItem('language', 'en');
    return 'en';
  });

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'es' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};