import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../mock/portfolioData';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = portfolioData.projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <p className="text-white text-xl">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 mb-12"
        >
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </button>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            {project.fullDescription || project.description}
          </p>
        </div>

        <div className="flex gap-6 mb-16">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl transition-colors duration-300"
          >
            <ExternalLink size={18} />
            <span>Live Demo</span>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-cyan-400 hover:text-cyan-400 rounded-xl transition-colors duration-300"
          >
            <Github size={18} />
            <span>View Code</span>
          </a>
        </div>

        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-cyan-400">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.screenshots.map((screenshot, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden border border-white/10 bg-white/5"
                >
                  <img
                    src={screenshot}
                    alt={`screenshot ${idx + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {project.techLevels && project.techLevels.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-cyan-400">Technologies Used</h2>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex flex-col gap-6">
                {project.techLevels.map((tech, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{tech.name}</span>
                      <span className="text-cyan-400 font-semibold">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
                        style={{ width: `${tech.level}%` }}
                      >
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProjectDetail;