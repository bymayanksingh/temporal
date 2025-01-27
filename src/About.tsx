import React from 'react';
import { Link } from 'react-router-dom';
import { Dribbble, Twitter } from 'lucide-react';
import Navbar from './components/Navbar';

function About() {
  return (
    <div className="min-h-screen bg-[#111111] text-white p-4 md:p-8">
      <Navbar />

      {/* Header */}
      <div className="flex justify-center items-center mb-16 mt-8 relative">
        <div className="relative inline-block">
          <span className="absolute -left-12 -top-12">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0L24.4903 15.5097L40 20L24.4903 24.4903L20 40L15.5097 24.4903L0 20L15.5097 15.5097L20 0Z" fill="white"/>
            </svg>
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-center tracking-tight">SELF-SUMMARY</h1>
          <span className="absolute -right-12 -bottom-12">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0L24.4903 15.5097L40 20L24.4903 24.4903L20 40L15.5097 24.4903L0 20L15.5097 15.5097L20 0Z" fill="white"/>
            </svg>
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8">
          <img 
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300" 
            alt="David Henderson"
            className="w-full aspect-square object-cover rounded-2xl mb-6"
          />
          <h2 className="text-3xl font-bold mb-4">David Henderson</h2>
          <p className="text-gray-400">
            I am a San francisco-based product designer with a focus on web design,
            illustration, a visual development. I have a diverse range of experience having
            worked across various fields and industries.
          </p>
        </div>

        {/* Experience Section */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-8">EXPERIENCE</h3>
          
          <div className="mb-8">
            <div className="text-gray-400 mb-2">2007 - 2017</div>
            <h4 className="text-xl font-bold mb-2">Framer Designer & Developer</h4>
            <p className="text-gray-400">Bluebase Designs</p>
          </div>

          <div>
            <div className="text-gray-400 mb-2">2017 - 2023</div>
            <h4 className="text-xl font-bold mb-2">Front-End Developer</h4>
            <p className="text-gray-400">Larsen & Toubro</p>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-8">EDUCATION</h3>
          
          <div className="mb-8">
            <div className="text-gray-400 mb-2">2004 - 2007</div>
            <h4 className="text-xl font-bold mb-2">Bachelor Degree in Psychology</h4>
            <p className="text-gray-400">University of California</p>
          </div>

          <div>
            <div className="text-gray-400 mb-2">2007 - 2009</div>
            <h4 className="text-xl font-bold mb-2">Master Degree in Designing</h4>
            <p className="text-gray-400">University of Texas</p>
          </div>
        </div>

        {/* Social Profiles */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8">
          <h3 className="text-sm text-gray-400 mb-4">STAY WITH ME</h3>
          <h2 className="text-2xl font-bold mb-6">Profiles</h2>
          <div className="flex gap-4">
            <a href="#" className="bg-[#222222] p-4 rounded-full hover:bg-[#2a2a2a] transition-colors">
              <Dribbble className="w-6 h-6" />
            </a>
            <a href="#" className="bg-[#222222] p-4 rounded-full hover:bg-[#2a2a2a] transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Let's Work Together */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8 col-span-1 md:col-span-1">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Let's</h2>
            <h2 className="text-3xl font-bold">work <span className="text-[#4B6BFB]">together</span>.</h2>
          </div>
        </div>

        {/* Credentials */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8">
          <h3 className="text-sm text-gray-400 mb-4">MORE ABOUT ME</h3>
          <h2 className="text-2xl font-bold">Credentials</h2>
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='50'%3E%3Cpath d='M10 25 Q 50 5, 90 25' stroke='white' fill='none' stroke-width='2'/%3E%3C/svg%3E" 
            alt="Signature" 
            className="mt-4"
          />
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

export default About;