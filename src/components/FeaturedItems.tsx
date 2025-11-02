import { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { MenuItem } from './MenuItem';
import { CategoryFilter } from './CategoryFilter';
import { SearchSort } from './SearchSort';
import { menuItems } from '../data/menuData';

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

export default function FeaturedItems() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('default');
  const [isExpanded, setIsExpanded] = useState(false);
  const [itemsToShow] = useState(9);

  const processedItems = useMemo(() => {
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

  const displayedItems = isExpanded ? processedItems : processedItems.slice(0, itemsToShow);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Menu</h2>
          <p className="mt-4 text-xl text-gray-600">Discover our delicious offerings</p>
        </div>

        <SearchSort
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
        />

        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.length > 0 ? (
            displayedItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-lg font-medium text-gray-500">
                No items found in the menu.
              </p>
            </div>
          )}
        </div>

        {processedItems.length > itemsToShow && (
          <div className="text-center mt-12">
            <button
              onClick={handleExpand}
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}