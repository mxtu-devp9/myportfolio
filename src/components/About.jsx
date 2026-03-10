import React from 'react';
import { portfolioData } from '../mock/portfolioData';

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 md:order-1">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <img
                    src="/prof photo.jpeg"
                    alt="Profile"
                    className="w-80 h-80 mx-auto rounded-full object-top border-4 border-cyan-400 shadow-lg shadow-cyan-500/30"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                {about.text}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {about.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-3xl font-bold text-cyan-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;