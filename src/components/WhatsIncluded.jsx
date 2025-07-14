import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiScroll, FiMail, FiImage, FiBook, FiGift, FiDownload, FiLock, FiGlobe } = FiIcons;

const WhatsIncluded = () => {
  const features = [
    {
      icon: FiScroll,
      title: "Custom Love Timeline",
      description: "A beautifully crafted chronological journey through your relationship's most precious moments"
    },
    {
      icon: FiMail,
      title: "Partner Letters & Voice Notes",
      description: "Heartfelt messages and audio recordings that capture the essence of your love"
    },
    {
      icon: FiImage,
      title: "Photo Gallery with Story Captions",
      description: "Your favorite memories brought to life with personalized storytelling"
    },
    {
      icon: FiBook,
      title: "Life Lessons & Printable Keepsakes",
      description: "Wisdom gained and beautiful elements you can print and frame"
    },
    {
      icon: FiGift,
      title: "Surprise or Collaborative Modes",
      description: "Create it as a surprise gift or work together to build your tribute"
    },
    {
      icon: FiDownload,
      title: "PDF Export & Printed Book Option",
      description: "Download your tribute or order a premium printed keepsake book"
    },
    {
      icon: FiLock,
      title: "Private/Family-Only Access",
      description: "Complete control over who can view and share your intimate story"
    },
    {
      icon: FiGlobe,
      title: "Hosted Webpage with Optional Domain",
      description: "Your own beautiful website with optional custom domain name"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-pearl-50 to-ivory-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-serif text-slate-800 dark:text-pearl-100 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What's Included in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-sapphire-600 dark:from-gold-400 dark:to-sapphire-400">
              Every Tribute
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Every anniversary tribute is thoughtfully crafted with these premium features to ensure your love story is preserved beautifully.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gold-200/30 dark:border-gold-700/30 group-hover:border-gold-400/50">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-gold-400 to-sapphire-500 flex items-center justify-center mb-4 mx-auto"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <SafeIcon icon={feature.icon} className="w-6 h-6 text-white" />
                </motion.div>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-pearl-200 mb-3 text-center">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 text-center text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group bg-gradient-to-r from-sapphire-500 to-sapphire-600 hover:from-sapphire-600 hover:to-sapphire-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Anniversary Milestones
            <SafeIcon icon={FiGlobe} className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsIncluded;