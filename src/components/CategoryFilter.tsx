
import { menuCategories } from '../data/menuData';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {menuCategories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            selectedCategory === category.id
              ? 'bg-red-600 text-white shadow-lg scale-105'
              : 'bg-white text-gray-600 hover:bg-gray-100 hover:scale-105'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}