import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from './common/SafeIcon';
import Hero from './components/Hero';
import EmotionalHook from './components/EmotionalHook';
import WhatsIncluded from './components/WhatsIncluded';
import MilestonePreviews from './components/MilestonePreviews';
import HowItWorks from './components/HowItWorks';
import PackageOptions from './components/PackageOptions';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalClose from './components/FinalClose';
import StickyCTA from './components/StickyCTA';

const { FiMoon, FiSun } = FiIcons;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-pearl-50 to-ivory-100 dark:from-slate-900 dark:to-slate-800 transition-all duration-500">
        {/* Dark Mode Toggle */}
        <motion.button
          onClick={toggleDarkMode}
          className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SafeIcon 
            icon={darkMode ? FiSun : FiMoon} 
            className="w-5 h-5 text-gold-600 dark:text-gold-400" 
          />
        </motion.button>

        {/* Floating Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-sapphire-500 z-50"
          style={{
            scaleX: scrollY / (document.body.scrollHeight - window.innerHeight),
            transformOrigin: '0%'
          }}
        />

        {/* Main Content */}
        <Hero />
        <EmotionalHook />
        <WhatsIncluded />
        <MilestonePreviews />
        <HowItWorks />
        <PackageOptions />
        <Testimonials />
        <FAQ />
        <FinalClose />
        
        {/* Sticky CTA for Mobile */}
        <StickyCTA />
      </div>
    </div>
  );
}

export default App;