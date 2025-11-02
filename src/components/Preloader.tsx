import { Croissant } from 'lucide-react';


export function Preloader() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="relative">
        <Croissant className="w-16 h-16 text-red-600 animate-[spin_3s_linear_infinite]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white"></div>
      </div>
      <div className="mt-8 flex flex-col items-center">
        <div className="h-1 w-48 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full w-full bg-red-600 rounded-full animate-[loading_2s_ease-in-out_infinite]"></div>
        </div>
        <p className="mt-4 text-gray-600 font-medium">Welcome To Ming..........</p>
      </div>
    </div>
  );
}