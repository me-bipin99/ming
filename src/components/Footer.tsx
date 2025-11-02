import { Facebook, Instagram} from 'lucide-react';
import minglogo from '../assets/images/minglogo.png';

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              
              <img src={minglogo} alt="Ming logo" className="h-12 w-12" />
            </div>
            <p className="text-gray-400 mb-4">
              Experience the perfect blend of traditional and modern Asian cuisine at Ming Food & Beverages.
            </p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/ming_food_and_beverage/" target="_blank" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-6 w-6" />
              </a>
              
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#story" className="text-gray-400 hover:text-white transition">Our Story</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-white transition">Menu</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Banglamukhi Mandir</li>
              <li>Lalitpur City, Patan Area</li>
              
              <li>+977 976-2272066</li>
              <li>mingfood@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>
  Made with ♥ by{" "}
  <a href="https://github.com/me-bipin99/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
    Beebee
  </a>{" "}
  &copy; {new Date().getFullYear()} . All rights reserved.
</p>

        </div>
      </div>
    </footer>
  );
}