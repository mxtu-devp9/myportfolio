
import React, { createContext, useContext, useState } from "react";

const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      role: "Full Stack & iOS Developer",
      description:
        "Specialized in building scalable web applications and native iOS apps with modern technologies",
      projects: "View Projects",
      cv: "Download CV",
    },
  },

  de: {
    nav: {
      about: "Über mich",
      skills: "Fähigkeiten",
      projects: "Projekte",
      experience: "Erfahrung",
      contact: "Kontakt",
    },
    hero: {
      greeting: "Hallo, ich bin",
      role: "Full-Stack- & iOS-Entwickler",
      description:
        "Spezialisiert auf skalierbare Webanwendungen und native iOS-Apps mit modernen Technologien",
      projects: "Projekte ansehen",
      cv: "Lebenslauf herunterladen",
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((current) => (current === "en" ? "de" : "en"));
  };

  const t = (path) => {
    return (
      path
        .split(".")
        .reduce((value, key) => value?.[key], translations[language]) ??
      path
    );
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside a LanguageProvider"
    );
  }

  return context;
}
