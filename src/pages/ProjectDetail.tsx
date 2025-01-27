import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import { projects } from '../data/projects';

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <div className="p-4 md:p-8">
        <Navbar />
        
        {/* Header */}
        <div className="mb-8">
          <div className="text-gray-400 mb-4">{project.category}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">{project.title}</h1>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <img 
            src={project.images?.[0] || project.image} 
            alt={project.title}
            className="w-full h-[60vh] object-cover rounded-3xl"
          />
        </div>

        {/* Project Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-8">ABOUT</h2>
            <p className="text-gray-400 whitespace-pre-line">{project.description}</p>
          </div>
          <div className="space-y-8">
            <div>
              <div className="text-gray-400 mb-2">Year</div>
              <div className="text-xl">{project.year}</div>
            </div>
            <div>
              <div className="text-gray-400 mb-2">Client</div>
              <div className="text-xl">{project.client}</div>
            </div>
            <div>
              <div className="text-gray-400 mb-2">Role</div>
              <div className="text-xl">{project.role}</div>
            </div>
          </div>
        </div>

        {/* Project Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {project.images?.slice(1).map((image, index) => (
            <div key={index} className="aspect-square">
              <img 
                src={image} 
                alt={`${project.title} ${index + 2}`}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          ))}
        </div>

        {/* Next Project */}
        <div className="flex justify-center">
          <Link 
            to={`/project/${(project.id % projects.length) + 1}`}
            className="bg-[#222222] px-8 py-4 rounded-full hover:bg-[#2a2a2a] transition-colors inline-flex items-center gap-2"
          >
            Next Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 text-center pb-8">
        <Link to="/" className="text-2xl font-bold tracking-tight mb-12 inline-block">GridX</Link>
        <div className="flex flex-wrap justify-center gap-6 md:gap-16 mb-8">
          <Link to="/" className="text-gray-400 tracking-wider hover:text-white transition-colors">HOME</Link>
          <Link to="/about" className="text-gray-400 tracking-wider hover:text-white transition-colors">ABOUT</Link>
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

export default ProjectDetail;