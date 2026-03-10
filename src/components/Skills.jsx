import React from 'react';
import { Code2, Database, Smartphone, Wrench } from 'lucide-react';
import { portfolioData } from '../mock/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const categories = [
    {
      title: 'Frontend',
      icon: <Code2 size={24} />,
      skills: skills.frontend,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Backend',
      icon: <Database size={24} />,
      skills: skills.backend,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'iOS Development',
      icon: <Smartphone size={24} />,
      skills: skills.mobile,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tools & DevOps',
      icon: <Wrench size={24} />,
      skills: skills.tools,
      color: 'from-pink-500 to-cyan-400'
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;