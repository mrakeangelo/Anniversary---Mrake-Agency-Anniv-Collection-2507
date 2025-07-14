import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlus, FiMinus, FiHelpCircle } = FiIcons;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can this be a surprise gift?",
      answer: "Absolutely! Many of our clients create tributes as surprise gifts for their partners. We offer a 'Surprise Mode' where you can gather photos and stories discreetly, and we'll help you coordinate the perfect reveal moment. We can even help you involve family and friends in the surprise."
    },
    {
      question: "Can I build this even if it's a late celebration?",
      answer: "Of course! There's no expiration date on celebrating love. Whether your anniversary was last month or last year, we can help you create a beautiful tribute that honors your milestone. Many couples find that creating a tribute after the fact gives them more time to reflect and gather meaningful content."
    },
    {
      question: "What if I want to include past anniversaries too?",
      answer: "Our Legacy Vault package includes multi-anniversary timeline features that let you celebrate multiple milestones in one comprehensive tribute. You can create a master timeline that honors your 5th, 10th, 15th anniversaries and beyond - it becomes a living document of your love story."
    },
    {
      question: "Is this private or public?",
      answer: "You have complete control over privacy settings. Your tribute can be completely private (just for you two), shared with family and friends via private link, or made public if you choose. We also offer password protection and family-only access options."
    },
    {
      question: "How long does it take to create?",
      answer: "Most tributes are completed within 7-14 business days after you submit your content. Rush options are available for upcoming celebrations, and we'll work with your timeline to ensure everything is perfect for your special day."
    },
    {
      question: "What if I don't have many photos?",
      answer: "Don't worry! We can work with whatever you have. Sometimes the most powerful tributes focus more on the story and words than photos. We can also help you recreate moments through illustrations, timelines, and other creative elements that don't require photos."
    },
    {
      question: "Can I make changes after it's completed?",
      answer: "Yes! All packages include one round of revisions, and we offer ongoing editing services if you want to add new memories or update content over time. Your tribute can grow with your relationship."
    },
    {
      question: "Do you offer printed versions?",
      answer: "Our Signature and Legacy Vault packages include PDF export options, and our Legacy Vault offers premium book printing services. You can have a beautiful physical keepsake alongside your digital tribute."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-ivory-50 to-pearl-100 dark:from-slate-800 dark:to-slate-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Frequently Asked
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-sapphire-600 dark:from-gold-400 dark:to-sapphire-400">
              Questions
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Everything you need to know about creating your anniversary tribute.
          </motion.p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gold-200/30 dark:border-gold-700/30 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gold-50/50 dark:hover:bg-slate-700/50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: 'rgba(251, 191, 36, 0.05)' }}
              >
                <span className="text-lg font-semibold text-slate-800 dark:text-pearl-200 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <SafeIcon 
                    icon={openIndex === index ? FiMinus : FiPlus} 
                    className="w-6 h-6 text-gold-600 dark:text-gold-400" 
                  />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-2">
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Help Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gold-200/30 dark:border-gold-700/30">
            <SafeIcon icon={FiHelpCircle} className="w-12 h-12 text-gold-600 dark:text-gold-400 mx-auto mb-4" />
            <h3 className="text-2xl font-serif text-slate-800 dark:text-pearl-100 mb-4">
              Still have questions?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              We're here to help you create the perfect anniversary tribute. Get in touch with our team for personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.button>
              <motion.button
                className="border-2 border-sapphire-500 text-sapphire-600 dark:text-sapphire-400 hover:bg-sapphire-500 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Email Support
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;