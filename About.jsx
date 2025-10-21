// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiUsers, FiGlobe } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About TON Africa
            </h2>
            <div className="w-24 h-1 bg-blue-600 mb-8"></div>
            <p className="text-lg text-gray-600 mb-8">
              TON Africa is a community of blockchain enthusiasts, developers, and entrepreneurs dedicated to building the future of Web3 in Africa. We're committed to fostering innovation, education, and adoption of blockchain technology across the continent.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <FiUsers className="w-6 h-6 text-blue-600" />
                </div>
                <span className="font-medium">5000+ Members</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <FiGlobe className="w-6 h-6 text-blue-600" />
                </div>
                <span className="font-medium">10+ Countries</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative h-96 lg:h-[500px] order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gray-100 rounded-2xl overflow-hidden">
              <img 
                src="/images/ton1.jpg" 
                alt="TON Africa Community" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error('Error loading image:', e.target.src);
                  e.target.onerror = null;
                  e.target.src = '/images/ton2.jpg'; // Fallback image
                  e.target.alt = 'TON Africa Community Fallback';
                }}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-2xl z-10 hidden md:block"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-2xl z-10 hidden md:block"></div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: <FiTarget className="w-8 h-8 text-blue-600" />,
              title: "Our Mission",
              description: "To educate, empower, and connect the next generation of African blockchain innovators."
            },
            {
              icon: <FiUsers className="w-8 h-8 text-blue-600" />,
              title: "Our Community",
              description: "A diverse network of developers, designers, and entrepreneurs building the future of Web3."
            },
            {
              icon: <FiGlobe className="w-8 h-8 text-blue-600" />,
              title: "Our Vision",
              description: "To position Africa as a global leader in blockchain innovation and adoption."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section> 
  );
};

export default About;