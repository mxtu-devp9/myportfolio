import "./Hero.css";
import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Languages,
  MapPin,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import { portfolioData } from "../mock/portfolioData";
import "./Hero.css";

const RESUME_FILE = "/MistryMiten_CV.pdf";

export default function Hero() {
  const { t, language, toggleLanguage } = useLanguage();

  const hero = portfolioData?.hero ?? {};
  const contact = portfolioData?.contact ?? {};

  const name = hero.name || "Miten Mistry";

  // Keep translations working even if some keys are missing.
  const translate = (key, fallback) => {
    const value = t(key);
    return !value || value === key ? fallback : value;
  };

  const greeting = translate(
    "hero.greeting",
    language === "de" ? "Hallo, ich bin" : "Hello, I'm"
  );

  const role = translate(
    "hero.title",
    language === "de"
      ? "Full-Stack- & iOS-Entwickler"
      : "Full Stack & iOS Developer"
  );

  const description = translate(
    "hero.description",
    language === "de"
      ? "Ich entwickle skalierbare Webanwendungen und native iOS-Apps mit modernen Technologien."
      : "Specialized in building scalable web applications and native iOS apps with modern technologies."
  );

  const projectsLabel = translate(
    "hero.viewProjects",
    language === "de" ? "Projekte ansehen" : "View Projects"
  );

  const cvLabel = translate(
    "hero.downloadCV",
    language === "de" ? "Lebenslauf herunterladen" : "Download CV"
  );

  const githubUrl = contact.github || "https://github.com/mxtu-devp9";
  const linkedinUrl = contact.linkedin || "https://www.linkedin.com/";
  const email = contact.email || "";

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="hero-status-dot" />
            <span>
              {language === "de" ? "SOFTWAREENTWICKLER" : "SOFTWARE ENGINEER"}
            </span>
            <span className="hero-eyebrow-divider">/</span>
            <span>BERLIN, GERMANY</span>
          </div>

          <p className="hero-greeting">{greeting}</p>

          <h1 className="hero-name">{name}</h1>

          <h2 className="hero-role">{role}</h2>

          <p className="hero-description">{description}</p>

          <div className="hero-actions">
            <a className="hero-button hero-button-primary" href="#projects">
              {projectsLabel}
              <ArrowRight size={17} />
            </a>

            <a
              className="hero-button hero-button-secondary"
              href={RESUME_FILE}
              download
            >
              {cvLabel}
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="hero-socials">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>

            {email && (
              <a href={`mailto:${email}`} aria-label="Send email">
                <Mail size={16} />
                <span>Email</span>
              </a>
            )}
          </div>
        </div>

        <div className="hero-visual" aria-label="Developer workspace preview">
          <div className="hero-workspace">
            <div className="workspace-topbar">
              <div className="workspace-window-dots">
                <span />
                <span />
                <span />
              </div>
              <span>workspace / portfolio</span>
            </div>

            <div className="workspace-body">
              <aside className="workspace-sidebar" aria-hidden="true">
                <span className="workspace-monogram">M.</span>
                <i className="workspace-sidebar-active" />
                <i />
                <i />
                <i />
              </aside>

              <div className="workspace-main">
                <span className="workspace-kicker">
                  PERSONAL WORKSPACE
                </span>

                <h3>
                  {language === "de"
                    ? "Mit Leidenschaft entwickeln."
                    : "Building with purpose."}
                </h3>

                <div className="workspace-stats">
                  <div>
                    <strong>01</strong>
                    <span>Web</span>
                  </div>
                  <div>
                    <strong>02</strong>
                    <span>iOS</span>
                  </div>
                  <div>
                    <strong>03</strong>
                    <span>Backend</span>
                  </div>
                </div>

                <div className="workspace-code-lines" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>

          <div className="hero-location-card">
            <span className="hero-location-icon">
              <MapPin size={17} />
            </span>
            <div>
              <span>BASED IN</span>
              <strong>Berlin, Germany</strong>
            </div>
          </div>

          <div className="hero-toolkit-card">
            <span className="hero-card-label">CURRENT TOOLKIT</span>
            <div className="hero-toolkit-tags">
              <span>React</span>
              <span>SwiftUI</span>
              <span>Python</span>
            </div>
          </div>

          <div className="hero-profile-card">
            <div className="hero-profile-monogram">MM</div>
            <div>
              <strong>{name}</strong>
              <span>{role}</span>
            </div>
            <span className="hero-profile-status" />
          </div>
        </div>
      </div>

      <button
        className="hero-language-shortcut"
        type="button"
        onClick={toggleLanguage}
        aria-label={
          language === "de"
            ? "Switch language to English"
            : "Sprache auf Deutsch umstellen"
        }
      >
        <Languages size={16} />
        {language === "de" ? "DE" : "EN"}
      </button>

      <a className="hero-scroll-indicator" href="#about">
        <span>
          {language === "de" ? "WEITER ENTDECKEN" : "SCROLL TO EXPLORE"}
        </span>
        <ArrowRight size={15} />
      </a>
    </section>
  );
}
