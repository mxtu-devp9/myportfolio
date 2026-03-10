import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try { return localStorage.getItem('portfolio-language') || 'en'; }
    catch { return 'en'; }
  });

  useEffect(() => {
    try { localStorage.setItem('portfolio-language', language); } catch {}
  }, [language]);

  const toggleLanguage = () => setLanguage(prev => prev === 'en' ? 'de' : 'en');

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) value = value?.[k];
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
