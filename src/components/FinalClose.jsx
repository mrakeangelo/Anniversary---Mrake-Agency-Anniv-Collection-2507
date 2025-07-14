import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiArrowRight, FiPhone, FiMail, FiGlobe } = FiIcons;

const FinalClose = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-pearl-50 to-ivory-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.8
            }}
          >
            <SafeIcon icon={FiHeart} className="w-16 h-16 text-gold-400" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-20 h-20 rounded-full bg-gradient-to-r from-gold-400 to-sapphire-500 flex items-center justify-center mx-auto mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            <SafeIcon icon={FiHeart} className="w-10 h-10 text-white" />
          </motion.div>

          <motion.blockquote 
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-800 dark:text-pearl-100 mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            "Love is built in moments.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-sapphire-600 dark:from-gold-400 dark:to-sapphire-400">
              Now those moments can last forever."
            </span>
          </motion.blockquote>
          
          <motion.p 
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Your love story deserves to be preserved, celebrated, and treasured for generations to come. Let us help you create something beautiful that honors your journey together.
          </motion.p>
        </motion.div>

        {/* Main CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-10 py-5 rounded-full font-semibold text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Tribute Now
            <SafeIcon icon={FiArrowRight} className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button
            className="group border-2 border-sapphire-500 text-sapphire-600 dark:text-sapphire-400 hover:bg-sapphire-500 hover:text-white px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SafeIcon icon={FiPhone} className="w-6 h-6" />
            Schedule a Free Planning Call
          </motion.button>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gold-200/30 dark:border-gold-700/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif text-slate-800 dark:text-pearl-100 mb-6">
              Ready to Begin Your Legacy?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold-400 to-sapphire-500 flex items-center justify-center mx-auto mb-3">
                  <SafeIcon icon={FiMail} className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-slate-800 dark:text-pearl-200 mb-2">Email Us</h4>
                <p className="text-slate-600 dark:text-slate-300">hello@mrakeagency.com</p>
              </motion.div>
              
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold-400 to-sapphire-500 flex items-center justify-center mx-auto mb-3">
                  <SafeIcon icon={FiPhone} className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-slate-800 dark:text-pearl-200 mb-2">Call Us</h4>
                <p className="text-slate-600 dark:text-slate-300">1-800-TRIBUTE</p>
              </motion.div>
              
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold-400 to-sapphire-500 flex items-center justify-center mx-auto mb-3">
                  <SafeIcon icon={FiGlobe} className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-slate-800 dark:text-pearl-200 mb-2">Visit Us</h4>
                <p className="text-slate-600 dark:text-slate-300">mrakeagency.com</p>
              </motion.div>
            </div>

            <div className="border-t border-gold-200/30 dark:border-gold-700/30 pt-6">
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Mrake Agency • Anniversary Tribute Collection • Creating Digital Legacies Since 2020
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalClose;