import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 backdrop-blur-xl bg-white/5 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm">
            © {currentYear} Miten Mistry. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart size={16} className="text-cyan-400 fill-cyan-400" />
            <span>Created by Miten Mistry</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
