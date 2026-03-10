import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { portfolioData } from '../mock/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-32 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
          Work Experience
        </h2>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex-shrink-0">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-cyan-400 font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed ml-0 md:ml-16">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
