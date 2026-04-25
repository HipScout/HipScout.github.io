import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import SplashScreen from './components/SplashScreen';
import TravelPost from './pages/TravelPost';
import './index.css';

function MainPage() {
  const heroRef = useRef(null);
  const [showSplash, setShowSplash] = useState(true);

  const handleBootComplete = () => {
    setShowSplash(false);
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      {showSplash && <SplashScreen onBootComplete={handleBootComplete} />}
      <div ref={heroRef}>
        <Hero />
      </div>
      <Skills />
      <Projects />
      <Blog />
      <About />
      <Contact />
    </main>
  );
}

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <div className="app-container">
        <ParticlesBackground theme={theme} />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/travel/:slug" element={<TravelPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
