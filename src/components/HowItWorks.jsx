import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiUpload, FiEdit, FiShare2, FiArrowRight } = FiIcons;

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: FiCalendar,
      title: "Choose Your Anniversary Year",
      description: "Select your milestone anniversary to unlock the perfect theme, design, and storytelling approach for your unique journey.",
      details: "From paper to diamond, each year has its own beautiful design language"
    },
    {
      number: "02",
      icon: FiUpload,
      title: "Submit Your Story, Photos, Messages",
      description: "Share your precious memories, favorite photos, and heartfelt messages through our simple, guided submission process.",
      details: "Upload photos, write stories, record voice messages - we make it easy"
    },
    {
      number: "03",
      icon: FiEdit,
      title: "We Build & Personalize Your Tribute",
      description: "Our expert designers craft your custom tribute website, weaving your story into a beautiful, emotional digital experience.",
      details: "Professional design, custom layouts, and thoughtful storytelling"
    },
    {
      number: "04",
      icon: FiShare2,
      title: "You Approve, Share, & Cherish Forever",
      description: "Review your tribute, request any changes, then share with loved ones or keep it private - it's yours to treasure forever.",
      details: "Full control over privacy, sharing, and ongoing access"
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
            How It
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-sapphire-600 dark:from-gold-400 dark:to-sapphire-400">
              Works
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Creating your anniversary tribute is simple, personal, and designed to capture the essence of your unique love story.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-0.5 h-3/4 bg-gradient-to-b from-gold-400 to-sapphire-500 opacity-30"></div>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Step Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                    <span className="text-5xl font-bold text-gold-500 dark:text-gold-400">
                      {step.number}
                    </span>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gold-400 to-sapphire-500 flex items-center justify-center">
                      <SafeIcon icon={step.icon} className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-serif text-slate-800 dark:text-pearl-100 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                    {step.details}
                  </p>
                </div>

                {/* Step Visual */}
                <div className="flex-1 max-w-md">
                  <motion.div
                    className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gold-200/30 dark:border-gold-700/30"
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-video bg-gradient-to-br from-gold-50 to-sapphire-50 dark:from-slate-700 dark:to-slate-600 rounded-xl flex items-center justify-center">
                      <SafeIcon icon={step.icon} className="w-16 h-16 text-gold-500 dark:text-gold-400 opacity-60" />
                    </div>
                    
                    <div className="mt-4 text-center">
                      <div className="text-lg font-semibold text-slate-800 dark:text-pearl-200 mb-2">
                        Step {step.number}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        {step.title}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
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
            Start Your Tribute Journey
            <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;