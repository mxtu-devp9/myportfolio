
import React, { useState } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  Languages,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navItems =
    language === "de"
      ? [
          { label: "Startseite", href: "#home" },
          { label: "Über mich", href: "#about" },
          { label: "Projekte", href: "#projects" },
          { label: "Erfahrung", href: "#experience" },
          { label: "Kontakt", href: "#contact" },
        ]
      : [
          { label: "Home", href: "#home" },
          { label: "About", href: "#about" },
          { label: "Projects", href: "#projects" },
          { label: "Experience", href: "#experience" },
          { label: "Contact", href: "#contact" },
        ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="header-nav" aria-label="Main navigation">
        <a
          className="header-brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Go to homepage"
        >
          <span className="brand-mark">M</span>
          <span className="brand-name">Miten Mistry</span>
          <span className="brand-dot">.</span>
        </a>

        <div className={`header-links ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="header-link"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="header-actions">
          <button
            type="button"
            className="header-icon-button"
            onClick={toggleLanguage}
            aria-label={
              language === "de"
                ? "Switch language to English"
                : "Sprache auf Deutsch umstellen"
            }
            title={language === "de" ? "English" : "Deutsch"}
          >
            <Languages size={18} />
            <span>{language === "de" ? "DE" : "EN"}</span>
          </button>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
