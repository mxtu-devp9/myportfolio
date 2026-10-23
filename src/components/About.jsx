
import React from "react";
import {
  Code2,
  Smartphone,
  Server,
  GraduationCap,
} from "lucide-react";
import "./About.css";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building responsive web applications with React, TypeScript, and modern frontend tools.",
  },
  {
    icon: Smartphone,
    title: "iOS Development",
    description:
      "Creating native iOS experiences using Swift, SwiftUI, and MVVM architecture.",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description:
      "Designing APIs, database systems, and scalable services with Python and PostgreSQL.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Pursuing software engineering studies while building practical projects.",
  },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <header className="about-heading">
          <span className="about-eyebrow">GET TO KNOW ME</span>

          <h2>
            Turning ideas into <span>digital experiences.</span>
          </h2>

          <p>
            I'm Miten Mistry, a software developer interested in building
            useful, reliable, and intuitive digital products across web,
            mobile, and backend platforms.
          </p>
        </header>

        <div className="about-grid">
          {highlights.map(({ icon: Icon, title, description }) => (
            <article className="about-card" key={title}>
              <div className="about-icon" aria-hidden="true">
                <Icon size={22} strokeWidth={1.8} />
              </div>

              <h3>{title}</h3>

              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
