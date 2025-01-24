import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    category: 'WEB DESIGNING',
    title: 'Dynamic',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=500&h=500'
  },
  {
    id: 2,
    category: 'MOBILE DESIGNING',
    title: 'Seven Studio',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=500&h=500'
  },
  {
    id: 3,
    category: 'BRANDING',
    title: 'Raven Studio',
    image: 'https://images.unsplash.com/photo-1544731612-de7f96afe55f?auto=format&fit=crop&q=80&w=500&h=500'
  },
  {
    id: 4,
    category: 'PHOTOGRAPHY',
    title: 'Diesel H1',
    image: 'https://images.unsplash.com/photo-1544731612-de7f96afe55f?auto=format&fit=crop&q=80&w=500&h=500'
  },
  {
    id: 5,
    category: 'MOBILE DESIGNING',
    title: 'Submarine',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=500&h=500'
  },
  {
    id: 6,
    category: 'WEB DESIGNING',
    title: 'Hydra Merc',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=500&h=500'
  }
];

function Works() {
  return (
    <div className="min-h-screen bg-[#111111] text-white p-4 md:p-8">
      {/* Navigation */}
      <nav className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
        <div className="text-2xl font-bold tracking-tight">GridX</div>
        <div className="flex gap-6 md:gap-12 flex-wrap justify-center">
          <Link to="/" className="text-gray-500 hover:text-gray-300 transition-colors">Home</Link>
          <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">About</a>
          <Link to="/works" className="text-white">Works</Link>
          <Link to="/contact" className="text-gray-500 hover:text-gray-300 transition-colors">Contact</Link>
        </div>
        <Link to="/contact" className="bg-[#222222] px-8 py-3 rounded-full hover:bg-[#2a2a2a] transition-colors w-full md:w-auto text-center">
          Let's talk
        </Link>
      </nav>

      {/* Header */}
      <div className="flex justify-center items-center mb-16 mt-8">
        <div className="relative">
          <span className="absolute -left-8 -top-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="white"/>
            </svg>
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-center">ALL PROJECTS</h1>
          <span className="absolute -right-8 -bottom-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="white"/>
            </svg>
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="group relative bg-[#1A1A1A] rounded-3xl overflow-hidden">
            <div className="aspect-square">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm text-gray-300 mb-2">{project.category}</p>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="bg-white rounded-full p-2">
                    <ArrowUpRight className="w-6 h-6 text-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 md:mt-32 text-center">
        <div className="text-2xl font-bold tracking-tight mb-8 md:mb-12">GridX</div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-16 mb-8 md:mb-12">
          <Link to="/" className="text-gray-400 tracking-wider hover:text-white transition-colors">HOME</Link>
          <a href="#" className="text-gray-400 tracking-wider hover:text-white transition-colors">ABOUT</a>
          <Link to="/works" className="text-gray-400 tracking-wider hover:text-white transition-colors">WORKS</Link>
          <Link to="/contact" className="text-gray-400 tracking-wider hover:text-white transition-colors">CONTACT</Link>
        </div>
        <div className="text-gray-400">
          © All rights reserved by <a href="#" className="text-[#4B6BFB] hover:text-[#3b5beb] transition-colors">WordPressRiver</a>
        </div>
      </footer>
    </div>
  );
}

export default Works;