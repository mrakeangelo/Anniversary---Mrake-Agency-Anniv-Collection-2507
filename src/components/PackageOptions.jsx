import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiStar, FiCrown, FiCheck, FiArrowRight } = FiIcons;

const PackageOptions = () => {
  const packages = [
    {
      name: "Essentials Tribute",
      price: "$99",
      icon: FiHeart,
      color: "from-slate-400 to-slate-600",
      popular: false,
      description: "Perfect for intimate celebrations and personal keepsakes",
      features: [
        "Custom anniversary website",
        "Love timeline with key moments",
        "Photo gallery with captions",
        "Partner letters section",
        "Mobile-optimized design",
        "1 year hosting included",
        "Basic customization options"
      ]
    },
    {
      name: "Signature Tribute",
      price: "$199",
      icon: FiStar,
      color: "from-gold-400 to-gold-600",
      popular: true,
      description: "Most popular choice for meaningful anniversary gifts",
      features: [
        "Everything in Essentials",
        "Voice message integration",
        "Printable PDF keepsake",
        "Advanced photo galleries",
        "Custom domain option",
        "Video embedding support",
        "2 years hosting included",
        "Priority design support",
        "Milestone archive feature"
      ]
    },
    {
      name: "Legacy Vault",
      price: "$399",
      icon: FiCrown,
      color: "from-sapphire-400 to-sapphire-600",
      popular: false,
      description: "Ultimate tribute experience for creating lasting legacies",
      features: [
        "Everything in Signature",
        "Premium book printing option",
        "Family collaboration tools",
        "Future letter scheduling",
        "Advanced privacy controls",
        "Custom celebration setup",
        "Lifetime hosting included",
        "Dedicated design consultant",
        "Multi-anniversary timeline",
        "Legacy sharing features"
      ]
    }
  ];

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
            Package Options
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-sapphire-600 dark:from-gold-400 dark:to-sapphire-400">
              & Pricing
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Choose the perfect tribute package for your anniversary celebration. Each option is designed to honor your love story beautifully.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative group ${pkg.popular ? 'md:-mt-4' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <motion.div
                className={`bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  pkg.popular 
                    ? 'border-gold-400/50 dark:border-gold-500/50' 
                    : 'border-gold-200/30 dark:border-gold-700/30'
                } group-hover:border-gold-400/50 h-full`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Package Header */}
                <div className="text-center mb-8">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center mx-auto mb-4`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SafeIcon icon={pkg.icon} className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-serif text-slate-800 dark:text-pearl-100 mb-2">
                    {pkg.name}
                  </h3>
                  
                  <div className="text-4xl font-bold text-slate-800 dark:text-pearl-100 mb-2">
                    {pkg.price}
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {pkg.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-gold-400 to-sapphire-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <SafeIcon icon={FiCheck} className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gradient-to-r from-sapphire-500 to-sapphire-600 hover:from-sapphire-600 hover:to-sapphire-700 text-white shadow-lg hover:shadow-xl'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Choose {pkg.name}
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gold-200/30 dark:border-gold-700/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif text-slate-800 dark:text-pearl-100 mb-4">
              Not sure which package is right for you?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Schedule a free 15-minute consultation to discuss your anniversary celebration and find the perfect tribute package.
            </p>
            <motion.button
              className="bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Free Consultation
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PackageOptions;