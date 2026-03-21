import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../mock/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 overflow-hidden flex items-center justify-center">
                {project.image && project.image !== '#' ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`${project.imageSize || 'w-32 h-32'} object-contain rounded-2xl transition-transform duration-300 group-hover:scale-110`}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50">
                    💻
                  </div>
                )}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-70' : 'opacity-40'
                  }`}
                ></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs backdrop-blur-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <button
                    onClick={() => window.open(project.link, '_blank')}
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </button>
                  <button
                    onClick={() => window.open(project.github, '_blank')}
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                </div>
              </div>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;