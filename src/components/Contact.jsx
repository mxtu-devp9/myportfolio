
import React from "react";
import {
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  Copy,
} from "lucide-react";
import "./Contact.css";

const EMAIL = "YOUR_EMAIL@example.com";
const GITHUB = "https://github.com/mxtu-devp9";
const LINKEDIN = "https://www.linkedin.com/";

export default function Contact() {
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      window.alert("Email address copied!");
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-card">
            <span className="contact-eyebrow">LET'S CONNECT</span>

            <h2>
              Have a project in <span>mind?</span>
            </h2>

            <p className="contact-description">
              I'm always interested in discussing software development,
              interesting projects, and opportunities to collaborate.
              Feel free to get in touch.
            </p>

            <div className="contact-actions">
              <a
                className="contact-primary-button"
                href={`mailto:${EMAIL}`}
              >
                <Mail size={18} />
                Email me
                <ArrowUpRight size={17} />
              </a>

              <button
                className="contact-secondary-button"
                type="button"
                onClick={handleCopyEmail}
              >
                <Copy size={17} />
                Copy email
              </button>
            </div>

            <div className="contact-divider" />

            <div className="contact-socials">
              <span>Find me online</span>

              <div>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                >
                  <Github size={19} />
                </a>

                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={19} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="portfolio-footer">
        <a className="footer-brand" href="#home">
          M<span>.</span>
        </a>

        <p>
          Designed & built with care.
          <span> © {new Date().getFullYear()} Miten Mistry</span>
        </p>

        <a className="footer-top-link" href="#home">
          Back to top <ArrowUpRight size={15} />
        </a>
      </footer>
    </>
  );
}
