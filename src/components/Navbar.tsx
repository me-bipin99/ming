import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import minglogo from '../assets/images/minglogo.png';

interface NavbarProps {
  currentView: 'home' | 'menu';
  onNavigate: (view: 'home' | 'menu') => void;
}

export default function Navbar({ currentView, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (id === 'menu-full') {
      onNavigate('menu');
      return;
    }

    if (currentView === 'menu') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 150);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isSolid = isScrolled || currentView === 'menu';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isSolid ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <button onClick={() => handleNavClick('home')} className="flex items-center">
              <img src={minglogo} alt="minglogo" className="h-12 w-12 hover:scale-105 transition-transform duration-300" />
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavClick('home')} className={`${isSolid ? 'text-gray-800' : 'text-white'} font-medium hover:text-red-600 transition`}>Home</button>
            <button onClick={() => handleNavClick('story')} className={`${isSolid ? 'text-gray-800' : 'text-white'} font-medium hover:text-red-600 transition`}>Our Story</button>
            <button onClick={() => handleNavClick(currentView === 'menu' ? 'home' : 'menu')} className={`${isSolid ? 'text-gray-800' : 'text-white'} font-medium hover:text-red-600 transition ${currentView === 'menu' ? 'text-red-600' : ''}`}>Menu</button>
            <button onClick={() => handleNavClick('about')} className={`${isSolid ? 'text-gray-800' : 'text-white'} font-medium hover:text-red-600 transition`}>About</button>
            <button onClick={() => handleNavClick('footer')} className={`${isSolid ? 'text-gray-800' : 'text-white'} font-medium hover:text-red-600 transition`}>Contact</button>
            <a href="https://maps.app.goo.gl/D8JLkUAsyKydGj3t7" target="_blank" rel="noopener noreferrer">
              <button className="bg-red-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20 active:scale-95 transition-all duration-250">
                Visit Now
              </button>
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-1 rounded-md">
              {isOpen ? (
                <X className={`h-6 w-6 ${isSolid ? 'text-gray-800' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isSolid ? 'text-gray-800' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-100 py-3">
          <div className="px-4 space-y-2">
            <button onClick={() => handleNavClick('home')} className="block w-full text-left py-2 text-gray-800 font-medium hover:text-red-600">Home</button>
            <button onClick={() => handleNavClick('story')} className="block w-full text-left py-2 text-gray-800 font-medium hover:text-red-600">Our Story</button>
            <button onClick={() => handleNavClick(currentView === 'menu' ? 'home' : 'menu')} className="block w-full text-left py-2 text-gray-800 font-medium hover:text-red-600">Menu</button>
            <button onClick={() => handleNavClick('about')} className="block w-full text-left py-2 text-gray-800 font-medium hover:text-red-600">About</button>
            <button onClick={() => handleNavClick('footer')} className="block w-full text-left py-2 text-gray-800 font-medium hover:text-red-600">Contact</button>
            <a href="https://maps.app.goo.gl/D8JLkUAsyKydGj3t7" target="_blank" rel="noopener noreferrer" className="block pt-2">
              <button className="w-full text-center py-2.5 text-white bg-red-600 rounded-lg font-medium hover:bg-red-700 transition">
                Visit Now
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}