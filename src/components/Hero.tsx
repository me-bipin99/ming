import image1 from '../assets/images/home1.jpg';
import image4 from '../assets/images/fryrice.jpg';
import blacktea from '../assets/images/blacktea2.jpg';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative min-h-screen">
      <div className="absolute inset-0">
        <img 
          src={blacktea}
          alt="Illustrated food background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
            Ming Delights Await
            </h1>
            <p className="text-xl md:text-2xl text-amber-300 italic mb-8">
            Savor the authentic taste of Ming cuisine, prepared with the finest ingredients and a touch of tradition.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button 
                onClick={() => scrollToSection('menu')}
                className="px-8 py-3 bg-amber-600 text-white hover:bg-amber-700 transition rounded-md">
                View Menu
              </button>
              <button 
                onClick={() => scrollToSection('story')}
                className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition rounded-md"
              >
                Our Story
              </button>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[500px] mt-8 md:mt-0">
            <div className="absolute top-0 right-0 w-4/5 h-48 md:h-64 transform -rotate-6 hover:rotate-0 transition-all duration-300 z-20">
              <img 
                src={image1}
                alt="Restaurant interior" 
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute top-32 md:top-52 right-20 w-4/5 h-48 md:h-64 transform rotate-6 hover:rotate-0 transition-all duration-300 z-10">
              <img 
                src={image4}
                alt="Restaurant ambiance" 
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}