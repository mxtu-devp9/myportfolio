
import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Languages,
  Menu,
  X,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: t("nav.about"), id: "about" },
    { label: t("nav.skills"), id: "skills" },
    { label: t("nav.projects"), id: "projects" },
    { label: t("nav.experience"), id: "experience" },
    { label: t("nav.contact"), id: "contact" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <nav className="site-nav" aria-label="Main navigation">
        <button
          className="site-brand"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <span className="brand-mark">M</span>
          <span className="brand-divider" />
          <span className="brand-caption">MITEN MISTRY</span>
        </button>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="nav-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label={
              language === "en"
                ? "Switch language to German"
                : "Switch language to English"
            }
          >
            <Languages size={15} aria-hidden="true" />
            <span>{language === "en" ? "EN" : "DE"}</span>
          </button>

          <button
            className="nav-contact"
            onClick={() => scrollToSection("contact")}
          >
            <span>{t("nav.contact")}</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="mobile-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="mobile-nav-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          ))}

          <button className="mobile-language" onClick={toggleLanguage}>
            <Languages size={16} aria-hidden="true" />
            {language === "en" ? "Switch to Deutsch" : "Switch to English"}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
