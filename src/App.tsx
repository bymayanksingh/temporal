import React from 'react';
import { Camera, Palette, Cloud, Code, Dribbble, Twitter, Award, BookOpen, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-white p-4 md:p-8">
      <Navbar />
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8">
          <img 
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300" 
            alt="Profile" 
            className="rounded-full w-32 h-32 object-cover mb-6"
          />
          <h3 className="text-sm text-gray-400 mb-2">A WEB DESIGNER</h3>
          <h1 className="text-3xl font-bold mb-4">David<br />Henderson.</h1>
          <p className="text-gray-400">I am a Web Designer based<br />in san francisco.</p>
        </div>

        {/* Enhanced Credentials Card */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8 overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
          
          <h3 className="text-sm text-gray-400 mb-4 relative">MORE ABOUT ME</h3>
          <h2 className="text-2xl font-bold mb-8 relative">Credentials</h2>
          
          <div className="space-y-6 relative">
            {/* Education */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#222222] hover:bg-[#2a2a2a] transition-colors">
              <div className="bg-[#4B6BFB] p-3 rounded-xl">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Master in Design</h4>
                <p className="text-sm text-gray-400">University of California</p>
              </div>
            </div>

            {/* Experience */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#222222] hover:bg-[#2a2a2a] transition-colors">
              <div className="bg-[#4B6BFB] p-3 rounded-xl">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">15+ Years Experience</h4>
                <p className="text-sm text-gray-400">Product Design</p>
              </div>
            </div>

            {/* Awards */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#222222] hover:bg-[#2a2a2a] transition-colors">
              <div className="bg-[#4B6BFB] p-3 rounded-xl">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Award Winner</h4>
                <p className="text-sm text-gray-400">Multiple Design Awards</p>
              </div>
            </div>
          </div>

          <div className="mt-8 relative">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='50'%3E%3Cpath d='M10 25 Q 50 5, 90 25 T 190 25' stroke='white' fill='none' stroke-width='2'/%3E%3C/svg%3E" 
              alt="Signature" 
              className="w-full opacity-60 group-hover:opacity-100 transition-opacity"
            />
          </div>

          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4B6BFB] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Projects Card */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8">
          <h3 className="text-gray-400 mb-4">SHOWCASE</h3>
          <h2 className="text-2xl font-bold">Projects</h2>
          <img 
            src="https://images.unsplash.com/photo-1607706189992-eae578626c86?auto=format&fit=crop&q=80&w=200&h=150" 
            alt="Project Preview" 
            className="mt-4 rounded-lg w-full"
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
        <div className="bg-[#1A1A1A] rounded-3xl p-8 col-span-1 md:col-span-1 lg:col-span-1">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
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
        <div className="bg-[#1A1A1A] rounded-3xl p-8 col-span-1 md:col-span-2 lg:col-span-2">
          <h2 className="text-4xl font-bold">Let's<br />work <span className="text-blue-500">together</span>.</h2>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center">
        <div className="text-2xl font-bold mb-8">GridX</div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
          <Link to="/" className="text-gray-400">HOME</Link>
          <Link to="/about" className="text-gray-400">ABOUT</Link>
          <Link to="/works" className="text-gray-400">WORKS</Link>
          <Link to="/contact" className="text-gray-400">CONTACT</Link>
        </div>
        <div className="text-gray-400">
          © All rights reserved by <a href="#" className="text-blue-500">WordPressRiver</a>
        </div>
      </footer>
    </div>
  );
}

export default App;