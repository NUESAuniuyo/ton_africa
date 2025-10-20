import React, { useEffect } from 'react'; 
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import VisionMission from './VisionMission';
import CoreValues from './CoreValues';
import Team from './Team';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import './index.css';

// Scroll to top component for route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Home component that includes all sections
const Home = () => (
  <>
    <Hero />
    <About />
    <VisionMission />
    <CoreValues />
    <Team />
    <Gallery />
    <Contact />
  </>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<VisionMission />} />
          <Route path="/values" element={<CoreValues />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;