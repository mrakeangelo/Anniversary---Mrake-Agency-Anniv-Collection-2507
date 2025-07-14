import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiStar, FiQuote } = FiIcons;

const Testimonials = () => {
  const testimonials = [
    {
      quote: "My husband cried when he read it. In 25 years of marriage, I've never seen him so moved by a gift. This tribute captured our journey in a way that brought back every beautiful memory.",
      name: "Sarah Chen",
      anniversary: "25th Anniversary",
      location: "San Francisco, CA",
      rating: 5
    },
    {
      quote: "I showed it at our anniversary dinner — everyone was in awe. Our children, our friends, everyone was moved to tears. It's become the centerpiece of our celebration.",
      name: "Michael & Jennifer Torres",
      anniversary: "30th Anniversary",
      location: "Austin, TX",
      rating: 5
    },
    {
      quote: "This should be the new tradition for every couple. We're already planning to create one for our children when they get married. It's so much more meaningful than any physical gift.",
      name: "Robert & Margaret Williams",
      anniversary: "45th Anniversary",
      location: "Portland, OR",
      rating: 5
    },
    {
      quote: "We were skeptical at first, but the final result exceeded every expectation. Our love story had never been told so beautifully. We share it with pride.",
      name: "David & Lisa Park",
      anniversary: "15th Anniversary",
      location: "Seattle, WA",
      rating: 5
    },
    {
      quote: "The surprise factor was incredible. My wife had no idea I was working on this for months. When I revealed it at our anniversary party, there wasn't a dry eye in the room.",
      name: "James Rodriguez",
      anniversary: "20th Anniversary",
      location: "Denver, CO",
      rating: 5
    },
    {
      quote: "As a gift from our children, this tribute meant everything to us. They captured 50 years of our love in the most beautiful way possible. It's our most treasured possession.",
      name: "Eleanor & Frank Davis",
      anniversary: "50th Anniversary",
      location: "Charleston, SC",
      rating: 5
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
            Love Stories
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-sapphire-600 dark:from-gold-400 dark:to-sapphire-400">
              Beautifully Told
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Hear from couples who've transformed their anniversary celebrations with our tribute websites.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gold-200/30 dark:border-gold-700/30 group-hover:border-gold-400/50 h-full flex flex-col"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Quote Icon */}
                <div className="flex items-center justify-center mb-6">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-gold-400 to-sapphire-500 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SafeIcon icon={FiQuote} className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-gold-500 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-700 dark:text-slate-300 text-center mb-6 leading-relaxed flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="text-center pt-4 border-t border-gold-200/30 dark:border-gold-700/30">
                  <div className="flex items-center justify-center mb-2">
                    <SafeIcon icon={FiHeart} className="w-4 h-4 text-gold-500 mr-2" />
                    <p className="font-semibold text-slate-800 dark:text-pearl-200">
                      {testimonial.name}
                    </p>
                  </div>
                  <p className="text-sm text-gold-600 dark:text-gold-400 font-medium">
                    {testimonial.anniversary}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {testimonial.location}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-600 dark:text-gold-400 mb-2">500+</div>
              <div className="text-slate-600 dark:text-slate-300">Love Stories Preserved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sapphire-600 dark:text-sapphire-400 mb-2">4.9</div>
              <div className="text-slate-600 dark:text-slate-300">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-600 dark:text-gold-400 mb-2">98%</div>
              <div className="text-slate-600 dark:text-slate-300">Would Recommend</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;