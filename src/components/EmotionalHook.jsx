import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiStar } = FiIcons;

const EmotionalHook = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-ivory-50 to-pearl-100 dark:from-slate-800 dark:to-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-serif text-slate-800 dark:text-pearl-100 mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Love grows. It weathers.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-sapphire-600 dark:from-gold-400 dark:to-sapphire-400">
              It becomes a legacy.
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Your anniversary isn't just another date on the calendar. It's a celebration of resilience, growth, and the beautiful story you've written together. While flowers fade and gifts gather dust, the memories you've created together deserve something more lasting—something that honors not just where you are, but the incredible journey that brought you here.
          </motion.p>
        </motion.div>

        {/* Testimonial Quote */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-gold-200/50 dark:border-gold-700/50">
            <div className="flex items-center justify-center mb-6">
              <SafeIcon icon={FiStar} className="w-6 h-6 text-gold-500 mr-2" />
              <SafeIcon icon={FiStar} className="w-6 h-6 text-gold-500 mr-2" />
              <SafeIcon icon={FiStar} className="w-6 h-6 text-gold-500 mr-2" />
              <SafeIcon icon={FiStar} className="w-6 h-6 text-gold-500 mr-2" />
              <SafeIcon icon={FiStar} className="w-6 h-6 text-gold-500" />
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-serif text-slate-700 dark:text-pearl-200 text-center mb-8 leading-relaxed">
              "We cried reading the tribute. This was the most meaningful anniversary gift in 45 years."
            </blockquote>
            
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold-400 to-sapphire-500 flex items-center justify-center mr-4">
                <SafeIcon icon={FiHeart} className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-slate-800 dark:text-pearl-200">Margaret & Robert</p>
                <p className="text-slate-600 dark:text-slate-400">45th Anniversary</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Emotional Connection Points */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: "For the Giver",
              subtitle: "Create something unforgettable",
              description: "Show them how much every moment has mattered with a gift that captures your entire journey together."
            },
            {
              title: "For the Receiver",
              subtitle: "Relive your love story",
              description: "Experience the joy of seeing your relationship through fresh eyes, celebrating every milestone along the way."
            },
            {
              title: "For the Family",
              subtitle: "Preserve your legacy",
              description: "Create a digital heirloom that future generations can treasure, learning from your example of lasting love."
            }
          ].map((point, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gold-200/30 dark:border-gold-700/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-slate-800 dark:text-pearl-200 mb-2">{point.title}</h3>
              <p className="text-lg text-gold-600 dark:text-gold-400 mb-4">{point.subtitle}</p>
              <p className="text-slate-600 dark:text-slate-300">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EmotionalHook;