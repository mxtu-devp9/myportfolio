import React from "react";
import "./Skills.css";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "iOS Development",
    skills: ["Swift", "SwiftUI", "UIKit", "MVVM", "Core Data"],
  },
  {
    category: "Backend",
    skills: ["Python", "FastAPI", "Node.js", "REST APIs", "PostgreSQL"],
  },
  {
    category: "Tools & Engineering",
    skills: ["Git", "Docker", "Xcode", "VS Code", "SQL"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-heading">
          <span className="section-eyebrow">MY TOOLKIT</span>
          <h2>
            Technologies I <span>work with.</span>
          </h2>
          <p>
            A practical toolkit for developing across frontend, mobile,
            backend, and database systems.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skills-card" key={group.category}>
              <h3>{group.category}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}