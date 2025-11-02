import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import minglogo from '../assets/images/minglogo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <button onClick={() => scrollToSection('home')} className="flex items-center">
              <img src={minglogo} alt="minglogo" className="h-12 w-12" />
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-red-600 transition`}>Home</button>
            <button onClick={() => scrollToSection('story')} className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-red-600 transition`}>Our Story</button>
            <button onClick={() => scrollToSection('menu')} className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-red-600 transition`}>Menu</button>
            <button onClick={() => scrollToSection('about')} className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-red-600 transition`}>About</button>
            <button onClick={() => scrollToSection('footer')} className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-red-600 transition`}>Contact</button>
            <a href="https://maps.app.goo.gl/D8JLkUAsyKydGj3t7" target="_blank" rel="noopener noreferrer">
              <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
                Visit Now
              </button>
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-white hover:text-red-600">Home</button>
            <button onClick={() => scrollToSection('story')} className="block w-full text-left px-3 py-2 text-white hover:text-red-600">Our Story</button>
            <button onClick={() => scrollToSection('menu')} className="block w-full text-left px-3 py-2 text-white hover:text-red-600">Menu</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-white hover:text-red-600">About</button>
            
            <button onClick={() => scrollToSection('footer')} className="block w-full text-left px-3 py-2 text-white hover:text-red-600">Contact</button>
            <a href="https://maps.app.goo.gl/D8JLkUAsyKydGj3t7" target="_self" rel="noopener noreferrer">
              <button className="w-full text-left px-3 py-2 text-white bg-red-600 rounded-md hover:bg-red-700">
                Visit Now
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}