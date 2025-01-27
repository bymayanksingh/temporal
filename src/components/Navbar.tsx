import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-white" : "text-gray-500 hover:text-gray-300 transition-colors";
  };

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
      <Link to="/" className="text-2xl font-bold tracking-tight">GridX</Link>
      <div className="flex gap-6 md:gap-12 flex-wrap justify-center">
        <Link to="/" className={isActive('/')}>Home</Link>
        <Link to="/about" className={isActive('/about')}>About</Link>
        <Link to="/works" className={isActive('/works')}>Works</Link>
        <Link to="/contact" className={isActive('/contact')}>Contact</Link>
      </div>
      <Link to="/contact" className="bg-[#222222] px-8 py-3 rounded-full hover:bg-[#2a2a2a] transition-colors w-full md:w-auto text-center">
        Let's talk
      </Link>
    </nav>
  );
}

export default Navbar;