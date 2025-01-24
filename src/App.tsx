import React from 'react';
import { Camera, Palette, Cloud, Code, Dribbble, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-white p-8">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-12">
        <div className="text-2xl font-bold">GridX</div>
        <div className="flex gap-8">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-gray-500">About</a>
          <a href="#" className="text-gray-500">Works</a>
          <a href="#" className="text-gray-500">Contact</a>
        </div>
        <Link to="/contact" className="bg-[#222222] px-6 py-2 rounded-full">Let's talk</Link>
      </nav>

      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8 col-span-1">
          <img 
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300" 
            alt="Profile" 
            className="rounded-full w-32 h-32 object-cover mb-6"
          />
          <h3 className="text-sm text-gray-400 mb-2">A WEB DESIGNER</h3>
          <h1 className="text-3xl font-bold mb-4">David<br />Henderson.</h1>
          <p className="text-gray-400">I am a Web Designer based<br />in san francisco.</p>
        </div>

        {/* Credentials Card */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8">
          <h3 className="text-gray-400 mb-4">MORE ABOUT ME</h3>
          <h2 className="text-2xl font-bold">Credentials</h2>
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='50'%3E%3Cpath d='M10 25 Q 50 5, 90 25' stroke='white' fill='none' stroke-width='2'/%3E%3C/svg%3E" 
               alt="Signature" 
               className="mt-4"
          />
        </div>

        {/* Projects Card */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8">
          <h3 className="text-gray-400 mb-4">SHOWCASE</h3>
          <h2 className="text-2xl font-bold">Projects</h2>
          <img 
            src="https://images.unsplash.com/photo-1607706189992-eae578626c86?auto=format&fit=crop&q=80&w=200&h=150" 
            alt="Project Preview" 
            className="mt-4 rounded-lg"
          />
        </div>

        {/* Blog Card */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8">
          <h3 className="text-gray-400 mb-4">BLOG</h3>
          <h2 className="text-2xl font-bold">GFonts</h2>
          <div className="mt-4">
            <div className="flex items-center text-3xl font-bold">
              <span className="text-red-500">2</span>
              <span className="text-blue-500">B</span>
            </div>
          </div>
        </div>

        {/* Services Card */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8">
          <h3 className="text-gray-400 mb-4">SPECIALIZATION</h3>
          <h2 className="text-2xl font-bold">Services Offering</h2>
          <div className="grid grid-cols-4 gap-4 mt-6">
            <Camera className="w-6 h-6" />
            <Palette className="w-6 h-6" />
            <Cloud className="w-6 h-6" />
            <Code className="w-6 h-6" />
          </div>
        </div>

        {/* Social Profiles Card */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8">
          <h3 className="text-gray-400 mb-4">STAY WITH ME</h3>
          <h2 className="text-2xl font-bold">Profiles</h2>
          <div className="flex gap-4 mt-6">
            <div className="bg-[#222222] p-3 rounded-full">
              <Dribbble className="w-6 h-6" />
            </div>
            <div className="bg-[#222222] p-3 rounded-full">
              <Twitter className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Stats Card */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8 col-span-1">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h2 className="text-4xl font-bold">07</h2>
              <p className="text-gray-400 text-sm mt-2">YEARS<br />EXPERIENCE</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">+125</h2>
              <p className="text-gray-400 text-sm mt-2">CLIENTS<br />WORLDWIDE</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">+210</h2>
              <p className="text-gray-400 text-sm mt-2">TOTAL<br />PROJECTS</p>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8 col-span-2">
          <h2 className="text-4xl font-bold">Let's<br />work <span className="text-blue-500">together</span>.</h2>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center">
        <div className="text-2xl font-bold mb-8">GridX</div>
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="text-gray-400">HOME</a>
          <a href="#" className="text-gray-400">ABOUT</a>
          <a href="#" className="text-gray-400">WORKS</a>
          <a href="#" className="text-gray-400">CONTACT</a>
        </div>
        <div className="text-gray-400">
          © All rights reserved by <a href="#" className="text-blue-500">WordPressRiver</a>
        </div>
      </footer>
    </div>
  );
}

export default App;