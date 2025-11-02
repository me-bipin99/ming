import  { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedItems from './components/FeaturedItems';
import About from './components/About';
import Footer from './components/Footer';
import { MomoPopup } from './components/MomoPopup';
import Story from './components/Story';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (remove this in production and use real loading states)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <MomoPopup />
      <Hero />
      <Story />
      <FeaturedItems />
      <About />
      <Footer />
    </div>
  );
}

export default App;