
import React, { useState } from "react";
import {
  ArrowUpRight,
  Github,
  Smartphone,
  Globe,
  Server,
  Code2,
  Layers,
} from "lucide-react";

import "./Projects.css";

const projects = [
  {
    id: "supermarket",
    number: "01",
    title: "SuperMarket App UI",
    category: "ios",
    categoryLabel: "iOS Development",
    description:
      "A modern supermarket shopping application interface built with Swift, focusing on a clean layout and user-friendly shopping experience.",
    technologies: ["Swift", "SwiftUI", "iOS"],
    icon: Smartphone,
    visual: "visual-ios",
    github: "https://github.com/mxtu-devp9/SuperMarketAppUI",
  },
  {
    id: "parking",
    number: "02",
    title: "Parking & Car Rental",
    category: "ios",
    categoryLabel: "iOS Development",
    description:
      "A mobile application concept for finding convenient parking options and exploring car rental services for everyday journeys.",
    technologies: ["Swift", "SwiftUI", "Mobile UI"],
    icon: Smartphone,
    visual: "visual-parking",
    github: "https://github.com/mxtu-devp9/Parking-n-Car-Rental-",
  },
  {
    id: "tradevision",
    number: "03",
    title: "TradeVision",
    category: "web",
    categoryLabel: "Web Development",
    description:
      "A trading dashboard concept for exploring stock and cryptocurrency market data, charts, and portfolio insights.",
    technologies: ["Python", "Streamlit", "Market APIs"],
    icon: Globe,
    visual: "visual-trading",
    github: "https://github.com/mxtu-devp9",
  },
  {
    id: "portfolio",
    number: "04",
    title: "Developer Portfolio",
    category: "web",
    categoryLabel: "Web Development",
    description:
      "A personal portfolio showcasing software projects, technical skills, and experience through a responsive interface.",
    technologies: ["React", "JavaScript", "CSS"],
    icon: Globe,
    visual: "visual-portfolio",
    github: "https://github.com/mxtu-devp9/myportfolio",
    live: "https://myportfolio-beryl-ten-36.vercel.app/",
  },
  {
    id: "server",
    number: "05",
    title: "Cross-Platform Web Server",
    category: "systems",
    categoryLabel: "Systems Engineering",
    description:
      "A multithreaded C++ web server demonstrating thread pools, shared request queues, priority scheduling, synchronization, and overload protection.",
    technologies: ["C++", "Multithreading", "Networking"],
    icon: Server,
    visual: "visual-server",
    github: "https://github.com/mxtu-devp9/Multithreaded-Web-Server",
  },
];

const filters = [
  { id: "all", label: "All Projects" },
  { id: "ios", label: "iOS Development" },
  { id: "web", label: "Web Development" },
  { id: "systems", label: "Systems" },
];

function ProjectVisual({ project }) {
  const Icon = project.icon;

  return (
    <div className={`project-visual ${project.visual}`}>
      <div className="project-visual-top">
        <span>{project.number}</span>
        <span className="project-visual-status">
          <i />
          PROJECT
        </span>
      </div>

      <div className="project-visual-center">
        <div className="project-visual-orbit project-orbit-one" />
        <div className="project-visual-orbit project-orbit-two" />

        <div className="project-visual-icon">
          <Icon size={30} strokeWidth={1.5} />
        </div>
      </div>

      <div className="project-visual-bottom">
        <span>{project.categoryLabel}</span>
        <ArrowUpRight size={19} />
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a
        className="project-card-visual-link"
        href={project.github}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${project.title} on GitHub`}
      >
        <ProjectVisual project={project} />
      </a>

      <div className="project-card-content">
        <div className="project-card-category">
          <span>{project.categoryLabel}</span>
          <span className="project-card-number">{project.number}</span>
        </div>

        <h3>{project.title}</h3>

        <p className="project-description">{project.description}</p>

        <div className="project-tags">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-card-links">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <Github size={16} />
            <span>GitHub</span>
            <ArrowUpRight size={14} />
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="project-link project-live-link"
            >
              <Globe size={15} />
              <span>Live Demo</span>
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <header className="projects-heading">
          <div className="projects-eyebrow">
            <span className="projects-eyebrow-line" />
            SELECTED WORK
          </div>

          <div className="projects-heading-row">
            <div>
              <h2>
                Projects with <span>purpose.</span>
              </h2>

              <p>
                A selection of iOS applications, web experiences, and systems
                projects built with modern technologies.
              </p>
            </div>

            <div className="projects-count">
              <Layers size={17} />
              <span>{visibleProjects.length} projects</span>
            </div>
          </div>
        </header>

        <div className="projects-filters" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`projects-filter ${
                activeFilter === filter.id ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.id)}
              aria-pressed={activeFilter === filter.id}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="projects-footer">
          <div>
            <Code2 size={18} />
            <span>More projects and code on GitHub</span>
          </div>

          <a
            href="https://github.com/mxtu-devp9"
            target="_blank"
            rel="noreferrer"
            className="projects-github-button"
          >
            Explore GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
