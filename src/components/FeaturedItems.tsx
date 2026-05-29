import { MenuItem } from './MenuItem';
import { menuItems } from '../data/menuData';
import { ArrowRight } from 'lucide-react';

interface FeaturedItemsProps {
  onNavigate: (view: 'home' | 'menu') => void;
}

// Select 6 iconic top foods representing various categories
const TOP_FOOD_NAMES = [
  "Egg Croissant",
  "Ming Special",
  "Veg Momo (Kothey)",
  "Chicken Burger",
  "Laphing Chowchow",
  "mojito"
];

export default function FeaturedItems({ onNavigate }: FeaturedItemsProps) {
  // Curate exactly our 6 top foods from menuItems
  const topFoods = menuItems.filter(item => TOP_FOOD_NAMES.includes(item.name)).slice(0, 6);

  return (
    <section id="menu" className="py-24 bg-gray-50/70 relative overflow-hidden">
      {/* Decorative subtle background glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-red-100/30 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-red-600 uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full">Chef's Highlights</span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mt-3 font-serif">Popular Dishes</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Taste our highly recommended and custom-crafted house specials, perfected over time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topFoods.map((item, index) => (
            <div key={index} className="transform hover:-translate-y-1 transition-all duration-300">
              <MenuItem {...item} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => onNavigate('menu')}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-red-600 text-white rounded-xl font-bold shadow-lg shadow-red-600/20 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 group"
          >
            <span>Explore Full Menu</span>
            <ArrowRight size={19} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}