import React from 'react';
import { Mail, Phone, MapPin, Dribbble, Twitter, Instagram } from 'lucide-react';

function Contact() {
  return (
    <div className="min-h-screen bg-[#111111] text-white p-8">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-16">
        <div className="text-2xl font-bold tracking-tight">GridX</div>
        <div className="flex gap-12">
          <a href="/" className="text-gray-500 hover:text-gray-300 transition-colors">Home</a>
          <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">About</a>
          <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Works</a>
          <a href="/contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>
        </div>
        <button className="bg-[#222222] px-8 py-3 rounded-full hover:bg-[#2a2a2a] transition-colors">Let's talk</button>
      </nav>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-12">
          <h2 className="text-2xl font-bold mb-8">CONTACT INFO</h2>
          
          {/* Mail */}
          <div className="flex items-start gap-6">
            <div className="bg-[#1A1A1A] p-4 rounded-2xl">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-gray-400 text-sm mb-2">MAIL US</h3>
              <p className="mb-1">info@bluebase.com</p>
              <p>info@bluebase2.com</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-start gap-6">
            <div className="bg-[#1A1A1A] p-4 rounded-2xl">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-gray-400 text-sm mb-2">CONTACT US</h3>
              <p className="mb-1">+1 504-899-8221</p>
              <p>+1 504-749-5456</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-6">
            <div className="bg-[#1A1A1A] p-4 rounded-2xl">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-gray-400 text-sm mb-2">LOCATION</h3>
              <p className="mb-1">22 Baker Street, Texas</p>
              <p className="mb-1">United States</p>
              <p>W1U 3BW</p>
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
        <div className="bg-[#1A1A1A] p-12 rounded-3xl">
          <h2 className="text-4xl font-bold mb-2">Let's work</h2>
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-blue-500">together</span>.
          </h2>
          
          <form className="space-y-6">
            <div>
              <input 
                type="text" 
                placeholder="Name *" 
                className="w-full bg-[#222222] rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email *" 
                className="w-full bg-[#222222] rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Your Subject *" 
                className="w-full bg-[#222222] rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea 
                placeholder="Your Message *" 
                rows={6}
                className="w-full bg-[#222222] rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#222222] text-white py-4 rounded-lg hover:bg-[#2a2a2a] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 text-center">
        <div className="text-2xl font-bold tracking-tight mb-12">GridX</div>
        <div className="flex justify-center gap-16 mb-12">
          <a href="/" className="text-gray-400 tracking-wider hover:text-white transition-colors">HOME</a>
          <a href="#" className="text-gray-400 tracking-wider hover:text-white transition-colors">ABOUT</a>
          <a href="#" className="text-gray-400 tracking-wider hover:text-white transition-colors">WORKS</a>
          <a href="/contact" className="text-gray-400 tracking-wider hover:text-white transition-colors">CONTACT</a>
        </div>
        <div className="text-gray-400">
          © All rights reserved by <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">WordPressRiver</a>
        </div>
      </footer>
    </div>
  );
}

export default Contact;