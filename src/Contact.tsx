import React from 'react';
import { Mail, Phone, MapPin, Dribbble, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="min-h-screen bg-[#111111] text-white p-4 md:p-8">
      {/* Navigation */}
      <nav className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
        <div className="text-2xl font-bold tracking-tight">GridX</div>
        <div className="flex gap-6 md:gap-12 flex-wrap justify-center">
          <Link to="/" className="text-gray-500 hover:text-gray-300 transition-colors">Home</Link>
          <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">About</a>
          <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Works</a>
          <Link to="/contact" className="text-white">Contact</Link>
        </div>
        <Link to="/contact" className="bg-[#222222] px-8 py-3 rounded-full hover:bg-[#2a2a2a] transition-colors w-full md:w-auto text-center">Let's talk</Link>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 mt-8 md:mt-16">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-8 md:mb-16">CONTACT INFO</h2>
          
          {/* Mail */}
          <div className="flex items-start gap-6 mb-8 md:mb-16">
            <div className="bg-[#1A1A1A] p-4 rounded-2xl">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-gray-400 text-sm mb-4">MAIL US</h3>
              <p className="mb-2 text-lg">info@bluebase.com</p>
              <p className="text-lg">info@bluebase2.com</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-start gap-6 mb-8 md:mb-16">
            <div className="bg-[#1A1A1A] p-4 rounded-2xl">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-gray-400 text-sm mb-4">CONTACT US</h3>
              <p className="mb-2 text-lg">+1 504-899-8221</p>
              <p className="text-lg">+1 504-749-5456</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-6 mb-8 md:mb-16">
            <div className="bg-[#1A1A1A] p-4 rounded-2xl">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-gray-400 text-sm mb-4">LOCATION</h3>
              <p className="mb-2 text-lg">22 Baker Street, Texas</p>
              <p className="mb-2 text-lg">United States</p>
              <p className="text-lg">W1U 3BW</p>
            </div>
          </div>

          {/* Social Info */}
          <div>
            <h2 className="text-2xl font-bold mb-8">SOCIAL INFO</h2>
            <div className="flex gap-4">
              <a href="#" className="bg-[#1A1A1A] p-4 rounded-full hover:bg-[#222222] transition-colors">
                <Dribbble className="w-6 h-6" />
              </a>
              <a href="#" className="bg-[#1A1A1A] p-4 rounded-full hover:bg-[#222222] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="bg-[#1A1A1A] p-4 rounded-full hover:bg-[#222222] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#1A1A1A] p-6 md:p-16 rounded-3xl relative mt-8 lg:mt-0">
          <div className="absolute top-6 right-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.4853 3.51472L3.51472 20.4853M3.51472 3.51472L20.4853 20.4853" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-16">
            Let's work <span className="text-[#4B6BFB]">together</span>.
          </h2>
          
          <form className="space-y-6">
            <div>
              <input 
                type="text" 
                placeholder="Name *" 
                className="w-full bg-[#222222] rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email *" 
                className="w-full bg-[#222222] rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Your Subject *" 
                className="w-full bg-[#222222] rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <textarea 
                placeholder="Your Message *" 
                rows={6}
                className="w-full bg-[#222222] rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#222222] text-white py-4 rounded-lg hover:bg-[#2a2a2a] transition-colors text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 md:mt-32 text-center">
        <div className="text-2xl font-bold tracking-tight mb-8 md:mb-12">GridX</div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-16 mb-8 md:mb-12">
          <Link to="/" className="text-gray-400 tracking-wider hover:text-white transition-colors">HOME</Link>
          <a href="#" className="text-gray-400 tracking-wider hover:text-white transition-colors">ABOUT</a>
          <a href="#" className="text-gray-400 tracking-wider hover:text-white transition-colors">WORKS</a>
          <Link to="/contact" className="text-gray-400 tracking-wider hover:text-white transition-colors">CONTACT</Link>
        </div>
        <div className="text-gray-400">
          © All rights reserved by <a href="#" className="text-[#4B6BFB] hover:text-[#3b5beb] transition-colors">WordPressRiver</a>
        </div>
      </footer>
    </div>
  );
}

export default Contact;