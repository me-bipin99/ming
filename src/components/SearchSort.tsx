import { Search, SlidersHorizontal } from 'lucide-react';

interface SearchSortProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortOrder: string;
  onSortChange: (order: string) => void;
}

export function SearchSort({ searchQuery, onSearchChange, sortOrder, onSortChange }: SearchSortProps) {
  const handleSearch = (value: string) => {
    onSearchChange(value);
  };

  return (
    <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
      <div className="relative w-full md:w-96">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search menu items..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>
      
      <div className="flex items-center gap-2">
        <SlidersHorizontal className="text-gray-600" size={20} />
        <select
          value={sortOrder}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
        >
          <option value="default">Default Order</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
        </select>
      </div>
    </div>
  );
}