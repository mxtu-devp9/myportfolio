
import React from "react";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import "./Experience.css";

const timeline = [
  {
    type: "education",
    title: "Master's in Software Engineering",
    organization: "University of Europe for Applied Sciences",
    location: "Germany",
    period: "Current",
    description:
      "Developing software engineering expertise through practical projects, system design, and modern application development.",
    tags: ["Software Engineering", "Application Development"],
  },
  {
    type: "project",
    title: "Full Stack & iOS Developer",
    organization: "Personal Projects",
    location: "Germany",
    period: "Ongoing",
    description:
      "Building web, mobile, and backend applications while exploring scalable architectures, API integration, and intuitive user experiences.",
    tags: ["React", "SwiftUI", "Python", "PostgreSQL"],
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <header className="experience-heading">
          <span className="experience-eyebrow">MY JOURNEY</span>
          <h2>
            Experience & <span>education.</span>
          </h2>
          <p>
            My learning journey, engineering interests, and the projects
            shaping my development as a software engineer.
          </p>
        </header>

        <div className="timeline">
          {timeline.map((item, index) => {
            const Icon = item.type === "education" ? GraduationCap : Briefcase;

            return (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-marker">
                  <Icon size={19} />
                </div>

                <div className="timeline-card">
                  <div className="timeline-card-top">
                    <span className="timeline-period">{item.period}</span>
                    <span className="timeline-index">
                      0{index + 1}
                    </span>
                  </div>

                  <h3>{item.title}</h3>
                  <h4>{item.organization}</h4>

                  <span className="timeline-location">
                    <MapPin size={14} />
                    {item.location}
                  </span>

                  <p>{item.description}</p>

                  <div className="timeline-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
