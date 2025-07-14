import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiX } = FiIcons;

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling 100vh
      if (scrollY > windowHeight && !isHidden) {
        setIsVisible(true);
      } else if (scrollY <= windowHeight) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHidden]);

  const hideCTA = () => {
    setIsHidden(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-t border-gold-200/50 dark:border-gold-700/50 p-4 shadow-lg">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-800 dark:text-pearl-200 mb-1">
                  Ready to preserve your love story?
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Create your anniversary tribute today
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <motion.button
                  className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Now
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                </motion.button>
                
                <motion.button
                  onClick={hideCTA}
                  className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SafeIcon icon={FiX} className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;