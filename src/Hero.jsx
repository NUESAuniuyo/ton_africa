// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-blue-800/50 backdrop-blur-sm rounded-full text-sm font-medium mb-4 border border-blue-700">
              Empowering Africa's Blockchain Future
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Building the Future of <span className="text-yellow-400">Web3</span> in Africa
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              TON Africa is a community-driven initiative fostering blockchain education, development, and adoption across the African continent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#get-involved"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Involved
                <FiArrowRight className="ml-2" />
              </a>
              <a
                href="#learn-more"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { number: '1000+', label: 'Community Members' },
            { number: '50+', label: 'Projects Built' },
            { number: '10+', label: 'African Countries' },
            { number: '20+', label: 'Workshops Held' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/5 text-center"
            >
              <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
              <div className="text-sm text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated elements */}
      <div className="absolute -bottom-1 left-0 w-full">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 50L60 42C120 34 240 18 360 21C480 25 600 50 720 58C840 66 960 58 1080 45C1200 33 1320 17 1380 8L1440 0V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="#F7FAFC" fillOpacity="0.8"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;