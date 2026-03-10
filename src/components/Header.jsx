import React, { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
    const [isScrolled, setIsLoaded] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsLoaded(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { label: t('nav.about'), id: 'about' },
        { label: t('nav.skills'), id: 'skills' },
        { label: t('nav.projects'), id: 'projects' },
        { label: t('nav.experience'), id: 'experience' },
        { label: t('nav.contact'), id: 'contact' },
    ];

    return (
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
              ? 'bg-black/30 backdrop-blur-md border-b border-white/10'
              : 'bg-transparent'
          }`}
        >
          <nav className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300"
              >
                MM
              </button>
    
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Language Toggle */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded-full transition-all duration-300"
                >
                  <Languages size={18} />
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
                </button>
              </div>
    
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
    
            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="md:hidden mt-4 pb-4 space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium py-2"
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile Language Toggle */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 w-full px-4 py-2 backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded-full transition-all duration-300"
                >
                  <Languages size={18} />
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
                </button>
              </div>
            )}
          </nav>
        </header>
      );
};

export default Header;
