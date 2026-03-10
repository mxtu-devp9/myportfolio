import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { portfolioData } from '../mock/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { hero } = portfolioData;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          style={{
            top: '20%',
            left: '10%',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          style={{
            bottom: '20%',
            right: '10%',
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Glass Card */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl">
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                {hero.name}
              </h1>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-6">
                {t('hero.title')}
              </h2>
            </div>

            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
                {t('hero.subtitle')}
              </p>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                {t('hero.description')}
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
                >
                  {t('hero.viewProjects')}
                </button>
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 backdrop-blur-xl bg-white/10 border border-white/20 text-white rounded-full font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300"
                >
                  {t('hero.getInTouch')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-cyan-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
