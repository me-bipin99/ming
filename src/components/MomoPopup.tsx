import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export function MomoPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const day = new Date().getDay();
    if (day === 4) { // Thursday
      setMessage("Today's Special: Jhol Momo");
    } else if (day === 3) { // Wednesday
      setMessage("Tomorrow's Special: Jhol Momo");
    } else {
      setMessage("Thursday Special: Jhol Momo");
    }
  }, []);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-2xl w-full max-w-[90%] md:max-w-[400px] my-auto transform -translate-y-4">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"
            alt="Steaming hot momos"
            className="w-full h-[150px] md:h-[200px] object-cover"
          />
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full hover:bg-white transition-colors cursor-pointer shadow-lg"
            type="button"
            aria-label="Close popup"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div className="p-4 md:p-6">
          <div className="flex flex-col gap-2 mb-4">
            <div className="inline-block px-2 py-0.5 bg-red-600 text-white rounded-full text-xs font-medium w-fit">
              Special Announcement
            </div>
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                {message}
              </h3>
              <span className="text-2xl font-bold text-red-600">Rs.180</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
           our special Jhol Momo – delicious dumplings served in a flavorful spiced broth. A perfect mix of Nepali tradition and taste!
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleClose}
              className="px-8 py-2 bg-red-600 text-white rounded-full hover:bg-red-700  font-medium text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              type="button"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}