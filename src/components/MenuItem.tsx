import { useState } from 'react';

interface MenuItemProps {
  name: string;
  image: string;
  description: string;
  price: string;
}

export function MenuItem({ name, image, description, price }: MenuItemProps) {
  const [showDescription, setShowDescription] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDescription(!showDescription);
  };

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative"
      role="button"
      tabIndex={0}
      onClick={handleClick}
    >
      <div className="h-64 overflow-hidden relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
        {/* Overlay with name and price */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-white break-words pr-20">{name}</h3>
              <span className="absolute top-0 right-0 text-lg font-bold text-white bg-red-600/90 px-3 py-1 rounded-full whitespace-nowrap">
                {price}
              </span>
            </div>
          </div>
        </div>
        
        {/* Description overlay that appears on click */}
        <div 
          className={`absolute inset-0 bg-black/80 p-6 flex items-center justify-center transition-transform duration-300 overflow-y-auto ${
            showDescription ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <p className="text-white text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}