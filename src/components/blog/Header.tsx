
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-40">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 px-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-construction-blue">
              Jasa Rancang<span className="text-construction-yellow">Bangun</span>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-2 md:mt-0 text-sm">
            <div className="flex items-center">
              <span className="mr-2 text-construction-yellow">📞</span>
              <span>+62 812 3456 7890</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-construction-yellow">✉️</span>
              <span>info@kontraktor-profesional.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
