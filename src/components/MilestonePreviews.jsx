import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFileText, FiTrendingUp, FiGift, FiCalendar, FiEye, FiArrowRight } = FiIcons;

const MilestonePreviews = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const milestones = [
    {
      year: "1st",
      material: "Paper",
      title: "Our First Chapter",
      description: "The beginning of forever, captured in delicate paper-inspired design",
      color: "from-slate-200 to-slate-300",
      textColor: "text-slate-800",
      tags: ["Romantic", "New Love"],
      preview: "A tender timeline of your first year together, from first date to first anniversary"
    },
    {
      year: "5th",
      material: "Wood",
      title: "Planted in Love",
      description: "Strong roots, growing branches - your love taking deeper hold",
      color: "from-amber-200 to-amber-400",
      textColor: "text-amber-900",
      tags: ["Growth", "Family Gift"],
      preview: "Five years of growth, challenges overcome, and dreams planted together"
    },
    {
      year: "10th",
      material: "Tin",
      title: "A Decade of Us",
      description: "Flexible yet durable, like your love that bends but never breaks",
      color: "from-gray-300 to-gray-500",
      textColor: "text-white",
      tags: ["Legacy", "Milestone"],
      preview: "Ten years of shared adventures, lessons learned, and love strengthened"
    },
    {
      year: "25th",
      material: "Silver",
      title: "Quarter Century of Love",
      description: "Refined and precious, polished by time and experience",
      color: "from-gray-400 to-gray-600",
      textColor: "text-white",
      tags: ["Legacy", "Event-Ready"],
      preview: "Twenty-five years of building a life together, celebrating major milestones"
    },
    {
      year: "30th",
      material: "Pearl",
      title: "The Hidden Treasure of Time",
      description: "Formed through patience, pressure, and time - a rare beauty",
      color: "from-pearl-200 to-pearl-400",
      textColor: "text-slate-800",
      tags: ["Legacy", "Romantic"],
      preview: "Three decades of creating something beautiful from life's challenges"
    },
    {
      year: "45th",
      material: "Sapphire",
      title: "Refined by Time",
      description: "Deep blue wisdom, precious and enduring through all seasons",
      color: "from-sapphire-400 to-sapphire-600",
      textColor: "text-white",
      tags: ["Legacy", "Event-Ready"],
      preview: "Nearly half a century of love, wisdom, and unbreakable bonds"
    },
    {
      year: "50th",
      material: "Gold",
      title: "Fifty Years of Forever",
      description: "The ultimate milestone - pure, precious, and eternally valuable",
      color: "from-gold-400 to-gold-600",
      textColor: "text-white",
      tags: ["Legacy", "Event-Ready", "Family Gift"],
      preview: "Golden anniversary celebrating five decades of devotion and commitment"
    },
    {
      year: "60th",
      material: "Diamond",
      title: "A Diamond Made of Days",
      description: "Unbreakable, brilliant, formed under pressure into perfection",
      color: "from-blue-200 to-blue-400",
      textColor: "text-blue-900",
      tags: ["Legacy", "Rare"],
      preview: "Diamond anniversary honoring six decades of extraordinary love"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Milestones', icon: FiCalendar },
    { id: 'Romantic', label: 'Romantic', icon: FiGift },
    { id: 'Legacy', label: 'Legacy', icon: FiTrendingUp },
    { id: 'Family Gift', label: 'Family Gift', icon: FiGift },
    { id: 'Event-Ready', label: 'Event-Ready', icon: FiFileText }
  ];

  const filteredMilestones = selectedFilter === 'all' 
    ? milestones 
    : milestones.filter(milestone => milestone.tags.includes(selectedFilter));

  return (
    <section className="py-24 bg-gradient-to-br from-ivory-50 to-pearl-100 dark:from-slate-800 dark:to-slate-700">
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
            Milestone Tribute
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-sapphire-600 dark:from-gold-400 dark:to-sapphire-400">
              Previews
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Each anniversary year has its own unique theme and design, celebrating the traditional materials and meanings behind every milestone.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedFilter === filter.id
                  ? 'bg-gradient-to-r from-gold-500 to-sapphire-500 text-white shadow-lg'
                  : 'bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={filter.icon} className="w-4 h-4" />
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Milestone Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFilter}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gold-200/30 dark:border-gold-700/30 group-hover:border-gold-400/50">
                  {/* Milestone Header */}
                  <div className={`bg-gradient-to-r ${milestone.color} p-6 text-center`}>
                    <div className={`text-3xl font-bold ${milestone.textColor} mb-2`}>
                      {milestone.year}
                    </div>
                    <div className={`text-sm font-semibold ${milestone.textColor} opacity-80`}>
                      {milestone.material}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-slate-800 dark:text-pearl-200 mb-3">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                      {milestone.description}
                    </p>

                    <p className="text-slate-500 dark:text-slate-400 text-xs mb-4 leading-relaxed">
                      {milestone.preview}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {milestone.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sapphire-500 to-sapphire-600 hover:from-sapphire-600 hover:to-sapphire-700 text-white px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <SafeIcon icon={FiEye} className="w-4 h-4" />
                      See Sample Tribute
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Find Your Perfect Milestone
            <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MilestonePreviews;