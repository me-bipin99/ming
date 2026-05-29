import { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, ChefHat } from 'lucide-react';
import { MenuItem } from './MenuItem';
import { CategoryFilter } from './CategoryFilter';
import { SearchSort } from './SearchSort';
import { menuItems } from '../data/menuData';

interface FullMenuProps {
  onNavigate: (view: 'home' | 'menu') => void;
}

function fuzzyMatch(str: string, pattern: string): boolean {
  const cleanStr = str.toLowerCase();
  const cleanPattern = pattern.toLowerCase();
  
  let strIndex = 0;
  let patternIndex = 0;
  
  while (strIndex < cleanStr.length && patternIndex < cleanPattern.length) {
    if (cleanStr[strIndex] === cleanPattern[patternIndex]) {
      patternIndex++;
    }
    strIndex++;
  }
  
  return patternIndex === cleanPattern.length;
}

export default function FullMenu({ onNavigate }: FullMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('default');

  // Automatically scroll to the top of the screen when entering this page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const filteredItems = useMemo(() => {
    let items = selectedCategory === 'all' 
      ? menuItems 
      : menuItems.filter(item => item.category === selectedCategory);

    if (searchQuery) {
      // First try exact matches
      const exactMatches = items.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // If we have exact matches, return only those
      if (exactMatches.length > 0) {
        return exactMatches;
      }

      // If no exact matches, try fuzzy search
      items = items.filter(item => 
        fuzzyMatch(item.name, searchQuery) ||
        fuzzyMatch(item.description, searchQuery)
      );
    }

    switch (sortOrder) {
      case 'name-asc':
        return [...items].sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return [...items].sort((a, b) => b.name.localeCompare(a.name));
      case 'price-asc':
        return [...items].sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')));
      case 'price-desc':
        return [...items].sort((a, b) => parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')));
      default:
        return items;
    }
  }, [selectedCategory, searchQuery, sortOrder]);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Premium Sub-Header Cover with a dark overlay and food illustration texture */}
      <div className="relative bg-gray-900 py-20 text-white overflow-hidden">
        {/* Cover ambient decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/30 via-gray-900 to-gray-900 opacity-90"></div>
        <div className="absolute top-0 left-0 right-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1600&auto=format&fit=crop&q=60')] bg-cover bg-center mix-blend-overlay opacity-25"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 font-medium transition-all mb-6 group"
          >
            <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <ChefHat className="text-amber-500 h-8 w-8 animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-amber-500 font-bold bg-amber-500/10 px-2.5 py-1 rounded">Our Gastronomy</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold font-serif tracking-tight">
                Our Full Menu
              </h1>
              <p className="mt-3 text-lg text-gray-300 max-w-xl">
                Explore our full culinary archive. Filter by category, search specific plates, or sort by pricing and taste.
              </p>
            </div>
            
            <div className="text-sm text-gray-400 font-semibold bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 px-4 py-2 rounded-lg">
              Showing <span className="text-amber-400 font-extrabold">{filteredItems.length}</span> of {menuItems.length} dishes
            </div>
          </div>
        </div>
      </div>

      {/* Main filterable body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Sticky Filter & Search Control Panel */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 mb-10 -mt-16 relative z-20">
          <div className="flex flex-col gap-6">
            <SearchSort
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortOrder={sortOrder}
              onSortChange={setSortOrder}
            />

            <div className="border-t border-gray-100 pt-6">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          </div>
        </div>

        {/* Dynamic Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div key={index} className="transform hover:-translate-y-1 transition-all duration-300">
                <MenuItem {...item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm px-4">
            <ChefHat size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">No Matching Dishes Found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We couldn't find any dishes matching "{searchQuery}". Try selecting another category or check your typing.
            </p>
            <button 
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-6 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors duration-200"
            >
              Reset Filters & Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
