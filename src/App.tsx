import  { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedItems from './components/FeaturedItems';
import About from './components/About';
import Footer from './components/Footer';
import { MomoPopup } from './components/MomoPopup';
import Story from './components/Story';
import FullMenu from './components/FullMenu';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState<'home' | 'menu'>('home');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll back to top when switching pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentView={view} onNavigate={setView} />
      <MomoPopup />
      
      {view === 'home' ? (
        <>
          <Hero onNavigate={setView} />
          <Story />
          <FeaturedItems onNavigate={setView} />
          <About />
        </>
      ) : (
        <FullMenu onNavigate={setView} />
      )}
      
      <Footer />
    </div>
  );
}

export default App;